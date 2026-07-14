import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const site = 'https://chaput.app';
const iosUrl = 'https://apps.apple.com/us/app/chaput/id6777180189';
const androidUrl = 'https://play.google.com/store/apps/details?id=com.goktigin.chaput';
const excludedRoots = new Set(['.git', '.tmp_pdf_pages', 'assets', 'cloudflare', 'legal', 'legal-src', 'netlify', 'privacy', 'scripts']);
const failures = [];

function fail(scope, message) {
  failures.push(`${scope}: ${message}`);
}

function decode(value) {
  return String(value)
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(value) {
  return decode(String(value).replace(/<[^>]*>/g, ' '));
}

function matchOne(html, pattern) {
  const match = html.match(pattern);
  return match ? decode(match[1]) : '';
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.well-known') continue;
    if (directory === root && excludedRoots.has(entry.name)) continue;
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else if (entry.isFile() && entry.name === 'index.html') files.push(absolute);
  }
  return files;
}

function canonicalToLocal(canonical) {
  const url = new URL(canonical);
  if (url.origin !== site) return null;
  const pathname = decodeURIComponent(url.pathname);
  if (pathname === '/') return join(root, 'index.html');
  if (extname(pathname)) return join(root, pathname.replace(/^\//, ''));
  return join(root, pathname.replace(/^\//, ''), 'index.html');
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (_) {
    return false;
  }
}

function schemaNodes(payload) {
  if (Array.isArray(payload)) return payload.flatMap(schemaNodes);
  if (!payload || typeof payload !== 'object') return [];
  const graph = Array.isArray(payload['@graph']) ? payload['@graph'] : [];
  return [payload, ...graph.flatMap(schemaNodes)];
}

function localPathForHref(pageFile, href) {
  if (!href || href.startsWith('#') || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  const withoutHash = href.split('#')[0].split('?')[0];
  if (!withoutHash) return null;
  if (withoutHash.startsWith('/')) {
    if (withoutHash === '/') return join(root, 'index.html');
    if (extname(withoutHash)) return join(root, withoutHash.slice(1));
    return join(root, withoutHash.slice(1), 'index.html');
  }
  const absolute = resolve(dirname(pageFile), withoutHash);
  return extname(absolute) ? absolute : join(absolute, 'index.html');
}

const pageFiles = [join(root, 'index.html'), ...await walk(root).then((files) => files.filter((file) => file !== join(root, 'index.html')))];
const pages = [];
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();

for (const file of pageFiles) {
  const html = await readFile(file, 'utf8');
  const scope = relative(root, file) || 'index.html';
  const generated = html.includes('/assets/content.css');
  if (file !== join(root, 'index.html') && !generated) continue;

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) fail(scope, `expected exactly one H1, found ${h1Count}`);

  const title = matchOne(html, /<title>([\s\S]*?)<\/title>/i);
  const description = matchOne(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const canonical = matchOne(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!title) fail(scope, 'missing title');
  if (!description) fail(scope, 'missing meta description');
  if (!canonical) fail(scope, 'missing canonical');
  if (/noindex/i.test(html)) fail(scope, 'contains noindex');

  for (const [map, value, label] of [[titles, title, 'title'], [descriptions, description, 'description'], [canonicals, canonical, 'canonical']]) {
    if (!value) continue;
    if (map.has(value)) fail(scope, `duplicate ${label} also used by ${map.get(value)}`);
    else map.set(value, scope);
  }

  const schemas = [];
  for (const match of html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      schemas.push(JSON.parse(match[1]));
    } catch (error) {
      fail(scope, `invalid JSON-LD: ${error.message}`);
    }
  }
  if (!schemas.length) fail(scope, 'missing JSON-LD');

  if (generated) {
    const alternates = [...html.matchAll(/<link\s+rel=["']alternate["']\s+hreflang=["']([^"']+)["']\s+href=["']([^"']+)["']/gi)];
    const alternateLanguages = new Set(alternates.map((match) => match[1]));
    for (const language of ['en', 'tr', 'x-default']) {
      if (!alternateLanguages.has(language)) fail(scope, `missing ${language} hreflang`);
    }

    for (const image of html.matchAll(/<img\b([^>]*)>/gi)) {
      const attributes = image[1];
      const src = matchOne(attributes, /\bsrc=["']([^"']+)["']/i);
      const altMatch = attributes.match(/\balt=["']([^"']*)["']/i);
      if (!altMatch) fail(scope, `image ${src || '(unknown)'} has no alt attribute`);
      else if (!decode(altMatch[1]) && !src.endsWith('/appicon.png')) fail(scope, `image ${src} has empty alt text`);
    }

    const nodes = schemas.flatMap(schemaNodes);
    const faqSchema = nodes.find((node) => node['@type'] === 'FAQPage');
    if (!faqSchema) fail(scope, 'missing FAQPage schema');
    else {
      const visibleFaqs = [...html.matchAll(/<details\s+class=["']faq-item["'][^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>/gi)]
        .map((match) => [stripTags(match[1]), stripTags(match[2])]);
      const schemaFaqs = (faqSchema.mainEntity || []).map((item) => [decode(item.name), decode(item.acceptedAnswer?.text || '')]);
      if (JSON.stringify(visibleFaqs) !== JSON.stringify(schemaFaqs)) fail(scope, 'visible FAQ content does not match FAQ schema');
    }
  }

  for (const match of html.matchAll(/\bhref=["']([^"']+)["']/gi)) {
    const local = localPathForHref(file, decode(match[1]));
    if (local && !await exists(local)) fail(scope, `broken internal link ${match[1]}`);
  }

  const normalizedText = stripTags(html).toLowerCase();
  const bannedClaims = ['millions of users', 'thousands of users', 'free forever'];
  for (const claim of bannedClaims) {
    if (normalizedText.includes(claim)) fail(scope, `contains unsupported claim "${claim}"`);
  }
  for (const claim of ['guaranteed match', 'guaranteed relationship']) {
    var claimIndex = normalizedText.indexOf(claim);
    while (claimIndex !== -1) {
      const context = normalizedText.slice(Math.max(0, claimIndex - 36), claimIndex);
      if (!/(?:no|not|never|does not|without)\s+[^.]{0,24}$/.test(context)) {
        fail(scope, `contains unsupported claim "${claim}"`);
      }
      claimIndex = normalizedText.indexOf(claim, claimIndex + claim.length);
    }
  }
  if (canonical.includes('/goth/')) {
    for (const phrase of ['hot goth girls', 'goth chicks', 'goth babes', 'guaranteed goth date']) {
      if (normalizedText.includes(phrase)) fail(scope, `contains unsafe community phrase "${phrase}"`);
    }
  }

  pages.push({ file, scope, html, canonical, generated });
}

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
for (const page of pages) {
  if (!sitemap.includes(`<loc>${page.canonical}</loc>`)) fail(page.scope, 'canonical is missing from sitemap.xml');
}
for (const prefix of ['/me/', '/u/', '/c/', '/post/', '/profile/', '/admin/', '/api/', '/auth/', '/account/']) {
  if (sitemap.includes(`<loc>${site}${prefix}`)) fail('sitemap.xml', `private or transactional route is indexed: ${prefix}`);
}

const robots = await readFile(join(root, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${site}/sitemap.xml`)) fail('robots.txt', 'missing absolute sitemap declaration');
if (/User-agent:\s*OAI-SearchBot[\s\S]*?Disallow:\s*\//i.test(robots)) fail('robots.txt', 'OAI-SearchBot is blocked from public pages');

const llms = await readFile(join(root, 'llms.txt'), 'utf8');
for (const match of llms.matchAll(/https:\/\/chaput\.app\/[^\s)]+/g)) {
  const url = match[0].replace(/[.,;:]$/, '');
  const local = canonicalToLocal(url);
  if (local && !await exists(local)) fail('llms.txt', `broken official link ${url}`);
}

const rootHtml = await readFile(join(root, 'index.html'), 'utf8');
for (const literal of [iosUrl, androidUrl, 'com.goktigin.chaput', '/^\\/(me|u|c|post|profile)\\//']) {
  if (!rootHtml.includes(literal)) fail('index.html', `critical store or deep-link literal changed: ${literal}`);
}
for (const lang of ['en', 'tr']) {
  for (let index = 1; index <= 5; index += 1) {
    const screenshot = join(root, 'assets', 'images', 'screenshots', `${lang}_${index}.png`);
    if (!await exists(screenshot)) fail('assets/images/screenshots', `missing ${lang}_${index}.png`);
  }
}

if (failures.length) {
  console.error(`SEO smoke test failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO smoke test passed for ${pages.length} public pages (${pages.filter((page) => page.generated).length} generated localized pages).`);

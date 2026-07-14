import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = join(root, 'sitemap.xml');
const lastmod = '2026-07-14';
const ignoredRoots = new Set(['assets', 'cloudflare', 'legal', 'legal-src', 'privacy', 'scripts', '.git']);

async function collectHtml(dir, found = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredRoots.has(entry.name) && dir === root) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await collectHtml(path, found);
    if (entry.isFile() && entry.name === 'index.html') found.push(path);
  }
  return found;
}

function urlBlock(url, priority = '0.7') {
  return `<url>\n<loc>${url}</loc>\n<lastmod>${lastmod}</lastmod>\n<changefreq>monthly</changefreq>\n<priority>${priority}</priority>\n</url>`;
}

const previous = await readFile(sitemapPath, 'utf8');
const legalBlocks = [...previous.matchAll(/<url>\s*<loc>https:\/\/chaput\.app\/legal\/[\s\S]*?<\/url>/g)].map((match) => match[0]);
const files = await collectHtml(root);
const urls = new Set();

for (const file of files) {
  const html = await readFile(file, 'utf8');
  if (!html.includes('/assets/content.css')) continue;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  if (canonical?.startsWith('https://chaput.app/')) urls.add(canonical);
}

const contentBlocks = [...urls].sort().map((url) => urlBlock(url, /\/(guides|goth|use-cases)\/$/.test(url) ? '0.8' : '0.7'));
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlock('https://chaput.app/', '1.0')}
${contentBlocks.join('\n')}
${legalBlocks.join('\n')}
</urlset>
`;

await writeFile(sitemapPath, xml);
console.log(`Wrote sitemap.xml with ${1 + contentBlocks.length + legalBlocks.length} URLs (${contentBlocks.length} localized content pages).`);

import fs from "node:fs/promises";
import path from "node:path";
import { docs, site } from "../legal-src/documents.mjs";

const root = process.cwd();
const legalRoot = path.join(root, "legal");
const ogImage = `${site.domain}/assets/images/large-logo.png`;
const publishedAt = "2026-05-20";

function hrefFor(lang, slug) {
  return `/legal/${lang}/${slug}/`;
}

function absoluteFor(lang, slug) {
  return `${site.domain}${hrefFor(lang, slug)}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function trimMetaDescription(value, maxLength = 165) {
  const normalized = normalizeWhitespace(value);
  if (normalized.length <= maxLength) return normalized;
  const truncated = normalized.slice(0, maxLength - 1);
  const lastBoundary = truncated.lastIndexOf(" ");
  const safeCutoff = lastBoundary > 110 ? lastBoundary : truncated.length;
  return `${truncated.slice(0, safeCutoff).trim()}…`;
}

function footerLinks(lang) {
  if (lang === "tr") {
    return [
      { href: "/legal/", label: "Legal" },
      { href: "/legal/tr/", label: "Tüm Belgeler" },
      { href: hrefFor("tr", "privacy"), label: "Gizlilik Politikası" },
      { href: hrefFor("tr", "terms"), label: "Kullanıcı Sözleşmesi" },
      { href: hrefFor("tr", "kvkk"), label: "KVKK" },
    ];
  }

  return [
    { href: "/legal/", label: "Legal" },
    { href: "/legal/en/", label: "All Documents" },
    { href: hrefFor("en", "privacy"), label: "Privacy Policy" },
    { href: hrefFor("en", "terms"), label: "Terms" },
    { href: hrefFor("en", "kvkk"), label: "KVKK Notice" },
  ];
}

function faviconMarkup() {
  return `
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">`;
}

function buildSeoTitle(lang, title) {
  if (title.startsWith(site.brand)) return title;
  if (lang === "tr") return `${site.brand} ${title}`;
  return `${site.brand} ${title}`;
}

function buildSeoDescription(lang, title, description) {
  const prefix = title.startsWith(site.brand) ? `${title}.` : `${site.brand} ${title}.`;
  return trimMetaDescription(`${prefix} ${description}`);
}

function webPageJsonLd({ lang, title, description, canonical, type = "WebPage" }) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    headline: title,
    description,
    url: canonical,
    inLanguage: lang === "tr" ? "tr-TR" : "en-US",
    datePublished: publishedAt,
    dateModified: publishedAt,
    publisher: {
      "@type": "Organization",
      name: site.brand,
      url: site.domain,
      logo: {
        "@type": "ImageObject",
        url: ogImage,
      },
    },
  });
}

function pageShell({
  lang,
  title,
  description,
  summary,
  canonical,
  alternate,
  breadcrumbs,
  content,
  indexHref,
}) {
  const dates = lang === "tr" ? site.trDates : site.enDates;
  const labels =
    lang === "tr"
      ? {
          home: "Ana Sayfa",
          legal: "Legal",
          docs: "Belge Dizini",
          effective: "Yürürlük",
          updated: "Güncelleme",
          switch: "English",
          footerCopy: `© 2026 ${site.brand}.`,
        }
      : {
          home: "Home",
          legal: "Legal",
          docs: "Document Index",
          effective: "Effective",
          updated: "Updated",
          switch: "Türkçe",
          footerCopy: `© 2026 ${site.brand}.`,
        };
  const seoTitle = buildSeoTitle(lang, title);
  const seoDescription = buildSeoDescription(lang, title, description);
  const locale = lang === "tr" ? "tr_TR" : "en_US";
  const altLocale = lang === "tr" ? "en_US" : "tr_TR";

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${escapeHtml(seoTitle)}</title>
  <meta name="description" content="${escapeHtml(seoDescription)}">
  <meta name="author" content="${site.brand}">
  <meta name="publisher" content="${site.brand}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#efeeff">
  <meta name="application-name" content="${site.brand}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="${lang}" href="${canonical}">
  <link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}">
  <link rel="alternate" hreflang="x-default" href="${site.domain}/legal/">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="${locale}">
  <meta property="og:locale:alternate" content="${altLocale}">
  <meta property="og:title" content="${escapeHtml(seoTitle)}">
  <meta property="og:description" content="${escapeHtml(seoDescription)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="${site.brand}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:alt" content="${site.brand} logo">
  <meta property="article:published_time" content="${publishedAt}">
  <meta property="article:modified_time" content="${publishedAt}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(seoTitle)}">
  <meta name="twitter:description" content="${escapeHtml(seoDescription)}">
  <meta name="twitter:image" content="${ogImage}">
  ${faviconMarkup()}
  <script type="application/ld+json">${webPageJsonLd({
    lang,
    title,
    description: seoDescription,
    canonical,
    type: "Article",
  })}</script>
  <link rel="stylesheet" href="/assets/app.css">
  <link rel="stylesheet" href="/assets/legal.css">
</head>
<body class="page--legal">
  <main class="legal-shell">
    <div class="container legal-container">
      <nav class="legal-breadcrumbs" aria-label="Breadcrumb">
        <a href="/">${labels.home}</a>
        <span>/</span>
        <a href="/legal/">${labels.legal}</a>
        <span>/</span>
        <a href="${indexHref}">${labels.docs}</a>
        <span>/</span>
        <span>${escapeHtml(breadcrumbs)}</span>
      </nav>
      <article class="legal-article">
        <header class="legal-hero">
          <div class="legal-hero__meta">
            <span>${labels.effective}: ${dates.effective}</span>
            <span>${labels.updated}: ${dates.updated}</span>
          </div>
          <h1 class="legal-title">${escapeHtml(title)}</h1>
          <p class="legal-summary">${escapeHtml(summary)}</p>
          <div class="legal-switcher">
            <a href="${alternate.href}" hreflang="${alternate.lang}">${labels.switch}</a>
          </div>
        </header>
        <div class="legal-content">
          ${content}
        </div>
      </article>
    </div>
  </main>
  <footer class="footer legal-footer">
    <div class="container">
      <div class="footer__container">
        <p class="footer__love">${labels.footerCopy}</p>
        <ul class="footer__links">
          ${footerLinks(lang)
            .map(
              (link) =>
                `<li class="footer__link"><a href="${link.href}">${escapeHtml(link.label)}</a></li>`,
            )
            .join("")}
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

function listPage(lang) {
  const isTr = lang === "tr";
  const title = isTr ? "Chaput Hukuki Belgeler" : "Chaput Legal Documents";
  const description = isTr
    ? "Chaput kullanıcı sözleşmesi, gizlilik politikası, KVKK aydınlatma metni, moderasyon, abonelik ve hesap silme belgelerinin dizini."
    : "Index of Chaput legal pages including Terms of Service, Privacy Policy, KVKK notice, moderation, subscriptions, and account deletion policies.";
  const locale = isTr ? "tr_TR" : "en_US";
  const altLocale = isTr ? "en_US" : "tr_TR";
  const canonical = `${site.domain}/legal/${lang}/`;
  const seoTitle = buildSeoTitle(lang, title);
  const seoDescription = trimMetaDescription(description);
  const cards = docs
    .map((doc) => {
      const entry = doc[lang];
      return `<li class="legal-card">
        <a class="legal-card__link" href="${hrefFor(lang, doc.slug)}">
          <h2 class="legal-card__title">${escapeHtml(entry.title)}</h2>
          <p class="legal-card__text">${escapeHtml(entry.description)}</p>
        </a>
      </li>`;
    })
    .join("");

  const switchHref = isTr ? "/legal/en/" : "/legal/tr/";
  const switchLabel = isTr ? "English" : "Türkçe";

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${escapeHtml(seoTitle)}</title>
  <meta name="description" content="${escapeHtml(seoDescription)}">
  <meta name="author" content="${site.brand}">
  <meta name="publisher" content="${site.brand}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#efeeff">
  <meta name="application-name" content="${site.brand}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="${lang}" href="${canonical}">
  <link rel="alternate" hreflang="${isTr ? "en" : "tr"}" href="${site.domain}${switchHref}">
  <link rel="alternate" hreflang="x-default" href="${site.domain}/legal/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${locale}">
  <meta property="og:locale:alternate" content="${altLocale}">
  <meta property="og:title" content="${escapeHtml(seoTitle)}">
  <meta property="og:description" content="${escapeHtml(seoDescription)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="${site.brand}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:alt" content="${site.brand} logo">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(seoTitle)}">
  <meta name="twitter:description" content="${escapeHtml(seoDescription)}">
  <meta name="twitter:image" content="${ogImage}">
  ${faviconMarkup()}
  <script type="application/ld+json">${webPageJsonLd({
    lang,
    title: seoTitle,
    description: seoDescription,
    canonical,
    type: "CollectionPage",
  })}</script>
  <link rel="stylesheet" href="/assets/app.css">
  <link rel="stylesheet" href="/assets/legal.css">
</head>
<body class="page--legal">
  <main class="legal-shell">
    <div class="container legal-container">
      <nav class="legal-breadcrumbs" aria-label="Breadcrumb">
        <a href="/">${isTr ? "Ana Sayfa" : "Home"}</a>
        <span>/</span>
        <a href="/legal/">Legal</a>
        <span>/</span>
        <span>${title}</span>
      </nav>
      <section class="legal-article">
        <header class="legal-hero">
          <h1 class="legal-title">${title}</h1>
          <p class="legal-summary">${escapeHtml(description)}</p>
          <div class="legal-switcher">
            <a href="${switchHref}" hreflang="${isTr ? "en" : "tr"}">${switchLabel}</a>
          </div>
        </header>
        <ul class="legal-card-grid">
          ${cards}
        </ul>
      </section>
    </div>
  </main>
  <footer class="footer legal-footer">
    <div class="container">
      <div class="footer__container">
        <p class="footer__love">© 2026 ${site.brand}.</p>
        <ul class="footer__links">
          ${footerLinks(lang)
            .map(
              (link) =>
                `<li class="footer__link"><a href="${link.href}">${escapeHtml(link.label)}</a></li>`,
            )
            .join("")}
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

function hubPage() {
  const title = "Chaput Legal Documents";
  const description =
    "Official Chaput legal pages in Turkish and English, including Privacy Policy, KVKK notice, Terms of Service, moderation, subscriptions, and deletion policies.";
  const seoDescription = trimMetaDescription(description);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(seoDescription)}">
  <meta name="author" content="${site.brand}">
  <meta name="publisher" content="${site.brand}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#efeeff">
  <meta name="application-name" content="${site.brand}">
  <link rel="canonical" href="${site.domain}/legal/">
  <link rel="alternate" hreflang="tr" href="${site.domain}/legal/tr/">
  <link rel="alternate" hreflang="en" href="${site.domain}/legal/en/">
  <link rel="alternate" hreflang="x-default" href="${site.domain}/legal/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="tr_TR">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(seoDescription)}">
  <meta property="og:url" content="${site.domain}/legal/">
  <meta property="og:site_name" content="${site.brand}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:alt" content="${site.brand} logo">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(seoDescription)}">
  <meta name="twitter:image" content="${ogImage}">
  ${faviconMarkup()}
  <script type="application/ld+json">${webPageJsonLd({
    lang: "en",
    title,
    description: seoDescription,
    canonical: `${site.domain}/legal/`,
    type: "CollectionPage",
  })}</script>
  <link rel="stylesheet" href="/assets/app.css">
  <link rel="stylesheet" href="/assets/legal.css">
</head>
<body class="page--legal">
  <main class="legal-shell">
    <div class="container legal-container">
      <section class="legal-article legal-article--hub">
        <header class="legal-hero">
          <h1 class="legal-title">Legal</h1>
          <p class="legal-summary">Published legal pages for Chaput are available in Turkish and English.</p>
        </header>
        <div class="legal-lang-grid">
          <a class="legal-lang-card" href="/legal/tr/">
            <span class="legal-lang-card__eyebrow">TR</span>
            <h2>Türkçe Belgeler</h2>
            <p>Kullanıcı Sözleşmesi, Gizlilik Politikası, KVKK, satın alma, moderasyon ve diğer metinler.</p>
          </a>
          <a class="legal-lang-card" href="/legal/en/">
            <span class="legal-lang-card__eyebrow">EN</span>
            <h2>English Documents</h2>
            <p>Terms of Service, Privacy Policy, KVKK Notice, purchase, moderation, and other legal pages.</p>
          </a>
        </div>
      </section>
    </div>
  </main>
  <footer class="footer legal-footer">
    <div class="container">
      <div class="footer__container">
        <p class="footer__love">© 2026 ${site.brand}.</p>
        <ul class="footer__links">
          <li class="footer__link"><a href="/legal/tr/">TR</a></li>
          <li class="footer__link"><a href="/legal/en/">EN</a></li>
          <li class="footer__link"><a href="/privacy/">/privacy</a></li>
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

function redirectPage(target) {
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${target}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Gizlilik Politikası | ${site.brand}</title>
  <meta name="description" content="Chaput Gizlilik Politikası sayfasına yönlendiriliyorsunuz.">
  <meta name="robots" content="noindex, follow">
  <meta name="theme-color" content="#efeeff">
  <link rel="canonical" href="${site.domain}${target}">
  ${faviconMarkup()}
  <script>window.location.replace(${JSON.stringify(target)});</script>
</head>
<body>
  <p>Yönlendiriliyor: <a href="${target}">${target}</a></p>
</body>
</html>
`;
}

async function writeFile(relPath, content) {
  const fullPath = path.join(root, relPath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, content, "utf8");
}

async function buildDocs() {
  for (const doc of docs) {
    await writeFile(
      path.join("legal", "tr", doc.slug, "index.html"),
      pageShell({
        lang: "tr",
        title: doc.tr.title,
        description: doc.tr.description,
        summary: doc.tr.summary,
        canonical: absoluteFor("tr", doc.slug),
        alternate: { lang: "en", href: absoluteFor("en", doc.slug) },
        breadcrumbs: doc.tr.title,
        content: doc.tr.blocks.join("\n"),
        indexHref: "/legal/tr/",
      }),
    );

    await writeFile(
      path.join("legal", "en", doc.slug, "index.html"),
      pageShell({
        lang: "en",
        title: doc.en.title,
        description: doc.en.description,
        summary: doc.en.summary,
        canonical: absoluteFor("en", doc.slug),
        alternate: { lang: "tr", href: absoluteFor("tr", doc.slug) },
        breadcrumbs: doc.en.title,
        content: doc.en.blocks.join("\n"),
        indexHref: "/legal/en/",
      }),
    );
  }
}

async function buildIndexes() {
  await writeFile(path.join("legal", "index.html"), hubPage());
  await writeFile(path.join("legal", "tr", "index.html"), listPage("tr"));
  await writeFile(path.join("legal", "en", "index.html"), listPage("en"));
}

async function buildAliasesAndNotes() {
  const privacyTarget = hrefFor("tr", "privacy");
  await writeFile(path.join("privacy", "index.html"), redirectPage(privacyTarget));

  const urls = [
    "# Legal URLs",
    "",
    "## Index",
    "- `/legal/`",
    "- `/legal/tr/`",
    "- `/legal/en/`",
    "",
    "## Turkish",
    ...docs.map((doc) => `- \`${hrefFor("tr", doc.slug)}\` - ${doc.tr.title}`),
    "",
    "## English",
    ...docs.map((doc) => `- \`${hrefFor("en", doc.slug)}\` - ${doc.en.title}`),
    "",
    "## Aliases",
    `- \`/privacy/\` -> \`${privacyTarget}\``,
    "",
    "## Not Published Separately",
    "- Cookie Policy: not generated because no separate cookie usage was detected in the inspected landing page code.",
    "- AI Disclosure: not generated because no AI feature or AI processing flow was detected in the inspected code.",
    "",
  ].join("\n");

  await writeFile("LEGAL_URLS.md", urls);

  const internalNote = [
    "# Internal Legal Note",
    "",
    "These legal pages are working publication drafts generated from code inspection and official policy research.",
    "",
    "This is not legal advice. All documents should be reviewed by a qualified lawyer before publication, store submission, or operational use.",
    "",
    "Before publication:",
    "- Re-check company registry data, MERSIS number, tax number, and address against the latest official records before publishing.",
    "- Confirm whether the company or an individual should be identified as the data controller in the final legal wording for your actual operating model.",
    "- Confirm whether any additional SDKs, analytics tools, or cross-border transfer arrangements exist in production but not in the inspected repositories.",
    "- Confirm whether separate Cookie Policy or AI disclosure is required after any later product change.",
    "",
  ].join("\n");

  await writeFile("LEGAL_INTERNAL_NOTE.md", internalNote);
}

async function buildSitemap() {
  const urls = [
    { loc: `${site.domain}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${site.domain}/legal/`, priority: "0.8", changefreq: "monthly" },
    { loc: `${site.domain}/legal/tr/`, priority: "0.7", changefreq: "monthly" },
    { loc: `${site.domain}/legal/en/`, priority: "0.7", changefreq: "monthly" },
    ...docs.flatMap((doc) => [
      { loc: absoluteFor("tr", doc.slug), priority: "0.6", changefreq: "monthly" },
      { loc: absoluteFor("en", doc.slug), priority: "0.6", changefreq: "monthly" },
    ]),
  ];

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      ({ loc, priority, changefreq }) => `<url>
<loc>${loc}</loc>
<lastmod>${publishedAt}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");

  await writeFile("sitemap.xml", sitemap);
}

await fs.mkdir(legalRoot, { recursive: true });
await buildDocs();
await buildIndexes();
await buildAliasesAndNotes();
await buildSitemap();

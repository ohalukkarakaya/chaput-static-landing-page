import fs from "node:fs/promises";
import path from "node:path";
import { docs, site } from "../legal-src/documents.mjs";

const root = process.cwd();
const legalRoot = path.join(root, "legal");

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

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${escapeHtml(title)} | ${site.brand}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#efeeff">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="${lang}" href="${canonical}">
  <link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}">
  <link rel="alternate" hreflang="x-default" href="${site.domain}/legal/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)} | ${site.brand}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="${site.brand}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeHtml(title)} | ${site.brand}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
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
  const title = isTr ? "Legal Belgeler" : "Legal Documents";
  const description = isTr
    ? "Chaput için yayımlanabilir hukuki belge dizini."
    : "Publishable legal document index for Chaput.";
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
  <title>${title} | ${site.brand}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#efeeff">
  <link rel="canonical" href="${site.domain}/legal/${lang}/">
  <link rel="alternate" hreflang="${lang}" href="${site.domain}/legal/${lang}/">
  <link rel="alternate" hreflang="${isTr ? "en" : "tr"}" href="${site.domain}${switchHref}">
  <link rel="alternate" hreflang="x-default" href="${site.domain}/legal/">
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
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Legal | ${site.brand}</title>
  <meta name="description" content="Legal document hub for Chaput in Turkish and English.">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#efeeff">
  <link rel="canonical" href="${site.domain}/legal/">
  <link rel="alternate" hreflang="tr" href="${site.domain}/legal/tr/">
  <link rel="alternate" hreflang="en" href="${site.domain}/legal/en/">
  <link rel="alternate" hreflang="x-default" href="${site.domain}/legal/">
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
  <title>Yönlendiriliyor | ${site.brand}</title>
  <link rel="canonical" href="${site.domain}${target}">
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
    "- Replace all placeholders such as [ŞİRKET UNVANI], [ADRES], [E-POSTA], [MERSİS], [VERGİ NO], and [VERİ SORUMLUSU].",
    "- Confirm whether any additional SDKs, analytics tools, or cross-border transfer arrangements exist in production but not in the inspected repositories.",
    "- Confirm whether separate Cookie Policy or AI disclosure is required after any later product change.",
    "",
  ].join("\n");

  await writeFile("LEGAL_INTERNAL_NOTE.md", internalNote);
}

await fs.mkdir(legalRoot, { recursive: true });
await buildDocs();
await buildIndexes();
await buildAliasesAndNotes();

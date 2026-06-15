const SITE_ORIGIN = 'https://chaput.app';
const DEFAULT_API_ORIGIN = 'https://api.chaput.app';
const DEFAULT_IMAGE = `${SITE_ORIGIN}/assets/images/large-logo.png`;
const ANDROID_STORE =
  'https://play.google.com/store/apps/details?id=com.goktigin.chaput';
const IOS_STORE = 'https://apps.apple.com/us/search?term=com.goktigin.chaput';
const APPLE_APP_SITE_ASSOCIATION = {
  applinks: {
    apps: [],
    details: [
      {
        appID: '7QYP87CAUN.com.goktigin.chaput',
        paths: ['/me/*', '/u/*', '/c/*', '/post/*', '/*'],
      },
    ],
  },
};
const ASSET_LINKS = [
  {
    relation: ['delegate_permission/common.handle_all_urls'],
    target: {
      namespace: 'android_app',
      package_name: 'com.goktigin.chaput',
      sha256_cert_fingerprints: [
        'C4:EA:67:55:04:A0:0F:FF:6C:6B:93:16:0B:8E:50:51:50:AC:1B:CF:DE:09:18:38:84:6E:A2:C6:FA:3F:48:27',
        '51:9B:51:15:E6:D1:B5:42:49:2C:04:53:A4:26:B0:0D:9B:F1:CC:15:D3:82:48:9B:4A:41:92:4A:2E:74:51:05',
        'A6:41:51:83:4E:5E:76:7C:A7:F9:79:2F:C6:3A:D9:7E:E3:50:74:6C:44:FC:9C:44:B3:4A:37:B3:5E:B3:1B:DE',
      ],
    },
  },
];

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseSharePath(pathname) {
  const parts = pathname
    .split('/')
    .filter(Boolean)
    .map((part) => decodeURIComponent(part));

  if (parts[0] !== 'me' || !parts[1]) return null;
  return {
    username: parts[1],
    threadId: parts[2] || '',
    messageId: parts[3] || '',
  };
}

function fallbackMeta(url) {
  return {
    ok: true,
    kind: 'profile',
    title: 'Chaput profile tree',
    description:
      'Open this Chaput profile tree and discover the conversations tied to it.',
    image_url: DEFAULT_IMAGE,
    image_alt: 'Chaput profile tree',
    canonical_url: `${SITE_ORIGIN}${url.pathname}`,
    noindex: false,
  };
}

async function loadMeta(url, env) {
  const parsed = parseSharePath(url.pathname);
  if (!parsed) return fallbackMeta(url);

  const params = new URLSearchParams({ username: parsed.username });
  if (parsed.threadId) params.set('thread_id', parsed.threadId);
  if (parsed.messageId) params.set('message_id', parsed.messageId);

  const apiOrigin = env.CHAPUT_API_BASE_URL || DEFAULT_API_ORIGIN;
  try {
    const response = await fetch(`${apiOrigin}/share/metadata?${params}`, {
      headers: { Accept: 'application/json' },
      cf: { cacheTtl: 300, cacheEverything: true },
    });
    if (!response.ok) return fallbackMeta(url);

    const data = await response.json();
    if (!data || data.ok !== true) return fallbackMeta(url);

    const merged = {
      ...fallbackMeta(url),
      ...data,
      image_url: data.image_url || DEFAULT_IMAGE,
      canonical_url: data.canonical_url || `${SITE_ORIGIN}${url.pathname}`,
    };
    if (merged.kind === 'profile' && merged.username) {
      const displayName = merged.full_name || `@${merged.username}`;
      merged.title = `${displayName} (@${merged.username}) | Chaput profile`;
      merged.description = 'Open this profile tree on Chaput.';
    }
    return merged;
  } catch (_) {
    return fallbackMeta(url);
  }
}

function renderHtml(meta, requestUrl) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image_url || DEFAULT_IMAGE);
  const imageAlt = escapeHtml(meta.image_alt || 'Chaput');
  const canonical = escapeHtml(meta.canonical_url || `${SITE_ORIGIN}${requestUrl.pathname}`);
  const shareUrl = escapeHtml(requestUrl.href);
  const robots = meta.noindex ? 'noindex, follow' : 'index, follow';
  const pathAndQuery = requestUrl.pathname + requestUrl.search;
  const deepPath = pathAndQuery.replace(/^\//, '');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="#efeeff">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Chaput">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${shareUrl}">
<meta property="og:image" content="${image}">
<meta property="og:image:secure_url" content="${image}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="300">
<meta property="og:image:alt" content="${imageAlt}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
<meta name="twitter:image:alt" content="${imageAlt}">
<link rel="shortcut icon" href="/favicon.ico">
<style>
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px;
  background: #efeeff;
  color: #050505;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
main { width: min(440px, 100%); display: grid; gap: 18px; text-align: center; }
.preview {
  padding: 28px 22px;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 28px;
  background: rgba(255,255,255,.72);
  box-shadow: 0 22px 60px rgba(20,20,20,.10);
  backdrop-filter: blur(18px);
}
img {
  width: 108px;
  height: 108px;
  object-fit: cover;
  border-radius: 34px;
  border: 4px solid #fff;
  box-shadow: 0 12px 28px rgba(0,0,0,.14);
}
h1 { margin: 18px 0 8px; font-size: clamp(28px, 7vw, 38px); line-height: 1.02; letter-spacing: 0; }
p { margin: 0; color: rgba(0,0,0,.62); font-size: 16px; line-height: 1.45; font-weight: 600; }
.actions { display: grid; gap: 10px; }
a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  border-radius: 18px;
  text-decoration: none;
  font-weight: 900;
}
.primary { background: #050505; color: #fff; }
.secondary { background: rgba(255,255,255,.72); color: #050505; border: 1px solid rgba(0,0,0,.08); }
</style>
</head>
<body>
<main>
  <section class="preview">
    <img src="${image}" alt="${imageAlt}">
    <h1>${title}</h1>
    <p>${description}</p>
  </section>
  <nav class="actions">
    <a class="primary" id="open-app" href="${shareUrl}">Open in Chaput</a>
    <a class="secondary" id="store-link" href="${IOS_STORE}">Get Chaput</a>
  </nav>
</main>
<script>
(function(){
  var ua=navigator.userAgent||"";
  var isAndroid=/Android/i.test(ua);
  var cleanPath=${JSON.stringify(deepPath)};
  var androidStore=${JSON.stringify(ANDROID_STORE)};
  var storeLink=document.getElementById("store-link");
  if(storeLink){ storeLink.href=isAndroid?androidStore:${JSON.stringify(IOS_STORE)}; }
  var openLink=document.getElementById("open-app");
  if(isAndroid){
    var intent="intent://chaput.app/"+cleanPath+"#Intent;scheme=https;package=com.goktigin.chaput;S.browser_fallback_url="+encodeURIComponent(androidStore)+";end";
    if(openLink) openLink.href=intent;
    window.setTimeout(function(){ window.location.href=intent; }, 80);
    return;
  }
})();
</script>
</body>
</html>`;
}

function jsonResponse(value) {
  return new Response(JSON.stringify(value), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (
      url.pathname === '/.well-known/apple-app-site-association' ||
      url.pathname === '/apple-app-site-association'
    ) {
      return jsonResponse(APPLE_APP_SITE_ASSOCIATION);
    }
    if (url.pathname === '/.well-known/assetlinks.json') {
      return jsonResponse(ASSET_LINKS);
    }

    const meta = await loadMeta(url, env || {});
    return new Response(renderHtml(meta, url), {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=300, s-maxage=300',
      },
    });
  },
};

const SITE_ORIGIN = 'https://chaput.app';
const API_ORIGIN = process.env.CHAPUT_API_BASE_URL || 'https://api.chaput.app';
const DEFAULT_IMAGE = `${SITE_ORIGIN}/assets/images/large-logo.png`;
const ANDROID_STORE =
  'https://play.google.com/store/apps/details?id=com.goktigin.chaput';
const IOS_STORE = 'https://apps.apple.com/us/search?term=app.chaput';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseSharePath(path) {
  const parts = String(path || '')
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

function originalSharePath(event) {
  const sharePath = event.queryStringParameters?.share_path;
  if (sharePath) {
    return `/me/${String(sharePath).replace(/^\/+/, '')}`;
  }
  if (event.rawUrl) {
    try {
      return new URL(event.rawUrl).pathname;
    } catch (_) {
      return event.path || '/';
    }
  }
  return event.path || '/';
}

function fallbackMeta(path) {
  const canonical = `${SITE_ORIGIN}${path || '/'}`;
  return {
    ok: true,
    kind: 'profile',
    title: 'Chaput profile tree',
    description:
      'Open this Chaput profile tree and discover the conversations tied to it.',
    image_url: DEFAULT_IMAGE,
    image_alt: 'Chaput profile tree',
    canonical_url: canonical,
    noindex: false,
  };
}

async function loadMeta(path) {
  const parsed = parseSharePath(path);
  if (!parsed) return fallbackMeta(path);

  const params = new URLSearchParams({ username: parsed.username });
  if (parsed.threadId) params.set('thread_id', parsed.threadId);
  if (parsed.messageId) params.set('message_id', parsed.messageId);

  try {
    const response = await fetch(`${API_ORIGIN}/share/metadata?${params}`, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) return fallbackMeta(path);
    const data = await response.json();
    if (!data || data.ok !== true) return fallbackMeta(path);
    return {
      ...fallbackMeta(path),
      ...data,
      image_url: data.image_url || DEFAULT_IMAGE,
      canonical_url: data.canonical_url || `${SITE_ORIGIN}${path}`,
    };
  } catch (_) {
    return fallbackMeta(path);
  }
}

function renderHtml(meta, path) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image_url || DEFAULT_IMAGE);
  const imageAlt = escapeHtml(meta.image_alt || 'Chaput');
  const canonical = escapeHtml(meta.canonical_url || `${SITE_ORIGIN}${path}`);
  const robots = meta.noindex ? 'noindex, follow' : 'index, follow';
  const deepPath = escapeHtml(path || '/');

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
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${image}">
<meta property="og:image:secure_url" content="${image}">
<meta property="og:image:alt" content="${imageAlt}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<style>
  :root { color-scheme: light; }
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
  main {
    width: min(440px, 100%);
    display: grid;
    gap: 18px;
    text-align: center;
  }
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
  h1 {
    margin: 18px 0 8px;
    font-size: clamp(28px, 7vw, 38px);
    line-height: 1.02;
    letter-spacing: 0;
  }
  p {
    margin: 0;
    color: rgba(0,0,0,.62);
    font-size: 16px;
    line-height: 1.45;
    font-weight: 600;
  }
  .actions {
    display: grid;
    gap: 10px;
  }
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
  .secondary {
    background: rgba(255,255,255,.72);
    color: #050505;
    border: 1px solid rgba(0,0,0,.08);
  }
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
    <a class="primary" id="open-app" href="app.chaput://${deepPath.replace(/^\//, '')}">Open in Chaput</a>
    <a class="secondary" id="store-link" href="${IOS_STORE}">Get Chaput</a>
  </nav>
</main>
<script>
(function(){
  var ua=navigator.userAgent||"";
  var isAndroid=/Android/i.test(ua);
  var isIOS=/iPad|iPhone|iPod/.test(ua)&&!window.MSStream;
  var path=${JSON.stringify(path || '/')};
  var cleanPath=path.replace(/^\\//,"");
  var androidStore=${JSON.stringify(ANDROID_STORE)};
  var iosStore=${JSON.stringify(IOS_STORE)};
  var store=isIOS?iosStore:androidStore;
  var storeLink=document.getElementById("store-link");
  if(storeLink){ storeLink.href=store; }
  var openLink=document.getElementById("open-app");
  if(isAndroid){
    var intent="intent://chaput.app/"+cleanPath+"#Intent;scheme=https;package=com.goktigin.chaput;S.browser_fallback_url="+encodeURIComponent(androidStore)+";end";
    if(openLink) openLink.href=intent;
    window.setTimeout(function(){ window.location.href=intent; }, 80);
    return;
  }
  if(isIOS){
    var deepLink="app.chaput://"+cleanPath;
    if(openLink) openLink.href=deepLink;
    var timeout=setTimeout(function(){ if(!document.hidden){ window.location.href=iosStore; } },1800);
    window.addEventListener("pagehide",function(){ clearTimeout(timeout); });
    window.location.href=deepLink;
  }
})();
</script>
</body>
</html>`;
}

export async function handler(event) {
  const path = originalSharePath(event);
  const meta = await loadMeta(path);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
    body: renderHtml(meta, path),
  };
}

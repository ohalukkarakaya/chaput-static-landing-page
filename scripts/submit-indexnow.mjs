const key = process.env.INDEXNOW_KEY?.trim();
if (!key) {
  console.error('Set INDEXNOW_KEY before submitting. No request was sent.');
  process.exit(1);
}

const urls = process.argv.slice(2);
if (urls.length === 0) {
  console.error('Pass one or more absolute chaput.app URLs to submit.');
  process.exit(1);
}

for (const url of urls) {
  const parsed = new URL(url);
  if (parsed.protocol !== 'https:' || parsed.hostname !== 'chaput.app') {
    throw new Error(`Refusing non-canonical URL: ${url}`);
  }
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: 'chaput.app',
    key,
    keyLocation: `https://chaput.app/${key}.txt`,
    urlList: urls,
  }),
});

if (!response.ok) throw new Error(`IndexNow returned HTTP ${response.status}: ${await response.text()}`);
console.log(`Submitted ${urls.length} URL(s) to IndexNow.`);

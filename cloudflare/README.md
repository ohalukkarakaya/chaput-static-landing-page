# Chaput share metadata Worker

GitHub Pages cannot generate dynamic Open Graph tags for `/me/:username`
paths. Keep the landing page on GitHub Pages and run this Worker only for
profile/share routes.

## Cloudflare setup

1. Put `chaput.app` on Cloudflare DNS and keep the records pointing to GitHub
   Pages:

   ```txt
   A @ 185.199.108.153 proxied
   A @ 185.199.109.153 proxied
   A @ 185.199.110.153 proxied
   A @ 185.199.111.153 proxied
   CNAME www ohalukkarakaya.github.io proxied
   ```

2. Create a Worker from `share-meta-worker.js`.

3. Add Worker routes:

   ```txt
   chaput.app/me/*
   www.chaput.app/me/*
   ```

4. Optional Worker environment variable:

   ```txt
   CHAPUT_API_BASE_URL=https://api.chaput.app
   ```

5. Verify:

   ```bash
   curl -I https://chaput.app/me/ohaluk
   curl -sSL -A "WhatsApp/2.23.20.0 A" https://chaput.app/me/ohaluk \
     | grep -E "og:title|og:image|og:description"
   ```

All non-`/me/*` landing routes continue to be served by GitHub Pages.

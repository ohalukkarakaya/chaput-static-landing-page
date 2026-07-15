(function () {
  'use strict';

  var body = document.body;
  var languageSwitch = document.querySelector('.language-switch');
  var currentLanguage = body.dataset.pageLanguage === 'tr' ? 'tr' : 'en';
  var storedLanguage = '';

  try {
    storedLanguage = window.localStorage.getItem('chaput_site_language') || '';
  } catch (_) {}

  if (languageSwitch) {
    languageSwitch.addEventListener('click', function () {
      var selectedLanguage = languageSwitch.getAttribute('hreflang');
      if (selectedLanguage !== 'tr' && selectedLanguage !== 'en') return;

      try {
        window.localStorage.setItem('chaput_site_language', selectedLanguage);
      } catch (_) {}
    });
  }

  var isCrawler = /bot|crawler|spider|slurp|bingpreview|facebookexternalhit/i.test(
    navigator.userAgent || '',
  );
  var browserLanguage = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  var preferredLanguage = storedLanguage === 'tr' || storedLanguage === 'en'
    ? storedLanguage
    : (browserLanguage.indexOf('tr') === 0 ? 'tr' : 'en');

  if (!isCrawler && preferredLanguage !== currentLanguage) {
    var pathname = window.location.pathname || '/';
    var localizedPath = preferredLanguage === 'tr'
      ? (pathname.indexOf('/tr/') === 0 ? pathname : '/tr' + pathname)
      : (pathname.replace(/^\/tr(?=\/|$)/, '') || '/');

    window.location.replace(localizedPath + window.location.search + window.location.hash);
    return;
  }

  var themeButton = document.querySelector('[data-theme-toggle]');
  var storedTheme = '';
  try {
    storedTheme = window.localStorage.getItem('chaput_site_theme') || '';
  } catch (_) {}

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    body.classList.add('theme-dark');
  }

  function updateThemeLabel() {
    if (!themeButton) return;
    var dark = body.classList.contains('theme-dark');
    themeButton.textContent = dark ? '☀' : '◐';
    themeButton.setAttribute('aria-label', dark ? themeButton.dataset.lightLabel : themeButton.dataset.darkLabel);
  }

  if (themeButton) {
    updateThemeLabel();
    themeButton.addEventListener('click', function () {
      body.classList.toggle('theme-dark');
      try {
        window.localStorage.setItem('chaput_site_theme', body.classList.contains('theme-dark') ? 'dark' : 'light');
      } catch (_) {}
      updateThemeLabel();
    });
  }

  var host = (window.location.hostname || '').toLowerCase();
  var analyticsOrigin = '';
  if (host === 'chaput.app' || host === 'www.chaput.app') analyticsOrigin = 'https://api.chaput.app';
  if (host === 'test.chaput.app' || host === 'www.test.chaput.app') analyticsOrigin = 'https://test-api.chaput.app';

  var params = new URLSearchParams(window.location.search);
  var referrerHost = '';
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '').toLowerCase() : '';
  } catch (_) {}
  var explicitSource = (params.get('source') || params.get('utm_source') || '').trim().toLowerCase();
  var source = explicitSource || referrerHost || 'direct';
  if (source.indexOf('instagram') !== -1) source = 'instagram';
  else if (source.indexOf('tiktok') !== -1 || source === 'tt') source = 'tiktok';
  else if (source.indexOf('youtube') !== -1 || source === 'yt') source = 'youtube';

  var visitorId = '';
  try {
    visitorId = window.localStorage.getItem('chaput_lp_vid') || '';
    if (!visitorId) {
      visitorId = 'lp_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 12);
      window.localStorage.setItem('chaput_lp_vid', visitorId);
    }
  } catch (_) {
    visitorId = 'lp_' + Math.random().toString(36).slice(2, 12);
  }

  function query(eventName) {
    return 'visitor_id=' + encodeURIComponent(visitorId) +
      '&source=' + encodeURIComponent(source) +
      '&path=' + encodeURIComponent(window.location.pathname + window.location.search) +
      '&referrer_host=' + encodeURIComponent(referrerHost) +
      '&utm_source=' + encodeURIComponent(params.get('utm_source') || source) +
      '&event=' + encodeURIComponent(eventName || 'organic_landing_view');
  }

  function semanticViewEvent() {
    var kind = body.dataset.pageKind || '';
    var pathname = window.location.pathname;
    if (pathname.indexOf('/goth/safety-and-respect/') !== -1) return 'goth_safety_view';
    if (/\/(?:tr\/)?goth\/$/.test(pathname)) return 'goth_hub_view';
    if (kind === 'creator') return 'use_case_page_view';
    if (kind === 'guide') return 'guide_page_view';
    return 'organic_landing_view';
  }

  function fireEvent(eventName) {
    if (!analyticsOrigin) return;
    var eventImage = new Image();
    eventImage.referrerPolicy = 'no-referrer-when-downgrade';
    eventImage.src = analyticsOrigin + '/public/landing/track.gif?' + query(eventName) + '&_ts=' + Date.now();
  }

  fireEvent(semanticViewEvent());

  document.querySelectorAll('[data-store-target]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!analyticsOrigin) return;
      var click = new Image();
      click.referrerPolicy = 'no-referrer-when-downgrade';
      var platform = link.dataset.storeTarget;
      click.src = analyticsOrigin + '/public/landing/store?platform=' + encodeURIComponent(platform) + '&' + query('download_' + platform + '_click') + '&_ts=' + Date.now();
    });
  });

  document.querySelectorAll('.faq-item').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) fireEvent('faq_open');
    });
  });

  document.querySelectorAll('.related-link').forEach(function (link) {
    link.addEventListener('click', function () {
      fireEvent('internal_content_click');
    });
  });

  document.querySelectorAll('.site-footer__links a').forEach(function (link) {
    link.addEventListener('click', function () {
      fireEvent('legal_link_click');
    });
  });

  document.querySelectorAll('.hero-actions a').forEach(function (link) {
    link.addEventListener('click', function () {
      var kind = body.dataset.pageKind || '';
      if (kind === 'creator') fireEvent('creator_cta_click');
      if (window.location.pathname.indexOf('/goth/') !== -1) fireEvent('goth_community_cta_click');
    });
  });
})();

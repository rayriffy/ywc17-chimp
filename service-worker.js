self.__precacheManifest = [
  {
    "url": "/ywc17-chimp/_next/static/chunks/1bfc9850.a4ba1d10ea75b4e49bac.js",
    "revision": "99ca2f4d70eb2fcc0283"
  },
  {
    "url": "/ywc17-chimp/_next/static/chunks/bf206722f03c9d9a0d3e16ea23cc5afb37777035.9b227f04f502c3b11964.js",
    "revision": "144d2d98137e57fe048f"
  },
  {
    "url": "/ywc17-chimp/_next/static/chunks/e96e01d01ed113ec07980be6846e99e22ef1ef2d.b1683ee4e532dba9260b.js",
    "revision": "9650b8fd707efe51db43"
  },
  {
    "url": "/ywc17-chimp/_next/static/chunks/framework.a90f5a071e35be374b29.js",
    "revision": "bb83b3acd1c982cb7f5c"
  },
  {
    "url": "/ywc17-chimp/_next/static/kv9CYDcCxCXrPP_Y0rdG3/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/ywc17-chimp/_next/static/kv9CYDcCxCXrPP_Y0rdG3/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/ywc17-chimp/_next/static/kv9CYDcCxCXrPP_Y0rdG3/pages/_app.js",
    "revision": "8148aadb721e4098b017"
  },
  {
    "url": "/ywc17-chimp/_next/static/kv9CYDcCxCXrPP_Y0rdG3/pages/_error.js",
    "revision": "52ef6fe92e8190b6f7f8"
  },
  {
    "url": "/ywc17-chimp/_next/static/kv9CYDcCxCXrPP_Y0rdG3/pages/index.js",
    "revision": "844f1e8983589cd98e42"
  },
  {
    "url": "/ywc17-chimp/_next/static/runtime/main-759cb373824f7531191a.js",
    "revision": "6233aca9012b3eaf1e01"
  },
  {
    "url": "/ywc17-chimp/_next/static/runtime/polyfills-934ee1c38f9bd83fb20d.js",
    "revision": "df490ee85201423a56cf"
  },
  {
    "url": "/ywc17-chimp/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",
    "revision": "04cb911a52af21884f6c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');

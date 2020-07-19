self.__precacheManifest = [
  {
    "url": "/ywc17-chimp/_next/static/_K30lOzBAP05QcAcmQrru/pages/_app.js",
    "revision": "57fe627d121737cb4ce0"
  },
  {
    "url": "/ywc17-chimp/_next/static/_K30lOzBAP05QcAcmQrru/pages/_error.js",
    "revision": "53e9ff097e75c9a88862"
  },
  {
    "url": "/ywc17-chimp/_next/static/_K30lOzBAP05QcAcmQrru/pages/index.js",
    "revision": "8aa52dfa69c67d02d6c5"
  },
  {
    "url": "/ywc17-chimp/_next/static/chunks/commons.0aba2d40f94867824fdd.js",
    "revision": "6bac114fbf6face105b8"
  },
  {
    "url": "/ywc17-chimp/_next/static/runtime/main-ca081a6ce9de9493c02b.js",
    "revision": "c7349f3ecfff5d1b58bd"
  },
  {
    "url": "/ywc17-chimp/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
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

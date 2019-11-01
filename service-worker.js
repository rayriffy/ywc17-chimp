self.__precacheManifest = [
  {
    "url": "/ywc17-chimp/_next/static/Fd86YAr35NFEqH9Ul6zfP/pages/_app.js",
    "revision": "03b966a833c5f401c7b0"
  },
  {
    "url": "/ywc17-chimp/_next/static/Fd86YAr35NFEqH9Ul6zfP/pages/_error.js",
    "revision": "34d8e479e14dce452685"
  },
  {
    "url": "/ywc17-chimp/_next/static/Fd86YAr35NFEqH9Ul6zfP/pages/index.js",
    "revision": "7541126629d9e95f3f79"
  },
  {
    "url": "/ywc17-chimp/_next/static/chunks/commons.0aba2d40f94867824fdd.js",
    "revision": "6bac114fbf6face105b8"
  },
  {
    "url": "/ywc17-chimp/_next/static/runtime/main-1f38c70f99c503dd9917.js",
    "revision": "25eb7a0a71afdea7a878"
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

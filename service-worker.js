self.__precacheManifest = [
  {
    "url": "/ywc17-chimp/_next/static/L9euM0b7kY79zLt5vZI7H/pages/_app.js",
    "revision": "8fa39f412d27d841bb3b"
  },
  {
    "url": "/ywc17-chimp/_next/static/L9euM0b7kY79zLt5vZI7H/pages/_error.js",
    "revision": "3a74479104d4d6152feb"
  },
  {
    "url": "/ywc17-chimp/_next/static/L9euM0b7kY79zLt5vZI7H/pages/index.js",
    "revision": "b306e1fcf82246fe1c64"
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

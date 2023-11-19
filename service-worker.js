importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

workbox.routing.registerRoute(({ request }) => {
  request.destination === 'image', new workbox.strategies.CacheFirst();
  alert(123);
});

console.log(123);
console.log(workbox);

var CACHE_NAME = 'task-management';
var urlsToCache = [];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});

importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.js');
workbox.routing.registerRoute(new RegExp('https://unpkg.com/vue@3/dist/vue.global.js'), new workbox.strategies.CacheFirst());

var CACHE_NAME = 'PWA';

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(['/', './index.html', './assets/JavaScripts/manifest.json']);
        }),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .open(cacheName)
            .then((cache) => cache.match(event.request, { ignoreSearch: true }))
            .then((response) => {
                return response || fetch(event.request);
            }),
    );
});

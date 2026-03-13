const CACHE_NAME = 'auraskin-admin-v3'; // Bumped version to break old cache

self.addEventListener('install', (e) => {
    // Force immediate takeover
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    // Nuke all old caches
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                return caches.delete(key);
            }));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    // Pure network strictly to avoid locking the admin panel
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

const CACHE = 'orient-mode-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('api.openweathermap.org')) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          let clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return r;
        })
        .catch(_=> caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r=> r || fetch(e.request))
    );
  }
});
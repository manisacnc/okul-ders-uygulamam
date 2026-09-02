/* Okul Ders Uygulamam – stale-while-revalidate önbellek stratejisi */
var SURUM = 'okul-v8';
var DOSYALAR = [
  './index.html',
  './style.css',
  './app.js',
  './fsrs.js',
  './sync.js',
  './veri5.js',
  './konular5.js',
  './veri6.js',
  './konular6.js',
  './veri7.js',
  './konular7.js',
  './veri8.js',
  './konular8.js',
  './sorular.js',
  './soru578.js',
  './kitaplar.js',
  './fen3d.js',
  './canli.js',
  './eslestirme.js',
  './deneyler.js',
  './cozumler.js',
  './dinleme.js',
  './belgesel.js',
  './kodlama.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './index-tek.html'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(SURUM).then(function (c) {
    return c.addAll(DOSYALAR);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (isimler) {
    return Promise.all(isimler.filter(function (i) { return i !== SURUM; }).map(function (i) { return caches.delete(i); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Stale-while-revalidate: önce cached dön, arka planda güncelle */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = e.request.url;
  if (/\/(api\/|\.json)(\?|$)/.test(url)) return;
  e.respondWith(
    caches.open(SURUM).then(function (cache) {
      return cache.match(e.request).then(function (cached) {
        var fetchPromise = fetch(e.request).then(function (networkResponse) {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(function () {
          if (cached) return cached;
          return new Response('Çevrimdışı – lütfen internete bağlanın.', {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            status: 503
          });
        });
        return cached || fetchPromise;
      });
    })
  );
});

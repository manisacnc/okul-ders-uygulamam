/* Okul Ders Uygulamam – network-first önbellek stratejisi */
var SURUM = 'okul-v14';
var DOSYALAR = [
  './index.html',
  './style.css',
  './app.js',
  './fsrs.js',
  './sync.js',
  './lisans.js',
  './supa-config.js',
  './supa.js',
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

/* Network-first: önce ağdan al (en güncel), ağ yoksa önbellekten dön */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = e.request.url;
  if (/(\/api\/|\.json|\.netlify\/)(\?|$)/.test(url)) return;
  e.respondWith(
    fetch(e.request).then(function (networkResponse) {
      if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
        var klon = networkResponse.clone();
        caches.open(SURUM).then(function (cache) { cache.put(e.request, klon); }).catch(function () {});
      }
      return networkResponse;
    }).catch(function () {
      return caches.open(SURUM).then(function (cache) {
        return cache.match(e.request).then(function (cached) {
          if (cached) return cached;
          return new Response('Çevrimdışı – lütfen internete bağlanın.', {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            status: 503
          });
        });
      });
    })
  );
});

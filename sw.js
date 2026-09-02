/* Okul Ders Uygulamam – çevrimdışı önbellek */
var SURUM = 'okul-v6';
var DOSYALAR = [
  './index.html',
  './style.css',
  './app.js',
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
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (yanit) {
      if (yanit) return yanit;
      return fetch(e.request).then(function (ag) {
        if (ag && ag.status === 200 && ag.type === 'basic') {
          var k = caches.open(SURUM);
          k.then(function (c) { c.put(e.request, ag.clone()); });
        }
        return ag;
      }).catch(function () {
        return caches.match('./index.html');
      });
    })
  );
});

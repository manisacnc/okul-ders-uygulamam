/* ============================================================
   SYNC — Cihazlar arası senkronizasyon modülü
   1. IndexedDB tabanlı güvenilir veri saklama (localStorage yerine)
   2. JSON dışa/içe aktarma
   3. GitHub Gist ile bulut senkronizasyonu (isteğe bağlı)
   ============================================================ */
var Veritabani = (function () {
  var DB_ISIM = 'OkulDersDB';
  var DB_SURUM = 1;
  var db = null;

  function ac() {
    return new Promise(function (coz, red) {
      if (db) { coz(db); return; }
      var istek = indexedDB.open(DB_ISIM, DB_SURUM);
      istek.onerror = function () { red(istek.error); };
      istek.onsuccess = function () { db = istek.result; coz(db); };
      istek.onupgradeneeded = function (e) {
        var vdb = e.target.result;
        if (!vdb.objectStoreNames.contains('anahtar')) vdb.createObjectStore('anahtar');
        if (!vdb.objectStoreNames.contains('kullanicilar')) vdb.createObjectStore('kullanicilar', { keyPath: 'id' });
      };
    });
  }

  function kayitYaz(depo, anahtar, deger) {
    return ac().then(function (db) {
      return new Promise(function (coz, red) {
        var tx = db.transaction(depo, 'readwrite');
        var os = tx.objectStore(depo);
        os.put(deger, anahtar);
        tx.oncomplete = function () { coz(true); };
        tx.onerror = function () { red(tx.error); };
      });
    });
  }

  function kayitOku(depo, anahtar) {
    return ac().then(function (db) {
      return new Promise(function (coz, red) {
        var tx = db.transaction(depo, 'readonly');
        var istek = tx.objectStore(depo).get(anahtar);
        istek.onsuccess = function () { coz(istek.result); };
        istek.onerror = function () { red(istek.error); };
      });
    });
  }

  function tumunuOku(depo) {
    return ac().then(function (db) {
      return new Promise(function (coz, red) {
        var tx = db.transaction(depo, 'readonly');
        var istek = tx.objectStore(depo).getAll();
        istek.onsuccess = function () { coz(istek.result); };
        istek.onerror = function () { red(istek.error); };
      });
    });
  }

  function localStorageEslesme() {
    var keys = ['kartlar', 'yanlis', 'tekrar', 'testler', 'aktivite', 'ayarlar', 'profil',
                'pomo', 'hedef', 'notlar', 'programlar', 'rozetler', 'mebDurum', 'veriEk'];
    return Promise.all(keys.map(function (k) {
      var v = localStorage.getItem(k);
      if (v) {
        try { v = JSON.parse(v); } catch (e) {}
        return kayitYaz('anahtar', k, v);
      }
      return Promise.resolve();
    }));
  }

  function disaAktar() {
    var anahtarlar = ['kartlar', 'yanlis', 'tekrar', 'testler', 'aktivite', 'ayarlar', 'profil',
                      'pomo', 'hedef', 'notlar', 'programlar', 'rozetler', 'mebDurum', 'veriEk'];
    return ac().then(function (db) {
      return new Promise(function (coz, red) {
        var tx = db.transaction('anahtar', 'readonly');
        var os = tx.objectStore('anahtar');
        var sonuc = {};
        var tamam = 0;
        if (!anahtarlar.length) { coz(sonuc); return; }
        anahtarlar.forEach(function (k) {
          var istek = os.get(k);
          istek.onsuccess = function () { sonuc[k] = istek.result; tamam++; if (tamam === anahtarlar.length) coz(sonuc); };
          istek.onerror = function () { tamam++; if (tamam === anahtarlar.length) coz(sonuc); };
        });
      });
    });
  }

  function iceAktar(veri) {
    if (!veri || typeof veri !== 'object') return Promise.resolve(false);
    var promises = Object.keys(veri).map(function (k) {
      return kayitYaz('anahtar', k, veri[k]).then(function () {
        try {
          var v = veri[k];
          localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
        } catch (e) {}
      });
    });
    return Promise.all(promises).then(function () { return true; });
  }

  return {
    ac: ac,
    yaz: kayitYaz,
    oku: kayitOku,
    tumunuOku: tumunuOku,
    localStorageEslesme: localStorageEslesme,
    disaAktar: disaAktar,
    iceAktar: iceAktar
  };
})();

/* ====== JSON Yedek ====== */
function veriYedekJSON() {
  return Veritabani.disaAktar().then(function (veri) {
    veri._surum = 'okul-v7';
    veri._tarih = new Date().toISOString();
    veri._uygulama = 'Okul Ders Uygulamam';
    return JSON.stringify(veri, null, 2);
  });
}

function veriJSONIndir() {
  veriYedekJSON().then(function (json) {
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    var tarih = new Date().toISOString().slice(0, 10);
    a.download = 'okul-ders-yedek-' + tarih + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

function veriJSONYukle(input) {
  return new Promise(function (coz) {
    var dosya = input.files[0];
    if (!dosya) { coz(false); return; }
    var okuyucu = new FileReader();
    okuyucu.onload = function (e) {
      try {
        var veri = JSON.parse(e.target.result);
        Veritabani.iceAktar(veri).then(function () { coz(true); });
      } catch (err) {
        alert('Geçersiz yedek dosyası: ' + err.message);
        coz(false);
      }
    };
    okuyucu.readAsText(dosya);
  });
}

/* ====== GitHub Gist Senkronizasyonu ====== */
var GistSync = (function () {
  var API = 'https://api.github.com/gist';

  function tokenOku() {
    try { return localStorage.getItem('gist_token') || ''; } catch (e) { return ''; }
  }

  function tokenAyarla(token) {
    try { localStorage.setItem('gist_token', token); } catch (e) {}
  }

  function gistIdOku() {
    try { return localStorage.getItem('gist_id') || ''; } catch (e) { return ''; }
  }

  function gistIdAyarla(id) {
    try { localStorage.setItem('gist_id', id); } catch (e) {}
  }

  function senkronla() {
    var token = tokenOku();
    if (!token) { alert('Önce GitHub Personal Access Token ayarla.\nhttps://github.com/settings/tokens/new\nscope: gist'); return Promise.resolve(false); }
    return veriYedekJSON().then(function (json) {
      var gistId = gistIdOku();
      var methot = gistId ? 'PATCH' : 'POST';
      var url = gistId ? (API + '/' + gistId) : API;
      return fetch(url, {
        method: methot,
        headers: {
          'Authorization': 'token ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: 'Okul Ders Uygulamam Yedek - ' + new Date().toLocaleDateString('tr-TR'),
          public: false,
          files: {
            'okul-ders-yedek.json': { content: json }
          }
        })
      }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      }).then(function (data) {
        if (data.id) gistIdAyarla(data.id);
        return true;
      });
    });
  }

  function geriYukle() {
    var token = tokenOku();
    var gistId = gistIdOku();
    if (!token || !gistId) { alert('Önce senkronize ol ve GitHub token/gist ID ayarla.'); return Promise.resolve(false); }
    return fetch(API + '/' + gistId, {
      headers: { 'Authorization': 'token ' + token }
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (data) {
      var dosya = data.files && data.files['okul-ders-yedek.json'];
      if (!dosya || !dosya.content) throw new Error('Yedek dosyası bulunamadı');
      var veri = JSON.parse(dosya.content);
      return Veritabani.iceAktar(veri);
    });
  }

  return {
    tokenOku: tokenOku,
    tokenAyarla: tokenAyarla,
    gistIdOku: gistIdOku,
    senkronla: senkronla,
    geriYukle: geriYukle
  };
})();

/* Lisans Yönetim Paneli - PWA (çevrimdışı, özel anahtar cihazda) */
(function () {
  'use strict';

  var LS_ANAHTAR = 'ly_ozelAnahtar';
  var LS_KAYITLAR = 'ly_kayitlar';
  var SONSIZ = '9999-12-31';

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- yardımcılar ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function b64url(s) {
    return btoa(unescape(encodeURIComponent(s)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function fromB64url(s) {
    s = s.replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4) s += '=';
    return decodeURIComponent(escape(atob(s)));
  }
  function toKayit(a) {
    if (!a[0]) return '';
    var veri = JSON.stringify({ tip: 'ly1', ogrenciler: a });
    return b64url(veri);
  }
  function fromKayit(kod) {
    try {
      var v = JSON.parse(fromB64url(kod.trim()));
      if (v.tip !== 'ly1' || !Array.isArray(v.ogrenciler)) return null;
      return v.ogrenciler;
    } catch (e) { return null; }
  }

  var GUN = 24 * 60 * 60 * 1000;
  function kalanGun(bitis) {
    if (bitis === SONSIZ || !bitis) return Infinity;
    return Math.max(0, Math.ceil((new Date(bitis + 'T23:59:59').getTime() - Date.now()) / GUN));
  }
  function bitisHesapla(sureTipi, gun) {
    if (sureTipi === 'sonsuz') return { bitis: SONSIZ, etiket: 'Sınırsız' };
    var n = parseInt(gun, 10);
    if (!n || n < 1) return null;
    var d = new Date();
    d.setDate(d.getDate() + n);
    return { bitis: d.toISOString().slice(0, 10), etiket: n + ' gün' };
  }
  function kalanEtiket(kalan) {
    if (kalan === Infinity) return '<span class="su sonsuz">Sınırsız</span>';
    if (kalan <= 0) return '<span class="su bitti">Bitti</span>';
    if (kalan <= 15) return '<span class="su az">' + kalan + ' gün</span>';
    return '<span class="su ok">' + kalan + ' gün</span>';
  }
  function sureEtiket(o) {
    if (o.bitis === SONSIZ) return '<span class="su sonsuz">Sınırsız</span>';
    return esc(o.bitis);
  }
  function fmtTarih(it) {
    if (!it) return '-';
    var d = new Date(it);
    return isNaN(d) ? it : d.toLocaleDateString('tr-TR');
  }

  /* ---------- özel anahtar (özel.pem → WebCrypto) ---------- */
  var ozelAnahtar = null;

  function pemToArrayBuffer(pem) {
    var b64 = pem.replace(/-----BEGIN [^-]+-----/g, '').replace(/-----END [^-]+-----/g, '').replace(/\s+/g, '');
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return arr.buffer;
  }

  function importOzelAnahtar(pem) {
    return crypto.subtle.importKey(
      'pkcs8',
      pemToArrayBuffer(pem),
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['sign']
    ).then(function (key) { return key; });
  }

  function lisansUret(ad, bitis) {
    if (!ozelAnahtar) return Promise.reject(new Error('Özel anahtar yüklenmemiş.'));
    var veri = JSON.stringify({ k: ad, c: 1, b: bitis, ts: Date.now() });
    var veriU8 = new TextEncoder().encode(veri);
    return crypto.subtle.sign('RSASSA-PKCS1-v1_5', ozelAnahtar, veriU8).then(function (imza) {
      var iv = new Uint8Array(imza);
      var imzaB64 = '';
      for (var i = 0; i < iv.length; i++) imzaB64 += String.fromCharCode(iv[i]);
      var imzaUrl = btoa(imzaB64).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      return b64url(veri) + '.' + imzaUrl;
    });
  }

  function kayitlariOku() {
    try { return JSON.parse(localStorage.getItem(LS_KAYITLAR)) || []; }
    catch (e) { return []; }
  }
  function kayitlariYaz(a) { localStorage.setItem(LS_KAYITLAR, JSON.stringify(a)); }

  /* ---------- tablo ---------- */
  var tum = [];
  function tabloyuCiz() {
    var govde = $('tabloGovde');
    var arama = ($('arama').value || '').trim().toLowerCase();
    var f = tum.filter(function (o) { return !arama || o.ad.toLowerCase().includes(arama); });
    $('bosUyari').style.display = f.length ? 'none' : 'block';
    if (!f.length) { govde.innerHTML = ''; return; }
    govde.innerHTML = f.map(function (o, i) {
      return '<tr>' +
        '<td>' + esc(i + 1) + '</td>' +
        '<td><b>' + esc(o.ad) + '</b></td>' +
        '<td>' + sureEtiket(o) + '</td>' +
        '<td>' + kalanEtiket(kalanGun(o.bitis)) + '</td>' +
        '<td>' + fmtTarih(o.verilis) + '</td>' +
        '<td class="kod-hucre">' + esc(o.kod) + '</td>' +
        '<td><div class="bolum">' +
        '<button class="btn sm sec" onclick="P.kopyala(\'' + o.id + '\')" title="Lisans kodunu kopyala">📋</button>' +
        '<button class="btn sm sec" onclick="P.uzat(\'' + o.id + '\')" title="Süreyi uzat / yeni kod">🔄</button>' +
        '<button class="btn sm sec" onclick="P.qrVer(\'' + o.id + '\')" title="Bu kaydı QR/kod olarak paylaş">📤</button>' +
        '<button class="btn sm sec" onclick="P.sil(\'' + o.id + '\')" title="Sil">🗑️</button>' +
        '</div></td></tr>';
    }).join('');
  }
  function yenileListe() { tum = kayitlariOku(); tabloyuCiz(); }

  function sonuc(el, m, t) { el.className = 'sonuc ' + (t || 'iyi'); el.textContent = m; }

  function toast(m) {
    var t = $('toast');
    t.textContent = m;
    t.classList.remove('gizli');
    clearTimeout(t._tm);
    t._tm = setTimeout(function () { t.classList.add('gizli'); }, 2200);
  }

  /* ---------- kopyala (tarayıcı) ---------- */
  function clipboardYaz(metin) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(metin);
    }
    return new Promise(function (res, rej) {
      var ta = document.createElement('textarea');
      ta.value = metin;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      try { document.execCommand('copy'); res(); } catch (e) { rej(e); }
      document.body.removeChild(ta);
    });
  }

  /* ---------- QR üretme (qrcode-generator) ---------- */
  function qrGoster(canvas, metin) {
    var qr = qrcode(0, 'M');
    qr.addData(metin, 'Byte');
    qr.make();
    var c = document.createElement('canvas');
    var sc = 4, pad = 4;
    var size = (qr.getModuleCount() + pad * 2) * sc;
    c.width = c.height = size;
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#000';
    for (var r = 0; r < qr.getModuleCount(); r++) {
      for (var col = 0; col < qr.getModuleCount(); col++) {
        if (qr.isDark(r, col)) ctx.fillRect((col + pad) * sc, (r + pad) * sc, sc, sc);
      }
    }
    if (canvas) { canvas.innerHTML = ''; canvas.appendChild(c); }
    return c;
  }

  var akSevk = { merkez: null };

  /* ---------- UI: girişler ---------- */
  function checkOzelAnahtar() {
    var kayit = localStorage.getItem(LS_ANAHTAR);
    if (kayit) {
      try {
        var k = JSON.parse(kayit);
        if (k.pem) {
          ozelAnahtar = null;
          importOzelAnahtar(k.pem).then(function (key) {
            ozelAnahtar = key;
            gosterPanel();
          }).catch(function () {
            localStorage.removeItem(LS_ANAHTAR);
            gosterAnahtarKarti();
          });
          return;
        }
      } catch (e) {}
    }
    gosterAnahtarKarti();
  }

  function gosterAnahtarKarti() {
    $('anahtarKarti').classList.remove('gizli');
    $('panel').classList.add('gizli');
  }
  function gosterPanel() {
    $('anahtarKarti').classList.add('gizli');
    $('panel').classList.remove('gizli');
    yenileListe();
  }

  function anahtarKaydet() {
    var pem = $('anahtarAlani').value.trim();
    var parola = $('anahtarParola').value;
    var k = { pem: pem, sifreli: false };
    if (pem.indexOf('BEGIN') === -1) {
      sonuc($('anahtarSonuc'), 'Geçerli bir özel anahtar yapıştır (-----BEGIN PRIVATE KEY----- ...).', 'kotu');
      return;
    }
    localStorage.setItem(LS_ANAHTAR, JSON.stringify(k));
    ozelAnahtar = null;
    importOzelAnahtar(pem).then(function (key) {
      ozelAnahtar = key;
      sonuc($('anahtarSonuc'), '✅ Özel anahtar yüklendi.', 'iyi');
      $('anahtarAlani').value = '';
      $('anahtarParola').value = '';
      gosterPanel();
    }).catch(function (e) {
      sonuc($('anahtarSonuc'), 'Anahtar doğrulanamadı (format hatalı olabilir).', 'kotu');
      localStorage.removeItem(LS_ANAHTAR);
    });
  }

  /* ---------- üret ---------- */
  function uret() {
    var ad = $('adSoyad').value.trim();
    var tip = $('sureTipi').value;
    var gun = $('gunSayisi').value;
    if (!ad) { sonuc($('uretimSonuc'), 'Öğrencinin adı ve soyadı zorunlu.', 'kotu'); return; }
    var hesap = bitisHesapla(tip, gun);
    if (!hesap) { sonuc($('uretimSonuc'), 'Geçerli bir gün sayısı girin.', 'kotu'); return; }
    if (!ozelAnahtar) { sonuc($('uretimSonuc'), 'Önce özel anahtarı yükle.', 'kotu'); return; }

    lisansUret(ad, hesap.bitis).then(function (kod) {
      var ogr = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        ad: ad,
        bitis: hesap.bitis,
        etiket: hesap.etiket,
        kod: kod,
        verilis: new Date().toISOString()
      };
      var liste = kayitlariOku();
      liste.unshift(ogr);
      kayitlariYaz(liste);
      sonuc($('uretimSonuc'), '✅ Lisans üretildi ve "' + ad + '" kaydına eklendi.', 'iyi');
      $('adSoyad').value = '';
      yenileListe();
    }).catch(function (e) {
      sonuc($('uretimSonuc'), 'Hata: ' + e.message, 'kotu');
    });
  }

  /* ---------- istatistik / seçimler (global erişim) ---------- */
  window.P = {};

  window.P.kopyala = function (id) {
    var o = tum.find(function (x) { return x.id === id; });
    if (!o) return;
    clipboardYaz(o.kod).then(function () { toast('Lisans kodu kopyalandı.'); });
  };

  window.P.sil = function (id) {
    if (!confirm('Bu kayıt silinsin mi?')) return;
    var liste = kayitlariOku().filter(function (x) { return x.id !== id; });
    kayitlariYaz(liste);
    yenileListe();
    toast('Kayıt silindi.');
  };

  window.P.uzat = function (id) {
    var o = kayitlariOku().find(function (x) { return x.id === id; });
    if (!o || !ozelAnahtar) return;
    var tip = prompt('Uzatma türü: "gün" (örn: 90) ya da "sonsuz"\nMevcut bitiş: ' + (o.bitis === SONSIZ ? 'Sınırsız' : o.bitis));
    if (!tip) return;
    var hesap = null;
    if (tip.trim().toLowerCase() === 'sonsuz') hesap = { bitis: SONSIZ, etiket: 'Sınırsız' };
    else {
      var n = parseInt(tip, 10);
      if (!n || n < 1) { toast('Geçersiz gün.'); return; }
      var d = new Date(); d.setDate(d.getDate() + n);
      hesap = { bitis: d.toISOString().slice(0, 10), etiket: n + ' gün' };
    }
    lisansUret(o.ad, hesap.bitis).then(function (kod) {
      var liste = kayitlariOku();
      var g = liste.find(function (x) { return x.id === id; });
      g.bitis = hesap.bitis; g.etiket = hesap.etiket; g.kod = kod;
      kayitlariYaz(liste);
      yenileListe();
      toast('Süre uzatıldı (yeni lisans kodu üretildi).');
    });
  };

  /* ---------- QR / kod VER (paylaş) ---------- */
  window.P.qrVer = function (id) {
    var o = kayitlariOku().find(function (x) { return x.id === id; });
    if (!o) return;
    var veri = toKayit([o]);
    $('qrBaslik').textContent = '📤 ' + o.ad + ' kaydını paylaş';
    $('qrAciklama').textContent = 'Bu QR kodu, diger cihazdaki panelde "QR/Kod Al" butonuyla okutulur ya da kod kopyalanip yapistirilir.';
    $('qrKod').value = veri;
    try { qrGoster($('qrKutu'), veri); } catch (e) { $('qrKutu').innerHTML = '<span class="not">QR oluşturulamadı.</span>'; }
    $('modalQr').classList.remove('gizli');
  };

  function qrVerToplu() {
    var liste = kayitlariOku();
    if (!liste.length) { toast('Kayıt listesi boş.'); return; }
    var veri = toKayit(liste);
    $('qrBaslik').textContent = '📤 Tüm kayıtları paylaş (' + liste.length + ')';
    $('qrAciklama').textContent = 'Diger cihazda "QR/Kod Al" ile bu QR kodu okut ya da kodu yapistir.';
    $('qrKod').value = veri;
    try { qrGoster($('qrKutu'), veri); } catch (e) { $('qrKutu').innerHTML = '<span class="not">QR oluşturulamadı.</span>'; }
    $('modalQr').classList.remove('gizli');
  }

  function qrModalKapat() { $('modalQr').classList.add('gizli'); stopKamera(); }

  /* ---------- QR okuma (jsQR + kamera) ---------- */
  var videoStream = null, scanTimer = null, videoEl, scanCanvas, scanCtx;

  function stopKamera() {
    if (scanTimer) { clearInterval(scanTimer); scanTimer = null; }
    if (videoStream) { videoStream.getTracks().forEach(function (t) { t.stop(); }); videoStream = null; }
    if (videoEl) videoEl.pause();
    $('btnKamera').classList.remove('gizli');
    $('btnKameraKapat').classList.add('gizli');
  }

  function kameraAc() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      toast('Bu tarayıcıda kamera yok; kodu elle yapıştır.');
      return;
    }
    videoEl = $('video');
    scanCanvas = $('scanCanvas');
    scanCtx = scanCanvas.getContext('2d');
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function (stream) {
      videoStream = stream;
      videoEl.srcObject = stream;
      videoEl.play();
      $('btnKamera').classList.add('gizli');
      $('btnKameraKapat').classList.remove('gizli');
      scanTimer = setInterval(tara, 250);
    }).catch(function () { toast('Kamera açılamadı; kodu elle yapıştır.'); });
  }

  function tara() {
    if (!videoEl || !videoEl.videoWidth) return;
    scanCanvas.width = videoEl.videoWidth;
    scanCanvas.height = videoEl.videoHeight;
    scanCtx.drawImage(videoEl, 0, 0, scanCanvas.width, scanCanvas.height);
    var img = scanCtx.getImageData(0, 0, scanCanvas.width, scanCanvas.height);
    var code = jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' });
    if (code && code.data) {
      $('alKod').value = code.data;
      stopKamera();
      koduAl();
    }
  }

  function alModaliAc() {
    $('alSonuc').textContent = '';
    $('alKod').value = '';
    $('modalAl').classList.remove('gizli');
  }
  function alModaliKapat() { $('modalAl').classList.add('gizli'); stopKamera(); }

  function koduAl() {
    var kod = $('alKod').value.trim();
    var el = $('alSonuc');
    if (!kod) { sonuc(el, 'Kodu ya da QR verisini girin.', 'kotu'); return; }
    var gelen = fromKayit(kod);
    if (!gelen || !gelen.length) { sonuc(el, 'Geçersiz kayıt kodu.', 'kotu'); return; }
    var liste = kayitlariOku();
    var eklenen = 0;
    gelen.forEach(function (g) {
      if (!g || !g.ad || !g.kod) return;
      var mevcut = liste.find(function (x) { return x.ad === g.ad; });
      var kayit = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5), ad: g.ad, bitis: g.bitis || SONSIZ, etiket: (g.etiket || g.bitis), kod: g.kod, verilis: g.verilis || new Date().toISOString() };
      if (mevcut) { Object.assign(mevcut, kayit); } else { liste.unshift(kayit); }
      eklenen++;
    });
    kayitlariYaz(liste);
    yenileListe();
    sonuc(el, '✅ ' + eklenen + ' kayıt listeye eklendi/güncellendi.', 'iyi');
    setTimeout(alModaliKapat, 1200);
  }

  /* ---------- yedek ---------- */
  function yedekle() {
    var veri = JSON.stringify(kayitlariOku(), null, 2);
    var blob = new Blob([veri], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'ogrenci-yedek-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('Yedek indirildi.');
  }
  function geriYukle() {
    var inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.json,application/json';
    inp.onchange = function () {
      var f = inp.files[0];
      if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var a = JSON.parse(rd.result);
          if (!Array.isArray(a)) throw new Error();
          kayitlariYaz(a);
          yenileListe();
          toast('Yedek geri yüklendi.');
        } catch (e) { toast('Geçersiz yedek dosyası.'); }
      };
      rd.readAsText(f);
    };
    inp.click();
  }

  /* ---------- olaylar ---------- */
  $('btnAnahtarKaydet').addEventListener('click', anahtarKaydet);
  $('btnAnahtarDosya').addEventListener('click', function () {
    var inp = document.createElement('input');
    inp.type = 'file'; inp.accept = '.pem';
    inp.onchange = function () {
      var f = inp.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () { $('anahtarAlani').value = rd.result; };
      rd.readAsText(f);
    };
    inp.click();
  });
  $('btnUret').addEventListener('click', uret);
  $('arama').addEventListener('input', tabloyuCiz);
  $('btnVer').addEventListener('click', qrVerToplu);
  $('btnAl').addEventListener('click', alModaliAc);
  $('btnQrKopyala').addEventListener('click', function () {
    clipboardYaz($('qrKod').value).then(function () { toast('Kod kopyalandı.'); });
  });
  $('btnQrKapat').addEventListener('click', qrModalKapat);
  $('btnAlKapat').addEventListener('click', alModaliKapat);
  $('btnAlOnay').addEventListener('click', koduAl);
  $('btnKamera').addEventListener('click', kameraAc);
  $('btnKameraKapat').addEventListener('click', stopKamera);
  $('btnYedekle').addEventListener('click', yedekle);
  $('btnGeriYukle').addEventListener('click', geriYukle);

  $('sureTipi').addEventListener('change', function () {
    $('gunKutu').style.display = this.value === 'gun' ? '' : 'none';
  });

  $('adSoyad').addEventListener('keydown', function (e) { if (e.key === 'Enter') uret(); });
  $('gunSayisi').addEventListener('keydown', function (e) { if (e.key === 'Enter') uret(); });

  /* ---------- PWA install ---------- */
  var installEvt = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); installEvt = e; });
  window.addEventListener('appinstalled', function () { toast('Uygulama kuruldu.'); });

  /* ---------- başlat ---------- */
  checkOzelAnahtar();
})();

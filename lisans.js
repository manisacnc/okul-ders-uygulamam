/*
 * Lisans sistemi (istemci) — RSA imzalı lisans doğrulama
 *
 * - Genel anahtar aşağıdadır (lisans_uret.js ile üretilen çiftin genel anahtarı).
 * - Lisans kodu: base64url(JSON) + "." + base64url(RSA-SHA256 imzası)
 * - 15 günlük deneme: ilk açılışta başlar; süre bitince lisans istenir.
 * - Cihaz sayısı: lisans kodunda belirtilen kadar cihazda aktive edilebilir.
 *
 * WebCrypto (crypto.subtle) kullanır — HTTPS veya localhost gerekir.
 */
(function () {
  var GENEL_ANAHTAR_PEM = [
    '-----BEGIN PUBLIC KEY-----',
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApPGvWuX2haHu/a/cjvhh',
    'HrK8wyV9ol4lvK6w50y8/X7B7QZljzJ3e7lvxwc1aZWsckYLXXd2NYmASlTTIodl',
    'gl9lTnWh3jKZ+dTYzNDY6iASZKE8U+S/xTChOApPi0Gi68QAD7JOtNH7GDrNV2fs',
    'U9wiHSgyBZyFqOdtpec7xursStRb8xLz4LgEfGng+Iw2oWpp6cuB6DEHALSKcWlo',
    '1TzxP6xwLPNLHcnOyrrm7D++5p/beIgVLybhRGenuTRVqniFHGZ2RTlpj0kKRZrd',
    'h0PMczPE08k/LId2pT7YDYA51nMq/UNJPoa/SxDix3+jA+wWnQLETCnIcMzzc59f',
    'WwIDAQAB',
    '-----END PUBLIC KEY-----'
  ].join('\n');

  var ANAHTAR_HAFIZA = null;

  function pem2bin(pem) {
    var b64 = pem.replace(/-----BEGIN [^-]+-----/, '').replace(/-----END [^-]+-----/, '').replace(/\s+/g, '');
    var bin = atob(b64);
    var u8 = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8;
  }

  function u8toB64url(u8) {
    var bin = '';
    for (var i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i]);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function b64urltoU8(s) {
    var safe = s.replace(/-/g, '+').replace(/_/g, '/');
    while (safe.length % 4) safe += '=';
    var bin = atob(safe);
    var u8 = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8;
  }

  function genelAnahtar() {
    if (ANAHTAR_HAFIZA) return Promise.resolve(ANAHTAR_HAFIZA);
    return crypto.subtle.importKey('spki', pem2bin(GENEL_ANAHTAR_PEM).buffer,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify'])
      .then(function (k) { ANAHTAR_HAFIZA = k; return k; });
  }

  function lKaydet(a, b) { localStorage.setItem('dersApp_' + a, JSON.stringify(b)); }
  function lOku(a) { try { return JSON.parse(localStorage.getItem('dersApp_' + a)); } catch (e) { return null; } }

  function cihazId() {
    var i = lOku('cihazId');
    if (i) return i;
    i = 'C' + Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
    lKaydet('cihazId', i);
    return i;
  }

  /* 15 günlük deneme: ilk açılış tarihi + kalan gün */
  function denemeDurum() {
    var d = lOku('deneme');
    var simdi = Date.now();
    if (!d) {
      d = { bas: simdi, kagit: false };
      lKaydet('deneme', d);
    }
    var GUN = 24 * 60 * 60 * 1000;
    var kalan = ((d.bas + 15 * GUN) - simdi) / GUN;
    return { bas: d.bas, kalanGun: Math.max(0, Math.ceil(kalan)), bitti: kalan <= 0 };
  }

  /* Kayıtlı lisans parse'la (imzayı doğrula) */
  function lisansAyristir(kod) {
    try {
      kod = String(kod || '').replace(/\s+/g, '');
      var p = kod.split('.');
      if (p.length !== 2) return null;
      var veriB64 = p[0], imzaB64 = p[1];
      var veri = JSON.parse(atob(veriB64.replace(/-/g, '+').replace(/_/g, '/') + Array((4 - veriB64.length % 4) % 4).join('=')));
      if (!veri || !veri.b || !veri.c) return null;
      return { veri: veri, veriB64: veriB64, imzaB64: imzaB64 };
    } catch (e) { return null; }
  }

  /* İmzayı doğrula → geçerliyse {ad, cihaz, bitis} döndür */
  function lisansDogrula(kod) {
    var a = lisansAyristir(kod);
    if (!a) return Promise.resolve({ gecerli: false, neden: 'format' });
    var veriU8 = b64urltoU8(a.veriB64);
    var imzaU8 = b64urltoU8(a.imzaB64);
    return genelAnahtar().then(function (key) {
      return crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, imzaU8.buffer, veriU8.buffer);
    }).then(function (ok) {
      if (!ok) return { gecerli: false, neden: 'imza' };
      var bitisTs = new Date(a.veri.b + 'T23:59:59').getTime();
      if (Date.now() > bitisTs) return { gecerli: false, neden: 'suresi dolmus', ad: a.veri.k };
      return { gecerli: true, ad: a.veri.k, cihaz: a.veri.c, bitis: a.veri.b };
    }).catch(function () {
      return { gecerli: false, neden: 'hata' };
    });
  }

  /* Aktif cihaz kaydı (cihaz limiti) */
  function cihazLimit() {
    var l = lOku('lisans');
    return l ? (l.cihaz || 0) : 0;
  }
  function aktifCihazEkle(limit) {
    var a = lOku('aktifCihazlar') || {};
    var id = cihazId();
    var isimler = Object.keys(a);
    if (a[id]) { a[id].son = Date.now(); lKaydet('aktifCihazlar', a); return { ok: true }; }
    if (limit > 0 && isimler.length >= limit) return { ok: false, mesaj: 'cihaz-doldu' };
    a[id] = { bas: Date.now(), son: Date.now() };
    lKaydet('aktifCihazlar', a);
    return { ok: true };
  }

  /* Kayıtlı lisansı kaydet + cihaz ekle */
  function lisansKaydet(kod) {
    var p = lisansAyristir(kod);
    if (!p) return Promise.resolve({ ok: false, neden: 'format' });
    return lisansDogrula(kod).then(function (s) {
      if (!s.gecerli) return { ok: false, neden: s.neden };
      var e = aktifCihazEkle(s.cihaz);
      if (!e.ok) return { ok: false, neden: e.mesaj, ad: s.ad };
      lKaydet('lisans', { kod: kod, ad: s.ad, cihaz: s.cihaz, bitis: s.bitis, kayit: Date.now() });
      lKaydet('deneme', { bas: Date.now(), kagit: true });
      return { ok: true, ad: s.ad, cihaz: s.cihaz, bitis: s.bitis };
    });
  }

  /* Durum: 'lisansli' | 'deneme' | 'bitti' | 'liyakatli-yok' */
  function lisansGlobalDurum() {
    var l = lOku('lisans');
    var d = denemeDurum();
    if (l && l.bitis) {
      var bitisTs = new Date(l.bitis + 'T23:59:59').getTime();
      if (Date.now() > bitisTs) return { tip: 'bitti', ad: l.ad, bitis: l.bitis };
      // kayıtlı lisansı bir kez doğrula (önbelleğe al)
      return { tip: 'lisansli', ad: l.ad, cihaz: l.cihaz, bitis: l.bitis };
    }
    if (!d.bitti && !d.kagit) return { tip: 'deneme', kalanGun: d.kalanGun };
    if (d.bitti) return { tip: 'bitti' };
    return { tip: 'bitti' };
  }

  /* Kalan gün sayısı (deneme ya da lisans) */
  function kalanGun() {
    var l = lOku('lisans');
    if (l && l.bitis) {
      return Math.max(0, Math.ceil((new Date(l.bitis + 'T23:59:59').getTime() - Date.now()) / 86400000));
    }
    var d = denemeDurum();
    var GUN = 24 * 60 * 60 * 1000;
    return Math.max(0, Math.ceil(((d.bas + 15 * GUN) - Date.now()) / GUN));
  }

  lisans_ = {
    durum: lisansGlobalDurum,
    deneme: denemeDurum,
    dogrula: lisansDogrula,
    kaydet: lisansKaydet,
    kalanGun: kalanGun,
    cihaz: cihazId
  };
})();

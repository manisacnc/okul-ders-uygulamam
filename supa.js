/* ============================================================
   SUPA — Supabase REST istemcisi + Sınıf Yönetimi / Senkron
   Bağımlılık: supa-config.js (SUPA_URL, SUPA_KEY)
   Kullanım: tüm fonksiyonlar Promise döndürür.
   ============================================================ */
var kutuSUPA = (function () {
  function hazirMi() {
    return !!(typeof SUPA_URL !== 'undefined' && SUPA_URL && typeof SUPA_KEY !== 'undefined' && SUPA_KEY);
  }
  function base() { return SUPA_URL.replace(/\/+$/, '') + '/rest/v1'; }
  function header() {
    return {
      'apikey': SUPA_KEY,
      'Authorization': 'Bearer ' + SUPA_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
  }
  /* genel REST yardımcıları */
  function GET(tablo, sorgu) {
    return fetch(base() + '/' + tablo + (sorgu ? '?' + sorgu : ''), { headers: header() })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
  }
  function POST(tablo, gövde) {
    return fetch(base() + '/' + tablo, { method: 'POST', headers: header(), body: JSON.stringify(gövde) })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
  }
  function PATCH(tablo, sorgu, gövde) {
    return fetch(base() + '/' + tablo + '?' + sorgu, { method: 'PATCH', headers: header(), body: JSON.stringify(gövde) })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
  }
  function DELETE(tablo, sorgu) {
    return fetch(base() + '/' + tablo + '?' + sorgu, { method: 'DELETE', headers: header() })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r;
      });
  }

  /* ===== SINIF YÖNETİMİ (öğretmen) ===== */
  // Yeni sınıf oluştur. kod: sınıf kodu (ör. 6-A-KTGP). Dönüş: satır.
  function sinifOlustur(kod, ad, okul, sinif, ogretmen) {
    return POST('siniflar', { kod: kod, ad: ad, okul: okul, sinif: sinif, ogretmen: ogretmen })
      .then(function (a) { return a[0]; });
  }
  // Sınıfı oku (kod ile). İyi parça yoksa null.
  function sinifGetir(kod) {
    return GET('siniflar', 'kod=eq.' + encodeURIComponent(kod) + '&select=*')
      .then(function (a) { return (a && a[0]) || null; });
  }
  // Öğrenci ekle. Dönüş: oluşan satır (id, etkinleştirme kodu).
  function ogrenciEkle(kod, no, adsoyad, etkinlesme) {
    return POST('ogrenciler', { kod: kod, no: no, adsoyad: adsoyad, etkinlesme: etkinlesme })
      .then(function (a) { return a[0]; });
  }
  // Sınıftaki tüm öğrenciler
  function ogrenciListele(kod) {
    return GET('ogrenciler', 'kod=eq.' + encodeURIComponent(kod) + '&select=*&order=no');
  }
  // Öğrenciyi etkinleştirme koduyla bul (öğrenci tarafı bağlantısı)
  function ogrencietkinlesme(etkinlesme) {
    return GET('ogrenciler', 'etkinlesme=eq.' + encodeURIComponent(etkinlesme) + '&select=*')
      .then(function (a) { return (a && a[0]) || null; });
  }
  function ogrenciSil(id) {
    return DELETE('ogrenciler', 'id=eq.' + id);
  }

  /* ===== NOTLAR (öğretmen) ===== */
  function notEkle(ogrenciId, ders, not) {
    return POST('notlar', { ogrenci_id: ogrenciId, ders: ders, not_: not })
      .then(function (a) { return a[0]; });
  }
  function notListele(ogrenciId) {
    return GET('notlar', 'ogrenci_id=eq.' + ogrenciId + '&select=*&order=tarih');
  }
  function notGuncelle(id, ders, not) {
    return PATCH('notlar', 'id=eq.' + id, { ders: ders, not_: not });
  }
  function notSil(id) {
    return DELETE('notlar', 'id=eq.' + id);
  }

  /* ===== ÖĞRENCİ VERİ SENKRONU ===== */
  // Öğrencinin tüm çalışma verisini (bir alan) gönder. Upsert mantığı.
  function veriGonder(ogrenciId, alan, veri) {
    return GET('veri', 'ogrenci_id=eq.' + ogrenciId + '&alan=eq.' + encodeURIComponent(alan) + '&select=id')
      .then(function (mevcut) {
        if (mevcut && mevcut.length) {
          return PATCH('veri', 'ogrenci_id=eq.' + ogrenciId + '&alan=eq.' + encodeURIComponent(alan),
            { veri: veri, guncelleme: new Date().toISOString() });
        }
        return POST('veri', { ogrenci_id: ogrenciId, alan: alan, veri: veri, guncelleme: new Date().toISOString() });
      });
  }
  // Öğrencinin bir alanının verisini çek
  function veriGetir(ogrenciId, alan) {
    return GET('veri', 'ogrenci_id=eq.' + ogrenciId + '&alan=eq.' + encodeURIComponent(alan) + '&select=veri,guncelleme')
      .then(function (a) { return (a && a[0] && a[0].veri) || null; });
  }

  return {
    hazirMi: hazirMi,
    sinifOlustur: sinifOlustur,
    sinifGetir: sinifGetir,
    ogrenciEkle: ogrenciEkle,
    ogrenciListele: ogrenciListele,
    ogrencietkinlesme: ogrencietkinlesme,
    ogrenciSil: ogrenciSil,
    notEkle: notEkle,
    notListele: notListele,
    notGuncelle: notGuncelle,
    notSil: notSil,
    veriGonder: veriGonder,
    veriGetir: veriGetir
  };
})();

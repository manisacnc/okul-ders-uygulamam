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
  /* Upsert: kayıt varsa günceller (409 çakışmasını önler) */
  function UPSERT(tablo, sorgu, gövde) {
    var h = header();
    h.Prefer = 'return=representation,resolution=merge-duplicates';
    return fetch(base() + '/' + tablo + (sorgu ? '?' + sorgu : ''), { method: 'POST', headers: h, body: JSON.stringify(gövde) })
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
  // Veli erişim kodu ayarla (öğretmen)
  function veliKodAyarla(id, veliKod) {
    return PATCH('ogrenciler', 'id=eq.' + id, { veli_kod: veliKod });
  }
  // Veli erişim koduyla öğrenciyi bul (veli)
  function veliKodAra(veliKod) {
    return GET('ogrenciler', 'veli_kod=eq.' + encodeURIComponent(veliKod) + '&select=*')
      .then(function (a) { return (a && a[0]) || null; });
  }
  // Öğrenciyi id ile getir (öğretmen dosya yükleme)
  function ogrenciGetir(id) {
    return GET('ogrenciler', 'id=eq.' + id + '&select=*')
      .then(function (a) { return (a && a[0]) || null; });
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

  /* ===== ÖĞRENCİ DOSYASI (öğretmen kayıtları: devamsızlık / çalışma / konu) ===== */
  function detayListele(ogrenciId) {
    return GET('ogrenci_detay', 'ogrenci_id=eq.' + ogrenciId + '&select=*&order=olusturma.desc')
      .then(function (a) { return a || []; });
  }
  function detayEkle(ogrenciId, tip, tarih, alan, deger, aciklama) {
    return POST('ogrenci_detay', {
      ogrenci_id: ogrenciId, tip: tip, tarih: (tarih || null), alan: alan, deger: deger, aciklama: aciklama
    }).then(function (a) { return a[0]; });
  }
  function detaySil(id) {
    return DELETE('ogrenci_detay', 'id=eq.' + id);
  }

  /* ===== YOKLAMA ===== */
  function yoklamaKaydet(ogrenciId, tarih, durum, not_) {
    return UPSERT('yoklama', 'on_conflict=ogrenci_id,tarih', { ogrenci_id: ogrenciId, tarih: tarih || null, durum: durum, not_: not_ || '' })
      .then(function (a) { return a && a[0]; });
  }
  function yoklamaGuncelle(id, durum, not_) {
    return PATCH('yoklama', 'id=eq.' + id, { durum: durum, not_: not_ || '' });
  }
  function yoklamaSil(id) {
    return DELETE('yoklama', 'id=eq.' + id);
  }
  // Sınıf koduna göre belirli bir tarihteki yoklamaları getir (join ogrenciler)
  function yoklamaTarihe(sorguTarih) {
    return GET('yoklama', 'select=*')
      .then(function (a) { return (a || []).filter(function (r) {
        return r.tarih && String(r.tarih).slice(0, 10) === (sorguTarih || '');
      }); });
  }

  /* ===== SINAV / ÖDEV NOT GİRİŞİ ===== */
  function sinavListele(kod) {
    return GET('sinav', 'kod=eq.' + encodeURIComponent(kod) + '&select=*&order=olusturma.desc');
  }
  function sinavOlustur(kod, ad, tur, tarih) {
    return POST('sinav', { kod: kod, ad: ad, tur: tur, tarih: tarih || null })
      .then(function (a) { return a[0]; });
  }
  function sinavSil(id) {
    return DELETE('sinav', 'id=eq.' + id);
  }
  function sinavNotListele(sinavId) {
    return GET('sinav_not', 'sinav_id=eq.' + sinavId + '&select=*')
      .then(function (a) { return a || []; });
  }
  function sinavNotKaydet(sinavId, ogrenciId, not_) {
    return UPSERT('sinav_not', 'on_conflict=sinav_id,ogrenci_id', { sinav_id: sinavId, ogrenci_id: ogrenciId, not_: not_ })
      .then(function (a) { return a && a[0]; });
  }
  function sinavNotGuncelle(id, not_) {
    return PATCH('sinav_not', 'id=eq.' + id, { not_: not_ });
  }

  /* ===== DAVRANIŞ ===== */
  function davranisKaydet(ogrenciId, tarih, puan, aciklama) {
    return POST('davranis', { ogrenci_id: ogrenciId, tarih: tarih || null, puan: puan, aciklama: aciklama || '' })
      .then(function (a) { return a[0]; });
  }
  function davranisSil(id) {
    return DELETE('davranis', 'id=eq.' + id);
  }

  /* ===== Sınıf Duyurusu ===== */
  function duyuruListele(kod) {
    return GET('duyuru', 'kod=eq.' + encodeURIComponent(kod) + '&select=*&order=olusturma.desc');
  }
  function duyuruEkle(kod, baslik, metin) {
    return POST('duyuru', { kod: kod, baslik: baslik, metin: metin })
      .then(function (a) { return a[0]; });
  }
  function duyuruSil(id) {
    return DELETE('duyuru', 'id=eq.' + id);
  }

  /* ===== GENEL SORGULAR (öğrenci dosyası + rapor) ===== */
  function ogrenciAll(ogrenciId) {
    return Promise.all([
        GET('yoklama', 'ogrenci_id=eq.' + ogrenciId + '&select=*'),
        GET('davranis', 'ogrenci_id=eq.' + ogrenciId + '&select=*')
      ]).then(function (r) { return { yoklama: r[0] || [], davranis: r[1] || [] }; });
  }

  /* ===== DUYURU OKUNMA (okundu takibi) ===== */
  function okunmaIsaretle(duyuruId, ogrenciId) {
    return UPSERT('duyuru_okunma', 'on_conflict=duyuru_id,ogrenci_id', { duyuru_id: duyuruId, ogrenci_id: ogrenciId })
      .then(function (a) { return a && a[0]; });
  }
  function okunmaDurumu(ogrenciId) {
    return GET('duyuru_okunma', 'ogrenci_id=eq.' + ogrenciId + '&select=duyuru_id')
      .then(function (a) { return (a || []).map(function (r) { return r.duyuru_id; }); });
  }
  function duyuruOkunma(duyuruId) {
    return GET('duyuru_okunma', 'duyuru_id=eq.' + duyuruId + '&select=ogrenci_id')
      .then(function (a) { return (a || []).map(function (r) { return r.ogrenci_id; }); });
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
    veliKodAyarla: veliKodAyarla,
    veliKodAra: veliKodAra,
    ogrenciGetir: ogrenciGetir,
    notEkle: notEkle,
    notListele: notListele,
    notGuncelle: notGuncelle,
    notSil: notSil,
    detayListele: detayListele,
    detayEkle: detayEkle,
    detaySil: detaySil,
    yoklamaKaydet: yoklamaKaydet,
    yoklamaGuncelle: yoklamaGuncelle,
    yoklamaSil: yoklamaSil,
    yoklamaTarihe: yoklamaTarihe,
    sinavListele: sinavListele,
    sinavOlustur: sinavOlustur,
    sinavSil: sinavSil,
    sinavNotListele: sinavNotListele,
    sinavNotKaydet: sinavNotKaydet,
    sinavNotGuncelle: sinavNotGuncelle,
    davranisKaydet: davranisKaydet,
    davranisSil: davranisSil,
    duyuruListele: duyuruListele,
    duyuruEkle: duyuruEkle,
    duyuruSil: duyuruSil,
    ogrenciAll: ogrenciAll,
    okunmaIsaretle: okunmaIsaretle,
    okunmaDurumu: okunmaDurumu,
    duyuruOkunma: duyuruOkunma,
    veriGonder: veriGonder,
    veriGetir: veriGetir
  };
})();

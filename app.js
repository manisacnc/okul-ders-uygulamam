/* ===== YARDIMCILAR ===== */
/* Depolama koruması: localStorage engellenen ortamlarda (bazı tablet/viewer
   tarayıcıları) uygulamanın çökmeden bellekte çalışmasını sağlar. */
(function () {
  var mem = {}, t = null;
  try { t = window.localStorage; var _k = '__depo_test__'; t.setItem(_k, '1'); t.removeItem(_k); } catch (e) { t = null; }
  if (!t) {
    t = {
      getItem: function (k) { return (k in mem) ? mem[k] : null; },
      setItem: function (k, v) { mem[k] = String(v); },
      removeItem: function (k) { delete mem[k]; }
    };
  }
  try { Object.defineProperty(window, 'localStorage', { value: t, configurable: true, writable: true }); }
  catch (e) { window.localStorage = t; }
})();
function $(id) { return document.getElementById(id); }
function kaydet(a, b) { localStorage.setItem('dersApp_' + a, JSON.stringify(b)); }
function oku(a) { try { return JSON.parse(localStorage.getItem('dersApp_' + a)); } catch (e) { return null; } }

var ekran = document.getElementById('ekran');

function DERS_IKON(id) {
  var ikon = { trk: '📖', mat: '🧮', fen: '🔬', sos: '🌍', ink: '🇹🇷', din: '🕌', ing: '🇬🇧', alm: '🇩🇪', bty: '💻' };
  return ikon[id.substr(0, 3)] || '📘';
}

/* ====== DURUM ====== */
var durum = { tur: 'menu', sinif: null, ders: null, kitap: null, sayfa: 0, quiz: null, qSira: 0, qDogru: 0, qListe: [] };

/* ====== VERİ YARDIMCILARI ====== */
function dersBul(s, dersId) {
  var bilgi = MUFREDAT[s];
  if (!bilgi) return null;
  for (var i = 0; i < bilgi.dersler.length; i++) if (bilgi.dersler[i].id === dersId) return bilgi.dersler[i];
  return null;
}

function biten(k) {
  var done = oku('biti') || {};
  return !!done[k];
}

/* ====== TEST VERİSİ ====== */
function birimTest(dersId, bi) {
  var q = SORULAR[dersId];
  if (!q) return [];
  return (q[bi] || []).slice();
}
function tumSorular(dersId) {
  var q = SORULAR[dersId];
  if (!q) return [];
  var sonuc = [];
  for (var k in q) sonuc = sonuc.concat(q[k] || []);
  return sonuc;
}
function testVar(dersId) { return tumSorular(dersId).length > 0; }

/* ====== NAVİGASYON ====== */
function git(tur) {
  if (durum.pratikTimer) { clearInterval(durum.pratikTimer); durum.pratikTimer = null; }
  if (durum.tur === 'test' && tur !== 'test') sureDurdur();
  if (durum.tur === 'test' && tur === 'menu') devamSil();
  if ((durum.tur === 'kim' || durum.tur === 'hiz') && tur !== 'kim' && tur !== 'hiz') oyunDurdur();
   if (durum.tur === 'kart' && durum.kart && tur !== 'kart' && tur !== 'kartSon') {
    if (durum.kart.hepsi) kartKaydet(durum.kart.d, durum.kart.hepsi);
  }
  if (durum.tur === 'deney' && durum.deney && tur !== 'deney') durum.deney = null;
  if (durum.tur === 'seviye' && durum.sev && tur !== 'seviye' && tur !== 'seviyeSon') durum.sev = null;
  if (durum.tur === 'kodla' && durum.kodla && tur !== 'kodla') durum.kodla = null;
   durum.tur = tur;
   if (tur === 'menu') { durum.sinif = null; durum.ders = null; durum.cozDers = null; }
   tabGuncelle();
   render();
 }

/* ===== VIDEO DERS / ÇÖZÜMLÜ VİDEO ===== */
function videoUrl(dersId, i) {
  var v = (typeof VIDEO !== 'undefined') && VIDEO && VIDEO[dersId];
  if (!v) return null;
  var u = v[i];
  return (typeof u === 'string' && u.length) ? u : null;
}
function videoEmbedHTML(url) {
  if (!url) return '';
  if (/youtu\.be\/|youtube\.com\/(embed|v)\//.test(url)) {
    var id = (url.match(/(?:youtu\.be\/|embed\/|v=)([A-Za-z0-9_-]{6,})/));
    id = id ? id[1] : '';
    return '<div class="video-wrap"><iframe src="https://www.youtube.com/embed/' + id + '?rel=0&modestbranding=1&playsinline=1" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe></div>';
  }
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) {
    return '<div class="video-wrap"><video controls playsinline preload="metadata" style="width:100%;height:100%"><source src="' + url + '"></video></div>';
  }
  return '<div class="video-wrap"><iframe src="' + url + '" allowfullscreen allow="autoplay; encrypted-media" playsinline></iframe></div>';
}
function acKapaVideo(dersId, i, baslik) {
  var url = videoUrl(dersId, i);
  if (!url) { alert('Bu konuya henüz video eklenmemiş. "📄 Ders Notu" ile konuyu okuyabilir veya "▶ Bul" ile YouTube\u2019da konu anlatımını bulabilirsin.'); return; }
  var bas = baslik || (MUFREDAT[seciliSinif()] && MUFREDAT[seciliSinif()].dersler) ? dersBul(seciliSinif(), dersId) : null;
  var ad = bas && bas.birimler[i] ? bas.birimler[i].ad : (dersId + '-' + (i + 1));
 $('modal').innerHTML = '<div class="modal-icerik"><span class="kap" onclick="kapatOverlay()">✕</span><h3>🎬 ' + ad + '</h3><div class="video-wrap">' + videoEmbedHTML(url) + '</div></div>';
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}
function videoAraYouTube(konuAd, dersId) {
  var s = seciliSinif() || '6';
  var d = dersBul(s, dersId);
  var derAd = d ? d.ad : '';
  var sorgu = (s + '. Sınıf ' + derAd + ' ' + konuAd + ' konu anlatımı').replace(/\s+/g, ' ').trim();
  var url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(sorgu);
  window.open(url, '_blank');
}
function kapatOverlay() {
  $('modal').innerHTML = '';
  $('overlay').classList.remove('acik');
  $('modal').classList.remove('acik');
}

/* ====== KONU DERS NOTLARI (Konu İçerikleri) ====== */
function icerikCek(s, dersId, bi) {
  var D = window['DETAY' + s];
  if (D && D[dersId] && D[dersId][bi]) return D[dersId][bi];
  return null;
}
function detayHTML(t) {
  if (!t) return '';
  return t.split('\n').map(function (sat) {
    sat = sat.trim();
    if (!sat) return '';
    if (sat.indexOf('## ') === 0) return '<h3 class="detay-baslik">' + sat.slice(3) + '</h3>';
    if (sat.indexOf('- ') === 0) return '<div class="detay-madde">• ' + sat.slice(2) + '</div>';
    return '<p class="detay-paragraf">' + sat + '</p>';
  }).join('');
}
function konuCalis(dersId, i) {
  var d = dersBul(seciliSinif(), dersId);
  if (!d || !d.birimler[i]) return;
  var b = d.birimler[i];
  var detay = icerikCek(seciliSinif(), dersId, i) || b.detay;
  if (!detay) { alert('Bu konu için ders notu henüz hazır değil.'); return; }
  var h = '<div class="modal-icerik konu-icerik"><span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<h3 style="margin-bottom:4px">📖 ' + b.ad + '</h3>';
  h += '<div class="konu-kazanim">🎯 ' + esc(b.kazanim || '') + '</div>';
  h += '<div class="detay-alan">' + detayHTML(detay) + '</div>';
  h += '<button class="kucuk-buton" style="background:#1f8a70;margin-top:12px" onclick="konuSesliOku(\'' + dersId + '\',' + i + ')">🔊 Bu Konuyu Sesli Dinle</button>';
  h += '</div>';
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}
function konuSesliOku(dersId, i) {
  var d = dersBul(seciliSinif(), dersId);
  var b = d && d.birimler[i];
  var icerik = icerikCek(seciliSinif(), dersId, i);
  var metin = b ? (b.ad + '. ' + (icerik || b.detay || b.ozet || '')) : '';
  if (!metin) { alert('Bu konu için sesli okunacak metin yok.'); return; }
  seslendir(metin.replace(/## /g, '').replace(/- /g, ''), true);
}

/* ====== OKUL KÜTÜPHANESİ (e-Kitap) ====== */
function kitapProgress(id) { var s = oku('kitap') || {}; return (s[id] != null) ? s[id] : 0; }
function kitapKaydet(id, sayfa) { var s = oku('kitap') || {}; s[id] = sayfa; kaydet('kitap', s); }
function kitapTamam(id) {
  var k = KITAP[id]; if (!k || !k.sayfa || !k.sayfa.length) return false;
  return kitapProgress(id) >= k.sayfa.length - 1;
}
function favVar(id) { return !!(oku('kitapFavori') || {})[id]; }
function favToggle(id) {
  var f = oku('kitapFavori') || {};
  f[id] = !f[id];
  kaydet('kitapFavori', f);
  if (durum.tur === 'kitaplik') cizKitaplik();
}
function kitapAc(id) {
  durum.kitap = id;
  durum.sayfa = kitapProgress(id);
  git('okuma');
}
function okumaSes(ac) {
  if (!window.speechSynthesis) { alert('Tarayıcı sesli okumayı desteklemiyor.'); return; }
  if (!ac) { window.speechSynthesis.cancel(); return; }
  var k = KITAP[durum.kitap]; if (!k) return;
  var metin = k.sayfa[durum.sayfa] || '';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new (window.SpeechSynthesisUtterance || SpeechSynthesisUtterance)(metin));
}
function cizKitaplik() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📚 Okul Kütüphanesi</h1><p>Kitap seç, oku, favorilere ekle, ilerlemenizi takip et.</p></div>';
  if (!KITAP || Object.keys(KITAP).length === 0) { h += '<p class="kucuk-not">Henüz kütüphaneye kitap eklenmemiş.</p>'; ekran.innerHTML = h; return; }
  var s = seciliSinif();
  var fav = oku('kitapFavori') || {};
  var ada = 0;
  h += '<div class="kitap-grid">';
  Object.keys(KITAP).forEach(function(id) {
    var k = KITAP[id];
    if (s && k.sinif && String(k.sinif) !== s) return;
    var prog = kitapProgress(id);
    var tam = kitapTamam(id);
    ada++;
    h += '<div class="kitap-kart">';
    h += '<div class="kitap-kapak">' + (k.kapak || '📚') + '</div>';
    h += '<div class="kitap-baslik">' + k.ad + '</div>';
    h += '<div class="kitap-yazar">' + (k.yazar ? '<small>' + k.yazar + '</small>' : '') + '</div>';
    h += '<button class="kucuk-not" onclick="favToggle(\'' + id + '\')" title="Favoriye ekle/çıkar" style="background:transparent;font-size:22px;padding:0">' + (fav[id] ? '⭐' : '🤍') + '</button>';
    h += '<button class="btn btn-test" style="width:100%;margin-top:8px" onclick="kitapAc(\'' + id + '\')">' + (tam ? '✅ Tekrar Oku' : '📖 Oku') + '</button>';
    h += (prog > 0 && !tam) ? '<div class="kucuk-not">' + (prog + 1) + '/' + k.sayfa.length + ' sayfa</div>' : '';
    h += '</div>';
  });
  h += '</div>';
  if (!ada) h += '<p class="kucuk-not">Seçtiğin sınıf için kitap yok. Sınıfı değiştir.</p>';
  ekran.innerHTML = h;
}
function cizOkuma() {
  var id = durum.kitap;
  var k = KITAP[id];
  if (!k) { git('kitaplik'); return; }
  if (typeof durum.sayfa !== 'number' || durum.sayfa < 0) durum.sayfa = 0;
  if (durum.sayfa > k.sayfa.length - 1) durum.sayfa = k.sayfa.length - 1;
  var h = '<div class="okuma-bar"><button class="geri" onclick="git(\'kitaplik\')">⬅ Kütüphane</button>';
  h += '<span class="okuma-baslik">' + (k.kapak || '📚') + ' ' + k.ad + '</span>';
  h += '<span class="okuma-buton" onclick="okumaSes(true)" title="Oku">🔊</span>';
  h += '<span class="okuma-buton" onclick="okumaSes(false)" title="Durdur">🔇</span></div>';
  h += '<div class="okuma-sayfa"><div class="sayfa">' + esc(k.sayfa[durum.sayfa] || '') + '</div></div>';
  h += '<div class="okuma-alt"><button class="btn" onclick="okumaOnce()"' + (durum.sayfa <= 0 ? ' disabled' : '') + '>⬅️ Önceki</button>';
  h += '<span class="kucuk-not">' + (durum.sayfa + 1) + '/' + k.sayfa.length + '</span>';
  h += '<button class="btn" onclick="okumaSonra()"' + (durum.sayfa >= k.sayfa.length - 1 ? ' disabled' : '') + '>Sonraki ➡️</button></div>';
  kitapKaydet(id, durum.sayfa);
  if (kitapTamam(id)) {
    var tamList = oku('kitapTamam') || [];
    if (tamList.indexOf(id) < 0) { tamList.push(id); kaydet('kitapTamam', tamList); }
    var ilkTamam = tamList.indexOf(id) === 0;
    if (ilkTamam) {
      setTimeout(function() { alert('🎉 Kitabı bitirdin: ' + k.ad + ' · 📚 Okuyucu rozetin hazır!'); }, 200);
      rozetKontrol();
    }
  }
  ekran.innerHTML = h;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}
function okumaOnce() { durum.sayfa = Math.max(0, (durum.sayfa || 0) - 1); cizOkuma(); }
function okumaSonra() { durum.sayfa = (durum.sayfa || 0) + 1; cizOkuma(); }


function secSin(s) { if (durum.tur === 'test') sureDurdur(); durum.sinif = String(s); durum.ders = null; durum.tur = 'sinif'; tabGuncelle(); render(); }
function secDers(s, d) { if (durum.tur === 'test') sureDurdur(); durum.sinif = String(s); durum.ders = d; durum.tur = 'ders'; tabGuncelle(); render(); }

function render() {
  if (durum.tur === 'menu') cizMenu();
  else if (durum.tur === 'sinif') cizSinif();
  else if (durum.tur === 'ders') cizDers();
  else if (durum.tur === 'test') cizTest();
  else if (durum.tur === 'esle') cizEsle();
  else if (durum.tur === 'eson') cizEson();
  else if (durum.tur === 'sunum') cizSunum();
  else if (durum.tur === 'sunranda') cizSunranda();
  else if (durum.tur === 'plan') cizPlan();
  else if (durum.tur === 'gelisim') cizGelisim();
  else if (durum.tur === 'harita') cizHarita();
  else if (durum.tur === 'pomodoro') cizPomodoro();
  else if (durum.tur === 'saylar') cizSaylar();
  else if (durum.tur === 'odul') cizOdul();
  else if (durum.tur === 'kartSec') cizKartSec();
  else if (durum.tur === 'kart') cizKart();
  else if (durum.tur === 'kartSon') cizKartSon();
  else if (durum.tur === 'yanlis') cizYanlis();
  else if (durum.tur === 'tekrar') cizTekrar();
  else if (durum.tur === 'gorevler') cizGorevler();
  else if (durum.tur === 'takvim') cizTakvim();
  else if (durum.tur === 'profil') cizProfil();
  else if (durum.tur === 'program') cizProgram();
  else if (durum.tur === 'sinifSec') cizSinifSec();
  else if (durum.tur === 'oyun') cizOyun();
  else if (durum.tur === 'kim') cizKim();
  else if (durum.tur === 'hiz') cizHiz();
  else if (durum.tur === 'oyunSon') cizOyunSon();
  else if (durum.tur === 'karne') cizKarne();
  else if (durum.tur === 'konurapor') cizKonuRapor();
  else if (durum.tur === 'takip') cizTakip();
  else if (durum.tur === 'kitaplik') cizKitaplik();
  else if (durum.tur === 'okuma') cizOkuma();
  else if (durum.tur === 'yarisma') cizYarisma();
  else if (durum.tur === 'deneme') cizDeneme();
  else if (durum.tur === 'fen3d') cizFen3D();
  else if (durum.tur === 'canli') cizCanli();
   else if (durum.tur === 'etkinlik') cizEtkinlikler();
   else if (durum.tur === 'hafta') cizHafta();
   else if (durum.tur === 'deney') cizDeney();
   else if (durum.tur === 'seviye') cizSeviye();
   else if (durum.tur === 'seviyeSon') cizSeviyeSon();
   else if (durum.tur === 'cozumlu') cizCozumlu();
   else if (durum.tur === 'dinle') cizDinle();
   else if (durum.tur === 'belgesel') cizBelgesel();
   else if (durum.tur === 'kodla') cizKodla();
   else if (durum.tur === 'veri') cizVeri();
   else if (durum.tur === 'kontrol') cizKontrol();
    else if (durum.tur === 'video') cizVideo();
    else if (durum.tur === 'ara') cizAra();
    else if (durum.tur === 'flash') cizFlash();
    else if (durum.tur === 'kilit') cizKilit();
    else if (durum.tur === 'yol') cizYol();
    else if (durum.tur === 'lider') cizLider();
    else if (durum.tur === 'veli') cizVeli();
    else if (durum.tur === 'matdueli') cizMatDueli();
    else if (durum.tur === 'kelimebulmaca') cizKelimeBulmaca();
    else if (durum.tur === 'haftalikrapor') { ekran.innerHTML = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>' + haftalikRaporHTML(); }
    else if (durum.tur === 'medya') cizMedya();
    else if (durum.tur === 'bugun') cizBugun();
    else if (durum.tur === 'notlar') cizNotlar();
    else if (durum.tur === 'pratik') cizPratik();
    else if (durum.tur === 'hakimiyet') cizHakimiyet();
    else if (durum.tur === 'rolSec') cizRolSec();
    else if (durum.tur === 'ogr') cizOgretmen();
    else if (durum.tur === 'sinifYonet') cizSinifYonet();
    else if (durum.tur === 'sbaglan') cizSbaglan();
    else if (durum.tur === 'lisans') cizLisans();
   window.scrollTo(0, 0);
}

function tabGuncelle() {
  var aktifT = durum.tur;
  if (aktifT === 'sunranda') aktifT = 'sunum';
  var tabEtiket = { menu: 'Anasayfa', sunum: 'Sunum', plan: 'Çalışma Planı', gelisim: 'Gelişimim' };
  document.querySelectorAll('.tabs button').forEach(function(b) {
    var tur = b.getAttribute('data-tur');
    var yazi = b.querySelector('.tab-yazi');
    if (yazi && tabEtiket[tur]) yazi.textContent = t(tabEtiket[tur]);
    b.classList.toggle('aktif', tur === aktifT);
  });
}

/* ====== ANA SAYFA ====== */
function cizMenu() {
  var pr = profilOku();
  var h = '<div class="baslik"><h1>📚 Okul Ders Uygulamam</h1>';
  h += '<p>' + (pr.ad ? 'Merhaba ' + esc(pr.ad) + (pr.soyad ? ' ' + esc(pr.soyad) : '') + '! 👋 ' : 'Merhaba! ')
     + (pr.okul ? 'Okul: ' + esc(pr.okul) : '') + (pr.sinif ? (pr.okul ? ' · ' : '') + 'Sınıf: ' + esc(pr.sinif) : '') + '</p>';
  h += '<p>Sınıfını seç; konuları öğren, test çöz, gelişimini takip et.</p></div>';
  var _aktifRol = aktifRol();
  if (_aktifRol !== 'ogrenci') {
    var _rolAd = _aktifRol === 'veli' ? '👨‍👩‍👧 Veli' : '👩‍🏫 Öğretmen';
    h += '<div class="ozet-karti" style="border:2px solid #e67e22;margin-bottom:12px">'
      + '<div style="display:flex;align-items:center;gap:8px">'
      + '<span style="font-size:20px">' + (_aktifRol==='veli'?'👨‍👩‍👧':'👩‍🏫') + '</span>'
      + '<div style="flex:1"><b>' + _rolAd + ' Modu</b><br><small>Ana çalışma araçları öğrenci modunda kullanılır.</small></div>'
      + '<button class="kucuk-buton" style="background:' + (_aktifRol==='veli'?'#e67e22':'#6a5cff') + '" onclick="git(\'' + (_aktifRol==='veli'?'veli':'ogr') + '\')">Panele Git</button>'
      + '</div></div>';
  }
  var dv = oku('devam');
  if (dv && dv.L && dv.L.length) {
    h += '<div class="devam-karti">';
    h += '<div><b>▶️ Yarıda kalan testin var</b><br><small>' + dersAdi(dv.d) + ' · ' + dv.n + '/' + dv.L.length + ' soru çözüldü</small></div>';
    h += '<div class="devam-btnler"><button class="btn btn-test" onclick="testDevam()">Devam Et</button>' +
         '<button class="btn btn-geri" onclick="devamSil()">🗑️</button></div>';
    h += '</div>';
  }
  var xp = xpBilgi();
  var sev = seviyeHesapla(xp.p);
  h += '<div class="durum-karti">';
  h += '<div class="durum-huc"><b>⭐ XP</b><span>' + xp.p + '</span></div>';
  h += '<div class="durum-huc"><b>🎖 Seviye</b><span>' + sev + '</span></div>';
  h += '<div class="durum-huc"><b>🔥 Seri</b><span>' + xp.seri + ' gün</span></div>';
  h += '<div class="durum-huc"><b>🏅 Rozet</b><span>' + ((oku('odul') || []).length) + '/' + ROZETLER.length + '</span></div>';
  h += '<div class="durum-huc"><b>' + (typeof lisans_ !== 'undefined' ? '🔑 Lisans' : '') + '</b><span>' + (typeof lisans_ !== 'undefined' ? lisansBilgi() : '') + '</span></div>';
    h += '</div>';
    h += cizHedefBar();
    h += '<div class="seviye-cubuk"><div class="cubuk"><div class="cubuk-dolgu" style="width:' + seviyeYuzde(xp.p) + '%"></div></div>' +
         '<div class="kucuk-not">Sonraki seviye için ' + (300 - (xp.p % 300)) + ' XP daha 📈</div></div>';
  h += '<div class="baslik" style="margin-top:0px;margin-bottom:14px"><h2>🧰 Araçlarım</h2></div>';
  h += '<div class="araclar">';
  h += '<button class="arac" onclick="git(\'pomodoro\')"><span class="arac-ikon">⏱️</span>' + t('Pomodoro') + '<br><small>' + t('Odaklanma zamanlayıcısı') + '</small></button>';
  h += '<button class="arac" onclick="git(\'saylar\')"><span class="arac-ikon">📅</span>' + t('Sınav Geri Sayımı') + '<br><small>' + t('Sınavına kaç gün kaldı?') + '</small></button>';
  h += '<button class="arac" onclick="git(\'harita\')"><span class="arac-ikon">🗺️</span>' + t('Konu Hakimiyeti') + '<br><small>' + t('Neyi ne kadar öğrendim?') + '</small></button>';
  h += '<button class="arac" onclick="git(\'kartSec\')"><span class="arac-ikon">🃏</span>' + t('Bilgi Kartları') + '<br><small>' + t('Kağıt kart gibi çalış') + '</small></button>';
  h += '<button class="arac" onclick="git(\'odul\')"><span class="arac-ikon">🏅</span>' + t('Başarılarım') + '<br><small>' + t('Rozetler ve istatistikler') + '</small></button>';
  h += '<button class="arac" onclick="git(\'gorevler\')"><span class="arac-ikon">📋</span>' + t('Günlük Görevler') + '<br><small>' + t('Bugünün hedefleri') + '</small></button>';
  h += '<button class="arac" onclick="git(\'yanlis\')"><span class="arac-ikon">🔁</span>' + t('Yanlışlarım') + '<br><small>' + t('Yanlışları tekrar çöz') + '</small></button>';
  h += '<button class="arac" onclick="git(\'tekrar\')"><span class="arac-ikon">📒</span>' + t('Tekrar Defterim') + '<br><small>' + t('Zayıf konular için plan') + '</small></button>';
  h += '<button class="arac" onclick="git(\'takvim\')"><span class="arac-ikon">🔥</span>' + t('Çalışma Takvimi') + '<br><small>' + t('Son 30 günün') + '</small></button>';
  h += '<button class="arac" onclick="git(\'program\')"><span class="arac-ikon">📅</span>' + t('Ders Programım') + '<br><small>' + t('Saate göre planla') + '</small></button>';
  h += '<button class="arac" onclick="git(\'oyun\')"><span class="arac-ikon">🎮</span>' + t('Mini Oyunlar') + '<br><small>' + t('Kim Milyoner ve hız yarışı') + '</small></button>';
  h += '<button class="arac" onclick="git(\'hafta\')"><span class="arac-ikon">📊</span>' + t('Haftalık Özet') + '<br><small>' + t('Son 7 günün') + '</small></button>';
   h += '<button class="arac" onclick="git(\'karne\')"><span class="arac-ikon">📄</span>' + t('Karnem') + '<br><small>' + t('Yazdırılabilir rapor') + '</small></button>';
    h += '<button class="arac" onclick="git(\'takip\')"><span class="arac-ikon">📌</span>' + t('Takibimdekiler') + '<br><small>' + t('İzlediğin konular') + '</small></button>';
    h += '<button class="arac" onclick="git(\'kitaplik\')"><span class="arac-ikon">📚</span>' + t('Kütüphane') + '<br><small>' + t('Oku, bitir, takip et') + '</small></button>';
    h += '<button class="arac" onclick="git(\'yarisma\')"><span class="arac-ikon">🏆</span>' + t('Haftalık Yarışma') + '<br><small>' + t('XP topla, ödülü kap') + '</small></button>';
    h += '<button class="arac" onclick="git(\'deneme\')"><span class="arac-ikon">🎯</span>' + t('Denematik') + '<br><small>' + t('Aylık deneme sınavı') + '</small></button>';
    h += '<button class="arac" onclick="git(\'fen3d\')"><span class="arac-ikon">🔬</span>' + t('3B Fen') + '<br><small>' + t('Animasyonlu konular') + '</small></button>';
    h += '<button class="arac" onclick="git(\'canli\')"><span class="arac-ikon">📅</span>' + t('Canlı Dersler') + '<br><small>' + t('Haftalık ders takvimi') + '</small></button>';
    h += '<button class="arac" onclick="git(\'etkinlik\')"><span class="arac-ikon">🖨</span>' + t('Etkinlikler') + '<br><small>' + t('Yazdırılabilir çalışmalar') + '</small></button>';
    h += '<button class="arac" onclick="git(\'deney\')"><span class="arac-ikon">🧪</span>' + t('Fen Deneyleri') + '<br><small>' + t('Adım adım deneyler') + '</small></button>';
    h += '<button class="arac" onclick="git(\'cozumlu\')"><span class="arac-ikon">✏️</span>' + t('Çözümlü Sorular') + '<br><small>' + t('Adım adım çözümler') + '</small></button>';
    h += '<button class="arac" onclick="git(\'seviye\')"><span class="arac-ikon">🎯</span>' + t('Seviye Belirleme') + '<br><small>' + t('Başlangıç testi') + '</small></button>';
    h += '<button class="arac" onclick="git(\'dinle\')"><span class="arac-ikon">🎧</span>' + t('Dinleme Metinleri') + '<br><small>' + t('Dinle ve öğren') + '</small></button>';
    h += '<button class="arac" onclick="git(\'belgesel\')"><span class="arac-ikon">🎬</span>' + t('Belgeseller') + '<br><small>' + t('Konulu anlatımlar') + '</small></button>';
    h += '<button class="arac" onclick="git(\'kodla\')"><span class="arac-ikon">💻</span>' + t('Kodlama Atölyesi') + '<br><small>' + t('Algoritma ve bloklar') + '</small></button>';
    h += '<button class="arac" onclick="git(\'video\')"><span class="arac-ikon">🎬</span>' + t('Konu Videoları') + '<br><small>' + t('Ders videoları havuzu') + '</small></button>';
    h += '<button class="arac" onclick="git(\'kontrol\')"><span class="arac-ikon">🎯</span>' + t('Kazanım Listesi') + '<br><small>' + t('MEB kazanımları') + '</small></button>';
    h += '<button class="arac" onclick="git(\'veri\')"><span class="arac-ikon">🗄️</span>' + t('Veri ve Yedek') + '<br><small>' + t('Yedekle, geri yükle, güncelle') + '</small></button>';
   h += '<button class="arac" onclick="git(\'ara\')"><span class="arac-ikon">🔍</span>' + t('Konu Ara') + '<br><small>' + t('Kelimeyle konu bul') + '</small></button>';
   h += '<button class="arac" onclick="git(\'flash\')"><span class="arac-ikon">🌐</span>' + t('Kelime Kartları') + '<br><small>' + t('İngilizce kelimeler') + '</small></button>';
   h += '<button class="arac" onclick="git(\'bugun\')"><span class="arac-ikon">📅</span>' + t('Bugünün Planı') + '<br><small>' + t('Akıllı günlük öneri') + '</small></button>';
   h += '<button class="arac" onclick="git(\'notlar\')"><span class="arac-ikon">📝</span>' + t('Notlarım') + '<br><small>' + t('Konu notların') + '</small></button>';
   h += '<button class="arac" onclick="git(\'pratik\')"><span class="arac-ikon">🧮</span>' + t('Pratik') + '<br><small>' + t('Hızlı alıştırma') + '</small></button>';
   h += '<button class="arac" onclick="git(\'hakimiyet\')"><span class="arac-ikon">📊</span>' + t('Hakimiyetim') + '<br><small>' + t('Genel başarı durumun') + '</small></button>';
   if (typeof lisans_ !== 'undefined') h += '<button class="arac" style="border-color:#6a5cff" onclick="git(\'lisans\')"><span class="arac-ikon">🔑</span>' + t('Lisans') + '<br><small>' + esc(lisansBilgi()) + '</small></button>';
    h += '</div>';
  h += mebBannerHTML();
  h += '<div id="meb-kontrol-yukleniyor" style="text-align:center;margin-bottom:10px"></div>';
  h += '<div style="text-align:center;margin-bottom:16px"><button class="kucuk-not" style="color:#2ecc71;cursor:pointer;border:1px solid #2ecc71;border-radius:8px;padding:6px 12px" onclick="mebKontrolEtManuel()">🔄 MEB Program Kontrolü</button>';
  if (mebDurumCache && mebDurumCache.kontrolTarihi) h += ' <small style="color:#888">Son kontrol: ' + new Date(mebDurumCache.kontrolTarihi).toLocaleString('tr-TR') + '</small>';
  h += '</div>';
  h += '<div class="baslik" style="margin-top:20px;margin-bottom:14px"><h2>📚 Sınıflar</h2></div>';
  h += '<div class="ozet-karti"><div class="grader">';
  var sk = seciliSinif();
  for (var s in MUFREDAT) {
    if (sk && String(s) !== sk) continue;
    var topl = 0, bitti = 0;
    MUFREDAT[s].dersler.forEach(function(d) {
      d.birimler.forEach(function (_, i) { topl++; if (biten(d.id + '-' + i)) bitti++; });
    });
    h += '<button class="grade-card renk' + s + '" onclick="secSin(' + s + ')">' +
         '<span class="yildiz">' + s + '</span>' + s + '. Sınıf<br>' +
         '<span style="font-size:13px;font-weight:600">' + bitti + '/' + topl + ' konu tamam</span></button>';
  }
  h += '</div>';
  if (sk) h += '<div style="text-align:center;padding-top:4px"><button class="kucuk-not" style="color:#9b59b6;cursor:pointer" onclick="git(\'sinifSec\')">🔄 Sınıfı Değiştir</button></div>';
  h += '</div>';
  ekran.innerHTML = h + cizOneri();
}

/* ====== ÖNERİ: ZAYIF KONULAR ====== */
function oneriKonular(limit) {
  limit = limit || 5;
  var s = seciliSinif();
  if (!s) {
    var p = profilOku();
    if (p.sinif) s = String(p.sinif).charAt(0);
  }
  if (!s) return [];
  var bilgi = MUFREDAT[s];
  if (!bilgi) return [];
  var puan = oku('puan') || {};
  var aday = [];
  bilgi.dersler.forEach(function(d) {
    d.birimler.forEach(function(b, bi) {
      var list = (puan[d.id] || []).filter(function(e){ return String(e.u) === String(bi); });
      var skor = null;
      if (list.length) {
        var dt = 0, nt = 0;
        list.forEach(function(e){ dt += e.d; nt += e.n; });
        skor = nt ? Math.round(dt / nt * 100) : 0;
      }
      aday.push({ dersId: d.id, dersAd: d.ad, bi: bi, birimAd: b.ad, skor: skor, deneme: list.length });
    });
  });
  function oncelik(a) {
    if (a.skor === null) return 0;
    if (a.skor < 70) return 1;
    if (a.skor < 100) return 2;
    return 3;
  }
  aday.sort(function(a, b) {
    var d = oncelik(a) - oncelik(b);
    if (d !== 0) return d;
    if (a.skor === null && b.skor === null) return a.deneme - b.deneme;
    if (a.skor === null) return 1;
    if (b.skor === null) return -1;
    return a.skor - b.skor;
  });
  return aday.slice(0, limit);
}

function cizOneri() {
  var l = oneriKonular(4);
  if (!l.length) return '';
  var s = seciliSinif();
  var h = '<div class="ozet-karti" style="margin-top:18px">';
  h += '<div class="baslik"><h2 style="font-size:18px">🤖 Şu konulara çalış!</h2><p style="font-size:13px;color:#5c6b85">Zayıf veya az çalışılan birimler.</p></div>';
  h += '<div class="unitler">';
  l.forEach(function(o) {
    var etiket = o.skor === null ? '⚡ Hiç çalışılmadı' : (o.skor < 70 ? '😅 Zayıf (' + o.skor + '%)' : (o.skor < 100 ? '🙂 ' + o.skor + '%' : '✅ ' + o.skor + '%'));
    h += '<div class="unit"><div class="unit-baslik" onclick="secDers(\'' + s + '\',\'' + o.dersId + '\')" style="justify-content:space-between">' +
         '<span style="flex:1"><span class="uad">' + o.dersAd + ' ▸ ' + (o.bi + 1) + '. ' + o.birimAd + '</span>' +
         '<div class="durum-ikon">' + etiket + '</div></span></div></div>';
  });
  h += '</div></div>';
  return h;
}

/* ====== SINIF SAYFASI ====== */
function cizSinif() {
  var s = durum.sinif;
  var bilgi = MUFREDAT[s];
  if (!bilgi) return;
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>' + s + '. Sınıf Dersleri</h1><p>' + bilgi.bilgi + '</p></div>';
  h += '<div class="dersler">';
  bilgi.dersler.forEach(function(d) {
    var topl = d.birimler.length, bitti = 0;
    d.birimler.forEach(function (_, i) { if (biten(d.id + '-' + i)) bitti++; });
    h += '<button class="ders-card" onclick="secDers(\'' + s + '\',\'' + d.id + '\')">' +
         '<span class="ikon">' + DERS_IKON(d.id) + '</span>' +
         '<span><span class="ad">' + d.ad + '</span><br>' +
         '<span class="alt">' + bitti + '/' + topl + ' konu tamam</span></span></button>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}

/* ====== DERS SAYFASI ====== */
function cizDers() {
  var s = durum.sinif;
  var d = dersBul(s, durum.ders);
  if (!d) { git('sinif'); return; }
  var p = profilOku();
  var h = '<button class="geri" onclick="secSin(' + s + ')">⬅ ' + s + '. Sınıf</button>';
  h += '<div class="baslik"><h1>' + DERS_IKON(d.id) + ' ' + d.ad + '</h1><p>' + s + '. sınıf · MEB müfredatına göre</p></div>';
  h += '<div class="ust-satir">';
  if (testVar(d.id)) h += '<button class="btn btn-test" onclick="testBaslat(\'' + d.id + '\',\'\')">🧪 Tüm Konu Testi</button>';
   if (testVar(d.id)) h += '<button class="btn btn-ogren" onclick="testBaslat(\'' + d.id + '\',\'\',0,1)">⏱️ Süreli Deneme</button>';
   if (testVar(d.id)) h += '<button class="btn btn-adp" onclick="adaptifTestBaslat(\'' + d.id + '\')">🎯 Adaptif Test (AI)</button>';
  if (esleVar(d.id)) h += '<button class="btn btn-mor" onclick="eslesBaslat(\'' + d.id + '\')">🧩 Eşleştirme</button>';
  if (esleVar(d.id) || soruVar(d.id)) h += '<button class="btn btn-neo" onclick="kartBaslat(\'' + d.id + '\')">🃏 Bilgi Kartı</button>';
  h += '<button class="btn btn-rap" onclick="git(\'konurapor\')">📊 Konu Raporu</button>';
  h += '<button class="btn btn-bitir" onclick="dersSifirla(\'' + d.id + '\')">🔄 Ders Sıfırla</button>';
  if (d.mebLink) h += '<a class="btn btn-meb" href="' + esc(d.mebLink) + '" target="_blank" rel="noopener">🎯 MEB Müfredatı</a>';
  h += '</div>';
  h += '<div class="unitler">';
  d.birimler.forEach(function(b, i) {
    var tamam = biten(d.id + '-' + i);
    var hak = hakimiyet(d.id, i);
    h += '<div class="unit">';
    h += '<div class="unit-baslik" onclick="this.parentElement.classList.toggle(\'acik\')">';
    h += '<span class="num" style="background:' + (b.renk || '#6a5cff') + '">' + (i + 1) + '</span>';
    h += '<span class="uad">' + b.ad + '</span>';
     h += '<span class="durum-ikon">' + (tamam ? '✅' : '⬜') + '</span>';
     if (videoUrl(d.id, i)) h += '<span class="video-ikon" title="Video ders" onclick="acKapaVideo(\'' + d.id + '\',' + i + ',\'' + b.ad + '\')">🎬</span>';
     h += '<span class="ok">▶</span>';
    h += '</div>';
    h += '<div class="unit-acik">';
    if (b.ozet) h += '<div class="ozet-kutusu">' + b.ozet + '</div>';
    if (b.kazanim) h += '<div class="meb-kazanim">🎯 MEB Kazanımı: ' + esc(b.kazanim) + '</div>';
    if (b.konular && b.konular.length) {
      h += '<div class="konular">' + b.konular.map(function(k) { return '<span class="konu-etiket">' + k + '</span>'; }).join('') + '</div>';
    }
    if (hak !== null) {
      var hR = hak < 50 ? 'hak-kotu' : hak < 80 ? 'hak-orta' : 'hak-iyi';
      h += '<div class="hak"><div class="hak-ust"><span>🗺️ Hakimiyet</span><span>%' + hak + '</span></div>' +
           '<div class="cubuk hak' + (hak < 50 ? ' zayif' : hak < 80 ? ' orta' : ' guclu') + '"><div class="cubuk-dolgu" style="width:' + hak + '%"></div></div></div>';
    }
    h += '<div class="unit-butonlar">';
    if (birimTest(d.id, i).length) {
      h += '<div class="seviye-satir"><span>Seviye:</span>';
      h += '<button class="zbut z1" onclick="testBaslat(\'' + d.id + '\',\'' + i + '\',1)">😊 Kolay</button>';
      h += '<button class="zbut z2" onclick="testBaslat(\'' + d.id + '\',\'' + i + '\',2)">🙂 Orta</button>';
      h += '<button class="zbut z3" onclick="testBaslat(\'' + d.id + '\',\'' + i + '\',3)">😮 Zor</button>';
      h += '</div>';
    }
  h += '<label>Fotoğrafım:</label>';
  h += '<label class="kucuk-not" style="display:inline-block;cursor:pointer;background:#6a5cff;border-radius:10px;padding:8px 14px;color:#fff;font-weight:700">';
  h += '📷 Resim Seç<input type="file" accept="image/*" style="display:none" onchange="fotoSec(event)">';
  h += '</label>';
  if (p.foto) {
    h += '<div id="fotoOniz" style="text-align:center;margin-top:8px"><img src="' + esc(p.foto) + '" style="width:70px;height:70px;border-radius:12px;object-fit:cover;border:2px solid #6a5cff"><div>';
    h += '<button class="kucuk-buton" style="background:#e74c3c;margin-top:6px" onclick="fotoSil()">🗑️ Fotoğrafı Kaldır</button>';
    h += '</div></div>';
  }
    if (b.ozet) h += '<button class="kucuk-buton" style="background:#1f8a70" onclick="sesliOku(' + i + ')">🔊 Konuyu Dinle</button>';
    h += '<button class="kucuk-buton" style="background:#f39c12" onclick="notEkle(\'' + d.id + '\',' + i + ')">📝 Not</button> ';
    if (b.detay) h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="konuCalis(\'' + d.id + '\',' + i + ')">📖 Konuyu Çalış</button>';
    h += '<button class="kucuk-buton" style="background:' + (tamam ? '#7f8c8d' : '#2ecc71') + '" onclick="toggleTik(\'' + d.id + '\',' + i + ')">' + (tamam ? '↩️ Geri Al' : '✓ Tamamladım') + '</button>';
    h += '</div>';
    h += '</div></div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}

function toggleTik(dersId, i) {
  var done = oku('biti') || {};
  var k = dersId + '-' + i;
  if (done[k]) {
    delete done[k];
  } else {
    done[k] = true;
    xpEkle(5);
    gorevIlerle('konu', 1);
  }
  kaydet('biti', done);
  cizDers();
}

function dersSifirla(dersId) {
  if (!confirm('Bu dersteki tüm "tamamladım" işaretleri silinsin mi?')) return;
  var done = oku('biti') || {};
  var d = dersBul(durum.sinif, dersId);
  if (d) d.birimler.forEach(function (_, i) { delete done[dersId + '-' + i]; });
  kaydet('biti', done);
  cizDers();
}

/* ====== TEST ====== */
function testBaslat(dersId, bi, zli, sureli) {
  var liste = (bi === '' || bi === null || bi === undefined) ? tumSorular(dersId) : birimTest(dersId, bi);
  if (!liste.length) { alert('Bu konu için henüz soru eklenmemiş.'); return; }
  if (zli === 1 || zli === 2 || zli === 3) {
    var f = liste.filter(function(s) { return s.z === zli; });
    if (f.length >= 2) liste = f;
  }
  sureDurdur();
  durum.quiz = dersId;
  durum.qBirim = (bi === '' || bi === null || bi === undefined) ? '' : bi;
  durum.qListe = liste;
  durum.qSira = 0;
  durum.qDogru = 0;
  durum.qRekor = null;
  durum.qHavuz = false;
  durum.qSureDoldu = false;
  if (sureli) {
    durum.sure = { kalan: Math.max(10, Math.ceil(liste.length * 1.5)) * 60 };
    durum.sureKayit = setInterval(sureTik, 1000);
  } else {
    durum.sure = null;
  }
   durum.tur = 'test';
  tabGuncelle();
  devamKaydet();
  render();
}

function cizTest() {
  var L = durum.qListe;
  if (durum.qSira >= L.length) { cSonuc(); return; }
  var n = durum.qSira;
  var q = L[n];
  var h = '<div class="quiz-kutu"><div class="quiz-baslik">' +
          '<div><b>' + DERS_IKON(durum.quiz) + ' ' + dersAdi(durum.quiz) + '</b></div>' +
          '<div class="iller-puan">Soru ' + (n + 1) + '/' + L.length + ' &nbsp; ⭐ ' + durum.qDogru + ' doğru' +
          (durum.sure ? ' &nbsp; <span class="sure-goster" id="sureGoster">⏱️ ' + sureYaz(durum.sure.kalan) + '</span>' : '') +
          '</div></div>';
  h += '<div class="quiz-soru">' + q.s + '</div>';
  h += '<div style="text-align:center;margin-bottom:12px"><button class="kucuk-buton" style="background:#1f8a70" onclick="soruDinle()">🔊 Soruyu Dinle</button></div>';
  q.o.forEach(function(o, i) {
    h += '<button class="secenek" onclick="cevapSec(' + i + ',this)">' + String.fromCharCode(65 + i) + ') ' + o + '</button>';
  });
  h += '</div>';
  var geri = '<br><button class="geri" onclick="git(\'menu\')">⬅ Testten çık</button>';
  ekran.innerHTML = h + geri;
}

function cevapSec(secim, el) {
  var q = durum.qListe[durum.qSira];
  var dogru = (secim === q.d);
  if (dogru) durum.qDogru++;
  document.querySelectorAll('.secenek').forEach(function(b, i) {
    b.style.pointerEvents = 'none';
    if (i === q.d) b.classList.add('dogru');
    if (i === secim && secim !== q.d) b.classList.add('yanlis');
  });
  if (durum.qHavuz) {
    yanlisHavuzGuncelle(dogru);
  } else if (!dogru) {
    yanlisEkle(q, secim);
  }
  var bitmeden = (durum.qSira === durum.qListe.length - 1);
  if (bitmeden) { sureDurdur(); durum.sure = null; }
  setTimeout(function() {
    if (bitmeden) {
      var once = null;
      if (durum.quiz !== 'yanlis' && durum.quiz !== 'zayif') once = enIySkor(durum.quiz, durum.qBirim);
      puanKaydet(durum.quiz, durum.qDogru, durum.qListe.length, durum.qBirim);
      if (durum.quiz !== 'yanlis' && durum.quiz !== 'zayif') {
        var yz2 = durum.qListe.length ? durum.qDogru / durum.qListe.length : 0;
        durum.qRekor = !once ? { yeni: true, ilk: true } : (once.y < yz2 ? { yeni: true, oz: once } : { yeni: false, oz: once });
      }
      cSonuc();
    } else {
      durum.qSira++;
      devamKaydet();
      cizTest();
    }
  }, 900);
}

function cSonuc() {
  sureDurdur();
  devamSil();
  var L = durum.qListe || [];
  var yz = L.length ? Math.round(durum.qDogru / L.length * 100) : 0;
  var ikon = yz >= 90 ? '🏆' : yz >= 70 ? '🎉' : yz >= 50 ? '🙂' : '💪';
  var mesaj = yz >= 90 ? 'Mükemmel, süpersin! 🥳' :
              yz >= 70 ? 'Harikasın! Biraz daha tekrar, yıldıza ulaşırsın.' :
              yz >= 50 ? 'Fena değil! Konuyu tekrar edip yeniden dene.' :
                        'Üzülme, konuyu tekrar oku ve bir daha çöz.';
  var h = '<div class="quiz-kutu"><div class="sonuc"><div class="buyuk">' + ikon + '</div>' +
          '<div class="puan">' + durum.qDogru + ' / ' + L.length + ' doğru</div>' +
          '<p style="color:#5c6b85">%' + yz + ' başarı</p>' +
          '<p style="margin:16px 0;font-size:17px;font-weight:700">' + mesaj + '</p>';
  if (durum.qSureDoldu) h += '<p style="color:#e67e22;font-weight:700;margin-bottom:12px">⏰ Süren doldu; cevaplamadığın sorular boş sayıldı.</p>';
  if (durum.qRekor) {
    var r = durum.qRekor;
    if (r.yeni) h += '<div class="rekor-bilgi rekor-yeni">' + (r.ilk ? '🥇 İlk sonucun kaydedildi!' : '🏅 YENİ REKOR! Önceki en iyi: %' + Math.round(r.oz.y * 100) + ' (' + r.oz.t + ')') + '</div>';
    else h += '<div class="rekor-bilgi">👻 Hayalet Yarışı: en iyi sonucun %' + Math.round(r.oz.y * 100) + '. Bu sefer geçmeye çalış!</div>';
  }
  h += '<button class="btn btn-mor" onclick="git(\'menu\')">🏠 Anasayfa</button> ';
  if (durum.qHavuz) h += '<button class="btn btn-test" onclick="yanlisQuiz()">🔁 Tekrar Çöz</button> ';
  else if (durum.quiz === 'zayif') h += '<button class="btn btn-test" onclick="zayifTest()">🔁 Tekrar Çöz</button> ';
  else if (durum.quiz) h += '<button class="btn btn-test" onclick="testBaslat(\'' + durum.quiz + '\',\'\')">🔁 Tekrar Çöz</button> ';
  h += '<button class="btn btn-test" onclick="git(\'yanlis\')">🔁 Yanlışlarım</button>';
  h += '<button class="btn btn-ogren" onclick="cozumleriDinle()">🔊 Çözümleri Dinle</button>';
  h += '</div></div>';
  ekran.innerHTML = h;
}
function cizSonuc() { cSonuc(); }

function puanKaydet(dersId, dogru, toplam, u) {
  if (dersId === 'yanlis') {
    xpEkle(Math.max(2, Math.round(8 * dogru / toplam)) + 2);
    return;
  }
  if (dersId === 'zayif') {
    xpEkle(Math.max(3, Math.round(10 * dogru / toplam)) + (dogru === toplam ? 5 : 0));
    return;
  }
  var p = oku('puan') || {};
  var list = p[dersId] || [];
  list.push({ t: new Date().toLocaleDateString('tr-TR'), d: dogru, n: toplam });
  if (u !== undefined) list[list.length - 1].u = u;
  if (list.length > 50) list.shift();
  p[dersId] = list;
  kaydet('puan', p);
  var ist = oku('istatistik') || {};
  ist.soru = (ist.soru || 0) + toplam;
  kaydet('istatistik', ist);
  var sg = oku('sorugun') || {};
  var bg2 = gunKod(new Date());
  sg[bg2] = (sg[bg2] || 0) + toplam;
  kaydet('sorugun', sg);
  if (dersId.indexOf('esle-') === 0) gorevIlerle('esle', 1); else gorevIlerle('test', 1);
  xpEkle(Math.max(3, Math.round(20 * dogru / toplam)) + (dogru === toplam ? 10 : 0));
}

function dersAdi(id) {
  if (id === 'yanlis') return 'Yanlışlarım';
  if (id === 'zayif') return 'Zayıf Konular';
  if (typeof id === 'string' && id.indexOf('esle-') === 0) {
    var alt = id.substr(5);
    for (var gz in MUFREDAT) {
      var dd = dersBul(gz, alt);
      if (dd) return gz + '. Sınıf · Eşleştirme ' + dd.ad;
    }
  }
  for (var sy in MUFREDAT) {
    var d = dersBul(sy, id);
    if (d) return sy + '. Sınıf · ' + d.ad;
  }
  return 'Test';
}

/* ===== EŞLEŞTİRME ===== */
function esleVar(dersId) {
  var t = ESLESTIRME[dersId];
  if (!t) return false;
  for (var i = 0; i < t.length; i++) if (t[i].length > 0) return true;
  return false;
}

function soruVar(dersId) {
  var s = SORULAR[dersId];
  if (!s) return false;
  return Object.keys(s).some(function(k){ return (s[k] || []).length > 0; });
}

function karistir(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var gec = a[i]; a[i] = a[j]; a[j] = gec;
  }
  return a;
}

function eslesBaslat(dersId) {
  var turs = ESLESTIRME[dersId];
  if (!turs) return;
  var ciftler = [];
  turs.forEach(function(t) {
    t.forEach(function(p) { ciftler.push({ terim: p[0], tanim: p[1] }); });
  });
  if (ciftler.length < 4) { alert('Bu ders için yeterli eşleştirme yok.'); return; }
  var sirali = [];
  for (var i = 0; i < ciftler.length; i++) sirali.push(i);
  karistir(sirali);
  durum.esle = {
    ders: dersId,
    ciftler: ciftler,
    sirali: sirali,
    done: ciftler.map(function () { return false; }),
    secTerm: -1,
    secDef: -1,
    dogru: 0,
    yanlis: 0
  };
  durum.tur = 'esle';
  tabGuncelle();
  render();
}

function cizEsle() {
  var e = durum.esle;
  if (!e) { git('ders'); return; }
  var h = '<button class="geri" onclick="git(\'ders\')">⬅ Derse Dön</button>';
  h += '<div class="baslik"><h1>🧩 Eşleştirme Çalışması</h1><p>Soldaki kavrama, sağdaki doğru tanımı seç.</p></div>';
  h += '<div class="quiz-kutu">';
  var tamam = e.done.filter(function(x) { return x; }).length;
  h += '<div class="quiz-baslik"><div><b>' + dersAdi(e.ders) + '</b></div>' +
       '<div class="iller-puan">Eşleşen: ' + tamam + '/' + e.ciftler.length + '</div></div>';
  h += '<div class="esle-kutu">';
  h += '<div class="esle-sol"><div class="esle-bas">Kavramlar</div>';
  e.ciftler.forEach(function(c, i) {
    var yapildi = e.done[i];
    var secim = (e.secTerm === i);
    h += '<button class="esle-btn' + (yapildi ? ' esle-done' : '') + (secim ? ' esle-sec' : '') + '" ' +
         (yapildi ? 'disabled' : '') + ' onclick="esleTerm(' + i + ')">' + c.terim + '</button>';
  });
  h += '</div>';
  h += '<div class="esle-sag"><div class="esle-bas">Tanımlar</div>';
  e.sirali.forEach(function(idx) {
    var c = e.ciftler[idx];
    var yapildi = e.done[idx];
    var secim = (e.secDef === idx);
    h += '<button class="esle-btn' + (yapildi ? ' esle-done' : '') + (secim ? ' esle-sec' : '') + '" ' +
         (yapildi ? 'disabled' : '') + ' onclick="esleDef(' + idx + ')">' + c.tanim + '</button>';
  });
  h += '</div>';
  h += '</div>';
  h += '<div class="kucuk-not">Bir kavrama, bir tanıma tıkalıp eşleştir.</div>';
  h += '</div>';
  ekran.innerHTML = h;
}

function esleTerm(i) {
  var e = durum.esle;
  if (e.done[i]) return;
  e.secTerm = (e.secTerm === i) ? -1 : i;
  cizEsle();
  if (e.secTerm !== -1 && e.secDef !== -1) esleKontrol();
}

function esleDef(i) {
  var e = durum.esle;
  if (e.done[i]) return;
  e.secDef = (e.secDef === i) ? -1 : i;
  cizEsle();
  if (e.secTerm !== -1 && e.secDef !== -1) esleKontrol();
}

function esleKontrol() {
  var e = durum.esle;
  if (e.secTerm === e.secDef) {
    e.done[e.secTerm] = true;
    e.dogru++;
    e.secTerm = -1;
    e.secDef = -1;
    if (e.done.every(function(x) { return x; })) { esleBitti(); return; }
  } else {
    e.yanlis++;
  }
  setTimeout(function() {
    e.secTerm = -1;
    e.secDef = -1;
    if (durum.tur === 'esle') cizEsle();
  }, 700);
  esleSonucunuGoster();
}

function esleSonucunuGoster() { cizEsle(); }

function esleBitti() {
  puanKaydet('esle-' + durum.esle.ders, durum.esle.dogru, durum.esle.ciftler.length);
  durum.tur = 'eson';
  render();
}

function cizEson() {
  var e = durum.esle;
  var n = e.ciftler.length;
  var yz = n ? Math.round(e.dogru / n * 100) : 0;
  var ikon = e.dogru === n ? '🏆' : yz >= 70 ? '🎉' : yz >= 50 ? '🙂' : '💪';
  var mesaj = e.dogru === n ? 'Harika! Hepsi doğru, süpersin!' : yz >= 70 ? 'Çok iyi! Biraz daha bakarsan tamamını yaparsın.' : 'Tekrar dene, öğrenmek bu!';
  var h = '<div class="quiz-kutu"><div class="sonuc"><div class="buyuk">' + ikon + '</div>' +
          '<div class="puan">' + e.dogru + ' / ' + n + ' doğru eşleşme</div>' +
          '<p style="color:#5c6b85">%' + yz + ' başarı</p>' +
          '<p style="margin:16px 0;font-size:17px;font-weight:700">' + mesaj + '</p>' +
          '<button class="btn btn-mor" onclick="git(\'menu\')">🏠 Anasayfa</button> ' +
          '<button class="btn btn-neo" onclick="eslesBaslat(\'' + e.ders + '\')">🔁 Tekrar</button></div></div>';
  ekran.innerHTML = h;
}

/* ====== ÇALIŞMA PLANI ====== */
var GUNLER = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
var SLOTLAR = ['Çalışma 1', 'Çalışma 2', 'Çalışma 3'];
var SLOTIKON = ['📘', '📝', '📐'];

function cizPlan() {
  var p = oku('plan') || {};
  var h = '<div class="baslik"><h1>🗓️ Haftalık Çalışma Planı</h1><p>Günlük planını işaretle, yıldızını yakala!</p></div>';
  h += '<div class="plan-hafta">';
  GUNLER.forEach(function(g, gi) {
    h += '<div class="plan-gun"><h3>' + g + '</h3>';
    SLOTLAR.forEach(function(s, si) {
      var k = 'g' + gi + 's' + si;
      h += '<label><input type="checkbox" ' + (p[k] ? 'checked' : '') + ' onchange="planIsaret(\'' + k + '\',this.checked)"> ' + SLOTIKON[si] + ' ' + s + '</label>';
    });
    h += '</div>';
  });
  h += '</div>';
  h += '<div class="plan-not">💡 <b>Bugün ne yapmalıyım?</b> ' + tavsiye() + '</div>';
  h += '<div style="margin-top:14px;text-align:center"><button class="btn btn-neo" onclick="planSil()">🗑️ Planı Sıfırla</button></div>';
  h += '<div class="kucuk-not">📌 Plan bilgileri yalnızca bu bilgisayarda saklanır.</div>';
  ekran.innerHTML = h;
}

function planIsaret(k, v) {
  var p = oku('plan') || {};
  if (v) p[k] = true; else delete p[k];
  kaydet('plan', p);
}

function planSil() {
  if (!confirm('Haftalık plan sıfırlansın mı?')) return;
  kaydet('plan', {});
  cizPlan();
}

function tavsiye() {
  var done = oku('biti') || {};
  var secilen = null, kalan = 0;
  for (var s in MUFREDAT) {
    MUFREDAT[s].dersler.forEach(function(d) {
      d.birimler.forEach(function (_, i) {
        if (!done[d.id + '-' + i]) {
          kalan++;
          if (!secilen) secilen = d.ad + ' (' + s + '. sınıf) konularından birini';
        }
      });
    });
  }
  if (!secilen) return 'Tüm konuları tamamladın, tebrikler! 🏆 Bugün de bir test çöz.';
  return 'Bugün ' + secilen + ' tekrar et. Toplam ' + kalan + ' konu kaldı. Yapabilirsin! 💪';
}

/* ====== GELİŞİM ====== */
function cizGelisim() {
  var puan = oku('puan') || {};
  var p = profilOku();
  var s = seciliSinif();
  var st = statlar();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>⭐ Gelişimim</h1><p>Konularını ve test sonuçlarını buradan takip et.</p></div>';
  h += '<div style="text-align:center;margin-bottom:14px"><button class="btn btn-test" onclick="veliRaporYazdir()">🖨️ Veli Raporu Yazdır / PDF</button></div>';
  h += '<div class="ozet-karti" style="margin-bottom:14px;background:linear-gradient(135deg,#6a5cff,#9b59b6);color:#fff">';
  h += '<div class="baslik"><h2 style="font-size:20px">👤 ' + esc(p.ad || 'Arkadaş') + '</h2>';
  h += '<p style="opacity:.95">' + (p.sinif ? (s + '. sınıf') : 'Sınıfı seçilmemiş') + (p.sube ? (' · Şube ' + esc(p.sube)) : '') + '</p></div>';
  h += '<hr style="border:none;border-top:1px solid rgba(255,255,255,.3);margin:10px 0">';
  h += '<div style="display:flex;gap:10px;flex-wrap:wrap;text-align:center;font-size:13px">';
  h += '<span>🔥 ' + st.seri + ' gün</span>';
  h += '<span>⭐ ' + st.xp + ' XP</span>';
  h += '<span>🧩 ' + st.testSay + ' test</span>';
  h += '<span>🏅 ' + (oku('odul') || []).length + '/' + ROZETLER.length + '</span>';
  h += '<span>🎯 ' + st.tamSay + ' tamam</span>';
  h += '</div></div>';
  var seri = st.seri;
  h += '<div class="streak-banner">🔥 <b>' + seri + '</b> günlük seri! ' + (seri >= 3 ? 'Harika, böyle devam! 💪' : 'Bugün bir test çöz, serini başlat!') + '</div>';
  h += '<div class="baslik" style="margin-bottom:12px"><h2>📊 Konularım</h2></div>';
  var toplamT = 0, bittiT = 0;
  for (var s in MUFREDAT) {
    var t = 0, b = 0;
    MUFREDAT[s].dersler.forEach(function(d) {
      d.birimler.forEach(function (_, i) { t++; if (biten(d.id + '-' + i)) b++; });
    });
    toplamT += t; bittiT += b;
    var yz = t ? Math.round(b / t * 100) : 0;
    h += '<div class="ilerleme-kutusu"><div class="ilerleme-ust">' +
         '<span>' + s + '. Sınıf</span><span>' + b + '/' + t + ' konu · %' + yz + '</span></div>' +
         '<div class="cubuk"><div class="cubuk-dolgu" style="width:' + yz + '%"></div></div></div>';
  }
  var gy = toplamT ? Math.round(bittiT / toplamT * 100) : 0;
  h += '<div class="ilerleme-kutusu" style="background:#fff8e1"><div class="ilerleme-ust"><span>🏅 GENEL DURUM</span><span>' + bittiT + '/' + toplamT + ' · %' + gy + '</span></div>' +
       '<div class="cubuk"><div class="cubuk-dolgu" style="width:' + gy + '%"></div></div></div>';

  var zk = zayifKonular();
  h += '<div class="baslik" style="margin-top:20px;margin-bottom:12px"><h2>📉 Zayıf Konularım</h2></div>';
  h += '<div style="text-align:center;margin-bottom:14px"><button class="btn btn-ogren" onclick="zayifTest()">💪 Zayıf Konuları Tekrar Çöz</button></div>';
  if (!zk.length) h += '<div class="skor-liste">Tüm konuların iyi durumda, tebrikler! 🏆</div>';
  else {
    h += '<div class="skor-liste">';
    zk.slice(0, 6).forEach(function(z) {
      h += '<div class="skor-satir"><span>⚠️ ' + DERS_IKON(z.d.id) + ' ' + z.b.ad + ' <small>(' + z.s + '. sınıf · ' + z.d.ad + ')</small></span>' +
           '<span>' + (z.hak === null ? 'hiç test yok' : '%' + z.hak) + ' <button class="kucuk-buton" style="background:#9b59b6" onclick="secDers(' + z.s + ',\'' + z.d.id + '\')">📖 Çalış</button></span></div>';
    });
    h += '</div>';
  }

  var keys = Object.keys(puan);
  h += '<div class="baslik" style="margin-top:20px;margin-bottom:12px"><h2>📝 Test Sonuçlarım</h2></div>';
  if (!keys.length) {
    h += '<div class="skor-liste">Henüz test çözmedin. İlk testini çöz, buraya işlenecek! 🚀</div>';
  } else {
    h += '<div class="skor-liste">';
    keys.forEach(function(k) {
      var list = puan[k];
      var son = list[list.length - 1];
      var oran = son.d / son.n;
      var rozet = oran >= 0.9 ? '🏆' : oran >= 0.7 ? '🥇' : oran >= 0.5 ? '🥈' : '🥉';
      h += '<div class="skor-satir"><span>' + rozet + ' ' + dersAdi(k) + '</span>' +
           '<span>' + son.d + '/' + son.n + ' · ' + son.t + '</span></div>';
    });
    h += '</div>';
  }
  h += rozetDuvarHTML();
  h += pomoGrafikHTML();
  h += '<div style="margin-top:16px;text-align:center"><button class="btn btn-bitir" onclick="gelisimSil()">🗑️ Sonuçları Temizle</button></div>';
  ekran.innerHTML = h;
}

function gelisimSil() {
  if (!confirm('Tüm test sonuçları silinsin mi?')) return;
  kaydet('puan', {});
  cizGelisim();
}

/* ====== SUNUM VE SLAYT ====== */
var SUN_TEMA = {
  mor:    { ad: 'Mor',    bg: 'linear-gradient(135deg,#7a5cff,#9b2fb8)', fg: '#ffffff' },
  mavi:   { ad: 'Mavi',   bg: 'linear-gradient(135deg,#3498db,#1b4f8a)', fg: '#ffffff' },
  yesil:  { ad: 'Yeşil',  bg: 'linear-gradient(135deg,#2ecc71,#1e8449)', fg: '#ffffff' },
  turuncu:{ ad: 'Turuncu', bg: 'linear-gradient(135deg,#f39c12,#d35400)', fg: '#ffffff' },
  pembe:  { ad: 'Pembe',  bg: 'linear-gradient(135deg,#e84393,#8e44ad)', fg: '#ffffff' },
  gece:   { ad: 'Gece',   bg: 'linear-gradient(135deg,#2c3e50,#0f0f1a)', fg: '#ffffff' }
};
var SUN_EMOJI = ['📘', '📚', '🧮', '🔬', '🌟', '🌍', '🚀', '🏆', '💡', '🎨', '🎲', '🎵'];
var SUN_VARSAYILAN = [
  { bas: 'Projem İçin Sunum',  metin: 'Selam, benim ilk sunumum bu.',    emoji: '📘', tema: 'mor' },
  { bas: 'İçindekiler',         metin: 'Konuları bu slayta yazabilirim.',  emoji: '📚', tema: 'mavi' },
  { bas: 'Teşekkürler!',        metin: 'Beni dinlediğin için teşekkürler!', emoji: '🏆', tema: 'yesil' }
];

function sunYukle() {
  var s = oku('sunum');
  if (s && s.length) return s;
  var kopya = SUN_VARSAYILAN.map(function(x) { return { bas: x.bas, metin: x.metin, emoji: x.emoji, tema: x.tema }; });
  kaydet('sunum', kopya);
  return kopya;
}

function sunKaydet(liste) { kaydet('sunum', liste); }

function cizSunum() {
  var liste = sunYukle();
  durum.sun = liste;
  if (durum.sunIndex === undefined || durum.sunIndex < 0 || durum.sunIndex >= liste.length) durum.sunIndex = 0;
  var i = durum.sunIndex;
  var s = liste[i];
  var tema = SUN_TEMA[s.tema] || SUN_TEMA.mor;

  var h = '<div class="baslik"><h1>📊 Sunum ve Slayt Hazırlama</h1><p>Kendi sunumunu hazırla, oynat ve yazdır.</p></div>';

  h += '<div class="ust-satir">';
  h += '<button class="btn btn-mor" onclick="sunYeni()">➕ Slayt Ekle</button>';
  h += '<button class="btn btn-neo" onclick="sunSil()">🗑️ Slaytı Sil</button>';
  h += '<button class="btn btn-test" onclick="sunOynat()">▶️ Sunumu Başlat</button>';
  h += '<button class="btn btn-bitir" onclick="sunYazdir()">🖨️ Yazdır / PDF</button>';
  h += '<button class="btn btn-geri" onclick="sunTemizle()">🔄 Sıfırla</button>';
  h += '</div>';

  h += '<div class="sunum-duzen">';
  /* sol: küçük slaytlar listesi */
  h += '<div class="sunum-list">';
  liste.forEach(function(x, k) {
    var tt = SUN_TEMA[x.tema] || SUN_TEMA.mor;
    var sec = (k === i);
    h += '<button class="slayt-mini' + (sec ? ' slayt-aktif' : '') + '" style="background:' + tt.bg + '" onclick="sunSec(' + k + ')">' +
         '<span class="sayi">' + (k + 1) + '</span>' + x.emoji + ' ' + x.bas + '</button>';
  });
  h += '</div>';

  /* sağ: önizleme + düzenleme */
  h += '<div class="sunum-sag">';
  h += '<div class="slayt-buyuk" style="background:' + tema.bg + ';color:' + tema.fg + '">';
  h += '<div class="slayt-no">' + (i + 1) + ' / ' + liste.length + '</div>';
  h += '<div class="slayt-emoji">' + (s.emoji || '📘') + '</div>';
  h += '<div class="slayt-baslik">' + (s.bas || '') + '</div>';
  h += '<div class="slayt-metin">' + (s.metin || '') + '</div>';
  h += '</div>';

  h += '<div class="sun-edit">';
  h += '<label>Başlık:</label>';
  h += '<input type="text" value="' + esc(s.bas || '') + '" onchange="sunAlan(\'bas\', this.value)">';
  h += '<label>Metin:</label>';
  h += '<textarea rows="3" onchange="sunAlan(\'metin\', this.value)" placeholder="Slaytın içeriğini yaz">' + esc(s.metin || '') + '</textarea>';
  h += '<label>Tema:</label><div class="sun-temalar">';
  for (var t in SUN_TEMA) {
    var tm = SUN_TEMA[t];
    h += '<button type="button" class="tema-btn' + (s.tema === t ? ' secili' : '') + '" style="background:' + tm.bg + '" onclick="sunTema(\'' + t + '\')">' + tm.ad + '</button>';
  }
  h += '</div>';
  h += '<label>Sembol:</label><div class="sun-emojiler">';
  SUN_EMOJI.forEach(function(e) {
    h += '<button type="button" class="emoji-btn' + (s.emoji === e ? ' secili' : '') + '" onclick="sunEmoji(\'' + e + '\')">' + e + '</button>';
  });
  h += '</div>';
  h += '</div>';

  h += '<div class="sun-nav">';
  h += '<button class="btn btn-geri" onclick="sunGit(-1)">‹ Önceki</button>';
  h += '<span class="sun-sayac">Slayt ' + (i + 1) + ' / ' + liste.length + '</span>';
  h += '<button class="btn btn-mor" onclick="sunGit(1)">Sonraki ›</button>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  ekran.innerHTML = h;
}

function esc(metin) {
  return String(metin).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function sunAlan(alan, deger) {
  var liste = sunYukle();
  var s = liste[durum.sunIndex];
  if (!s) return;
  if (alan === 'bas') s.bas = deger;
  if (alan === 'metin') s.metin = deger;
  sunKaydet(liste);
  durum.sun = liste;
  cizSunum();
}

function sunTema(t) {
  if (!SUN_TEMA[t]) return;
  var liste = durum.sun || sunYukle();
  var s = liste[durum.sunIndex];
  if (!s) return;
  s.tema = t;
  sunKaydet(liste);
  durum.sun = liste;
  cizSunum();
}

function sunEmoji(e) {
  var liste = durum.sun || sunYukle();
  var s = liste[durum.sunIndex];
  if (!s) return;
  s.emoji = e;
  sunKaydet(liste);
  durum.sun = liste;
  cizSunum();
}

function sunGit(kac) {
  var liste = durum.sun || sunYukle();
  durum.sunIndex = Math.max(0, Math.min(liste.length - 1, durum.sunIndex + kac));
  cizSunum();
}

function sunSec(k) {
  durum.sunIndex = k;
  cizSunum();
}

function sunYeni() {
  var liste = durum.sun || sunYukle();
  liste.push({ bas: 'Yeni Slayt', metin: 'Buraya içerik yaz.', emoji: '💡', tema: 'mor' });
  durum.sunIndex = liste.length - 1;
  sunKaydet(liste);
  durum.sun = liste;
  cizSunum();
}

function sunSil() {
  var liste = durum.sun || sunYukle();
  if (liste.length <= 1) { alert('En az bir slayt kalabilir.'); return; }
  if (!confirm('Bu slayt silinsin mi?')) return;
  liste.splice(durum.sunIndex, 1);
  if (durum.sunIndex >= liste.length) durum.sunIndex = liste.length - 1;
  sunKaydet(liste);
  durum.sun = liste;
  cizSunum();
}

function sunTemizle() {
  if (!confirm('Sunum ilk haline dönsün mü?')) return;
  kaydet('sunum', SUN_VARSAYILAN.map(function(x){ return { bas: x.bas, metin: x.metin, emoji: x.emoji, tema: x.tema }; }));
  durum.sun = sunYukle();
  durum.sunIndex = 0;
  cizSunum();
}

function sunOynat() {
  durum.sun = sunYukle();
  if (durum.sunIndex === undefined) durum.sunIndex = 0;
  durum.tur = 'sunranda';
  tabGuncelle();
  render();
}

function cizSunranda() {
  var liste = durum.sun || sunYukle();
  durum.sun = liste;
  var i = durum.sunIndex;
  var s = liste[i];
  var tema = SUN_TEMA[s.tema] || SUN_TEMA.mor;
  var h = '<div class="sun-tam">';
  h += '<div class="sun-ust">';
  h += '<button class="sun-ust-btn" onclick="sunBiter()">✕ Kapat</button>';
  h += '<span class="sun-ad">Sunum</span>';
  h += '<div><button class="sun-ust-btn" onclick="sunDur(-1)">‹</button>';
  h += '<button class="sun-ust-btn" onclick="sunDur(1)">›</button>';
  h += '<button class="sun-ust-btn" onclick="sunYazdir()">🖨</button></div>';
  h += '</div>';
  h += '<div class="sun-slide" style="background:' + tema.bg + ';color:' + tema.fg + '">';
  h += '<div class="sun-slide-no">' + (i + 1) + ' / ' + liste.length + '</div>';
  h += '<div class="slayt-emoji">' + (s.emoji || '📘') + '</div>';
  h += '<div class="slayt-buyuk-baslik">' + esc(s.bas || '') + '</div>';
  h += '<div class="slayt-buyuk-metin">' + esc(s.metin || '') + '</div>';
  h += '</div>';
  h += '<div class="sun-not">Sunum sırasında yön tuşlarını (← →) kullanabilirsin.</div>';
  h += '</div>';
  ekran.innerHTML = h;
}

function sunDur(adim) {
  var liste = durum.sun || sunYukle();
  durum.sun = liste;
  durum.sunIndex = Math.max(0, Math.min(liste.length - 1, durum.sunIndex + adim));
  cizSunranda();
}

function sunBiter() {
  durum.tur = 'sunum';
  tabGuncelle();
  render();
}

function sunKey(e) {
  if (durum.tur !== 'sunranda') return;
  if (e.key === 'ArrowRight') { sunDur(1); e.preventDefault(); }
  else if (e.key === 'ArrowLeft') { sunDur(-1); e.preventDefault(); }
  else if (e.key === 'Escape') { sunBiter(); e.preventDefault(); }
}
document.addEventListener('keydown', sunKey);

function sunYazdir() {
  var liste = sunYukle();
  var ic = '';
  liste.forEach(function(s, k) {
    var tema = SUN_TEMA[s.tema] || SUN_TEMA.mor;
    ic += '<div class="p-slide" style="background:' + tema.bg + ';color:' + tema.fg + '">' +
          '<div class="p-no">' + (k + 1) + ' / ' + liste.length + '</div>' +
          '<div class="p-emoji">' + (s.emoji || '📘') + '</div>' +
          '<div class="p-bas">' + esc(s.bas || '') + '</div>' +
          '<div class="p-met">' + esc(s.metin || '') + '</div>' +
          '</div>';
  });
  var w = window.open('', '_blank');
  if (!w) { alert('Açılır pencere engellenmiş olabilir.'); return; }
  w.document.write('<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>Sunum</title>' +
    '<style>@page{size:landscape;} body{margin:0;font-family:Segoe UI,Arial,sans-serif;color:#243145;}' +
    '.p-slide{page-break-after:always;min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px;text-align:center;position:relative;}' +
    '.p-no{position:absolute;top:16px;left:16px;font-weight:800;opacity:.8;} .p-emoji{font-size:80px;}' +
    '.p-bas{font-size:46px;font-weight:900;margin:10px 0;} .p-met{font-size:26px;opacity:.95;white-space:pre-wrap;}' +
    '</style></head><body>' + ic + '</body></html>');
  w.document.close();
  w.focus();
  setTimeout(function(){ w.print(); }, 400);
}

/* ====== XP / SEVİYE / ROZET ====== */
function gunKod(d) { var y = d.getFullYear(), m = d.getMonth() + 1, g = d.getDate(); return y + '-' + (m < 10 ? '0' : '') + m + '-' + (g < 10 ? '0' : '') + g; }
function xpBilgi() { return oku('xp') || { p: 0, gun: null, seri: 0 }; }
function seviyeHesapla(p) { return Math.floor(p / 300) + 1; }
function seviyeYuzde(p) { return Math.round((p % 300) / 300 * 100); }

function xpEkle(miktar) {
  var x = xpBilgi();
  x.p += miktar;
  var bugun = gunKod(new Date());
  if (x.gun !== bugun) {
    var dun = new Date(); dun.setDate(dun.getDate() - 1);
    x.seri = (x.gun === gunKod(dun)) ? (x.seri + 1) : 1;
    x.gun = bugun;
  }
  kaydet('xp', x);
  var a = oku('aktivite') || {};
  a[bugun] = (a[bugun] || 0) + 1;
  kaydet('aktivite', a);
  var xg = oku('xpgun') || {};
  xg[bugun] = (xg[bugun] || 0) + miktar;
  kaydet('xpgun', xg);
  gorevIlerle('xp', miktar);
  haftaEkle(miktar);
  rozetKontrol();
}

/* ====== HAFTALIK YARIŞMA (ödüllü) ====== */
function haftaKod(d) {
  d = d || new Date();
  var gun = new Date(d); gun.setHours(0, 0, 0, 0);
  gun.setDate(gun.getDate() + 3 - ((gun.getDay() + 6) % 7));
  var ilk = new Date(gun.getFullYear(), 0, 4);
  var n = Math.round(((gun - ilk) / 86400000 - 3 + ((ilk.getDay() + 6) % 7)) / 7) + 1;
  return gun.getFullYear() + '-W' + (n < 10 ? '0' : '') + n;
}
function haftaEkle(miktar) {
  var x = oku('xphafta') || {};
  var k = haftaKod();
  x[k] = (x[k] || 0) + miktar;
  kaydet('xphafta', x);
}
function haftaXP() { var x = oku('xphafta') || {}; return x[haftaKod()] || 0; }
function yarismaDurum() {
  var xp = haftaXP();
  var y = oku('yarisma') || {};
  return { xp: xp, hedef: 200, tam: xp >= 200, alindi: !!y[haftaKod()] };
}
function yarismaOdulAl() {
  var y = oku('yarisma') || {};
  var k = haftaKod();
  if (y[k] || haftaXP() < 200) return;
  y[k] = true;
  kaydet('yarisma', y);
  var tm = oku('yarismaTamam') || [];
  if (tm.indexOf(k) < 0) { tm.push(k); kaydet('yarismaTamam', tm); }
  xpEkle(50);
  alert('🎁 Haftalık ödülünü kazandın: +50 XP! 🏆');
  rozetKontrol();
  cizYarisma();
}
function cizYarisma() {
  var d = yarismaDurum();
  var k = haftaKod();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🏆 Haftalık Yarışma</h1><p>Bu hafta ' + d.hedef + ' XP topla, ödülünü kap!</p></div>';
  var yuz = Math.min(100, Math.round(d.xp / d.hedef * 100));
  h += '<div class="yarisma-kutu">';
  h += '<div class="yarisma-ust"><b>' + k + '</b><span>' + d.xp + ' / ' + d.hedef + ' XP</span></div>';
  h += '<div class="cubuk"><div class="cubuk-dolgu" style="width:' + yuz + '%;background:' + (d.tam ? '#2ecc71' : '#6a5cff') + '"></div></div>';
  h += '<div class="kucuk-not">' + (d.tam ? '🎉 Hedefe ulaştın!' : 'Hedefe ' + (d.hedef - d.xp) + ' XP kaldı.') + '</div>';
  if (d.tam && !d.alindi) h += '<button class="btn btn-test" style="width:100%;margin-top:10px" onclick="yarismaOdulAl()">🎁 Ödülü Al (+50 XP)</button>';
  else if (d.alindi) h += '<div class="odul-alindi">✅ Bu haftanın ödülünü aldın! (+50 XP)</div>';
  h += '</div>';
  var x = oku('xphafta') || {};
  var keys = Object.keys(x).sort();
  var enIyi = 0, enIyiK = '';
  keys.forEach(function(kk) { if (x[kk] > enIyi) { enIyi = x[kk]; enIyiK = kk; } });
  h += '<div class="baslik" style="margin-top:18px"><h2>📈 Son Haftaların</h2></div>';
  h += '<div class="kucuk-not">🏅 En iyi haftan: ' + (enIyiK || '-') + ' · ' + enIyi + ' XP</div>';
  h += '<div class="yarisma-liste">';
  keys.slice(-8).forEach(function(kk) {
    var w = Math.min(100, Math.round(x[kk] / d.hedef * 100));
    h += '<div class="yarisma-satir"><span class="yarisma-ad">' + (kk === k ? '▶ ' : '') + kk + '</span>' +
         '<span class="yarisma-puan">' + x[kk] + ' XP</span>' +
         '<div class="cubuk" style="flex:1"><div class="cubuk-dolgu" style="width:' + w + '%;background:' + (x[kk] >= d.hedef ? '#2ecc71' : '#6a5cff') + '"></div></div></div>';
  });
  h += '</div>';
  if (!keys.length) h += '<p class="kucuk-not">Henüz haftalık veri yok. XP kazandıkça burada göreceksin.</p>';
  ekran.innerHTML = h;
}

/* ====== DENEMATİK (Aylık Deneme) ====== */
function ayKod(d) { d = d || new Date(); var m = d.getMonth() + 1; return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m; }
function denemeAktif(d) { d = d || new Date(); return d.getDate() <= 7; }
function denemeSonuclar() { return oku('denemeSonuclari') || {}; }
function denemeHavuz() {
  var havuz = [];
  var s = seciliSinif() || '6';
  var siniflar = MUFREDAT[s] ? [String(s)] : Object.keys(MUFREDAT);
  siniflar.forEach(function(g) {
    (MUFREDAT[g].dersler || []).forEach(function(dd) {
      var q = SORULAR[dd.id]; if (!q) return;
      Object.keys(q).forEach(function(bi) {
        (q[bi] || []).forEach(function(sr) { havuz.push({ d: dd.id, bi: Number(bi), s: sr }); });
      });
    });
  });
  return havuz;
}
function denemeBasla() {
  var havuz = karistir(denemeHavuz());
  durum.deneme = { liste: havuz.slice(0, 10), sira: 0, dogru: 0, cevap: [] };
  durum.denemeSonuc = null;
  git('deneme');
}
function denemeCevap(secim) {
  var d = durum.deneme; if (!d || !d.liste) return;
  var q = d.liste[d.sira];
  var dogru = (secim === q.s.d);
  if (dogru) d.dogru++;
  d.cevap.push({ dogru: dogru, dersId: q.d, bi: q.bi });
  d.sira++;
  if (d.sira >= d.liste.length) denemeBitir();
  else cizDeneme();
}
function denemeBitir() {
  var d = durum.deneme; if (!d) return;
  var t = d.liste.length, dg = d.dogru;
  var eksik = {};
  d.cevap.forEach(function(c) {
    if (!c.dogru) {
      var ana = c.dersId + '-' + c.bi;
      var ad = dersBul(seciliSinif() || '6', c.dersId);
      var bAd = ad && ad.birimler[c.bi] ? ad.birimler[c.bi].ad : (c.dersId + '-' + c.bi);
      eksik[ana] = { dersId: c.dersId, bi: c.bi, ad: bAd };
    }
  });
  var son = denemeSonuclar();
  son[ayKod()] = { d: dg, t: t, puan: Math.round(dg / t * 100), eksik: eksik };
  kaydet('denemeSonuclari', son);
  xpEkle(Math.max(3, Math.round(25 * dg / t)) + (dg === t ? 10 : 0));
  durum.deneme = null;
  durum.denemeSonuc = son[ayKod()];
  cizDeneme();
}
function denemeEksikTum() {
  var son = denemeSonuclar();
  var map = {};
  Object.keys(son).forEach(function(k) {
    var eks = son[k].eksik || {};
    Object.keys(eks).forEach(function(kk) { map[kk] = eks[kk]; });
  });
  var list = [];
  for (var k in map) list.push(map[k]);
  return list;
}
function denemeEksikHTML(eksArr) {
  var h = '';
  eksArr.forEach(function(e) {
    h += '<div class="deneme-eksik"><span>' + DERS_IKON(e.dersId) + '</span>' +
         '<span><b>' + esc(e.ad) + '</b><br><small>' + dersAdi(e.dersId) + '</small></span>' +
         '<button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="testBaslat(\'' + e.dersId + '\',' + e.bi + ')">Çöz</button></div>';
  });
  return h;
}
function cizDeneme() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🎯 Denematik – Aylık Deneme</h1><p>Her ayın ilk haftasında açılan 10 soruluk değerlendirme; eksik konularını öğren!</p></div>';
  var d = durum.deneme;
  if (d && d.liste) {
    var q = d.liste[d.sira];
    h += '<div class="quiz-kutu"><div class="quiz-baslik"><div><b>🎯 Denematik</b></div>' +
         '<div class="iller-puan">Soru ' + (d.sira + 1) + '/' + d.liste.length + ' &nbsp; ⭐ ' + d.dogru + ' doğru</div></div>';
    h += '<div class="kucuk-not" style="text-align:center">' + DERS_IKON(q.d) + ' ' + dersAdi(q.d) + '</div>';
    h += '<div class="quiz-soru">' + q.s.s + '</div>';
    q.s.o.forEach(function(o, i) {
      h += '<button class="secenek" onclick="denemeCevap(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + o + '</button>';
    });
    h += '</div>';
    ekran.innerHTML = h;
    return;
  }
  if (durum.denemeSonuc) {
    var s = durum.denemeSonuc;
    var ikon = s.puan >= 80 ? '🏆' : s.puan >= 60 ? '🎉' : '💪';
    h += '<div class="quiz-kutu"><div class="sonuc"><div class="buyuk">' + ikon + '</div>';
    h += '<div class="puan">' + s.d + ' / ' + s.t + ' doğru</div>';
    h += '<p style="color:#5c6b85">%' + s.puan + ' başarı</p>';
    var eksArr = [];
    for (var k in (s.eksik || {})) eksArr.push(s.eksik[k]);
    if (eksArr.length) {
      h += '<p style="margin:12px 0;font-weight:700">📌 Bu denemede eksik bıraktığın konular:</p>';
      h += denemeEksikHTML(eksArr);
    } else {
      h += '<p style="margin:12px 0;font-weight:700;color:#1f8a70">🎉 Tüm soruları doğru yaptın!</p>';
    }
    h += '<button class="btn btn-mor" onclick="git(\'deneme\')">📅 Deneme Sayfası</button>';
    h += '</div></div>';
    durum.denemeSonuc = null;
    ekran.innerHTML = h;
    return;
  }
  var aktif = denemeAktif();
  var bugun = ayKod();
  var son = denemeSonuclar();
  var yapildi = !!son[bugun];
  h += '<div class="deneme-kutu">';
  if (aktif && !yapildi) {
    h += '<div class="deneme-acik">🟢 Bu ayın denemesi AÇIK! ' + denemeHavuz().length + ' soruluk havuzdan 10 soru seçilir.</div>';
    h += '<button class="btn btn-test" style="width:100%;margin-top:12px" onclick="denemeBasla()">🚀 Denemeye Başla</button>';
  } else if (aktif && yapildi) {
    h += '<div class="deneme-acik">✅ Bu ayın denemesini çözdün: <b>' + son[bugun].d + '/' + son[bugun].t + '</b> (%' + son[bugun].puan + '). Gelecek deneme: önümüzdeki ayın ilk haftası.</div>';
  } else {
    h += '<div class="deneme-kapali">🔒 Deneme her ayın 1-7\'si arasında açılır. Bir sonraki denemeyi bekle!</div>';
  }
  h += '</div>';
  h += '<div class="baslik" style="margin-top:16px"><h2>📅 Geçmiş Denemeler</h2></div>';
  var keys = Object.keys(son).sort();
  if (!keys.length) h += '<p class="kucuk-not">Henüz deneme çözmedin.</p>';
  keys.slice(-12).forEach(function(kk) {
    var g = son[kk];
    h += '<div class="deneme-satir"><span>' + kk + '</span><span class="deneme-puan">%' + g.puan + '</span><span>' + g.d + '/' + g.t + ' doğru</span></div>';
  });
  var eks = denemeEksikTum();
  if (eks.length) {
    h += '<div class="baslik" style="margin-top:16px"><h2>📌 Eksik Konuların</h2></div>';
    h += denemeEksikHTML(eks.slice(0, 6));
  }
  ekran.innerHTML = h;
}

/* ====== 3B FEN ANİMASYONLARI ====== */
function fen3dDersId() { return 'fen' + (seciliSinif() || '6'); }
function cizFen3D() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🔬 3B Fen Animasyonları</h1><p>Fen konularını 3 boyutlu sahnelere dokun, izle, öğren.</p></div>';
  var fid = fen3dDersId();
  var veri = FEN3D && FEN3D[fid];
  if (!veri) { h += '<p class="kucuk-not">Bu sınıf için 3B animasyon bulunmuyor.</p>'; ekran.innerHTML = h; return; }
  var ders = dersBul(fid.substr(3), fid);
  h += '<div class="fen3d-grid">';
  Object.keys(veri).forEach(function(bi) {
    var v = veri[bi];
    var bAd = ders && ders.birimler[bi] ? ders.birimler[bi].ad : ('Konu ' + (Number(bi) + 1));
    h += '<button class="fen3d-kart" onclick="fen3dAc(' + bi + ')">';
    h += '<div class="fen3d-sahne sahne-' + v.sahne + '">' + v.emoji + '</div>';
    h += '<div class="fen3d-bilgi"><b>' + esc(bAd) + '</b><br><small>' + esc(v.bas) + '</small></div>';
    h += '</button>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function fen3dAc(bi) {
  var fid = fen3dDersId();
  var v = FEN3D && FEN3D[fid] && FEN3D[fid][bi];
  if (!v) return;
  var ders = dersBul(fid.substr(3), fid);
  var bAd = ders && ders.birimler[bi] ? ders.birimler[bi].ad : ('Konu ' + (Number(bi) + 1));
  $('modal').innerHTML = '<div class="modal-icerik"><span class="kap" onclick="kapatOverlay()">✕</span>' +
    '<h3>🔬 ' + esc(bAd) + '</h3>' +
    '<div class="fen3d-sahne-buyuk sahne-' + v.sahne + '">' + v.emoji + '</div>' +
    '<p class="fen3d-anlatim">' + esc(v.anlatim) + '</p></div>';
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}

/* ====== CANLI DERS TAKVİMİ ====== */
function canliGunIndex() { var g = new Date().getDay(); return (g === 0 || g === 6) ? -1 : g - 1; }
function cizCanli() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  var takvim = (CANLI && CANLI[seciliSinif()]) ? CANLI[seciliSinif()] : (CANLI && CANLI['6']);
  if (!takvim) { h += '<p class="kucuk-not">Bu sınıf için canlı ders takvimi yok.</p>'; ekran.innerHTML = h; return; }
  h += '<div class="baslik"><h1>📅 Canlı Ders Takvimi</h1><p>' + esc(takvim.bilgi) + '</p></div>';
  var bugun = canliGunIndex();
  takvim.gunler.forEach(function(g, gi) {
    var aktif = gi === bugun;
    h += '<div class="canli-gun' + (aktif ? ' canli-bugun' : '') + '">';
    h += '<div class="canli-gun-baslik">' + g.gun + (aktif ? ' <span class="canli-etiket">🟢 Bugün</span>' : '') + '</div>';
    g.oturumlar.forEach(function(o) {
      h += '<div class="canli-oturum">';
      h += '<span class="canli-saat">' + o.saat + '</span>';
      h += '<div class="canli-bilgi"><b>' + DERS_IKON(o.d || 'reh') + ' ' + o.ad + '</b><br><small>' + esc(o.konu) + '</small></div>';
      h += '<button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="canliKatil(\'' + (o.d || '') + '\',\'' + o.ad + '\',\'' + o.konu + '\')">🖥 Derse Katıl</button>';
      h += '</div>';
    });
    h += '</div>';
  });
  ekran.innerHTML = h;
}
function canliKatil(dersId, ad, konu) {
  var sinif = seciliSinif() || '6';
  var h = '<div class="modal-icerik"><span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<div class="canli-modal"><div class="canli-canli">🔴 CANLI</div>';
  h += '<h3>' + DERS_IKON(dersId) + ' ' + esc(ad) + '</h3>';
  h += '<p class="canli-konu">Konu: ' + esc(konu) + '</p>';
  var d = dersBul(sinif, dersId);
  if (d && d.birimler[0]) h += '<div class="canli-ozet">' + esc(d.birimler[0].ozet) + '</div>';
  else h += '<div class="canli-ozet">Rehberlik dersi: sorularını sor, planını gözden geçir. Öğretmenin seninle birebir görüşür.</div>';
  h += '<button class="btn btn-mor" onclick="kapatOverlay()">Görüşmeyi Bitir</button>';
  h += '</div></div>';
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}

/* ====== YAZDIRILABİLİR ETKİNLİKLER ====== */
function cizEtkinlikler() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🖨 Yazdırılabilir Etkinlikler</h1><p>Konu çalışma kağıtlarını yazdır veya ekranda incele.</p></div>';
  var s = seciliSinif() || '6';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { h += '<p class="kucuk-not">Önce sınıfını seç.</p>'; ekran.innerHTML = h; return; }
  bilgi.dersler.forEach(function(d) {
    h += '<div class="baslik" style="margin-top:14px"><h2>' + DERS_IKON(d.id) + ' ' + d.ad + '</h2></div>';
    h += '<div class="etkinlik-liste">';
    d.birimler.forEach(function(b, bi) {
      h += '<div class="etkinlik-satir"><div><b>' + esc(b.ad) + '</b><br><small>' + esc((b.konular || []).join(' · ')) + '</small></div>';
      h += '<button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="etkinlikYazdir(\'' + d.id + '\',' + bi + ')">🖨 Yazdır</button>';
      h += '<button class="btn btn-mor" style="padding:6px 10px;font-size:13px" onclick="yaprakTestYazdir(\'' + d.id + '\',' + bi + ')">📝 Yaprak Test</button></div>';
    });
    h += '</div>';
  });
  ekran.innerHTML = h;
}
function etkinlikYazdir(dersId, bi) {
  var s = seciliSinif() || '6';
  var d = dersBul(s, dersId);
  if (!d || !d.birimler[bi]) return;
  var b = d.birimler[bi];
  var pr = profilOku();
  var h = '<div class="yazdir-baslik"><h2>' + s + '. Sınıf ' + d.ad + ' – ' + esc(b.ad) + '</h2>';
  h += '<p class="yazdir-kimlik">Ad Soyad: <u>' + (pr.ad ? esc(pr.ad) + ' ' + esc(pr.soyad || '') : '..............................................') + '</u> &nbsp;&nbsp; Tarih: <u>......../......../........</u></p></div>';
  h += '<div class="yazdir-ozet"><b>📌 Konu Özeti:</b><br>' + esc(b.ozet) + '</div>';
  h += '<div class="yazdir-soru"><b>1.</b> ' + esc(b.ad) + ' konusunda ne öğrendin? İki cümleyle yaz.<br><div class="yazdir-cizgi">&nbsp;</div></div>';
  h += '<div class="yazdir-soru"><b>2.</b> Bu konuyla ilgili bir örnek ver.<br><div class="yazdir-cizgi">&nbsp;</div></div>';
  h += '<div class="yazdir-soru"><b>3.</b> Konuyu tekrar etmek için yapacağın iki şey nedir?<br><div class="yazdir-cizgi">&nbsp;</div></div>';
  h += '<div class="yazdir-alt">İyi çalışmalar! 📚 Okul Ders Uygulamam</div>';
  $('yazdirAlan').innerHTML = '<div class="yazdir-icerik">' + h + '</div>';
  if (window.print) window.print();
}

function yaprakTestYazdir(dersId, bi) {
  var s = seciliSinif() || '6';
  var d = dersBul(s, dersId);
  var b = d && d.birimler[bi];
  var qs = birimTest(dersId, bi);
  if (!b || !qs.length) { alert('Bu konu için yaprak test oluşturacak soru yok.'); return; }
  var pr = profilOku();
  var h = '<div class="yazdir-baslik"><h2>' + s + '. Sınıf ' + d.ad + ' – Yaprak Test: ' + esc(b.ad) + '</h2>';
  h += '<p class="yazdir-kimlik">Ad Soyad: <u>' + (pr.ad ? esc(pr.ad) + ' ' + esc(pr.soyad || '') : '..............................................') + '</u> &nbsp;&nbsp; Tarih: <u>......../......../........</u> &nbsp;&nbsp; Puan: <u>........</u></p></div>';
  qs.forEach(function(q, i) {
    h += '<div class="yazdir-soru"><b>' + (i + 1) + '.</b> ' + esc(q.s) + '</div>';
    q.o.forEach(function(o, j) {
      h += '<div class="yazdir-secenek">' + String.fromCharCode(65 + j) + ') ' + esc(o) + '</div>';
    });
  });
  h += '<div class="yazdir-cevap"><b>🔑 Cevap Anahtarı:</b> ' + qs.map(function(q, i) { return (i + 1) + '-' + String.fromCharCode(65 + q.d); }).join(' &nbsp;·&nbsp; ') + '</div>';
  h += '<div class="yazdir-alt">İyi çalışmalar! 📚 Okul Ders Uygulamam</div>';
  $('yazdirAlan').innerHTML = '<div class="yazdir-icerik">' + h + '</div>';
  if (window.print) window.print();
}

/* ====== FEN DENEYLERİ (interaktif) ====== */
function deneylerList() { return (typeof DENEY !== 'undefined') ? (DENEY['fen' + (seciliSinif() || '6')] || []) : []; }
function deneyBul(id) {
  var D = deneylerList();
  for (var i = 0; i < D.length; i++) if (D[i].id === id) return D[i];
  return null;
}
function cizDeney() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  if (durum.deney) {
    var d = durum.deney.d;
    var a = d.adimlar[durum.deney.adim];
    h += '<div class="baslik"><h1>' + d.ikon + ' ' + esc(d.ad) + '</h1><p>Kazanım: ' + d.kazanim + '</p></div>';
    h += '<div class="deney-adim">';
    h += '<div class="kucuk-not">Adım ' + (durum.deney.adim + 1) + '/' + d.adimlar.length + ' · Doğru: ' + durum.deney.dogru + '</div>';
    h += '<h2>' + esc(a.baslik) + '</h2>';
    h += '<p>' + esc(a.metin) + '</p>';
    if (a.tip === 'secim') {
      if (durum.deney.yanlis) h += '<div class="deney-hata">❌ Yanlış seçim! Doğru şıkkı bulup tekrar dene.</div>';
      h += '<div class="deney-secenekler">';
      a.secenekler.forEach(function(sik, i) {
        h += '<button class="secenek" onclick="deneyCevap(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + esc(sik) + '</button>';
      });
      h += '</div>';
    } else {
      h += '<button class="btn btn-test" onclick="deneyIleri()">İleri ▶</button>';
    }
    h += '</div>';
    ekran.innerHTML = h;
    return;
  }
  h += '<div class="baslik"><h1>🧪 Fen Deneyleri</h1><p>' + (seciliSinif() || '6') + '. sınıf fen konuları için adım adım interaktif deneyler. Her yeni deneyi tamamlayınca +20 XP kazanırsın.</p></div>';
  var yapilan = oku('deney') || {};
  h += '<div class="deney-kutu">';
  deneylerList().forEach(function(d) {
    var bitti = !!yapilan[d.id];
    h += '<div class="deney-kart">';
    h += '<div class="deney-ikon">' + d.ikon + '</div>';
    h += '<div class="deney-bilgi"><b>' + esc(d.ad) + '</b><br><small>Kazanım: ' + d.kazanim + ' · ⏱ ' + d.sure + '</small>';
    h += '<div class="kucuk-not">🧰 ' + esc(d.malzeme.join(', ')) + '</div></div>';
    h += '<div>' + (bitti ? '<span class="deney-tamam">✅</span> ' : '') + '<button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="deneyBasla(\'' + d.id + '\')">' + (bitti ? 'Tekrar' : 'Başla') + '</button></div>';
    h += '</div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function deneyBasla(id) {
  var d = deneyBul(id);
  if (!d) return;
  durum.deney = { d: d, adim: 0, dogru: 0, yanlis: false };
  render();
}
function deneyIleri() {
  if (!durum.deney) return;
  durum.deney.adim++;
  durum.deney.yanlis = false;
  if (durum.deney.adim >= durum.deney.d.adimlar.length) deneyBitir();
  else render();
}
function deneyCevap(i) {
  if (!durum.deney) return;
  var a = durum.deney.d.adimlar[durum.deney.adim];
  if (a.tip !== 'secim') return;
  if (i === a.dogru) {
    durum.deney.dogru++;
    durum.deney.adim++;
    durum.deney.yanlis = false;
    if (durum.deney.adim >= durum.deney.d.adimlar.length) deneyBitir();
    else render();
  } else {
    durum.deney.yanlis = true;
    render();
  }
}
function deneyBitir() {
  var d = durum.deney ? durum.deney.d : null;
  if (!d) return;
  durum.deney = null;
  var yap = oku('deney') || {};
  var ilk = !yap[d.id];
  yap[d.id] = true;
  kaydet('deney', yap);
  var ist = oku('istatistik') || {};
  ist.deney = (ist.deney || 0) + 1;
  kaydet('istatistik', ist);
  if (ilk) xpEkle(20);
  var bittiSay = Object.keys(yap).length;
  var rozetVar = (oku('odul') || []).indexOf('deney1') > -1;
  var h = '<div class="modal-icerik">';
  h += '<span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<h3>' + d.ikon + ' Deney Tamamlandı!</h3>';
  h += '<div class="deney-tamam-kutu">🎉 ' + esc(d.ad) + ' deneyini bitirdin!' + (ilk ? ' (+20 XP)' : '') + '</div>';
  h += '<p class="kucuk-not">Toplam tamamlanan deney: ' + bittiSay + '/' + deneylerList().length + '</p>';
  if (bittiSay >= 3) h += '<div class="deney-tamam-kutu">🏅 ' + (rozetVar ? 'Deneyci rozetin sende!' : 'Deneyci rozetini kazandın!') + '</div>';
  h += '<button class="btn btn-mor" onclick="kapatOverlay();git(\'deney\')">Tamam</button>';
  h += '</div>';
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}

/* ====== SEVİYE BELİRLEME ====== */
function seviyeAd(p) { return p >= 80 ? 'İleri' : (p >= 50 ? 'Orta' : 'Başlangıç'); }
function seviyeHavuz() {
  var s = seciliSinif() || '6';
  var bilgi = MUFREDAT[s];
  var liste = [];
  var hedef = 8;
  function karistir(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  if (bilgi) {
    bilgi.dersler.forEach(function(d) {
      var sorular = karistir(tumSorular(d.id).filter(function(q) { return q && q.o && q.d != null; }));
      var adet = Math.min(2, sorular.length);
      for (var k = 0; k < adet && liste.length < hedef; k++) liste.push({ dersId: d.id, q: sorular[k] });
    });
  }
  if (liste.length < hedef) {
    var ek = karistir(tumSorular('mat6').filter(function(q) { return q && q.o && q.d != null; }));
    var k2 = 0;
    while (liste.length < hedef && k2 < ek.length) { liste.push({ dersId: 'mat6', q: ek[k2] }); k2++; }
  }
  return karistir(liste);
}
function seviyeSonuc() { return oku('seviye'); }
function cizSeviye() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  if (durum.sev) {
    var q = durum.sev.liste[durum.sev.sira];
    var dersAd = dersBul(seciliSinif(), q.dersId);
    h += '<div class="quiz-kutu"><div class="quiz-baslik">' +
         '<div><b>🎯 Seviye Belirleme</b></div>' +
         '<div class="iller-puan">Soru ' + (durum.sev.sira + 1) + '/' + durum.sev.liste.length + ' · ⭐ ' + durum.sev.dogru + ' doğru</div></div>';
    if (durum.sev.geri) h += '<div class="deney-hata">❌ Yanlış! Doğru cevap: ' + esc(q.q.o[q.q.d]) + '</div>';
    h += '<div class="kucuk-not" style="text-align:center">📘 ' + (dersAd ? dersAd.ad : q.dersId) + '</div>';
    h += '<div class="quiz-soru">' + esc(q.q.s) + '</div>';
    q.q.o.forEach(function(sik, i) {
      h += '<button class="secenek" onclick="seviyeCevap(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + esc(sik) + '</button>';
    });
    h += '</div>';
    ekran.innerHTML = h;
    return;
  }
  h += '<div class="baslik"><h1>🎯 Seviye Belirleme</h1><p>Türkçe, Matematik, Fen, Sosyal, İngilizce ve Din derslerinden 8 soruluk başlangıç testiyle seviyeni ölç. Sonucuna göre sana konu önerileri sunarız.</p></div>';
  var son = seviyeSonuc();
  if (son) {
    h += '<div class="seviye-sonuc">';
    h += '<div class="seviye-sonuc-puan">' + son.puan + ' <small>/100</small></div>';
    h += '<div>Seviyen: <b>' + seviyeAd(son.puan) + '</b> · ' + son.dogru + '/' + son.toplam + ' doğru · ' + son.tarih + '</div>';
    h += '</div>';
  }
  h += '<button class="btn btn-test" style="width:100%;margin-top:12px" onclick="seviyeBasla()">' + (son ? '🔁 Tekrar Çöz' : '🚀 Teste Başla') + '</button>';
  ekran.innerHTML = h;
}
function seviyeBasla() {
  var liste = seviyeHavuz();
  if (!liste.length) { alert('Yeterli soru bulunamadı.'); return; }
  durum.sev = { liste: liste, sira: 0, dogru: 0, geri: false };
  render();
}
function seviyeCevap(i) {
  if (!durum.sev) return;
  var q = durum.sev.liste[durum.sev.sira];
  if (i === q.q.d) durum.sev.dogru++;
  durum.sev.geri = (i !== q.q.d);
  durum.sev.sira++;
  if (durum.sev.sira >= durum.sev.liste.length) seviyeBitir();
  else render();
}
function seviyeBitir() {
  var toplam = durum.sev.liste.length;
  var dogru = durum.sev.dogru;
  var puan = Math.round(dogru / toplam * 100);
  var xp = dogru * 5;
  kaydet('seviye', { tarih: gunKod(new Date()), dogru: dogru, toplam: toplam, puan: puan, xp: xp });
  var ist = oku('istatistik') || {};
  ist.seviye = (ist.seviye || 0) + 1;
  kaydet('istatistik', ist);
  durum.sevSon = { tarih: gunKod(new Date()), dogru: dogru, toplam: toplam, puan: puan, xp: xp };
  durum.sev = null;
  if (xp) xpEkle(xp);
  git('seviyeSon');
}
function cizSeviyeSon() {
  var son = durum.sevSon || seviyeSonuc();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  if (!son) { h += '<div class="baslik"><h1>🎯 Seviye Belirleme</h1></div><p class="kucuk-not">Henüz sonuç yok. Önce testi çöz.</p>'; ekran.innerHTML = h; return; }
  h += '<div class="baslik"><h1>🎯 Seviye Belirleme Sonucu</h1></div>';
  h += '<div class="seviye-sonuc">';
  h += '<div class="seviye-sonuc-puan">' + son.puan + ' <small>/100</small></div>';
  h += '<div>Seviyen: <b>' + seviyeAd(son.puan) + '</b></div>';
  h += '<div class="kucuk-not">' + son.dogru + '/' + son.toplam + ' doğru · +' + (son.xp || 0) + ' XP kazandın</div>';
  h += '</div>';
  var l = oneriKonular(3);
  if (l.length) {
    h += '<div class="baslik" style="margin-top:16px"><h2>📌 Sana Önerdiğimiz Konular</h2></div>';
    h += '<div class="deney-kutu">';
    l.forEach(function(o) {
      h += '<div class="deney-kart"><div class="deney-ikon">' + DERS_IKON(o.dersId) + '</div><div class="deney-bilgi"><b>' + esc(o.dersAd) + '</b><br><small>' + esc(o.birimAd) + '</small></div>';
      h += '<div><button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="testBaslat(\'' + o.dersId + '\',' + o.bi + ')">Çalış</button></div></div>';
    });
    h += '</div>';
  }
  h += '<button class="btn btn-mor" style="width:100%;margin-top:14px" onclick="git(\'seviye\')">Seviye Ekranı</button>';
  ekran.innerHTML = h;
}

/* ====== ÇÖZÜMLÜ SORULAR ====== */
function cozumBul(dersId, bi, q) {
  var C = (typeof COZUM !== 'undefined') && COZUM[dersId] && COZUM[dersId][bi];
  if (C) {
    for (var i = 0; i < C.length; i++) if (C[i].s === q.s) return C[i].cozum;
  }
  var d = dersBul(seciliSinif(), dersId);
  var b = d && d.birimler[bi];
  return 'Doğru cevap: ' + String.fromCharCode(65 + q.d) + ') ' + q.o[q.d] + '. ' + (b ? 'Konu özeti: ' + b.ozet : 'İlgili konuyu tekrar incele.');
}
function cizCozumlu() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  var s = seciliSinif() || '6';
  if (durum.cozDers) {
    var d = dersBul(s, durum.cozDers);
    h += '<button class="geri" onclick="cozumDersKapat()">⬅ Ders Listesi</button>';
    if (d) {
      h += '<div class="baslik"><h1>' + DERS_IKON(d.id) + ' ' + d.ad + ' — Çözümlü Sorular</h1></div>';
      d.birimler.forEach(function(b, bi) {
        var qs = (SORULAR[d.id] || {})[bi];
        if (!qs || !qs.length) return;
        h += '<div class="baslik" style="margin-top:14px"><h2>📗 ' + esc(b.ad) + ' <span class="kucuk-not">(' + qs.length + ' soru)</span></h2></div>';
        qs.forEach(function(q, qi) {
          h += '<div class="cozum-soru"><div class="cozum-soru-metin"><b>S' + (qi + 1) + '.</b> ' + esc(q.s) + '</div>';
          h += '<details class="cozum-detay"><summary>✏️ Çözümü Gör</summary><div class="cozum-icerik">' + esc(cozumBul(d.id, bi, q)) + '</div></details></div>';
        });
      });
    }
    ekran.innerHTML = h;
    return;
  }
  h += '<div class="baslik"><h1>✏️ Çözümlü Sorular</h1><p>Test sorularının adım adım çözümlerini incele. Uzman çözümü olmayan sorularda konu özetiyle açıklama sunulur.</p></div>';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { h += '<p class="kucuk-not">Önce sınıfını seç.</p>'; ekran.innerHTML = h; return; }
  h += '<div class="deney-kutu">';
  bilgi.dersler.forEach(function(d) {
    var n = 0;
    var qs = SORULAR[d.id] || {};
    for (var k in qs) n += (qs[k] || []).length;
    h += '<div class="deney-kart"><div class="deney-ikon">' + DERS_IKON(d.id) + '</div>';
    h += '<div class="deney-bilgi"><b>' + d.ad + '</b><br><small>' + n + ' soru · adım adım çözüm</small></div>';
    h += '<div><button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="cozumDersAc(\'' + d.id + '\')">Aç</button></div></div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function cozumDersAc(id) { durum.cozDers = id; render(); }
function cozumDersKapat() { durum.cozDers = null; render(); }

/* ====== DİNLEME METİNLERİ ====== */
var dinleSesMetni = '';
function dinleMetin(dersId, bi) {
  var D = (typeof DINLEME !== 'undefined') && DINLEME[dersId] && DINLEME[dersId][bi];
  if (D && D.length) return D;
  var d = dersBul(seciliSinif(), dersId);
  var b = d && d.birimler[bi];
  return b ? (icerikCek(seciliSinif(), dersId, bi) || b.ozet || '') : '';
}
var _ttsLee = null;
function ttsVoiceBul() {
  try {
    var ss = window.speechSynthesis;
    if (!ss || !ss.getVoices) return null;
    var sesler = ss.getVoices() || [];
    if (!sesler.length) return 'YUKLENIYOR';
    for (var v = 0; v < sesler.length; v++) { if ((sesler[v].lang || '').indexOf('tr') === 0) return sesler[v]; }
    return sesler[0];
  } catch (e) { return null; }
}
function ttsDurumGoster(s) {
  var g = document.getElementById('ttsDurum');
  if (g) g.innerHTML = s;
}
function seslendir(metin, turkce) {
  if (!window.speechSynthesis) { alert('Tarayıcı sesli okumayı desteklemiyor.'); return; }
  window.speechSynthesis.cancel();
  ttsDurumGoster('🔊 Hazırlanıyor…');
  var u = new (window.SpeechSynthesisUtterance || SpeechSynthesisUtterance)(metin);
  if (turkce) u.lang = 'tr-TR';
  u.rate = 1.0; u.pitch = 1.0; u.volume = 1.0;
  function denemek() {
    var ses = ttsVoiceBul();
    if (ses && ses !== 'YUKLENIYOR') u.voice = ses;
    u.onstart = function () { ttsDurumGoster('🔊 Oynatılıyor… (ses cihazından gelmeli)'); };
    u.onend = function () { ttsDurumGoster('✅ Tamamlandı'); };
    u.onerror = function () { ttsDurumGoster('⚠️ Ses motoru hatası'); };
    try { window.speechSynthesis.speak(u); } catch (e) { ttsDurumGoster('⚠️ Konuşma başlatılamadı'); }
  }
  var kez = 0;
  function bekleVeKonus() {
    kez++;
    var ses = ttsVoiceBul();
    if (ses === 'YUKLENIYOR' && kez < 40) { setTimeout(bekleVeKonus, 100); return; }
    denemek();
  }
  if (window.speechSynthesis.onvoiceschanged === null || window.speechSynthesis.addEventListener) {
    try { window.speechSynthesis.addEventListener('voiceschanged', function () { bekleVeKonus(); }); } catch (e) {}
  }
  bekleVeKonus();
}
function sesTesti() {
  var durum = ttsVoiceBul();
  if (!window.speechSynthesis) { alert('Bu tarayıcıda sesli okuma desteklenmiyor.'); return; }
  if (durum === null) { alert('Ses motoru bulunamadı. Cihazına metin-okuma sesi eklemen gerekiyor.'); return; }
  var mesaj = durum === 'YUKLENIYOR'
    ? '🔊 Merhaba! Uygulama sesi için cihazının yüklenmesini bekliyor. Birkaç saniye sonra tekrar deneyin.'
    : '🔊 Merhaba! Ses çalışıyorsa bu cümleyi duymuşsun. Ses dilin: ' + (durum.lang || '?') + ' (' + (durum.name || '') + ')';
  seslendir(mesaj, durum === 'YUKLENIYOR' || (durum && durum.lang && durum.lang.indexOf('tr') === 0));
  setTimeout(function () { if (!window.speechSynthesis.speaking) ttsDurumGoster('⚠️ Ses motoru hazır ama konuşmuyor'); }, 2000);
}
function langTr() {
  return (navigator.language || 'tr-TR').replace('-', '').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'tr';
}
function sesliOku(metin) { seslendir(metin, true); }
function cizDinle() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  var s = seciliSinif() || '6';
  if (durum.dinle) {
    var d = dersBul(s, durum.dinle);
    h += '<button class="geri" onclick="dinleDersKapat()">⬅ Ders Listesi</button>';
    if (d) {
      h += '<div class="baslik"><h1>' + DERS_IKON(d.id) + ' ' + d.ad + ' — Dinleme Metinleri</h1><p>Metni aç, 🔊 simgesiyle dinleyerek öğren. Her yeni dinleme +10 XP kazandırır.</p></div>';
      var okunan = oku('dinleme') || {};
      h += '<div class="deney-kutu">';
      d.birimler.forEach(function(b, bi) {
        var ok = !!okunan[d.id + '-' + bi];
        h += '<div class="deney-kart">';
        h += '<div class="deney-ikon">🎧</div>';
        h += '<div class="deney-bilgi"><b>' + esc(b.ad) + '</b><br><small>' + esc((b.konular || []).join(' · ')) + '</small></div>';
        h += '<div>' + (ok ? '<span class="deney-tamam">✅</span> ' : '') + '<button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="dinleAc(\'' + d.id + '\',' + bi + ')">Dinle</button></div>';
        h += '</div>';
      });
      h += '</div>';
    }
    ekran.innerHTML = h;
    return;
  }
  h += '<div class="baslik"><h1>🎧 Dinleme Metinleri</h1><p>Derslerin konu metinlerini aç ve dinleyerek öğren.</p></div>';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { h += '<p class="kucuk-not">Önce sınıfını seç.</p>'; ekran.innerHTML = h; return; }
  h += '<div class="deney-kutu">';
  bilgi.dersler.forEach(function(d) {
    h += '<div class="deney-kart"><div class="deney-ikon">' + DERS_IKON(d.id) + '</div>';
    h += '<div class="deney-bilgi"><b>' + d.ad + '</b><br><small>' + d.birimler.length + ' konu metni</small></div>';
    h += '<div><button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="dinleDersAc(\'' + d.id + '\')">Aç</button></div></div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function dinleDersAc(id) { durum.dinle = id; render(); }
function dinleDersKapat() { durum.dinle = null; render(); }
function dinleAc(dersId, bi) {
  var d = dersBul(seciliSinif(), dersId);
  var b = d && d.birimler[bi];
  var metin = dinleMetin(dersId, bi);
  if (!metin) { alert('Bu konu için metin bulunamadı.'); return; }
  dinleSesMetni = metin;
  var h = '<div class="modal-icerik"><span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<h3>🎧 ' + (b ? esc(b.ad) : (dersId + ' - ' + (bi + 1))) + '</h3>';
  h += '<div class="dinle-metin">' + esc(metin) + '</div>';
  h += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">';
  h += '<button class="btn btn-test" onclick="sesliOku(dinleSesMetni)">🔊 Dinle</button>';
  h += '<button class="btn btn-mor" onclick="dinleBitir(\'' + dersId + '\',' + bi + ')">✅ Dinledim</button>';
  h += '</div></div>';
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}
function dinleBitir(dersId, bi) {
  var okunan = oku('dinleme') || {};
  var anahtar = dersId + '-' + bi;
  var ilk = !okunan[anahtar];
  okunan[anahtar] = true;
  kaydet('dinleme', okunan);
  var ist = oku('istatistik') || {};
  ist.dinle = (ist.dinle || 0) + 1;
  kaydet('istatistik', ist);
  if (ilk) xpEkle(10);
  rozetKontrol();
  kapatOverlay();
  if (durum.tur === 'dinle') render();
}

/* ====== BELGESELLER ====== */
function belgeselVeri(dersId, bi) {
  var B = (typeof BELGESEL !== 'undefined') && BELGESEL[dersId] && BELGESEL[dersId][bi];
  if (B) return B;
  var d = dersBul(seciliSinif(), dersId);
  var b = d && d.birimler[bi];
  return b ? { emoji: '🎬', bas: b.ad, sure: '3 dk', belge: b.ozet } : null;
}
function cizBelgesel() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  var s = seciliSinif() || '6';
  if (durum.belDers) {
    var d = dersBul(s, durum.belDers);
    h += '<button class="geri" onclick="belgeselDersKapat()">⬅ Ders Listesi</button>';
    if (d && BELGESEL && BELGESEL[d.id]) {
      h += '<div class="baslik"><h1>🎬 ' + d.ad + ' — Belgeseller</h1><p>Her belgeseli izleyince +15 XP kazanırsın.</p></div>';
      var izlenen = oku('belgesel') || {};
      h += '<div class="deney-kutu">';
      Object.keys(BELGESEL[d.id]).forEach(function(bi) {
        var v = BELGESEL[d.id][bi];
        var b = d.birimler[bi];
        if (!b) return;
        var ok = !!izlenen[d.id + '-' + bi];
        h += '<div class="deney-kart">';
        h += '<div class="deney-ikon">' + v.emoji + '</div>';
        h += '<div class="deney-bilgi"><b>' + esc(b.ad) + '</b><br><small>' + esc(v.bas) + ' · ⏱ ' + v.sure + '</small></div>';
        h += '<div>' + (ok ? '<span class="deney-tamam">✅</span> ' : '') + '<button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="belgeselAc(\'' + d.id + '\',' + bi + ')">İzle</button></div>';
        h += '</div>';
      });
      h += '</div>';
    }
    ekran.innerHTML = h;
    return;
  }
  h += '<div class="baslik"><h1>🎬 Belgeseller</h1><p>Fen ve Sosyal Bilgiler konularını belgesel üslubuyla anlatan kısa metinler.</p></div>';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { h += '<p class="kucuk-not">Önce sınıfını seç.</p>'; ekran.innerHTML = h; return; }
  h += '<div class="deney-kutu">';
  bilgi.dersler.forEach(function(d) {
    if (!BELGESEL || !BELGESEL[d.id]) return;
    var n = Object.keys(BELGESEL[d.id]).length;
    h += '<div class="deney-kart"><div class="deney-ikon">' + DERS_IKON(d.id) + '</div>';
    h += '<div class="deney-bilgi"><b>' + d.ad + '</b><br><small>' + n + ' belgesel</small></div>';
    h += '<div><button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="belgeselDersAc(\'' + d.id + '\')">Aç</button></div></div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function belgeselDersAc(id) { durum.belDers = id; render(); }
function belgeselDersKapat() { durum.belDers = null; render(); }
function belgeselAc(dersId, bi) {
  var d = dersBul(seciliSinif(), dersId);
  var b = d && d.birimler[bi];
  var v = belgeselVeri(dersId, bi);
  if (!v || !v.belge) { alert('Bu belgesel bulunamadı.'); return; }
  var h = '<div class="modal-icerik"><span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<h3>' + v.emoji + ' ' + (b ? esc(b.ad) : (dersId + ' - ' + (bi + 1))) + '</h3>';
  h += '<p class="kucuk-not">' + esc(v.bas) + ' · ⏱ ' + v.sure + '</p>';
  h += '<div class="belgesel-metin">' + esc(v.belge) + '</div>';
  h += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">';
  h += '<button class="btn btn-test" onclick="sesliOku(\'' + esc(v.belge).replace(/'/g, "\\'") + '\')">🔊 Dinle</button>';
  h += '<button class="btn btn-mor" onclick="belgeselBitir(\'' + dersId + '\',' + bi + ')">✅ İzledim</button>';
  h += '</div></div>';
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}
function belgeselBitir(dersId, bi) {
  var izlenen = oku('belgesel') || {};
  var anahtar = dersId + '-' + bi;
  var ilk = !izlenen[anahtar];
  izlenen[anahtar] = true;
  kaydet('belgesel', izlenen);
  var ist = oku('istatistik') || {};
  ist.belgesel = (ist.belgesel || 0) + 1;
  kaydet('istatistik', ist);
  if (ilk) xpEkle(15);
  rozetKontrol();
  kapatOverlay();
  if (durum.tur === 'belgesel') render();
}

/* ====== KODLAMA ATÖLYESİ (interaktif) ====== */
function kodlamaList() { return (typeof KODLAMA !== 'undefined') ? (KODLAMA['bty' + (seciliSinif() || '6')] || []) : []; }
function kodlaBul(id) {
  var K = kodlamaList();
  for (var i = 0; i < K.length; i++) if (K[i].id === id) return K[i];
  return null;
}
function kodlaBirimAd(k) {
  var d = dersBul(seciliSinif(), 'bty' + (seciliSinif() || '6'));
  var b = d && d.birimler[k.birim];
  return b ? b.ad : ('Konu ' + (Number(k.birim) + 1));
}
function cizKodla() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  if (durum.kodla) {
    var k = durum.kodla.k;
    var a = k.adimlar[durum.kodla.adim];
    h += '<div class="baslik"><h1>' + k.ikon + ' ' + esc(k.ad) + '</h1><p>Kazanım: ' + k.kazanim + '</p></div>';
    h += '<div class="deney-adim">';
    h += '<div class="kucuk-not">Adım ' + (durum.kodla.adim + 1) + '/' + k.adimlar.length + ' · Doğru: ' + durum.kodla.dogru + '</div>';
    h += '<h2>' + esc(a.baslik) + '</h2>';
    h += '<p>' + esc(a.metin) + '</p>';
    if (a.tip === 'secim') {
      if (durum.kodla.yanlis) h += '<div class="deney-hata">❌ Yanlış seçim! Doğru şıkkı bulup tekrar dene.</div>';
      h += '<div class="deney-secenekler">';
      a.secenekler.forEach(function(sik, i) {
        h += '<button class="secenek" onclick="kodlaCevap(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + esc(sik) + '</button>';
      });
      h += '</div>';
    } else {
      h += '<button class="btn btn-test" onclick="kodlaIleri()">İleri ▶</button>';
    }
    h += '</div>';
    ekran.innerHTML = h;
    return;
  }
  h += '<div class="baslik"><h1>💻 Kodlama Atölyesi</h1><p>Bilişim Teknolojileri konuları için adım adım interaktif atölyeler. Her yeni atölyeyi tamamlayınca +25 XP kazanırsın.</p></div>';
  var yapilan = oku('kodla') || {};
  h += '<div class="deney-kutu">';
  kodlamaList().forEach(function(k) {
    var bitti = !!yapilan[k.id];
    h += '<div class="deney-kart">';
    h += '<div class="deney-ikon">' + k.ikon + '</div>';
    h += '<div class="deney-bilgi"><b>' + esc(k.ad) + '</b><br><small>' + esc(kodlaBirimAd(k)) + ' · ⏱ ' + k.sure + '</small>';
    h += '<div class="kucuk-not">💡 ' + esc(k.aciklama) + '</div></div>';
    h += '<div>' + (bitti ? '<span class="deney-tamam">✅</span> ' : '') + '<button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="kodlaBasla(\'' + k.id + '\')">' + (bitti ? 'Tekrar' : 'Başla') + '</button></div>';
    h += '</div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function kodlaBasla(id) {
  var k = kodlaBul(id);
  if (!k) return;
  durum.kodla = { k: k, adim: 0, dogru: 0, yanlis: false };
  render();
}
function kodlaIleri() {
  if (!durum.kodla) return;
  durum.kodla.adim++;
  durum.kodla.yanlis = false;
  if (durum.kodla.adim >= durum.kodla.k.adimlar.length) kodlaBitir();
  else render();
}
function kodlaCevap(i) {
  if (!durum.kodla) return;
  var a = durum.kodla.k.adimlar[durum.kodla.adim];
  if (a.tip !== 'secim') return;
  if (i === a.dogru) {
    durum.kodla.dogru++;
    durum.kodla.adim++;
    durum.kodla.yanlis = false;
    if (durum.kodla.adim >= durum.kodla.k.adimlar.length) kodlaBitir();
    else render();
  } else {
    durum.kodla.yanlis = true;
    render();
  }
}
function kodlaBitir() {
  var k = durum.kodla ? durum.kodla.k : null;
  if (!k) return;
  durum.kodla = null;
  var yap = oku('kodla') || {};
  var ilk = !yap[k.id];
  yap[k.id] = true;
  kaydet('kodla', yap);
  var ist = oku('istatistik') || {};
  ist.kodla = (ist.kodla || 0) + 1;
  kaydet('istatistik', ist);
  if (ilk) xpEkle(25);
  var bittiSay = Object.keys(yap).length;
  var rozetVar = (oku('odul') || []).indexOf('kodla1') > -1;
  var h = '<div class="modal-icerik">';
  h += '<span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<h3>' + k.ikon + ' Atölye Tamamlandı!</h3>';
  h += '<div class="deney-tamam-kutu">🎉 ' + esc(k.ad) + ' atölyesini bitirdin!' + (ilk ? ' (+25 XP)' : '') + '</div>';
  h += '<p class="kucuk-not">Toplam tamamlanan atölye: ' + bittiSay + '/' + kodlamaList().length + '</p>';
  if (bittiSay >= 1) h += '<div class="deney-tamam-kutu">🏅 ' + (rozetVar ? 'Kodlayıcı rozetin sende!' : 'Kodlayıcı rozetini kazandın!') + '</div>';
  h += '<button class="btn btn-mor" onclick="kapatOverlay();git(\'kodla\')">Tamam</button>';
  h += '</div>';
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}

/* ====== VERİ VE YEDEK (içe/dışa aktarma) ====== */
function veriYedekJSON() {
  var sonuc = {};
  Object.keys(localStorage).forEach(function(k) {
    if (k.indexOf('dersApp_') === 0) sonuc[k] = localStorage.getItem(k);
  });
  return JSON.stringify(sonuc);
}
function veriIndir(metin, ad) {
  try {
    var blob = new Blob([metin], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = ad || 'okul-yedek.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(url); }, 500);
  } catch (e) { alert('İndirme desteklenmiyor. Metni kopyala ve kaydet.'); }
}
function veriDisaAktar() {
  var metin = veriYedekJSON();
  var h = '<div class="modal-icerik"><span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<h3>🗄️ Yedek (Profil + İlerleme)</h3>';
  h += '<p class="kucuk-not">Bu JSON, tüm ilerlemeni içerir. İndir veya kopyala; başka cihazda içe aktarabilirsin.</p>';
  h += '<textarea rows="7" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px" readonly>' + esc(metin) + '</textarea>';
  h += '<div style="display:flex;gap:8px;margin-top:12px"><button class="btn btn-test" onclick="veriIndir(\'' + esc(metin).replace(/'/g, "\\'") + '\',\'okul-yedek.json\')">⬇️ İndir</button>';
  h += '<button class="btn btn-mor" onclick="kapatOverlay()">Tamam</button></div></div>';
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}
function veriDosyaYukle(evt) {
  var dosya = evt.target.files && evt.target.files[0];
  if (!dosya) return;
  var okuyucu = new FileReader();
  okuyucu.onload = function(e) { veriGeriYukle(e.target.result); };
  okuyucu.readAsText(dosya);
}
function veriGeriYukle(metin) {
  try {
    var veri = JSON.parse(metin);
    var say = 0;
    Object.keys(veri).forEach(function(k) { if (k.indexOf('dersApp_') === 0) { localStorage.setItem(k, veri[k]); say++; } });
    alert('Yedek yüklendi: ' + say + ' kayıt. Sayfa yenileniyor.');
    if (typeof location !== 'undefined' && location.reload) location.reload();
    else veriEkUygula();
  } catch (e) { alert('Geçersiz yedek dosyası.'); }
}
function veriEkUygula() {
  var ek = oku('veriEk');
  if (!ek) return;
  if (ek.MUFREDAT && typeof ek.MUFREDAT === 'object') {
    Object.keys(ek.MUFREDAT).forEach(function(s) { MUFREDAT[s] = ek.MUFREDAT[s]; });
  }
  if (ek.SORULAR && typeof ek.SORULAR === 'object') {
    Object.keys(ek.SORULAR).forEach(function(d) { SORULAR[d] = ek.SORULAR[d]; });
  }
  if (ek.ESLESTIRME && typeof ek.ESLESTIRME === 'object' && typeof ESLESTIRME !== 'undefined') {
    Object.keys(ek.ESLESTIRME).forEach(function(d) { ESLESTIRME[d] = ek.ESLESTIRME[d]; });
  }
}
function veriMufredatKaydet() {
  var el = $('veriMetin');
  var metin = el ? el.value : '';
  if (!metin.trim()) { alert('Lütfen JSON verisi yapıştır.'); return; }
  try {
    var veri = JSON.parse(metin);
    if (!veri.MUFREDAT && !veri.SORULAR && !veri.ESLESTIRME) throw new Error('boş');
    kaydet('veriEk', veri);
    veriEkUygula();
    alert('✅ Veri güncellendi! Müfredat, sorular ve eşleştirmeler artık geçerli.');
    cizVeri();
  } catch (e) { alert('Geçersiz JSON. Beklenen biçim: { "MUFREDAT": {...}, "SORULAR": {...} }'); }
}
function cizVeri() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🗄️ Veri ve Yedek</h1><p>İlerlemeni yedekle, başka cihaza taşı; müfredat ve soru verisini JSON ile güncelle.</p></div>';
  h += '<div class="ozet-karti" style="margin-bottom:14px">';
  h += '<h2>💾 Profil ve İlerleme Yedeği</h2>';
  h += '<p class="kucuk-not">Tüm XP, rozet, puan, görev ve tercihlerin tek bir JSON dosyasında toplanır.</p>';
  h += '<div style="display:flex;gap:8px;flex-wrap:wrap">';
  h += '<button class="btn btn-test" onclick="veriDisaAktar()">⬇️ Yedek Al</button>';
  h += '<label class="btn btn-mor" style="cursor:pointer">📂 Dosyadan Geri Yükle<input type="file" accept=".json,application/json" style="display:none" onchange="veriDosyaYukle(event)"></label>';
  h += '</div></div>';
  h += '<div class="ozet-karti" style="margin-bottom:14px">';
  h += '<h2>📥 Müfredat / Soru Verisini Güncelle</h2>';
  h += '<p class="kucuk-not">MEB veya kendi düzenlediğin veriyi JSON olarak yapıştır. <b>MUFREDAT</b> (sınıf bazlı) ve <b>SORULAR</b> (ders bazlı) anahtarlarını destekler. Mevcut verinin üzerine yazılır, dosyalara dokunmaya gerek yoktur.</p>';
  h += '<textarea id="veriMetin" rows="6" placeholder=\'{ "MUFREDAT": {"6": {...}}, "SORULAR": {"mat6": {...}} }\' style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px"></textarea>';
  h += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">';
  h += '<button class="btn btn-test" onclick="veriMufredatKaydet()">✅ Kaydet ve Uygula</button>';
  h += '<button class="btn btn-geri" onclick="veriEkSil()">🗑️ Özel Veriyi Sil (fabrika verisine dön)</button>';
  h += '</div></div>';
  ekran.innerHTML = h;
}
function veriEkSil() {
  localStorage.removeItem('dersApp_veriEk');
  if (typeof location !== 'undefined' && location.reload) { location.reload(); return; }
  veriEkUygula();
  cizVeri();
}

/* ====== MEB KAZANIM KONTROL LİSTESİ ====== */
function kazanimVar(dersId, bi) { return !!(oku('kazanim') || {})[dersId + '-' + bi]; }
function kazanimToggle(dersId, bi) {
  var k = oku('kazanim') || {};
  var ana = dersId + '-' + bi;
  if (k[ana]) delete k[ana];
  else { k[ana] = true; xpEkle(3); }
  kaydet('kazanim', k);
  if (durum.tur === 'kontrol') render();
}
function cizKontrol() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  var s = seciliSinif() || '6';
  h += '<div class="baslik"><h1>🎯 MEB Kazanım Kontrol Listesi</h1><p>Her kazanımı çalıştığında ✓ işaretle; sınıf genelinde ilerlemeni takip et. Her yeni işaretleme +3 XP kazandırır.</p></div>';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { h += '<p class="kucuk-not">Önce sınıfını seç.</p>'; ekran.innerHTML = h; return; }
  var yapilan = oku('kazanim') || {};
  var toplam = 0, yapToplam = 0;
  bilgi.dersler.forEach(function(d) {
    var dTop = 0, dYap = 0;
    d.birimler.forEach(function(b, i) {
      if (!b.kazanim) return;
      dTop++;
      if (yapilan[d.id + '-' + i]) dYap++;
    });
    if (!dTop) return;
    toplam += dTop;
    yapToplam += dYap;
    var yuz = Math.round(dYap / dTop * 100);
    h += '<div class="baslik" style="margin-top:16px"><h2>' + DERS_IKON(d.id) + ' ' + d.ad + ' <span class="kucuk-not">' + dYap + '/' + dTop + ' kazanım</span></h2>';
    h += '<div class="hak"><div class="hak-ust"><span>Kazanım ilerlemesi</span><span>%' + yuz + '</span></div><div class="cubuk hak' + (yuz < 50 ? ' zayif' : yuz < 80 ? ' orta' : ' guclu') + '"><div class="cubuk-dolgu" style="width:' + yuz + '%"></div></div></div>';
    h += '<div class="deney-kutu">';
    d.birimler.forEach(function(b, i) {
      if (!b.kazanim) return;
      var yap = !!yapilan[d.id + '-' + i];
      h += '<div class="deney-kart">';
      h += '<div class="deney-ikon">' + (yap ? '✅' : '🎯') + '</div>';
      h += '<div class="deney-bilgi"><b>' + esc(b.ad) + '</b><br><small>' + esc(b.kazanim) + '</small></div>';
      h += '<div><button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="kazanimToggle(\'' + d.id + '\',' + i + ')">' + (yap ? '↩️ Geri Al' : '✓ Çalıştım') + '</button></div>';
      h += '</div>';
    });
    h += '</div>';
  });
  var yuzTop = toplam ? Math.round(yapToplam / toplam * 100) : 0;
  h += '<div class="ozet-karti" style="margin-top:16px"><div class="hak"><div class="hak-ust"><span>🎯 Sınıf geneli</span><span>' + yapToplam + '/' + toplam + ' kazanım (%' + yuzTop + ')</span></div><div class="cubuk"><div class="cubuk-dolgu" style="width:' + yuzTop + '%"></div></div></div></div>';
  ekran.innerHTML = h;
}

/* ====== KONU ANLATIM VİDEO HAVUZU ====== */
function videoDersList() {
  var s = seciliSinif() || '6';
  var bilgi = MUFREDAT[s];
  if (!bilgi) return [];
  var liste = [];
  bilgi.dersler.forEach(function(d) {
    d.birimler.forEach(function(b, i) {
      var v = videoUrl(d.id, i);
      liste.push({ dersId: d.id, bi: i, ad: b.ad, dersAd: d.ad, varMi: !!v });
    });
  });
  return liste;
}
function cizVideo() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  var s = seciliSinif() || '6';
  h += '<div class="baslik"><h1>🎬 Konu Anlatım Videoları</h1><p>Ders konularına ait video havuzu. 🎬 butonuyla videoyu aç; olmayan konularda ders notunu okuyabilirsin.</p></div>';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { h += '<p class="kucuk-not">Önce sınıfını seç.</p>'; ekran.innerHTML = h; return; }
  var toplam = 0, varMi = 0;
  bilgi.dersler.forEach(function(d) {
    h += '<div class="baslik" style="margin-top:14px"><h2>' + DERS_IKON(d.id) + ' ' + d.ad + '</h2></div>';
    h += '<div class="deney-kutu">';
    d.birimler.forEach(function(b, i) {
      var v = videoUrl(d.id, i);
      toplam++;
      if (v) varMi++;
      h += '<div class="deney-kart">';
      h += '<div class="deney-ikon">' + (v ? '🎬' : '📭') + '</div>';
      h += '<div class="deney-bilgi"><b>' + esc(b.ad) + '</b><br><small>' + (v ? 'Video ders mevcut' : 'Video eklenmemiş') + '</small></div>';
      if (v) h += '<div><button class="btn btn-test" style="padding:6px 10px;font-size:13px" onclick="acKapaVideo(\'' + d.id + '\',' + i + ',\'' + esc(b.ad).replace(/'/g, "\\'") + '\')">▶ Oynat</button></div>';
      else h += '<div style="display:flex;gap:5px;flex-wrap:wrap"><button class="btn btn-geri" style="padding:6px 10px;font-size:13px" onclick="acKapaOzet(\'' + d.id + '\',' + i + ')">📄 Ders Notu</button><button class="btn btn-mor" style="padding:6px 10px;font-size:13px" onclick="videoAraYouTube(\'' + esc(b.ad).replace(/'/g, "\\'") + '\',\'' + d.id + '\')">▶ Bul</button></div>';
      h += '</div>';
    });
    h += '</div>';
  });
  h += '<div class="ozet-karti" style="margin-top:16px">🎬 ' + varMi + '/' + toplam + ' konuda video var. Video linklerini <b>sorular.js</b> dosyasındaki VIDEO bölümünden ekleyebilirsin.</div>';
  ekran.innerHTML = h;
}
function acKapaOzet(dersId, bi) {
  var d = dersBul(seciliSinif(), dersId);
  var b = d && d.birimler[bi];
  if (!b) return;
  var icerik = icerikCek(seciliSinif(), dersId, bi) || b.ozet || b.detay || '';
  var h = '<div class="modal-icerik"><span class="kap" onclick="kapatOverlay()">✕</span>';
  h += '<h3>📄 ' + DERS_IKON(dersId) + ' ' + esc(b.ad) + '</h3>';
  h += '<div class="dinle-metin">' + (icerik ? detayHTML(icerik) : '<small>(Bu konu için ders notu henüz hazır değil.)</small>') + '</div>';
  if (b.kazanim) h += '<div class="meb-kazanim" style="margin-top:10px">🎯 ' + esc(b.kazanim) + '</div>';
  h += '<div style="display:flex;gap:8px;margin-top:12px"><button class="btn btn-test" onclick="sesliOkuDinleMetin()">🔊 Dinle</button>';
  h += '<button class="btn btn-mor" onclick="kapatOverlay()">Tamam</button></div>';
  h += '<div id="ttsDurum" class="tts-durum" style="margin-top:8px;font-size:13px;color:#666"></div>';
  h += '<button class="kucuk-buton" style="background:#555;margin-top:6px" onclick="sesTesti()">🔁 Ses Testi</button></div></div>';
  dinleSesMetni = (b.ad + '. ' + (icerik || ''));
  $('modal').innerHTML = h;
  $('overlay').classList.add('acik');
  $('modal').classList.add('acik');
}
function sesliOkuDinleMetin() { sesliOku(dinleSesMetni); }


function hakimiyet(dersId, bi) {
  var p = oku('puan') || {};
  var list = p[dersId];
  if (!list || !list.length) return null;
  var enIy = -1;
  list.forEach(function(e) {
    if (String(e.u) === String(bi) && e.n) { var y = Math.round(e.d / e.n * 100); if (y > enIy) enIy = y; }
  });
  return enIy >= 0 ? enIy : null;
}

function statlar() {
  var p = oku('puan') || {};
  var testSay = 0, esleSay = 0, iyiSay = 0, tamSay = 0;
  Object.keys(p).forEach(function(k) {
    (p[k] || []).forEach(function(e) {
      if (k.indexOf('esle-') === 0) esleSay++; else testSay++;
      var y = e.n ? Math.round(e.d / e.n * 100) : 0;
      if (y >= 90) iyiSay++;
      if (e.n && e.d === e.n) tamSay++;
    });
  });
  var x = xpBilgi();
  var pomo = oku('pomo') || {};
  var ist = oku('istatistik') || {};
  var hedef = hedefOku();
  var xg = oku('xpgun') || {};
  var bg = gunKod(new Date());
  var xpgunToday = xg[bg] || 0;
  var pomoGunSay = (pomo.gun === bg) ? (pomo.gunSay || 0) : 0;
  var prog = oku('prog') || {};
  var planMaxGun = 0, planToplam = 0;
  var gun = {};
  Object.keys(prog).forEach(function(k) {
    var d = String(k).split('-')[0];
    gun[d] = (gun[d] || 0) + 1;
    planToplam++;
  });
  Object.keys(gun).forEach(function(d) { if (gun[d] > planMaxGun) planMaxGun = gun[d]; });
  var bTop = 0, bYap = 0;
  for (var s in MUFREDAT) MUFREDAT[s].dersler.forEach(function(d) { d.birimler.forEach(function (_, i) { bTop++; if (biten(d.id + '-' + i)) bYap++; }); });
  var okunanKitap = 0;
  if (KITAP) Object.keys(KITAP).forEach(function(id) { if (kitapTamam(id)) okunanKitap++; });
  var yarismaBitir = (oku('yarismaTamam') || []).length;
  return { testSay: testSay, esleSay: esleSay, iyiSay: iyiSay, tamSay: tamSay, soruSay: ist.soru || 0, xp: x.p, seri: x.seri, pomoSay: pomo.toplam || 0, pomoGunSay: pomoGunSay, bTop: bTop, bYap: bYap, okunanKitap: okunanKitap, yarismaBitir: yarismaBitir, deneySay: ist.deney || 0, seviyeSay: ist.seviye || 0, dinleSay: ist.dinle || 0, belgeselSay: ist.belgesel || 0, kodlaSay: ist.kodla || 0, seviye: seviyeHesapla(x.p), hedefXP: hedef, xpgunToday: xpgunToday, planMaxGun: planMaxGun, planToplam: planToplam };
}

function pomoSes() {
  try { var Ctx = window.AudioContext || window.webkitAudioContext; } catch (e) { return; }
  if (!Ctx) return;
  try {
    var ctx = new Ctx();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 1000;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.02);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
  } catch (e) {}
}

function hedefOku() {
  var h = oku('hedef');
  if (h && typeof h === 'object') return Math.max(10, h.xp || 200);
  return 200;
}
function hedefKaydet(v) { var h = oku('hedef') || {}; h.xp = Math.max(10, v || 200); kaydet('hedef', h); }
function hedefYuzde() { var hedef = hedefOku(); var st = statlar(); return Math.min(100, Math.round((st.xpgunToday || 0) / hedef * 100)); }
function hedefTamam() { return statlar().xpgunToday >= hedefOku(); }

function cizHedefBar() {
  var st = statlar();
  var hedef = hedefOku();
  var y = hedefYuzde();
  var tam = hedefTamam();
  var renk = tam ? '#2ecc71' : (y < 40 ? '#e74c3c' : (y < 80 ? '#f39c12' : '#2ecc71'));
  var h = '<div class="ozet-karti" style="margin:14px 0">';
  h += '<div class="ilerleme-ust" style="justify-content:space-between">';
  h += '<span>🔥 Günlük Hedef</span>';
  h += '<span>' + (st.xpgunToday || 0) + '/' + hedef + ' XP' + (tam ? ' ✅' : '') + '</span>';
  h += '</div>';
  h += '<div class="cubuk"><div class="cubuk-dolgu" style="width:' + y + '%;background:' + renk + '"></div></div>';
  h += '<div class="kucuk-not" style="text-align:center">Hedefi kaçırma, bugün ' + hedef + ' XP toplayabilirsin!</div>';
  h += '</div>';
  return h;
}

var ROZETLER = [
  { id: 'ilk', ad: 'İlk Adım', ikon: '👣', aciklama: 'İlk XP’ni kazan', kontrol: function(s) { return s.xp >= 1; } },
  { id: 'test1', ad: 'Sınava Başla', ikon: '📝', aciklama: 'İlk testini çöz', kontrol: function(s) { return s.testSay >= 1; } },
  { id: 'test10', ad: 'Test Canavarı', ikon: '🐉', aciklama: '10 test çöz', kontrol: function(s) { return s.testSay >= 10; } },
  { id: 'yildiz', ad: 'Yıldız Test', ikon: '💯', aciklama: 'Bir testte %90+ al', kontrol: function(s) { return s.iyiSay >= 1; } },
  { id: 'tam', ad: 'Kusursuz', ikon: '🎯', aciklama: 'Bir testte hepsi doğru', kontrol: function(s) { return s.tamSay >= 1; } },
  { id: 'esle1', ad: 'Eşleştirici', ikon: '🧩', aciklama: 'İlk eşleştirmeni bitir', kontrol: function(s) { return s.esleSay >= 1; } },
  { id: 'esle3', ad: 'Eşleştirme Ustası', ikon: '🔗', aciklama: '3 eşleştirme bitir', kontrol: function(s) { return s.esleSay >= 3; } },
  { id: 'pomo1', ad: 'Odaklan', ikon: '⏱️', aciklama: 'İlk odak turunu bitir', kontrol: function(s) { return s.pomoSay >= 1; } },
  { id: 'pomo5', ad: 'Odak Şampiyonu', ikon: '🔥', aciklama: '5 odak turunu bitir', kontrol: function(s) { return s.pomoSay >= 5; } },
  { id: 'pomo4', ad: 'Sabah Rutinesi', ikon: '☕', aciklama: 'Günde 4 pomodoro çalış', kontrol: function(s) { return s.pomoGunSay >= 4; } },
  { id: 'sev3', ad: 'Rütbeli', ikon: '🎖️', aciklama: '3. seviyeye ulaş', kontrol: function(s) { return s.seviye >= 3; } },
  { id: 'gunluk', ad: 'Günlük Asiyorum', ikon: '🎯', aciklama: 'Günlük hedefe ulaş', kontrol: function(s) { return s.xpgunToday > 0 && s.xpgunToday >= s.hedefXP; } },
  { id: 'program1', ad: 'Planlı Çalışıcı', ikon: '📅', aciklama: 'Bir günde 3 saat planla', kontrol: function(s) { return s.planMaxGun >= 3; } },
  { id: 'xp500', ad: '500 XP', ikon: '💎', aciklama: '500 XP kazan', kontrol: function(s) { return s.xp >= 500; } },
  { id: 'seri3', ad: 'Seri Çalışan', ikon: '🔥', aciklama: '3 gün üst üste çalış', kontrol: function(s) { return s.seri >= 3; } },
  { id: 'tum', ad: 'Her Şeyi Öğrenen', ikon: '🏆', aciklama: 'Tüm konuları tamamla', kontrol: function(s) { return s.bTop > 0 && s.bYap >= s.bTop; } },
  { id: 'okuma', ad: 'Okuyucu', ikon: '📚', aciklama: 'İlk kitabını bitir', kontrol: function(s) { return s.okunanKitap >= 1; } },
  { id: 'yarisma1', ad: 'Yarışmacı', ikon: '🏆', aciklama: 'Haftalık yarışmayı tamamla', kontrol: function(s) { return s.yarismaBitir >= 1; } },
  { id: 'deney1', ad: 'Deneyci', ikon: '🧪', aciklama: '3 fen deneyi tamamla', kontrol: function(s) { return s.deneySay >= 3; } },
  { id: 'seviye1', ad: 'Seviyeni Belirledin', ikon: '🎯', aciklama: 'Seviye belirleme testini çöz', kontrol: function(s) { return s.seviyeSay >= 1; } },
  { id: 'dinle1', ad: 'Dinleyici', ikon: '🎧', aciklama: '2 dinleme metnini oku/dinle', kontrol: function(s) { return s.dinleSay >= 2; } },
  { id: 'belgesel1', ad: 'Belgeselci', ikon: '🎬', aciklama: '2 belgesel izle', kontrol: function(s) { return s.belgeselSay >= 2; } },
  { id: 'kodla1', ad: 'Kodlayıcı', ikon: '💻', aciklama: 'İlk kodlama atölyesini tamamla', kontrol: function(s) { return s.kodlaSay >= 1; } },
  { id: 'xp500', ad: 'Efsane', ikon: '🌟', aciklama: '500 XP kazan (gizli)', kontrol: function(s) { return s.xp >= 500; }, gizli: true },
  { id: 'stre7', ad: 'Ateş Topu', ikon: '🔥', aciklama: '7 gün üst üste çalış (gizli)', kontrol: function(s) { return s.gunSerisi >= 7; }, gizli: true },
  { id: 'test50', ad: 'Test Dahisi', ikon: '🧠', aciklama: '50 test çöz (gizli)', kontrol: function(s) { return s.testSay >= 50; }, gizli: true },
  { id: 'yeniyil', ad: 'Yeni Yıl', ikon: '🎆', aciklama: 'Yılbaşında açılır', kontrol: function(s) { var n = new Date(); return n.getMonth() === 0 && n.getDate() <= 3; }, mevsim: true },
  { id: 'nisan23', ad: '23 Nisan', ikon: '🇹🇷', aciklama: '23 Nisan’da açılır', kontrol: function(s) { var n = new Date(); return n.getMonth() === 3 && n.getDate() === 23; }, mevsim: true }
];

function rozetKontrol() {
  var s = statlar();
  var acik = oku('odul') || [];
  var yeni = [];
  ROZETLER.forEach(function(r) {
    if (r.kontrol(s) && acik.indexOf(r.id) < 0) { acik.push(r.id); yeni.push(r.ikon + ' ' + r.ad); }
  });
  kaydet('odul', acik);
  if (yeni.length) setTimeout(function() { alert('🎉 Yeni rozet kazandın: ' + yeni.join(', ')); }, 200);
}

function cizOdul() {
  var s = statlar();
  var acik = oku('odul') || [];
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🏅 Başarılarım</h1><p>XP kazan, seviye atla, rozetleri topla!</p></div>';
  h += '<div class="durum-karti">';
  h += '<div class="durum-huc"><b>⭐ XP</b><span>' + s.xp + '</span></div>';
  h += '<div class="durum-huc"><b>🎖 Seviye</b><span>' + s.seviye + '</span></div>';
  h += '<div class="durum-huc"><b>🔥 Seri</b><span>' + s.seri + ' gün</span></div>';
  h += '<div class="durum-huc"><b>📝 Test</b><span>' + s.testSay + '</span></div>';
  h += '<div class="durum-huc"><b>📚 Soru</b><span>' + s.soruSay + '</span></div>';
  h += '<div class="durum-huc"><b>🧩 Eşleşme</b><span>' + s.esleSay + '</span></div>';
  h += '<div class="durum-huc"><b>⏱️ Odak</b><span>' + s.pomoSay + ' tur</span></div>';
  h += '</div>';
  h += '<div class="baslik"><h2>🎖️ Rozetlerim (' + acik.length + '/' + ROZETLER.length + ')</h2></div>';
  h += '<div class="rozetler">';
  ROZETLER.forEach(function(r) {
    var varMi = acik.indexOf(r.id) > -1;
    h += '<div class="rozet' + (varMi ? ' acik' : ' kapali') + '"><div class="rozet-ikon">' + r.ikon + '</div>' +
         '<div class="rozet-ad">' + r.ad + '</div><div class="rozet-ac">' + r.aciklama + '</div>' +
         (varMi ? '' : '<div class="rozet-kilit">🔒</div>') + '</div>';
  });
  h += '</div>';
  h += '<div style="text-align:center;margin-top:14px"><button class="btn btn-bitir" onclick="odulSil()">🔄 Rozetleri Sıfırla</button></div>';
  ekran.innerHTML = h;
}

function odulSil() {
  if (!confirm('Rozetler silinsin mi?')) return;
  kaydet('odul', []);
  cizOdul();
}

/* ====== POMODORO ====== */
var pomoDakika = 25, molaDakika = 5;

function cizPomodoro() {
  if (!durum.pomo) durum.pomo = { mod: 'c', kalan: pomoDakika * 60, calis: false };
  var pm = durum.pomo;
  var dak = Math.floor(pm.kalan / 60), sn = pm.kalan % 60;
  var etiket = pm.mod === 'c' ? '🎯 Çalışma' : '🍎 Mola';
  var renk = pm.mod === 'c' ? '#e74c3c' : '#2ecc71';
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>⏱️ Pomodoro Zamanlayıcı</h1><p>25 dakika çalış, 5 dakika mola ver. Odaklan!</p></div>';
  h += '<div class="pomo-kutu">';
  h += '<div class="pomo-mod" style="color:' + renk + '">' + etiket + '</div>';
  h += '<div class="pomo-saat" style="color:' + renk + '">' + ('0' + dak).slice(-2) + ':' + ('0' + sn).slice(-2) + '</div>';
  h += '<div class="pomo-butonlar">';
  h += '<button class="btn btn-test" onclick="pomoBasla()">' + (pm.calis ? '⏸ Duraklat' : '▶️ Başlat') + '</button>';
  h += '<button class="btn btn-geri" onclick="pomoSifirla()">🔄 Sıfırla</button>';
  h += '</div>';
  var pomo = oku('pomo') || {};
  var gunSay = statlar().pomoGunSay;
  h += '<div class="pomo-gun"><span>🔢 Toplam: ' + (pomo.toplam || 0) + '</span><span>🔥 Bugün: ' + gunSay + '/4</span></div>';
  h += '<div class="kucuk-not">Tamamladığın her çalışma turu +3 XP kazandırır. Telefonunu kenara koy ve odaklan!</div>';
  h += '</div>';
  ekran.innerHTML = h;
}

function pomoBasla() {
  if (!durum.pomo) durum.pomo = { mod: 'c', kalan: pomoDakika * 60, calis: false };
  durum.pomo.calis = !durum.pomo.calis;
  if (durum.pomo.kayit) { clearInterval(durum.pomo.kayit); durum.pomo.kayit = null; }
  if (durum.pomo.calis && typeof setInterval !== 'undefined') durum.pomo.kayit = setInterval(pomoTikTok, 1000);
  cizPomodoro();
}

function pomoSifirla() {
  if (!durum.pomo) durum.pomo = { mod: 'c', kalan: pomoDakika * 60, calis: false };
  if (durum.pomo.kayit) { clearInterval(durum.pomo.kayit); durum.pomo.kayit = null; }
  durum.pomo.mod = 'c'; durum.pomo.kalan = pomoDakika * 60; durum.pomo.calis = false;
  cizPomodoro();
}

function pomoTikTok() {
  var pm = durum.pomo;
  if (!pm || !pm.calis) return;
  pm.kalan--;
  if (pm.kalan <= 0) {
   if (pm.mod === 'c') {
       var pomo = oku('pomo') || {}; pomo.toplam = (pomo.toplam || 0) + 1;
       var bg = gunKod(new Date());
       if (pomo.gun !== bg) { pomo.gun = bg; pomo.gunSay = 0; }
        pomo.gunSay = (pomo.gunSay || 0) + 1;
        kaydet('pomo', pomo);
        pomoGunKaydet();
       xpEkle(3);
       pomoSes();
       gorevIlerle('pomo', 1);
       rozetKontrol();
       pm.mod = 'm'; pm.kalan = molaDakika * 60;
      alert('🍎 Mola zamanı! 5 dakika kendine iyi bak.');
    } else {
      pm.mod = 'c'; pm.kalan = pomoDakika * 60;
      alert('💪 Çalışma vakti geldi!');
    }
  }
  if (durum.tur === 'pomodoro') cizPomodoro();
}

/* ====== SINAV GERİ SAYIMI ====== */
function cizSaylar() {
  var list = oku('saylar') || [];
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📅 Sınav Geri Sayımı</h1><p>Sınav ve önemli günleri ekle, kaç gün kaldığını gör.</p></div>';
  h += '<div class="sayac-ekle">';
  h += '<input id="sayAd" type="text" placeholder="Ne? (örn: Matematik Yazılısı)">';
  h += '<input id="sayTarih" type="date">';
  h += '<button class="btn btn-mor" onclick="sayacEkle()">➕ Ekle</button>';
  h += '</div>';
  if (!list.length) h += '<div class="kucuk-not">Henüz geri sayım yok. Yukarıdan bir sınav tarihi ekleyebilirsin.</div>';
  h += '<div class="sayac-list">';
  list.slice().sort(function(a, b) { return new Date(a.t) - new Date(b.t); }).forEach(function(s, i) {
    var gun = gunKadar(s.t);
    var simge = gun <= 0 ? '🎉 Bugün!' : (gun <= 7 ? '⚠️ Çok yakın!' : '⏳');
    var renk = gun <= 0 ? '#27ae60' : gun <= 7 ? '#e74c3c' : '#6a5cff';
    h += '<div class="sayac-kart" style="border-left:6px solid ' + renk + '">';
    h += '<div class="sayac-ad"><b>' + s.ad + '</b><br><small>' + s.t + '</small></div>';
    h += '<div class="sayac-gun" style="color:' + renk + '">' + (gun <= 0 ? 'Bugün!' : gun + ' gün') + '<div class="kucuk-not">' + simge + '</div></div>';
    h += '<button class="sayac-sil" onclick="sayacSil(' + i + ')">🗑️</button>';
    h += '</div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}

function gunKadar(t) {
  var hedef = new Date(t + 'T00:00:00');
  var simdi = new Date(); simdi.setHours(0, 0, 0, 0);
  return Math.round((hedef - simdi) / 86400000);
}

function sayacEkle() {
  var ad = document.getElementById('sayAd').value;
  var t = document.getElementById('sayTarih').value;
  if (!ad || !t) { alert('Ad ve tarih yazmalısın.'); return; }
  var list = oku('saylar') || [];
  list.push({ ad: ad, t: t });
  kaydet('saylar', list);
  xpEkle(5);
  cizSaylar();
}

function sayacSil(i) {
  var list = oku('saylar') || [];
  list.splice(i, 1);
  kaydet('saylar', list);
  cizSaylar();
}

/* ====== BİLGİ KARTLARI (FSRS Aralıklı Tekrar) ====== */

function tarihFark(t1, t2) {
  var a = new Date(t1), b = new Date(t2);
  return Math.round((b - a) / 86400000);
}

function kartKartlari(dersId) {
  var kayit = oku('kartlar') || {};
  var list = kayit[dersId];
  if (list) {
    return list.map(function(c) {
      if (c.sf !== undefined) return c;
      return FSRS.eskiKart(c.s, c.c, c.kutu || 1);
    });
  }
  var es = ESLESTIRME[dersId];
  if (es && es.length) {
    var yeni = [];
    es.forEach(function(t) { t.forEach(function(p) { yeni.push(FSRS.yeniKart(p[0], p[1])); }); });
    return yeni;
  }
  var sor = SORULAR[dersId];
  if (sor) {
    var qList = [];
    Object.keys(sor).forEach(function(bi) {
      (sor[bi] || []).forEach(function(q) { qList.push(FSRS.yeniKart(q.s, q.o ? q.o[q.d] : '')); });
    });
    if (qList.length) return qList;
  }
  return [];
}

function kartKaydet(dersId, list) {
  var kayit = oku('kartlar') || {};
  kayit[dersId] = list;
  kaydet('kartlar', kayit);
}

function kartGecikmis(c, bugun) {
  return FSRS.tekrarGerektiriyorMu(c, bugun);
}

function kartBugun(dersId) {
  var bugun = gunKod(new Date());
  var say = 0;
  kartKartlari(dersId).forEach(function(c) { if (kartGecikmis(c, bugun)) say++; });
  return say;
}

function kartYeni(dersId, mod) {
  var list = kartKartlari(dersId).map(function(c) {
    return { s: c.s, c: c.c, d: c.d || 5, sf: c.sf || 2.5, r: c.r || 1, son: c.son || null, tekrar: c.tekrar || 0, sonPuan: c.sonPuan || 0 };
  });
  if (!list.length) { alert('Bu ders için yeterli kart yok.'); return; }
  var deck;
  if (mod === 'tekrar') {
    var bugun = gunKod(new Date());
    deck = list.filter(function(c) { return kartGecikmis(c, bugun); });
    if (!deck.length) { alert('Bugün tekrar kartın yok, harika! 🎉'); return; }
  } else {
    deck = list.slice();
  }
  karistir(deck);
  durum.kart = { d: dersId, hepsi: list, deck: deck, bilen: 0, basla: deck.length, goster: false, tekrar: (mod === 'tekrar'), istatistik: { again: 0, hard: 0, good: 0, easy: 0 } };
  durum.tur = 'kart'; tabGuncelle(); render();
}

function kartBaslat(dersId) { kartYeni(dersId, 'hepsi'); }
function kartTekrarBaslat(dersId) { kartYeni(dersId, 'tekrar'); }

function cizKartSec() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🃏 Bilgi Kartları</h1><p>Doğru bildikçe kartlar üst kutuya çıkar. Aralıklı tekrarla kalıcı öğren!</p></div>';
  h += '<div class="dersler">';
  for (var s in MUFREDAT) {
    MUFREDAT[s].dersler.forEach(function(d) {
      if (!esleVar(d.id)) return;
      var bugun = kartBugun(d.id);
      h += '<div class="ders-card kart-ders">';
      h += '<span class="ikon">🃏</span>';
      h += '<span class="kart-bilgi"><span class="ad">' + s + '. Sınıf · ' + d.ad + '</span><br>' +
           '<span class="alt">🗂️ ' + kartKartlari(d.id).length + ' kart · 🔁 Bugün: ' + bugun + ' tekrar</span></span>';
      h += '<span class="kart-btnler">';
      h += '<button class="kucuk-buton" style="background:#2ecc71" onclick="kartTekrarBaslat(\'' + d.id + '\')">🎯 Tekrar</button>';
      h += '<button class="kucuk-buton" style="background:#9b59b6" onclick="kartBaslat(\'' + d.id + '\')">📚 Tümü</button>';
      h += '</span></div>';
    });
  }
  h += '</div>';
  h += '<div class="kucuk-not">💡 FSRS: Kişisel hatırlama hızına göre akıllı tekrar. 4 derece: Tekrar(✗)/Zor(△)/İyi(○)/Kolay(★) — handleError.jpg</div>';
  ekran.innerHTML = h;
}

function cizKart() {
  var k = durum.kart;
  if (!k || !k.deck.length) { kartBitti(); return; }
  var c = k.deck[0];
  var yapilan = k.basla - k.deck.length;
  var durumFSRS = FSRS.kartDurumu(c);
  var durumSimge = { 'yeni': '🆕', 'hazir': '✅', 'gecikmis': '⏰', 'unutuluyor': '⚠️', 'aklimda': '🧠' }[durumFSRS] || '';
  var h = '<button class="geri" onclick="git(\'kartSec\')">⬅ Kartlara Dön</button>';
  h += '<div class="baslik"><h1>' + (k.tekrar ? '🎯 Bugünkü Tekrarlar' : '🃏 ' + dersAdi(k.d)) + '</h1><p>Kart ' + (yapilan + 1) + '/' + k.basla + ' · ' + durumSimge + ' ' + durumFSRS + ' · ⚡ Zorluk: ' + (c.d || 5) + '/10</p></div>';
  h += '<div class="kart-alan">';
  h += '<div class="kart">';
  h += '<div class="kart-on">' + c.s + '</div>';
  if (k.goster) h += '<div class="kart-arka">' + c.c + '</div>';
  h += '</div>';
  h += '<div class="kart-butonlar">';
  if (!k.goster) h += '<button class="btn btn-mor" onclick="kartGoster()">💡 Cevabı Göster</button>';
  else {
    h += '<button class="btn btn-bitir" onclick="kartCevap(1)">✗ Tekrar</button>';
    h += '<button class="btn" style="background:#f39c12;color:#fff" onclick="kartCevap(2)">△ Zor</button>';
    h += '<button class="btn btn-test" onclick="kartCevap(3)">○ İyi</button>';
    h += '<button class="btn btn-neo" onclick="kartCevap(4)">★ Kolay</button>';
  }
  h += '</div>';
  h += '</div>';
  ekran.innerHTML = h;
}

function kartGoster() { durum.kart.goster = true; cizKart(); }

function kartCevap(puan) {
  var k = durum.kart;
  var c = k.deck.shift();
  var sonuc = FSRS.puanSonrasiGuncelle(c, puan);
  c = sonuc.kart;
  if (puan >= 3) k.bilen++;
  else k.deck.push(c);
  k.hepsi.forEach(function(h) { if (h.s === c.s && h.c === c.c) { h.d = c.d; h.sf = c.sf; h.r = c.r; h.son = c.son; h.tekrar = c.tekrar; h.sonPuan = c.sonPuan; } });
  if (puan === 1) k.istatistik.again++;
  else if (puan === 2) k.istatistik.hard++;
  else if (puan === 3) k.istatistik.good++;
  else if (puan === 4) k.istatistik.easy++;
  k.goster = false;
  gorevIlerle('kart', 1);
  cizKart();
}

function kartBitti() {
  var k = durum.kart;
  if (!k) return;
  kartKaydet(k.d, k.hepsi);
  var toplam = k.basla;
  var yz = toplam ? Math.round(k.bilen / toplam * 100) : 0;
  xpEkle(k.bilen * 2 + 4);
  var ist = k.istatistik || {};
  var h = '<div class="quiz-kutu"><div class="sonuc"><div class="buyuk">' + (yz >= 70 ? '🏆' : '🙂') + '</div>' +
          '<div class="puan">' + k.bilen + ' / ' + toplam + ' kartı biliyordum</div>' +
          '<p style="color:#5c6b85">%' + yz + ' başarı</p>' +
          '<div style="display:flex;gap:8px;justify-content:center;margin:10px 0;flex-wrap:wrap">' +
          '<span style="color:#e74c3c">✗ Tekrar: ' + (ist.again || 0) + '</span>' +
          '<span style="color:#f39c12">△ Zor: ' + (ist.hard || 0) + '</span>' +
          '<span style="color:#3498db">○ İyi: ' + (ist.good || 0) + '</span>' +
          '<span style="color:#2ecc71">★ Kolay: ' + (ist.easy || 0) + '</span>' +
          '</div>' +
          '<p style="font-size:13px;color:#8b97ad">FSRS: Tekrar edilen kartlar kişisel hızına göre zamanlanacak.</p>' +
          '<button class="btn btn-mor" onclick="git(\'menu\')">🏠 Anasayfa</button> ' +
          '<button class="btn btn-neo" onclick="kartBaslat(\'' + k.d + '\')">🔁 Tekrar</button></div></div>';
  durum.tur = 'kartSon';
  ekran.innerHTML = h;
}
function cizKartSon() { kartBitti(); }

/* ====== KONU HAKİMİYET HARİTASI ====== */
function cizHarita() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🗺️ Konu Hakimiyet Haritası</h1><p>Renkler, o konuyu ne kadar iyi öğrendiğini gösterir.</p></div>';
  h += '<div class="lejant">';
  h += '<span class="l-lej bo">■</span> hiç test yok <span class="l-lej zayif">■</span> %0-49 <span class="l-lej orta">■</span> %50-79 <span class="l-lej guclu">■</span> %80+';
  h += '</div>';
  for (var s in MUFREDAT) {
    h += '<div class="harita-sinif"><h2>' + s + '. Sınıf</h2><div class="harita-dersler">';
    MUFREDAT[s].dersler.forEach(function(d) {
      h += '<div class="harita-ders"><h3>' + DERS_IKON(d.id) + ' ' + d.ad + '</h3><div class="harita-hucrel">';
      d.birimler.forEach(function(b, i) {
        var hak = hakimiyet(d.id, i);
        var cls = hak === null ? 'bo' : hak < 50 ? 'zayif' : hak < 80 ? 'orta' : 'guclu';
        h += '<button class="harita-huc ' + cls + '" onclick="secDers(' + s + ',\'' + d.id + '\')" title="' + (hak === null ? 'Henüz test yok' : '%' + hak) + '">' + (i + 1) + '</button>';
      });
      h += '</div></div>';
    });
    h += '</div></div>';
  }
   h += '<div class="kucuk-not">Bir hücreye tıklayarak o derse gidebilirsin. Hakimiyet, o konudaki en iyi test sonucuna göre hesaplanır.</div>';
   ekran.innerHTML = h;
 }

 /* ====== KONU TAMAMLANMA RAPORU (Morpa stili) ====== */
 function konuTik(dersId, i) {
   var done = oku('biti') || {};
   var k = dersId + '-' + i;
   if (done[k]) { delete done[k]; }
   else { done[k] = true; xpEkle(5); gorevIlerle('konu', 1); }
   kaydet('biti', done);
   cizKonuRapor();
 }
 function konuRaporSifirla() {
   if (!confirm('Bu dersin tüm "tamamladım" işaretleri silinsin mi?')) return;
   var s = seciliSinif();
   var d = dersBul(s, durum.ders);
   if (!d) return;
   var done = oku('biti') || {};
   d.birimler.forEach(function (_, i) { delete done[d.id + '-' + i]; });
   kaydet('biti', done);
   cizKonuRapor();
 }
 function cizKonuRapor() {
   var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
   var s = seciliSinif();
   var bilgi = s ? MUFREDAT[s] : null;
   if (!bilgi) {
     h += '<div class="baslik"><h1>📊 Konu Raporu</h1><p>Önce <b>Profilim</b>’den sınıfını seç.</p></div>';
     ekran.innerHTML = h; return;
   }
   h += '<div class="baslik"><h1>📊 Konu Tamamlanma Raporu</h1><p>' + s + '. sınıf · konu bazlı yüzdelik hakimiyet (Morpa stili)</p></div>';
   var d = durum.ders ? dersBul(s, durum.ders) : null;
   if (!d) {
     h += '<div class="harita-dersler">';
     bilgi.dersler.forEach(function (dr) {
       h += '<button class="grade-card renk' + dr.id + '" onclick="durum.ders=\'' + dr.id + '\';cizKonuRapor()">' + DERS_IKON(dr.id) + ' ' + dr.ad + '</button>';
     });
     h += '</div><div class="kucuk-not">Bir dersinizi seçin; tüm konu çubuklarınızı ve %tamamlanmayı görürsünüz.</div>';
     ekran.innerHTML = h; return;
   }
   h += '<div class="filtre-ust"><button class="geri" style="float:left" onclick="durum.ders=\'\';cizKonuRapor()">⬅ ' + s + '. Sınıf</button><button class="kucuk-buton" style="background:#e74c3c" onclick="konuRaporSifirla()">🔄 Tümünü Sıfırla</button></div>';
   h += '<div class="konu-raporu">';
   h += '<div class="konu-satir konu-header"><div class="konu-ad">Konu</div><div class="konu-say">Hakimiyet</div><div class="konu-cubuk">Tamam</div></div>';
   d.birimler.forEach(function (b, i) {
     var tam = biten(d.id + '-' + i);
     var hak = hakimiyet(d.id, i);
     var yuz = (hak === null) ? 0 : hak;
     var renk = hak === null ? '#9aa6c2' : hak < 50 ? '#e74c3c' : hak < 80 ? '#f39c12' : '#2ecc71';
     h += '<div class="konu-satir">';
     h += '<div class="konu-ad"><span class="num" style="background:' + (b.renk || '#6a5cff') + '">' + (i + 1) + '</span> ' + b.ad + '</div>';
     h += '<div class="konu-say">' + (hak === null ? 'test yok' : ('%' + hak)) + '</div>';
     h += '<div class="konu-cubuk"><div class="cubuk"><div class="cubuk-dolgu" style="width:' + yuz + '%;background:' + renk + '"></div></div>';
      h += '<button class="kucuk-buton" onclick="konuTik(\'' + d.id + '\',' + i + ')" style="margin-left:6px">' + (tam ? '✅' : '⬜') + '</button>';
      h += '<button class="kucuk-not" style="margin-left:6px;background:#6a5cff" onclick="takipToggle(\'' + d.id + '\',' + i + ')" title="Takibime ekle/çıkar">' + (takipVar(d.id, i) ? '📌' : '📍') + '</button>';
      if (videoUrl(d.id, i)) h += '<button class="kucuk-not" style="margin-left:6px;background:#1f8a70" onclick="acKapaVideo(\'' + d.id + '\',' + i + ')" title="Video ders">🎬</button>';
      h += '</div></div>';
   });
   h += '</div>';
   h += '<div class="kucuk-not">💡 Morpa stili: yüzde hakimiyet test sonuçlarından, ✓ butonu konuyu "tamamlandı" işaretler (+5 XP).</div>';
   ekran.innerHTML = h;
 }

 /* ====== TAKİBİMDEKİLER (Morpa/MEBİ izleme listesi) ====== */
 function takipVar(dersId, i) { return !!(oku('takip') || {})[dersId + '-' + i]; }
 function takipToggle(dersId, i) {
   var t = oku('takip') || {};
   var k = dersId + '-' + i;
   if (t[k]) { delete t[k]; } else { t[k] = true; }
   kaydet('takip', t);
   if (durum.tur === 'takip') cizTakip();
   if (durum.tur === 'konurapor') cizKonuRapor();
 }
 function cizTakip() {
   var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
   var s = seciliSinif();
   var bilgi = s ? MUFREDAT[s] : null;
   h += '<div class="baslik"><h1>📌 Takibimdekiler</h1><p>İzlediğin konular burada toplantı. ✔️ Tamamla, 🧪 Çöz veya ✕ kaldır.</p></div>';
   if (!bilgi) { h += '<div class="kucuk-not">Önce <b>Profilim</b>’den sınıfını seç.</div>'; ekran.innerHTML = h; return; }
   var t = oku('takip') || {};
  var keys = Object.keys(t);
  h += '<div class="konu-raporu">';
   h += '<div class="konu-satir konu-header"><div class="konu-ad">Konu</div><div class="konu-say">Hakimiyet</div><div class="konu-cubuk">İşlem</div></div>';
   var any = false;
   bilgi.dersler.forEach(function (d) {
     d.birimler.forEach(function (b, i) {
       var k = d.id + '-' + i;
       if (!t[k]) return;
       any = true;
       var hak = hakimiyet(d.id, i);
       var yuz = (hak === null) ? 0 : hak;
       var renk = hak === null ? '#9aa6c2' : hak < 50 ? '#e74c3c' : hak < 80 ? '#f39c12' : '#2ecc71';
       h += '<div class="konu-satir">';
       h += '<div class="konu-ad"><span class="num" style="background:' + (b.renk || '#6a5cff') + '">' + DERS_IKON(d.id) + ' ' + (i + 1) + '</span> ' + d.ad + ' · ' + b.ad + '</div>';
       h += '<div class="konu-say">' + (hak === null ? 'test yok' : ('%' + hak)) + '</div>';
       h += '<div class="konu-cubuk"><div class="cubuk"><div class="cubuk-dolgu" style="width:' + yuz + '%;background:' + renk + '"></div></div>';
       if (birimTest(d.id, i).length) h += '<button class="kucuk-buton" onclick="testBaslat(\'' + d.id + '\',\'' + i + '\')">🧪 Çöz</button>';
       h += '<button class="kucuk-not" style="background:#6a5cff" onclick="takipToggle(\'' + d.id + '\',' + i + ')">📌</button>';
       h += '<button class="kucuk-not" style="background:#e74c3c" onclick="takipToggle(\'' + d.id + '\',' + i + ')">✕</button></div></div>';
     });
   });
   h += '</div>';
   if (!any) h += '<div class="kucuk-not">Seçtiğin sınıf dışındaki takip eklediysen, sınıfı değiştir. Konu raporundaki 📌 butonundan konu ekleyebilirsin.</div>';
   h += '<div class="kucuk-not">💡 Boş liste? Konu Raporu’ndan bir konunun yanındaki 📌’ye tıkla.</div>';
   ekran.innerHTML = h;
 }
 function sesliOku(i) {
  if (!window.speechSynthesis) { alert('Tarayıcı sesli okumayı desteklemiyor.'); return; }
  var d = dersBul(durum.sinif, durum.ders);
  var b = d && d.birimler[i];
  var metin = b ? (b.ad + '. ' + (b.ozet || '') + '. Konu başlıkları: ' + (b.konular || []).join(', ')) : '';
  if (!metin) return;
  if (durum.ses === metin) { window.speechSynthesis.cancel(); durum.ses = null; return; }
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(metin);
  u.lang = 'tr-TR';
  var sesler = window.speechSynthesis.getVoices();
  for (var v = 0; v < sesler.length; v++) { if ((sesler[v].lang || '').indexOf('tr') === 0) { u.voice = sesler[v]; break; } }
  window.speechSynthesis.speak(u);
  durum.ses = metin;
}

/* ====== GÜNLÜK GÖREVLER ====== */
var GOREVLER = [
  { id: 'test', ikon: '📝', ad: '1 test çöz', hedef: 1, xp: 10 },
  { id: 'esle', ikon: '🧩', ad: '1 eşleştirme tamamla', hedef: 1, xp: 10 },
  { id: 'kart', ikon: '🃏', ad: '10 bilgi kartı çalış', hedef: 10, xp: 10 },
  { id: 'pomo', ikon: '⏱️', ad: '1 odak turu bitir', hedef: 1, xp: 8 },
  { id: 'konu', ikon: '✅', ad: '1 konu tamamla', hedef: 1, xp: 8 },
  { id: 'xp', ikon: '⭐', ad: '30 XP kazan', hedef: 30, xp: 10 }
];

function gorevVeri() {
  var g = oku('gorevler');
  var bugun = gunKod(new Date());
  if (!g || g.gun !== bugun) g = { gun: bugun, ilerleme: {}, yapildi: {} };
  return g;
}

function gorevIlerle(id, miktar) {
  var g = gorevVeri();
  if (g.yapildi[id]) return;
  g.ilerleme[id] = (g.ilerleme[id] || 0) + miktar;
  kaydet('gorevler', g);
  var def = null;
  for (var i = 0; i < GOREVLER.length; i++) if (GOREVLER[i].id === id) { def = GOREVLER[i]; break; }
  if (def && !g.yapildi[id] && g.ilerleme[id] >= def.hedef) {
    g.yapildi[id] = true;
    kaydet('gorevler', g);
    xpEkle(def.xp);
    if (durum.tur === 'gorevler') cizGorevler();
  }
}

function cizGorevler() {
  var g = gorevVeri();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📋 Günlük Görevler</h1><p>Bugünkü hedefleri tamamla, XP kazan! Görevler her gece sıfırlanır.</p></div>';
  var yapilanSay = 0;
  GOREVLER.forEach(function(def) {
    var il = g.ilerleme[def.id] || 0;
    var tamam = !!g.yapildi[def.id];
    if (tamam) yapilanSay++;
    var yuzde = Math.min(100, Math.round(il / def.hedef * 100));
    h += '<div class="gorev-satir' + (tamam ? ' tamam' : '') + '">';
    h += '<div class="gorev-ust"><span class="gorev-ikon">' + def.ikon + '</span>';
    h += '<span class="gorev-ad">' + def.ad + '</span>';
    h += '<span class="gorev-xp">+' + def.xp + ' XP</span>';
    h += '<span class="gorev-ok">' + (tamam ? '✅' : '') + '</span></div>';
    h += '<div class="cubuk"><div class="cubuk-dolgu" style="width:' + yuzde + '%' + (tamam ? ';background:#9b59b6' : '') + '"></div></div>';
    h += '<div class="gorev-ilerleme">' + Math.min(il, def.hedef) + '/' + def.hedef + (tamam ? ' · Tamamlandı!' : '') + '</div>';
    h += '</div>';
  });
  h += '<div class="kucuk-not">Bugün ' + yapilanSay + '/' + GOREVLER.length + ' görev tamamladın. Devam! 💪</div>';
  h += '<div style="text-align:center;margin:12px 0"><button class="kucuk-buton" style="background:#1f8a70" onclick="takvimIndir()">📅 Tümünü Takvime Aktar (.ics)</button></div>';
  h += '<div class="skor-liste">';
  GOREVLER.forEach(function(def) {
    var tamam = !!g.yapildi[def.id];
    h += '<div class="skor-satir"><span>' + def.ikon + ' ' + def.ad + '</span>' +
         '<span><button class="kucuk-buton" style="background:' + (tamam ? '#94a3b8' : '#2ecc71') + '" onclick="gorevToggle(\'' + def.id + '\')">' + (tamam ? '↩ Geri Al' : '✓ İşaretle') + '</button></span></div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}

/* ====== YANLIŞLARIM ====== */
function yanlisEkle(q, secim) {
  var havuz = oku('yanlis') || [];
  var ana = q.s + '||' + (q.o || []).join('|');
  var mevcut = null;
  havuz.forEach(function(e) { if (e.ana === ana) mevcut = e; });
  if (mevcut) {
    mevcut.tekrar = (mevcut.tekrar || 0) + 1;
    mevcut.son = gunKod(new Date());
    mevcut.d = Math.min(10, (mevcut.d || 5) + 0.5);
    mevcut.sf = Math.max(0.5, (mevcut.sf || 1) * 0.8);
  } else {
    var yeni = {
      ders: durum.quiz, u: durum.qBirim,
      ana: ana,
      s: q.s, o: (q.o || []).slice(),
      dogru: q.d, sec: secim,
      t: new Date().toLocaleDateString('tr-TR'),
      d: 5, sf: 1, r: 1, son: gunKod(new Date()), tekrar: 1
    };
    havuz.push(yeni);
  }
  if (havuz.length > 300) havuz.shift();
  kaydet('yanlis', havuz);
}

function yanlisHavuzGuncelle(dogru) {
  var q = durum.qListe[durum.qSira];
  var ana = q.s + '||' + (q.o || []).join('|');
  var havuz = oku('yanlis') || [];
  var kalan = [];
  havuz.forEach(function(e) {
    if (e.ana === ana && dogru) return;
    kalan.push(e);
  });
  kaydet('yanlis', kalan);
}

function yanlisQuiz() {
  var havuz = oku('yanlis') || [];
  if (!havuz.length) { alert('Yanlış havuzun boş, harika! 🎉'); return; }
  var bugun = gunKod(new Date());
  var gecikmis = havuz.filter(function(e) { return !e.son || tarihFark(e.son, bugun) >= (e.sf || 1) * 0.9; });
  var diger = havuz.filter(function(e) { return e.son && tarihFark(e.son, bugun) < (e.sf || 1) * 0.9; });
  var sirali = karistir(gecikmis).concat(karistir(diger).slice(0, Math.max(0, 12 - gecikmis.length)));
  durum.quiz = 'yanlis';
  durum.qBirim = '';
  durum.qListe = sirali.map(function(e) { return { s: e.s, o: e.o.slice(), d: e.dogru, z: 1, _yanlisAna: e.ana }; });
  durum.qSira = 0; durum.qDogru = 0;
  durum.qRekor = null; durum.qHavuz = true; durum.qSureDoldu = false;
  sureDurdur(); durum.sure = null;
  durum.tur = 'test'; tabGuncelle(); render();
}

function tekrarCozTek(i) {
  var havuz = oku('yanlis') || [];
  var e = havuz[i];
  if (!e) return;
  durum.quiz = 'yanlis';
  durum.qBirim = '';
  durum.qListe = [{ s: e.s, o: e.o.slice(), d: e.dogru, z: 1 }];
  durum.qSira = 0; durum.qDogru = 0;
  durum.qRekor = null; durum.qHavuz = true; durum.qSureDoldu = false;
  sureDurdur(); durum.sure = null;
  durum.tur = 'test'; tabGuncelle(); render();
}

function yanlisCozuldu(i) {
  var havuz = oku('yanlis') || [];
  havuz.splice(i, 1);
  kaydet('yanlis', havuz);
  cizYanlis();
}

function cizYanlis() {
  var havuz = oku('yanlis') || [];
  var bugun = gunKod(new Date());
  var gecikmisSay = havuz.filter(function(e) { return !e.son || tarihFark(e.son, bugun) >= (e.sf || 1) * 0.9; }).length;
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🔁 Yanlışlarım</h1><p>FSRS ile zamanlanmış akıllı tekrar. Gecikmişler önce gelir.</p></div>';
  if (!havuz.length) {
    h += '<div class="quiz-kutu"><div class="sonuc"><div class="buyuk">🎉</div>' +
         '<div class="puan">Hiç yanlışın yok!</div>' +
         '<p style="color:#5c6b85">Test çözdükçe yanlışların buraya eklenir.</p>' +
         '<button class="btn btn-mor" onclick="git(\'menu\')">🏠 Anasayfa</button></div></div>';
    ekran.innerHTML = h;
    return;
  }
  h += '<div style="text-align:center;margin-bottom:14px">';
  h += '<button class="btn btn-test" onclick="yanlisQuiz()">🧪 Tekrar Çöz (' + havuz.length + ')' + (gecikmisSay ? ' · ⏰ ' + gecikmisSay + ' gecikmiş' : '') + '</button>';
  h += '</div>';
  havuz.forEach(function(e, i) {
    var durumFSRS = e.son ? FSRS.aralikMetin(Math.max(0, (e.sf || 1) * 0.9 - tarihFark(e.son, bugun))) : 'Yeni';
    var gecikti = !e.son || tarihFark(e.son, bugun) >= (e.sf || 1) * 0.9;
    h += '<div class="yanlis-kart" style="' + (gecikti ? 'border-left:4px solid #e74c3c' : 'border-left:4px solid #3498db') + '">';
    h += '<div class="yanlis-ust"><span>❌ ' + dersAdi(e.ders) + '</span><small>' + e.t + (gecikti ? ' · ⏰ GECİKMİŞ' : ' · ' + durumFSRS) + '</small></div>';
    h += '<div class="yanlis-soru">' + e.s + '</div>';
    (e.o || []).forEach(function(o, j) {
      var cls = j === e.dogru ? 'yanlis-dogru' : j === e.sec ? 'yanlis-secim' : 'yanlis-duz';
      var is = j === e.dogru ? '✔ ' : j === e.sec ? '✘ ' : '';
      h += '<div class="yanlis-sec ' + cls + '">' + is + String.fromCharCode(65 + j) + ') ' + o + '</div>';
    });
    h += '<div class="yanlis-btnler">';
    h += '<button class="kucuk-buton" style="background:#2ecc71" onclick="yanlisCozuldu(' + i + ')">✓ Çözdüm</button>';
    h += '<button class="kucuk-buton" style="background:#9b59b6" onclick="tekrarCozTek(' + i + ')">🔁 Şunu Çöz</button>';
    h += '<label class="kucuk-buton" style="background:#6a5cff;cursor:pointer">📷 Foto' + (e.foto ? '✓' : '') + '<input type="file" accept="image/*" style="display:none" onchange="yanlisFotoEkle(' + i + ', event)"></label>';
    h += '</div>';
    if (e.foto) h += '<div style="margin-top:8px"><img src="' + e.foto + '" style="max-width:100%;border-radius:10px"></div>';
    h += '</div>';
  });
  ekran.innerHTML = h;
}

/* ====== ÇALIŞMA TAKVİMİ ====== */
function cizTakvim() {
  var a = oku('aktivite') || {};
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🔥 Çalışma Takvimim</h1><p>Son 30 gün: hangi günler çalıştın?</p></div>';
  h += '<div class="durum-karti">';
  h += '<div class="durum-huc"><b>📅 Aktif Gün</b><span>' + Object.keys(a).length + '</span></div>';
  h += '<div class="durum-huc"><b>📆 Son 7 Gün</b><span>' + son7Aktif(a) + ' gün</span></div>';
  h += '<div class="durum-huc"><b>🔥 Güncel Seri</b><span>' + seriHesapla(a) + ' gün</span></div>';
  h += '</div>';
  h += '<div class="takvim">';
  for (var i = 29; i >= 0; i--) {
    var d = new Date(); d.setDate(d.getDate() - i);
    var kod = gunKod(d);
    var n = a[kod] || 0;
    var cls = n === 0 ? 'sifir' : n <= 2 ? 'az' : n <= 4 ? 'orta' : 'cok';
    var bugun = (i === 0) ? ' bugun' : '';
    h += '<button class="takvim-huc ' + cls + bugun + '" title="' + kod + (n ? ' · ' + n + ' aktivite' : ' · boş gün') + '">' + d.getDate() + '</button>';
  }
  h += '</div>';
  h += '<div class="takvim-not"><span>■</span> boş <span class="l-lej az">■</span> 1-2 <span class="l-lej orta">■</span> 3-4 <span class="l-lej guclu">■</span> 5+ aktivite</div>';
  h += '<div class="kucuk-not">Her test, kart, odak turu ve XP kazancı takvimine işlenir.</div>';
  ekran.innerHTML = h;
}

function son7Aktif(a) {
  var say = 0;
  for (var i = 0; i < 7; i++) { var d = new Date(); d.setDate(d.getDate() - i); if (a[gunKod(d)]) say++; }
  return say;
}

function seriHesapla(a) {
  var seri = 0;
  var d = new Date();
  if (!a[gunKod(d)]) d.setDate(d.getDate() - 1);
  while (a[gunKod(d)]) { seri++; d.setDate(d.getDate() - 1); }
  return seri;
}

/* ====== PROFİL ====== */
var AVATARLAR = ['🧑🎓', '👩🎓', '🦊', '🐼', '🐯', '🐸', '🐙', '🚀', '🌟', '🦄', '🐱', '🐶'];

function profilOku() {
  var v = oku('profil');
  var p = { ad: '', soyad: '', okul: '', sinif: '', sube: '', avatar: '🧑🎓', gece: false, foto: '' };
  if (v && typeof v === 'object') {
    for (var k in v) { p[k] = v[k]; }
  }
  if (p.gece !== 'system' && p.gece !== true && p.gece !== false) p.gece = false;
  p.foto = p.foto || '';
  p.avatar = p.avatar || '🧑🎓';
  p.sinif = (p.sinif || '');
  p.sube = (p.sube || '');
  return p;
}

function profilUygula() {
  var p = profilOku();
  var gece = (p.gece === 'system')
    ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    : !!p.gece;
  if (document.body) document.body.classList.toggle('gece', !!gece);
  var g = $('geceBtn'); if (g) g.textContent = gece ? '☀️' : '🌙';
  var a = $('profilBtn'); if (a) {
    if (p.foto) { a.innerHTML = '<img src="' + esc(p.foto) + '" style="width:32px;height:32px;border-radius:50%;object-fit:cover">'; }
    else { a.textContent = p.avatar + (p.ad ? ' ' + p.ad : ''); }
  }
}

function veriImportJson(obj) {
  if (!obj || !obj.data) return;
  Object.keys(obj.data).forEach(function(k) {
    if (YEDEK_A.indexOf(k) >= 0) kaydet(k, obj.data[k]);
  });
}
function veriImportSifreli(parola, jsonStr, cb) {
  if (!(window.crypto && window.crypto.subtle)) { cb('ERR: Tarayıcı şifrelemeyi desteklemiyor.'); return; }
  var obj;
  try { obj = JSON.parse(jsonStr); } catch (e) { cb('ERR: Dosya bozuk.'); return; }
  if (!obj || obj.v !== 1) { cb('ERR: Geçersiz yedek formatı.'); return; }
  var enc = new TextEncoder();
  var salt = new Uint8Array(obj.salt);
  var iv = new Uint8Array(obj.iv);
  var data = new Uint8Array(obj.data);
  window.crypto.subtle.importKey('raw', enc.encode(parola), 'PBKDF2', false, ['deriveKey']).then(function(base){
    window.crypto.subtle.deriveKey({name:'PBKDF2', salt:salt, iterations:100000, hash:'SHA-256'}, base, {name:'AES-GCM', length:256}, false, ['decrypt']).then(function(key){
      window.crypto.subtle.decrypt({name:'AES-GCM', iv:iv}, key, data).then(function(buf){
        try { var json = new TextDecoder().decode(buf); veriImportJson(JSON.parse(json)); cb(null); }
        catch (e) { cb('ERR: Şifre yanlış veya dosya bozuk.'); }
      }).catch(function(e){ cb('ERR: Şifre yanlış veya dosya bozuk.'); });
    }).catch(function(e){ cb('ERR:' + e.message); });
  }).catch(function(e){ cb('ERR:' + e.message); });
}
function veriExportSifreliIndir() {
  var pw = prompt('Yedeği şifrelemek için parola girin:');
  if (!pw) return;
  veriExportSifreli(pw, function(err, data){
    if (err) { alert(err); return; }
    var blob = new Blob([data], {type:'application/json'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'eymentakip-sifreli-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    alert('Şifreli yedek indirildi.');
  });
}
function veriImportSifreliSec() {
  var inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'application/json';
  inp.onchange = function(){
    var f = inp.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function(){
      var pw = prompt('Yedeğin parolasını girin:');
      if (!pw) return;
      veriImportSifreli(pw, String(r.result), function(err){
        if (err) { alert(err); return; }
        alert('Yedek yüklendi. Uygulama yenileniyor...');
        location.reload();
      });
    };
    r.readAsText(f);
  };
  inp.click();
}
function cizProfil() {
  if (profilKilitliMi()) { cizKilit(); return; }
  var p = profilOku();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>👤 Profilim</h1><p>Bilgilerini gir, avatarını seç, karanlık modu aç.</p></div>';
  h += '<div class="profil-kutu">';
  h += '<label>Adım:</label><input id="profilAd" type="text" value="' + esc(p.ad) + '" placeholder="Örn: Eymen">';
  h += '<label>Soyadım:</label><input id="profilSoyad" type="text" value="' + esc(p.soyad) + '" placeholder="Örn: Baytaroğlu">';
  h += '<label>Okulum:</label><input id="profilOkul" type="text" value="' + esc(p.okul) + '" placeholder="Okul adını yaz">';
  h += '<label>Sınıfın (5-8):</label>';
  h += '<select id="profilSinif" style="width:100%;padding:10px;border:2px solid #dfe5f0;border-radius:10px;font-size:15px;font-family:inherit;">';
  var SN = ['', '5', '6', '7', '8'];
  SN.forEach(function(v) {
    h += '<option value="' + v + '"' + (p.sinif === v ? ' selected' : '') + '>' + (v ? (v + '. sınıf') : 'Seç…') + '</option>';
  });
  h += '</select>';
  h += '<label>Şubem:</label><input id="profilSube" type="text" value="' + esc(p.sube) + '" placeholder="Örn: A">';
  h += '<label>Avatarım:</label><div class="avatar-grid">';
  AVATARLAR.forEach(function(a) {
    h += '<button class="avatar-btn' + (p.avatar === a ? ' secili' : '') + '" onclick="avatarSec(\'' + a + '\')">' + a + '</button>';
  });
  h += '</div>';
  h += '<div class="gece-satir"><span>🌓 Tema</span><button class="gece-btn" onclick="geceAcKapa()">' + (p.gece === 'system' ? 'Sistem' : (p.gece ? 'Kapat' : 'Aç')) + '</button></div>';
  h += '<hr style="border:none;border-top:1px solid #dfe5f0;margin:14px 0">';
  h += '<div class="baslik"><h2 style="font-size:18px">📦 Veri Yedek</h2><p style="font-size:13px">Hepsini tek dosyada sakla, başka cihazda geri yükle.</p></div>';
  h += '<div class="unit-butonlar" style="margin-bottom:10px">';
  h += '<button class="kucuk-buton" style="background:#1f8a70" onclick="veriExport()">📥 Dışa Aktar (JSON)</button>';
  h += '<label class="kucuk-not" style="display:inline-block;cursor:pointer;background:#6a5cff;border-radius:10px;padding:8px 14px;color:#fff;font-weight:700">';
  h += '🔼 Yedek Yükle<input type="file" accept="application/json" style="display:none" onchange="veriImport(event)">';
  h += '</label>';
  h += '</div>';
  h += '<div style="text-align:center;margin-top:10px"><button class="btn btn-mor" onclick="profilKaydet()">💾 Kaydet</button></div>';
  h += '<hr style="border:none;border-top:1px solid #dfe5f0;margin:14px 0">';
  var saatSel = '<select class="saat-sel" onchange="bildirimSaatDegistir(this.value)">';
  for (var _h = 7; _h <= 22; _h++) saatSel += '<option value="' + _h + '"' + (_h === (p.bildirimSaat || 16) ? ' selected' : '') + '>' + _h + ':00</option>';
  saatSel += '</select>';
  h += '<div class="gece-satir"><span>🔔 Günlük Hatırlatma ' + saatSel + '</span><button class="gece-btn" onclick="bildirimAcKapa()">' + (p.bildirim ? 'Kapat' : 'Aç') + '</button></div>';
  h += '</div>';
  h += '<hr style="border:none;border-top:1px solid #dfe5f0;margin:14px 0">';
  h += '<div class="baslik"><h2 style="font-size:18px">👥 Profillerim</h2><p style="font-size:13px">Birden fazla öğrenci için ayrı ilerleme kaydı tut.</p></div>';
  var pl = profilListesi();
  var apid = aktifProfilId();
  h += '<div style="display:flex;flex-direction:column;gap:8px">';
  pl.forEach(function(pr) {
    var aktif = pr.id === apid;
    h += '<div style="display:flex;align-items:center;gap:10px;border:2px solid ' + (aktif ? '#1f8a70' : '#dfe5f0') + ';border-radius:12px;padding:8px 12px">';
    h += '<div style="font-size:24px">' + (pr.foto ? '<img src="' + esc(pr.foto) + '" style="width:32px;height:32px;border-radius:50%;object-fit:cover">' : (pr.avatar || '🧑🎓')) + '</div>';
    h += '<div style="flex:1"><div style="font-weight:700">' + esc(pr.ad || 'Öğrenci') + ' ' + esc(pr.soyad || '') + '</div><div style="font-size:12px;color:#7a869a">' + (pr.sinif ? (pr.sinif + '. sınıf') : '') + ' ' + esc(pr.sube || '') + (aktif ? ' · aktif' : '') + '</div></div>';
    if (!aktif) {
      h += '<button class="kucuk-buton" style="background:#1f8a70" onclick="profilSec(\'' + pr.id + '\')">Seç</button>';
      h += '<button class="kucuk-buton" style="background:#e05656" onclick="profilSil(\'' + pr.id + '\')">Sil</button>';
    } else {
      h += '<span style="font-size:12px;color:#1f8a70;font-weight:700">✓ Aktif</span>';
    }
    h += '</div>';
  });
  h += '</div>';
  h += '<div style="text-align:center;margin-top:10px"><button class="btn btn-mor" onclick="profilEkle()">➕ Yeni Profil Ekle</button></div>';
  h += '<hr style="border:none;border-top:1px solid #dfe5f0;margin:14px 0">';
  h += '<div class="baslik"><h2 style="font-size:18px">🔐 Profil Kilidi (PIN)</h2><p style="font-size:13px">Bu profili PIN ile koru. Boş bırakıp Kaydet deyince kilit kalkar.</p></div>';
  var aktifP = (oku('profiller') || []).filter(function(x){ return x.id === aktifProfilId(); })[0] || {};
  h += '<input id="pinInput" type="password" inputmode="numeric" maxlength="8" placeholder="PIN (örn: 1234)" value="' + (aktifP.pin ? aktifP.pin : '') + '" style="width:100%;padding:10px;border:2px solid #dfe5f0;border-radius:10px;font-size:15px;font-family:inherit">';
  h += '<div style="text-align:center;margin-top:8px"><button class="btn btn-mor" onclick="pinKaydet()">💾 PIN Kaydet</button></div>';
  h += '<hr style="border:none;border-top:1px solid #dfe5f0;margin:14px 0">';
  h += '<div class="baslik"><h2 style="font-size:18px">📤 Dışa / Paylaş</h2></div>';
  h += '<div class="unit-butonlar" style="margin-bottom:10px">';
  h += '<button class="kucuk-buton" style="background:#1f8a70" onclick="takvimIndir()">📅 Takvimi İndir (.ics)</button> ';
  h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="veriPaylas()">🔗 Veriyi Paylaş</button>';
  h += '</div>';
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:18px">🎤 Sesli Okuma Sesi</h2></div>';
  h += '<div class="unit-butonlar"><select id="ttsSec" onchange="ttsSesKaydet(this.value)" style="padding:8px;border-radius:8px;border:2px solid #dfe5f0">' + ttsSecenekleriHTML() + '</select></div>';
  var cp = profilOku();
  var curLang = cp.dil || 'tr';
  var dilOpts = '';
  Object.keys(DIL_SOZLUK).forEach(function(k){ dilOpts += '<option value="' + k + '"' + (k === curLang ? ' selected' : '') + '>' + k.toUpperCase() + '</option>'; });
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:18px">♿ Erişilebilirlik</h2></div>';
  h += '<div class="unit-butonlar">';
  h += '<button class="kucuk-buton" style="background:' + (cp.buyukYazi ? '#2ecc71' : '#7f8c8d') + '" onclick="buyukYaziAcKapa()">🔠 Büyük Yazı: ' + (cp.buyukYazi ? 'Açık' : 'Kapalı') + '</button> ';
  h += '<button class="kucuk-buton" style="background:' + (cp.kontrast ? '#2ecc71' : '#7f8c8d') + '" onclick="kontrastAcKapa()">🌗 Yüksek Kontrast: ' + (cp.kontrast ? 'Açık' : 'Kapalı') + '</button>';
  h += '</div>';
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:18px">🌍 Dil</h2></div>';
  h += '<div class="unit-butonlar"><select id="dilSec" onchange="dilDegistir(this.value)" style="padding:8px;border-radius:8px;border:2px solid #dfe5f0">' + dilOpts + '</select> <span class="kucuk-not">Arayüz dili</span></div>';
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:18px">🔒 Şifreli Yedek (AES)</h2></div>';
  h += '<div class="unit-butonlar">';
  h += '<button class="kucuk-buton" style="background:#1f8a70" onclick="veriExportSifreliIndir()">💾 Şifreli Yedek Al</button> ';
  h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="veriImportSifreliSec()">📥 Şifreli Yedeği Yükle</button>';
  h += '</div>';
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:18px">👨‍👩‍👧 Veli Kodu</h2></div>';
  h += '<div class="unit-butonlar"><button class="kucuk-buton" style="background:#e67e22" onclick="veliKodAyarla()">🔑 Veli Kodunu Ayarla</button> <span class="kucuk-not">' + (oku('veliKod') ? 'Kod: ' + oku('veliKod') : 'Kod yok') + '</span></div>';
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:18px">👩‍🏫 Öğretmen Şifresi</h2></div>';
  h += '<div class="unit-butonlar"><button class="kucuk-buton" style="background:#6a5cff" onclick="ogretmenKodAyarla()">🔑 Öğretmen Şifresini Ayarla</button> <span class="kucuk-not">' + (oku('ogretmenKod') ? 'Şifre ayarlı' : 'Şifre yok') + '</span></div>';
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:18px">👥 Rol Seçimi</h2></div>';
  h += '<div class="unit-butonlar"><button class="kucuk-buton" style="background:#1f8a70" onclick="git(\'rolSec\')">🔄 Rol Değiştir (' + (aktifRol()==='ogrenci'?'Öğrenci':(aktifRol()==='veli'?'Veli':'Öğretmen')) + ')</button></div>';
  ekran.innerHTML = h;
}

function ttsSecenekleriHTML() {
  var id = oku('ttsSes') || '';
  var sesler = ttsSesListesi();
  var hh = '<option value="">Otomatik (Türkçe)</option>';
  for (var i = 0; i < sesler.length; i++) {
    hh += '<option value="' + esc(sesler[i].voiceURI || sesler[i].name) + '"' + (id && id === (sesler[i].voiceURI || sesler[i].name) ? ' selected' : '') + '>' + esc(sesler[i].name + (sesler[i].lang ? (' (' + sesler[i].lang + ')') : '')) + '</option>';
  }
  return hh;
}

function pinKaydet() {
  var v = $('pinInput') ? $('pinInput').value : '';
  profilPinAyarla(v);
  alert(v ? 'PIN ayarlandı.' : 'PIN kaldırıldı.');
  cizProfil();
}

function avatarSec(a) {
  var p = profilOku(); p.avatar = a; p.foto = ''; kaydet('profil', p); cizProfil(); profilUygula();
}

function fotoSec(ev) {
  var f = ev && ev.target && ev.target.files && ev.target.files[0];
  if (!f) return;
  if (!/^image\//.test(f.type)) { alert('Lütfen bir resim seçin.'); return; }
  if (f.size > 2 * 1024 * 1024) { alert('Fotoğraf 2 MB\'dan küçük olmalı.'); return; }
  var fr = new FileReader();
  fr.onload = function(e) {
    var p = profilOku(); p.foto = e.target.result; p.avatar = ''; kaydet('profil', p);
    profilUygula(); cizProfil();
  };
  fr.readAsDataURL(f);
}

function fotoSil() {
  if (!confirm('Fotoğraf silinsin mi?')) return;
  var p = profilOku(); p.foto = ''; kaydet('profil', p);
  profilUygula(); cizProfil();
}

function profilKaydet() {
  var p = profilOku();
  p.ad = $('profilAd') ? $('profilAd').value : '';
  p.soyad = $('profilSoyad') ? $('profilSoyad').value : '';
  p.okul = $('profilOkul') ? $('profilOkul').value : '';
  p.sinif = $('profilSinif') ? $('profilSinif').value : '';
  p.sube = $('profilSube') ? $('profilSube').value : '';
  if (!/^[5-8]?$/.test(p.sinif)) p.sinif = '';
  kaydet('profil', p);
  profilGuncelleAktif();
  profilUygula();
  cizProfil();
}

function profilAnahtarlar() {
  var a = [];
  try {
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf('dersApp_') === 0) {
        var s = k.substring(8);
        if (s !== 'profil' && s !== 'profiller' && s !== 'aktifProfil') a.push(s);
      }
    }
  } catch (e) {}
  return a;
}

function profilSnap(id) {
  var liste = oku('profiller') || [];
  for (var i = 0; i < liste.length; i++) {
    if (liste[i].id === id) {
      var v = {};
      profilAnahtarlar().forEach(function(k){ var x = localStorage.getItem('dersApp_' + k); if (x !== null) v[k] = x; });
      liste[i].veri = v;
      break;
    }
  }
  kaydet('profiller', liste);
}

function profilYukle(id) {
  var liste = oku('profiller') || [];
  var prof = null;
  for (var i = 0; i < liste.length; i++) { if (liste[i].id === id) prof = liste[i]; }
  profilAnahtarlar().forEach(function(k){ try { localStorage.removeItem('dersApp_' + k); } catch (e) {} });
  if (prof && prof.veri) {
    Object.keys(prof.veri).forEach(function(k){ try { localStorage.setItem('dersApp_' + k, prof.veri[k]); } catch (e) {} });
  }
  kaydet('aktifProfil', id);
}

function profilListesi() {
  var liste = oku('profiller');
  if (!liste) {
    var m = profilOku();
    liste = [{ id: 'p1', ad: m.ad || 'Öğrenci', soyad: m.soyad || '', okul: m.okul || '', sinif: m.sinif || '', sube: m.sube || '', avatar: m.avatar || '🧑🎓', gece: m.gece || false, foto: m.foto || '', veri: {} }];
    kaydet('profiller', liste);
    kaydet('aktifProfil', 'p1');
  }
  return liste;
}

function aktifProfilId() { return oku('aktifProfil') || 'p1'; }

function profilGuncelleAktif() {
  var id = aktifProfilId();
  var liste = profilListesi();
  var p = profilOku();
  for (var i = 0; i < liste.length; i++) {
    if (liste[i].id === id) {
      liste[i].ad = p.ad; liste[i].soyad = p.soyad; liste[i].okul = p.okul;
      liste[i].sinif = p.sinif; liste[i].sube = p.sube; liste[i].avatar = p.avatar;
      liste[i].gece = p.gece; liste[i].foto = p.foto;
      break;
    }
  }
  kaydet('profiller', liste);
}

function profilEkle() {
  var ad = prompt('Yeni öğrenci adı?', 'Yeni Öğrenci');
  if (!ad) return;
  profilGuncelleAktif();
  profilSnap(aktifProfilId());
  var liste = profilListesi();
  var id = 'p' + (liste.length + 1) + '_' + Date.now();
  var yeni = { id: id, ad: ad, soyad: '', okul: '', sinif: '', sube: '', avatar: '🧑🎓', gece: false, foto: '', veri: {} };
  liste.push(yeni);
  kaydet('profiller', liste);
  profilYukle(id);
  kaydet('profil', yeni);
  profilUygula();
  git('menu');
}

function profilSec(id) {
  var aktif = aktifProfilId();
  if (aktif === id) { git('menu'); return; }
  profilGuncelleAktif();
  profilSnap(aktif);
  profilYukle(id);
  var liste = profilListesi();
  var prof = null;
  for (var i = 0; i < liste.length; i++) { if (liste[i].id === id) prof = liste[i]; }
  if (prof) kaydet('profil', prof);
  profilUygula();
  if (profilKilitliMi()) { durum.tur = 'kilit'; render(); }
  else git('menu');
}

function profilSil(id) {
  if (!confirm('Bu profil silinsin mi? Bu öğrencinin tüm verileri silinir.')) return;
  var liste = profilListesi();
  if (liste.length <= 1) { alert('En az bir profil olmalı.'); return; }
  var aktif = aktifProfilId();
  if (aktif !== id) { profilGuncelleAktif(); profilSnap(aktif); }
  liste = profilListesi().filter(function(x){ return x.id !== id; });
  kaydet('profiller', liste);
  if (id === aktif) {
    var ilk = liste[0];
    profilYukle(ilk.id);
    kaydet('profil', ilk);
  }
  profilUygula();
  git('menu');
}

function geceAcKapa() {
  var p = profilOku();
  if (p.gece === 'system') { p.gece = false; }
  else if (p.gece) { p.gece = 'system'; }
  else { p.gece = true; }
  kaydet('profil', p);
  profilUygula();
  if (durum.tur === 'profil') cizProfil();
}

/* ====== YEDNEK: VERİ DİKKATI ====== */
var YEDEK_A = [
  'profil','biti','devam','puan','istatistik','sorugun','plan','sunum',
  'xp','aktivite','xpgun','odul','pomo','saylar','kartlar','gorevler','yanlis'
];

function veriExportJson() {
  var data = {};
  YEDEK_A.forEach(function(a){ var v = oku(a); if (v !== null) data[a] = v; });
  return { versiyon: 1, olusturma: Date.now(), data: data };
}

function veriUygula(paket) {
  var d = paket && paket.data ? paket.data : (paket || {});
  var n = 0;
  Object.keys(d).forEach(function(k){
    if (k === '__proto__' || k === 'constructor') return;
    kaydet(k, d[k]); n++;
  });
  return n;
}

function veriExport() {
  if (typeof Blob === 'undefined' || typeof URL === 'undefined') { alert('Tarayıcı desteklemiyor.'); return; }
  var j = JSON.stringify(veriExportJson(), null, 2);
  var blob = new Blob([j], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'ders-programi-yedek-' + (new Date().toISOString().slice(0,10)) + '.json';
  a.style.display = 'none';
  if (document.body) document.body.appendChild(a);
  a.click();
  if (a.parentNode) a.parentNode.removeChild(a);
  URL.revokeObjectURL(url);
}

function veriImport(ev) {
  var f = ev && ev.target && ev.target.files && ev.target.files[0];
  if (!f) return;
  if (!confirm('Yedek yüklensin mi? Mevcut verilerinizin üzerine yazılır.')) { ev.target.value = ''; return; }
  var fr = new FileReader();
  fr.onload = function(e) {
    try {
      var j = JSON.parse(e.target.result);
      var n = veriUygula(j);
      alert('✅ ' + n + ' kayıt geri yüklendi. Sayfayı yenileyin.');
    } catch (err) {
      alert('❌ Geçersiz yedek dosyası.');
    }
    ev.target.value = '';
  };
  fr.readAsText(f);
}

/* ====== SÜRELİ DENEME / REKOR ====== */
function sureYaz(sn) {
  var dk = Math.floor(sn / 60), s = sn % 60;
  return ('0' + dk).slice(-2) + ':' + ('0' + s).slice(-2);
}

function sureDurdur() {
  if (durum.sureKayit) { clearInterval(durum.sureKayit); durum.sureKayit = null; }
}

function sureTik() {
  if (durum.tur !== 'test' || !durum.sure) { sureDurdur(); return; }
  durum.sure.kalan--;
  var el = document.getElementById('sureGoster');
  if (el) el.textContent = '⏱️ ' + sureYaz(durum.sure.kalan);
  if (durum.sure.kalan <= 0) {
    sureDurdur();
    durum.sure = null;
    durum.qSureDoldu = true;
    durum.qSira = durum.qListe.length;
    var once = durum.quiz !== 'yanlis' && durum.quiz !== 'zayif' ? enIySkor(durum.quiz, durum.qBirim) : null;
    puanKaydet(durum.quiz, durum.qDogru, durum.qListe.length, durum.qBirim);
    if (durum.quiz !== 'yanlis' && durum.quiz !== 'zayif') {
      var yz3 = durum.qListe.length ? durum.qDogru / durum.qListe.length : 0;
      durum.qRekor = !once ? { yeni: true, ilk: true } : (once.y < yz3 ? { yeni: true, oz: once } : { yeni: false, oz: once });
    }
    cSonuc();
  }
}

function enIySkor(dersId, u) {
  var p = oku('puan') || {};
  var list = p[dersId] || [];
  var en = null;
  list.forEach(function(e) {
    if (String(e.u) === String(u) && e.n) {
      var y = e.d / e.n;
      if (!en || y > en.y) en = { y: y, t: e.t };
    }
  });
  return en;
}

/* ====== YARIDA KALAN TEST / DEVAM ====== */
function devamKaydet() {
  if (!durum.qListe || !durum.quiz) return;
  kaydet('devam', {
    d: durum.quiz, bi: durum.qBirim, s: durum.sure ? 1 : 0,
    L: durum.qListe, n: durum.qSira, dg: durum.qDogru, t: new Date().getTime()
  });
}

function devamSil() { kaydet('devam', null); }

function testDevam() {
  var dv = oku('devam');
  if (!dv || !dv.L || !dv.L.length) { devamSil(); return; }
  sureDurdur();
  durum.quiz = dv.d; durum.qBirim = dv.bi;
  durum.qListe = dv.L; durum.qSira = dv.n; durum.qDogru = dv.dg;
  durum.qRekor = null; durum.qHavuz = false; durum.qSureDoldu = false;
  if (dv.s) {
    durum.sure = { kalan: Math.max(10, Math.ceil(dv.L.length * 1.5)) * 60 };
    durum.sureKayit = setInterval(sureTik, 1000);
  } else {
    durum.sure = null;
  }
  durum.tur = 'test'; tabGuncelle(); render();
}

/* ====== ZAYIF KONULAR / YÖNLdirim ====== */
function zayifKonular() {
  var z = [];
  for (var s in MUFREDAT) {
    MUFREDAT[s].dersler.forEach(function(d) {
      d.birimler.forEach(function(b, i) {
        var hak = hakimiyet(d.id, i);
        if (hak === null || hak < 70) z.push({ s: s, d: d, b: b, i: i, hak: hak });
      });
    });
  }
  z.sort(function(a, b) { return ((a.hak === null ? -1 : a.hak) - (b.hak === null ? -1 : b.hak)); });
  return z;
}

/* ====== ZAYIF KONULARI TEKRAR ÇÖZ ====== */
function zayifTest() {
  var list = [];
  for (var s in MUFREDAT) {
    MUFREDAT[s].dersler.forEach(function(d) {
      d.birimler.forEach(function(b, i) {
        var hak = hakimiyet(d.id, i);
        if (hak === null || hak < 70) {
          var q = SORULAR[d.id];
          if (q && q[i]) list = list.concat(q[i]);
        }
      });
    });
  }
  if (!list.length) { alert('Zayıf konusun yok! Tüm konularda başarılısın. 🎉'); return; }
  karistir(list);
  sureDurdur();
  durum.quiz = 'zayif';
  durum.qBirim = '';
  durum.qListe = list;
  durum.qSira = 0; durum.qDogru = 0;
  durum.qRekor = null; durum.qHavuz = false; durum.qSureDoldu = false; durum.sure = null;
  devamKaydet();
  durum.tur = 'test'; tabGuncelle(); render();
}

/* ====== TEKRAR DEFTERİ ====== */
function tekrarPlanOlsutur() {
  var p = profilOku();
  var s = p.sinif || '6';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { alert('Önce Profil > Sınıfını seç.'); return; }
  var zk = zayifKonular().filter(function(z) { return String(z.s) === String(s); });
  if (!zk.length) { alert('Zayıf konun yok! Tüm konuların iyi durumda. 🎉'); return; }
  var prog = oku('prog') || {};
  var eklendi = 0, dolu = 0;
  zk.slice(0, 15).forEach(function(z) {
    var yer = null;
    for (var gi = 1; gi <= 5; gi++) {
      for (var hi = 0; hi < PROGRAM_SAATLER.length; hi++) {
        var key = gi + '-' + PROGRAM_SAATLER[hi];
        if (!prog[key]) { yer = key; break; }
      }
      if (yer) break;
    }
    if (!yer) { dolu++; return; }
    prog[yer] = { d: z.d.id, k: z.b.ad, u: z.i };
    eklendi++;
  });
  kaydet('prog', prog);
  var msg = '📒 Tekrar Defteri: ' + eklendi + ' zayıf konu haftalık programa eklendi.';
  if (dolu) msg += '\n' + dolu + ' konu için boş saat bulunamadı.';
  alert(msg);
  cizTekrar();
}

function tekrarDefteriOku() {
  return oku('tekrar') || {};
}

function tekrarIsaretle(dersId, bi) {
  var tr = oku('tekrar') || {};
  var ana = dersId + '-' + bi;
  if (tr[ana]) delete tr[ana];
  else {
    tr[ana] = { t: new Date().toLocaleDateString('tr-TR'), ok: true };
    xpEkle(5);
  }
  kaydet('tekrar', tr);
  rozetKontrol();
  cizTekrar();
}

function cizTekrar() {
  var p = profilOku();
  var s = p.sinif || '6';
  var bilgi = MUFREDAT[s];
  var tr = oku('tekrar') || {};
  var zk = zayifKonular().filter(function(z) { return String(z.s) === String(s); });
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📒 Tekrar Defterim</h1><p>' + (s + '. sınıf') + ' zayıf konularını tekrar et, kutusunu işaretle (5 XP).</p></div>';
  h += '<div style="text-align:center;margin-bottom:14px">';
  h += '<button class="btn btn-mor" onclick="tekrarPlanOlsutur()">🤖 Zayıf Konuları Haftalık Plana Ekle</button>';
  h += ' <button class="btn btn-test" onclick="zayifTest()">📝 Zayıf Konuları Tekrar Çöz</button>';
  h += '</div>';
  if (!bilgi) {
    h += '<div class="skor-liste">Önce <b>Profilim</b>’den sınıfını seç.</div>';
    ekran.innerHTML = h; return;
  }
  if (!zk.length) {
    h += '<div class="skor-liste">Tüm konuların iyi durumda, tebrikler! 🏆 Tekrar gerektiren konu yok.</div>';
    ekran.innerHTML = h; return;
  }
  var iyilesen = 0;
  h += '<div class="skor-liste">';
  zk.forEach(function(z) {
    var ana = z.d.id + '-' + z.i;
    var e = tr[ana];
    var kutu = e ? (e.kutu || 1) : 0;
    if (e && hakimiyet(z.d.id, z.i) >= 70) iyilesen++;
    var renk = ['#94a3b8','#e74c3c','#f39c12','#3498db','#9b59b6','#2ecc71'][kutu];
    var zaman = e && e.sira ? (e.sira <= Date.now()) : false;
    h += '<div class="skor-satir' + (zaman ? ' tekrar-vakti' : '') + '"><span>';
    if (kutu) h += '<span class="kutu-etiket" style="background:' + renk + '">K' + kutu + '</span> ';
    h += DERS_IKON(z.d.id) + ' <b>' + z.b.ad + '</b> <small>(' + z.d.ad + ' · ' + (z.hak === null ? 'test yok' : '%' + z.hak) + ')</small></span>' +
         '<span>';
    if (e) {
      if (zaman) {
        h += '<button class="kucuk-buton" style="background:#2ecc71" onclick="tekrarKutuIlerle(\'' + z.d.id + '\',' + z.i + ')">✓ Bildim</button> ';
        h += '<button class="kucuk-buton" style="background:#e74c3c" onclick="tekrarKutuSifirla(\'' + z.d.id + '\',' + z.i + ')">✗ Yeniden</button> ';
      } else {
        h += '<span class="kucuk-not">⏳ ' + (e.sira ? Math.max(1, Math.ceil((e.sira - Date.now()) / 86400000)) : 1) + ' gün</span> ';
      }
      h += '<button class="kucuk-buton" style="background:#94a3b8" onclick="tekrarSil(\'' + z.d.id + '\',' + z.i + ')">Sil</button> ';
    } else {
      h += '<button class="kucuk-buton" style="background:#2ecc71" onclick="tekrarEkle(\'' + z.d.id + '\',' + z.i + ')">➕ Ekle</button> ';
    }
    h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="secDers(' + z.s + ',\'' + z.d.id + '\')">📖 Çalış</button></span></div>';
  });
  h += '</div>';
  if (iyilesen) h += '<div class="kucuk-not" style="margin-top:10px">🎉 ' + iyilesen + ' konu %70’in üzerine çıktı, listeden çıkarabilirsin!</div>';
  h += '<div class="egri-kutu">' + unutmaEgridHTML() + '</div>';
  ekran.innerHTML = h;
}
function karneIc() {
  var p = profilOku();
  var s = statlar();
  var bugun = new Date().toLocaleDateString('tr-TR');
  var acik = oku('odul') || [];
  var gv = gorevVeri();
  var gSay = 0;
  GOREVLER.forEach(function(d) { if (gv.yapildi[d.id]) gSay++; });
  var h = '<div class="karne-kutu">';
  h += '<div class="karne-ust"><span class="karne-avatar">' + (p.avatar || '🧑🎓') + '</span>';
  h += '<div><h2>' + esc(p.ad || 'Öğrenci') + (p.soyad ? ' ' + esc(p.soyad) : '') + '</h2>' +
       '<p>' + (p.okul ? 'Okul: ' + esc(p.okul) + (p.sinif ? ' · ' : '') : '') + (p.sinif ? 'Sınıf: ' + esc(p.sinif) : '') + '</p></div>';
  h += '<div class="karne-tarih">' + bugun + '</div></div>';
  h += '<div class="karne-baslik">🎖️ Genel Durum</div>';
  h += '<div class="karne-satir"><b>⭐ XP / Seviye</b><span>' + s.xp + ' XP · ' + s.seviye + '. seviye</span></div>';
  h += '<div class="karne-satir"><b>🔥 Günlük Seri</b><span>' + s.seri + ' gün</span></div>';
  h += '<div class="karne-satir"><b>📝 Çözülen Test</b><span>' + s.testSay + '</span></div>';
  h += '<div class="karne-satir"><b>📚 Çözülen Soru</b><span>' + s.soruSay + '</span></div>';
  h += '<div class="karne-satir"><b>🧩 Eşleştirme</b><span>' + s.esleSay + '</span></div>';
  h += '<div class="karne-satir"><b>⏱️ Odak Turu</b><span>' + s.pomoSay + '</span></div>';
  h += '<div class="karne-satir"><b>✅ Tamamlanan Konu</b><span>' + s.bYap + '/' + s.bTop + '</span></div>';
  h += '<div class="karne-satir"><b>🏅 Rozet</b><span>' + acik.length + '/' + ROZETLER.length + '</span></div>';
  h += '<div class="karne-satir"><b>📋 Bugünkü Görev</b><span>' + gSay + '/' + GOREVLER.length + '</span></div>';
  h += '<div class="karne-baslik">📖 Ders Durumu</div>';
  for (var s2 in MUFREDAT) {
    MUFREDAT[s2].dersler.forEach(function(d) {
      var t = 0, b = 0, hakTop = 0, hakN = 0;
      d.birimler.forEach(function(_, i) {
        t++;
        if (biten(d.id + '-' + i)) b++;
        var hak = hakimiyet(d.id, i);
        if (hak !== null) { hakTop += hak; hakN++; }
      });
      var ort = hakN ? Math.round(hakTop / hakN) : null;
      h += '<div class="karne-satir"><b>' + s2 + '. Sınıf · ' + DERS_IKON(d.id) + ' ' + d.ad + '</b>' +
           '<span>' + b + '/' + t + ' konu' + (ort === null ? '' : ' · ort. %' + ort) + '</span></div>';
    });
  }
  h += '<div class="karne-baslik">📝 Son Testler</div>';
  var puan = oku('puan') || {};
  var kayitlar = [];
  Object.keys(puan).forEach(function(k) {
    (puan[k] || []).forEach(function(e) { kayitlar.push({ ad: dersAdi(k), d: e.d, n: e.n, t: e.t }); });
  });
  kayitlar.sort(function(a, b) { return (a.t > b.t) ? -1 : 1; });
  if (!kayitlar.length) h += '<div class="karne-satir"><b>Henüz test çözülmedi</b><span>—</span></div>';
  else kayitlar.slice(0, 8).forEach(function(e) {
    h += '<div class="karne-satir"><b>' + esc(e.ad) + '</b><span>' + e.d + '/' + e.n + ' · ' + e.t + '</span></div>';
  });
  h += '<div class="karne-imza"><span>Veli İmzası</span><span>Öğretmen İmzası</span></div>';
  h += '</div>';
  return h;
}

function cizKarne() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📄 Karnem</h1><p>Okul bilgilerin ve tüm istatistiklerin. Yazdırıp ailene gösterebilirsin.</p></div>';
  h += karneIc();
  h += '<div style="text-align:center;margin-top:14px"><button class="btn btn-test" onclick="karneYazdir()">🖨️ Yazdır / PDF</button></div>';
  ekran.innerHTML = h;
}

function karneYazdir() {
  var w = window.open('', '_blank');
  if (!w) { alert('Açılır pencere engellenmiş olabilir.'); return; }
  w.document.write('<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>Karnem</title><style>' +
    'body{font-family:Segoe UI,Arial,sans-serif;color:#243145;background:#fff;}' +
    '.karne-kutu{max-width:700px;margin:0 auto;padding:20px;}' +
    '.karne-ust{display:flex;align-items:center;gap:14px;border-bottom:3px solid #6a5cff;padding-bottom:12px;}' +
    '.karne-avatar{font-size:48px;}.karne-ust h2{margin:0;font-size:22px;}.karne-ust p{margin:2px 0;color:#5c6b85;font-size:13px;}' +
    '.karne-tarih{margin-left:auto;font-weight:700;color:#5c6b85;}' +
    '.karne-baslik{font-weight:800;font-size:15px;margin:14px 0 6px;color:#6a5cff;}' +
    '.karne-satir{display:flex;justify-content:space-between;padding:5px 8px;border-bottom:1px dashed #dfe5f0;font-size:14px;gap:10px;}' +
    '.karne-satir b{font-weight:700;}.karne-imza{display:flex;justify-content:space-between;margin-top:26px;font-size:14px;gap:10px;}' +
    '.karne-imza span{border-top:1px solid #243145;padding-top:6px;width:180px;text-align:center;color:#5c6b85;}' +
    '@page{size:A4;margin:1cm;}' +
    '</style></head><body>' + karneIc() + '</body></html>');
  w.document.close();
  w.focus();
  setTimeout(function() { w.print(); }, 400);
}

function veliRaporIc() {
  var p = profilOku();
  var st = statlar();
  var bugun = new Date().toLocaleDateString('tr-TR');
  var h = '<div class="karne-kutu">';
  h += '<div class="karne-ust"><span class="karne-avatar">' + (p.avatar || '🧑🎓') + '</span>';
  h += '<div><h2>📋 Veli Değerlendirme Raporu</h2>' +
       '<p>' + esc(p.ad || 'Öğrenci') + (p.soyad ? ' ' + esc(p.soyad) : '') +
       (p.okul ? ' · ' + esc(p.okul) : '') + (p.sinif ? ' · ' + p.sinif + '. sınıf' : '') + (p.sube ? ' · ' + esc(p.sube) + ' Şubesi' : '') + '</p></div>';
  h += '<div class="karne-tarih">' + bugun + '</div></div>';
  h += '<div class="karne-baslik">📌 Genel Özet</div>';
  h += '<div class="karne-satir"><b>⭐ XP / Seviye</b><span>' + st.xp + ' XP · ' + st.seviye + '. seviye</span></div>';
  h += '<div class="karne-satir"><b>🔥 Çalışma Serisi</b><span>' + st.seri + ' gün üst üste</span></div>';
  h += '<div class="karne-satir"><b>🎯 Bugünkü Hedef</b><span>' + st.xpgunToday + '/' + (st.hedefXP || 0) + ' XP</span></div>';
  h += '<div class="karne-satir"><b>📝 Test</b><span>' + st.testSay + ' test · ' + st.soruSay + ' soru</span></div>';
  h += '<div class="karne-satir"><b>🧩 Eşleştirme</b><span>' + st.esleSay + '</span></div>';
  h += '<div class="karne-satir"><b>⏱️ Odak / 🧪 Deney / 🎬 Belgesel / 💻 Kod</b><span>' + st.pomoSay + ' / ' + st.deneySay + ' / ' + st.belgeselSay + ' / ' + st.kodlaSay + '</span></div>';
  h += '<div class="karne-satir"><b>✅ Tamamlanan Konu</b><span>' + st.bYap + '/' + st.bTop + '</span></div>';
  h += '<div class="karne-satir"><b>🏅 Rozet</b><span>' + (oku('odul') || []).length + '/' + ROZETLER.length + '</span></div>';

  h += '<div class="karne-baslik">📖 Ders Durumu</div>';
  for (var s2 in MUFREDAT) {
    MUFREDAT[s2].dersler.forEach(function(d) {
      var t = 0, b = 0, hakTop = 0, hakN = 0;
      d.birimler.forEach(function(_, i) {
        t++;
        if (biten(d.id + '-' + i)) b++;
        var hak = hakimiyet(d.id, i);
        if (hak !== null) { hakTop += hak; hakN++; }
      });
      var ort = hakN ? Math.round(hakTop / hakN) : null;
      h += '<div class="karne-satir"><b>' + s2 + '. Sınıf · ' + DERS_IKON(d.id) + ' ' + d.ad + '</b>' +
           '<span>' + b + '/' + t + ' konu' + (ort === null ? ' · ⚠️ test yok' : ' · ort. %' + ort) + '</span></div>';
    });
  }

  var zk = zayifKonular();
  h += '<div class="karne-baslik">⚠️ Desteklenmesi Gereken Konular</div>';
  if (!zk.length) h += '<div class="karne-satir"><b>Tüm konular iyi durumda</b><span>👏</span></div>';
  else zk.slice(0, 8).forEach(function(z) {
    h += '<div class="karne-satir"><b>' + DERS_IKON(z.d.id) + ' ' + z.d.ad + ' · ' + z.b.ad + ' (' + z.s + '. sınıf)</b>' +
         '<span>' + (z.hak === null ? 'hiç test çözülmedi' : '%' + z.hak) + '</span></div>';
  });

  h += '<div class="karne-baslik">📊 Son 7 Gün Aktivitesi</div>';
  var xg = oku('xpgun') || {}, sg = oku('sorugun') || {}, ak = oku('aktivite') || {};
  var gunAdlari = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  var aktifGun = 0, hftXp = 0, hftSoru = 0;
  for (var i = 6; i >= 0; i--) {
    var d = new Date(); d.setDate(d.getDate() - i);
    var kod = gunKod(d);
    var x = xg[kod] || 0, q = sg[kod] || 0;
    hftXp += x; hftSoru += q; if (x || q) aktifGun++;
    h += '<div class="karne-satir"><b>' + gunAdlari[d.getDay()] + ' · ' + d.toLocaleDateString('tr-TR') + '</b>' +
         '<span>⭐ ' + x + ' XP · 📚 ' + q + ' soru</span></div>';
  }
  h += '<div class="karne-satir" style="background:#f0f4ff"><b>Haftalık Toplam</b><span>' + hftXp + ' XP · ' + hftSoru + ' soru · ' + aktifGun + ' aktif gün</span></div>';

  h += '<div class="karne-baslik">📝 Son Testler</div>';
  var puan = oku('puan') || {};
  var kayitlar = [];
  Object.keys(puan).forEach(function(k) {
    (puan[k] || []).forEach(function(e) { kayitlar.push({ ad: dersAdi(k), d: e.d, n: e.n, t: e.t }); });
  });
  kayitlar.sort(function(a, b) { return (a.t > b.t) ? -1 : 1; });
  if (!kayitlar.length) h += '<div class="karne-satir"><b>Henüz test çözülmedi</b><span>—</span></div>';
  else kayitlar.slice(0, 6).forEach(function(e) {
    h += '<div class="karne-satir"><b>' + esc(e.ad) + '</b><span>' + e.d + '/' + e.n + ' · ' + e.t + '</span></div>';
  });
  h += '<div class="karne-imza"><span>Veli İmzası</span><span>Öğretmen İmzası</span></div>';
  h += '</div>';
  return h;
}

function veliRaporYazdir() {
  var w = window.open('', '_blank');
  if (!w) { alert('Açılır pencere engellenmiş olabilir.'); return; }
  w.document.write('<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8"><title>Veli Raporu</title><style>' +
    'body{font-family:Segoe UI,Arial,sans-serif;color:#243145;background:#fff;}' +
    '.karne-kutu{max-width:700px;margin:0 auto;padding:20px;}' +
    '.karne-ust{display:flex;align-items:center;gap:14px;border-bottom:3px solid #6a5cff;padding-bottom:12px;}' +
    '.karne-avatar{font-size:48px;}.karne-ust h2{margin:0;font-size:20px;}.karne-ust p{margin:2px 0;color:#5c6b85;font-size:13px;}' +
    '.karne-tarih{margin-left:auto;font-weight:700;color:#5c6b85;}' +
    '.karne-baslik{font-weight:800;font-size:15px;margin:14px 0 6px;color:#6a5cff;}' +
    '.karne-satir{display:flex;justify-content:space-between;padding:5px 8px;border-bottom:1px dashed #dfe5f0;font-size:14px;gap:10px;}' +
    '.karne-satir b{font-weight:700;}.karne-imza{display:flex;justify-content:space-between;margin-top:26px;font-size:14px;gap:10px;}' +
    '.karne-imza span{border-top:1px solid #243145;padding-top:6px;width:180px;text-align:center;color:#5c6b85;}' +
    '@page{size:A4;margin:1cm;}' +
    '</style></head><body>' + veliRaporIc() + '</body></html>');
  w.document.close();
  w.focus();
  setTimeout(function() { w.print(); }, 400);
}

/* ====== MİNİ OYUNLAR ====== */
function oyunSoru() {
  var dersler = [];
  for (var k in SORULAR) dersler.push(k);
  if (!dersler.length) return null;
  var d = dersler[Math.floor(Math.random() * dersler.length)];
  var birimler = Object.keys(SORULAR[d]);
  var u = birimler[Math.floor(Math.random() * birimler.length)];
  var q = SORULAR[d][u];
  if (!q || !q.length) return oyunSoru();
  var s = q[Math.floor(Math.random() * q.length)];
  var ana = s.s + (s.o || []).join('');
  if (durum.oyunSon === ana && dersler.length > 1) return oyunSoru();
  durum.oyunSon = ana;
  return s;
}

function cizOyun() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🎮 Mini Oyunlar</h1><p>Oynayarak öğren, XP kazan!</p></div>';
  h += '<div class="oyunlar">';
  h += '<button class="oyun-kart" onclick="kimBaslat()"><span class="oyun-ikon">🎤</span>Kim Milyoner<small>8 soru, doğru 100 puan. Yanlışta biter.</small></button>';
  h += '<button class="oyun-kart" onclick="hizBaslat()"><span class="oyun-ikon">⚡</span>Hız Yarışı<small>100 sn\'de en çok doğru!</small></button>';
  h += '</div>';
  ekran.innerHTML = h;
}

function oyunDurdur() {
  if (durum.oyunKayit) { clearInterval(durum.oyunKayit); durum.oyunKayit = null; }
}

function kimBaslat() {
  oyunDurdur();
  durum.oyun = { tur: 'kim', seviye: 1, dg: 0, toplam: 0, q: null };
  durum.oyunSon = null;
  durum.tur = 'kim'; tabGuncelle(); render();
}

function cizKim() {
  var o = durum.oyun;
  var q = o.q || (o.q = oyunSoru());
  if (!q) { alert('Soru bulunamadı.'); return; }
  var h = '<button class="geri" onclick="git(\'oyun\')">⬅ Oyunlara Dön</button>';
  h += '<div class="baslik"><h1>🎤 Kim Milyoner Olmak İster?</h1><p>Soru ' + o.seviye + '/8 · Kazanılan: ' + o.toplam + ' puan</p></div>';
  h += '<div class="quiz-kutu"><div class="quiz-soru">' + q.s + '</div>';
  q.o.forEach(function(o2, i) {
    h += '<button class="secenek" onclick="kimCevap(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + o2 + '</button>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}

function kimCevap(i) {
  var o = durum.oyun;
  var q = o.q; o.q = null;
  if (i === q.d) {
    o.dg++;
    o.seviye++;
    o.toplam = (o.seviye - 1) * 100;
    if (o.seviye > 8) { o.toplam = 1000; kimBitti(true); return; }
    cizKim();
  } else {
    kimBitti(false);
  }
}

function kimBitti(kazandi) {
  var o = durum.oyun;
  xpEkle(Math.max(2, o.seviye * 2));
  if (kazandi) cizOyunSon('🏆', 'MİLYONER OLDUN! 1000 puan kazandın!', '1000 puan', 'kimBaslat');
  else if (o.dg) cizOyunSon('🎉', 'Güzel oynadın, devam et!', o.toplam + ' puan', 'kimBaslat');
  else cizOyunSon('💪', 'Bu sefer olmadı, tekrar dene!', '0 puan', 'kimBaslat');
}

function hizBaslat() {
  oyunDurdur();
  durum.oyun = { tur: 'hiz', dg: 0, toplam: 0, q: null, kalan: 100 };
  durum.oyunSon = null;
  durum.oyunKayit = setInterval(hizTik, 1000);
  durum.tur = 'hiz'; tabGuncelle(); render();
}

function cizHiz() {
  var o = durum.oyun;
  var q = o.q || (o.q = oyunSoru());
  if (!q) { alert('Soru bulunamadı.'); return; }
  var h = '<button class="geri" onclick="git(\'oyun\')">⬅ Oyunlara Dön</button>';
  h += '<div class="baslik"><h1>⚡ Hız Yarışı</h1><p>100 saniyede en çok doğruyu bul!</p></div>';
  h += '<div class="quiz-kutu"><div class="quiz-baslik">' +
       '<div><b>Doğru: ' + o.dg + ' · Toplam: ' + o.toplam + '</b></div>' +
       '<div class="oyun-sure" id="hizSure">⏱️ ' + o.kalan + ' sn</div></div>';
  h += '<div class="quiz-soru">' + q.s + '</div>';
  q.o.forEach(function(o2, i) {
    h += '<button class="secenek" onclick="hizCevap(' + i + ')">' + String.fromCharCode(65 + i) + ') ' + o2 + '</button>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}

function hizTik() {
  if (!durum.oyun || durum.oyun.tur !== 'hiz') { oyunDurdur(); return; }
  durum.oyun.kalan--;
  var el = document.getElementById('hizSure');
  if (el) el.textContent = '⏱️ ' + durum.oyun.kalan + ' sn';
  if (durum.oyun.kalan <= 0) { oyunDurdur(); hizBitti(); }
}

function hizCevap(i) {
  var o = durum.oyun;
  var q = o.q; o.q = null;
  o.toplam++;
  if (i === q.d) o.dg++;
  if (o.kalan <= 0) { hizBitti(); return; }
  cizHiz();
}

function hizBitti() {
  var o = durum.oyun;
  xpEkle(Math.min(20, o.dg));
  var ikon = o.dg >= 10 ? '🏆' : o.dg >= 5 ? '🎉' : '💪';
  cizOyunSon(ikon, o.dg + ' doğru cevap!', o.toplam + ' soruda ' + o.dg + ' doğru', 'hizBaslat');
}

function cizOyunSon(ikon, baslik, puan, tekrarFn) {
  if (!ikon) { git('oyun'); return; }
  var h = '<div class="quiz-kutu"><div class="sonuc"><div class="buyuk">' + ikon + '</div>' +
          '<div class="puan">' + puan + '</div>' +
          '<p style="margin:16px 0;font-size:17px;font-weight:700">' + baslik + '</p>' +
          '<button class="btn btn-mor" onclick="git(\'oyun\')">🎮 Oyunlar</button> ' +
          '<button class="btn btn-neo" onclick="' + tekrarFn + '()">🔁 Tekrar</button></div></div>';
  durum.tur = 'oyunSon';
  ekran.innerHTML = h;
}

/* ====== HAFTALIK ÖZET ====== */
function cizHafta() {
  var a = oku('aktivite') || {};
  var xg = oku('xpgun') || {};
  var sg = oku('sorugun') || {};
  var gunAdlari = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📊 Haftalık Özetim</h1><p>Son 7 gün: neler yaptın?</p></div>';
  var tXp = 0, tSoru = 0, tAktif = 0;
  for (var i = 6; i >= 0; i--) {
    var d = new Date(); d.setDate(d.getDate() - i);
    var kod = gunKod(d);
    var x = xg[kod] || 0, q = sg[kod] || 0, ak = a[kod] || 0;
    tXp += x; tSoru += q; if (ak) tAktif++;
    h += '<div class="hafta-satir' + (i === 0 ? ' bugun' : '') + '">' +
         '<span>' + gunAdlari[d.getDay()] + '<small>' + d.toLocaleDateString('tr-TR') + '</small></span>' +
         '<span>🔥 ' + ak + '</span><span>⭐ ' + x + ' XP</span><span>📚 ' + q + ' soru</span></div>';
  }
  h += '<div class="hafta-toplam">Bu hafta: ⭐ ' + tXp + ' XP · 📚 ' + tSoru + ' soru · 🔥 ' + tAktif + ' aktif gün</div>';
  ekran.innerHTML = h;
}

/* ====== SESLİ SORU OKUMA ====== */
function soruDinle() {
  if (!window.speechSynthesis) { alert('Tarayıcı sesli okumayı desteklemiyor.'); return; }
  var q = durum.qListe && durum.qListe[durum.qSira];
  if (!q) return;
  window.speechSynthesis.cancel();
  var sira = durum.qSira + 1, toplam = durum.qListe.length;
  var metin = 'Soru ' + sira + ' / ' + toplam + '. ' + q.s + '. Seçenekler: ' + (q.o || []).map(function(o, i) { return String.fromCharCode(65 + i) + ', ' + o; }).join('. ');
  var u = new SpeechSynthesisUtterance(metin);
  u.lang = 'tr-TR';
  var sesler = window.speechSynthesis.getVoices();
  for (var v = 0; v < sesler.length; v++) { if ((sesler[v].lang || '').indexOf('tr') === 0) { u.voice = sesler[v]; break; } }
  window.speechSynthesis.speak(u);
}
function cozumleriDinle() {
  if (!window.speechSynthesis) { alert('Tarayıcı sesli okumayı desteklemiyor.'); return; }
  var L = durum.qListe || [];
  var metin = '';
  L.forEach(function(q, i) {
    metin += 'Soru ' + (i + 1) + ': ' + q.s + '. ' + cozumBul(durum.quiz, durum.qBirim, q) + '. ';
  });
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(metin);
  u.lang = 'tr-TR';
  var sesler = window.speechSynthesis.getVoices();
  for (var v = 0; v < sesler.length; v++) { if ((sesler[v].lang || '').indexOf('tr') === 0) { u.voice = sesler[v]; break; } }
  window.speechSynthesis.speak(u);
}

/* ====== SINIF SEÇİMİ (İLK ÇALIŞTIRMA / SINIF DEĞİŞTİR) ====== */
function seciliSinif() {
  var p = profilOku();
  if (p.sinif && /^[5-8]/.test(p.sinif)) return String(p.sinif).charAt(0);
  return null;
}

/* ====== LİSANS SİSTEMİ ====== */
function lisansBilgi() {
  var d = lisans_.durum();
  if (d.tip === 'lisansli') return '✅ Lisanslı · ' + esc(d.ad) + ' · ' + esc(d.bitis) + ' kadar (' + lisans_.kalanGun() + ' gün)';
  if (d.tip === 'deneme') return '🧪 Deneme · ' + d.kalanGun + ' gün kaldı';
  return '🔒 Lisans gerekli';
}
function cizLisans() {
  var d = lisans_.durum();
  var h = '<div class="baslik"><h1>🔑 Lisans</h1><p>Uygulamayı kullanmak için lisans gerekir.</p></div>';
  if (d.tip === 'lisansli') {
    h += '<div class="ozet-karti"><div class="durum-huc"><b>Durum</b><span>✅ Aktif</span></div>'
      + '<div class="durum-huc"><b>Lisans sahibi</b><span>' + esc(d.ad) + '</span></div>'
      + '<div class="durum-huc"><b>Bitiş</b><span>' + esc(d.bitis) + ' (' + lisans_.kalanGun() + ' gün)</span></div>'
      + '<div class="durum-huc"><b>Kullanım</b><span>' + (d.cihaz > 1 ? (d.cihaz + ' cihaz') : 'Tek cihaz') + '</span></div></div>';
    h += '<div style="text-align:center;margin-top:14px"><button class="btn btn-mor" onclick="git(\'menu\')">🚪 Devam Et</button></div>';
    ekran.innerHTML = h;
    return;
  }
  if (d.tip === 'deneme') {
    h += '<div class="ozet-karti"><b>🧪 Deneme sürümü</b><p>Kalan gün: ' + d.kalanGun + ' gün</p></div>';
  } else {
    h += '<div class="ozet-karti" style="border-color:#e05656"><b>🔒 Deneme süreniz doldu</b><p>Devam etmek için geçerli bir lisans kodu girin.</p></div>';
  }
  h += '<div style="margin-top:14px"><label>Lisans Kodunuz:</label>'
    + '<textarea id="lisansKod" rows="4" placeholder="Lisans kodunu buraya yapıştırın" style="width:100%;padding:10px;border:2px solid #dfe5f0;border-radius:10px;font-size:14px;font-family:monospace;resize:vertical"></textarea></div>';
  h += '<div class="unit-butonlar" style="margin-top:10px">'
    + '<button class="btn btn-mor" style="width:auto" onclick="lisansGir()">💾 Lisansı Doğrula ve Etkinleştir</button></div>';
  h += '<div id="lisansSonuc" style="margin-top:8px"></div>';
  if (d.tip === 'deneme') {
    h += '<div style="text-align:center;margin-top:14px"><button class="kucuk-buton" style="background:#1f8a70" onclick="git(\'menu\')">🚪 Denemeye Devam Et</button></div>';
  }
  ekran.innerHTML = h;
}
function lisansGir() {
  var kod = ($('lisansKod') ? $('lisansKod').value : '').trim();
  var sonuc = $('lisansSonuc');
  if (!kod) { if (sonuc) sonuc.innerHTML = '<small style="color:#e05656">Lisans kodunu girin.</small>'; return; }
  if (sonuc) sonuc.innerHTML = '<small>Doğrulanıyor...</small>';
  lisans_.kaydet(kod).then(function (s) {
    if (s.ok) {
      if (sonuc) sonuc.innerHTML = '<small style="color:#2ecc71">✅ Lisans etkinleştirildi' + (s.ad ? (' · ' + esc(s.ad)) : '') + ' (' + esc(s.bitis) + ')</small>';
      setTimeout(function () { git('menu'); }, 900);
    } else {
      var mesaj = s.neden === 'imza' ? 'Geçersiz lisans kodu (imza doğrulanamadı).'
        : s.neden === 'suresi dolmus' ? 'Bu lisansın süresi dolmuş.'
        : s.neden === 'cihaz-doldu' ? 'Bu lisans zaten izin verilen cihaz sayısında kullanılıyor.'
        : 'Geçersiz lisans kodu.';
      if (sonuc) sonuc.innerHTML = '<small style="color:#e05656">' + mesaj + '</small>';
    }
  });
}

function cizSinifSec() {
  var h = '<div class="baslik"><h1>👋 Hoş Geldin!</h1><p>Önce sınıfını seçelim, sana sadece o sınıfın derslerini önereyim.</p></div>';
  h += '<div class="grader">';
  for (var s in MUFREDAT) {
    h += '<button class="grade-card renk' + s + '" onclick="secSinif(' + s + ')">' +
         '<span class="yildiz">' + s + '</span>' + s + '. Sınıf<br>' +
         '<span style="font-size:13px;font-weight:600">' + MUFREDAT[s].dersler.length + ' ders</span></button>';
  }
  h += '</div>';
  if (profilOku().ad) h += '<div class="kucuk-not">İstersek Profilim’den sınıfını dilediğin zaman değiştirebilirsin. 📄</div>';
  h += '<div style="text-align:center"><button class="kucuk-not" style="color:#9b59b6;cursor:pointer" onclick="git(\'menu\')">← Geri (tüm sınıfları göster)</button></div>';
  ekran.innerHTML = h;
}

function secSinif(s) {
  var p = profilOku();
  p.sinif = String(s);
  p.sube = '';
  kaydet('profil', p);
  profilUygula();
  git('menu');
}

/* ====== DERS PROGRAMI (HAFTALIK) ====== */
var PROGRAM_SAATLER = [15, 16, 17, 18, 19, 20, 21];
var GUN_SIRA = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

function programGosterici(dersId, bilgi) {
  var d = (bilgi && bilgi.dersler || []).filter(function(x){ return x.id === dersId; })[0];
  return d ? (DERS_IKON(d.id) + ' ' + d.ad) : dersId;
}

function programDuzenle(g, h) {
  durum.programEdit = { g: g, h: h };
  durum.programSelD = '';
  durum.programSelK = '';
  cizProgram();
}
function programIptal() { durum.programEdit = null; cizProgram(); }

function programKaydet(g, h) {
  var d = $('pD') ? $('pD').value : '';
  var k = $('pK') ? $('pK').value : '';
  var prog = oku('prog') || {};
  var key = g + '-' + h;
  if (d) prog[key] = { d: d, k: k || '' };
  else delete prog[key];
  kaydet('prog', prog);
  durum.programEdit = null;
  rozetKontrol();
  cizProgram();
}

function programSil(g, h) {
  var prog = oku('prog') || {};
  delete prog[g + '-' + h];
  kaydet('prog', prog);
  durum.programEdit = null;
  rozetKontrol();
  cizProgram();
}

function akilliPlan() {
  var p = profilOku();
  var s = p.sinif || '6';
  var bilgi = MUFREDAT[s];
  if (!bilgi) { alert('Önce Profil > Sınıfını seç.'); return; }
  var prog = oku('prog') || {};
  var hedefGun = 3;
  var gunCount = {};
  GUN_SIRA.forEach(function(g, i){ gunCount[i] = 0; });
  Object.keys(prog).forEach(function(k){
    var g = Number(String(k).split('-')[0]);
    gunCount[g] = (gunCount[g] || 0) + 1;
  });
  var aday = oneriKonular(40);
  var added = 0;
  for (var i = 0; i < aday.length; i++) {
    var t = aday[i];
    var yer = null;
    for (var gi = 1; gi <= 5; gi++) {
      if ((gunCount[gi] || 0) >= hedefGun) continue;
      for (var hi = 0; hi < PROGRAM_SAATLER.length; hi++) {
        var key = gi + '-' + PROGRAM_SAATLER[hi];
        if (!prog[key]) { yer = key; break; }
      }
      if (yer) break;
    }
    if (!yer) break;
    prog[yer] = { d: t.dersId, k: t.birimAd, u: t.bi };
    var gg = Number(String(yer).split('-')[0]);
    gunCount[gg] = (gunCount[gg] || 0) + 1;
    added++;
  }
  if (!added) { alert('Akıllı plan: tüm hafta içi saatleriniz dolu. Önce bazı slotları boşaltın.'); return; }
  kaydet('prog', prog);
  rozetKontrol();
  cizProgram();
  alert('🤖 Akıllı plan: ' + added + ' zayıf kazanım haftalık programa eklendi. 📅');
}

function cizProgram() {
  var s = seciliSinif();
  var bilgi = s ? MUFREDAT[s] : null;
  var prog = oku('prog') || {};
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📅 Ders Programım</h1><p>Haftalık çalışma saatlerini ata. Boş saate tıkla, dersini seç.</p>';
  if (!durum.programEdit) h += '<div style="margin-top:8px"><button class="btn btn-mor" onclick="akilliPlan()">🤖 Akıllı Planı Doldur</button> <span class="kucuk-not">Zayıf konularına göre otomatik doldurur (günde 3 saat).</span></div>';
  h += '</div>';
  if (!s || !bilgi) {
    h += '<div class="skor-liste">Önce <b>Profilim</b>’den sınıfını seç, ya da 👇</div>';
    h += '<div style="text-align:center"><button class="btn btn-mor" onclick="secSinif(6)">📚 6. Sınıf Etkinliklerini Göster</button></div>';
    h += '<div class="kucuk-not">Sınıf seçince tüm gün/saat kutucukları derslerine göre doldurulabilir.</div>';
    ekran.innerHTML = h; return;
  }
  var ed = durum.programEdit;
  h += '<div class="program-grid">';
  h += '<div class="program-satir program-header"><div>Saat</div>';
  for (var gi = 0; gi < 7; gi++) h += '<div class="program-gun">' + GUN_SIRA[gi] + '</div>';
  h += '</div>';
  PROGRAM_SAATLER.forEach(function(saat) {
    h += '<div class="program-satir">';
    h += '<div class="program-saat">' + saat + ':00</div>';
    for (var gi = 0; gi < 7; gi++) {
      var key = gi + '-' + saat;
      var at = prog[key];
      if (ed && ed.g === gi && ed.h === saat) {
        h += '<div class="program-elm program-edit">';
        h += '<select id="pD" style="flex:2">';
        bilgi.dersler.forEach(function(d) {
          h += '<option value="' + d.id + '"' + ((durum.programSelD === d.id) ? ' selected' : '') + '">' + programGosterici(d.id, bilgi) + '</option>';
        });
        h += '</select>';
        h += '<input id="pK" placeholder="konu" value="' + (durum.programSelK || '') + '" style="flex:2;padding:4px;font-size:12px">';
        h += '<button class="kucuk-buton" style="background:#2ecc71" onclick="programKaydet(' + gi + ',' + saat + ')">✓</button>';
        h += '<button class="kucuk-buton" style="background:#94a3b8" onclick="programIptal()">✗</button>';
        h += '</div>';
      } else if (at) {
        h += '<div class="program-elm program-bos"><span class="ikon" style="font-size:18px">' + DERS_IKON(at.d) + '</span> ' +
             '<span class="ad">' + programGosterici(at.d, bilgi) + '</span>' +
             (at.k ? '<div class="alt">' + at.k + '</div>' : '') +
             '<button class="program-sil" onclick="programSil(' + gi + ',' + saat + ')">✕</button></div>';
      } else {
        h += '<div class="program-elm program-bos" onclick="programDuzenle(' + gi + ',' + saat + ')">➕</div>';
      }
    }
    h += '</div>';
  });
  h += '</div>';
  h += '<div class="kucuk-not" style="margin-top:10px">💡 Planladığın saatlerde bildirim hatırlatması alabilirsin (Profil → Bildirim).</div>';
  ekran.innerHTML = h;
}

/* ====== BİLDİRİM HATIRLATMA ====== */
function bildirimIzin() {
  if (typeof Notification === 'undefined') return 'desteklenmiyor';
  return Notification.requestPermission();
}
function bildirimKur() {
  var p = profilOku();
  if (!p.bildirim) return;
  if (typeof Notification === 'undefined') return;
  if (Notification.permission !== 'granted') return;
  var hedef = p.bildirimSaat || 16;
  var simd = new Date();
  var hedefTarih = new Date(simd.getFullYear(), simd.getMonth(), simd.getDate(), hedef, 0, 0);
  if (hedefTarih <= simd) hedefTarih.setDate(hedefTarih.getDate() + 1);
  var ms = hedefTarih.getTime() - simd.getTime();
  if (durum.notifTimer) clearTimeout(durum.notifTimer);
  durum.notifTimer = setTimeout(function() {
    if (Notification.permission === 'granted') new Notification('📚 Çalışma zamanı!', { body: (bugunOzet() || 'Planladığın saate göre derslerine zaman ayır.'), icon: 'https://dummyimage.com/48/6a5cff/ffffff.png&text=OK' });
    bildirimKur();
  }, Math.max(60000, ms));
}
function bildirimAcKapa() {
  var p = profilOku();
  p.bildirim = !p.bildirim;
  kaydet('profil', p);
  if (p.bildirim) bildirimIzin();
  if (durum.tur === 'profil') cizProfil();
  profilUygula();
  bildirimKur();
}
function bildirimSaatDegistir(s) {
  var p = profilOku();
  p.bildirimSaat = Number(s);
  kaydet('profil', p);
  bildirimKur();
}

/* ====== YENİ ÖZELLİKLER: streak, rozet duvarı, pomo grafik, leitner, ics, arama, flash, pin, foto, paylaş ====== */

/* Pomodoro günlük harita (haftalık grafik + Leitner için) */
function pomoGunKaydet() {
  var pg = oku('pomogun') || {};
  var k = gunKod(new Date());
  pg[k] = (pg[k] || 0) + 1;
  kaydet('pomogun', pg);
}
function pomoGunHarita() {
  var pg = oku('pomogun') || {};
  var out = [];
  for (var i = 6; i >= 0; i--) {
    var d = new Date(); d.setDate(d.getDate() - i);
    var k = gunKod(d);
    out.push({ k: k, n: pg[k] || 0, d: d });
  }
  return out;
}
function rozetDuvarHTML() {
  var s = statlar();
  var acik = oku('odul') || [];
  var h = '<div class="baslik" style="margin-top:20px;margin-bottom:12px"><h2>🏆 Rozet Duvarım</h2></div>';
  h += '<div class="rozet-grid">';
  ROZETLER.forEach(function(r) {
    var kazandi = acik.indexOf(r.id) >= 0 || r.kontrol(s);
    if ((r.gizli || r.mevsim) && !kazandi) return;
    h += '<div class="rozet-kart' + (kazandi ? ' kazandi' : '') + '">';
    h += '<div class="rozet-ikon">' + (kazandi ? r.ikon : '🔒') + '</div>';
    h += '<div class="rozet-ad">' + r.ad + '</div>';
    h += '<div class="rozet-acik">' + r.aciklama + '</div>';
    h += '</div>';
  });
  h += '</div>';
  return h;
}
function pomoGrafikHTML() {
  var map = pomoGunHarita();
  var max = 1;
  map.forEach(function(x){ if (x.n > max) max = x.n; });
  var gunAd = ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'];
  var h = '<div class="baslik" style="margin-top:20px;margin-bottom:12px"><h2>⏱️ Haftalık Odak Grafiği</h2></div>';
  h += '<div class="pomo-grafik">';
  map.forEach(function(x){
    var y = Math.round(x.n / max * 100);
    h += '<div class="pomo-bar-wrap"><div class="pomo-bar" style="height:' + y + '%" title="' + x.k + ': ' + x.n + ' tur"></div><div class="pomo-gun">' + gunAd[x.d.getDay()] + '</div></div>';
  });
  h += '</div>';
  return h;
}
function xpGrafikHTML() {
  var xg = oku('xpgun') || {};
  var out = [];
  for (var i = 13; i >= 0; i--) {
    var d = new Date(); d.setDate(d.getDate() - i);
    var k = gunKod(d);
    out.push({ k: k, n: xg[k] || 0, d: d });
  }
  var max = 1;
  out.forEach(function(x){ if (x.n > max) max = x.n; });
  var gunAd = ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'];
  var toplam = 0; out.forEach(function(x){ toplam += x.n; });
  var h = '<div class="baslik" style="margin-top:20px;margin-bottom:12px"><h2>⏱️ Son 14 Günlük Gelişim (XP)</h2></div>';
  h += '<div class="kucuk-not" style="text-align:left;margin-bottom:8px">Son 14 günde toplam ⭐ ' + toplam + ' XP kazandın.</div>';
  h += '<div class="pomo-grafik">';
  out.forEach(function(x){
    var y = Math.round(x.n / max * 100);
    h += '<div class="pomo-bar-wrap"><div class="pomo-bar" style="height:' + y + '%" title="' + x.d.getDate() + ' ' + gunAd[x.d.getDay()] + ': ' + x.n + ' XP"></div><div class="pomo-gun">' + x.d.getDate() + '</div></div>';
  });
  h += '</div>';
  return h;
}

/* Leitner aralıklı tekrar (1-3-7-16-30 gün) */
function leitnerGun(kutu) { var g = [1,3,7,16,30]; return g[Math.max(0, Math.min(4, (kutu||1)-1))]; }
function tekrarSil(dersId, bi) { var tr = oku('tekrar') || {}; delete tr[dersId + '-' + bi]; kaydet('tekrar', tr); cizTekrar(); }
function tekrarKutuIlerle(dersId, bi) {
  var tr = oku('tekrar') || {}; var ana = dersId + '-' + bi;
  var e = tr[ana]; if (!e) return;
  var k = (e.kutu || 1) + 1; if (k > 5) k = 5;
  e.kutu = k; e.sira = Date.now() + leitnerGun(k) * 86400000; e.ok = true;
  tr[ana] = e; kaydet('tekrar', tr); xpEkle(5); rozetKontrol(); cizTekrar();
}
function tekrarKutuSifirla(dersId, bi) {
  var tr = oku('tekrar') || {}; var ana = dersId + '-' + bi;
  if (!tr[ana]) return; tr[ana].kutu = 1; tr[ana].sira = Date.now() + 86400000; tr[ana].ok = false;
  kaydet('tekrar', tr); cizTekrar();
}
function tekrarEkle(dersId, bi) {
  var tr = oku('tekrar') || {};
  tr[dersId + '-' + bi] = { t: new Date().toLocaleDateString('tr-TR'), ok: true, kutu: 1, sira: Date.now() + 86400000 };
  kaydet('tekrar', tr); cizTekrar();
}

/* Takvim (.ics) dışa aktarma */
function takvimIcs() {
  var satirlar = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//OkulDersUygulamam//TR','CALSCALE:GREGORIAN'];
  (oku('saylar') || []).forEach(function(s) {
    satirlar.push('BEGIN:VEVENT','SUMMARY:' + (s.ad || 'Sınav'), 'DTSTART;VALUE=DATE:' + icsTarih(s.t), 'END:VEVENT');
  });
  var gv = gorevVeri();
  if (gv && gv.yapildi) Object.keys(gv.yapildi).forEach(function(id) {
    var def = null; for (var i=0;i<GOREVLER.length;i++) if (GOREVLER[i].id===id){def=GOREVLER[i];break;}
    satirlar.push('BEGIN:VEVENT','SUMMARY:' + (def?def.ad:'Görev') + ' (bugün)','DTSTART;VALUE=DATE:' + icsTarih(new Date()), 'END:VEVENT');
  });
  satirlar.push('END:VCALENDAR');
  return satirlar.join('\r\n');
}
function icsTarih(t) {
  var d = (t instanceof Date) ? t : new Date(t);
  var y = d.getFullYear(), m = d.getMonth()+1, g = d.getDate();
  return '' + y + (m<10?'0':'') + m + (g<10?'0':'') + g;
}
function takvimIndir() {
  if (typeof Blob === 'undefined' || typeof URL === 'undefined') { alert('Tarayıcı desteklemiyor.'); return; }
  var j = takvimIcs();
  var blob = new Blob([j], { type: 'text/calendar;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'okul-takvim.ics';
  document.body.appendChild(a); a.click();
  try { document.body.removeChild(a); } catch(e) {}
  if (URL.revokeObjectURL) URL.revokeObjectURL(a.href);
}

/* Görev işaretleme (manuel tamamla) + hatırlatma */
function gorevToggle(id) {
  var g = gorevVeri();
  if (g.yapildi[id]) { delete g.yapildi[id]; if (g.ilerleme[id]) g.ilerleme[id] = 0; }
  else { g.yapildi[id] = true; g.ilerleme[id] = 999; xpEkle(2); }
  kaydet('gorevler', g);
  rozetKontrol();
  if (durum.tur === 'gorevler') cizGorevler();
}

/* Konu arama */
function cizAra() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🔍 Konu Ara</h1><p>Tüm derslerde anahtar kelime ara, doğrudan konuya git.</p></div>';
  h += '<div class="ara-kutu"><input id="araGirdi" type="text" placeholder="Örn: kesir, osmanlı, fotosentez..." oninput="araCalistir(this.value)">';
  h += '<div id="araSonuc" class="ara-sonuc"></div></div>';
  ekran.innerHTML = h;
  var el = $('araGirdi'); if (el && el.focus) el.focus();
}
function araCalistir(q) {
  q = (q || '').toLocaleLowerCase('tr-TR').trim();
  var box = $('araSonuc'); if (!box) return;
  if (!q) { box.innerHTML = '<div class="kucuk-not">Aramak için bir kelime yaz.</div>'; return; }
  var son = [];
  for (var s in MUFREDAT) {
    MUFREDAT[s].dersler.forEach(function(d) {
      d.birimler.forEach(function(b, i) {
        var metin = (b.ad + ' ' + (b.detay || '') + ' ' + (b.konu || '')).toLocaleLowerCase('tr-TR');
        if (metin.indexOf(q) >= 0) son.push({ s: s, d: d, i: i, b: b });
      });
    });
  }
  if (!son.length) { box.innerHTML = '<div class="skor-liste">Sonuç bulunamadı.</div>'; return; }
  var hh = '<div class="skor-liste">';
  son.slice(0, 40).forEach(function(x) {
    hh += '<div class="skor-satir"><span>' + DERS_IKON(x.d.id) + ' <b>' + x.b.ad + '</b> <small>(' + x.s + '. sınıf · ' + x.d.ad + ')</small></span>' +
          '<span><button class="kucuk-buton" style="background:#9b59b6" onclick="araGit(' + x.s + ',\'' + x.d.id + '\',' + x.i + ')">📖 Aç</button></span></div>';
  });
  hh += '</div>';
  box.innerHTML = hh;
}
function araGit(s, dId, i) {
  var p = profilOku();
  if (String(p.sinif) !== String(s)) { p.sinif = String(s); kaydet('profil', p); profilUygula(); }
  secDers(s, dId);
}

/* İngilizce kelime flashcards */
function flashListesi() {
  var s = seciliSinif() || '6';
  var havuz = [];
  ['ing' + s, 'alm' + s].forEach(function(id) {
    var arr = SORULAR[id];
    if (!arr) return;
    Object.keys(arr).forEach(function(bi) {
      (arr[bi] || []).forEach(function(q) {
        if (q && q.s && q.o && q.d !== undefined && q.o[q.d] && q.z) {
          havuz.push({ soru: q.s, cevap: q.o[q.d], ders: id });
        }
      });
    });
  });
  return havuz;
}
function cizFlash() {
  var havuz = flashListesi();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🌐 Kelime Kartları</h1><p>İngilizce kelimeleri öğren, kartı çevir.</p></div>';
  if (!havuz.length) { h += '<div class="kucuk-not">Bu sınıf için kelime kartı bulunamadı.</div>'; ekran.innerHTML = h; return; }
  durum.flash = karistir(havuz); durum.flashI = 0;
  h += '<div style="text-align:center;margin-bottom:10px"><button class="btn btn-mor" onclick="flashKaristir()">🔀 Karıştır</button> <span class="kucuk-not">' + havuz.length + ' kart</span></div>';
  h += '<div id="flashAlan"></div>';
  ekran.innerHTML = h;
  flashGoster();
}
function flashKaristir() { durum.flash = karistir(durum.flash || flashListesi()); durum.flashI = 0; flashGoster(); }
function flashGoster() {
  var alan = $('flashAlan'); if (!alan) return;
  var list = durum.flash || []; if (!list.length) return;
  var k = list[durum.flashI || 0];
  if (!k) return;
  alan.innerHTML = '<div class="flash-kart" onclick="flashCevir()"><div class="flash-ust">' + (durum.flashI+1) + '/' + list.length + '</div>' +
    '<div class="flash-soru">' + esc(k.soru) + '</div>' +
    '<div class="flash-cevap' + (durum.flashAcik ? ' acik' : '') + '">' + (durum.flashAcik ? esc(k.cevap) : '🂠 Cevabı gör') + '</div></div>' +
    '<div class="flash-nav"><button class="btn btn-geri" onclick="flashOnceki()">‹</button>' +
    '<button class="btn btn-test" onclick="flashBildim()">✓ Bildim</button>' +
    '<button class="btn btn-mor" onclick="flashSonraki()">›</button></div>';
}
function flashCevir() { durum.flashAcik = !durum.flashAcik; flashGoster(); }
function flashBildim() { xpEkle(1); durum.flashAcik = false; flashSonraki(); }
function flashSonraki() { durum.flashAcik = false; if (!durum.flash) return; durum.flashI = (durum.flashI + 1) % durum.flash.length; flashGoster(); }
function flashOnceki() { durum.flashAcik = false; if (!durum.flash) return; durum.flashI = (durum.flashI - 1 + durum.flash.length) % durum.flash.length; flashGoster(); }

/* TTS iyileştirme: ses seçimi + güvenli fallback */
function ttsSesListesi() {
  if (!window.speechSynthesis) return [];
  try { return window.speechSynthesis.getVoices() || []; } catch(e) { return []; }
}
function ttsSesKaydet(id) { kaydet('ttsSes', id); }
function cozumleriDinle() {
  if (!window.speechSynthesis) { alert('Tarayıcı sesli okumayı desteklemiyor.'); return; }
  var L = durum.qListe || [];
  var metin = '';
  L.forEach(function(q, i) { metin += 'Soru ' + (i + 1) + ': ' + q.s + '. ' + cozumBul(durum.quiz, durum.qBirim, q) + '. '; });
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(metin);
  u.lang = 'tr-TR'; u.rate = 0.95; u.pitch = 1;
  var id = oku('ttsSes');
  var sesler = ttsSesListesi();
  if (id) { for (var v=0; v<sesler.length; v++){ if (sesler[v].voiceURI===id){ u.voice=sesler[v]; break; } } }
  if (!u.voice) { for (var w=0; w<sesler.length; w++){ if ((sesler[w].lang||'').indexOf('tr')===0){ u.voice=sesler[w]; break; } } }
  window.speechSynthesis.speak(u);
}

/* Profil PIN koruması */
function profilKilitliMi() {
  var liste = oku('profiller');
  if (!liste) return false;
  var id = aktifProfilId();
  for (var i=0;i<liste.length;i++){ if (liste[i].id===id && liste[i].pin) return true; }
  return false;
}
function profilKilitAc(pin) {
  var liste = oku('profiller') || [];
  var id = aktifProfilId();
  for (var i=0;i<liste.length;i++){ if (liste[i].id===id){ if (liste[i].pin === String(pin)){ durum.kilit = false; return true; } } }
  return false;
}
function cizKilit() {
  ekran.innerHTML = '<div class="kilit-ekran"><div class="kilit-kutu"><div style="font-size:46px">🔐</div><h2>Profil Kilitli</h2>' +
    '<input id="pinGir" type="password" inputmode="numeric" maxlength="8" placeholder="PIN" style="text-align:center;font-size:22px">' +
    '<button class="btn btn-mor" onclick="kilitDeneme()">Aç</button></div></div>';
  var el = $('pinGir'); if (el && el.focus) el.focus();
}
function kilitDeneme() {
  var v = $('pinGir') ? $('pinGir').value : '';
  if (profilKilitAc(v)) { cizProfil(); }
  else { alert('PIN yanlış.'); }
}
function profilPinAyarla(pin) {
  var liste = profilListesi();
  var id = aktifProfilId();
  for (var i=0;i<liste.length;i++){ if (liste[i].id===id){ if (pin) liste[i].pin = String(pin); else delete liste[i].pin; } }
  kaydet('profiller', liste);
}

/* Yanlışa fotoğraf ekleme (OCR yerine görsel saklama) */
function yanlisFotoEkle(i, ev) {
  var f = ev && ev.target && ev.target.files && ev.target.files[0];
  if (!f) return;
  if (f.size > 1.5 * 1024 * 1024) { alert('Görsel 1.5 MB\'dan küçük olmalı.'); return; }
  var fr = new FileReader();
  fr.onload = function(e) {
    var havuz = oku('yanlis') || [];
    if (havuz[i]) { havuz[i].foto = e.target.result; kaydet('yanlis', havuz); cizYanlis(); }
  };
  fr.readAsDataURL(f);
}

/* Veri paylaş (bulut yerine Web Share / dosya) */
function veriPaylas() {
  var j = JSON.stringify(veriExportJson());
  var paylas = { title: 'Okul Ders Uygulamam - Yedek', text: j };
  if (navigator && navigator.share) { try { navigator.share(paylas).catch(function(){}); return; } catch(e){} }
  if (typeof Blob !== 'undefined' && typeof URL !== 'undefined') {
    var blob = new Blob([j], { type: 'application/json' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'okul-yedek.json';
    document.body.appendChild(a); a.click();
    try { document.body.removeChild(a); } catch(e){}
  } else { alert('Paylaşım desteklenmiyor.'); }
}

/* ====== İKİNCİ YENİ ÖZELLİKLER PAKETİ ====== */

/* 🎯 Adaptif test (zayıf konulara ağırlık) */
function testListeKur(dersId, liste, bi, sureli) {
  if (!liste || !liste.length) { alert('Soru bulunamadı.'); return; }
  sureDurdur();
  durum.quiz = dersId; durum.qBirim = (bi === undefined || bi === null) ? '' : bi;
  durum.qListe = liste; durum.qSira = 0; durum.qDogru = 0; durum.qRekor = null; durum.qHavuz = false; durum.qSureDoldu = false;
  if (sureli) { durum.sure = { kalan: Math.max(10, Math.ceil(liste.length * 1.5)) * 60 }; durum.sureKayit = setInterval(sureTik, 1000); } else { durum.sure = null; }
  durum.tur = 'test'; tabGuncelle(); devamKaydet(); render();
}
function adaptifTestBaslat(dersId) {
  var d = dersBul(seciliSinif(), dersId);
  if (!d) return;
  var tum = tumSorular(dersId);
  if (!tum.length) { alert('Bu ders için soru yok.'); return; }
  var zayif = [];
  d.birimler.forEach(function(b, i) { if (hakimiyet(dersId, i) < 70) zayif = zayif.concat(birimTest(dersId, i)); });
  var agirlik = []; zayif.forEach(function(s){ agirlik.push(s); agirlik.push(s); });
  var diger = tum.filter(function(s){ return zayif.indexOf(s) < 0; });
  var liste = karistir(agirlik.concat(karistir(diger).slice(0, Math.max(0, 12 - agirlik.length))));
  testListeKur(dersId, liste, '', true);
}

/* 🗺️ Öğrenme yolu (roadmap) */
function cizYol() {
  var s = seciliSinif() || '6';
  var bilgi = MUFREDAT[s];
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🗺️ ' + t('Öğrenme Yolum') + '</h1>' + '<p>' + s + '. sınıf derslerini sırayla tamamla.</p></div>';
  if (!bilgi) { h += '<div class="kucuk-not">Önce sınıfını seç.</div>'; ekran.innerHTML = h; return; }
  bilgi.dersler.forEach(function(d) {
    h += '<div class="yol-ders"><div class="yol-ders-ad">' + DERS_IKON(d.id) + ' ' + d.ad + '</div>';
    d.birimler.forEach(function(b, i) {
      var tamam = biten(d.id + '-' + i);
      var yz = hakimiyet(d.id, i);
      var renk = tamam ? '#2ecc71' : (yz >= 70 ? '#3498db' : (yz > 0 ? '#f39c12' : '#e74c3c'));
      h += '<div class="yol-adim" onclick="secDers(' + s + ',\'' + d.id + '\')"><span class="yol-nokta" style="background:' + renk + '"></span>' + b.ad + ' <small>' + (tamam ? '✓' : (yz > 0 ? '%' + yz : 'başlanmadı')) + '</small></div>';
    });
    h += '</div>';
  });
  ekran.innerHTML = h;
}

/* 📉 Unutma eğrisi grafiği (Leitner verisiyle) */
function unutmaEgridHTML() {
  var tr = oku('tekrar') || {};
  var keys = Object.keys(tr);
  if (!keys.length) return '';
  var h = '<div class="baslik" style="margin-top:20px;margin-bottom:12px"><h2>📉 Unutma Eğrisi Takibi</h2></div>';
  h += '<div class="egri-grafik">';
  keys.slice(0, 14).forEach(function(k) {
    var e = tr[k];
    var gun = e.sira ? Math.max(0, Math.round((e.sira - Date.now()) / 86400000)) : 0;
    var y = Math.max(5, 100 - Math.min(100, gun / 30 * 100));
    h += '<div class="egri-nokta" style="height:' + y + '%" title="' + k + ': ' + gun + ' gün sonra tekrar"></div>';
  });
  h += '</div>';
  return h;
}

/* ====== ROL SİSTEMİ (Öğrenci / Veli / Öğretmen) ====== */
function aktifRol() { return oku('aktifRol') || 'ogrenci'; }
function rolAyarla(r) {
  kaydet('aktifRol', r);
  var p = profilOku();
  p.rol = r;
  kaydet('profil', p);
}
function ogretmenKodAyarla() {
  var kod = prompt('Öğretmen panosu için şifre belirle (en az 4 karakter, boş = kapat):', oku('ogretmenKod') || '');
  if (kod === null) return;
  kaydet('ogretmenKod', kod ? String(kod) : '');
  alert(kod ? 'Öğretmen şifresi ayarlandı.' : 'Öğretmen şifresi kaldırıldı.');
}

/* Rol seçim ekranı */
function cizRolSec() {
  var rivayet = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  rivayet += '<div class="baslik"><h1>👥 ' + t('Rol Seçimi') + '</h1><p>' + t('Hangi rol olarak devam etmek istiyorsun?') + '</p></div>';
  rivayet += '<div class="dersler" style="flex-direction:column;gap:12px">';
  rivayet += '<button class="ders-card" style="align-items:center" onclick="rolGir(\'ogrenci\')"><span class="ikon">🎓</span><span><span class="ad">' + t('Öğrenci') + '</span><br><span class="alt">' + t('Ders çalış, test çöz, plan yap') + '</span></span>' + (aktifRol()==='ogrenci'?'<span class="durum-ikon">✓ Aktif</span>':'') + '</button>';
  rivayet += '<button class="ders-card" style="align-items:center" onclick="rolGir(\'veli\')"><span class="ikon">👨‍👩‍👧</span><span><span class="ad">' + t('Veli') + '</span><br><span class="alt">' + t('Özet rapor ve karne (kod gerekir)') + '</span></span>' + (aktifRol()==='veli'?'<span class="durum-ikon">✓ Aktif</span>':'') + '</button>';
  rivayet += '<button class="ders-card" style="align-items:center" onclick="rolGir(\'ogretmen\')"><span class="ikon">👩‍🏫</span><span><span class="ad">' + t('Öğretmen') + '</span><br><span class="alt">' + t('Öğrenci performansı (şifre gerekir)') + '</span></span>' + (aktifRol()==='ogretmen'?'<span class="durum-ikon">✓ Aktif</span>':'') + '</button>';
  rivayet += '</div>';
  ekran.innerHTML = rivayet;
}
function rolGir(r) {
  if (r === 'ogrenci') { rolAyarla('ogrenci'); alert('Öğrenci moduna geçildi. 🎓'); git('menu'); return; }
  if (r === 'veli') {
    var kod = oku('veliKod');
    if (!kod) { rolAyarla('veli'); cizVeli(); return; }
    var gir = prompt('Veli panosu kodu?', '');
    if (gir === kod) { rolAyarla('veli'); cizVeli(); }
    else alert('Kod yanlış.');
    return;
  }
  if (r === 'ogretmen') {
    var sifre = oku('ogretmenKod');
    if (!sifre) { alert('Öğretmen şifresi henüz ayarlanmadı. Profilim sayfasından belirle.'); return; }
    var gir2 = prompt('Öğretmen şifresi?', '');
    if (gir2 === sifre) { rolAyarla('ogretmen'); cizOgretmen(); }
    else alert('Şifre yanlış.');
    return;
  }
}

/* Öğretmen paneli (aynı cihazdaki öğrenci performansı) */
function cizOgretmen() {
  var s = statlar();
  var p = profilOku();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>👩‍🏫 ' + t('Öğretmen Paneli') + '</h1><p>' + esc(p.ad || 'Öğrenci') + ' için gelişim raporu ve öneriler.</p></div>';

  h += '<div class="baslik"><h2>📌 Özet</h2></div><div class="ozet-karti">'
    + '<div style="display:flex;flex-wrap:wrap;gap:10px">'
    + '<div class="durum-huc"><b>🎓 Öğrenci</b><span>' + esc(p.ad || '—') + ' ' + esc(p.soyad || '') + '</span></div>'
    + '<div class="durum-huc"><b>📚 Sınıf</b><span>' + (p.sinif ? (p.sinif + '. sınıf') : String(seciliSinif() || '') + '. sınıf') + '</span></div>'
    + '<div class="durum-huc"><b>⭐ XP</b><span>' + s.xp + '</span></div>'
    + '<div class="durum-huc"><b>🔥 Seri</b><span>' + s.seri + ' gün</span></div>'
    + '<div class="durum-huc"><b>🏅 Rozet</b><span>' + (oku('odul') || []).length + '/' + ROZETLER.length + '</span></div>'
    + '<div class="durum-huc"><b>📝 Test</b><span>' + s.testSay + ' çözüldü</span></div>'
    + '<div class="durum-huc"><b>✅ Tam doğru</b><span>' + s.tamSay + '</span></div>'
    + '</div></div>';

  h += '<div class="baslik"><h2>📈 Gelişim Analizi</h2></div>';
  h += '<div class="ozet-karti">' + haftalikRaporMetni().replace(/\n/g, '<br>') + '</div>';

  h += '<div class="baslik"><h2>🎯 Ders Bazlı Başarı</h2></div>';
  var sk = seciliSinif();
  var puan = oku('puan') || {};
  h += '<div class="araclar">';
  if (sk && MUFREDAT[sk]) {
    MUFREDAT[sk].dersler.forEach(function(d) {
      var list = puan[d.id] || [];
      var dt = 0, nt = 0;
      list.forEach(function(e){ dt += e.d; nt += e.n; });
      var yuz = nt ? Math.round(dt / nt * 100) : null;
      var renk = yuz === null ? '#7f8c8d' : (yuz < 50 ? '#e05656' : (yuz < 70 ? '#e67e22' : '#1f8a70'));
      h += '<div class="arac" style="flex-direction:column;gap:4px"><span class="arac-ikon">' + DERS_IKON(d.id) + '</span>'
        + '<b style="font-size:13px;text-align:center">' + d.ad + '</b>'
        + '<span style="font-weight:700;color:' + renk + '">' + (yuz === null ? 'Veri yok' : '%' + yuz) + '</span></div>';
    });
  }
  h += '</div>';

  h += '<div class="baslik"><h2>🖨️ Raporlar</h2></div>';
  h += '<div class="unit-butonlar">';
  h += '<button class="kucuk-buton" style="background:#1f8a70" onclick="veliRaporYazdir()">🖨️ Yazdırılabilir Rapor</button>';
  h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="git(\'karne\')">📄 Karne</button>';
  h += '</div>';
  h += '<div class="baslik" style="margin-top:18px"><h2>🟢 Canlı Sınıf Yönetimi</h2><p>Sınıf kodu ile öğrencilerini ekle, derslerini ve notlarını yaz, çalışma verilerini gör.</p></div>';
  var _supaVar = (typeof kutuSUPA !== 'undefined' && kutuSUPA.hazirMi());
  if (_supaVar) {
    h += '<div class="unit-butonlar">';
    h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="git(\'sinifYonet\')">🟢 Sınıfımı Yönet</button>';
    h += '<button class="kucuk-buton" style="background:#1f8a70" onclick="sinifGiris()">➕ Sınıf Aç / Kullan</button>';
    h += '</div>';
  } else {
    h += '<div class="kucuk-not" style="color:#e05656;margin:8px 0">⚠️ Canlı sınıf yönetimi için Supabase yapılandırması gerekli (supa-config.js doldurulmalı).</div>';
  }
  h += '<div style="text-align:center;margin-top:16px"><button class="kucuk-buton" style="background:#e05656" onclick="ogretmenCikis()">🚪 Öğrenci Moduna Geç</button></div>';
  ekran.innerHTML = h;
}
function ogretmenCikis() { rolAyarla('ogrenci'); alert('Öğrenci moduna geçildi. 🎓'); git('menu'); }

/* 👨‍👩‍👧 Veli panosu (kod korumalı) */
function veliKodAyarla() {
  var kod = prompt('Veli panosu için kod belirle (boş = kapat):', oku('veliKod') || '');
  if (kod === null) return;
  kaydet('veliKod', kod ? String(kod) : '');
  alert(kod ? 'Veli kodu ayarlandı.' : 'Veli kodu kaldırıldı.');
}
function cizVeliKap() {
  var kod = oku('veliKod');
  if (!kod) { cizVeli(); return; }
  var gir = prompt('Veli panosu kodu?', '');
  if (gir === kod) cizVeli(); else alert('Kod yanlış.');
}
function cizVeli() {
  var s = statlar();
  var p = profilOku();
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>👨‍👩‍👧 ' + t('Veli Panosu') + '</h1>' + '<p>' + esc(p.ad || 'Öğrenci') + ' için özet rapor.</p></div>';
  h += '<div class="ozet-karti"><h2>' + s.xp + ' XP · 🔥 ' + s.seri + ' gün · 🏅 ' + (oku('odul') || []).length + '/' + ROZETLER.length + '</h2></div>';
  h += '<div style="text-align:center;margin:10px 0"><button class="kucuk-buton" style="background:#1f8a70" onclick="veliRaporYazdir()">🖨️ Yazdırılabilir Rapor</button></div>';
  h += haftalikRaporHTML();
  ekran.innerHTML = h;
}

/* 📈 Haftalık rapor (metin) */
function haftalikRaporMetni() {
  var s = statlar();
  var p = profilOku();
  var hafta = [];
  for (var i = 6; i >= 0; i--) { var d = new Date(); d.setDate(d.getDate() - i); hafta.push(gunKod(d)); }
  var a = oku('aktivite') || {};
  var gunAktif = hafta.filter(function(k){ return a[k]; }).length;
  var xg = oku('xpgun') || {};
  var haftaXp = 0; hafta.forEach(function(k){ haftaXp += (xg[k] || 0); });
  return (p.ad || 'Öğrenci') + ' için Haftalık Rapor\n' +
    '- Toplam XP: ' + s.xp + '\n' +
    '- Bu hafta çalışılan gün: ' + gunAktif + '/7\n' +
    '- Bu hafta kazanılan XP: ' + haftaXp + '\n' +
    '- Çözülen test: ' + s.testSay + ' · Tam doğru test: ' + s.tamSay + '\n' +
    '- Rozet: ' + (oku('odul') || []).length + '/' + ROZETLER.length + '\n' +
    '- Tamamlanan konu: ' + s.bYap + '/' + s.bTop;
}
function haftalikRaporHTML() {
  return '<div class="baslik" style="margin-top:16px"><h2>📈 ' + t('Haftalık Özet') + '</h2>' + '</div><pre class="rapor-metni">' + esc(haftalikRaporMetni()) + '</pre>';
}

/* 🏆 Lider tablosu (profiller arası XP) */
function profilXp(p) {
  var v = p.veri || {};
  var x = v.xp;
  if (x && typeof x.p !== 'undefined') return x.p || 0;
  return 0;
}
function cizLider() {
  var liste = profilListesi();
  var aktifId = aktifProfilId();
  var sat = liste.map(function(p){
    var xp = (p.id === aktifId) ? (xpBilgi().p || 0) : profilXp(p);
    return { ad: p.ad || 'Öğrenci', xp: xp };
  }).sort(function(a, b){ return b.xp - a.xp; });
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🏆 ' + t('Lider Tablosu') + '</h1>' + '<p>Bu cihazdaki profillerin XP sıralaması.</p></div>';
  h += '<div class="skor-liste">';
  sat.forEach(function(x, i) {
    h += '<div class="skor-satir"><span>' + (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1 + '.')) + ' ' + esc(x.ad) + '</span><span>⭐ ' + x.xp + ' XP</span></div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}

/* 🎮 Mini oyunlar: Hızlı Matematik Düeli */
function cizMatDueli() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>⚡ ' + t('Hızlı Matematik Düeli') + '</h1>' + '<p>30 saniyede kaç doğru yaparsın?</p></div>';
  h += '<div id="matAlan" class="flash-kart"><div id="matSoru" class="flash-soru">Başlamak için bas</div><div id="matSkor" class="flash-ust">Skor: 0</div></div>';
  h += '<div class="flash-nav"><button class="btn btn-mor" onclick="matBasla()">▶️ Başla</button> <button class="btn btn-test" onclick="matCevap()">✏️ Cevapla</button></div>';
  ekran.innerHTML = h;
}
function matYeniSoru() {
  var a = Math.floor(Math.random()*12)+1, b = Math.floor(Math.random()*12)+1, op = ['+','-','*'][Math.floor(Math.random()*3)];
  durum.matCev = op === '+' ? a+b : op === '-' ? a-b : a*b;
  var el = $('matSoru'); if (el) el.textContent = a + ' ' + op + ' ' + b + ' = ?';
}
function matBasla() {
  durum.matSkor = 0; durum.matSure = 30;
  matYeniSoru();
  if (durum.matTimer) clearInterval(durum.matTimer);
  durum.matTimer = setInterval(function(){
    durum.matSure--;
    var sk = $('matSkor'); if (sk) sk.textContent = 'Skor: ' + (durum.matSkor||0) + ' · ' + durum.matSure + 'sn';
    if (durum.matSure <= 0) { clearInterval(durum.matTimer); alert('Bitti! Skor: ' + (durum.matSkor||0)); }
  }, 1000);
}
function matCevap() {
  var v = prompt('Kaç?', '');
  if (v !== null && parseInt(v, 10) === durum.matCev) { durum.matSkor = (durum.matSkor||0)+1; xpEkle(1); }
  matYeniSoru();
}

/* 🔤 Kelime Bulmaca (scramble) */
function cizKelimeBulmaca() {
  var havuz = flashListesi();
  if (!havuz.length) { ekran.innerHTML = '<button class="geri" onclick="git(\'menu\')">⬅</button><div class="kucuk-not">Kelime bulunamadı.</div>'; return; }
  var k = havuz[Math.floor(Math.random()*havuz.length)];
  var kelime = (k.cevap || '').toString().trim();
  if (!kelime) { cizKelimeBulmaca(); return; }
  var kar = kelime.split('').sort(function(){ return Math.random()-0.5; }).join('');
  durum.bulmacaCev = kelime;
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🔤 ' + t('Kelime Bulmaca') + '</h1>' + '</div>';
  h += '<div class="flash-kart"><div class="flash-ust">İpucu: ' + esc(k.soru) + '</div><div class="flash-soru">' + kar + '</div>';
  h += '<input id="bulmacaGir" type="text" placeholder="Kelimeyi bul" style="margin-top:10px;padding:10px;border-radius:10px;border:2px solid #fff;width:80%"></div></div>';
  h += '<div class="flash-nav"><button class="btn btn-mor" onclick="bulmacaKontrol()">Kontrol Et</button> <button class="btn btn-geri" onclick="cizKelimeBulmaca()">Yeni</button></div>';
  ekran.innerHTML = h;
}
function bulmacaKontrol() {
  var v = $('bulmacaGir') ? $('bulmacaGir').value : '';
  if ((v||'').trim().toLowerCase() === (durum.bulmacaCev||'').toLowerCase()) { alert('Doğru! 🎉'); xpEkle(2); cizKelimeBulmaca(); }
  else alert('Tekrar dene.');
}

/* 🎥 Kullanıcı videoları (medya notu) */
function cizMedya() {
  var m = oku('medya') || [];
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🎥 ' + t('Benim Videolarım') + '</h1>' + '<p>Kendi anlatım videonu ekle (cihazda saklanır).</p></div>';
  h += '<label class="kucuk-buton" style="background:#6a5cff;cursor:pointer;display:inline-block">📹 Video Ekle<input type="file" accept="video/*" style="display:none" onchange="medyaEkle(event)"></label>';
  h += '<div class="medya-list">';
  m.forEach(function(v, i){
    h += '<div class="medya-kart"><video src="' + v.src + '" controls style="width:100%;border-radius:10px"></video><button class="kucuk-buton" style="background:#e74c3c;margin-top:6px" onclick="medyaSil(' + i + ')">Sil</button></div>';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function medyaEkle(ev) {
  var f = ev && ev.target && ev.target.files && ev.target.files[0];
  if (!f) return;
  if (f.size > 8*1024*1024) { alert('Video 8 MB\'dan küçük olmalı.'); return; }
  var fr = new FileReader();
  fr.onload = function(e){ var m = oku('medya')||[]; m.push({ src: e.target.result, t: new Date().toLocaleDateString('tr-TR') }); kaydet('medya', m); cizMedya(); };
  fr.readAsDataURL(f);
}
function medyaSil(i){ var m = oku('medya')||[]; m.splice(i,1); kaydet('medya', m); cizMedya(); }

/* ♿ Erişilebilirlik */
function erisilebilirlikUygula() {
  var p = profilOku();
  if (document.body) {
    document.body.classList.toggle('yuksek-kontrast', !!p.kontrast);
    document.body.classList.toggle('buyuk-yazi', !!p.buyukYazi);
  }
}
function kontrastAcKapa() { var p = profilOku(); p.kontrast = !p.kontrast; kaydet('profil', p); erisilebilirlikUygula(); if (durum.tur === 'profil') cizProfil(); }
function buyukYaziAcKapa() { var p = profilOku(); p.buyukYazi = !p.buyukYazi; kaydet('profil', p); erisilebilirlikUygula(); if (durum.tur === 'profil') cizProfil(); }

/* 🔐 AES yedek şifreleme (Web Crypto PBKDF2 + AES-GCM) */
function veriExportSifreli(parola, cb) {
  if (!(window.crypto && window.crypto.subtle)) { cb('ERR: Tarayıcı şifrelemeyi desteklemiyor.'); return; }
  var json = JSON.stringify(veriExportJson());
  var enc = new TextEncoder();
  var salt = window.crypto.getRandomValues(new Uint8Array(16));
  window.crypto.subtle.importKey('raw', enc.encode(parola), 'PBKDF2', false, ['deriveKey']).then(function(base){
    window.crypto.subtle.deriveKey({name:'PBKDF2', salt:salt, iterations:100000, hash:'SHA-256'}, base, {name:'AES-GCM', length:256}, false, ['encrypt']).then(function(key){
      var iv = window.crypto.getRandomValues(new Uint8Array(12));
      window.crypto.subtle.encrypt({name:'AES-GCM', iv:iv}, key, enc.encode(json)).then(function(buf){
        cb(null, JSON.stringify({ v:1, salt:Array.from(salt), iv:Array.from(iv), data:Array.from(new Uint8Array(buf)) }));
      }).catch(function(e){ cb('ERR:' + e.message); });
    }).catch(function(e){ cb('ERR:' + e.message); });
  }).catch(function(e){ cb('ERR:' + e.message); });
}
function sifreliYedekIndir() {
  var parola = prompt('Yedeği şifrelemek için parola gir:', '');
  if (!parola) return;
  veriExportSifreli(parola, function(err, veri){
    if (err) { alert(err); return; }
    if (typeof Blob === 'undefined' || typeof URL === 'undefined') { alert('Tarayıcı desteklemiyor.'); return; }
    var blob = new Blob([veri], { type: 'application/json' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'okul-yedek-sifreli.json';
    document.body.appendChild(a); a.click();
    try { document.body.removeChild(a); } catch(e){}
  });
}

/* Çoklu dil (arayüz) - mekanizma + TR/EN/DE çeviri sözlüğü */
var DIL_SOZLUK = {
  tr: {},
  en: {
  'Ana Sayfa':'Home', 'Araçlarım':'Tools', 'Gelişimim':'My Progress', 'Profilim':'My Profile', 'Veli Panosu':'Parent Board', 'Lider Tablosu':'Leaderboard', 'Öğrenme Yolum':'My Learning Path', 'Kelime Bulmaca':'Word Puzzle', 'Haftalık Özet':'Weekly Summary',   'Anasayfa':'Home', 'Sunum':'Presentation', 'Çalışma Planı':'Study Plan',
  'Bugünün Planı':'Today\'s Plan', 'Akıllı günlük öneri':'Smart daily suggestion', 'Notlarım':'My Notes', 'Konu notların':'Your topic notes', 'Pratik':'Practice', 'Hızlı alıştırma':'Quick drill', 'Hakimiyetim':'My Mastery', 'Genel başarı durumun':'Your overall progress',
  'Matematik Düeli':'Math Duel', 'Hızlı Matematik Düeli':'Quick Math Duel', 'Benim Videolarım':'My Videos',
  'Pomodoro':'Pomodoro', 'Sınav Geri Sayımı':'Exam Countdown', 'Konu Hakimiyeti':'Topic Mastery', 'Bilgi Kartları':'Study Cards', 'Başarılarım':'My Achievements', 'Günlük Görevler':'Daily Tasks', 'Yanlışlarım':'My Mistakes', 'Tekrar Defterim':'Revision Notebook', 'Çalışma Takvimi':'Study Calendar', 'Ders Programım':'My Schedule', 'Mini Oyunlar':'Mini Games', 'Karnem':'My Report Card', 'Takibimdekiler':'My Watchlist', 'Kütüphane':'Library', 'Haftalık Yarışma':'Weekly Contest', 'Denematik':'Trial Exam', '3B Fen':'3D Science', 'Canlı Dersler':'Live Lessons', 'Etkinlikler':'Activities', 'Fen Deneyleri':'Science Experiments', 'Çözümlü Sorular':'Solved Problems', 'Seviye Belirleme':'Level Assessment', 'Dinleme Metinleri':'Listening Texts', 'Belgeseller':'Documentaries', 'Kodlama Atölyesi':'Coding Workshop', 'Konu Videoları':'Subject Videos', 'Kazanım Listesi':'Learning Outcomes', 'Veri ve Yedek':'Data & Backup', 'Konu Ara':'Find Topic', 'Kelime Kartları':'Flashcards',
  'Odaklanma zamanlayıcısı':'Focus timer', 'Sınavına kaç gün kaldı?':'Days until your exam', 'Neyi ne kadar öğrendim?':'What have I learned', 'Kağıt kart gibi çalış':'Study like paper cards', 'Rozetler ve istatistikler':'Badges and stats', 'Bugünün hedefleri':"Today's goals", 'Yanlışları tekrar çöz':'Redo your mistakes', 'Zayıf konular için plan':'Plan for weak topics', 'Son 30 günün':'Last 30 days', 'Saate göre planla':'Plan by hour', 'Kim Milyoner ve hız yarışı':'Quiz and speed race', 'Son 7 günün':'Last 7 days', 'Yazdırılabilir rapor':'Printable report', 'İzlediğin konular':'Topics you follow', 'Oku, bitir, takip et':'Read, finish, track', 'XP topla, ödülü kap':'Earn XP, win reward', 'Aylık deneme sınavı':'Monthly mock exam', 'Animasyonlu konular':'Animated topics', 'Haftalık ders takvimi':'Weekly lesson calendar', 'Yazdırılabilir çalışmalar':'Printable worksheets', 'Adım adım deneyler':'Step-by-step experiments', 'Adım adım çözümler':'Step-by-step solutions', 'Başlangıç testi':'Placement test', 'Dinle ve öğren':'Listen and learn', 'Konulu anlatımlar':'Themed explanations', 'Algoritma ve bloklar':'Algorithms and blocks', 'Ders videoları havuzu':'Lesson video pool', 'MEB kazanımları':'MEB outcomes', 'Yedekle, geri yükle, güncelle':'Backup, restore, update', 'Kelimeyle konu bul':'Find topic by word', 'İngilizce kelimeler':'English words'
},
  de: { 'Ana Sayfa':'Start', 'Araçlarım':'Werkzeuge', 'Gelişimim':'Mein Fortschritt', 'Profilim':'Mein Profil', 'Veli Panosu':'Elternbereich', 'Lider Tablosu':'Rangliste', 'Öğrenme Yolum':'Lernweg', 'Kelime Bulmaca':'Worträtsel', 'Haftalık Özet':'Wochenübersicht' }
};
function t(metin) {
  var d = (profilOku().dil || 'tr');
  if (DIL_SOZLUK[d] && DIL_SOZLUK[d][metin]) return DIL_SOZLUK[d][metin];
  return metin;
}
function dilDegistir(d) { var p = profilOku(); p.dil = d; kaydet('profil', p); if (durum.tur === 'profil') cizProfil(); if (durum.tur === 'menu') cizMenu(); }

/* ====== YENİ ÖZELLİKLER 3: Notlar, Bugünün Planı, Pratik, Hakimiyet ====== */

function notAnahtar(dersId, i) { return dersId + '-' + i; }
function notListele(dersId, i) { var n = oku('notlar') || {}; return n[notAnahtar(dersId, i)] || []; }
function notEkle(dersId, i) {
  var metin = prompt('Bu konu için notunu yaz:');
  if (!metin) return;
  metin = metin.trim();
  if (!metin) return;
  var n = oku('notlar') || {};
  var k = notAnahtar(dersId, i);
  if (!n[k]) n[k] = [];
  n[k].push({ id: Date.now(), metin: metin, t: Date.now() });
  kaydet('notlar', n);
  if (durum.tur === 'ders') cizDers();
  else if (durum.tur === 'notlar') cizNotlar();
  alert('Not eklendi.');
}
function notSil(dersId, i, nid) {
  var n = oku('notlar') || {};
  var k = notAnahtar(dersId, i);
  if (n[k]) { n[k] = n[k].filter(function(x) { return x.id !== nid; }); kaydet('notlar', n); }
  cizNotlar();
}
function cizNotlar() {
  var n = oku('notlar') || {};
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📝 Notlarım</h1><p>Konulara eklediğin notlar burada listelenir.</p></div>';
  var keys = Object.keys(n);
  if (!keys.length) { h += '<div class="skor-liste">Henüz not eklemedin. Bir konunun yanındaki 📝 Not düğmesini kullan.</div>'; ekran.innerHTML = h; return; }
  h += '<div class="skor-liste">';
  keys.forEach(function(k) {
    var par = k.split('-'); var dId = par[0]; var ii = par.slice(1).join('-');
    var d = dersBul(seciliSinif(), dId);
    var baslik = (d ? d.ad : dId) + (d && d.birimler[ii] ? ' · ' + d.birimler[ii].ad : '');
    n[k].forEach(function(x) {
      h += '<div class="not-kart"><div class="not-baslik">' + esc(baslik) + '</div>';
      h += '<div class="not-metin">' + esc(x.metin) + '</div>';
      h += '<div class="not-alt"><span>' + new Date(x.t).toLocaleDateString('tr-TR') + '</span> <button class="kucuk-buton" style="background:#e74c3c" onclick="notSil(\'' + dId + '\',' + ii + ',' + x.id + ')">Sil</button> <button class="kucuk-buton" style="background:#6a5cff" onclick="konuCalis(\'' + dId + '\',' + ii + ')">📖 Çalış</button></div></div>';
    });
  });
  h += '</div>';
  ekran.innerHTML = h;
}

function cizBugun() {
  var sinif = seciliSinif() || '6';
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📅 Bugünün Planı</h1><p>Zayıf konuların ve tekrar zamanı gelenler öncelikli.</p></div>';
  var zk = zayifKonular().filter(function(z) { return String(z.s) === String(sinif); });
  var plan = [];
  zk.slice(0, 3).forEach(function(z) { plan.push({ d: z.d, i: z.i, tur: 'tekrar', metin: 'Zayıf konu: ' + z.b.ad + ' (' + (z.hak === null ? 0 : z.hak) + '%)' }); });
  var info = MUFREDAT[sinif];
  if (info) {
    var bit = oku('biti') || {};
    dis: for (var di = 0; di < info.dersler.length; di++) {
      var d = info.dersler[di];
      for (var bi = 0; bi < d.birimler.length; bi++) {
        if (!bit[d.id + '-' + bi]) { plan.push({ d: d, i: bi, tur: 'yeni', metin: 'Yeni konu: ' + d.ad + ' · ' + d.birimler[bi].ad }); break dis; }
      }
    }
  }
  if (!plan.length) { h += '<div class="skor-liste">Harika! Öncelikli konun kalmadı. 🏆 İstersen bir test çözebilirsin.</div>'; ekran.innerHTML = h; return; }
  h += '<div class="plan-liste">';
  plan.forEach(function(p, idx) {
    h += '<div class="plan-kart"><div class="plan-no">' + (idx + 1) + '</div><div class="plan-ic"><div class="plan-metin">' + esc(p.metin) + '</div><div class="plan-btn">';
    if (p.tur === 'tekrar') h += '<button class="kucuk-buton" style="background:#e67e22" onclick="konuCalis(\'' + p.d.id + '\',' + p.i + ')">📖 Çalış</button> <button class="kucuk-buton" style="background:#1f8a70" onclick="testBaslat(\'' + p.d.id + '\',\'' + p.i + '\')">🧪 Test</button>';
    else h += '<button class="kucuk-buton" style="background:#2ecc71" onclick="konuCalis(\'' + p.d.id + '\',' + p.i + ')">▶️ Başla</button>';
    h += '</div></div></div>';
  });
  h += '</div>';
  var rb = profilOku().bildirim;
  h += '<div class="baslik" style="margin-top:18px"><h2>🔔 Günlük Hatırlatıcı</h2></div>';
  h += '<div class="unit-butonlar"><button class="kucuk-buton" style="background:' + (rb ? '#2ecc71' : '#7f8c8d') + '" onclick="bugunHatirlatKur()">' + (rb ? '🔔 Hatırlatıcı Açık' : '🔕 Hatırlatıcıyı Aç') + '</button>';
  var saat = profilOku().bildirimSaat || 16;
  h += '<label style="margin-left:8px;font-size:13px">Saat: <input type="number" id="bugunSaat" value="' + saat + '" min="0" max="23" style="width:54px;padding:4px;border-radius:8px;border:1px solid #ccc"></label>';
  h += '</div>';
  h += '<div class="kucuk-not">Açarsan her gün belirlediğin saatte bugünün planını hatırlatan bildirim gelir.</div>';
  ekran.innerHTML = h;
}
function bugunOzet() {
  var sinif = seciliSinif() || '6';
  var parcalar = [];
  zayifKonular().filter(function(z) { return String(z.s) === String(sinif); }).slice(0, 2).forEach(function(z) { parcalar.push(z.b.ad); });
  if (!parcalar.length) {
    var info = MUFREDAT[sinif]; var bit = oku('biti') || {};
    if (info) { dis: for (var di = 0; di < info.dersler.length; di++) { var d = info.dersler[di]; for (var bi = 0; bi < d.birimler.length; bi++) { if (!bit[d.id + '-' + bi]) { parcalar.push(d.ad + ' · ' + d.birimler[bi].ad); break dis; } } } }
  }
  if (!parcalar.length) return 'Bugünün planı hazır! Bir konu çalış.';
  return 'Bugünün planı: ' + parcalar.join(', ') + ' — hadi çalış!';
}
function bugunHatirlatKur() {
  var p = profilOku();
  var yeni = !p.bildirim;
  p.bildirim = yeni;
  if (yeni) {
    var sh = $('bugunSaat'); if (sh) p.bildirimSaat = Number(sh.value) || 16;
    if (typeof Notification !== 'undefined' && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      try { var pr = Notification.requestPermission(function() { bildirimAcKur(); }); if (pr && pr.then) pr.then(function() { bildirimAcKur(); }); } catch (e) {}
    }
  }
  kaydet('profil', p);
  bildirimAcKur();
  if (durum.tur === 'bugun') cizBugun();
}
function bildirimAcKur() { bildirimKur(); }

function cizPratik() {
  if (!durum.pratikAy) durum.pratikAy = { adet: 10, seviye: 'orta', zamanli: false };
  var sinif = seciliSinif() || '6';
  var info = MUFREDAT[sinif];
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🧮 Pratik Alıştırma</h1><p>Konuna göre soru çöz ya da hızlı aritmetik drill yap.</p></div>';
  var ist = oku('pratikIstat') || { d: 0, y: 0, enIyi: 0 };
  var pg = oku('pratikGun') || {};
  var pseri = 0, pd = new Date();
  while (pg[gunKod(pd)]) { pseri++; pd.setDate(pd.getDate() - 1); }
  h += '<div class="pratik-istat">📈 Toplam: <b>' + ist.d + '</b> doğru / <b>' + ist.y + '</b> yanlış · 🔥 En iyi seri: <b>' + ist.enIyi + '</b> · 📅 Pratik serisi: <b>' + pseri + '</b> gün</div>';
  h += '<div class="ayar-kutu"><span class="ayar-etiket">Soru sayısı:</span> ';
  [5, 10, 15, 20].forEach(function(n) { h += '<button class="kucuk-buton" style="background:' + (durum.pratikAy.adet === n ? '#2ecc71' : '#95a5a6') + '" onclick="pratikAyar(\'adet\',' + n + ')">' + n + '</button> '; });
  h += '</div><div class="ayar-kutu"><span class="ayar-etiket">Seviye:</span> ';
  [['kolay', 'Kolay'], ['orta', 'Orta'], ['zor', 'Zor']].forEach(function(o) { h += '<button class="kucuk-buton" style="background:' + (durum.pratikAy.seviye === o[0] ? '#e67e22' : '#95a5a6') + '" onclick="pratikAyar(\'seviye\',\'' + o[0] + '\')">' + o[1] + '</button> '; });
  h += '</div><div class="ayar-kutu"><span class="ayar-etiket">Zamanlı:</span> ';
  h += '<button class="kucuk-buton" style="background:' + (durum.pratikAy.zamanli ? '#e74c3c' : '#95a5a6') + '" onclick="pratikAyar(\'zamanli\', !durum.pratikAy.zamanli)">⏱️ ' + (durum.pratikAy.zamanli ? 'Açık (20sn)' : 'Kapalı') + '</button></div>';
  h += '<div class="baslik" style="margin-top:8px"><h2 style="font-size:16px">📚 Ders soru bankası</h2></div>';
  h += '<div class="unit-butonlar">';
  if (info) {
    info.dersler.forEach(function(d) {
      if (SORULAR[d.id] && tumSorular(d.id).length) h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="pratikDersSec(\'' + d.id + '\')">' + d.ad + '</button> ';
    });
  }
  h += '</div>';
  var zsay = (zayifKonular().filter(function(z) { return String(z.s) === String(sinif); })).length;
  if (zsay > 0) h += '<div class="unit-butonlar" style="margin-top:6px"><button class="kucuk-buton" style="background:#e74c3c" onclick="pratikZayif()">🎯 Zayıf Konularım (' + zsay + ')</button></div>';
  h += '<div class="unit-butonlar" style="margin-top:6px"><button class="kucuk-buton" style="background:#c0392b" onclick="pratikYanlisMod()">🔁 Yanlışlarımdan Çalış</button></div>';
  h += '<div class="baslik" style="margin-top:10px"><h2 style="font-size:16px">⚡ Hızlı aritmetik</h2></div>';
  h += '<div class="unit-butonlar"><button class="kucuk-buton" style="background:#2ecc71" onclick="pratikModSec(\'aritmetik\')">🔢 Karışık İşlem</button> <button class="kucuk-buton" style="background:#16a085" onclick="pratikTumDers()">🔀 Tüm Dersler</button></div>';
  ekran.innerHTML = h;
}
function pratikAyar(k, v) { if (!durum.pratikAy) durum.pratikAy = { adet: 10, seviye: 'orta' }; durum.pratikAy[k] = v; cizPratik(); }
function pratikZayif() {
  var sinif = seciliSinif() || '6';
  var zk = zayifKonular().filter(function(z) { return String(z.s) === String(sinif); });
  if (!zk.length) { alert('Henüz zayıf konun yok. 🎉'); return; }
  var ay = durum.pratikAy || { adet: 10, seviye: 'orta' };
  var soru = [];
  zk.forEach(function(z) {
    var arr = SORULAR[z.d.id];
    if (arr && arr[z.i]) (arr[z.i] || []).forEach(function(item) { soru.push({ tip: 'sec', metin: item.s, o: item.o, d: item.d, dersId: z.d.id, bi: z.i }); });
  });
  if (!soru.length) { alert('Zayıf konularında soru bulunamadı.'); return; }
  karistir(soru);
  soru = soru.slice(0, ay.adet);
  durum.pratik = { soru: soru, idx: 0, dogru: 0, yanlis: 0, seri: 0, enIyi: 0, dersId: null, puan: {}, yanlisList: [], hak: false, zamanli: !!ay.zamanli };
  pratikCiz();
}
function pratikYanlisMod() {
  var sinif = seciliSinif() || '6';
  var havuz = oku('yanlis') || [];
  var liste = [];
  havuz.forEach(function(e) {
    if (!e || !e.s || !e.o || e.dogru === undefined) return;
    if (e.ders && !dersBul(sinif, e.ders)) return;
    liste.push({ tip: 'sec', metin: e.s, o: e.o, d: e.dogru, dersId: e.ders, bi: e.u, ana: e.ana });
  });
  if (!liste.length) { alert('Henüz kayıtlı yanlışın yok. Soru çözüp yanlış yaptığında buraya eklenir. 📝'); return; }
  karistir(liste);
  var ay = durum.pratikAy || { adet: 10, seviye: 'orta' };
  var soru = liste.slice(0, Math.min(ay.adet, liste.length)).map(function(x) { return { tip: 'sec', metin: x.metin, o: x.o, d: x.d, dersId: x.dersId, bi: x.bi, ana: x.ana }; });
  durum.pratik = { soru: soru, idx: 0, dogru: 0, yanlis: 0, seri: 0, enIyi: 0, dersId: null, puan: {}, yanlisList: [], hak: false, zamanli: !!ay.zamanli };
  pratikCiz();
}
function pratikModSec(mod, dersId) {
  var ay = durum.pratikAy || { adet: 10, seviye: 'orta' };
  var adet = ay.adet, seviye = ay.seviye;
  var soru = [];
  if (mod === 'aritmetik') {
    pratikUret('karisik', adet, seviye).forEach(function(x) { soru.push({ tip: 'sayi', metin: x.metin, cevap: x.cevap }); });
  } else {
    var dId = dersId || mod;
    var q = SORULAR[dId];
    if (!q) { alert('Bu ders için soru bankası boş.'); return; }
    var hepsi = [];
    for (var k in q) { (q[k] || []).forEach(function(item, bi) { hepsi.push({ item: item, bi: Number(k) }); }); }
    var pool = hepsi;
    if (seviye === 'kolay') pool = hepsi.filter(function(x) { return x.item.z === 1; });
    else if (seviye === 'orta') pool = hepsi.filter(function(x) { return x.item.z <= 2; });
    if (!pool.length) pool = hepsi;
    karistir(pool);
    soru = pool.slice(0, adet).map(function(x) { return { tip: 'sec', metin: x.item.s, o: x.item.o, d: x.item.d, dersId: dId, bi: x.bi }; });
  }
  durum.pratik = { soru: soru, idx: 0, dogru: 0, yanlis: 0, seri: 0, enIyi: 0, dersId: (mod === 'aritmetik' ? null : (dersId || mod)), puan: {}, yanlisList: [], hak: true, zamanli: !!ay.zamanli };
  pratikCiz();
}
function pratikTumDers() {
  var sinif = seciliSinif() || '6';
  var info = MUFREDAT[sinif]; if (!info) { alert('Önce sınıfını seç.'); return; }
  var ay = durum.pratikAy || { adet: 10, seviye: 'orta' };
  var hepsi = [];
  info.dersler.forEach(function(d) {
    var q = SORULAR[d.id]; if (!q) return;
    for (var k in q) { (q[k] || []).forEach(function(item, bi) { hepsi.push({ tip: 'sec', metin: item.s, o: item.o, d: item.d, dersId: d.id, bi: bi, z: item.z }); }); }
  });
  if (ay.seviye === 'kolay') hepsi = hepsi.filter(function(x) { return x.z === 1; });
  else if (ay.seviye === 'orta') hepsi = hepsi.filter(function(x) { return x.z <= 2; });
  if (!hepsi.length) { alert('Soru bankasında soru bulunamadı.'); return; }
  karistir(hepsi);
  var soru = hepsi.slice(0, ay.adet).map(function(x) { return { tip: 'sec', metin: x.metin, o: x.o, d: x.d, dersId: x.dersId, bi: x.bi }; });
  durum.pratik = { soru: soru, idx: 0, dogru: 0, yanlis: 0, seri: 0, enIyi: 0, dersId: null, puan: {}, yanlisList: [], hak: false, zamanli: !!ay.zamanli };
  pratikCiz();
}
function pratikDersSec(dersId) {
  var d = dersBul(seciliSinif(), dersId); if (!d) return;
  var h = '<button class="geri" onclick="cizPratik()">⬅ Pratik</button>';
  h += '<div class="baslik"><h1>📚 ' + esc(d.ad) + '</h1><p>Bir konu seç, sadece o konudan soru çöz.</p></div>';
  h += '<div class="konu-listesi"><button class="kucuk-buton" style="background:#9b59b6" onclick="pratikModSec(\'' + dersId + '\')">🔀 Tüm Konular (Karışık)</button> ';
  d.birimler.forEach(function(b, i) {
    var n = (SORULAR[dersId] && SORULAR[dersId][i]) ? SORULAR[dersId][i].length : 0;
    if (n) h += '<button class="kucuk-buton" style="background:#6a5cff" onclick="pratikKonuModSec(\'' + dersId + '\',' + i + ')">' + esc(b.ad) + ' (' + n + ')</button> ';
  });
  h += '</div>';
  ekran.innerHTML = h;
}
function pratikKonuModSec(dersId, bi) {
  var q = SORULAR[dersId]; if (!q || !q[bi]) { alert('Bu konuda soru yok.'); return; }
  var ay = durum.pratikAy || { adet: 10, seviye: 'orta' };
  var liste = (q[bi] || []).map(function(item) { return { tip: 'sec', metin: item.s, o: item.o, d: item.d, dersId: dersId, bi: bi }; });
  karistir(liste);
  var soru = liste.slice(0, Math.min(ay.adet, liste.length));
  durum.pratik = { soru: soru, idx: 0, dogru: 0, yanlis: 0, seri: 0, enIyi: 0, dersId: dersId, puan: {}, yanlisList: [], hak: true, zamanli: !!ay.zamanli };
  pratikCiz();
}
function pratikSesOku() {
  if (!window.speechSynthesis) { alert('Tarayıcı sesli okumayı desteklemiyor.'); return; }
  var p = durum.pratik; if (!p) return;
  var s = p.soru[p.idx]; if (!s) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(s.metin);
  u.lang = 'tr-TR';
  var sesler = window.speechSynthesis.getVoices();
  for (var v = 0; v < sesler.length; v++) { if ((sesler[v].lang || '').indexOf('tr') === 0) { u.voice = sesler[v]; break; } }
  window.speechSynthesis.speak(u);
}
function pratikUret(tur, n, seviye) {
  var s = []; seviye = seviye || 'orta';
  var tipler = (seviye === 'kolay') ? ['top', 'carp'] : (seviye === 'zor') ? ['top', 'carp', 'bol', 'kesir', 'yuzde', 'olcu'] : ['top', 'carp', 'bol'];
  for (var k = 0; k < n; k++) {
    var t = (tur === 'karisik') ? tipler[Math.floor(Math.random() * tipler.length)] : tur;
    s.push(pratikSoru(t));
  }
  return s;
}
function pratikSoru(t) {
  var a, b, cevap, metin;
  if (t === 'top') { a = 10 + Math.floor(Math.random() * 89); b = 10 + Math.floor(Math.random() * 89); cevap = a + b; metin = a + ' + ' + b + ' = ?'; }
  else if (t === 'carp') { a = 2 + Math.floor(Math.random() * 11); b = 2 + Math.floor(Math.random() * 11); cevap = a * b; metin = a + ' × ' + b + ' = ?'; }
  else if (t === 'bol') { b = 2 + Math.floor(Math.random() * 11); cevap = 2 + Math.floor(Math.random() * 11); a = b * cevap; metin = a + ' ÷ ' + b + ' = ?'; }
  else if (t === 'kesir') { a = 1 + Math.floor(Math.random() * 5); b = 1 + Math.floor(Math.random() * 5); cevap = +(a / b).toFixed(2); metin = a + '/' + b + ' = ? (ondalık)'; }
  else if (t === 'yuzde') { a = 10 * (1 + Math.floor(Math.random() * 19)); b = 10 * (1 + Math.floor(Math.random() * 9)); cevap = a * b / 100; metin = a + ' sayısının %' + b + '\'si = ?'; }
  else { var km = 10 * (1 + Math.floor(Math.random() * 9)); cevap = km * 1000; metin = km + ' km = ? m'; }
  return { metin: metin, cevap: cevap };
}
function pratikCiz() {
  if (durum.pratikTimer) { clearInterval(durum.pratikTimer); durum.pratikTimer = null; }
  var p = durum.pratik; if (!p) { cizPratik(); return; }
  if (p.idx >= p.soru.length) {
    var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
    h += '<div class="baslik"><h1>✅ Pratik Bitti</h1></div>';
    h += '<div class="duel-skor">Doğru: ' + p.dogru + ' / ' + p.soru.length + '</div>';
    h += '<div class="duel-skor">Başarı: %' + (p.soru.length ? Math.round(p.dogru / p.soru.length * 100) : 0) + '</div>';
    h += '<div class="duel-skor">En iyi seri: ' + p.enIyi + '</div>';
    if (p.dersId && p.hak) { var dN = p.dersId; try { var dd = dersBul(seciliSinif(), p.dersId); if (dd) dN = dd.ad; } catch (e) {} h += '<div class="kucuk-not" style="text-align:center">Sonuçların <b>' + esc(dN) + '</b> hakimiyetine işlendi. 📊</div>'; }
    h += '<div class="unit-butonlar">';
    if (p.yanlisList.length) h += '<button class="kucuk-buton" style="background:#e67e22" onclick="pratikYanlisTekrar()">🔁 Yanlışları Tekrar (' + p.yanlisList.length + ')</button> ';
    h += '<button class="kucuk-buton" style="background:#2ecc71" onclick="cizPratik()">🔄 Yeni Tur</button> <button class="kucuk-buton" style="background:#6a5cff" onclick="git(\'menu\')">Bitir</button></div>';
    ekran.innerHTML = h; return;
  }
  var s = p.soru[p.idx];
  var sureHtml = p.zamanli ? ' · ⏱️ <span id="pratikSure"></span>' : '';
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🧮 Pratik</h1><p>Soru ' + (p.idx + 1) + '/' + p.soru.length + ' · Seri: ' + p.seri + sureHtml + '</p></div>';
  h += '<div class="duel-soru"><div class="qs">' + esc(s.metin) + '</div>';
  h += '<div class="duel-cek" style="grid-template-columns:1fr;margin-top:8px"><button class="kucuk-buton" style="background:#8e44ad" onclick="pratikSesOku()">🔊 Sesli Oku</button></div>';
  if (s.tip === 'sayi') {
    h += '<div class="puzzle-giris"><input id="pratikCev" type="number" inputmode="decimal" placeholder="Cevap" onkeydown="if(event.key===\'Enter\')pratikKontrol()"></div>';
    h += '<div class="duel-cek" style="grid-template-columns:1fr"><button onclick="pratikKontrol()">Kontrol Et</button></div>';
  } else {
    h += '<div class="duel-cek">';
    s.o.forEach(function(op, oi) { h += '<button onclick="pratikSec(' + oi + ')">' + esc(op) + '</button>'; });
    h += '</div>';
  }
  h += '</div>';
  ekran.innerHTML = h;
  var el = document.getElementById('pratikCev'); if (el) el.focus();
  if (p.zamanli) {
    var bitis = Date.now() + 20000;
    durum.pratikTimer = setInterval(function() {
      var kalan = Math.max(0, Math.round((bitis - Date.now()) / 1000));
      var t = document.getElementById('pratikSure'); if (t) t.textContent = kalan + 'sn';
      if (kalan <= 0) {
        clearInterval(durum.pratikTimer); durum.pratikTimer = null;
        var cur = p.soru[p.idx];
        pratikSonuc(false, cur.tip === 'sec' ? cur.o[cur.d] : cur.cevap);
      }
    }, 500);
  }
}
function pratikKontrol() {
  var p = durum.pratik; if (!p) return;
  var s = p.soru[p.idx];
  if (s.tip !== 'sayi') return;
  var el = document.getElementById('pratikCev');
  if (!el) return;
  var val = parseFloat(String(el.value).replace(',', '.'));
  if (isNaN(val)) { alert('Bir sayı gir.'); return; }
  pratikSonuc(Math.abs(val - s.cevap) < 0.01, s.cevap);
}
function pratikSec(oi) {
  var p = durum.pratik; if (!p) return;
  var s = p.soru[p.idx];
  if (s.tip !== 'sec') return;
  pratikSonuc(oi === s.d, s.o[s.d]);
}
function pratikSonuc(dogruMu, dogruCevap) {
  var p = durum.pratik; if (!p) return;
  var item = p.soru[p.idx];
  if (dogruMu) { p.dogru++; p.seri++; if (p.seri > p.enIyi) p.enIyi = p.seri; xpEkle(2); }
  else {
    p.yanlis++; p.seri = 0; p.yanlisList.push(item);
    if (item && item.dersId && item.bi !== undefined) {
      var tr = oku('tekrar') || {};
      tr[item.dersId + '-' + item.bi] = { t: new Date().toLocaleDateString('tr-TR'), ok: true, kutu: 1, sira: Date.now() + 86400000 };
      kaydet('tekrar', tr);
    }
  }
  var ist = oku('pratikIstat') || { d: 0, y: 0, enIyi: 0 };
  ist.d += dogruMu ? 1 : 0; ist.y += dogruMu ? 0 : 1;
  if (p.enIyi > ist.enIyi) ist.enIyi = p.enIyi;
  kaydet('pratikIstat', ist);
  if (dogruMu && item && item.ana) {
    var yh = oku('yanlis') || [];
    yh = yh.filter(function(e) { return e.ana !== item.ana; });
    kaydet('yanlis', yh);
  }
  var pg2 = oku('pratikGun') || {};
  pg2[gunKod(new Date())] = 1;
  kaydet('pratikGun', pg2);
  if (p.hak && p.dersId && item && item.bi !== undefined) {
    var bi = item.bi;
    if (!p.puan[bi]) p.puan[bi] = { d: 0, n: 0 };
    p.puan[bi].d += dogruMu ? 1 : 0; p.puan[bi].n += 1;
  }
  alert(dogruMu ? 'Doğru! 🎉 (+2 XP)' : 'Yanlış. Doğru cevap: ' + dogruCevap);
  p.idx++;
  if (p.idx >= p.soru.length && p.dersId && p.hak) {
    for (var bk in p.puan) { if (p.puan.hasOwnProperty(bk)) puanKaydet(p.dersId, p.puan[bk].d, p.puan[bk].n, bk); }
    var bonus = Math.round(p.dogru * 1.5);
    if (bonus > 0) xpEkle(bonus);
    rozetKontrol();
  }
  pratikCiz();
}
function pratikYanlisTekrar() {
  var p = durum.pratik; if (!p || !p.yanlisList.length) return;
  var liste = karistir(p.yanlisList.slice());
  durum.pratik = { soru: liste, idx: 0, dogru: 0, yanlis: 0, seri: 0, enIyi: 0, dersId: p.dersId, puan: {}, yanlisList: [], hak: false, zamanli: false };
  pratikCiz();
}

function cizHakimiyet() {
  var sinif = seciliSinif() || '6';
  var info = MUFREDAT[sinif];
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>📊 Hakimiyetim</h1><p>' + sinif + '. sınıf genel hakimiyet durumun.</p></div>';
  if (!info) { h += '<div class="skor-liste">Önce <b>Profilim</b>’den sınıfını seç.</div>'; ekran.innerHTML = h; return; }
  var toplam = 0, adet = 0, enIyiD = '', enKotuD = '', enIyiV = -1, enKotuV = 101;
  info.dersler.forEach(function(d) {
    var top = 0, n = 0;
    d.birimler.forEach(function(b, i) { var hh = hakimiyet(d.id, i); if (hh !== null) { top += hh; n++; } });
    var ort = n ? Math.round(top / n) : 0;
    toplam += top; adet += n;
    if (ort > enIyiV) { enIyiV = ort; enIyiD = d.ad; }
    if (ort < enKotuV) { enKotuV = ort; enKotuD = d.ad; }
    h += '<div class="hak-satir"><div class="hak-ad">' + d.ad + '</div><div class="hak-bar"><div class="hak-dolgu" style="width:' + ort + '%"></div></div><div class="hak-yuzde">' + ort + '%</div></div>';
  });
  var genel = adet ? Math.round(toplam / adet) : 0;
  h += '<div class="hak-ozet">Genel hakimiyet: <b>' + genel + '%</b></div>';
  h += '<div class="hak-ozet">En güçlü ders: <b>' + (enIyiD || '-') + ' (' + (enIyiV < 0 ? 0 : enIyiV) + '%)</b></div>';
  h += '<div class="hak-ozet">Geliştirilmesi gereken: <b>' + (enKotuD || '-') + ' (' + (enKotuV > 100 ? 0 : enKotuV) + '%)</b></div>';
  h += xpGrafikHTML();
  ekran.innerHTML = h;
}

/* ====== MEB GÜNCELLEME KONTROL ====== */
var mebDurumCache = null;
var MEB_API_URL = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? '/api/meb-kontrol' : './meb-guncelleme.json';
var MEB_STATIK = (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1');
function mebGuvenceJson(r) {
  if (!r) return { durum: 'hata', hata: 'API yanıtı yok' };
  var ct = (r.headers.get && r.headers.get('Content-Type')) || '';
  if (ct && ct.indexOf('application/json') === -1) {
    return { durum: 'yok', kontrolTarihi: new Date().toISOString(), yeniProgramlar: [], mebProgramSayisi: 0, kaynak: 'yok' };
  }
  return r.json().catch(function () {
    return { durum: 'yok', kontrolTarihi: new Date().toISOString(), yeniProgramlar: [], mebProgramSayisi: 0, kaynak: 'yok' };
  });
}
function mebBannerHTML() {
  if (!mebDurumCache || mebDurumCache.durum !== 'var' || !mebDurumCache.yeniProgramlar || !mebDurumCache.yeniProgramlar.length) return '';
  var adet = mebDurumCache.yeniProgramlar.length;
  var isimler = mebDurumCache.yeniProgramlar.slice(0, 5).map(function(p) { return p.ad; }).join(', ');
  if (adet > 5) isimler += ' ve +' + (adet - 5) + ' tane daha';
  return '<div class="meb-banner" style="background:linear-gradient(135deg,#3498db,#2ecc71);color:#fff;border-radius:12px;padding:14px 18px;margin-bottom:16px;cursor:pointer" onclick="mebGuncelle()">'
    + '<b>🔄 MEB Program Güncellemesi!</b><br>'
    + '<small>' + adet + ' yeni TYMM programı bulundu: ' + esc(isimler) + '</small><br>'
    + '<small style="opacity:.85">Tıkla ve güncelle • Kontrol: ' + (mebDurumCache.kontrolTarihi ? new Date(mebDurumCache.kontrolTarihi).toLocaleString('tr-TR') : '-') + '</small>'
    + '</div>';
}
function mebKontrolEt(cb) {
  var onceki = oku('mebDurum');
  if (onceki && onceki.durum) { mebDurumCache = onceki; }
  fetch(MEB_API_URL).then(mebGuvenceJson).then(function(d) {
    mebDurumCache = d; kaydet('mebDurum', d); if (cb) cb(d);
  }).catch(function() { if (cb) cb(null); });
}
function mebGuncelle() {
  if (!mebDurumCache || mebDurumCache.durum !== 'var') return alert('Güncelleme bulunamadı.');
  var liste = mebDurumCache.yeniProgramlar.map(function(p) { return p.pid + ' - ' + p.ad; }).join('\n');
  alert('MEB\'de ' + mebDurumCache.yeniProgramlar.length + ' yeni program bulundu:\n\n' + liste + '\n\nYeniden kontrol etmek için Menüden "MEB Program Kontrolü" butonuna bas.');
  mebKontrolEtManuel();
}
function mebKontrolEtManuel() {
  var banner = $('meb-kontrol-yukleniyor');
  if (banner) banner.innerHTML = '<small>Kontrol ediliyor...</small>';
  fetch(MEB_API_URL).then(mebGuvenceJson).then(function(d) {
    mebDurumCache = d; kaydet('mebDurum', d);
    if (d.durum === 'var') {
      alert('MEB\'de ' + d.yeniProgramlar.length + ' yeni TYMM programı bulundu!\n\n'
        + d.yeniProgramlar.map(function(p) { return '• PID=' + p.pid + ' ' + p.ad; }).join('\n')
        + '\n\nTüm programlar mevcut: ' + d.mebProgramSayisi);
    } else if (d.durum === 'hata') {
      alert('Kontrol sırasında hata: ' + (d.hata || 'Bilinmiyor'));
    } else if (d.kaynak === 'yok') {
      alert(MEB_STATIK
        ? 'MEB kontrol verisi bulunamadı. GitHub sayfası en son yayında otomatik kontrol edildi; site yeniden yayınlanınca güncellenir.'
        : 'MEB kontrolü geçici olarak yapılamadı. Yerel sunucu ile çalıştırırsan yeniden denenebilir.');
    } else {
      var _not = MEB_STATIK ? '\n(Bu GitHub sayfası; veri site yayınlanınca otomatik kontrol edilir)' : '';
      alert('Güncelleme yok! Tüm TYMM programları mevcut.\nToplam program: ' + d.mebProgramSayisi + _not);
    }
    render();
  }).catch(function(e) { alert('Kontrol hatası: ' + e.message); });
}

/* BAŞLANGIÇ */
veriEkUygula();
profilUygula();
bildirimKur();
mebKontrolEt();
var lDurum = (typeof lisans_ !== 'undefined') ? lisans_.durum() : { tip: 'lisansli' };
if (typeof lisans_ !== 'undefined' && lDurum.tip === 'bitti') {
  durum.tur = 'lisans'; tabGuncelle(); render();
} else if (profilOku().sinif) { git('menu'); } else { durum.tur = 'sinifSec'; tabGuncelle(); render(); }

if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (profilOku().gece === 'system') profilUygula(); });
}

/* ============================================================
   SUPABASE — CANLI SINIF YÖNETİMİ (Öğretmen) + ÖĞRENCİ BAĞLANTISI
   Bağımlılık: supa.js (kutuSUPA)
   ============================================================ */
function supaDeger(anahtarKey) {
  try { return localStorage.getItem('dersApp_' + anahtarKey) || ''; } catch (e) { return ''; }
}
function supaKaydet(anahtarKey, deger) {
  try { localStorage.setItem('dersApp_' + anahtarKey, deger); } catch (e) {}
}
function supaJsonOku(anahtarKey) {
  try { var v = localStorage.getItem('dersApp_' + anahtarKey); return v ? JSON.parse(v) : null; } catch (e) { return null; }
}
function supaJsonYaz(anahtarKey, obje) {
  try { localStorage.setItem('dersApp_' + anahtarKey, JSON.stringify(obje)); } catch (e) {}
}

function supaHazir() { return typeof kutuSUPA !== 'undefined' && kutuSUPA.hazirMi(); }
function supaMesaj(metin, renk) {
  var el = document.getElementById('supaMesaj');
  if (!el) { alert(metin); return; }
  el.innerHTML = metin;
  el.style.display = 'block';
  el.style.background = renk === 'kirmizi' ? '#ffe3e3' : (renk === 'yesil' ? '#e3ffe9' : '#e3eaff');
  el.style.color = '#1c2541';
}

/* ---- ÖĞRETMEN: Sınıf Yönetimi ekranı ---- */
function sinifGiris() { git('sinifYonet'); }
function cizSinifYonet() {
  var h = '<button class="geri" onclick="git(\'ogr\')">⬅ Öğretmen Paneli</button>';
  h += '<div class="baslik"><h1>🟢 Canlı Sınıf Yönetimi</h1><p>Sınıf kodunu gir; öğrencilerini listele, notlarını yaz, öğrenci verilerini gör.</p></div>';
  if (!supaHazir()) {
    h += '<div class="ozet-karti" style="color:#e05656">⚠️ Supabase yapılandırılmamış.<br><small>supa-config.js içindeki SUPA_URL ve SUPA_KEY alanlarını doldurun.</small></div>';
    ekran.innerHTML = h; return;
  }
  var kod = supaDeger('supaSinifKod');
  h += '<div class="ozet-karti" style="margin-bottom:12px">'
    + '<label><b>📋 Sınıf Kodu</b></label><br>'
    + '<input id="supaKod" type="text" value="' + esc(kod) + '" placeholder="örn: 6A-KTGP" style="width:100%;padding:8px;margin:6px 0;border:1px solid #ccc;border-radius:8px">'
    + '<button class="kucuk-buton" style="background:#6a5cff;margin-top:4px" onclick="supaYukleSinif()">📥 Sınıfı Yükle</button> '
    + '<button class="kucuk-buton" style="background:#e67e22;margin-top:4px" onclick="supaYeniSinif()">➕ Yeni Sınıf Aç</button>'
    + '</div>';
  h += '<div id="supaMesaj" style="display:none;border-radius:8px;padding:10px;margin-bottom:12px"></div>';
  h += '<div id="supaOgrenciler"><div class="kucuk-not">Sınıf kodunu girip "Sınıfı Yükle"ye basın.</div></div>';
  ekran.innerHTML = h;
}

function supaKodAl() {
  var el = document.getElementById('supaKod');
  var kod = el ? el.value.trim() : '';
  return kod.toUpperCase();
}
function supaYeniSinif() {
  var kod = supaKodAl();
  if (!kod) { supaMesaj('Önce bir sınıf kodu girin (örn. 6A-KTGP).', 'kirmizi'); return; }
  var ad = prompt('Sınıf adı (örn. 6-A):', '');
  var okul = prompt('Okul adı:', '');
  var sinif = prompt('Sınıf düzeyi (5/6/7/8):', '');
  var ogr = prompt('Öğretmen adı:', (profilOku().ad || ''));
  kutuSUPA.sinifOlustur(kod, ad || kod, okul, sinif, ogr)
    .then(function () { supaKaydet('supaSinifKod', kod); supaMesaj('✅ Sınıf açıldı: ' + kod, 'yesil'); supaYukleSinif(); })
    .catch(function (e) { supaMesaj('Hata: ' + e.message, 'kirmizi'); });
}
function supaYukleSinif() {
  var kod = supaKodAl();
  if (!kod) { supaMesaj('Sınıf kodu gir.', 'kirmizi'); return; }
  supaKaydet('supaSinifKod', kod);
  kutuSUPA.sinifGetir(kod).then(function (snf) {
    if (!snf) { supaMesaj('Bu kodla kayıtlı sınıf yok. Bilgilerinizle yeni sınıf açın.', 'kirmizi');
      document.getElementById('supaOgrenciler').innerHTML = '<div class="kucuk-not">Sınıf bulunamadı.</div>'; return; }
    kutuSUPA.ogrenciListele(kod).then(function (ogrler) {
      var h = '<div class="baslik" style="margin-top:4px"><h2>👥 ' + esc(snf.ad || kod) + ' — ' + (ogrler ? ogrler.length : 0) + ' öğrenci</h2></div>';
      h += '<div class="unit-butonlar" style="margin-bottom:10px">'
        + '<button class="kucuk-buton" style="background:#1f8a70" onclick="supaOgrenciEkle()">➕ Öğrenci Ekle</button>'
        + '<button class="kucuk-buton" style="background:#6a5cff" onclick="supaOgrenciKoduYazdir()">🖨️ Etkinleştirme Kodlarını Göster</button>'
        + '</div>';
      if (!ogrler || !ogrler.length) { h += '<div class="kucuk-not">Henüz öğrenci yok. "Öğrenci Ekle" ile ekleyin.</div>'; }
      else {
        ogrler.forEach(function(o) {
          h += '<div style="background:#fff;border:1px solid #dfe4f5;border-radius:10px;padding:10px;margin-bottom:8px">'
            + '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
            + '<b style="flex:1">' + esc(o.adsoyad) + '</b>'
            + '<small style="color:#888">No: ' + esc(o.no || '—') + '</small>'
            + '<button class="kucuk-buton" style="background:#6a5cff" onclick="supaNotGoster(' + o.id + ',\'' + encodeURIComponent(esc(o.adsoyad)) + '\')">📝 Notlar</button>'
            + '<button class="kucuk-buton" style="background:#2ecc71" onclick="supaVeriGoster(' + o.id + ')">📊 Veri</button>'
            + '<button class="kucuk-buton" style="background:#e05656" onclick="supaOgrenciSil(' + o.id + ')">🗑️</button>'
            + '</div>'
            + '<div style="margin-top:6px;font-size:11px;color:#888">Etkinleştirme kodu: <code>' + esc(o.etkinlesme) + '</code></div>'
            + '</div>';
        });
      }
      var el = document.getElementById('supaOgrenciler');
      if (el) el.innerHTML = h;
    });
  }).catch(function (e) { supaMesaj('Hata: ' + e.message, 'kirmizi'); });
}
function supaOgrenciEkle() {
  var kod = supaDeger('supaSinifKod');
  if (!kod) { supaMesaj('Önce sınıf kodu gir.', 'kirmizi'); return; }
  var ad = prompt('Öğrenci adı soyadı:', '');
  if (!ad) return;
  var no = prompt('Öğrenci numarası:', '');
  var etkin = prompt('Etkinleştirme kodu (öğrenciye vereceksiniz, tekil):', sifreUret(8));
  kutuSUPA.ogrenciEkle(kod, no, ad, etkin)
    .then(function () { supaMesaj('✅ Öğrenci eklendi. Etkinleştirme kodu: ' + etkin, 'yesil'); supaYukleSinif(); })
    .catch(function (e) { supaMesaj('Hata: ' + e.message, 'kirmizi'); });
}
function supaOgrenciSil(id) {
  if (!confirm('Bu öğrenciyi ve tüm verilerini silsin mi?')) return;
  kutuSUPA.ogrenciSil(id).then(function () { supaYukleSinif(); });
}
function sifreUret(uzunluk) {
  var set = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  var s = '';
  for (var i = 0; i < (uzunluk || 8); i++) s += set.charAt(Math.floor(Math.random() * set.length));
  return s;
}
function supaOgrenciKoduYazdir() {
  var kod = supaDeger('supaSinifKod');
  if (!kod) { supaMesaj('Önce sınıf yükle.', 'kirmizi'); return; }
  kutuSUPA.ogrenciListele(kod).then(function (ogrler) {
    var h = '<button class="geri" onclick="git(\'sinifYonet\')">⬅ Geri</button>';
    h += '<div class="baslik"><h1>🖨️ Etkinleştirme Kodları</h1><p>Her öğrenciye kendi kodunu iletin. Öğrenci, uygulamadan "Sınıfa Bağlan" ile bu kodu girince sınıfına bağlanır.</p></div>';
    h += '<div class="ozet-karti" style="white-space:pre-wrap;font-size:14px">';
    if (ogrler && ogrler.length) ogrler.forEach(function(o, i) { h += (i + 1) + '. ' + esc(o.adsoyad) + ' → <b>' + esc(o.etkinlesme) + '</b>' + (o.no ? ' (No: ' + esc(o.no) + ')' : '') + '\n'; });
    else h += 'Öğrenci yok.';
    h += '</div>';
    var el = document.getElementById('supaOgrenciler');
    if (el) el.innerHTML = h; else { var ana = document.getElementById('supaMesaj'); if (ana) { ana.style.display = 'none'; } ekran.innerHTML = h; }
  });
}

/* ---- ÖĞRETMEN: Not yaz/gör ---- */
function supaNotGoster(id, adEnc) {
  var ad = decodeURIComponent(adEnc);
  kutuSUPA.notListele(id).then(function (notlar) {
    var h = '<button class="geri" onclick="git(\'sinifYonet\')">⬅ Sınıf</button>';
    h += '<div class="baslik"><h1>📝 Notlar — ' + esc(ad) + '</h1></div>';
    h += '<div id="supaNotYeni" class="ozet-karti">'
      + '<b>Not ekle:</b><br>'
      + '<select id="supaDers"><option value="">Ders seçin</option>';
    var sk = seciliSinif();
    if (sk && MUFREDAT[sk]) MUFREDAT[sk].dersler.forEach(function(d) { h += '<option value="' + esc(d.ad) + '">' + esc(d.ad) + '</option>'; });
    h += '</select> '
        + '<input id="supaNotMetni" type="text" placeholder="Not / değerlendirme" style="padding:8px;border:1px solid #ccc;border-radius:8px;margin:4px 0;width:100%">'
        + '<button class="kucuk-buton" style="background:#1f8a70" onclick="supaNotEkle(' + id + ')">💾 Kaydet</button>'
        + '</div>';
    h += '<div class="baslik"><h2>Karne Notları</h2></div>';
    if (!notlar || !notlar.length) h += '<div class="kucuk-not">Henüz not yok.</div>';
    else notlar.forEach(function(n) {
      h += '<div class="ozet-karti" style="margin-bottom:6px">'
        + '<b>' + esc(n.ders || 'Ders') + '</b>: ' + esc(n.not_) + '<br>'
        + '<small style="color:#888">' + (n.tarih ? new Date(n.tarih).toLocaleString('tr-TR') : '') + '</small> '
        + '<button class="kucuk-buton" style="background:#e05656" onclick="supaNotSil(' + n.id + ',' + id + ')">Sil</button>'
        + '</div>';
    });
    ekran.innerHTML = h;
  }).catch(function (e) { alert('Hata: ' + e.message); });
}
function supaNotEkle(ogrenciId) {
  var ders = document.getElementById('supaDers');
  var metin = document.getElementById('supaNotMetni');
  if (!ders || !metin || !ders.value || !metin.value.trim()) { alert('Ders ve not girin.'); return; }
  kutuSUPA.notEkle(ogrenciId, ders.value, metin.value.trim())
    .then(function () { supaNotGoster(ogrenciId, ''); cizSinifYonet(); })
    .catch(function (e) { alert('Hata: ' + e.message); });
}
function supaNotSil(notId, ogrenciId) {
  kutuSUPA.notSil(notId).then(function () { supaNotGoster(ogrenciId, ''); });
}

/* ---- ÖĞRETMEN: Öğrenci çalışma verisi ---- */
function supaVeriGoster(ogrenciId) {
  var alanlar = ['profil', 'puan', 'istatistik', 'aktivite', 'xp', 'odul', 'yanlis', 'tekrar', 'pomo', 'notlar', 'gorevler'];
  Promise.all(alanlar.map(function (a) { return kutuSUPA.veriGetir(ogrenciId, a).then(function (v) { return { alan: a, veri: v }; }); }))
    .then(function (sonuc) {
      var h = '<button class="geri" onclick="git(\'sinifYonet\')">⬅ Sınıf</button>';
      h += '<div class="baslik"><h1>📊 Öğrenci Çalışma Verisi</h1><p>Öğrencinin cihazından senkron edilen veriler.</p></div>';
      h += '<div id="supaMesaj" style="display:none;border-radius:8px;padding:10px;margin-bottom:12px"></div>';
      sonuc.forEach(function (s) {
        h += '<div class="baslik" style="margin-top:8px"><h2>' + esc(s.alan) + '</h2></div>';
        h += '<div class="ozet-karti" style="word-break:break-word"><small>' + (s.veri ? esc(JSON.stringify(s.veri)).slice(0, 400) : '(veri yok)') + '</small></div>';
      });
      ekran.innerHTML = h;
    }).catch(function (e) { alert('Hata: ' + e.message); });
}

/* ---- ÖĞRENCİ: Sınıfa bağlanma ekranı ---- */
function cizSbaglan() {
  var h = '<button class="geri" onclick="git(\'menu\')">⬅ Anasayfa</button>';
  h += '<div class="baslik"><h1>🔗 Sınıfa Bağlan</h1><p>Öğretmeninin verdiği <b>etkinleştirme kodunu</b> gir; sınıfına bağlan, çalışma verini öğretmeninle paylaş ve notlarını gör.</p></div>';
  if (!supaHazir()) {
    h += '<div class="ozet-karti" style="color:#e05656">⚠️ Canlı senkron için Supabase yapılandırması gerekli.</div>';
    ekran.innerHTML = h; return;
  }
  var bagli = supaJsonOku('supaBagli');
  if (bagli && bagli.id) {
    h += '<div class="ozet-karti" style="background:#e3ffe9;border-color:#1f8a70">✅ Bu cihaz <b>' + esc(bagli.adsoyad) + '</b> olarak sınıfa bağlı.<br>'
      + '<button class="kucuk-buton" style="background:#1f8a70" onclick="supaSenkronGonder()">⬆️ Verilerimi Öğretmene Gönder</button> '
      + '<button class="kucuk-buton" style="background:#6a5cff" onclick="supaNotlarimGoster()">📝 Notlarımı Gör</button> '
      + '<button class="kucuk-buton" style="background:#e05656" onclick="supaBaglantiKopar()">Çık</button>'
      + '</div>';
  }
  h += '<div class="ozet-karti">'
    + '<input id="supaKod2" type="text" placeholder="Etkinleştirme kodu" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:8px;margin:4px 0">'
    + '<button class="kucuk-buton" style="background:#6a5cff" onclick="supaBaglan()">🔗 Etkinleştir ve Bağlan</button>'
    + '</div>';
  h += '<div id="supaMesaj" style="display:none;border-radius:8px;padding:10px;margin-bottom:12px"></div>';
  ekran.innerHTML = h;
}
function supaBaglan() {
  var el = document.getElementById('supaKod2');
  var kod = el ? el.value.trim().toUpperCase() : '';
  if (!kod) { supaMesaj('Etkinleştirme kodu gir.', 'kirmizi'); return; }
  kutuSUPA.ogrencietkinlesme(kod).then(function (ogr) {
    if (!ogr) { supaMesaj('Bu kodla öğrenci bulunamadı. Kodun doğru olduğundan emin ol.', 'kirmizi'); return; }
    kutuSUPA.sinifGetir(ogr.kod).then(function (snf) {
      supaJsonYaz('supaBagli', { id: ogr.id, no: ogr.no, adsoyad: ogr.adsoyad, kod: ogr.kod, sinifAd: (snf && snf.ad) || ogr.kod });
      supaMesaj('✅ Sınıfa bağlandın: ' + (snf && snf.ad ? snf.ad : ogr.kod), 'yesil');
      cizSbaglan();
    });
  }).catch(function (e) { supaMesaj('Hata: ' + e.message, 'kirmizi'); });
}
function supaBaglantiKopar() {
  try { localStorage.removeItem('dersApp_supaBagli'); } catch (e) {}
  cizSbaglan();
}

/* ---- ÖĞRENCİ: Veriyi öğretmene gönder ---- */
function supaSenkronGonder() {
  var bagli = supaJsonOku('supaBagli');
  if (!bagli || !bagli.id) { alert('Önce sınıfa bağlan.'); return; }
  var alanlar = ['profil', 'puan', 'istatistik', 'aktivite', 'xp', 'odul', 'yanlis', 'tekrar', 'pomo', 'notlar', 'gorevler'];
  var oncekiSeri = Promise.resolve();
  var islenen = 0;
  alanlar.forEach(function (a) {
    var veri;
    try { veri = JSON.parse(localStorage.getItem('dersApp_' + a)); } catch (e) { veri = null; }
    if (veri === null || veri === undefined) return;
    oncekiSeri = oncekiSeri.then(function () { return kutuSUPA.veriGonder(bagli.id, a, veri); });
    islenen++;
  });
  oncekiSeri.then(function () { alert('✅ ' + islenen + ' alan gönderildi.'); })
    .catch(function (e) { alert('Hata: ' + e.message); });
}
function supaNotlarimGoster() {
  var bagli = supaJsonOku('supaBagli');
  if (!bagli || !bagli.id) { alert('Önce sınıfa bağlan.'); return; }
  kutuSUPA.notListele(bagli.id).then(function (notlar) {
    var h = '<button class="geri" onclick="git(\'sbaglan\')">⬅ Geri</button>';
    h += '<div class="baslik"><h1>📝 Notlarım</h1><p>Öğretmeninin yazdığı karne notları.</p></div>';
    if (!notlar || !notlar.length) h += '<div class="kucuk-not">Henüz not yok.</div>';
    else notlar.forEach(function (n) {
      h += '<div class="ozet-karti" style="margin-bottom:6px"><b>' + esc(n.ders || 'Ders') + '</b>: ' + esc(n.not_) + '<br><small style="color:#888">' + (n.tarih ? new Date(n.tarih).toLocaleString('tr-TR') : '') + '</small></div>';
    });
    ekran.innerHTML = h;
  }).catch(function (e) { alert('Hata: ' + e.message); });
}

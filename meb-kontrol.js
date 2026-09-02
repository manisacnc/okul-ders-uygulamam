const https = require('https'), http = require('http'), fs = require('fs'), path = require('path');
const DOSYA = path.join(__dirname, 'meb-guncelleme.json');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

function get(url) {
  return new Promise((res, rej) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': UA } }, r => {
      let d = ''; r.on('data', c => d += c); r.on('end', () => res(d));
    }).on('error', rej);
  });
}
function getPDF(url, out) {
  return new Promise((res, rej) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': UA } }, r => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
        return getPDF(r.headers.location, out).then(res).catch(rej);
      }
      const chunks = []; r.on('data', c => chunks.push(c));
      r.on('end', () => { fs.writeFileSync(out, Buffer.concat(chunks)); res(out); });
    }).on('error', rej);
  });
}

// TYMM sayfalarından program listesini çek
async function mebProgramListesi() {
  const html = await get('https://mufredat.meb.gov.tr/Programlar.aspx');
  const re = /href="(ProgramDetay\.aspx\?PID=(\d+))"[^>]*>\s*\[TYMM\]\s*([^<]+)/g;
  const sonuc = {}; let m;
  while ((m = re.exec(html)) !== null) {
    const name = m[3].replace(/\s+/g, ' ').trim();
    sonuc[m[2]] = { ad: name, pid: m[2], url: 'https://mufredat.meb.gov.tr/' + m[1] };
  }
  return sonuc;
}

// TYMM sitesinden tema listesini çek (tymmall.json formatında)
async function tymmTemaListesi(slug) {
  const html = await get('https://tymm.meb.gov.tr/' + slug);
  const re = /<div[^>]*class="[^"]*unite-list-item__title[^"]*"[^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]+)/g;
  const sonuc = []; let m;
  while ((m = re.exec(html)) !== null) {
    sonuc.push({ ad: m[2].trim(), url: 'https://tymm.meb.gov.tr' + m[1] });
  }
  return sonuc;
}

// TYMM tema detay sayfasından kazanımları çek
async function tymmDetay(url) {
  const html = await get(url);
  const kazRe = /<div[^>]*class="[^"]*kazanim[^"]*"[^>]*>\s*(?:<[^>]+>\s*)*\|?([A-Z0-9]+\.\s*[^|<]+)/gi;
  const kazanımlar = []; let m;
  while ((m = kazRe.exec(html)) !== null) kazanımlar.push(m[1].trim());
  // Birleşik format
  const birRe = /\|([A-Z0-9]+\.\s*[^|<]+)\|/g;
  while ((m = birRe.exec(html)) !== null) kazanımlar.push(m[1].trim());
  return kazanımlar;
}

// bilinen programları yükle/kaydet
function bilinenProgramlarıYukle() {
  try { return JSON.parse(fs.readFileSync(DOSYA, 'utf8')); } catch { return { bilinenProgramlar: {}, kontrolTarihi: null, sonGuncelleme: null }; }
}
function kaydetVeri(v) { fs.writeFileSync(DOSYA, JSON.stringify(v, null, 2), 'utf8'); }

// Ana kontrol fonksiyonu
async function kontrolEt() {
  const bilinen = bilinenProgramlarıYukle();
  const meb = await mebProgramListesi();
  const yeniProgramlar = [];
  for (const [pid, info] of Object.entries(meb)) {
    if (!bilinen.bilinenProgramlar[pid]) {
      yeniProgramlar.push({ pid, ...info });
    }
  }
  bilinen.kontrolTarihi = new Date().toISOString();
  bilinen.mebProgramSayisi = Object.keys(meb).length;
  bilinen.yeniProgramlar = yeniProgramlar;
  bilinen.durum = yeniProgramlar.length > 0 ? 'var' : 'yok';
  bilinen.bilinenProgramlar = meb;
  kaydetVeri(bilinen);
  return bilinen;
}

module.exports = { mebProgramListesi, tymmTemaListesi, tymmDetay, kontrolEt, bilinenProgramlarıYukle };
if (require.main === module) {
  kontrolEt().then(r => {
    console.log('Kontrol tarihi:', r.kontrolTarihi);
    console.log('MEB program sayısı:', r.mebProgramSayisi);
    console.log('Durum:', r.durum);
    if (r.yeniProgramlar.length) {
      console.log('Yeni programlar:');
      r.yeniProgramlar.forEach(p => console.log('  PID=' + p.pid, p.ad));
    } else {
      console.log('Güncelleme yok - tüm programlar mevcut.');
    }
  }).catch(e => console.error('Hata:', e.message));
}

const http = require('http'), fs = require('fs'), path = require('path');
const mebKontrol = require('./meb-kontrol.js');
const port = 8080;
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon' };
let mebDurum = { durum: 'beklemede', kontrolTarihi: null, yeniProgramlar: [], mebProgramSayisi: 0 };

// Sunucu açılırken MEB kontrolü yap
async function baslatMEKKontrol() {
  try {
    const sonuc = await mebKontrol.kontrolEt();
    mebDurum = { durum: sonuc.durum, kontrolTarihi: sonuc.kontrolTarihi, yeniProgramlar: sonuc.yeniProgramlar || [], mebProgramSayisi: sonuc.mebProgramSayisi || 0 };
    console.log('[MEB] Kontrol tamamlandı:', sonuc.durum, '| Program:', sonuc.mebProgramSayisi);
    if (sonuc.yeniProgramlar && sonuc.yeniProgramlar.length) {
      console.log('[MEB] Yeni programlar:');
      sonuc.yeniProgramlar.forEach(p => console.log('  - PID=' + p.pid, p.ad));
    }
  } catch (e) {
    mebDurum = { durum: 'hata', kontrolTarihi: new Date().toISOString(), hata: e.message };
    console.log('[MEB] Hata:', e.message);
  }
}

http.createServer(function(req, res) {
  let u = decodeURIComponent(req.url.split('?')[0]); if (u === '/') u = '/index.html';

  // API endpointleri
  if (u === '/api/meb-durum') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    return res.end(JSON.stringify(mebDurum));
  }
  if (u === '/api/meb-kontrol') {
    baslatMEKKontrol().then(() => {
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify(mebDurum));
    }).catch(e => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ durum: 'hata', hata: e.message }));
    });
    return;
  }

  // Statik dosya sunma
  const fp = path.join(process.cwd(), u);
  fs.readFile(fp, function(e, d) {
    if (e) { res.writeHead(404); res.end('404'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(fp)] || 'text/plain' });
    res.end(d);
  });
}).listen(port, function() {
  console.log('Sunucu hazır: http://localhost:' + port);
  baslatMEKKontrol();
});

/* ============================================================
   FSRS — Free Spaced Repetition Scheduler (Vanilla JS)
  =open-spaced-repetition/ts-fsrs referansıyla basitleştirilmiş
   4 puanlama: Again(1), Hard(2), Good(3), Easy(4)
   Kayıp kartshirticulty, stability, retrievability değerleri tutulur.
   ============================================================ */
var FSRS = (function () {
  var VARSAYILAN = {
    istenilenHatirlama: 0.9,  // Hedef %90 hatırlama
    maxAralik: 365,           // Maksimum tekrar süresi (gün)
    w: [
      0.4072, 0.6174, 2.3882, 5.8632,   // 0-3:  ilk stability (Again/Hard/Good/Easy)
      4.9395, 0.9313, 0.8624, 0.0109,   // 4-7: Forgot parametreleri
      1.5149, 0.1351,                     // 8-9:  Stability growth parametreleri
      0.9353, 2.1983,                     // 10-11: Difficulty decay parametreleri
      0.0541, 0.3380,                     // 12-13: Interval parameters
      1.2508, 0.2793, 2.6153             // 14-16: Scaling factors
    ]
  };

  function mathLog(val) { return Math.log(val); }
  function mathExp(val) { return Math.exp(val); }
  function mathPow(a, b) { return Math.pow(a, b); }
  function mathMin(a, b) { return Math.min(a, b); }
  function mathMax(a, b) { return Math.max(a, b); }
  function mathRound(val) { return Math.round(val * 100) / 100; }

  function yeniKart(soru, cevap) {
    return {
      s: soru,
      c: cevap,
      d: 5,                    // Difficulty: 1(zor) - 10(kolay), başlangıç 5
      sf: VARSAYILAN.w[2],     // Stability: gün cinsinden, başlangıç Good valeur
      r: 1.0,                  // Retrievability: 0-1 arası, yeni kart 1.0
      son: null,               // Son tekrar tarihi (gunKod formatı)
      tekrar: 0,               // Toplam tekrar sayısı
      sonPuan: 0               // Son puan (1-4)
    };
  }

  function eskiKart(soru, cevap, kutu) {
    var kart = yeniKart(soru, cevap);
    kart.kutu = kutu || 1;
    // Eski Leitner kutusunu FSRS başlangıcına dönüştür
    switch (kutu) {
      case 1: kart.sf = VARSAYILAN.w[0]; kart.d = 8; break;
      case 2: kart.sf = VARSAYILAN.w[1]; kart.d = 6; break;
      case 3: kart.sf = VARSAYILAN.w[2]; kart.d = 5; break;
      case 4: kart.sf = VARSAYILAN.w[3] * 0.7; kart.d = 4; break;
      case 5: kart.sf = VARSAYILAN.w[3]; kart.d = 3; break;
      default: kart.sf = VARSAYILAN.w[2]; kart.d = 5;
    }
    return kart;
  }

  function retrievabilityHesapla(stability, gecenGun) {
    if (gecenGun <= 0 || stability <= 0) return 1.0;
    var w = VARSAYILAN.w;
    var val = mathPow(gecenGun / (w[11] * mathPow(stability, w[12])), w[13]);
    return mathMax(0, mathMin(1, mathPow(1 + val, -w[14]) + (1 - VARSAYILAN.istenilenHatirlama) * mathPow(1 + val, -w[15])));
  }

  function puanSonrasiGuncelle(kart, puan) {
    var w = VARSAYILAN.w;
    var oncekiD = kart.d;
    var oncekiS = kart.sf;
    var oncekiR = kart.r;
    var yeniPuan = mathMax(1, mathMin(4, puan));
    var gecenGun = 0;

    if (kart.son) {
      gecenGun = tarihFark(kart.son, gunKod(new Date()));
    }

    // Difficulty güncelleme (1=Again ... 4=Easy mapped to 1-4)
    var deltaD = -w[7] * (yeniPuan - 3) + (yeniPuan === 1 ? w[5] * oncekiD : 0);
    var yeniD = mathMax(1, mathMin(10, oncekiD + deltaD));

    var yeniS;
    if (yeniPuan === 1) {
      // Again: unutuldu, stability eriyor
      yeniS = w[10] * mathPow(yeniD, -w[11]) * (mathPow(oncekiS + 1, w[12]) - 1) * mathExp(w[13] * (1 - yeniPuan));
      yeniS = mathMax(0.5, yeniS);
    } else {
      // Başarılı: stability büyüyor
      var growth = mathExp(w[8]) * (11 - yeniD) * mathPow(oncekiS, w[9]) * (mathExp((4 - yeniPuan) * w[15]) - 1);
      if (yeniPuan === 4) growth *= w[16]; // Easy bonus
      yeniS = oncekiS * (1 + growth);
      yeniS = mathMax(0.5, yeniS);
    }

    // Yeni interval hesapla
    var yeniAralik;
    if (yeniPuan === 1) {
      yeniAralik = 1 / 1440; // Again = ~1 dakika (1/1440 gün)
    } else {
      yeniAralik = yeniS * (yeniPuan >= 3 ? w[14] : w[15]);
      yeniAralik = mathMax(1, mathMin(yeniAralik, VARSAYILAN.maxAralik));
      yeniAralik = mathRound(yeniAralik);
      if (yeniAralik < 1) yeniAralik = 1;
    }

    kart.d = mathRound(yeniD);
    kart.sf = mathRound(yeniS);
    kart.sonPuan = yeniPuan;
    kart.tekrar = (kart.tekrar || 0) + 1;
    kart.son = gunKod(new Date());

    return {
      kart: kart,
      aralik: yeniAralik,
      aralikMetin: aralikMetin(yeniAralik)
    };
  }

  function aralikMetin(gun) {
    if (gun < 1) return 'Birazdan';
    if (gun === 1) return 'Yarın';
    if (gun < 7) return gun + ' gün sonra';
    if (gun < 30) return Math.round(gun / 7) + ' hafta sonra';
    if (gun < 365) return Math.round(gun / 30) + ' ay sonra';
    return Math.round(gun / 365) + ' yıl sonra';
  }

  function tekrarGerektiriyorMu(kart, bugun) {
    if (!kart.son) return true;
    var gecen = tarihFark(kart.son, bugun);
    var gerekli = kart.sf * VARSAYILAN.istenilenHatirlama;
    return gecen >= gerekli;
  }

  function kartDurumu(kart) {
    if (!kart.tekrar) return 'yeni';
    var bugun = gunKod(new Date());
    var gecen = tarihFark(kart.son, bugun);
    var gerekli = kart.sf * VARSAYILAN.istenilenHatirlama;
    if (gecen >= gerekli * 1.5) return 'gecikmis';
    if (gecen >= gerekli) return 'hazir';
    if (kart.r < 0.5) return 'unutuluyor';
    return 'aklimda';
  }

  return {
    VARSAYILAN: VARSAYILAN,
    yeniKart: yeniKart,
    eskiKart: eskiKart,
    puanSonrasiGuncelle: puanSonrasiGuncelle,
    tekrarGerektiriyorMu: tekrarGerektiriyorMu,
    kartDurumu: kartDurumu,
    aralikMetin: aralikMetin
  };
})();

/* ===== OKUL KÜTÜPHANESİ (e-Kitap) =====
   KITAP["id"] = { ad, yazar, sinif, kapak, sayfa: ["metin", ...] }
   - sayfa: metin dizisi; okuma modunda sayfalık gösterilir.
   - kapak: başlık emojisi.  - sinif: opsiyonel (seçili sınıfa göre filtrelendi).
   Metinler örnek/taslaktır; kütüphaneye gerçek kitaplar ekleyebilirsiniz.
*/
var KITAP = {};

KITAP["k1"] = {
  ad: "Kayıp Yıldız",
  yazar: "Okul Yazarı",
  sinif: "5",
  kapak: "⭐",
  sayfa: [
    "Uzayın karanlığında bir yıldız yavaşça kayboldu. Uzaylı Yıldız, yere doğru süzüldü.",
    "Yıldız, yere vurmadan önce Dünya'nın etrafındaki ışıklarını gördü. 'Evsizim,' diye düşündü.",
    "Toprak kurallarını anlattı: 'Bir gövde, kütle ve çekim vardır.' Yıldız, topaktaki bir çocuğun gökyüzüne baktığını gördü.",
    "Çocuk, yıldız düştüğünü sandı ama aslında kaybolan yıldız vuruldu. 'Geri getir!' dedi.",
    "Toprağın çekim gücü, Yıldız'ı yeniden gökyüzüne uzaktı. Yıldız, çocuğun kalbinde bir ışık oldu.",
    "O günden beri çocuk gökyüzüne baktığında, yıldızların onu izlediğini biliyordu."
  ]
};

KITAP["k2"] = {
  ad: "Matematik Macerası",
  yazar: "Eymen Kitap",
  sinif: "6",
  kapak: "🧮",
  sayfa: [
    "Ela pazar günü bahçede oynarken dikdörtgen bir teren gördü. 'Bu çimen neye eşittir?' diye düşündü.",
    "Ela, terin uzun kenarını 8 adım, kısa kenarını 5 adım ölçtü. Alan = 8 x 5 = 40 kare adımdı.",
    "Havuz da dikdörtgen. 'Çevre?' dedi Ela. 8+5+8+5 = 26 adım çevre vardı.",
    "Babası geldi: 'Bahçeni çitlerle çevreyeim. Çitin uzunluğu çevredir.' Ela gülümseyerek 26 adım çitin gerektiğini söyledi.",
    "Akşam, Ela elindeki kâğıttan aynı şekli çizdi. 'Doğrusal ölçüler, alan ve çevre,' dedi, 'neyin ne kadarını kapladığını ve kaç sınırı olduğunu gösterir.'"
  ]
};

KITAP["k3"] = {
  ad: "Anadolu'nun Eski Şehirleri",
  yazar: "Tarih Arkadaşı",
  sinif: "6",
  kapak: "🏰",
  sayfa: [
    "Türkiye'nin toprakları altında, eski şehirler tarihin altınları gibi gömülüdür. İnsanlar ne kadar uzakça yol alsalar da, tarih onları beklerdi.",
    "Efes, İonia'nın kıyılarındaydı. Maas'tan sonra burada yapılan tapınaklar, dünyanın en büyük yerleşim yerlerinden biriydi.",
    "Pergamon, yer yükseltilerek inşa edilmişti. Uzaktan kesit alanı, tıp kitapları ve askılıklarıyla ünlüydü.",
    "Çan ve Troy, birbirlerini izlerdi. İlkbahar ritüellerinde çiçek açtıktan sonra, genç çobanlar bir mücadeleye giriplardı.",
    "Bugün bu kentlerin kalabalığı kalmamış, ama öğrenci bir göz atarken, taşların hikayi anlattığını duydu."
  ]
};

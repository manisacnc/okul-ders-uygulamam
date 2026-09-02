/* ===== ÇÖZÜMLÜ SORULAR (adım adım çözümler) =====
   COZUM["dersId"][birimIndeksi] = [ { s: <soru metni>, cozum: <çözüm> } ]
   Veri yoksa uygulama konu özetiyle genel açıklama üretir.
*/

var COZUM = {};

COZUM["mat6"] = {
  0: [
    { s: "3² + 2 işleminin sonucu kaçtır?", cozum: "Önce üslü ifadeyi hesaplayalım: 3² = 3·3 = 9. Ardından toplama yapalım: 9 + 2 = 11. Doğru cevap 11'dir." },
    { s: "8 + 2 x 4 işleminin sonucu kaçtır? (İşlem önceliğine dikkat!)", cozum: "İşlem önceliği kuralına göre önce çarpma yapılır: 2·4 = 8. Sonra toplama: 8 + 8 = 16. Doğru cevap 16'dır. Önce toplama yapılırsa 40 bulunur ama bu kurala aykırıdır." }
  ],
  1: [
    { s: "Aşağıdaki sayılardan hangisi asal sayıdır?", cozum: "Asal sayı yalnızca 1 ve kendisine bölünebilen sayıdır. 7'nin 1 ve 7 dışında böleni yoktur, bu yüzden asaldır. 9 = 3·3, 15 = 3·5, 21 = 3·7 olduğu için bunlar asal değildir. Doğru cevap 7." },
    { s: "12 sayısının kaç doğal sayı çarpanı vardır?", cozum: "12'nin doğal sayı çarpanları: 1, 2, 3, 4, 6 ve 12'dir. Yani 12'nin 6 tane çarpanı vardır. Doğru cevap 6." }
  ],
  3: [
    { s: "-7 + 3 işleminin sonucu kaçtır?", cozum: "Sayı doğrusunda -7 noktasından başlayıp 3 birim sağa gideriz: -7 + 3 = -4. Doğru cevap -4'tür." },
    { s: "Mutlak değeri 5 olan tam sayılar hangileridir?", cozum: "Mutlak değer, bir sayının sıfıra olan uzaklığıdır. 5'in sıfıra uzaklığı 5 birim, -5'in sıfıra uzaklığı da 5 birimdir. Doğru cevap '5 ve -5'." }
  ],
  4: [
    { s: "2/3 kesrinin paydası 6 yapılarak genişletilirse sonuç hangisidir?", cozum: "Kesri genişletmek için pay ve paydayı aynı sayıyla çarparız. Paydayı 3'ten 6 yapmak için 2 ile çarparız: (2·2)/(3·2) = 4/6. Doğru cevap 4/6." }
  ],
  6: [
    { s: "4 elma ve 5 armut var. Elmanın portakallılar oranı kaçtır?", cozum: "Elma sayısı 4, armut sayısı 5'tir. Elmaların armutlara oranı 4/5 olur. Doğru cevap 4/5." }
  ],
  7: [
    { s: "2x + 3 ifadesinde katsayıları 2 olan sayı kaçtır?", cozum: "2x teriminde değişken x, onun önündeki sayı olan 2 katsayıdır. Doğru cevap 2'dir." }
  ],
  8: [
    { s: "5, 7, 9 sayılarının ortalaması kaçtır?", cozum: "Aritmetik ortalama = verilerin toplamı ÷ veri sayısı = (5 + 7 + 9) ÷ 3 = 21 ÷ 3 = 7. Doğru cevap 7." }
  ],
  10: [
    { s: "Bir açının tümleri 40° ise bu açı kaç derecedir?", cozum: "Tümler açıların toplamı 90°'dir. Bu açı = 90 − 40 = 50°. Doğru cevap 50°." }
  ],
  11: [
    { s: "Yarıçağı 3 cm olan çemberin çevresi yaklaşık kaç cm'dir? (π = 3)", cozum: "Çemberin çevresi = 2·π·r formülüyle bulunur: 2·3·3 = 18 cm. Doğru cevap 18." }
  ],
  14: [
    { s: "Kenar uzunlukları 2, 3 ve 4 birim olan dikdörtgenler prizmasının hacmi kaç birim küptür?", cozum: "Dikdörtgenler prizmasının hacmi = en · boy · yükseklik = 2 · 3 · 4 = 24 birim küp. Doğru cevap 24." },
    { s: "1 litrede kaç mililitre vardır?", cozum: "1 litre = 1000 mililitredir. Doğru cevap 1000." }
  ],
  15: [
    { s: "5, 8, 8, 9, 10 veri grubunun modu (en çok tekrar eden değer) kaçtır?", cozum: "Mod, veri grubunda en çok tekrar eden değerdir. 8 sayısı iki kez geçerken diğer sayılar birer kez geçer. Mod = 8. Doğru cevap 8." },
    { s: "7, 12, 14, 9 verilerinin aritmetik ortalaması kaçtır?", cozum: "Toplam = 7 + 12 + 14 + 9 = 42. Veri sayısı 4'tür. Ortalama = 42 ÷ 4 = 10,5. Doğru cevap 10,5." }
  ]
};

COZUM["fen6"] = {
  0: [
    { s: "Güneş Sistemi'nde kaç gezegen var?", cozum: "Güneş Sistemi'nde 8 gezegen vardır: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün. Doğru cevap 8." },
    { s: "Güneş tutulması hangi gök cismi önüne geçildi?", cozum: "Güneş tutulmasında Ay, Dünya ile Güneş'in arasına girerek Güneş'in önüne geçer ve Güneş'in görünmesini geçici olarak engeller. Doğru cevap Ay." }
  ],
  3: [
    { s: "Sıcaklığı 80°C olan su, sıcaklığı 20°C olan su ile karıştırıılnca önce ısı hangi yönde akar?", cozum: "Isı her zaman sıcak maddeden soğuk maddeye akar. Bu nedenle ısı, 80°C'deki sudan 20°C'deki suya geçer. Doğru cevap 'Sıcaktan soğuğa'." }
  ],
  4: [
    { s: "Ses meydana gelmek için ne gerekir?", cozum: "Ses, maddelerin titreşmesiyle oluşur. Titreşen kaynak, komşu taneciklere titreşimi aktararak sesi yayar. Doğru cevap 'Titreşim'." }
  ],
  6: [
    { s: "Hangisi elektriği iletmez (yalıtkan)?", cozum: "Plastik elektriği iletmez, yalıtkandır. Bakır, çelik ve gümüş metallerdir ve elektriği iletirler. Doğru cevap Plastik." }
  ]
};

COZUM["trk6"] = {
  2: [
    { s: "Başka bölü 'gövde' nasıl tanımlanır?", cozum: "Gövde, bir kökün üzerine yapım eki getirilmiş biçimidir. Örneğin 'göz-lük' kelimesinde 'gözlük' gövdedir. Doğru cevap ilk seçenektir." }
  ],
  3: [
    { s: "'Bu kitap' ifadesindeki 'bu' kelimesi hangi sıfat türüdür?", cozum: "'Bu' sözcüğü ismi işaret ederek belirttiği için işaret (gösterme) sıfatıdır. Doğru cevap 'İşaret sıfatı'." }
  ],
  8: [
    { s: "Aşağıdaki cümlelerden hangisi sıralı cümledir?", cozum: "Sıralı cümlede birden çok yargı (yüklem) art arda gelir: 'Geldi, oturdu, konuştu.' cümlesinde üç yüklem sıralanmıştır. Doğru cevap 'Geldi, oturdu, konuştu.'" },
    { s: "'Gelince bizi ara.' cümlesi hangi tür cümledir?", cozum: "Tek cümlenin içinde 'gel' ve 'ara' olmak üzere iki yargı birbirine bağlanmıştır. Bu nedenle birleşik cümledir. Doğru cevap 'Birleşik cümle'." }
  ],
  9: [
    { s: "Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?", cozum: "'Şu an tam şimdi geliyor.' cümlesinde 'şu an' ve 'şimdi' aynı anlamı taşır; bu nedenle biri gereksizdir. Doğru cevap 'Şu an tam şimdi geliyor.'" }
  ]
};

COZUM["alm6"] = {
  0: [
    { s: "'Guten Morgen!' Almanca'da ne zaman kullanılır?", cozum: "'Guten Morgen' sabah saatlerinde kullanılan selamlamadır. Doğru cevap 'Sabah'." }
  ],
  1: [
    { s: "'fünf' hangi sayıdır?", cozum: "Almanca sayılar: eins (1), zwei (2), drei (3), vier (4), fünf (5). 'fünf' = 5'tir. Doğru cevap 5." }
  ]
};

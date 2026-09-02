/* ===== TEST SORULARI =====
   SORULAR["dersId"] = { konu_indeks: [ {s: soru, o: [ş4 seçenek], d: doğru index} ] }
*/

var SORULAR = {};

SORULAR["mat5"] = {
  0: [
    { s: "40.000 + 3.000 + 500 + 20 + 7 işleminin sonucu kaçtır?", o: ["43.527", "43.572", "43.057", "432.507"], d: 0, z: 1 },
    { s: "8.520.000 sayısındaki 5 rakamının basamak değeri kaçtır?", o: ["500.000", "50.000", "5.000", "5"], d: 0, z: 2 }
  ],
  1: [
    { s: "(23 + 17) x 2 işleminin sonucu kaçtır?", o: ["80", "60", "90", "50"], d: 0, z: 1 },
    { s: "640 ÷ 8 işleminin sonucu kaçtır?", o: ["80", "60", "70", "90"], d: 0, z: 1 },
    { s: "Bir sayının çeyreği 15 ise bu sayının tamamı kaçtır?", o: ["60", "45", "30", "75"], d: 0, z: 2 }
  ],
  2: [
    { s: "Bir bütünün 4 eş parçasından 3 parçasını gösteren kesir hangisidir?", o: ["3/4", "4/3", "1/3", "3/1"], d: 0, z: 1 }
  ],
  3: [
    { s: "1/4 + 1/4 işleminin sonucu kaçtır?", o: ["2/4 (yani 1/2)", "2/8", "1/8", "1/4"], d: 0, z: 1 }
  ],
  4: [
    { s: "0,5 + 0,3 işleminin sonucu kaçtır?", o: ["0,8", "0,2", "0,15", "8"], d: 0, z: 1 }
  ],
  5: [
    { s: "Aşağıdaki kesirlerden hangisi %50'ye eşittir?", o: ["1/2", "1/3", "1/4", "2/3"], d: 0, z: 1 }
  ],
  7: [
    { s: "Bir üçgenin iç açılarının toplamı kaç derecedir?", o: ["180°", "360°", "90°", "270°"], d: 0, z: 1 },
    { s: "Karenin kaç kenarı vardır?", o: ["4", "3", "5", "6"], d: 0, z: 1 }
  ]
};

SORULAR["mat6"] = {
  0: [
    { s: "3² + 2 işleminin sonucu kaçtır?", o: ["11", "8", "9", "13"], d: 0, z: 2 },
    { s: "8 + 2 x 4 işleminin sonucu kaçtır? (İşlem önceliğine dikkat!)", o: ["16", "40", "24", "32"], d: 0, z: 2 }
  ],
  1: [
    { s: "Aşağıdaki sayılardan hangisi asal sayıdır?", o: ["7", "9", "15", "21"], d: 0, z: 2 },
    { s: "12 sayısının kaç doğal sayı çarpanı vardır?", o: ["6", "4", "8", "5"], d: 0, z: 3 }
  ],
  3: [
    { s: "-7 + 3 işleminin sonucu kaçtır?", o: ["-4", "4", "-10", "10"], d: 0, z: 2 },
    { s: "Mutlak değeri 5 olan tam sayılar hangileridir?", o: ["5 ve -5", "5 ve 5", "-5 ve -5", "0 ve 5"], d: 0, z: 3 }
  ],
  4: [
    { s: "2/3 kesrinin paydası 6 yapılarak genişletilirse sonuç hangisidir?", o: ["4/6", "2/6", "6/6", "3/6"], d: 0, z: 2 }
  ],
  6: [
    { s: "4 elma ve 5 armut var. Elmanın portakallılar oranı kaçtır?", o: ["4/5", "5/4", "4/9", "5/9"], d: 0, z: 2 }
  ],
  7: [
    { s: "2x + 3 ifadesinde katsayıları 2 olan sayı kaçtır?", o: ["2", "3", "5", "x"], d: 0, z: 2 }
  ],
  8: [
    { s: "5, 7, 9 sayılarının ortalaması kaçtır?", o: ["7", "6", "9", "8"], d: 0, z: 2 }
  ],
  9: [
    { s: "Bir açının tümleri 40° ise bu açı kaç derecedir?", o: ["50°", "60°", "140°", "40°"], d: 0, z: 2 }
  ],
  11: [
    { s: "Yarıçağı 3 cm olan çemberin çevresi yaklaşık kaç cm'dir? (π = 3)", o: ["18", "9", "27", "36"], d: 0, z: 3 }
  ]
};

SORULAR["mat7"] = {
  0: [
    { s: "(-12) ÷ 4 işleminin sonucu kaçtır?", o: ["-3", "3", "-4", "4"], d: 0, z: 2 },
    { s: "(-2)³ işleminin sonucu kaçtır?", o: ["-8", "8", "-6", "6"], d: 0, z: 3 }
  ],
  1: [
    { s: "1/2 + 1/3 işleminin sonucu kaçtır?", o: ["5/6", "2/5", "3/6", "6/5"], d: 0, z: 2 },
    { s: "3 tam 1/2 kesrinin bileşik kesir gösterimi nedir?", o: ["7/2", "9/2", "5/4", "6/4"], d: 0, z: 3 }
  ],
  2: [
    { s: "2/3 ÷ 4 ün sonucu kaçtır?", o: ["1/6", "8/3", "3/8", "6/5"], d: 0, z: 3 }
  ],
  4: [
    { s: "2x + 5 = 15 denkleminin çözlümünde x kaçtır?", o: ["5", "10", "7", "20"], d: 0, z: 2 }
  ],
  5: [
    { s: "Doğru orantılı iki sayıdan biri 3, diğeri 6 olsun, 3'ün karşılığı 4 ise 6'nın karşılığı kaçtır?", o: ["8", "9", "12", "6"], d: 0, z: 3 }
  ],
  7: [
    { s: "%20'si 12 olan sayı kaçtır?", o: ["60", "24", "120", "72"], d: 0, z: 3 }
  ],
  8: [
    { s: "Bir çokgenin iç açılar toplamı 540° ise bu çokgen kaç kenarlıdır?", o: ["5", "4", "6", "7"], d: 0, z: 3 }
  ],
  12: [
    { s: "Yarıçapı 2 cm, yüksekliği 5 cm olan silindirin taban alanı kaç cm²'dir? (π = 3)", o: ["12", "10", "20", "30"], d: 0, z: 3 }
  ]
};

SORULAR["mat8"] = {
  0: [
    { s: "12 ve 18 sayılarının EBOB'u kaçtır?", o: ["6", "3", "9", "12"], d: 0, z: 2 },
    { s: "6 ve 8 sayılarının EKOK'u kaçtır?", o: ["24", "48", "12", "16"], d: 0, z: 2 }
  ],
  1: [
    { s: "10³ kaçtır?", o: ["1000", "100", "10000", "130"], d: 0, z: 1 },
    { s: "0,0005 sayısının bilimsel gösterimi hangisidir?", o: ["5.10⁻⁴", "5.10⁴", "0,5.10⁻³", "5.10³"], d: 0, z: 3 }
  ],
  2: [
    { s: "√144 kaçtır?", o: ["12", "14", "10", "16"], d: 0, z: 1 },
    { s: "√25 kaçtır?", o: ["5", "25", "2,5", "10"], d: 0, z: 1 }
  ],
  4: [
    { s: "Bir zarın tek sayılılar getirmeye olasılığı kaçtır?", o: ["3/6", "2/6", "1/6", "5/6"], d: 0, z: 2 }
  ],
  5: [
    { s: "x² - 4 ifadesinin açılarımı hangisidir?", o: ["(x-2)(x+2)", "(x-2)²", "(x+2)²", "x²+4"], d: 0, z: 3 }
  ],
  6: [
    { s: "Y = 2x + 1 doğrusunda x = 3 için y kaçtır?", o: ["7", "9", "6", "5"], d: 0, z: 2 }
  ]
};

SORULAR["fen5"] = {
  0: [
    { s: "Güneş hangi gök cismidir?", o: ["Bir yıldız", "Bir gezegen", "Yapay uydu", "Bir galaksi"], d: 0, z: 1 }
  ],
  1: [
    { s: "Aşağıdakilerden hangisi bir canlıdır?", o: ["Mantar", "Taş", "Bulut", "Sandalye"], d: 0, z: 1 },
    { s: "Mikroskobik canlılar nereden görülebilir?", o: ["Mikroskopla", "Çıplak gözle", "Büyüteçle her yerde", "Dürbünle"], d: 0, z: 1 }
  ],
  2: [
    { s: "Kuvvet hangi araçla ölçülür?", o: ["Dinamometre", "Terazi", "Cetvel", "Saat"], d: 0, z: 1 },
    { s: "Sürtünme kuvveti hareketı nasıl etkiler?", o: ["Yavaşıtırır", "Hızlandırır", "Durdurmaz", "Hiç etkilemez"], d: 0, z: 2 }
  ],
  3: [
    { s: "Bu kabın 'erime' hali hangi maddeyi örnek alır?", o: ["Buz", "Su", "Buhar", "Metal"], d: 0, z: 1 }
  ],
  6: [
    { s: "Anahtarı kapasız bir elektrik devresinde ampul ne olur?", o: ["Yanmaz", "Işık verir", "Patlar", "Pil büyer"], d: 0, z: 1 }
  ]
};

SORULAR["fen6"] = {
  0: [
    { s: "Güneş Sistemi'nde kaç gezegen var?", o: ["8", "7", "9", "10"], d: 0, z: 1 },
    { s: "Güneş tutulması hangi gök cismi önüne geçildi?", o: ["Ay", "Mars", "Satürn", "Bir yıldız"], d: 0, z: 2 }
  ],
  2: [
    { s: "Araçların hareket ederken cisimleri etkileyen kuvvet ne yapar?", o: ["Hareketlerdir", "Isıtır", "Dokunmaz", "Görülür"], d: 0, z: 1 }
  ],
  3: [
    { s: "Sıcaklığı 80°C olan su, sıcaklığı 20°C olan su ile karıştırıılnca önce ısı hangi yönde akar?", o: ["Sıcaktan soğuğa", "Soğuktan sıcağa", "Yansır", "Akmaz"], d: 0, z: 2 }
  ],
  4: [
    { s: "Ses meydana gelmek için ne gerekir?", o: ["Titreşim", "Karanlık", "Soğuk", "Gölge"], d: 0, z: 1 }
  ],
  6: [
    { s: "Hangisi elektriği iletmez (yalıtkan)?", o: ["Plastik", "Bakır", "Çelik", "Gümüş"], d: 0, z: 2 }
  ]
};

SORULAR["fen7"] = {
  1: [
    { s: "Hücrenin yönetici organeli hangisidir?", o: ["Çekirdek", "Zar", "Sitoplazma", "Mitokondri"], d: 0, z: 2 },
    { s: "Vücudun vücut hücrelerinin bölünme türü hangisidir?", o: ["Mitoz", "Mayoz", "Fagositaz", "Fotosentez"], d: 0, z: 3 }
  ],
  2: [
    { s: "Bir cismin konumuna bağlı enerjisine ne ad verilir?", o: ["Potansiyel enerji", "Kikoik enerji", "Isı enerjisi", "Böl"], d: 0, z: 2 }
  ],
  4: [
    { s: "Işığın bir aynaya çarpıp geri dönmesine ne denir?", o: ["Yansıma", "Kırılma", "Soğrulma", "Görülmez"], d: 0, z: 2 }
  ],
  5: [
    { s: "Bitkilerin besleyen fotonto etkınıp güneş enerjisini nasıl kullanır?", o: ["Fotosentez", "Solunum", "Boşaltının", "Sindirim"], d: 0, z: 2 }
  ],
  6: [
    { s: "Seri bağlı iki ampulden biri çıkarsa diğeri ne olur?", o: ["Söner", "Parlar", "Değişmez", "Lampi çoğalır"], d: 0, z: 3 }
  ]
};

SORULAR["fen8"] = {
  0: [
    { s: "Mevsimler oluşur ç 'n(ma nedn) hangisi?", o: ["Eksen eğikliği", "Güneş dünyadan büyük", "Ay'ın fazları", "Gece-gündüz"], d: 0, z: 3 }
  ],
  1: [
    { s: "Kalıtım maddesi hücrelerde hangi yapıdır?", o: ["DNA", "Besin", "Su", "Karbondioksit"], d: 0, z: 2 },
    { s: "Anne çocukta göz rengi hangi kavramla açıklanır?", o: ["Genetik", "İklim", "Rüzgar", "Reng seçimi"], d: 0, z: 2 }
  ],
  2: [
    { s: "Araba lastiğinin genişli artırılırsa yere yapılan basınc nasıl değişir?", o: ["Azalır", "Artar", "Değişmez", "İslami"], d: 0, z: 3 }
  ],
  4: [
    { s: "Ağırlığı değişen kuvveti fayda sağlayan basit makine hangisidir?", o: ["Eğik düzlem", "Saat", "Terazi göstergesi", "Pusula"], d: 0, z: 2 }
  ],
  5: [
    { s: "Bitkiler hangi süreçte besin üretir?", o: ["Fotosentez", "Sindirim", "Donma", "Sürtme"], d: 0, z: 1 }
  ]
};

SORULAR["trk5"] = {
  1: [
    { s: "Eş anlamlısı rı olan kelime hangisidir? 'mütevazı'", o: ["alçak gönüllü", "gururlu", "güzel", "hızlı"], d: 0, z: 2 },
    { s: "Aşağıdaki cümlelerden hangisi öznel (kişisel) bir yargıdır?", o: ["Bu film harika! ", "Kitap 120 sayfadır. ", "Ayşe büyüdü. ", "Dışarısı 25 derece."], d: 0, z: 3 }
  ]
};

SORULAR["trk6"] = {
  2: [
    { s: "Başka bölü 'gövde' nasıl tanımlanır?", o: ["Kök üzerine yapım eki getirilmiş hali", "Cümlenin en kısa hali", "Bir kelimenin tamamını", "İki cümle"], d: 0, z: 3 }
  ],
  3: [
    { s: "'Bu kitap' ifadesindeki 'bu' kelimesi hangi sıfat türüdür?", o: ["İşaret sıfatı", "Niteleme sıfatı", "Sayı sıfatı", "Soru sıfatı"], d: 0, z: 3 }
  ]
};

SORULAR["sos5"] = {
  5: [
    { s: "Bir ülkede halkın kendini yönetecekleri seçmesi hangi yönetim biçimidir?", o: ["Demokrasi", "Monarşi", "Oligarşi", "Emperyalizm"], d: 0, z: 2 }
  ]
};

SORULAR["ink8"] = {
  2: [
    { s: "TBMM hangi yılda açılmıştır?", o: ["1920", "1919", "1923", "1922"], d: 0, z: 1 },
    { s: "Lozan Barış Antlaşması ile temel sonuç ne olmuştur?", o: ["Bağımsız Türk devletinin varlığı kabul edildi", "İstanbul başkent yapıldı", "Montrö anlaşması yapıldı", "Halk oy kullandı"], d: 0, z: 2 }
  ],
  3: [
    { s: "Atatürk ilkelerinden 'egemenliğini kayıpsız halka verme' hangi ilkeyle anlatılır?", o: ["Cumhuriyetçilik", "Devletçilik", "Laiklik", "İnkılapçılık"], d: 0, z: 2 }
  ]
};

SORULAR["ing7"] = {
  0: [
    { s: "'What is he like?' sorarsına verilen karşılık hangisi nicel bulmaz?", o: ["He is tall and friendly.", "He is a teacher.", "He is shy.", "He is short."], d: 0, z: 2 }
  ]
};

/* ===== VIDEO DERS / ÇÖZÜMLÜ VİDEO =====
   VIDEO["dersId"][birimIndeksi] = videoURL;
   - YouTube:   "https://www.youtube.com/embed/ID" veya "https://youtu.be/ID"
   - MP4:       "videosu.mp4" (uygulama klasöründe, offline)
   - Başlık:    birim (b.ad) otomatik kullanılır.
   Aşağıdaki örnek link, 🎬 butonunu göstermek içindir; gerçek MEB/video linkiyle değiştirin.
*/
var VIDEO = {};
VIDEO["mat5"] = { 0: "https://www.w3schools.com/html/movies.mp4" }; /* ÖRNEK (MP4) */
VIDEO["mat6"] = { 0: "https://www.w3schools.com/html/movies.mp4", 1: "https://www.w3schools.com/html/mov_bbb.mp4" }; /* ÖRNEK: gerçek linklerle değiştirin */
VIDEO["fen6"] = { 0: "https://www.w3schools.com/html/mov_bbb.mp4" };
VIDEO["ing6"] = { 0: "https://www.w3schools.com/html/movies.mp4" };

/* ===== 6. Sınıf Türkçe ek konular ===== */
SORULAR["trk6"] = SORULAR["trk6"] || {};
SORULAR["trk6"][8] = [
  { s: "Aşağıdaki cümlelerden hangisi sıralı cümledir?", o: ["Geldi, oturdu, konuştu.", "Uyuyan kedi camdaydı.", "Okula erken gittim.", "Hava güzel."], d: 0, z: 2 },
  { s: "'Gelince bizi ara.' cümlesi hangi tür cümledir?", o: ["Birleşik cümle", "Basit cümle", "Sıralı cümle", "Ünlem cümlesi"], d: 0, z: 2 }
];
SORULAR["trk6"][9] = [
  { s: "Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?", o: ["Yukarı çıktı.", "Şu an tam şimdi geliyor.", "Kitap okumayı severim.", "Ders çalışıyorum."], d: 1, z: 2 },
  { s: "Aşağıdakilerden hangisi anlatım bozukluğuna örnektir?", o: ["Kardeşim okula gitti.", "Yaşlı dedem çok iyidir.", "Kapıyı sessizce açtım.", "Onu ilk o ilk gördü."], d: 3, z: 3 }
];

/* ===== 6. Sınıf Matematik ek konular ===== */
SORULAR["mat6"] = SORULAR["mat6"] || {};
SORULAR["mat6"][14] = [
  { s: "Kenar uzunlukları 2, 3 ve 4 birim olan dikdörtgenler prizmasının hacmi kaç birim küptür?", o: ["24", "12", "20", "32"], d: 0, z: 2 },
  { s: "1 litrede kaç mililitre vardır?", o: ["1000", "100", "10", "500"], d: 0, z: 1 }
];
SORULAR["mat6"][15] = [
  { s: "5, 8, 8, 9, 10 veri grubunun modu (en çok tekrar eden değer) kaçtır?", o: ["8", "9", "5", "10"], d: 0, z: 1 },
  { s: "7, 12, 14, 9 verilerinin aritmetik ortalaması kaçtır?", o: ["10,5", "11", "9", "12"], d: 0, z: 2 }
];

/* ===== 6. Sınıf Almanca (Seçmeli) ===== */
SORULAR["alm6"] = {
  0: [
    { s: "'Guten Morgen!' Almanca'da ne zaman kullanılır?", o: ["Sabah", "Akşam", "Öğle", "Gece"], d: 0, z: 1 },
    { s: "'Wie heißt du?' sorusunun Türkçesi nedir?", o: ["Adın ne?", "Kaç yaşındasın?", "Nerelisin?", "Ne iş yaparsın?"], d: 0, z: 1 },
    { s: "'Ich heiße Eymen.' cümlesinin anlamı nedir?", o: ["Adım Eymen", "Ben Eymen'i seviyorum", "Eymen nerede?", "Eymen geliyor"], d: 0, z: 1 }
  ],
  1: [
    { s: "'fünf' hangi sayıdır?", o: ["5", "6", "4", "7"], d: 0, z: 1 },
    { s: "'zwölf' sayısı kaçtır?", o: ["12", "20", "11", "2"], d: 0, z: 2 },
    { s: "'Wie alt bist du?' sorusu ne demektir?", o: ["Kaç yaşındasın?", "Nerede yaşıyorsun?", "Nasılsın?", "Adın ne?"], d: 0, z: 2 }
  ],
  2: [
    { s: "'rot' hangi renktir?", o: ["Kırmızı", "Mavi", "Yeşil", "Sarı"], d: 0, z: 1 },
    { s: "'grün' hangi renktir?", o: ["Yeşil", "Mor", "Turuncu", "Pembe"], d: 0, z: 1 },
    { s: "'blau' hangi renktir?", o: ["Mavi", "Kırmızı", "Siyah", "Beyaz"], d: 0, z: 1 }
  ],
  3: [
    { s: "'die Mutter' Türkçe karşılığı nedir?", o: ["Anne", "Baba", "Kardeş", "Dede"], d: 0, z: 1 },
    { s: "'mein Bruder' ne demektir?", o: ["Erkek kardeşim", "Kız kardeşim", "Babam", "Amcam"], d: 0, z: 2 },
    { s: "'die Schwester' hangi aile üyesidir?", o: ["Kız kardeş", "Anne", "Nine", "Hala"], d: 0, z: 2 }
  ],
  4: [
    { s: "'das Buch' ne demektir?", o: ["Kitap", "Defter", "Kalem", "Çanta"], d: 0, z: 1 },
    { s: "'der Stift' ne demektir?", o: ["Kalem", "Silgi", "Cetvel", "Makas"], d: 0, z: 2 },
    { s: "Aşağıdakilerden hangisi bir okul eşyasıdır?", o: ["der Ranzen", "der Hund", "die Katze", "das Brot"], d: 0, z: 1 }
  ],
  5: [
    { s: "'Was machst du in deiner Freizeit?' ne demektir?", o: ["Boş zamanında ne yaparsın?", "Kaç yaşındasın?", "Nerede oturuyorsun?", "Hangi okula gidiyorsun?"], d: 0, z: 2 },
    { s: "'Ich spiele Fußball.' ne demektir?", o: ["Futbol oynarım", "Kitap okurum", "Yüzerim", "Şarkı söylerim"], d: 0, z: 1 },
    { s: "'das Hobby' ne demektir?", o: ["Hobi", "Ödev", "Ders", "Arkadaş"], d: 0, z: 1 }
  ],
  6: [
    { s: "'das Brot' ne demektir?", o: ["Ekmek", "Peynir", "Süt", "Elma"], d: 0, z: 1 },
    { s: "'Ich möchte Wasser.' ne demektir?", o: ["Su istiyorum", "Süt istiyorum", "Çay istiyorum", "Meyve istiyorum"], d: 0, z: 2 },
    { s: "'das Frühstück' ne demektir?", o: ["Kahvaltı", "Öğle yemeği", "Akşam yemeği", "Tatlı"], d: 0, z: 1 }
  ],
  7: [
    { s: "'der Hund' hangi hayvandır?", o: ["Köpek", "Kedi", "Kuş", "Balık"], d: 0, z: 1 },
    { s: "'die Katze' hangi hayvandır?", o: ["Kedi", "Tavşan", "At", "İnek"], d: 0, z: 1 },
    { s: "'der Vogel' hangi hayvandır?", o: ["Kuş", "Koyun", "Keçi", "Balık"], d: 0, z: 2 }
  ]
};

/* ===== 6. Sınıf Sosyal Bilgiler ===== */
SORULAR["sos6"] = {
  0: [
    { s: "Aşağıdakilerden hangisi yardımlaşmaya örnektir?", o: ["Komşuna alışverişinde yardım etmek", "Sınavda kopya çekmek", "Yalan söylemek", "Eşyalarını paylaşmamak"], d: 0, z: 1 },
    { s: "Aşağıdakilerden hangisi bir sosyal role örnektir?", o: ["Öğrenci", "Yağmur", "Deniz", "Ağaç"], d: 0, z: 1 }
  ],
  1: [
    { s: "İlk Türk yazılı belgeleri hangileridir?", o: ["Orhun Yazıtları", "Magna Carta", "Roma Tabletleri", "Kadeş Antlaşması"], d: 0, z: 2 }
  ],
  5: [
    { s: "Halkın kendisini yönetecekleri seçimle belirlemesi hangi yönetim biçimidir?", o: ["Demokrasi", "Monarşi", "Oligarşi", "Teokrasi"], d: 0, z: 2 }
  ]
};

/* ===== 6. Sınıf İngilizce ===== */
SORULAR["ing6"] = {
  0: [
    { s: "'I get up at seven o'clock.' cümlesi hangi zaman yapısıyla ilgilidir?", o: ["Simple Present (geniş zaman)", "Simple Past", "Future", "Present Perfect"], d: 0, z: 2 },
    { s: "'What do you do every morning?' sorusuna uygun cevap hangisidir?", o: ["I brush my teeth.", "I am sleeping.", "I will go.", "I watched TV."], d: 0, z: 2 }
  ],
  4: [
    { s: "'What does she do?' sorusunun doğru cevabı hangisidir?", o: ["She is a doctor.", "She is running.", "She has a book.", "She is happy."], d: 0, z: 2 }
  ]
};

/* ===== 6. Sınıf Din Kültürü ve Ahlak Bilgisi ===== */
SORULAR["din6"] = {
  0: [
    { s: "Dört büyük ilahi kitap hangileridir?", o: ["Tevrat, Zebur, İncil, Kur'an-ı Kerim", "Tevrat ve İncil", "Zebur ve Kur'an-ı Kerim", "Sadece Kur'an-ı Kerim"], d: 0, z: 1 },
    { s: "Son peygamber kimdir?", o: ["Hz. Muhammed (s.a.v.)", "Hz. Musa", "Hz. İsa", "Hz. İbrahim"], d: 0, z: 1 }
  ],
  2: [
    { s: "Zararlı alışkanlıklardan korunmak için hangisi yapılmalıdır?", o: ["Hobiler edinmek", "Zararlı ortamlarda bulunmak", "Sigara denemek", "Spordan uzak durmak"], d: 0, z: 1 }
  ]
};

/* ====== 6. SINIF SORU HAVUZU GENİŞLETME (Denematik için) ====== */

/* --- Matematik --- */
SORULAR["mat6"] = SORULAR["mat6"] || {};
SORULAR["mat6"][2] = (SORULAR["mat6"][2] || []).concat([
  { s: "A = {1, 2, 3} kümesinin eleman sayısı kaçtır?", o: ["3", "2", "1", "4"], d: 0, z: 1 },
  { s: "Kümeyi göstermek için kullanılan sembol hangisidir?", o: ["{ }", "[ ]", "( )", "< >"], d: 0, z: 1 }
]);
SORULAR["mat6"][5] = (SORULAR["mat6"][5] || []).concat([
  { s: "3,5 ondalık gösterimi hangi kesre eşittir?", o: ["35/10", "35/100", "3/5", "5/3"], d: 0, z: 2 },
  { s: "0,25 + 0,35 işleminin sonucu kaçtır?", o: ["0,60", "0,50", "0,25", "0,35"], d: 0, z: 1 }
]);
SORULAR["mat6"][10] = (SORULAR["mat6"][10] || []).concat([
  { s: "Kenarı 6 cm olan karenin alanı kaç cm²dir?", o: ["36", "12", "24", "30"], d: 0, z: 1 },
  { s: "Uzun kenarı 8 cm, kısa kenarı 5 cm olan dikdörtgenin alanı kaç cm²dir?", o: ["40", "26", "13", "80"], d: 0, z: 1 }
]);
SORULAR["mat6"][12] = (SORULAR["mat6"][12] || []).concat([
  { s: "Bir küpün kaç ayrıtı vardır?", o: ["12", "6", "8", "10"], d: 0, z: 2 },
  { s: "Bir silindirin tabanı hangi geometrik şekildir?", o: ["Daire", "Üçgen", "Kare", "Dikdörtgen"], d: 0, z: 1 }
]);
SORULAR["mat6"][13] = (SORULAR["mat6"][13] || []).concat([
  { s: "3 litre kaç yarım litredir?", o: ["6", "3", "9", "12"], d: 0, z: 2 },
  { s: "Bir sürahi 1,5 litre su alıyor. 3 sürahi kaç litre su alır?", o: ["4,5", "3,5", "3", "5,5"], d: 0, z: 2 }
]);
SORULAR["mat6"][4] = (SORULAR["mat6"][4] || []).concat([
  { s: "1/2 + 1/4 işleminin sonucu kaçtır?", o: ["3/4", "2/6", "1/6", "2/4"], d: 0, z: 2 },
  { s: "3/4 kesrinin 2/4 eksiği kaçtır?", o: ["1/4", "1/2", "5/4", "1"], d: 0, z: 1 }
]);

/* --- Fen Bilimleri --- */
SORULAR["fen6"] = SORULAR["fen6"] || {};
SORULAR["fen6"][1] = (SORULAR["fen6"][1] || []).concat([
  { s: "Kanı vücuda pompalayan organ hangisidir?", o: ["Kalp", "Akciğer", "Böbrek", "Karaciğer"], d: 0, z: 1 },
  { s: "Bilgileri taşıyan hücrelerden oluşan sistem hangisidir?", o: ["Sinir sistemi", "Dolaşım sistemi", "Solunum sistemi", "Sindirim sistemi"], d: 0, z: 2 }
]);
SORULAR["fen6"][5] = (SORULAR["fen6"][5] || []).concat([
  { s: "Sağlıklı bir iskelet için hangisi yapılmalıdır?", o: ["Dengeli beslenmek ve spor yapmak", "Uzun süre ekrana bakmak", "Hazır gıda ağırlıklı beslenmek", "Çok az su içmek"], d: 0, z: 1 }
]);
SORULAR["fen6"][2] = (SORULAR["fen6"][2] || []).concat([
  { s: "Bir cismi hareket ettirmek için ne gerekir?", o: ["Kuvvet", "Sıcaklık", "Renk", "Ses"], d: 0, z: 1 },
  { s: "Sürtünme kuvveti hangi yüzeyde en fazladır?", o: ["Pürüzlü yüzey", "Buz", "Cam", "Mermer"], d: 0, z: 2 }
]);
SORULAR["fen6"][4] = (SORULAR["fen6"][4] || []).concat([
  { s: "Sesin yayılması için ne gerekir?", o: ["Bir ortam (madde)", "Boşluk", "Karanlık", "Sessizlik"], d: 0, z: 2 },
  { s: "Sesin şiddetini ölçen alet hangisidir?", o: ["Ses ölçer (decibel)", "Termometre", "Barometre", "Cetvel"], d: 0, z: 2 }
]);
SORULAR["fen6"][6] = (SORULAR["fen6"][6] || []).concat([
  { s: "Hangisi elektriği iletir (iletken)?", o: ["Bakır", "Plastik", "Cam", "Tahta"], d: 0, z: 1 }
]);

/* --- Türkçe --- */
SORULAR["trk6"] = SORULAR["trk6"] || {};
SORULAR["trk6"][0] = (SORULAR["trk6"][0] || []).concat([
  { s: "'soğuk' kelimesinin zıt anlamlısı hangisidir?", o: ["sıcak", "buz", "serin", "kış"], d: 0, z: 1 },
  { s: "'göz' kelimesi hangi cümlede gerçek anlamıyla kullanılmıştır?", o: ["Annemin gözleri yeşildir.", "Evin gözü kalmış.", "Bu işin gözüne girdi.", "Sözünü gözden çıkardı."], d: 0, z: 3 }
]);
SORULAR["trk6"][1] = (SORULAR["trk6"][1] || []).concat([
  { s: "'Sınavdan 100 aldı.' cümlesinin duygu yönü hangisidir?", o: ["Sevinç", "Üzüntü", "Kızgınlık", "Şaşkınlık"], d: 0, z: 1 },
  { s: "'Kitap okumak insanı geliştirir.' cümlesinde vurgulanan yargı hangisidir?", o: ["Genel geçer bir görüş", "Kişisel bir tercih", "Bir olay", "Bir öneri"], d: 0, z: 2 }
]);
SORULAR["trk6"][4] = (SORULAR["trk6"][4] || []).concat([
  { s: "'koşmak' fiilinin şimdiki zaman hâli hangisidir?", o: ["koşuyor", "koştu", "koşacak", "koşar"], d: 0, z: 1 },
  { s: "Aşağıdakilerden hangisi dilek (istek) kipine örnektir?", o: ["Geleyim.", "Geliyorum.", "Geldim.", "Geleceğim."], d: 0, z: 3 }
]);
SORULAR["trk6"][5] = (SORULAR["trk6"][5] || []).concat([
  { s: "'Annem çarşıdan ekmek aldı' cümlesinde sona hangi noktalama işareti gelmelidir?", o: ["Nokta (.)", "Soru işareti (?)", "Ünlem (!)", "Virgül (,)"], d: 0, z: 1 },
  { s: "Hangi cümlede yazım yanlışı vardır?", o: ["Türkçe dersini seviyorum.", "Ankara'ya gittik.", "Pazartesi günü sınav var.", "Onunda kalemi yok."], d: 3, z: 3 }
]);
SORULAR["trk6"][6] = (SORULAR["trk6"][6] || []).concat([
  { s: "Yaşanmış bir olayı anlatan yazı türüne ne denir?", o: ["Anı", "Masal", "Efsane", "Fabl"], d: 0, z: 2 }
]);

/* --- Sosyal Bilgiler --- */
SORULAR["sos6"] = SORULAR["sos6"] || {};
SORULAR["sos6"][2] = (SORULAR["sos6"][2] || []).concat([
  { s: "Haritada yön bulmamızı sağlayan işaret hangisidir?", o: ["Kuzey oku", "Ölçek çubuğu", "Renkler", "Çizgiler"], d: 0, z: 1 },
  { s: "Deniz seviyesinden aynı yükseklikteki noktaları birleştiren eğrilere ne denir?", o: ["İzohips (eş yükselti)", "Lejant", "Ölçek", "Yön oku"], d: 0, z: 3 }
]);
SORULAR["sos6"][3] = (SORULAR["sos6"][3] || []).concat([
  { s: "Türklerin anayurdu sayılan Orta Asya'da hangi geçim kaynağı yaygındı?", o: ["Hayvancılık", "Balıkçılık", "Madencilik", "Gemicilik"], d: 0, z: 2 }
]);
SORULAR["sos6"][4] = (SORULAR["sos6"][4] || []).concat([
  { s: "Yöneticilerini seçimle belirleyen yönetim biçimi hangisidir?", o: ["Cumhuriyet", "Monarşi", "Krallık", "Saltanat"], d: 0, z: 1 }
]);
SORULAR["sos6"][6] = (SORULAR["sos6"][6] || []).concat([
  { s: "Farklı ülkelerle yapılan mal alışverişine ne ad verilir?", o: ["Dış ticaret", "İç ticaret", "Takas", "Yardım"], d: 0, z: 2 }
]);
SORULAR["sos6"][7] = (SORULAR["sos6"][7] || []).concat([
  { s: "Üretilen ürünlerin ihtiyaç sahiplerine ulaştırılmasına ne denir?", o: ["Dağıtım", "Üretim", "Tüketim", "Planlama"], d: 0, z: 1 }
]);

/* --- İngilizce --- */
SORULAR["ing6"] = SORULAR["ing6"] || {};
SORULAR["ing6"][1] = (SORULAR["ing6"][1] || []).concat([
  { s: "'I drink milk for breakfast.' cümlesinin anlamı nedir?", o: ["Kahvaltıda süt içerim.", "Akşam yemeğinde süt içerim.", "Sütü sevmem.", "Kahvaltıda çay içerim."], d: 0, z: 1 }
]);
SORULAR["ing6"][3] = (SORULAR["ing6"][3] || []).concat([
  { s: "'It is rainy and cold today.' cümlesine göre bugün hava nasıldır?", o: ["Yağmurlu ve soğuk", "Güneşli ve sıcak", "Karlı", "Rüzgarlı"], d: 0, z: 1 },
  { s: "'I feel sad.' hangi duygudur?", o: ["Üzgünüm", "Mutluyum", "Yorgunum", "Kızgınım"], d: 0, z: 1 }
]);
SORULAR["ing6"][5] = (SORULAR["ing6"][5] || []).concat([
  { s: "'Do you like reading books?' sorusuna olumlu kısa cevap hangisidir?", o: ["Yes, I do.", "No, I don't.", "Yes, I am.", "Yes, I can."], d: 0, z: 2 }
]);
SORULAR["ing6"][6] = (SORULAR["ing6"][6] || []).concat([
  { s: "'Where did you go on holiday?' sorusuna uygun cevap hangisidir?", o: ["I went to Antalya.", "I go to Antalya.", "I will go to Antalya.", "I am going to Antalya."], d: 0, z: 2 }
]);
SORULAR["ing6"][8] = (SORULAR["ing6"][8] || []).concat([
  { s: "Çevreyi korumak için hangisi yapılmalıdır?", o: ["Geri dönüşüm yapmak", "Çöp atmak", "Enerji israf etmek", "Ormanları yakmak"], d: 0, z: 1 }
]);

/* --- Din Kültürü --- */
SORULAR["din6"] = SORULAR["din6"] || {};
SORULAR["din6"][1] = (SORULAR["din6"][1] || []).concat([
  { s: "Günde kaç vakit namaz farzdır?", o: ["5", "3", "4", "7"], d: 0, z: 1 },
  { s: "Namaza başlarken söylenen 'Allahu Ekber' sözüne ne ad verilir?", o: ["Tekbir", "Besmele", "Selam", "Dua"], d: 0, z: 2 }
]);
SORULAR["din6"][3] = (SORULAR["din6"][3] || []).concat([
  { s: "Hz. Muhammed'in (s.a.v.) doğduğu şehir hangisidir?", o: ["Mekke", "Medine", "Kudüs", "Taif"], d: 0, z: 1 }
]);
SORULAR["din6"][4] = (SORULAR["din6"][4] || []).concat([
  { s: "Yardımlaşma ve dayanışmanın öne çıktığı, oruç tutulan ay hangisidir?", o: ["Ramazan", "Muharrem", "Şaban", "Recep"], d: 0, z: 1 }
]);
SORULAR["din6"][5] = (SORULAR["din6"][5] || []).concat([
  { s: "Kur'an'da öğrenmenin ve bilmenin önemi hangi kavramla vurgulanır?", o: ["İlim", "Ticaret", "Şiir", "Süs"], d: 0, z: 1 }
]);

/* --- Bilişim Teknolojileri --- */
SORULAR["bty6"] = SORULAR["bty6"] || {};
SORULAR["bty6"][0] = (SORULAR["bty6"][0] || []).concat([
  { s: "Bir sorunu çözmek için izlenen adım adım plana ne denir?", o: ["Algoritma", "Program", "Veri", "Belge"], d: 0, z: 1 }
]);
SORULAR["bty6"][1] = (SORULAR["bty6"][1] || []).concat([
  { s: "Blok tabanlı programlamada tekrar eden işlemleri sağlayan blok hangisidir?", o: ["Tekrarla (döngü)", "Hareket", "Görünüm", "Ses"], d: 0, z: 2 }
]);
SORULAR["bty6"][5] = (SORULAR["bty6"][5] || []).concat([
  { s: "İnternette şifre belirlerken hangisi daha güvenlidir?", o: ["Büyük-küçük harf ve rakam içeren uzun şifre", "Doğum tarihi", "1234", "Kendi adım"], d: 0, z: 1 }
]);
SORULAR["bty6"][7] = (SORULAR["bty6"][7] || []).concat([
  { s: "İnternette doğru bilgiye ulaşmak için hangisi yapılmalıdır?", o: ["Birden fazla güvenilir kaynağı karşılaştırmak", "İlk görülen her bilgiye inanmak", "Rastgele sitelere güvenmek", "Bilgiyi kimseyle paylaşmamak"], d: 0, z: 2 }
]);

/* --- Almanca --- */
SORULAR["alm6"] = SORULAR["alm6"] || {};
SORULAR["alm6"][3] = (SORULAR["alm6"][3] || []).concat([
  { s: "'die Oma' ne demektir?", o: ["Büyükanne", "Büyükbaba", "Hala", "Teyze"], d: 0, z: 1 }
]);
SORULAR["alm6"][6] = (SORULAR["alm6"][6] || []).concat([
  { s: "'die Milch' ne demektir?", o: ["Süt", "Su", "Çay", "Meyve suyu"], d: 0, z: 1 }
]);

/* ====== 6. SINIF SORU HAVUZU GENİŞLETME-2 (bty6, sos6, ing6, din6) ====== */

/* --- Bilişim Teknolojileri 6 --- */
SORULAR["bty6"] = SORULAR["bty6"] || {};
SORULAR["bty6"][0] = (SORULAR["bty6"][0] || []).concat([
  { s: "Algoritmanın sonucu karar verme durumlarında hangi ifade kullanılır?", o: ["Eğer/O zaman (koşul)", "Başla", "Bitir", "Yazdır"], d: 0, z: 2 },
  { s: "Algoritmada işlemler arasındaki akışı gösteren şekil hangisidir?", o: ["Ok (akış oku)", "Silgi", "Kalem", "Kutu rengi"], d: 0, z: 1 }
]);
SORULAR["bty6"][1] = (SORULAR["bty6"][1] || []).concat([
  { s: "Blok tabanlı programlamada \"Eğer ... ise ... değilse\" bloğuna ne ad verilir?", o: ["Koşul (şart) bloğu", "Döngü bloğu", "Ses bloğu", "Görünüm bloğu"], d: 0, z: 2 },
  { s: "Scratch benzeri programlarda karakterin ekranda hareket etmesini sağlayan blok hangisidir?", o: ["Hareket", "Ses", "Görünüm", "Sensör"], d: 0, z: 1 }
]);
SORULAR["bty6"][2] = (SORULAR["bty6"][2] || []).concat([
  { s: "Kelime işlemci programında yazılan metni kaydetmek için hangisi kullanılır?", o: ["Kaydet / Ctrl+S", "Sil / Delete", "Kopyala / Ctrl+C", "Kapat"], d: 0, z: 1 },
  { s: "Yazılan bir sözcüğün altını kırmızı çiziyorsa sorun genellikle nedir?", o: ["Yazım hatası olabilir", "Sayfa boş", "Yazıcı bozuk", "Fare çalışmıyor"], d: 0, z: 1 },
  { s: "Kelime işlemcide yazıyı kalın yapmak için hangi düğme kullanılır?", o: ["Kalın (B)", "Altı çizili", "Yazı tipi rengi", "Hizala"], d: 0, z: 1 }
]);
SORULAR["bty6"][3] = (SORULAR["bty6"][3] || []).concat([
  { s: "Hücrelerden oluşan, sayılarla işlem yapılan program türü hangisidir?", o: ["Elektronik tablolama", "Kelime işlemci", "Sunum programı", "Tarayıcı"], d: 0, z: 2 },
  { s: "Elektronik tabloda satır ile sütunun kesiştiği yere ne denir?", o: ["Hücre", "Sayfa", "Belge", "Slayt"], d: 0, z: 1 },
  { s: "Elektronik tabloda toplama işlemi için kullanılan formül hangisidir?", o: ["=TOPLA(A1:A5)", "=BÖL(A1:A5)", "=ÇIKAR(A1:A5)", "A1+A5=A"], d: 0, z: 3 }
]);
SORULAR["bty6"][4] = (SORULAR["bty6"][4] || []).concat([
  { s: "Sunum programında ekrana yansıtılan her bir sayfaya ne denir?", o: ["Slayt", "Hücre", "Belge", "Sayfa bloğu"], d: 0, z: 1 },
  { s: "Sunum yaparken dinleyicilerin dikkatini çekmek için hangisi yapılmalıdır?", o: ["Kısa ve öz cümleler kullanmak", "Slaytı tümüyle yazıyla doldurmak", "Küçük puntolar kullanmak", "Uzun paragraflar yazmak"], d: 0, z: 2 },
  { s: "Sunuma hareketli geçişler eklemek için kullanılan özellik hangisidir?", o: ["Geçiş (animasyon)", "Yazdır", "Paylaş", "Kaydet"], d: 0, z: 1 }
]);
SORULAR["bty6"][5] = (SORULAR["bty6"][5] || []).concat([
  { s: "Kişisel bilgilerini internette paylaşırken hangisi daha güvenlidir?", o: ["Gerekmedikçe paylaşmamak", "Her yerde paylaşmak", "Tanımadığına bile vermek", "Şifresiyle paylaşmak"], d: 0, z: 1 },
  { s: "Başkasının emeğine saygı duymak ve kaynak göstermek hangi kavramla ifade edilir?", o: ["Telif hakları", "Korsan yazılım", "Şifre", "Çerez"], d: 0, z: 2 }
]);
SORULAR["bty6"][6] = (SORULAR["bty6"][6] || []).concat([
  { s: "Uzaktaki insanlarla görüntülü toplantı yapmak için kullanılan araç hangisidir?", o: ["Görüntülü konuşma programı", "Yazıcı", "Tarayıcı", "Hesap makinesi"], d: 0, z: 1 },
  { s: "İş birlikli çalışmada aynı belge üzerinde birlikte çalışmaya ne denir?", o: ["Ortak çalışma (iş birliği)", "Bireysel çalışma", "Yarışma", "Dinleme"], d: 0, z: 2 },
  { s: "Bir proje için arkadaşınla dosya paylaşmanın en uygun yolu hangisidir?", o: ["Bulanık bulut depolama / e-posta", "Bilgisayarı açık bırakmak", "Şifreyi herkese vermek", "Kâğıda yazıp atmak"], d: 0, z: 1 }
]);
SORULAR["bty6"][7] = (SORULAR["bty6"][7] || []).concat([
  { s: "İnternette bilgi ararken \"anahtar kelime\" kullanmanın amacı nedir?", o: ["Aramayı daraltıp hızlı sonuç bulmak", "Aramayı yavaşlatmak", "Virüs almak", "Şifreyi değiştirmek"], d: 0, z: 1 },
  { s: "İnternetten alınan bilgilerin güvenilir olduğunu anlamak için hangisi yapılmalıdır?", o: ["Kaynağın güvenilirliğini kontrol etmek", "Hemen paylaşmak", "Olduğu gibi kabul etmek", "Sadece başlığına bakmak"], d: 0, z: 1 }
]);

/* --- Sosyal Bilgiler 6 --- */
SORULAR["sos6"] = SORULAR["sos6"] || {};
SORULAR["sos6"][1] = (SORULAR["sos6"][1] || []).concat([
  { s: "Bir kültürün gelecek kuşaklara aktarılmasını sağlayan en önemli unsur hangisidir?", o: ["Dil", "Yollar", "İklim", "Ulaşım"], d: 0, z: 1 },
  { s: "Hangisi somut kültürel miras öğesidir?", o: ["Tarihi cami", "Bir düşünce", "Bir atasözü", "Bir inanç"], d: 0, z: 2 },
  { s: "Bir toplumun sahip olduğu değer ve geleneklerin tümüne ne denir?", o: ["Kültür", "Sermaye", "Sanayi", "Ticaret"], d: 0, z: 1 }
]);
SORULAR["sos6"][3] = (SORULAR["sos6"][3] || []).concat([
  { s: "Anadolu'ya yerleşen Türklerin ilk beyliklerinden biri hangisidir?", o: ["Büyük Selçuklu", "Bizans", "Pers", "Roma"], d: 0, z: 2 },
  { s: "Osmanlı Devleti'nin kurucusu kimdir?", o: ["Osman Bey", "Alparslan", "Fatih Sultan Mehmet", "Kanuni"], d: 0, z: 1 },
  { s: "Türklerin İslamiyet'i toplu olarak kabul etmeye başladığı dönem hangi savaşla bağdaştırılır?", o: ["Talas Savaşı", "Malazgirt Savaşı", "Kurtuluş Savaşı", "Çanakkale Savaşı"], d: 0, z: 3 }
]);
SORULAR["sos6"][4] = (SORULAR["sos6"][4] || []).concat([
  { s: "Yönetime katılmanın temel yolu hangisidir?", o: ["Seçimlerde oy kullanmak", "Sadece izlemek", "Şikayet etmek", "Vergi vermemek"], d: 0, z: 1 },
  { s: "Muhtarlık, belediye başkanlığı hangi yönetim basamağına örnektir?", o: ["Yerel yönetim", "Merkezi yönetim", "Yargı", "Askeri yönetim"], d: 0, z: 2 }
]);
SORULAR["sos6"][5] = (SORULAR["sos6"][5] || []).concat([
  { s: "Bilimsel bir buluşun yeni bir ürüne dönüşmesine ne denir?", o: ["İnovasyon (yenilik)", "Taklit", "İthalat", "Atalet"], d: 0, z: 2 },
  { s: "Matbaanın yaygınlaşması toplumlarda en çok hangisini artırmıştır?", o: ["Bilgiye erişimi", "Yoksulluğu", "İşsizliği", "Savaşları"], d: 0, z: 1 }
]);
SORULAR["sos6"][6] = (SORULAR["sos6"][6] || []).concat([
  { s: "Farklı ülkelerle yapılan dış ticarette satın alınan ürünlere ne denir?", o: ["İthalat", "İhracat", "Üretim", "Tasarruf"], d: 0, z: 2 },
  { s: "Dünyada görülen iklim farklılıklarının en temel nedeni hangisidir?", o: ["Güneş ışınlarının geliş açısı", "Para birimi", "Nüfus sayısı", "Bilgisayar kullanımı"], d: 0, z: 2 }
]);
SORULAR["sos6"][7] = (SORULAR["sos6"][7] || []).concat([
  { s: "Tarım ürünlerinin işlenerek yeni ürünler elde edilmesine ne denir?", o: ["Üretim", "Tüketim", "İsraf", "Tasarruf"], d: 0, z: 1 },
  { s: "Bir ülkenin zenginliğinin ölçüsü aşağıdakilerden hangisidir?", o: ["Üretim ve hizmet değeri", "Sadece altın", "Sadece araba sayısı", "Sadece iklim"], d: 0, z: 2 }
]);

/* --- İngilizce 6 --- */
SORULAR["ing6"] = SORULAR["ing6"] || {};
SORULAR["ing6"][2] = (SORULAR["ing6"][2] || []).concat([
  { s: "\"Where is the bank?\" sorusunun anlamı nedir?", o: ["Banka nerede?", "Saat kaç?", "Adın ne?", "Kaç yaşındasın?"], d: 0, z: 1 },
  { s: "\"go straight\" ifadesinin Türkçe karşılığı nedir?", o: ["Düz git", "Sola dön", "Sağa dön", "Dur"], d: 0, z: 1 },
  { s: "Şehirde yön tarif ederken \"next to\" ne anlama gelir?", o: ["Yanında", "Karşısında", "Uzağında", "Üstünde"], d: 0, z: 2 }
]);
SORULAR["ing6"][4] = (SORULAR["ing6"][4] || []).concat([
  { s: "\"What does your father do?\" sorusuna doğru cevap hangisidir?", o: ["He is a teacher.", "He is at home.", "He is tall.", "He is happy."], d: 0, z: 2 },
  { s: "\"police officer\" ne demektir?", o: ["Polis memuru", "Doktor", "Öğretmen", "Çiftçi"], d: 0, z: 1 }
]);
SORULAR["ing6"][5] = (SORULAR["ing6"][5] || []).concat([
  { s: "\"I read a book every day.\" cümlesinin Türkçesi nedir?", o: ["Her gün kitap okurum.", "Dün kitap okudum.", "Yarın kitap okuyacağım.", "Kitap okumam."], d: 0, z: 1 },
  { s: "\"story book\" ne demektir?", o: ["Hikaye kitabı", "Defter", "Ders kitabı", "Sözlük"], d: 0, z: 1 }
]);
SORULAR["ing6"][7] = (SORULAR["ing6"][7] || []).concat([
  { s: "\"I like riding the roller coaster.\" cümlesinde \"roller coaster\" ne demektir?", o: ["Lunapark hızlı treni", "Atlıkarınca", "Salıncak", "Kaydırak"], d: 0, z: 2 },
  { s: "Hangisi eğlence parkında yapılan bir aktivitedir?", o: ["Riding a carousel", "Doing homework", "Washing dishes", "Sleeping"], d: 0, z: 1 }
]);

/* --- Din Kültürü ve Ahlak Bilgisi 6 --- */
SORULAR["din6"] = SORULAR["din6"] || {};
SORULAR["din6"][2] = (SORULAR["din6"][2] || []).concat([
  { s: "Zararlı alışkanlıkların başında hangisi gelir?", o: ["Sigara, alkol ve uyuşturucu", "Kitap okumak", "Spor yapmak", "Yüzme"], d: 0, z: 1 },
  { s: "Zararlı alışkanlıklardan korunmak için en etkili yol hangisidir?", o: ["Kendine güvenli ve bilinçli olmak", "Arkadaşları taklit etmek", "Merakla denemek", "Yalnız kalmak"], d: 0, z: 1 },
  { s: "\"Sağlıklı olmak bedenine iyi bakmaktır.\" ifadesi hangi değeri vurgular?", o: ["Sağlığı koruma bilinci", "İsraf", "Tembellik", "Kibir"], d: 0, z: 1 }
]);
SORULAR["din6"][3] = (SORULAR["din6"][3] || []).concat([
  { s: "Hz. Muhammed (s.a.v.) peygamberlik gelmeden önce hangi mesleği yapıyordu?", o: ["Ticaret", "Doktorluk", "Öğretmenlik", "Çiftçilik"], d: 0, z: 1 },
  { s: "İslamiyet'i ilk kabul eden kişilerden hangisi \"ilk Müslüman kadın\" olarak bilinir?", o: ["Hz. Hatice", "Hz. Fatıma", "Hz. Ayşe", "Hz. Meryem"], d: 0, z: 2 },
  { s: "Hz. Muhammed'in (s.a.v.) doğduğu yılın adı nedir?", o: ["Fil Yılı", "Bereket Yılı", "Barış Yılı", "Kıtlık Yılı"], d: 0, z: 2 }
]);
SORULAR["din6"][4] = (SORULAR["din6"][4] || []).concat([
  { s: "Aşağıdakilerden hangisi temel ahlaki değerlerden biridir?", o: ["Dürüstlük", "Yalancılık", "Bencillik", "Kibir"], d: 0, z: 1 },
  { s: "\"Yalan söylememek, sözünde durmak\" hangi değeri ifade eder?", o: ["Doğruluk ve güvenilirlik", "Sabırsızlık", "Kıskançlık", "Tembellik"], d: 0, z: 1 },
  { s: "Anne babaya saygı göstermek hangi değerin gereğidir?", o: ["Büyüklere saygı", "İsraf", "Kıskançlık", "Kayıtsızlık"], d: 0, z: 1 }
]);
SORULAR["din6"][5] = (SORULAR["din6"][5] || []).concat([
  { s: "Kur'an-ı Kerim'de \"oku\" emri hangi olayla bağlantılıdır?", o: ["İlk vahiy (Alak Suresi)", "Hicret", "Bedir Savaşı", "Veda Hutbesi"], d: 0, z: 2 },
  { s: "Bilim insanlarının yaptığı araştırmaları Kur'an'ın hangi emri destekler?", o: ["Düşünme ve akletme", "Uyuma", "Yemek yeme", "Seyretme"], d: 0, z: 1 },
  { s: "\"Kur'an'ı anlayarak okumak\" neyi sağlar?", o: ["İçindeki öğütleri hayata geçirmeyi", "Sadece ezber yapmayı", "Boş vakit geçirmeyi", "Kitaplığı süslemeyi"], d: 0, z: 1 }
]);
/* Görsel Sanatlar (grs5) - otomatik eklenen pratik soruları */
SORULAR["grs5"] = {
  "0": [
    {
      "s": "Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?",
      "o": [
        "Degrade (ton geçişi)",
        "Perspektif",
        "Kompozisyon",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hangileri sıcak renklerdir?",
      "o": [
        "Kırmızı, turuncu, sarı",
        "Mavi, yeşil, mor",
        "Siyah, beyaz, gri",
        "Pembe, kahverengi, lacivert"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Renk çemberinde birbirine zıt renklere ne ad verilir?",
      "o": [
        "Tamamlayıcı renk",
        "Ana renk",
        "Ara renk",
        "Sıcak renk"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?",
      "o": [
        "Noktacılık (pointillism)",
        "Hat çizimi",
        "Karakalem",
        "Silgi ile çizim"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Açık-koyu (ışık-gölge) çalışmasına ne denir?",
      "o": [
        "Karakalem tonlama",
        "Perspektif",
        "Kompozisyon",
        "Renk harmanı"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?",
      "o": [
        "HB, 2B, 4B",
        "1A, 2A",
        "XS, S",
        "M, L"
      ],
      "d": 0,
      "z": 3
    }
  ],
  "2": [
    {
      "s": "Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?",
      "o": [
        "Perspektif",
        "Kompozisyon",
        "Orantı",
        "Simetri"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir resmin öğelerinin düzenine ne denir?",
      "o": [
        "Kompozisyon",
        "Perspektif",
        "Ton",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?",
      "o": [
        "Tek kaçış noktalı perspektif",
        "İki boyutlu",
        "Soyut",
        "Eksentrik"
      ],
      "d": 0,
      "z": 3
    }
  ]
};

/* Müzik (mzk5) - otomatik eklenen pratik soruları */
SORULAR["mzk5"] = {
  "0": [
    {
      "s": "Müziğin temposunu belirleyen düzenli vuruşlara ne denir?",
      "o": [
        "Ritim",
        "Melodi",
        "Armoni",
        "Ton"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hızlı tempoya ne denir?",
      "o": [
        "Allegro",
        "Adagio",
        "Andante",
        "Largo"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Sessizlik sürelerini gösteren işaretlere ne ad verilir?",
      "o": [
        "Sus işareti",
        "Nota",
        "Ölçü",
        "Anahtar"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Müziğin alfabesindeki temel ses sembolüne ne denir?",
      "o": [
        "Nota",
        "Ritim",
        "Akor",
        "Makam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir oktavdaki temel ses sayısı kaçtır?",
      "o": [
        "7",
        "5",
        "12",
        "3"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?",
      "o": [
        "Solfej",
        "Ritim",
        "Kompozisyon",
        "İcra"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Telli çalgılara örnek hangisidir?",
      "o": [
        "Gitar",
        "Davul",
        "Flüt",
        "Zil"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Üflemeli çalgılara örnek hangisidir?",
      "o": [
        "Flüt",
        "Keman",
        "Piyano",
        "Marakas"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Vurmalı çalgılara örnek hangisidir?",
      "o": [
        "Davul",
        "Keman",
        "Gitar",
        "Saksafon"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Beden Eğitimi (bed5) - otomatik eklenen pratik soruları */
SORULAR["bed5"] = {
  "0": [
    {
      "s": "Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?",
      "o": [
        "Isınma",
        "Soğuma",
        "Yarış",
        "Antrenman"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kasları esnek hale getiren hareketlere ne denir?",
      "o": [
        "Esnetme",
        "Koşu",
        "Zıplama",
        "Sıçrama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Isınmadan spor yapmanın riski nedir?",
      "o": [
        "Sakatlanma",
        "Daha hızlı olma",
        "Enerji artışı",
        "Kas gücü"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Beşer kişilik iki takımla oynanan saha oyunu hangisidir?",
      "o": [
        "Basketbol",
        "Satranç",
        "Yüzme",
        "Tenis"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?",
      "o": [
        "11",
        "5",
        "7",
        "9"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Topu elle oynamanın yasak olduğu takım oyunu hangisidir?",
      "o": [
        "Futbol",
        "Hentbol",
        "Basketbol",
        "Voleybol"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Sağlıklı beslenmede öğünlere örnek hangisidir?",
      "o": [
        "Kahvaltı, öğle, akşam",
        "Atıştırma",
        "Tek öğün",
        "Aç kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Sporcular için önemli enerji kaynağı hangisidir?",
      "o": [
        "Karbonhidrat",
        "Şekerli gazlı içecek",
        "Aşırı yağ",
        "Tuz"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Vücudun susuz kalmaması için ne yapılmalıdır?",
      "o": [
        "Yeterli su içilmeli",
        "Az su içilmeli",
        "Hiç su içilmemeli",
        "Sadece meyve suyu"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Teknoloji ve Tasarım (tvt5) - otomatik eklenen pratik soruları */
SORULAR["tvt5"] = {
  "0": [
    {
      "s": "Bir ürün ortaya koyarken izlenen aşamalar bütününe ne denir?",
      "o": [
        "Tasarım süreci",
        "Üretim",
        "Tüketim",
        "Reklam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarım sürecinin ilk adımı genelde nedir?",
      "o": [
        "İhtiyaç ve problemi belirleme",
        "Üretim",
        "Satış",
        "Paketleme"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarımda farklı fikirler üretme aşamasına ne denir?",
      "o": [
        "Beyin fırtınası",
        "Çizim",
        "Test",
        "Sunum"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Yükü kaldırmayı kolaylaştıran eğik düzlem örneği hangisidir?",
      "o": [
        "Rampa",
        "Tekerlek",
        "Kaldıraç",
        "Vida"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir noktaya göre kuvvet uygulayan basit makine hangisidir?",
      "o": [
        "Kaldıraç",
        "Rampa",
        "Makara",
        "Dişli"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Dönme hareketiyle iş yapan basit makine hangisidir?",
      "o": [
        "Tekerlek",
        "Kaldıraç",
        "Vida",
        "Rampa"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Atıkların yeniden değerlendirilmesine ne denir?",
      "o": [
        "Geri dönüşüm",
        "Üretim",
        "İmalat",
        "İhracat"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kağıt, cam ve plastik hangi gruba girer?",
      "o": [
        "Geri dönüştürülebilir atık",
        "Organik atık",
        "Tehlikeli atık",
        "Evsel atık"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Geri dönüşümün faydası nedir?",
      "o": [
        "Doğal kaynakların korunması",
        "Daha fazla çöp",
        "Enerji israfı",
        "Ormanların azalması"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Rehberlik (reb5) - otomatik eklenen pratik soruları */
SORULAR["reb5"] = {
  "0": [
    {
      "s": "Sevinç, korku, öfke ve üzüntü neyin örnekleridir?",
      "o": [
        "Temel duygular",
        "Zihinsel süreçler",
        "Fiziksel tepkiler",
        "Alışkanlıklar"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Duygularımızı sağlıklı ifade etmenin yolu nedir?",
      "o": [
        "Konuşarak anlatma",
        "Sessiz kalma",
        "Bağırma",
        "İçe kapanma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Stresle başa çıkmanın sağlıklı yolu hangisidir?",
      "o": [
        "Nefes egzersizi ve konuşma",
        "Öfke patlaması",
        "Kaçma",
        "Uyumama"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Sağlıklı bir arkadaşlıkta önemli olan nedir?",
      "o": [
        "Karşılıklı saygı ve güven",
        "Rekabet",
        "Kıskançlık",
        "Baskı"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Arkadaşlar arasında çatışma çıktığında ne yapılmalıdır?",
      "o": [
        "Konuşarak çözüm arama",
        "Küsme",
        "Bağırma",
        "Dışlama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Empati ne demektir?",
      "o": [
        "Başkasının duygusunu anlama",
        "Yargılama",
        "Eleştirme",
        "Kıskanma"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Başarıya ulaşmada ilk adım nedir?",
      "o": [
        "Hedef belirleme",
        "Bekleme",
        "Şansa bırakma",
        "Başkalarına bağlı kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hedeflere ulaşmada yardımcı olan günlük düzen nedir?",
      "o": [
        "Plan yapma",
        "Erteleme",
        "Dağınıklık",
        "Düzensizlik"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kısa vadeli hedefe örnek hangisidir?",
      "o": [
        "Haftalık ödevi bitirme",
        "Üniversite bitirme",
        "Emekli olma",
        "Evlenme"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Görsel Sanatlar (grs6) - otomatik eklenen pratik soruları */
SORULAR["grs6"] = {
  "0": [
    {
      "s": "Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?",
      "o": [
        "Degrade (ton geçişi)",
        "Perspektif",
        "Kompozisyon",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hangileri sıcak renklerdir?",
      "o": [
        "Kırmızı, turuncu, sarı",
        "Mavi, yeşil, mor",
        "Siyah, beyaz, gri",
        "Pembe, kahverengi, lacivert"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Renk çemberinde birbirine zıt renklere ne ad verilir?",
      "o": [
        "Tamamlayıcı renk",
        "Ana renk",
        "Ara renk",
        "Sıcak renk"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?",
      "o": [
        "Noktacılık (pointillism)",
        "Hat çizimi",
        "Karakalem",
        "Silgi ile çizim"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Açık-koyu (ışık-gölge) çalışmasına ne denir?",
      "o": [
        "Karakalem tonlama",
        "Perspektif",
        "Kompozisyon",
        "Renk harmanı"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?",
      "o": [
        "HB, 2B, 4B",
        "1A, 2A",
        "XS, S",
        "M, L"
      ],
      "d": 0,
      "z": 3
    }
  ],
  "2": [
    {
      "s": "Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?",
      "o": [
        "Perspektif",
        "Kompozisyon",
        "Orantı",
        "Simetri"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir resmin öğelerinin düzenine ne denir?",
      "o": [
        "Kompozisyon",
        "Perspektif",
        "Ton",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?",
      "o": [
        "Tek kaçış noktalı perspektif",
        "İki boyutlu",
        "Soyut",
        "Eksentrik"
      ],
      "d": 0,
      "z": 3
    }
  ]
};

/* Müzik (mzk6) - otomatik eklenen pratik soruları */
SORULAR["mzk6"] = {
  "0": [
    {
      "s": "Müziğin temposunu belirleyen düzenli vuruşlara ne denir?",
      "o": [
        "Ritim",
        "Melodi",
        "Armoni",
        "Ton"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hızlı tempoya ne denir?",
      "o": [
        "Allegro",
        "Adagio",
        "Andante",
        "Largo"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Sessizlik sürelerini gösteren işaretlere ne ad verilir?",
      "o": [
        "Sus işareti",
        "Nota",
        "Ölçü",
        "Anahtar"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Müziğin alfabesindeki temel ses sembolüne ne denir?",
      "o": [
        "Nota",
        "Ritim",
        "Akor",
        "Makam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir oktavdaki temel ses sayısı kaçtır?",
      "o": [
        "7",
        "5",
        "12",
        "3"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?",
      "o": [
        "Solfej",
        "Ritim",
        "Kompozisyon",
        "İcra"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Telli çalgılara örnek hangisidir?",
      "o": [
        "Gitar",
        "Davul",
        "Flüt",
        "Zil"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Üflemeli çalgılara örnek hangisidir?",
      "o": [
        "Flüt",
        "Keman",
        "Piyano",
        "Marakas"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Vurmalı çalgılara örnek hangisidir?",
      "o": [
        "Davul",
        "Keman",
        "Gitar",
        "Saksafon"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Beden Eğitimi (bed6) - otomatik eklenen pratik soruları */
SORULAR["bed6"] = {
  "0": [
    {
      "s": "Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?",
      "o": [
        "Isınma",
        "Soğuma",
        "Yarış",
        "Antrenman"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kasları esnek hale getiren hareketlere ne denir?",
      "o": [
        "Esnetme",
        "Koşu",
        "Zıplama",
        "Sıçrama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Isınmadan spor yapmanın riski nedir?",
      "o": [
        "Sakatlanma",
        "Daha hızlı olma",
        "Enerji artışı",
        "Kas gücü"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Beşer kişilik iki takımla oynanan saha oyunu hangisidir?",
      "o": [
        "Basketbol",
        "Satranç",
        "Yüzme",
        "Tenis"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?",
      "o": [
        "11",
        "5",
        "7",
        "9"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Topu elle oynamanın yasak olduğu takım oyunu hangisidir?",
      "o": [
        "Futbol",
        "Hentbol",
        "Basketbol",
        "Voleybol"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Sağlıklı beslenmede öğünlere örnek hangisidir?",
      "o": [
        "Kahvaltı, öğle, akşam",
        "Atıştırma",
        "Tek öğün",
        "Aç kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Sporcular için önemli enerji kaynağı hangisidir?",
      "o": [
        "Karbonhidrat",
        "Şekerli gazlı içecek",
        "Aşırı yağ",
        "Tuz"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Vücudun susuz kalmaması için ne yapılmalıdır?",
      "o": [
        "Yeterli su içilmeli",
        "Az su içilmeli",
        "Hiç su içilmemeli",
        "Sadece meyve suyu"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Teknoloji ve Tasarım (tvt6) - otomatik eklenen pratik soruları */
SORULAR["tvt6"] = {
  "0": [
    {
      "s": "Bir ürün ortaya koyarken izlenen aşamalar bütününe ne denir?",
      "o": [
        "Tasarım süreci",
        "Üretim",
        "Tüketim",
        "Reklam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarım sürecinin ilk adımı genelde nedir?",
      "o": [
        "İhtiyaç ve problemi belirleme",
        "Üretim",
        "Satış",
        "Paketleme"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarımda farklı fikirler üretme aşamasına ne denir?",
      "o": [
        "Beyin fırtınası",
        "Çizim",
        "Test",
        "Sunum"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Yükü kaldırmayı kolaylaştıran eğik düzlem örneği hangisidir?",
      "o": [
        "Rampa",
        "Tekerlek",
        "Kaldıraç",
        "Vida"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir noktaya göre kuvvet uygulayan basit makine hangisidir?",
      "o": [
        "Kaldıraç",
        "Rampa",
        "Makara",
        "Dişli"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Dönme hareketiyle iş yapan basit makine hangisidir?",
      "o": [
        "Tekerlek",
        "Kaldıraç",
        "Vida",
        "Rampa"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Atıkların yeniden değerlendirilmesine ne denir?",
      "o": [
        "Geri dönüşüm",
        "Üretim",
        "İmalat",
        "İhracat"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kağıt, cam ve plastik hangi gruba girer?",
      "o": [
        "Geri dönüştürülebilir atık",
        "Organik atık",
        "Tehlikeli atık",
        "Evsel atık"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Geri dönüşümün faydası nedir?",
      "o": [
        "Doğal kaynakların korunması",
        "Daha fazla çöp",
        "Enerji israfı",
        "Ormanların azalması"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Rehberlik (reb6) - otomatik eklenen pratik soruları */
SORULAR["reb6"] = {
  "0": [
    {
      "s": "Sevinç, korku, öfke ve üzüntü neyin örnekleridir?",
      "o": [
        "Temel duygular",
        "Zihinsel süreçler",
        "Fiziksel tepkiler",
        "Alışkanlıklar"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Duygularımızı sağlıklı ifade etmenin yolu nedir?",
      "o": [
        "Konuşarak anlatma",
        "Sessiz kalma",
        "Bağırma",
        "İçe kapanma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Stresle başa çıkmanın sağlıklı yolu hangisidir?",
      "o": [
        "Nefes egzersizi ve konuşma",
        "Öfke patlaması",
        "Kaçma",
        "Uyumama"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Sağlıklı bir arkadaşlıkta önemli olan nedir?",
      "o": [
        "Karşılıklı saygı ve güven",
        "Rekabet",
        "Kıskançlık",
        "Baskı"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Arkadaşlar arasında çatışma çıktığında ne yapılmalıdır?",
      "o": [
        "Konuşarak çözüm arama",
        "Küsme",
        "Bağırma",
        "Dışlama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Empati ne demektir?",
      "o": [
        "Başkasının duygusunu anlama",
        "Yargılama",
        "Eleştirme",
        "Kıskanma"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Başarıya ulaşmada ilk adım nedir?",
      "o": [
        "Hedef belirleme",
        "Bekleme",
        "Şansa bırakma",
        "Başkalarına bağlı kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hedeflere ulaşmada yardımcı olan günlük düzen nedir?",
      "o": [
        "Plan yapma",
        "Erteleme",
        "Dağınıklık",
        "Düzensizlik"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kısa vadeli hedefe örnek hangisidir?",
      "o": [
        "Haftalık ödevi bitirme",
        "Üniversite bitirme",
        "Emekli olma",
        "Evlenme"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Görsel Sanatlar (grs7) - otomatik eklenen pratik soruları */
SORULAR["grs7"] = {
  "0": [
    {
      "s": "Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?",
      "o": [
        "Degrade (ton geçişi)",
        "Perspektif",
        "Kompozisyon",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hangileri sıcak renklerdir?",
      "o": [
        "Kırmızı, turuncu, sarı",
        "Mavi, yeşil, mor",
        "Siyah, beyaz, gri",
        "Pembe, kahverengi, lacivert"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Renk çemberinde birbirine zıt renklere ne ad verilir?",
      "o": [
        "Tamamlayıcı renk",
        "Ana renk",
        "Ara renk",
        "Sıcak renk"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?",
      "o": [
        "Noktacılık (pointillism)",
        "Hat çizimi",
        "Karakalem",
        "Silgi ile çizim"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Açık-koyu (ışık-gölge) çalışmasına ne denir?",
      "o": [
        "Karakalem tonlama",
        "Perspektif",
        "Kompozisyon",
        "Renk harmanı"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?",
      "o": [
        "HB, 2B, 4B",
        "1A, 2A",
        "XS, S",
        "M, L"
      ],
      "d": 0,
      "z": 3
    }
  ],
  "2": [
    {
      "s": "Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?",
      "o": [
        "Perspektif",
        "Kompozisyon",
        "Orantı",
        "Simetri"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir resmin öğelerinin düzenine ne denir?",
      "o": [
        "Kompozisyon",
        "Perspektif",
        "Ton",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?",
      "o": [
        "Tek kaçış noktalı perspektif",
        "İki boyutlu",
        "Soyut",
        "Eksentrik"
      ],
      "d": 0,
      "z": 3
    }
  ]
};

/* Müzik (mzk7) - otomatik eklenen pratik soruları */
SORULAR["mzk7"] = {
  "0": [
    {
      "s": "Müziğin temposunu belirleyen düzenli vuruşlara ne denir?",
      "o": [
        "Ritim",
        "Melodi",
        "Armoni",
        "Ton"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hızlı tempoya ne denir?",
      "o": [
        "Allegro",
        "Adagio",
        "Andante",
        "Largo"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Sessizlik sürelerini gösteren işaretlere ne ad verilir?",
      "o": [
        "Sus işareti",
        "Nota",
        "Ölçü",
        "Anahtar"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Müziğin alfabesindeki temel ses sembolüne ne denir?",
      "o": [
        "Nota",
        "Ritim",
        "Akor",
        "Makam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir oktavdaki temel ses sayısı kaçtır?",
      "o": [
        "7",
        "5",
        "12",
        "3"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?",
      "o": [
        "Solfej",
        "Ritim",
        "Kompozisyon",
        "İcra"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Telli çalgılara örnek hangisidir?",
      "o": [
        "Gitar",
        "Davul",
        "Flüt",
        "Zil"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Üflemeli çalgılara örnek hangisidir?",
      "o": [
        "Flüt",
        "Keman",
        "Piyano",
        "Marakas"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Vurmalı çalgılara örnek hangisidir?",
      "o": [
        "Davul",
        "Keman",
        "Gitar",
        "Saksafon"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Beden Eğitimi (bed7) - otomatik eklenen pratik soruları */
SORULAR["bed7"] = {
  "0": [
    {
      "s": "Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?",
      "o": [
        "Isınma",
        "Soğuma",
        "Yarış",
        "Antrenman"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kasları esnek hale getiren hareketlere ne denir?",
      "o": [
        "Esnetme",
        "Koşu",
        "Zıplama",
        "Sıçrama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Isınmadan spor yapmanın riski nedir?",
      "o": [
        "Sakatlanma",
        "Daha hızlı olma",
        "Enerji artışı",
        "Kas gücü"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Beşer kişilik iki takımla oynanan saha oyunu hangisidir?",
      "o": [
        "Basketbol",
        "Satranç",
        "Yüzme",
        "Tenis"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?",
      "o": [
        "11",
        "5",
        "7",
        "9"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Topu elle oynamanın yasak olduğu takım oyunu hangisidir?",
      "o": [
        "Futbol",
        "Hentbol",
        "Basketbol",
        "Voleybol"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Sağlıklı beslenmede öğünlere örnek hangisidir?",
      "o": [
        "Kahvaltı, öğle, akşam",
        "Atıştırma",
        "Tek öğün",
        "Aç kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Sporcular için önemli enerji kaynağı hangisidir?",
      "o": [
        "Karbonhidrat",
        "Şekerli gazlı içecek",
        "Aşırı yağ",
        "Tuz"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Vücudun susuz kalmaması için ne yapılmalıdır?",
      "o": [
        "Yeterli su içilmeli",
        "Az su içilmeli",
        "Hiç su içilmemeli",
        "Sadece meyve suyu"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Teknoloji ve Tasarım (tvt7) - otomatik eklenen pratik soruları */
SORULAR["tvt7"] = {
  "0": [
    {
      "s": "Bir ürün ortaya koyarken izlenen aşamalar bütününe ne denir?",
      "o": [
        "Tasarım süreci",
        "Üretim",
        "Tüketim",
        "Reklam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarım sürecinin ilk adımı genelde nedir?",
      "o": [
        "İhtiyaç ve problemi belirleme",
        "Üretim",
        "Satış",
        "Paketleme"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarımda farklı fikirler üretme aşamasına ne denir?",
      "o": [
        "Beyin fırtınası",
        "Çizim",
        "Test",
        "Sunum"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Yükü kaldırmayı kolaylaştıran eğik düzlem örneği hangisidir?",
      "o": [
        "Rampa",
        "Tekerlek",
        "Kaldıraç",
        "Vida"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir noktaya göre kuvvet uygulayan basit makine hangisidir?",
      "o": [
        "Kaldıraç",
        "Rampa",
        "Makara",
        "Dişli"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Dönme hareketiyle iş yapan basit makine hangisidir?",
      "o": [
        "Tekerlek",
        "Kaldıraç",
        "Vida",
        "Rampa"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Atıkların yeniden değerlendirilmesine ne denir?",
      "o": [
        "Geri dönüşüm",
        "Üretim",
        "İmalat",
        "İhracat"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kağıt, cam ve plastik hangi gruba girer?",
      "o": [
        "Geri dönüştürülebilir atık",
        "Organik atık",
        "Tehlikeli atık",
        "Evsel atık"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Geri dönüşümün faydası nedir?",
      "o": [
        "Doğal kaynakların korunması",
        "Daha fazla çöp",
        "Enerji israfı",
        "Ormanların azalması"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Rehberlik (reb7) - otomatik eklenen pratik soruları */
SORULAR["reb7"] = {
  "0": [
    {
      "s": "Sevinç, korku, öfke ve üzüntü neyin örnekleridir?",
      "o": [
        "Temel duygular",
        "Zihinsel süreçler",
        "Fiziksel tepkiler",
        "Alışkanlıklar"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Duygularımızı sağlıklı ifade etmenin yolu nedir?",
      "o": [
        "Konuşarak anlatma",
        "Sessiz kalma",
        "Bağırma",
        "İçe kapanma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Stresle başa çıkmanın sağlıklı yolu hangisidir?",
      "o": [
        "Nefes egzersizi ve konuşma",
        "Öfke patlaması",
        "Kaçma",
        "Uyumama"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Sağlıklı bir arkadaşlıkta önemli olan nedir?",
      "o": [
        "Karşılıklı saygı ve güven",
        "Rekabet",
        "Kıskançlık",
        "Baskı"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Arkadaşlar arasında çatışma çıktığında ne yapılmalıdır?",
      "o": [
        "Konuşarak çözüm arama",
        "Küsme",
        "Bağırma",
        "Dışlama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Empati ne demektir?",
      "o": [
        "Başkasının duygusunu anlama",
        "Yargılama",
        "Eleştirme",
        "Kıskanma"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Başarıya ulaşmada ilk adım nedir?",
      "o": [
        "Hedef belirleme",
        "Bekleme",
        "Şansa bırakma",
        "Başkalarına bağlı kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hedeflere ulaşmada yardımcı olan günlük düzen nedir?",
      "o": [
        "Plan yapma",
        "Erteleme",
        "Dağınıklık",
        "Düzensizlik"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kısa vadeli hedefe örnek hangisidir?",
      "o": [
        "Haftalık ödevi bitirme",
        "Üniversite bitirme",
        "Emekli olma",
        "Evlenme"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Görsel Sanatlar (grs8) - otomatik eklenen pratik soruları */
SORULAR["grs8"] = {
  "0": [
    {
      "s": "Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?",
      "o": [
        "Degrade (ton geçişi)",
        "Perspektif",
        "Kompozisyon",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hangileri sıcak renklerdir?",
      "o": [
        "Kırmızı, turuncu, sarı",
        "Mavi, yeşil, mor",
        "Siyah, beyaz, gri",
        "Pembe, kahverengi, lacivert"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Renk çemberinde birbirine zıt renklere ne ad verilir?",
      "o": [
        "Tamamlayıcı renk",
        "Ana renk",
        "Ara renk",
        "Sıcak renk"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?",
      "o": [
        "Noktacılık (pointillism)",
        "Hat çizimi",
        "Karakalem",
        "Silgi ile çizim"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Açık-koyu (ışık-gölge) çalışmasına ne denir?",
      "o": [
        "Karakalem tonlama",
        "Perspektif",
        "Kompozisyon",
        "Renk harmanı"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?",
      "o": [
        "HB, 2B, 4B",
        "1A, 2A",
        "XS, S",
        "M, L"
      ],
      "d": 0,
      "z": 3
    }
  ],
  "2": [
    {
      "s": "Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?",
      "o": [
        "Perspektif",
        "Kompozisyon",
        "Orantı",
        "Simetri"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir resmin öğelerinin düzenine ne denir?",
      "o": [
        "Kompozisyon",
        "Perspektif",
        "Ton",
        "Ritim"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?",
      "o": [
        "Tek kaçış noktalı perspektif",
        "İki boyutlu",
        "Soyut",
        "Eksentrik"
      ],
      "d": 0,
      "z": 3
    }
  ]
};

/* Müzik (mzk8) - otomatik eklenen pratik soruları */
SORULAR["mzk8"] = {
  "0": [
    {
      "s": "Müziğin temposunu belirleyen düzenli vuruşlara ne denir?",
      "o": [
        "Ritim",
        "Melodi",
        "Armoni",
        "Ton"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hızlı tempoya ne denir?",
      "o": [
        "Allegro",
        "Adagio",
        "Andante",
        "Largo"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Sessizlik sürelerini gösteren işaretlere ne ad verilir?",
      "o": [
        "Sus işareti",
        "Nota",
        "Ölçü",
        "Anahtar"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Müziğin alfabesindeki temel ses sembolüne ne denir?",
      "o": [
        "Nota",
        "Ritim",
        "Akor",
        "Makam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir oktavdaki temel ses sayısı kaçtır?",
      "o": [
        "7",
        "5",
        "12",
        "3"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?",
      "o": [
        "Solfej",
        "Ritim",
        "Kompozisyon",
        "İcra"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Telli çalgılara örnek hangisidir?",
      "o": [
        "Gitar",
        "Davul",
        "Flüt",
        "Zil"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Üflemeli çalgılara örnek hangisidir?",
      "o": [
        "Flüt",
        "Keman",
        "Piyano",
        "Marakas"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Vurmalı çalgılara örnek hangisidir?",
      "o": [
        "Davul",
        "Keman",
        "Gitar",
        "Saksafon"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Beden Eğitimi (bed8) - otomatik eklenen pratik soruları */
SORULAR["bed8"] = {
  "0": [
    {
      "s": "Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?",
      "o": [
        "Isınma",
        "Soğuma",
        "Yarış",
        "Antrenman"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kasları esnek hale getiren hareketlere ne denir?",
      "o": [
        "Esnetme",
        "Koşu",
        "Zıplama",
        "Sıçrama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Isınmadan spor yapmanın riski nedir?",
      "o": [
        "Sakatlanma",
        "Daha hızlı olma",
        "Enerji artışı",
        "Kas gücü"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Beşer kişilik iki takımla oynanan saha oyunu hangisidir?",
      "o": [
        "Basketbol",
        "Satranç",
        "Yüzme",
        "Tenis"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?",
      "o": [
        "11",
        "5",
        "7",
        "9"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Topu elle oynamanın yasak olduğu takım oyunu hangisidir?",
      "o": [
        "Futbol",
        "Hentbol",
        "Basketbol",
        "Voleybol"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Sağlıklı beslenmede öğünlere örnek hangisidir?",
      "o": [
        "Kahvaltı, öğle, akşam",
        "Atıştırma",
        "Tek öğün",
        "Aç kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Sporcular için önemli enerji kaynağı hangisidir?",
      "o": [
        "Karbonhidrat",
        "Şekerli gazlı içecek",
        "Aşırı yağ",
        "Tuz"
      ],
      "d": 0,
      "z": 2
    },
    {
      "s": "Vücudun susuz kalmaması için ne yapılmalıdır?",
      "o": [
        "Yeterli su içilmeli",
        "Az su içilmeli",
        "Hiç su içilmemeli",
        "Sadece meyve suyu"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Teknoloji ve Tasarım (tvt8) - otomatik eklenen pratik soruları */
SORULAR["tvt8"] = {
  "0": [
    {
      "s": "Bir ürün ortaya koyarken izlenen aşamalar bütününe ne denir?",
      "o": [
        "Tasarım süreci",
        "Üretim",
        "Tüketim",
        "Reklam"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarım sürecinin ilk adımı genelde nedir?",
      "o": [
        "İhtiyaç ve problemi belirleme",
        "Üretim",
        "Satış",
        "Paketleme"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Tasarımda farklı fikirler üretme aşamasına ne denir?",
      "o": [
        "Beyin fırtınası",
        "Çizim",
        "Test",
        "Sunum"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Yükü kaldırmayı kolaylaştıran eğik düzlem örneği hangisidir?",
      "o": [
        "Rampa",
        "Tekerlek",
        "Kaldıraç",
        "Vida"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Bir noktaya göre kuvvet uygulayan basit makine hangisidir?",
      "o": [
        "Kaldıraç",
        "Rampa",
        "Makara",
        "Dişli"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Dönme hareketiyle iş yapan basit makine hangisidir?",
      "o": [
        "Tekerlek",
        "Kaldıraç",
        "Vida",
        "Rampa"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Atıkların yeniden değerlendirilmesine ne denir?",
      "o": [
        "Geri dönüşüm",
        "Üretim",
        "İmalat",
        "İhracat"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kağıt, cam ve plastik hangi gruba girer?",
      "o": [
        "Geri dönüştürülebilir atık",
        "Organik atık",
        "Tehlikeli atık",
        "Evsel atık"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Geri dönüşümün faydası nedir?",
      "o": [
        "Doğal kaynakların korunması",
        "Daha fazla çöp",
        "Enerji israfı",
        "Ormanların azalması"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* Rehberlik (reb8) - otomatik eklenen pratik soruları */
SORULAR["reb8"] = {
  "0": [
    {
      "s": "Sevinç, korku, öfke ve üzüntü neyin örnekleridir?",
      "o": [
        "Temel duygular",
        "Zihinsel süreçler",
        "Fiziksel tepkiler",
        "Alışkanlıklar"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Duygularımızı sağlıklı ifade etmenin yolu nedir?",
      "o": [
        "Konuşarak anlatma",
        "Sessiz kalma",
        "Bağırma",
        "İçe kapanma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Stresle başa çıkmanın sağlıklı yolu hangisidir?",
      "o": [
        "Nefes egzersizi ve konuşma",
        "Öfke patlaması",
        "Kaçma",
        "Uyumama"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "1": [
    {
      "s": "Sağlıklı bir arkadaşlıkta önemli olan nedir?",
      "o": [
        "Karşılıklı saygı ve güven",
        "Rekabet",
        "Kıskançlık",
        "Baskı"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Arkadaşlar arasında çatışma çıktığında ne yapılmalıdır?",
      "o": [
        "Konuşarak çözüm arama",
        "Küsme",
        "Bağırma",
        "Dışlama"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Empati ne demektir?",
      "o": [
        "Başkasının duygusunu anlama",
        "Yargılama",
        "Eleştirme",
        "Kıskanma"
      ],
      "d": 0,
      "z": 2
    }
  ],
  "2": [
    {
      "s": "Başarıya ulaşmada ilk adım nedir?",
      "o": [
        "Hedef belirleme",
        "Bekleme",
        "Şansa bırakma",
        "Başkalarına bağlı kalma"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Hedeflere ulaşmada yardımcı olan günlük düzen nedir?",
      "o": [
        "Plan yapma",
        "Erteleme",
        "Dağınıklık",
        "Düzensizlik"
      ],
      "d": 0,
      "z": 1
    },
    {
      "s": "Kısa vadeli hedefe örnek hangisidir?",
      "o": [
        "Haftalık ödevi bitirme",
        "Üniversite bitirme",
        "Emekli olma",
        "Evlenme"
      ],
      "d": 0,
      "z": 1
    }
  ]
};

/* EK-grs5-u0 */
SORULAR["grs5"]["0"] = (SORULAR["grs5"]["0"] || []).concat([{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2}]);

/* EK-grs5-u1 */
SORULAR["grs5"]["1"] = (SORULAR["grs5"]["1"] || []).concat([{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1},{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2},{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3}]);

/* EK-grs5-u2 */
SORULAR["grs5"]["2"] = (SORULAR["grs5"]["2"] || []).concat([{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}]);

/* EK-grs6-u0 */
SORULAR["grs6"]["0"] = (SORULAR["grs6"]["0"] || []).concat([{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2}]);

/* EK-grs6-u1 */
SORULAR["grs6"]["1"] = (SORULAR["grs6"]["1"] || []).concat([{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1},{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2},{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3}]);

/* EK-grs6-u2 */
SORULAR["grs6"]["2"] = (SORULAR["grs6"]["2"] || []).concat([{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}]);

/* EK-grs7-u0 */
SORULAR["grs7"]["0"] = (SORULAR["grs7"]["0"] || []).concat([{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2}]);

/* EK-grs7-u1 */
SORULAR["grs7"]["1"] = (SORULAR["grs7"]["1"] || []).concat([{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1},{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2},{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3}]);

/* EK-grs7-u2 */
SORULAR["grs7"]["2"] = (SORULAR["grs7"]["2"] || []).concat([{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}]);

/* EK-grs8-u0 */
SORULAR["grs8"]["0"] = (SORULAR["grs8"]["0"] || []).concat([{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2}]);

/* EK-grs8-u1 */
SORULAR["grs8"]["1"] = (SORULAR["grs8"]["1"] || []).concat([{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1},{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2},{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3}]);

/* EK-grs8-u2 */
SORULAR["grs8"]["2"] = (SORULAR["grs8"]["2"] || []).concat([{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}]);

/* EK-mzk5-u0 */
SORULAR["mzk5"]["0"] = (SORULAR["mzk5"]["0"] || []).concat([{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3}]);

/* EK-mzk5-u1 */
SORULAR["mzk5"]["1"] = (SORULAR["mzk5"]["1"] || []).concat([{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2}]);

/* EK-mzk5-u2 */
SORULAR["mzk5"]["2"] = (SORULAR["mzk5"]["2"] || []).concat([{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}]);

/* EK-mzk6-u0 */
SORULAR["mzk6"]["0"] = (SORULAR["mzk6"]["0"] || []).concat([{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3}]);

/* EK-mzk6-u1 */
SORULAR["mzk6"]["1"] = (SORULAR["mzk6"]["1"] || []).concat([{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2}]);

/* EK-mzk6-u2 */
SORULAR["mzk6"]["2"] = (SORULAR["mzk6"]["2"] || []).concat([{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}]);

/* EK-mzk7-u0 */
SORULAR["mzk7"]["0"] = (SORULAR["mzk7"]["0"] || []).concat([{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3}]);

/* EK-mzk7-u1 */
SORULAR["mzk7"]["1"] = (SORULAR["mzk7"]["1"] || []).concat([{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2}]);

/* EK-mzk7-u2 */
SORULAR["mzk7"]["2"] = (SORULAR["mzk7"]["2"] || []).concat([{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}]);

/* EK-mzk8-u0 */
SORULAR["mzk8"]["0"] = (SORULAR["mzk8"]["0"] || []).concat([{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3}]);

/* EK-mzk8-u1 */
SORULAR["mzk8"]["1"] = (SORULAR["mzk8"]["1"] || []).concat([{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2}]);

/* EK-mzk8-u2 */
SORULAR["mzk8"]["2"] = (SORULAR["mzk8"]["2"] || []).concat([{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}]);

/* EK-bed5-u0 */
SORULAR["bed5"]["0"] = (SORULAR["bed5"]["0"] || []).concat([{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2}]);

/* EK-bed5-u1 */
SORULAR["bed5"]["1"] = (SORULAR["bed5"]["1"] || []).concat([{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1}]);

/* EK-bed5-u2 */
SORULAR["bed5"]["2"] = (SORULAR["bed5"]["2"] || []).concat([{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}]);

/* EK-bed6-u0 */
SORULAR["bed6"]["0"] = (SORULAR["bed6"]["0"] || []).concat([{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2}]);

/* EK-bed6-u1 */
SORULAR["bed6"]["1"] = (SORULAR["bed6"]["1"] || []).concat([{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1}]);

/* EK-bed6-u2 */
SORULAR["bed6"]["2"] = (SORULAR["bed6"]["2"] || []).concat([{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}]);

/* EK-bed7-u0 */
SORULAR["bed7"]["0"] = (SORULAR["bed7"]["0"] || []).concat([{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2}]);

/* EK-bed7-u1 */
SORULAR["bed7"]["1"] = (SORULAR["bed7"]["1"] || []).concat([{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1}]);

/* EK-bed7-u2 */
SORULAR["bed7"]["2"] = (SORULAR["bed7"]["2"] || []).concat([{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}]);

/* EK-bed8-u0 */
SORULAR["bed8"]["0"] = (SORULAR["bed8"]["0"] || []).concat([{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2}]);

/* EK-bed8-u1 */
SORULAR["bed8"]["1"] = (SORULAR["bed8"]["1"] || []).concat([{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1}]);

/* EK-bed8-u2 */
SORULAR["bed8"]["2"] = (SORULAR["bed8"]["2"] || []).concat([{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}]);

/* EK-tvt5-u0 */
SORULAR["tvt5"]["0"] = (SORULAR["tvt5"]["0"] || []).concat([{"s":"Tasarımın test aşamasında ne yapılır?","o":["Ürün denenip hatalar araştırılır","Ürün paketlenir","Reklamı yapılır","Fiyatı belirlenir"],"d":0,"z":2},{"s":"Beyin fırtınasının temel kuralı nedir?","o":["Fikirlere eleştiri yapılmaması","Sadece tek fikir önerilmesi","En hızlı konuşan kazanır","Fikirler gizli tutulur"],"d":0,"z":1},{"s":"Tasarım defteri ne için tutulur?","o":["Süreç adımlarını ve fikirleri kaydetmek","Şarkı sözü yazmak","Ders programı için","Oyun oynamak için"],"d":0,"z":2}]);

/* EK-tvt5-u1 */
SORULAR["tvt5"]["1"] = (SORULAR["tvt5"]["1"] || []).concat([{"s":"Makara işi nasıl kolaylaştırır?","o":["Kuvvetin yönünü değiştirip yükü kaldırır","Elektrik üretir","Isı yayarak","Ses çıkararak"],"d":0,"z":2},{"s":"Vida hangi basit makinenin türüdür?","o":["Eğik düzlem","Kaldıraç","Çark","Dişli"],"d":0,"z":3},{"s":"Makasta hangi basit makine vardır?","o":["Kaldıraç","Tekerlek","Makara","Rampa"],"d":0,"z":2}]);

/* EK-tvt5-u2 */
SORULAR["tvt5"]["2"] = (SORULAR["tvt5"]["2"] || []).concat([{"s":"Cam şişe geri dönüştürüldüğünde ne elde edilir?","o":["Yeni cam ürünler","Plastik oyuncak","Kâğıt","Metal"],"d":0,"z":1},{"s":"Atıkları ayrıştırmanın amacı nedir?","o":["Geri dönüşümü kolaylaştırmak","Çöp miktarını artırmak","Fiyatı yükseltmek","Depolamayı karmaşıklaştırmak"],"d":0,"z":1},{"s":"Hangisi özel (tehlikeli) atıktır?","o":["Pil","Karton kutu","Cam şişe","Meyve kabuğu"],"d":0,"z":2}]);

/* EK-tvt6-u0 */
SORULAR["tvt6"]["0"] = (SORULAR["tvt6"]["0"] || []).concat([{"s":"Tasarımın test aşamasında ne yapılır?","o":["Ürün denenip hatalar araştırılır","Ürün paketlenir","Reklamı yapılır","Fiyatı belirlenir"],"d":0,"z":2},{"s":"Beyin fırtınasının temel kuralı nedir?","o":["Fikirlere eleştiri yapılmaması","Sadece tek fikir önerilmesi","En hızlı konuşan kazanır","Fikirler gizli tutulur"],"d":0,"z":1},{"s":"Tasarım defteri ne için tutulur?","o":["Süreç adımlarını ve fikirleri kaydetmek","Şarkı sözü yazmak","Ders programı için","Oyun oynamak için"],"d":0,"z":2}]);

/* EK-tvt6-u1 */
SORULAR["tvt6"]["1"] = (SORULAR["tvt6"]["1"] || []).concat([{"s":"Makara işi nasıl kolaylaştırır?","o":["Kuvvetin yönünü değiştirip yükü kaldırır","Elektrik üretir","Isı yayarak","Ses çıkararak"],"d":0,"z":2},{"s":"Vida hangi basit makinenin türüdür?","o":["Eğik düzlem","Kaldıraç","Çark","Dişli"],"d":0,"z":3},{"s":"Makasta hangi basit makine vardır?","o":["Kaldıraç","Tekerlek","Makara","Rampa"],"d":0,"z":2}]);

/* EK-tvt6-u2 */
SORULAR["tvt6"]["2"] = (SORULAR["tvt6"]["2"] || []).concat([{"s":"Cam şişe geri dönüştürüldüğünde ne elde edilir?","o":["Yeni cam ürünler","Plastik oyuncak","Kâğıt","Metal"],"d":0,"z":1},{"s":"Atıkları ayrıştırmanın amacı nedir?","o":["Geri dönüşümü kolaylaştırmak","Çöp miktarını artırmak","Fiyatı yükseltmek","Depolamayı karmaşıklaştırmak"],"d":0,"z":1},{"s":"Hangisi özel (tehlikeli) atıktır?","o":["Pil","Karton kutu","Cam şişe","Meyve kabuğu"],"d":0,"z":2}]);

/* EK-tvt7-u0 */
SORULAR["tvt7"]["0"] = (SORULAR["tvt7"]["0"] || []).concat([{"s":"Tasarımın test aşamasında ne yapılır?","o":["Ürün denenip hatalar araştırılır","Ürün paketlenir","Reklamı yapılır","Fiyatı belirlenir"],"d":0,"z":2},{"s":"Beyin fırtınasının temel kuralı nedir?","o":["Fikirlere eleştiri yapılmaması","Sadece tek fikir önerilmesi","En hızlı konuşan kazanır","Fikirler gizli tutulur"],"d":0,"z":1},{"s":"Tasarım defteri ne için tutulur?","o":["Süreç adımlarını ve fikirleri kaydetmek","Şarkı sözü yazmak","Ders programı için","Oyun oynamak için"],"d":0,"z":2}]);

/* EK-tvt7-u1 */
SORULAR["tvt7"]["1"] = (SORULAR["tvt7"]["1"] || []).concat([{"s":"Makara işi nasıl kolaylaştırır?","o":["Kuvvetin yönünü değiştirip yükü kaldırır","Elektrik üretir","Isı yayarak","Ses çıkararak"],"d":0,"z":2},{"s":"Vida hangi basit makinenin türüdür?","o":["Eğik düzlem","Kaldıraç","Çark","Dişli"],"d":0,"z":3},{"s":"Makasta hangi basit makine vardır?","o":["Kaldıraç","Tekerlek","Makara","Rampa"],"d":0,"z":2}]);

/* EK-tvt7-u2 */
SORULAR["tvt7"]["2"] = (SORULAR["tvt7"]["2"] || []).concat([{"s":"Cam şişe geri dönüştürüldüğünde ne elde edilir?","o":["Yeni cam ürünler","Plastik oyuncak","Kâğıt","Metal"],"d":0,"z":1},{"s":"Atıkları ayrıştırmanın amacı nedir?","o":["Geri dönüşümü kolaylaştırmak","Çöp miktarını artırmak","Fiyatı yükseltmek","Depolamayı karmaşıklaştırmak"],"d":0,"z":1},{"s":"Hangisi özel (tehlikeli) atıktır?","o":["Pil","Karton kutu","Cam şişe","Meyve kabuğu"],"d":0,"z":2}]);

/* EK-tvt8-u0 */
SORULAR["tvt8"]["0"] = (SORULAR["tvt8"]["0"] || []).concat([{"s":"Tasarımın test aşamasında ne yapılır?","o":["Ürün denenip hatalar araştırılır","Ürün paketlenir","Reklamı yapılır","Fiyatı belirlenir"],"d":0,"z":2},{"s":"Beyin fırtınasının temel kuralı nedir?","o":["Fikirlere eleştiri yapılmaması","Sadece tek fikir önerilmesi","En hızlı konuşan kazanır","Fikirler gizli tutulur"],"d":0,"z":1},{"s":"Tasarım defteri ne için tutulur?","o":["Süreç adımlarını ve fikirleri kaydetmek","Şarkı sözü yazmak","Ders programı için","Oyun oynamak için"],"d":0,"z":2}]);

/* EK-tvt8-u1 */
SORULAR["tvt8"]["1"] = (SORULAR["tvt8"]["1"] || []).concat([{"s":"Makara işi nasıl kolaylaştırır?","o":["Kuvvetin yönünü değiştirip yükü kaldırır","Elektrik üretir","Isı yayarak","Ses çıkararak"],"d":0,"z":2},{"s":"Vida hangi basit makinenin türüdür?","o":["Eğik düzlem","Kaldıraç","Çark","Dişli"],"d":0,"z":3},{"s":"Makasta hangi basit makine vardır?","o":["Kaldıraç","Tekerlek","Makara","Rampa"],"d":0,"z":2}]);

/* EK-tvt8-u2 */
SORULAR["tvt8"]["2"] = (SORULAR["tvt8"]["2"] || []).concat([{"s":"Cam şişe geri dönüştürüldüğünde ne elde edilir?","o":["Yeni cam ürünler","Plastik oyuncak","Kâğıt","Metal"],"d":0,"z":1},{"s":"Atıkları ayrıştırmanın amacı nedir?","o":["Geri dönüşümü kolaylaştırmak","Çöp miktarını artırmak","Fiyatı yükseltmek","Depolamayı karmaşıklaştırmak"],"d":0,"z":1},{"s":"Hangisi özel (tehlikeli) atıktır?","o":["Pil","Karton kutu","Cam şişe","Meyve kabuğu"],"d":0,"z":2}]);

/* EK-reb5-u0 */
SORULAR["reb5"]["0"] = (SORULAR["reb5"]["0"] || []).concat([{"s":"Öfkelendiğinde yapılacak en doğru davranış nedir?","o":["Derin nefes alıp sakinleşmek","Eşyaları fırlatmak","Bağırmaya devam etmek","Kimseyle konuşmamak"],"d":0,"z":1},{"s":"Duygu günlüğü tutmak neye yardımcı olur?","o":["Duygularını fark etmeye","Erteleme alışkanlığına","Unutmaya","Dağınıklığa"],"d":0,"z":1},{"s":"Zor bir duygunu kimseyle paylaşmamak neye yol açabilir?","o":["Duygunun büyümesine","Mutluluğa","Başarıya","Enerji artışına"],"d":0,"z":2}]);

/* EK-reb5-u1 */
SORULAR["reb5"]["1"] = (SORULAR["reb5"]["1"] || []).concat([{"s":"Bir arkadaşın sırrını korumak neyi gösterir?","o":["Güvenilir olduğunu","Kıskançlık","Bencillik","Alaycılık"],"d":0,"z":1},{"s":"Arkadaşının başarısını takdir etmek nasıl bir davranıştır?","o":["Olumlu ve destekleyici","Kötümser","Umursamaz","Bencillik"],"d":0,"z":1},{"s":"Zorbalığa tanık olduğunda en doğru davranış nedir?","o":["Bir yetişkine haber vermek","Seyredip gülmek","Katılmak","Videoyu yaymak"],"d":0,"z":2}]);

/* EK-reb5-u2 */
SORULAR["reb5"]["2"] = (SORULAR["reb5"]["2"] || []).concat([{"s":"Büyük hedefleri küçük parçalara bölmek neden faydalıdır?","o":["Adım adım ilerlemek kolaylaşır","Hiç çalışmaya gerek kalmaz","Hedef unutulur","Zaman kaybettirir"],"d":0,"z":2},{"s":"Gerçekçi hedef ne demektir?","o":["Zaman ve imkânlara uygun hedef","İmkânsız hedef","Plansız hedef","Son güne bırakılan hedef"],"d":0,"z":2},{"s":"Hedefine ulaştığında ne yapmalısın?","o":["Kendini takdir edip yeni hedef belirlemek","Çalışmayı tamamen bırakmak","Kimseye haber vermemek","Hiç sevinmemek"],"d":0,"z":1}]);

/* EK-reb6-u0 */
SORULAR["reb6"]["0"] = (SORULAR["reb6"]["0"] || []).concat([{"s":"Öfkelendiğinde yapılacak en doğru davranış nedir?","o":["Derin nefes alıp sakinleşmek","Eşyaları fırlatmak","Bağırmaya devam etmek","Kimseyle konuşmamak"],"d":0,"z":1},{"s":"Duygu günlüğü tutmak neye yardımcı olur?","o":["Duygularını fark etmeye","Erteleme alışkanlığına","Unutmaya","Dağınıklığa"],"d":0,"z":1},{"s":"Zor bir duygunu kimseyle paylaşmamak neye yol açabilir?","o":["Duygunun büyümesine","Mutluluğa","Başarıya","Enerji artışına"],"d":0,"z":2}]);

/* EK-reb6-u1 */
SORULAR["reb6"]["1"] = (SORULAR["reb6"]["1"] || []).concat([{"s":"Bir arkadaşın sırrını korumak neyi gösterir?","o":["Güvenilir olduğunu","Kıskançlık","Bencillik","Alaycılık"],"d":0,"z":1},{"s":"Arkadaşının başarısını takdir etmek nasıl bir davranıştır?","o":["Olumlu ve destekleyici","Kötümser","Umursamaz","Bencillik"],"d":0,"z":1},{"s":"Zorbalığa tanık olduğunda en doğru davranış nedir?","o":["Bir yetişkine haber vermek","Seyredip gülmek","Katılmak","Videoyu yaymak"],"d":0,"z":2}]);

/* EK-reb6-u2 */
SORULAR["reb6"]["2"] = (SORULAR["reb6"]["2"] || []).concat([{"s":"Büyük hedefleri küçük parçalara bölmek neden faydalıdır?","o":["Adım adım ilerlemek kolaylaşır","Hiç çalışmaya gerek kalmaz","Hedef unutulur","Zaman kaybettirir"],"d":0,"z":2},{"s":"Gerçekçi hedef ne demektir?","o":["Zaman ve imkânlara uygun hedef","İmkânsız hedef","Plansız hedef","Son güne bırakılan hedef"],"d":0,"z":2},{"s":"Hedefine ulaştığında ne yapmalısın?","o":["Kendini takdir edip yeni hedef belirlemek","Çalışmayı tamamen bırakmak","Kimseye haber vermemek","Hiç sevinmemek"],"d":0,"z":1}]);

/* EK-reb7-u0 */
SORULAR["reb7"]["0"] = (SORULAR["reb7"]["0"] || []).concat([{"s":"Öfkelendiğinde yapılacak en doğru davranış nedir?","o":["Derin nefes alıp sakinleşmek","Eşyaları fırlatmak","Bağırmaya devam etmek","Kimseyle konuşmamak"],"d":0,"z":1},{"s":"Duygu günlüğü tutmak neye yardımcı olur?","o":["Duygularını fark etmeye","Erteleme alışkanlığına","Unutmaya","Dağınıklığa"],"d":0,"z":1},{"s":"Zor bir duygunu kimseyle paylaşmamak neye yol açabilir?","o":["Duygunun büyümesine","Mutluluğa","Başarıya","Enerji artışına"],"d":0,"z":2}]);

/* EK-reb7-u1 */
SORULAR["reb7"]["1"] = (SORULAR["reb7"]["1"] || []).concat([{"s":"Bir arkadaşın sırrını korumak neyi gösterir?","o":["Güvenilir olduğunu","Kıskançlık","Bencillik","Alaycılık"],"d":0,"z":1},{"s":"Arkadaşının başarısını takdir etmek nasıl bir davranıştır?","o":["Olumlu ve destekleyici","Kötümser","Umursamaz","Bencillik"],"d":0,"z":1},{"s":"Zorbalığa tanık olduğunda en doğru davranış nedir?","o":["Bir yetişkine haber vermek","Seyredip gülmek","Katılmak","Videoyu yaymak"],"d":0,"z":2}]);

/* EK-reb7-u2 */
SORULAR["reb7"]["2"] = (SORULAR["reb7"]["2"] || []).concat([{"s":"Büyük hedefleri küçük parçalara bölmek neden faydalıdır?","o":["Adım adım ilerlemek kolaylaşır","Hiç çalışmaya gerek kalmaz","Hedef unutulur","Zaman kaybettirir"],"d":0,"z":2},{"s":"Gerçekçi hedef ne demektir?","o":["Zaman ve imkânlara uygun hedef","İmkânsız hedef","Plansız hedef","Son güne bırakılan hedef"],"d":0,"z":2},{"s":"Hedefine ulaştığında ne yapmalısın?","o":["Kendini takdir edip yeni hedef belirlemek","Çalışmayı tamamen bırakmak","Kimseye haber vermemek","Hiç sevinmemek"],"d":0,"z":1}]);

/* EK-reb8-u0 */
SORULAR["reb8"]["0"] = (SORULAR["reb8"]["0"] || []).concat([{"s":"Öfkelendiğinde yapılacak en doğru davranış nedir?","o":["Derin nefes alıp sakinleşmek","Eşyaları fırlatmak","Bağırmaya devam etmek","Kimseyle konuşmamak"],"d":0,"z":1},{"s":"Duygu günlüğü tutmak neye yardımcı olur?","o":["Duygularını fark etmeye","Erteleme alışkanlığına","Unutmaya","Dağınıklığa"],"d":0,"z":1},{"s":"Zor bir duygunu kimseyle paylaşmamak neye yol açabilir?","o":["Duygunun büyümesine","Mutluluğa","Başarıya","Enerji artışına"],"d":0,"z":2}]);

/* EK-reb8-u1 */
SORULAR["reb8"]["1"] = (SORULAR["reb8"]["1"] || []).concat([{"s":"Bir arkadaşın sırrını korumak neyi gösterir?","o":["Güvenilir olduğunu","Kıskançlık","Bencillik","Alaycılık"],"d":0,"z":1},{"s":"Arkadaşının başarısını takdir etmek nasıl bir davranıştır?","o":["Olumlu ve destekleyici","Kötümser","Umursamaz","Bencillik"],"d":0,"z":1},{"s":"Zorbalığa tanık olduğunda en doğru davranış nedir?","o":["Bir yetişkine haber vermek","Seyredip gülmek","Katılmak","Videoyu yaymak"],"d":0,"z":2}]);

/* EK-reb8-u2 */
SORULAR["reb8"]["2"] = (SORULAR["reb8"]["2"] || []).concat([{"s":"Büyük hedefleri küçük parçalara bölmek neden faydalıdır?","o":["Adım adım ilerlemek kolaylaşır","Hiç çalışmaya gerek kalmaz","Hedef unutulur","Zaman kaybettirir"],"d":0,"z":2},{"s":"Gerçekçi hedef ne demektir?","o":["Zaman ve imkânlara uygun hedef","İmkânsız hedef","Plansız hedef","Son güne bırakılan hedef"],"d":0,"z":2},{"s":"Hedefine ulaştığında ne yapmalısın?","o":["Kendini takdir edip yeni hedef belirlemek","Çalışmayı tamamen bırakmak","Kimseye haber vermemek","Hiç sevinmemek"],"d":0,"z":1}]);

/* META-trk5-YAZILI */
(SORULAR["trk5"] = SORULAR["trk5" ] || {})[8] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-trk5-PROJE */
(SORULAR["trk5"] = SORULAR["trk5" ] || {})[9] = [{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-mat5-YAZILI */
(SORULAR["mat5"] = SORULAR["mat5" ] || {})[11] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-mat5-PROJE */
(SORULAR["mat5"] = SORULAR["mat5" ] || {})[12] = [{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-fen5-YAZILI */
(SORULAR["fen5"] = SORULAR["fen5" ] || {})[7] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-fen5-PROJE */
(SORULAR["fen5"] = SORULAR["fen5" ] || {})[8] = [{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-sos5-YAZILI */
(SORULAR["sos5"] = SORULAR["sos5" ] || {})[7] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-sos5-PROJE */
(SORULAR["sos5"] = SORULAR["sos5" ] || {})[8] = [{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-ing5-YAZILI */
(SORULAR["ing5"] = SORULAR["ing5" ] || {})[6] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-ing5-PROJE */
(SORULAR["ing5"] = SORULAR["ing5" ] || {})[7] = [{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-din5-YAZILI */
(SORULAR["din5"] = SORULAR["din5" ] || {})[4] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-din5-PROJE */
(SORULAR["din5"] = SORULAR["din5" ] || {})[5] = [{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-bty5-YAZILI */
(SORULAR["bty5"] = SORULAR["bty5" ] || {})[7] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Bilişim Teknolojileri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-bty5-PROJE */
(SORULAR["bty5"] = SORULAR["bty5" ] || {})[8] = [{"s":"Bilişim Teknolojileri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-trk6-YAZILI */
(SORULAR["trk6"] = SORULAR["trk6" ] || {})[10] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-trk6-PROJE */
(SORULAR["trk6"] = SORULAR["trk6" ] || {})[11] = [{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-mat6-YAZILI */
(SORULAR["mat6"] = SORULAR["mat6" ] || {})[16] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-mat6-PROJE */
(SORULAR["mat6"] = SORULAR["mat6" ] || {})[17] = [{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-fen6-YAZILI */
(SORULAR["fen6"] = SORULAR["fen6" ] || {})[7] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-fen6-PROJE */
(SORULAR["fen6"] = SORULAR["fen6" ] || {})[8] = [{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-sos6-YAZILI */
(SORULAR["sos6"] = SORULAR["sos6" ] || {})[8] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-sos6-PROJE */
(SORULAR["sos6"] = SORULAR["sos6" ] || {})[9] = [{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-ing6-YAZILI */
(SORULAR["ing6"] = SORULAR["ing6" ] || {})[9] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-ing6-PROJE */
(SORULAR["ing6"] = SORULAR["ing6" ] || {})[10] = [{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-din6-YAZILI */
(SORULAR["din6"] = SORULAR["din6" ] || {})[6] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-din6-PROJE */
(SORULAR["din6"] = SORULAR["din6" ] || {})[7] = [{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-bty6-YAZILI */
(SORULAR["bty6"] = SORULAR["bty6" ] || {})[8] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Bilişim Teknolojileri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-bty6-PROJE */
(SORULAR["bty6"] = SORULAR["bty6" ] || {})[9] = [{"s":"Bilişim Teknolojileri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-alm6-YAZILI */
(SORULAR["alm6"] = SORULAR["alm6" ] || {})[8] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Almanca (Seçmeli) yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-alm6-PROJE */
(SORULAR["alm6"] = SORULAR["alm6" ] || {})[9] = [{"s":"Almanca (Seçmeli) proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-trk7-YAZILI */
(SORULAR["trk7"] = SORULAR["trk7" ] || {})[8] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-trk7-PROJE */
(SORULAR["trk7"] = SORULAR["trk7" ] || {})[9] = [{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-mat7-YAZILI */
(SORULAR["mat7"] = SORULAR["mat7" ] || {})[12] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-mat7-PROJE */
(SORULAR["mat7"] = SORULAR["mat7" ] || {})[13] = [{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-fen7-YAZILI */
(SORULAR["fen7"] = SORULAR["fen7" ] || {})[7] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-fen7-PROJE */
(SORULAR["fen7"] = SORULAR["fen7" ] || {})[8] = [{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-sos7-YAZILI */
(SORULAR["sos7"] = SORULAR["sos7" ] || {})[6] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-sos7-PROJE */
(SORULAR["sos7"] = SORULAR["sos7" ] || {})[7] = [{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-ing7-YAZILI */
(SORULAR["ing7"] = SORULAR["ing7" ] || {})[7] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-ing7-PROJE */
(SORULAR["ing7"] = SORULAR["ing7" ] || {})[8] = [{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-din7-YAZILI */
(SORULAR["din7"] = SORULAR["din7" ] || {})[3] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-din7-PROJE */
(SORULAR["din7"] = SORULAR["din7" ] || {})[4] = [{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-mat8-YAZILI */
(SORULAR["mat8"] = SORULAR["mat8" ] || {})[12] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-mat8-PROJE */
(SORULAR["mat8"] = SORULAR["mat8" ] || {})[13] = [{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-fen8-YAZILI */
(SORULAR["fen8"] = SORULAR["fen8" ] || {})[7] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-fen8-PROJE */
(SORULAR["fen8"] = SORULAR["fen8" ] || {})[8] = [{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-trk8-YAZILI */
(SORULAR["trk8"] = SORULAR["trk8" ] || {})[8] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-trk8-PROJE */
(SORULAR["trk8"] = SORULAR["trk8" ] || {})[9] = [{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-ink8-YAZILI */
(SORULAR["ink8"] = SORULAR["ink8" ] || {})[6] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"T.C. İnkılap Tarihi ve Atatürkçülük yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-ink8-PROJE */
(SORULAR["ink8"] = SORULAR["ink8" ] || {})[7] = [{"s":"T.C. İnkılap Tarihi ve Atatürkçülük proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-ing8-YAZILI */
(SORULAR["ing8"] = SORULAR["ing8" ] || {})[9] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-ing8-PROJE */
(SORULAR["ing8"] = SORULAR["ing8" ] || {})[10] = [{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* META-din8-YAZILI */
(SORULAR["din8"] = SORULAR["din8" ] || {})[4] = [{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}];

/* META-din8-PROJE */
(SORULAR["din8"] = SORULAR["din8" ] || {})[5] = [{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}];

/* TYMM7-trk7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["trk7"] = {"0":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"\"Bu işi ona söylemek ağırına gitti.\" cümlesinde \"ağır\" sözcüğü hangi anlamda kullanılmıştır?","o":["Mecaz anlam","Gerçek anlam","Terim anlam","Yan anlam"],"d":0,"z":2},{"s":"\"Babam eve yeni bir televizyon aldı.\" cümlesinde nesne hangisidir?","o":["yeni bir televizyon","babam","eve","aldı"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisinin yazımı yanlıştır?","o":["ki","yada","ve","ama"],"d":1,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"1":[{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1},{"s":"Deyimlerle ilgili hangisi doğrudur?","o":["Genellikle mecaz anlamlıdır","Her zaman gerçek anlamlıdır","Uzun ve öğüt vericidir","Sadece atasözlerinden oluşur"],"d":0,"z":2},{"s":"\"Çocuklar bahçede oyun oynuyorlar.\" cümlesinde \"bahçede\" hangi öğedir?","o":["Dolaylı tümleç","Özne","Nesne","Zarf tümleci"],"d":0,"z":2},{"s":"\"Okulda, bahçede ve sınıfta ...\" cümlesinde \"ve\" hangi görevde kullanılır?","o":["Bağlaç","Edat","Ünlem","Sıfat"],"d":0,"z":1}],"2":[{"s":"\"geldi\" fiilinin kipi hangisidir?","o":["Görülen geçmiş zaman","Geniş zaman","Gelecek zaman","Şimdiki zaman"],"d":0,"z":2},{"s":"\"güzel\" sözcüğü \"güzel bir ev\" tamlamasında hangi türdür?","o":["Sıfat","İsim","Zamir","Zarf"],"d":0,"z":2},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"3":[{"s":"\"Hava güzelse pikniğe gideriz.\" cümlesinde \"ise\" hangi anlamı katar?","o":["Koşul","Zaman","Sebep","Niyet"],"d":0,"z":2},{"s":"\"geliyor\" fiili hangi zaman kipindedir?","o":["Şimdiki zaman","Gelecek zaman","Geçmiş zaman","Geniş zaman"],"d":0,"z":1},{"s":"\"okulun bahçesi\" tamlaması hangi tür tamlamadır?","o":["Belirtili isim tamlaması","Belirtisiz isim tamlaması","Sıfat tamlaması","Zincirleme"],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"4":[{"s":"\"Yüzmeyi çok severim.\" cümlesinde \"yüzmeyi\" sözcüğü hangi tür fiilimsidir?","o":["İsim-fiil","Sıfat-fiil","Zarf-fiil","Fiil"],"d":0,"z":2},{"s":"Bir paragrafın ana fikri hangi cümlede genellikle bulunur?","o":["Giriş veya sonuç cümlesinde","Her cümlede","Hiçbir cümlede","Sadece ilk harfte"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"5":[{"s":"\"Senin sözlerinle beni çok mutlu ettin.\" cümlesinde \"senin sözlerinle\" hangi anlam ilişkisini verir?","o":["Neden-sonuç","Koşul","Karşılaştırma","Amaç"],"d":0,"z":3},{"s":"\"Koşarak geldi.\" cümlesinde \"koşarak\" hangi fiilimsi türüdür?","o":["Zarf-fiil","İsim-fiil","Sıfat-fiil","Yüklem"],"d":0,"z":2},{"s":"Paragrafta anlatılmak istenen en kısa ve öz hale ne denir?","o":["Ana fikir","Konu","Başlık","Ayrıntı"],"d":0,"z":1},{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-mat7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mat7"] = {"0":[{"s":"%20'si 12 olan sayı kaçtır?","o":["60","24","120","72"],"d":0,"z":3},{"s":"(-12) ÷ 4 işleminin sonucu kaçtır?","o":["-3","3","-4","4"],"d":0,"z":2},{"s":"Yarıçapı 7 cm olan dairenin alanı kaç cm²'dir? (π = 22/7)","o":["154","44","77","308"],"d":0,"z":2}],"1":[{"s":"Doğru orantılı iki sayıdan biri 3, diğeri 6 olsun, 3'ün karşılığı 4 ise 6'nın karşılığı kaçtır?","o":["8","9","12","6"],"d":0,"z":3},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"(-2)³ işleminin sonucu kaçtır?","o":["-8","8","-6","6"],"d":0,"z":3},{"s":"2, 5, 5, 8 sayılarının medyanı kaçtır?","o":["5","4","6","7"],"d":0,"z":3}],"2":[{"s":"1/2 + 1/3 işleminin sonucu kaçtır?","o":["5/6","2/5","3/6","6/5"],"d":0,"z":2},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"3":[{"s":"3 tam 1/2 kesrinin bileşik kesir gösterimi nedir?","o":["7/2","9/2","5/4","6/4"],"d":0,"z":3},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"4":[{"s":"Ayrıtları 2, 3 ve 4 cm olan dikdörtgenler prizmasının hacmi kaç cm³'tür?","o":["24","9","12","48"],"d":0,"z":2},{"s":"2/3 ÷ 4 ün sonucu kaçtır?","o":["1/6","8/3","3/8","6/5"],"d":0,"z":3},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"5":[{"s":"2x + 5 = 15 denkleminin çözlümünde x kaçtır?","o":["5","10","7","20"],"d":0,"z":2},{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"6":[{"s":"Bir malın %20 indirimle fiyatı 80 TL ise indirimsiz fiyatı kaç TL'dir?","o":["100","96","60","120"],"d":0,"z":3},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"7":[{"s":"Bir veri grubunda en çok tekrar eden sayıya ne denir?","o":["Mod","Medyan","Aritmetik ortalama","Açıklık"],"d":0,"z":1},{"s":"Bir çokgenin iç açılar toplamı 540° ise bu çokgen kaç kenarlıdır?","o":["5","4","6","7"],"d":0,"z":3}],"8":[{"s":"Yarıçapı 7 cm olan dairenin çevresi kaç cm'dir? (π = 22/7)","o":["44","154","22","88"],"d":0,"z":2},{"s":"\"Bir olayın ve tümleyeninin olasılığına ilişkin tümevarımsal akıl yürütebilme\" çalışması hangi temada yer alır?","o":["Veriden Olasılığa","Sayılar Ve Nicelikler (2)","Dönüşüm","Geometrik Nicelikler (2)"],"d":0,"z":2}],"9":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"10":[{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-fen7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["fen7"] = {"0":[{"s":"Yıldızların oluşturduğu topluluğa ne denir?","o":["Takımyıldız","Gezegen","Asteroid","Kuyruklu yıldız"],"d":0,"z":2},{"s":"Saf maddelerle ilgili hangisi doğrudur?","o":["Tek tür tanecik içerir","Her zaman karışımdır","İki veya daha fazla madde içerir","Homojendir ama saf değildir"],"d":0,"z":2},{"s":"Güneş Sisteminde hangi gezegen Güneş'e en yakındır?","o":["Merkür","Venüs","Dünya","Mars"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"1":[{"s":"Bir cismin konumuna bağlı enerjisine ne ad verilir?","o":["Potansiyel enerji","Kikoik enerji","Isı enerjisi","Böl"],"d":0,"z":2},{"s":"Seri bağlı iki ampulden biri çıkarsa diğeri ne olur?","o":["Söner","Parlar","Değişmez","Lampi çoğalır"],"d":0,"z":3},{"s":"Hücrenin yönetici organeli hangisidir?","o":["Çekirdek","Zar","Sitoplazma","Mitokondri"],"d":0,"z":2},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"2":[{"s":"Bitkilerin besleyen fotonto etkınıp güneş enerjisini nasıl kullanır?","o":["Fotosentez","Solunum","Boşaltının","Sindirim"],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Vücudun vücut hücrelerinin bölünme türü hangisidir?","o":["Mitoz","Mayoz","Fagositaz","Fotosentez"],"d":0,"z":3},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"3":[{"s":"Işığın bir aynaya çarpıp geri dönmesine ne denir?","o":["Yansıma","Kırılma","Soğrulma","Görülmez"],"d":0,"z":2},{"s":"Işığın ortam değiştirirken doğrultusunun değişmesine ne denir?","o":["Kırılma","Yansıma","Soğrulma","Yayılma"],"d":0,"z":2},{"s":"Mitoz bölünme sonucu kaç hücre oluşur?","o":["2","1","3","4"],"d":0,"z":2},{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"4":[{"s":"Mayoz bölünme hangi canlılarda görülür?","o":["Üreme ana hücrelerinde","Vücut hücrelerinde","Deri hücrelerinde","Kas hücrelerinde"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"5":[{"s":"Şekerli su hangi tür karışımdır?","o":["Homojen karışım","Heterojen karışım","Saf madde","Element"],"d":0,"z":2},{"s":"\"Elektriklenme ile ilgili bilgi toplayabilme\" çalışması hangi temada yer alır?","o":["Elektriklenme","Kuvvet Ve Enerjiyi Keşfedelim","Işığın Kırılması Ve Mercekler","Sürdürülebilir Yaşam Ve Enerji"],"d":0,"z":2}],"6":[{"s":"Kurbağanın başkalaşım geçirmesi hangi gelişim dönemine örnektir?","o":["Büyüme ve gelişme","Üreme","Beslenme","Boşaltım"],"d":0,"z":3},{"s":"\"Besin zincirindeki canlılar arasındaki ilişkileri yapılandırabilme\" çalışması hangi temada yer alır?","o":["Sürdürülebilir Yaşam Ve Enerji","Kuvvet Ve Enerjiyi Keşfedelim","Işığın Kırılması Ve Mercekler","Elektriklenme"],"d":0,"z":2}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-sos7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["sos7"] = {"0":[{"s":"Karşımızdaki kişiyi dikkatle dinlemek hangi iletişim becerisidir?","o":["Etkili dinleme","Bağırmak","Sözünü kesmek","Yok saymak"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Bir bölgede yaşayan insanların sayısına ne denir?","o":["Nüfus","İklim","Coğrafya","Tarih"],"d":0,"z":1},{"s":"Ülkeler arasındaki kültürel etkileşimi en çok artıran şey hangisidir?","o":["Turizm ve internet","Savaş","Ambargo","Sınır kapamak"],"d":0,"z":2}],"1":[{"s":"Nüfus yoğunluğu hangi işlemle bulunur?","o":["Nüfus / Yüzölçümü","Nüfus x Yüzölçümü","Yüzölçümü / Nüfus","Nüfus + Yüzölçümü"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"2":[{"s":"Osmanlı Devleti'nin kurulduğu yer neresidir?","o":["Anadolu","Kafkaslar","Kırım","Mısır"],"d":0,"z":1},{"s":"Anadolu'da kurulan ilk medeniyetlerden hangisi Hitit'tir. Hititler nerede yaşamıştır?","o":["Anadolu","Mısır","Yunanistan","İran"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"Türkiye Büyük Millet Meclisi'nin kurulduğu yıl hangisidir?","o":["1920","1923","1919","1924"],"d":0,"z":2},{"s":"Birleşmiş Milletler'in temel amacı hangisidir?","o":["Barış ve güvenliği sağlamak","Savaş başlatmak","Ekonomi yok etmek","İnsanları göç ettirmek"],"d":0,"z":1},{"s":"Bir ülkede üretilen malların alınıp satılmasına ne denir?","o":["Ticaret","Tarım","Sanayi","Eğitim"],"d":0,"z":1}],"4":[{"s":"İnsanların duygu ve düşüncelerini karşı tarafa aktarmasına ne denir?","o":["İletişim","Seyahat","Üretim","Tüketim"],"d":0,"z":1},{"s":"Ülkemizde en çok ihraç edilen ürünlerden biri hangisidir?","o":["Fındık","Kar","Buz","Kum"],"d":0,"z":2}],"5":[{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Demokratik yönetimde milletin iradesi hangi yolla ortaya konur?","o":["Seçimlerle","Zorla","Kura ile","Savaşla"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-ing7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["ing7"] = {"0":[{"s":"'What is he like?' sorarsına verilen karşılık hangisi nicel bulmaz?","o":["He is tall and friendly.","He is a teacher.","He is shy.","He is short."],"d":0,"z":2},{"s":"\"What's on TV tonight?\" sorusunda \"TV\" ne demektir?","o":["Televizyon","Radyo","Gazete","Bilgisayar"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"1":[{"s":"\"She has got long, curly hair.\" cümlesinde \"curly\" ne demektir?","o":["Kıvırcık","Düz","Uzun","Kısa"],"d":0,"z":1},{"s":"\"I usually watch cartoons.\" cümlesinde \"cartoons\" ne demektir?","o":["Çizgi film","Haber","Dizi","Film"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"2":[{"s":"\"What does he look like?\" sorusuna hangisi cevaptır?","o":["He is tall and slim.","He is happy.","He is my brother.","He is ten."],"d":0,"z":2},{"s":"\"Happy New Year!\" ifadesi hangi kutlamada kullanılır?","o":["Yılbaşı","Doğum günü","Okul başlangıcı","Sınav"],"d":0,"z":1},{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"3":[{"s":"\"I like playing tennis.\" cümlesinde \"tennis\" ne demektir?","o":["Tenis","Futbol","Basketbol","Voleybol"],"d":0,"z":1},{"s":"\"We celebrate the festival.\" cümlesinde \"celebrate\" ne demektir?","o":["Kutlamak","Unutmak","Başlamak","Bitirmek"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"4":[{"s":"\"Can you play chess?\" sorusuna olumlu cevap hangisidir?","o":["Yes, I can.","No, I don't.","Yes, I am.","I like chess."],"d":0,"z":2},{"s":"Hangisi bir gezegendir?","o":["Mars","Moon","Sun","Star"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"5":[{"s":"Geçmişte yaşamış ünlü bir kişinin hayatını anlatan yazıya ne denir?","o":["Biography","Story","Poem","Diary"],"d":0,"z":1},{"s":"\"Saturn has got rings.\" cümlesinde \"rings\" ne demektir?","o":["Halkalar","Kanatlar","Yüzük","Kuyruk"],"d":0,"z":1}],"6":[{"s":"\"Elephants are the biggest animals.\" cümlesinde \"biggest\" ne demektir?","o":["En büyük","En küçük","En hızlı","En uzun"],"d":0,"z":1},{"s":"\"Atatürk was born in 1881.\" cümlesinde \"was born\" ne demektir?","o":["Doğdu","Öldü","Geldi","Gitti"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"7":[{"s":"Aşağıdakilerden hangisi vahşi bir hayvandır?","o":["Lion","Dog","Cat","Rabbit"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"8":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"9":[{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-din7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["din7"] = {"0":[{"s":"Allah'ın emirlerini yerine getiren, nurani varlıklara ne denir?","o":["Melek","İnsan","Hayvan","Cin"],"d":0,"z":1},{"s":"Kur'an'ı Hz. Cebrail'den alıp peygamberlere getiren melek hangisidir?","o":["Cebrail","Mikail","İsrafil","Azrail"],"d":0,"z":2},{"s":"Doğa olaylarını düzenlemekle görevli melek hangisidir?","o":["Mikail","Cebrail","Azrail","İsrafil"],"d":0,"z":2},{"s":"Fıkhi (hüküm) yorumlardan hangisi ülkemizde yaygındır?","o":["Hanefi","Şafii","Maliki","Hanbeli"],"d":0,"z":2},{"s":"Maddi durumu iyi olan Müslümanların yılda bir kez verdiği ibadet hangisidir?","o":["Zekat","Oruç","Namaz","Hac"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"1":[{"s":"Aşağıdakilerden hangisi dört büyük melekten biridir?","o":["Cebrail","İsmail","Yusuf","Musa"],"d":0,"z":2},{"s":"Ramazan ayında verilen, kişi başına farz olan sadakaya ne denir?","o":["Fitre","Adak","Kefaret","Hediye"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"2":[{"s":"İslam düşüncesinde ortaya çıkan yorumlara ne denir?","o":["Mezhep","Tarikat","Felsefe","Bilim"],"d":0,"z":2},{"s":"İslam dininin temel kaynağı hangisidir?","o":["Kur'an-ı Kerim","Şiir","Masal","Hikaye"],"d":0,"z":1},{"s":"İslam düşüncesinde itikadi (inanç) yorumlardan biri hangisidir?","o":["Maturidilik","Mevlevilik","Bektaşilik","Nakşilik"],"d":0,"z":2},{"s":"İslam düşüncesindeki tasavvufi yorumlara genel olarak ne ad verilir?","o":["Tarikat","Mezhep","Mezhep fıkıh","Okul"],"d":0,"z":2},{"s":"İnsanların yaptıklarını kaydeden melekler hangileridir?","o":["Kiramen Katibin","Cebrail ve Mikail","Azrail","İsrafil"],"d":0,"z":2},{"s":"Bir kişiye iyilik yapmakla ilgili hangi davranış sadaka sayılır?","o":["Güler yüz göstermek","Sadece para vermek","Sadece zekat vermek","Hiçbir şey yapmamak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"3":[{"s":"Zekat kimlere verilir?","o":["İhtiyaç sahiplerine","Sadece zenginlere","Sadece akrabalara","Sadece komşulara"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"4":[{"s":"Toplumsal dayanışma ile ilgili hangisi doğrudur?","o":["Yardımlaşma toplumu güçlendirir","Yardımlaşma gereksizdir","Herkes kendi başına yaşamalı","Sadaka verilmemelidir"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"5":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-grs7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["grs7"] = {"0":[{"s":"Renk çemberinde birbirine zıt renklere ne ad verilir?","o":["Tamamlayıcı renk","Ana renk","Ara renk","Sıcak renk"],"d":0,"z":2},{"s":"Açık-koyu (ışık-gölge) çalışmasına ne denir?","o":["Karakalem tonlama","Perspektif","Kompozisyon","Renk harmanı"],"d":0,"z":2},{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1},{"s":"Hangileri sıcak renklerdir?","o":["Kırmızı, turuncu, sarı","Mavi, yeşil, mor","Siyah, beyaz, gri","Pembe, kahverengi, lacivert"],"d":0,"z":1},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}],"1":[{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"\"Tasarım ürünleri ve logolardaki göstergelerin mesajlarını okuyabilme\" çalışması hangi temada yer alır?","o":["Sanatın Görsel Dili","Sanatçılar Ve Eserleri","Renk Ve Estetik","Müze Ve Kültür"],"d":0,"z":2}],"2":[{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"\"Çağdaş Türk resim sanatındaki izlenimci eserleri inceleyebilme\" çalışması hangi temada yer alır?","o":["Sanatçılar Ve Eserleri","Sanatın Görsel Dili","Renk Ve Estetik","Müze Ve Kültür"],"d":0,"z":2}],"3":[{"s":"Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?","o":["Degrade (ton geçişi)","Perspektif","Kompozisyon","Ritim"],"d":0,"z":1},{"s":"Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?","o":["Noktacılık (pointillism)","Hat çizimi","Karakalem","Silgi ile çizim"],"d":0,"z":2},{"s":"Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?","o":["Perspektif","Kompozisyon","Orantı","Simetri"],"d":0,"z":1},{"s":"Bir resmin öğelerinin düzenine ne denir?","o":["Kompozisyon","Perspektif","Ton","Ritim"],"d":0,"z":1},{"s":"Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?","o":["Tek kaçış noktalı perspektif","İki boyutlu","Soyut","Eksentrik"],"d":0,"z":3},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2},{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2}],"4":[{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3},{"s":"Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?","o":["HB, 2B, 4B","1A, 2A","XS, S","M, L"],"d":0,"z":3}],"5":[{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1},{"s":"\"Dünya çocuklarına yönelik barış ve dostluk mesajlarını yansıtan sanatsal üretim yapabilme\" çalışması hangi temada yer alır?","o":["Millî Değerler Ve Sanat","Sanatın Görsel Dili","Çizim Ve Görsel İfade","Müze Ve Kültür"],"d":0,"z":2}],"6":[{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2},{"s":"\"Türk müzeciliğine ilişkin bilgi toplayabilme\" çalışması hangi temada yer alır?","o":["Müze Ve Kültür","Sanatın Görsel Dili","Çizim Ve Görsel İfade","Millî Değerler Ve Sanat"],"d":0,"z":2}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Görsel Sanatlar yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Görsel Sanatlar proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-mzk7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mzk7"] = {"0":[{"s":"Müziğin temposunu belirleyen düzenli vuruşlara ne denir?","o":["Ritim","Melodi","Armoni","Ton"],"d":0,"z":1},{"s":"Sessizlik sürelerini gösteren işaretlere ne ad verilir?","o":["Sus işareti","Nota","Ölçü","Anahtar"],"d":0,"z":2},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Müziğin alfabesindeki temel ses sembolüne ne denir?","o":["Nota","Ritim","Akor","Makam"],"d":0,"z":1},{"s":"Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?","o":["Solfej","Ritim","Kompozisyon","İcra"],"d":0,"z":2},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Telli çalgılara örnek hangisidir?","o":["Gitar","Davul","Flüt","Zil"],"d":0,"z":1},{"s":"Vurmalı çalgılara örnek hangisidir?","o":["Davul","Keman","Gitar","Saksafon"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2}],"1":[{"s":"Hızlı tempoya ne denir?","o":["Allegro","Adagio","Andante","Largo"],"d":0,"z":2},{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3},{"s":"Bir oktavdaki temel ses sayısı kaçtır?","o":["7","5","12","3"],"d":0,"z":2},{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2},{"s":"Üflemeli çalgılara örnek hangisidir?","o":["Flüt","Keman","Piyano","Marakas"],"d":0,"z":1},{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}],"2":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Müzik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"3":[{"s":"Müzik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-bed7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["bed7"] = {"0":[{"s":"Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?","o":["Isınma","Soğuma","Yarış","Antrenman"],"d":0,"z":1},{"s":"Beşer kişilik iki takımla oynanan saha oyunu hangisidir?","o":["Basketbol","Satranç","Yüzme","Tenis"],"d":0,"z":1},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1}],"1":[{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Kasları esnek hale getiren hareketlere ne denir?","o":["Esnetme","Koşu","Zıplama","Sıçrama"],"d":0,"z":1},{"s":"Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?","o":["11","5","7","9"],"d":0,"z":2},{"s":"Sağlıklı beslenmede öğünlere örnek hangisidir?","o":["Kahvaltı, öğle, akşam","Atıştırma","Tek öğün","Aç kalma"],"d":0,"z":1},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}],"2":[{"s":"Isınmadan spor yapmanın riski nedir?","o":["Sakatlanma","Daha hızlı olma","Enerji artışı","Kas gücü"],"d":0,"z":2},{"s":"Topu elle oynamanın yasak olduğu takım oyunu hangisidir?","o":["Futbol","Hentbol","Basketbol","Voleybol"],"d":0,"z":2},{"s":"Sporcular için önemli enerji kaynağı hangisidir?","o":["Karbonhidrat","Şekerli gazlı içecek","Aşırı yağ","Tuz"],"d":0,"z":2}],"3":[{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Vücudun susuz kalmaması için ne yapılmalıdır?","o":["Yeterli su içilmeli","Az su içilmeli","Hiç su içilmemeli","Sadece meyve suyu"],"d":0,"z":1}],"4":[{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2},{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2}],"5":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Beden Eğitimi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Beden Eğitimi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM7-tvt7 - 2026-2027 resmi müfredat uyumlu */
SORULAR["tvt7"] = {"0":[{"s":"Tasarım sürecinin ilk adımı genelde nedir?","o":["İhtiyaç ve problemi belirleme","Üretim","Satış","Paketleme"],"d":0,"z":1},{"s":"Tasarım defteri ne için tutulur?","o":["Süreç adımlarını ve fikirleri kaydetmek","Şarkı sözü yazmak","Ders programı için","Oyun oynamak için"],"d":0,"z":2},{"s":"Beyin fırtınasının temel kuralı nedir?","o":["Fikirlere eleştiri yapılmaması","Sadece tek fikir önerilmesi","En hızlı konuşan kazanır","Fikirler gizli tutulur"],"d":0,"z":1},{"s":"Hangisi özel (tehlikeli) atıktır?","o":["Pil","Karton kutu","Cam şişe","Meyve kabuğu"],"d":0,"z":2}],"1":[{"s":"Bir ürün ortaya koyarken izlenen aşamalar bütününe ne denir?","o":["Tasarım süreci","Üretim","Tüketim","Reklam"],"d":0,"z":1},{"s":"Tasarımın test aşamasında ne yapılır?","o":["Ürün denenip hatalar araştırılır","Ürün paketlenir","Reklamı yapılır","Fiyatı belirlenir"],"d":0,"z":2},{"s":"Atıkların yeniden değerlendirilmesine ne denir?","o":["Geri dönüşüm","Üretim","İmalat","İhracat"],"d":0,"z":1},{"s":"Yükü kaldırmayı kolaylaştıran eğik düzlem örneği hangisidir?","o":["Rampa","Tekerlek","Kaldıraç","Vida"],"d":0,"z":1}],"2":[{"s":"Bir noktaya göre kuvvet uygulayan basit makine hangisidir?","o":["Kaldıraç","Rampa","Makara","Dişli"],"d":0,"z":1},{"s":"\"Tasarım problemlerini çözümleyebilme ve geliştirebilme kriterlerini sınıflandırabilme\" çalışması hangi temada yer alır?","o":["Tasarım Odaklı Süreç","Temel Tasarım","Mimari Tasarım","Enerjinin Dönüşümü Ve Tasarım"],"d":0,"z":2}],"3":[{"s":"Dönme hareketiyle iş yapan basit makine hangisidir?","o":["Tekerlek","Kaldıraç","Vida","Rampa"],"d":0,"z":2},{"s":"\"Tasarım problemini çözmek için ürün oluşturabilme\" çalışması hangi temada yer alır?","o":["Bilgisayar Destekli Tasarım","Temel Tasarım","Mimari Tasarım","Enerjinin Dönüşümü Ve Tasarım"],"d":0,"z":2}],"4":[{"s":"Tasarımda farklı fikirler üretme aşamasına ne denir?","o":["Beyin fırtınası","Çizim","Test","Sunum"],"d":0,"z":2},{"s":"Makara işi nasıl kolaylaştırır?","o":["Kuvvetin yönünü değiştirip yükü kaldırır","Elektrik üretir","Isı yayarak","Ses çıkararak"],"d":0,"z":2}],"5":[{"s":"Vida hangi basit makinenin türüdür?","o":["Eğik düzlem","Kaldıraç","Çark","Dişli"],"d":0,"z":3},{"s":"\"Canlılar ve doğal yapıların yapısal, biçimsel ve görsel özelliklerini sanatsal…\" çalışması hangi temada yer alır?","o":["Doğadan Tasarıma","Temel Tasarım","Bilgisayar Destekli Tasarım","Enerjinin Dönüşümü Ve Tasarım"],"d":0,"z":2}],"6":[{"s":"Geri dönüşümün faydası nedir?","o":["Doğal kaynakların korunması","Daha fazla çöp","Enerji israfı","Ormanların azalması"],"d":0,"z":1},{"s":"Makasta hangi basit makine vardır?","o":["Kaldıraç","Tekerlek","Makara","Rampa"],"d":0,"z":2}],"7":[{"s":"Kağıt, cam ve plastik hangi gruba girer?","o":["Geri dönüştürülebilir atık","Organik atık","Tehlikeli atık","Evsel atık"],"d":0,"z":1},{"s":"\"STEAM’i oluşturan disiplinler ile alt bileşenlerinin ne olduğunu sorgulayabilme\" çalışması hangi temada yer alır?","o":["Bütünleşik Öğrenme: Steam","Temel Tasarım","Bilgisayar Destekli Tasarım","Doğadan Tasarıma"],"d":0,"z":2}],"8":[{"s":"Cam şişe geri dönüştürüldüğünde ne elde edilir?","o":["Yeni cam ürünler","Plastik oyuncak","Kâğıt","Metal"],"d":0,"z":1},{"s":"Atıkları ayrıştırmanın amacı nedir?","o":["Geri dönüşümü kolaylaştırmak","Çöp miktarını artırmak","Fiyatı yükseltmek","Depolamayı karmaşıklaştırmak"],"d":0,"z":1}],"9":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Teknoloji ve Tasarım yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"10":[{"s":"Teknoloji ve Tasarım proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-trk5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["trk5"] = {"0":[{"s":"Aşağıdaki sözcüklerden hangisinde ünlü harf sayısı diğerlerinden azdır?","o":["araba","ev","kalem","defter"],"d":1,"z":1},{"s":"\"Sınava çalışmadı, çünkü film izliyordu.\" cümlesinde \"çünkü\" hangi anlam ilişkisini kurar?","o":["Neden-sonuç","Amaç-sonuç","Koşul","Karşılaştırma"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisinin yazımı doğrudur?","o":["herkez","herkese","herkes","herkis"],"d":2,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"1":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"\"kitap\" sözcüğü kaç heceden oluşur?","o":["2","3","1","4"],"d":0,"z":1},{"s":"Aşağıdakilerden hangisi soyut bir isimdir?","o":["sevgi","masa","kalem","top"],"d":0,"z":1},{"s":"\"Okulda tören yapıldı.\" cümlesinde hangi sözcük büyük harfle başlamalıdır?","o":["hiçbiri","okulda","tören","yapıldı"],"d":0,"z":2}],"2":[{"s":"Eş anlamlısı rı olan kelime hangisidir? 'mütevazı'","o":["alçak gönüllü","gururlu","güzel","hızlı"],"d":0,"z":2},{"s":"\"mavi elbise\" tamlamasında \"mavi\" sözcüğünün türü nedir?","o":["Sıfat","İsim","Zamir","Fiil"],"d":0,"z":2},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"3":[{"s":"Aşağıdaki cümlelerden hangisi öznel (kişisel) bir yargıdır?","o":["Bu film harika! ","Kitap 120 sayfadır. ","Ayşe büyüdü. ","Dışarısı 25 derece."],"d":0,"z":3},{"s":"\"Ben\" ve \"sen\" sözcüklerinin türü nedir?","o":["Zamir","İsim","Sıfat","Edat"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"4":[{"s":"\"Bardak kırıldı.\" cümlesindeki \"kırıldı\" sözcüğünün anlamı hangisidir?","o":["Gerçek anlam","Mecaz anlam","Terim anlam","Yan anlam"],"d":0,"z":2},{"s":"\"Ali elmayı yedi.\" cümlesinde özne hangisidir?","o":["Ali","elmayı","yedi","Ali elmayı"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"5":[{"s":"Bir metnin konusunu bulmak için hangi soru sorulur?","o":["Metinde ne anlatılıyor?","Metin kaç sayfa?","Yazar kim?","Metin ne zaman yazıldı?"],"d":0,"z":2},{"s":"Metnin başlığı aşağıdakilerden hangisi olabilir? (Kitap okumanın önemini anlatan metin)","o":["Kitap Okumanın Faydaları","Yaz Tatili","Arkadaşlık","Doğa"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1},{"s":"\"güzel\" sözcüğünün eş anlamlısı hangisidir?","o":["hoş","çirkin","büyük","küçük"],"d":0,"z":1},{"s":"\"Kardeşim kitabı okudu.\" cümlesinde yüklem hangisidir?","o":["okudu","kardeşim","kitabı","kitabı okudu"],"d":0,"z":1},{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-mat5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mat5"] = {"0":[{"s":"40.000 + 3.000 + 500 + 20 + 7 işleminin sonucu kaçtır?","o":["43.527","43.572","43.057","432.507"],"d":0,"z":1},{"s":"0,5 + 0,3 işleminin sonucu kaçtır?","o":["0,8","0,2","0,15","8"],"d":0,"z":1},{"s":"Küpün kaç yüzü vardır?","o":["6","4","8","12"],"d":0,"z":1}],"1":[{"s":"8.520.000 sayısındaki 5 rakamının basamak değeri kaçtır?","o":["500.000","50.000","5.000","5"],"d":0,"z":2},{"s":"Aşağıdaki kesirlerden hangisi %50'ye eşittir?","o":["1/2","1/3","1/4","2/3"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"2":[{"s":"(23 + 17) x 2 işleminin sonucu kaçtır?","o":["80","60","90","50"],"d":0,"z":1},{"s":"Bir doğru üzerinde kaç nokta vardır?","o":["Sonsuz","1","2","3"],"d":0,"z":2},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"3":[{"s":"Aşağıdakilerden hangisi geometrik cisim değildir?","o":["Daire","Küp","Silindir","Koni"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"640 ÷ 8 işleminin sonucu kaçtır?","o":["80","60","70","90"],"d":0,"z":1},{"s":"Bir üçgenin iç açılarının toplamı kaç derecedir?","o":["180°","360°","90°","270°"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"4":[{"s":"Dik açının ölçüsü kaç derecedir?","o":["90°","180°","45°","60°"],"d":0,"z":1},{"s":"Bir dikdörtgenin kısa kenarı 4 cm, uzun kenarı 7 cm ise çevresi kaç cm'dir?","o":["22","28","11","56"],"d":0,"z":2},{"s":"Bir sayının çeyreği 15 ise bu sayının tamamı kaçtır?","o":["60","45","30","75"],"d":0,"z":2},{"s":"Karenin kaç kenarı vardır?","o":["4","3","5","6"],"d":0,"z":1},{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"5":[{"s":"Bir bütünün 4 eş parçasından 3 parçasını gösteren kesir hangisidir?","o":["3/4","4/3","1/3","3/1"],"d":0,"z":1},{"s":"Bir sınıftaki öğrencilerin sevdiği renkleri gösteren grafiğe ne denir?","o":["Sütun grafiği","Çizgi grafiği","Daire grafiği","Tablo"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"6":[{"s":"1/4 + 1/4 işleminin sonucu kaçtır?","o":["2/4 (yani 1/2)","2/8","1/8","1/4"],"d":0,"z":1},{"s":"1 metrede kaç santimetre vardır?","o":["100","10","1000","10000"],"d":0,"z":1}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-fen5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["fen5"] = {"0":[{"s":"Güneş hangi gök cismidir?","o":["Bir yıldız","Bir gezegen","Yapay uydu","Bir galaksi"],"d":0,"z":1},{"s":"Dünya'nın uydusu hangisidir?","o":["Ay","Güneş","Mars","Venüs"],"d":0,"z":1},{"s":"Ay, Dünya'nın etrafında kaç günde bir döner?","o":["27-29 gün","365 gün","1 gün","12 saat"],"d":0,"z":2},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"1":[{"s":"Kuvvet hangi araçla ölçülür?","o":["Dinamometre","Terazi","Cetvel","Saat"],"d":0,"z":1},{"s":"Sürtünme kuvveti hareketı nasıl etkiler?","o":["Yavaşıtırır","Hızlandırır","Durdurmaz","Hiç etkilemez"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisi bir canlıdır?","o":["Mantar","Taş","Bulut","Sandalye"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"2":[{"s":"Mikroskobik canlılar nereden görülebilir?","o":["Mikroskopla","Çıplak gözle","Büyüteçle her yerde","Dürbünle"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"3":[{"s":"Bu kabın 'erime' hali hangi maddeyi örnek alır?","o":["Buz","Su","Buhar","Metal"],"d":0,"z":1},{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"4":[{"s":"Işık hangi ortamda yayılır?","o":["Saydam ve yarı saydam ortamlarda","Sadece karanlıkta","Sadece havada","Yalnızca suda"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"5":[{"s":"Anahtarı kapasız bir elektrik devresinde ampul ne olur?","o":["Yanmaz","Işık verir","Patlar","Pil büyer"],"d":0,"z":1},{"s":"Gölgenin oluşması için ne gerekir?","o":["Işık ve cisim","Sadece cisim","Sadece ışık","Rüzgar"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1},{"s":"Aşağıdakilerden hangisi doğal çevreye örnektir?","o":["Orman","Apartman","Yol","Köprü"],"d":0,"z":1}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-sos5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["sos5"] = {"0":[{"s":"Aile, okul ve arkadaşlar hangi gruba örnektir?","o":["Sosyal gruplar","Siyasi gruplar","Hava durumu","Bitkiler"],"d":0,"z":1},{"s":"Evimizde kullanmadığımız eşyaları ihtiyacı olanlara vermek hangi değeri gösterir?","o":["Yardımlaşma","Kıskançlık","İsraf","Bencillik"],"d":0,"z":1},{"s":"18 yaşını dolduran her Türk vatandaşının sahip olduğu hak hangisidir?","o":["Oy kullanma hakkı","Sadece okula gitme hakkı","Sadece çalışma hakkı","Sadece seyahat hakkı"],"d":0,"z":1},{"s":"Aşağıdakilerden hangisi bir hak değildir?","o":["Başkalarını rahatsız etmek","Eğitim hakkı","Sağlık hakkı","Oy kullanma hakkı"],"d":0,"z":2},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"1":[{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Haritada yön bulmaya yarayan işaret hangisidir?","o":["Kuzey oku","Güneş","Deniz","Orman"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"2":[{"s":"İnsanların birbirini tanımasına ve iletişim kurmasına yardımcı olan ortak etkinliğe ne denir?","o":["Sosyal etkinlik","Ders çalışma","Uyku","Yemek yeme"],"d":0,"z":2},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Aşağıdakilerden hangisi Türkiye'nin yüzey şekillerinden biridir?","o":["Dağ","Okyanus","Kutup","Çöl"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"Bir ülkede halkın kendini yönetecekleri seçmesi hangi yönetim biçimidir?","o":["Demokrasi","Monarşi","Oligarşi","Emperyalizm"],"d":0,"z":2},{"s":"Bir ülkenin yönetimini milletin seçtiği kişiler aracılığıyla yürütmesine ne denir?","o":["Demokrasi","Monarşi","Diktatörlük","Anarşi"],"d":0,"z":2},{"s":"Matbaayı icat eden kişi kimdir?","o":["Gutenberg","Einstein","Newton","Edison"],"d":0,"z":1}],"4":[{"s":"Dünya üzerindeki en büyük kıta hangisidir?","o":["Asya","Afrika","Avrupa","Avustralya"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Bir ürünün üretiminden tüketimine kadar geçen süreçte hangisi vardır?","o":["Üretim, dağıtım ve tüketim","Sadece üretim","Sadece tüketim","Hiçbiri"],"d":0,"z":2}],"5":[{"s":"Bir toplumun gelenek, görenek ve yaşam biçimine ne denir?","o":["Kültür","İklim","Ticaret","Tarım"],"d":0,"z":1},{"s":"Uzak ülkelerdeki insanlarla iletişim kurmamızı sağlayan araç hangisidir?","o":["İnternet","Mektup güvercini","Sadece el sıkışma","Hiçbiri"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-ing5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["ing5"] = {"0":[{"s":"\"How are you?\" sorusuna hangisi uygun cevaptır?","o":["I'm fine, thank you.","I'm ten.","I'm from Turkey.","Goodbye."],"d":0,"z":1},{"s":"\"I like watching comedy movies.\" cümlesinde \"comedy\" ne demektir?","o":["Komedi","Korku","Bilim kurgu","Aksiyon"],"d":0,"z":1},{"s":"\"What is your name?\" sorusunun cevabı hangisidir?","o":["My name is Ali.","I am ten.","I am fine.","I live in Istanbul."],"d":0,"z":1},{"s":"\"What type of movies do you like?\" sorusuna hangisi cevaptır?","o":["I like action movies.","I am fine.","I am ten.","I live in Izmir."],"d":0,"z":1}],"1":[{"s":"\"Where is the hospital?\" sorusunda \"hospital\" ne demektir?","o":["Hastane","Okul","Market","Park"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"2":[{"s":"\"turn left\" ifadesinin Türkçe karşılığı nedir?","o":["Sola dön","Sağa dön","Düz git","Dur"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"3":[{"s":"\"What do you like doing in your free time?\" sorusuna hangisi cevaptır?","o":["I like playing chess.","I am a student.","I am ten.","I live in Ankara."],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"4":[{"s":"\"play football\" ne demektir?","o":["Futbol oynamak","Basketbol oynamak","Kitap okumak","Yüzmek"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"5":[{"s":"\"I get up at 7 o'clock.\" cümlesinde \"get up\" ne demektir?","o":["Kalkmak","Yatmak","Yemek yemek","Uyumak"],"d":0,"z":1},{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"6":[{"s":"\"I have a headache.\" ne demektir?","o":["Başım ağrıyor.","Ayağım ağrıyor.","Dişim ağrıyor.","Boğazım ağrıyor."],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"7":[{"s":"\"What time do you go to school?\" sorusunda saat bilgisi hangi kelimeyle sorulur?","o":["What time","Where","Who","Why"],"d":0,"z":2},{"s":"Doktora gitmen gerektiğini nasıl ifade edersin?","o":["I should see a doctor.","I should play football.","I should sleep all day.","I should eat candy."],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"8":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"9":[{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-din5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["din5"] = {"0":[{"s":"Allah'ın her şeyi bilmesi hangi sıfatla ifade edilir?","o":["İlim","Basiret","Şiir","Felsefe"],"d":0,"z":2},{"s":"\"Evrende her şeyi düzenleyen ve yaratan\" kavramı hangisidir?","o":["Allah","Melek","İnsan","Hayvan"],"d":0,"z":1},{"s":"\"Allah'ın her şeyi işitmesi\" hangi sıfatla ifade edilir?","o":["Semi' (İşitici)","Basari (Görücü)","Kudret","Rahmet"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisi Allah'ın sıfatlarından biri değildir?","o":["Fani (ölümlü)","Alim (bilen)","Kadir (güç yetiren)","Hakim"],"d":0,"z":2},{"s":"\"Allah'ın yaratmasında hiçbir kusur bulunmaması\" onun hangi özelliğini gösterir?","o":["Her şeyi kusursuz yaratması","Uykusu olması","Yaşlanması","Yorulması"],"d":0,"z":1},{"s":"Bayramlarda büyükleri ziyaret edip ellerini öpmek hangi davranışı gösterir?","o":["Büyüklere saygı ve sevgi","Kıskançlık","Kayıtsızlık","Tembellik"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1},{"s":"Namazdan önce yapılan temizliğe ne denir?","o":["Abdest","Dua","Zikir","Sadaka"],"d":0,"z":1},{"s":"Hz. Muhammed (s.a.v.) hangi şehirde doğmuştur?","o":["Mekke","Medine","Taif","Kudüs"],"d":0,"z":1},{"s":"Ramazan ayının özel gecesi hangisidir?","o":["Kadir Gecesi","Cuma Gecesi","Yılbaşı Gecesi","Mevlit Gecesi"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"1":[{"s":"İslam'ın beş şartından hangisi \"namaz kılmak\"tır?","o":["Namaz","Oruç","Zekat","Hac"],"d":0,"z":1},{"s":"Namaz kılarken kıble olarak hangi yöne dönülür?","o":["Kabe'ye (Mekke)","Kuzeye","Doğuya","Batıya"],"d":0,"z":1},{"s":"Müslümanların yılda bir kez tuttuğu, belirli bir ay boyunca süren oruç hangi ayda tutulur?","o":["Ramazan","Muharrem","Şaban","Recep"],"d":0,"z":1},{"s":"\"Doğruluk, dürüstlük, emaneti korumak\" hangi değerle doğrudan ilgilidir?","o":["Güvenilirlik","Kıskançlık","Cimrilik","Öfke"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"2":[{"s":"İslam'ın beş şartından biri aşağıdakilerden hangisidir?","o":["Hac","Resim yapmak","Şiir yazmak","Spor yapmak"],"d":0,"z":1},{"s":"Yalan söylemek ve sözünde durmamak hangi davranışa örnektir?","o":["Güveni zedelemek","Yardım etmek","Sabretmek","Teşekkür etmek"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"3":[{"s":"Ramazan ayının sonunda, bayramdan önce ihtiyaç sahiplerine verilen yardıma ne denir?","o":["Fitre","Zekat","Kurban","Adak"],"d":0,"z":2},{"s":"Hz. Muhammed'in (s.a.v.) \"el-Emin\" lakabı ne anlama gelir?","o":["Güvenilir","Çalışkan","Zengin","Sporcu"],"d":0,"z":2},{"s":"Ramazan ayında tutulan ibadet hangisidir?","o":["Oruç","Hac","Kurban","Zekat"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"4":[{"s":"Doğru sözlü olmak hangi erdemdir?","o":["Dürüstlük","Tembellik","Kibir","İsraf"],"d":0,"z":1},{"s":"Ramazan Bayramı'nda hangisi yapılır?","o":["Bayramlaşma ve yardımlaşma","Sadece uyumak","Sadece tatile gitmek","Hiçbir şey yapılmaz"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"5":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-bty5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["bty5"] = {"0":[{"s":"Bilişim Teknolojileri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Bilişim Teknolojileri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"İnternette gezinen sayfalara ne denir?","o":["Web sitesi","Sınıf","Kitap","Pencere"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"1":[{"s":"Bilgisayarda yazı yazmak için hangisi kullanılır?","o":["Klavye","Hoparlör","Yazıcı","Fare"],"d":0,"z":1},{"s":"İnternete bağlanmak için hangisine ihtiyaç vardır?","o":["İnternet bağlantısı","Kalem","Silgi","Defter"],"d":0,"z":1},{"s":"Hangisi kelime işlemci programıdır?","o":["Word","Paint","PowerPoint","Excel"],"d":0,"z":1},{"s":"Yazı yazılan programda yazının kalın olması için hangi işlem yapılır?","o":["Kalın (Bold) butonuna tıklanır","Renk değiştirilir","Yazıcıdan çıktı alınır","Hiçbir şey yapılmaz"],"d":0,"z":2},{"s":"Sunum yapmak için hangi program kullanılır?","o":["PowerPoint","Paint","Word","Excel"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Arama motorunda bilgi ararken en doğrusu hangisidir?","o":["Anahtar kelimeleri doğru seçmek","Her şeye tıklamak","Şifreyi paylaşmak","Adresi ezberlemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"2":[{"s":"Aşağıdakilerden hangisi bir bilgisayar parçasıdır?","o":["Ekran","Kalem","Defter","Silgi"],"d":0,"z":1},{"s":"İnternetten bulduğun bilginin doğru olduğundan nasıl emin olursun?","o":["Birden fazla güvenilir kaynağa bakarak","Tek bir siteden bakarak","Sadece tahmin ederek","Hiç kontrol etmeden"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"İnternette tanımadığın biriyle özel bilgilerini paylaşmalı mısın?","o":["Hayır, asla","Evet, her zaman","Sadece bir kere","Gerek yok ama olabilir"],"d":0,"z":1},{"s":"\"Bilişim etiği kural ve ilkelerini yorumlayabilme\" çalışması hangi temada yer alır?","o":["Bilişim Etiği Ve Siber Güvenlik","Dijital Ürün Tasarımı Ve Geliştirme","Yapay Zekâ","Bilişim Teknolojilerinin Hayatımızdaki Yeri"],"d":0,"z":2}],"4":[{"s":"Güçlü bir şifre nasıl olmalıdır?","o":["Harf, rakam ve sembol içermeli","Sadece 1 rakam olmalı","Kendi adı olmalı","1234 olmalı"],"d":0,"z":1},{"s":"\"Yapay zekâ uygulamalarını sınıflandırabilme\" çalışması hangi temada yer alır?","o":["Yapay Zekâ","Dijital Ürün Tasarımı Ve Geliştirme","Bilişim Etiği Ve Siber Güvenlik","Bilişim Teknolojilerinin Hayatımızdaki Yeri"],"d":0,"z":2}],"5":[{"s":"Bir işi yapmak için adım adım yazılan yönergeye ne denir?","o":["Algoritma","Resim","Şarkı","Hikaye"],"d":0,"z":2},{"s":"Blok tabanlı programlama aracı hangisidir?","o":["Scratch","Word","Paint","Excel"],"d":0,"z":1},{"s":"Sunum slaytlarına eklenebilecek öğe hangisidir?","o":["Resim","Sadece kağıt","Sadece kalem","Hiçbiri"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Bilişim Teknolojileri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Bilişim Teknolojileri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-grs5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["grs5"] = {"0":[{"s":"Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?","o":["Degrade (ton geçişi)","Perspektif","Kompozisyon","Ritim"],"d":0,"z":1},{"s":"Açık-koyu (ışık-gölge) çalışmasına ne denir?","o":["Karakalem tonlama","Perspektif","Kompozisyon","Renk harmanı"],"d":0,"z":2}],"1":[{"s":"Hangileri sıcak renklerdir?","o":["Kırmızı, turuncu, sarı","Mavi, yeşil, mor","Siyah, beyaz, gri","Pembe, kahverengi, lacivert"],"d":0,"z":1},{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1}],"2":[{"s":"Renk çemberinde birbirine zıt renklere ne ad verilir?","o":["Tamamlayıcı renk","Ana renk","Ara renk","Sıcak renk"],"d":0,"z":2},{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2}],"3":[{"s":"Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?","o":["HB, 2B, 4B","1A, 2A","XS, S","M, L"],"d":0,"z":3},{"s":"Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?","o":["Perspektif","Kompozisyon","Orantı","Simetri"],"d":0,"z":1},{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2},{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"Bir resmin öğelerinin düzenine ne denir?","o":["Kompozisyon","Perspektif","Ton","Ritim"],"d":0,"z":1}],"4":[{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3},{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?","o":["Tek kaçış noktalı perspektif","İki boyutlu","Soyut","Eksentrik"],"d":0,"z":3}],"5":[{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}],"6":[{"s":"Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?","o":["Noktacılık (pointillism)","Hat çizimi","Karakalem","Silgi ile çizim"],"d":0,"z":2},{"s":"\"Sergileme mekânlarına göre müzeleri karşılaştırabilme\" çalışması hangi temada yer alır?","o":["Müze Ve Kültür","Sanatın Görsel Dili","Çizim Ve Görsel İfade","Millî Değerler Ve Sanat"],"d":0,"z":2}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Görsel Sanatlar yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Görsel Sanatlar proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-mzk5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mzk5"] = {"0":[{"s":"Müziğin temposunu belirleyen düzenli vuruşlara ne denir?","o":["Ritim","Melodi","Armoni","Ton"],"d":0,"z":1},{"s":"Sessizlik sürelerini gösteren işaretlere ne ad verilir?","o":["Sus işareti","Nota","Ölçü","Anahtar"],"d":0,"z":2},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Müziğin alfabesindeki temel ses sembolüne ne denir?","o":["Nota","Ritim","Akor","Makam"],"d":0,"z":1},{"s":"Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?","o":["Solfej","Ritim","Kompozisyon","İcra"],"d":0,"z":2},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Telli çalgılara örnek hangisidir?","o":["Gitar","Davul","Flüt","Zil"],"d":0,"z":1},{"s":"Vurmalı çalgılara örnek hangisidir?","o":["Davul","Keman","Gitar","Saksafon"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2}],"1":[{"s":"Hızlı tempoya ne denir?","o":["Allegro","Adagio","Andante","Largo"],"d":0,"z":2},{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3},{"s":"Bir oktavdaki temel ses sayısı kaçtır?","o":["7","5","12","3"],"d":0,"z":2},{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2},{"s":"Üflemeli çalgılara örnek hangisidir?","o":["Flüt","Keman","Piyano","Marakas"],"d":0,"z":1},{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}],"2":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Müzik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"3":[{"s":"Müzik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM5-bed5 - 2026-2027 resmi müfredat uyumlu */
SORULAR["bed5"] = {"0":[{"s":"Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?","o":["Isınma","Soğuma","Yarış","Antrenman"],"d":0,"z":1},{"s":"Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?","o":["11","5","7","9"],"d":0,"z":2},{"s":"Sporcular için önemli enerji kaynağı hangisidir?","o":["Karbonhidrat","Şekerli gazlı içecek","Aşırı yağ","Tuz"],"d":0,"z":2}],"1":[{"s":"Kasları esnek hale getiren hareketlere ne denir?","o":["Esnetme","Koşu","Zıplama","Sıçrama"],"d":0,"z":1},{"s":"Topu elle oynamanın yasak olduğu takım oyunu hangisidir?","o":["Futbol","Hentbol","Basketbol","Voleybol"],"d":0,"z":2},{"s":"Vücudun susuz kalmaması için ne yapılmalıdır?","o":["Yeterli su içilmeli","Az su içilmeli","Hiç su içilmemeli","Sadece meyve suyu"],"d":0,"z":1}],"2":[{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2}],"3":[{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1}],"4":[{"s":"Isınmadan spor yapmanın riski nedir?","o":["Sakatlanma","Daha hızlı olma","Enerji artışı","Kas gücü"],"d":0,"z":2},{"s":"Beşer kişilik iki takımla oynanan saha oyunu hangisidir?","o":["Basketbol","Satranç","Yüzme","Tenis"],"d":0,"z":1},{"s":"Sağlıklı beslenmede öğünlere örnek hangisidir?","o":["Kahvaltı, öğle, akşam","Atıştırma","Tek öğün","Aç kalma"],"d":0,"z":1},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}],"5":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Beden Eğitimi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Beden Eğitimi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-trk6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["trk6"] = {"0":[{"s":"'soğuk' kelimesinin zıt anlamlısı hangisidir?","o":["sıcak","buz","serin","kış"],"d":0,"z":1},{"s":"'koşmak' fiilinin şimdiki zaman hâli hangisidir?","o":["koşuyor","koştu","koşacak","koşar"],"d":0,"z":1},{"s":"'Gelince bizi ara.' cümlesi hangi tür cümledir?","o":["Birleşik cümle","Basit cümle","Sıralı cümle","Ünlem cümlesi"],"d":0,"z":2},{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"1":[{"s":"'göz' kelimesi hangi cümlede gerçek anlamıyla kullanılmıştır?","o":["Annemin gözleri yeşildir.","Evin gözü kalmış.","Bu işin gözüne girdi.","Sözünü gözden çıkardı."],"d":0,"z":3},{"s":"Aşağıdakilerden hangisi dilek (istek) kipine örnektir?","o":["Geleyim.","Geliyorum.","Geldim.","Geleceğim."],"d":0,"z":3},{"s":"Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?","o":["Yukarı çıktı.","Şu an tam şimdi geliyor.","Kitap okumayı severim.","Ders çalışıyorum."],"d":1,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"2":[{"s":"'Sınavdan 100 aldı.' cümlesinin duygu yönü hangisidir?","o":["Sevinç","Üzüntü","Kızgınlık","Şaşkınlık"],"d":0,"z":1},{"s":"'Annem çarşıdan ekmek aldı' cümlesinde sona hangi noktalama işareti gelmelidir?","o":["Nokta (.)","Soru işareti (?)","Ünlem (!)","Virgül (,)"],"d":0,"z":1},{"s":"Aşağıdakilerden hangisi anlatım bozukluğuna örnektir?","o":["Kardeşim okula gitti.","Yaşlı dedem çok iyidir.","Kapıyı sessizce açtım.","Onu ilk o ilk gördü."],"d":3,"z":3},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"'Kitap okumak insanı geliştirir.' cümlesinde vurgulanan yargı hangisidir?","o":["Genel geçer bir görüş","Kişisel bir tercih","Bir olay","Bir öneri"],"d":0,"z":2},{"s":"Hangi cümlede yazım yanlışı vardır?","o":["Türkçe dersini seviyorum.","Ankara'ya gittik.","Pazartesi günü sınav var.","Onunda kalemi yok."],"d":3,"z":3},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"4":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Başka bölü 'gövde' nasıl tanımlanır?","o":["Kök üzerine yapım eki getirilmiş hali","Cümlenin en kısa hali","Bir kelimenin tamamını","İki cümle"],"d":0,"z":3},{"s":"Yaşanmış bir olayı anlatan yazı türüne ne denir?","o":["Anı","Masal","Efsane","Fabl"],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"5":[{"s":"'Bu kitap' ifadesindeki 'bu' kelimesi hangi sıfat türüdür?","o":["İşaret sıfatı","Niteleme sıfatı","Sayı sıfatı","Soru sıfatı"],"d":0,"z":3},{"s":"Aşağıdaki cümlelerden hangisi sıralı cümledir?","o":["Geldi, oturdu, konuştu.","Uyuyan kedi camdaydı.","Okula erken gittim.","Hava güzel."],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-mat6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mat6"] = {"0":[{"s":"Aşağıdaki sayılardan hangisi asal sayıdır?","o":["7","9","15","21"],"d":0,"z":2},{"s":"12 sayısının kaç doğal sayı çarpanı vardır?","o":["6","4","8","5"],"d":0,"z":3},{"s":"3² + 2 işleminin sonucu kaçtır?","o":["11","8","9","13"],"d":0,"z":2},{"s":"1/2 + 1/4 işleminin sonucu kaçtır?","o":["3/4","2/6","1/6","2/4"],"d":0,"z":2},{"s":"Bir küpün kaç ayrıtı vardır?","o":["12","6","8","10"],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"1":[{"s":"3,5 ondalık gösterimi hangi kesre eşittir?","o":["35/10","35/100","3/5","5/3"],"d":0,"z":2},{"s":"8 + 2 x 4 işleminin sonucu kaçtır? (İşlem önceliğine dikkat!)","o":["16","40","24","32"],"d":0,"z":2},{"s":"3/4 kesrinin 2/4 eksiği kaçtır?","o":["1/4","1/2","5/4","1"],"d":0,"z":1},{"s":"3 litre kaç yarım litredir?","o":["6","3","9","12"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"2":[{"s":"2x + 3 ifadesinde katsayıları 2 olan sayı kaçtır?","o":["2","3","5","x"],"d":0,"z":2},{"s":"A = {1, 2, 3} kümesinin eleman sayısı kaçtır?","o":["3","2","1","4"],"d":0,"z":1},{"s":"0,25 + 0,35 işleminin sonucu kaçtır?","o":["0,60","0,50","0,25","0,35"],"d":0,"z":1},{"s":"Bir sürahi 1,5 litre su alıyor. 3 sürahi kaç litre su alır?","o":["4,5","3,5","3","5,5"],"d":0,"z":2},{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"3":[{"s":"Bir silindirin tabanı hangi geometrik şekildir?","o":["Daire","Üçgen","Kare","Dikdörtgen"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Kümeyi göstermek için kullanılan sembol hangisidir?","o":["{ }","[ ]","( )","< >"],"d":0,"z":1},{"s":"4 elma ve 5 armut var. Elmanın portakallılar oranı kaçtır?","o":["4/5","5/4","4/9","5/9"],"d":0,"z":2},{"s":"Kenar uzunlukları 2, 3 ve 4 birim olan dikdörtgenler prizmasının hacmi kaç birim küptür?","o":["24","12","20","32"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"4":[{"s":"Uzun kenarı 8 cm, kısa kenarı 5 cm olan dikdörtgenin alanı kaç cm²dir?","o":["40","26","13","80"],"d":0,"z":1},{"s":"Yarıçağı 3 cm olan çemberin çevresi yaklaşık kaç cm'dir? (π = 3)","o":["18","9","27","36"],"d":0,"z":3},{"s":"-7 + 3 işleminin sonucu kaçtır?","o":["-4","4","-10","10"],"d":0,"z":2},{"s":"5, 7, 9 sayılarının ortalaması kaçtır?","o":["7","6","9","8"],"d":0,"z":2},{"s":"1 litrede kaç mililitre vardır?","o":["1000","100","10","500"],"d":0,"z":1}],"5":[{"s":"5, 8, 8, 9, 10 veri grubunun modu (en çok tekrar eden değer) kaçtır?","o":["8","9","5","10"],"d":0,"z":1},{"s":"Mutlak değeri 5 olan tam sayılar hangileridir?","o":["5 ve -5","5 ve 5","-5 ve -5","0 ve 5"],"d":0,"z":3},{"s":"Bir açının tümleri 40° ise bu açı kaç derecedir?","o":["50°","60°","140°","40°"],"d":0,"z":2},{"s":"7, 12, 14, 9 verilerinin aritmetik ortalaması kaçtır?","o":["10,5","11","9","12"],"d":0,"z":2}],"6":[{"s":"2/3 kesrinin paydası 6 yapılarak genişletilirse sonuç hangisidir?","o":["4/6","2/6","6/6","3/6"],"d":0,"z":2},{"s":"Kenarı 6 cm olan karenin alanı kaç cm²dir?","o":["36","12","24","30"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-fen6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["fen6"] = {"0":[{"s":"Güneş Sistemi'nde kaç gezegen var?","o":["8","7","9","10"],"d":0,"z":1},{"s":"Güneş tutulması hangi gök cismi önüne geçildi?","o":["Ay","Mars","Satürn","Bir yıldız"],"d":0,"z":2},{"s":"Bilgileri taşıyan hücrelerden oluşan sistem hangisidir?","o":["Sinir sistemi","Dolaşım sistemi","Solunum sistemi","Sindirim sistemi"],"d":0,"z":2},{"s":"Kanı vücuda pompalayan organ hangisidir?","o":["Kalp","Akciğer","Böbrek","Karaciğer"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"1":[{"s":"Araçların hareket ederken cisimleri etkileyen kuvvet ne yapar?","o":["Hareketlerdir","Isıtır","Dokunmaz","Görülür"],"d":0,"z":1},{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"2":[{"s":"Sürtünme kuvveti hangi yüzeyde en fazladır?","o":["Pürüzlü yüzey","Buz","Cam","Mermer"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"Sıcaklığı 80°C olan su, sıcaklığı 20°C olan su ile karıştırıılnca önce ısı hangi yönde akar?","o":["Sıcaktan soğuğa","Soğuktan sıcağa","Yansır","Akmaz"],"d":0,"z":2},{"s":"\"Işığın farklı yüzeylerdeki yansıma olaylarına ilişkin bilimsel çıkarım yapabilme\" çalışması hangi temada yer alır?","o":["Işığın Yansıması Ve Renkler","Kuvvetin Etkisinde Hareket","Maddenin Ayırt Edici Özellikleri","Sürdürülebilir Yaşam Ve Etkileşim"],"d":0,"z":2}],"4":[{"s":"Sesin şiddetini ölçen alet hangisidir?","o":["Ses ölçer (decibel)","Termometre","Barometre","Cetvel"],"d":0,"z":2},{"s":"\"Isı etkisiyle maddelerin genleşip büzüleceğine yönelik bilimsel gözleme dayalı tahmin…\" çalışması hangi temada yer alır?","o":["Maddenin Ayırt Edici Özellikleri","Kuvvetin Etkisinde Hareket","Işığın Yansıması Ve Renkler","Sürdürülebilir Yaşam Ve Etkileşim"],"d":0,"z":2}],"5":[{"s":"Hangisi elektriği iletmez (yalıtkan)?","o":["Plastik","Bakır","Çelik","Gümüş"],"d":0,"z":2},{"s":"Hangisi elektriği iletir (iletken)?","o":["Bakır","Plastik","Cam","Tahta"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"6":[{"s":"Bir cismi hareket ettirmek için ne gerekir?","o":["Kuvvet","Sıcaklık","Renk","Ses"],"d":0,"z":1},{"s":"Ses meydana gelmek için ne gerekir?","o":["Titreşim","Karanlık","Soğuk","Gölge"],"d":0,"z":1},{"s":"Sesin yayılması için ne gerekir?","o":["Bir ortam (madde)","Boşluk","Karanlık","Sessizlik"],"d":0,"z":2},{"s":"Sağlıklı bir iskelet için hangisi yapılmalıdır?","o":["Dengeli beslenmek ve spor yapmak","Uzun süre ekrana bakmak","Hazır gıda ağırlıklı beslenmek","Çok az su içmek"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-sos6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["sos6"] = {"0":[{"s":"Hangisi somut kültürel miras öğesidir?","o":["Tarihi cami","Bir düşünce","Bir atasözü","Bir inanç"],"d":0,"z":2},{"s":"Bir toplumun sahip olduğu değer ve geleneklerin tümüne ne denir?","o":["Kültür","Sermaye","Sanayi","Ticaret"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisi yardımlaşmaya örnektir?","o":["Komşuna alışverişinde yardım etmek","Sınavda kopya çekmek","Yalan söylemek","Eşyalarını paylaşmamak"],"d":0,"z":1},{"s":"Halkın kendisini yönetecekleri seçimle belirlemesi hangi yönetim biçimidir?","o":["Demokrasi","Monarşi","Oligarşi","Teokrasi"],"d":0,"z":2},{"s":"Tarım ürünlerinin işlenerek yeni ürünler elde edilmesine ne denir?","o":["Üretim","Tüketim","İsraf","Tasarruf"],"d":0,"z":1}],"1":[{"s":"İlk Türk yazılı belgeleri hangileridir?","o":["Orhun Yazıtları","Magna Carta","Roma Tabletleri","Kadeş Antlaşması"],"d":0,"z":2},{"s":"Haritada yön bulmamızı sağlayan işaret hangisidir?","o":["Kuzey oku","Ölçek çubuğu","Renkler","Çizgiler"],"d":0,"z":1},{"s":"Bilimsel bir buluşun yeni bir ürüne dönüşmesine ne denir?","o":["İnovasyon (yenilik)","Taklit","İthalat","Atalet"],"d":0,"z":2},{"s":"Bir ülkenin zenginliğinin ölçüsü aşağıdakilerden hangisidir?","o":["Üretim ve hizmet değeri","Sadece altın","Sadece araba sayısı","Sadece iklim"],"d":0,"z":2}],"2":[{"s":"Aşağıdakilerden hangisi bir sosyal role örnektir?","o":["Öğrenci","Yağmur","Deniz","Ağaç"],"d":0,"z":1},{"s":"Türklerin anayurdu sayılan Orta Asya'da hangi geçim kaynağı yaygındı?","o":["Hayvancılık","Balıkçılık","Madencilik","Gemicilik"],"d":0,"z":2},{"s":"Anadolu'ya yerleşen Türklerin ilk beyliklerinden biri hangisidir?","o":["Büyük Selçuklu","Bizans","Pers","Roma"],"d":0,"z":2},{"s":"Türklerin İslamiyet'i toplu olarak kabul etmeye başladığı dönem hangi savaşla bağdaştırılır?","o":["Talas Savaşı","Malazgirt Savaşı","Kurtuluş Savaşı","Çanakkale Savaşı"],"d":0,"z":3},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Deniz seviyesinden aynı yükseklikteki noktaları birleştiren eğrilere ne denir?","o":["İzohips (eş yükselti)","Lejant","Ölçek","Yön oku"],"d":0,"z":3},{"s":"Matbaanın yaygınlaşması toplumlarda en çok hangisini artırmıştır?","o":["Bilgiye erişimi","Yoksulluğu","İşsizliği","Savaşları"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"3":[{"s":"Yönetime katılmanın temel yolu hangisidir?","o":["Seçimlerde oy kullanmak","Sadece izlemek","Şikayet etmek","Vergi vermemek"],"d":0,"z":1},{"s":"Dünyada görülen iklim farklılıklarının en temel nedeni hangisidir?","o":["Güneş ışınlarının geliş açısı","Para birimi","Nüfus sayısı","Bilgisayar kullanımı"],"d":0,"z":2},{"s":"Osmanlı Devleti'nin kurucusu kimdir?","o":["Osman Bey","Alparslan","Fatih Sultan Mehmet","Kanuni"],"d":0,"z":1},{"s":"Farklı ülkelerle yapılan mal alışverişine ne ad verilir?","o":["Dış ticaret","İç ticaret","Takas","Yardım"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"4":[{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1},{"s":"Yöneticilerini seçimle belirleyen yönetim biçimi hangisidir?","o":["Cumhuriyet","Monarşi","Krallık","Saltanat"],"d":0,"z":1},{"s":"Farklı ülkelerle yapılan dış ticarette satın alınan ürünlere ne denir?","o":["İthalat","İhracat","Üretim","Tasarruf"],"d":0,"z":2}],"5":[{"s":"Bir kültürün gelecek kuşaklara aktarılmasını sağlayan en önemli unsur hangisidir?","o":["Dil","Yollar","İklim","Ulaşım"],"d":0,"z":1},{"s":"Muhtarlık, belediye başkanlığı hangi yönetim basamağına örnektir?","o":["Yerel yönetim","Merkezi yönetim","Yargı","Askeri yönetim"],"d":0,"z":2},{"s":"Üretilen ürünlerin ihtiyaç sahiplerine ulaştırılmasına ne denir?","o":["Dağıtım","Üretim","Tüketim","Planlama"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Sosyal Bilgiler yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Sosyal Bilgiler proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-ing6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["ing6"] = {"0":[{"s":"'What do you do every morning?' sorusuna uygun cevap hangisidir?","o":["I brush my teeth.","I am sleeping.","I will go.","I watched TV."],"d":0,"z":2},{"s":"\"What does your father do?\" sorusuna doğru cevap hangisidir?","o":["He is a teacher.","He is at home.","He is tall.","He is happy."],"d":0,"z":2},{"s":"Çevreyi korumak için hangisi yapılmalıdır?","o":["Geri dönüşüm yapmak","Çöp atmak","Enerji israf etmek","Ormanları yakmak"],"d":0,"z":1}],"1":[{"s":"'I drink milk for breakfast.' cümlesinin anlamı nedir?","o":["Kahvaltıda süt içerim.","Akşam yemeğinde süt içerim.","Sütü sevmem.","Kahvaltıda çay içerim."],"d":0,"z":1},{"s":"\"police officer\" ne demektir?","o":["Polis memuru","Doktor","Öğretmen","Çiftçi"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"2":[{"s":"\"Where is the bank?\" sorusunun anlamı nedir?","o":["Banka nerede?","Saat kaç?","Adın ne?","Kaç yaşındasın?"],"d":0,"z":1},{"s":"'Do you like reading books?' sorusuna olumlu kısa cevap hangisidir?","o":["Yes, I do.","No, I don't.","Yes, I am.","Yes, I can."],"d":0,"z":2},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"3":[{"s":"\"go straight\" ifadesinin Türkçe karşılığı nedir?","o":["Düz git","Sola dön","Sağa dön","Dur"],"d":0,"z":1},{"s":"\"I read a book every day.\" cümlesinin Türkçesi nedir?","o":["Her gün kitap okurum.","Dün kitap okudum.","Yarın kitap okuyacağım.","Kitap okumam."],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"4":[{"s":"'I get up at seven o'clock.' cümlesi hangi zaman yapısıyla ilgilidir?","o":["Simple Present (geniş zaman)","Simple Past","Future","Present Perfect"],"d":0,"z":2},{"s":"Şehirde yön tarif ederken \"next to\" ne anlama gelir?","o":["Yanında","Karşısında","Uzağında","Üstünde"],"d":0,"z":2},{"s":"\"story book\" ne demektir?","o":["Hikaye kitabı","Defter","Ders kitabı","Sözlük"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"5":[{"s":"'It is rainy and cold today.' cümlesine göre bugün hava nasıldır?","o":["Yağmurlu ve soğuk","Güneşli ve sıcak","Karlı","Rüzgarlı"],"d":0,"z":1},{"s":"'Where did you go on holiday?' sorusuna uygun cevap hangisidir?","o":["I went to Antalya.","I go to Antalya.","I will go to Antalya.","I am going to Antalya."],"d":0,"z":2},{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"6":[{"s":"'I feel sad.' hangi duygudur?","o":["Üzgünüm","Mutluyum","Yorgunum","Kızgınım"],"d":0,"z":1},{"s":"\"I like riding the roller coaster.\" cümlesinde \"roller coaster\" ne demektir?","o":["Lunapark hızlı treni","Atlıkarınca","Salıncak","Kaydırak"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"7":[{"s":"'What does she do?' sorusunun doğru cevabı hangisidir?","o":["She is a doctor.","She is running.","She has a book.","She is happy."],"d":0,"z":2},{"s":"Hangisi eğlence parkında yapılan bir aktivitedir?","o":["Riding a carousel","Doing homework","Washing dishes","Sleeping"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"8":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"9":[{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-alm6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["alm6"] = {"0":[{"s":"'Guten Morgen!' Almanca'da ne zaman kullanılır?","o":["Sabah","Akşam","Öğle","Gece"],"d":0,"z":1},{"s":"'rot' hangi renktir?","o":["Kırmızı","Mavi","Yeşil","Sarı"],"d":0,"z":1},{"s":"'die Oma' ne demektir?","o":["Büyükanne","Büyükbaba","Hala","Teyze"],"d":0,"z":1},{"s":"'das Hobby' ne demektir?","o":["Hobi","Ödev","Ders","Arkadaş"],"d":0,"z":1},{"s":"'die Katze' hangi hayvandır?","o":["Kedi","Tavşan","At","İnek"],"d":0,"z":1},{"s":"Almanca (Seçmeli) proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"1":[{"s":"'Wie heißt du?' sorusunun Türkçesi nedir?","o":["Adın ne?","Kaç yaşındasın?","Nerelisin?","Ne iş yaparsın?"],"d":0,"z":1},{"s":"'grün' hangi renktir?","o":["Yeşil","Mor","Turuncu","Pembe"],"d":0,"z":1},{"s":"'das Buch' ne demektir?","o":["Kitap","Defter","Kalem","Çanta"],"d":0,"z":1},{"s":"'das Brot' ne demektir?","o":["Ekmek","Peynir","Süt","Elma"],"d":0,"z":1},{"s":"'der Vogel' hangi hayvandır?","o":["Kuş","Koyun","Keçi","Balık"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"2":[{"s":"'Ich heiße Eymen.' cümlesinin anlamı nedir?","o":["Adım Eymen","Ben Eymen'i seviyorum","Eymen nerede?","Eymen geliyor"],"d":0,"z":1},{"s":"'blau' hangi renktir?","o":["Mavi","Kırmızı","Siyah","Beyaz"],"d":0,"z":1},{"s":"'der Stift' ne demektir?","o":["Kalem","Silgi","Cetvel","Makas"],"d":0,"z":2},{"s":"'Ich möchte Wasser.' ne demektir?","o":["Su istiyorum","Süt istiyorum","Çay istiyorum","Meyve istiyorum"],"d":0,"z":2},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"'fünf' hangi sayıdır?","o":["5","6","4","7"],"d":0,"z":1},{"s":"'die Mutter' Türkçe karşılığı nedir?","o":["Anne","Baba","Kardeş","Dede"],"d":0,"z":1},{"s":"Aşağıdakilerden hangisi bir okul eşyasıdır?","o":["der Ranzen","der Hund","die Katze","das Brot"],"d":0,"z":1},{"s":"'das Frühstück' ne demektir?","o":["Kahvaltı","Öğle yemeği","Akşam yemeği","Tatlı"],"d":0,"z":1},{"s":"Almanca (Seçmeli) yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"4":[{"s":"'zwölf' sayısı kaçtır?","o":["12","20","11","2"],"d":0,"z":2},{"s":"'mein Bruder' ne demektir?","o":["Erkek kardeşim","Kız kardeşim","Babam","Amcam"],"d":0,"z":2},{"s":"'Was machst du in deiner Freizeit?' ne demektir?","o":["Boş zamanında ne yaparsın?","Kaç yaşındasın?","Nerede oturuyorsun?","Hangi okula gidiyorsun?"],"d":0,"z":2},{"s":"'die Milch' ne demektir?","o":["Süt","Su","Çay","Meyve suyu"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"5":[{"s":"'Wie alt bist du?' sorusu ne demektir?","o":["Kaç yaşındasın?","Nerede yaşıyorsun?","Nasılsın?","Adın ne?"],"d":0,"z":2},{"s":"'die Schwester' hangi aile üyesidir?","o":["Kız kardeş","Anne","Nine","Hala"],"d":0,"z":2},{"s":"'Ich spiele Fußball.' ne demektir?","o":["Futbol oynarım","Kitap okurum","Yüzerim","Şarkı söylerim"],"d":0,"z":1},{"s":"'der Hund' hangi hayvandır?","o":["Köpek","Kedi","Kuş","Balık"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Almanca (Seçmeli) yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Almanca (Seçmeli) proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-din6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["din6"] = {"0":[{"s":"Dört büyük ilahi kitap hangileridir?","o":["Tevrat, Zebur, İncil, Kur'an-ı Kerim","Tevrat ve İncil","Zebur ve Kur'an-ı Kerim","Sadece Kur'an-ı Kerim"],"d":0,"z":1},{"s":"İslamiyet'i ilk kabul eden kişilerden hangisi \"ilk Müslüman kadın\" olarak bilinir?","o":["Hz. Hatice","Hz. Fatıma","Hz. Ayşe","Hz. Meryem"],"d":0,"z":2},{"s":"Günde kaç vakit namaz farzdır?","o":["5","3","4","7"],"d":0,"z":1},{"s":"\"Sağlıklı olmak bedenine iyi bakmaktır.\" ifadesi hangi değeri vurgular?","o":["Sağlığı koruma bilinci","İsraf","Tembellik","Kibir"],"d":0,"z":1},{"s":"Kur'an-ı Kerim'de \"oku\" emri hangi olayla bağlantılıdır?","o":["İlk vahiy (Alak Suresi)","Hicret","Bedir Savaşı","Veda Hutbesi"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"1":[{"s":"Yardımlaşma ve dayanışmanın öne çıktığı, oruç tutulan ay hangisidir?","o":["Ramazan","Muharrem","Şaban","Recep"],"d":0,"z":1},{"s":"Namaza başlarken söylenen 'Allahu Ekber' sözüne ne ad verilir?","o":["Tekbir","Besmele","Selam","Dua"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisi temel ahlaki değerlerden biridir?","o":["Dürüstlük","Yalancılık","Bencillik","Kibir"],"d":0,"z":1},{"s":"Bilim insanlarının yaptığı araştırmaları Kur'an'ın hangi emri destekler?","o":["Düşünme ve akletme","Uyuma","Yemek yeme","Seyretme"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"2":[{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Zararlı alışkanlıklardan korunmak için hangisi yapılmalıdır?","o":["Hobiler edinmek","Zararlı ortamlarda bulunmak","Sigara denemek","Spordan uzak durmak"],"d":0,"z":1},{"s":"\"Yalan söylememek, sözünde durmak\" hangi değeri ifade eder?","o":["Doğruluk ve güvenilirlik","Sabırsızlık","Kıskançlık","Tembellik"],"d":0,"z":1},{"s":"\"Kur'an'ı anlayarak okumak\" neyi sağlar?","o":["İçindeki öğütleri hayata geçirmeyi","Sadece ezber yapmayı","Boş vakit geçirmeyi","Kitaplığı süslemeyi"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"Son peygamber kimdir?","o":["Hz. Muhammed (s.a.v.)","Hz. Musa","Hz. İsa","Hz. İbrahim"],"d":0,"z":1},{"s":"Hz. Muhammed'in (s.a.v.) doğduğu şehir hangisidir?","o":["Mekke","Medine","Kudüs","Taif"],"d":0,"z":1},{"s":"Hz. Muhammed (s.a.v.) peygamberlik gelmeden önce hangi mesleği yapıyordu?","o":["Ticaret","Doktorluk","Öğretmenlik","Çiftçilik"],"d":0,"z":1},{"s":"Hz. Muhammed'in (s.a.v.) doğduğu yılın adı nedir?","o":["Fil Yılı","Bereket Yılı","Barış Yılı","Kıtlık Yılı"],"d":0,"z":2},{"s":"Zararlı alışkanlıkların başında hangisi gelir?","o":["Sigara, alkol ve uyuşturucu","Kitap okumak","Spor yapmak","Yüzme"],"d":0,"z":1},{"s":"Anne babaya saygı göstermek hangi değerin gereğidir?","o":["Büyüklere saygı","İsraf","Kıskançlık","Kayıtsızlık"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"4":[{"s":"Zararlı alışkanlıklardan korunmak için en etkili yol hangisidir?","o":["Kendine güvenli ve bilinçli olmak","Arkadaşları taklit etmek","Merakla denemek","Yalnız kalmak"],"d":0,"z":1},{"s":"Kur'an'da öğrenmenin ve bilmenin önemi hangi kavramla vurgulanır?","o":["İlim","Ticaret","Şiir","Süs"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"5":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-bty6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["bty6"] = {"0":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Bilişim Teknolojileri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Bilişim Teknolojileri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Bir sorunu çözmek için izlenen adım adım plana ne denir?","o":["Algoritma","Program","Veri","Belge"],"d":0,"z":1},{"s":"Elektronik tabloda satır ile sütunun kesiştiği yere ne denir?","o":["Hücre","Sayfa","Belge","Slayt"],"d":0,"z":1},{"s":"İnternette doğru bilgiye ulaşmak için hangisi yapılmalıdır?","o":["Birden fazla güvenilir kaynağı karşılaştırmak","İlk görülen her bilgiye inanmak","Rastgele sitelere güvenmek","Bilgiyi kimseyle paylaşmamak"],"d":0,"z":2}],"1":[{"s":"Hücrelerden oluşan, sayılarla işlem yapılan program türü hangisidir?","o":["Elektronik tablolama","Kelime işlemci","Sunum programı","Tarayıcı"],"d":0,"z":2},{"s":"Algoritmanın sonucu karar verme durumlarında hangi ifade kullanılır?","o":["Eğer/O zaman (koşul)","Başla","Bitir","Yazdır"],"d":0,"z":2},{"s":"Sunum programında ekrana yansıtılan her bir sayfaya ne denir?","o":["Slayt","Hücre","Belge","Sayfa bloğu"],"d":0,"z":1},{"s":"İnternetten alınan bilgilerin güvenilir olduğunu anlamak için hangisi yapılmalıdır?","o":["Kaynağın güvenilirliğini kontrol etmek","Hemen paylaşmak","Olduğu gibi kabul etmek","Sadece başlığına bakmak"],"d":0,"z":1}],"2":[{"s":"Bir proje için arkadaşınla dosya paylaşmanın en uygun yolu hangisidir?","o":["Bulanık bulut depolama / e-posta","Bilgisayarı açık bırakmak","Şifreyi herkese vermek","Kâğıda yazıp atmak"],"d":0,"z":1},{"s":"Algoritmada işlemler arasındaki akışı gösteren şekil hangisidir?","o":["Ok (akış oku)","Silgi","Kalem","Kutu rengi"],"d":0,"z":1},{"s":"Sunum yaparken dinleyicilerin dikkatini çekmek için hangisi yapılmalıdır?","o":["Kısa ve öz cümleler kullanmak","Slaytı tümüyle yazıyla doldurmak","Küçük puntolar kullanmak","Uzun paragraflar yazmak"],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"3":[{"s":"Kelime işlemci programında yazılan metni kaydetmek için hangisi kullanılır?","o":["Kaydet / Ctrl+S","Sil / Delete","Kopyala / Ctrl+C","Kapat"],"d":0,"z":1},{"s":"İnternette şifre belirlerken hangisi daha güvenlidir?","o":["Büyük-küçük harf ve rakam içeren uzun şifre","Doğum tarihi","1234","Kendi adım"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"4":[{"s":"Uzaktaki insanlarla görüntülü toplantı yapmak için kullanılan araç hangisidir?","o":["Görüntülü konuşma programı","Yazıcı","Tarayıcı","Hesap makinesi"],"d":0,"z":1},{"s":"İnternette bilgi ararken \"anahtar kelime\" kullanmanın amacı nedir?","o":["Aramayı daraltıp hızlı sonuç bulmak","Aramayı yavaşlatmak","Virüs almak","Şifreyi değiştirmek"],"d":0,"z":1},{"s":"Yazılan bir sözcüğün altını kırmızı çiziyorsa sorun genellikle nedir?","o":["Yazım hatası olabilir","Sayfa boş","Yazıcı bozuk","Fare çalışmıyor"],"d":0,"z":1},{"s":"Kişisel bilgilerini internette paylaşırken hangisi daha güvenlidir?","o":["Gerekmedikçe paylaşmamak","Her yerde paylaşmak","Tanımadığına bile vermek","Şifresiyle paylaşmak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"5":[{"s":"Blok tabanlı programlamada tekrar eden işlemleri sağlayan blok hangisidir?","o":["Tekrarla (döngü)","Hareket","Görünüm","Ses"],"d":0,"z":2},{"s":"Blok tabanlı programlamada \"Eğer ... ise ... değilse\" bloğuna ne ad verilir?","o":["Koşul (şart) bloğu","Döngü bloğu","Ses bloğu","Görünüm bloğu"],"d":0,"z":2},{"s":"Scratch benzeri programlarda karakterin ekranda hareket etmesini sağlayan blok hangisidir?","o":["Hareket","Ses","Görünüm","Sensör"],"d":0,"z":1},{"s":"Elektronik tabloda toplama işlemi için kullanılan formül hangisidir?","o":["=TOPLA(A1:A5)","=BÖL(A1:A5)","=ÇIKAR(A1:A5)","A1+A5=A"],"d":0,"z":3},{"s":"Sunuma hareketli geçişler eklemek için kullanılan özellik hangisidir?","o":["Geçiş (animasyon)","Yazdır","Paylaş","Kaydet"],"d":0,"z":1},{"s":"Başkasının emeğine saygı duymak ve kaynak göstermek hangi kavramla ifade edilir?","o":["Telif hakları","Korsan yazılım","Şifre","Çerez"],"d":0,"z":2},{"s":"Kelime işlemcide yazıyı kalın yapmak için hangi düğme kullanılır?","o":["Kalın (B)","Altı çizili","Yazı tipi rengi","Hizala"],"d":0,"z":1},{"s":"İş birlikli çalışmada aynı belge üzerinde birlikte çalışmaya ne denir?","o":["Ortak çalışma (iş birliği)","Bireysel çalışma","Yarışma","Dinleme"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Bilişim Teknolojileri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Bilişim Teknolojileri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-grs6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["grs6"] = {"0":[{"s":"Hangileri sıcak renklerdir?","o":["Kırmızı, turuncu, sarı","Mavi, yeşil, mor","Siyah, beyaz, gri","Pembe, kahverengi, lacivert"],"d":0,"z":1},{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1}],"1":[{"s":"Renk çemberinde birbirine zıt renklere ne ad verilir?","o":["Tamamlayıcı renk","Ana renk","Ara renk","Sıcak renk"],"d":0,"z":2},{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2}],"2":[{"s":"Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?","o":["Degrade (ton geçişi)","Perspektif","Kompozisyon","Ritim"],"d":0,"z":1},{"s":"Bir resmin öğelerinin düzenine ne denir?","o":["Kompozisyon","Perspektif","Ton","Ritim"],"d":0,"z":1},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2},{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3}],"3":[{"s":"Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?","o":["Perspektif","Kompozisyon","Orantı","Simetri"],"d":0,"z":1},{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?","o":["Tek kaçış noktalı perspektif","İki boyutlu","Soyut","Eksentrik"],"d":0,"z":3}],"4":[{"s":"Açık-koyu (ışık-gölge) çalışmasına ne denir?","o":["Karakalem tonlama","Perspektif","Kompozisyon","Renk harmanı"],"d":0,"z":2},{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2},{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1}],"5":[{"s":"Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?","o":["Noktacılık (pointillism)","Hat çizimi","Karakalem","Silgi ile çizim"],"d":0,"z":2},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}],"6":[{"s":"Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?","o":["HB, 2B, 4B","1A, 2A","XS, S","M, L"],"d":0,"z":3},{"s":"\"Müze türleri ve koleksiyonları hakkında genelleme yapabilme\" çalışması hangi temada yer alır?","o":["Müze Ve Kültür","Sanatın Görsel Dili","Çizim Ve Görsel İfade","Millî Değerler Ve Sanat"],"d":0,"z":2}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Görsel Sanatlar yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Görsel Sanatlar proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-mzk6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mzk6"] = {"0":[{"s":"Müziğin temposunu belirleyen düzenli vuruşlara ne denir?","o":["Ritim","Melodi","Armoni","Ton"],"d":0,"z":1},{"s":"Sessizlik sürelerini gösteren işaretlere ne ad verilir?","o":["Sus işareti","Nota","Ölçü","Anahtar"],"d":0,"z":2},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Müziğin alfabesindeki temel ses sembolüne ne denir?","o":["Nota","Ritim","Akor","Makam"],"d":0,"z":1},{"s":"Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?","o":["Solfej","Ritim","Kompozisyon","İcra"],"d":0,"z":2},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Telli çalgılara örnek hangisidir?","o":["Gitar","Davul","Flüt","Zil"],"d":0,"z":1},{"s":"Vurmalı çalgılara örnek hangisidir?","o":["Davul","Keman","Gitar","Saksafon"],"d":0,"z":1},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}],"1":[{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Hızlı tempoya ne denir?","o":["Allegro","Adagio","Andante","Largo"],"d":0,"z":2},{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3},{"s":"Bir oktavdaki temel ses sayısı kaçtır?","o":["7","5","12","3"],"d":0,"z":2},{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2},{"s":"Üflemeli çalgılara örnek hangisidir?","o":["Flüt","Keman","Piyano","Marakas"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2}],"2":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Müzik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"3":[{"s":"Müzik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM6-bed6 - 2026-2027 resmi müfredat uyumlu */
SORULAR["bed6"] = {"0":[{"s":"Kasları esnek hale getiren hareketlere ne denir?","o":["Esnetme","Koşu","Zıplama","Sıçrama"],"d":0,"z":1},{"s":"Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?","o":["11","5","7","9"],"d":0,"z":2},{"s":"Sağlıklı beslenmede öğünlere örnek hangisidir?","o":["Kahvaltı, öğle, akşam","Atıştırma","Tek öğün","Aç kalma"],"d":0,"z":1},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}],"1":[{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Isınmadan spor yapmanın riski nedir?","o":["Sakatlanma","Daha hızlı olma","Enerji artışı","Kas gücü"],"d":0,"z":2},{"s":"Topu elle oynamanın yasak olduğu takım oyunu hangisidir?","o":["Futbol","Hentbol","Basketbol","Voleybol"],"d":0,"z":2},{"s":"Sporcular için önemli enerji kaynağı hangisidir?","o":["Karbonhidrat","Şekerli gazlı içecek","Aşırı yağ","Tuz"],"d":0,"z":2}],"2":[{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Vücudun susuz kalmaması için ne yapılmalıdır?","o":["Yeterli su içilmeli","Az su içilmeli","Hiç su içilmemeli","Sadece meyve suyu"],"d":0,"z":1}],"3":[{"s":"Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?","o":["Isınma","Soğuma","Yarış","Antrenman"],"d":0,"z":1},{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2},{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2}],"4":[{"s":"Beşer kişilik iki takımla oynanan saha oyunu hangisidir?","o":["Basketbol","Satranç","Yüzme","Tenis"],"d":0,"z":1},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1}],"5":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Beden Eğitimi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Beden Eğitimi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-trk8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["trk8"] = {"0":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"\"Bu elbise sana çok yakışmış.\" cümlesinde \"yakışmak\" hangi anlamda kullanılmıştır?","o":["Mecaz anlam","Gerçek anlam","Terim anlam","Yan anlam"],"d":0,"z":2},{"s":"\"Öğretmen ödevleri topladı.\" cümlesinde \"ödevleri\" hangi öğedir?","o":["Nesne","Özne","Yüklem","Zarf tümleci"],"d":0,"z":2},{"s":"Bir paragrafın konusunu en iyi ifade eden seçenek hangisidir?","o":["Paragrafta üzerinde durulan düşünce","Paragraftaki kelime sayısı","Paragrafın yazarı","Paragrafın sayfa sayısı"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"1":[{"s":"\"göz\" sözcüğü \"kapının gözü\" tamlamasında hangi anlam ilişkisiyle kullanılmıştır?","o":["Sesteş","Eş anlamlı","Zıt anlamlı","Yakın anlamlı"],"d":0,"z":2},{"s":"\"Yarın sabah erkenden yola çıkacağız.\" cümlesinde \"yarın sabah\" hangi öğedir?","o":["Zarf tümleci","Özne","Nesne","Dolaylı tümleç"],"d":0,"z":2},{"s":"\"Bu paragrafın ana düşüncesi aşağıdakilerden hangisidir?\" sorusunun cevabı hangi bilgidir?","o":["Paragrafta anlatılmak istenen en önemli mesaj","Paragrafın ilk cümlesi","Paragraftaki son kelime","Paragrafın başlığı"],"d":0,"z":2},{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"2":[{"s":"\"Ders çalışmak için kütüphaneye gitti.\" cümlesinde amaç-sonuç ilişkisi hangi kelimeyle kurulmuştur?","o":["için","çalışmak","gitti","kütüphaneye"],"d":0,"z":2},{"s":"\"okulun bahçesi\" ifadesi hangi tamlamadır?","o":["Belirtili isim tamlaması","Belirtisiz isim tamlaması","Sıfat tamlaması","Zincirleme isim tamlaması"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisi ayrı yazılır?","o":["herkes","biraz","birtakım","yada"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"3":[{"s":"\"Eğer yağmur yağarsa piknik iptal olur.\" cümlesi hangi anlam ilişkisini içerir?","o":["Koşul-sonuç","Neden-sonuç","Amaç-sonuç","Karşılaştırma"],"d":0,"z":1},{"s":"\"güzel manzara\" ifadesi hangi tamlamadır?","o":["Sıfat tamlaması","Belirtili isim tamlaması","Belirtisiz isim tamlaması","İyelik tamlaması"],"d":0,"z":1},{"s":"\"Akşamları çay içmeyi çok seviyorum.\" cümlesinde hangi noktalama işareti eksiktir?","o":["Hiçbiri","Virgül","Nokta","Soru işareti"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"4":[{"s":"\"Gelen misafirleri karşıladık.\" cümlesinde \"gelen\" sözcüğü hangi tür fiilimsidir?","o":["Sıfat-fiil","İsim-fiil","Zarf-fiil","Fiil"],"d":0,"z":2},{"s":"Bilgi ve düşünce vermeyi amaçlayan metin türü hangisidir?","o":["Makale","Masal","Şiir","Roman"],"d":0,"z":2},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"5":[{"s":"\"Kapı açılınca içeri girdik.\" cümlesinde \"açılınca\" hangi fiilimsi türüdür?","o":["Zarf-fiil","İsim-fiil","Sıfat-fiil","Çekimli fiil"],"d":0,"z":2},{"s":"Yaşanmış olayları kronolojik sırayla anlatan yazı türü hangisidir?","o":["Anı","Masal","Fabl","Destan"],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"6":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Türkçe yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"7":[{"s":"Türkçe proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-mat8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mat8"] = {"0":[{"s":"12 ve 18 sayılarının EBOB'u kaçtır?","o":["6","3","9","12"],"d":0,"z":2},{"s":"Bir zarın tek sayılılar getirmeye olasılığı kaçtır?","o":["3/6","2/6","1/6","5/6"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"1":[{"s":"6 ve 8 sayılarının EKOK'u kaçtır?","o":["24","48","12","16"],"d":0,"z":2},{"s":"Bir torbada 3 kırmızı, 2 mavi top var. Kırmızı çekme olasılığı kaçtır?","o":["3/5","2/5","3/2","1/5"],"d":0,"z":2},{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"2":[{"s":"Y = 2x + 1 doğrusunda x = 3 için y kaçtır?","o":["7","9","6","5"],"d":0,"z":2},{"s":"Dik kenarları 3 ve 4 cm olan üçgenin hipotenüsü kaç cm'dir?","o":["5","7","12","6"],"d":0,"z":2},{"s":"Kenarları 6, 8 ve 10 cm olan üçgen dik üçgen midir?","o":["Evet","Hayır","Bilemeyiz","Sadece 6-8 kenarıyla"],"d":0,"z":3},{"s":"Benzerlik oranı 2 olan iki üçgenin alanları oranı kaçtır?","o":["4","2","8","16"],"d":0,"z":3},{"s":"Bir kenarı 5 cm olan küpün hacmi kaç cm³'tür?","o":["125","25","75","100"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"10³ kaçtır?","o":["1000","100","10000","130"],"d":0,"z":1},{"s":"Bir paranın yazı gelme olasılığı kaçtır?","o":["1/2","1/3","1/4","1"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"Taban yarıçapı 3 cm, yüksekliği 5 cm olan silindirin hacmi kaç cm³'tür? (π = 3)","o":["135","45","90","180"],"d":0,"z":3},{"s":"0,0005 sayısının bilimsel gösterimi hangisidir?","o":["5.10⁻⁴","5.10⁴","0,5.10⁻³","5.10³"],"d":0,"z":3},{"s":"x² - 4 ifadesinin açılarımı hangisidir?","o":["(x-2)(x+2)","(x-2)²","(x+2)²","x²+4"],"d":0,"z":3}],"4":[{"s":"√144 kaçtır?","o":["12","14","10","16"],"d":0,"z":1},{"s":"x > 5 eşitsizliğini sağlayan en küçük tam sayı kaçtır?","o":["6","5","4","7"],"d":0,"z":2}],"5":[{"s":"3, 5, 5, 7, 8 veri grubunun aritmetik ortalaması kaçtır?","o":["5,6","5","6","6,5"],"d":0,"z":2},{"s":"√25 kaçtır?","o":["5","25","2,5","10"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"6":[{"s":"2, 4, 8, 12 sayılarının açıklığı kaçtır?","o":["10","6","4","12"],"d":0,"z":2},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Matematik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Matematik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-fen8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["fen8"] = {"0":[{"s":"Mevsimler oluşur ç 'n(ma nedn) hangisi?","o":["Eksen eğikliği","Güneş dünyadan büyük","Ay'ın fazları","Gece-gündüz"],"d":0,"z":3},{"s":"Hava olaylarının kısa süreli durumuna ne denir?","o":["Hava durumu","İklim","Mevsim","Sıcaklık"],"d":0,"z":2},{"s":"Anne çocukta göz rengi hangi kavramla açıklanır?","o":["Genetik","İklim","Rüzgar","Reng seçimi"],"d":0,"z":2},{"s":"Deniz seviyesinden yükseğe çıkıldıkça açık hava basıncı nasıl değişir?","o":["Azalır","Artar","Değişmez","Önce artar sonra azalır"],"d":0,"z":2},{"s":"Ülkemizde Akdeniz iklimi hangi bölgede görülür?","o":["Akdeniz Bölgesi","Karadeniz Bölgesi","İç Anadolu","Doğu Anadolu"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"1":[{"s":"Ağırlığı değişen kuvveti fayda sağlayan basit makine hangisidir?","o":["Eğik düzlem","Saat","Terazi göstergesi","Pusula"],"d":0,"z":2},{"s":"Aşağıdakilerden hangisi basit makine değildir?","o":["Motor","Kaldıraç","Makaralar","Eğik düzlem"],"d":0,"z":1},{"s":"Çevre etkisiyle oluşan geçici değişikliklere ne denir?","o":["Modifikasyon","Mutasyon","Adaptasyon","Evolüsyon"],"d":0,"z":2},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"2":[{"s":"Araba lastiğinin genişli artırılırsa yere yapılan basınc nasıl değişir?","o":["Azalır","Artar","Değişmez","İslami"],"d":0,"z":3},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"3":[{"s":"pH değeri 7'den büyük olan maddeler hangi gruptadır?","o":["Baz","Asit","Nötr","Tuz"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Basınç formülü hangisidir?","o":["P = Kuvvet / Alan","P = Alan / Kuvvet","P = Kuvvet x Alan","P = Kuvvet + Alan"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"4":[{"s":"Sabit makara kuvvetten kazanç sağlar mı?","o":["Hayır, sadece yönü değiştirir","Evet, 2 kat kazanç sağlar","Evet, 3 kat kazanç sağlar","Kazanç oranı değişir"],"d":0,"z":2},{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"5":[{"s":"Aynı yüklere sahip iki cisim birbirini nasıl etkiler?","o":["İter","Çeker","Etkilemez","Kendini döndürür"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"6":[{"s":"Kalıtım maddesi hücrelerde hangi yapıdır?","o":["DNA","Besin","Su","Karbondioksit"],"d":0,"z":2},{"s":"Gen yapısında meydana gelen kalıcı değişikliğe ne denir?","o":["Mutasyon","Modifikasyon","Adaptasyon","Fotosentez"],"d":0,"z":2},{"s":"Limon ve sirke hangi madde grubuna örnektir?","o":["Asit","Baz","Tuz","Saf su"],"d":0,"z":1},{"s":"Bitkiler hangi süreçte besin üretir?","o":["Fotosentez","Sindirim","Donma","Sürtme"],"d":0,"z":1},{"s":"Bitkilerin besin ve oksijen üretme olayına ne denir?","o":["Fotosentez","Solunum","Boşaltım","Sindirim"],"d":0,"z":1},{"s":"Bir besin zincirinde en fazla enerjiye hangisi sahiptir?","o":["Üreticiler","Otçullar","Etçiller","Ayrıştırıcılar"],"d":0,"z":2},{"s":"Sürtünmeyle elektriklenme hangisinde görülür?","o":["Saçımızı taramak","Su içmek","Kitap okumak","Yürümek"],"d":0,"z":1}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Fen Bilimleri yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Fen Bilimleri proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-ing8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["ing8"] = {"0":[{"s":"\"What about going to the cinema?\" sorusuna olumlu cevap hangisidir?","o":["Sounds great!","I'm afraid I can't.","No way.","Not at all."],"d":0,"z":2},{"s":"\"I spend most of my free time with my friends.\" cümlesinde \"spend\" ne demektir?","o":["Geçirmek","Harcamak","Bitirmek","Kaybetmek"],"d":0,"z":1},{"s":"\"Could you help me with the housework?\" ifadesinin Türkçe karşılığı nedir?","o":["Ev işlerinde bana yardım eder misin?","Ev işlerini yapmalısın.","Ev işlerini seviyor musun?","Ev işleri nerede?"],"d":0,"z":2},{"s":"\"I used to play football when I was young.\" cümlesi ne anlama gelir?","o":["Gençken futbol oynardım.","Şu an futbol oynuyorum.","Yarın futbol oynayacağım.","Hiç futbol oynamadım."],"d":0,"z":2},{"s":"\"earthquake\" ne demektir?","o":["Deprem","Sel","Çığ","Kuraklık"],"d":0,"z":1},{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"1":[{"s":"\"Scientists make discoveries.\" cümlesinde \"discoveries\" ne demektir?","o":["Keşifler","Bilim","Laboratuvar","Deney"],"d":0,"z":1},{"s":"\"Add a little sugar.\" cümlesinde \"a little\" hangi durumda kullanılır?","o":["Sayılamayan isimlerle","Sayılabilen isimlerle","Sadece çoğullarla","Sadece fiillerle"],"d":0,"z":2},{"s":"Deprem sırasında ne yapmalıyız?","o":["Sakin kalmalıyız","Koşmalıyız","Panik yapmalıyız","Camdan atlamalıyız"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"2":[{"s":"\"get on well with\" ifadesinin Türkçe karşılığı nedir?","o":["İyi geçinmek","Kötü anlaşmak","Tanışmak","Buluşmak"],"d":0,"z":2},{"s":"\"bake\" fiilinin Türkçe karşılığı nedir?","o":["Pişirmek","Karıştırmak","Kesmek","Yıkamak"],"d":0,"z":1},{"s":"\"take out the rubbish\" ne demektir?","o":["Çöpü çıkarmak","Yerleri silmek","Bulaşık yıkamak","Çamaşır asmak"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"\"Can I speak to Ali, please?\" ifadesinin Türkçe karşılığı nedir?","o":["Ali ile görüşebilir miyim?","Ali nerede?","Ali kim?","Ali'yi tanıyor musun?"],"d":0,"z":2},{"s":"\"Have you ever been to the sea?\" cümlesinde \"ever\" ne demektir?","o":["Hiç","Asla","Sık sık","Her zaman"],"d":0,"z":1}],"4":[{"s":"\"Hold on, please.\" ifadesi ne anlama gelir?","o":["Bir dakika bekleyin.","Kapatın.","Arayın.","Gidin."],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1}],"5":[{"s":"İnternette güvenli olmak için hangisi doğrudur?","o":["Şifreni kimseyle paylaşma","Her linke tıkla","Kişisel bilgilerini ver","Tanımadığın herkese güven"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"6":[{"s":"\"download\" fiilinin Türkçe karşılığı nedir?","o":["İndirmek","Yüklemek","Sil","Kopyala"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"7":[{"s":"\"I have just finished my homework.\" cümlesinde hangi zaman kullanılmıştır?","o":["Present Perfect","Simple Past","Future","Present Continuous"],"d":0,"z":2},{"s":"\"Computers are used in many fields.\" cümlesi hangi yapıdadır?","o":["Edilgen (passive)","Etken (active)","Soru","Olumsuz"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"İngilizce yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"9":[{"s":"İngilizce proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-din8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["din8"] = {"0":[{"s":"Allah'ın her şeyi bir ölçüye göre belirlemesine ne denir?","o":["Kader","Kaza","Tevekkül","İrade"],"d":0,"z":2},{"s":"Elinden geleni yaptıktan sonra Allah'a güvenmeye ne denir?","o":["Tevekkül","Kader","Dua","Sabır"],"d":0,"z":1},{"s":"İnsanın kendi iradesiyle yaptığı tercihlerden sorumlu olmasına ne denir?","o":["Sorumluluk","Kader","Kaza","Tevekkül"],"d":0,"z":2},{"s":"\"Kader\" kavramı aşağıdakilerden hangisiyle en yakın anlamlıdır?","o":["Ölçü (takdir)","Rastlantı","Şans","Tembellik"],"d":0,"z":2},{"s":"Zekat verilecek kişilerle ilgili hangisi doğrudur?","o":["İhtiyaç sahibi ve borçlu kişilere verilir","Sadece komşulara verilir","Sadece zenginlere verilir","Sadece çocuklara verilir"],"d":0,"z":2},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Bir öğrencinin sınavda başarılı olabilmesi için hangisi doğru bir tutumdur?","o":["Çalışıp elinden geleni yapmak","Sadece şansa güvenmek","Hiç çalışmamak","Başkasına yüklenmek"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"1":[{"s":"Her zaman ve herkesin yapabileceği yardıma ne denir?","o":["Sadaka","Zekat","Fitre","Hac"],"d":0,"z":1},{"s":"İhtiyaç sahiplerine gönüllü olarak yapılan her türlü yardıma ne denir?","o":["Sadaka","Zekat","Fitre","Hac"],"d":0,"z":1},{"s":"Zekat, zengin Müslümanların yılda bir kez malının ne kadarını vermesidir?","o":["Kırkta birini","Yarısını","Üçte birini","Beşte birini"],"d":0,"z":2},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"2":[{"s":"Zekatın verilme amacı aşağıdakilerden hangisidir?","o":["Toplumsal dayanışmayı güçlendirmek","Zenginleri daha zengin yapmak","Mal biriktirmek","Sadece akrabalara vermek"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"3":[{"s":"Hz. Muhammed'in (s.a.v.) toplumdaki en bilinen özelliği hangisidir?","o":["Güvenilir olması","Zengin olması","Sporcu olması","Şair olması"],"d":0,"z":1},{"s":"Hz. Muhammed (s.a.v.) hicret ederken mağarada kendisiyle birlikte olan arkadaşı kimdir?","o":["Hz. Ebubekir","Hz. Ömer","Hz. Osman","Hz. Ali"],"d":0,"z":2},{"s":"Hz. Muhammed (s.a.v.)'in çocuklarından biri hangisidir?","o":["Hz. Fatıma","Hz. Meryem","Hz. Asiye","Hz. Hacer"],"d":0,"z":1},{"s":"Hz. Muhammed (s.a.v.)'in \"Veda Hutbesi\"nde vurguladığı en önemli konu hangisidir?","o":["İnsan hakları ve eşitlik","Ticaret","Savaş","Avcılık"],"d":0,"z":2},{"s":"Kur'an-ı Kerim kaç sureden oluşur?","o":["114","30","24","100"],"d":0,"z":1},{"s":"Kur'an-ı Kerim'in ilk inen ayeti hangisidir?","o":["Oku (İkra)","Besmele","Elhamdülillah","Veda ayeti"],"d":0,"z":2},{"s":"Kur'an-ı Kerim'in diline ne ad verilir?","o":["Arapça","Türkçe","Farsça","İbranice"],"d":0,"z":1},{"s":"Kur'an-ı Kerim'i yorumlayan kişiye ve bu yorumlara ne denir?","o":["Müfessir ve tefsir","Şair ve şiir","Yazar ve roman","Tarihçi ve kitap"],"d":0,"z":2},{"s":"\"el-Emin\" lakabı ne anlama gelir?","o":["Güvenilir","Sabırlı","Cömert","Cesur"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1}],"4":[{"s":"Kur'an'ı güzel ve doğru okuma kurallarına ne denir?","o":["Tecvit","Meal","Tefsir","Hadis"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2}],"5":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Din Kültürü ve Ahlak Bilgisi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"6":[{"s":"Din Kültürü ve Ahlak Bilgisi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-grs8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["grs8"] = {"0":[{"s":"Bir resimde açık ve koyu tonların bir arada kullanılmasına ne denir?","o":["Degrade (ton geçişi)","Perspektif","Kompozisyon","Ritim"],"d":0,"z":1},{"s":"Desende en koyu bölgeleri göstermek için ne yapılır?","o":["Gölgeleme ile ton koyulaştırılır","O bölge boş bırakılır","Kâğıt buruşturulur","Çizim ters çevrilir"],"d":0,"z":1},{"s":"Resimde nesnelerin birbirine boyut oranına ne denir?","o":["Orantı","Kompozisyon","Perspektif","Ton"],"d":0,"z":2}],"1":[{"s":"Hangileri sıcak renklerdir?","o":["Kırmızı, turuncu, sarı","Mavi, yeşil, mor","Siyah, beyaz, gri","Pembe, kahverengi, lacivert"],"d":0,"z":1},{"s":"Çizime hafif hatlarla başlamanın avantajı nedir?","o":["Hatalar kolayca düzeltilir","Çizim daha hızlı biter","Silgi gerekmez","Renkler daha canlı olur"],"d":0,"z":2},{"s":"Üçler kuralında ilgi noktaları nereye yerleştirilir?","o":["Çizgilerin kesişimlerine","Tam ortaya","Kenarlara","Köşelere"],"d":0,"z":3}],"2":[{"s":"Ana renkler hangileridir?","o":["Kırmızı, sarı, mavi","Yeşil, turuncu, mor","Siyah, gri, beyaz","Pembe, kahverengi, bordo"],"d":0,"z":1},{"s":"Kurşun kalemde \"B\" harfi ne anlama gelir?","o":["Yumuşak ve koyu uç","Sert ve açık uç","Renkli uç","Su bazlı uç"],"d":0,"z":3}],"3":[{"s":"Yeşil hangi iki ana rengin karışımıdır?","o":["Sarı + mavi","Kırmızı + sarı","Mavi + kırmızı","Siyah + beyaz"],"d":0,"z":1},{"s":"Uzak nesnelerin küçük, yakın nesnelerin büyük göründüğü çizim ilkesi nedir?","o":["Perspektif","Kompozisyon","Orantı","Simetri"],"d":0,"z":1}],"4":[{"s":"Renk çemberinde birbirine zıt renklere ne ad verilir?","o":["Tamamlayıcı renk","Ana renk","Ara renk","Sıcak renk"],"d":0,"z":2},{"s":"Açık-koyu (ışık-gölge) çalışmasına ne denir?","o":["Karakalem tonlama","Perspektif","Kompozisyon","Renk harmanı"],"d":0,"z":2},{"s":"Soğuk renkler hangi duyguyu çağrıştırır?","o":["Sakinlik ve huzur","Öfke ve ateş","Coşku ve enerji","Acı ve tatlı"],"d":0,"z":2},{"s":"Bir resmin öğelerinin düzenine ne denir?","o":["Kompozisyon","Perspektif","Ton","Ritim"],"d":0,"z":1}],"5":[{"s":"Kalın-yoğun çizgilerden küçük noktalarla ton elde etme tekniği nedir?","o":["Noktacılık (pointillism)","Hat çizimi","Karakalem","Silgi ile çizim"],"d":0,"z":2},{"s":"Göz hizasındaki kaçış noktasının kullanıldığı perspektif türü?","o":["Tek kaçış noktalı perspektif","İki boyutlu","Soyut","Eksentrik"],"d":0,"z":3}],"6":[{"s":"Desen çalışmalarında sık kullanılan kurşun kalem sertliği hangisidir?","o":["HB, 2B, 4B","1A, 2A","XS, S","M, L"],"d":0,"z":3},{"s":"Bir yolun ufka doğru daralması hangi kavramın göstergesidir?","o":["Perspektif","Simetri","Ritim","Doku"],"d":0,"z":1}],"7":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Görsel Sanatlar yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"8":[{"s":"Görsel Sanatlar proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-mzk8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["mzk8"] = {"0":[{"s":"Müziğin temposunu belirleyen düzenli vuruşlara ne denir?","o":["Ritim","Melodi","Armoni","Ton"],"d":0,"z":1},{"s":"Sessizlik sürelerini gösteren işaretlere ne ad verilir?","o":["Sus işareti","Nota","Ölçü","Anahtar"],"d":0,"z":2},{"s":"Tempoyu sabit tutmak için kullanılan araç nedir?","o":["Metronom","Amfi","Mikrofon","Nota standı"],"d":0,"z":2},{"s":"Müziğin alfabesindeki temel ses sembolüne ne denir?","o":["Nota","Ritim","Akor","Makam"],"d":0,"z":1},{"s":"Şarkı söylerken sesleri doğru çıkarma çalışmasına ne denir?","o":["Solfej","Ritim","Kompozisyon","İcra"],"d":0,"z":2},{"s":"Portede notaların yüksekliği neyi belirtir?","o":["Sesin inceliğini-kalınlığını","Şarkıcının adını","Tempoyu","Ölçü sayısını"],"d":0,"z":2},{"s":"Telli çalgılara örnek hangisidir?","o":["Gitar","Davul","Flüt","Zil"],"d":0,"z":1},{"s":"Vurmalı çalgılara örnek hangisidir?","o":["Davul","Keman","Gitar","Saksafon"],"d":0,"z":1},{"s":"Piyano sesi nasıl üretilir?","o":["Tuşlar çekiçlerle tellere vurulur","Hava üflenerek","Tel tırnakla çekilerek","Elektronik olarak"],"d":0,"z":2}],"1":[{"s":"Hızlı tempoya ne denir?","o":["Allegro","Adagio","Andante","Largo"],"d":0,"z":2},{"s":"Yavaş tempoya ne denir?","o":["Adagio","Allegro","Presto","Vivace"],"d":0,"z":1},{"s":"Tempo terimleri nerede belirtilir?","o":["Parçanın başında","Son ölçüde","Portenin arkasında","Hiçbir yerde"],"d":0,"z":3},{"s":"Bir oktavdaki temel ses sayısı kaçtır?","o":["7","5","12","3"],"d":0,"z":2},{"s":"Do, re, mi seslerine sırayla hangi sayılar karşılık gelir?","o":["1, 2, 3","7, 6, 5","5, 5, 5","8, 9, 10"],"d":0,"z":1},{"s":"Çeyrek nota kaç vuruş sürer?","o":["1 vuruş","4 vuruş","2 vuruş","Yarım vuruş"],"d":0,"z":2},{"s":"Üflemeli çalgılara örnek hangisidir?","o":["Flüt","Keman","Piyano","Marakas"],"d":0,"z":1},{"s":"Keman hangi çalgı grubundadır?","o":["Telli (yaylı)","Üflemeli","Vurmalı","Tuşlu"],"d":0,"z":1},{"s":"Orkestra şefinin görevi nedir?","o":["Topluluğu yönetmek","Bilet satmak","Işıkları kontrol etmek","Enstrüman tamir etmek"],"d":0,"z":2}],"2":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Müzik yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"3":[{"s":"Müzik proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-bed8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["bed8"] = {"0":[{"s":"Sporcular için önemli enerji kaynağı hangisidir?","o":["Karbonhidrat","Şekerli gazlı içecek","Aşırı yağ","Tuz"],"d":0,"z":2},{"s":"Vücudun susuz kalmaması için ne yapılmalıdır?","o":["Yeterli su içilmeli","Az su içilmeli","Hiç su içilmemeli","Sadece meyve suyu"],"d":0,"z":1},{"s":"Kas ve doku onarımı için gereken besin öğesi hangisidir?","o":["Protein","Yağ","Şeker","Tuz"],"d":0,"z":2},{"s":"Spora başlamadan önce yapılan hazırlık hareketlerine ne denir?","o":["Isınma","Soğuma","Yarış","Antrenman"],"d":0,"z":1},{"s":"Beşer kişilik iki takımla oynanan saha oyunu hangisidir?","o":["Basketbol","Satranç","Yüzme","Tenis"],"d":0,"z":1},{"s":"Basketbolda en yüksek sayılı atış hangisidir?","o":["Üç sayı çizgisinden atış","Serbest atış","Normal oyun içi atış","Taç atışı"],"d":0,"z":2},{"s":"Spordan hemen önce hangisinden kaçınılmalıdır?","o":["Ağır ve yağlı yemeklerden","Meyveden","Ekmekten","Sebzeden"],"d":0,"z":2}],"1":[{"s":"Isınmadan spor yapmanın riski nedir?","o":["Sakatlanma","Daha hızlı olma","Enerji artışı","Kas gücü"],"d":0,"z":2},{"s":"Esnekliği artırmak neye katkı sağlar?","o":["Hareket genişliğine ve sakatlık azalmasına","Kilo almaya","Uykusuzluğa","Unutkanlığa"],"d":0,"z":2},{"s":"Kasları esnek hale getiren hareketlere ne denir?","o":["Esnetme","Koşu","Zıplama","Sıçrama"],"d":0,"z":1},{"s":"Futbol müsabakasında bir takımda kaç oyuncu sahada yer alır?","o":["11","5","7","9"],"d":0,"z":2},{"s":"Fair-play ne demektir?","o":["Kurallara ve rakibe saygı","Rakibi kışkırtmak","Hakemle tartışmak","Kendi kalesine gol atmak"],"d":0,"z":1}],"2":[{"s":"Spordan sonra yapılan rahatlatıcı bölümün adı nedir?","o":["Soğuma","Isınma","Start","Sprint"],"d":0,"z":1},{"s":"Topu elle oynamanın yasak olduğu takım oyunu hangisidir?","o":["Futbol","Hentbol","Basketbol","Voleybol"],"d":0,"z":2},{"s":"Sağlıklı beslenmede öğünlere örnek hangisidir?","o":["Kahvaltı, öğle, akşam","Atıştırma","Tek öğün","Aç kalma"],"d":0,"z":1}],"3":[{"s":"Statik esnetmede pozisyon yaklaşık kaç saniye tutulur?","o":["15-30 saniye","1 saniye","3 dakika","10 dakika"],"d":0,"z":2},{"s":"Voleybolda bir takım sahada kaç oyuncuyla bulunur?","o":["6","11","5","9"],"d":0,"z":1},{"s":"Günde kaç bardak su içmek önerilir?","o":["En az 6-8 bardak","Yarım bardak","Hiç içmemek","40 bardak"],"d":0,"z":1}],"4":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Beden Eğitimi yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"5":[{"s":"Beden Eğitimi proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-tvt8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["tvt8"] = {"0":[{"s":"Yükü kaldırmayı kolaylaştıran eğik düzlem örneği hangisidir?","o":["Rampa","Tekerlek","Kaldıraç","Vida"],"d":0,"z":1},{"s":"Cam şişe geri dönüştürüldüğünde ne elde edilir?","o":["Yeni cam ürünler","Plastik oyuncak","Kâğıt","Metal"],"d":0,"z":1}],"1":[{"s":"Dönme hareketiyle iş yapan basit makine hangisidir?","o":["Tekerlek","Kaldıraç","Vida","Rampa"],"d":0,"z":2},{"s":"Atıkları ayrıştırmanın amacı nedir?","o":["Geri dönüşümü kolaylaştırmak","Çöp miktarını artırmak","Fiyatı yükseltmek","Depolamayı karmaşıklaştırmak"],"d":0,"z":1}],"2":[{"s":"Tasarımda farklı fikirler üretme aşamasına ne denir?","o":["Beyin fırtınası","Çizim","Test","Sunum"],"d":0,"z":2},{"s":"Makara işi nasıl kolaylaştırır?","o":["Kuvvetin yönünü değiştirip yükü kaldırır","Elektrik üretir","Isı yayarak","Ses çıkararak"],"d":0,"z":2},{"s":"Hangisi özel (tehlikeli) atıktır?","o":["Pil","Karton kutu","Cam şişe","Meyve kabuğu"],"d":0,"z":2}],"3":[{"s":"Tasarımın test aşamasında ne yapılır?","o":["Ürün denenip hatalar araştırılır","Ürün paketlenir","Reklamı yapılır","Fiyatı belirlenir"],"d":0,"z":2},{"s":"Vida hangi basit makinenin türüdür?","o":["Eğik düzlem","Kaldıraç","Çark","Dişli"],"d":0,"z":3}],"4":[{"s":"Bir ürün ortaya koyarken izlenen aşamalar bütününe ne denir?","o":["Tasarım süreci","Üretim","Tüketim","Reklam"],"d":0,"z":1},{"s":"Tasarım sürecinin ilk adımı genelde nedir?","o":["İhtiyaç ve problemi belirleme","Üretim","Satış","Paketleme"],"d":0,"z":1},{"s":"Tasarım defteri ne için tutulur?","o":["Süreç adımlarını ve fikirleri kaydetmek","Şarkı sözü yazmak","Ders programı için","Oyun oynamak için"],"d":0,"z":2},{"s":"Makasta hangi basit makine vardır?","o":["Kaldıraç","Tekerlek","Makara","Rampa"],"d":0,"z":2}],"5":[{"s":"Beyin fırtınasının temel kuralı nedir?","o":["Fikirlere eleştiri yapılmaması","Sadece tek fikir önerilmesi","En hızlı konuşan kazanır","Fikirler gizli tutulur"],"d":0,"z":1},{"s":"Bir noktaya göre kuvvet uygulayan basit makine hangisidir?","o":["Kaldıraç","Rampa","Makara","Dişli"],"d":0,"z":1},{"s":"Atıkların yeniden değerlendirilmesine ne denir?","o":["Geri dönüşüm","Üretim","İmalat","İhracat"],"d":0,"z":1}],"6":[{"s":"Kağıt, cam ve plastik hangi gruba girer?","o":["Geri dönüştürülebilir atık","Organik atık","Tehlikeli atık","Evsel atık"],"d":0,"z":1},{"s":"\"Günlük hayatta karşılaştığı tasarım problemlerini çözebilme\" çalışması hangi temada yer alır?","o":["Özgün Ürünümü Tasarlıyorum","Tanıtım Ve Pazarlama","Ürün Geliştirme","Ulaşım Teknolojileri"],"d":0,"z":2}],"7":[{"s":"Geri dönüşümün faydası nedir?","o":["Doğal kaynakların korunması","Daha fazla çöp","Enerji israfı","Ormanların azalması"],"d":0,"z":1},{"s":"\"Ürünlerine yönelik çoklu ortam sunumu yapabilme\" çalışması hangi temada yer alır?","o":["Bunu Ben Yaptım","Tanıtım Ve Pazarlama","Ürün Geliştirme","Ulaşım Teknolojileri"],"d":0,"z":2}],"8":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"Teknoloji ve Tasarım yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"9":[{"s":"Teknoloji ve Tasarım proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

/* TYMM8-ink8 - 2026-2027 resmi müfredat uyumlu */
SORULAR["ink8"] = {"0":[{"s":"Mustafa Kemal nerede doğmuştur?","o":["Selanik","Ankara","İstanbul","Samsun"],"d":0,"z":1},{"s":"Mustafa Kemal'in askeri başarısını gösterdiği savaş hangisidir?","o":["Çanakkale Savaşı","Kosova Savaşı","Varna Savaşı","Miryokefalon"],"d":0,"z":2},{"s":"TBMM hangi yılda açılmıştır?","o":["1920","1919","1923","1922"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2}],"1":[{"s":"I. Dünya Savaşı sonunda Osmanlı Devleti'nin imzaladığı ateşkes antlaşması hangisidir?","o":["Mondros","Sevr","Lozan","Paris"],"d":0,"z":2},{"s":"Kurtuluş Savaşı'nın kesin zaferle sonuçlandığı savaş hangisidir?","o":["Büyük Taarruz","I. İnönü","II. İnönü","Sakarya"],"d":0,"z":2},{"s":"TBMM hangi tarihte açılmıştır?","o":["23 Nisan 1920","19 Mayıs 1919","29 Ekim 1923","30 Ağustos 1922"],"d":0,"z":1},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"2":[{"s":"Milli Mücadele hangi tarihte başlatıldı?","o":["19 Mayıs 1919","23 Nisan 1920","29 Ekim 1923","30 Ağustos 1922"],"d":0,"z":2},{"s":"Tevhid-i Tedrisat Kanunu hangi alanda yapılan yeniliktir?","o":["Eğitim","Tarım","Askerlik","Ticaret"],"d":0,"z":2},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Hatay hangi tarihte Türkiye'ye katılmıştır?","o":["1939","1923","1920","1950"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}],"3":[{"s":"Lozan Barış Antlaşması ile temel sonuç ne olmuştur?","o":["Bağımsız Türk devletinin varlığı kabul edildi","İstanbul başkent yapıldı","Montrö anlaşması yapıldı","Halk oy kullandı"],"d":0,"z":2},{"s":"Atatürk ilkelerinden 'egemenliğini kayıpsız halka verme' hangi ilkeyle anlatılır?","o":["Cumhuriyetçilik","Devletçilik","Laiklik","İnkılapçılık"],"d":0,"z":2},{"s":"Cumhuriyet hangi tarihte ilan edilmiştir?","o":["29 Ekim 1923","23 Nisan 1920","19 Mayıs 1919","30 Ağustos 1922"],"d":0,"z":1},{"s":"Aşağıdakilerden hangisi Atatürk ilkelerinden değildir?","o":["Fanatizm","Cumhuriyetçilik","Milliyetçilik","Laiklik"],"d":0,"z":2},{"s":"Türk kadınlarına seçme ve seçilme hakkı hangi yıl verilmiştir?","o":["1934","1923","1940","1950"],"d":0,"z":2},{"s":"Atatürk'ün dış politikada temel ilkesi hangisidir?","o":["Yurtta barış, cihanda barış","Savaş politikası","Yayılmacılık","İzolasyon"],"d":0,"z":1},{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"T.C. İnkılap Tarihi ve Atatürkçülük proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"T.C. İnkılap Tarihi ve Atatürkçülük yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1}],"4":[{"s":"Yazılıya hazırlanırken en etkili yöntem hangisidir?","o":["Konu tekrarı yapıp bolca soru çözmek","Sınavdan önceki geceye kadar yeni konu çalışmak","Hiç çalışmadan sınavı beklemek","Sadece kolay konulara bakmak"],"d":0,"z":1},{"s":"T.C. İnkılap Tarihi ve Atatürkçülük yazılısından önce yapılacak en doğru davranış nedir?","o":["İşlenen konuların özetini çıkarıp tekrar etmek","Her şeyi sınav sabahı ezberlemeye çalışmak","Ders notlarını hiç açmamak","Sadece oyun oynamak"],"d":0,"z":1},{"s":"Sınav sırasında zaman yönetimi için ne yapılmalıdır?","o":["Kolay sorulardan başlayıp süreyi tüm sorulara dengelemek","Tek soruda çok uzun süre takılmak","En sondaki sorudan başlamak","Saati hiç kontrol etmemek"],"d":0,"z":2},{"s":"Çözdüğün sorulardan yanlış olanlarla ne yapmalısın?","o":["Yanlışlarını bir deftere not edip tekrar çözmek","Hemen silip unutmak","Sadece doğruları saymak","Asla üstüne dönmemek"],"d":0,"z":1}],"5":[{"s":"T.C. İnkılap Tarihi ve Atatürkçülük proje görevine başlarken ilk adım nedir?","o":["Konuyu seçip plan yapmak","Teslim gününe kadar hiç hazırlanmamak","Son gece aceleyle yapmak","Hazır ödevden kopyalamak"],"d":0,"z":1},{"s":"Araştırma yaparken güvenilir kaynak kullanmak neden önemlidir?","o":["Bilgilerin doğru olmasını sağladığı için","Sayfa sayısını artırmak için","Not almayı gereksiz kıldığı için","Sunumu uzatmak için"],"d":0,"z":2},{"s":"Proje sunumunda dikkat edilmesi gereken en önemli şey nedir?","o":["Konuyu net ve düzenli biçimde anlatmak","Hızlıca okuyup bitirmeye çalışmak","Göz temasından kaçınmak","Hazırlıksız gelmek"],"d":0,"z":1}]};

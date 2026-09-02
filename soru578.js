/* ===== TEST SORULARI EK: 5/7/8. Sınıf Soru Havuzu =====
   SORULAR["dersId"][birim] şeklinde, mevcutlar korunarak eklenir.
   Format: { s: soru, o: [4 seçenek], d: doğru index, z: zorluk(1-3) } */

var SORULAR = SORULAR || {};

/* ===================== 5. SINIF ===================== */

/* --- Türkçe 5 --- */
SORULAR["trk5"] = SORULAR["trk5"] || {};
SORULAR["trk5"][0] = (SORULAR["trk5"][0] || []).concat([
  { s: "Aşağıdaki sözcüklerden hangisinde ünlü harf sayısı diğerlerinden azdır?", o: ["araba", "ev", "kalem", "defter"], d: 1, z: 1 },
  { s: "\"kitap\" sözcüğü kaç heceden oluşur?", o: ["2", "3", "1", "4"], d: 0, z: 1 }
]);
SORULAR["trk5"][1] = (SORULAR["trk5"][1] || []).concat([
  { s: "\"Bardak kırıldı.\" cümlesindeki \"kırıldı\" sözcüğünün anlamı hangisidir?", o: ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Yan anlam"], d: 0, z: 2 },
  { s: "\"güzel\" sözcüğünün eş anlamlısı hangisidir?", o: ["hoş", "çirkin", "büyük", "küçük"], d: 0, z: 1 }
]);
SORULAR["trk5"][2] = (SORULAR["trk5"][2] || []).concat([
  { s: "\"Sınava çalışmadı, çünkü film izliyordu.\" cümlesinde \"çünkü\" hangi anlam ilişkisini kurar?", o: ["Neden-sonuç", "Amaç-sonuç", "Koşul", "Karşılaştırma"], d: 0, z: 2 }
]);
SORULAR["trk5"][3] = (SORULAR["trk5"][3] || []).concat([
  { s: "Aşağıdakilerden hangisi soyut bir isimdir?", o: ["sevgi", "masa", "kalem", "top"], d: 0, z: 1 },
  { s: "\"mavi elbise\" tamlamasında \"mavi\" sözcüğünün türü nedir?", o: ["Sıfat", "İsim", "Zamir", "Fiil"], d: 0, z: 2 }
]);
SORULAR["trk5"][4] = (SORULAR["trk5"][4] || []).concat([
  { s: "\"Ben\" ve \"sen\" sözcüklerinin türü nedir?", o: ["Zamir", "İsim", "Sıfat", "Edat"], d: 0, z: 1 }
]);
SORULAR["trk5"][5] = (SORULAR["trk5"][5] || []).concat([
  { s: "\"Ali elmayı yedi.\" cümlesinde özne hangisidir?", o: ["Ali", "elmayı", "yedi", "Ali elmayı"], d: 0, z: 1 },
  { s: "\"Kardeşim kitabı okudu.\" cümlesinde yüklem hangisidir?", o: ["okudu", "kardeşim", "kitabı", "kitabı okudu"], d: 0, z: 1 }
]);
SORULAR["trk5"][6] = (SORULAR["trk5"][6] || []).concat([
  { s: "Aşağıdakilerden hangisinin yazımı doğrudur?", o: ["herkez", "herkese", "herkes", "herkis"], d: 2, z: 1 },
  { s: "\"Okulda tören yapıldı.\" cümlesinde hangi sözcük büyük harfle başlamalıdır?", o: ["hiçbiri", "okulda", "tören", "yapıldı"], d: 0, z: 2 }
]);
SORULAR["trk5"][7] = (SORULAR["trk5"][7] || []).concat([
  { s: "Bir metnin konusunu bulmak için hangi soru sorulur?", o: ["Metinde ne anlatılıyor?", "Metin kaç sayfa?", "Yazar kim?", "Metin ne zaman yazıldı?"], d: 0, z: 2 },
  { s: "Metnin başlığı aşağıdakilerden hangisi olabilir? (Kitap okumanın önemini anlatan metin)", o: ["Kitap Okumanın Faydaları", "Yaz Tatili", "Arkadaşlık", "Doğa"], d: 0, z: 1 }
]);

/* --- Matematik 5 (mevcutlara ek) --- */
SORULAR["mat5"] = SORULAR["mat5"] || {};
SORULAR["mat5"][6] = (SORULAR["mat5"][6] || []).concat([
  { s: "Bir doğru üzerinde kaç nokta vardır?", o: ["Sonsuz", "1", "2", "3"], d: 0, z: 2 },
  { s: "Dik açının ölçüsü kaç derecedir?", o: ["90°", "180°", "45°", "60°"], d: 0, z: 1 }
]);
SORULAR["mat5"][8] = (SORULAR["mat5"][8] || []).concat([
  { s: "Bir sınıftaki öğrencilerin sevdiği renkleri gösteren grafiğe ne denir?", o: ["Sütun grafiği", "Çizgi grafiği", "Daire grafiği", "Tablo"], d: 0, z: 2 }
]);
SORULAR["mat5"][9] = (SORULAR["mat5"][9] || []).concat([
  { s: "Bir dikdörtgenin kısa kenarı 4 cm, uzun kenarı 7 cm ise çevresi kaç cm'dir?", o: ["22", "28", "11", "56"], d: 0, z: 2 },
  { s: "1 metrede kaç santimetre vardır?", o: ["100", "10", "1000", "10000"], d: 0, z: 1 }
]);
SORULAR["mat5"][10] = (SORULAR["mat5"][10] || []).concat([
  { s: "Küpün kaç yüzü vardır?", o: ["6", "4", "8", "12"], d: 0, z: 1 },
  { s: "Aşağıdakilerden hangisi geometrik cisim değildir?", o: ["Daire", "Küp", "Silindir", "Koni"], d: 0, z: 1 }
]);

/* --- Fen Bilimleri 5 (mevcutlara ek) --- */
SORULAR["fen5"] = SORULAR["fen5"] || {};
SORULAR["fen5"][0] = (SORULAR["fen5"][0] || []).concat([
  { s: "Dünya'nın uydusu hangisidir?", o: ["Ay", "Güneş", "Mars", "Venüs"], d: 0, z: 1 },
  { s: "Ay, Dünya'nın etrafında kaç günde bir döner?", o: ["27-29 gün", "365 gün", "1 gün", "12 saat"], d: 0, z: 2 }
]);
SORULAR["fen5"][4] = (SORULAR["fen5"][4] || []).concat([
  { s: "Işık hangi ortamda yayılır?", o: ["Saydam ve yarı saydam ortamlarda", "Sadece karanlıkta", "Sadece havada", "Yalnızca suda"], d: 0, z: 2 },
  { s: "Gölgenin oluşması için ne gerekir?", o: ["Işık ve cisim", "Sadece cisim", "Sadece ışık", "Rüzgar"], d: 0, z: 1 }
]);
SORULAR["fen5"][5] = (SORULAR["fen5"][5] || []).concat([
  { s: "Aşağıdakilerden hangisi doğal çevreye örnektir?", o: ["Orman", "Apartman", "Yol", "Köprü"], d: 0, z: 1 }
]);

/* --- Sosyal Bilgiler 5 --- */
SORULAR["sos5"] = SORULAR["sos5"] || {};
SORULAR["sos5"][0] = (SORULAR["sos5"][0] || []).concat([
  { s: "İnsanların birbirini tanımasına ve iletişim kurmasına yardımcı olan ortak etkinliğe ne denir?", o: ["Sosyal etkinlik", "Ders çalışma", "Uyku", "Yemek yeme"], d: 0, z: 2 },
  { s: "Aşağıdakilerden hangisi bir hak değildir?", o: ["Başkalarını rahatsız etmek", "Eğitim hakkı", "Sağlık hakkı", "Oy kullanma hakkı"], d: 0, z: 2 }
]);
SORULAR["sos5"][1] = (SORULAR["sos5"][1] || []).concat([
  { s: "Aile, okul ve arkadaşlar hangi gruba örnektir?", o: ["Sosyal gruplar", "Siyasi gruplar", "Hava durumu", "Bitkiler"], d: 0, z: 1 },
  { s: "Bir toplumun gelenek, görenek ve yaşam biçimine ne denir?", o: ["Kültür", "İklim", "Ticaret", "Tarım"], d: 0, z: 1 }
]);
SORULAR["sos5"][2] = (SORULAR["sos5"][2] || []).concat([
  { s: "Haritada yön bulmaya yarayan işaret hangisidir?", o: ["Kuzey oku", "Güneş", "Deniz", "Orman"], d: 0, z: 1 },
  { s: "Aşağıdakilerden hangisi Türkiye'nin yüzey şekillerinden biridir?", o: ["Dağ", "Okyanus", "Kutup", "Çöl"], d: 0, z: 2 }
]);
SORULAR["sos5"][3] = (SORULAR["sos5"][3] || []).concat([
  { s: "Matbaayı icat eden kişi kimdir?", o: ["Gutenberg", "Einstein", "Newton", "Edison"], d: 0, z: 1 }
]);
SORULAR["sos5"][4] = (SORULAR["sos5"][4] || []).concat([
  { s: "Bir ürünün üretiminden tüketimine kadar geçen süreçte hangisi vardır?", o: ["Üretim, dağıtım ve tüketim", "Sadece üretim", "Sadece tüketim", "Hiçbiri"], d: 0, z: 2 },
  { s: "Evimizde kullanmadığımız eşyaları ihtiyacı olanlara vermek hangi değeri gösterir?", o: ["Yardımlaşma", "Kıskançlık", "İsraf", "Bencillik"], d: 0, z: 1 }
]);
SORULAR["sos5"][5] = (SORULAR["sos5"][5] || []).concat([
  { s: "Bir ülkenin yönetimini milletin seçtiği kişiler aracılığıyla yürütmesine ne denir?", o: ["Demokrasi", "Monarşi", "Diktatörlük", "Anarşi"], d: 0, z: 2 },
  { s: "18 yaşını dolduran her Türk vatandaşının sahip olduğu hak hangisidir?", o: ["Oy kullanma hakkı", "Sadece okula gitme hakkı", "Sadece çalışma hakkı", "Sadece seyahat hakkı"], d: 0, z: 1 }
]);
SORULAR["sos5"][6] = (SORULAR["sos5"][6] || []).concat([
  { s: "Dünya üzerindeki en büyük kıta hangisidir?", o: ["Asya", "Afrika", "Avrupa", "Avustralya"], d: 0, z: 1 },
  { s: "Uzak ülkelerdeki insanlarla iletişim kurmamızı sağlayan araç hangisidir?", o: ["İnternet", "Mektup güvercini", "Sadece el sıkışma", "Hiçbiri"], d: 0, z: 1 }
]);

/* --- İngilizce 5 --- */
SORULAR["ing5"] = SORULAR["ing5"] || {};
SORULAR["ing5"][0] = (SORULAR["ing5"][0] || []).concat([
  { s: "\"How are you?\" sorusuna hangisi uygun cevaptır?", o: ["I'm fine, thank you.", "I'm ten.", "I'm from Turkey.", "Goodbye."], d: 0, z: 1 },
  { s: "\"What is your name?\" sorusunun cevabı hangisidir?", o: ["My name is Ali.", "I am ten.", "I am fine.", "I live in Istanbul."], d: 0, z: 1 }
]);
SORULAR["ing5"][1] = (SORULAR["ing5"][1] || []).concat([
  { s: "\"Where is the hospital?\" sorusunda \"hospital\" ne demektir?", o: ["Hastane", "Okul", "Market", "Park"], d: 0, z: 1 },
  { s: "\"turn left\" ifadesinin Türkçe karşılığı nedir?", o: ["Sola dön", "Sağa dön", "Düz git", "Dur"], d: 0, z: 1 }
]);
SORULAR["ing5"][2] = (SORULAR["ing5"][2] || []).concat([
  { s: "\"What do you like doing in your free time?\" sorusuna hangisi cevaptır?", o: ["I like playing chess.", "I am a student.", "I am ten.", "I live in Ankara."], d: 0, z: 2 },
  { s: "\"play football\" ne demektir?", o: ["Futbol oynamak", "Basketbol oynamak", "Kitap okumak", "Yüzmek"], d: 0, z: 1 }
]);
SORULAR["ing5"][3] = (SORULAR["ing5"][3] || []).concat([
  { s: "\"I get up at 7 o'clock.\" cümlesinde \"get up\" ne demektir?", o: ["Kalkmak", "Yatmak", "Yemek yemek", "Uyumak"], d: 0, z: 1 },
  { s: "\"What time do you go to school?\" sorusunda saat bilgisi hangi kelimeyle sorulur?", o: ["What time", "Where", "Who", "Why"], d: 0, z: 2 }
]);
SORULAR["ing5"][4] = (SORULAR["ing5"][4] || []).concat([
  { s: "\"I have a headache.\" ne demektir?", o: ["Başım ağrıyor.", "Ayağım ağrıyor.", "Dişim ağrıyor.", "Boğazım ağrıyor."], d: 0, z: 1 },
  { s: "Doktora gitmen gerektiğini nasıl ifade edersin?", o: ["I should see a doctor.", "I should play football.", "I should sleep all day.", "I should eat candy."], d: 0, z: 2 }
]);
SORULAR["ing5"][5] = (SORULAR["ing5"][5] || []).concat([
  { s: "\"I like watching comedy movies.\" cümlesinde \"comedy\" ne demektir?", o: ["Komedi", "Korku", "Bilim kurgu", "Aksiyon"], d: 0, z: 1 },
  { s: "\"What type of movies do you like?\" sorusuna hangisi cevaptır?", o: ["I like action movies.", "I am fine.", "I am ten.", "I live in Izmir."], d: 0, z: 1 }
]);

/* --- Din Kültürü 5 --- */
SORULAR["din5"] = SORULAR["din5"] || {};
SORULAR["din5"][0] = (SORULAR["din5"][0] || []).concat([
  { s: "Allah'ın her şeyi bilmesi hangi sıfatla ifade edilir?", o: ["İlim", "Basiret", "Şiir", "Felsefe"], d: 0, z: 2 },
  { s: "\"Evrende her şeyi düzenleyen ve yaratan\" kavramı hangisidir?", o: ["Allah", "Melek", "İnsan", "Hayvan"], d: 0, z: 1 }
]);
SORULAR["din5"][1] = (SORULAR["din5"][1] || []).concat([
  { s: "İslam'ın beş şartından hangisi \"namaz kılmak\"tır?", o: ["Namaz", "Oruç", "Zekat", "Hac"], d: 0, z: 1 },
  { s: "Namazdan önce yapılan temizliğe ne denir?", o: ["Abdest", "Dua", "Zikir", "Sadaka"], d: 0, z: 1 }
]);
SORULAR["din5"][2] = (SORULAR["din5"][2] || []).concat([
  { s: "Hz. Muhammed'in (s.a.v.) \"el-Emin\" lakabı ne anlama gelir?", o: ["Güvenilir", "Çalışkan", "Zengin", "Sporcu"], d: 0, z: 2 },
  { s: "Doğru sözlü olmak hangi erdemdir?", o: ["Dürüstlük", "Tembellik", "Kibir", "İsraf"], d: 0, z: 1 }
]);
SORULAR["din5"][3] = (SORULAR["din5"][3] || []).concat([
  { s: "Ramazan ayında tutulan ibadet hangisidir?", o: ["Oruç", "Hac", "Kurban", "Zekat"], d: 0, z: 1 },
  { s: "Ramazan Bayramı'nda hangisi yapılır?", o: ["Bayramlaşma ve yardımlaşma", "Sadece uyumak", "Sadece tatile gitmek", "Hiçbir şey yapılmaz"], d: 0, z: 1 }
]);

/* --- Bilişim Teknolojileri 5 --- */
SORULAR["bty5"] = SORULAR["bty5"] || {};
SORULAR["bty5"][0] = (SORULAR["bty5"][0] || []).concat([
  { s: "Aşağıdakilerden hangisi bir bilgisayar parçasıdır?", o: ["Ekran", "Kalem", "Defter", "Silgi"], d: 0, z: 1 },
  { s: "Bilgisayarda yazı yazmak için hangisi kullanılır?", o: ["Klavye", "Hoparlör", "Yazıcı", "Fare"], d: 0, z: 1 }
]);
SORULAR["bty5"][1] = (SORULAR["bty5"][1] || []).concat([
  { s: "İnternete bağlanmak için hangisine ihtiyaç vardır?", o: ["İnternet bağlantısı", "Kalem", "Silgi", "Defter"], d: 0, z: 1 },
  { s: "İnternette gezinen sayfalara ne denir?", o: ["Web sitesi", "Sınıf", "Kitap", "Pencere"], d: 0, z: 1 }
]);
SORULAR["bty5"][2] = (SORULAR["bty5"][2] || []).concat([
  { s: "Arama motorunda bilgi ararken en doğrusu hangisidir?", o: ["Anahtar kelimeleri doğru seçmek", "Her şeye tıklamak", "Şifreyi paylaşmak", "Adresi ezberlemek"], d: 0, z: 2 },
  { s: "İnternetten bulduğun bilginin doğru olduğundan nasıl emin olursun?", o: ["Birden fazla güvenilir kaynağa bakarak", "Tek bir siteden bakarak", "Sadece tahmin ederek", "Hiç kontrol etmeden"], d: 0, z: 2 }
]);
SORULAR["bty5"][3] = (SORULAR["bty5"][3] || []).concat([
  { s: "İnternette tanımadığın biriyle özel bilgilerini paylaşmalı mısın?", o: ["Hayır, asla", "Evet, her zaman", "Sadece bir kere", "Gerek yok ama olabilir"], d: 0, z: 1 },
  { s: "Güçlü bir şifre nasıl olmalıdır?", o: ["Harf, rakam ve sembol içermeli", "Sadece 1 rakam olmalı", "Kendi adı olmalı", "1234 olmalı"], d: 0, z: 1 }
]);
SORULAR["bty5"][4] = (SORULAR["bty5"][4] || []).concat([
  { s: "Hangisi kelime işlemci programıdır?", o: ["Word", "Paint", "PowerPoint", "Excel"], d: 0, z: 1 },
  { s: "Yazı yazılan programda yazının kalın olması için hangi işlem yapılır?", o: ["Kalın (Bold) butonuna tıklanır", "Renk değiştirilir", "Yazıcıdan çıktı alınır", "Hiçbir şey yapılmaz"], d: 0, z: 2 }
]);
SORULAR["bty5"][5] = (SORULAR["bty5"][5] || []).concat([
  { s: "Sunum yapmak için hangi program kullanılır?", o: ["PowerPoint", "Paint", "Word", "Excel"], d: 0, z: 1 },
  { s: "Sunum slaytlarına eklenebilecek öğe hangisidir?", o: ["Resim", "Sadece kağıt", "Sadece kalem", "Hiçbiri"], d: 0, z: 1 }
]);
SORULAR["bty5"][6] = (SORULAR["bty5"][6] || []).concat([
  { s: "Bir işi yapmak için adım adım yazılan yönergeye ne denir?", o: ["Algoritma", "Resim", "Şarkı", "Hikaye"], d: 0, z: 2 },
  { s: "Blok tabanlı programlama aracı hangisidir?", o: ["Scratch", "Word", "Paint", "Excel"], d: 0, z: 1 }
]);

/* ===================== 7. SINIF ===================== */

/* --- Türkçe 7 --- */
SORULAR["trk7"] = SORULAR["trk7"] || {};
SORULAR["trk7"][0] = (SORULAR["trk7"][0] || []).concat([
  { s: "\"Bu işi ona söylemek ağırına gitti.\" cümlesinde \"ağır\" sözcüğü hangi anlamda kullanılmıştır?", o: ["Mecaz anlam", "Gerçek anlam", "Terim anlam", "Yan anlam"], d: 0, z: 2 },
  { s: "Deyimlerle ilgili hangisi doğrudur?", o: ["Genellikle mecaz anlamlıdır", "Her zaman gerçek anlamlıdır", "Uzun ve öğüt vericidir", "Sadece atasözlerinden oluşur"], d: 0, z: 2 }
]);
SORULAR["trk7"][1] = (SORULAR["trk7"][1] || []).concat([
  { s: "\"Senin sözlerinle beni çok mutlu ettin.\" cümlesinde \"senin sözlerinle\" hangi anlam ilişkisini verir?", o: ["Neden-sonuç", "Koşul", "Karşılaştırma", "Amaç"], d: 0, z: 3 },
  { s: "\"Hava güzelse pikniğe gideriz.\" cümlesinde \"ise\" hangi anlamı katar?", o: ["Koşul", "Zaman", "Sebep", "Niyet"], d: 0, z: 2 }
]);
SORULAR["trk7"][2] = (SORULAR["trk7"][2] || []).concat([
  { s: "\"geldi\" fiilinin kipi hangisidir?", o: ["Görülen geçmiş zaman", "Geniş zaman", "Gelecek zaman", "Şimdiki zaman"], d: 0, z: 2 },
  { s: "\"geliyor\" fiili hangi zaman kipindedir?", o: ["Şimdiki zaman", "Gelecek zaman", "Geçmiş zaman", "Geniş zaman"], d: 0, z: 1 }
]);
SORULAR["trk7"][3] = (SORULAR["trk7"][3] || []).concat([
  { s: "\"Yüzmeyi çok severim.\" cümlesinde \"yüzmeyi\" sözcüğü hangi tür fiilimsidir?", o: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Fiil"], d: 0, z: 2 },
  { s: "\"Koşarak geldi.\" cümlesinde \"koşarak\" hangi fiilimsi türüdür?", o: ["Zarf-fiil", "İsim-fiil", "Sıfat-fiil", "Yüklem"], d: 0, z: 2 }
]);
SORULAR["trk7"][4] = (SORULAR["trk7"][4] || []).concat([
  { s: "\"Babam eve yeni bir televizyon aldı.\" cümlesinde nesne hangisidir?", o: ["yeni bir televizyon", "babam", "eve", "aldı"], d: 0, z: 2 },
  { s: "\"Çocuklar bahçede oyun oynuyorlar.\" cümlesinde \"bahçede\" hangi öğedir?", o: ["Dolaylı tümleç", "Özne", "Nesne", "Zarf tümleci"], d: 0, z: 2 }
]);
SORULAR["trk7"][5] = (SORULAR["trk7"][5] || []).concat([
  { s: "\"güzel\" sözcüğü \"güzel bir ev\" tamlamasında hangi türdür?", o: ["Sıfat", "İsim", "Zamir", "Zarf"], d: 0, z: 2 },
  { s: "\"okulun bahçesi\" tamlaması hangi tür tamlamadır?", o: ["Belirtili isim tamlaması", "Belirtisiz isim tamlaması", "Sıfat tamlaması", "Zincirleme"], d: 0, z: 2 }
]);
SORULAR["trk7"][6] = (SORULAR["trk7"][6] || []).concat([
  { s: "Bir paragrafın ana fikri hangi cümlede genellikle bulunur?", o: ["Giriş veya sonuç cümlesinde", "Her cümlede", "Hiçbir cümlede", "Sadece ilk harfte"], d: 0, z: 2 },
  { s: "Paragrafta anlatılmak istenen en kısa ve öz hale ne denir?", o: ["Ana fikir", "Konu", "Başlık", "Ayrıntı"], d: 0, z: 1 }
]);
SORULAR["trk7"][7] = (SORULAR["trk7"][7] || []).concat([
  { s: "Aşağıdakilerden hangisinin yazımı yanlıştır?", o: ["ki", "yada", "ve", "ama"], d: 1, z: 2 },
  { s: "\"Okulda, bahçede ve sınıfta ...\" cümlesinde \"ve\" hangi görevde kullanılır?", o: ["Bağlaç", "Edat", "Ünlem", "Sıfat"], d: 0, z: 1 }
]);

/* --- Matematik 7 (mevcutlara ek) --- */
SORULAR["mat7"] = SORULAR["mat7"] || {};
SORULAR["mat7"][6] = (SORULAR["mat7"][6] || []).concat([
  { s: "Bir malın %20 indirimle fiyatı 80 TL ise indirimsiz fiyatı kaç TL'dir?", o: ["100", "96", "60", "120"], d: 0, z: 3 }
]);
SORULAR["mat7"][9] = (SORULAR["mat7"][9] || []).concat([
  { s: "Yarıçapı 7 cm olan dairenin çevresi kaç cm'dir? (π = 22/7)", o: ["44", "154", "22", "88"], d: 0, z: 2 },
  { s: "Yarıçapı 7 cm olan dairenin alanı kaç cm²'dir? (π = 22/7)", o: ["154", "44", "77", "308"], d: 0, z: 2 }
]);
SORULAR["mat7"][10] = (SORULAR["mat7"][10] || []).concat([
  { s: "Bir veri grubunda en çok tekrar eden sayıya ne denir?", o: ["Mod", "Medyan", "Aritmetik ortalama", "Açıklık"], d: 0, z: 1 },
  { s: "2, 5, 5, 8 sayılarının medyanı kaçtır?", o: ["5", "4", "6", "7"], d: 0, z: 3 }
]);
SORULAR["mat7"][11] = (SORULAR["mat7"][11] || []).concat([
  { s: "Ayrıtları 2, 3 ve 4 cm olan dikdörtgenler prizmasının hacmi kaç cm³'tür?", o: ["24", "9", "12", "48"], d: 0, z: 2 }
]);

/* --- Fen Bilimleri 7 (mevcutlara ek) --- */
SORULAR["fen7"] = SORULAR["fen7"] || {};
SORULAR["fen7"][0] = (SORULAR["fen7"][0] || []).concat([
  { s: "Güneş Sisteminde hangi gezegen Güneş'e en yakındır?", o: ["Merkür", "Venüs", "Dünya", "Mars"], d: 0, z: 1 },
  { s: "Yıldızların oluşturduğu topluluğa ne denir?", o: ["Takımyıldız", "Gezegen", "Asteroid", "Kuyruklu yıldız"], d: 0, z: 2 }
]);
SORULAR["fen7"][1] = (SORULAR["fen7"][1] || []).concat([
  { s: "Mitoz bölünme sonucu kaç hücre oluşur?", o: ["2", "1", "3", "4"], d: 0, z: 2 },
  { s: "Mayoz bölünme hangi canlılarda görülür?", o: ["Üreme ana hücrelerinde", "Vücut hücrelerinde", "Deri hücrelerinde", "Kas hücrelerinde"], d: 0, z: 2 }
]);
SORULAR["fen7"][3] = (SORULAR["fen7"][3] || []).concat([
  { s: "Saf maddelerle ilgili hangisi doğrudur?", o: ["Tek tür tanecik içerir", "Her zaman karışımdır", "İki veya daha fazla madde içerir", "Homojendir ama saf değildir"], d: 0, z: 2 },
  { s: "Şekerli su hangi tür karışımdır?", o: ["Homojen karışım", "Heterojen karışım", "Saf madde", "Element"], d: 0, z: 2 }
]);
SORULAR["fen7"][4] = (SORULAR["fen7"][4] || []).concat([
  { s: "Işığın ortam değiştirirken doğrultusunun değişmesine ne denir?", o: ["Kırılma", "Yansıma", "Soğrulma", "Yayılma"], d: 0, z: 2 }
]);
SORULAR["fen7"][5] = (SORULAR["fen7"][5] || []).concat([
  { s: "Kurbağanın başkalaşım geçirmesi hangi gelişim dönemine örnektir?", o: ["Büyüme ve gelişme", "Üreme", "Beslenme", "Boşaltım"], d: 0, z: 3 }
]);

/* --- Sosyal Bilgiler 7 --- */
SORULAR["sos7"] = SORULAR["sos7"] || {};
SORULAR["sos7"][0] = (SORULAR["sos7"][0] || []).concat([
  { s: "İnsanların duygu ve düşüncelerini karşı tarafa aktarmasına ne denir?", o: ["İletişim", "Seyahat", "Üretim", "Tüketim"], d: 0, z: 1 },
  { s: "Karşımızdaki kişiyi dikkatle dinlemek hangi iletişim becerisidir?", o: ["Etkili dinleme", "Bağırmak", "Sözünü kesmek", "Yok saymak"], d: 0, z: 1 }
]);
SORULAR["sos7"][1] = (SORULAR["sos7"][1] || []).concat([
  { s: "Bir bölgede yaşayan insanların sayısına ne denir?", o: ["Nüfus", "İklim", "Coğrafya", "Tarih"], d: 0, z: 1 },
  { s: "Nüfus yoğunluğu hangi işlemle bulunur?", o: ["Nüfus / Yüzölçümü", "Nüfus x Yüzölçümü", "Yüzölçümü / Nüfus", "Nüfus + Yüzölçümü"], d: 0, z: 2 }
]);
SORULAR["sos7"][2] = (SORULAR["sos7"][2] || []).concat([
  { s: "Anadolu'da kurulan ilk medeniyetlerden hangisi Hitit'tir. Hititler nerede yaşamıştır?", o: ["Anadolu", "Mısır", "Yunanistan", "İran"], d: 0, z: 2 },
  { s: "Osmanlı Devleti'nin kurulduğu yer neresidir?", o: ["Anadolu", "Kafkaslar", "Kırım", "Mısır"], d: 0, z: 1 }
]);
SORULAR["sos7"][3] = (SORULAR["sos7"][3] || []).concat([
  { s: "Bir ülkede üretilen malların alınıp satılmasına ne denir?", o: ["Ticaret", "Tarım", "Sanayi", "Eğitim"], d: 0, z: 1 },
  { s: "Ülkemizde en çok ihraç edilen ürünlerden biri hangisidir?", o: ["Fındık", "Kar", "Buz", "Kum"], d: 0, z: 2 }
]);
SORULAR["sos7"][4] = (SORULAR["sos7"][4] || []).concat([
  { s: "Demokratik yönetimde milletin iradesi hangi yolla ortaya konur?", o: ["Seçimlerle", "Zorla", "Kura ile", "Savaşla"], d: 0, z: 1 },
  { s: "Türkiye Büyük Millet Meclisi'nin kurulduğu yıl hangisidir?", o: ["1920", "1923", "1919", "1924"], d: 0, z: 2 }
]);
SORULAR["sos7"][5] = (SORULAR["sos7"][5] || []).concat([
  { s: "Ülkeler arasındaki kültürel etkileşimi en çok artıran şey hangisidir?", o: ["Turizm ve internet", "Savaş", "Ambargo", "Sınır kapamak"], d: 0, z: 2 },
  { s: "Birleşmiş Milletler'in temel amacı hangisidir?", o: ["Barış ve güvenliği sağlamak", "Savaş başlatmak", "Ekonomi yok etmek", "İnsanları göç ettirmek"], d: 0, z: 1 }
]);

/* --- İngilizce 7 (mevcutlara ek) --- */
SORULAR["ing7"] = SORULAR["ing7"] || {};
SORULAR["ing7"][0] = (SORULAR["ing7"][0] || []).concat([
  { s: "\"She has got long, curly hair.\" cümlesinde \"curly\" ne demektir?", o: ["Kıvırcık", "Düz", "Uzun", "Kısa"], d: 0, z: 1 },
  { s: "\"What does he look like?\" sorusuna hangisi cevaptır?", o: ["He is tall and slim.", "He is happy.", "He is my brother.", "He is ten."], d: 0, z: 2 }
]);
SORULAR["ing7"][1] = (SORULAR["ing7"][1] || []).concat([
  { s: "\"I like playing tennis.\" cümlesinde \"tennis\" ne demektir?", o: ["Tenis", "Futbol", "Basketbol", "Voleybol"], d: 0, z: 1 },
  { s: "\"Can you play chess?\" sorusuna olumlu cevap hangisidir?", o: ["Yes, I can.", "No, I don't.", "Yes, I am.", "I like chess."], d: 0, z: 2 }
]);
SORULAR["ing7"][2] = (SORULAR["ing7"][2] || []).concat([
  { s: "Geçmişte yaşamış ünlü bir kişinin hayatını anlatan yazıya ne denir?", o: ["Biography", "Story", "Poem", "Diary"], d: 0, z: 1 },
  { s: "\"Atatürk was born in 1881.\" cümlesinde \"was born\" ne demektir?", o: ["Doğdu", "Öldü", "Geldi", "Gitti"], d: 0, z: 1 }
]);
SORULAR["ing7"][3] = (SORULAR["ing7"][3] || []).concat([
  { s: "Aşağıdakilerden hangisi vahşi bir hayvandır?", o: ["Lion", "Dog", "Cat", "Rabbit"], d: 0, z: 1 },
  { s: "\"Elephants are the biggest animals.\" cümlesinde \"biggest\" ne demektir?", o: ["En büyük", "En küçük", "En hızlı", "En uzun"], d: 0, z: 1 }
]);
SORULAR["ing7"][4] = (SORULAR["ing7"][4] || []).concat([
  { s: "\"What's on TV tonight?\" sorusunda \"TV\" ne demektir?", o: ["Televizyon", "Radyo", "Gazete", "Bilgisayar"], d: 0, z: 1 },
  { s: "\"I usually watch cartoons.\" cümlesinde \"cartoons\" ne demektir?", o: ["Çizgi film", "Haber", "Dizi", "Film"], d: 0, z: 1 }
]);
SORULAR["ing7"][5] = (SORULAR["ing7"][5] || []).concat([
  { s: "\"Happy New Year!\" ifadesi hangi kutlamada kullanılır?", o: ["Yılbaşı", "Doğum günü", "Okul başlangıcı", "Sınav"], d: 0, z: 1 },
  { s: "\"We celebrate the festival.\" cümlesinde \"celebrate\" ne demektir?", o: ["Kutlamak", "Unutmak", "Başlamak", "Bitirmek"], d: 0, z: 1 }
]);
SORULAR["ing7"][6] = (SORULAR["ing7"][6] || []).concat([
  { s: "Hangisi bir gezegendir?", o: ["Mars", "Moon", "Sun", "Star"], d: 0, z: 1 },
  { s: "\"Saturn has got rings.\" cümlesinde \"rings\" ne demektir?", o: ["Halkalar", "Kanatlar", "Yüzük", "Kuyruk"], d: 0, z: 1 }
]);

/* --- Din Kültürü 7 --- */
SORULAR["din7"] = SORULAR["din7"] || {};
SORULAR["din7"][0] = (SORULAR["din7"][0] || []).concat([
  { s: "İslam düşüncesinde ortaya çıkan yorumlara ne denir?", o: ["Mezhep", "Tarikat", "Felsefe", "Bilim"], d: 0, z: 2 },
  { s: "İslam dininin temel kaynağı hangisidir?", o: ["Kur'an-ı Kerim", "Şiir", "Masal", "Hikaye"], d: 0, z: 1 }
]);
SORULAR["din7"][1] = (SORULAR["din7"][1] || []).concat([
  { s: "Allah'ın emirlerini yerine getiren, nurani varlıklara ne denir?", o: ["Melek", "İnsan", "Hayvan", "Cin"], d: 0, z: 1 },
  { s: "Aşağıdakilerden hangisi dört büyük melekten biridir?", o: ["Cebrail", "İsmail", "Yusuf", "Musa"], d: 0, z: 2 }
]);
SORULAR["din7"][2] = (SORULAR["din7"][2] || []).concat([
  { s: "Zekat kimlere verilir?", o: ["İhtiyaç sahiplerine", "Sadece zenginlere", "Sadece akrabalara", "Sadece komşulara"], d: 0, z: 1 },
  { s: "Toplumsal dayanışma ile ilgili hangisi doğrudur?", o: ["Yardımlaşma toplumu güçlendirir", "Yardımlaşma gereksizdir", "Herkes kendi başına yaşamalı", "Sadaka verilmemelidir"], d: 0, z: 1 }
]);

/* ===================== 8. SINIF ===================== */

/* --- Türkçe 8 --- */
SORULAR["trk8"] = SORULAR["trk8"] || {};
SORULAR["trk8"][0] = (SORULAR["trk8"][0] || []).concat([
  { s: "\"Bu elbise sana çok yakışmış.\" cümlesinde \"yakışmak\" hangi anlamda kullanılmıştır?", o: ["Mecaz anlam", "Gerçek anlam", "Terim anlam", "Yan anlam"], d: 0, z: 2 },
  { s: "\"göz\" sözcüğü \"kapının gözü\" tamlamasında hangi anlam ilişkisiyle kullanılmıştır?", o: ["Sesteş", "Eş anlamlı", "Zıt anlamlı", "Yakın anlamlı"], d: 0, z: 2 }
]);
SORULAR["trk8"][1] = (SORULAR["trk8"][1] || []).concat([
  { s: "\"Ders çalışmak için kütüphaneye gitti.\" cümlesinde amaç-sonuç ilişkisi hangi kelimeyle kurulmuştur?", o: ["için", "çalışmak", "gitti", "kütüphaneye"], d: 0, z: 2 },
  { s: "\"Eğer yağmur yağarsa piknik iptal olur.\" cümlesi hangi anlam ilişkisini içerir?", o: ["Koşul-sonuç", "Neden-sonuç", "Amaç-sonuç", "Karşılaştırma"], d: 0, z: 1 }
]);
SORULAR["trk8"][2] = (SORULAR["trk8"][2] || []).concat([
  { s: "\"Gelen misafirleri karşıladık.\" cümlesinde \"gelen\" sözcüğü hangi tür fiilimsidir?", o: ["Sıfat-fiil", "İsim-fiil", "Zarf-fiil", "Fiil"], d: 0, z: 2 },
  { s: "\"Kapı açılınca içeri girdik.\" cümlesinde \"açılınca\" hangi fiilimsi türüdür?", o: ["Zarf-fiil", "İsim-fiil", "Sıfat-fiil", "Çekimli fiil"], d: 0, z: 2 }
]);
SORULAR["trk8"][3] = (SORULAR["trk8"][3] || []).concat([
  { s: "\"Öğretmen ödevleri topladı.\" cümlesinde \"ödevleri\" hangi öğedir?", o: ["Nesne", "Özne", "Yüklem", "Zarf tümleci"], d: 0, z: 2 },
  { s: "\"Yarın sabah erkenden yola çıkacağız.\" cümlesinde \"yarın sabah\" hangi öğedir?", o: ["Zarf tümleci", "Özne", "Nesne", "Dolaylı tümleç"], d: 0, z: 2 }
]);
SORULAR["trk8"][4] = (SORULAR["trk8"][4] || []).concat([
  { s: "\"okulun bahçesi\" ifadesi hangi tamlamadır?", o: ["Belirtili isim tamlaması", "Belirtisiz isim tamlaması", "Sıfat tamlaması", "Zincirleme isim tamlaması"], d: 0, z: 2 },
  { s: "\"güzel manzara\" ifadesi hangi tamlamadır?", o: ["Sıfat tamlaması", "Belirtili isim tamlaması", "Belirtisiz isim tamlaması", "İyelik tamlaması"], d: 0, z: 1 }
]);
SORULAR["trk8"][5] = (SORULAR["trk8"][5] || []).concat([
  { s: "Bilgi ve düşünce vermeyi amaçlayan metin türü hangisidir?", o: ["Makale", "Masal", "Şiir", "Roman"], d: 0, z: 2 },
  { s: "Yaşanmış olayları kronolojik sırayla anlatan yazı türü hangisidir?", o: ["Anı", "Masal", "Fabl", "Destan"], d: 0, z: 2 }
]);
SORULAR["trk8"][6] = (SORULAR["trk8"][6] || []).concat([
  { s: "Bir paragrafın konusunu en iyi ifade eden seçenek hangisidir?", o: ["Paragrafta üzerinde durulan düşünce", "Paragraftaki kelime sayısı", "Paragrafın yazarı", "Paragrafın sayfa sayısı"], d: 0, z: 2 },
  { s: "\"Bu paragrafın ana düşüncesi aşağıdakilerden hangisidir?\" sorusunun cevabı hangi bilgidir?", o: ["Paragrafta anlatılmak istenen en önemli mesaj", "Paragrafın ilk cümlesi", "Paragraftaki son kelime", "Paragrafın başlığı"], d: 0, z: 2 }
]);
SORULAR["trk8"][7] = (SORULAR["trk8"][7] || []).concat([
  { s: "Aşağıdakilerden hangisi ayrı yazılır?", o: ["herkes", "biraz", "birtakım", "yada"], d: 0, z: 2 },
  { s: "\"Akşamları çay içmeyi çok seviyorum.\" cümlesinde hangi noktalama işareti eksiktir?", o: ["Hiçbiri", "Virgül", "Nokta", "Soru işareti"], d: 0, z: 2 }
]);

/* --- Matematik 8 (mevcutlara ek) --- */
SORULAR["mat8"] = SORULAR["mat8"] || {};
SORULAR["mat8"][3] = (SORULAR["mat8"][3] || []).concat([
  { s: "3, 5, 5, 7, 8 veri grubunun aritmetik ortalaması kaçtır?", o: ["5,6", "5", "6", "6,5"], d: 0, z: 2 },
  { s: "2, 4, 8, 12 sayılarının açıklığı kaçtır?", o: ["10", "6", "4", "12"], d: 0, z: 2 }
]);
SORULAR["mat8"][4] = (SORULAR["mat8"][4] || []).concat([
  { s: "Bir torbada 3 kırmızı, 2 mavi top var. Kırmızı çekme olasılığı kaçtır?", o: ["3/5", "2/5", "3/2", "1/5"], d: 0, z: 2 },
  { s: "Bir paranın yazı gelme olasılığı kaçtır?", o: ["1/2", "1/3", "1/4", "1"], d: 0, z: 1 }
]);
SORULAR["mat8"][7] = (SORULAR["mat8"][7] || []).concat([
  { s: "x > 5 eşitsizliğini sağlayan en küçük tam sayı kaçtır?", o: ["6", "5", "4", "7"], d: 0, z: 2 }
]);
SORULAR["mat8"][8] = (SORULAR["mat8"][8] || []).concat([
  { s: "Dik kenarları 3 ve 4 cm olan üçgenin hipotenüsü kaç cm'dir?", o: ["5", "7", "12", "6"], d: 0, z: 2 },
  { s: "Kenarları 6, 8 ve 10 cm olan üçgen dik üçgen midir?", o: ["Evet", "Hayır", "Bilemeyiz", "Sadece 6-8 kenarıyla"], d: 0, z: 3 }
]);
SORULAR["mat8"][9] = (SORULAR["mat8"][9] || []).concat([
  { s: "Benzerlik oranı 2 olan iki üçgenin alanları oranı kaçtır?", o: ["4", "2", "8", "16"], d: 0, z: 3 }
]);
SORULAR["mat8"][11] = (SORULAR["mat8"][11] || []).concat([
  { s: "Bir kenarı 5 cm olan küpün hacmi kaç cm³'tür?", o: ["125", "25", "75", "100"], d: 0, z: 1 },
  { s: "Taban yarıçapı 3 cm, yüksekliği 5 cm olan silindirin hacmi kaç cm³'tür? (π = 3)", o: ["135", "45", "90", "180"], d: 0, z: 3 }
]);

/* --- Fen Bilimleri 8 (mevcutlara ek) --- */
SORULAR["fen8"] = SORULAR["fen8"] || {};
SORULAR["fen8"][0] = (SORULAR["fen8"][0] || []).concat([
  { s: "Hava olaylarının kısa süreli durumuna ne denir?", o: ["Hava durumu", "İklim", "Mevsim", "Sıcaklık"], d: 0, z: 2 },
  { s: "Ülkemizde Akdeniz iklimi hangi bölgede görülür?", o: ["Akdeniz Bölgesi", "Karadeniz Bölgesi", "İç Anadolu", "Doğu Anadolu"], d: 0, z: 1 }
]);
SORULAR["fen8"][1] = (SORULAR["fen8"][1] || []).concat([
  { s: "Gen yapısında meydana gelen kalıcı değişikliğe ne denir?", o: ["Mutasyon", "Modifikasyon", "Adaptasyon", "Fotosentez"], d: 0, z: 2 },
  { s: "Çevre etkisiyle oluşan geçici değişikliklere ne denir?", o: ["Modifikasyon", "Mutasyon", "Adaptasyon", "Evolüsyon"], d: 0, z: 2 }
]);
SORULAR["fen8"][2] = (SORULAR["fen8"][2] || []).concat([
  { s: "Basınç formülü hangisidir?", o: ["P = Kuvvet / Alan", "P = Alan / Kuvvet", "P = Kuvvet x Alan", "P = Kuvvet + Alan"], d: 0, z: 2 },
  { s: "Deniz seviyesinden yükseğe çıkıldıkça açık hava basıncı nasıl değişir?", o: ["Azalır", "Artar", "Değişmez", "Önce artar sonra azalır"], d: 0, z: 2 }
]);
SORULAR["fen8"][3] = (SORULAR["fen8"][3] || []).concat([
  { s: "pH değeri 7'den büyük olan maddeler hangi gruptadır?", o: ["Baz", "Asit", "Nötr", "Tuz"], d: 0, z: 1 },
  { s: "Limon ve sirke hangi madde grubuna örnektir?", o: ["Asit", "Baz", "Tuz", "Saf su"], d: 0, z: 1 }
]);
SORULAR["fen8"][4] = (SORULAR["fen8"][4] || []).concat([
  { s: "Sabit makara kuvvetten kazanç sağlar mı?", o: ["Hayır, sadece yönü değiştirir", "Evet, 2 kat kazanç sağlar", "Evet, 3 kat kazanç sağlar", "Kazanç oranı değişir"], d: 0, z: 2 },
  { s: "Aşağıdakilerden hangisi basit makine değildir?", o: ["Motor", "Kaldıraç", "Makaralar", "Eğik düzlem"], d: 0, z: 1 }
]);
SORULAR["fen8"][5] = (SORULAR["fen8"][5] || []).concat([
  { s: "Bitkilerin besin ve oksijen üretme olayına ne denir?", o: ["Fotosentez", "Solunum", "Boşaltım", "Sindirim"], d: 0, z: 1 },
  { s: "Bir besin zincirinde en fazla enerjiye hangisi sahiptir?", o: ["Üreticiler", "Otçullar", "Etçiller", "Ayrıştırıcılar"], d: 0, z: 2 }
]);
SORULAR["fen8"][6] = (SORULAR["fen8"][6] || []).concat([
  { s: "Aynı yüklere sahip iki cisim birbirini nasıl etkiler?", o: ["İter", "Çeker", "Etkilemez", "Kendini döndürür"], d: 0, z: 1 },
  { s: "Sürtünmeyle elektriklenme hangisinde görülür?", o: ["Saçımızı taramak", "Su içmek", "Kitap okumak", "Yürümek"], d: 0, z: 1 }
]);

/* --- T.C. İnkılap Tarihi 8 (mevcutlara ek) --- */
SORULAR["ink8"] = SORULAR["ink8"] || {};
SORULAR["ink8"][0] = (SORULAR["ink8"][0] || []).concat([
  { s: "Mustafa Kemal nerede doğmuştur?", o: ["Selanik", "Ankara", "İstanbul", "Samsun"], d: 0, z: 1 },
  { s: "Mustafa Kemal'in askeri başarısını gösterdiği savaş hangisidir?", o: ["Çanakkale Savaşı", "Kosova Savaşı", "Varna Savaşı", "Miryokefalon"], d: 0, z: 2 }
]);
SORULAR["ink8"][1] = (SORULAR["ink8"][1] || []).concat([
  { s: "I. Dünya Savaşı sonunda Osmanlı Devleti'nin imzaladığı ateşkes antlaşması hangisidir?", o: ["Mondros", "Sevr", "Lozan", "Paris"], d: 0, z: 2 },
  { s: "Milli Mücadele hangi tarihte başlatıldı?", o: ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"], d: 0, z: 2 }
]);
SORULAR["ink8"][2] = (SORULAR["ink8"][2] || []).concat([
  { s: "TBMM hangi tarihte açılmıştır?", o: ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "30 Ağustos 1922"], d: 0, z: 1 },
  { s: "Kurtuluş Savaşı'nın kesin zaferle sonuçlandığı savaş hangisidir?", o: ["Büyük Taarruz", "I. İnönü", "II. İnönü", "Sakarya"], d: 0, z: 2 }
]);
SORULAR["ink8"][3] = (SORULAR["ink8"][3] || []).concat([
  { s: "Cumhuriyet hangi tarihte ilan edilmiştir?", o: ["29 Ekim 1923", "23 Nisan 1920", "19 Mayıs 1919", "30 Ağustos 1922"], d: 0, z: 1 },
  { s: "Aşağıdakilerden hangisi Atatürk ilkelerinden değildir?", o: ["Fanatizm", "Cumhuriyetçilik", "Milliyetçilik", "Laiklik"], d: 0, z: 2 }
]);
SORULAR["ink8"][4] = (SORULAR["ink8"][4] || []).concat([
  { s: "Türk kadınlarına seçme ve seçilme hakkı hangi yıl verilmiştir?", o: ["1934", "1923", "1940", "1950"], d: 0, z: 2 },
  { s: "Tevhid-i Tedrisat Kanunu hangi alanda yapılan yeniliktir?", o: ["Eğitim", "Tarım", "Askerlik", "Ticaret"], d: 0, z: 2 }
]);
SORULAR["ink8"][5] = (SORULAR["ink8"][5] || []).concat([
  { s: "Atatürk'ün dış politikada temel ilkesi hangisidir?", o: ["Yurtta barış, cihanda barış", "Savaş politikası", "Yayılmacılık", "İzolasyon"], d: 0, z: 1 },
  { s: "Hatay hangi tarihte Türkiye'ye katılmıştır?", o: ["1939", "1923", "1920", "1950"], d: 0, z: 2 }
]);

/* --- İngilizce 8 --- */
SORULAR["ing8"] = SORULAR["ing8"] || {};
SORULAR["ing8"][0] = (SORULAR["ing8"][0] || []).concat([
  { s: "\"What about going to the cinema?\" sorusuna olumlu cevap hangisidir?", o: ["Sounds great!", "I'm afraid I can't.", "No way.", "Not at all."], d: 0, z: 2 },
  { s: "\"get on well with\" ifadesinin Türkçe karşılığı nedir?", o: ["İyi geçinmek", "Kötü anlaşmak", "Tanışmak", "Buluşmak"], d: 0, z: 2 }
]);
SORULAR["ing8"][1] = (SORULAR["ing8"][1] || []).concat([
  { s: "\"I used to play football when I was young.\" cümlesi ne anlama gelir?", o: ["Gençken futbol oynardım.", "Şu an futbol oynuyorum.", "Yarın futbol oynayacağım.", "Hiç futbol oynamadım."], d: 0, z: 2 },
  { s: "\"I spend most of my free time with my friends.\" cümlesinde \"spend\" ne demektir?", o: ["Geçirmek", "Harcamak", "Bitirmek", "Kaybetmek"], d: 0, z: 1 }
]);
SORULAR["ing8"][2] = (SORULAR["ing8"][2] || []).concat([
  { s: "\"Add a little sugar.\" cümlesinde \"a little\" hangi durumda kullanılır?", o: ["Sayılamayan isimlerle", "Sayılabilen isimlerle", "Sadece çoğullarla", "Sadece fiillerle"], d: 0, z: 2 },
  { s: "\"bake\" fiilinin Türkçe karşılığı nedir?", o: ["Pişirmek", "Karıştırmak", "Kesmek", "Yıkamak"], d: 0, z: 1 }
]);
SORULAR["ing8"][3] = (SORULAR["ing8"][3] || []).concat([
  { s: "\"Can I speak to Ali, please?\" ifadesinin Türkçe karşılığı nedir?", o: ["Ali ile görüşebilir miyim?", "Ali nerede?", "Ali kim?", "Ali'yi tanıyor musun?"], d: 0, z: 2 },
  { s: "\"Hold on, please.\" ifadesi ne anlama gelir?", o: ["Bir dakika bekleyin.", "Kapatın.", "Arayın.", "Gidin."], d: 0, z: 1 }
]);
SORULAR["ing8"][4] = (SORULAR["ing8"][4] || []).concat([
  { s: "İnternette güvenli olmak için hangisi doğrudur?", o: ["Şifreni kimseyle paylaşma", "Her linke tıkla", "Kişisel bilgilerini ver", "Tanımadığın herkese güven"], d: 0, z: 1 },
  { s: "\"download\" fiilinin Türkçe karşılığı nedir?", o: ["İndirmek", "Yüklemek", "Sil", "Kopyala"], d: 0, z: 1 }
]);
SORULAR["ing8"][5] = (SORULAR["ing8"][5] || []).concat([
  { s: "\"Computers are used in many fields.\" cümlesi hangi yapıdadır?", o: ["Edilgen (passive)", "Etken (active)", "Soru", "Olumsuz"], d: 0, z: 2 },
  { s: "\"Scientists make discoveries.\" cümlesinde \"discoveries\" ne demektir?", o: ["Keşifler", "Bilim", "Laboratuvar", "Deney"], d: 0, z: 1 }
]);
SORULAR["ing8"][6] = (SORULAR["ing8"][6] || []).concat([
  { s: "\"earthquake\" ne demektir?", o: ["Deprem", "Sel", "Çığ", "Kuraklık"], d: 0, z: 1 },
  { s: "Deprem sırasında ne yapmalıyız?", o: ["Sakin kalmalıyız", "Koşmalıyız", "Panik yapmalıyız", "Camdan atlamalıyız"], d: 0, z: 1 }
]);
SORULAR["ing8"][7] = (SORULAR["ing8"][7] || []).concat([
  { s: "\"Could you help me with the housework?\" ifadesinin Türkçe karşılığı nedir?", o: ["Ev işlerinde bana yardım eder misin?", "Ev işlerini yapmalısın.", "Ev işlerini seviyor musun?", "Ev işleri nerede?"], d: 0, z: 2 },
  { s: "\"take out the rubbish\" ne demektir?", o: ["Çöpü çıkarmak", "Yerleri silmek", "Bulaşık yıkamak", "Çamaşır asmak"], d: 0, z: 1 }
]);
SORULAR["ing8"][8] = (SORULAR["ing8"][8] || []).concat([
  { s: "\"I have just finished my homework.\" cümlesinde hangi zaman kullanılmıştır?", o: ["Present Perfect", "Simple Past", "Future", "Present Continuous"], d: 0, z: 2 },
  { s: "\"Have you ever been to the sea?\" cümlesinde \"ever\" ne demektir?", o: ["Hiç", "Asla", "Sık sık", "Her zaman"], d: 0, z: 1 }
]);

/* --- Din Kültürü 8 --- */
SORULAR["din8"] = SORULAR["din8"] || {};
SORULAR["din8"][0] = (SORULAR["din8"][0] || []).concat([
  { s: "Allah'ın her şeyi bir ölçüye göre belirlemesine ne denir?", o: ["Kader", "Kaza", "Tevekkül", "İrade"], d: 0, z: 2 },
  { s: "Elinden geleni yaptıktan sonra Allah'a güvenmeye ne denir?", o: ["Tevekkül", "Kader", "Dua", "Sabır"], d: 0, z: 1 }
]);
SORULAR["din8"][1] = (SORULAR["din8"][1] || []).concat([
  { s: "Zekat, zengin Müslümanların yılda bir kez malının ne kadarını vermesidir?", o: ["Kırkta birini", "Yarısını", "Üçte birini", "Beşte birini"], d: 0, z: 2 },
  { s: "Her zaman ve herkesin yapabileceği yardıma ne denir?", o: ["Sadaka", "Zekat", "Fitre", "Hac"], d: 0, z: 1 }
]);
SORULAR["din8"][2] = (SORULAR["din8"][2] || []).concat([
  { s: "Hz. Muhammed'in (s.a.v.) toplumdaki en bilinen özelliği hangisidir?", o: ["Güvenilir olması", "Zengin olması", "Sporcu olması", "Şair olması"], d: 0, z: 1 },
  { s: "\"el-Emin\" lakabı ne anlama gelir?", o: ["Güvenilir", "Sabırlı", "Cömert", "Cesur"], d: 0, z: 1 }
]);
SORULAR["din8"][3] = (SORULAR["din8"][3] || []).concat([
  { s: "Kur'an-ı Kerim kaç sureden oluşur?", o: ["114", "30", "24", "100"], d: 0, z: 1 },
  { s: "Kur'an'ı güzel ve doğru okuma kurallarına ne denir?", o: ["Tecvit", "Meal", "Tefsir", "Hadis"], d: 0, z: 2 }
]);

/* ====== SORU HAVUZU GENİŞLETME-2: din5, din7, din8 ====== */

/* --- Din Kültürü 5 --- */
SORULAR["din5"] = SORULAR["din5"] || {};
SORULAR["din5"][0] = (SORULAR["din5"][0] || []).concat([
  { s: "\"Allah'ın her şeyi işitmesi\" hangi sıfatla ifade edilir?", o: ["Semi' (İşitici)", "Basari (Görücü)", "Kudret", "Rahmet"], d: 0, z: 2 },
  { s: "Aşağıdakilerden hangisi Allah'ın sıfatlarından biri değildir?", o: ["Fani (ölümlü)", "Alim (bilen)", "Kadir (güç yetiren)", "Hakim"], d: 0, z: 2 },
  { s: "\"Allah'ın yaratmasında hiçbir kusur bulunmaması\" onun hangi özelliğini gösterir?", o: ["Her şeyi kusursuz yaratması", "Uykusu olması", "Yaşlanması", "Yorulması"], d: 0, z: 1 }
]);
SORULAR["din5"][1] = (SORULAR["din5"][1] || []).concat([
  { s: "Müslümanların yılda bir kez tuttuğu, belirli bir ay boyunca süren oruç hangi ayda tutulur?", o: ["Ramazan", "Muharrem", "Şaban", "Recep"], d: 0, z: 1 },
  { s: "Namaz kılarken kıble olarak hangi yöne dönülür?", o: ["Kabe'ye (Mekke)", "Kuzeye", "Doğuya", "Batıya"], d: 0, z: 1 },
  { s: "İslam'ın beş şartından biri aşağıdakilerden hangisidir?", o: ["Hac", "Resim yapmak", "Şiir yazmak", "Spor yapmak"], d: 0, z: 1 }
]);
SORULAR["din5"][2] = (SORULAR["din5"][2] || []).concat([
  { s: "Hz. Muhammed (s.a.v.) hangi şehirde doğmuştur?", o: ["Mekke", "Medine", "Taif", "Kudüs"], d: 0, z: 1 },
  { s: "\"Doğruluk, dürüstlük, emaneti korumak\" hangi değerle doğrudan ilgilidir?", o: ["Güvenilirlik", "Kıskançlık", "Cimrilik", "Öfke"], d: 0, z: 1 },
  { s: "Yalan söylemek ve sözünde durmamak hangi davranışa örnektir?", o: ["Güveni zedelemek", "Yardım etmek", "Sabretmek", "Teşekkür etmek"], d: 0, z: 1 }
]);
SORULAR["din5"][3] = (SORULAR["din5"][3] || []).concat([
  { s: "Ramazan ayının sonunda, bayramdan önce ihtiyaç sahiplerine verilen yardıma ne denir?", o: ["Fitre", "Zekat", "Kurban", "Adak"], d: 0, z: 2 },
  { s: "Ramazan ayının özel gecesi hangisidir?", o: ["Kadir Gecesi", "Cuma Gecesi", "Yılbaşı Gecesi", "Mevlit Gecesi"], d: 0, z: 2 },
  { s: "Bayramlarda büyükleri ziyaret edip ellerini öpmek hangi davranışı gösterir?", o: ["Büyüklere saygı ve sevgi", "Kıskançlık", "Kayıtsızlık", "Tembellik"], d: 0, z: 1 }
]);

/* --- Din Kültürü 7 --- */
SORULAR["din7"] = SORULAR["din7"] || {};
SORULAR["din7"][0] = (SORULAR["din7"][0] || []).concat([
  { s: "İslam düşüncesinde itikadi (inanç) yorumlardan biri hangisidir?", o: ["Maturidilik", "Mevlevilik", "Bektaşilik", "Nakşilik"], d: 0, z: 2 },
  { s: "İslam düşüncesindeki tasavvufi yorumlara genel olarak ne ad verilir?", o: ["Tarikat", "Mezhep", "Mezhep fıkıh", "Okul"], d: 0, z: 2 },
  { s: "Fıkhi (hüküm) yorumlardan hangisi ülkemizde yaygındır?", o: ["Hanefi", "Şafii", "Maliki", "Hanbeli"], d: 0, z: 2 }
]);
SORULAR["din7"][1] = (SORULAR["din7"][1] || []).concat([
  { s: "Kur'an'ı Hz. Cebrail'den alıp peygamberlere getiren melek hangisidir?", o: ["Cebrail", "Mikail", "İsrafil", "Azrail"], d: 0, z: 2 },
  { s: "Doğa olaylarını düzenlemekle görevli melek hangisidir?", o: ["Mikail", "Cebrail", "Azrail", "İsrafil"], d: 0, z: 2 },
  { s: "İnsanların yaptıklarını kaydeden melekler hangileridir?", o: ["Kiramen Katibin", "Cebrail ve Mikail", "Azrail", "İsrafil"], d: 0, z: 2 }
]);
SORULAR["din7"][2] = (SORULAR["din7"][2] || []).concat([
  { s: "Maddi durumu iyi olan Müslümanların yılda bir kez verdiği ibadet hangisidir?", o: ["Zekat", "Oruç", "Namaz", "Hac"], d: 0, z: 1 },
  { s: "Ramazan ayında verilen, kişi başına farz olan sadakaya ne denir?", o: ["Fitre", "Adak", "Kefaret", "Hediye"], d: 0, z: 2 },
  { s: "Bir kişiye iyilik yapmakla ilgili hangi davranış sadaka sayılır?", o: ["Güler yüz göstermek", "Sadece para vermek", "Sadece zekat vermek", "Hiçbir şey yapmamak"], d: 0, z: 1 }
]);

/* --- Din Kültürü 8 --- */
SORULAR["din8"] = SORULAR["din8"] || {};
SORULAR["din8"][0] = (SORULAR["din8"][0] || []).concat([
  { s: "İnsanın kendi iradesiyle yaptığı tercihlerden sorumlu olmasına ne denir?", o: ["Sorumluluk", "Kader", "Kaza", "Tevekkül"], d: 0, z: 2 },
  { s: "\"Kader\" kavramı aşağıdakilerden hangisiyle en yakın anlamlıdır?", o: ["Ölçü (takdir)", "Rastlantı", "Şans", "Tembellik"], d: 0, z: 2 },
  { s: "Bir öğrencinin sınavda başarılı olabilmesi için hangisi doğru bir tutumdur?", o: ["Çalışıp elinden geleni yapmak", "Sadece şansa güvenmek", "Hiç çalışmamak", "Başkasına yüklenmek"], d: 0, z: 1 }
]);
SORULAR["din8"][1] = (SORULAR["din8"][1] || []).concat([
  { s: "Zekatın verilme amacı aşağıdakilerden hangisidir?", o: ["Toplumsal dayanışmayı güçlendirmek", "Zenginleri daha zengin yapmak", "Mal biriktirmek", "Sadece akrabalara vermek"], d: 0, z: 1 },
  { s: "İhtiyaç sahiplerine gönüllü olarak yapılan her türlü yardıma ne denir?", o: ["Sadaka", "Zekat", "Fitre", "Hac"], d: 0, z: 1 },
  { s: "Zekat verilecek kişilerle ilgili hangisi doğrudur?", o: ["İhtiyaç sahibi ve borçlu kişilere verilir", "Sadece komşulara verilir", "Sadece zenginlere verilir", "Sadece çocuklara verilir"], d: 0, z: 2 }
]);
SORULAR["din8"][2] = (SORULAR["din8"][2] || []).concat([
  { s: "Hz. Muhammed (s.a.v.) hicret ederken mağarada kendisiyle birlikte olan arkadaşı kimdir?", o: ["Hz. Ebubekir", "Hz. Ömer", "Hz. Osman", "Hz. Ali"], d: 0, z: 2 },
  { s: "Hz. Muhammed (s.a.v.)'in çocuklarından biri hangisidir?", o: ["Hz. Fatıma", "Hz. Meryem", "Hz. Asiye", "Hz. Hacer"], d: 0, z: 1 },
  { s: "Hz. Muhammed (s.a.v.)'in \"Veda Hutbesi\"nde vurguladığı en önemli konu hangisidir?", o: ["İnsan hakları ve eşitlik", "Ticaret", "Savaş", "Avcılık"], d: 0, z: 2 }
]);
SORULAR["din8"][3] = (SORULAR["din8"][3] || []).concat([
  { s: "Kur'an-ı Kerim'in ilk inen ayeti hangisidir?", o: ["Oku (İkra)", "Besmele", "Elhamdülillah", "Veda ayeti"], d: 0, z: 2 },
  { s: "Kur'an-ı Kerim'in diline ne ad verilir?", o: ["Arapça", "Türkçe", "Farsça", "İbranice"], d: 0, z: 1 },
  { s: "Kur'an-ı Kerim'i yorumlayan kişiye ve bu yorumlara ne denir?", o: ["Müfessir ve tefsir", "Şair ve şiir", "Yazar ve roman", "Tarihçi ve kitap"], d: 0, z: 2 }
]);

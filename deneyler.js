/* ===== FEN DENEYLERİ (interaktif, adım adım) =====
   DENEY["dersId"] = [ deneyler ]
   adimlar: tip "bilgi" (İleri ile geçilir) veya "secim" (doğru şık seçilir)
*/

var DENEY = {};

DENEY["fen6"] = [
  {
    id: "gunes-modeli", ikon: "🪐", ad: "Güneş Sistemi Modeli", birim: 0,
    kazanim: "F.6.1.1.1", sure: "5 dk",
    malzeme: ["A4 kâğıt", "Cetvel", "Renkli kalemler"],
    aciklama: "Kâğıda Güneş'i ortaya çiz, 8 gezegeni Güneş'e yakınlık sırasına göre yerleştir.",
    adimlar: [
      { tip: "bilgi", baslik: "Güneş merkezde", metin: "Güneş Sistemi'nde Güneş ortadadır ve 8 gezegen onun çevresinde dolanır. Gezegenler Güneş'e uzaklık sırasına göre dizilir: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün." },
      { tip: "secim", baslik: "En yakın gezegen", metin: "Güneş'e en yakın gezegen hangisidir?", secenekler: ["Merkür", "Venüs", "Dünya", "Mars"], dogru: 0 },
      { tip: "secim", baslik: "Gezegen sayısı", metin: "Güneş Sistemi'nde kaç gezegen vardır?", secenekler: ["8", "7", "9", "10"], dogru: 0 },
      { tip: "secim", baslik: "Güneş tutulması", metin: "Güneş tutulması sırasında hangi gök cismi Güneş'in önüne geçer?", secenekler: ["Ay", "Mars", "Satürn", "Bir yıldız"], dogru: 0 },
      { tip: "bilgi", baslik: "Model tamam", metin: "Modelin hazır! 🎉 8 gezegeni Güneş'e uzaklıklarına göre sıraladın. Güneş tutulmasının Ay'ın gölgesinden kaynaklandığını da öğrendin." }
    ]
  },
  {
    id: "nabiz-kalp", ikon: "❤️", ad: "Nabzımı Sayıyorum", birim: 1,
    kazanim: "F.6.2.1.1", sure: "5 dk",
    malzeme: ["Kol saati veya kronometre", "Kâğıt", "Kalem"],
    aciklama: "Bileğindeki atardamar üzerine iki parmağını koy, 15 saniyedeki atımı say ve 4 ile çarp.",
    adimlar: [
      { tip: "bilgi", baslik: "Kalp ne yapar?", metin: "Kalp, kanı atardamarlara pompalar. Nabız, atardamar duvarına vuran kanın parmakla hissedilmesidir. Dinlenirken nabız yavaş, hareket edince hızlanır." },
      { tip: "secim", baslik: "Pompalayan organ", metin: "Vücuttaki kanı pompalayan organ hangisidir?", secenekler: ["Kalp", "Akciğer", "Böbrek", "Karaciğer"], dogru: 0 },
      { tip: "secim", baslik: "Koşu etkisi", metin: "Koşarken nabız nasıl değişir?", secenekler: ["Hızlanır", "Yavaşlar", "Değişmez", "Durur"], dogru: 0 },
      { tip: "secim", baslik: "Temiz kan damarı", metin: "Temiz kanı kalpten vücuda taşıyan damar türü hangisidir?", secenekler: ["Atardamar", "Toplardamar", "Kılcal damar", "Lenf damarı"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Kalp çalıştıkça kan dolaşır; oksijen ve besin hücrelere ulaşır. Egzersiz yapanın kalbi daha güçlü atar. 💪" }
    ]
  },
  {
    id: "bileske-kuvvet", ikon: "🏋️", ad: "Bileşke Kuvvet", birim: 2,
    kazanim: "F.6.3.1.1", sure: "4 dk",
    malzeme: ["2 dinamometre", "İp", "Küçük ağırlık"],
    aciklama: "Ağırlığı iki dinamometre ile önce aynı yönden, sonra zıt yönden çekerek oku.",
    adimlar: [
      { tip: "bilgi", baslik: "Kuvvetler birleşir", metin: "Bir cisme birden çok kuvvet uygulanabilir. Aynı yönlü kuvvetler toplanır, zıt yönlü kuvvetler çıkarılır. Ortaya çıkan tek kuvvete bileşke kuvvet denir." },
      { tip: "secim", baslik: "Aynı yönlü kuvvetler", metin: "Bir cisme sağa 10 N ve sağa 5 N kuvvet uygulanıyor. Bileşke kuvvet kaç N'dir?", secenekler: ["15 N", "5 N", "10 N", "25 N"], dogru: 0 },
      { tip: "secim", baslik: "Zıt yönlü kuvvetler", metin: "Bir cisme sağa 10 N ve sola 6 N kuvvet uygulanıyor. Net kuvvet hangi yönde kaç N'dir?", secenekler: ["Sağa 4 N", "Sola 4 N", "Sağa 16 N", "Sola 16 N"], dogru: 0 },
      { tip: "secim", baslik: "Dengelenmiş kuvvet", metin: "Bir cisme eşit ve zıt yönlü iki kuvvet uygulanırsa cisim hangi durumdadır?", secenekler: ["Dengelenmiştir", "Hızlanır", "Yavaşlar", "Sürekli döner"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Aynı yönlü kuvvetler birbirini güçlendirir, zıt yönlü kuvvetler birbirini azaltır. Eşit ve zıtsa net kuvvet sıfır olur: cisim dengelenmiştir. ✅" }
    ]
  },
  {
    id: "isi-alisveris", ikon: "🔥", ad: "Isı Alışverişi", birim: 3,
    kazanim: "F.6.4.1.1", sure: "4 dk",
    malzeme: ["Sıcak su", "Soğuk su", "İki bardak", "Termometre"],
    aciklama: "Sıcak ve soğuk suyu karıştır, termometre ile sıcaklığın dengelendiğini gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Isı nasıl akar?", metin: "Isı daima sıcaktan soğuğa akar. Sıcaklıklar eşitlenene kadar alışveriş sürer. Isı bir enerji türüdür; sıcaklık ise bir ölçüdür." },
      { tip: "secim", baslik: "Akış yönü", metin: "80°C su ile 20°C su karıştırılınca ısı hangi yönde akar?", secenekler: ["Sıcaktan soğuğa", "Soğuktan sıcağa", "Hiç akmaz", "Yansır"], dogru: 0 },
      { tip: "secim", baslik: "Sıcak çay ve kaşık", metin: "Metal kaşık sıcak çayın içine konulunca ne olur?", secenekler: ["Isı çaydan kaşığa geçer", "Kaşık ısı üretir", "Isı kaşıktan çaya geçer", "Kaşık soğur"], dogru: 0 },
      { tip: "secim", baslik: "Isı ve sıcaklık", metin: "Isı ve sıcaklık için hangisi doğrudur?", secenekler: ["Isı enerjidir, sıcaklık ölçüdür", "İkisi aynıdır", "Sıcaklık enerjidir", "İkisi de enerji değildir"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Isı sıcaktan soğuğa akar: sıcak çay kaşığı ısıtır, kaşık da çayın sıcaklığını düşürür. Sonunda ikisi de ortak sıcaklığa ulaşır. 🔥" }
    ]
  },
  {
    id: "sesin-yayilmasi", ikon: "🔊", ad: "Sesin Yayılması", birim: 4,
    kazanim: "F.6.5.1.1", sure: "4 dk",
    malzeme: ["Cetvel", "Lastik", "Metal kaşık", "Su dolu leğen"],
    aciklama: "Cetveli masanın kenarına koyup titret; sesi kulakla dinle, suya taş atınca dalgaların yayılışını gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Ses ne ile oluşur?", metin: "Ses, maddelerin titreşmesiyle oluşur. Titreşim, komşu taneciklere aktarılır ve ses katı, sıvı, gaz ortamlarda yayılır. Boşlukta ses yayılmaz." },
      { tip: "secim", baslik: "Sesin kaynağı", metin: "Ses hangi olayla oluşur?", secenekler: ["Titreşim", "Karanlık", "Soğuk", "Gölge"], dogru: 0 },
      { tip: "secim", baslik: "Yayılmadığı ortam", metin: "Ses hangi ortamda yayılmaz?", secenekler: ["Boşlukta", "Suda", "Demirde", "Havada"], dogru: 0 },
      { tip: "secim", baslik: "Sesin yüksekliği", metin: "Sesin incelik/kalınlık özelliği (yüksekliği) neye bağlıdır?", secenekler: ["Frekansa", "Genliğe", "Renkliğe", "Kütleye"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Ses enerjidir ve maddesel ortamda ilerler. Kulağa ulaşan titreşimler beynimizde ses olarak algılanır. 🔊" }
    ]
  },
  {
    id: "elektrik-iletkenlik", ikon: "💡", ad: "İletken mi, Yalıtkan mı?", birim: 6,
    kazanim: "F.6.7.1.1", sure: "5 dk",
    malzeme: ["Pil", "Ampul", "Kablo", "Çeşitli maddeler (bakır tel, plastik, ahşap)"],
    aciklama: "Basit bir devre kur; araya test etmek istediğin maddeyi koy, ampul yanıyor mu gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "İletken ve yalıtkan", metin: "Bazı maddeler elektrik akımını iletir (iletken: bakır, demir, gümüş gibi metaller), bazıları iletmez (yalıtkan: plastik, ahşap, cam, kauçuk)." },
      { tip: "secim", baslik: "İletken madde", metin: "Hangisi elektriği iletir?", secenekler: ["Bakır", "Plastik", "Ahşap", "Cam"], dogru: 0 },
      { tip: "secim", baslik: "Yalıtkan madde", metin: "Yalıtkan maddeler için hangisi doğrudur?", secenekler: ["Elektriği iletmezler", "En iyi iletkendirler", "Hepsi metaldir", "Sadece ısı iletirler"], dogru: 0 },
      { tip: "secim", baslik: "Güvenlik", metin: "Elektrik kazalarından korunmak için hangisi doğrudur?", secenekler: ["Islak elle prize dokunulmaz", "Prizle oynanır", "Kırık kablo kullanılır", "Fiş çekilmez"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Devreye bakır gibi iletken madde konursa ampul yanar; plastik gibi yalıtkan konursa ampul sönük kalır. Anahtar kapalıyken devre tamamlanır. ⚡" }
    ]
  }
];

DENEY["fen5"] = [
  {
    id: "gok-modeli", ikon: "🌍", ad: "Güneş, Dünya ve Ay Modeli", birim: 0,
    kazanim: "F.5.1.1.1", sure: "5 dk",
    malzeme: ["Farklı boyda toplar", "Kalem", "İp", "Kâğıt"],
    aciklama: "Toplardan birine Güneş, ortanca olana Dünya, en küçüğüne Ay de; topları iplerle hareket ettirerek dönme ve dolanmayı gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Üç gök cismi", metin: "Güneş bir yıldızdır; Dünya, Güneş'in çevresinde dolanır. Ay ise Dünya'nın çevresinde dolanır. Bu üçlü, gündüz-gece ve mevsimlerin nedenini açıklar." },
      { tip: "secim", baslik: "Güneş nedir?", metin: "Güneş için hangisi doğrudur?", secenekler: ["Bir yıldızdır", "Bir gezegendir", "Bir uydudur", "Bir kuyruklu yıldızdır"], dogru: 0 },
      { tip: "secim", baslik: "Ay'ın dolanması", metin: "Ay hangi cismin çevresinde dolanır?", secenekler: ["Dünya'nın", "Güneş'in", "Mars'ın", "Venüs'ün"], dogru: 0 },
      { tip: "secim", baslik: "Gece ve gündüz", metin: "Gece ve gündüz hangi hareketle oluşur?", secenekler: ["Dünya'nın kendi ekseni etrafında dönmesiyle", "Ay'ın dolanmasıyla", "Güneş'in dönmesiyle", "Yıldızların hareketiyle"], dogru: 0 },
      { tip: "bilgi", baslik: "Model tamam", metin: "Güneş yıldız, Dünya gezegen, Ay uydudur. Modelinle dönme ve dolanma hareketlerini canlandırdın. 🎉" }
    ]
  },
  {
    id: "canli-gözlem", ikon: "🔍", ad: "Canlıları Gözlemliyorum", birim: 1,
    kazanim: "F.5.2.1.1", sure: "4 dk",
    malzeme: ["Büyüteç", "Kâğıt", "Kalem", "Bahçeden bir yaprak"],
    aciklama: "Bir yaprağı ve bahçedeki küçük canlıları büyüteçle incele; özelliklerini kâğıda not et.",
    adimlar: [
      { tip: "bilgi", baslik: "Canlılar ortak özellikleri", metin: "Bütün canlılar beslenir, büyür ve ürer. Bitkiler, hayvanlar, mantarlar ve mikroskobik canlılar yaşamın ana gruplarıdır." },
      { tip: "secim", baslik: "Bitki özelliği", metin: "Hangisi sadece bitkilere özgüdür?", secenekler: ["Kendi besinini üretir", "Yer değiştirir", "Etle beslenir", "Uçar"], dogru: 0 },
      { tip: "secim", baslik: "Canlı grubu", metin: "Mikroskopla görülen tek hücreli canlılar hangi gruptadır?", secenekler: ["Mikroskobik canlılar", "Sürüngenler", "Kuşlar", "Memeliler"], dogru: 0 },
      { tip: "secim", baslik: "Ortak özellik", metin: "Bütün canlılar için ortak özellik hangisidir?", secenekler: ["Beslenme", "Uçma", "Yüzme", "Yeşil olma"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Canlıların ortak özellikleri beslenme, büyüme ve üremedir. Bitkiler kendi besinini üretir; mikroskobik canlılar çıplak gözle görülemez. 🌱" }
    ]
  },
  {
    id: "dinamometre", ikon: "🏋️", ad: "Kuvveti Ölçüyorum", birim: 2,
    kazanim: "F.5.3.1.1", sure: "4 dk",
    malzeme: ["Dinamometre", "Çeşitli nesneler", "Kâğıt", "Kalem"],
    aciklama: "Dinamometrenin ucuna farklı nesneleri as; yayın uzamasından kuvveti oku ve karşılaştır.",
    adimlar: [
      { tip: "bilgi", baslik: "Kuvvet nedir?", metin: "Kuvvet, cisimleri iter ya da çeker. Birimi Newton (N) dir ve dinamometre (yaylı tartı) ile ölçülür. Yay ne kadar çok uzarsa kuvvet o kadar büyüktür." },
      { tip: "secim", baslik: "Kuvvet birimi", metin: "Kuvvetin birimi nedir?", secenekler: ["Newton (N)", "Gram (g)", "Litre (L)", "Metre (m)"], dogru: 0 },
      { tip: "secim", baslik: "Ölçü aleti", metin: "Kuvvet hangi aletle ölçülür?", secenekler: ["Dinamometre", "Termometre", "Barometre", "Kronometre"], dogru: 0 },
      { tip: "secim", baslik: "Sürtünme kuvveti", metin: "Sürtünme kuvveti cisimleri nasıl etkiler?", secenekler: ["Yavaşlatır", "Hızlandırır", "Uçurur", "Erkitir"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Kuvvet N ile ölçülür; yayın uzaması kuvvetin büyüklüğünü gösterir. Sürtünme kuvveti hareketi zorlaştırır, hareket eden cismi yavaşlatır. ✅" }
    ]
  },
  {
    id: "hal-degisimi", ikon: "🧊", ad: "Hal Değişimi Gözlemi", birim: 3,
    kazanim: "F.5.4.1.1", sure: "4 dk",
    malzeme: ["Buz", "Sıcak su", "Bardak", "Termometre"],
    aciklama: "Buzu sıcak suya at, erimesini gözle; suyun ısınınca buharlaştığını not et.",
    adimlar: [
      { tip: "bilgi", baslik: "Hal değişimi", metin: "Maddeler ısı alınca erime ve buharlaşma, ısı verince donma ve yoğuşma olur. Buz erirken ortamdan ısı alır." },
      { tip: "secim", baslik: "Erime", metin: "Buzun suya dönüşmesine ne denir?", secenekler: ["Erime", "Donma", "Yoğuşma", "Süblimleşme"], dogru: 0 },
      { tip: "secim", baslik: "Donma", metin: "Suyun buza dönüşmesine ne denir?", secenekler: ["Donma", "Erime", "Buharlaşma", "Kaynama"], dogru: 0 },
      { tip: "secim", baslik: "Isı etkisi", metin: "Erime sırasında madde ne yapar?", secenekler: ["Isı alır", "Isı verir", "Isı almaz", "Rengi değişir"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Buz erirken ısı alır; buharlaşan su tekrar yoğuşabilir. Her maddenin erime ve kaynama noktası farklıdır. 🧊" }
    ]
  },
  {
    id: "golge-olusumu", ikon: "🕯️", ad: "Gölge Oluşumu", birim: 4,
    kazanim: "F.5.5.1.1", sure: "4 dk",
    malzeme: ["El feneri", "Opak bir cisim", "Beyaz kâğıt"],
    aciklama: "El fenerini duvara tut, önüne bir cisim koy; gölgenin oluşumunu ve boyunu değiştirerek incele.",
    adimlar: [
      { tip: "bilgi", baslik: "Işık doğrusal yayılır", metin: "Işık doğrusal bir yol izler. Işığın önüne opak (geçirgen olmayan) bir engel gelince arkasında gölge oluşur. Engel ışık kaynağına yaklaştıkça gölge büyür." },
      { tip: "secim", baslik: "Işık yolu", metin: "Işık nasıl yayılır?", secenekler: ["Doğrusal", "Dairesel", "Zikzaklı", "Duraksayarak"], dogru: 0 },
      { tip: "secim", baslik: "Gölge oluşumu", metin: "Gölge nasıl oluşur?", secenekler: ["Işığın opak cisme çarpıp geçememesiyle", "Işığın çok parlak olmasıyla", "Karanlık odada oluşmasıyla", "Havanın soğuk olmasıyla"], dogru: 0 },
      { tip: "secim", baslik: "Gölge boyu", metin: "Cisim ışık kaynağına yaklaşırsa gölge nasıl değişir?", secenekler: ["Büyür", "Küçülür", "Kaybolur", "Renklenir"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Işık doğrusal yayılır; opak cisim ışığı durdurur ve gölge oluşur. Gölgenin boyu cismin ışık kaynağına uzaklığına bağlıdır. 🔦" }
    ]
  },
  {
    id: "cevre-korumasi", ikon: "🌿", ad: "Çevremi Koruyorum", birim: 5,
    kazanim: "F.5.6.1.1", sure: "4 dk",
    malzeme: ["Kâğıt", "Kalem", "Çevre gözlemi için park"],
    aciklama: "Çevrende gördüğün olumlu ve olumsuz durumları listele; doğayı korumak için bir plan yap.",
    adimlar: [
      { tip: "bilgi", baslik: "Doğal ve yapay çevre", metin: "Doğal çevre kendiliğinden oluşmuştur; yapay çevre ise insanlar tarafından yapılır. Çevre kirliliği canlıların yaşamını tehdit eder; hepimiz kaynakları korumalıyız." },
      { tip: "secim", baslik: "Doğal çevre", metin: "Hangisi doğal çevredir?", secenekler: ["Orman", "Alışveriş merkezi", "Otobüs durağı", "Köprü"], dogru: 0 },
      { tip: "secim", baslik: "Kirlilik kaynağı", metin: "Hangisi çevre kirliliğine neden olur?", secenekler: ["Atıkları doğaya atmak", "Geri dönüşüm yapmak", "Ağaç dikmek", "Su tasarrufu yapmak"], dogru: 0 },
      { tip: "secim", baslik: "Kaynak koruma", metin: "Su tasarrufu için hangisi doğrudur?", secenekler: ["Diş fırçalarken suyu kapatmak", "Musluğu açık bırakmak", "Gereksiz yıkamak", "Çeşmeyi sonuna kadar açmak"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Doğal çevreyi ve kaynakları korumak hepimizin görevidir. Geri dönüşüm ve tasarruf, geleceğe bıraktığımız en güzel mirastır. 🌍" }
    ]
  },
  {
    id: "basit-devre", ikon: "🔌", ad: "Basit Elektrik Devresi", birim: 6,
    kazanim: "F.5.7.1.1", sure: "5 dk",
    malzeme: ["Pil", "Ampul", "Duy", "Bağlantı kabloları", "Anahtar"],
    aciklama: "Pil, ampul ve kabloları bağla; anahtar ile devreyi açıp kapatarak ampulü yak.",
    adimlar: [
      { tip: "bilgi", baslik: "Devre elemanları", metin: "Basit bir elektrik devresi pil, ampul, duy ve bağlantı kablolarından oluşur. Anahtar devreyi açar ve kapatır; kapalı devrede ampul yanar." },
      { tip: "secim", baslik: "Enerji kaynağı", metin: "Devrede enerjiyi sağlayan eleman hangisidir?", secenekler: ["Pil", "Ampul", "Kablo", "Duy"], dogru: 0 },
      { tip: "secim", baslik: "Açık devre", metin: "Anahtar açıkken devre için hangisi doğrudur?", secenekler: ["Ampul söner", "Ampul daha parlak yanar", "Devre tamamlanır", "Pil biter"], dogru: 0 },
      { tip: "secim", baslik: "Ampulün görevi", metin: "Devrede ampulün görevi nedir?", secenekler: ["Elektrik enerjisini ışık enerjisine çevirmek", "Enerji depolamak", "Devreyi açmak", "Kabloları bağlamak"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Kapalı devrede ampul yanar, açık devrede söner. Pil enerjiyi sağlar, ampul ışık üretir. Devre tamam! 💡" }
    ]
  }
];

DENEY["fen7"] = [
  {
    id: "teleskop-uzay", ikon: "🔭", ad: "Teleskopla Gökyüzü", birim: 0,
    kazanim: "F.7.1.1.1", sure: "4 dk",
    malzeme: ["Kâğıt", "Kalem", "Akşam gökyüzü gözlemi"],
    aciklama: "Gece gökyüzünü gözle; gördüğün yıldızları ve takımyıldızları not et.",
    adimlar: [
      { tip: "bilgi", baslik: "Yıldızlar ve galaksiler", metin: "Yıldızlar kendi ışığını üreten dev gaz küreleridir. Galaksimiz Samanyolu'nda milyarlarca yıldız vardır. Teleskop, uzak gök cisimlerini görmemizi sağlayan araçtır." },
      { tip: "secim", baslik: "Yıldız nedir?", metin: "Yıldızlar için hangisi doğrudur?", secenekler: ["Kendi ışığını üretir", "Işık yaymaz", "Sadece gündüz görünür", "Dünya'ya en yakın gezegendir"], dogru: 0 },
      { tip: "secim", baslik: "Galaksimiz", metin: "İçinde bulunduğumuz galaksinin adı nedir?", secenekler: ["Samanyolu", "Andromeda", "Galaksi X", "Satürn"], dogru: 0 },
      { tip: "secim", baslik: "Gözlem aracı", metin: "Uzaktaki gök cisimlerini incelemek için hangi araç kullanılır?", secenekler: ["Teleskop", "Mikroskop", "Kronometre", "Terazi"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Yıldızlar kendi ışığını üretir; teleskop gökyüzü keşfimizin en önemli aracıdır. Gözlem yapmak astronomide ilk adımdır. 🔭" }
    ]
  },
  {
    id: "hucre-gözlemi", ikon: "🧫", ad: "Hücreyi Gözlemliyorum", birim: 1,
    kazanim: "F.7.2.1.1", sure: "5 dk",
    malzeme: ["Mikroskop", "Lamel ve lam", "Soğan zarı", "İyot çözeltisi"],
    aciklama: "Soğan zarını lam üzerine koy, iyot ile boya; mikroskopta hücre çeperini ve çekirdeği gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Hücrenin yapısı", metin: "Hücre; hücre zarı, sitoplazma ve çekirdekten oluşur. Bitki hücresinde ayrıca hücre çeperi ve kloroplast bulunur. Mitoz ve mayoz bölünmelerle hücreler çoğalır." },
      { tip: "secim", baslik: "Hücre kısımları", metin: "Hücrenin yönetim merkezi hangisidir?", secenekler: ["Çekirdek", "Hücre zarı", "Sitoplazma", "Kloroplast"], dogru: 0 },
      { tip: "secim", baslik: "Bitki hücresi", metin: "Hangisi sadece bitki hücresinde bulunur?", secenekler: ["Hücre çeperi", "Hücre zarı", "Sitoplazma", "Çekirdek"], dogru: 0 },
      { tip: "secim", baslik: "Mayoz bölünme", metin: "Üreme hücrelerini hangi bölünme oluşturur?", secenekler: ["Mayoz", "Mitoz", "Fotosentez", "Döllenme"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Soğan zarında hücre çeperi ve çekirdek görülebilir. Hücreler bölünerek çoğalır; mitoz vücut, mayoz üreme hücrelerini üretir. 🔬" }
    ]
  },
  {
    id: "enerji-donusum", ikon: "⚡", ad: "Enerji Dönüşümleri", birim: 2,
    kazanim: "F.7.3.1.1", sure: "4 dk",
    malzeme: ["El feneri", "Top", "Sandalye", "Kâğıt"],
    aciklama: "Topu kaldırıp bırak; el fenerini yak. Potansiyel, kinetik ve ışık enerjisi dönüşümlerini not et.",
    adimlar: [
      { tip: "bilgi", baslik: "Enerji türleri", metin: "Hareket halindeki cisimlerin kinetik enerjisi, konumundan dolayı cisimlerin potansiyel enerjisi vardır. İş = Kuvvet × Yol ile hesaplanır; enerji bir türden diğerine dönüşür." },
      { tip: "secim", baslik: "Kinetik enerji", metin: "Hangisi kinetik enerjiye örnektir?", secenekler: ["Koşan bir sporcu", "Rafta duran kitap", "Asılı halı", "Kapalı kutu"], dogru: 0 },
      { tip: "secim", baslik: "Potansiyel enerji", metin: "Hangisi potansiyel enerjiye örnektir?", secenekler: ["Tepede duran kaya", "Yuvarlanan top", "Uçan kuş", "Akan nehir"], dogru: 0 },
      { tip: "secim", baslik: "Enerji dönüşümü", metin: "Fotosentezde güneş enerjisi hangi enerjiye dönüşür?", secenekler: ["Besin (kimyasal) enerjisine", "Işık enerjisine", "Ses enerjisine", "Hareket enerjisine"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Enerji kaybolmaz, sadece dönüşür: potansiyel → kinetik, kimyasal → ışık. Enerji dönüşümleri hayatın her yerindedir. 🔄" }
    ]
  },
  {
    id: "karisim-ayirma", ikon: "🧪", ad: "Karışımları Ayırıyorum", birim: 3,
    kazanim: "F.7.4.1.1", sure: "5 dk",
    malzeme: ["Su", "Kum", "Tuz", "Süzgeç", "Bardak"],
    aciklama: "Kum ve tuzu suya karıştır; süzgeçle kumu ayır, tuzu buharlaştırarak geri kazan.",
    adimlar: [
      { tip: "bilgi", baslik: "Saf madde ve karışım", metin: "Elementler tek tür atomdan, bileşikler ise birden çok element atomunun birleşmesinden oluşur. Karışımlar birden çok saf maddenin bir araya gelmesidir; süzme, mıknatıs ve buharlaştırma ile ayrılır." },
      { tip: "secim", baslik: "Element", metin: "Hangisi bir elementtir?", secenekler: ["Altın", "Su", "Tuz", "Hava"], dogru: 0 },
      { tip: "secim", baslik: "Bileşik", metin: "Hangisi bir bileşiktir?", secenekler: ["Su (H₂O)", "Altın (Au)", "Oksijen gazı (O₂)", "Demir (Fe)"], dogru: 0 },
      { tip: "secim", baslik: "Ayırma yöntemi", metin: "Demir tozunu kumdan ayırmak için hangisi kullanılır?", secenekler: ["Mıknatıs", "Süzgeç", "Buharlaştırma", "Yoğuşturma"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Karışımlar fiziksel yöntemlerle ayrılır: süzme, mıknatıs ve buharlaştırma. Elementler ve bileşikler ise saf maddelerdir. ⚗️" }
    ]
  },
  {
    id: "ayna-mercek", ikon: "🪞", ad: "Ayna ve Mercek", birim: 4,
    kazanim: "F.7.5.1.1", sure: "4 dk",
    malzeme: ["Düz ayna", "Büyüteç", "El feneri", "Beyaz kâğıt"],
    aciklama: "Aynada yansımayı gözle; büyüteci güneşe tutup kâğıt üzerinde ışığın toplandığını gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Yansıma ve kırılma", metin: "Işık pürüzsüz yüzeyde yansır; saydam maddeden geçerken kırılır. Düz ayna düz yansıma, çukur ayna ışığı toplar, tümsek ayna yayar. Mercekler ışığı kırarak görüntü oluşturur." },
      { tip: "secim", baslik: "Yansıma", metin: "Düz aynada oluşan görüntü için hangisi doğrudur?", secenekler: ["Cismin aynadaki görüntüsüdür", "Büyütülmüştür", "Ters çevrilmiştir", "Renk değiştirir"], dogru: 0 },
      { tip: "secim", baslik: "Mercek", metin: "Büyüteç hangi tür mercektir?", secenekler: ["İnce kenarlı (kalın mercek)", "Kalın kenarlı (ince mercek)", "Düz ayna", "Tümsek ayna"], dogru: 0 },
      { tip: "secim", baslik: "Opak madde", metin: "Hangisi ışığı hiç geçirmez?", secenekler: ["Opak madde", "Saydam madde", "Yarı saydam madde", "Renkli cam"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Işık yansır ve kırılır. Çukur ayna ve ince kenarlı mercek ışığı toplar; tümsek ayna ve kalın kenarlı mercek yayar. 🪞" }
    ]
  },
  {
    id: "bitki-buyume", ikon: "🌱", ad: "Bitkinin Büyümesi", birim: 5,
    kazanim: "F.7.6.1.1", sure: "6 dk",
    malzeme: ["Fasulye", "Islak pamuk", "Kap", "Kâğıt ve kalem"],
    aciklama: "Islak pamuğa fasulye koy; her gün sulayıp büyümesini gözle ve kaydet.",
    adimlar: [
      { tip: "bilgi", baslik: "Üreme ve büyüme", metin: "Canlılar eşeyli ya da eşeysiz ürer. Bitkiler tohumla ürer; tohum çimlenip büyür, gelişir ve yeni tohumlar oluşturur. Hayvanlar da doğar, büyür ve ürer." },
      { tip: "secim", baslik: "Üreme çeşidi", metin: "Tohumla üreme hangi üreme türüdür?", secenekler: ["Eşeyli üreme", "Eşeysiz üreme", "Bölünme", "Tomurcuklanma"], dogru: 0 },
      { tip: "secim", baslik: "Çimlenme", metin: "Tohumun çimlenmesi için hangisi şarttır?", secenekler: ["Su ve uygun sıcaklık", "Karanlık", "Kuru toprak", "Dondurucu soğuk"], dogru: 0 },
      { tip: "secim", baslik: "Büyüme evresi", metin: "Yavrunun büyüyüp olgunlaşmasına ne denir?", secenekler: ["Gelişme", "Beslenme", "Nefes alma", "Adaptasyon"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Fasulye su ve uygun sıcaklıkta çimlenir, büyür ve gelişir. Canlılar üreyip yaşam döngüsünü sürdürür. 🌱" }
    ]
  },
  {
    id: "seri-paralel", ikon: "💡", ad: "Seri ve Paralel Devre", birim: 6,
    kazanim: "F.7.7.1.1", sure: "5 dk",
    malzeme: ["2 ampul", "2 duy", "Pil", "Kablolar", "Anahtar"],
    aciklama: "Önce ampulleri seri, sonra paralel bağla; ampullerin parlaklığını karşılaştır.",
    adimlar: [
      { tip: "bilgi", baslik: "Seri ve paralel", metin: "Seri devrede ampuller tek hat üzerinde, paralel devrede ise kendi kollarında bağlanır. Seri devrede bir ampul çıkarılınca tüm devre çalışmaz; paralelde diğerleri çalışmaya devam eder." },
      { tip: "secim", baslik: "Seri devre", metin: "Seri devrede ampuller nasıl bağlanır?", secenekler: ["Tek hat üzerinde peş peşe", "Her biri kendi kolunda", "Anahtarsız", "Pilsiz"], dogru: 0 },
      { tip: "secim", baslik: "Paralel devre", metin: "Paralel devrede bir ampul yanarsa diğer ampul için ne olur?", secenekler: ["Işık vermeye devam eder", "Söner", "Patlar", "Yanıp söner"], dogru: 0 },
      { tip: "secim", baslik: "Parlaklık", metin: "Aynı pil ve ampullerle paralel devrede ampuller nasıl görünür?", secenekler: ["Daha parlak", "Daha sönük", "Aynı", "Hiç yanmaz"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Paralel devrede her ampul kendi kolundan akım alır ve daha parlak yanar. Seri devrede ampuller sönük görünür, biri çıkınca devre kesilir. ⚡" }
    ]
  }
];

DENEY["fen8"] = [
  {
    id: "mevsim-modeli", ikon: "🌈", ad: "Mevsim Modeli", birim: 0,
    kazanim: "F.8.1.1.1", sure: "5 dk",
    malzeme: ["Top", "Kalem", "El feneri", "Kâğıt"],
    aciklama: "Topu eğik eksenle el feneri (Güneş) çevresinde gezdir; aydınlanan bölgenin değişimini gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Mevsimler neden oluşur?", metin: "Mevsimler, Dünya'nın eksen eğikliği ve Güneş etrafındaki dolanımı yüzünden oluşur. Eksen eğikliği yüzünden Güneş ışınlarının geliş açısı ve gündüz süresi yıl boyunca değişir." },
      { tip: "secim", baslik: "Mevsimlerin nedeni", metin: "Mevsimlerin oluşmasında hangisi etkilidir?", secenekler: ["Eksen eğikliği ve Güneş etrafında dolanma", "Ay'ın fazları", "Yıldızların parlaklığı", "Denizlerin tuzluluğu"], dogru: 0 },
      { tip: "secim", baslik: "İklim", metin: "Bir bölgede uzun yıllar boyunca görülen ortalama hava durumuna ne denir?", secenekler: ["İklim", "Hava durumu", "Yağış", "Rüzgâr"], dogru: 0 },
      { tip: "secim", baslik: "Hava olayı", metin: "Bugün hava 18°C ve yağışlı. Bu hangisine örnektir?", secenekler: ["Hava olayı", "İklim", "Mevsim", "Eksen eğikliği"], dogru: 0 },
      { tip: "bilgi", baslik: "Model tamam", metin: "Eksen eğikliği sayesinde Güneş ışınlarının açısı değişir ve mevsimler oluşur. İklim uzun dönem, hava olayı kısa dönemdir. 🌤" }
    ]
  },
  {
    id: "kalitim-oyunu", ikon: "🧬", ad: "Kalıtımı Keşfediyorum", birim: 1,
    kazanim: "F.8.2.1.1", sure: "5 dk",
    malzeme: ["Kâğıt", "Kalem", "Raket ve top örnekleri (bezelye) çizimleri"],
    aciklama: "Bir özelliğin anne ve babadan yavruya nasıl geçtiğini tablo üzerinde çöz.",
    adimlar: [
      { tip: "bilgi", baslik: "DNA ve gen", metin: "DNA, kalıtsal bilgiyi taşıyan moleküldür; genler ve kromozomlar DNA üzerinde düzenlenir. Özellikler (saç rengi, boy) genlerle anneden ve babadan yavruya aktarılır." },
      { tip: "secim", baslik: "Kalıtım birimi", metin: "Kalıtsal özellikleri taşıyan en küçük birim hangisidir?", secenekler: ["Gen", "Sitoplazma", "Mitokondri", "Hücre zarı"], dogru: 0 },
      { tip: "secim", baslik: "Mutasyon", metin: "DNA'da meydana gelen kalıcı değişikliğe ne denir?", secenekler: ["Mutasyon", "Adaptasyon", "Fotosentez", "Büyüme"], dogru: 0 },
      { tip: "secim", baslik: "Adaptasyon", metin: "Canlının yaşama uyum sağlamasına ne denir?", secenekler: ["Adaptasyon", "Mutasyon", "Döllenme", "Solunum"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Genler özellikleri kuşaktan kuşağa taşır. Mutasyon kalıcı değişim, adaptasyon ise yaşama uyumdur. 🧬" }
    ]
  },
  {
    id: "sivi-basinci", ikon: "🎈", ad: "Sıvı Basıncı", birim: 2,
    kazanim: "F.8.3.1.1", sure: "4 dk",
    malzeme: ["Boş plastik şişe", "Su", "İğne (delik için)", "Leğen"],
    aciklama: "Şişenin alt, orta ve üst bölümüne küçük delikler aç; su fışkırmalarının uzunluğunu karşılaştır.",
    adimlar: [
      { tip: "bilgi", baslik: "Basınç", metin: "Basınç = Kuvvet / Yüzey alanı. Katılar kuvveti yüzeye, sıvılar ve gazlar bulundukları kabın her yönüne iletir. Sıvı basıncı derinlik arttıkça artar; yoğunlukla da artar." },
      { tip: "secim", baslik: "Derinlik etkisi", metin: "Derinlik arttıkça sıvı basıncı nasıl değişir?", secenekler: ["Artar", "Azalır", "Değişmez", "Sıfır olur"], dogru: 0 },
      { tip: "secim", baslik: "Basınç formülü", metin: "Katı basıncı nasıl hesaplanır?", secenekler: ["Kuvvet / Yüzey alanı", "Kuvvet × Yüzey alanı", "Kütle / Hacim", "Yol / Zaman"], dogru: 0 },
      { tip: "secim", baslik: "Gaz basıncı", metin: "Atmosfer basıncı yükseklere çıkıldıkça nasıl değişir?", secenekler: ["Azalır", "Artar", "Değişmez", "İki katına çıkar"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Şişenin alt deliğinden su en uzağa fışkırır çünkü derinlik arttıkça sıvı basıncı artar. Basınç kuvvet ve yüzey alanına bağlıdır. ⚙" }
    ]
  },
  {
    id: "asit-baz-testi", ikon: "🧪", ad: "Asit mi, Baz mı?", birim: 3,
    kazanim: "F.8.4.1.1", sure: "5 dk",
    malzeme: ["Kırmızı lahana suyu", "Limon", "Sirke", "Sabunlu su", "Bardaklar"],
    aciklama: "Kırmızı lahana suyuna limon ve sabunlu su ekle; renk değişiminden asit-baz ayrımını gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Asit ve baz", metin: "Asitler ekşi, bazlar acıdır. pH cetvelinde 0-7 asit, 7 nötr, 7-14 baz bölgesidir. Asit ve baz birleşince tuz ve su oluşur (nötrleşme). Periyodik tablo elementleri düzenler." },
      { tip: "secim", baslik: "Asit örneği", metin: "Hangisi asit bir maddedir?", secenekler: ["Limon suyu", "Sabunlu su", "Diş macunu", "Cam"], dogru: 0 },
      { tip: "secim", baslik: "Baz örneği", metin: "Hangisi baz bir maddedir?", secenekler: ["Sabunlu su", "Sirke", "Portakal", "Tuz ruhu"], dogru: 0 },
      { tip: "secim", baslik: "Nötrleşme", metin: "Asit ve bazın birleşmesiyle ne oluşur?", secenekler: ["Tuz ve su", "Şeker", "Oksijen", "Kum"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Lahana suyu asitlerde kırmızı-pembe, bazlarda yeşil-mavi renk alır. pH değeri asitlik ve bazlık hakkında bilgi verir. 🔬" }
    ]
  },
  {
    id: "kaldirac", ikon: "⚙️", ad: "Kaldıraç Modeli", birim: 4,
    kazanim: "F.8.5.1.1", sure: "4 dk",
    malzeme: ["Cetvel", "Silgi (destek)", "Küçük ağırlık", "Kalem"],
    aciklama: "Cetveli silginin üzerine koy; desteğin yerini değiştirerek kuvvet kazancını gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Basit makineler", metin: "Kaldıraç, makara, palanga, eğik düzlem ve dişliler basit makinelerdir. Kuvvetten veya yoldan kazanç sağlarlar ama işten kazanç sağlamazlar." },
      { tip: "secim", baslik: "Kuvvet kazancı", metin: "Kaldıraçta destek nereye konursa kuvvetten kazanç artar?", secenekler: ["Yüke yaklaştıkça", "Uzağa kondukça", "Ortaya kondukça", "Kaldırıldıkça"], dogru: 0 },
      { tip: "secim", baslik: "Makara", metin: "Sabit makara hangi özelliği sağlar?", secenekler: ["Yön değiştirme", "Kuvvetten iki kat kazanç", "İşten kazanç", "Hız azaltma"], dogru: 0 },
      { tip: "secim", baslik: "Eğik düzlem", metin: "Eğik düzlem neyi kolaylaştırır?", secenekler: ["Yükü daha az kuvvetle çekmeyi", "Yükü yükseltmeyi durduran", "İşten kazanç sağlamayı", "Sürtünmeyi yok etmeyi"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Basit makineler kuvvetten veya yoldan kazanç sağlar; hiçbiri işten kazanç sağlamaz. Doğru kaldıraç tasarımı işi kolaylaştırır. ⚙️" }
    ]
  },
  {
    id: "besin-zinciri", ikon: "🌿", ad: "Besin Zinciri", birim: 5,
    kazanim: "F.8.6.1.1", sure: "4 dk",
    malzeme: ["Kâğıt", "Kalem", "Ok çizimleri"],
    aciklama: "Bitki → çekirge → kurbağa → yılan ok sıralamasını çiz; enerjinin aktarım yönünü göster.",
    adimlar: [
      { tip: "bilgi", baslik: "Fotosentez ve enerji", metin: "Bitkiler fotosentezle güneş enerjisini besin enerjisine çevirir. Besin zincirinde enerji üreticiden tüketiciye aktarılır. Solunum, besinlerdeki enerjiyi kullanılabilir enerjiye çevirir." },
      { tip: "secim", baslik: "Fotosentez", metin: "Bitkiler hangi olayla besin üretir?", secenekler: ["Fotosentez", "Solunum", "Büyüme", "Uyku"], dogru: 0 },
      { tip: "secim", baslik: "Üretici", metin: "Besin zincirinin başlangıcında kim bulunur?", secenekler: ["Üreticiler (bitkiler)", "Otçullar", "Etçiller", "Ayrıştırıcılar"], dogru: 0 },
      { tip: "secim", baslik: "Enerji aktarımı", metin: "Besin zincirinde enerji hangi yönde aktarılır?", secenekler: ["Üreticiden tüketiciye", "Tüketiciden üreticiye", "Rastgele", "Sadece toprakta"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Enerji, Güneş'ten üreticilere, oradan tüketicilere akar. Sürdürülebilirlik için doğal kaynakları korumak şarttır. 🌍" }
    ]
  },
  {
    id: "surtunme-yuk", ikon: "🔋", ad: "Sürtünmeyle Elektriklenme", birim: 6,
    kazanim: "F.8.7.1.1", sure: "4 dk",
    malzeme: ["Plastik cetvel", "Küçük kâğıt parçaları", "Yünlü kumaş"],
    aciklama: "Cetveli yünlü kumaşa sürt, küçük kâğıt parçalarına yaklaştır; çekim etkisini gözle.",
    adimlar: [
      { tip: "bilgi", baslik: "Elektrik yükleri", metin: "Nesneler sürtünme, dokunma ve etki ile yüklenebilir. Aynı yüklü cisimler birbirini iter, zıt yüklü cisimler birbirini çeker. Elektrik akımı, elektrik enerjisinin iletkenler üzerinde hareketidir." },
      { tip: "secim", baslik: "Sürtünmeyle yüklenme", metin: "Cetvel yünlü kumaşa sürtülünce ne olur?", secenekler: ["Elektrik yükü kazanır", "Isınır", "Rengi değişir", "Manyetik olur"], dogru: 0 },
      { tip: "secim", baslik: "Benzer yükler", metin: "Aynı tür yüklü cisimler birbirini nasıl etkiler?", secenekler: ["İter", "Çeker", "Etkileşmez", "Yapışır"], dogru: 0 },
      { tip: "secim", baslik: "İletken", metin: "Elektrik akımını ileten madde hangisidir?", secenekler: ["Bakır", "Plastik", "Tahta", "Cam"], dogru: 0 },
      { tip: "bilgi", baslik: "Deney sonucu", metin: "Sürtünen cetvel elektrik yükü kazanır ve kâğıtları çeker. Benzer yükler iter, zıt yükler çeker; metaller iletkendir. ⚡" }
    ]
  }
];

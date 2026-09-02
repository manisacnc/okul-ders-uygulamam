/* ===== KODLAMA ATÖLYESİ (interaktif, adım adım) =====
   KODLAMA["dersId"] = [ atölyeler ]
   adimlar: tip "bilgi" (İleri ile geçilir) veya "secim" (doğru şık seçilir)
   Bilişim Teknolojileri (BT.5/6) müfredatına bağlıdır. */

var KODLAMA = {};

KODLAMA["bty5"] = [
  {
    id: "bt-bilgi", ikon: "🖥️", ad: "Bilişim Teknolojileri ve Ben", birim: 0,
    kazanim: "BT.5.1.1.1", sure: "5 dk",
    aciklama: "Bilgisayar, tablet ve telefonların hayatımızdaki yerini ve kullanım alanlarını öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Bilişim teknolojileri", metin: "Bilgisayar, tablet, akıllı telefon ve televizyon bilişim teknolojileridir. Okulda ödev yazmak, araştırma yapmak ve iletişim kurmak için kullanılır. Doğru ve ölçülü kullanmak önemlidir." },
      { tip: "secim", baslik: "Cihaz örneği", metin: "Hangisi bir bilişim teknolojisi cihazıdır?", secenekler: ["Tablet", "Kalem", "Defter", "Bardak"], dogru: 0 },
      { tip: "secim", baslik: "Kullanım alanı", metin: "Bilişim teknolojileri okulda hangi işe yarar?", secenekler: ["Ödev ve araştırma", "Oyun bağımlılığı", "Zaman kaybı", "Sadece izleme"], dogru: 0 },
      { tip: "secim", baslik: "Ölçülü kullanım", metin: "Ekran karşısında uzun süre kalmak için ne yapmalıyız?", secenekler: ["Molalar vermeliyiz", "Hiç ara vermemeliyiz", "Gece geç saatlere kadar kalmalıyız", "Yemek yerken kullanmalıyız"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Bilişim teknolojileri doğru kullanıldığında hayatı kolaylaştırır. Ölçülü ve amaçlı kullan, molalar ver! 🎉" }
    ]
  },
  {
    id: "internet-ag", ikon: "🌐", ad: "Ağ ve İnternet", birim: 1,
    kazanim: "BT.5.2.1.1", sure: "5 dk",
    aciklama: "Ağ bağlantısı ve internetin nasıl çalıştığını, güvenli web adreslerini öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "İnternet nedir?", metin: "İnternet, bilgisayarları birbirine bağlayan dev bir ağdır. Tarayıcılar (Chrome, Edge) web sayfalarını açmamızı sağlar. Her sayfanın kendine özgü bir adresi vardır." },
      { tip: "secim", baslik: "Bağlantı aracı", metin: "Bilgisayarların internete bağlanmasını hangisi sağlar?", secenekler: ["Modem ve ağ bağlantısı", "Klavye", "Ekran", "Kulaklık"], dogru: 0 },
      { tip: "secim", baslik: "Tarayıcı", metin: "Hangisi bir web tarayıcısıdır?", secenekler: ["Chrome", "Word", "Excel", "Paint"], dogru: 0 },
      { tip: "secim", baslik: "Güvenli site", metin: "Güvenli bir web sitesinin adresi nasıl başlar?", secenekler: ["https://", "htp://", "www.www", "abc://"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "İnternet ağ üzerinden çalışır; tarayıcı sayfaları açar. https ile başlayan adresler daha güvenlidir. 🌐" }
    ]
  },
  {
    id: "arama-bilgi", ikon: "🔍", ad: "Doğru Bilgiye Ulaşma", birim: 2,
    kazanim: "BT.5.3.1.1", sure: "5 dk",
    aciklama: "Arama motorlarıyla doğru bilgiyi bulmayı ve güvenilir kaynakları ayırt etmeyi öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Arama motoru", metin: "Google gibi arama motorları, yazdığın kelimelerle ilgili sayfaları listeler. Kısa ve net anahtar kelimeler en iyi sonucu verir. Bulduğun bilgiyi en az iki kaynaktan doğrula." },
      { tip: "secim", baslik: "Anahtar kelime", metin: "'Ankara'nın başkenti' hakkında en iyi arama hangisidir?", secenekler: ["Türkiye başkent Ankara", "a b c d", "ne var ne yok", "ankara ankara"], dogru: 0 },
      { tip: "secim", baslik: "Güvenilir kaynak", metin: "Hangisi daha güvenilir bir kaynaktır?", secenekler: ["Resmi eğitim sitesi", "Anonim blog yazısı", "Bilinmeyen forum", "Rastgele paylaşım"], dogru: 0 },
      { tip: "secim", baslik: "Kaynak gösterme", metin: "Bir yazıdan bilgi aldığında ne yapmalısın?", secenekler: ["Kaynağını belirt", "Kendin yazmış gibi sun", "Adını değiştir", "Silmek gerekmez"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Kısa anahtar kelimelerle ara, güvenilir kaynakları seç ve bilgiyi çapraz kontrol et. Doğru bilgi, güçtür! 🔍" }
    ]
  },
  {
    id: "guvenlik-etik", ikon: "🛡️", ad: "İnternette Güvenlik ve Etik", birim: 3,
    kazanim: "BT.5.4.1.1", sure: "5 dk",
    aciklama: "Kişisel bilgileri koruma, teknoloji bağımlılığı ve siber zorbalıktan korunmayı öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Kişisel veriler", metin: "Adres, okul adı, telefon numarası ve şifreler kişisel verilerdir. Bu bilgileri tanımadığın kişilerle asla paylaşma. Güçlü şifreler (harf + rakam + simge) hesaplarını korur." },
      { tip: "secim", baslik: "Kişisel bilgi", metin: "Hangisi kişisel bilgidir?", secenekler: ["Ev adresin", "En sevdiğin renk", "Favori mevsim", "Hobi listesi"], dogru: 0 },
      { tip: "secim", baslik: "Güçlü şifre", metin: "Hangisi daha güçlü bir şifredir?", secenekler: ["Eym3n!2024", "123456", "abcd", "qwerty"], dogru: 0 },
      { tip: "secim", baslik: "Siber zorbalık", metin: "Çevrimiçi zorbalığa uğrarsan ne yapmalısın?", secenekler: ["Bir yetişkine söyle", "Aynısını yap", "Mesajı paylaş", "Kimseye söyleme"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Kişisel bilgileri paylaşma, güçlü şifre kullan, zorbalıkta yetişkine haber ver. İnternette nazik ol! 🛡️" }
    ]
  },
  {
    id: "kelime-islemci", ikon: "📝", ad: "Kelime İşlemciyle Yazıyorum", birim: 4,
    kazanim: "BT.5.5.1.1", sure: "5 dk",
    aciklama: "Kelime işlemci programında metin yazmayı, biçimlendirmeyi ve kaydetmeyi öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Kelime işlemci", metin: "Word gibi programlar kelime işlemci olarak adlandırılır. Metin yazabilir, yazı tipini ve rengini değiştirebilir, kalın ve italik yapabilirsin. Belgeni kaydetmeyi unutma!" },
      { tip: "secim", baslik: "Kalın yazı", metin: "Yazıyı kalın yapmak için hangi simge kullanılır?", secenekler: ["B (Bold)", "I", "U", "A"], dogru: 0 },
      { tip: "secim", baslik: "Belge kaydetme", metin: "Yazdığın belgeyi kaydetmek için hangi kısayol kullanılır?", secenekler: ["Ctrl+S", "Ctrl+P", "Ctrl+X", "Ctrl+Z"], dogru: 0 },
      { tip: "secim", baslik: "Yazı boyutu", metin: "Yazının boyutunu değiştirmek için hangisi kullanılır?", secenekler: ["Yazı tipi boyutu (12, 14...)", "Renk paleti", "Resim ekle", "Sayfa yönü"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Kelime işlemciyle yaz, kalınlaştır, boyutlandır ve Ctrl+S ile kaydet. Belgen her zaman hazır! 📝" }
    ]
  },
  {
    id: "sunum-hazirlama", ikon: "📊", ad: "Sunum Hazırlıyorum", birim: 5,
    kazanim: "BT.5.6.1.1", sure: "5 dk",
    aciklama: "Sunum programında slayt hazırlamayı, başlık ve resim eklemeyi öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Sunum nedir?", metin: "Sunum, bir konuyu slaytlarla anlatma aracıdır. Her slaytta kısa başlık ve önemli bilgiler bulunur. Çok fazla yazı yerine görsel kullanmak dinleyicinin dikkatini çeker." },
      { tip: "secim", baslik: "Sunum programı", metin: "Hangisi sunum programıdır?", secenekler: ["PowerPoint", "Paint", "Not Defteri", "Hesap Makinesi"], dogru: 0 },
      { tip: "secim", baslik: "Slayt sayfası", metin: "Sunumdaki tek sayfaya ne denir?", secenekler: ["Slayt", "Değer", "Hücre", "Satır"], dogru: 0 },
      { tip: "secim", baslik: "İyi slayt", metin: "Başarılı bir sunum slaytı nasıl olmalıdır?", secenekler: ["Kısa başlık ve özet bilgi", "Bir sayfa dolusu yazı", "Sadece ses", "Okunaksız renkler"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Slayt ekle, başlık ve görsel koy, kısa ve öz anlat. Sunumun harika olacak! 📊" }
    ]
  }
];

KODLAMA["bty6"] = [
  {
    id: "algoritma", ikon: "🧠", ad: "Algoritma Kuruyorum", birim: 0,
    kazanim: "BT.6.2.1.2", sure: "5 dk",
    aciklama: "Günlük hayattaki bir problemi adım adım sıralayıp algoritma kurmayı öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Algoritma nedir?", metin: "Algoritma, bir problemin çözümü için sıralı adımlardır. Her adım net ve anlaşılır olmalıdır. Örneğin 'çay yapmak' bir algoritma ile anlatılabilir." },
      { tip: "secim", baslik: "İlk adım", metin: "Bilgisayarı açmak için hangi sıra doğrudur?", secenekler: ["Fişi tak → açma tuşuna bas", "Açma tuşuna bas → fişi tak", "Ekranı kapat → fişi tak", "Hepsi aynı"], dogru: 0 },
      { tip: "secim", baslik: "Adım sırası", metin: "Bir algoritma için hangisi en önemlidir?", secenekler: ["Adımların sıralı olması", "Adımların uzun olması", "Adımların renkli olması", "Adımların hızlı olması"], dogru: 0 },
      { tip: "secim", baslik: "Algoritma örneği", metin: "Aşağıdakilerden hangisi bir algoritmadır?", secenekler: ["Diş fırçalama adımları", "Bir resim", "Bir melodi", "Bir renk"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Algoritma = sıralı ve net adımlar! Aynı problemi farklı adımlarla çözmek de mümkündür. 🎉" }
    ]
  },
  {
    id: "akis-semasi", ikon: "🔀", ad: "Akış Şeması Sembolleri", birim: 0,
    kazanim: "BT.6.2.1.2", sure: "5 dk",
    aciklama: "Akış şemasının elmas, dikdörtgen ve oval sembollerini tanı.",
    adimlar: [
      { tip: "bilgi", baslik: "Semboller konuşur", metin: "Akış şemasında elmas karar/koşul verir, dikdörtgen işlemi, oval başlangıç ve bitişi gösterir. Oklar akışın yönünü belirler." },
      { tip: "secim", baslik: "Karar sembolü", metin: "Bir koşul ('hava yağmurlu mu?') hangi şekille gösterilir?", secenekler: ["Elmas", "Dikdörtgen", "Oval", "Daire"], dogru: 0 },
      { tip: "secim", baslik: "İşlem sembolü", metin: "Bir hesaplama işlemi hangi şekilde gösterilir?", secenekler: ["Dikdörtgen", "Elmas", "Üçgen", "Yıldız"], dogru: 0 },
      { tip: "secim", baslik: "Başlangıç ve bitiş", metin: "Akış şemasının başlangıç ve bitişi hangi şekille gösterilir?", secenekler: ["Oval", "Kare", "Elmas", "Ok"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Elmas karar, dikdörtgen işlem, oval başlangıç-bitiş. Akış yönü her zaman oklarla gösterilir. 🎉" }
    ]
  },
  {
    id: "blok-programlama", ikon: "🧩", ad: "Blok Tabanlı Programlama", birim: 1,
    kazanim: "BT.6.2.1.3", sure: "6 dk",
    aciklama: "Döngü ve koşul bloklarını kullanarak program mantığını kur.",
    adimlar: [
      { tip: "bilgi", baslik: "Bloklar birleşir", metin: "Blok tabanlı programlamada (örneğin Scratch) kodlar, puzzle gibi birleşen bloklarla yazılır. 'Tekrarla' bloğu döngü, 'eğer ise' bloğu koşuldur." },
      { tip: "secim", baslik: "Döngü bloğu", metin: "'Merhaba' mesajını 10 kez yazdırmak için hangi blok kullanılır?", secenekler: ["Tekrarla (döngü)", "Eğer ise", "Başla", "Durdur"], dogru: 0 },
      { tip: "secim", baslik: "Koşul bloğu", metin: "'Sınavdan 70 alırsam rozet kazan' ifadesi hangi yapıya örnektir?", secenekler: ["Koşul", "Döngü", "Değişken", "Olay"], dogru: 0 },
      { tip: "secim", baslik: "Değişken", metin: "Oyundaki puanı saklamak için hangisi kullanılır?", secenekler: ["Değişken", "Ses bloğu", "Arka plan", "Kalem bloğu"], dogru: 0 },
      { tip: "secim", baslik: "Olay", metin: "'Yeşil bayrağa tıklanınca oyun başlasın' cümlesindeki yapı nedir?", secenekler: ["Olay", "Döngü", "Koşul", "Değişken"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Döngü tekrarı sağlar, koşul karar verir, değişken veriyi saklar, olay tetiklenmeyi sağlar. 🎉" }
    ]
  },
  {
    id: "dijital-guvenlik", ikon: "🔐", ad: "Dijital Vatandaşlık ve Güvenlik", birim: 5,
    kazanim: "BT.6.1.1.3", sure: "5 dk",
    aciklama: "Parola güvenliği, telif hakları ve güvenli paylaşım kurallarını öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Dijital kimliğin", metin: "İnternette yaptığın her işlem seni temsil eder. Güçlü parolalar (harf + rakam + simge) hesaplarını korur. Başkasının özel bilgisini izinsiz paylaşmak hem saygısızlık hem de suçtur." },
      { tip: "secim", baslik: "Güçlü parola", metin: "Hangisi daha güçlü bir paroladır?", secenekler: ["Eym3n!2024", "123456", "abcd", "parola"], dogru: 0 },
      { tip: "secim", baslik: "Telif hakkı", metin: "İnternetten indirdiğin bir müziği izinsiz kullanmak için ne yapmalısın?", secenekler: ["Sahibinden izin al", "Serbestçe kullan", "Üstünü değiştir", "Arkadaşına gönder"], dogru: 0 },
      { tip: "secim", baslik: "Güvenli paylaşım", metin: "Kişisel bilgilerini (adres, okul) kiminle paylaşmalısın?", secenekler: ["Yalnızca güvendiğin kişilerle", "Tüm tanımadıklarla", "Herkesle", "Sadece oyun sitelerinde"], dogru: 0 },
      { tip: "secim", baslik: "Siber zorbalık", metin: "Çevrimiçi zorbalığa uğrarsan ilk yapman gereken ne olmalı?", secenekler: ["Bir yetişkine söyle", "Aynısını yap", "Mesajı paylaş", "Hiçbir şey yapma"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Güçlü parola kullan, izin almadan paylaşma, zorbalıkta yetişkine haber ver. Dijital dünyada nazik ol! 🎉" }
    ]
  },
  {
    id: "arama-motoru", ikon: "🔍", ad: "Arama Motoru Dedektifi", birim: 7,
    kazanim: "BT.6.4.1.2", sure: "5 dk",
    aciklama: "Anahtar kelime seçerek doğru ve güvenilir bilgiye nasıl ulaşılır öğren.",
    adimlar: [
      { tip: "bilgi", baslik: "Doğru anahtar kelime", metin: "Arama motorlarında kısa ve doğru anahtar kelimeler en iyi sonucu verir. Bulduğun bilgiyi en az iki güvenilir kaynaktan doğrulamalısın." },
      { tip: "secim", baslik: "Anahtar kelime", metin: "'Atatürk'ün hayatı' yerine hangi arama daha iyi sonuç verir?", secenekler: ["Atatürk hayatı 1881 1938", "Atatürk a", "aa aaa", "kurtuluş"], dogru: 0 },
      { tip: "secim", baslik: "Güvenilir kaynak", metin: "Hangisi daha güvenilir bir bilgi kaynağıdır?", secenekler: ["Resmi eğitim sitesi (.edu)", "Anonim blog", "Bilinmeyen forum", "Rastgele paylaşım"], dogru: 0 },
      { tip: "secim", baslik: "Bilgi doğrulama", metin: "Bulduğun bilginin doğru olduğundan nasıl emin olursun?", secenekler: ["Farklı kaynaklarla karşılaştır", "Hemen inan", "Bir kez okuma yeter", "Arkadaşına sor"], dogru: 0 },
      { tip: "bilgi", baslik: "Atölye tamam", metin: "Kısa ve net anahtar kelime, güvenilir kaynak ve çapraz kontrol: arama motoru dedektifi artık sensin! 🎉" }
    ]
  }
];

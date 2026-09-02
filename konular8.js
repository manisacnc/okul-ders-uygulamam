/* Konu İçerikleri - 8. Sınıf Ders Notları
   Mini işaretleme: "## başlık" bölüm başlığı, "- madde" madde, düz satır paragraf. */
var DETAY8 = {

/* ===================== MATEMATİK ===================== */
mat8: [
// 0 Çarpanlar ve Katlar
"## Asal Çarpanlar\nBir sayıyı asal sayıların çarpımı olarak yazmaya asal çarpanlara ayırma denir.\n- 24 = 2³ × 3\n- Asal sayılar: 2, 3, 5, 7, 11, 13, 17, 19...\n## EBOB (En Büyük Ortak Bölen)\nİki sayıyı birlikte bölen en büyük sayıdır.\n- 24 ve 36'nın EBOB'u = 12.\n- Asal çarpanlara ayır, ortak olanların en küçük üslülerini çarp.\n## EKOK (En Küçük Ortak Kat)\nİki sayının ortak katlarının en küçüğüdür.\n- 4 ve 6'nın EKOK'u = 12.\n- Asal çarpanlara ayır, ortak ve ortak olmayanların en büyük üslülerini çarp.\n## Ardışık Sayılar\nArdışık doğal sayılar: n, n+1, n+2 ... (Örnek: 5, 6, 7)\n- Ardışık iki sayının EBOB'u 1'dir.\n✏️ EBOB \"bölen\" (paylaştırma, gruplama), EKOK \"kat\" (buluşma, tekrar) problemlerinde kullanılır.",

// 1 Üslü İfadeler
"## Üslü Sayıların İşlemleri\n- Çarpma: a^m × a^n = a^(m+n) (tabanlar aynıysa)\n- Bölme: a^m ÷ a^n = a^(m−n)\n- Üssün üssü: (a^m)^n = a^(m×n)\n## Özel Kurallar\n- a⁰ = 1 (a ≠ 0); a¹ = a; 1^n = 1\n- Negatif üs: a^(−n) = 1/a^n\n## 10'un Kuvvetleri\n- 10³ = 1000, 10⁶ = 1 000 000 (üs kadar sıfır)\n## Bilimsel Gösterim\n1 ≤ a < 10 ve n tam sayı olmak üzere a × 10^n biçimidir.\n- 0,000045 = 4,5 × 10⁻⁵\n- 720 000 = 7,2 × 10⁵\n✏️ Çarparken üsleri topla, bölerken çıkar; bilimsel gösterimde virgülden önce tek rakam kalır.",

// 2 Karekök
"## Karekök Nedir?\nKaresi verilen sayıya eşit olan sayıdır. √ sembolüyle gösterilir.\n- √25 = 5 (çünkü 5² = 25)\n- √0 = 0, √1 = 1\n## Tam Kare Sayılar\n0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100... tam karedir.\n## Karekök Dışına Çıkarma\n√48 = √(16×3) = 4√3 (tam kare çarpan dışarı çıkar).\n## Kareköklerde İşlemler\n- Toplama/çıkarma: kök içleri aynıysa katsayılar işlem görür: 3√2 + 5√2 = 8√2\n- Çarpma: √a × √b = √(a×b)\n- Bölme: √a ÷ √b = √(a÷b)\n## Sayı Doğrusunda Yerleştirme\n√2 ≈ 1,41 olduğu için 1 ile 2 arasındadır.\n✏️ Kök dışına çıkarırken sayıyı asal çarpanlarına ayır; tam kareleri dışarı al.",

// 3 Veri Analizi
"## Grafik Okuma\nSütun, çizgi ve daire grafikleri okunur ve yorumlanır.\n- Grafikten en çok/en az, toplam, fark ve oran çıkarılır.\n## Veri Analizi\n- Aritmetik ortalama: toplam ÷ adet.\n- Medyan: sıralı verinin ortası (çift sayıda ise ortadaki iki değerin ortalaması).\n- Mod: en çok tekrar eden değer.\n- Açıklık: en büyük − en küçük.\n## Verileri Karşılaştırma\nİki veri grubu ortalamaları, medyanları ve açıklıklarıyla karşılaştırılır.\n✏️ Açıklık verilerin dağılımını, ortalama genel seviyeyi gösterir.",

// 4 Olasılık
"## Olasılık Nedir?\nBir olayın gerçekleşme ihtimalinin sayısal değeridir.\n- Olasılık = İstenen durum sayısı / Tüm durumların sayısı.\n- 0 ile 1 arasındadır: imkânsız olay 0, kesin olay 1.\n## Zar ve Para\n- Zar atışında 6 gelme olasılığı = 1/6.\n- Para atışında yazı gelme olasılığı = 1/2.\n- Çift sayı gelme olasılığı = 3/6 = 1/2 (2,4,6).\n## Olay Türleri\n- Kesin olay: olasılığı 1. İmkânsız olay: olasılığı 0.\n- Eş olasılıklı olaylar: tüm sonuçların şansı eşittir.\n✏️ Olasılıkta \"tüm olası durumlar\"ı saymak şarttır; soruyu dikkatle oku.",

// 5 Cebirsel İfadeler ve Özdeşlikler
"## Özdeşlik\nDeğişkenin her değeri için doğru olan eşitliklerdir.\n- İki kare farkı: a² − b² = (a − b)(a + b)\n- Tam kare: (a + b)² = a² + 2ab + b²\n- Tam kare: (a − b)² = a² − 2ab + b²\n## Çarpanlara Ayırma\nİfadeyi çarpım biçiminde yazmadır.\n- Ortak çarpan parantezi: 6x + 9 = 3(2x + 3)\n- İki kare farkından: x² − 9 = (x − 3)(x + 3)\n✏️ Özdeşlik, denklemden farklıdır: özdeşlik her değerde doğrudur, denklem belirli değerlerde.",

// 6 Doğrusal Denklemler
"## Denklem ve Grafik\ny = ax + b biçimindeki denklemler doğrusal denklemlerdir; grafikleri doğrudur.\n## Koordinat Sistemi\nYatay eksen x, dikey eksen y'dir; noktalar (x, y) ile gösterilir.\n- Orijin: (0,0) noktası.\n## Eğim\nBir doğrunun dikliğidir; eğim = dikey değişim / yatay değişim.\n- y = ax + b denkleminde a sayısı eğimdir.\n- Sağa yatık doğrunun eğimi pozitif, sola yatık olanın negatiftir.\n## Doğrusal İlişki\nİki değişken arasında sabit artış varsa ilişki doğrusaldır (yaş-boy, mesafe-zaman).\n✏️ Eğimi bulmak için iki noktayı seç, dikey farkı yatay farka böl.",

// 7 Eşitsizlikler
"## Eşitsizlik Nedir?\nİki ifadenin eşit olmadığını gösteren ifadedir.\n- Semboller: > (büyüktür), < (küçüktür), ≥ (büyük eşit), ≤ (küçük eşit).\n## Çözüm Kümesi\nEşitsizliği sağlayan değerlerin kümesidir.\n- x > 3 → x = 4, 5, 6... (4'ten itibaren).\n## Sayı Doğrusunda Gösterme\n- > ve < için boş (açık) nokta.\n- ≥ ve ≤ için dolu (kapalı) nokta.\n## Eşitsizlik Çözme\nDenklem gibi çözülür ama negatif sayıyla çarparken/bölerken yön değişir!\n- −2x < 6 → x > −3 (yön değişti!)\n✏️ Eşitsizliği − ile çarparsan sembolü ters çevirmeyi unutma.",

// 8 Üçgenler
"## Üçgen Eşitsizliği\nBir üçgende iki kenarın toplamı üçüncü kenardan büyüktür.\n- a + b > c ve fark küçüktür: |a − b| < c.\n## Kenar-Açı İlişkisi\nBüyük açının karşısında büyük kenar bulunur.\n- En uzun kenar, en büyük açının karşısındadır.\n## Pisagor Bağıntısı\nDik üçgende: a² + b² = c² (c hipotenüs = en uzun kenar).\n- 3-4-5, 6-8-10, 5-12-13 özel dik üçgenlerdir.\n## Özel Üçgenler\nEşkenar (tüm kenar/açılar eşit), ikizkenar (taban açıları eşit).\n✏️ Pisagor'da önce en uzun kenarı (hipotenüs) bul; kenar uzunlukları dik üçgen kuruyor mu diye test et.",

// 9 Eşlik ve Benzerlik
"## Eşlik\nKenarları ve açıları birebir aynı olan şekillerdir (ölçüleri eşit).\n- Eşlik sembolü: ≅ ; aynı şekil ve aynı boyut.\n## Benzerlik\nŞekilleri aynı, boyutları oranlı olan şekillerdir.\n- Benzerlik sembolü: ∼ ; açılar eşit, kenarlar orantılı.\n## Benzerlik Oranı\nKarşılıklı kenarların oranıdır (k).\n- Kenarlar 4-6 ve 8-12 ise benzerlik oranı k = 8/4 = 2.\n- Alan oranı = k², çevre oranı = k.\n✏️ Benzer üçgenlerde karşılıklı köşeleri eşleştir; oranı bulup istenen kenarı hesapla.",

// 10 Dönüşüm Geometrisi
"## Öteleme\nBir şeklin yönünü değiştirmeden kaydırılmasıdır.\n- Sağa/sola ve yukarı/aşağı taşınır: (x, y) → (x+a, y+b).\n- Şeklin boyu ve yönü değişmez.\n## Yansıma\nBir şeklin bir doğruya göre aynadaki görüntüsüdür.\n- x eksenine göre: (x, y) → (x, −y).\n- y eksenine göre: (x, y) → (−x, y).\n## Döndürme\nBir nokta etrafında açı kadar döndürmedir (90°, 180°, 270°).\n- 180° döndürmede (x, y) → (−x, −y).\n✏️ Öteleme kaydırır, yansıma çevirir (ayna), döndürme çevirir (dönme).",

// 11 Cisimlerin Yüzey Alanı ve Hacmi
"## Dik Prizmaların Yüzey Alanı\nTüm yüzlerin alanları toplamıdır.\n- Dikdörtgenler prizması: 2(ab + ac + bc).\n- Küp: 6a².\n## Hacim\n- Dikdörtgenler prizması: V = a × b × c.\n- Küp: V = a³.\n## Silindir\n- Tabanı daire olan prizma türüdür.\n- Hacim = πr² × h (taban alanı × yükseklik).\n- Yüzey alanı = 2πr² + 2πrh (2 taban + yanal yüz).\n✏️ Hacim formüllerinde \"taban alanı × yükseklik\" ana fikrini unutma; silindirde taban dairedir."
],

/* ===================== FEN BİLİMLERİ ===================== */
fen8: [
// 0 Mevsimler ve İklim
"## Mevsimler Nasıl Oluşur?\nDünya'nın eksen eğikliği (23,5°) ve Güneş etrafındaki dolanması mevsimleri oluşturur.\n- Dünya Güneş'e yakınken değil, eksen eğikliği yüzünden kuzey yarımküre Güneş'e dönükken yaz yaşanır.\n## Eksen Eğikliği\nDünya'nın dönme ekseni, yörünge düzlemine dik değil eğiktir.\n- Bu eğiklik, güneş ışınlarının geliş açısını ve gece-gündüz süresini değiştirir.\n## İklim ve Hava Durumu\n- Hava durumu: kısa süreli atmosfer olayları (bugün yağmurlu).\n- İklim: uzun yılların ortalama hava durumu (Akdeniz iklimi).\n## Türkiye'de İklim\nKarasal (iç kesimler), Akdeniz (güney), Karadeniz (kuzey) iklimleri görülür.\n✏️ Mevsimi belirleyen Dünya'nın Güneş'e uzaklığı değil, eksen eğikliğidir!\n## Örnek Soru\nSoru: \"Hava durumu ile iklim arasındaki fark nedir?\"\nCevap: Hava durumu kısa süreli (bugün yağmurlu), iklim uzun yılların ortalamasıdır (Akdeniz iklimi).",

// 1 DNA ve Genetik Kod
"## DNA Nedir?\nCanlıların kalıtsal özelliklerini taşıyan, hücre çekirdeğinde bulunan moleküldür.\n- Çift sarmal yapıdadır; yapı birimi nükleotittir.\n- Gen: DNA'nın görev birimi. Genler kromozomlarda bulunur.\n## Kalıtım\nÖzelliklerin genlerle kuşaktan kuşağa aktarılmasıdır.\n- Genotip: genetik yapı (Aa, aa). Fenotip: dış görünüş (sarı tohum).\n- Baskın (dominant) gen özelliği gösterir, çekinik (resesif) gen gizlenir.\n## Mutasyon ve Modifikasyon\n- Mutasyon: gen yapısında meydana gelen kalıcı değişiklik (DNA hasarı).\n- Modifikasyon: çevre etkisiyle geçici değişiklik (bronzlaşma).\n## Adaptasyon\nCanlıların yaşama ve üreme şansını artıran kalıtsal özelliklerdir (çöl bitkisinin dikeni).\n✏️ DNA → gen → kromozom → hücre sıralamasını bil; mutasyon kalıcı, modifikasyon geçicidir.\n## Örnek Soru\nSoru: \"Çöldeki dikenli bitkilerin dikenli olması hangi kavramla açıklanır?\"\nCevap: Adaptasyon. Canlının yaşama şansını artıran kalıtsal özelliktir.",

// 2 Basınç
"## Katı Basıncı\nAğırlığın yüzey alanına bölünmesidir: P = F ÷ A.\n- Aynı ağırlıkta yüzey küçülürse basınç artar (keskin bıçak, kar ayakkabısı).\n## Sıvı Basıncı\nSıvılar, bulundukları kabın her yönüne basınç uygular.\n- Derinlik arttıkça sıvı basıncı artar (baraj dibi güçlü yapılır).\n- Sıvının yoğunluğu arttıkça basınç artar.\n## Atmosfer Basıncı\nHavanın (gazların) ağırlığından dolayı uyguladığı basınçtır.\n- Yükseğe çıkıldıkça azalır (dağda nefes zorlaşır).\n- Torricelli deneyi: açık hava basıncı cıva sütunuyla ölçülür.\n✏️ Katı basıncı yüzey alanına, sıvı basıncı derinliğe ve yoğunluğa, gaz basıncı yüksekliğe bağlıdır.\n## Örnek Soru\nSoru: \"Aynı ağırlıktaki bir kişi neden karda yürürken batarken kar ayakkabısıyla batmaz?\"\nCevap: Yüzey alanı artınca uygulanan basınç azalır (P = F ÷ A).",

// 3 Madde ve Endüstri
"## Periyodik Cetvel\nElementlerin artan atom numarasına göre dizildiği tablodur.\n- Periyotlar: yatay sıralar; gruplar: dikey sütunlar.\n- İlk 20 element iyi bilinmelidir (H, He, Li, Be, B, C, N, O, F, Ne...).\n## Asitler ve Bazlar\n- Asitler: ekşi tattadır, pH < 7, mavi turnusolü kırmızıya çevirir (limon, sirke).\n- Bazlar: kaygan hissettirir, pH > 7, kırmızı turnusolü maviye çevirir (sabun, kireç).\n- Nötralleşme: asit + baz → tuz + su.\n## Kimyasal Tepkimeler\nMaddelerin yeni maddelere dönüştüğü olaylardır.\n- Giren maddelerin kütlesi = ürünlerin kütlesi (kütle korunur).\n- Örnek: 2H₂ + O₂ → 2H₂O\n✏️ Asit-bazı \"pH değeri, tat, turnusol\" ile ayırt et; kimyasal tepkimede madde yok olmaz, dönüşür.\n## Örnek Soru\nSoru: \"Limon suyunun mavi turnusol kâğıdına etkisi nedir?\"\nCevap: Mavi turnusolu kırmızıya çevirir çünkü limon asidiktir (pH < 7).",

// 4 Basit Makineler
"## Basit Makineler\nİş yapmayı kolaylaştıran aletlerdir (kuvvetten ya da yoldan kazanç sağlar).\n- Hiçbir basit makine işten kazanç sağlamaz.\n## Kaldıraçlar\nBir destek noktası etrafında dönen çubuklardır.\n- Kuvvet kolu uzadıkça kuvvetten kazanç artar (tahterevalli, pense, makas).\n## Makaralar\n- Sabit makara: kuvvetin yönünü değiştirir, kuvvetten kazanç yok.\n- Hareketli makara: kuvvetten 2 kat kazanç sağlar.\n## Eğik Düzlem\nYokuş; aynı yüksekliğe daha az kuvvetle çıkmayı sağlar (rampa, vida, çivi).\n## Dişliler, Vida ve Kaldırma\n- Dişliler: kuvvet ve hareket iletir.\n- Vida: eğik düzlemin sarılmış halidir.\n✏️ Basit makineler \"kuvvetten veya yoldan\" kazandırır, asla işten kazandırmaz.\n## Örnek Soru\nSoru: \"Bir yükü 2 metre yüksekliğe çıkarmak için hangi basit makine daha az kuvvetle iş görür?\"\nCevap: Eğik düzlem (rampa). Aynı yüksekliğe daha uzun ama daha az kuvvetle çıkarır.",

// 5 Enerji Dönüşümleri ve Çevre Bilimi
"## Fotosentez\nBitkilerin ışık enerjisini kullanarak besin (glikoz) ve oksijen üretmesidir.\n- 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (ışık ve klorofil gerekli).\n## Solunum\nBesinlerin oksijenle yakılarak enerji üretilmesidir.\n- Besin + O₂ → CO₂ + H₂O + enerji (fotosentezin tersi).\n## Besin Zinciri ve Enerji Akışı\nÜretici (bitki) → tüketici (otçul → etçil) → ayrıştırıcı.\n- Her basamakta enerji kaybı olur; üreticiler en fazla enerjiye sahiptir.\n## Sürdürülebilirlik ve Çevre\n- Enerji tasarrufu, geri dönüşüm ve yenilenebilir enerji (güneş, rüzgâr).\n- Fosil yakıtların azaltılması küresel ısınmayı yavaşlatır.\n✏️ Fotosentez besin+O₂ üretir, solunum enerji için besini yakar; ikisi birbirini tamamlar.\n## Örnek Soru\nSoru: \"Besin zincirinde en fazla enerjiye hangi canlı sahiptir?\"\nCevap: Üreticiler (bitkiler). Her basamakta enerjinin bir kısmı kaybedilir.",

// 6 Elektrik Yükleri ve Elektrik Enerjisi
"## Elektrik Yükleri\n- Pozitif (+) ve negatif (−) yükler vardır.\n- Aynı yükler birbirini iter, zıt yükler birbirini çeker.\n- Nötr cisimlerde yük dengesi vardır.\n## Elektriklenme\n- Sürtünmeyle: saçı taramak (tarağın kâğıdı çekmesi).\n- Dokunmayla ve etkiyle (tesirle) elektriklenme çeşitleri.\n## Elektrik Akımı ve Devre\nAkım, yüklerin düzenli hareketidir; birimi amper (A).\n- Seri ve paralel bağlama; ampul parlaklığı gerilime bağlıdır.\n## Enerji Tasarrufu ve Güvenlik\n- A+ cihazlar, LED ampuller enerji tasarrufu sağlar.\n- Islak elle elektrikli aletlere dokunma; topraklı priz kullan.\n✏️ Aynı yükler iter, zıt yükler çeker; elektriklenme günlük hayatta (kağıt çekme) görülür.\n## Örnek Soru\nSoru: \"Sürtünmeyle elektriklenen tarak küçük kağıt parçalarını neden çeker?\"\nCevap: Tarak sürtünmeyle yüklenir ve zıt yüklü kağıt parçalarını çeker.",
],

/* ===================== TÜRKÇE ===================== */
trk8: [
// 0 Sözcükte Anlam
"## Anlam İlişkileri\n- Eş anlamlı: öğretmen/muallim. Zıt anlamlı: genç/yaşlı.\n- Eş sesli (sesteş): yazılışı aynı, anlamı farklı: \"yüz\".\n- Yakın anlamlı: aralarında küçük anlam farkı olanlar: \"kırmak/bükmek\".\n## Gerçek, Mecaz ve Terim Anlam\n- Gerçek: ilk akla gelen anlam. Mecaz: aktarmalı anlam. Terim: alana özel anlam.\n## Deyim ve Atasözleri\n- Deyim: kalıplaşmış mecazlı ifade (\"Kulak vermek\").\n- Atasözü: öğüt veren kalıplaşmış söz (\"Sakla samanı, gelir zamanı\").\n💡 Sesteşleri cümle içinde anlamlandır; \"yüz\" örneğinde olduğu gibi bağlam çok önemlidir.",

// 1 Cümlede Anlam
"## Anlam İlişkileri\n- Neden-sonuç, amaç-sonuç, koşul-sonuç cümleleri.\n- Öznel/nesnel yargılar; karşılaştırma; dolaylı anlatım.\n## Cümle Yorumlama\n- Gizli mesaj: \"Kapıyı kapatmayı unutma\" → dolaylı istek.\n- Örtülü anlam: \"Yine geç kalmış.\" → daha önce de geç kaldığı.\n## Geçiş ve Bağlantı İfadeleri\nama, fakat, ancak, çünkü, oysa, buna rağmen, ayrıca, yani, sonuç olarak.\n💡 Örtülü anlamı bulmak için cümlede söylenmeyen ama ima edilen bilgiyi ara.",

// 2 Fiilimsiler ve Fiil Çatıları
"## Fiilimsiler\nFiilden türeyen, fiil özelliği taşımayan sözcüklerdir.\n- İsim-fiil: -ma, -iş, -mak (\"yüzmeyi severim\").\n- Sıfat-fiil: -an, -ası, -mez, -ar, -dik, -ecek, -miş (\"gelen çocuk\").\n- Zarf-fiil: -ıp, -arak, -ince, -ken, -dikçe, -meden (\"koşarak geldi\").\n## Fiil Çatıları\n- Öznesine göre: etken (\"Ali kapıyı açtı\"), edilgen (-il/-in: \"kapı açıldı\").\n- Nesnesine göre: geçişli (nesne alır: \"kitabı okudu\"), geçişsiz (nesne almaz: \"uyudu\").\n💡 \"-mak\" takısı alıyorsa fiil, alamıyorsa fiilimsidir; çatı sorusu: \"Kim?\" özne, \"Neyi?\" nesne.",

// 3 Cümlenin Öğeleri
"## Temel Öğeler\n- Yüklem: işi/oluşu bildirir (cümlenin kalbi).\n- Özne: işi yapan (\"kim/ne?\" sorusu).\n## Yardımcı Öğeler\n- Nesne: işten etkilenen (\"neyi/kimi?\").\n- Dolaylı tümleç: \"nereye/nerede/nereden/kime/kimde?\"\n- Zarf tümleci: \"nasıl/ne zaman/ne kadar?\"\n## Öge Uyumu\n- Özne-yüklem uyumu (kişi ve sayı).\n- Tekil özne, çoğul yüklem kullanımı dikkat gerektirir.\n💡 Önce yüklemi bul, sonra sırasıyla özne → nesne → tümleç araması yap.",

// 4 Sözcük Türleri: Tamlamalar
"## İsim Tamlaması\nİki ismin bir araya gelerek oluşturduğu tamlamadır.\n- Belirtili: okulun bahçesi (-in ... -i)\n- Belirtisiz: okul bahçesi (-i eki)\n- Zincirleme: okul bahçesinin kapısı.\n## Sıfat Tamlaması\nBir sıfatla bir ismin oluşturduğu tamlamadır.\n- mavi göz, üç elma, bu kitap.\n- İsim tamlaması \"iyelik\", sıfat tamlaması \"niteleme/belirtme\" ilişkisi kurar.\n💡 Ayırt et: \"okulun kapısı\" isim tamlaması, \"tahta kapı\" sıfat tamlamasıdır.",

// 5 Metin Türleri ve Anlatım
"## Metin Türleri\n- Hikâye, roman, masal (olay anlatır).\n- Makale, deneme, fıkra, gezi yazısı, anı, biyografi (bilgi ve düşünce).\n- Şiir (duygu ve ritim).\n## Anlatım Biçimleri\n- Açıklama: bilgi verir. Tartışma: düşünceyi savunur.\n- Betimleme: görsel olarak anlatır. Öyküleme: olayı akış içinde anlatır.\n## Düşünceyi Geliştirme Yolları\nTanımlama, örneklendirme, tanık gösterme, benzetme, karşılaştırma, sayısal veriler.\n💡 Metin türünü sorunun neyi amaçladığına göre ayır: bilgi mi, olay mı, duygu mu?", 

// 6 Paragraf
"## Ana Düşünce ve Yardımcı Düşünceler\n- Ana düşünce: paragrafın asıl mesajı.\n- Yardımcı düşünceler: ana düşünceyi destekleyenler.\n## Anlam Akışı\nParagrafta cümleler mantıklı bir sırayla dizilir.\n- \"Bu paragrafın akışını bozan cümle hangisidir?\" sorularında konu dışına çıkan cümle aranır.\n## Konu ve Başlık\nKonu geneldir (\"kitap okuma\"); başlık en kısa özettir.\n## Paragrafın Yapısı\nGiriş (ana düşünceyi tanıtır) → gelişme (örnekler) → sonuç (toparlar).\n💡 Ana düşünce için \"Yazar ne anlatmak istiyor?\" sorusu her zaman işe yarar.",

// 7 Yazım ve Noktalama
"## Yazım Kuralları\n- Büyük harfler, \"de/da\" ve \"ki\"nin yazımı.\n- Sayıların yazımı, kısaltmalar ve birleşik sözcüklerin yazımı.\n- \"dahi\" sözcüğünün \"de\" ile karıştırılmaması.\n## Noktalama İşaretleri\nNokta, virgül, noktalı virgül, iki nokta, üç nokta, soru, ünlem, tırnak, parantez, kesme, kısa çizgi, eğik çizgi.\n- Virgülün kullanım yerleri: sıralama, ara söz, hitap, tırnak içi sözden önce.\n✏️ \"De\" ayrıysa bağlaç, bitişikse hâl ekidir; yazım testlerinde en çok bu çıkar."
],

/* ===================== T.C. İNKILAP TARİHİ ===================== */
ink8: [
// 0 Bir Kahraman Doğuyor
"## Mustafa Kemal'in Hayatı\n1881'de Selanik'te doğdu. Babası Ali Rıza Efendi, annesi Zübeyde Hanım'dır.\n- Manastır Askerî İdadisi'nde okudu; tarihe ve vatan sevgisine ilgi duydu.\n- Harp Okulu'ndan kurmay subay olarak mezun oldu.\n## Osmanlı'nın Son Dönemi\nOsmanlı, I. Dünya Savaşı öncesinde toprak kaybediyor ve ekonomik olarak zorlanıyordu.\n- Milliyetçilik akımı ve iç isyanlar devleti zayıflattı.\n## Askerlik Yılları\nÇanakkale Savaşı'nda büyük başarı gösterdi (19. Tümen Komutanı).\n- İstanbul'un ve Anadolu'nun işgali karşısında kurtuluş mücadelesine atıldı.\n✏️ Mustafa Kemal'in çocukluğu ve eğitimi, onun mücadeleci kişiliğinin temelini oluşturur.\n## Örnek Soru\nSoru: \"Mustafa Kemal hangi savaşta büyük başarı göstererek tanınmıştır?\"\nCevap: Çanakkale Savaşı'nda (19. Tümen Komutanı olarak).",

// 1 Millî Uyanış: Bağımsızlık Yolunda Adımlar
"## I. Dünya Savaşı ve Mondros\nOsmanlı, İttifak Devletleri'nin yanında savaşa girdi; yenilgi üzerine 30 Ekim 1918'de Mondros Ateşkes Antlaşması imzalandı.\n- Antlaşma sonrası Anadolu işgal edilmeye başlandı.\n## İşgaller ve Kuva-yı Milliye\n- İzmir Yunanlılar, İstanbul ve bazı bölgeler İtilaf Devletleri tarafından işgal edildi.\n- Halk, Kuva-yı Milliye (milli kuvvetler) ile direniş başlattı.\n## Mustafa Kemal'in Samsun'a Çıkışı\n19 Mayıs 1919'da Mustafa Kemal, Samsun'a çıkarak millî mücadeleyi başlattı.\n## Kongreler\n- Havza ve Amasya Genelgesi: \"milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır\".\n- Erzurum ve Sivas Kongreleri: vatanın bölünmez bütünlüğü kararlaştırıldı.\n- Temsil Heyeti kuruldu; kongrelerle milli irade esas alındı.\n✏️ 19 Mayıs (Atatürk'ü Anma, Gençlik ve Spor Bayramı), millî mücadelenin başlangıcı kabul edilir.\n## Örnek Soru\nSoru: \"Millî mücadele hangi tarihte ve nerede fiilen başlamıştır?\"\nCevap: 19 Mayıs 1919'da Mustafa Kemal'in Samsun'a çıkmasıyla.",

// 2 Millî Bir Destan: Ya İstiklal ya Ölüm
"## TBMM'nin Açılışı\n23 Nisan 1920'de Ankara'da Türkiye Büyük Millet Meclisi açıldı.\n- \"Hâkimiyet kayıtsız şartsız milletindir.\"\n## Kurtuluş Savaşı Cepheleri\n- Batı Cephesi: I. ve II. İnönü, Sakarya Meydan Muharebesi (savunma).\n- Büyük Taarruz ve 30 Ağustos Başkomutanlık Meydan Muharebesi (zafer).\n- Doğu: Ermenilerle yapılan savaş (Gümrü Antlaşması); Güney: Fransızlarla mücadele.\n## Lozan Barış Antlaşması\n24 Temmuz 1923'te imzalandı.\n- Türkiye'nin bağımsızlığı bütün dünyaca tanındı.\n- Kapitülasyonlar (yabancılara verilen ayrıcalıklar) kaldırıldı.\n- Misak-ı Milli sınırları esas alındı.\n✏️ Zaferin ve Lozan'ın anlamı: Türk milletinin bağımsızlığının tescili. 30 Ağustos Zafer Bayramı'dır.\n## Örnek Soru\nSoru: \"Lozan Antlaşması'nda Türkiye lehine kaldırılan en önemli ayrıcalıklar hangileridir?\"\nCevap: Kapitülasyonlar (yabancılara verilen ayrıcalıklar) kaldırıldı.",

// 3 Atatürkçülük ve Cumhuriyetin İlkeleri
"## Cumhuriyetin İlanı\n29 Ekim 1923'te Cumhuriyet ilan edildi; Mustafa Kemal ilk cumhurbaşkanı oldu.\n## Atatürk İlkeleri\n- Cumhuriyetçilik: yönetimde millet iradesi.\n- Milliyetçilik: milletini sevme ve birlik.\n- Halkçılık: eşitlik ve halkın çıkarları.\n- Devletçilik: devletin ekonomide rol alması.\n- Laiklik: din ve devlet işlerinin ayrılması.\n- İnkılapçılık: çağdaşlaşma için yenilik.\n## İnkılaplar\n- Saltanat kaldırıldı (1922), halifelik kaldırıldı (1924).\n- Yeni Türk harfleri kabul edildi (1928), Türk Tarih ve Dil Kurumları kuruldu.\n- Şapka ve kıyafet kanunu, takvim-saat ve ölçülerde değişiklik.\n✏️ İlkeler birbirini tamamlar; örn. laiklik ve halkçılık çağdaşlığın temelidir.\n## Örnek Soru\nSoru: \"Din ve devlet işlerinin ayrılmasını savunan Atatürk ilkesi hangisidir?\"\nCevap: Laiklik. Devletçilik ise ekonominin devlet eliyle planlanmasıdır.",

// 4 Demokratikleşme Çabaları ve Atatürk Dönemi
"## Demokratikleşme\n- 1924 Anayasası ile çok partili hayata geçiş denemeleri yapıldı.\n- Kadınlara seçme ve seçilme hakkı tanındı (1934) — demokrasinin önemli adımı.\n## Eğitim ve Sağlık\n- Tevhid-i Tedrisat Kanunu: eğitim birleştirildi ve millileştirildi.\n- Okuma yazma seferberliği (Millet Mektepleri), köy enstitüleri.\n- Sağlık Bakanlığı kuruldu, sağlık ocakları ve hastaneler yaygınlaştı.\n## Sosyal Devlet Adımları\n- Fabrika ve bankalar kuruldu (Sümerbank, Etibank).\n- Demiryolları millileştirildi; vergiler adil hale getirildi.\n💡 Bu dönemde eğitim, sağlık ve ekonomi alanlarında köklü yenilikler yapıldı.\n## Örnek Soru\nSoru: \"Kadınlara seçme ve seçilme hakkı hangi yıl tanınmıştır?\"\nCevap: 1934'te tanındı. Bu, demokratikleşmenin önemli bir adımıydı.",

// 5 Atatürk Dönemi Türk Dış Politikası
"## Dış Politika İlkeleri\n- \"Yurtta barış, cihanda barış\" anlayışı.\n- Bağımsızlık ve tam egemenlik esas alındı; akılcı ve gerçekçi politika izlendi.\n## Önemli Gelişmeler\n- Milletler Cemiyeti'ne katılım.\n- Balkan Antantı ve Sadabat Paktı ile komşularla iş birliği.\n## Montrö Boğazlar Sözleşmesi (1936)\nBoğazların yönetimi Türkiye'ye geçti; güvenlik sağlandı.\n## Hatay'ın Anavatana Katılması\nHatay, 1939'da oy çokluğuyla Türkiye'ye katıldı.\n✏️ Atatürk'ün dış politikası: barışçı, bağımsız ve milli menfaatlere dayalıydı.\n## Örnek Soru\nSoru: \"Boğazların yönetiminin Türkiye'ye geçmesini sağlayan antlaşma hangisidir?\"\nCevap: Montrö Boğazlar Sözleşmesi (1936)."
],

/* ===================== İNGİLİZCE ===================== */
ing8: [
// 0 Friendship
"## Arkadaşlık İfadeleri\n- I get on well with my classmates. (Sınıf arkadaşlarımla iyi geçinirim.)\n- We have common interests. (Ortak ilgi alanlarımız var.)\n## Öneri Sunma\n- What about going to the cinema? (Sinemaya gitmeye ne dersin?)\n- Why don't we play chess? (Satranç oynasak?)\n- Let's meet at the park. (Parkta buluşalım.)\n## Kabul ve Reddetme\n- Sounds great! / That's a good idea! (kabul)\n- I'm afraid I can't. / I'm sorry, I have other plans. (red)\n✏️ Öneri kalıpları: \"What about + -ing?\", \"Why don't we + fiil?\", \"Let's + fiil\".",

// 1 Teen Life
"## Used to\nGeçmişte yapılan, artık yapılmayan alışkanlıklar için kullanılır.\n- I used to play football when I was young.\n- She didn't use to like coffee.\n## Genç Yaşam\n- I spend most of my free time with my friends.\n- I usually do my homework after school.\n- My parents allow me to play games at weekends.\n## Etkinlikler\nhang out (takılmak), watch series, listen to music, play online games, read books.\n✏️ \"used to + fiil\" geçmiş alışkanlıktır; \"didn't use to\" ile olumsuz yapılır.",

// 2 In the Kitchen
"## Mutfakta\nYemek tarifleri ve malzemeler: flour (un), sugar (şeker), salt, butter, eggs, milk.\n- First, mix the flour and eggs. (Önce unu ve yumurtaları karıştır.)\n- Then, add the sugar. (Sonra şekeri ekle.)\n- Finally, bake it in the oven. (Son olarak fırında pişir.)\n## A Few / A Little\n- a few + sayılabilen çoğul: a few eggs (birkaç yumurta).\n- a little + sayılamayan: a little sugar (biraz şeker).\n✏️ Sayılabilenler (eggs) için \"a few\", sayılamayanlar (sugar, milk) için \"a little\" kullanılır.",

// 3 On the Phone
"## Telefon Konuşması\n- Hello, this is Eymen speaking. (Alo, ben Eymen.)\n- Can I speak to Ali, please? (Ali ile görüşebilir miyim?)\n- Hold on, please. (Bir dakika bekleyin.)\n- Sorry, he is not available. (Maalesef müsait değil.)\n## Mesaj Alma ve Bırakma\n- Could you take a message? (Mesaj alabilir misiniz?)\n- I'll call you back later. (Seni sonra ararım.)\n## Phrasal Verbs (Öbek Fiiller)\ncall back (geri aramak), call off (iptal etmek), turn on/off (açmak/kapatmak).\n✏️ Telefonda \"this is + isim\" ile kendini tanıtırsın; \"Can I speak to...?\" ile aradığını sorarsın.",

// 4 The Internet
"## İnternet Kullanımı\n- I use the internet to do research. (Araştırma yapmak için kullanıyorum.)\n- You can download apps and share photos online.\n## Güvenlik\n- Don't share your password with anyone.\n- Don't click on unknown links. (Bilinmeyen bağlantılara tıklama.)\n- Be careful about your personal information.\n## Sorma ve Öneri\n- How often do you use the internet? → Every day.\n- You should use a strong password.\n✏️ İnternet güvenliği için: güçlü parola, kişisel bilgi paylaşmama, şüpheli bağlantılardan kaçınma.",

// 5 Science
"## Bilim ve Teknoloji\n- Scientists make discoveries. (Bilim insanları keşifler yapar.)\n- Technology makes our lives easier.\n## Present Passive (Geniş Zaman Edilgen)\n- Computers are used in many fields. (Bilgisayarlar birçok alanda kullanılır.)\n- The experiment is done in the laboratory.\n- English is spoken all over the world.\n✏️ Edilgen yapı: \"am/is/are + fiilin 3. hali\"; işi yapan belli değilse \"by\" kullanılmaz.",

// 6 Natural Forces
"## Doğal Olaylar\nearthquake (deprem), flood (sel), avalanche (çığ), drought (kuraklık), thunderstorm (fırtına), wildfire (orman yangını).\n## Önlemler\n- We should be prepared for earthquakes. (Depreme hazırlıklı olmalıyız.)\n- Don't panic during an earthquake.\n- Prepare an emergency bag. (Acil durum çantası hazırla.)\n## Sorma ve Anlatma\n- What happened? → There was a big earthquake.\n- Be careful when there is a thunderstorm.\n✏️ Doğal afetlerde \"should / shouldn't\" ile öneri yapılır; \"be careful\" = dikkatli ol.",

// 7 Chores
"## Ev İşleri\nclean the room (odayı temizlemek), wash the dishes (bulaşık yıkamak), take out the rubbish (çöpü çıkarmak), do the shopping, water the plants, make the bed.\n## Ricalar (Requests)\n- Could you help me with the housework? (Ev işlerinde bana yardım eder misin?)\n- Can you take out the rubbish, please?\n- Would you mind cleaning the room? (Odayı temizler misin?)\n## Cevap Verme\n- Sure, no problem. (kabul) / I'm sorry, I'm busy. (red)\n✏️ Ricalar: \"Can you...? / Could you...? / Would you mind + -ing...?\"", 

// 8 Events
"## Present Perfect Tense\nGeçmişte olup etkisi süren olaylar için kullanılır.\n- I have just finished my homework. (Az önce bitirdim.)\n- Have you ever been to the sea? (Hiç denize gittin mi?)\n- She has never seen a polar bear.\n## Etkinlikler\nattend a party (partiye katılmak), organize a festival, hold a ceremony (tören düzenlemek).\n## Zaman İfadeleri\njust (az önce), already (çoktan), yet (henüz), ever (hiç), never (asla), recently.\n✏️ Present Perfect: \"have/has + fiilin 3. hali\"; \"ever\" soruda, \"never\" olumsuz anlamda kullanılır."
],

/* ===================== DİN KÜLTÜRÜ ===================== */
din8: [
// 0 Kader İnancı
"## Kader ve Kaza\n- Kader: Allah'ın her şeyi bir ölçü ve düzene göre belirlemesidir.\n- Kaza: bu ölçü ve düzenin zamanı gelince gerçekleşmesidir.\n## Özgür İrade\nİnsan, aklı ve iradesiyle seçimlerini yapabilir; davranışlarından sorumludur.\n- \"Her insan kendi çabasının karşılığını alır.\"\n- Çalışmak ve çaba göstermek kader inancının gereğidir.\n## Emek ve Tevekkül\n- Tevekkül: elinden geleni yaptıktan sonra Allah'a güvenmektir.\n- \"Önce tedbir, sonra tevekkül\" — çalışmadan tevekkül olmaz.\n✏️ Kader inancı tembelliği değil, çalışmayı ve sorumluluğu öğretir.",

// 1 Zekât ve Sadaka
"## Zekât\nZengin Müslümanların yılda bir kez, malının %2,5'ini (kırkta birini) ihtiyaç sahiplerine vermesidir.\n- İslam'ın beş şartından biridir.\n## Sadaka\nHer zaman ve herkesin yapabileceği yardımdır.\n- \"Sadaka-i cariye\": devamlı sevap kazandıran hayırlar (okul, çeşme, kuyu, ağaç).\n## Fidye ve Fitre\n- Fitre (Ramazan sadakası): Ramazan'da verilir.\n- Fidye: oruç tutamayanların, tutamadığı gün sayısınca verdiği bedeldir.\n✏️ Zekât belli şartlarla (zengin olma, yılda bir), sadaka herkese her zaman serbesttir.",

// 2 Hz. Muhammed'in Örnekliği
"## Örnek Ahlak\nHz. Muhammed (s.a.v.), güzel ahlakın örneğidir.\n- Doğruluk, dürüstlük, emanete riayet, merhamet ve adalet.\n- \"Ben güzel ahlakı tamamlamak için gönderildim.\"\n## Emanet ve Dürüstlük\nPeygamberimiz, ticaret hayatında \"el-Emin\" (güvenilir) olarak tanındı.\n- Emanete sahip çıkmak, sözünde durmak Müslümanın özelliğidir.\n## Güvenilir Toplum\nDoğruluk ve dürüstlük, toplumda güveni ve huzuru sağlar.\n✏️ \"el-Emin\" lakabı, Hz. Muhammed'in güvenilirliğinin kanıtıdır; biz de emanete sahip çıkmalıyız.",

// 3 Kur'an'ı Tanıyorum
"## Kur'an-ı Kerim\nAllah'ın son peygamber Hz. Muhammed'e (s.a.v.) gönderdiği son ilahi kitaptır.\n- Kur'an'ı okumak, anlamak ve yaşamak ibadettir.\n## Kur'an Okuma\n- Doğru ve güzel okumaya tecvit denir.\n- Kur'an'ı okumaya \"besmele\" ile başlanır; namazda ayetler okunur.\n## Sureler\nKur'an 114 sure ve 30 cüzden oluşur.\n- Sık okunan sureler: Fatiha, İhlas, Felak, Nas.\n- Fatiha, Kur'an'ın özeti sayılır ve her namazda okunur.\n✏️ Kur'an'ı sadece okumak yetmez; anlamak ve hayatımıza uygulamak gerekir."
]

};

if (typeof MUFREDAT !== 'undefined' && MUFREDAT['8']) {
  MUFREDAT['8'].dersler.forEach(function (d) {
    var dt = DETAY8[d.id];
    if (!dt) return;
    d.birimler.forEach(function (b, i) {
      if (dt[i] && !b.detay) b.detay = dt[i];
    });
  });
}


/* ==== Yeni seçmeli ders notları (otomatik eklendi) ==== */

DETAY8["grs8"] = ["## Renk Çemberi\nAna renkler kırmızı, sarı ve mavidir; başka renkten üretilemez.\n- Ara renkler iki ana rengin karışımıdır: yeşil (sarı+mavi), turuncu (kırmızı+sarı), mor (kırmızı+mavi).\n- Sıcak renkler (kırmızı, turuncu, sarı) enerji ve sıcaklık hissi verir.\n- Soğuk renkler (mavi, yeşil, mor) sakinlik ve serinlik hissi verir.\n## Ton Kavramı\n- Aynı rengin açık ve koyu hâlleri tondur. Beyaz katılırsa açık ton, siyah katılırsa koyu ton oluşur.\n- Degrade, rengin koyudan açığa yumuşak geçişidir.\n## Tamamlayıcı Renkler\n- Renk çemberinde karşılıklı duran renkler tamamlayıcıdır: kırmızı-yeşil, sarı-mor, mavi-turuncu.\n- Yan yana kullanıldıklarında birbirini güçlendirir, canlılık sağlar.\n💡 Boya karıştırırken azar az ekle: koyuya açık eklemek kolay, açığa koyu eklemek zordur.","## Temel Malzemeler\n- Kurşun kalem sertlikleri: H sert ve açık, HB orta, B serisi (2B, 4B, 6B) yumuşak ve koyu.\n- Silgi ile hem hata silinir hem de açık ton efekti yapılabilir (çekme tekniği).\n## Tonlama\n- Formu (hacmi) kazandırmak için ışık-gölge kullanılır: ışık alan yüz açık, gölgede kalan yüz koyu çizilir.\n- Tarama (paralel çizgiler), haç tarama (çapraz çizgiler) ve noktacılıkla ton elde edilir.\n## Çizime Başlama\n- Önce hafif hatlarla büyük şekilleri yerleştir, ayrıntıları sona bırak.\n- Hatalı çizgiyi hemen silme; doğru hat üzerine çalış.\n💡 Nesneye gözlerini kısarak bak; açık-koyu farklar daha net görünür.","## Perspektif\n- Uzak nesneler küçük, yakın nesneler büyük görünür; paralel çizgiler ufukta bir noktada birleşir: kaçış noktası.\n- Tek kaçış noktalı perspektifte önce göz hizası (ufuk çizgisi) çizilir; yol, cadde ve koridor çizimlerinde idealdir.\n## Kompozisyon\n- Resmin öğelerinin sayfa üzerindeki düzenine kompozisyon denir.\n- Ana konu boşluklarla dengelenmeli; tüm öğeler bir köşeye yığılmamalı.\n- Üçler kuralı: sayfayı dikey ve yatayda üçe böl; ilgi noktalarını kesişimlere yerleştir.\n## Orantı ve Simetri\n- Orantı nesnelerin birbirine boyut ilişkisi, simetri ise bir eksene göre aynılıktır.\n💡 Önce küçük bir ön çizim (taslak) yap; kompozisyonu kenarda dene."];
if (typeof MUFREDAT !== 'undefined' && MUFREDAT['8']) {
  MUFREDAT['8'].dersler.forEach(function (d) {
    var dt = DETAY8[d.id];
    if (!dt) return;
    d.birimler.forEach(function (b, i) { if (dt[i]) b.detay = dt[i]; });
  });
}

DETAY8["mzk8"] = ["## Ritim\n- Ritim, seslerin ve sessizliklerin zamana göre düzenli akışıdır. Kalp atışı gibi düzenli vuruşlara nabız denir.\n- Ölçü, ritmin gruplandığı eşit bölmelerdir; aralarına ölçü çizgisi çizilir.\n## Tempo\n- Tempo parçanın hızıdır: Largo (çok yavaş), Adagio (yavaş), Andante (yürüyüş hızında), Allegro (hızlı), Presto (çok hızlı).\n- Metronom, tempoyu sabit tutmak için kullanılır.\n## Sus İşaretleri\n- Sessizlik de müziğin parçasıdır; sus işaretleri nota değerleri kadar süre sessiz kalınacağını gösterir.\n💡 Ritmi tutmak için şarkıyı mırıldanırken ayağın ya da elinle düzenli vuruş yap.","## Nota\n- Nota, sesin yüksekliğini ve süresini gösteren işarettir.\n- Temel sesler: do, re, mi, fa, sol, la, si. Bir oktavda 7 temel ses vardır.\n- Porte beş çizgi ve dört aralıktan oluşur; notaların yüksekliği sesin incelik-kalınlığını gösterir.\n## Nota Değerleri\n- Tam nota 4 vuruş, yarım nota 2 vuruş, çeyrek nota 1 vuruş sürer.\n## Solfej\n- Solfej, sesleri doğru yükseklikte ve sürede söyleme çalışmasıdır. Önce yavaş tempoda oku, sonra hızlandır.\n💡 Yeni parçayı önce ritmini elinle vurarak çalış; sonra seslere geçmek çok kolaylaşır.","## Çalgı Grupları\n- Telli: keman, gitar, ud, kanun. Ses tellerin titreşmesiyle oluşur.\n- Üflemeli: flüt, klarnet, trompet, zurna. Ses havanın titreşmesiyle oluşur.\n- Vurmalı: davul, def, zil. Ses çarpma ile oluşur.\n## İnsan Sesi\n- İnsan sesi de bir çalgıdır; nefes kontrolü ile güçlenir.\n- Doğru nefes: diyaframı kullanmak, omuzları kaldırmadan derin almak.\n## Dinleme Kültürü\n- Farklı türlerden müzik dinlemek müzikal kulağı geliştirir.\n💡 Gözlerini kapayıp bir çalgının sesini dinle ve hangi grup olduğunu tahmin et."];
if (typeof MUFREDAT !== 'undefined' && MUFREDAT['8']) {
  MUFREDAT['8'].dersler.forEach(function (d) {
    var dt = DETAY8[d.id];
    if (!dt) return;
    d.birimler.forEach(function (b, i) { if (dt[i]) b.detay = dt[i]; });
  });
}

DETAY8["bed8"] = ["## Neden Isınırız?\n- Isınma kalp atışını ve vücut ısısını yavaşça yükseltir; kaslara kan gitmesini sağlar.\n- Isınmayan kas gerilmelere ve sakatlanmalara açıktır.\n## Nasıl Isınırız?\n- 5-10 dakika hafif tempo koşu, yerinde koşu, ip atlama.\n- Eklem çevirme: boyun, omuz, kol, bel, diz, ayak bileği.\n## Esnetme\n- Statik esnetme: pozisyonu zıplamadan 15-30 saniye sabit tutmak.\n- Hafif gerginlik normaldir ama ağrı olmamalıdır.\n- Spordan sonra soğuma ve esnetme yapılır; nabız yavaş yavaş düşer.\n💡 Kural: Isınmadan maç olmaz, maçtan sonra soğuma olmadan antrenman bitmez.","## Temel Oyun Kuralları\n- Futbol: 11'er oyuncu, top elle oynanmaz (kaleci hariç), iki devre.\n- Basketbol: 5'er oyuncu, top elde koşulamaz (sürülür), sayı potaya sokulur.\n- Voleybol: 6'şar oyuncu, topa en fazla üç dokunuş, file üzerinden karşı sahaya.\n- Hentbol: 7'şer oyuncu, üç adama kadar top elde taşınabilir.\n## Takım Ruhu\n- Pas paylaşımı, pozisyon alma ve birbirini destekleme oyundan alınan keyfi artırır.\n- Hakem kararlarına saygı fair-play'in temelidir.\n💡 Kazanmak kadar önemli: kurallara uymak ve rakibe saygı göstermek.","## Dengeli Beslenme\n- Öğün atlamamak en önemlisidir: kahvaltı, öğle ve akşam düzenli olmalı.\n- Tabakta çeşitlilik: sebze-meyve, tahıl, süt ürünleri, et/baklagil.\n## Su\n- Günde en az 6-8 bardak su; spor yapılan günlerde daha fazlası.\n- Susuzluk baş ağrısı, yorgunluk ve dikkatsizliğe yol açar.\n## Spor ve Enerji\n- Karbonhidratlar (ekmek, makarna, bulgur) temel enerji kaynağıdır.\n- Proteinler (et, yumurta, baklagil) kas onarımı için gerekir.\n- Spordan hemen önce ağır ve yağlı yemekten kaçın.\n💡 En iyi içecek sudur; şekerli gazlı içecekler kısa enerji patlaması sonra çöküş yaratır."];
if (typeof MUFREDAT !== 'undefined' && MUFREDAT['8']) {
  MUFREDAT['8'].dersler.forEach(function (d) {
    var dt = DETAY8[d.id];
    if (!dt) return;
    d.birimler.forEach(function (b, i) { if (dt[i]) b.detay = dt[i]; });
  });
}

DETAY8["tvt8"] = ["## Aşamalar\n1. İhtiyaç/Problem: Hangi sorunu çözüyorum?\n2. Araştırma: Benzer ürünler sorunu nasıl çözüyor?\n3. Fikir Üretme: Beyin fırtınasıyla çok sayıda alternatif.\n4. Prototip: Eskiz çiz, basit model üret.\n5. Test ve Değerlendirme: Dene, hataları bul, iyileştir.\n6. Sunum: Sürecini ve ürününü tanıt.\n## Tasarım Defteri\n- Her adımı tarih ve çizimlerle kaydet; sunumda en büyük yardımcın olur.\n## Beyin Fırtınası Kuralları\n- Eleştiri yok, tuhaf fikirler serbest, nicelik önemli, fikirler üzerine inşa edilir.\n💡 İlk fikrin en iyisi olmak zorunda değil; test edip geliştirmek tasarımın kendisidir.","## Basit Makineler\nİşi kuvvetten veya zamandan kazandıran temel düzeneklerdir.\n- Kaldıraç: dayanak noktası etrafında dönerek kuvvet iletir (makas, pense, tahterevalli).\n- Makara: ip ve çark ile yükü kaldırır, kuvvetin yönünü değiştirir (bayrak direği, kuyu makarası).\n- Eğik düzlem (rampa): yükü kaydırarak kaldırmayı kolaylaştırır (yokuş, merdiven).\n- Tekerlek ve aks: dönme hareketiyle taşıma sağlar.\n- Vida: eğik düzlemin mil etrafına sarılmış hâlidir.\n## Günlük Yaşam\n- Kapı kolu, makas, fındık kıracağı ve bisiklet; hepsi basit makinelerin birleşimidir.\n💡 Evdeki bir düzeneği seç; hangi basit makine(ler)den oluştuğunu bulmaya çalış.","## Atık Türleri\n- Geri dönüştürülebilir: kâğıt-karton, cam, metal, bazı plastikler.\n- Organik atık: yemek ve bahçe artıkları; kompost yapılabilir.\n- Özel (tehlikeli) atık: pil, elektronik, ilaç; ayrı toplama noktalarına gider.\n## Geri Dönüşüm Süreci\n- Ayrıştırma → Toplama → İşleme → Yeni ürün. Sembolü üçgen içinde oklardır.\n## Neden Önemli?\n- Doğal kaynakları korur, enerji tasarrufu sağlar, çöp alanlarının dolmasını geciktirir.\n- Alüminyum kutunun geri dönüşümü, sıfırdan üretime göre %95'e varan enerji tasarrufudur.\n💡 Okulda ya da evde ayrıştırma kutusu kur: az tüket, tekrar kullan, geri dönüştür."];
if (typeof MUFREDAT !== 'undefined' && MUFREDAT['8']) {
  MUFREDAT['8'].dersler.forEach(function (d) {
    var dt = DETAY8[d.id];
    if (!dt) return;
    d.birimler.forEach(function (b, i) { if (dt[i]) b.detay = dt[i]; });
  });
}

DETAY8["reb8"] = ["## Temel Duygular\n- Sevinç, üzüntü, korku, öfke, sürpriz ve iğrenme evrenseldir; hepsinin bir görevi vardır.\n- 'Kötü duygu' yoktur; zor duygular da bizi korur (korku tehlikeden, öfke haksızlığa tepki verdirir).\n## Duyguyu Fark Etme\n- Beden sinyallerine dikkat: sıkışan boğaz, hızlanan kalp, yumruk sıkma.\n- Duygu günlüğü tutmak fark etmeyi kolaylaştırır.\n## Sağlıklı İfade\n- 'Ben dili' kullan: suçlamayan cümlelerle 'Üzüldüm çünkü...' şeklinde anlat.\n- Zorlandığında güvenilir bir yetişkinle konuşmak güçlülüktür, zaafiyet değil.\n## Stresle Başa Çıkma\n- Derin nefes (4 al, tut, 4-6 ver), yürüyüş, su içmek, sevdiğin bir iş.\n💡 Öfkelendiğinde 10'a kadar say ve nefes al; sakin beyin daha iyi karar verir.","## Sağlıklı Arkadaşlık\n- Karşılıklı güven, saygı, dürüstlük ve destek temeldir.\n- Sınırlara saygı: 'hayır' diyebilmek ve karşıdakinin 'hayır'ını kabul edebilmek.\n## Empati\n- Empati, kendini karşındakinin yerine koyup duygusunu anlamaktır.\n- 'Onun yerine olsam ne hissederdim?' sorusu empatiyi geliştirir.\n## Çatışma Çözümü\n- Sakinleş → dinle → duygunu ben diliyle söyle → birlikte çözüm ara.\n- Küsmek, dedikodu ve dışlamak sorunu çözmez, büyütür.\n## Zorbalık\n- Alay, dışlama ve fiziksel zorbalığa tanık olduğunda bir yetişkine haber ver.\n💡 İyi bir arkadaş olmak, iyi arkadaşlar bulmanın en hızlı yoludur.","## Akıllı Hedef (SMART)\n- Belirli, ölçülebilir, ulaşılabilir, gerçekçi ve zamanlı olsun: 'Ay sonuna kadar 20 yeni kelimeyi çalışıp diktede yazacağım.'\n## Büyük Hedef → Küçük Adımlar\n- Büyük hedefi haftalık ve günlük küçük görevlere böl; her tamamlanan adım motivasyonu artırır.\n## Plan Yapma\n- Akşamdan ertesi günün listesini hazırla; önce en zor işi bitir.\n- 25-30 dakika çalış, 5 dakika mola ver.\n## Erteleme ile Başa Çıkma\n- '5 dakika başlarım' kuralı: başlamak en zoru, devamı kendiliğinden gelir.\n- Telefonu ve oyunu başka odaya koy.\n💡 Hedefe ulaşınca kendini ödüllendir ve yeni hedef belirle; başarı sprint değil maratondur."];
if (typeof MUFREDAT !== 'undefined' && MUFREDAT['8']) {
  MUFREDAT['8'].dersler.forEach(function (d) {
    var dt = DETAY8[d.id];
    if (!dt) return;
    d.birimler.forEach(function (b, i) { if (dt[i]) b.detay = dt[i]; });
  });
}

/* ==== TYMM8 güncellemesi ==== */
delete DETAY8['trk8'];
delete DETAY8['mat8'];
delete DETAY8['fen8'];
delete DETAY8['ing8'];
delete DETAY8['din8'];
delete DETAY8['grs8'];
delete DETAY8['mzk8'];
delete DETAY8['bed8'];
delete DETAY8['tvt8'];
delete DETAY8['ink8'];
if (typeof MUFREDAT !== 'undefined' && MUFREDAT['8']) {
  MUFREDAT['8'].dersler.forEach(function (d) {
    var dt = DETAY8[d.id];
    if (!dt) return;
    d.birimler.forEach(function (b, i) { if (dt[i] && !b.detay) b.detay = dt[i]; });
  });
  MUFREDAT['8'].dersler.forEach(function (d) {
    d.birimler.forEach(function (b) {
      if (b.ad.indexOf('📝') !== -1 || b.ad.indexOf('📋') !== -1) delete b.detay;
    });
  });
}

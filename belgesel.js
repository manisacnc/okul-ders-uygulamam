/* ===== BELGESELLER (konuya bağlı anlatımlı metinler) =====
   BELGESEL["dersId"][birimIndeksi] = { emoji, bas, sure, belge }
   belge: belgesel üslubuyla yazılmış konu anlatım metni.
   Veri yoksa uygulama konu özetini (ozet) kullanır.
*/

var BELGESEL = {};

BELGESEL["fen6"] = {
  0: {
    emoji: "🪐", bas: "Güneş Sistemi'nin Sınırlarında", sure: "4 dk",
    belge: "Yüzyıllar boyunca insanlar gökyüzüne baktı ve Güneş'in etrafında dönen minik ışıkları izledi. Bugün biliyoruz ki bu ışıklardan sekizi gezegendir: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs ve Neptün. Güneş'e en yakın olan Merkür, kayalık ve kraterlerle dolu bir dünyadır; en uzaktaki Neptün ise buzlu, mavi bir devdir. Ara sıra Güneş, Ay'ın gölgesinin ardında bir anda kararır: İşte buna Güneş tutulması denir. Dünya, Güneş ile Ay arasına girerse de Ay tutulması yaşanır. Gökyüzü, her gece yeni bir belgesel izletir bize."
  },
  1: {
    emoji: "❤️", bas: "Kalbin Ritmi", sure: "3 dk",
    belge: "Vücudumuzda hiç durmadan çalışan bir makine var: kalp. Günde ortalama yüz bin kez atar ve kanı atardamarlara pompalar. Atardamarlar oksijen dolu temiz kanı vücuda taşırken, toplardamarlar kirli kanı kalbe geri getirir. Parmağını bileğine koyduğunda hissettiğin vuruş, işte o pompanın ritmidir: nabız. Koşunca kalbin hızlanır, dinlenince yavaşlar. İskelet ve kaslar da hareketini sağlar; birlikte vücudumuzun sistemlerini oluştururlar."
  },
  2: {
    emoji: "🏹", bas: "Kuvvetlerin Savaşı", sure: "3 dk",
    belge: "Bir cisme aynı anda birden çok kuvvet uygulanabilir. İki takım bir halatı zıt yönlere çektiğinde, kimse kimseyi yenemezse halat kıpırdamaz: Bu, dengelenmiş kuvvettir. Ama bir taraf daha güçlü çekerse halat o yöne kayar; ortaya çıkan tek kuvvete bileşke kuvvet denir. Aynı yönlü kuvvetler toplanır, zıt yönlü kuvvetler çıkarılır. Buz üstünde kayan bir kutu ise sürtünme kuvveti yüzünden bir süre sonra durur. Kuvvet, görünmez ama her yerde oynanan bir oyundur."
  },
  3: {
    emoji: "⚛️", bas: "Görünmeyen Taneciklerin Dünyası", sure: "4 dk",
    belge: "Bir damla suya mikroskopla baktığını düşün: Her şey, gözle görülemeyen taneciklerden oluşur. Katılarda tanecikler yerinde titreşir, sıvılarda birbirinin üzerinden kayar, gazlarda ise özgürce uçar. Bir bardak sıcak çay, kaşığa dokunduğunda neden ısınır? Çünkü ısı daima sıcaktan soğuğa akar. Isı bir enerjidir; sıcaklık ise onun derecesini ölçer. Maddeler ısınınca genleşir, soğuyunca büzülür. Sıradan görünen bir buz parçası bile tüm bu olayların sahnesidir."
  },
  4: {
    emoji: "🔊", bas: "Sesin İzinde", sure: "3 dk",
    belge: "Bir gitar teli çekildiğinde titreşir ve o titreşim, havada dalgalar halinde ilerler. Ses, maddelerin titreşmesiyle doğar; katıda, sıvıda ve gazda yayılır ama boşlukta yolculuk edemez. Astronotlar uzayda birbirlerine ancak telsizle seslenebilir. İnce ve kalın seslerin farkı, titreşimin hızındadır: frekans. Gür sesler ise daha büyük genliğe sahiptir. Kulağına ulaşan her titreşim, beyinde bir hikâyeye dönüşür."
  },
  5: {
    emoji: "🫁", bas: "Yaşamın Sistemleri", sure: "4 dk",
    belge: "Her nefes alışında akciğerlerin birer balon gibi genişler; oksijen kana geçer, karbondioksit dışarı atılır. Böbrekler kanı süzer, zararlı maddeleri idrarla dışarı atar. İç salgı bezleri ise büyüme ve düzeni sağlayan hormonları salgılar. Bu sistemler uyum içinde çalışırken, doğru beslenme, su içme ve hareket etme onları korur. Vücudumuz, milyarlarca hücrenin iş birliğiyle kurulmuş dev bir şehirdir."
  },
  6: {
    emoji: "💡", bas: "Elektriğin Sessiz Gücü", sure: "3 dk",
    belge: "Bir ampulün yanması için pil, kablo ve ampulden oluşan kapalı bir devre kurulur. Bakır gibi metaller elektriği kolayca iletir; plastik, cam ve ahşap ise akımı geçirmez. Bu yüzden kablolar plastikle kaplanır: Yalıtkan, elektriğin bekçisidir. Islak elle prize dokunmak tehlikelidir, çünkü su elektriği iletebilir. Görünmez ama güçlü bu akımı, güvenle kullanmayı bilmek herkesin görevidir."
  }
};

BELGESEL["sos6"] = {
  0: {
    emoji: "🤝", bas: "Değerlerimizin Yolculuğu", sure: "3 dk",
    belge: "İnsanlar bir arada yaşamak için kurallar değil, aynı zamanda değerler geliştirdi. Yardımlaşma, dürüstlük, hoşgörü ve sorumluluk... Bir toplulukta herkesin rolü farklıdır: öğrenci, komşu, arkadaş. Bu roller arasında değerler, bizi birbirine bağlayan görünmez köprülerdir. Empati kurduğumuzda başkasının yerine geçer, hoşgörüyle farklılıkları kucaklarız. Değerlerimiz, geçmişten geleceğe taşınan en kıymetli mirastır."
  },
  1: {
    emoji: "🏛️", bas: "Taşların Yazdığı Tarih", sure: "4 dk",
    belge: "Orta Asya bozkırlarında, Orhun nehrinin kıyısında dikilen taşlar, Türk tarihinin en eski yazılı belgeleridir: Orhun Yazıtları. Onları okuyabilen ilk insan, dilbilimci Vilhelm Thomsen oldu ve bin yıllık bir sır çözüldü. Göktürkler, bu taşlara devleti, milleti ve öğütlerini yazdı. Sonra bu kültür, göçlerle Anadolu'ya taşındı. Bugün müzelerde gördüğümüz her taş, binlerce yıllık bir hikâyenin sessiz tanığıdır."
  },
  2: {
    emoji: "🗺️", bas: "Haritanın Kıyısında", sure: "3 dk",
    belge: "Bir haritaya baktığında sadece çizgiler değil, bir ülkenin coğrafyasını görürsün. Türkiye, Asya ile Avrupa'yı birbirine bağlayan bir köprüdür. Kuzeyinde dağlar, ortasında düzlükler, batısında denizler uzanır. Karadeniz'in nemli iklimi ile Güneydoğu'nun kurak bozkırı aynı ülkenin parçalarıdır. İklim ve yeryüzü şekilleri, insanların nerede yaşadığını, ne ürettiğini ve nasıl yaşadığını belirler. Harita, okuyanı bir hikâyenin içine çeker."
  },
  3: {
    emoji: "🐎", bas: "Bozkırdan Anadolu'ya", sure: "4 dk",
    belge: "Asya'nın uçsuz bucaksız bozkırlarında at sırtında doğan bir medeniyet vardı. Orta Asya'daki ilk Türk devletleri göçebe yaşamı seçti: her mevsim yeni otlaklara taşındılar. Onların izlediği yollar, zamanla tarihin en ünlü ticaret yolu oldu: İpek Yolu. İpek, baharat ve fikirler bu yollarda taşındı; farklı kültürler birbiriyle tanıştı. Yüzyıllar sonra bu millet Anadolu'ya yerleşti ve bu topraklarda yeni bir tarih yazmaya başladı."
  },
  4: {
    emoji: "🗳️", bas: "Demokrasinin Okulu", sure: "3 dk",
    belge: "Yönetmek, tek kişinin sözünün geçtiği bir iş değildir. Demokraside kararlar halkın katılımıyla alınır. Vatandaşlar belli yaşlarda seçimlerde oy kullanır, temsilcilerini meclise gönderir. Meclis, ülkenin kanunlarını konuşur ve karara bağlar. Okulda sınıf başkanını seçmek de demokrasinin küçük bir provasıdır: herkesin bir oyu, her sesin bir değeri vardır. Katılmak, sorumluluk almak ve fikir üretmek demokrasinin olmazsa olmazıdır."
  },
  5: {
    emoji: "💡", bas: "Buluşların Aydınlattığı Yol", sure: "4 dk",
    belge: "İnsanlık tarihi, merakın keşfe dönüştüğü bir yolculuktur. Yazı, bilgiyi saklamayı ve geleceğe taşımayı sağladı. Tekerlek, yüklerin ve insanların yolculuğunu hızlandırdı. Pusula, denizcilere yön gösterdi ve yeni kıtaların kapısını araladı. Buhar makinesi, fabrikaları harekete geçirdi; telefon, uzakları yakın etti. Her buluş, önceki bir fikrin üzerine inşa edildi. Bugün kullandığın her cihaz, aslında binlerce yıllık bir düşüncenin torunudur."
  },
  6: {
    emoji: "🌍", bas: "Küçülen Dünya", sure: "3 dk",
    belge: "İstanbul'da üretilen bir ürün, aynı gün başka bir kıtaya uçabilir. Ticaret, ülkeleri birbirine bağlayan dev bir ağdır: hammadde bir yerde işlenir, ürün başka yerde tüketilir. Küresel ısınma, kuraklık gibi sorunlar tek bir ülkenin değil, tüm insanlığın ortak meselesidir. Bu yüzden ülkeler dayanışma ve iş birliği geliştirir. Dünya, sanki herkesin kapısı birbirine açılan büyük bir köy haline geldi."
  },
   7: {
    emoji: "🏭", bas: "Üretimin Görünmeyen Eli", sure: "3 dk",
    belge: "Elindeki bir ekmek, bir çiftçinin toprağa attığı tohumla başlar. Üretimden tüketime uzanan bu yolculukta araya dağıtım girer: ürünler fırınlara, pazarlara ve marketlere ulaşır. Kaynaklar sınırsız değildir; bu yüzden bilinçli tüketim ve tasarruf hayati önem taşır. Suyu, enerjiyi ve yiyeceği dikkatli kullanmak, geleceğe yapılan en akıllıca yatırımdır. Bir toplum, ürettiği kadar değil, ürettiğini akıllıca kullandığı kadar güçlüdür."
  }
};

BELGESEL["fen5"] = {
  0: {
    emoji: "🌍", bas: "Uzaydaki Evimiz", sure: "4 dk",
    belge: "Gökyüzüne baktığında gördüğün Güneş, milyarlarca yıldızdan sadece biri. Güneş bir yıldızdır; Dünya ise onun çevresinde dolanan bir gezegen. Peki ya Ay? Ay, Dünya'nın çevresinde dolanan sessiz bir uydudur. Dünya kendi etrafında döndükçe gece ve gündüz yaşanır; Güneş'in çevresindeki yolculuğu ise mevsimleri getirir. Güneş'in yüzeyi çok sıcak, Ay'ın yüzeyi kraterlerle doludur. Dünyamız ise üzerinde yaşam barındıran tek gök cismidir. Üç gök cismi, kocaman uzayda küçücük ama düzenli bir aile gibidir."
  },
  1: {
    emoji: "🐞", bas: "Canlıların Gizli Krallığı", sure: "4 dk",
    belge: "Görünmez küçük canlılar, bir damla suda milyonlarca olabilir: mikroskobik canlılar. Onları çıplak gözle göremeyiz ama her yerde yaşarlar. Bitkiler, kendi besinini Güneş'in yardımıyla üretir; hayvanlar ise yaşamak için çevredeki kaynakları kullanır. Mantarlar, doğanın geri dönüşüm ustalarıdır. Bütün canlıların ortak özelliği beslenmek, büyümek ve üremektir. Bahçedeki bir karınca ile gökteki bir kuş, aynı yaşam ağacının dallarıdır."
  },
  2: {
    emoji: "🏋️", bas: "Görünmeyen Kuvvetin Gücü", sure: "3 dk",
    belge: "Bir topa vurduğunda onu farkettirmeden iten şey kuvvettir. Kuvvet, cisimleri iter ya da çeker. Bilim insanları bu büyüklüğü dinamometre ile ölçer; birimi Newton'dur. Peki buz üstünde kayan bir cisim neden bir süre sonra durur? Çünkü sürtünme kuvveti ona karşı çalışır. Sürtünme bazen düşmanımızdır, bazen de en iyi dostumuz: ayakkabının altındaki dişler, sürtünme sayesinde kaymamızı önler. Görünmez olan kuvvet, her an hayatımıza dokunur."
  },
  3: {
    emoji: "🧊", bas: "Maddelerin Dönüşümü", sure: "3 dk",
    belge: "Buzdolabından çıkan bir buz küpünü sıcak güneşin altına bırak: önce suya, sonra havaya karışır. Maddeler katı, sıvı ve gaz halinde yaşar. Isı aldıkça erir, buharlaşır, kaynar; ısı verdikçe donar ve yoğunlaşır. Her maddenin erime ve kaynama noktası kendine özgüdür: bu, onun parmak izidir. Su, 100 derecede kaynarken alkol daha erken kaynar. Aynı madde, sıcaklıkla birlikte bir görünümden diğerine geçer. Madde, hiçbir zaman yok olmaz; sadece hâl değiştirir."
  },
  4: {
    emoji: "💡", bas: "Işığın Doğrusal Yolculuğu", sure: "3 dk",
    belge: "Bir el fenerini karanlık odada yaktığında ışığın düz bir çizgi çizdiğini görürsün. Işık, her zaman doğrusal bir yol izler. Önüne opak bir cisim gelirse geçemez ve arkasında gölge oluşur: gölge, ışığın engellendiğinin kanıtıdır. Ayna karşısına geçtiğinde ise ışık yansır ve görüntünü görürsün. Saydam cam, ışığı geçirir; kâğıt gibi maddeler ise geçirmez. Gözün her gün milyonlarca ışık huzmesiyle çalışır, dünyayı bu sessiz yolculuk sayesinde görür."
  },
  5: {
    emoji: "🌿", bas: "Gezegenin Bekçileri", sure: "3 dk",
    belge: "Ormanlar, göller, çöller ve denizler: hepsi doğal çevremizin parçalarıdır. İnsanların kurduğu şehirler ve yollar ise yapay çevreyi oluşturur. İki dünya da bizimdir ama doğal olanın yerini hiçbir şey tutamaz. Çöpler doğaya karıştığında, atıklar denizlere aktığında canlıların evleri kirlenir. Geri dönüşüm, ağaç dikmek ve suyu tasarruflu kullanmak, gezegeni korumak için atılan adımlardır. Doğayı koruyan, aslında kendi geleceğini korur."
  },
  6: {
    emoji: "🔌", bas: "Ampulün Kısa Hikâyesi", sure: "3 dk",
    belge: "Pil, ampul, duy ve kablolar... İlk bakışta sıradan parçalar ama doğru bağlandıklarında bir mucize gerçekleşir: ampul yanar. Elektrik, kabloların içinde görünmez bir ırmak gibi akar. Anahtarı açtığında bu ırmak kesilir ve ampul söner: devre açık olur. Anahtarı kapattığında ise devre tamamlanır ve ışık doğar. Pil bu devrenin kalbidir; ampul ise elektrik enerjisini ışığa çeviren sihirbaz. Bir kabloyu yanlış bağlamak, o sihirbazın performansını bozmaya yeter."
  }
};

BELGESEL["fen7"] = {
  0: {
    emoji: "🌌", bas: "Samanyolu'nun Derinliklerinde", sure: "4 dk",
    belge: "Gece gökyüzüne baktığında gördüğün yıldızlar, Samanyolu Galaksisi'nin üyeleridir. Yıldızlar, kendi ışığını üreten dev gaz küreleridir; güneşimiz de onlardan biri. Galaksimizde milyarlarca yıldız, yüz milyonlarca gezegen olabilir. Teleskop, bu uzak dünyaları gözümüze getiren büyüleyici bir araçtır. Uzay araçları ise kuyruklu yıldızları, asteroitleri ve uzak gezegenleri yakından inceler. Bir gün insanlar Mars'a ayak basarsa, bu yolculuğun ilk adımı bugün gökyüzüne bakan meraklı gözlerle atılacak."
  },
  1: {
    emoji: "🧫", bas: "Hücrelerin Sessiz Şehri", sure: "4 dk",
    belge: "Vücudun, trilyonlarca hücreden kurulu dev bir şehirdir. Her hücrenin çekirdeği, sitoplazması ve zarı vardır; bitki hücrelerinin ayrıca bir çeperi ve kloroplastı bulunur. Hücreler bölünerek çoğalır: mitoz bölünme vücudumuzu büyütür ve yaralarımızı iyileştirir; mayoz bölünme ise üreme hücrelerini oluşturur. Bir hücre bölünürken genetik bilgi, büyük bir kütüphane gibi kopyalanır. Gözle görülemeyen bu küçük şehirler, içinde yaşadığımız en büyük sırrı saklar: yaşamı."
  },
  2: {
    emoji: "⚡", bas: "Enerjinin Dansı", sure: "3 dk",
    belge: "Tepedeki bir top, henüz yuvarlanmadan bile enerjiye sahiptir: potansiyel enerji. Top bırakıldığında bu enerji kinetik enerjiye dönüşür ve top hızla yuvarlanır. Bilimde iş, kuvvet ile alınan yolun çarpımıdır. Enerji ise iş yapabilme yeteneğidir ve hiçbir zaman yok olmaz; sadece biçim değiştirir. Güneş'ten gelen ışık enerjisi, bitkilerde kimyasal enerjiye, yediğimiz besinlerde yeniden bizim hareket enerjimize dönüşür. Bir bisiklet sürücüsünde bile dev bir enerji dönüşümü yaşanır."
  },
  3: {
    emoji: "🧪", bas: "Elementler ve Karışımlar", sure: "3 dk",
    belge: "Elindeki demir kaşık, saf bir elementtir: demir. Ama içtiğin su bir element değil, iki elementin birleşimi olan bir bileşiktir: hidrojen ve oksijen. Karışımlar ise maddelerin yeni bir madde oluşturmadan bir araya gelmesidir: tuzlu su bir karışımdır. Bilim insanları karışımları süzme, mıknatıs ve buharlaştırma gibi yöntemlerle ayırır. Bir bardak tuzlu su, tuz ve suyun izlediği yollarla yeniden ayrışabilir. Her madde, atomlardan kurulu görünmez bir dünyanın elçisidir."
  },
  4: {
    emoji: "🪞", bas: "Aynaların Aynası, Merceklerin Sırrı", sure: "3 dk",
    belge: "Düz aynada kendini görürsün ama çukur aynada görüntü büyüyebilir, tümsek aynada küçülebilir. Işık, pürüzsüz yüzeyden yansır ve saydam bir maddeye geçerken kırılır. Mercekler işte bu kırılma üzerine kuruludur: gözlük camları, büyüteçler ve teleskoplar mercektir. Saydam cam ışığı geçirir, yarı saydam buzlu cam biraz geçirir, opak bir duvar ise hiç geçirmez. Her sabah aynaya baktığında aslında ışığın yansıma yasalarını izliyorsun."
  },
  5: {
    emoji: "🌱", bas: "Yaşamın Döngüsü", sure: "3 dk",
    belge: "Bir tohum toprağa düştüğünde suyu bulur, çimlenir ve filizlenir. Bitkiler çiçek açar, meyve verir ve yeni tohumlar bırakır. Hayvanlar ise yumurtlar ya da doğurur; yavrular büyür, olgunlaşır ve yeniden ürer. Bu döngü milyonlarca yıldır durmadan işler. Her canlı, kendi yaşam döngüsünde annesine ve babasına benzeyen yeni nesiller bırakır. Bir kelebeğin yumurtadan tırtıla, tırtıldan kozaya ve kozadan kanatlı kelebeğe yolculuğu, doğanın en büyüleyici hikâyelerinden biridir."
  },
  6: {
    emoji: "💡", bas: "Elektriğin İki Yolu", sure: "3 dk",
    belge: "Ampullerin iki farklı düzeni vardır. Seri devrede ampuller tek bir hat üzerinde zincir gibi dizilir; biri sönerse tüm ışıklar kaybolur. Paralel devrede ise her ampul kendi kolundan akım alır; biri yanarsa diğerleri çalışmaya devam eder. Bu yüzden evlerdeki prizler paralel bağlıdır: bir odayı kapatmak bütün evi karanlıkta bırakmaz. Direnç arttıkça akım azalır; bu yasayı ilk fark eden Georg Ohm'dur. Işığın yandığı her devre, Ohm'un kurallarının sessiz bir kanıtıdır."
  }
};

BELGESEL["fen8"] = {
  0: {
    emoji: "🌈", bas: "Mevsimlerin Sırrı", sure: "4 dk",
    belge: "Dünya, Güneş'in çevresinde dönerken hep aynı açıyla eğik durur: eksen eğikliği. Bu eğiklik yüzünden Güneş ışınları yıl içinde farklı açılarla gelir ve mevsimler oluşur. Yazın Güneş daha dik vurur, gündüzler uzar; kışın ise ışınlar eğik gelir, gündüzler kısalır. İklim, bir bölgenin uzun yıllar boyunca görülen ortalama hava durumudur; hava olayları ise günlük değişimlerdir. Hava tahminleri, bu döngüyü çözme çabasıdır. Mevsimler, evrenin en düzenli ve en güzel ritüelidir."
  },
  1: {
    emoji: "🧬", bas: "Yaşamın Şifresi", sure: "4 dk",
    belge: "Her canlıda, yaşamın planını taşıyan sarmal bir molekül bulunur: DNA. DNA'nın parçalarına gen denir; genler kromozomların üzerinde dizilir. Göz rengin, saç rengin ve daha fazlası bu planın içinde yazılıdır. Özellikler anne ve babadan yavruya genlerle aktarılır. Bazen DNA'da mutasyon denilen değişiklikler olur; canlılar yaşadıkları ortama adapte olur ve hayatta kalır. Genetik mühendisleri bu şifreyi okumayı öğrendi. Her hücre, içinde milyonlarca yıllık bir tarih taşır."
  },
  2: {
    emoji: "🎈", bas: "Basıncın Görünmeyen Eli", sure: "3 dk",
    belge: "Bir çivinin üzerine basmak acıtır; aynı kuvvet geniş bir yastığa uygulanırsa hiç hissedilmez. Bunun sebebi basınçtır: kuvvet ne kadar dar alana uygulanırsa basınç o kadar büyür. Denizin derinliklerinde su basıncı her metreyle artar; dağın zirvesinde ise atmosfer basıncı azalır. Sıvılar ve gazlar basıncı bulundukları kabın her yönüne iletir. Buzda yürüyen insanlar neden sürünerek ilerler? Yüzey alanını artırarak basıncı azaltmak için. Basınç, doğanın en ince ayarlı kuvvetlerinden biridir."
  },
  3: {
    emoji: "🏭", bas: "Periyodik Tablonun Dünyası", sure: "3 dk",
    belge: "Bir kütüphaneye benzer periyodik tablo: her elementin kendi rafı, kendi kimliği vardır. Hidrojen ve helyumdan altın ve uranyuma kadar elementler bu tabloda sıralanır. Asitler ekşi, bazlar acıdır; pH cetveli bunları ölçer. Asit ile baz birleştiğinde nötrleşme gerçekleşir: tuz ve su oluşur. Kimyasal tepkimelerde atomlar yok olmaz, sadece yeniden düzenlenir. Endüstri, bu tepkimeleri kullanarak hayatımızı kolaylaştıran sayısız ürün üretir."
  },
  4: {
    emoji: "⚙️", bas: "Basit Makinelerin Dehası", sure: "3 dk",
    belge: "İnsanlar, taşları taşımak için kaldıraç icat etti; kuyulardan su çekmek için makara kullandı; yükleri rampalardan çekmek için eğik düzlemi keşfetti. Bu basit makineler, küçük kuvvetle büyük işler başarmayı sağlar. Dişli çarklar, bisikletin tekerleğini döndürür; palangalar yükleri birkaç kat hafifletir. Unutma: basit makineler kuvvetten veya yoldan kazanç sağlar ama asla işten kazanç sağlamaz. Her modern makine, bu eski fikirlerin büyüyüp gelişmiş hâlidir."
  },
  5: {
    emoji: "🌿", bas: "Enerjinin Yaşam Döngüsü", sure: "3 dk",
    belge: "Bir yaprağın içinde her gün bir mucize gerçekleşir: fotosentez. Bitkiler, güneş ışığını, suyu ve karbondioksiti kullanarak besin üretir. Bu besin, besin zinciri boyunca canlıdan canlıya aktarılır: bitki çekirgeyi, çekirge kurbağayı, kurbağa yılanı besler. Tüm canlılar, bu enerjiyi solunumla kullanılabilir hale getirir. Doğal kaynaklar sınırlıdır; bu yüzden sürdürülebilir yaşam, enerjiyi verimli kullanmayı gerektirir. Güneş, bütün yaşamın görünmez yakıtıdır."
  },
  6: {
    emoji: "🔋", bas: "Elektriğin Gizli Yükü", sure: "3 dk",
    belge: "Saçlarını plastik tarağa sürttüğünde saçların dikleşir: elektriklenme! Bu, yüklerin dengesinin bozulmasıdır. Sürtünmeyle, dokunmayla ve etkiyle yüklenen cisimler birbirini iter ya da çeker. Benzer yükler kaçar, zıt yükler kucaklaşır. Elektrik akımı ise bu yüklerin iletken üzerindeki düzenli yolculuğudur. Evlerimize ulaşan elektrik, makineleri çalıştırır ama aynı zamanda dikkat ister. Enerji tasarrufu yapmak, hem cebimize hem gezegenimize yatırımdır."
  }
};

BELGESEL["sos5"] = {
  0: {
    emoji: "🤝", bas: "Birey Olmanın Yolu", sure: "3 dk",
    belge: "Her insan, bir birey olarak haklara sahiptir: eğitim hakkı, sağlık hakkı, oyun oynama hakkı... Hakların yanında sorumluluklar da vardır: çevreyi temiz tutmak, kurallara uymak, sözünde durmak. Bir sınıf öğrencisinin en önemli görevlerinden biri derslerine çalışmaktır. Birey, hem haklarını bilen hem de sorumluluklarını yerine getiren kişidir. Toplum, sorumlu bireylerden oluştuğunda daha güçlü olur."
  },
  1: {
    emoji: "🎉", bas: "Kültürün Görünmez Bağları", sure: "3 dk",
    belge: "Türküler, yemekler, düğünler ve bayramlar... Bir milletin kültürü, onu birleştiren görünmez bağlardır. Dil, kültürün en önemli taşıyıcısıdır; atasözlerimiz ve deyimlerimiz geçmişin bilgeliğini taşır. Milli bayramlarda kutladığımız coşku, bizi ortak bir tarih etrafında buluşturur. Kültür değişir ve zenginleşir ama kökleri geçmiştedir. Kültürünü bilen nesiller, geleceğe daha güvenle bakar."
  },
  2: {
    emoji: "🗺️", bas: "Haritada Kaybolmak", sure: "3 dk",
    belge: "Bir harita, dünyayı küçük bir kâğıda sığdıran büyülü bir penceredir. Yön bulmak için pusula ve yıldızlar kullanılır; koordinatlar ise bir yeri tam olarak bulmayı sağlar. Türkiye, hem dağları hem denizleriyle coğrafi bir çeşitlilik ülkesidir. Karadeniz'in nemli ormanları, İç Anadolu'nun bozkırları, Akdeniz'in sıcak kıyıları... İklim ve yeryüzü şekilleri, insanların nerede ve nasıl yaşadığını belirler. Harita okuyan, dünyayı elinde tutar."
  },
  3: {
    emoji: "💡", bas: "Buluşların Işığı", sure: "3 dk",
    belge: "Ampul, telefon ve internet... Her buluş, insanlığın ortak hikâyesine yeni bir sayfa ekledi. Teknoloji hayatı kolaylaştırır ama doğru kullanılmalıdır. Bilgisayarı ve telefonu eğitim için kullanmak, internetin güvenli ve faydalı kullanımını öğrenmek çağımızın becerisidir. Ancak teknolojiyi bilinçsiz kullanmak bağımlılığa yol açabilir. Doğru kullanılan teknoloji, insanlığın en büyük yardımcısıdır."
  },
  4: {
    emoji: "🛒", bas: "İhtiyaç ve İsraf", sure: "3 dk",
    belge: "Her gün yediğimiz ekmek, birçok emeğin sonucudur: çiftçi, değirmenci, fırıncı. Üretim, ihtiyaçlarımızı karşılamak için yapılır; bilinçli tüketim ise gereksiz satın almamaktır. İsraf, kaynakların boşa gitmesidir: suyu açık bırakmak, yemeği çöpe atmak, alınmayacak şeyleri satın almak. Tasarruf ise geleceğe yatırımdır. Kaynaklar sınırsız değildir; bu yüzden her birey, israf etmeyen bilinçli bir tüketici olmalıdır."
  },
  5: {
    emoji: "🗳️", bas: "Vatandaşlığın Sorumluluğu", sure: "3 dk",
    belge: "Vatandaş, bir devlete bağlı olan kişidir. Demokraside halk, yöneticilerini seçimle belirler; her oy bir ses, her ses bir değerdir. Çocukların da korunan hakları vardır: yaşama, eğitim, oyun ve ailesiyle yaşama hakkı. Cumhuriyet, milletin kendi kendini yönettiği yönetim biçimidir. Okulda sınıf başkanını seçerken bile demokrasiyi yaşarız. Haklarını bilen ve sorumluluk alan vatandaş, güçlü bir ülkenin temel taşıdır."
  },
  6: {
    emoji: "🌍", bas: "Sınırları Aşan Dünya", sure: "3 dk",
    belge: "Dünya üzerinde yedi kıta, yüzlerce ülke ve milyarlarca insan yaşar. Uçaklar ve gemiler, kıtaları birbirine yaklaştırdı; telefon ve internet ise iletişimi saniyelere indirdi. Bir ülkede üretilen ürün, başka bir ülkede tüketilir. Ülkeler, ticaret, spor ve bilimde iş birliği yapar. Bu ortak dünyada, farklı kültürleri tanımak ve anlamak büyük bir zenginliktir. Dünya, artık herkesin komşusu olduğu büyük bir köydür."
  }
};

BELGESEL["sos7"] = {
  0: {
    emoji: "📞", bas: "İletişimin İnceliği", sure: "3 dk",
    belge: "İletişim, sadece konuşmak değildir; dinlemek de onun yarısıdır. 'Sen dili' yerine 'ben dili' kullanmak, karşımızdakini suçlamadan derdini anlatmaktır. Kitle iletişim araçları, bilgiyi milyonlara aynı anda ulaştırır: televizyon, gazete, internet. Ancak her bilgi doğru değildir; medyayı eleştirel gözle okumak gerekir. Etkili iletişim kuran insan, dostluklarını ve ailesini güçlendirir. İletişim, köprülerin en sağlamıdır."
  },
  1: {
    emoji: "🏘️", bas: "Nüfusun Dansı", sure: "3 dk",
    belge: "Bir ülkenin nüfusu, sayımlarla belirlenir: kim, nerede, kaç kişi? Türkiye'de nüfus, iklimin ve iş imkânlarının elverdiği bölgelerde yoğunlaşır. Kıyılar ve büyük şehirler kalabalıklaşırken, dağ köyleri boşalır. Göç, insanların daha iyi yaşam arayışıdır: köyden kente, bir ülkeden başka bir ülkeye. Her göç, hem gideni hem geleni değiştirir. Nüfus, bir ülkenin yaşayan öyküsüdür."
  },
  2: {
    emoji: "🏛️", bas: "Osmanlı'nın İzinde", sure: "4 dk",
    belge: "Bir beylik olarak başlayan Osmanlı Devleti, kısa sürede üç kıtaya yayıldı. 1453'te İstanbul'un fethi, çağ kapatıp çağ açtı: Fatih Sultan Mehmet, Konstantinopolis surlarını aştı. Osmanlı; camileri, medreseleri, hanları ve kervansaraylarıyla bir kültür devletiydi. Mimar Sinan'ın eserleri, yüzyıllar sonra bile hayranlık uyandırır. Tarih, taşların içine yazılmış bir destandır."
  },
  3: {
    emoji: "💼", bas: "Ekonomi ve İnsan", sure: "3 dk",
    belge: "İhtiyaçlarımız sonsuz, kaynaklarımız sınırlıdır: işte ekonominin temel meselesi budur. Üreticiler mal ve hizmet üretir, tüketiciler satın alır. Bir ailenin gelir ve giderini dengelemesine bütçe denir. Aynı mantık devletler için de geçerlidir. Akıllıca harcamak, tasarruf etmek ve ihtiyaç ile isteği ayırmak bütçenin altın kuralıdır. Para, doğru kullanıldığında hayatı kolaylaştıran bir araçtır."
  },
  4: {
    emoji: "🏛️", bas: "Demokrasinin Kalbi", sure: "3 dk",
    belge: "Demokrasi, 'halkın iktidarı' demektir. Bu yönetimde kararlar seçimle alınır, her vatandaşın oyu eşittir. Vatandaşın hakları vardır ama sorumlulukları da vardır: kurallara uymak, görüşlerini saygıyla ifade etmek. Sivil toplum kuruluşları, gönüllülerin bir araya gelerek topluma katkı sağladığı yapılardır. Sınıf başkanını seçmek, kulüpte söz almak: demokrasi aslında günlük hayatın içindedir."
  },
  5: {
    emoji: "🌐", bas: "Kültürlerin Köprüsü", sure: "3 dk",
    belge: "Dünyada yüzlerce ülke, binlerce dil ve sayısız kültür vardır. Ülkeler, ortak sorunlara birlikte çözüm bulmak için uluslararası kuruluşlar kurdu. Ticaret, spor olimpiyatları ve kültür festivalleri ülkeleri birbirine bağlar. Farklı kültürleri tanımak, önyargıları eritir. Bir yemeği paylaşmak, bir şarkıyı birlikte söylemek barışın en küçük ama en güçlü adımıdır. Dünya, çeşitliliğiyle güzeldir."
  }
};

BELGESEL["ink8"] = {
  0: {
    emoji: "🌟", bas: "Bir Kahramanın Doğuşu", sure: "4 dk",
    belge: "1881'de Selanik'te dünyaya gelen bir çocuk, tarihin akışını değiştirecekti: Mustafa Kemal. Harp Okulu'nda yetişti, Selanik'in ve İstanbul'un havasında vatan sevgisiyle büyüdü. Osmanlı Devleti, çöküşün eşiğindeydi; topraklar elden çıkıyor, halk yoksulluk çekiyordu. Genç subay, bu manzaranın karşısında 'Kurtuluş' fikrini büyüttü. Bir insanın hayatı, bir milletin kaderiyle buluştuğunda işte böyle destanlar yazılır."
  },
  1: {
    emoji: "🚩", bas: "Millî Uyanış", sure: "4 dk",
    belge: "Birinci Dünya Savaşı sona erdiğinde Osmanlı Devleti, Mondros Ateşkesi'ni imzaladı. Düşman gemileri İstanbul'a demir attı; Anadolu'nun dört bir yanı işgal edildi. İzmir'e çıkan Yunan askerleri, milletin onurunu kanattı. Ancak millet, teslim olmadı: Havza'dan Amasya'ya, Erzurum'dan Sivas'a kongreler düzenlendi. Ulusal direniş, işte bu toplantılarda örgütlendi. Bir milletin uyanışı, işgalcilerin tahmin etmediği en büyük kuvvetti."
  },
  2: {
    emoji: "🏆", bas: "Ya İstiklal Ya Ölüm", sure: "4 dk",
    belge: "23 Nisan 1920'de Ankara'da Türkiye Büyük Millet Meclisi açıldı: millet, egemenliğini ilan etti. Ardından Kurtuluş Savaşı başladı. İnönü, Sakarya ve Başkomutan Meydan Muharebesi'nde millet, bağımsızlık için canını ortaya koydu. 30 Ağustos 1922'de zafer kazanıldı. 24 Temmuz 1923'te Lozan Antlaşması, yeni Türk Devleti'ni dünyaya kabul ettirdi. 'Ya istiklal ya ölüm' sözü, bir milletin yeminine dönüştü."
  },
  3: {
    emoji: "🏛️", bas: "Cumhuriyetin İlkeleri", sure: "4 dk",
    belge: "29 Ekim 1923'te Cumhuriyet ilan edildi: millet, artık kendi kendini yönetiyordu. Atatürk, devleti çağdaşlaştırmak için inkılaplar yaptı: yeni harfler, yeni eğitim, hukuk ve kıyafet... Atatürk ilkeleri, bu dönüşümün fikrî temelidir: Cumhuriyetçilik, milliyetçilik, halkçılık, devletçilik, laiklik ve inkılapçılık. 'Muasır medeniyet seviyesine ulaşmak' bu ilkelerin ortak hedefiydi. Cumhuriyet, gençlere emanet edilen en büyük değerdir."
  },
  4: {
    emoji: "🎓", bas: "Demokrasinin Sınavı", sure: "4 dk",
    belge: "Cumhuriyetin ilk yıllarında tek parti yönetimi vardı; ancak Atatürk, demokrasinin eksik olduğunu biliyordu. Çok partili hayata geçiş denemeleri yapıldı: Serbest Cumhuriyet Fırkası kısa süre sonra kapatılsa da bu bir provaydı. Eğitimde, sağlıkta ve ekonomide büyük adımlar atıldı: Millet Mektepleri, yeni üniversiteler, fabrikalar... Devlet, vatandaşların yaşamını yükseltmek için çalıştı. Demokrasi, kurumsal deneyimle güçlenen bir ağaç gibi büyüdü."
  },
  5: {
    emoji: "🌍", bas: "Dünya Sahnesinde Türkiye", sure: "4 dk",
    belge: "Cumhuriyet, dış politikada 'Yurtta sulh, cihanda sulh' ilkesini benimsedi. 1936'da Montrö Boğazlar Sözleşmesi ile boğazların kontrolü Türkiye'ye geçti. Milletler Cemiyeti'ne girildi, komşularla dostluk antlaşmaları imzalandı. 1939'da Hatay, ana vatana katıldı: bu, diplomasinin kazandığı bir zaferdir. Genç cumhuriyet, dünya sahnesinde bağımsızlığını ve barışı savunarak yerini aldı. Diplomasi, savaşmadan kazanılan savaştır."
  }
};

/* ===== 3B Fen Animasyonları =====
   FEN3D["dersId"] = { birimIndex: { bas, emoji, anlatim, sahne } }
   sahne: CSS animasyonlu 3B sahne tipi (gezegen, kalp, kuvvet, tanecik, ses, solunum, elektrik) */
var FEN3D = {
  "fen6": {
    0: { bas: "Güneş Sistemi Gezintisi", emoji: "🪐", sahne: "gezegen",
         anlatim: "Güneş Sistemi'nde 8 gezegen Güneş'in çevresinde elips yörüngelerde döner. Gezegenler sırasıyla Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs ve Neptün'dür. Bu 3B sahnesinde gezegenlerin Güneş etrafındaki dolanma hareketini izle!" },
    1: { bas: "Kalp ve Dolaşım", emoji: "❤️", sahne: "kalp",
         anlatim: "Kalp, vücudumuza kan pompalayan kaslı bir organdır. Kalp atışıyla kan damarlarda dolaşır; oksijen ve besin hücrelere taşınır. Sahnedeki nabız atışını izle: kalbin kasılması ve gevşemesi ritmik bir döngüdür." },
    2: { bas: "Bileşke Kuvvet", emoji: "🏹", sahne: "kuvvet",
         anlatim: "Birden fazla kuvvet aynı cisme etki ettiğinde bu kuvvetlerin toplam etkisine bileşke kuvvet denir. Aynı yöndeki kuvvetler toplanır, zıt yöndekiler çıkarılır. Dengelenmiş kuvvetlerde cisim durur veya sabit hızla gider." },
    3: { bas: "Taneciklerin Hareketi", emoji: "⚛️", sahne: "tanecik",
         anlatim: "Bütün maddeler gözle görülemeyen taneciklerden oluşur. Katıda tanecikler titreşir, sıvıda yavaşça dolaşır, gazda serbestçe hareket eder. Sıcaklık arttıkça taneciklerin hareketi hızlanır." },
    4: { bas: "Ses Dalgaları", emoji: "🔊", sahne: "ses",
         anlatim: "Ses, titreşen maddelerin taneciklerini harekete geçirerek dalgalar halinde yayılır. Sesin yüksekliği frekansa, gürlüğü genliğe bağlıdır. Boşlukta ses yayılmaz çünkü tanecik yoktur." },
    5: { bas: "Solunum Sistemi", emoji: "🫁", sahne: "solunum",
         anlatim: "Nefes aldığımızda akciğerler genişler ve oksijen kana geçer; nefes verirken karbondioksit dışarı atılır. Diyafram kası bu genişleme ve daralmayı sağlar." },
     6: { bas: "Elektrik Devresi", emoji: "💡", sahne: "elektrik",
         anlatim: "Bir ampulü yakmak için pil, duy ve bağlantı kablolarından oluşan kapalı bir devre kurulur. Metalller elektriği iletir, plastik ve tahta gibi maddeler yalıtkan olduğu için iletmez." }
  },
  "fen5": {
    0: { bas: "Güneş, Dünya ve Ay", emoji: "🌍", sahne: "gezegen",
         anlatim: "Güneş bir yıldızdır; Dünya, Güneş'in çevresinde, Ay ise Dünya'nın çevresinde dolanır. Dünya'nın dönmesiyle gece ve gündüz, Güneş'in çevresinde dolanmasıyla mevsimler oluşur. Sahnedeki gök cisimlerinin hareketini izle!" },
    1: { bas: "Canlılar Dünyası", emoji: "🐞", sahne: "tanecik",
         anlatim: "Canlılar beslenir, büyür ve ürer. Bitkiler, hayvanlar, mantarlar ve mikroskobik canlılar yaşam ağacının dallarıdır. Mikroskopla görülen minik canlılar da doğanın önemli bir parçasıdır." },
    2: { bas: "Kuvvetin Ölçülmesi", emoji: "🏋️", sahne: "kuvvet",
         anlatim: "Kuvvet, cisimleri iter ya da çeker. Dinamometre (yaylı tartı) ile kuvvet Newton (N) cinsinden ölçülür. Sürtünme kuvveti ise cisimleri yavaşlatır; kaygan zeminlerde sürtünme azalır." },
    3: { bas: "Madde ve Değişim", emoji: "🧊", sahne: "tanecik",
         anlatim: "Maddeler katı, sıvı ve gaz halde bulunur. Isı alınca erime, buharlaşma ve kaynama; ısı verince donma ve yoğuşma gerçekleşir. Her maddenin erime ve kaynama noktası farklıdır." },
    4: { bas: "Işığın Yayılması", emoji: "💡", sahne: "ses",
         anlatim: "Işık, doğrusal bir yol izleyerek yayılır. Işık kaynağından çıkan ışınlar engelle karşılaşınca arkasında gölge oluşur. Pürüzsüz yüzeylerde yansıma gerçekleşir; ışık saydam maddelerden geçer." },
    5: { bas: "İnsan ve Çevre", emoji: "🌿", sahne: "gezegen",
         anlatim: "Çevremiz doğal ve yapay varlıklardan oluşur. Temiz hava, su ve toprak canlıların temel ihtiyaçlarıdır. Doğal kaynakları korumak ve çevre kirliliğini azaltmak hepimizin görevidir." },
    6: { bas: "Elektrik Devreleri", emoji: "🔌", sahne: "elektrik",
         anlatim: "Basit bir elektrik devresi pil, ampul, kablo ve anahtardan oluşur. Devre kapalıysa ampul yanar, anahtar açılınca akım kesilir ve ampul söner. Bağlantı noktaları düzgün olmalıdır." }
  },
  "fen7": {
    0: { bas: "Güneş Sistemi ve Ötesi", emoji: "🌌", sahne: "gezegen",
         anlatim: "Yıldızlar kendi ışığını üreten gök cisimleridir. Galaksimiz Samanyolu'nda milyarlarca yıldız vardır. Teleskoplar sayesinde uzayı keşfeder, uzay araçlarıyla gök cisimlerini yakından inceleriz." },
    1: { bas: "Hücre ve Bölünmeler", emoji: "🧫", sahne: "tanecik",
         anlatim: "Hücre; hücre zarı, sitoplazma ve çekirdekten oluşur. Mitoz bölünme ile vücut hücreleri çoğalır, mayoz bölünme ile üreme hücreleri oluşur. Bölünme sırasında kalıtsal bilgi yeni hücrelere aktarılır." },
    2: { bas: "Kuvvet ve Enerji", emoji: "⚡", sahne: "kuvvet",
         anlatim: "İş = Kuvvet × Yol. Hareket halindeki cisimlerin kinetik enerjisi, konuma bağlı cisimlerin potansiyel enerjisi vardır. Enerji bir formdan diğerine dönüşür; sürtünme enerjiyi ısıya çevirir." },
    3: { bas: "Saf Madde ve Karışımlar", emoji: "🧪", sahne: "tanecik",
         anlatim: "Elementler tek tür atomdan, bileşikler birden çok element atomunun birleşmesinden oluşur. Karışımlar ise birden çok saf maddenin bir araya gelmesidir; çözelti, süzme ve mıknatısla ayırma yöntemleriyle ayrılır." },
    4: { bas: "Işığın Madde ile Etkileşimi", emoji: "🪞", sahne: "ses",
         anlatim: "Işık; yansıma, soğrulma ve kırılma yapabilir. Aynalar düz ve çukur/tümsek olabilir; mercekler ışığı toplar ya da dağıtır. Saydam maddeler ışığı geçirir, opak maddeler geçirmez." },
    5: { bas: "Üreme, Büyüme ve Gelişme", emoji: "🌱", sahne: "kalp",
         anlatim: "Canlılar eşeyli veya eşeysiz ürer. Bitkilerde tohumla, hayvanlarda yavrulayarak üreme görülür. Büyüme ve gelişme evrelerinde canlılar; beslenir, olgunlaşır ve yaşam döngüsünü tamamlar." },
    6: { bas: "Elektrik Devreleri", emoji: "⚡", sahne: "elektrik",
         anlatim: "Seri devrede ampuller tek hat üzerinde, paralel devrede ise kendi kollarında bağlanır. Ampul parlaklığı akımla ilgilidir; direnç büyüdükçe akım azalır. Ohm Kanunu: Akım = Gerilim / Direnç." }
  },
  "fen8": {
    0: { bas: "Mevsimler ve İklim", emoji: "🌈", sahne: "gezegen",
         anlatim: "Mevsimler, Dünya'nın eksen eğikliği ve Güneş çevresindeki dolanımı sayesinde oluşur. İklim uzun dönemli hava ortalaması, hava olayları ise kısa dönemli değişimlerdir. Sahnedeki Dünya'nın yörüngesini izle!" },
    1: { bas: "DNA ve Genetik Kod", emoji: "🧬", sahne: "tanecik",
         anlatim: "DNA, kalıtsal bilgiyi taşıyan moleküldür; genler ve kromozomlar üzerinde düzenlenir. Özellikler anneden ve babadan yavruya aktarılır. Mutasyon ve adaptasyon, canlı çeşitliliğinin temelini oluşturur." },
    2: { bas: "Basınç", emoji: "🎈", sahne: "kuvvet",
         anlatim: "Basınç = Kuvvet / Yüzey alanı. Katılar kuvveti yüzeye, sıvılar her yöne, gazlar ise kapalı kaba iletir. Atmosfer basıncı yükseklikle azalır; kartopu yapmak basınçla ilgilidir." },
    3: { bas: "Madde ve Endüstri", emoji: "🏭", sahne: "tanecik",
         anlatim: "Periyodik tablo, elementleri atom numarasına göre düzenler. Asitler ve bazlar pH değeriyle ayrılır; nötrleşme ile tuz oluşur. Kimyasal tepkimelerde maddeler yeni maddelere dönüşür." },
    4: { bas: "Basit Makineler", emoji: "⚙️", sahne: "kuvvet",
         anlatim: "Kaldıraç, makara, palanga, eğik düzlem ve dişli çarklar iş yapma kolaylığı sağlar. Basit makineler kuvvetten kazanç veya yoldan kazanç sağlar; işten kazanç sağlamaz." },
    5: { bas: "Enerji Dönüşümleri ve Çevre", emoji: "🌱", sahne: "solunum",
         anlatim: "Bitkiler fotosentezle güneş enerjisini besin enerjisine çevirir; canlılar solunumla bu enerjiyi kullanır. Besin zincirinde enerji aktarılır. Sürdürülebilir yaşam için doğal kaynakları verimli kullanırız." },
    6: { bas: "Elektrik Yükleri", emoji: "🔋", sahne: "elektrik",
         anlatim: "Nesneler sürtünme, dokunma ve etki ile elektrik yüklenebilir. Benzer yükler birbirini iter, zıt yükler çeker. Elektrik enerjisi evlerimize akım olarak ulaşır; enerji tasarrufu hepimizin görevidir." }
  }
};

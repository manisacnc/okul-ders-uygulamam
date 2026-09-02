/* ===== Canlı Ders Takvimi =====
   CANLI[sinif] = { bilgi, gunler }  — sınıfa göre ayrı takvim.
   Hafta boyunca canlı ders oturumları. d: null → rehberlik dersi. */
var CANLI = {
  "5": {
    bilgi: "5. sınıf canlı dersleri pazartesiden cumaya yapılır. Cuma günü ayrıca rehberlik dersi vardır.",
    gunler: [
      { gun: "Pazartesi", oturumlar: [
        { saat: "09:00", d: "trk5", ad: "Türkçe", konu: "Harf ve Ses Bilgisi" },
        { saat: "11:00", d: "mat5", ad: "Matematik", konu: "Doğal Sayılar" },
        { saat: "14:00", d: "fen5", ad: "Fen Bilimleri", konu: "Güneş, Dünya ve Ay" } ] },
      { gun: "Salı", oturumlar: [
        { saat: "09:00", d: "sos5", ad: "Sosyal Bilgiler", konu: "Birey ve Toplum" },
        { saat: "11:00", d: "ing5", ad: "İngilizce", konu: "Hello – Tanışma" },
        { saat: "14:00", d: "mat5", ad: "Matematik", konu: "Kesirler" } ] },
      { gun: "Çarşamba", oturumlar: [
        { saat: "09:00", d: "fen5", ad: "Fen Bilimleri", konu: "Canlılar Dünyası" },
        { saat: "11:00", d: "trk5", ad: "Türkçe", konu: "Sözcükte Anlam" },
        { saat: "14:00", d: "din5", ad: "Din Kültürü", konu: "Allah İnancı" } ] },
      { gun: "Perşembe", oturumlar: [
        { saat: "09:00", d: "mat5", ad: "Matematik", konu: "Ondalık Gösterim" },
        { saat: "11:00", d: "sos5", ad: "Sosyal Bilgiler", konu: "Kültür ve Toplum" },
        { saat: "14:00", d: "ing5", ad: "İngilizce", konu: "My Town – Şehrim" } ] },
      { gun: "Cuma", oturumlar: [
        { saat: "09:00", d: "fen5", ad: "Fen Bilimleri", konu: "Kuvvetin Ölçülmesi" },
        { saat: "11:00", d: null, ad: "Rehberlik", konu: "Çalışma alışkanlığı kurma" },
        { saat: "14:00", d: "bty5", ad: "Bilişim", konu: "Bilişim Teknolojileri ve Ben" } ] }
    ]
  },
  "6": {
    bilgi: "Canlı dersler pazartesiden cumaya yapılır. Cuma günü ayrıca rehberlik dersi vardır.",
    gunler: [
      { gun: "Pazartesi", oturumlar: [
        { saat: "09:00", d: "trk6", ad: "Türkçe", konu: "Sözcükte Anlam" },
        { saat: "11:00", d: "mat6", ad: "Matematik", konu: "Doğal Sayılarla İşlemler" },
        { saat: "14:00", d: "fen6", ad: "Fen Bilimleri", konu: "Güneş Sistemi ve Tutulmalar" } ] },
      { gun: "Salı", oturumlar: [
        { saat: "09:00", d: "sos6", ad: "Sosyal Bilgiler", konu: "Kültür ve Miras" },
        { saat: "11:00", d: "ing6", ad: "İngilizce", konu: "Life – Hayat" },
        { saat: "14:00", d: "mat6", ad: "Matematik", konu: "Çarpanlar ve Katlar" } ] },
      { gun: "Çarşamba", oturumlar: [
        { saat: "09:00", d: "fen6", ad: "Fen Bilimleri", konu: "Vücudumuzdaki Sistemler" },
        { saat: "11:00", d: "trk6", ad: "Türkçe", konu: "Cümlede Anlam" },
        { saat: "14:00", d: "din6", ad: "Din Kültürü", konu: "Peygamberlere ve İlahi Kitaplara İnanç" } ] },
      { gun: "Perşembe", oturumlar: [
        { saat: "09:00", d: "mat6", ad: "Matematik", konu: "Kümeler" },
        { saat: "11:00", d: "sos6", ad: "Sosyal Bilgiler", konu: "Yönetime Katılıyorum" },
        { saat: "14:00", d: "ing6", ad: "İngilizce", konu: "Yummy Breakfast – Kahvaltı" } ] },
      { gun: "Cuma", oturumlar: [
        { saat: "09:00", d: "fen6", ad: "Fen Bilimleri", konu: "Kuvvet ve Hareket" },
        { saat: "11:00", d: null, ad: "Rehberlik", konu: "Sınav kaygısı ve planlama" },
        { saat: "14:00", d: "bty6", ad: "Bilişim", konu: "Problem Çözme ve Algoritma" } ] }
    ]
  },
  "7": {
    bilgi: "7. sınıf canlı dersleri pazartesiden cumaya yapılır. Cuma günü ayrıca rehberlik dersi vardır.",
    gunler: [
      { gun: "Pazartesi", oturumlar: [
        { saat: "09:00", d: "trk7", ad: "Türkçe", konu: "Sözcükte Anlam" },
        { saat: "11:00", d: "mat7", ad: "Matematik", konu: "Tam Sayılarla İşlemler" },
        { saat: "14:00", d: "fen7", ad: "Fen Bilimleri", konu: "Güneş Sistemi ve Ötesi" } ] },
      { gun: "Salı", oturumlar: [
        { saat: "09:00", d: "sos7", ad: "Sosyal Bilgiler", konu: "İletişim ve İnsan İlişkileri" },
        { saat: "11:00", d: "ing7", ad: "İngilizce", konu: "Appearance and Personality" },
        { saat: "14:00", d: "mat7", ad: "Matematik", konu: "Rasyonel Sayılar" } ] },
      { gun: "Çarşamba", oturumlar: [
        { saat: "09:00", d: "fen7", ad: "Fen Bilimleri", konu: "Hücre ve Bölünmeler" },
        { saat: "11:00", d: "trk7", ad: "Türkçe", konu: "Fiiller ve Kipler" },
        { saat: "14:00", d: "din7", ad: "Din Kültürü", konu: "Meleklere İman" } ] },
      { gun: "Perşembe", oturumlar: [
        { saat: "09:00", d: "mat7", ad: "Matematik", konu: "Cebirsel İfadeler" },
        { saat: "11:00", d: "sos7", ad: "Sosyal Bilgiler", konu: "Ülkemizde Nüfus" },
        { saat: "14:00", d: "ing7", ad: "İngilizce", konu: "Sports – Sporlar" } ] },
      { gun: "Cuma", oturumlar: [
        { saat: "09:00", d: "fen7", ad: "Fen Bilimleri", konu: "Kuvvet ve Enerji" },
        { saat: "11:00", d: null, ad: "Rehberlik", konu: "LGS'ye uzun yol: hedef belirleme" },
        { saat: "14:00", d: "sos7", ad: "Sosyal Bilgiler", konu: "Ekonomi ve İnsan" } ] }
    ]
  },
  "8": {
    bilgi: "8. sınıf canlı dersleri pazartesiden cumaya yapılır. Cuma günü ayrıca rehberlik dersi vardır.",
    gunler: [
      { gun: "Pazartesi", oturumlar: [
        { saat: "09:00", d: "trk8", ad: "Türkçe", konu: "Sözcükte Anlam" },
        { saat: "11:00", d: "mat8", ad: "Matematik", konu: "Çarpanlar ve Katlar" },
        { saat: "14:00", d: "fen8", ad: "Fen Bilimleri", konu: "Mevsimler ve İklim" } ] },
      { gun: "Salı", oturumlar: [
        { saat: "09:00", d: "ink8", ad: "İnkılap Tarihi", konu: "Bir Kahraman Doğuyor" },
        { saat: "11:00", d: "ing8", ad: "İngilizce", konu: "Friendship – Arkadaşlık" },
        { saat: "14:00", d: "mat8", ad: "Matematik", konu: "Üslü İfadeler" } ] },
      { gun: "Çarşamba", oturumlar: [
        { saat: "09:00", d: "fen8", ad: "Fen Bilimleri", konu: "DNA ve Genetik Kod" },
        { saat: "11:00", d: "trk8", ad: "Türkçe", konu: "Fiilimsiler ve Fiil Çatıları" },
        { saat: "14:00", d: "din8", ad: "Din Kültürü", konu: "Kader İnancı" } ] },
      { gun: "Perşembe", oturumlar: [
        { saat: "09:00", d: "mat8", ad: "Matematik", konu: "Kareköklü İfadeler" },
        { saat: "11:00", d: "ink8", ad: "İnkılap Tarihi", konu: "Millî Uyanış" },
        { saat: "14:00", d: "ing8", ad: "İngilizce", konu: "Teen Life – Gençlik Hayatı" } ] },
      { gun: "Cuma", oturumlar: [
        { saat: "09:00", d: "fen8", ad: "Fen Bilimleri", konu: "Basınç" },
        { saat: "11:00", d: null, ad: "Rehberlik", konu: "LGS planı ve deneme analizi" },
        { saat: "14:00", d: "ink8", ad: "İnkılap Tarihi", konu: "Millî Bir Destan" } ] }
    ]
  }
};

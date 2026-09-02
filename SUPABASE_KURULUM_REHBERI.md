# 🔗 Okul Ders Uygulamam — Canlı Sınıf Yönetimi Kurulum Rehberi

Bu rehber, öğretmenin 40+ öğrenciyi görüp ders/not yazabildiği ve öğrencinin çalışma verisini öğretmenle paylaştığı **canlı senkron** özelliğini açmanı sağlar. Altyapı olarak **Supabase** (ücretsiz bulut veritabanı) kullanılır.

> ✅ Kod tarafı tamamen hazır ve kurulu. Senin yapman gereken tek şey, aşağıdaki **5 adımı** tamamlamak.

---

## Kurulu Olan Özellik (Kod Tarafı)

- **Öğretmen Paneli → "Canlı Sınıf Yönetimi"** (Sınıf Aç, öğrenci ekle, ders/not yaz, öğrenci verilerini gör)
- **Öğrenci → "Sınıfa Bağlan"** (etkinleştirme koduyla sınıfa bağlanma, verisini öğretmene gönderme, notlarını görme)
- Veritabanı tabloları: `siniflar`, `ogrenciler`, `notlar`, `veri` (SQL şeması: `supa-schema.sql`)
- Güvenlik: sınıf kodu (öğretmen) + etkinleştirme kodu (öğrenci tekil)

---

## Adım 1 — Supabase'de Ücretsiz Hesap Aç ve Proje Oluştur

1. Tarayıcıda <https://supabase.com> adresine git.
2. **"Start your project"** / **"Sign up"** ile ücretsiz hesap aç (Google ile de girebilirsin).
3. Giriş yaptıktan sonra **"New project"** (Yeni proje) seç.
4. Proje adı yaz (örn. `okul-ders`), **Database Password** için bir şifre belirle (not et, ileride gerekebilir), bölge olarak **Frankfurt (eu-central-1)** seç.
5. **"Create new project"**'e tıkla. Proje ~1-2 dakikada hazır olur.

## Adım 2 — Veritabanı Şemasını Çalıştır

1. Sol menüden **"SQL Editor"** bölümüne gir.
2. **"New query"** → **"New query"** seç.
3. Projendeki `supa-schema.sql` dosyasının içeriğini kopyala-yapıştır.
4. **"Run"** (▶ Çalıştır) butonuna bas. Alt kısımda **"Success"** (başarılı) yazması gerekir.

> Bu adım 4 tabloyu (sınıflar, öğrenciler, notlar, veri) ve güvenlik kurallarını (RLS) oluşturur.

## Adım 3 — API Anahtarlarını Al (URL + anon key)

1. Sol menüden **"Project Settings"** (⚙️) seç → **"API"** sekmesi.
2. İki değeri kopyala:
   - **Project URL** → `https://XXXX.supabase.co` gibi
   - **anon public key** → çok uzun bir anahtar (`eyJ...` ile başlar)
3. Bunları bir yere not et (supa-config.js'e yazacaksın).

## Adım 4 — supa-config.js'i Doldur ve Yeniden Yayınla

1. Proje klasöründeki **`supa-config.js`** dosyasını Not Defteri ile aç.
2. İki satırı doldur:
   ```js
   var SUPA_URL = "https://XXXX.supabase.co";   // Adım 3'teki URL
   var SUPA_KEY = "eyJhbGciOiJIUzI1NiIs..."      // Adım 3'teki anon public key
   ```
3. Dosyayı kaydet.
4. Proje klasöründe PowerShell aç ve çalıştır:
   ```powershell
   .\yayinla.ps1 "Supabase anahtarlari eklendi - canli senkron aktif"
   ```

> Böylece canlı site güncellenir ve "Sınıfa Bağlan / Sınıf Yönetimi" özellikleri **aktif** olur.

## Adım 5 — İlk Kullanım (Canlı)

### Öğretmen tarafı:
1. Uygulamayı aç → rolünü **Öğretmen** seç → öğretmen kodunu gir → **Öğretmen Paneli**.
2. **"Canlı Sınıf Yönetimi" → "Sınıfımı Yönet"**.
3. Bir **Sınıf Kodu** belirle (örn. `6A-KTGP`) → **"Yeni Sınıf Aç"**.
4. **"Öğrenci Ekle"** ile öğrencileri ekle (her birine otomatik/elle etkinleştirme kodu verilir).
5. **"Etkinleştirme Kodlarını Göster"** ile tüm kodları görüp öğrencilere dağıt.
6. Öğrenciler bağlandıkça listelerden **"📝 Notlar"** ve **"📊 Veri"** ile ders notu yaz, çalışma verilerini gör.

### Öğrenci tarafı:
1. Uygulamayı aç → **"🔗 Sınıfa Bağlan"** → öğretmenin verdiği **etkinleştirme kodunu** gir → **"Etkinleştir ve Bağlan"**.
2. **"⬆️ Verilerimi Öğretmene Gönder"** ile çalışma verisini öğretmene ilet.
3. **"📝 Notlarımı Gör"** ile öğretmenin yazdığı notları gör.

---

## Sık Sorulanlar

**S: Bu özellik ücretsiz mi?**
Evet. Supabase'in ücretsiz (Free) planı küçük sınıflar için yeterlidir (500 MB veri, 2 aktif proje).

**S: Özel anahtar (ozel.pem) internete çıkar mı?**
Hayır. Canlı senkron **lisans sisteminden tamamen bağımsızdır**. Supabase'e sadece öğrenci çalışma verisi (ad, notlar, XP, test sonuçları) gider; lisans özel anahtarınız asla ağa çıkmaz.

**S: İnternet yoksa ne olur?**
Uygulama yine çevrimdışı tam çalışır. Sadece "Sınıfa Bağlan / Sınıf Yönetimi" canlı özellikleri internet ister.

**S: Gizlilik / öğrenci verisi?**
Öğrenci adları ve notları Supabase'in sunucusunda saklanır. Erişim, sınıf kodu + kişisel etkinleştirme kodu ile sınırlıdır. Resmî sınıf ortamında veli/okul onayı alman önerilir.

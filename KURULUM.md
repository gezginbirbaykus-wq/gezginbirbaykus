# Gezginbirbaykus — Kurulum Rehberi

## Adım 1: Firebase Hesabı Aç

1. https://firebase.google.com adresine git
2. "Get Started" butonuna tıkla
3. Google hesabınla giriş yap
4. "Add project" → Proje adı: `gezginbirbaykus` → Continue → Continue → Create project

## Adım 2: Firebase Firestore Veritabanı Aç

1. Sol menüde "Build" → "Firestore Database" tıkla
2. "Create database" tıkla
3. "Start in test mode" seç → Next → Done

## Adım 3: Firebase Authentication Aç

1. Sol menüde "Build" → "Authentication" tıkla
2. "Get started" tıkla
3. "Email/Password" seç → Enable et → Save
4. "Users" sekmesine geç → "Add user"
5. E-posta ve şifre gir (bunlar admin girişin için)

## Adım 4: Firebase Config Al

1. Sol üstte "Project Settings" (dişli ikonu)
2. "Your apps" bölümünde `</>` (web) ikonuna tıkla
3. App nickname: `gezginbirbaykus-web` → Register app
4. Gelen kodu kopyala, şuna benziyor:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "gezginbirbaykus.firebaseapp.com",
  projectId: "gezginbirbaykus",
  storageBucket: "gezginbirbaykus.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

5. `js/firebase-config.js` dosyasını aç
6. "BURAYA_..." yazan yerleri kopyaladığın değerlerle değiştir

## Adım 5: Firestore Güvenlik Kuralları

Firebase Console → Firestore → Rules sekmesi:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Herkes okuyabilir
    match /{document=**} {
      allow read: true;
      allow write: if request.auth != null;
    }
  }
}
```

Bunu yapıştır → Publish

## Adım 6: Siteyi GitHub'a Yükle (Ücretsiz Hosting)

1. https://github.com adresine git → Ücretsiz hesap aç
2. "New repository" → Repository name: `gezginbirbaykus` → Public → Create
3. Bilgisayarına Git kur: https://git-scm.com/download/win
4. Gezi Sitesi klasöründe terminal aç (Sağ tık → "Git Bash Here")
5. Şu komutları sırayla çalıştır:

```bash
git init
git add .
git commit -m "ilk yükleme"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/gezginbirbaykus.git
git push -u origin main
```

6. GitHub'da repository sayfana git
7. Settings → Pages → Source: "Deploy from a branch" → Branch: main → /root → Save
8. Birkaç dakika sonra `https://KULLANICI_ADIN.github.io/gezginbirbaykus` adresinde site yayında!

## Adım 7: Logo Ekle

`assets/` klasörü oluştur, logo dosyanı `logo.png` olarak içine koy.

## Admin Paneli Kullanımı

- `sitenin-adresi/admin.html` adresine git
- Firebase Authentication'da oluşturduğun e-posta ve şifreyle giriş yap
- Önce Ülke ekle → sonra İl ekle → sonra İlçe ekle

## Google Maps Embed URL Alma

1. maps.google.com'da yeri bul
2. "Paylaş" → "Haritayı göm" tıkla
3. `<iframe ... src="URL" ...>` içindeki src değerini kopyala
4. Admin panelinde "Google Maps Embed URL" alanına yapıştır

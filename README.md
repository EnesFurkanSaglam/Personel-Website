# 🚀 Kişisel Website - Enes Furkan Sağlam

Bu proje, **Enes Furkan Sağlam**'ın kişisel portföy websitesidir. Kocaeli Üniversitesi Bilgisayar Mühendisliği öğrencisi olarak, yazılım geliştirme, web geliştirme ve yapay zeka alanlarındaki çalışmalarını sergileyen modern ve responsive bir web uygulamasıdır.

## 📋 İçerik

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Portföy Projeleri](#portföy-projeleri)
- [İletişim](#iletişim)

## ✨ Özellikler

- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Tek Sayfa Uygulaması (SPA)**: React Router ile smooth navigation
- **Dinamik İçerik**: JSON dosyalarından yönetilen veriler
- **Smooth Scrolling**: React Scroll ile akıcı sayfa geçişleri
- **Portföy Galerisi**: GitHub linkleri ile proje showcase'i
- **Yetenekler Bölümü**: Frontend, Backend, AI ve Data Science alanları
- **İletişim Formu**: Nodemailer ile email gönderimi

## 🛠️ Teknolojiler

### Frontend
- **React 18.2.0** - Modern UI kütüphanesi
- **React Router DOM 6.14.2** - Sayfa yönlendirme
- **React Scroll 1.8.9** - Smooth scrolling efektleri
- **CSS3** - Styling ve responsive tasarım

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js 4.19.2** - Web framework
- **Nodemailer 6.9.13** - Email gönderimi
- **Body Parser 1.20.2** - Request body parsing

### Geliştirme Araçları
- **React Scripts 5.0.1** - Create React App build tools
- **Web Vitals 2.1.4** - Performance monitoring

## 🚀 Kurulum

### Gereksinimler
- Node.js (>=12.x)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/EnesFurkanSaglam/Personel-Website.git
cd Personel-Website
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm start
```

4. **Tarayıcınızda açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
Personel-Website/
├── public/                 # Statik dosyalar
│   ├── img/               # Görseller
│   │   └── favicon.ico        # Site ikonu
│   ├── src/                   # Kaynak kodlar
│   │   ├── Pages/            # Sayfa bileşenleri
│   │   │   └── Home/         # Ana sayfa bileşenleri
│   │   │       ├── HeroSection.jsx    # Hero bölümü
│   │   │       ├── AboutMe.jsx        # Hakkımda
│   │   │       ├── MySkills.jsx       # Yetenekler
│   │   │       ├── MyPortfolio.jsx    # Portföy
│   │   │       ├── Footer.jsx         # Alt bilgi
│   │   │       └── Navbar.jsx         # Navigasyon
│   │   ├── data/             # Veri dosyaları
│   │   │   └── index.json    # Yetenekler ve portföy verileri
│   │   ├── App.js            # Ana uygulama bileşeni
│   │   └── App.css           # Ana stil dosyası
│   └── index.js          # Uygulama giriş noktası
├── package.json          # Proje bağımlılıkları
└── README.md            # Proje dokümantasyonu
```



"use client"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

type Language = "uz" | "ru" | "en" | "tr"
type Currency = "som" | "uzs" | "rub" | "usd"

interface LanguageContextType {
  currentLang: Language
  setCurrentLang: (lang: Language) => void
  currentCurrency: Currency
  setCurrentCurrency: (currency: Currency) => void
  t: (key: string) => string
  formatPrice: (price: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  uz: {
    // Header
    home: "Bosh sahifa",
    shop: "Do'kon",
    about: "Biz haqimizda",
    contact: "Aloqa",

    // Hero
    heroTitle: "Nafis Zargarlik",
    heroSubtitle: "Eng sifatli va chiroyli zargarlik buyumlari",
    shopNow: "Do'konni ko'rish",
    aboutUs: "Biz haqimizda",
    exploreCollection: "Kolleksiyani ko'rish",

    // Categories
    categories: "Kategoriyalar",
    categoriesSubtitle: "Turli xil zargarlik buyumlari kategoriyalari",
    rings: "Uzuklar",
    necklaces: "Marjonlar",
    earrings: "Sirg'alar",
    bracelets: "Bilakuzuklar",
    watches: "Soatlar",
    products: "mahsulot",

    // Featured Products
    featuredProducts: "Mashhur Mahsulotlar",
    featuredSubtitle: "Eng ko'p sotilgan va sevimli zargarlik buyumlari",
    new: "YANGI",
    viewDetails: "Batafsil ko'rish",
    viewAll: "Barcha mahsulotlarni ko'rish",

    // Materials
    gold: "Oltin",
    silver: "Kumush",
    platinum: "Platina",
    diamond: "Brilliant",

    // Shop
    shopTitle: "Zargarlik Do'koni",
    shopSubtitle: "Eng sifatli zargarlik buyumlarini toping",
    filters: "Filtrlar",
    priceRange: "Narx oralig'i",
    material: "Material",
    applyFilters: "Filtrlarni qo'llash",
    clearFilters: "Filtrlarni tozalash",
    productsFound: "mahsulot topildi",
    popularity: "Mashhurlik bo'yicha",
    priceLow: "Narx bo'yicha (past)",
    priceHigh: "Narx bo'yicha (yuqori)",
    newest: "Yangi mahsulotlar",
    noProductsFound: "Hech qanday mahsulot topilmadi",
    previous: "Oldingi",
    next: "Keyingi",

    // About
    aboutTitle: "Biz Haqimizda",
    aboutText1:
      "20 yildan ortiq tajribaga ega bo'lgan zargarlik do'konimiz eng sifatli va chiroyli zargarlik buyumlarini taklif etadi. Bizning mahsulotlarimiz 100% asl va sertifikatlangan.",
    aboutText2:
      "Har bir mahsulot ehtiyot bilan tanlanadi va mijozlarimizning ehtiyojlariga mos ravishda tayyorlanadi. Bizning maqsadimiz - sizning hayotingizga go'zallik va nafislik qo'shish.",
    experience: "Yillik tajriba",
    customers: "Mamnun mijozlar",
    authentic: "Asl mahsulotlar",
    support: "Mijozlar xizmati",

    // Contact
    contactTitle: "Biz bilan bog'laning",
    contactSubtitle: "Savollaringiz bormi? Biz sizga yordam berishga tayyormiz",
    sendMessage: "Xabar yuborish",
    yourName: "Ismingiz",
    yourPhone: "Telefon raqamingiz",
    yourEmail: "Email manzilingiz",
    yourMessage: "Xabaringiz",
    address: "Manzil",
    phone: "Telefon",
    email: "Email",
    workingHours: "Ish vaqti",

    // Footer
    footerDescription:
      "Eng sifatli va chiroyli zargarlik buyumlarini taklif etuvchi ishonchli do'kon. 20 yillik tajriba bilan sizga xizmat ko'rsatamiz.",
    quickLinks: "Tezkor havolalar",
    contactInfo: "Aloqa ma'lumotlari",
    allRightsReserved: "Barcha huquqlar himoyalangan.",
  },
  ru: {
    // Header
    home: "Главная",
    shop: "Магазин",
    about: "О нас",
    contact: "Контакты",

    // Hero
    heroTitle: "Изысканные Украшения",
    heroSubtitle: "Самые качественные и красивые ювелирные изделия",
    shopNow: "Посмотреть магазин",
    aboutUs: "О нас",
    exploreCollection: "Посмотреть коллекцию",

    // Categories
    categories: "Категории",
    categoriesSubtitle: "Различные категории ювелирных изделий",
    rings: "Кольца",
    necklaces: "Ожерелья",
    earrings: "Серьги",
    bracelets: "Браслеты",
    watches: "Часы",
    products: "товаров",

    // Featured Products
    featuredProducts: "Популярные Товары",
    featuredSubtitle: "Самые продаваемые и любимые ювелирные изделия",
    new: "НОВИНКА",
    viewDetails: "Подробнее",
    viewAll: "Посмотреть все товары",

    // Materials
    gold: "Золото",
    silver: "Серебро",
    platinum: "Платина",
    diamond: "Бриллиант",

    // Shop
    shopTitle: "Ювелирный Магазин",
    shopSubtitle: "Найдите самые качественные ювелирные изделия",
    filters: "Фильтры",
    priceRange: "Ценовой диапазон",
    material: "Материал",
    applyFilters: "Применить фильтры",
    clearFilters: "Очистить фильтры",
    productsFound: "товаров найдено",
    popularity: "По популярности",
    priceLow: "По цене (низкая)",
    priceHigh: "По цене (высокая)",
    newest: "Новые товары",
    noProductsFound: "Товары не найдены",
    previous: "Предыдущая",
    next: "Следующая",

    // About
    aboutTitle: "О Нас",
    aboutText1:
      "Наш ювелирный магазин с более чем 20-летним опытом предлагает самые качественные и красивые ювелирные изделия. Наши товары 100% подлинные и сертифицированные.",
    aboutText2:
      "Каждый товар тщательно отбирается и готовится в соответствии с потребностями наших клиентов. Наша цель - добавить красоту и изысканность в вашу жизнь.",
    experience: "Лет опыта",
    customers: "Довольных клиентов",
    authentic: "Подлинные товары",
    support: "Служба поддержки",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Есть вопросы? Мы готовы вам помочь",
    sendMessage: "Отправить сообщение",
    yourName: "Ваше имя",
    yourPhone: "Ваш телефон",
    yourEmail: "Ваш email",
    yourMessage: "Ваше сообщение",
    address: "Адрес",
    phone: "Телефон",
    email: "Email",
    workingHours: "Рабочие часы",

    // Footer
    footerDescription:
      "Надежный магазин, предлагающий самые качественные и красивые ювелирные изделия. Обслуживаем вас с 20-летним опытом.",
    quickLinks: "Быстрые ссылки",
    contactInfo: "Контактная информация",
    allRightsReserved: "Все права защищены.",
  },
  en: {
    // Header
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",

    // Hero
    heroTitle: "Exquisite Jewelry",
    heroSubtitle: "The finest and most beautiful jewelry pieces",
    shopNow: "Shop Now",
    aboutUs: "About Us",
    exploreCollection: "Explore Collection",

    // Categories
    categories: "Categories",
    categoriesSubtitle: "Various jewelry categories",
    rings: "Rings",
    necklaces: "Necklaces",
    earrings: "Earrings",
    bracelets: "Bracelets",
    watches: "Watches",
    products: "products",

    // Featured Products
    featuredProducts: "Featured Products",
    featuredSubtitle: "Best-selling and favorite jewelry pieces",
    new: "NEW",
    viewDetails: "View Details",
    viewAll: "View All Products",

    // Materials
    gold: "Gold",
    silver: "Silver",
    platinum: "Platinum",
    diamond: "Diamond",

    // Shop
    shopTitle: "Jewelry Shop",
    shopSubtitle: "Find the finest jewelry pieces",
    filters: "Filters",
    priceRange: "Price Range",
    material: "Material",
    applyFilters: "Apply Filters",
    clearFilters: "Clear Filters",
    productsFound: "products found",
    popularity: "By Popularity",
    priceLow: "Price (Low to High)",
    priceHigh: "Price (High to Low)",
    newest: "Newest Products",
    noProductsFound: "No products found",
    previous: "Previous",
    next: "Next",

    // About
    aboutTitle: "About Us",
    aboutText1:
      "Our jewelry store with over 20 years of experience offers the finest and most beautiful jewelry pieces. Our products are 100% authentic and certified.",
    aboutText2:
      "Each product is carefully selected and prepared according to our customers' needs. Our goal is to add beauty and elegance to your life.",
    experience: "Years of Experience",
    customers: "Happy Customers",
    authentic: "Authentic Products",
    support: "Customer Support",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Have questions? We're ready to help you",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourPhone: "Your Phone",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    address: "Address",
    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",

    // Footer
    footerDescription:
      "Trusted store offering the finest and most beautiful jewelry pieces. Serving you with 20 years of experience.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    allRightsReserved: "All rights reserved.",
  },
  tr: {
    // Header
    home: "Ana Sayfa",
    shop: "Mağaza",
    about: "Hakkımızda",
    contact: "İletişim",

    // Hero
    heroTitle: "Zarif Mücevherler",
    heroSubtitle: "En kaliteli ve güzel mücevher parçaları",
    shopNow: "Mağazayı Gör",
    aboutUs: "Hakkımızda",
    exploreCollection: "Koleksiyonu Keşfet",

    // Categories
    categories: "Kategoriler",
    categoriesSubtitle: "Çeşitli mücevher kategorileri",
    rings: "Yüzükler",
    necklaces: "Kolyeler",
    earrings: "Küpeler",
    bracelets: "Bilezikler",
    watches: "Saatler",
    products: "ürün",

    // Featured Products
    featuredProducts: "Öne Çıkan Ürünler",
    featuredSubtitle: "En çok satan ve favori mücevher parçaları",
    new: "YENİ",
    viewDetails: "Detayları Gör",
    viewAll: "Tüm Ürünleri Gör",

    // Materials
    gold: "Altın",
    silver: "Gümüş",
    platinum: "Platin",
    diamond: "Pırlanta",

    // Shop
    shopTitle: "Mücevher Mağazası",
    shopSubtitle: "En kaliteli mücevher parçalarını bulun",
    filters: "Filtreler",
    priceRange: "Fiyat Aralığı",
    material: "Malzeme",
    applyFilters: "Filtreleri Uygula",
    clearFilters: "Filtreleri Temizle",
    productsFound: "ürün bulundu",
    popularity: "Popülerliğe Göre",
    priceLow: "Fiyat (Düşükten Yükseğe)",
    priceHigh: "Fiyat (Yüksekten Düşüğe)",
    newest: "En Yeni Ürünler",
    noProductsFound: "Ürün bulunamadı",
    previous: "Önceki",
    next: "Sonraki",

    // About
    aboutTitle: "Hakkımızda",
    aboutText1:
      "20 yılı aşkın deneyime sahip mücevher mağazamız en kaliteli ve güzel mücevher parçalarını sunmaktadır. Ürünlerimiz %100 orijinal ve sertifikalıdır.",
    aboutText2:
      "Her ürün özenle seçilir ve müşterilerimizin ihtiyaçlarına göre hazırlanır. Amacımız hayatınıza güzellik ve zarafet katmaktır.",
    experience: "Yıllık Deneyim",
    customers: "Mutlu Müşteri",
    authentic: "Orijinal Ürünler",
    support: "Müşteri Desteği",

    // Contact
    contactTitle: "Bize Ulaşın",
    contactSubtitle: "Sorularınız mı var? Size yardım etmeye hazırız",
    sendMessage: "Mesaj Gönder",
    yourName: "Adınız",
    yourPhone: "Telefonunuz",
    yourEmail: "Email Adresiniz",
    yourMessage: "Mesajınız",
    address: "Adres",
    phone: "Telefon",
    email: "Email",
    workingHours: "Çalışma Saatleri",

    // Footer
    footerDescription:
      "En kaliteli ve güzel mücevher parçalarını sunan güvenilir mağaza. 20 yıllık deneyimle size hizmet veriyoruz.",
    quickLinks: "Hızlı Bağlantılar",
    contactInfo: "İletişim Bilgileri",
    allRightsReserved: "Tüm hakları saklıdır.",
  },
}

const currencyRates = {
  som: 1,
  uzs: 1,
  rub: 0.35,
  usd: 0.000085,
}

const currencySymbols = {
  som: "so'm",
  uzs: "UZS",
  rub: "₽",
  usd: "$",
}

// Language to currency mapping
const languageCurrencyMap = {
  uz: "som" as Currency,
  ru: "rub" as Currency,
  en: "usd" as Currency,
  tr: "usd" as Currency,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const [currentCurrency, setCurrentCurrency] = useState<Currency>("som")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    const savedCurrency = localStorage.getItem("currency") as Currency
    if (savedLang && ["uz", "ru", "en", "tr"].includes(savedLang)) {
      setCurrentLang(savedLang)
      // Auto-set currency based on language if no saved currency
      if (!savedCurrency) {
        setCurrentCurrency(languageCurrencyMap[savedLang])
      }
    }
    if (savedCurrency && ["som", "uzs", "rub", "usd"].includes(savedCurrency)) {
      setCurrentCurrency(savedCurrency)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", currentLang)
    // Auto-change currency when language changes
    setCurrentCurrency(languageCurrencyMap[currentLang])
  }, [currentLang])

  useEffect(() => {
    localStorage.setItem("currency", currentCurrency)
  }, [currentCurrency])

  const t = (key: string): string => {
    return translations[currentLang][key] || key
  }

  const formatPrice = (price: number): string => {
    const convertedPrice = price * currencyRates[currentCurrency]
    const symbol = currencySymbols[currentCurrency]

    if (currentCurrency === "usd") {
      return `${symbol}${convertedPrice.toFixed(2)}`
    } else if (currentCurrency === "rub") {
      return `${Math.round(convertedPrice).toLocaleString()} ${symbol}`
    } else {
      return `${Math.round(convertedPrice).toLocaleString()} ${symbol}`
    }
  }

  return (
    <LanguageContext.Provider
      value={{ currentLang, setCurrentLang, currentCurrency, setCurrentCurrency, t, formatPrice }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

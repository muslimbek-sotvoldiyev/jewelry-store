export interface Product {
  id: string
  nameKey: string
  descriptionKey: string
  priceUZS: number
  priceUSD: number
  image: string
  images: string[]
  category: string
  subcategory: string
  material: string
  inStock: boolean
  featured: boolean
  recommended: boolean
  specifications: {
    weight?: string
    size?: string
    purity?: string
    stone?: string
    length?: string
  }
}

export interface Category {
  id: string
  nameKey: string
  description: string
  image: string
  subcategories?: Subcategory[]
}

export interface Subcategory {
  id: string
  nameKey: string
  products: Product[]
}

export const CATEGORIES: Category[] = [
  {
    id: "rings",
    nameKey: "rings",
    description: "Elegant rings for every occasion",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: "engagement",
        nameKey: "engagementRings",
        products: [],
      },
      {
        id: "wedding",
        nameKey: "weddingRings",
        products: [],
      },
    ],
  },
  {
    id: "necklaces",
    nameKey: "necklaces",
    description: "Beautiful necklaces and pendants",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: "pendants",
        nameKey: "pendants",
        products: [],
      },
      {
        id: "chains",
        nameKey: "chains",
        products: [],
      },
    ],
  },
  {
    id: "earrings",
    nameKey: "earrings",
    description: "Stunning earrings for any style",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: "studs",
        nameKey: "studs",
        products: [],
      },
      {
        id: "hoops",
        nameKey: "hoops",
        products: [],
      },
    ],
  },
  {
    id: "bracelets",
    nameKey: "bracelets",
    description: "Exquisite bracelets and bangles",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: "bangles",
        nameKey: "bangles",
        products: [],
      },
      {
        id: "tennis",
        nameKey: "tennisBracelets",
        products: [],
      },
    ],
  },
]

export const PRODUCTS: Product[] = [
  {
    id: "1",
    nameKey: "diamondSolitaire",
    descriptionKey: "classicDiamondRing",
    priceUZS: 15000000,
    priceUSD: 1200,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=600&q=80",
    ],
    category: "rings",
    subcategory: "engagement",
    material: "gold",
    inStock: true,
    featured: true,
    recommended: true,
    specifications: {
      weight: "3.2g",
      size: "Adjustable",
      purity: "18K Gold",
      stone: "1ct Diamond",
    },
  },
  {
    id: "2",
    nameKey: "pearlNecklace",
    descriptionKey: "elegantPearlNecklace",
    priceUZS: 8500000,
    priceUSD: 680,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    ],
    category: "necklaces",
    subcategory: "pendants",
    material: "pearl",
    inStock: true,
    featured: true,
    recommended: true,
    specifications: {
      weight: "25g",
      length: "45cm",
      purity: "14K Gold Clasp",
      stone: "Freshwater Pearls",
    },
  },
  {
    id: "3",
    nameKey: "goldEarrings",
    descriptionKey: "luxuryGoldEarrings",
    priceUZS: 6200000,
    priceUSD: 495,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
    ],
    category: "earrings",
    subcategory: "studs",
    material: "gold",
    inStock: true,
    featured: true,
    recommended: false,
    specifications: {
      weight: "2.8g",
      size: "8mm",
      purity: "18K Gold",
      stone: "None",
    },
  },
  {
    id: "4",
    nameKey: "silverBracelet",
    descriptionKey: "handcraftedSilverBracelet",
    priceUZS: 4800000,
    priceUSD: 385,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=600&q=80",
    ],
    category: "bracelets",
    subcategory: "bangles",
    material: "silver",
    inStock: true,
    featured: false,
    recommended: true,
    specifications: {
      weight: "18g",
      size: "Medium",
      purity: "925 Silver",
      stone: "None",
    },
  },
  {
    id: "5",
    nameKey: "emeraldRing",
    descriptionKey: "vintageEmeraldRing",
    priceUZS: 22000000,
    priceUSD: 1760,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    ],
    category: "rings",
    subcategory: "engagement",
    material: "gold",
    inStock: true,
    featured: false,
    recommended: true,
    specifications: {
      weight: "4.1g",
      size: "Adjustable",
      purity: "18K Gold",
      stone: "2ct Emerald",
    },
  },
  {
    id: "6",
    nameKey: "diamondEarrings",
    descriptionKey: "sparklingDiamondEarrings",
    priceUZS: 18500000,
    priceUSD: 1480,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    ],
    category: "earrings",
    subcategory: "hoops",
    material: "diamond",
    inStock: true,
    featured: true,
    recommended: false,
    specifications: {
      weight: "3.5g",
      size: "25mm",
      purity: "18K White Gold",
      stone: "0.5ct Diamonds",
    },
  },
  {
    id: "7",
    nameKey: "platinumRing",
    descriptionKey: "luxuryPlatinumRing",
    priceUZS: 28000000,
    priceUSD: 2240,
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    ],
    category: "rings",
    subcategory: "wedding",
    material: "platinum",
    inStock: true,
    featured: true,
    recommended: true,
    specifications: {
      weight: "5.2g",
      size: "Adjustable",
      purity: "950 Platinum",
      stone: "None",
    },
  },
  {
    id: "8",
    nameKey: "goldChain",
    descriptionKey: "classicGoldChain",
    priceUZS: 12000000,
    priceUSD: 960,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    ],
    category: "necklaces",
    subcategory: "chains",
    material: "gold",
    inStock: true,
    featured: false,
    recommended: true,
    specifications: {
      weight: "15g",
      length: "50cm",
      purity: "18K Gold",
      stone: "None",
    },
  },
  {
    id: "9",
    nameKey: "tennisBracelet",
    descriptionKey: "elegantTennisBracelet",
    priceUZS: 35000000,
    priceUSD: 2800,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
    ],
    category: "bracelets",
    subcategory: "tennis",
    material: "diamond",
    inStock: true,
    featured: true,
    recommended: true,
    specifications: {
      weight: "12g",
      size: "18cm",
      purity: "18K White Gold",
      stone: "3ct Diamonds",
    },
  },
  {
    id: "10",
    nameKey: "sapphireEarrings",
    descriptionKey: "royalSapphireEarrings",
    priceUZS: 24000000,
    priceUSD: 1920,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
    ],
    category: "earrings",
    subcategory: "studs",
    material: "sapphire",
    inStock: true,
    featured: false,
    recommended: true,
    specifications: {
      weight: "3.8g",
      size: "10mm",
      purity: "18K Gold",
      stone: "2ct Sapphires",
    },
  },
]

export const MATERIALS = [
  { id: "gold", nameKey: "gold" },
  { id: "silver", nameKey: "silver" },
  { id: "platinum", nameKey: "platinum" },
  { id: "diamond", nameKey: "diamond" },
  { id: "pearl", nameKey: "pearl" },
  { id: "emerald", nameKey: "emerald" },
  { id: "sapphire", nameKey: "sapphire" },
]

export const TRANSLATIONS = {
  tr: {
    // Navigation
    shop: "Mağaza",
    about: "Hakkımızda",
    contact: "İletişim",
    home: "Ana Sayfa",
    back: "Geri",
    viewAll: "Tümünü Gör",
    share: "Paylaş",

    // About Section
    aboutTitle: "Hakkımızda",
    aboutText1:
      "FERGAGOLD, 30 yılı aşkın tecrübesiyle Fergana'nın en güvenilir kuyumcusu olarak hizmet vermektedir. En kaliteli altın, gümüş, platin ve değerli taşlardan el işi mücevherler üretiyoruz.",
    aboutText2:
      "Her bir ürünümüz, ustalarımızın titiz işçiliği ve modern teknolojinin birleşimiyle hayat buluyor. Müşteri memnuniyeti ve kalite, bizim için her zaman önceliklidir.",
    contactInfo: "İletişim Bilgileri",

    // Categories
    rings: "Yüzükler",
    necklaces: "Kolyeler",
    earrings: "Küpeler",
    bracelets: "Bilezikler",

    // Subcategories
    engagementRings: "Nişan Yüzükleri",
    weddingRings: "Evlilik Yüzükleri",
    pendants: "Kolye Uçları",
    chains: "Zincirler",
    studs: "Saplı Küpeler",
    hoops: "Halka Küpeler",
    bangles: "Bilezikler",
    tennisBracelets: "Tenis Bilezikleri",

    // Products
    diamondSolitaire: "Elmas Solitaire Yüzüğü",
    pearlNecklace: "İnci Kolye",
    goldEarrings: "Altın Küpeler",
    silverBracelet: "Gümüş Bilezik",
    emeraldRing: "Zümrüt Yüzük",
    diamondEarrings: "Elmas Küpeler",
    platinumRing: "Platin Yüzük",
    goldChain: "Altın Zincir",
    tennisBracelet: "Tenis Bilezik",
    sapphireEarrings: "Safir Küpeler",

    // Product descriptions
    classicDiamondRing:
      "Mükemmel kesim ve parlak ışıltısı ile klasik elmas yüzük. Herhangi bir özel anı için ideal seçim.",
    elegantPearlNecklace: "Doğal inciler ve altın kapatılı zarif inci kolye. Modern ve klasik stillere mükemmel uyum.",
    luxuryGoldEarrings: "İnce işçilik ve kusursuz bitişi ile lüks altın küpeler. Günlük ve resmi giyim için uygun.",
    handcraftedSilverBracelet:
      "Eşsiz tasarım ve yüksek kalite ile el yapımı gümüş bilezik. Modern stil severleri için.",
    vintageEmeraldRing:
      "Zengin rengi ve klasik tasarımı ile vintage tarzı zümrüt yüzük. Koleksiyoncular için eşsiz seçim.",
    sparklingDiamondEarrings: "Mükemmel kesim ve harika parlaklığı ile parlayan elmas küpeler. Özel anlar için ideal.",
    luxuryPlatinumRing: "En yüksek kalite ve dayanıklılığı ile lüks platin yüzük. Ebedi aşkın sembolü.",
    classicGoldChain: "Geleneksel tasarım ve modern işçilik ile klasik altın zincir. Her kıyafete uyum sağlar.",
    elegantTennisBracelet: "Kesintisiz elmaslar ve kusursuz ayarı ile zarif tenis bilezik. Lüks ve inceliğin sembolü.",
    royalSapphireEarrings: "Zengin mavi rengi ve altın ayar ile kraliyet safir küpeleri. Aristokrat stil için uygun.",

    // Materials
    gold: "Altın",
    silver: "Gümüş",
    platinum: "Platin",
    diamond: "Elmas",
    pearl: "İnci",
    emerald: "Zümrüt",
    sapphire: "Safir",

    // Common
    price: "Fiyat",
    inStock: "Stokta Var",
    outOfStock: "Stokta Yok",
    specifications: "Özellikler",
    weight: "Ağırlık",
    size: "Boyut",
    purity: "Saflık",
    stone: "Taş",
    length: "Uzunluk",
    material: "Malzeme",
    category: "Kategori",
    availability: "Uygunluk",

    // Contact
    contactTitle: "Bize Ulaşın",
    contactDescription: "Kişisel hizmet için kuyumculuk uzmanlarımız ile iletişime geçin",
    address: "Adres",
    phone: "Telefon",
    email: "E-posta",
    ourLocation: "Konum",
    fullName: "Tam Ad",
    emailAddress: "E-posta Adresi",
    phoneNumber: "Telefon Numarası",
    message: "Mesaj",
    sendMessage: "Mesaj Gönder",

    // Recommended Collection
    recommendedTitle: "Önerilen Koleksiyon",
    recommendedSubtitle: "Dikkatle seçilmiş olağanüstü ürünlerimizin koleksiyonunu keşfedin",

    // Hero Section
    heroTitle: "FERGAGOLD",
    heroSubtitle: "Lüks Kuyumculuğun Sanatı",
    heroDescription:
      "En güzel andan başlayarak, hayatın en değerli anlarını kutlamak için tasarlanmış nefis kuyumculuk.",
    exploreNow: "Keşfet",
    callNow: "Hemen Ara",

    // Services
    servicesTitle: "Hizmetlerimiz",
    customDesign: "Özel Tasarım",
    customDesignDesc: "Kişisel isteklerinize göre tasarlanmış takı",
    repair: "Onarım",
    repairDesc: "Uzman onarım ve bakım hizmetleri",
    valuation: "Değerleme",
    valuationDesc: "Profesyonel kıymet takdir hizmetleri",
    gifts: "Özel Hediyeler",
    giftsDesc: "Özel anlar için tasarlanmış hediye takılar",

    // Highlights
    premiumQuality: "Premium Kalite",
    premiumQualityDesc: "En yüksek kaliteli malzeme ve işçilik",
    awardWinning: "Ödül Kazanmış",
    awardWinningDesc: "Uluslararası tasarım ve kalite ödülleri",
    expertConsultation: "Uzman Danışmanlık",
    expertConsultationDesc: "Kişisel tasarım danışmanlığı ve rehberlik",
    guarantees: "Garantiler",
    guaranteesDesc: "Tüm takılarda yaşam boyu garantisi",

    // Bot Chat
    chatHello: "Merhaba! Nasıl yardımcı olabilirim?",
    chatQuestion: "Sorular mı var?",
    chatAsk: "Sor",

    // Products Page
    filterByCategory: "Kategoriye Göre Filtrele",
    noProducts: "Ürün bulunamadı",
    selectCategory: "Kategori seçin",

    experience: "Yıllık Tecrübe",
    customers: "Mutlu Müşteri",
    authentic: "Orijinal",
    support: "Destek",
    footerDescription: "Ebedi zarafet ve el işçiliği kaliteli mücevherler",
    services: "Hizmetler",
    repairRestoration: "Onarım ve Restorasyon",
    bespokeGifts: "Özel Hediyeler",
    allRightsReserved: "Tüm hakları saklıdır.",
  },
  uz: {
    // Navigation
    shop: "Do'kon",
    about: "Haqida",
    contact: "Aloqa",
    home: "Bosh sahifa",
    back: "Orqaga",
    viewAll: "Barchasini ko'rish",
    share: "Ulashish",

    // About Section
    aboutTitle: "Biz haqimizda",
    aboutText1:
      "FERGAGOLD 30 yildan ortiq tajribaga ega Farg'onaning eng ishonchli zargarlik do'konidir. Biz eng sifatli oltin, kumush, platina va qimmatbaho toshlardan qo'lda ishlangan zargarlik buyumlarini ishlab chiqaramiz.",
    aboutText2:
      "Har bir mahsulotimiz ustalarimizning sinchkov mehnatitning va zamonaviy texnologiyalarning uyg'unligi natijasida yaratiladi. Mijozlar mamnuniyati va sifat biz uchun doimo ustuvordir.",
    contactInfo: "Aloqa ma'lumotlari",

    // Categories
    rings: "Uzuklar",
    necklaces: "Marjonlar",
    earrings: "Sirg'alar",
    bracelets: "Bilakuzuklar",

    // Subcategories
    engagementRings: "Unashtiruv uzuklari",
    weddingRings: "Nikoh uzuklari",
    pendants: "Marvarid marjonlar",
    chains: "Zanjirlar",
    studs: "Sirg'a tugmalari",
    hoops: "Halqa sirg'alar",
    bangles: "Bilakuzuklar",
    tennisBracelets: "Tennis bilakuzuklar",

    // Products
    diamondSolitaire: "Olmosli Solitaire Uzuk",
    pearlNecklace: "Marvarid Marjon",
    goldEarrings: "Oltin Sirg'alar",
    silverBracelet: "Kumush Bilakuzuk",
    emeraldRing: "Zumrad Uzuk",
    diamondEarrings: "Olmosli Sirg'alar",
    platinumRing: "Platina Uzuk",
    goldChain: "Oltin Zanjir",
    tennisBracelet: "Tennis Bilakuzuk",
    sapphireEarrings: "Safir Sirg'alar",

    // Product descriptions
    classicDiamondRing:
      "Klassik olmosli uzuk, mukammal kesim va yorqin porlash bilan. Har qanday maxsus voqea uchun ideal tanlov.",
    elegantPearlNecklace:
      "Nafis marvarid marjon, tabiiy marvaridlar va oltin qisqich bilan. Zamonaviy va klassik uslublar uchun mos.",
    luxuryGoldEarrings:
      "Hashamatli oltin sirg'alar, nozik ishlov va mukammal tugatish bilan. Har kunlik va tantanali kiyim uchun.",
    handcraftedSilverBracelet:
      "Qo'lda ishlangan kumush bilakuzuk, noyob dizayn va yuqori sifat bilan. Zamonaviy uslub sevuvchilar uchun.",
    vintageEmeraldRing:
      "Vintage uslubidagi zumrad uzuk, boy rang va klassik dizayn bilan. Kollektsionerlar uchun noyob tanlov.",
    sparklingDiamondEarrings:
      "Yorqin olmosli sirg'alar, mukammal kesim va ajoyib porlash bilan. Maxsus voqealar uchun ideal.",
    luxuryPlatinumRing: "Hashamatli platina uzuk, eng yuqori sifat va chidamlilik bilan. Abadiy sevgi ramzi.",
    classicGoldChain:
      "Klassik oltin zanjir, an'anaviy dizayn va zamonaviy ishlov bilan. Har qanday kiyim bilan mos keladi.",
    elegantTennisBracelet:
      "Nafis tennis bilakuzuk, uzluksiz olmoslar va mukammal sozlash bilan. Hashamat va nafosatning ramzi.",
    royalSapphireEarrings: "Qirollik safir sirg'alar, boy ko'k rang va oltin sozlash bilan. Aristokratik uslub uchun.",

    // Materials
    gold: "Oltin",
    silver: "Kumush",
    platinum: "Platina",
    diamond: "Olmos",
    pearl: "Marvarid",
    emerald: "Zumrad",
    sapphire: "Safir",

    // Common
    price: "Narx",
    inStock: "Mavjud",
    outOfStock: "Tugagan",
    specifications: "Xususiyatlar",
    weight: "Og'irligi",
    size: "O'lchami",
    purity: "Tozaligi",
    stone: "Tosh",
    length: "Uzunligi",
    material: "Material",
    category: "Kategoriya",
    availability: "Mavjudligi",

    // Contact
    contactTitle: "Biz bilan bog'laning",
    contactDescription: "Shaxsiy xizmat uchun zargarlik mutaxassislarimiz bilan bog'laning",
    address: "Manzil",
    phone: "Telefon",
    email: "Elektron pochta",
    ourLocation: "Bizning joylashuvimiz",
    fullName: "To'liq ism",
    emailAddress: "Elektron pochta manzili",
    phoneNumber: "Telefon raqami",
    message: "Xabar",
    sendMessage: "Xabar yuborish",

    // Recommended Collection
    recommendedTitle: "Tavsiya etilgan kolleksiya",
    recommendedSubtitle: "Bizning ehtiyotkorlik bilan tanlangan ajoyib buyumlar kolleksiyasini kashf eting",

    // Hero Section
    heroTitle: "FERGAGOLD",
    heroSubtitle: "Lüks Kuyumculuğun Sanatı",
    heroDescription: "Eng yaxshi materiallardan iborat, har qanday maxsus voqealar uchun ishonchli kuyumlar.",
    exploreNow: "Ko'rib chiqish",
    callNow: "Hozirroq bog'lanish",

    // Services
    servicesTitle: "Xizmatlar",
    customDesign: "O'zingizning dizayningiz",
    customDesignDesc: "Shaxsiy talablar bo'yicha ishonchli kuyumlar",
    repair: "Onarish",
    repairDesc: "Kuyumlar uchun qo'lda ishlangan onarish",
    valuation: "Qiymat belgilash",
    valuationDesc: "Kuyumlar uchun qo'lda ishlangan qiymat belgilash",
    gifts: "Xonimlar",
    giftsDesc: "Maxsus voqealar uchun ishonchli xonimlar",

    // Highlights
    premiumQuality: "Eng yuqori sifat",
    premiumQualityDesc: "Eng yaxshi materiallardan va ishonchli ishlov bilan",
    awardWinning: "O'limonlar",
    awardWinningDesc: "Lüks va ishonchli kuyumlar uchun",
    expertConsultation: "Xizmatkor xodimlar",
    expertConsultationDesc: "Kuyumlar uchun qo'lda ishlangan xodimlar",
    guarantees: "Garantiyalar",
    guaranteesDesc: "Barcha kuyumlarda eng yuqori sifatni ta'minlaydi",

    // Bot Chat
    chatHello: "Salom! Sizga qanday yordam bera olishim mumkin?",
    chatQuestion: "Savollaringiz bormi?",
    chatAsk: "Savol bera yuboring",

    // Products Page
    filterByCategory: "Kategoriya bo'yicha filtrlash",
    noProducts: "Hech qanday mahsulot topilmadi",
    selectCategory: "Kategoriya tanlash",

    experience: "Yillik tajriba",
    customers: "Mamnun mijozlar",
    authentic: "Original",
    support: "Qo'llab-quvvatlash",
    footerDescription: "Abadiy nafosatlik va qo'lda ishlangan sifatli zargarlik buyumlari",
    services: "Xizmatlar",
    repairRestoration: "Ta'mirlash va tiklash",
    bespokeGifts: "Maxsus sovg'alar",
    allRightsReserved: "Barcha huquqlar himoyalangan.",
  },
  ru: {
    // Navigation
    shop: "Магазин",
    about: "О нас",
    contact: "Контакты",
    home: "Главная",
    back: "Назад",
    viewAll: "Посмотреть все",
    share: "Поделиться",

    // About Section
    aboutTitle: "О нас",
    aboutText1:
      "FERGAGOLD — самый надежный ювелирный магазин Ферганы с более чем 30-летним опытом работы. Мы производим ювелирные изделия ручной работы из высококачественного золота, серебра, платины и драгоценных камней.",
    aboutText2:
      "Каждый наш продукт создается благодаря сочетанию кропотливого труда наших мастеров и современных технологий. Удовлетворенность клиентов и качество всегда являются для нас приоритетом.",
    contactInfo: "Контактная информация",

    // Categories
    rings: "Кольца",
    necklaces: "Ожерелья",
    earrings: "Серьги",
    bracelets: "Браслеты",

    // Subcategories
    engagementRings: "Обручальные кольца",
    weddingRings: "Свадебные кольца",
    pendants: "Подвески",
    chains: "Цепи",
    studs: "Серьги-гвоздики",
    hoops: "Серьги-кольца",
    bangles: "Браслеты",
    tennisBracelets: "Теннисные браслеты",

    // Products
    diamondSolitaire: "Кольцо с бриллиантом Солитер",
    pearlNecklace: "Жемчужное ожерелье",
    goldEarrings: "Золотые серьги",
    silverBracelet: "Серебряный браслет",
    emeraldRing: "Кольцо с изумрудом",
    diamondEarrings: "Серьги с бриллиантами",
    platinumRing: "Платиновое кольцо",
    goldChain: "Золотая цепь",
    tennisBracelet: "Теннисный браслет",
    sapphireEarrings: "Серьги с сапфирами",

    // Product descriptions
    classicDiamondRing:
      "Классическое кольцо с бриллиантом, идеальная огранка и яркий блеск. Идеальный выбор для любого особого случая.",
    elegantPearlNecklace:
      "Элегантное жемчужное ожерелье с натуральным жемчугом и золотой застежкой. Подходит для современного и классического стиля.",
    luxuryGoldEarrings:
      "Роскошные золотые серьги с тонкой обработкой и идеальной отделкой. Для повседневной и торжественной одежды.",
    handcraftedSilverBracelet:
      "Серебряный браслет ручной работы с уникальным дизайном и высоким качеством. Для любителей современного стиля.",
    vintageEmeraldRing:
      "Кольцо с изумрудом в винтажном стиле, насыщенный цвет и классический дизайн. Уникальный выбор для коллекционеров.",
    sparklingDiamondEarrings:
      "Сверкающие серьги с бриллиантами, идеальная огранка и потрясающий блеск. Идеально для особых случаев.",
    luxuryPlatinumRing: "Роскошное платиновое кольцо высочайшего качества и долговечности. Символ вечной любви.",
    classicGoldChain:
      "Классическая золотая цепь с традиционным дизайном и современной обработкой. Подходит к любой одежде.",
    elegantTennisBracelet:
      "Элегантный теннисный браслет с непрерывными бриллиантами и идеальной настройкой. Символ роскоши и изысканности.",
    royalSapphireEarrings:
      "Королевские серьги с сапфирами, насыщенный синий цвет и золотая оправа. Для аристократического стиля.",

    // Materials
    gold: "Золото",
    silver: "Серебро",
    platinum: "Платина",
    diamond: "Бриллиант",
    pearl: "Жемчуг",
    emerald: "Изумруд",
    sapphire: "Сапфир",

    // Common
    price: "Цена",
    inStock: "В наличии",
    outOfStock: "Нет в наличии",
    specifications: "Характеристики",
    weight: "Вес",
    size: "Размер",
    purity: "Проба",
    stone: "Камень",
    length: "Длина",
    material: "Материал",
    category: "Категория",
    availability: "Наличие",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactDescription: "Свяжитесь с нашими экспертами по ювелирным изделиям для персонального обслуживания",
    address: "Адрес",
    phone: "Телефон",
    email: "Электронная почта",
    ourLocation: "Наше местоположение",
    fullName: "Полное имя",
    emailAddress: "Адрес электронной почты",
    phoneNumber: "Номер телефона",
    message: "Сообщение",
    sendMessage: "Отправить сообщение",

    // Recommended Collection
    recommendedTitle: "Рекомендуемая коллекция",
    recommendedSubtitle: "Откройте для себя нашу тщательно отобранную коллекцию исключительных изделий",

    // Hero Section
    heroTitle: "FERGAGOLD",
    heroSubtitle: "Искусство роскошного ювелирного дела",
    heroDescription: "От лучших материалов и идеального дизайна для любого особого случая.",
    exploreNow: "Познакомиться",
    callNow: "Свяжитесь сейчас",

    // Services
    servicesTitle: "Наши услуги",
    customDesign: "Индивидуальный дизайн",
    customDesignDesc: "Кольца, серьги, браслеты и ожерелья по вашему заказу",
    repair: "Ремонт",
    repairDesc: "Сервис ремонта и обслуживания ювелирных изделий",
    valuation: "Оценка",
    valuationDesc: "Профессиональная оценка ювелирных изделий",
    gifts: "Подарки",
    giftsDesc: "Подарочные кольца, серьги и браслеты для особого случая",

    // Highlights
    premiumQuality: "Премиум качество",
    premiumQualityDesc: "Самые качественные материалы и работа",
    awardWinning: "Победители наград",
    awardWinningDesc: "Награды за дизайн и качество",
    expertConsultation: "Консультация специалистов",
    expertConsultationDesc: "Консультация по индивидуальному дизайну",
    guarantees: "Гарантии",
    guaranteesDesc: "Гарантия на все изделия",

    // Bot Chat
    chatHello: "Привет! Как я могу помочь?",
    chatQuestion: "У вас есть вопросы?",
    chatAsk: "Спросить",

    // Products Page
    filterByCategory: "Фильтр по категории",
    noProducts: "Товары не найдены",
    selectCategory: "Выберите категорию",

    experience: "Лет опыта",
    customers: "Довольных клиентов",
    authentic: "Оригинал",
    support: "Поддержка",
    footerDescription: "Вечная элегантность и качественные ювелирные изделия ручной работы",
    services: "Услуги",
    repairRestoration: "Ремонт и реставрация",
    bespokeGifts: "Эксклюзивные подарки",
    allRightsReserved: "Все права защищены.",
  },
  en: {
    // Navigation
    shop: "Shop",
    about: "About",
    contact: "Contact",
    home: "Home",
    back: "Back",
    viewAll: "View All",
    share: "Share",

    // About Section
    aboutTitle: "About Us",
    aboutText1:
      "FERGAGOLD is Fergana's most trusted jewelry store with over 30 years of experience. We produce handcrafted jewelry from the highest quality gold, silver, platinum and precious stones.",
    aboutText2:
      "Each of our products is created through the combination of our craftsmen's meticulous work and modern technology. Customer satisfaction and quality are always our priority.",
    contactInfo: "Contact Information",

    // Categories
    rings: "Rings",
    necklaces: "Necklaces",
    earrings: "Earrings",
    bracelets: "Bracelets",

    // Subcategories
    engagementRings: "Engagement Rings",
    weddingRings: "Wedding Rings",
    pendants: "Pendants",
    chains: "Chains",
    studs: "Studs",
    hoops: "Hoops",
    bangles: "Bangles",
    tennisBracelets: "Tennis Bracelets",

    // Products
    diamondSolitaire: "Diamond Solitaire Ring",
    pearlNecklace: "Pearl Necklace",
    goldEarrings: "Gold Earrings",
    silverBracelet: "Silver Bracelet",
    emeraldRing: "Emerald Ring",
    diamondEarrings: "Diamond Earrings",
    platinumRing: "Platinum Ring",
    goldChain: "Gold Chain",
    tennisBracelet: "Tennis Bracelet",
    sapphireEarrings: "Sapphire Earrings",

    // Product descriptions
    classicDiamondRing:
      "Classic diamond ring with perfect cut and brilliant sparkle. Ideal choice for any special occasion.",
    elegantPearlNecklace:
      "Elegant pearl necklace with natural pearls and gold clasp. Perfect for modern and classic styles.",
    luxuryGoldEarrings:
      "Luxury gold earrings with fine craftsmanship and perfect finish. For everyday and formal wear.",
    handcraftedSilverBracelet:
      "Handcrafted silver bracelet with unique design and high quality. For modern style lovers.",
    vintageEmeraldRing: "Vintage-style emerald ring with rich color and classic design. Unique choice for collectors.",
    sparklingDiamondEarrings:
      "Sparkling diamond earrings with perfect cut and amazing brilliance. Perfect for special occasions.",
    luxuryPlatinumRing: "Luxury platinum ring with highest quality and durability. Symbol of eternal love.",
    classicGoldChain: "Classic gold chain with traditional design and modern craftsmanship. Matches any outfit.",
    elegantTennisBracelet:
      "Elegant tennis bracelet with continuous diamonds and perfect setting. Symbol of luxury and sophistication.",
    royalSapphireEarrings: "Royal sapphire earrings with rich blue color and gold setting. For aristocratic style.",

    // Materials
    gold: "Gold",
    silver: "Silver",
    platinum: "Platinum",
    diamond: "Diamond",
    pearl: "Pearl",
    emerald: "Emerald",
    sapphire: "Sapphire",

    // Common
    price: "Price",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    specifications: "Specifications",
    weight: "Weight",
    size: "Size",
    purity: "Purity",
    stone: "Stone",
    length: "Length",
    material: "Material",
    category: "Category",
    availability: "Availability",

    // Contact
    contactTitle: "Contact Us",
    contactDescription: "Get in touch with our jewelry experts for personalized service",
    address: "Address",
    phone: "Phone",
    email: "Email",
    ourLocation: "Our Location",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    message: "Message",
    sendMessage: "Send Message",

    // Recommended Collection
    recommendedTitle: "Recommended Collection",
    recommendedSubtitle: "Discover our carefully curated selection of exceptional pieces",

    // Hero Section
    heroTitle: "FERGAGOLD",
    heroSubtitle: "The Art of Luxury Jewelry",
    heroDescription: "From the finest materials to the most exquisite designs for any special occasion.",
    exploreNow: "Explore",
    callNow: "Call Now",

    // Services
    servicesTitle: "Our Services",
    customDesign: "Custom Design",
    customDesignDesc: "Jewelry tailored to your specifications",
    repair: "Repair",
    repairDesc: "Expert repair and maintenance services",
    valuation: "Valuation",
    valuationDesc: "Professional valuation services",
    gifts: "Gifts",
    giftsDesc: "Jewelry gifts for special occasions",

    // Highlights
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "Highest quality materials and craftsmanship",
    awardWinning: "Award Winning",
    awardWinningDesc: "International design and quality awards",
    expertConsultation: "Expert Consultation",
    expertConsultationDesc: "Personalized design consultation and guidance",
    guarantees: "Guarantees",
    guaranteesDesc: "Lifetime warranty on all pieces",

    // Bot Chat
    chatHello: "Hello! How can I assist you?",
    chatQuestion: "Do you have any questions?",
    chatAsk: "Ask",

    // Products Page
    filterByCategory: "Filter by Category",
    noProducts: "No products found",
    selectCategory: "Select a category",

    experience: "Years Experience",
    customers: "Happy Customers",
    authentic: "Authentic",
    support: "Support",
    footerDescription: "Timeless elegance and handcrafted quality jewelry",
    services: "Services",
    repairRestoration: "Repair & Restoration",
    bespokeGifts: "Bespoke Gifts",
    allRightsReserved: "All rights reserved.",
  },
}

// Update subcategories with actual products
CATEGORIES.forEach((category) => {
  category.subcategories?.forEach((subcategory) => {
    subcategory.products = PRODUCTS.filter(
      (product) => product.category === category.id && product.subcategory === subcategory.id,
    )
  })
})

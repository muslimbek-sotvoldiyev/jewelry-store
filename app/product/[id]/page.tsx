"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

// Updated product data to match ProductGrid
const productData = {
  1: {
    nameKey: "goldRing",
    price: 2500000,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603561596112-db2eca6c9b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "rings",
    material: "gold",
    description: "Yuqori sifatli 18k oltin uzuk. Zamonaviy dizayn va an'anaviy hunarmandchilik uyg'unligi.",
  },
  2: {
    nameKey: "silverNecklace",
    price: 1800000,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "necklaces",
    material: "silver",
    description: "925 ayyor kumush marjon. Nafis va zamonaviy dizayn.",
  },
  3: {
    nameKey: "diamondEarrings",
    price: 5500000,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "earrings",
    material: "diamond",
    description: "Brilliant toshli sirg'alar. Yuqori sifat va noyob dizayn.",
  },
  4: {
    nameKey: "goldBracelet",
    price: 3200000,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "bracelets",
    material: "gold",
    description: "18k oltin bilakuzuk. Klassik va zamonaviy uslub.",
  },
  5: {
    nameKey: "platinumRing",
    price: 4500000,
    images: [
      "https://images.unsplash.com/photo-1603561596112-db2eca6c9b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "rings",
    material: "platinum",
    description: "Yuqori sifatli platina uzuk. Noyob va bardoshli material.",
  },
  6: {
    nameKey: "goldChain",
    price: 2800000,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "necklaces",
    material: "gold",
    description: "18k oltin zanjir. Klassik va zamonaviy dizayn.",
  },
  7: {
    nameKey: "diamondRing",
    price: 8500000,
    images: [
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603561596112-db2eca6c9b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "rings",
    material: "diamond",
    description: "Premium brilliant toshli uzuk. Eng yuqori sifat va noyob dizayn.",
  },
  8: {
    nameKey: "silverEarrings",
    price: 1200000,
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    ],
    category: "earrings",
    material: "silver",
    description: "925 ayyor kumush sirg'alar. Nafis va zamonaviy uslub.",
  },
}

const productNames = {
  uz: {
    goldRing: "Oltin uzuk",
    silverNecklace: "Kumush marjon",
    diamondEarrings: "Brilliant sirg'a",
    goldBracelet: "Oltin bilakuzuk",
    platinumRing: "Platina uzuk",
    goldChain: "Oltin zanjir",
    diamondRing: "Brilliant uzuk",
    silverEarrings: "Kumush sirg'a",
  },
  ru: {
    goldRing: "Золотое кольцо",
    silverNecklace: "Серебряное ожерелье",
    diamondEarrings: "Бриллиантовые серьги",
    goldBracelet: "Золотой браслет",
    platinumRing: "Платиновое кольцо",
    goldChain: "Золотая цепь",
    diamondRing: "Бриллиантовое кольцо",
    silverEarrings: "Серебряные серьги",
  },
  en: {
    goldRing: "Gold Ring",
    silverNecklace: "Silver Necklace",
    diamondEarrings: "Diamond Earrings",
    goldBracelet: "Gold Bracelet",
    platinumRing: "Platinum Ring",
    goldChain: "Gold Chain",
    diamondRing: "Diamond Ring",
    silverEarrings: "Silver Earrings",
  },
  tr: {
    goldRing: "Altın Yüzük",
    silverNecklace: "Gümüş Kolye",
    diamondEarrings: "Pırlanta Küpe",
    goldBracelet: "Altın Bilezik",
    platinumRing: "Platin Yüzük",
    goldChain: "Altın Zincir",
    diamondRing: "Pırlanta Yüzük",
    silverEarrings: "Gümüş Küpe",
  },
}

export default function ProductPage() {
  const params = useParams()
  const { t, currentLang, formatPrice } = useLanguage()
  const productId = params.id as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const product = productData[productId as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Mahsulot topilmadi</h1>
          <Link href="/shop">
            <Button>Do'konga qaytish</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getProductName = (nameKey: string) => {
    return productNames[currentLang][nameKey as keyof (typeof productNames)[typeof currentLang]] || nameKey
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: getProductName(product.nameKey),
          text: `${getProductName(product.nameKey)} - ${formatPrice(product.price)}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Share cancelled")
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Havola nusxalandi!")
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Do'konga qaytish
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Swiper */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${getProductName(product.nameKey)} ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {currentImageIndex + 1} / {product.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg transition-all duration-200 ${
                      index === currentImageIndex ? "ring-2 ring-amber-500 ring-offset-2" : "hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${getProductName(product.nameKey)} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">{getProductName(product.nameKey)}</h1>
              <p className="text-6xl font-bold text-amber-600 mb-8">{formatPrice(product.price)}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Tavsif</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-6 border-t border-gray-200">
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Kategoriya</span>
                <p className="font-semibold text-gray-900 text-lg mt-1">{t(product.category)}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Material</span>
                <p className="font-semibold text-gray-900 text-lg mt-1">{t(product.material)}</p>
              </div>
            </div>

            {/* Share Button */}
            <div className="pt-6">
              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-4 text-lg font-semibold transition-all duration-300"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Ulashish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

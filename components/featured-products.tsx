"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    nameKey: "goldRing",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isNew: true,
    category: "rings",
    material: "gold",
  },
  {
    id: 2,
    nameKey: "silverNecklace",
    price: 1800000,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isNew: false,
    category: "necklaces",
    material: "silver",
  },
  {
    id: 3,
    nameKey: "diamondEarrings",
    price: 5500000,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isNew: true,
    category: "earrings",
    material: "diamond",
  },
  {
    id: 4,
    nameKey: "goldBracelet",
    price: 3200000,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isNew: false,
    category: "bracelets",
    material: "gold",
  },
]

const productNames = {
  uz: {
    goldRing: "Oltin uzuk",
    silverNecklace: "Kumush marjon",
    diamondEarrings: "Brilliant sirg'a",
    goldBracelet: "Oltin bilakuzuk",
  },
  ru: {
    goldRing: "Золотое кольцо",
    silverNecklace: "Серебряное ожерелье",
    diamondEarrings: "Бриллиантовые серьги",
    goldBracelet: "Золотой браслет",
  },
  en: {
    goldRing: "Gold Ring",
    silverNecklace: "Silver Necklace",
    diamondEarrings: "Diamond Earrings",
    goldBracelet: "Gold Bracelet",
  },
  tr: {
    goldRing: "Altın Yüzük",
    silverNecklace: "Gümüş Kolye",
    diamondEarrings: "Pırlanta Küpe",
    goldBracelet: "Altın Bilezik",
  },
}

export function FeaturedProducts() {
  const { t, currentLang, formatPrice } = useLanguage()

  const getProductName = (nameKey: string) => {
    return productNames[currentLang][nameKey as keyof (typeof productNames)[typeof currentLang]] || nameKey
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-wide">
            {t("featuredProducts")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">{t("featuredSubtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={getProductName(product.nameKey)}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-xs font-bold tracking-wide">
                      {t("new")}
                    </span>
                  )}

                  {/* Only View Details Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href={`/product/${product.id}`}>
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors hover:scale-110 duration-300 shadow-lg">
                        <Eye className="h-4 w-4 text-gray-700 hover:text-amber-600 transition-colors" />
                      </button>
                    </Link>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-sm md:text-lg font-serif font-bold text-gray-900 mb-4 line-clamp-2">
                    {getProductName(product.nameKey)}
                  </h3>

                  <div className="mb-6">
                    <span className="text-lg md:text-xl font-bold text-amber-600">{formatPrice(product.price)}</span>
                  </div>

                  {/* Only View Details Button */}
                  <Link href={`/product/${product.id}`}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 transition-all duration-300 tracking-wide">
                      {t("viewDetails")}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/shop">
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-4 text-lg font-semibold border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 tracking-wide"
            >
              {t("viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

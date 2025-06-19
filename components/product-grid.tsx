"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ProductGridLoader, Loader } from "@/components/loader"
import Link from "next/link"

interface ProductGridProps {
  priceRange: [number, number]
  selectedCategories: string[]
  selectedMaterials: string[]
}

const allProducts = [
  {
    id: 1,
    nameKey: "goldRing",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: true,
    category: "rings",
    material: "gold",
  },
  {
    id: 2,
    nameKey: "silverNecklace",
    price: 1800000,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: false,
    category: "necklaces",
    material: "silver",
  },
  {
    id: 3,
    nameKey: "diamondEarrings",
    price: 5500000,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: true,
    category: "earrings",
    material: "diamond",
  },
  {
    id: 4,
    nameKey: "goldBracelet",
    price: 3200000,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: false,
    category: "bracelets",
    material: "gold",
  },
  {
    id: 5,
    nameKey: "platinumRing",
    price: 4500000,
    image:
      "https://images.unsplash.com/photo-1603561596112-db2eca6c9b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: true,
    category: "rings",
    material: "platinum",
  },
  {
    id: 6,
    nameKey: "goldChain",
    price: 2800000,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: false,
    category: "necklaces",
    material: "gold",
  },
  {
    id: 7,
    nameKey: "diamondRing",
    price: 8500000,
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: true,
    category: "rings",
    material: "diamond",
  },
  {
    id: 8,
    nameKey: "silverEarrings",
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    isNew: false,
    category: "earrings",
    material: "silver",
  },
]

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

export function ProductGrid({ priceRange, selectedCategories, selectedMaterials }: ProductGridProps) {
  const { t, currentLang, formatPrice, currentCurrency } = useLanguage()
  const [sortBy, setSortBy] = useState("popularity")
  const [isLoading, setIsLoading] = useState(true)
  const [isFiltering, setIsFiltering] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  // Show filtering loader when filters change
  useEffect(() => {
    if (!isLoading) {
      setIsFiltering(true)
      const timer = setTimeout(() => {
        setIsFiltering(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [priceRange, selectedCategories, selectedMaterials, sortBy, isLoading])

  const filteredProducts = useMemo(() => {
    const rates = {
      som: 1,
      uzs: 1,
      rub: 0.35,
      usd: 0.000085,
    }

    const rate = rates[currentCurrency]

    const filtered = allProducts.filter((product) => {
      const convertedPrice = product.price * rate

      if (convertedPrice < priceRange[0] || convertedPrice > priceRange[1]) {
        return false
      }
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
        return false
      }
      return true
    })

    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "popularity":
      default:
        filtered.sort((a, b) => b.id - a.id)
        break
    }

    return filtered
  }, [priceRange, selectedCategories, selectedMaterials, sortBy, currentCurrency])

  const getProductName = (nameKey: string) => {
    return productNames[currentLang][nameKey as keyof (typeof productNames)[typeof currentLang]] || nameKey
  }

  const getCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      rings: t("rings"),
      necklaces: t("necklaces"),
      earrings: t("earrings"),
      bracelets: t("bracelets"),
      watches: t("watches"),
    }
    return categoryMap[category] || category
  }

  if (isLoading) {
    return <ProductGridLoader />
  }

  if (isFiltering) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loader text="Filtering products..." />
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <p className="text-gray-600 text-lg font-light">
          {filteredProducts.length} {t("productsFound")}
        </p>
        <select
          className="border border-gray-300 rounded px-4 py-3 min-w-[200px] bg-white shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popularity">{t("popularity")}</option>
          <option value="priceLow">{t("priceLow")}</option>
          <option value="priceHigh">{t("priceHigh")}</option>
          <option value="newest">{t("newest")}</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg overflow-hidden"
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
                <div className="text-xs md:text-sm text-amber-600 mb-2 font-medium uppercase tracking-wide">
                  {getCategoryName(product.category)}
                </div>
                <h3 className="text-sm md:text-lg font-serif font-bold text-gray-900 mb-4 line-clamp-2">
                  {getProductName(product.nameKey)}
                </h3>

                <div className="mb-6">
                  <span className="text-lg md:text-xl font-bold text-amber-600">{formatPrice(product.price)}</span>
                </div>

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

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-6 text-amber-400">💎</div>
          <p className="text-gray-500 text-xl font-light">{t("noProductsFound")}</p>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="flex justify-center mt-16">
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" className="px-6 py-2 font-medium">
              {t("previous")}
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 font-medium">
              1
            </Button>
            <Button variant="outline" size="sm" className="px-6 py-2 font-medium">
              2
            </Button>
            <Button variant="outline" size="sm" className="px-6 py-2 font-medium">
              3
            </Button>
            <Button variant="outline" size="sm" className="px-6 py-2 font-medium">
              {t("next")}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

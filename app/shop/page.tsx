"use client"

import { useState, useEffect } from "react"
import { ShopHeader } from "@/components/shop-header"
import { ProductGrid } from "@/components/product-grid"
import { CategoryFilter } from "@/components/category-filter"
import { MobileFilterDrawer } from "@/components/mobile-filter-drawer"
import { useLanguage } from "@/components/language-provider"

export default function ShopPage() {
  const { t, currentCurrency } = useLanguage()

  // Initialize price range based on currency
  const getInitialPriceRange = (): [number, number] => {
    const rates = {
      som: 1,
      uzs: 1,
      rub: 0.35,
      usd: 0.000085,
    }

    const rate = rates[currentCurrency]
    return [Math.round(500000 * rate), Math.round(10000000 * rate)]
  }

  const [priceRange, setPriceRange] = useState<[number, number]>(getInitialPriceRange())
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

  // Update price range when currency changes
  useEffect(() => {
    setPriceRange(getInitialPriceRange())
  }, [currentCurrency])

  const categories = [
    { id: "rings", name: t("rings"), count: 45 },
    { id: "necklaces", name: t("necklaces"), count: 32 },
    { id: "earrings", name: t("earrings"), count: 28 },
    { id: "bracelets", name: t("bracelets"), count: 19 },
    { id: "watches", name: t("watches"), count: 15 },
  ]

  const materials = [
    { id: "gold", name: t("gold"), count: 67 },
    { id: "silver", name: t("silver"), count: 43 },
    { id: "platinum", name: t("platinum"), count: 12 },
    { id: "diamond", name: t("diamond"), count: 23 },
  ]

  const handleClearFilters = () => {
    setPriceRange(getInitialPriceRange())
    setSelectedCategories([])
    setSelectedMaterials([])
  }

  const handleApplyFilters = () => {
    console.log("Applying filters:", {
      priceRange,
      selectedCategories,
      selectedMaterials,
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <ShopHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <MobileFilterDrawer
            categories={categories}
            materials={materials}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedMaterials={selectedMaterials}
            setSelectedMaterials={setSelectedMaterials}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <CategoryFilter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              onClearFilters={handleClearFilters}
            />
          </aside>
          <div className="lg:w-3/4">
            <ProductGrid
              priceRange={priceRange}
              selectedCategories={selectedCategories}
              selectedMaterials={selectedMaterials}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

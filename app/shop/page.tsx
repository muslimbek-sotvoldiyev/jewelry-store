"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryFilter } from "@/components/category-filter"
import { LanguageProvider } from "@/components/language-provider"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { PRODUCTS, CATEGORIES, MATERIALS } from "@/lib/data"

function ShopContent() {
  const { t } = useLanguage()
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedMaterial, setSelectedMaterial] = useState<string>("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000])
  const [sortBy, setSortBy] = useState<string>("name")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  useEffect(() => {
    let filtered = [...PRODUCTS]

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by material
    if (selectedMaterial) {
      filtered = filtered.filter((product) => product.material === selectedMaterial)
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.priceUZS >= priceRange[0] && product.priceUZS <= priceRange[1])

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.priceUZS - b.priceUZS
        case "price-high":
          return b.priceUZS - a.priceUZS
        case "name":
        default:
          return a.nameKey.localeCompare(b.nameKey)
      }
    })

    setFilteredProducts(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="bg-white pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 py-6 lg:py-8">
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-3xl font-serif font-light tracking-[0.2em] mb-4">{t("shop") || "DO'KON"}</h1>
          <div className="w-16 h-px bg-black mx-auto mb-4 lg:mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
            {t("shopDescription") || "Zargarlik buyumlarining to'liq kolleksiyasini kashf eting"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <CategoryFilter
              categories={CATEGORIES.slice(0, 4)}
              materials={MATERIALS}
              selectedCategory={selectedCategory}
              selectedMaterial={selectedMaterial}
              priceRange={priceRange}
              sortBy={sortBy}
              onCategoryChange={setSelectedCategory}
              onMaterialChange={setSelectedMaterial}
              onPriceRangeChange={setPriceRange}
              onSortChange={setSortBy}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-gray-600 text-sm">
                {t("showingProducts") || "Ko'rsatilmoqda"} {startIndex + 1}-
                {Math.min(endIndex, filteredProducts.length)} {t("of") || "dan"} {filteredProducts.length}{" "}
                {t("products") || "mahsulot"}
              </p>
              <p className="text-xs lg:text-sm text-gray-500">
                {t("page") || "Sahifa"} {currentPage} {t("of") || "dan"} {totalPages}
              </p>
            </div>

            <ProductGrid products={currentProducts} />

            {totalPages > 1 && (
              <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Previous Button */}
                <Button
                  variant="outline"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2 w-full sm:w-auto"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>{t("previous") || "Oldingi"}</span>
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1 overflow-x-auto">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)

                    if (!showPage) {
                      // Show ellipsis
                      if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <span key={page} className="px-2 text-gray-400 text-sm">
                            ...
                          </span>
                        )
                      }
                      return null
                    }

                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => goToPage(page)}
                        className={`w-8 h-8 lg:w-10 lg:h-10 text-xs lg:text-sm ${currentPage === page ? "bg-black text-white" : "hover:bg-gray-100"}`}
                      >
                        {page}
                      </Button>
                    )
                  })}
                </div>

                {/* Next Button */}
                <Button
                  variant="outline"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2 w-full sm:w-auto"
                >
                  <span>{t("next") || "Keyingi"}</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ShopPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <ShopContent />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

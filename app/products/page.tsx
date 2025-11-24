"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { PRODUCTS, CATEGORIES } from "@/lib/data"
import Link from "next/link"

function ProductsPageContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  const filteredProducts = selectedCategory ? PRODUCTS.filter((p) => p.category === selectedCategory) : PRODUCTS

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-widest text-foreground mb-2 sm:mb-4">
                {t("mahsulotlar") || "Products"}
              </h1>
              <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-4" />
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                {t("exploreCollections") || "Explore our finest jewelry collections"}
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 sm:py-8 md:py-10 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                {t("all") || "All"}
              </button>

              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  {t(category.nameKey) || category.nameKey}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="group">
                    <div className="overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg">
                      {/* Image */}
                      <div className="relative w-full pt-[100%] bg-muted overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={t(product.nameKey) || product.nameKey}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col">
                        <div className="mb-2">
                          <p className="text-xs text-primary font-medium uppercase tracking-wide">
                            {t(product.category) || product.category}
                          </p>
                        </div>
                        <h3 className="text-sm sm:text-base font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {t(product.nameKey) || product.nameKey}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1">
                          {product.specifications.purity && <span>{product.specifications.purity}</span>}
                        </p>
                        <div className="text-lg sm:text-xl font-light text-primary">
                          {Math.round(product.priceUSD)}$
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{t("noProducts") || "No products found"}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <LanguageProvider>
      <ProductsPageContent />
    </LanguageProvider>
  )
}

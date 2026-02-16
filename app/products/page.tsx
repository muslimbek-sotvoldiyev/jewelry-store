"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { fetchCategories, fetchProducts, type Category, type Product } from "@/lib/api-client"

// Product Card with auto-playing swiper
function ProductCard({ product, language }: { product: Product; language: string }) {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const hasMultipleImages = product.images && product.images.length > 1

  // Auto-play swiper
  useEffect(() => {
    if (!hasMultipleImages) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [hasMultipleImages, product.images.length])

  const handleCardClick = () => {
    router.push(`/product/${product.id}`)
  }

  const getCategoryName = () => {
    if (!product.category) return ''
    const key = `name_${language}` as keyof Category
    return product.category[key] || product.category.name_uz
  }

  return (
    <div 
      onClick={handleCardClick}
      className="overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg group cursor-pointer"
    >
      {/* Image with auto-playing swiper */}
      <div className="relative w-full pt-[75%] bg-muted overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <>
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg'
              }}
            />

            {/* Image counter badge */}
            {hasMultipleImages && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 z-10">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {currentImageIndex + 1}/{product.images.length}
              </div>
            )}

            {/* Image indicators */}
            {hasMultipleImages && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 bg-black bg-opacity-50 px-2 py-1 rounded-full">
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white w-4' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="mb-2">
          <p className="text-xs text-primary font-medium uppercase tracking-wide">
            {getCategoryName()}
          </p>
        </div>
        <h3 className="text-sm sm:text-base font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mt-auto">
          <span>{product.weight}g</span>
          {product.quality && (
            <span className="font-medium text-primary">{product.quality}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function ProductsPageContent() {
  const { t, language } = useLanguage()
  const searchParams = useSearchParams()
  
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories()
      setCategories(data)
    }
    loadCategories()
  }, [])

  useEffect(() => {
    async function loadProducts() {
      setLoading(true)
      const data = await fetchProducts(selectedCategory || undefined)
      setProducts(data)
      setLoading(false)
    }
    loadProducts()
  }, [selectedCategory])

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      const categoryId = parseInt(categoryParam)
      if (!isNaN(categoryId)) {
        setSelectedCategory(categoryId)
      }
    }
  }, [searchParams])

  const getCategoryName = (category: Category) => {
    const key = `name_${language}` as keyof Category
    return category[key] || category.name_uz
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="pt-10 text-center">
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

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  {getCategoryName(category)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    language={language}
                  />
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
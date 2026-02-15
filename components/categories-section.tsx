// components/categories-section.tsx (or in your home page)
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { fetchCategories, type Category } from "@/lib/api-client"

export function CategoriesSection() {
  const { t, language } = useLanguage()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCategories() {
      setLoading(true)
      const data = await fetchCategories()
      setCategories(data)
      setLoading(false)
    }
    loadCategories()
  }, [])

  // Get category name by language
  const getCategoryName = (category: Category) => {
    const key = `name_${language}` as keyof Category;
    return category[key] || category.name_uz;
  };

  if (loading) {
    return (
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-widest text-foreground mb-3 sm:mb-4">
            {t("shop") || "Shop"}
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("exploreCollections") || "Explore our finest collections"}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg aspect-square bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-white">
                  {getCategoryName(category)}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base font-medium"
          >
            {t("viewAll") || "View All Products"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
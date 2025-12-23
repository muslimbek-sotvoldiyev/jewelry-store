"use client"

import { useLanguage } from "@/components/language-provider"
import { CategoryCarousel } from "./category-carousel"
import Link from "next/link"

export function Products() {
  const { t } = useLanguage()

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-[0.08em] sm:tracking-[0.1em] mb-3 sm:mb-4 text-foreground">
            {t("mahsulotlar")}
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">{t("exploreCollections")}</p>
        </div>

        {/* Category Carousel */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <CategoryCarousel />
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            {t("viewAllProducts")}
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

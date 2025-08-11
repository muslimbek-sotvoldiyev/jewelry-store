"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { CATEGORIES } from "@/lib/data"

export function Categories() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.1em] md:tracking-[0.2em] mb-3 md:mb-4">
            {t("categories") || "CATEGORIES"}
          </h2>
          <div className="w-16 md:w-20 h-px bg-black mx-auto mb-4 md:mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            {t("categoriesDescription") || "Explore our diverse collection of fine jewelry"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {CATEGORIES.slice(0, 4).map((category) => (
            <Link key={category.id} href={`/shop?category=${category.id}`} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-3 md:mb-4 rounded-lg">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={t(category.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm md:text-lg lg:text-xl font-light tracking-wider mb-1 md:mb-2 group-hover:text-gray-600 transition-colors">
                  {t(category.nameKey)}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-tight">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

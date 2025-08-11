"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { PRODUCTS } from "@/lib/data"

export function RecommendedCollection() {
  const { t, formatPrice } = useLanguage()
  const recommendedProducts = PRODUCTS.filter((product) => product.recommended).slice(0, 16)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light tracking-[0.2em] mb-4">{t("recommendedTitle")}</h2>
          <div className="w-20 h-px bg-black mx-auto mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{t("recommendedSubtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-3">
          {recommendedProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center px-1">
                <h3 className="text-xs font-medium mb-1 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {t(product.nameKey)}
                </h3>
                <p className="text-gray-500 text-xs mb-1 capitalize">{t(product.material)}</p>
                <p className="font-light text-xs">{formatPrice(product.priceUZS)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 tracking-wider text-sm"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  )
}

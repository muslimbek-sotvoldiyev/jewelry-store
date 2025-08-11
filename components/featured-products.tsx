"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { PRODUCTS } from "@/lib/data"

export function FeaturedProducts() {
  const { t, formatPrice } = useLanguage()
  const featuredProducts = PRODUCTS.filter((product) => product.featured).slice(0, 4)

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-serif font-light tracking-[0.2em] mb-4">
            {t("featuredProducts") || "TANIQLI MAHSULOTLAR"}
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
            {t("featuredDescription") || "Eng mashhur va ajoyib zargarlik buyumlarimizni kashf eting"}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-2 lg:mb-3 bg-gray-50 rounded-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-xs lg:text-sm mb-1 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {t(product.nameKey)}
                </h3>
                <p className="text-gray-600 text-xs mb-1">{t(product.material)}</p>
                <p className="font-light text-sm lg:text-base">{formatPrice(product.priceUZS)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <Link
            href="/shop"
            className="inline-block border border-black px-6 py-2 lg:px-8 lg:py-3 hover:bg-black hover:text-white transition-all duration-300 tracking-wider text-sm"
          >
            {t("viewAll") || "BARCHASINI KO'RISH"}
          </Link>
        </div>
      </div>
    </section>
  )
}

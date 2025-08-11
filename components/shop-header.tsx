"use client"

import { useLanguage } from "@/components/language-provider"

export function ShopHeader() {
  const { t } = useLanguage()

  // Clean, minimal header without overflowing category headings
  return (
    <section aria-labelledby="shop-title" className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-10 md:py-16 text-center">
        <p className="cartier-text uppercase tracking-[0.2em] text-[11px] text-gray-500 mb-3">
          {t("shopBreadcrumb") ?? "Jewelry Shop"}
        </p>
        <h1 id="shop-title" className="luxury-heading text-3xl md:text-5xl font-light tracking-wide mb-3">
          {t("jewelryShop") ?? "Jewelry Shop"}
        </h1>
        <div className="w-16 h-px bg-gray-300 mx-auto mb-4" aria-hidden="true"></div>
        <p className="luxury-text text-sm md:text-base text-gray-600">
          {t("shopTagline") ?? "Find the finest jewelry pieces"}
        </p>
      </div>
    </section>
  )
}

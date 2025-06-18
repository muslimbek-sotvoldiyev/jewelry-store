"use client"

import { useLanguage } from "@/components/language-provider"

export function ShopHeader() {
  const { t } = useLanguage()

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 border-b border-amber-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">{t("shopTitle")}</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">{t("shopSubtitle")}</p>
        </div>
      </div>
    </div>
  )
}

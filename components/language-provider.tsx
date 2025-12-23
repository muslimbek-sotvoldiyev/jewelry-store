"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  formatPrice: (price: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  const t = (key: string): string => {
    const translation = translations[language]
    return (translation as any)[key] || key
  }

  const formatPrice = (price: number): string => {
    if (language === "tr") {
      return `${price.toLocaleString("tr-TR")} ₺`
    } else if (language === "uz") {
      return `${price.toLocaleString()} so'm`
    } else if (language === "ru") {
      return `${price.toLocaleString()} сум`
    } else if (language === "en") {
      return `$${(price / 12500).toFixed(0)}`
    }
    return `${price.toLocaleString()} ₺`
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, formatPrice }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { TRANSLATIONS } from "@/lib/data"

type Language = "uz" | "ru" | "en" | "tr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  formatPrice: (price: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key as keyof (typeof TRANSLATIONS)[Language]] || key
  }

  const formatPrice = (price: number): string => {
    if (language === "uz") {
      return `${price.toLocaleString()} so'm`
    } else if (language === "ru") {
      return `${price.toLocaleString()} сум`
    } else if (language === "en") {
      return `$${(price / 12500).toFixed(0)}`
    } else if (language === "tr") {
      return `${price.toLocaleString()} som`
    }
    return `${price.toLocaleString()} so'm`
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

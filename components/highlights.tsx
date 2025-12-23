"use client"

import { Sparkles, Award, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Highlights() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Sparkles,
      title: t("premiumQualityTitle"),
      description: t("premiumQualityDescription"),
    },
    {
      icon: Award,
      title: t("awardWinningTitle"),
      description: t("awardWinningDescription"),
    },
    {
      icon: Clock,
      title: t("expertConsultationTitle"),
      description: t("expertConsultationDescription"),
    },
    {
      icon: Shield,
      title: t("guaranteedTitle"),
      description: t("guaranteedDescription"),
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-3 sm:space-y-4 group">
                <div className="p-2.5 sm:p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-foreground">{highlight.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{highlight.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

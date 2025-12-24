"use client"

import { useLanguage } from "@/components/language-provider"

export function MissionVision() {
  const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mission Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-[0.08em] sm:tracking-[0.1em] mb-6 sm:mb-8 text-foreground text-center">
              {t("missionTitle")}
            </h2>
            <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-8 sm:mb-10" />
            <div className="space-y-4 sm:space-y-6 text-muted-foreground">
              <p className="text-sm sm:text-base leading-relaxed text-justify">{t("missionText1")}</p>
              <p className="text-sm sm:text-base leading-relaxed text-justify">{t("missionText2")}</p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-[0.08em] sm:tracking-[0.1em] mb-6 sm:mb-8 text-foreground text-center">
              {t("visionTitle")}
            </h2>
            <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-8 sm:mb-10" />
            <div className="space-y-4 sm:space-y-6 text-muted-foreground">
              <p className="text-sm sm:text-base leading-relaxed text-justify">{t("visionText1")}</p>
              <p className="text-sm sm:text-base leading-relaxed text-justify">{t("visionText2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

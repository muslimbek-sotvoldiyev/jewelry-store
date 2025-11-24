"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/60 to-background/75" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-3xl">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-foreground text-balance">
              Luxury Jewelry Crafted with Excellence
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-primary tracking-wide">
              Handcrafted Elegance Since 1994
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Experience timeless elegance through our exquisite collection of handcrafted jewelry pieces. Premium
            quality, authentic materials, and expert craftsmanship in every piece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 md:pt-6 px-4">
            <a href="#about" className="w-full sm:w-auto inline-block">
              <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium tracking-wide">
                {t("about") || "Batafsil"}
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto inline-block">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium tracking-wide border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                {t("contact") || "Bog'lanish"}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  )
}

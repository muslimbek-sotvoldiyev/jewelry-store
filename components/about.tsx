"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const aboutImages = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=800&q=80",
]

export function About() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)
  }

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Images Carousel */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={aboutImages[currentImageIndex] || "/placeholder.svg"}
                alt={`About FERGAGOLD ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Arrows - Fixed button colors */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-card hover:bg-muted text-foreground rounded-full p-1.5 md:p-2 transition-all duration-300 border border-border"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-card hover:bg-muted text-foreground rounded-full p-1.5 md:p-2 transition-all duration-300 border border-border"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            <div className="flex space-x-1 md:space-x-2 mt-3 md:mt-4 justify-center">
              {aboutImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-12 h-8 md:w-16 md:h-12 rounded overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.1em] md:tracking-[0.2em] mb-4 md:mb-6 text-foreground">
              {t("aboutTitle")}
            </h2>
            <div className="w-16 md:w-20 h-px bg-primary mb-6 md:mb-8" />

            <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">{t("aboutText1")}</p>
              <p className="text-sm md:text-base">{t("aboutText2")}</p>
            </div>

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-card rounded-lg shadow-sm border border-border">
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-foreground">{t("contactInfo")}</h3>
              <div className="grid grid-cols-1 gap-3 md:gap-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{t("address")}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">Farg'ona, Mustaqillik 123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{t("phone")}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">+998 73 226 13 33</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{t("email")}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">info@fergagold.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light mb-1 md:mb-2 text-foreground">30+</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {t("experience")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light mb-1 md:mb-2 text-foreground">10K+</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {t("customers")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light mb-1 md:mb-2 text-foreground">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {t("authentic")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light mb-1 md:mb-2 text-foreground">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{t("support")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

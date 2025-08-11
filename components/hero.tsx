"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1920&q=80",
    titleKey: "luxuryJewelry",
    subtitleKey: "timelessElegance",
    ctaKey: "shopNow",
  },
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80",
    titleKey: "handcraftedPerfection",
    subtitleKey: "exceptionalQuality",
    ctaKey: "exploreCollection",
  },
  {
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1920&q=80",
    titleKey: "exclusiveDesigns",
    subtitleKey: "uniqueCreations",
    ctaKey: "discoverMore",
  },
]

export function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative h-full flex items-center justify-center text-center text-white">
            <div className="max-w-2xl mx-auto px-6 backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] mb-3">
                {t(slide.titleKey) || "LUXURY JEWELRY"}
              </h1>
              <p className="text-sm md:text-base lg:text-lg font-light tracking-wider mb-5 opacity-90">
                {t(slide.subtitleKey) || "Timeless Elegance"}
              </p>
              <Button size="sm" className="bg-white text-black hover:bg-gray-100 px-5 py-2 text-sm tracking-wider">
                {t(slide.ctaKey) || "SHOP NOW"}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3">
        {/* Progress Bar with gradient */}
        <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Animated Slide Indicators */}
        <div className="flex space-x-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 ease-out ${
                index === currentSlide
                  ? "w-6 h-1.5 bg-white rounded-full shadow-lg"
                  : "w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60 hover:scale-125"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter with modern styling */}
        <div className="text-white/80 text-xs font-light tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  )
}

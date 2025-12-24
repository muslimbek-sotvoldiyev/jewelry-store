"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

const jewelryImages = [
  "/elegant-diamond-ring.png",
  "/diamond-ring-close-up-luxury.jpg",
  "/gold-necklace-elegant-woman.jpg",
  "/luxury-bracelet-gold-diamonds.jpg",
  "/elegant-earrings-gold-pearls.jpg",
  "/wedding-rings-gold-diamonds.jpg",
]

const floatingImages = [
  { src: "/luxury-gold-necklace-jewelry.jpg", alt: "Gold bracelet" },
  { src: "/image.png", alt: "Gold rings" },
  { src: "/image2.png", alt: "Butterfly rings" },
  { src: "/gold-pendant-necklace-jewelry.jpg", alt: "Necklace" },
]

export function Hero() {
  const { t } = useLanguage()
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % jewelryImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const parallaxY = scrollY * 0.4
  const opacity = Math.max(0, 1 - scrollY / 600)
  const scale = 1 + scrollY * 0.0003

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        {/* Background image slideshow */}
        {jewelryImages.map((img, index) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('${img}')`,
              transform: `translateY(${parallaxY}px) scale(${scale})`,
              opacity: currentImageIndex === index ? 0.35 : 0,
            }}
          />
        ))}

        {/* Left floating image */}
        <div
          className="absolute -left-10 top-1/4 w-72 h-72 rounded-2xl overflow-hidden hidden lg:block shadow-2xl border-2 border-primary/30"
          style={{
            transform: `translateY(${scrollY * 0.2}px) rotate(${-15 + scrollY * 0.02}deg)`,
          }}
        >
          <img
            src={floatingImages[0].src || "/placeholder.svg"}
            alt={floatingImages[0].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right floating image */}
        <div
          className="absolute -right-5 top-1/3 w-56 h-56 rounded-2xl overflow-hidden hidden lg:block shadow-2xl border-2 border-primary/30"
          style={{
            transform: `translateY(${-scrollY * 0.15}px) rotate(${10 - scrollY * 0.03}deg)`,
          }}
        >
          <img
            src={floatingImages[1].src || "/placeholder.svg"}
            alt={floatingImages[1].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom center floating image */}
        <div
          className="absolute left-1/4 bottom-20 w-48 h-48 rounded-full overflow-hidden hidden lg:block shadow-xl border-2 border-primary/30"
          style={{
            transform: `translateY(${-scrollY * 0.25}px) rotate(${scrollY * 0.05}deg)`,
          }}
        >
          <img
            src={floatingImages[2].src || "/placeholder.svg"}
            alt={floatingImages[2].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top right small image */}
        <div
          className="absolute right-1/4 top-20 w-32 h-32 rounded-lg overflow-hidden hidden xl:block shadow-lg border-2 border-primary/30"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${-5 + scrollY * 0.02}deg)`,
          }}
        >
          <img
            src={floatingImages[3].src || "/placeholder.svg"}
            alt={floatingImages[3].alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background/90" />

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {jewelryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl"
        style={{
          opacity,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div
          className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center">
            <div className="relative w-20 h-20 animate-pulse-slow mt-2">
              {/* Logo */}
              <img
                src="/logonotext.png"
                alt="Logo"
                draggable={false}
                className="w-full h-full object-contain scale-110"
              />

              {/* Ping effect */}
              <div className="absolute inset-0 animate-ping opacity-30 pointer-events-none">
                <img src="/logonotext.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-[10px] space-y-3 sm:space-y-4">
            <p className="text-primary text-sm sm:text-base tracking-[0.3em] uppercase font-light animate-fade-in-up">
              {t("premiumCollection") || "Premium Jewelry Collection"}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.08em] text-foreground text-balance leading-tight">
              {t("heroTitle") || "Timeless Elegance"}
              <span className="block text-primary mt-2">{t("heroSubtitle") || "Crafted in Gold"}</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("heroDescription") ||
              "Discover exquisite handcrafted jewelry pieces that tell your unique story. Each creation is a testament to artistry and precision."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a href="#products" className="w-full sm:w-auto inline-block group">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium tracking-wide relative overflow-hidden">
                <span className="relative z-10">{t("exploreNow") || "Explore Collection"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </a>
            <a href="#about" className="w-full sm:w-auto inline-block">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-6 text-base font-medium tracking-wide border-primary/50 text-foreground hover:bg-primary/10 bg-transparent backdrop-blur-sm"
              >
                {t("about") || "Our Story"}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">{t("scroll") || "Scroll"}</span>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-scroll-down" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-5" />
    </section>
  )
}

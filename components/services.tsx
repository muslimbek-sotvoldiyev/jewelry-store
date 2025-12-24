"use client"

import { Gem, Wrench, Gift, Scale, Sparkles, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Services() {
  const { t } = useLanguage()
  const [isInView, setIsInView] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Gem,
      title: "Oltin Javohir",
      description: "Eng sof va eng yaxshi sifatli altindan tayyorlangan eksklyuziv javohir kolleksiyasi",
    },
    {
      icon: Wrench,
      title: "Tamir va Qayta Ishlash",
      description: "Qadimiy va zamonaviy javohirlarni professional tamir va qayta ishlash xizmati",
    },
    {
      icon: Gift,
      title: "Maxsus Buyurtmalar",
      description: "Sizning istaklari bo'yicha eksklyuziv va unikal javohir dizayni",
    },
    {
      icon: Sparkles,
      title: "Javohir Tozalash",
      description: "Professional tozalash va polirlovka xizmati barcha turdagi javohirlar uchun",
    },
    {
      icon: Scale,
      title: "Qadriyat va Sug'urtasi",
      description: "Javohirlaringizning qadriyatini aniqlash va xavfsizlik bo'yicha sug'urta",
    },
    {
      icon: Zap,
      title: "Tezkor Xizmat",
      description: "Tez, ishonchli va sifatli xizmat bilan sizning eng muhim daqiqalarini biz tamamlashtiramiz",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-40 bg-background border-t border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary text-xs font-semibold tracking-[0.4em] uppercase block mb-6">
              FERGA GOLD XIZMATLARI
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-[0.08em] mb-8 text-foreground text-balance">
              Bizning Xizmalar
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-primary/40 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="w-12 h-px bg-gradient-to-l from-primary/40 to-transparent"></div>
            </div>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Ferga Gold eng yuqori sifatli xizmalarni taqdim etadi
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-500 cursor-pointer ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  hoveredIndex === index
                    ? "shadow-2xl shadow-primary/30 border-primary/60"
                    : "border border-primary/20 hover:border-primary/40"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 backdrop-blur-sm transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 rounded-xl transition-all duration-500 ${
                        hoveredIndex === index ? "bg-primary/30 shadow-lg shadow-primary/20" : "bg-primary/15"
                      }`}
                    >
                      <Icon
                        className={`h-7 w-7 transition-all duration-500 ${
                          hoveredIndex === index ? "text-primary scale-110" : "text-primary/80"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-xl md:text-2xl font-serif font-light text-foreground mb-4 transition-colors duration-300 ${
                      hoveredIndex === index ? "text-primary" : ""
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed flex-grow transition-colors duration-300 group-hover:text-foreground/80">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                    <span className="text-xs uppercase font-semibold text-primary/60 group-hover:text-primary transition-colors duration-300">
                      Batafsil
                    </span>
                    <ArrowRight
                      className={`h-5 w-5 text-primary/40 transition-all duration-300 ${
                        hoveredIndex === index
                          ? "text-primary translate-x-1"
                          : "group-hover:text-primary group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`absolute inset-0 border-2 rounded-2xl pointer-events-none transition-all duration-500 ${
                    hoveredIndex === index ? "border-primary/40 shadow-inner shadow-primary/10" : "border-transparent"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

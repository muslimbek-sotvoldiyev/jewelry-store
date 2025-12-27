"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Award, TrendingUp, Users, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Direction() {
  const { t } = useLanguage()
  const [isInView, setIsInView] = useState(false)
  const [hoveredStat, setHoveredStat] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("direction")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="direction"
      className="relative bg-background py-24 md:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-40 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-6 px-5 py-2 border border-primary/20 rounded-full bg-primary/5">
              {t("sectionLabel")}
            </span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-foreground mb-6 leading-tight">
              {t("sectionTitle")}
            </h2>

            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary"></div>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary"></div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Mission Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
                    {t("missionLabel")}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-light text-foreground leading-snug">
                  {t("missionTitle")}
                </h3>

                <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
                  {t("missionText")}
                </p>

                <div className="pl-5 border-l-2 border-primary/30">
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-light">
                    {t("missionSubtext")}
                  </p>
                </div>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 gap-5 pt-4">
                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredStat(1)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-card/50 border border-primary/20 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 ${hoveredStat === 1 ? "opacity-100" : "opacity-0"}`}></div>
                    <div className="relative">
                      <p className="text-foreground/60 text-xs tracking-wide uppercase">{t("yearsExperience")}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredStat(2)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-card/50 border border-primary/20 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 ${hoveredStat === 2 ? "opacity-100" : "opacity-0"}`}></div>
                    <div className="relative">
                      <p className="text-4xl font-serif font-light text-primary mb-2">100%</p>
                      <p className="text-foreground/60 text-xs tracking-wide uppercase">{t("pureGold")}</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Mission Visual with Image */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-card/40 border border-primary/20 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-primary/30">
                  <div className="aspect-square relative">
                    <img 
                    src="/image.png"
                      // src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80" 
                      alt={t("missionImageAlt")}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center space-y-4">
                        <div className="text-7xl text-primary/30 font-serif leading-none">◆</div>
                        <p className="text-primary/80 font-serif text-lg tracking-widest uppercase">Mission</p>
                        <p className="text-foreground/60 text-sm font-light max-w-xs">
                          {t("missionImageCaption")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>
          <div className="relative bg-background px-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
              <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Vision Visual with Image */}
            <div className="lg:col-span-5 hidden lg:block order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-card/40 border border-primary/20 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-primary/30">
                  <div className="aspect-square relative">
                    <img 
                    src="/image.png"

                      // src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=800&q=80" 
                      alt={t("visionImageAlt")}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center space-y-4">
                        <div className="text-7xl text-primary/30 font-serif leading-none">✦</div>
                        <p className="text-primary/80 font-serif text-lg tracking-widest uppercase">Vision</p>
                        <p className="text-foreground/60 text-sm font-light max-w-xs">
                          {t("visionImageCaption")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Content */}
            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
                    {t("visionLabel")}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-light text-foreground leading-snug">
                  {t("visionTitle")}
                </h3>

                <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
                  {t("visionText")}
                </p>

                <div className="pl-5 border-l-2 border-primary/30">
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-light">
                    {t("visionSubtext")}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-4 pt-4">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl bg-card/40 border border-primary/20 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-primary font-serif text-base mb-1">{t("innovation")}</p>
                          <p className="text-foreground/60 text-xs">{t("innovationDesc")}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl bg-card/40 border border-primary/20 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-primary font-serif text-base mb-1">{t("sustainability")}</p>
                          <p className="text-foreground/60 text-xs">{t("sustainabilityDesc")}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
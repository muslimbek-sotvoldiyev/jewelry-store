"use client"

import { Gem, Wrench, Gift, Scale, Syringe as Ring, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Gem,
      title: "Custom Design",
      description: "Create bespoke pieces tailored to your unique vision and preferences",
    },
    {
      icon: Wrench,
      title: "Repair & Restoration",
      description: "Expert restoration and maintenance of your precious jewelry",
    },
    {
      icon: Gift,
      title: "Bespoke Gifts",
      description: "Curated collections for special occasions and memorable moments",
    },
    {
      icon: Scale,
      title: "Valuation & Insurance",
      description: "Professional appraisal and documentation for insurance purposes",
    },
    {
      icon: Ring,
      title: "Engagement Rings",
      description: "Custom-designed rings with certified precious stones",
    },
    {
      icon: Sparkles,
      title: "Jewelry Cleaning",
      description: "Professional cleaning and polishing to keep your pieces pristine",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-[0.08em] sm:tracking-[0.1em] mb-3 sm:mb-4 text-foreground">
            Our Services
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Beyond exceptional jewelry—we offer comprehensive services to care for and customize your treasures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-4 sm:p-6 md:p-8 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors duration-300 flex-shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-foreground mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

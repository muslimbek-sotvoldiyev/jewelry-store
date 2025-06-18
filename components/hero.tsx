"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="vd.mp4" type="video/mp4" />
        <source src="vd.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('vd.mp4')`,
          }}
        ></div>
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">{t("heroTitle")}</h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">{t("heroSubtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              {t("shopNow")}
            </Button>
          </Link>
          <Link href="#about">
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-3"
          >
            {t("aboutUs")}
          </Button></Link>
        </div>
      </div>
    </section>
  )
}

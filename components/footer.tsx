"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-[0.3em] mb-6 text-foreground">FERGAGOLD</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("footerDescription") || "Abadiy nafosatlik va qo'lda ishlangan sifatli zargarlik buyumlari"}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-foreground">{t("about") || "Haqida"}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("home") || "Bosh sahifa"}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("about") || "Haqida"}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services") || "Xizmatlar"}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("contact") || "Aloqa"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-foreground">{t("services") || "Xizmatlar"}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("customDesign") || "Maxsus dizayn"}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("repairRestoration") || "Ta'mirlash"}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("valuation") || "Baholash"}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("bespokeGifts") || "Sovg'alar"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 text-foreground">{t("contactInfo") || "Aloqa ma'lumotlari"}</h4>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t("address") || "Manzil"}</p>
                  <p>Farg'ona, Mustaqillik 123</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t("phone") || "Telefon"}</p>
                  <p>+998 73 226 13 33</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t("email") || "E-pochta"}</p>
                  <p>info@fergagold.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 FERGAGOLD. {t("allRightsReserved") || "Barcha huquqlar himoyalangan."}</p>
        </div>
      </div>
    </footer>
  )
}

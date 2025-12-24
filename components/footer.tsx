"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-light tracking-[0.2em] mb-6 text-foreground">FERGA GOLD</h3>
            <p className="text-foreground/70 leading-relaxed mb-6 text-sm">
              {t("footerDescription") || "Timeless elegance and handcrafted jewelry of exceptional quality"}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-foreground">{t("about") || "About"}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("home") || "Home"}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("about") || "About"}
                </Link>
              </li>
              <li>
                <Link href="#direction" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("direction") || "Direction"}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("contact") || "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-foreground">{t("services") || "Services"}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("customDesign") || "Custom Design"}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("repairRestoration") || "Repair & Restoration"}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("valuation") || "Valuation"}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  {t("bespokeGifts") || "Bespoke Gifts"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-foreground">{t("contactInfo") || "Contact Info"}</h4>
            <div className="space-y-4 text-foreground/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-0.5">{t("address") || "Address"}</p>
                  <p className="text-foreground/70">Fergana, Independence 123</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-0.5">{t("phone") || "Phone"}</p>
                  <p className="text-foreground/70">+998 73 226 13 33</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-0.5">{t("email") || "Email"}</p>
                  <p className="text-foreground/70">info@fergagold.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; 2025 FERGA GOLD. {t("allRightsReserved") || "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}

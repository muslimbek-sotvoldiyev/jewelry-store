"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-4">
              <h3 className="text-2xl md:text-3xl font-serif font-light tracking-[0.2em] mb-4 text-foreground">
                FERGA GOLD
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6 text-sm max-w-sm">
                {t("footerDescription") || "Timeless elegance and handcrafted jewelry of exceptional quality"}
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label="Youtube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-base font-semibold mb-5 text-foreground tracking-wide">
                {t("about") || "About"}
              </h4>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/" 
                      className="text-foreground/70 hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                    >
                      {t("home") || "Home"}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#about" 
                      className="text-foreground/70 hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                    >
                      {t("about") || "About"}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#direction" 
                      className="text-foreground/70 hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                    >
                      {t("direction") || "Direction"}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#contact" 
                      className="text-foreground/70 hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                    >
                      {t("contact") || "Contact"}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Empty space for better layout on large screens */}
            <div className="hidden lg:block lg:col-span-2"></div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h4 className="text-base font-semibold mb-5 text-foreground tracking-wide">
                {t("contactInfo") || "Contact Info"}
              </h4>
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm mb-1">
                      {t("address") || "Address"}
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Farg'ona Airoport 8A 
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm mb-1">
                      {t("phone") || "Phone"}
                    </p>
                    <a 
                      href="tel:+998732261333" 
                      className="text-foreground/70 hover:text-primary text-sm transition-colors"
                    >
                      +998 73 226 13 33
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm mb-1">
                      {t("email") || "Email"}
                    </p>
                    <a 
                      href="mailto:info@fergagold.com" 
                      className="text-foreground/70 hover:text-primary text-sm transition-colors break-all"
                    >
                      info@fergagold.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm text-center sm:text-left">
              &copy; 2025 FERGA GOLD. {t("allRightsReserved") || "All rights reserved."}
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="#" 
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                {t("privacyPolicy") || "Privacy Policy"}
              </Link>
              <Link 
                href="#" 
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                {t("terms") || "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
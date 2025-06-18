"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="logo.jpg"
                  alt="Logo"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <span className="text-2xl font-serif font-bold text-gray-900 tracking-wide">ZARGARLIK</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm">{t("footerDescription")}</p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 hover:bg-amber-100 rounded-full flex items-center justify-center text-gray-600 hover:text-amber-600 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">{t("quickLinks")}</h4>
            <nav className="space-y-3">
              {[
                { href: "/", label: t("home") },
                { href: "/shop", label: t("shop") },
                { href: "#about", label: t("about") },
                { href: "#contact", label: t("contact") },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">{t("categories")}</h4>
            <nav className="space-y-3">
              {[
                { href: "/shop?category=rings", label: t("rings") },
                { href: "/shop?category=necklaces", label: t("necklaces") },
                { href: "/shop?category=earrings", label: t("earrings") },
                { href: "/shop?category=bracelets", label: t("bracelets") },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">{t("contactInfo")}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-gray-600">
                  <p>Toshkent shahar</p>
                  <p>Chilonzor tumani</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-gray-600">+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <span className="text-gray-600">info@zargarlik.uz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">&copy; 2024 Zargarlik. {t("allRightsReserved")}</p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href="#" className="hover:text-amber-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-amber-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-[0.3em] mb-6">FERGANAGOLD</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{t("aboutText1")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  {t("shop")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-medium mb-6">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop?category=rings" className="text-gray-400 hover:text-white transition-colors">
                  {t("rings")}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=necklaces" className="text-gray-400 hover:text-white transition-colors">
                  {t("necklaces")}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=earrings" className="text-gray-400 hover:text-white transition-colors">
                  {t("earrings")}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=bracelets" className="text-gray-400 hover:text-white transition-colors">
                  {t("bracelets")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p>Fergana, Uzbekistan</p>
              <p>Mustaqillik Street 123</p>
              <p>+998 73 244 55 66</p>
              <p>info@ferganagold.uz</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FERGANAGOLD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

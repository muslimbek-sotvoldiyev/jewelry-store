"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white dark:bg-slate-950 text-foreground dark:text-slate-50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-[0.3em] mb-6">FERGANAGOLD</h3>
            <p className="text-foreground/70 dark:text-slate-400 leading-relaxed mb-6">
              Timeless elegance and handcrafted excellence in luxury jewelry
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">{t("about") || "About"}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  {t("home") || "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  {t("about") || "About"}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  {t("contact") || "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  Custom Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  Repair & Restoration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  Valuation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 dark:text-slate-400 hover:text-foreground dark:hover:text-slate-200 transition-colors"
                >
                  Bespoke Gifts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Info</h4>
            <div className="space-y-3 text-foreground/70 dark:text-slate-400">
              <p>Fergana, Uzbekistan</p>
              <p>Mustaqillik Street 123</p>
              <p>+998 73 244 55 66</p>
              <p>info@ferganagold.uz</p>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 dark:border-slate-800 mt-12 pt-8 text-center text-foreground/70 dark:text-slate-400">
          <p>&copy; 2025 FERGANAGOLD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

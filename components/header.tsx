"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "next-themes"

function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const languages = [
    { code: "uz", name: "Ўзбек" },
    { code: "ru", name: "Русский" },
    { code: "en", name: "English" },
    { code: "tr", name: "Türkçe" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-sm bg-background/95" : ""
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div
              className={`rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-300 ${
                isScrolled ? "w-8 sm:w-10 h-8 sm:h-10" : "w-10 sm:w-12 h-10 sm:h-12"
              }`}
            >
              <img
                src="/logo.png"
                alt="FERGANAGOLD Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span
              className={`font-serif font-light tracking-[0.1em] group-hover:tracking-[0.15em] transition-all duration-300 text-foreground whitespace-nowrap ${
                isScrolled ? "text-xs sm:text-sm md:text-base" : "text-sm sm:text-base md:text-lg"
              }`}
            >
              FERGANAGOLD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="#about"
              className="text-xs lg:text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {t("about") || "Haqida"}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#services"
              className="text-xs lg:text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {t("services") || "Xizmatlar"}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#products"
              className="text-xs lg:text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {t("products") || "Mahsulotlar"}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#contact"
              className="text-xs lg:text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {t("contact") || "Aloqa"}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Desktop Controls - Language and Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <div className="relative group">
              <Button variant="ghost" size="sm" className="text-xs lg:text-sm font-medium">
                {languages.find((l) => l.code === language)?.name || "Til"}
              </Button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      language === lang.code ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 h-10 w-10"
                title={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden p-2 h-10 w-10">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col space-y-1 p-4 sm:p-6 mt-8">
                  <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
                  >
                    {t("about") || "Haqida"}
                  </Link>
                  <Link
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
                  >
                    {t("services") || "Xizmatlar"}
                  </Link>
                  <Link
                    href="#products"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
                  >
                    {t("products") || "Mahsulotlar"}
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
                  >
                    {t("contact") || "Aloqa"}
                  </Link>
                </nav>

                {/* Mobile Language and Theme Selector */}
                <div className="border-t border-border p-4 sm:p-6 space-y-4">
                  {/* Language Selection */}
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground mb-3 px-2">{t("language") || "Til"}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any)
                            setIsOpen(false)
                          }}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            language === lang.code
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-foreground hover:bg-accent/80"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground mb-3 px-2">{t("theme") || "Tema"}</h3>
                    {mounted && (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setTheme("light")
                            setIsOpen(false)
                          }}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                            theme === "light"
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-foreground hover:bg-accent/80"
                          }`}
                        >
                          <Sun className="h-4 w-4" />
                          Light
                        </button>
                        <button
                          onClick={() => {
                            setTheme("dark")
                            setIsOpen(false)
                          }}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                            theme === "dark"
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-foreground hover:bg-accent/80"
                          }`}
                        >
                          <Moon className="h-4 w-4" />
                          Dark
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header

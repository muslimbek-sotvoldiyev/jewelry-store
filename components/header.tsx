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
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setScrollY(window.scrollY)
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

  const headerBg =
    scrollY > 100
      ? "bg-white/95 dark:bg-[#1a1410]/95 backdrop-blur-md shadow-lg border-b border-primary/10"
      : scrollY > 50
        ? "bg-white/80 dark:bg-[#1a1410]/80 backdrop-blur-sm"
        : "bg-transparent"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-300"
        style={{
          width: "100%",
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
           





<Link
  href="/"
  className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
  aria-label="FERGAGOLD bosh sahifaga"
>
  <div
    className={`
      relative rounded-lg overflow-hidden
      ring-2 ring-primary/20 group-hover:ring-primary/50
      transition-all duration-500 ease-out
      ${isScrolled ? 'w-9 sm:w-11 h-9 sm:h-11' : 'w-11 sm:w-14 h-11 sm:h-14'}
    `}
  >
    {/* Hover overlay (ikkala rejimda ham ishlaydi) */}
    <div
      className="
        absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-400
        z-10
      "
    />

    {/* Light mode uchun logo (dark mode'da yashirinadi) */}
    <img
      src="/logowhite.jpg"          // ← Light mode logo (masalan, qorong'i rangli)
      alt="FERGAGOLD Logo - Light"
      className="
        absolute inset-0 w-full h-full object-contain object-center
        
        block dark:hidden           // ← dark bo'lsa yashiriladi
        group-hover:scale-[1.08]
        transition-transform duration-500 ease-out
      "
      width={56}
      height={56}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />

    {/* Dark mode uchun logo (light mode'da yashirinadi) */}
    <img
      src="/logodark.png"           // ← Dark mode logo (masalan, oq yoki och rangli)
      alt="FERGAGOLD Logo - Dark"
      className="
        absolute inset-0 w-full h-full object-contain object-center
        bg-background/50 backdrop-blur-[2px]
        hidden dark:block           // ← faqat dark bo'lsa ko'rinadi
        group-hover:scale-[1.08]
        transition-transform duration-500 ease-out
      "
      width={56}
      height={56}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  </div>
</Link>





          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { href: "/#about", label: t("about") || "Haqida" },
              { href: "/#services", label: t("services") || "Xizmatlar" },
              { href: "/#products", label: t("products") || "Mahsulotlar" },
              { href: "/#contact", label: t("contact") || "Aloqa" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-gray-800 dark:text-white/80 hover:text-primary transition-all duration-300 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs lg:text-sm font-medium text-gray-800 dark:text-white/80 hover:text-primary hover:bg-primary/10"
              >
                {languages.find((l) => l.code === language)?.name || "Til"}
              </Button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-[#1a1410] border border-primary/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code
                        ? "bg-primary/10 text-primary"
                        : "text-gray-800 dark:text-white hover:bg-primary/10"
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
                className="p-2 h-10 w-10 text-gray-800 dark:text-white/80 hover:text-primary hover:bg-primary/10"
                title={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2 h-10 w-10 text-gray-800 dark:text-white hover:bg-primary/10"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 p-0 bg-white dark:bg-[#1a1410] border-primary/20">
              <div className="flex flex-col h-full">
                <nav className="flex-1 flex flex-col space-y-1 p-4 sm:p-6 mt-8">
                  <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("about") || "Haqida"}
                  </Link>
                  <Link
                    href="#services"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("services") || "Xizmatlar"}
                  </Link>
                  <Link
                    href="#products"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("products") || "Mahsulotlar"}
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("contact") || "Aloqa"}
                  </Link>
                </nav>

                <div className="border-t border-primary/20 p-4 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-gray-500 dark:text-white/60 mb-3 px-2">
                      {t("language") || "Til"}
                    </h3>
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
                              : "bg-primary/10 text-gray-800 dark:text-white hover:bg-primary/20"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-sm text-gray-500 dark:text-white/60 mb-3 px-2">
                      {t("theme") || "Tema"}
                    </h3>
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
                              : "bg-primary/10 text-gray-800 dark:text-white hover:bg-primary/20"
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
                              : "bg-primary/10 text-gray-800 dark:text-white hover:bg-primary/20"
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

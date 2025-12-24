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
      ? "bg-card/80 dark:bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50"
      : scrollY > 50
        ? "bg-card/60 dark:bg-card/60 backdrop-blur-md"
        : "bg-transparent"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-opacity duration-300"
        style={{
          width: "100%",
          opacity: isScrolled ? 1 : 0,
        }}
      />

      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" aria-label="FERGAGOLD Home" className="flex items-center flex-shrink-0 focus:outline-none">
            <div
              className={`
                relative transition-all duration-300 ease-out
                ${isScrolled ? "w-10 h-10 sm:w-11 sm:h-11" : "w-12 h-12 sm:w-14 sm:h-14"}
              `}
            >
              <img
                src="/logowhite-removebg.png"
                alt="FERGAGOLD Logo"
                className="w-full h-full object-contain"
                draggable={false}
                width={56}
                height={56}
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { href: "/#about", label: t("about") || "About" },
              { href: "/#direction", label: t("direction") || "Direction" },
              { href: "/#products", label: t("products") || "Products" },
              { href: "/#contact", label: t("contact") || "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs lg:text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/10"
              >
                {languages.find((l) => l.code === language)?.name || "Language"}
              </Button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-card dark:bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code ? "bg-primary/20 text-primary" : "text-foreground/70 hover:bg-primary/10"
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
                className="p-2 h-10 w-10 text-foreground/70 hover:text-primary hover:bg-primary/10"
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
                className="md:hidden p-2 h-10 w-10 text-foreground/70 hover:bg-primary/10"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 p-0 bg-card dark:bg-card border-border/50">
              <div className="flex flex-col h-full">
                <nav className="flex-1 flex flex-col space-y-1 p-4 sm:p-6 mt-8">
                  <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("about") || "About"}
                  </Link>
                  <Link
                    href="#direction"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("direction") || "Direction"}
                  </Link>
                  <Link
                    href="#products"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("products") || "Products"}
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {t("contact") || "Contact"}
                  </Link>
                </nav>

                <div className="border-t border-border/50 p-4 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground mb-3 px-2">
                      {t("language") || "Language"}
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
                              : "bg-primary/10 text-foreground/70 hover:bg-primary/20"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground mb-3 px-2">{t("theme") || "Theme"}</h3>
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
                              : "bg-primary/10 text-foreground/70 hover:bg-primary/20"
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
                              : "bg-primary/10 text-foreground/70 hover:bg-primary/20"
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

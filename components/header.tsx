"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"

const languages = [
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLang, setCurrentLang, t } = useLanguage()

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-xl shadow-xl border-b border-amber-100/50 py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-20 h-14 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 ">
                <img
                  src="logo.jpg"
                  alt="Logo"
                  className="w-20 h-20 rounded-xl object-cover transition-all duration-500"
                />
              </div>
              {/* Floating sparkle */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent transition-all duration-500 group-hover:from-amber-600 group-hover:via-amber-700 group-hover:to-amber-800">
                FERGAGOLD
              </span>
              <span className="text-xs text-amber-600/70 font-medium tracking-widest uppercase transition-all duration-500">
                Premium Jewelry
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Animations */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/", label: t("home") },
              { href: "/shop", label: t("shop") },
              { href: "/#about", label: t("about") },
              { href: "/#contact", label: t("contact") },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-amber-600 font-semibold text-lg transition-all duration-300 group py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                {/* Glow effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/50 blur-sm transition-all duration-300 group-hover:w-full rounded-full"></span>
                {/* Hover background */}
                <span className="absolute inset-0 bg-amber-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 scale-110"></span>
              </Link>
            ))}
          </nav>

          {/* Language Selector with Animation */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-2 border-amber-200 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-amber-50 hover:border-amber-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <span className="text-xl mr-3 group-hover:scale-110 transition-transform">
                    {languages.find((lang) => lang.code === currentLang)?.flag}
                  </span>
                  <span className="hidden sm:inline group-hover:text-amber-600 transition-colors">
                    {languages.find((lang) => lang.code === currentLang)?.name}
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-xl border-2 border-amber-200 shadow-2xl rounded-2xl p-2 mt-2 animate-in slide-in-from-top-2 duration-300">
                {languages.map((lang, index) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code as any)}
                    className="cursor-pointer px-4 py-3 rounded-xl hover:bg-amber-50 focus:bg-amber-50 transition-all duration-200 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-xl mr-3 group-hover:scale-110 transition-transform">{lang.flag}</span>
                    <span className="font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                      {lang.name}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button with Animation */}
          <button
            className="lg:hidden relative p-3 rounded-xl text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2.5" : ""
                }`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2.5" : ""
                }`}
              ></span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-amber-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
          </button>
        </div>

        {/* Mobile Navigation with Slide Animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200/50">
            <nav className="flex flex-col space-y-2 px-6">
              {[
                { href: "/", label: t("home") },
                { href: "/shop", label: t("shop") },
                { href: "/#about", label: t("about") },
                { href: "/#contact", label: t("contact") },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold text-gray-700 hover:text-amber-600 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-amber-50 group"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? "slideInLeft 0.5s ease-out forwards" : "",
                  }}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    {item.label}
                  </span>
                </Link>
              ))}

              <div className="pt-4 border-t border-amber-200/50">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-2 border-amber-200 bg-amber-50 text-gray-700 hover:bg-amber-100 py-3 rounded-xl font-semibold"
                    >
                      <div className="flex items-center">
                        <span className="text-xl mr-3">
                          {languages.find((lang) => lang.code === currentLang)?.flag}
                        </span>
                        <span>{languages.find((lang) => lang.code === currentLang)?.name}</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-white/95 backdrop-blur-xl border-2 border-amber-200 shadow-xl rounded-xl">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code as any)
                          setIsOpen(false)
                        }}
                        className="cursor-pointer px-4 py-3 hover:bg-amber-50 focus:bg-amber-50"
                      >
                        <span className="text-xl mr-3">{lang.flag}</span>
                        <span className="font-medium text-gray-700">{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, ChevronDown, X, Star, TrendingUp, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { CATEGORIES, PRODUCTS } from "@/lib/data"

function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showDesktopSearch, setShowDesktopSearch] = useState(false)
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      if (scrolled) {
        setActiveCategory(null) // Close mega menu when scrolling
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = PRODUCTS.filter(
        (product) =>
          t(product.nameKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
          t(product.descriptionKey).toLowerCase().includes(searchQuery.toLowerCase()),
      ).slice(0, 5)
      setSearchResults(filtered)
      setShowSearchResults(true)
    } else {
      setSearchResults([])
      setShowSearchResults(false)
    }
  }, [searchQuery, t])

  const handleCategoryEnter = (categoryId: string) => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
    setActiveCategory(categoryId)
  }

  const handleCategoryLeave = () => {
    const timeout = setTimeout(() => {
      setActiveCategory(null)
    }, 150)
    setMegaMenuTimeout(timeout)
  }

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
  }

  const handleMegaMenuLeave = () => {
    setActiveCategory(null)
  }

  const languages = [
    { code: "uz", name: "UZ", flag: "🇺🇿" },
    { code: "ru", name: "RU", flag: "🇷🇺" },
    { code: "en", name: "EN", flag: "🇺🇸" },
    { code: "tr", name: "TR", flag: "🇹🇷" },
  ]

  const getCategoryProducts = (categoryId: string) => {
    const categoryProducts = PRODUCTS.filter((product) => product.category === categoryId)
    const featuredProducts = categoryProducts.slice(0, 8) // Increased from 6 to 8
    const newProducts = categoryProducts.filter((product) => product.isNew).slice(0, 3)
    const trendingProducts = categoryProducts.filter((product) => product.isTrending).slice(0, 3)

    return {
      featured: featuredProducts,
      new: newProducts,
      trending: trendingProducts,
      total: categoryProducts.length,
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg backdrop-blur-sm bg-white/95" : ""
        }`}
      >
        {/* Main Header */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-14 lg:h-16">
              {/* Left - Shop Link */}
              <div className="flex items-center">
                <Link href="/shop" className="text-sm font-medium hover:text-gray-600 transition-colors relative group">
                  {t("shop") || "Do'kon"}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>

              {/* Center - Logo */}
              <Link href="/" className="flex items-center space-x-2 lg:space-x-3 group">
                <div
                  className={`rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-gray-200 transition-all duration-300 ${
                    isScrolled ? "w-6 h-6 lg:w-8 lg:h-8" : "w-8 h-8 lg:w-10 lg:h-10"
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=40&h=40&q=80"
                    alt="FERGANAGOLD Logo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span
                  className={`font-serif font-light tracking-[0.2em] lg:tracking-[0.3em] group-hover:tracking-[0.25em] lg:group-hover:tracking-[0.35em] transition-all duration-300 ${
                    isScrolled ? "text-base lg:text-lg" : "text-lg lg:text-2xl"
                  }`}
                >
                  FERGANAGOLD
                </span>
              </Link>

              {/* Right - Contact, Search, Language, Mobile Menu */}
              <div className="flex items-center space-x-2 lg:space-x-4">
                <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                  <Link
                    href="#contact"
                    className="text-sm font-medium hover:text-gray-600 transition-colors relative group"
                  >
                    {t("contact") || "Aloqa"}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-300 group-hover:w-full" />
                  </Link>

                  <div className="relative">
                    {!showDesktopSearch ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowDesktopSearch(true)}
                        className="h-9 px-3 hover:bg-gray-100 transition-colors"
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    ) : (
                      <div className="relative group">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" />
                        <Input
                          type="search"
                          placeholder={t("searchPlaceholder") || "Qidirish..."}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onFocus={() => searchQuery && setShowSearchResults(true)}
                          onBlur={() => {
                            setTimeout(() => {
                              setShowSearchResults(false)
                              if (!searchQuery) setShowDesktopSearch(false)
                            }, 200)
                          }}
                          className="pl-10 pr-10 w-48 lg:w-64 h-9 text-sm border-gray-200 focus:border-black transition-colors"
                          autoFocus
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setShowDesktopSearch(false)
                            setSearchQuery("")
                            setShowSearchResults(false)
                          }}
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-gray-100"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    )}

                    {/* Search Results */}
                    {showSearchResults && searchResults.length > 0 && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors"
                            onClick={() => {
                              setSearchQuery("")
                              setShowSearchResults(false)
                              setShowDesktopSearch(false)
                            }}
                          >
                            <img
                              src={product.images[0] || "/placeholder.svg"}
                              alt={t(product.nameKey)}
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div>
                              <p className="text-sm font-medium">{t(product.nameKey)}</p>
                              <p className="text-xs text-gray-500">{product.priceUZS.toLocaleString()} UZS</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`hover:bg-gray-100 transition-all duration-300 ${
                          isScrolled ? "h-8 px-2 rounded-full border border-gray-200 hover:border-gray-300" : "h-9 px-2"
                        }`}
                      >
                        <span className={`font-medium mr-1 ${isScrolled ? "text-xs" : "text-xs"}`}>
                          {languages.find((l) => l.code === language)?.flag}
                        </span>
                        {!isScrolled && (
                          <>
                            <span className="text-xs font-medium">
                              {languages.find((l) => l.code === language)?.name}
                            </span>
                            <ChevronDown className="h-3 w-3 ml-1" />
                          </>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="border-gray-200 min-w-[120px]">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => setLanguage(lang.code as any)}
                          className={`hover:bg-gray-100 transition-colors ${language === lang.code ? "bg-gray-100" : ""}`}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Mobile Search Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden hover:bg-gray-100 transition-colors"
                  onClick={() => setShowMobileSearch(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="md:hidden hover:bg-gray-100 transition-colors">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <div className="flex flex-col space-y-6 mt-6">
                      <Link href="/shop" className="text-lg font-medium hover:text-gray-600 transition-colors">
                        {t("shop") || "Do'kon"}
                      </Link>
                      <Link href="#contact" className="text-lg font-medium hover:text-gray-600 transition-colors">
                        {t("contact") || "Aloqa"}
                      </Link>
                      <div className="space-y-4">
                        <h3 className="font-medium">{t("categories") || "Kategoriyalar"}</h3>
                        {CATEGORIES.slice(0, 4).map((category) => (
                          <Link
                            key={category.id}
                            href={`/shop?category=${category.id}`}
                            className="block text-gray-600 hover:text-black transition-colors"
                          >
                            {t(category.nameKey)}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-medium">{t("language") || "Til"}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {languages.map((lang) => (
                            <Button
                              key={lang.code}
                              variant={language === lang.code ? "default" : "outline"}
                              size="sm"
                              onClick={() => setLanguage(lang.code as any)}
                              className="justify-start"
                            >
                              <span className="mr-2">{lang.flag}</span>
                              {lang.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>

        {!isScrolled && (
          <div className="hidden md:block">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="h-2 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
          </div>
        )}

        {/* Categories Navigation - Hidden when scrolled */}
        {!isScrolled && (
          <div className="hidden md:block border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4">
              <nav className="flex items-center justify-center space-x-8 h-12">
                {CATEGORIES.slice(0, 4).map((category) => (
                  <div
                    key={category.id}
                    className="relative"
                    onMouseEnter={() => handleCategoryEnter(category.id)}
                    onMouseLeave={handleCategoryLeave}
                  >
                    <Link
                      href={`/shop?category=${category.id}`}
                      className="text-sm font-medium hover:text-gray-600 transition-colors relative group py-3 px-2"
                    >
                      {t(category.nameKey)}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-black via-gray-700 to-black transition-all duration-500 group-hover:w-full" />
                    </Link>

                    {activeCategory === category.id && (
                      <div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-[900px] bg-white shadow-2xl border border-gray-100 rounded-xl p-8 z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                        onMouseEnter={handleMegaMenuEnter}
                        onMouseLeave={handleMegaMenuLeave}
                      >
                        {/* Header Section */}
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-serif font-medium mb-2">{t(category.nameKey)}</h3>
                            <p className="text-gray-600 text-sm">
                              {t(category.descriptionKey) || category.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                              {getCategoryProducts(category.id).total}+ {t("products") || "mahsulot"}
                            </Badge>
                            <Link
                              href={`/shop?category=${category.id}`}
                              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1"
                            >
                              <Eye className="h-4 w-4" />
                              <span>{t("viewAll") || "Barchasini ko'rish"}</span>
                            </Link>
                          </div>
                        </div>

                        {/* Featured Products Grid */}
                        <div className="mb-8">
                          <h4 className="font-medium mb-4 text-gray-800 flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{t("featuredProducts") || "Tavsiya etilgan mahsulotlar"}</span>
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                            {getCategoryProducts(category.id).featured.map((product) => (
                              <Link key={product.id} href={`/product/${product.id}`} className="group">
                                <div className="aspect-square overflow-hidden rounded-lg mb-2 md:mb-3 bg-gray-50 relative">
                                  <img
                                    src={product.images[0] || "/placeholder.svg"}
                                    alt={t(product.nameKey)}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  {product.isNew && (
                                    <Badge className="absolute top-1 left-1 md:top-2 md:left-2 bg-green-500 hover:bg-green-600 text-xs px-1 md:px-2 py-1">
                                      {t("new") || "Yangi"}
                                    </Badge>
                                  )}
                                  {product.isTrending && (
                                    <Badge className="absolute top-1 right-1 md:top-2 md:right-2 bg-orange-500 hover:bg-orange-600 text-xs px-1 md:px-2 py-1">
                                      <TrendingUp className="h-3 w-3" />
                                    </Badge>
                                  )}
                                </div>
                                <h4 className="text-xs md:text-sm font-medium group-hover:text-gray-600 transition-colors mb-1 line-clamp-1">
                                  {t(product.nameKey)}
                                </h4>
                                <p className="text-xs text-gray-500 mb-1">{t(product.material)}</p>
                                <div className="flex items-center justify-between">
                                  <p className="text-xs md:text-sm font-medium">
                                    {product.priceUZS.toLocaleString()} UZS
                                  </p>
                                  {product.rating && (
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                      <span className="text-xs text-gray-500">{product.rating}</span>
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Quick Links and Special Sections */}
                        <div className="grid grid-cols-3 gap-6 border-t pt-6">
                          {/* New Arrivals */}
                          {getCategoryProducts(category.id).new.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-3 text-gray-800 flex items-center space-x-2">
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  {t("newArrivals") || "Yangi kelganlar"}
                                </Badge>
                              </h4>
                              <div className="space-y-2">
                                {getCategoryProducts(category.id).new.map((product) => (
                                  <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <img
                                      src={product.images[0] || "/placeholder.svg"}
                                      alt={t(product.nameKey)}
                                      className="w-10 h-10 object-cover rounded"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium group-hover:text-gray-600 transition-colors truncate">
                                        {t(product.nameKey)}
                                      </p>
                                      <p className="text-xs text-gray-500">{product.priceUZS.toLocaleString()} UZS</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Trending */}
                          {getCategoryProducts(category.id).trending.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-3 text-gray-800 flex items-center space-x-2">
                                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                                  <TrendingUp className="h-3 w-3 mr-1" />
                                  {t("trending") || "Mashhur"}
                                </Badge>
                              </h4>
                              <div className="space-y-2">
                                {getCategoryProducts(category.id).trending.map((product) => (
                                  <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <img
                                      src={product.images[0] || "/placeholder.svg"}
                                      alt={t(product.nameKey)}
                                      className="w-10 h-10 object-cover rounded"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium group-hover:text-gray-600 transition-colors truncate">
                                        {t(product.nameKey)}
                                      </p>
                                      <p className="text-xs text-gray-500">{product.priceUZS.toLocaleString()} UZS</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Subcategories */}
                          {category.subcategories && (
                            <div>
                              <h4 className="font-medium mb-3 text-gray-800">
                                {t("subcategories") || "Subkategoriyalar"}
                              </h4>
                              <div className="space-y-2">
                                {category.subcategories.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    href={`/shop?category=${category.id}&subcategory=${sub.id}`}
                                    className="block text-sm text-gray-600 hover:text-black transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
                                  >
                                    {t(sub.nameKey)}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-20">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">{t("search") || "Qidirish"}</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowMobileSearch(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder={t("searchPlaceholder") || "Qidirish..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full h-12 text-base"
                autoFocus
              />
            </div>
            {searchResults.length > 0 && (
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors rounded-lg"
                    onClick={() => {
                      setSearchQuery("")
                      setShowMobileSearch(false)
                    }}
                  >
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={t(product.nameKey)}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{t(product.nameKey)}</p>
                      <p className="text-sm text-gray-500">{product.priceUZS.toLocaleString()} UZS</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Header

"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { RecommendedCollection } from "@/components/recommended-collection"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <FeaturedProducts />
        <Categories />
        <RecommendedCollection />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

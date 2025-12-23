"use client"

import Header from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { Services } from "@/components/services"
import { Highlights } from "@/components/highlights"
import { Products } from "@/components/products"
import { BotChat } from "@/components/bot-chat"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative">
        <AnimatedBackground />
        <Header />
        <Hero />
        <Highlights />
        <Products />
        <Services />
        <About />
        <Contact />
        {/* <BotChat /> */}
        <Footer />
      </div>
    </LanguageProvider>
  )
}

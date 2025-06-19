import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { PageLoader } from "@/components/loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zargarlik - Exquisite Jewelry Collection",
  description:
    "Discover the finest and most beautiful jewelry pieces. Rings, necklaces, earrings and other exquisite jewelry items.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <PageLoader />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

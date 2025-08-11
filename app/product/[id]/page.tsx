"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, Share2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/components/language-provider"
import { PRODUCTS } from "@/lib/data"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface ProductPageProps {
  params:
    | Promise<{
        id: string
      }>
    | {
        id: string
      }
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = params instanceof Promise ? use(params) : params
  const { id } = resolvedParams
  const { t, formatPrice } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t(product.nameKey),
          text: t(product.descriptionKey),
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      setIsShareOpen(true)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setIsShareOpen(false)
  }

  return (
    <>
      <Header />

      <main className="bg-white pt-28 md:pt-32">
        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-4 relative cursor-pointer">
                <img
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsImageModalOpen(true)}
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 transition-all duration-300"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 transition-all duration-300"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex ? "border-black" : "border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${t(product.nameKey)} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl lg:text-4xl font-light tracking-wide">{t(product.nameKey)}</h1>
                <Button variant="outline" size="sm" onClick={handleShare} className="ml-4 bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t("share")}
                </Button>
              </div>

              <p className="text-2xl lg:text-3xl font-light mb-6">{formatPrice(product.priceUZS)}</p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{t(product.descriptionKey)}</p>

              {/* Specifications */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-medium">{t("specifications")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) =>
                      value && (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-sm font-medium capitalize">{t(key)}:</span>
                          <span className="text-sm text-gray-600">{value}</span>
                        </div>
                      ),
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium">{t("material")}:</span>
                    <span className="text-sm text-gray-600 capitalize">{t(product.material)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium">{t("category")}:</span>
                    <span className="text-sm text-gray-600 capitalize">{t(product.category)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium">{t("availability")}:</span>
                    <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                      {product.inStock ? t("inStock") : t("outOfStock")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="border-t pt-8">
                <h3 className="text-lg font-medium mb-4">Product Details</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Handcrafted with premium materials</p>
                  <p>• Comes with authenticity certificate</p>
                  <p>• Free shipping and returns</p>
                  <p>• 1-year warranty included</p>
                  <p>• Professional cleaning service available</p>
                  <p>• Custom sizing available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative">
            <img
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={t(product.nameKey)}
              className="w-full h-auto"
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-2"
            >
              <X className="h-5 w-5" />
            </button>
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Share Modal */}
      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogContent className="max-w-md">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">
              {t("share")} {t(product.nameKey)}
            </h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => copyToClipboard(window.location.href)}
              >
                Copy Link
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                    "_blank",
                  )
                }
              >
                Share on Facebook
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(t(product.nameKey))}`,
                    "_blank",
                  )
                }
              >
                Share on Twitter
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(`${t(product.nameKey)} - ${window.location.href}`)}`,
                    "_blank",
                  )
                }
              >
                Share on WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

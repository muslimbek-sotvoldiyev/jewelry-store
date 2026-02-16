"use client"

import { use, useState, useEffect } from "react"
import { notFound, useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Share2, X, Phone, MessageCircle, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/components/language-provider"
import { fetchProductById, type Product, type Quality } from "@/lib/api-client"
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
  const { t, language } = useLanguage()
  const router = useRouter()
  
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Fetch product
  useEffect(() => {
    async function loadProduct() {
      setLoading(true)
      const data = await fetchProductById(parseInt(id))
      if (!data) {
        notFound()
      }
      setProduct(data)
      setLoading(false)
    }
    loadProduct()
  }, [id])

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </>
    )
  }

  if (!product) {
    notFound()
  }

  const nextImage = () => {
    if (product.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }
  }

  const prevImage = () => {
    if (product.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
    }
  }

  // Share handler - faqat link nusxalash
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.log("Error copying:", error)
    }
  }

  // Get category name by language
  const getCategoryName = () => {
    if (!product.category) return ''
    const key = `name_${language}` as keyof typeof product.category
    return product.category[key] || product.category.name_uz
  }

  // Contact info
  const CONTACT_PHONE = "+998901234567"
  const CONTACT_TELEGRAM = "@fergagold"

  return (
    <>
      <Header />

      <main className="bg-background pt-20 sm:pt-24 md:pt-28">
        <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 -ml-2 hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("back") || "Orqaga"}
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-4 relative cursor-pointer bg-muted">
                {product.images && product.images.length > 0 ? (
                  <>
                    <img
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onClick={() => setIsImageModalOpen(true)}
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg'
                      }}
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
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "border-primary"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between mb-4 gap-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-foreground">
                  {product.name}
                </h1>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare} 
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 sm:mr-2 text-green-600" />
                      <span className="hidden sm:inline text-green-600">{t("copied") || "Nusxalandi"}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">{t("share") || "Ulashish"}</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Category */}
              {product.category && (
                <p className="text-primary font-medium mb-4 uppercase text-sm tracking-wide">
                  {getCategoryName()}
                </p>
              )}

              {/* Comment/Description */}
              {product.comment && (
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.comment}
                </p>
              )}

              {/* Specifications */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-medium text-foreground">{t("specifications")}</h3>
                <div className="space-y-3">
                  {/* Weight */}
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium text-foreground">{t("weight")}:</span>
                    <span className="text-sm text-muted-foreground">{product.weight}g</span>
                  </div>

                  {/* Size */}
                  {product.size && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-sm font-medium text-foreground">{t("size")}:</span>
                      <span className="text-sm text-muted-foreground">{product.size}</span>
                    </div>
                  )}

                  {/* Quality */}
                  {product.quality && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-sm font-medium text-foreground">{t("purity")}:</span>
                      <span className="text-sm text-muted-foreground">{product.quality}</span>
                    </div>
                  )}

                  {/* Category */}
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium text-foreground">{t("category")}:</span>
                    <span className="text-sm text-muted-foreground">{getCategoryName()}</span>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <h3 className="text-base font-medium text-foreground mb-3">
                  {t("contactTitle") || "Bog'lanish"}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button 
                    onClick={() => window.open(`tel:${CONTACT_PHONE}`, '_self')}
                    className="h-12 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {t("callNow") || "Qo'ng'iroq"}
                  </Button>
                  
                  <Button 
                    onClick={() => window.open(`https://t.me/${CONTACT_TELEGRAM.replace('@', '')}`, '_blank')}
                    className="h-12 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Telegram
                  </Button>
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
            {product.images && product.images.length > 0 && (
              <>
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
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
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
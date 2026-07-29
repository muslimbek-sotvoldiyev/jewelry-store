"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/lib/data"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { t, formatPrice } = useLanguage()

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">{t("noProductsFound") || "Mahsulotlar topilmadi"}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
          <div className="relative aspect-square overflow-hidden mb-2 lg:mb-3 bg-gray-50 rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={t(product.nameKey)}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="text-center">
            <h3 className="font-medium text-xs lg:text-sm mb-1 group-hover:text-gray-600 transition-colors line-clamp-2">
              {t(product.nameKey)}
            </h3>
            <p className="text-gray-600 text-xs mb-1 capitalize">{t(product.material)}</p>
            <p className="font-light text-sm lg:text-base">{formatPrice(product.priceUZS)}</p>
            {!product.inStock && <p className="text-red-600 text-xs mt-1">{t("outOfStock") || "Tugagan"}</p>}
          </div>
        </Link>
      ))}
    </div>
  )
}

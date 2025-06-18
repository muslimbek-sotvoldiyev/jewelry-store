"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "rings",
    key: "rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 45,
  },
  {
    id: "necklaces",
    key: "necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 32,
  },
  {
    id: "earrings",
    key: "earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 28,
  },
  {
    id: "bracelets",
    key: "bracelets",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    count: 19,
  },
]

export function Categories() {
  const { t } = useLanguage()

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    // Kategoriya bosilganda analytics yoki boshqa logika
    console.log(`Category clicked: ${categoryName}`)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-wide">
            {t("categories")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">{t("categoriesSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.id}`}
              onClick={() => handleCategoryClick(category.id, t(category.key))}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={t(category.key)}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-serif font-bold mb-2 tracking-wide">{t(category.key)}</h3>
                      <p className="text-sm opacity-90 bg-amber-600 px-3 py-1 rounded-sm font-medium">
                        {category.count} {t("products")}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="text-white h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

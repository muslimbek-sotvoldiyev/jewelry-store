"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "./language-provider"
import { CATEGORIES } from "@/lib/data"

export function CategoryCarousel() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
      return () => {
        container.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-primary hover:text-primary-foreground p-2 sm:p-3 rounded-full border border-border hover:border-primary transition-all duration-300 shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-primary hover:text-primary-foreground p-2 sm:p-3 rounded-full border border-border hover:border-primary transition-all duration-300 shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.id}`}
            className="flex-shrink-0 w-56 sm:w-64 md:w-72 group/card scroll-snap-align-start"
          >
            <div className="rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col bg-card">
              {/* Image */}
              <div className="relative w-full pt-[66.66%] overflow-hidden bg-muted">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={t(category.nameKey) || category.nameKey}
                  className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 group-hover/card:text-primary transition-colors line-clamp-1">
                    {t(category.nameKey) || category.nameKey}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                </div>
                <div className="mt-3 pt-3 sm:pt-4 border-t border-border">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {t("explore") || "Explore"} →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Filter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface MobileFilterDrawerProps {
  categories: Array<{ id: string; name: string; count: number }>
  materials: Array<{ id: string; name: string; count: number }>
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  selectedMaterials: string[]
  setSelectedMaterials: (materials: string[]) => void
  onApplyFilters: () => void
  onClearFilters: () => void
}

export function MobileFilterDrawer({
  categories,
  materials,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedMaterials,
  setSelectedMaterials,
  onApplyFilters,
  onClearFilters,
}: MobileFilterDrawerProps) {
  const { t, formatPrice, currentCurrency } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleApplyFilters = () => {
    onApplyFilters()
    setIsOpen(false)
  }

  // Get converted price range based on current currency
  const getConvertedPriceRange = () => {
    const rates = {
      som: 1,
      uzs: 1,
      rub: 0.35,
      usd: 0.000085,
    }

    const rate = rates[currentCurrency]
    const minPrice = Math.round(500000 * rate)
    const maxPrice = Math.round(10000000 * rate)

    return { min: minPrice, max: maxPrice, step: Math.round(100000 * rate) }
  }

  const { min, max, step } = getConvertedPriceRange()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden">
          <Filter className="h-4 w-4 mr-2" />
          {t("filters")}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{t("filters")}</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-3">{t("categories")}</h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`mobile-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category.id])
                      } else {
                        setSelectedCategories(selectedCategories.filter((id) => id !== category.id))
                      }
                    }}
                  />
                  <label
                    htmlFor={`mobile-${category.id}`}
                    className="text-sm font-medium leading-none cursor-pointer flex-1"
                  >
                    {category.name} ({category.count})
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-semibold mb-3">{t("priceRange")}</h4>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                max={max}
                min={min}
                step={step}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div>
            <h4 className="font-semibold mb-3">{t("material")}</h4>
            <div className="space-y-3">
              {materials.map((material) => (
                <div key={material.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`mobile-material-${material.id}`}
                    checked={selectedMaterials.includes(material.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedMaterials([...selectedMaterials, material.id])
                      } else {
                        setSelectedMaterials(selectedMaterials.filter((id) => id !== material.id))
                      }
                    }}
                  />
                  <label
                    htmlFor={`mobile-material-${material.id}`}
                    className="text-sm font-medium leading-none cursor-pointer flex-1"
                  >
                    {material.name} ({material.count})
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t">
            <Button onClick={handleApplyFilters} className="w-full bg-amber-600 hover:bg-amber-700">
              {t("applyFilters")}
            </Button>
            <Button onClick={onClearFilters} variant="outline" className="w-full">
              {t("clearFilters")}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

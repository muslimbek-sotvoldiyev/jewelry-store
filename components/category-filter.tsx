"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/components/language-provider"
import type { Category } from "@/lib/data"

interface CategoryFilterProps {
  categories: Category[]
  materials: { id: string; nameKey: string }[]
  selectedCategory: string
  selectedMaterial: string
  priceRange: [number, number]
  sortBy: string
  onCategoryChange: (category: string) => void
  onMaterialChange: (material: string) => void
  onPriceRangeChange: (range: [number, number]) => void
  onSortChange: (sort: string) => void
}

function FilterContent({
  categories,
  materials,
  selectedCategory,
  selectedMaterial,
  priceRange,
  sortBy,
  onCategoryChange,
  onMaterialChange,
  onPriceRangeChange,
  onSortChange,
}: CategoryFilterProps) {
  const { t, formatPrice } = useLanguage()
  const [isCategoryOpen, setIsCategoryOpen] = useState(true)
  const [isMaterialOpen, setIsMaterialOpen] = useState(true)
  const [isPriceOpen, setIsPriceOpen] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

  useEffect(() => {
    setSelectedCategories(selectedCategory ? [selectedCategory] : [])
  }, [selectedCategory])

  useEffect(() => {
    setSelectedMaterials(selectedMaterial ? [selectedMaterial] : [])
  }, [selectedMaterial])

  const clearFilters = () => {
    onCategoryChange("")
    onMaterialChange("")
    onPriceRangeChange([0, 50000000])
    onSortChange("name")
    setSelectedCategories([])
    setSelectedMaterials([])
  }

  const handleCategoryToggle = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([categoryId]) // Only allow one category at a time
      onCategoryChange(categoryId)
    } else {
      setSelectedCategories([])
      onCategoryChange("")
    }
  }

  const handleMaterialToggle = (materialId: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([materialId]) // Only allow one material at a time
      onMaterialChange(materialId)
    } else {
      setSelectedMaterials([])
      onMaterialChange("")
    }
  }

  const selectAllCategories = () => {
    setSelectedCategories([])
    onCategoryChange("")
  }

  const selectAllMaterials = () => {
    setSelectedMaterials([])
    onMaterialChange("")
  }

  return (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <h3 className="font-medium mb-3 text-sm lg:text-base">{t("sortBy") || "Saralash"}</h3>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">{t("name") || "Nomi"}</SelectItem>
            <SelectItem value="price-low">{t("priceLowHigh") || "Narx: Pastdan yuqoriga"}</SelectItem>
            <SelectItem value="price-high">{t("priceHighLow") || "Narx: Yuqoridan pastga"}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <Collapsible open={isCategoryOpen} onOpenChange={setIsCategoryOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium text-sm lg:text-base">{t("categories") || "Kategoriyalar"}</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="all-categories"
                checked={selectedCategories.length === 0}
                onCheckedChange={(checked) => {
                  if (checked) {
                    selectAllCategories()
                  }
                }}
              />
              <label htmlFor="all-categories" className="text-xs lg:text-sm cursor-pointer">
                {t("allCategories") || "Barcha kategoriyalar"}
              </label>
            </div>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryToggle(category.id, checked as boolean)}
              />
              <label htmlFor={`category-${category.id}`} className="text-xs lg:text-sm cursor-pointer">
                {t(category.nameKey)}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Materials */}
      <Collapsible open={isMaterialOpen} onOpenChange={setIsMaterialOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium text-sm lg:text-base">{t("materials") || "Materiallar"}</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${isMaterialOpen ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="all-materials"
                checked={selectedMaterials.length === 0}
                onCheckedChange={(checked) => {
                  if (checked) {
                    selectAllMaterials()
                  }
                }}
              />
              <label htmlFor="all-materials" className="text-xs lg:text-sm cursor-pointer">
                {t("allMaterials") || "Barcha materiallar"}
              </label>
            </div>
          </div>
          {materials.map((material) => (
            <div key={material.id} className="flex items-center space-x-2">
              <Checkbox
                id={`material-${material.id}`}
                checked={selectedMaterials.includes(material.id)}
                onCheckedChange={(checked) => handleMaterialToggle(material.id, checked as boolean)}
              />
              <label htmlFor={`material-${material.id}`} className="text-xs lg:text-sm cursor-pointer">
                {t(material.nameKey)}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range */}
      <Collapsible open={isPriceOpen} onOpenChange={setIsPriceOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium text-sm lg:text-base">{t("priceRange") || "Narx oralig'i"}</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${isPriceOpen ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3">
          <div className="px-3">
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
              max={50000000}
              min={0}
              step={1000000}
              className="mb-4"
            />
            <div className="flex justify-between text-xs lg:text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Clear Filters */}
      <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent text-xs lg:text-sm">
        <Filter className="h-4 w-4 mr-2" />
        {t("clearFilters") || "Filtrlarni tozalash"}
      </Button>
    </div>
  )
}

export function CategoryFilter(props: CategoryFilterProps) {
  const { t } = useLanguage()

  return (
    <>
      {/* Desktop Filter */}
      <div className="hidden lg:block">
        <FilterContent {...props} />
      </div>

      {/* Mobile Filter */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full mb-4 bg-transparent text-sm">
              <Filter className="h-4 w-4 mr-2" />
              {t("filters") || "Filtrlar"}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">{t("filters") || "Filtrlar"}</h2>
            </div>
            <FilterContent {...props} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

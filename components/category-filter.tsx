"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

interface CategoryFilterProps {
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  selectedMaterials: string[]
  setSelectedMaterials: (materials: string[]) => void
  onClearFilters: () => void
}

export function CategoryFilter({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedMaterials,
  setSelectedMaterials,
  onClearFilters,
}: CategoryFilterProps) {
  const { t, formatPrice, currentCurrency } = useLanguage()

  const categories = [
    { id: "rings", name: t("rings"), count: 45 },
    { id: "necklaces", name: t("necklaces"), count: 32 },
    { id: "earrings", name: t("earrings"), count: 28 },
    { id: "bracelets", name: t("bracelets"), count: 19 },
    { id: "watches", name: t("watches"), count: 15 },
  ]

  const materials = [
    { id: "gold", name: t("gold"), count: 67 },
    { id: "silver", name: t("silver"), count: 43 },
    { id: "platinum", name: t("platinum"), count: 12 },
    { id: "diamond", name: t("diamond"), count: 23 },
  ]

  // Convert price range based on current currency
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
    <div className="space-y-6 hidden lg:block">
      <Card>
        <CardHeader>
          <CardTitle>{t("categories")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
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
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
              >
                {category.name} ({category.count})
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("priceRange")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("material")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {materials.map((material) => (
            <div key={material.id} className="flex items-center space-x-2">
              <Checkbox
                id={material.id}
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
                htmlFor={material.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
              >
                {material.name} ({material.count})
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full" variant="outline" onClick={onClearFilters}>
        {t("clearFilters")}
      </Button>
    </div>
  )
}

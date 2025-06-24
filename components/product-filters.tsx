"use client"

import type { Category } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
  categories: Category[]
  selectedCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
}

export function ProductFilters({ categories, selectedCategory, onCategoryChange }: ProductFiltersProps) {
  // Separar las categorías de estaciones del resto
  const seasonalCategories = categories.filter(cat => cat.id === "verano" || cat.id === "invierno")
  const regularCategories = categories.filter(cat => cat.id !== "verano" && cat.id !== "invierno")

  return (
    <div className="space-y-4">
      <Button
        variant={selectedCategory === null ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => onCategoryChange(null)}
      >
        Todos los productos
      </Button>
      
      {/* Categorías regulares */}
      <div className="space-y-2">
        {regularCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Sección de Estaciones */}
      {seasonalCategories.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground px-2">Estaciones</h4>
          {seasonalCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

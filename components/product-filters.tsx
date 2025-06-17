"use client"

import type { Category } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
  categories: Category[]
  selectedCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
}

export function ProductFilters({ categories, selectedCategory, onCategoryChange }: ProductFiltersProps) {
  return (
    <div className="space-y-2">
      <Button
        variant={selectedCategory === null ? "default" : "ghost"}
        className="w-full justify-start"
        onClick={() => onCategoryChange(null)}
      >
        Todos los productos
      </Button>
      {categories.map((category) => (
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
  )
}

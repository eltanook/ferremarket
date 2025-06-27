"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatPrice } from "@/lib/utils"
import type { ProductVariant } from "@/lib/types"

interface ProductVariantsProps {
  variants: ProductVariant[]
  onVariantChange: (variant: ProductVariant) => void
  selectedVariantId?: string
}

export function ProductVariants({ variants, onVariantChange, selectedVariantId }: ProductVariantsProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedVariant, setSelectedVariant] = useState<string>("")

  // Detectar el tipo de variantes
  const hasStandardVariants = variants.some(v => v.specifications?.["Medida"] && v.specifications?.["Colores"])
  const hasSimpleVariants = !hasStandardVariants

  // Extraer medidas y colores únicos de las variantes
  const sizes = Array.from(new Set(
    variants.map(variant => {
      // Extraer medida de especificaciones
      const medida = variant.specifications?.["Medida"] || ""
      return medida
    })
  )).filter(Boolean).sort()

  const colors = Array.from(new Set(
    variants.map(variant => {
      // Extraer color de especificaciones
      const colores = variant.specifications?.["Colores"] || ""
      return colores
    })
  )).filter(Boolean).sort()

  // Encontrar variante actual basada en medida y color seleccionados
  const findVariant = (size: string, color: string) => {
    return variants.find(variant => {
      const variantSize = variant.specifications?.["Medida"] || ""
      const variantColor = variant.specifications?.["Colores"] || ""
      
      return variantSize === size && variantColor === color
    })
  }

  // Inicializar con la primera variante o la seleccionada
  useEffect(() => {
    if (selectedVariantId) {
      const variant = variants.find(v => v.id === selectedVariantId)
      if (variant) {
        if (hasStandardVariants) {
          const size = variant.specifications?.["Medida"] || ""
          const color = variant.specifications?.["Colores"] || ""
          setSelectedSize(size)
          setSelectedColor(color)
        } else {
          setSelectedVariant(variant.id)
        }
      }
    } else if (variants.length > 0) {
      const firstVariant = variants[0]
      if (hasStandardVariants) {
        const size = firstVariant.specifications?.["Medida"] || ""
        const color = firstVariant.specifications?.["Colores"] || ""
        setSelectedSize(size)
        setSelectedColor(color)
      } else {
        setSelectedVariant(firstVariant.id)
      }
      onVariantChange(firstVariant)
    }
  }, [variants, selectedVariantId, hasStandardVariants])

  // Actualizar variante cuando cambian medida o color
  useEffect(() => {
    if (hasStandardVariants && selectedSize && selectedColor) {
      const variant = findVariant(selectedSize, selectedColor)
      if (variant) {
        onVariantChange(variant)
      }
    } else if (hasSimpleVariants && selectedVariant) {
      const variant = variants.find(v => v.id === selectedVariant)
      if (variant) {
        onVariantChange(variant)
      }
    }
  }, [selectedSize, selectedColor, selectedVariant, hasStandardVariants, hasSimpleVariants, variants])

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
  }

  const handleVariantChange = (variantId: string) => {
    setSelectedVariant(variantId)
  }

  const currentVariant = hasStandardVariants 
    ? findVariant(selectedSize, selectedColor)
    : variants.find(v => v.id === selectedVariant)

  return (
    <div className="space-y-4">
      {hasStandardVariants ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {sizes.length > 1 && (
            <div className="space-y-2">
              <Label htmlFor="size-select" className="text-sm font-medium">
                Medida:
              </Label>
              <Select value={selectedSize} onValueChange={handleSizeChange}>
                <SelectTrigger id="size-select">
                  <SelectValue placeholder="Seleccionar medida" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {colors.length > 1 && (
            <div className="space-y-2">
              <Label htmlFor="color-select" className="text-sm font-medium">
                Color:
              </Label>
              <Select value={selectedColor} onValueChange={handleColorChange}>
                <SelectTrigger id="color-select">
                  <SelectValue placeholder="Seleccionar color" />
                </SelectTrigger>
                <SelectContent>
                  {colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="variant-select" className="text-sm font-medium">
            Tipo:
          </Label>
          <Select value={selectedVariant} onValueChange={handleVariantChange}>
            <SelectTrigger id="variant-select">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              {variants.map((variant) => (
                <SelectItem key={variant.id} value={variant.id}>
                  {variant.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {currentVariant && (
        <div className="rounded-lg bg-muted/30 p-3 text-sm">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {hasStandardVariants 
                ? `${currentVariant.specifications?.["Medida"]} - ${currentVariant.specifications?.["Colores"]}`
                : currentVariant.name
              }
            </div>
            <div className="text-right text-muted-foreground">
              {currentVariant.stock} disponibles
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
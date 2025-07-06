"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Minus, Plus } from "lucide-react"

interface RollSelectorProps {
  product: {
    id: string
    name: string
    price: number
    rollLength: number
    rollPrice?: number
    wholesalePrice?: number
    stock: number
  }
  onQuantityChange: (quantity: number, isPartial: boolean, partialLength?: number) => void
  onSelectionTypeChange?: (isPartial: boolean) => void
  initialQuantity?: number
  showVariantSelector?: boolean
  variantSelector?: React.ReactNode
  selectedVariantPrice?: number // Precio por metro de la variante seleccionada
}

export function RollSelector({ 
  product, 
  onQuantityChange, 
  onSelectionTypeChange,
  initialQuantity = 1,
  showVariantSelector = false,
  variantSelector,
  selectedVariantPrice
}: RollSelectorProps) {
  const [selectionType, setSelectionType] = useState<"full" | "partial">("full")
  const [fullRolls, setFullRolls] = useState(initialQuantity)
  const [partialLength, setPartialLength] = useState(1) // Empezar en 1 metro
  
  // Opciones predefinidas de metros
  const meterOptions = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45]

  const handleFullRollsChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setFullRolls(value)
      onQuantityChange(value, false)
    }
  }

  const handlePartialLengthChange = (value: number) => {
    setPartialLength(value)
    onQuantityChange(1, true, value * 100) // Convertir metros a cm para compatibilidad
  }

  const handleSelectionTypeChange = (type: "full" | "partial") => {
    setSelectionType(type)
    const isPartial = type === "partial"
    
    if (onSelectionTypeChange) {
      onSelectionTypeChange(isPartial)
    }
    
    if (type === "full") {
      onQuantityChange(fullRolls, false)
    } else {
      // Si hay selector de variantes, usar 1 metro por defecto
      const metersToUse = showVariantSelector ? 1 : partialLength
      onQuantityChange(1, true, metersToUse * 100) // Convertir metros a cm
    }
  }

  const getPricePerMeter = () => {
    // El precio por metro es constante para cada variante
    return selectedVariantPrice || product.price
  }

  const calculatePartialPrice = () => {
    const pricePerMeter = getPricePerMeter()
    // Si hay selector de variantes, calcular por 1 metro (la medida viene de la variante)
    if (showVariantSelector) {
      return pricePerMeter * 1
    }
    return pricePerMeter * partialLength
  }

  const getRollPrice = () => {
    // Si hay precio por mayor y se compran 5 o más rollos
    if (product.wholesalePrice && fullRolls >= 5) {
      return product.wholesalePrice
    }
    return product.rollPrice || product.price
  }

  const getTotalPrice = () => {
    if (product.wholesalePrice && fullRolls >= 5) {
      return product.wholesalePrice * fullRolls
    }
    return getRollPrice() * fullRolls
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-base font-medium">Tipo de compra</Label>
        <RadioGroup value={selectionType} onValueChange={handleSelectionTypeChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="full" id="full" />
            <Label htmlFor="full" className="flex flex-col">
              <span>Rollos completos</span>
              {product.rollPrice && (
                <span className="text-sm text-muted-foreground">
                  (50m - ${product.rollPrice.toLocaleString()})
                </span>
              )}
              {product.wholesalePrice && (
                <span className="text-xs text-green-600">
                  5+ rollos: ${product.wholesalePrice.toLocaleString()} c/u
                </span>
              )}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="partial" id="partial" />
            <Label htmlFor="partial">
              Por metro (${getPricePerMeter().toLocaleString()}/m)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {selectionType === "full" ? (
        <div className="space-y-2">
          <Label className="text-base font-medium">Cantidad de rollos</Label>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleFullRollsChange(fullRolls - 1)}
              disabled={fullRolls <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <div className="flex h-8 w-12 items-center justify-center border-y">
              {fullRolls}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleFullRollsChange(fullRolls + 1)}
              disabled={fullRolls >= product.stock}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Precio total: ${getTotalPrice().toLocaleString()}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {showVariantSelector && variantSelector ? (
            <>
              {variantSelector}
            </>
      ) : (
        <div className="space-y-2">
          <Label className="text-base font-medium">
                Cantidad en metros
          </Label>
              <Select value={partialLength.toString()} onValueChange={(value) => handlePartialLengthChange(Number(value))}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {meterOptions
                    .filter(option => option <= (product.rollLength / 100))
                    .map((meters) => (
                      <SelectItem key={meters} value={meters.toString()}>
                        {meters} metros
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
          <p className="text-sm text-muted-foreground">
                Precio total: ${calculatePartialPrice().toLocaleString()} 
                ({partialLength} metros × ${getPricePerMeter().toLocaleString()}/m)
          </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
  initialQuantity?: number
}

export function RollSelector({ product, onQuantityChange, initialQuantity = 1 }: RollSelectorProps) {
  const [selectionType, setSelectionType] = useState<"full" | "partial">("full")
  const [fullRolls, setFullRolls] = useState(initialQuantity)
  const [partialLength, setPartialLength] = useState(10)

  const handleFullRollsChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setFullRolls(value)
      onQuantityChange(value, false)
    }
  }

  const handlePartialLengthChange = (value: number) => {
    const clampedValue = Math.min(Math.max(value, 10), product.rollLength)
    setPartialLength(clampedValue)
    onQuantityChange(1, true, clampedValue)
  }

  const handleSelectionTypeChange = (type: "full" | "partial") => {
    setSelectionType(type)
    if (type === "full") {
      onQuantityChange(fullRolls, false)
    } else {
      onQuantityChange(1, true, partialLength)
    }
  }

  const calculatePartialPrice = () => {
    const percentage = partialLength / product.rollLength
    return product.price * percentage
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
            <Label htmlFor="partial">Por metro (${product.price.toLocaleString()}/m)</Label>
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
          {fullRolls >= 5 && product.wholesalePrice && (
            <p className="text-xs text-green-600 font-medium">
              ¡Precio por mayor aplicado! Ahorrás ${((product.rollPrice || product.price) - product.wholesalePrice) * fullRolls}
            </p>
          )}
          {product.rollPrice && fullRolls < 5 && (
            <p className="text-xs text-green-600">
              ¡Ahorrás ${((product.price * 50 - product.rollPrice) * fullRolls).toLocaleString()} comprando rollos completos!
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          <Label className="text-base font-medium">
            Longitud en metros (máximo {(product.rollLength / 100).toFixed(1)}m)
          </Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min="1"
              max={product.rollLength / 100}
              step="0.1"
              value={partialLength / 100}
              onChange={(e) => handlePartialLengthChange(Number(e.target.value) * 100)}
              className="w-24"
            />
            <span className="text-sm text-muted-foreground">metros</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Precio: ${calculatePartialPrice().toLocaleString()} 
            ({(partialLength / 100).toFixed(1)} metros)
          </p>
        </div>
      )}
    </div>
  )
} 
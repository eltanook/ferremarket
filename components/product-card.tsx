"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    // Solo agregar directamente al carrito si no tiene variantes
    if (!product.hasVariants) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      })
    }
  }

  const getDisplayPrice = () => {
    if (product.hasVariants && product.variants && product.variants.length > 0) {
      const minPrice = Math.min(...product.variants.map(v => v.price))
      const maxPrice = Math.max(...product.variants.map(v => v.price))
      
      if (minPrice === maxPrice) {
        return `$${minPrice.toFixed(2)}`
      } else {
        return `Desde $${minPrice.toFixed(2)}`
      }
    }
    return `$${product.price.toFixed(2)}`
  }

  const getVariantLabel = () => {
    if (!product.hasVariants || !product.variants) return null

    const sizes = new Set(product.variants.map(v => v.specifications?.["Medida"] || "").filter(Boolean))
    const colors = new Set(product.variants.map(v => v.specifications?.["Colores"] || "").filter(Boolean))
    
    const hasSizes = sizes.size > 1
    const hasColors = colors.size > 1

    if (hasSizes && hasColors) return "Varias medidas y colores"
    if (hasSizes) return "Varias medidas"
    if (hasColors) return "Varios colores"
    return null
  }

  return (
    <Link href={`/productos/${product.id}`}>
      <Card
        className="overflow-hidden product-card-hover border-border/50 hover:border-primary/30 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square relative overflow-hidden bg-white border-b border-border/30">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
          {isHovered && (
            <div className={`absolute inset-0 flex ${product.hasVariants ? 'items-center justify-center' : 'flex-col items-center justify-center gap-2'} bg-gradient-to-t from-black/60 to-black/20 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100`}>
              <Button 
                size="sm" 
                variant="secondary" 
                className="w-full rounded-full font-medium bg-white/90 hover:bg-white text-foreground hover:scale-105 transition-all duration-300"
              >
                <Eye className="mr-2 h-4 w-4" />
                Ver detalles
              </Button>
              {!product.hasVariants && (
                <Button 
                  size="sm" 
                  className="w-full rounded-full font-medium bg-primary hover:bg-primary/90 text-white hover:shadow-lg hover:scale-105 transition-all duration-300" 
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Agregar
                </Button>
              )}
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-white shadow-md">
              -{product.discount}%
            </div>
          )}
          {getVariantLabel() && (
            <div className="absolute right-2 top-2 rounded-full bg-accent px-2 py-1 text-xs font-medium text-white shadow-md">
              {getVariantLabel()}
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading font-medium line-clamp-1 text-foreground">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-primary">{getDisplayPrice()}</span>
              {!product.hasVariants && product.originalPrice && (
                <span className="font-body text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="font-body text-xs text-muted-foreground">
              {product.hasVariants ? "Variantes disponibles" : (product.stock > 0 ? "En stock" : "Agotado")}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

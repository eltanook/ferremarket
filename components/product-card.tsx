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
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    })
  }

  return (
    <Link href={`/productos/${product.id}`}>
      <Card
        className="overflow-hidden product-card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          {isHovered && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <Button size="sm" variant="secondary" className="w-full rounded-full">
                <Eye className="mr-2 h-4 w-4" />
                Ver detalles
              </Button>
              <Button size="sm" className="w-full rounded-full" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Agregar
              </Button>
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-white">
              -{product.discount}%
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <div className="text-xs text-muted-foreground">{product.stock > 0 ? "En stock" : "Agotado"}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

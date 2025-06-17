"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function FeaturedProducts() {
  // Get 3 featured products
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3)

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function FeaturedProducts() {
  // Get products from winter category
  const winterProducts = products.filter((product) => 
    Array.isArray(product.category) 
      ? product.category.includes("invierno")
      : product.category === "invierno"
  ).slice(0, 3)

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {winterProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

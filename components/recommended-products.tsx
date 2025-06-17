"use client"

import { ProductCard } from "@/components/product-card"
import { getRandomProducts } from "@/lib/products"

interface RecommendedProductsProps {
  excludeId?: string
}

export function RecommendedProducts({ excludeId }: RecommendedProductsProps) {
  const recommendedProducts = getRandomProducts(excludeId, 4)

  if (recommendedProducts.length === 0) {
    return null
  }

  return (
    <section className="py-8 sm:py-16">
      <div className="mb-6 text-center sm:mb-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Productos recomendados</h2>
        <p className="mt-2 text-muted-foreground">Otros productos que podrían interesarte</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

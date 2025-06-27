"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { getProductById } from "@/lib/products"
import { RecommendedProducts } from "@/components/recommended-products"
import { RollSelector } from "@/components/roll-selector"
import { ProductVariants } from "@/components/product-variants"
import { StructuredData } from "@/components/structured-data"
import { formatPrice } from "@/lib/utils"
import type { ProductVariant } from "@/lib/types"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const product = getProductById(id)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isPartialRoll, setIsPartialRoll] = useState(false)
  const [partialLength, setPartialLength] = useState(0)
  const [showVariantSelector, setShowVariantSelector] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product?.hasVariants ? product.variants?.[0] || null : null
  )
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="container flex h-[70vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <p className="mt-2 text-muted-foreground">El producto que buscas no existe o ha sido eliminado.</p>
        <Button className="mt-4" onClick={() => router.push("/productos")}>
          Volver a productos
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    // Obtener los datos del producto actual (variante o producto base)
    const currentProduct = selectedVariant || product
    const currentPrice = selectedVariant?.price || product.price
    const currentRollPrice = selectedVariant?.rollPrice || product.rollPrice
    const currentStock = selectedVariant?.stock || product.stock
    const productName = selectedVariant ? `${product.name} - ${selectedVariant.name}` : product.name

    if (product.isRollProduct && isPartialRoll) {
      // Calcular precio por metro usando la variante seleccionada
      const pricePerMeter = currentPrice
      const lengthInMeters = partialLength / 100
      const partialPrice = pricePerMeter * lengthInMeters
      
      addToCart({
        id: selectedVariant?.id || product.id,
        name: `${productName} (${lengthInMeters.toFixed(1)}m)`,
        price: partialPrice,
        image: product.images[0],
      })
    } else {
      // Agregar rollos completos al carrito
      let rollPrice = currentRollPrice || currentPrice
      let namePrefix = product.isRollProduct ? `${productName} (Rollo 50m)` : productName
      
      // Si hay precio por mayor y se compran 5 o más rollos
      if (product.wholesalePrice && quantity >= 5) {
        rollPrice = product.wholesalePrice
        namePrefix = product.isRollProduct ? `${productName} (Rollo 50m - Por Mayor)` : `${productName} (Por Mayor)`
      }
      
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: selectedVariant?.id || product.id,
          name: namePrefix,
          price: rollPrice,
          image: product.images[0],
        })
      }
    }
  }

  const handleQuantityChange = (value: number) => {
    const currentStock = selectedVariant?.stock || product.stock
    if (value >= 1 && value <= currentStock) {
      setQuantity(value)
    }
  }

  const handleRollQuantityChange = (qty: number, isPartial: boolean, length?: number) => {
    setQuantity(qty)
    setIsPartialRoll(isPartial)
    if (length !== undefined) {
      setPartialLength(length)
    }
  }

  const getDisplayPrice = () => {
    const currentPrice = selectedVariant?.price || product.price
    const currentRollPrice = selectedVariant?.rollPrice || product.rollPrice
    
    // Para productos de rollos, mostrar precio del rollo por defecto
    if (product.isRollProduct) {
      // Si hay precio por mayor y se compran 5 o más rollos
      if (product.wholesalePrice && quantity >= 5) {
        return product.wholesalePrice
      }
      
      // Para productos con variantes, usar el precio del rollo de la variante
      if (product.hasVariants && selectedVariant) {
        return selectedVariant.rollPrice || selectedVariant.price
      }
      // Para productos sin variantes, usar el precio del rollo
      return currentRollPrice || currentPrice
    }
    
    // Para productos con variantes (no rollos), mostrar el precio de la variante seleccionada
    if (product.hasVariants && selectedVariant) {
      return selectedVariant.price
    }
    
    // Si hay precio por mayor y se compran 5 o más rollos (productos normales)
    if (product.wholesalePrice && quantity >= 5) {
      return product.wholesalePrice
    }
    
    return currentPrice
  }

  const getDisplayPriceText = () => {
    const price = getDisplayPrice()
    const currentPrice = selectedVariant?.price || product.price
    
    if (product.isRollProduct && isPartialRoll) {
      // Mostrar precio por metro cuando está seleccionado "Por metro"
      return `$${currentPrice.toLocaleString()}/m`
    }
    
    return `$${price.toLocaleString()}`
  }

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant)
    setQuantity(1) // Reset quantity when changing variant
  }

  const handleSelectionTypeChange = (isPartial: boolean) => {
    setShowVariantSelector(isPartial && product.hasVariants)
  }

  return (
    <div className="container py-4 sm:py-8">
      <StructuredData type="product" product={product} />
      <nav aria-label="Navegación de productos">
        <Button
          variant="ghost"
          className="mb-4 flex items-center gap-1 sm:mb-6"
          onClick={() => router.push("/productos")}
        >
          <ChevronLeft className="h-4 w-4" />
          Volver a productos
        </Button>
      </nav>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-white">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={`${product.name} - Imagen principal del producto`}
              fill
              className="object-contain"
            />
            {product.discount > 0 && (
              <div className="absolute left-4 top-4 rounded-full bg-primary px-2 py-1 text-sm font-medium text-white">
                -{product.discount}%
              </div>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex gap-3 min-w-fit px-1">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-all duration-200 sm:h-24 sm:w-24 ${
                      selectedImage === index ? "border-primary ring-2 ring-primary/20" : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Imagen ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <header>
            <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-2xl font-bold sm:text-3xl">{getDisplayPriceText()}</span>
              {product.originalPrice && !isPartialRoll && (
                <span className="text-base text-muted-foreground line-through sm:text-lg">
                  ${formatPrice(product.originalPrice)}
                </span>
              )}
              {product.discount > 0 && !isPartialRoll && (
                <span className="w-fit rounded-full bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  {product.discount}% descuento
                </span>
              )}
            </div>
          </header>

          <Separator />

          <div className="space-y-4">
            {product.isRollProduct ? (
              <>
                <RollSelector
                  product={{
                    id: selectedVariant?.id || product.id,
                    name: selectedVariant ? `${product.name} - ${selectedVariant.name}` : product.name,
                    price: selectedVariant?.price || product.price,
                    rollLength: product.rollLength || 100,
                    rollPrice: selectedVariant?.rollPrice || product.rollPrice,
                    wholesalePrice: product.wholesalePrice,
                    stock: selectedVariant?.stock || product.stock,
                  }}
                  onQuantityChange={handleRollQuantityChange}
                  onSelectionTypeChange={handleSelectionTypeChange}
                  initialQuantity={quantity}
                  showVariantSelector={showVariantSelector}
                  selectedVariantPrice={selectedVariant?.price}
                  variantSelector={
                    product.hasVariants && product.variants ? (
                      <ProductVariants
                        variants={product.variants}
                        onVariantChange={handleVariantChange}
                        selectedVariantId={selectedVariant?.id}
                      />
                    ) : undefined
                  }
                />
              </>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-medium">Cantidad:</span>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-r-none"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                      <span className="sr-only">Disminuir cantidad</span>
                    </Button>
                    <div className="flex h-8 w-12 items-center justify-center border-y">{quantity}</div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-l-none"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= (selectedVariant?.stock || product.stock)}
                    >
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Aumentar cantidad</span>
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {selectedVariant?.stock || product.stock} disponibles
                  </span>
                </div>

                {product.hasVariants && product.variants && (
                  <ProductVariants
                    variants={product.variants}
                    onVariantChange={handleVariantChange}
                    selectedVariantId={selectedVariant?.id}
                  />
                )}
              </>
            )}

            <Button 
              className="w-full sm:w-auto" 
              size="lg" 
              onClick={handleAddToCart} 
              disabled={(selectedVariant?.stock || product.stock) === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Agregar al carrito
            </Button>
          </div>

          <Separator />

          <Tabs defaultValue="descripcion">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="descripcion" className="flex-1 sm:flex-none">
                Descripción
              </TabsTrigger>
              {product.specifications && (
                <TabsTrigger value="especificaciones" className="flex-1 sm:flex-none">
                  Especificaciones
                </TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="descripcion" className="mt-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            {product.specifications && (
              <TabsContent value="especificaciones" className="mt-4">
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 gap-2 border-b py-2">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>

      <RecommendedProducts excludeId={product.id} />
    </div>
  )
}

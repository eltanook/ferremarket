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

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const product = getProductById(id)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
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
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      })
    }
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value)
    }
  }

  return (
    <div className="container py-4 sm:py-8">
      <Button
        variant="ghost"
        className="mb-4 flex items-center gap-1 sm:mb-6"
        onClick={() => router.push("/productos")}
      >
        <ChevronLeft className="h-4 w-4" />
        Volver a productos
      </Button>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.discount > 0 && (
              <div className="absolute left-4 top-4 rounded-full bg-primary px-2 py-1 text-sm font-medium text-white">
                -{product.discount}%
              </div>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex gap-2 min-w-fit">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border transition-all sm:h-20 sm:w-20 ${
                      selectedImage === index ? "ring-2 ring-primary" : "hover:ring-1 hover:ring-gray-300"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-2xl font-bold sm:text-3xl">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-base text-muted-foreground line-through sm:text-lg">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount > 0 && (
                <span className="w-fit rounded-full bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                  {product.discount}% descuento
                </span>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
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
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-3 w-3" />
                  <span className="sr-only">Aumentar cantidad</span>
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">{product.stock} disponibles</span>
            </div>

            <Button className="w-full sm:w-auto" size="lg" onClick={handleAddToCart} disabled={product.stock === 0}>
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

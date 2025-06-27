export interface ProductVariant {
  id: string
  name: string
  price: number
  originalPrice?: number
  stock: number
  specifications?: Record<string, string>
  rollPrice?: number // Para productos de rollo
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount: number
  images: string[]
  category: string | string[]
  stock: number
  featured: boolean
  specifications?: Record<string, string>
  isRollProduct?: boolean
  rollLength?: number // Largo del rollo en centímetros
  rollPrice?: number // Precio por rollo completo
  wholesalePrice?: number // Precio por mayor
  variants?: ProductVariant[] // Variantes del producto
  hasVariants?: boolean // Indica si el producto tiene variantes
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
}

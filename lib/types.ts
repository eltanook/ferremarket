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
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
}

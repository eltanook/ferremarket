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
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
}

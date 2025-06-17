import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "herramientas-electricas",
    name: "Herramientas Eléctricas",
    description: "Herramientas eléctricas profesionales para todo tipo de trabajo",
    image: "/placeholder.svg?height=300&width=300&text=Herramientas+Eléctricas",
  },
  {
    id: "medias-sombras-lonas",
    name: "Medias Sombras y Lonas",
    description: "Medias sombras y lonas para protección y cobertura",
    image: "/placeholder.svg?height=300&width=300&text=Medias+Sombras+Lonas",
  },
  {
    id: "sanitarios",
    name: "Sanitarios",
    description: "Artículos sanitarios y de plomería para baños y cocinas",
    image: "/placeholder.svg?height=300&width=300&text=Sanitarios",
  },
]

export function FeaturedCategories() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center text-center">
            <Link href={`/productos?categoria=${category.id}`} className="mb-4">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-background shadow-lg transition-transform duration-300 hover:scale-105 sm:h-56 sm:w-56 md:h-64 md:w-64">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
            </Link>
            <h3 className="mb-2 text-xl font-bold">{category.name}</h3>
            <Link href={`/productos?categoria=${category.id}`}>
              <Button className="mt-2 bg-primary hover:bg-primary/90">Ver Productos</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

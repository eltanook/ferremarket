import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCategories } from "@/components/featured-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { ClientLogos } from "@/components/client-logos"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

export const metadata: Metadata = {
  title: "Inicio - Ferremarket | Ferretería con 15 años de experiencia",
  description: "Ferremarket: 15 años ofreciendo herramientas eléctricas, medias sombras, lonas, materiales de construcción y más. Venta al por mayor y menor en AMBA con entrega rápida.",
  keywords: ["ferretería", "herramientas eléctricas", "media sombra", "lonas", "materiales construcción", "por mayor", "por menor"],
  openGraph: {
    title: "Ferremarket - Tu ferretería de confianza | 15 años de experiencia",
    description: "Herramientas eléctricas, medias sombras, lonas y materiales de construcción. Venta al por mayor y menor en AMBA.",
    images: ['/hero1.jpg'],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-16 sm:gap-16">
      <section className="container py-4 sm:py-8">
        <HeroCarousel />
      </section>

      <section className="container">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Categorías destacadas</h2>
          <p className="mt-2 text-muted-foreground">Explora nuestras categorías más populares</p>
        </div>
        <FeaturedCategories />
      </section>

      <section className="container">
        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Para enfrentar el frío del invierno</h2>
            <p className="mt-1 text-muted-foreground sm:mt-2">Productos esenciales para mantener tu hogar cálido y confortable</p>
          </div>
          <Link href="/productos?categoria=invierno" className="self-start sm:self-center">
            <Button variant="outline" className="gap-1">
              Ver todos
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <FeaturedProducts />
      </section>

      <section className="bg-card py-12 sm:py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="w-fit rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Más de 15 años de experiencia
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Una historia familiar de crecimiento y dedicación
              </h2>
              <p className="text-muted-foreground">
                Desde 2008, Ferremarket ha evolucionado de una pequeña ferretería local a una PyME distribuidora 
                que llega a todo el AMBA. Fundada por Susana Mansilla y Alberto Duca, hoy continuamos su legado 
                ofreciendo rapidez y soluciones a empresas y particulares.
              </p>
              <div className="pt-4">
                <Link href="/nosotros">
                  <Button>Conoce más sobre nosotros</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[250px] overflow-hidden rounded-lg sm:h-[300px] md:h-auto">
              <Image
                src="/hero5.jpg"
                alt="Interior de la tienda Ferremarket mostrando herramientas y materiales de construcción"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <TestimonialsCarousel />
      </section>

      <section className="container">
        <ClientLogos />
      </section>
    </div>
  )
}

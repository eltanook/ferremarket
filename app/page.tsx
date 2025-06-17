import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedCategories } from "@/components/featured-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { ClientLogos } from "@/components/client-logos"

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
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Productos destacados</h2>
            <p className="mt-1 text-muted-foreground sm:mt-2">Descubre nuestros productos más vendidos</p>
          </div>
          <Link href="/productos" className="self-start sm:self-center">
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
                15 años de experiencia
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Tu socio de confianza en soluciones de ferretería
              </h2>
              <p className="text-muted-foreground">
                En Ferremarket nos dedicamos a ofrecer productos de calidad y soluciones rápidas para todos tus
                proyectos. Contamos con un amplio catálogo de herramientas y materiales para profesionales y
                aficionados.
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
                alt="Ferremarket tienda"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <ClientLogos />
      </section>
    </div>
  )
}

import Image from "next/image"
import { Award, Clock, Shield, Truck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientLogos } from "@/components/client-logos"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-8 sm:gap-16 sm:py-16">
      <section className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative h-[250px] overflow-hidden rounded-lg sm:h-[300px] md:h-auto">
            <Image
              src="/hero6.jpg"
              alt="Ferremarket tienda"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="w-fit rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Sobre nosotros</div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              15 años brindando soluciones en ferretería
            </h1>
            <p className="text-muted-foreground">
              Ferremarket es una empresa con 15 años de trayectoria en el sector ferretero, dedicada a ofrecer productos
              de calidad y soluciones rápidas para todos tus proyectos de construcción, remodelación y mantenimiento.
            </p>
            <p className="text-muted-foreground">
              Nuestra visión es vender por todos los canales posibles, distribuyendo tanto al por menor como al por
              mayor, siempre con el propósito de ofrecer facilidad y rapidez a nuestros clientes.
            </p>
            <p className="text-muted-foreground">
              Uno de nuestros mayores logros ha sido convertirnos en proveedores del estado, lo que demuestra nuestra
              credibilidad y compromiso con la calidad. Nuestros valores fundamentales son la confianza y la solución,
              pilares sobre los que construimos cada relación con nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 sm:py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Nuestros servicios</h2>
            <p className="mt-2 text-muted-foreground">Ofrecemos soluciones completas para todos tus proyectos</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg sm:text-xl">Calidad garantizada</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Trabajamos con las mejores marcas del mercado para ofrecerte productos de alta calidad y durabilidad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Truck className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg sm:text-xl">Entrega rápida</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Contamos con servicio de entrega para que recibas tus productos en el menor tiempo posible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg sm:text-xl">Asesoría especializada</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Nuestro equipo de expertos te brinda la mejor asesoría para tus proyectos y necesidades específicas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg sm:text-xl">Atención personalizada</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Te ofrecemos atención personalizada para encontrar las mejores soluciones a tus necesidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container">
        <ClientLogos />
      </section>
    </div>
  )
}

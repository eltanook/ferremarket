import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-8 sm:py-12">
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo1.png"
              alt="Ferremarket Logo"
              width={40}
              height={40}
            />
            <span className="font-bold">Ferremarket</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            15 años ofreciendo soluciones en ferretería con facilidad y rapidez.
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/productos" className="text-muted-foreground hover:text-primary transition-colors">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">Categorías</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/productos?categoria=herramientas-electricas"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Herramientas Eléctricas
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=medias-sombras-lonas"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Medias Sombras y Lonas
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=sanitarios"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sanitarios
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=electricidad"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Electricidad
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=invierno"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Invierno
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Ruta 2 1079, Mar del Plata</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+54 9 11 6321-4356</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">info@ferremarket.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-6 border-t pt-6 text-center text-sm text-muted-foreground sm:mt-8 sm:pt-8">
        <p>© {new Date().getFullYear()} Ferremarket. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

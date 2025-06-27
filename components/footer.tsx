import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/5 py-8 sm:py-12" role="contentinfo">
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo1.png"
              alt="Logo de Ferremarket - Tu ferretería de confianza"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Más de 15 años de historia familiar brindando soluciones con rapidez y confianza.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="https://facebook.com" 
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link 
              href="https://instagram.com" 
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <nav aria-label="Enlaces rápidos del sitio">
          <h3 className="mb-4 font-heading text-lg font-semibold">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="/" 
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/nosotros" 
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link 
                href="/productos" 
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                href="/contacto" 
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Categorías de productos">
          <h3 className="mb-4 font-heading text-lg font-semibold">Categorías</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/productos?categoria=herramientas-electricas"
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Herramientas Eléctricas
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=medias-sombras-lonas"
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Medias Sombras y Lonas
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=sanitarios"
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Sanitarios
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=electricidad"
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Electricidad
              </Link>
            </li>
            <li>
              <Link
                href="/productos?categoria=invierno"
                className="font-body text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 py-1 rounded transition-colors duration-300"
              >
                Invierno
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-body text-muted-foreground">
                Av Diagonal Norte 1079, Ruta 25 - Moreno (La Reja)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-body text-muted-foreground">+54 9 11 6321-4356</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-body text-muted-foreground">info@ferremarket.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-6 border-t border-primary/20 pt-6 text-center text-sm text-muted-foreground sm:mt-8 sm:pt-8">
        <p className="font-body">
          © {new Date().getFullYear()} Ferremarket. Todos los derechos reservados. | 
          Desarrollado por{" "}
          <Link 
            href="https://nexiumsolutions.online/" 
            className="text-primary hover:text-accent hover:bg-primary/5 px-1 py-0.5 rounded transition-colors duration-300 font-medium hover:underline"
          >
            Nexium Solutions
          </Link>
        </p>
      </div>
    </footer>
  )
}

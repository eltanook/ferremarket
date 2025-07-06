"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Roberto Giménez",
    occupation: "Maestro mayor de obra",
    text: "Excelente calidad en todos los productos. Ferremarket se convirtió en mi proveedor de confianza para todos mis proyectos de construcción. El servicio al cliente es impecable."
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    occupation: "Constructor",
    text: "Como profesional del diseño, necesito materiales de primera calidad. Ferremarket nunca me ha fallado. Su catálogo es amplio y los precios son muy competitivos."
  },
  {
    id: 3,
    name: "Miguel Fernández",
    occupation: "Gasista matriculado",
    text: "Llevo más de 10 años comprando aquí. La variedad de productos eléctricos es increíble y siempre tienen lo que necesito en stock. Muy recomendable."
  },
  {
    id: 4,
    name: "Alejandro Martínez",
    occupation: "Carpintero",
    text: "Como aficionado al bricolaje, encuentro todo lo que necesito en Ferremarket. El personal es muy atento y me ayudan a elegir los productos correctos."
  },
  {
    id: 5,
    name: "Diego López",
    occupation: "Plomero",
    text: "Los mejores precios del mercado en materiales de plomería. Calidad garantizada y entrega rápida. Definitivamente mi ferretería de cabecera."
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="mb-6 text-center sm:mb-8">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Lo que dicen nuestros clientes
        </h2>
        <p className="mt-1 text-sm text-muted-foreground sm:mt-2 sm:text-base">
          Testimonios de profesionales y aficionados que confían en nosotros
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Card className="relative min-h-[320px] sm:min-h-[280px] overflow-hidden border bg-muted/50">
          <CardContent className="flex h-full flex-col justify-center p-4 sm:p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0 mb-4 sm:mb-0">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/20">
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <blockquote className="text-base leading-relaxed text-foreground sm:text-lg md:text-xl">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="mt-4 sm:mt-6">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonials[currentIndex].occupation}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-2 sm:left-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-md"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-2 sm:right-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-md"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        {/* Dots indicator */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-1.5 sm:gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 
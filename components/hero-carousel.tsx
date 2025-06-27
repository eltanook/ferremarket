"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const slides = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "Las mejores herramientas para tus obras",
    description: "Encontrá las herramientas eléctricas profesionales de primera calidad para cada proyecto",
    cta: "Ver herramientas eléctricas",
    link: "/productos?categoria=herramientas-electricas",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "Elegí la mejor protección para tus espacios",
    description: "Descubrí nuestra línea de medias sombras y lonas de primera calidad para exterior",
    cta: "Ver medias sombras",
    link: "/productos?categoria=medias-sombras-lonas",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "Encontrá los mejores productos sanitarios",
    description: "Explorá nuestro catálogo completo de artículos sanitarios de primera calidad",
    cta: "Ver sanitarios",
    link: "/productos?categoria=sanitarios",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="relative h-[300px] w-full overflow-hidden rounded-2xl sm:h-[350px] md:h-[400px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-2xl px-6 text-center text-white">
                <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mt-2 font-body text-sm opacity-90 sm:mt-4 sm:text-base md:text-lg">
                  {slide.description}
                </p>
                <div className="mt-4 sm:mt-6">
                  <Link href={slide.link}>
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 rounded-full px-4 font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 sm:px-6 md:px-8 md:text-base"
                    >
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-primary/30 text-white hover:bg-primary/50 backdrop-blur-sm transition-all duration-300 sm:left-4 sm:h-10 sm:w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-primary/30 text-white hover:bg-primary/50 backdrop-blur-sm transition-all duration-300 sm:right-4 sm:h-10 sm:w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1 sm:bottom-4 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-6 rounded-full transition-all duration-300 sm:h-2 sm:w-8 ${
              index === currentSlide 
                ? "bg-primary shadow-lg" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </Card>
  )
}

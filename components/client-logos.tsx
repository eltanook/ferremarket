"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

const logos = [
  { id: 1, name: "Brand 1", logo: "/brand1.png" },
  { id: 2, name: "Brand 2", logo: "/brand2.png" },
  { id: 3, name: "Brand 3", logo: "/brand3.png" },
  { id: 4, name: "Brand 4", logo: "/brand4.png" },
  { id: 5, name: "Brand 5", logo: "/brand5.png" },
  { id: 6, name: "Brand 6", logo: "/brand6.png" },
  { id: 7, name: "Brand 7", logo: "/brand7.png" },
  { id: 8, name: "Brand 8", logo: "/brand8.png" },
  { id: 9, name: "Brand 9", logo: "/brand9.png" },
  { id: 10, name: "Brand 10", logo: "/brand10.png" },
  { id: 11, name: "Brand 11", logo: "/brand11.png" },
  { id: 12, name: "Brand 12", logo: "/brand12.png" },
]

export function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="carousel-container relative flex overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-full gap-4 overflow-hidden py-6 sm:gap-8"
          style={{ scrollBehavior: "auto" }}
        >
          {/* First set of logos */}
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex min-w-[120px] items-center justify-center rounded-lg border bg-background p-4 sm:min-w-[150px] sm:p-6"
            >
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                width={100}
                height={50}
                className="h-10 w-auto object-contain sm:h-12"
              />
            </div>
          ))}

          {/* Duplicate logos for seamless scrolling */}
          {logos.map((logo) => (
            <div
              key={`dup-${logo.id}`}
              className="flex min-w-[120px] items-center justify-center rounded-lg border bg-background p-4 sm:min-w-[150px] sm:p-6"
            >
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                width={100}
                height={50}
                className="h-10 w-auto object-contain sm:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const phoneNumber = "+5491163214356" // Número de teléfono de Ferremarket
  const message = "Hola! Me gustaría hacer una consulta sobre sus productos."
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
      <Button
        onClick={handleWhatsAppClick}
        className="h-16 w-16 rounded-full bg-primary p-0 shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 hover:shadow-xl"
        aria-label="Consultar por WhatsApp"
      >
        <MessageCircle className="h-10 w-10 text-white" />
      </Button>
    </div>
  )
} 
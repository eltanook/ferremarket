"use client"

import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

export function WhatsAppFloat() {
  const { isCartOpen } = useCart()
  const phoneNumber = "+5491163214356" // Número de teléfono de Ferremarket
  const message = "Hola! Me gustaría hacer una consulta sobre sus productos."
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 hidden lg:block ${
      isCartOpen ? 'translate-x-20 opacity-50' : 'translate-x-0 opacity-100'
    }`}>
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-primary p-0 shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 hover:shadow-xl"
        aria-label="Consultar por WhatsApp"
      >
        <FaWhatsapp className="text-white" style={{ fontSize: '2.5rem', width: '2.5rem', height: '2.5rem' }} />
      </Button>
    </div>
  )
} 
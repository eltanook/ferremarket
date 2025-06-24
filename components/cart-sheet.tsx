"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"

export function CartSheet({ children }: { children: React.ReactNode }) {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart, isCartOpen, setIsCartOpen } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    if (cartItems.length === 0) return

    setIsCheckingOut(true)

    // Create WhatsApp message with cart details
    const message = encodeURIComponent(
      `Hola, me gustaría hacer un pedido:\n\n${cartItems
        .map((item) => {
          const itemTotal = item.price * item.quantity
          return `- ${item.quantity}x ${item.name}: $${formatPrice(itemTotal)}`
        })
        .join("\n")}\n\nTotal: $${formatPrice(totalPrice)}`,
    )

    // Open WhatsApp link in new tab
    window.open(`https://wa.me/5491163214356?text=${message}`, "_blank")

    // Reset checkout state after a delay
    setTimeout(() => {
      setIsCheckingOut(false)
    }, 1000)
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      {children}
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Carrito de compras</SheetTitle>
        </SheetHeader>
        {cartItems.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <div className="text-center">
              <p className="text-lg font-medium">Tu carrito está vacío</p>
              <p className="text-sm text-muted-foreground">Agrega productos para comenzar tu compra</p>
            </div>
            <Link href="/productos">
              <Button>Ver productos</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-1 flex-col gap-5 overflow-auto py-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-md border bg-white">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">${formatPrice(item.price)}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Eliminar</span>
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Disminuir cantidad</span>
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Aumentar cantidad</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">${formatPrice(totalPrice)}</span>
              </div>
              <div className="flex flex-col gap-2">
                <Button onClick={handleCheckout} disabled={isCheckingOut}>
                  {isCheckingOut ? "Procesando..." : "Finalizar compra por WhatsApp"}
                </Button>
                <Button variant="outline" onClick={clearCart}>
                  Vaciar carrito
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

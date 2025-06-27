"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { CartSheet } from "@/components/cart-sheet"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems, setIsCartOpen } = useCart()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Necesario para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Productos", href: "/productos" },
    { name: "Contacto", href: "/contacto" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1.png"
              alt="Logo de Ferremarket - Tu ferretería de confianza"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden flex-1 justify-center md:flex">
            <div className="flex gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium font-body px-3 py-2 rounded transition-colors duration-300 ${
                    pathname === item.href 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              aria-label="Cambiar tema"
              className="hover:bg-primary/10 hover:text-primary"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <CartSheet>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Carrito</span>
              </Button>
            </CartSheet>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10 hover:text-primary">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo1.png"
                    alt="Logo de Ferremarket - Tu ferretería de confianza"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
                <nav className="mt-8 flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium font-body px-3 py-2 rounded transition-colors duration-300 ${
                        pathname === item.href 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

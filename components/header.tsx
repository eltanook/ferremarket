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
  const { cartItems } = useCart()
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
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo1.png"
              alt="Ferremarket Logo"
              width={40}
              height={40}
            />
            <span className="hidden font-bold sm:inline-block">Ferremarket</span>
          </Link>

          <nav className="hidden flex-1 justify-center md:flex">
            <div className="flex gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-foreground/60"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Cambiar tema">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <CartSheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                      {totalItems}
                    </span>
                  )}
                  <span className="sr-only">Carrito</span>
                </Button>
              </SheetTrigger>
            </CartSheet>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/logo1.png"
                    alt="Ferremarket Logo"
                    width={40}
                    height={40}
                  />
                  <span className="font-bold">Ferremarket</span>
                </Link>
                <nav className="mt-8 flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        pathname === item.href ? "text-primary" : "text-foreground/60"
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

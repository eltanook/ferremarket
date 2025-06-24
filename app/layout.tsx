import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Ferremarket - Tu ferretería de confianza | Herramientas y materiales de construcción",
    template: "%s | Ferremarket"
  },
  description: "Ferremarket: 15 años ofreciendo soluciones en ferretería, herramientas eléctricas, medias sombras, lonas y materiales de construcción en AMBA. Venta al por mayor y menor con entrega rápida.",
  keywords: ["ferretería", "herramientas", "construcción", "media sombra", "lonas", "electricidad", "AMBA", "por mayor", "por menor"],
  authors: [{ name: "Ferremarket" }],
  creator: "Ferremarket",
  publisher: "Ferremarket",
  generator: 'Next.js',
  applicationName: "Ferremarket",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo2.png',
    shortcut: '/logo2.png',
    apple: '/logo2.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://ferremarket.com',
    siteName: 'Ferremarket',
    title: 'Ferremarket - Tu ferretería de confianza',
    description: 'Ferremarket: 15 años ofreciendo soluciones en ferretería, herramientas eléctricas, medias sombras, lonas y materiales de construcción en AMBA.',
    images: [
      {
        url: '/hero1.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferremarket - Ferretería de confianza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferremarket - Tu ferretería de confianza',
    description: 'Ferremarket: 15 años ofreciendo soluciones en ferretería, herramientas eléctricas, medias sombras, lonas y materiales de construcción en AMBA.',
    images: ['/hero1.jpg'],
  },
  verification: {
    google: 'google-site-verification',
  },
  category: 'business',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <WhatsAppFloat />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

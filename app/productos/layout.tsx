import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos - Catálogo completo",
  description: "Explora nuestro catálogo completo de productos: herramientas eléctricas, medias sombras, lonas, materiales eléctricos, sanitarios y más. Venta al por mayor y menor.",
  keywords: ["catálogo productos", "herramientas eléctricas", "medias sombras", "lonas", "materiales eléctricos", "sanitarios", "tejidos"],
  openGraph: {
    title: "Productos - Ferremarket | Catálogo completo",
    description: "Explora nuestro amplio catálogo de productos para construcción, electricidad y más.",
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
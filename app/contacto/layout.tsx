import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Comunícate con nosotros",
  description: "Contacta a Ferremarket para consultas sobre herramientas, materiales de construcción y más. Horarios de atención, teléfono, email y ubicación en AMBA.",
  keywords: ["contacto ferremarket", "teléfono ferretería", "dirección ferremarket", "horarios atención"],
  openGraph: {
    title: "Contacto - Ferremarket | Estamos aquí para ayudarte",
    description: "Contacta a Ferremarket para todas tus consultas. Horarios de atención y múltiples formas de comunicación.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
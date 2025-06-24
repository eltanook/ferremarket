"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    })

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()

    setIsSubmitting(false)
  }

  return (
    <div className="container py-8 sm:py-16">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Contáctanos</h1>
        <p className="mt-2 text-muted-foreground">Estamos aquí para ayudarte. Ponte en contacto con nosotros.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardContent className="flex flex-col gap-6 p-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Información de contacto</h2>
              <p className="text-sm text-muted-foreground">
                Utiliza cualquiera de estos medios para comunicarte con nosotros.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-sm text-muted-foreground">Av. Principal 123, Ciudad</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-sm text-muted-foreground">+51 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">info@ferremarket.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Horario de atención</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Lunes - Viernes</div>
                <div className="text-muted-foreground">8:00 AM - 6:00 PM</div>
                <div>Sábados</div>
                <div className="text-muted-foreground">8:00 AM - 1:00 PM</div>
                <div>Domingos</div>
                <div className="text-muted-foreground">Cerrado</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" name="subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" rows={5} required className="min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 h-[300px] overflow-hidden rounded-lg border sm:mt-12 sm:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.964663061!2d-77.03196492394182!3d-12.046656888118893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x15f8bcc3b8f073f8!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses!2spe!4v1686697349121!5m2!1ses!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Ferremarket"
        ></iframe>
      </div>
    </div>
  )
}

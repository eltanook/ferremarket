import type { Product } from "@/lib/types"

export const products: Product[] = [
  {
    id: "hormigonera-3-4-daff",
    name: "Hormigonera 3/4 Motor Daff",
    description:
      "Hormigonera reforzada línea pesada con motor 3/4 HP. Capacidad de 130 litros con rodado macizo y voltaje 220v. Marca Daff con 1 año de garantía.",
    price: 290000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Hormigonera+Daff",
      "/placeholder.svg?height=400&width=400&text=Hormigonera+3/4",
    ],
    category: "herramientas-electricas",
    stock: 5,
    featured: true,
    specifications: {
      "Tipo": "Hormigonera Reforzada",
      "Potencia Nominal": "3/4 HP",
      "Capacidad": "130 Litros",
      "Línea": "Pesada",
      "Voltaje": "220v",
      "Rodado": "Macizo",
      "Motor": "3/4",
      "Marca": "Daff",
      "Garantía": "1 año",
    },
  },
  {
    id: "sierra-circular-1200w",
    name: "Sierra Circular 1200W con Guía Láser",
    description:
      "Sierra circular potente de 1200W con guía láser para cortes precisos. Incluye disco de 185mm y capacidad de corte de hasta 65mm.",
    price: 259.9,
    originalPrice: 299.9,
    discount: 13,
    images: [
      "/placeholder.svg?height=400&width=400&text=Sierra+Circular+1200W",
      "/placeholder.svg?height=400&width=400&text=Sierra+Vista+2",
      "/placeholder.svg?height=400&width=400&text=Sierra+Vista+3",
    ],
    category: "herramientas-electricas",
    stock: 8,
    featured: true,
    specifications: {
      Potencia: "1200W",
      "Diámetro de disco": "185mm",
      "Capacidad de corte 90°": "65mm",
      "Capacidad de corte 45°": "43mm",
      Velocidad: "5000 RPM",
    },
  },
  {
    id: "amoladora-angular-900w",
    name: "Amoladora Angular 900W 4.5 pulgadas",
    description:
      "Amoladora angular profesional de 900W con disco de 4.5 pulgadas. Empuñadura antivibración y protector de disco ajustable.",
    price: 189.9,
    originalPrice: 219.9,
    discount: 14,
    images: [
      "/placeholder.svg?height=400&width=400&text=Amoladora+Angular+900W",
      "/placeholder.svg?height=400&width=400&text=Amoladora+Vista+2",
    ],
    category: "herramientas-electricas",
    stock: 12,
    featured: false,
    specifications: {
      Potencia: "900W",
      "Diámetro del disco": "115mm (4.5\")",
      Velocidad: "11000 RPM",
      Peso: "1.8 kg",
    },
  },
  {
    id: "media-sombra-4-premium-80",
    name: "Media Sombra 4/ Premium %80",
    description:
      "Media sombra antigranizo con protector de rayos UV. Super tejidas para máxima durabilidad y protección.",
    price: 3900,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Media+Sombra+Premium+80",
      "/placeholder.svg?height=400&width=400&text=Antigranizo+UV",
    ],
    category: "medias-sombras-lonas",
    stock: 20,
    featured: true,
    specifications: {
      "Tipo": "Media Sombra",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Calidad": "Super tejidas",
      "Porcentaje": "80%",
    },
  },

  {
    id: "media-sombra-premium-gris-90",
    name: "Media Sombra Premium Gris 90%",
    description:
      "Media sombra gris plata 90% súper resistente. No filtra rayos y son impermeables. Medida 4 x 1.",
    price: 10000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Media+Sombra+Gris+90",
      "/placeholder.svg?height=400&width=400&text=Premium+Impermeable",
    ],
    category: "medias-sombras-lonas",
    stock: 12,
    featured: true,
    specifications: {
      "Tipo": "Media sombra Gris Plata",
      "Porcentaje": "90%",
      "Medida": "4 x 1",
      "Resistencia": "Súper resistentes",
      "Protección UV": "No filtra Rayos",
      "Impermeabilidad": "Son impermeables",
    },
  },
  {
    id: "malla-soldada-revestida-pvc",
    name: "Malla Soldada Revestida en PVC",
    description:
      "Malla soldada revestida en epoxi con medidas precisas para aplicaciones de construcción y cerramientos.",
    price: 9000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Malla+Soldada+PVC",
      "/placeholder.svg?height=400&width=400&text=Malla+Epoxi",
    ],
    category: "tejidos-pvc-metal",
    stock: 15,
    featured: true,
    specifications: {
      "Tipo": "Malla Soldada",
      "Revestimiento": "Epoxi",
      "Medidas": "25x25 x 1,4 mm",
    },
  },
  {
    id: "malla-150-electro-soldada",
    name: "Malla 1,50 Electro Soldada",
    description:
      "Malla galvanizada electro soldada de 1,50 metros. Precio por metro lineal.",
    price: 13000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Malla+Electro+Soldada",
      "/placeholder.svg?height=400&width=400&text=Malla+Galvanizada+1.50",
    ],
    category: "tejidos-pvc-metal",
    stock: 25,
    featured: false,
    specifications: {
      "Tipo": "Mallas Galvanizadas",
      "Medida": "1,50",
      "Venta": "Precio por metro",
      "Código": "2,1",
    },
  },
  {
    id: "tejido-pollero",
    name: "Tejido Pollero",
    description:
      "Tejido hexagonal resistente a la oxidación. Disponible en varias medidas para diferentes aplicaciones.",
    price: 3800,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Tejido+Pollero",
      "/placeholder.svg?height=400&width=400&text=Tejido+Hexagonal",
    ],
    category: "tejidos-pvc-metal",
    stock: 30,
    featured: false,
    specifications: {
      "Tipo": "Tejido hexagonal",
      "Medida": "1 x 3/4",
      "Disponibilidad": "Varias medidas",
      "Características": "No se oxida",
    },
  },
  {
    id: "tejido-mosquitero-120",
    name: "Tejido Mosquitero 1,20",
    description:
      "Tejido mosquitero reforzado de material PVC con medida de 1,20 metros.",
    price: 3800,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Tejido+Mosquitero",
      "/placeholder.svg?height=400&width=400&text=Mosquitero+PVC",
    ],
    category: "tejidos-pvc-metal",
    stock: 20,
    featured: false,
    specifications: {
      "Tipo": "Tejido Mosquitero",
      "Medida": "1,20",
      "Material": "PVC",
      "Características": "Reforzado",
    },
  },
  {
    id: "cerramiento-malla-plastica",
    name: "Cerramiento Malla Plástica",
    description:
      "Malla plástica rombo de 15m. Resistente, liviana y fácil de limpiar, no se oxida.",
    price: 4200,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Malla+Plástica",
      "/placeholder.svg?height=400&width=400&text=Cerramiento+Rombo",
    ],
    category: "tejidos-pvc-metal",
    stock: 18,
    featured: false,
    specifications: {
      "Tipo": "Malla Plástica",
      "Patrón": "Rombo 15m",
      "Ventajas": "No se oxidan, son fuertes, son livianas",
      "Mantenimiento": "Fácil de limpiar",
    },
  },
  {
    id: "lona-anillada-190",
    name: "Lona Anillada 1,90",
    description:
      "Lona anillada reforzada e impermeable de 1,90 metros con anillos en ambos extremos. Precio por metro.",
    price: 4500,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Lona+Anillada",
      "/placeholder.svg?height=400&width=400&text=Lona+Impermeable",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas"],
    stock: 22,
    featured: true,
    specifications: {
      "Tipo": "Lona anillada",
      "Medida": "1,90",
      "Características": "Anillo en ambos extremos, reforzadas, impermeable",
      "Venta": "Precio por metro",
    },
  },
  {
    id: "naylon-3m-200-micrones",
    name: "Naylon 3 metros x 200 micrones",
    description:
      "Naylon ultra resistente de 200 micrones que no filtra agua. Medida 3 x 50 metros.",
    price: 48000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Naylon+200+Micrones",
      "/placeholder.svg?height=400&width=400&text=Naylon+Ultra+Resistente",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas"],
    stock: 10,
    featured: true,
    specifications: {
      "Material": "Naylon",
      "Resistencia": "Ultra Resistente",
      "Espesor": "200 Micrones",
      "Impermeabilidad": "No filtra agua",
      "Medida": "3 x 50 metros",
    },
  },
  {
    id: "cubre-cerco-150",
    name: "Cubre Cerco 1,50",
    description:
      "Cubre cerco de 1,50 metros con gramaje 90 para protección y privacidad.",
    price: 1600,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Cubre+Cerco",
      "/placeholder.svg?height=400&width=400&text=Cubre+Cerco+1.50",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas"],
    stock: 35,
    featured: false,
    specifications: {
      "Tipo": "Cubre Cerco",
      "Medida": "1,50",
      "Gramaje": "90",
    },
  },
  {
    id: "resistencia-termotanque",
    name: "Resistencia Termotanque",
    description:
      "Resistencia para termotanque apta para varios modelos. Viene completa con 1 año de garantía.",
    price: 24000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Resistencia+Termotanque",
      "/placeholder.svg?height=400&width=400&text=Resistencia+Completa",
    ],
    category: "electricidad",
    stock: 12,
    featured: true,
    specifications: {
      "Tipo": "Resistencia Termotanque",
      "Compatibilidad": "Apta para varios Modelos",
      "Incluye": "Vienen Completas",
      "Garantía": "1 año de garantía",
    },
  },
  {
    id: "reflector-led-50w",
    name: "Reflector LED 50 w",
    description:
      "Reflector LED de 50w con luz cálida. Súper resistentes con máxima iluminación.",
    price: 13000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Reflector+LED+50W",
      "/placeholder.svg?height=400&width=400&text=LED+Luz+Calida",
    ],
    category: "electricidad",
    stock: 15,
    featured: true,
    specifications: {
      "Tipo": "Reflector LED",
      "Potencia": "50w",
      "Luz": "Luz Cálida",
      "Resistencia": "Súper resistentes",
      "Iluminación": "Máxima iluminación",
    },
  },
  {
    id: "lampara-antimosquitos",
    name: "Lámpara antimosquitos",
    description:
      "Bombillo LED antimosquitos color azul. Voltaje 110/210 para uso doméstico.",
    price: 7000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Lámpara+Antimosquitos",
      "/placeholder.svg?height=400&width=400&text=LED+Azul",
    ],
    category: "electricidad",
    stock: 20,
    featured: false,
    specifications: {
      "Tipo": "Bombillo",
      "Tecnología": "LED",
      "Color": "Azul",
      "Voltaje": "110/210",
      "Función": "Antimosquitos",
    },
  },
  {
    id: "calefon-pvc-20-litros",
    name: "Calefón PVC 20 litros",
    description:
      "Calefón de PVC con capacidad de 20 litros. Incluye todos sus accesorios para instalación.",
    price: 11000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Calefón+PVC+20L",
      "/placeholder.svg?height=400&width=400&text=Calefón+Accesorios",
    ],
    category: "electricidad",
    stock: 6,
    featured: false,
    specifications: {
      "Tipo": "Calefón",
      "Material": "PVC",
      "Capacidad": "20 litros",
      "Incluye": "Con todos sus accesorios",
    },
  },
  {
    id: "kit-medidor-homologados",
    name: "Kit Medidor Homologados",
    description:
      "Kit medidor completo aprobado por Edenor/Edesur. Listo para instalar y aprobado. Incluye todos los componentes necesarios para instalación eléctrica.",
    price: 130000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Kit+Medidor+Completo",
      "/placeholder.svg?height=400&width=400&text=Homologado+Edenor",
    ],
    category: "electricidad",
    stock: 3,
    featured: true,
    specifications: {
      "Tipo": "Kit Medidor Completo",
      "Aprobación": "Aprobado por Edenor/Edesur",
      "Jabalina": "3/8 x 1,5 m",
      "Caja inspección": "Para jabalina",
      "Caja medidor": "Monofásico",
      "Caja bocas": "4 bocas",
      "Grampa": "Para el pilar Pk31",
      "Pipeta": "Partida 1,5",
      "Disyuntor": "Jelux/Sucia 40 amp",
      "Térmica": "25 amp",
      "Caño pilar": "1 1/2 Revestido",
      "Caño corrugado": "1x1m blanco + 2x1m blanco",
      "Estado": "Listo para instalar",
      "Envíos": "Hacemos envíos",
      "Nota": "Precios pueden modificarse sin previo aviso",
    },
  },
  {
    id: "juegos-cables-25",
    name: "Juegos de cables 2,5",
    description:
      "Promoción por 3 juegos de cables medida 2,5. Color a elección, normalizados y aprobados.",
    price: 80000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Cables+2.5+Promo",
      "/placeholder.svg?height=400&width=400&text=Juego+x3+Cables",
    ],
    category: "electricidad",
    stock: 10,
    featured: true,
    specifications: {
      "Promoción": "Promo x 3",
      "Color": "A elección",
      "Medida": "2,5",
      "Estado": "Normalizando",
      "Aprobación": "Aprobado",
    },
  },
  {
    id: "juego-inodoro-mochila-deca-marajo",
    name: "Juego inodoro mochila Deca Marajo",
    description:
      "Juego completo de mochila + inodoro color blanco. Incluye tapa y tornillos para instalación.",
    price: 150000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Inodoro+Deca+Marajo",
      "/placeholder.svg?height=400&width=400&text=Juego+Completo+Blanco",
    ],
    category: "sanitarios",
    stock: 3,
    featured: true,
    specifications: {
      "Tipo": "Juego Mochila + Inodoro",
      "Color": "Blanco",
      "Incluye": "Con tapa y tornillos",
      "Marca": "Deca Marajo",
    },
  },
  {
    id: "mochila-pvc-14-litros",
    name: "Mochila PVC 14 litros",
    description:
      "Mochila reforzada con capacidad de 14 litros. Incluye todos sus accesorios para instalación.",
    price: 35000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Mochila+PVC+14L",
      "/placeholder.svg?height=400&width=400&text=Mochila+Reforzada",
    ],
    category: "sanitarios",
    stock: 8,
    featured: false,
    specifications: {
      "Tipo": "Mochila Reforzada",
      "Capacidad": "14 litros",
      "Material": "PVC",
      "Incluye": "Con todos sus accesorios",
    },
  },
  {
    id: "termotanque-electrico-65-litros",
    name: "Termotanque eléctrico 65 litros",
    description:
      "Señorial Zafiro Eléctrico 65 litros bajo consumo con ahorro de energía y mayor seguridad. Corte de energía por sobrecalentamiento, válvula de seguridad por sobrepresión. Producto certificado por LENOR. Disfruta de agua caliente en todo momento con capacidad de 65 litros, perfecto para hogares de tamaño medio.",
    price: 235000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Termotanque+Señorial+65L",
      "/placeholder.svg?height=400&width=400&text=Zafiro+Eléctrico+Blanco",
    ],
    category: "invierno",
    stock: 3,
    featured: true,
    specifications: {
      "Marca": "Señorial",
      "Modelo": "Zafiro Eléctrico TESZ-65",
      "Fuente de alimentación": "Eléctrica",
      "Capacidad": "65 litros",
      "Color": "Blanco",
      "Consumo": "Bajo consumo",
      "Seguridad": "Corte por sobrecalentamiento",
      "Válvula": "Seguridad por sobrepresión",
      "Certificación": "LENOR",
      "Características": "Ahorro de energía, mayor seguridad",
    },
  },
  {
    id: "calefactor-electrico-termostato",
    name: "Calefactor Eléctrico con termostato",
    description:
      "Calefactor eléctrico 2000w con 3 niveles de potencia y termostato. Voltaje 220v, área de calefacción 25 metros, apagado automático. Medidas 42cm x 16cm de ancho.",
    price: 50000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Calefactor+Termostato",
      "/placeholder.svg?height=400&width=400&text=Calefactor+2000W",
    ],
    category: "invierno",
    stock: 8,
    featured: true,
    specifications: {
      "Tipo": "Calefactor eléctrico",
      "Voltaje": "220v",
      "Potencia": "2000w",
      "Niveles": "3 niveles de potencia",
      "Control": "Con termostato",
      "Área calefacción": "25 metros",
      "Seguridad": "Apagado automático",
      "Medidas": "42cm x 16cm de ancho",
    },
  },
  {
    id: "secarropa-calor",
    name: "Secarropa a calor",
    description:
      "Tender Axel 3000 con voltaje 220v y capacidad de 4,5 kg. Tambor de acero inoxidable con 3 programas: aire frío, tibio y caliente. Control de temperatura, secado rápido y potencia 950w.",
    price: 120000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Secarropa+Axel+3000",
      "/placeholder.svg?height=400&width=400&text=Tambor+Inoxidable",
    ],
    category: "invierno",
    stock: 4,
    featured: true,
    specifications: {
      "Modelo": "Tender Axel 3000",
      "Voltaje": "220v",
      "Capacidad": "4,5 kg",
      "Tambor": "Acero inoxidable",
      "Programas": "3 Programas",
      "Temperaturas": "Aire frío / Tibio / Caliente",
      "Control": "Control de temperatura",
      "Función": "Secado rápido",
      "Potencia": "950w",
    },
  },
  {
    id: "caloventor-tipo-split",
    name: "Caloventor tipo split",
    description:
      "Caloventor Whitenblack tipo split color blanco 2000W. Voltaje 220v, bajo consumo con protector por calentamiento, termostato y control remoto. Envíos en el día.",
    price: 65000,
    originalPrice: null,
    discount: 0,
    images: [
      "/placeholder.svg?height=400&width=400&text=Caloventor+Split+Blanco",
      "/placeholder.svg?height=400&width=400&text=Whitenblack+2000W",
    ],
    category: "invierno",
    stock: 6,
    featured: false,
    specifications: {
      "Marca": "Whitenblack",
      "Tipo": "Split",
      "Color": "Blanco",
      "Potencia": "2000W",
      "Voltaje": "220v",
      "Consumo": "Bajo consumo",
      "Protección": "Protector por calentamiento",
      "Control": "Termostato",
      "Incluye": "Control Remoto",
      "Servicio": "Envíos en el día",
    },
  },
]

export const categories = [
  {
    id: "tejidos-pvc-metal",
    name: "Tejidos pvc/metal",
    description: "Tejidos de PVC y metal para protección y construcción",
    image: "/placeholder.svg?height=300&width=300&text=Tejidos+PVC+Metal",
  },
  {
    id: "herramientas-electricas",
    name: "Herramientas Eléctricas",
    description: "Herramientas eléctricas profesionales para todo tipo de trabajo",
    image: "/placeholder.svg?height=300&width=300&text=Herramientas+Eléctricas",
  },
  {
    id: "medias-sombras-lonas",
    name: "Medias Sombras y Lonas",
    description: "Medias sombras y lonas para protección y cobertura",
    image: "/placeholder.svg?height=300&width=300&text=Medias+Sombras+Lonas",
  },
  {
    id: "sanitarios",
    name: "Sanitarios",
    description: "Artículos sanitarios y de plomería para baños y cocinas",
    image: "/placeholder.svg?height=300&width=300&text=Sanitarios",
  },
  {
    id: "electricidad",
    name: "Electricidad",
    description: "Todo para instalaciones eléctricas seguras y eficientes",
    image: "/placeholder.svg?height=300&width=300&text=Electricidad",
  },
  {
    id: "invierno",
    name: "Invierno",
    description: "Productos para la temporada de invierno",
    image: "/placeholder.svg?height=300&width=300&text=Invierno",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => 
    Array.isArray(product.category) 
      ? product.category.includes(categoryId)
      : product.category === categoryId
  )
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
  )
}

export function getRandomProducts(excludeId?: string, count = 4): Product[] {
  const availableProducts = excludeId ? products.filter((p) => p.id !== excludeId) : products
  const shuffled = [...availableProducts].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

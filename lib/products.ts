import type { Product } from "@/lib/types"

export const products: Product[] = [
  {
    id: "hormigonera-3-4-daff",
    name: "Hormigonera 3/4 Motor Daff",
    description:
      "Hormigonera reforzada línea pesada con motor 3/4 HP. Capacidad de 130 litros con rodado macizo y voltaje 220v. Marca Daff con 1 año de garantía.",
    price: 320000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/herramientas_electricas/1.PNG",
      "/products/herramientas_electricas/2.PNG",
      "/products/herramientas_electricas/3.PNG",
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
    id: "disco-flap-x10-lija-amoladora-115mm",
    name: "Disco flap x 10 lija amoladora 115mm",
    description:
      "Disco flap x 10 unidades. Grano 40/60/80/100/120. Tipo de disco desbaste para amoladora 115mm.",
    price: 28000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/herramientas_electricas/6.png",
      "/products/herramientas_electricas/7.png",
      "/products/herramientas_electricas/9.png",
    ],
    category: "herramientas-electricas",
    stock: 25,
    featured: true,
    specifications: {
      "Tipo": "Disco flap",
      "Cantidad": "10 unidades",
      "Granos": "40/60/80/100/120",
      "Diámetro": "115mm",
      "Uso": "Tipo de disco desbaste",
      "Compatible": "Amoladora angular",
    },
  },
  {
    id: "amoladora-angular-900w",
    name: "Amoladora Angular Hamilton 900W 4.5 pulgadas",
    description:
      "Amoladora angular Hamilton profesional de 900W con disco de 4.5 pulgadas. Empuñadura antivibración y protector de disco ajustable.",
    price: 60000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/herramientas_electricas/4.png",
      "/products/herramientas_electricas/5.png",
      "/products/herramientas_electricas/10.png",
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
    id: "media-sombra-antigranizo",
    name: "Media Sombra Antigranizo",
    description:
      "Media sombra antigranizo con protector de rayos UV. Disponible en diferentes porcentajes, medidas y colores. Precio por metro.",
    price: 1700, // Precio base de la variante más económica
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/1.PNG",
      "/products/medias_sombras_lonas/2.PNG",
      "/products/medias_sombras_lonas/3.PNG",
      "/products/medias_sombras_lonas/4.PNG",
      "/products/medias_sombras_lonas/5.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 50,
    featured: true,
    isRollProduct: true,
    hasVariants: true,
    rollLength: 5000, // 50 metros en cm
    rollPrice: 85000, // Precio base por rollo
    specifications: {
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
    },
    variants: [
      {
        id: "media-sombra-220-80-verde-negro",
        name: "2,20m - 80% Verde/Negro",
        price: 2100, // Precio por metro consistente
        stock: 50,
        rollPrice: 105000, // 50m × $2100 = $105.000
        specifications: {
          "Medida": "2,20 metros",
          "Porcentaje": "80%",
          "Colores": "Verde y Negro",
      "Rollo completo": "50 metros - $105.000",
    },
  },
  {
    id: "media-sombra-220-80-beige-gris",
        name: "2,20m - 80% Beige/Gris",
        price: 1960, // Precio por metro consistente
    stock: 45,
        rollPrice: 98000, // 50m × $1960 = $98.000
    specifications: {
      "Medida": "2,20 metros",
      "Porcentaje": "80%",
      "Colores": "Beige y Gris",
      "Rollo completo": "50 metros - $98.000",
    },
  },
  {
    id: "media-sombra-420-80-verde-negro",
        name: "4,20m - 80% Verde/Negro",
        price: 3680, // Precio por metro para rollo de $184.000
    stock: 40,
        rollPrice: 184000, // Precio por rollo 4,20m
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "80%",
      "Colores": "Verde y Negro",
          "Rollo completo": "50 metros - $184.000",
    },
  },
  {
    id: "media-sombra-420-80-beige-gris",
        name: "4,20m - 80% Beige/Gris",
        price: 1960, // MISMO precio por metro que 2,20m
    stock: 35,
        rollPrice: 98000, // Mismo precio por rollo
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "80%",
      "Colores": "Beige y Gris",
          "Rollo completo": "50 metros - $98.000",
    },
  },
  {
    id: "media-sombra-220-90-verde-negro",
        name: "2,20m - 90% Verde/Negro",
        price: 3000, // Precio por metro consistente
        stock: 30,
        rollPrice: 150000, // 50m × $3000 = $150.000
    specifications: {
      "Medida": "2,20 metros",
      "Porcentaje": "90%",
      "Colores": "Verde y Negro",
          "Rollo completo": "50 metros - $150.000",
    },
  },
  {
    id: "media-sombra-220-90-beige-gris",
        name: "2,20m - 90% Beige/Gris",
        price: 3400, // Precio por metro consistente
        stock: 25,
        rollPrice: 170000, // 50m × $3400 = $170.000
    specifications: {
      "Medida": "2,20 metros",
      "Porcentaje": "90%",
      "Colores": "Beige y Gris",
      "Rollo completo": "50 metros - $170.000",
    },
  },
  {
    id: "media-sombra-420-90-verde-negro",
        name: "4,20m - 90% Verde/Negro",
        price: 3000, // MISMO precio por metro que 2,20m
        stock: 20,
        rollPrice: 150000, // Mismo precio por rollo
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "90%",
      "Colores": "Verde y Negro",
          "Rollo completo": "50 metros - $150.000",
    },
  },
  {
    id: "media-sombra-420-90-beige-gris",
        name: "4,20m - 90% Beige/Gris",
        price: 3400, // MISMO precio por metro que 2,20m
        stock: 15,
        rollPrice: 170000, // Mismo precio por rollo
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "90%",
      "Colores": "Beige y Gris",
          "Rollo completo": "50 metros - $170.000",
    },
      },
    ],
  },
  {
    id: "malla-soldada-revestida-pvc",
    name: "Malla Soldada Revestida en PVC",
    description:
      "Malla soldada revestida en epoxi con medidas precisas para aplicaciones de construcción y cerramientos.",
    price: 5000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/1.PNG",
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
      "/products/tejidos/2.PNG",
    ],
    category: "tejidos-pvc-metal",
    stock: 25,
    featured: false,
    isRollProduct: true,
    rollLength: 150, // 1.50 metros = 150 cm
    specifications: {
      "Tipo": "Mallas Galvanizadas",
      "Medida": "1,50",
      "Venta": "Precio por metro",
      "Código": "2,1",
    },
  },

  {
    id: "tejido-mosquitero-120",
    name: "Tejido Mosquitero 1,20",
    description:
      "Tejido mosquitero reforzado de material PVC con medida de 1,20 metros.",
    price: 4000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/6.PNG",
      "/products/tejidos/7.PNG",
    ],
    category: ["tejidos-pvc-metal", "verano"],
    stock: 20,
    featured: false,
    isRollProduct: true,
    rollLength: 120, // 1.20 metros = 120 cm
    rollPrice: 83000, // Precio por rollo
    specifications: {
      "Tipo": "Tejido Mosquitero",
      "Medida": "1,20",
      "Material": "PVC",
      "Características": "Reforzado",
      "Rollo completo": "$83.000",
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
      "/products/tejidos/8.PNG",
      "/products/tejidos/9.PNG",
      "/products/tejidos/10.PNG",
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
    id: "naylon-2m-200-micrones",
    name: "Naylon 2 metros x 200 micrones",
    description:
      "Naylon ultra resistente de 200 micrones que no filtra agua. Medida 2 x 50 metros.",
    price: 55000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/15.PNG",
      "/products/tejidos/16.PNG",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas", "verano"],
    stock: 12,
    featured: false,
    isRollProduct: true,
    rollLength: 200, // 2 metros = 200 cm
    specifications: {
      "Material": "Naylon",
      "Resistencia": "Ultra Resistente",
      "Espesor": "200 Micrones",
      "Impermeabilidad": "No filtra agua",
      "Medida": "2 x 50 metros",
    },
  },
  {
    id: "naylon-3m-200-micrones",
    name: "Naylon 3 metros x 200 micrones",
    description:
      "Naylon ultra resistente de 200 micrones que no filtra agua. Medida 3 x 50 metros.",
    price: 63000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/15.PNG",
      "/products/tejidos/16.PNG",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas", "verano"],
    stock: 10,
    featured: true,
    isRollProduct: true,
    rollLength: 300, // 3 metros = 300 cm
    specifications: {
      "Material": "Naylon",
      "Resistencia": "Ultra Resistente",
      "Espesor": "200 Micrones",
      "Impermeabilidad": "No filtra agua",
      "Medida": "3 x 50 metros",
    },
  },
  {
    id: "cubre-cerco-liviano",
    name: "Cubre Cerco Liviano 22mm",
    description:
      "Cubre cerco liviano 22mm resistente a rayos ultravioleta y al viento. Disponible en verde oscuro y verde claro. Apto para obras y jardines con 5 años de durabilidad. Precio por metro.",
    price: 2000, // Precio base de la variante más económica
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/17.PNG",
      "/products/tejidos/18.PNG",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas", "verano"],
    stock: 50,
    featured: true,
    isRollProduct: true,
    hasVariants: true,
    rollLength: 150, // Medida base
    rollPrice: 170000, // Precio base por rollo
    wholesalePrice: 155000, // Precio base por mayor
    specifications: {
      "Tipo": "Cubre Cerco Liviano",
      "Grosor": "22mm",
      "Resistencia UV": "Sí",
      "Resistencia al viento": "Sí", 
      "Colores": "Verde oscuro / Verde claro",
      "Uso": "Obras y jardines",
      "Durabilidad": "5 años",
      "Venta": "Por metro",
    },
    variants: [
      {
        id: "cubre-cerco-150",
        name: "1,50m",
        price: 2000, // Precio por metro consistente
        stock: 50,
                rollPrice: 170000,
        specifications: {
          "Medida": "1,50 metros",
      "Rollo completo": "$170.000",
      "Por mayor": "5 unidades - $155.000 c/u",
        },
  },
  {
    id: "cubre-cerco-180",
        name: "1,80m",
        price: 2000, // MISMO precio por metro
    stock: 40,
                rollPrice: 170000, // Mismo precio por rollo
        specifications: {
          "Medida": "1,80 metros",
          "Rollo completo": "$170.000",
          "Por mayor": "5 unidades - $155.000 c/u",
        },
      },
    ],
  },
  {
    id: "resistencia-termotanque",
    name: "Resistencia Termotanque",
    description:
      "Resistencia para termotanque apta para varios modelos. Viene completa con 1 año de garantía.",
    price: 35000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/electricidad/1.PNG",
      "/products/electricidad/3.PNG",
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
      "/products/electricidad/4.PNG",
      "/products/electricidad/5.PNG",
      "/products/electricidad/6.PNG",
      "/products/electricidad/7.PNG",
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
      "/products/electricidad/8.PNG",
      "/products/electricidad/9.PNG",
    ],
    category: ["electricidad", "verano"],
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
      "/products/electricidad/11.PNG",
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
      "/products/electricidad/12.PNG",
      "/products/electricidad/13.PNG",
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
    id: "mochila-pvc-14-litros",
    name: "Mochila PVC 14 litros",
    description:
      "Mochila reforzada con capacidad de 14 litros. Incluye todos sus accesorios para instalación.",
    price: 35000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/sanitarios/1.PNG",
      "/products/sanitarios/2.PNG",
      "/products/sanitarios/3.PNG",
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
    price: 290000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/invierno/1.PNG",
      "/products/invierno/2.PNG",
      "/products/invierno/3.PNG",
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
      "/products/invierno/4.PNG",
      "/products/invierno/5.PNG",
      "/products/invierno/6.PNG",
      "/products/invierno/7.PNG",
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
    price: 140000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/invierno/9.PNG",
      "/products/invierno/10.PNG",
      "/products/invierno/11.PNG",
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
      "/products/invierno/8.PNG",
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
  // NUEVOS PRODUCTOS AGREGADOS
  {
    id: "juego-inodoro-mochila-bidet-pringles",
    name: "Juego Inodoro + Mochila + Bidet Pringles",
    description:
      "Juego completo de mochila + inodoro + bidet marca Pringles color blanco. Incluye tapa y tornillos para instalación.",
    price: 175000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/sanitarios/4.PNG",
      "/products/sanitarios/5.PNG",
      "/products/sanitarios/6.PNG",
    ],
    category: "sanitarios",
    stock: 2,
    featured: true,
    specifications: {
      "Tipo": "Juego Completo",
      "Incluye": "Mochila + Inodoro + Bidet",
      "Marca": "Pringles",
      "Color": "Blanco",
      "Accesorios": "Con tapa y tornillos",
    },
  },
  {
    id: "escalera-reforzada-madera",
    name: "Escalera Reforzada Madera Pintor",
    description:
      "Escalera pintor reforzada de madera con 8 escalones. Tenemos todas las medidas disponibles.",
    price: 45000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/1.PNG",
    ],
    category: "herramientas-electricas",
    stock: 10,
    featured: false,
    specifications: {
      "Tipo": "Escalera Pintor",
      "Material": "Madera Reforzada",
      "Escalones": "8",
      "Disponibilidad": "Todas las medidas",
    },
  },
  {
    id: "membrana-40kg",
    name: "Membrana 40 kg",
    description:
      "Membrana cubritiva súper resistente de 40 kg. Cobertura de 10 m2.",
    price: 48000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/2.PNG",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas"],
    stock: 15,
    featured: false,
    specifications: {
      "Tipo": "Membrana",
      "Peso": "40 kg",
      "Cobertura": "10 m2",
      "Características": "Súper resistente",
      "Función": "Cubritiva",
    },
  },
  {
    id: "gas-butano",
    name: "Gas Butano Cartuchos",
    description:
      "Cartuchos de gas butano para anafes de 227 gramos.",
    price: 6000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/3.PNG",
    ],
    category: "electricidad",
    stock: 50,
    featured: false,
    specifications: {
      "Tipo": "Cartuchos de Gas",
      "Combustible": "Butano",
      "Peso": "227 gramos",
      "Uso": "Para anafes",
    },
  },
  {
    id: "carretilla-obra-total",
    name: "Carretilla de Obra Total",
    description:
      "Carretilla de obra marca Total color turquesa tipo construcción. Capacidad máxima 65 litros y 130 kg. Material del cuerpo chapa reforzada con rueda neumática y centro de chapa.",
    price: 120000,
    originalPrice: 130000,
    discount: 8,
    images: [
      "/products/otros/4.PNG",
      "/products/otros/5.PNG",
      "/products/otros/6.PNG",
    ],
    category: "herramientas-electricas",
    stock: 8,
    featured: true,
    specifications: {
      "Marca": "Total",
      "Tipo": "Construcción",
      "Color": "Turquesa",
      "Capacidad": "65 litros",
      "Peso máximo": "130 kg",
      "Material": "Chapa reforzada",
      "Rueda": "Neumática",
      "Centro": "Chapa",
    },
  },
  {
    id: "juego-llaves-francesa-total",
    name: "Juego de Llaves Francesa Total",
    description:
      "Juego de llaves francesas marca Total 6'' 8'' 10'' 12''. Apertura máxima 34 mm. Material acero cromo vanadio.",
    price: 60000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/7.PNG",
      "/products/otros/8.PNG",
      "/products/otros/9.PNG",
    ],
    category: "herramientas-electricas",
    stock: 12,
    featured: true,
    specifications: {
      "Marca": "Total",
      "Tipo": "Llaves Francesas",
      "Medidas": "6'' 8'' 10'' 12''",
      "Apertura máxima": "34 mm",
      "Material": "Acero Cromo Vanadio",
    },
  },
  {
    id: "set-llaves-tubos-total",
    name: "Set Llaves Tubos Total Industrial",
    description:
      "Juego de llaves industrial marca Total con acabado cómodo. Medidas del cabezal: 10 a 15-17-19-21-24. Apertura máxima 125 mm con mango antideslizante.",
    price: 45000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/10.PNG",
      "/products/otros/11.PNG",
      "/products/otros/12.PNG",
      "/products/otros/13.PNG",
    ],
    category: "herramientas-electricas",
    stock: 15,
    featured: false,
    specifications: {
      "Marca": "Total",
      "Tipo": "Llaves Industrial",
      "Cabezal": "10 a 15-17-19-21-24",
      "Apertura máxima": "125 mm",
      "Mango": "Antideslizante",
      "Acabado": "Cómodo",
    },
  },
  {
    id: "tanques-tam",
    name: "Tanques TAM",
    description:
      "Tanques TAM disponibles en todas las medidas: 300 litros, 500 litros y 1000 litros.",
    price: 85000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/14.PNG",
      "/products/otros/15.PNG",
      "/products/otros/16.PNG",
    ],
    category: "sanitarios",
    stock: 20,
    featured: true,
    specifications: {
      "Marca": "TAM",
      "Tipo": "Tanques de agua",
      "Medidas disponibles": "300L, 500L, 1000L",
      "Disponibilidad": "Todas las medidas",
    },
  },
  {
    id: "pintura-asfaltica-18l",
    name: "Pintura Asfáltica x 18 litros",
    description:
      "Pintura asfáltica de secado rápido, ultra adherente y fácil de colocar. Presentación de 18 litros.",
    price: 47000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/17.PNG",
    ],
    category: ["herramientas-electricas", "tejidos-pvc-metal"],
    stock: 25,
    featured: false,
    specifications: {
      "Tipo": "Pintura Asfáltica",
      "Contenido": "18 litros",
      "Secado": "Rápido",
      "Adherencia": "Ultra adherente",
      "Aplicación": "Fácil de colocar",
    },
  },
  {
    id: "manguera-trenzada-12",
    name: "Manguera Trenzada 1/2",
    description:
      "Manguera trenzada de material virgen reforzada. No se dobla ni se seca.",
    price: 20000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/18.PNG",
      "/products/otros/19.PNG",
    ],
    category: "verano",
    stock: 30,
    featured: false,
    specifications: {
      "Tipo": "Manguera Trenzada",
      "Medida": "1/2",
      "Material": "Virgen Reforzada",
      "Características": "No se dobla, no se seca",
    },
  },
  {
    id: "manguera-polipropileno-34",
    name: "Manguera Polipropileno 3/4",
    description:
      "Manguera negra 3/4 x 100 metros. Material polipropileno para exterior.",
    price: 30000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/20.PNG",
      "/products/otros/21.PNG",
      "/products/otros/22.PNG",
    ],
    category: "verano",
    stock: 20,
    featured: false,
    specifications: {
      "Tipo": "Manguera Negra",
      "Medida": "3/4",
      "Longitud": "100 metros",
      "Material": "Polipropileno",
      "Uso": "Exterior",
    },
  },
  {
    id: "manguera-reforzada-virgen-12",
    name: "Manguera Reforzada Virgen 1/2",
    description:
      "Manguera 1/2 de 25 metros. No se dobla, material virgen.",
    price: 10000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/23.PNG",
      "/products/otros/24.PNG",
    ],
    category: "verano",
    stock: 35,
    featured: false,
    specifications: {
      "Tipo": "Manguera Reforzada",
      "Medida": "1/2",
      "Longitud": "25 metros",
      "Material": "Virgen",
      "Características": "No se dobla",
    },
  },

  // NUEVOS PRODUCTOS AGREGADOS - LOTE 2
  {
    id: "pantalla-gas-envasado-1500k",
    name: "Pantalla Gas Envasado 1500k",
    description:
      "Pantalla a gas envasado de 1500k. Súper resistente con larga duración. Ideal para calefacción eficiente.",
    price: 25000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/6.png",
      "/products/otros2/5.png",
      "/products/otros2/2.png",
    ],
    category: "invierno",
    stock: 12,
    featured: false,
    specifications: {
      "Tipo": "Pantalla a gas",
      "Potencia": "1500k",
      "Combustible": "Gas envasado",
      "Características": "Súper resistente, larga duración",
    },
  },
  {
    id: "compresor-nebraska-50l",
    name: "Compresor Nebraska 50 litros",
    description:
      "Compresor de 50 litros, 1500w y 2hp. Incluye kit completo y cuenta con 1 año de garantía.",
    price: 320000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/10.png",
      "/products/otros2/1.png",
      "/products/otros2/7.png",
      "/products/otros2/3.png",
    ],
    category: "herramientas-electricas",
    stock: 4,
    featured: true,
    specifications: {
      "Marca": "Nebraska",
      "Capacidad": "50 litros",
      "Potencia": "1500w",
      "Motor": "2hp",
      "Incluye": "Kit completo",
      "Garantía": "1 año",
    },
  },
  {
    id: "calefones-metal-25l",
    name: "Calefones Metal 25 litros",
    description:
      "Calefones de metal de 25 litros. Súper resistente con accesorios incluidos. Resistencia de bronce/aluminio.",
    price: 28000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/9.png",
      "/products/otros2/4.png",
    ],
    category: "sanitarios",
    stock: 8,
    featured: false,
    specifications: {
      "Material": "Metal",
      "Capacidad": "25 litros",
      "Resistencia": "Bronce/Aluminio",
      "Incluye": "Con accesorios",
      "Características": "Súper resistente",
    },
  },
  {
    id: "escalera-telescopica-2m",
    name: "Escalera Telescópica 2 metros",
    description:
      "Escalera telescópica de 2 metros con soporte para 150kg. Súper reforzada y fácil de guardar. Disponible en varias medidas.",
    price: 55000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/14.png",
      "/products/otros2/8.png",
    ],
    category: "herramientas-electricas",
    stock: 6,
    featured: true,
    specifications: {
      "Tipo": "Escalera Telescópica",
      "Altura": "2 metros",
      "Soporte": "150kg",
      "Características": "Súper reforzada, fácil de guardar",
      "Disponibilidad": "Varias medidas",
    },
  },
  {
    id: "cocinas-gas-butano",
    name: "Cocinas a Gas Butano",
    description:
      "Cocinas a gas butano ideales para camping. Súper rendidoras y portátiles.",
    price: 45000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/13.png",
      "/products/otros2/15.png",
      "/products/otros2/12.png",
    ],
    category: ["electricidad", "verano"],
    stock: 10,
    featured: false,
    specifications: {
      "Tipo": "Cocinas a gas",
      "Combustible": "Gas butano",
      "Uso": "Ideal para camping",
      "Características": "Súper rendidoras, portátiles",
    },
  },
  {
    id: "canilla-monocomando",
    name: "Canilla Monocomando",
    description:
      "Canillas monocomando disponibles en blanco y negro. Importadas y con todos sus accesorios incluidos.",
    price: 28000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/11.png",
      "/products/otros2/17.png",
    ],
    category: "sanitarios",
    stock: 15,
    featured: false,
    specifications: {
      "Tipo": "Canilla Monocomando",
      "Colores": "Blanco / Negro",
      "Origen": "Importadas",
      "Incluye": "Con todos sus accesorios",
    },
  },
  {
    id: "estufa-gas-hongo-lusatoff",
    name: "Estufa a Gas Hongo Lusatoff",
    description:
      "Estufa a gas tipo hongo marca Lusatoff. Ideal para bares con súper calefacción. Incluye 1 año de garantía.",
    price: 200000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/19.png",
      "/products/otros2/18.png",
      "/products/otros2/16.png",
    ],
    category: "invierno",
    stock: 5,
    featured: true,
    specifications: {
      "Tipo": "Estufa a gas hongo",
      "Marca": "Lusatoff",
      "Uso": "Ideal para bares",
      "Calefacción": "Súper calefacción",
      "Garantía": "1 año",
    },
  },
  {
    id: "hormigonera-industrial-duroll",
    name: "Hormigonera Industrial Duroll",
    description:
      "Hormigonera industrial marca Duroll con capacidad de mezcla de 120L. Motor 3/4, peso 46kg, color naranja. Voltaje 220v con 1 año de garantía.",
    price: 420000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros2/20.png",
      "/products/otros2/21.png",
      "/products/otros2/22.png",
      "/products/otros2/23.png",
    ],
    category: "herramientas-electricas",
    stock: 3,
    featured: true,
    specifications: {
      "Marca": "Duroll",
      "Capacidad": "120L de mezcla",
      "Motor": "3/4",
      "Peso": "46 kg",
      "Color": "Naranja",
      "Voltaje": "220v",
      "Garantía": "1 año",
    },
  },
  // NUEVOS PRODUCTOS AGREGADOS
  {
    id: "zapatilla-genesis",
    name: "Zapatilla Génesis",
    description:
      "Zapatilla marca Génesis con 4 tomas binorma reforzada. Voltaje 220v. Disponible en diferentes medidas.",
    price: 8500,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/1.jpg",
      "/products/otros3/2.jpg",
      "/products/otros3/3.jpg",
    ],
    category: "electricidad",
    stock: 15,
    featured: false,
    hasVariants: true,
    specifications: {
      "Marca": "Génesis",
      "Tomas": "4 tomas binorma",
      "Características": "Reforzada",
      "Voltaje": "220v",
    },
    variants: [
      {
        id: "zapatilla-genesis-3m",
        name: "3 metros",
        price: 8500,
        stock: 15,
        specifications: {
          "Medida": "3 metros",
        },
      },
      {
        id: "zapatilla-genesis-5m",
        name: "5 metros",
        price: 10000,
        stock: 12,
        specifications: {
          "Medida": "5 metros",
        },
      },
    ],
  },
  {
    id: "reflectores-candela",
    name: "Reflectores LED Candela",
    description:
      "Reflectores LED marca Candela con luz cálida para exterior. Disponibles en diferentes potencias.",
    price: 5000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/5.jpg",
      "/products/otros3/6.jpg",
    ],
    category: "electricidad",
    stock: 20,
    featured: true,
    hasVariants: true,
    specifications: {
      "Marca": "Candela",
      "Tipo": "LED",
      "Luz": "Cálida",
      "Uso": "Exterior",
    },
    variants: [
      {
        id: "reflector-candela-10w",
        name: "10W",
        price: 5000,
        stock: 20,
        specifications: {
          "Potencia": "10W",
        },
      },
      {
        id: "reflector-candela-20w",
        name: "20W",
        price: 8000,
        stock: 15,
        specifications: {
          "Potencia": "20W",
        },
      },
      {
        id: "reflector-candela-30w",
        name: "30W",
        price: 12000,
        stock: 12,
        specifications: {
          "Potencia": "30W",
        },
      },
      {
        id: "reflector-candela-50w",
        name: "50W",
        price: 15000,
        stock: 10,
        specifications: {
          "Potencia": "50W",
        },
      },
    ],
  },
  {
    id: "taladro-percutor-hamilton",
    name: "Taladro Percutor Hamilton",
    description:
      "Taladro percutor Hamilton con voltaje 220v, maletín de transporte, frecuencia 50Hz y velocidad máxima 1650rpm. Incluye cargador.",
    price: 160000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/7.jpg",
      "/products/otros3/8.jpg",
    ],
    category: "herramientas-electricas",
    stock: 8,
    featured: true,
    specifications: {
      "Marca": "Hamilton",
      "Tipo": "Taladro Percutor",
      "Voltaje": "220v",
      "Frecuencia": "50Hz",
      "Velocidad máxima": "1650rpm",
      "Incluye": "Maletín de transporte y cargador",
    },
  },
  {
    id: "rotomartillo-hamilton",
    name: "Rotomartillo Hamilton 1050W",
    description:
      "Rotomartillo Hamilton de 1050w que permite percutor con impacto para perforaciones. Ejecuta 5100 golpes por minuto.",
    price: 130000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/9.jpg",
      "/products/otros3/10.jpg",
      "/products/otros3/11.jpg",
    ],
    category: "herramientas-electricas",
    stock: 6,
    featured: true,
    specifications: {
      "Marca": "Hamilton",
      "Potencia": "1050W",
      "Tipo": "Rotomartillo con percutor",
      "Función": "Impacto para perforaciones",
      "Golpes por minuto": "5100",
    },
  },

  {
    id: "pintura-latex-andina",
    name: "Pintura Látex Andina 20L",
    description:
      "Pintura látex Andina de 20 litros para exterior e interior.",
    price: 55000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/12.jpg",
      "/products/otros3/13.jpg",
    ],
    category: "otros",
    stock: 10,
    featured: false,
    specifications: {
      "Marca": "Andina",
      "Tipo": "Látex",
      "Capacidad": "20 litros",
      "Uso": "Exterior/Interior",
    },
  },
  {
    id: "sierra-hamilton-1500w",
    name: "Sierra Hamilton 1500w",
    description:
      "Sierra circular Hamilton de 1500w con voltaje 220v. Peso 3kg, diámetro de disco 184mm y frecuencia 60/50Hz.",
    price: 156000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/28.jpg",
    ],
    category: "herramientas-electricas",
    stock: 5,
    featured: true,
    specifications: {
      "Marca": "Hamilton",
      "Tipo": "Sierra circular",
      "Potencia": "1500w",
      "Voltaje": "220v",
      "Peso": "3kg",
      "Diámetro disco": "184mm",
      "Frecuencia": "60/50Hz",
    },
  },
  {
    id: "membrana-liquida-andina",
    name: "Membrana Líquida Andina 20L",
    description:
      "Membrana líquida Andina de 20 litros, disponible en rojo y blanco. Acabado satinado de alta calidad. Cubre 6-8 m². Secado 2-6 horas.",
    price: 60000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/15.jpg",
    ],
    category: "otros",
    stock: 8,
    featured: true,
    hasVariants: true,
    specifications: {
      "Marca": "Andina",
      "Capacidad": "20 litros",
      "Acabado": "Satinado",
      "Calidad": "Alta calidad",
      "Cobertura": "6-8 m²",
      "Secado": "2-6 horas",
    },
    variants: [
      {
        id: "membrana-andina-rojo",
        name: "Rojo",
        price: 60000,
        stock: 4,
        specifications: {
          "Color": "Rojo",
        },
      },
      {
        id: "membrana-andina-blanco",
        name: "Blanco",
        price: 60000,
        stock: 4,
        specifications: {
          "Color": "Blanco",
        },
      },
    ],
  },
  {
    id: "pantalla-3000cal",
    name: "Pantalla 3000 calorías",
    description:
      "Pantalla de 3000 calorías disponible para gas natural y gas envasado.",
    price: 85000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/16.jpg",
      "/products/otros3/17.jpg",
      "/products/otros3/18.jpg",
      "/products/otros3/19.jpg",
      "/products/otros3/20.jpg",
    ],
    category: "invierno",
    stock: 6,
    featured: true,
    hasVariants: true,
    specifications: {
      "Potencia": "3000 calorías",
    },
    variants: [
      {
        id: "pantalla-3000cal-natural",
        name: "Gas Natural",
        price: 85000,
        stock: 6,
        specifications: {
          "Combustible": "Gas natural",
          "Incluye": "Válvula y termostato",
        },
      },
      {
        id: "pantalla-3000cal-envasado",
        name: "Gas Envasado",
        price: 85000,
        stock: 6,
        specifications: {
          "Combustible": "Gas envasado",
          "Incluye": "Válvula",
        },
      },
    ],
  },

  {
    id: "kit-salamandra",
    name: "Kit para Salamandra",
    description:
      "Kit completo para salamandra que incluye caños x 4, codos x 2 y sombrero x 1.",
    price: 40000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/24.jpg",
      "/products/otros3/22.jpg",
      "/products/otros3/21.jpg",
      "/products/otros3/23.jpg",
    ],
    category: "invierno",
    stock: 5,
    featured: false,
    specifications: {
      "Incluye": "Caños x 4, codos x 2, sombrero x 1",
      "Uso": "Para salamandra",
    },
  },
  {
    id: "tejido-pollero-actualizado",
    name: "Tejido Pollero",
    description:
      "Tejido pollero hexagonal con medida del octágono 3/4. Disponible en diferentes medidas. Se vende por metro y por rollo.",
    price: 3500,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/3.PNG",
      "/products/tejidos/4.PNG",
      "/products/tejidos/5.PNG",
    ],
    category: "tejidos-pvc-metal",
    stock: 30,
    featured: true,
    isRollProduct: true,
    hasVariants: true,
    rollLength: 100,
    rollPrice: 70000,
    specifications: {
      "Tipo": "Tejido hexagonal",
      "Octágono": "3/4",
      "Venta": "Por metro y por rollo",
    },
    variants: [
      {
        id: "tejido-pollero-1m",
        name: "1 metro",
        price: 3500,
        stock: 30,
        rollPrice: 70000,
        specifications: {
          "Medida": "1 metro",
          "Octágono": "3/4",
          "Rollo completo": "$70.000",
        },
      },
      {
        id: "tejido-pollero-120",
        name: "1,20 metros",
        price: 4000,
        stock: 25,
        rollPrice: 85000,
        specifications: {
          "Medida": "1,20 metros",
          "Octágono": "3/4",
          "Rollo completo": "$85.000",
        },
      },
      {
        id: "tejido-pollero-150",
        name: "1,50 metros",
        price: 5000,
        stock: 20,
        rollPrice: 110000,
        specifications: {
          "Medida": "1,50 metros",
          "Octágono": "3/4",
          "Rollo completo": "$110.000",
        },
      },
      {
        id: "tejido-pollero-180",
        name: "1,80 metros",
        price: 6000,
        stock: 15,
        rollPrice: 120000,
        specifications: {
          "Medida": "1,80 metros",
          "Octágono": "3/4",
          "Rollo completo": "$120.000",
        },
      },
    ],
  },
  {
    id: "mallas-electrosoldadas",
    name: "Mallas Electrosoldadas",
    description:
      "Mallas electrosoldadas con altura de 1 metro. Disponibles en diferentes medidas. Se vende por metro y por rollo.",
    price: 6000, // Precio base de la variante más económica
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros3/26.jpg",
      "/products/otros3/27.jpg",
    ],
    category: "tejidos-pvc-metal",
    stock: 25,
    featured: true,
    isRollProduct: true,
    hasVariants: true,
    rollLength: 100,
    rollPrice: 155000, // Precio base por rollo (más económico)
    specifications: {
      "Tipo": "Malla electrosoldada",
      "Altura": "1 metro",
      "Venta": "Por metro y por rollo",
    },
    variants: [
      {
        id: "malla-electrosoldada-25x50",
        name: "25x50",
        price: 6000,
        stock: 25,
        rollPrice: 155000,
        specifications: {
          "Medida": "25x50",
          "Rollo completo": "$155.000",
        },
      },
      {
        id: "malla-electrosoldada-25x25",
        name: "25x25",
        price: 7500,
        stock: 25,
        rollPrice: 160000,
        specifications: {
          "Medida": "25x25",
          "Rollo completo": "$160.000",
        },
      },
      {
        id: "malla-electrosoldada-19x19",
        name: "19x19",
        price: 8500,
        stock: 25,
        rollPrice: 170000,
        specifications: {
          "Medida": "19x19",
          "Rollo completo": "$170.000",
        },
      },
    ],
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
  {
    id: "verano",
    name: "Verano",
    description: "Productos para la temporada de verano",
    image: "/placeholder.svg?height=300&width=300&text=Verano",
  },
  {
    id: "otros",
    name: "Otros",
    description: "Otros productos y materiales diversos",
    image: "/placeholder.svg?height=300&width=300&text=Otros",
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

export function getVariantById(productId: string, variantId: string): ProductVariant | undefined {
  const product = getProductById(productId)
  if (!product?.variants) return undefined
  return product.variants.find((variant) => variant.id === variantId)
}

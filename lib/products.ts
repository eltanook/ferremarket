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
    name: "Amoladora Angular 900W 4.5 pulgadas",
    description:
      "Amoladora angular profesional de 900W con disco de 4.5 pulgadas. Empuñadura antivibración y protector de disco ajustable.",
    price: 189.9,
    originalPrice: 219.9,
    discount: 14,
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
    id: "media-sombra-220-80-verde-negro",
    name: "Media Sombra 2,20m - 80% Verde/Negro",
    description:
      "Media sombra antigranizo 80% con protector de rayos UV en colores verde y negro. Medida 2,20 metros. Precio por metro.",
    price: 2000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/1.PNG",
      "/products/medias_sombras_lonas/2.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 50,
    featured: true,
    isRollProduct: true,
    rollLength: 220, // 2.20 metros = 220 cm
    rollPrice: 85000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "2,20 metros",
      "Porcentaje": "80%",
      "Colores": "Verde y Negro",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $85.000",
    },
  },
  {
    id: "media-sombra-220-80-beige-gris",
    name: "Media Sombra 2,20m - 80% Beige/Gris",
    description:
      "Media sombra antigranizo 80% con protector de rayos UV en colores beige y gris. Medida 2,20 metros. Precio por metro.",
    price: 2800,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/3.PNG",
      "/products/medias_sombras_lonas/4.PNG",
      "/products/medias_sombras_lonas/5.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 45,
    featured: true,
    isRollProduct: true,
    rollLength: 220, // 2.20 metros = 220 cm
    rollPrice: 98000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "2,20 metros",
      "Porcentaje": "80%",
      "Colores": "Beige y Gris",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $98.000",
    },
  },
  {
    id: "media-sombra-420-80-verde-negro",
    name: "Media Sombra 4,20m - 80% Verde/Negro",
    description:
      "Media sombra antigranizo 80% con protector de rayos UV en colores verde y negro. Medida 4,20 metros. Precio por metro.",
    price: 4000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/1.PNG",
      "/products/medias_sombras_lonas/2.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 40,
    featured: true,
    isRollProduct: true,
    rollLength: 420, // 4.20 metros = 420 cm
    rollPrice: 160000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "80%",
      "Colores": "Verde y Negro",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $160.000",
    },
  },
  {
    id: "media-sombra-420-80-beige-gris",
    name: "Media Sombra 4,20m - 80% Beige/Gris",
    description:
      "Media sombra antigranizo 80% con protector de rayos UV en colores beige y gris. Medida 4,20 metros. Precio por metro.",
    price: 5000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/3.PNG",
      "/products/medias_sombras_lonas/4.PNG",
      "/products/medias_sombras_lonas/5.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 35,
    featured: true,
    isRollProduct: true,
    rollLength: 420, // 4.20 metros = 420 cm
    rollPrice: 175000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "80%",
      "Colores": "Beige y Gris",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $175.000",
    },
  },
  {
    id: "media-sombra-220-90-verde-negro",
    name: "Media Sombra 2,20m - 90% Verde/Negro",
    description:
      "Media sombra antigranizo 90% con protector de rayos UV en colores verde y negro. Medida 2,20 metros. Precio por metro.",
    price: 4000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/1.PNG",
      "/products/medias_sombras_lonas/2.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 42,
    featured: true,
    isRollProduct: true,
    rollLength: 220, // 2.20 metros = 220 cm
    rollPrice: 145000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "2,20 metros",
      "Porcentaje": "90%",
      "Colores": "Verde y Negro",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $145.000",
    },
  },
  {
    id: "media-sombra-220-90-beige-gris",
    name: "Media Sombra 2,20m - 90% Beige/Gris",
    description:
      "Media sombra antigranizo 90% con protector de rayos UV en colores beige y gris. Medida 2,20 metros. Precio por metro.",
    price: 5000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/3.PNG",
      "/products/medias_sombras_lonas/4.PNG",
      "/products/medias_sombras_lonas/5.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 38,
    featured: true,
    isRollProduct: true,
    rollLength: 220, // 2.20 metros = 220 cm
    rollPrice: 170000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "2,20 metros",
      "Porcentaje": "90%",
      "Colores": "Beige y Gris",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $170.000",
    },
  },
  {
    id: "media-sombra-420-90-verde-negro",
    name: "Media Sombra 4,20m - 90% Verde/Negro",
    description:
      "Media sombra antigranizo 90% con protector de rayos UV en colores verde y negro. Medida 4,20 metros. Precio por metro.",
    price: 6500,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/1.PNG",
      "/products/medias_sombras_lonas/2.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 30,
    featured: true,
    isRollProduct: true,
    rollLength: 420, // 4.20 metros = 420 cm
    rollPrice: 300000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "90%",
      "Colores": "Verde y Negro",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $300.000",
    },
  },
  {
    id: "media-sombra-420-90-beige-gris",
    name: "Media Sombra 4,20m - 90% Beige/Gris",
    description:
      "Media sombra antigranizo 90% con protector de rayos UV en colores beige y gris. Medida 4,20 metros. Precio por metro.",
    price: 8000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/medias_sombras_lonas/3.PNG",
      "/products/medias_sombras_lonas/4.PNG",
      "/products/medias_sombras_lonas/5.PNG",
    ],
    category: ["medias-sombras-lonas", "verano"],
    stock: 25,
    featured: true,
    isRollProduct: true,
    rollLength: 420, // 4.20 metros = 420 cm
    rollPrice: 320000, // Precio por rollo de 50 metros
    specifications: {
      "Medida": "4,20 metros",
      "Porcentaje": "90%",
      "Colores": "Beige y Gris",
      "Protección": "Antigranizo",
      "UV": "Protector de Rayos UV",
      "Venta": "Por metro",
      "Rollo completo": "50 metros - $320.000",
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
    id: "tejido-pollero",
    name: "Tejido Pollero",
    description:
      "Tejido hexagonal resistente a la oxidación. Disponible en varias medidas para diferentes aplicaciones.",
    price: 3800,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/3.PNG",
      "/products/tejidos/4.PNG",
      "/products/tejidos/5.PNG",
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
      "/products/tejidos/6.PNG",
      "/products/tejidos/7.PNG",
    ],
    category: ["tejidos-pvc-metal", "verano"],
    stock: 20,
    featured: false,
    isRollProduct: true,
    rollLength: 120, // 1.20 metros = 120 cm
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
    id: "lona-anillada-190",
    name: "Lona Anillada 1,90",
    description:
      "Lona anillada reforzada e impermeable de 1,90 metros con anillos en ambos extremos. Precio por metro.",
    price: 4500,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/11.PNG",
      "/products/tejidos/12.PNG",
      "/products/tejidos/13.PNG",
      "/products/tejidos/14.PNG",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas", "verano"],
    stock: 22,
    featured: true,
    isRollProduct: true,
    rollLength: 190, // 1.90 metros = 190 cm
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
    id: "cubre-cerco-150",
    name: "Cubre Cerco 1,50m Liviano 22mm",
    description:
      "Cubre cerco liviano 22mm de 1,50 metros. Resistente a rayos ultravioleta y al viento. Disponible en verde oscuro y verde claro. Apto para obras y jardines con 5 años de durabilidad. Precio por metro.",
    price: 1600,
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
    rollLength: 150, // 1.50 metros = 150 cm
    rollPrice: 130000, // Precio por rollo completo
    wholesalePrice: 115000, // Precio por mayor (5 unidades)
    specifications: {
      "Tipo": "Cubre Cerco Liviano",
      "Medida": "1,50 metros",
      "Grosor": "22mm",
      "Resistencia UV": "Sí",
      "Resistencia al viento": "Sí", 
      "Colores": "Verde oscuro / Verde claro",
      "Uso": "Obras y jardines",
      "Durabilidad": "5 años",
      "Venta": "Por metro",
      "Rollo completo": "$130.000",
      "Por mayor": "5 unidades - $115.000 c/u",
    },
  },
  {
    id: "cubre-cerco-180",
    name: "Cubre Cerco 1,80m Liviano 22mm",
    description:
      "Cubre cerco liviano 22mm de 1,80 metros. Resistente a rayos ultravioleta y al viento. Disponible en verde oscuro y verde claro. Apto para obras y jardines con 5 años de durabilidad. Precio por metro.",
    price: 2000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/tejidos/17.PNG",
      "/products/tejidos/18.PNG",
    ],
    category: ["tejidos-pvc-metal", "medias-sombras-lonas", "verano"],
    stock: 40,
    featured: true,
    isRollProduct: true,
    rollLength: 180, // 1.80 metros = 180 cm
    rollPrice: 150000, // Precio por rollo completo
    wholesalePrice: 125000, // Precio por mayor (5 unidades)
    specifications: {
      "Tipo": "Cubre Cerco Liviano",
      "Medida": "1,80 metros",
      "Grosor": "22mm",
      "Resistencia UV": "Sí",
      "Resistencia al viento": "Sí",
      "Colores": "Verde oscuro / Verde claro",
      "Uso": "Obras y jardines",
      "Durabilidad": "5 años",
      "Venta": "Por metro",
      "Rollo completo": "$150.000",
      "Por mayor": "5 unidades - $125.000 c/u",
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
    id: "juegos-cables-25",
    name: "Juegos de cables 2,5",
    description:
      "Promoción por 3 juegos de cables medida 2,5. Color a elección, normalizados y aprobados.",
    price: 80000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/electricidad/14.PNG",
      "/products/electricidad/15.PNG",
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
    price: 235000,
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
    price: 120000,
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
    price: 42000,
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
  {
    id: "carretilla-90l-pvc",
    name: "Carretilla 90 litros PVC",
    description:
      "Carretilla de mano tipo PVC con capacidad de 90 litros y peso máximo de 120kg. Rueda neumática con centro de chapa.",
    price: 120000,
    originalPrice: null,
    discount: 0,
    images: [
      "/products/otros/25.PNG",
      "/products/otros/26.PNG",
      "/products/otros/27.PNG",
    ],
    category: "herramientas-electricas",
    stock: 6,
    featured: false,
    specifications: {
      "Tipo": "Carretilla de mano",
      "Capacidad": "90 litros",
      "Peso máximo": "120 kg",
      "Material": "PVC",
      "Rueda": "Neumática",
      "Centro": "Chapa",
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
    price: 26000,
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
    price: 70000,
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
    price: 23000,
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

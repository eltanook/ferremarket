import type { Product } from "@/lib/types"

interface OrganizationSchemaProps {
  type?: 'organization'
}

interface ProductSchemaProps {
  type: 'product'
  product: Product
}

interface WebsiteSchemaProps {
  type: 'website'
}

type StructuredDataProps = OrganizationSchemaProps | ProductSchemaProps | WebsiteSchemaProps

export function StructuredData({ type, ...props }: StructuredDataProps) {
  let jsonLd: any = {}

  switch (type) {
    case 'organization':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Ferremarket",
        "description": "Ferretería con 15 años de experiencia ofreciendo herramientas, materiales de construcción y soluciones integrales.",
        "url": "https://ferremarket.com",
        "logo": "https://ferremarket.com/logo2.png",
        "foundingDate": "2008",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Buenos Aires",
          "addressRegion": "AMBA",
          "addressCountry": "AR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+5491163214356",
          "contactType": "customer service",
          "availableLanguage": "Spanish"
        },
        "sameAs": [
          "https://wa.me/5491163214356"
        ]
      }
      break

    case 'product':
      const productProps = props as ProductSchemaProps
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productProps.product.name,
        "description": productProps.product.description,
        "image": `https://ferremarket.com${productProps.product.images[0]}`,
        "offers": {
          "@type": "Offer",
          "price": productProps.product.price,
          "priceCurrency": "ARS",
          "availability": productProps.product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "seller": {
            "@type": "Organization",
            "name": "Ferremarket"
          }
        },
        "brand": {
          "@type": "Brand",
          "name": "Ferremarket"
        },
        "sku": productProps.product.id,
        "category": Array.isArray(productProps.product.category) 
          ? productProps.product.category.join(", ") 
          : productProps.product.category
      }
      break

    case 'website':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ferremarket",
        "url": "https://ferremarket.com",
        "description": "Ferretería con 15 años de experiencia en AMBA",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ferremarket.com/productos?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
      break

    default:
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Ferremarket"
      }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 
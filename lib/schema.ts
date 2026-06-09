const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://valentinastudio.ch";

export const beautySchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Laura Valentina — Microblading & Nail Salon",
  description:
    "Premium microblading and nail services in Biel/Bienne. Studio appointments and at-home service available.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  priceRange: "CHF",
  telephone: "+41-00-000-00-00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TBD",
    addressLocality: "Biel/Bienne",
    addressRegion: "BE",
    postalCode: "2500",
    addressCountry: "CH",
  },
  areaServed: ["Biel/Bienne", "Berne", "Neuchâtel"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Microblading",
          description:
            "Microblading, powder brows, combo brows and touch-ups. Studio only.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nail Services",
          description:
            "Gel manicure, nail art, manicure and pedicure. Studio + at-home service.",
        },
      },
    ],
  },
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Laura Valentina",
  inLanguage: ["fr-CH", "de-CH", "en"],
} as const;

import type { Locale } from "./i18n";

export type ServiceCategory = "microblading" | "nails";

export type Service = {
  slug: string;
  category: ServiceCategory;
  atHome: boolean;
  priceFrom: number;
  durationMin: number;
  i18n: Record<
    Locale,
    {
      name: string;
      description: string;
    }
  >;
};

export const services: Service[] = [
  {
    slug: "powder-brows",
    category: "microblading",
    atHome: false,
    priceFrom: 480,
    durationMin: 150,
    i18n: {
      fr: {
        name: "Powder Brows",
        description:
          "Effet maquillé doux et poudré, idéal pour un rendu uniforme et longue durée.",
      },
      de: {
        name: "Powder Brows",
        description:
          "Sanft gepuderter Make-up-Effekt — ideal für ein gleichmässiges, langanhaltendes Finish.",
      },
      en: {
        name: "Powder Brows",
        description:
          "A soft powdered make-up effect — ideal for an even, long-lasting finish.",
      },
    },
  },
  {
    slug: "combo-brows",
    category: "microblading",
    atHome: false,
    priceFrom: 520,
    durationMin: 180,
    i18n: {
      fr: {
        name: "Combo Brows",
        description:
          "Le meilleur des deux techniques : trait par trait pour le naturel, ombré pour la densité.",
      },
      de: {
        name: "Combo Brows",
        description:
          "Das Beste aus beiden Techniken: Strich-für-Strich für Natürlichkeit, Schattierung für Dichte.",
      },
      en: {
        name: "Combo Brows",
        description:
          "The best of both techniques: stroke-by-stroke for natural look, shading for density.",
      },
    },
  },
  {
    slug: "touch-up",
    category: "microblading",
    atHome: false,
    priceFrom: 180,
    durationMin: 60,
    i18n: {
      fr: {
        name: "Retouche",
        description:
          "Retouche annuelle pour préserver l'éclat et la précision de votre microblading.",
      },
      de: {
        name: "Auffrischung",
        description:
          "Jährliche Auffrischung, um Glanz und Präzision deines Microbladings zu erhalten.",
      },
      en: {
        name: "Touch-up",
        description:
          "Annual touch-up to preserve the brightness and precision of your microblading.",
      },
    },
  },
  {
    slug: "gel-manicure",
    category: "nails",
    atHome: true,
    priceFrom: 65,
    durationMin: 75,
    i18n: {
      fr: {
        name: "Manucure semi-permanente",
        description:
          "Pose gel longue tenue, finition impeccable et tenue jusqu'à 3 semaines.",
      },
      de: {
        name: "Gel-Maniküre",
        description:
          "Langhaltender Gel-Aufbau, perfektes Finish — bis zu 3 Wochen Halt.",
      },
      en: {
        name: "Gel Manicure",
        description:
          "Long-lasting gel application, flawless finish — wears up to 3 weeks.",
      },
    },
  },
  {
    slug: "nail-art",
    category: "nails",
    atHome: true,
    priceFrom: 85,
    durationMin: 90,
    i18n: {
      fr: {
        name: "Nail Art sur mesure",
        description:
          "Designs uniques, dessinés à la main : minimalisme, fleurs, French revisité.",
      },
      de: {
        name: "Massgeschneiderte Nail Art",
        description:
          "Einzigartige, von Hand gezeichnete Designs: minimalistisch, floral oder French neu interpretiert.",
      },
      en: {
        name: "Bespoke Nail Art",
        description:
          "Unique, hand-drawn designs: minimalist, floral or a reimagined French.",
      },
    },
  },
  {
    slug: "pedicure",
    category: "nails",
    atHome: true,
    priceFrom: 75,
    durationMin: 60,
    i18n: {
      fr: {
        name: "Pédicure soin",
        description:
          "Soin complet : limage, cuticules, modelage, vernis classique ou semi-permanent.",
      },
      de: {
        name: "Pediküre",
        description:
          "Komplettpflege: Feilen, Nagelhaut, Massage, klassischer oder Gel-Lack.",
      },
      en: {
        name: "Pedicure",
        description:
          "Full care: filing, cuticles, massage, classic or gel polish.",
      },
    },
  },
];

export const galleryItems = [
  { id: "g1", category: "microblading" as ServiceCategory, src: "/images/gallery-1.jpg", alt: "Microblading natural brows" },
  { id: "g2", category: "microblading" as ServiceCategory, src: "/images/gallery-2.jpg", alt: "Combo brows result" },
  { id: "g3", category: "nails" as ServiceCategory, src: "/images/gallery-3.jpg", alt: "Soft pink gel manicure" },
  { id: "g4", category: "nails" as ServiceCategory, src: "/images/gallery-4.jpg", alt: "Minimalist nail art" },
  { id: "g5", category: "microblading" as ServiceCategory, src: "/images/gallery-5.jpg", alt: "Powder brows close-up" },
  { id: "g6", category: "nails" as ServiceCategory, src: "/images/gallery-6.jpg", alt: "Pedicure finish" },
];

export const testimonials: Record<Locale, { name: string; text: string; service: string }[]> = {
  fr: [
    {
      name: "Sophie R.",
      service: "Microblading",
      text: "Un travail d'orfèvre. Laura a su comprendre exactement ce que je voulais — résultat naturel, parfait.",
    },
    {
      name: "Mélanie C.",
      service: "Nail art",
      text: "Première fois à domicile : un confort fou. Mes ongles n'ont jamais été aussi bien.",
    },
    {
      name: "Aïcha M.",
      service: "Powder brows",
      text: "L'attention au détail est incroyable. Le studio est calme et chaleureux. Je recommande !",
    },
  ],
  de: [
    {
      name: "Sophie R.",
      service: "Microblading",
      text: "Eine Goldschmiedearbeit. Laura hat genau verstanden, was ich wollte — natürlich, perfekt.",
    },
    {
      name: "Mélanie C.",
      service: "Nail Art",
      text: "Erstes Mal als Hausbesuch — unglaublich entspannt. Meine Nägel waren nie schöner.",
    },
    {
      name: "Aïcha M.",
      service: "Powder Brows",
      text: "Die Liebe zum Detail ist unglaublich. Das Studio ist ruhig und einladend. Sehr empfehlenswert!",
    },
  ],
  en: [
    {
      name: "Sophie R.",
      service: "Microblading",
      text: "Goldsmith-level craftsmanship. Laura understood exactly what I wanted — a perfectly natural result.",
    },
    {
      name: "Mélanie C.",
      service: "Nail art",
      text: "First time as an at-home appointment — the comfort is unreal. My nails have never looked this good.",
    },
    {
      name: "Aïcha M.",
      service: "Powder brows",
      text: "The attention to detail is incredible. The studio is calm and welcoming. Highly recommend!",
    },
  ],
};

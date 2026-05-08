export type Locale = "fr" | "de" | "en";

export const LOCALES: Locale[] = ["fr", "de", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

type Dict = {
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    booking: string;
    contact: string;
  };
  cta: {
    book: string;
    bookNow: string;
    learnMore: string;
    seeServices: string;
    contact: string;
    whatsapp: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    locator: string;
  };
  servicesPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    microblading: { title: string; description: string };
    nails: { title: string; description: string };
    atHome: { tag: string };
  };
  usp: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    micro: {
      title: string;
      lede: string;
      timeline: { title: string; steps: string[] };
      aftercare: { title: string; items: string[] };
    };
    nailsBlock: {
      title: string;
      lede: string;
    };
    atHome: {
      title: string;
      lede: string;
      note: string;
    };
    priceFrom: string;
    duration: string;
  };
  galleryPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: { all: string; microblading: string; nails: string };
    empty: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    lede: string;
    story: string[];
    why: { title: string; items: { title: string; description: string }[] };
    atHome: string;
  };
  bookingPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    selectService: string;
    studioOrHome: string;
    fallback: string;
    questions: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      placeholders: { name: string; email: string; phone: string; message: string };
    };
    studio: string;
    serviceArea: string;
    serviceAreaCopy: string;
    hours: string;
  };
  footer: {
    tagline: string;
    rights: string;
    legal: string;
    privacy: string;
    impressum: string;
  };
  common: {
    studio: string;
    atHome: string;
    chf: string;
    bookCalendly: string;
  };
};

export const dict: Record<Locale, Dict> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      gallery: "Galerie",
      about: "À propos",
      booking: "Réserver",
      contact: "Contact",
    },
    cta: {
      book: "Réserver",
      bookNow: "Prendre rendez-vous",
      learnMore: "En savoir plus",
      seeServices: "Voir les services",
      contact: "Nous contacter",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "Studio · Domicile · Bienne",
      title: "Microblading & Nail Artistry à Bienne",
      subtitle:
        "Sourcils sur mesure, ongles soignés. Une approche douce et précise, en studio ou directement chez vous.",
      locator: "Biel/Bienne, Suisse",
    },
    servicesPreview: {
      eyebrow: "Nos prestations",
      title: "Une beauté précise, pensée pour vous",
      subtitle:
        "Du microblading sur mesure aux ongles parfaitement finis — chaque rendez-vous est une parenthèse calme et soignée.",
      microblading: {
        title: "Microblading",
        description:
          "Sourcils naturels et durables, dessinés trait par trait pour s'accorder à votre visage.",
      },
      nails: {
        title: "Prestations ongles",
        description:
          "Gel, nail art, manucure et pédicure — finitions impeccables, soin et longue tenue.",
      },
      atHome: { tag: "Service à domicile disponible" },
    },
    usp: {
      eyebrow: "Pourquoi Laura Valentina",
      title: "Studio raffiné ou rendez-vous chez vous",
      items: [
        {
          title: "Studio · Bienne",
          description:
            "Un espace calme, hygiénique et chaleureux pour profiter pleinement du moment.",
        },
        {
          title: "À domicile",
          description:
            "Je me déplace avec mon matériel professionnel — pour les ongles, le confort de chez vous.",
        },
        {
          title: "Approche personnalisée",
          description:
            "Consultation, échange et précision : chaque résultat est dessiné autour de vous.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Avis clientes",
      title: "Ce qu'elles disent",
    },
    finalCta: {
      title: "Prête à révéler votre éclat ?",
      subtitle:
        "Réservez votre rendez-vous studio ou à domicile en quelques clics.",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Microblading & Nail Services",
      subtitle:
        "Soins haut de gamme pour les sourcils et les ongles, en studio à Bienne ou directement chez vous.",
      micro: {
        title: "Microblading",
        lede: "Une technique précise pour des sourcils naturels, denses et symétriques. Idéale pour redessiner, combler ou densifier — résultat durable jusqu'à 18 mois.",
        timeline: {
          title: "Déroulement",
          steps: [
            "Consultation & dessin sur mesure (40 min)",
            "Pigmentation poil par poil (1 h 30)",
            "Soin & conseils post-soin",
            "Retouche offerte à 4–6 semaines",
          ],
        },
        aftercare: {
          title: "Conseils post-soin",
          items: [
            "Garder la zone propre et sèche pendant 7 jours",
            "Appliquer la crème fournie matin et soir",
            "Éviter sauna, piscine et exposition solaire 14 jours",
            "Ne pas gratter, laisser les croûtes tomber naturellement",
          ],
        },
      },
      nailsBlock: {
        title: "Prestations ongles",
        lede: "Gel, nail art, manucure et pédicure — finitions soignées, tenue longue durée et hygiène irréprochable.",
      },
      atHome: {
        title: "Service à domicile",
        lede: "Détendez-vous chez vous : j'apporte tout le nécessaire pour les prestations ongles.",
        note:
          "Frais de déplacement selon distance — disponibles à Bienne et environs. Le microblading se fait uniquement en studio.",
      },
      priceFrom: "Dès",
      duration: "Durée",
    },
    galleryPage: {
      eyebrow: "Galerie",
      title: "Avant / après",
      subtitle:
        "Quelques transformations récentes — chaque visage est unique, chaque résultat sur mesure.",
      filters: { all: "Tout", microblading: "Microblading", nails: "Ongles" },
      empty: "Bientôt de nouvelles photos.",
    },
    aboutPage: {
      eyebrow: "À propos",
      title: "Laura Valentina",
      lede: "Jeune entrepreneure passionnée, je signe une beauté précise et délicate à Bienne.",
      story: [
        "Mon parcours est né d'une obsession : la précision. Chaque trait de microblading, chaque finition d'ongle, mérite la même attention.",
        "Je travaille avec des produits premium et un protocole d'hygiène rigoureux. Mon studio est un espace calme — pour vous offrir un moment de soin véritable.",
        "Pour les ongles, je me déplace aussi chez vous, avec le même niveau d'exigence.",
      ],
      why: {
        title: "Pourquoi me choisir",
        items: [
          { title: "Formations certifiées", description: "Microblading et soins des ongles, formations continues." },
          { title: "Hygiène irréprochable", description: "Matériel à usage unique, protocole strict." },
          { title: "Approche douce", description: "Consultation, écoute, résultat naturel." },
        ],
      },
      atHome: "Je viens à vous — pour les ongles, partout à Bienne et environs.",
    },
    bookingPage: {
      eyebrow: "Réservation",
      title: "Prenez votre rendez-vous",
      subtitle:
        "Choisissez votre prestation et le créneau qui vous convient — studio ou domicile.",
      selectService: "Sélectionnez la prestation",
      studioOrHome: "Studio à Bienne ou à domicile selon la prestation",
      fallback: "Le module de réservation se chargera dans un instant.",
      questions: "Une question avant de réserver ?",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Parlons de votre rendez-vous",
      subtitle:
        "Une question, un conseil, un déplacement à domicile ? Je vous réponds rapidement.",
      form: {
        name: "Nom",
        email: "E-mail",
        phone: "Téléphone",
        service: "Prestation",
        message: "Message",
        submit: "Envoyer",
        success: "Merci ! Je vous recontacte rapidement.",
        error: "Oups, une erreur est survenue. Réessayez ou écrivez-moi sur WhatsApp.",
        placeholders: {
          name: "Votre nom",
          email: "vous@exemple.ch",
          phone: "+41 …",
          message: "Dites-moi tout…",
        },
      },
      studio: "Studio à Bienne",
      serviceArea: "Zone de déplacement",
      serviceAreaCopy: "Bienne et environs (frais selon distance).",
      hours: "Sur rendez-vous",
    },
    footer: {
      tagline: "Microblading & Nail Artistry · Bienne",
      rights: "Tous droits réservés.",
      legal: "Mentions",
      privacy: "Confidentialité",
      impressum: "Impressum",
    },
    common: {
      studio: "Studio",
      atHome: "À domicile",
      chf: "CHF",
      bookCalendly: "Réserver sur Cal.com",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      gallery: "Galerie",
      about: "Über mich",
      booking: "Buchen",
      contact: "Kontakt",
    },
    cta: {
      book: "Termin",
      bookNow: "Termin buchen",
      learnMore: "Mehr erfahren",
      seeServices: "Leistungen ansehen",
      contact: "Kontakt aufnehmen",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "Studio · Zuhause · Biel",
      title: "Microblading & Nageldesign in Biel",
      subtitle:
        "Massgeschneiderte Augenbrauen, gepflegte Nägel. Sanft, präzise — im Studio oder bei dir zu Hause.",
      locator: "Biel/Bienne, Schweiz",
    },
    servicesPreview: {
      eyebrow: "Leistungen",
      title: "Präzise Schönheit, ganz auf dich abgestimmt",
      subtitle:
        "Von Microblading bis Nageldesign — jeder Termin ist eine ruhige, gepflegte Auszeit.",
      microblading: {
        title: "Microblading",
        description:
          "Natürliche, langanhaltende Augenbrauen, Strich für Strich auf dein Gesicht abgestimmt.",
      },
      nails: {
        title: "Nageldesign",
        description:
          "Gel, Nail Art, Maniküre und Pediküre — perfekte Finishes mit langem Halt.",
      },
      atHome: { tag: "Auch als Hausbesuch verfügbar" },
    },
    usp: {
      eyebrow: "Warum Laura Valentina",
      title: "Stilvolles Studio oder Termin zu Hause",
      items: [
        {
          title: "Studio · Biel",
          description: "Ein ruhiger, hygienischer und einladender Raum, um den Moment zu geniessen.",
        },
        {
          title: "Hausbesuch",
          description:
            "Für Nageldesign komme ich mit professionellem Material zu dir nach Hause.",
        },
        {
          title: "Persönliche Beratung",
          description:
            "Beratung, Gespräch, Präzision — jedes Ergebnis wird genau für dich gestaltet.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Kundinnenstimmen",
      title: "Das sagen sie",
    },
    finalCta: {
      title: "Bereit, deinen Glow zu zeigen?",
      subtitle: "Termin im Studio oder zu Hause — in wenigen Klicks gebucht.",
    },
    servicesPage: {
      eyebrow: "Leistungen",
      title: "Microblading & Nageldesign",
      subtitle:
        "Hochwertige Pflege für Augenbrauen und Nägel — im Studio in Biel oder bei dir zu Hause.",
      micro: {
        title: "Microblading",
        lede: "Eine präzise Technik für natürliche, dichte und symmetrische Augenbrauen. Ideal zum Neuformen, Auffüllen oder Verdichten — Ergebnis hält bis zu 18 Monate.",
        timeline: {
          title: "Ablauf",
          steps: [
            "Beratung & individuelle Vorzeichnung (40 Min.)",
            "Pigmentierung Strich für Strich (1 Std. 30 Min.)",
            "Pflege & Nachsorge-Tipps",
            "Kostenlose Nachpigmentierung nach 4–6 Wochen",
          ],
        },
        aftercare: {
          title: "Nachsorge",
          items: [
            "7 Tage lang sauber und trocken halten",
            "Bereitgestellte Pflegecreme morgens und abends auftragen",
            "14 Tage keine Sauna, kein Schwimmbad, keine Sonne",
            "Nicht kratzen — Krusten von selbst abfallen lassen",
          ],
        },
      },
      nailsBlock: {
        title: "Nageldesign",
        lede: "Gel, Nail Art, Maniküre und Pediküre — gepflegte Finishes mit langem Halt und höchster Hygiene.",
      },
      atHome: {
        title: "Hausbesuch",
        lede: "Geniesse den Termin zuhause — für Nageldesign bringe ich alles Notwendige mit.",
        note:
          "Anfahrtspauschale je nach Distanz — verfügbar in Biel und Umgebung. Microblading nur im Studio.",
      },
      priceFrom: "Ab",
      duration: "Dauer",
    },
    galleryPage: {
      eyebrow: "Galerie",
      title: "Vorher / nachher",
      subtitle:
        "Einige aktuelle Verwandlungen — jedes Gesicht ist einzigartig, jedes Ergebnis individuell.",
      filters: { all: "Alle", microblading: "Microblading", nails: "Nägel" },
      empty: "Bald folgen neue Bilder.",
    },
    aboutPage: {
      eyebrow: "Über mich",
      title: "Laura Valentina",
      lede: "Junge, leidenschaftliche Unternehmerin — präzise und feine Schönheit in Biel.",
      story: [
        "Mein Weg begann mit einer Obsession: Präzision. Jeder Microblading-Strich, jedes Nagelfinish verdient die gleiche Hingabe.",
        "Ich arbeite mit Premium-Produkten und striktem Hygieneprotokoll. Mein Studio ist ein ruhiger Raum — für einen echten Pflegemoment.",
        "Für Nägel komme ich auch zu dir nach Hause, mit dem gleichen hohen Anspruch.",
      ],
      why: {
        title: "Warum mich wählen",
        items: [
          { title: "Zertifizierte Ausbildungen", description: "Microblading und Nagelpflege, laufende Weiterbildung." },
          { title: "Höchste Hygiene", description: "Einwegmaterial, striktes Protokoll." },
          { title: "Sanfter Ansatz", description: "Beratung, Zuhören, natürliches Ergebnis." },
        ],
      },
      atHome: "Ich komme zu dir — für Nägel überall in Biel und Umgebung.",
    },
    bookingPage: {
      eyebrow: "Buchung",
      title: "Buche deinen Termin",
      subtitle:
        "Wähle deine Leistung und das passende Zeitfenster — Studio oder Hausbesuch.",
      selectService: "Wähle die Leistung",
      studioOrHome: "Studio in Biel oder Hausbesuch je nach Leistung",
      fallback: "Das Buchungsmodul wird gleich geladen.",
      questions: "Noch eine Frage vor dem Buchen?",
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Sprechen wir über deinen Termin",
      subtitle:
        "Eine Frage, ein Rat, ein Hausbesuch? Ich antworte schnell.",
      form: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        service: "Leistung",
        message: "Nachricht",
        submit: "Senden",
        success: "Danke! Ich melde mich in Kürze.",
        error: "Ups, da ging etwas schief. Versuche es nochmals oder schreibe per WhatsApp.",
        placeholders: {
          name: "Dein Name",
          email: "du@beispiel.ch",
          phone: "+41 …",
          message: "Erzähl mir alles…",
        },
      },
      studio: "Studio in Biel",
      serviceArea: "Anfahrtsbereich",
      serviceAreaCopy: "Biel und Umgebung (Anfahrt je nach Distanz).",
      hours: "Nach Vereinbarung",
    },
    footer: {
      tagline: "Microblading & Nageldesign · Biel",
      rights: "Alle Rechte vorbehalten.",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      impressum: "Impressum",
    },
    common: {
      studio: "Studio",
      atHome: "Hausbesuch",
      chf: "CHF",
      bookCalendly: "Über Cal.com buchen",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      booking: "Book",
      contact: "Contact",
    },
    cta: {
      book: "Book",
      bookNow: "Book an appointment",
      learnMore: "Learn more",
      seeServices: "See services",
      contact: "Contact us",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "Studio · At-home · Biel",
      title: "Microblading & Nail Artistry in Biel/Bienne",
      subtitle:
        "Bespoke brows, polished nails. A gentle, precise approach — in the studio or at your home.",
      locator: "Biel/Bienne, Switzerland",
    },
    servicesPreview: {
      eyebrow: "Our services",
      title: "Precise beauty, designed around you",
      subtitle:
        "From bespoke microblading to flawlessly finished nails — every appointment is a calm, curated moment.",
      microblading: {
        title: "Microblading",
        description:
          "Natural, long-lasting brows drawn stroke by stroke to suit your face.",
      },
      nails: {
        title: "Nail services",
        description:
          "Gel, nail art, manicure and pedicure — flawless finishes with long wear.",
      },
      atHome: { tag: "At-home service available" },
    },
    usp: {
      eyebrow: "Why Laura Valentina",
      title: "Refined studio or appointment at home",
      items: [
        {
          title: "Studio · Biel",
          description:
            "A calm, hygienic, welcoming space to fully enjoy your moment.",
        },
        {
          title: "At-home",
          description:
            "I travel with professional kit — for nails, in the comfort of your home.",
        },
        {
          title: "Personal approach",
          description:
            "Consultation, conversation, precision: every result is designed for you.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Client reviews",
      title: "What they say",
    },
    finalCta: {
      title: "Ready to reveal your glow?",
      subtitle:
        "Book your studio or at-home appointment in just a few clicks.",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Microblading & Nail Services",
      subtitle:
        "Premium care for brows and nails — at the studio in Biel or in the comfort of your home.",
      micro: {
        title: "Microblading",
        lede: "A precise technique for natural, dense, symmetrical brows. Perfect to reshape, fill in or add density — results last up to 18 months.",
        timeline: {
          title: "How it works",
          steps: [
            "Consultation & bespoke mapping (40 min)",
            "Stroke-by-stroke pigmentation (1 h 30)",
            "Aftercare & guidance",
            "Complimentary touch-up at 4–6 weeks",
          ],
        },
        aftercare: {
          title: "Aftercare",
          items: [
            "Keep the area clean and dry for 7 days",
            "Apply the provided cream morning and evening",
            "No sauna, pool or sun exposure for 14 days",
            "Don't pick — let the flakes fall naturally",
          ],
        },
      },
      nailsBlock: {
        title: "Nail services",
        lede: "Gel, nail art, manicure and pedicure — refined finishes with long wear and impeccable hygiene.",
      },
      atHome: {
        title: "At-home service",
        lede: "Relax at home — I bring everything needed for nail services.",
        note:
          "Travel fee depending on distance — available in Biel and surroundings. Microblading is studio-only.",
      },
      priceFrom: "From",
      duration: "Duration",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Before / after",
      subtitle:
        "A few recent transformations — every face is unique, every result tailored.",
      filters: { all: "All", microblading: "Microblading", nails: "Nails" },
      empty: "New photos coming soon.",
    },
    aboutPage: {
      eyebrow: "About",
      title: "Laura Valentina",
      lede: "A young, passionate entrepreneur shaping precise, delicate beauty in Biel.",
      story: [
        "My journey was born of one obsession: precision. Every microblading stroke, every nail finish deserves the same attention.",
        "I work with premium products and a strict hygiene protocol. My studio is a calm space — to offer you a truly restorative moment.",
        "For nails, I also travel to you, with the same level of care.",
      ],
      why: {
        title: "Why choose me",
        items: [
          { title: "Certified training", description: "Microblading and nail care, ongoing education." },
          { title: "Impeccable hygiene", description: "Single-use materials, strict protocol." },
          { title: "Gentle approach", description: "Consultation, listening, natural result." },
        ],
      },
      atHome: "I come to you — for nails, anywhere in Biel and surroundings.",
    },
    bookingPage: {
      eyebrow: "Booking",
      title: "Book your appointment",
      subtitle:
        "Choose your service and the time that suits you — studio or at-home.",
      selectService: "Select service",
      studioOrHome: "Studio in Biel or at-home depending on the service",
      fallback: "The booking module will load shortly.",
      questions: "A question before booking?",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's talk about your appointment",
      subtitle:
        "A question, advice, an at-home visit? I'll get back to you quickly.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        service: "Service",
        message: "Message",
        submit: "Send",
        success: "Thanks! I'll be in touch shortly.",
        error: "Oops, something went wrong. Try again or message me on WhatsApp.",
        placeholders: {
          name: "Your name",
          email: "you@example.ch",
          phone: "+41 …",
          message: "Tell me everything…",
        },
      },
      studio: "Studio in Biel",
      serviceArea: "Service area",
      serviceAreaCopy: "Biel and surroundings (travel fee depending on distance).",
      hours: "By appointment",
    },
    footer: {
      tagline: "Microblading & Nail Artistry · Biel",
      rights: "All rights reserved.",
      legal: "Legal",
      privacy: "Privacy",
      impressum: "Imprint",
    },
    common: {
      studio: "Studio",
      atHome: "At-home",
      chf: "CHF",
      bookCalendly: "Book on Cal.com",
    },
  },
};

"use client";

import { useLocale } from "@/lib/LocaleProvider";

// NOTE: Values in [ … ] are placeholders only Laura can provide.
// Swiss law (Art. 3 lit. s UWG) requires a geographic address and an email
// for any commercial website. UID is required if the business is registered.
const BUSINESS = {
  name: "Laura Valentina Studio",
  owner: "Laura Valentina", // [legal full name if different]
  street: "[Rue / Strasse + N°]",
  city: "2500 Biel/Bienne",
  country: "Schweiz / Suisse",
  email: "[email@valentinastudio.ch]",
  phone: "[+41 …]",
  uid: "[CHE-___.___.___]", // optional — only if registered in the commercial register
  web: "valentinastudio.ch",
};

type Content = {
  eyebrow: string;
  title: string;
  responsibleLabel: string;
  contactLabel: string;
  uidLabel: string;
  webLabel: string;
  disclaimerTitle: string;
  disclaimer: string;
  copyrightTitle: string;
  copyright: string;
};

const C: Record<string, Content> = {
  fr: {
    eyebrow: "Mentions légales",
    title: "Impressum",
    responsibleLabel: "Responsable du contenu",
    contactLabel: "Contact",
    uidLabel: "Numéro d'identification (IDE)",
    webLabel: "Site web",
    disclaimerTitle: "Exclusion de responsabilité",
    disclaimer:
      "Le contenu de ce site a été rédigé avec le plus grand soin. Toutefois, aucune garantie n'est donnée quant à l'exactitude, l'exhaustivité ou l'actualité des informations. La responsabilité pour les liens externes incombe exclusivement à leurs exploitants.",
    copyrightTitle: "Droits d'auteur",
    copyright:
      "Tous les textes, images et éléments graphiques de ce site sont protégés par le droit d'auteur. Toute reproduction sans autorisation écrite préalable est interdite.",
  },
  de: {
    eyebrow: "Rechtliches",
    title: "Impressum",
    responsibleLabel: "Verantwortlich für den Inhalt",
    contactLabel: "Kontakt",
    uidLabel: "Unternehmens-Identifikationsnummer (UID)",
    webLabel: "Webseite",
    disclaimerTitle: "Haftungsausschluss",
    disclaimer:
      "Die Inhalte dieser Webseite wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Für externe Links sind ausschliesslich deren Betreiber verantwortlich.",
    copyrightTitle: "Urheberrecht",
    copyright:
      "Alle Texte, Bilder und Grafiken auf dieser Webseite sind urheberrechtlich geschützt. Eine Vervielfältigung ohne vorherige schriftliche Zustimmung ist nicht gestattet.",
  },
  en: {
    eyebrow: "Legal",
    title: "Imprint",
    responsibleLabel: "Responsible for content",
    contactLabel: "Contact",
    uidLabel: "Business identification number (UID)",
    webLabel: "Website",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "The content of this site has been prepared with the greatest care. However, no guarantee is given as to the accuracy, completeness or timeliness of the information. Responsibility for external links lies solely with their operators.",
    copyrightTitle: "Copyright",
    copyright:
      "All text, images and graphics on this website are protected by copyright. Any reproduction without prior written consent is prohibited.",
  },
};

export default function ImpressumPage() {
  const { locale } = useLocale();
  const c = C[locale] ?? C.fr;

  return (
    <section className="container-x pt-16 pb-24 sm:pt-24">
      <div className="max-w-2xl">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1 className="h-display mt-4">{c.title}</h1>

        <div className="surface mt-10 space-y-6 px-6 py-8 sm:px-9">
          <div>
            <p className="eyebrow">{c.responsibleLabel}</p>
            <p className="mt-2 font-serif text-lg text-brown-900">
              {BUSINESS.name}
            </p>
            <p className="text-sm text-brown-700">{BUSINESS.owner}</p>
            <p className="mt-1 text-sm text-brown-700">
              {BUSINESS.street}
              <br />
              {BUSINESS.city}
              <br />
              {BUSINESS.country}
            </p>
          </div>

          <div>
            <p className="eyebrow">{c.contactLabel}</p>
            <p className="mt-2 text-sm text-brown-700">
              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-brown-900"
              >
                {BUSINESS.email}
              </a>
              <br />
              {BUSINESS.phone}
            </p>
          </div>

          <div>
            <p className="eyebrow">{c.uidLabel}</p>
            <p className="mt-2 text-sm text-brown-700">{BUSINESS.uid}</p>
          </div>

          <div>
            <p className="eyebrow">{c.webLabel}</p>
            <p className="mt-2 text-sm text-brown-700">
              <a
                href={`https://${BUSINESS.web}`}
                className="hover:text-brown-900"
              >
                {BUSINESS.web}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="font-serif text-xl text-brown-900">
              {c.disclaimerTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              {c.disclaimer}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-brown-900">
              {c.copyrightTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              {c.copyright}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

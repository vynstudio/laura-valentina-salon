"use client";

import { useLocale } from "@/lib/LocaleProvider";

// Privacy policy aligned with the revised Swiss Federal Act on Data
// Protection (nDSG / nLPD, in force since 1 Sep 2023). Values in [ … ] are
// placeholders only Laura can confirm. The processing described below
// reflects what this site actually does: contact form (email via Resend),
// booking via Cal.com, an embedded Google Map, hosting on Netlify, and a
// language preference stored locally in the browser.
const CONTROLLER = {
  name: "Laura Valentina Studio",
  city: "2500 Biel/Bienne, Schweiz",
  email: "[email@valentinastudio.ch]",
};

type Section = { h: string; p: string };
type Content = {
  eyebrow: string;
  title: string;
  intro: string;
  controllerLabel: string;
  sections: Section[];
  updated: string;
};

const C: Record<string, Content> = {
  fr: {
    eyebrow: "Confidentialité",
    title: "Protection des données",
    intro:
      "La protection de vos données personnelles nous tient à cœur. Cette déclaration explique quelles données nous traitons, dans quel but et quels sont vos droits, conformément à la loi fédérale révisée sur la protection des données (nLPD).",
    controllerLabel: "Responsable du traitement",
    sections: [
      {
        h: "Données collectées",
        p: "Lorsque vous utilisez le formulaire de contact, nous traitons votre nom, votre adresse e-mail, votre numéro de téléphone (facultatif) et votre message. Lors d'une réservation via Cal.com, nous traitons votre nom, votre e-mail et les détails de votre rendez-vous. Lors de la consultation du site, notre hébergeur enregistre des données techniques (adresse IP, date/heure) à des fins de sécurité.",
      },
      {
        h: "Finalités",
        p: "Les données sont utilisées exclusivement pour répondre à vos demandes, gérer vos rendez-vous et assurer le bon fonctionnement et la sécurité du site. Aucune donnée n'est vendue ni utilisée à des fins publicitaires.",
      },
      {
        h: "Sous-traitants et services tiers",
        p: "Nous faisons appel à des prestataires de confiance : Cal.com (gestion des réservations), Resend (envoi d'e-mails), Netlify (hébergement) et Google Maps (carte du studio). Ces prestataires peuvent traiter des données en Suisse, dans l'UE ou aux États-Unis, sur la base de garanties contractuelles appropriées.",
      },
      {
        h: "Cookies et stockage local",
        p: "Ce site n'utilise pas de cookies publicitaires ni d'outils de suivi. Votre préférence de langue est enregistrée localement dans votre navigateur (localStorage) afin d'améliorer votre confort de navigation.",
      },
      {
        h: "Durée de conservation",
        p: "Vos données sont conservées uniquement le temps nécessaire à la finalité concernée, puis supprimées, sauf obligation légale de conservation.",
      },
      {
        h: "Vos droits",
        p: "Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données. Pour exercer ces droits, contactez-nous à l'adresse e-mail indiquée ci-dessus.",
      },
    ],
    updated: "Dernière mise à jour",
  },
  de: {
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    intro:
      "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Erklärung beschreibt, welche Daten wir bearbeiten, zu welchem Zweck und welche Rechte Ihnen zustehen — gemäss dem revidierten Schweizer Datenschutzgesetz (nDSG).",
    controllerLabel: "Verantwortliche Stelle",
    sections: [
      {
        h: "Erhobene Daten",
        p: "Bei Nutzung des Kontaktformulars bearbeiten wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer (optional) und Ihre Nachricht. Bei einer Buchung über Cal.com bearbeiten wir Ihren Namen, Ihre E-Mail und die Termindetails. Beim Besuch der Seite speichert unser Hosting-Anbieter technische Daten (IP-Adresse, Datum/Uhrzeit) zu Sicherheitszwecken.",
      },
      {
        h: "Zwecke",
        p: "Die Daten werden ausschliesslich zur Beantwortung Ihrer Anfragen, zur Verwaltung Ihrer Termine sowie zum sicheren Betrieb der Website verwendet. Es werden keine Daten verkauft oder für Werbung genutzt.",
      },
      {
        h: "Auftragsbearbeiter und Drittanbieter",
        p: "Wir setzen vertrauenswürdige Dienstleister ein: Cal.com (Terminbuchung), Resend (E-Mail-Versand), Netlify (Hosting) und Google Maps (Studio-Karte). Diese können Daten in der Schweiz, der EU oder den USA bearbeiten, auf Grundlage angemessener vertraglicher Garantien.",
      },
      {
        h: "Cookies und lokale Speicherung",
        p: "Diese Website verwendet keine Werbe-Cookies und keine Tracking-Tools. Ihre Sprachpräferenz wird lokal in Ihrem Browser gespeichert (localStorage), um den Bedienkomfort zu verbessern.",
      },
      {
        h: "Aufbewahrungsdauer",
        p: "Ihre Daten werden nur so lange aufbewahrt, wie es für den jeweiligen Zweck erforderlich ist, und danach gelöscht — vorbehältlich gesetzlicher Aufbewahrungspflichten.",
      },
      {
        h: "Ihre Rechte",
        p: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch bezüglich Ihrer Daten. Zur Ausübung dieser Rechte kontaktieren Sie uns unter der oben genannten E-Mail-Adresse.",
      },
    ],
    updated: "Letzte Aktualisierung",
  },
  en: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    intro:
      "Protecting your personal data matters to us. This statement explains what data we process, for what purpose, and what rights you have, in accordance with the revised Swiss Federal Act on Data Protection (FADP).",
    controllerLabel: "Data controller",
    sections: [
      {
        h: "Data we collect",
        p: "When you use the contact form, we process your name, email address, phone number (optional) and message. When you book via Cal.com, we process your name, email and appointment details. When you visit the site, our host records technical data (IP address, date/time) for security purposes.",
      },
      {
        h: "Purposes",
        p: "Data is used solely to respond to your requests, manage your appointments and ensure the secure operation of the site. No data is sold or used for advertising.",
      },
      {
        h: "Processors and third-party services",
        p: "We rely on trusted providers: Cal.com (booking), Resend (email delivery), Netlify (hosting) and Google Maps (studio map). These may process data in Switzerland, the EU or the United States, on the basis of appropriate contractual safeguards.",
      },
      {
        h: "Cookies and local storage",
        p: "This site uses no advertising cookies and no tracking tools. Your language preference is stored locally in your browser (localStorage) to improve your experience.",
      },
      {
        h: "Retention",
        p: "Your data is kept only as long as necessary for the relevant purpose, then deleted, subject to any legal retention obligations.",
      },
      {
        h: "Your rights",
        p: "You have the right to access, rectify, delete and object to the processing of your data. To exercise these rights, contact us at the email address above.",
      },
    ],
    updated: "Last updated",
  },
};

export default function DatenschutzPage() {
  const { locale } = useLocale();
  const c = C[locale] ?? C.fr;

  return (
    <section className="container-x pt-16 pb-24 sm:pt-24">
      <div className="max-w-2xl">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1 className="h-display mt-4">{c.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-brown-700">
          {c.intro}
        </p>

        <div className="surface mt-8 px-6 py-6 sm:px-9">
          <p className="eyebrow">{c.controllerLabel}</p>
          <p className="mt-2 font-serif text-lg text-brown-900">
            {CONTROLLER.name}
          </p>
          <p className="text-sm text-brown-700">
            {CONTROLLER.city}
            <br />
            <a
              href={`mailto:${CONTROLLER.email}`}
              className="hover:text-brown-900"
            >
              {CONTROLLER.email}
            </a>
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {c.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-xl text-brown-900">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brown-700">
                {s.p}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.22em] text-brown-500">
          {c.updated}: 2026
        </p>
      </div>
    </section>
  );
}

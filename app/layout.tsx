import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import CalFloatingButton from "@/components/CalFloatingButton";
import { LocaleProvider } from "@/lib/LocaleProvider";
import { beautySchema, websiteSchema } from "@/lib/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lauravalentina.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Laura Valentina — Microblading & Nail Salon Biel/Bienne",
    template: "%s · Laura Valentina",
  },
  description:
    "Premium microblading and nail artistry in Biel/Bienne. Studio appointments and at-home service available. Book your consultation today.",
  keywords: [
    "microblading biel",
    "microblading bienne",
    "nail salon biel",
    "salon d'ongles bienne",
    "nagel studio biel",
    "permanent makeup biel",
    "mobile beauty biel",
    "beauty at home biel",
  ],
  alternates: {
    languages: {
      "fr-CH": "/",
      "de-CH": "/",
      "en": "/",
    },
  },
  openGraph: {
    title: "Laura Valentina — Microblading & Nail Salon",
    description:
      "Premium beauty services in Biel/Bienne — studio + at-home.",
    url: SITE_URL,
    siteName: "Laura Valentina",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laura Valentina — Microblading & Nail Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Valentina — Microblading & Nail Salon",
    description:
      "Premium beauty services in Biel/Bienne — studio + at-home.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <LocaleProvider>
          <Header />
          <main className="pb-24 lg:pb-0">{children}</main>
          <Footer />
          <StickyMobileCTA />
          <WhatsAppButton />
          <CalFloatingButton />
        </LocaleProvider>
      </body>
    </html>
  );
}

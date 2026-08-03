import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import Providers from "@/components/layout/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildbrandconcept.com"),
  title: {
    default: "Build & Brand Concept — Architecture, construction, design intérieur | Conakry",
    template: "%s — Build & Brand Concept",
  },
  description:
    "Build & Brand Concept accompagne les projets de construction, rénovation et valorisation des espaces à Conakry et en Afrique de l'Ouest. Nous ne construisons pas des bâtiments, nous façonnons des manières de vivre.",
  keywords: [
    "architecture Conakry",
    "construction Guinée",
    "design intérieur Conakry",
    "rénovation Guinée",
    "Build & Brand Concept",
  ],
  openGraph: {
    title: "Build & Brand Concept",
    description:
      "Architecture, construction et valorisation des espaces à Conakry, Guinée.",
    url: "https://buildbrandconcept.com",
    siteName: "Build & Brand Concept",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/elegant-black-minimal-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Build & Brand Concept — Architecture, construction et design intérieur, Conakry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build & Brand Concept",
    description: "Architecture, construction et valorisation des espaces à Conakry, Guinée.",
    images: ["/images/elegant-black-minimal-interior.jpg"],
  },
};

// JSON-LD — uniquement des faits confirmés (nom, url, ville, réseaux actifs).
// Pas de téléphone/adresse/note d'avis tant qu'ils ne sont pas explicitement
// validés pour publication, et jamais le lien Instagram tant qu'il est mort.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Build & Brand Concept",
  url: "https://buildbrandconcept.com",
  description:
    "Entreprise d'architecture, construction, rénovation et design intérieur basée à Conakry, Guinée, fondée en 2020.",
  foundingDate: "2020",
  areaServed: [
    { "@type": "City", name: "Conakry" },
    { "@type": "Country", name: "Guinée" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/build-brand-concept/",
    "https://www.facebook.com/profile.php?id=61592116702445",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink font-sans text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

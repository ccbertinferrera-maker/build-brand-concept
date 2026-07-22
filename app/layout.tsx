import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import Providers from "@/components/layout/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildandbrandconcept.com"),
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
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink font-sans text-paper">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

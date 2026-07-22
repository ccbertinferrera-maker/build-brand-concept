import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NosMetiers from "@/sections/savoir-faire/NosMetiers";
import Innovation from "@/sections/savoir-faire/Innovation";

export const metadata: Metadata = {
  title: "Savoir-faire",
  description:
    "Onze corps de métier réunis sous une seule chaîne de responsabilité, et une innovation au service de l'habitat : le biogaz.",
};

export default function SavoirFairePage() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Tous les métiers, une seule équipe."
        image="/images/construction-worker.jpg"
        imageAlt="Professionnel guinéen sur un chantier Build & Brand Concept"
      />
      <NosMetiers />
      <Innovation />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AvantApres from "@/sections/realisations/AvantApres";
import Rendus3D from "@/sections/realisations/Rendus3D";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Nos réalisations à Conakry : chantiers avant/après et rendus 3D de nos projets de construction, rénovation et design intérieur.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="D'une idée à un lieu livré."
        image="/images/realisations/construction-agence-apres-1.jpg"
        imageAlt="Agence livrée par Build & Brand Concept, façade de nuit"
      />
      <AvantApres />
      <Rendus3D />
    </>
  );
}

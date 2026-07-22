import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import QuiSommesNous from "@/sections/agence/QuiSommesNous";
import NotreHistoire from "@/sections/agence/NotreHistoire";
import NotreVision from "@/sections/agence/NotreVision";
import NosValeurs from "@/sections/agence/NosValeurs";

export const metadata: Metadata = {
  title: "L'Agence",
  description:
    "Qui sommes-nous, notre histoire dans la sous-région ouest-africaine, notre vision pour la Guinée et les valeurs qui nous tiennent debout.",
};

export default function AgencePage() {
  return (
    <>
      <PageHero
        eyebrow="L'Agence"
        title="Une jeune signature, une exigence ancienne."
        image="/images/manifeste-suite.jpg"
        imageAlt="Suite signée Build & Brand Concept, attention portée à chaque détail"
      />
      <QuiSommesNous />
      <NotreHistoire />
      <NotreVision />
      <NosValeurs />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import PourquoiNousChoisir from "@/sections/contact/PourquoiNousChoisir";
import ContactForm from "@/sections/contact/ContactForm";
import ContactInfo from "@/sections/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Un projet de construction, de rénovation ou de valorisation d'espace ? Parlons-en avec Build & Brand Concept, à Conakry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="D'une idée à une réalisation maîtrisée."
        text="Vous avez un projet de construction, de rénovation ou de valorisation d'espace ? Parlons-en."
        image="/images/entryway-small.jpg"
        imageAlt="Espace d'accueil signé Build & Brand Concept"
      />

      <PourquoiNousChoisir />

      <section className="border-t border-line/10 bg-ink-soft py-section">
        <div className="mx-auto max-w-content px-gutter">
          <SectionHeading n="02" eyebrow="Parlons-en" title="Racontez-nous votre projet." />

          <div className="mt-16 grid gap-16 sm:ml-[4.5rem] sm:grid-cols-[1.6fr_1fr] sm:gap-12">
            <RevealText as="div">
              <ContactForm />
            </RevealText>
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}

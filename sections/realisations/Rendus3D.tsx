import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import RevealImage from "@/components/ui/RevealImage";
import { renders3d } from "@/lib/data";

export default function Rendus3D() {
  return (
    <section className="border-t border-line/10 bg-ink-soft py-section">
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading
          n="02"
          eyebrow="Rendus 3D"
          title="Visualiser un projet avant le premier coup de pioche."
        />
        <RevealText
          as="p"
          className="mt-10 max-w-xl text-base leading-loose text-paper-muted sm:ml-[4.5rem] sm:text-lg"
        >
          Une sélection de visualisations 3D issues de nos études de conception.
        </RevealText>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:ml-[4.5rem] sm:gap-4 lg:grid-cols-3">
          {renders3d.map((render, i) => (
            <div key={render.src} data-cursor data-cursor-text="Voir">
              <RevealImage src={render.src} alt={render.alt} className="aspect-[4/3]" />
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-paper-dim">
                {String(i + 1).padStart(2, "0")} &mdash; Rendu 3D
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

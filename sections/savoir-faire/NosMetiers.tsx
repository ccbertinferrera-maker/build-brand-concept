import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import { metiers } from "@/lib/data";

export default function NosMetiers() {
  return (
    <section className="bg-ink py-section">
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading n="01" eyebrow="Nos métiers" title="Tous les métiers, une seule équipe." />

        <div className="mt-16 grid gap-px overflow-hidden bg-line/10 sm:ml-[4.5rem] sm:grid-cols-3 lg:grid-cols-4">
          {metiers.map((m) => (
            <RevealText key={m.n} as="div" className="bg-ink p-8">
              <span className="section-number font-serif text-lg">{m.n}</span>
              <h3 className="mt-4 font-serif text-xl text-paper">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-muted">{m.text}</p>
            </RevealText>
          ))}
        </div>

        <RevealText
          as="div"
          className="mt-16 border-t border-line/10 pt-10 sm:ml-[4.5rem]"
        >
          <p className="eyebrow mb-3">Une seule chaîne de responsabilité</p>
          <p className="max-w-xl text-base leading-relaxed text-paper-muted sm:text-lg">
            Un interlocuteur unique, du premier croquis à la remise des clés &mdash; pour que
            chaque corps de métier serve un seul et même projet.
          </p>
        </RevealText>
      </div>
    </section>
  );
}

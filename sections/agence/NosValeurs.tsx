import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import { valeurs } from "@/lib/data";

export default function NosValeurs() {
  return (
    <section className="border-t border-line/10 bg-ink-soft py-section">
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading n="04" eyebrow="Nos valeurs" title="Ce qui nous tient debout." />

        <div className="mt-16 grid gap-px overflow-hidden bg-line/10 sm:ml-[4.5rem] sm:grid-cols-2 lg:grid-cols-4">
          {valeurs.map((v) => (
            <RevealText key={v.n} as="div" className="bg-ink-soft p-8">
              <span className="section-number font-serif text-lg">{v.n}</span>
              <h3 className="mt-4 font-serif text-xl text-paper">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-muted">{v.text}</p>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

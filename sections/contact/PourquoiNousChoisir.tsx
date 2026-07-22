import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import { raisons } from "@/lib/data";

export default function PourquoiNousChoisir() {
  return (
    <section className="bg-ink py-section">
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading n="01" eyebrow="Pourquoi nous choisir" title="Sept raisons d'avancer ensemble." />

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:ml-[4.5rem] sm:grid-cols-2">
          {raisons.map((r) => (
            <RevealText key={r.n} as="div" className="flex gap-5 border-t border-line/10 pt-6">
              <span className="section-number shrink-0 font-serif text-2xl">{r.n}</span>
              <div>
                <h3 className="font-serif text-xl text-paper">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-muted">{r.text}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

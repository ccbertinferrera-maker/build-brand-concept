import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import Counter from "@/components/ui/Counter";
import { raisons, stats } from "@/lib/data";

export default function WhyUsTeaser() {
  const preview = raisons.slice(0, 3);

  return (
    <section className="border-t border-line/10 bg-ink-soft py-section">
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading n="02" eyebrow="Pourquoi nous choisir" title="Sept raisons d'avancer ensemble." />

        <RevealText
          as="div"
          className="mt-16 grid grid-cols-2 gap-8 border-y border-line/10 py-10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl text-brass sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-paper-dim">{s.label}</p>
            </div>
          ))}
        </RevealText>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {preview.map((r) => (
            <RevealText key={r.n} as="div" className="border-t border-line/10 pt-6">
              <span className="section-number font-serif text-xl">{r.n}</span>
              <h3 className="mt-3 font-serif text-xl text-paper">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{r.text}</p>
            </RevealText>
          ))}
        </div>

        <Link
          href="/contact"
          data-cursor
          className="group mt-14 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-brass"
        >
          <span className="link-draw-in">Voir les sept raisons</span>
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  );
}

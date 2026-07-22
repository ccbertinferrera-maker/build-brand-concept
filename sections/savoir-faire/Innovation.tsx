import { Flame, Thermometer, Droplet, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import RevealImage from "@/components/ui/RevealImage";
import { innovations } from "@/lib/data";

const icons = [Flame, Thermometer, Droplet, Zap];

export default function Innovation() {
  return (
    <section className="border-t border-line/10 bg-ink-soft py-section">
      <div className="mx-auto max-w-content px-gutter">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
          <div>
            <SectionHeading n="02" eyebrow="Innovation" title="L'intelligence, au cœur de nos projets." />
            <RevealText
              as="p"
              className="mt-10 max-w-xl text-base leading-loose text-paper-muted sm:ml-[4.5rem] sm:text-lg"
            >
              Nous maîtrisons les biodigesteurs, capables de transformer les matières organiques
              d&apos;une fosse septique en biogaz &mdash; une énergie propre, produite directement
              sur place, au service de l&apos;habitat.
            </RevealText>
          </div>
          <RevealImage
            src="/images/lamp-design-1.jpg"
            alt="Innovation énergétique appliquée à l'habitat"
            className="aspect-[4/5] sm:aspect-auto"
          />
        </div>

        <div className="mt-24 sm:ml-[4.5rem]">
          <p className="eyebrow mb-10">Quatre usages, une seule énergie</p>
          <div className="grid gap-10 border-t border-line/10 pt-10 sm:grid-cols-4 sm:gap-6">
            {innovations.map((item, i) => {
              const Icon = icons[i];
              return (
                <RevealText key={item.n} as="div" delay={i * 0.05} className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brass/40 text-brass">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-serif text-lg text-paper">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-muted">{item.text}</p>
                </RevealText>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

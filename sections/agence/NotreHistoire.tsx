import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import Marquee from "@/components/ui/Marquee";
import { partners } from "@/lib/data";

export default function NotreHistoire() {
  return (
    <section className="border-t border-line/10 bg-ink-soft py-section">
      <div className="mx-auto max-w-content px-gutter">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
          <div>
            <SectionHeading
              n="02"
              eyebrow="Notre histoire"
              title={
                <>
                  Une expertise
                  <br />
                  forgée dans la
                  <br />
                  sous-région.
                </>
              }
            />
            <RevealText
              as="p"
              className="mt-10 max-w-xl font-serif text-xl font-light leading-relaxed text-paper sm:ml-[4.5rem] sm:text-2xl"
            >
              Tout commence par un constat simple&nbsp;: à Conakry, trop de projets naissaient
              d&apos;une belle idée et s&apos;achevaient dans l&apos;à-peu-près &mdash; des délais
              qui glissent, des finitions bâclées, des promesses oubliées en cours de chantier.
            </RevealText>
          </div>

          <div className="space-y-8 sm:pt-16">
            <RevealText
              as="p"
              delay={0.1}
              className="text-base leading-loose text-paper-muted sm:text-lg"
            >
              Une poignée d&apos;architectes et de designers a voulu prouver le contraire. Nous
              avons commencé petit &mdash; un chantier, une équipe, une exigence &mdash; et avons
              appris sur le terrain, aux côtés de maçons, de staffeurs et de conducteurs de
              travaux formés à travers l&apos;Afrique de l&apos;Ouest, notamment en Côte
              d&apos;Ivoire.
            </RevealText>

            <RevealText
              as="p"
              delay={0.2}
              className="text-base leading-loose text-paper-muted sm:text-lg"
            >
              Chantier après chantier, cette exigence est devenue une méthode, puis une
              équipe&nbsp;: aujourd&apos;hui composée à plus de 90&nbsp;% de professionnels
              guinéens, réunissant onze corps de métier sous un même toit. Ce que nous
              construisons aujourd&apos;hui, ce sont les lieux qui porteront l&apos;ambition de la
              Guinée de demain.
            </RevealText>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <p className="eyebrow mb-8 text-center">Ils nous ont fait confiance</p>
        <Marquee items={partners} />
        <RevealText
          as="p"
          className="mx-auto mt-10 max-w-md text-center text-sm italic leading-relaxed text-paper-muted"
        >
          AR.Sketch a salué notre apport sur son projet.
          <span className="mt-2 block not-italic text-xs uppercase tracking-[0.14em] text-paper-dim">
            Richmond &mdash; AR.Sketch
          </span>
        </RevealText>
      </div>
    </section>
  );
}

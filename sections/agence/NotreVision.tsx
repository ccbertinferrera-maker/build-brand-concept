import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import RevealImage from "@/components/ui/RevealImage";

const piliers = [
  {
    n: "01",
    title: "Durabilité",
    text: "Des matériaux et des méthodes choisis pour résister au climat et à l'usage, bien au-delà des tendances du moment.",
  },
  {
    n: "02",
    title: "Modernité",
    text: "Des solutions actuelles — énergie, confort, technique — au service d'un habitat guinéen résolument contemporain.",
  },
  {
    n: "03",
    title: "Transmission",
    text: "Former une nouvelle génération de professionnels capables de porter cette exigence bien après nous.",
  },
];

export default function NotreVision() {
  return (
    <section className="relative isolate overflow-hidden border-t border-line/10 bg-ink py-section">
      <RevealImage
        src="/images/view-city-with-buildings-trees.jpg"
        alt="Vue sur la ville et ses constructions, vision d'avenir pour la Guinée"
        className="absolute inset-0 z-0"
        imgClassName="opacity-50"
        parallax
        parallaxStrength={0.12}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/45" />

      <div className="relative z-10 mx-auto max-w-content px-gutter">
        <SectionHeading n="03" eyebrow="Notre vision" title="Bâtir la Guinée de demain." />
        <RevealText
          as="p"
          className="mt-10 max-w-2xl text-base leading-loose text-paper-muted sm:ml-[4.5rem] sm:text-lg"
        >
          Nous voulons accompagner le développement du pays et participer à l&apos;émergence
          d&apos;une architecture plus moderne, durable et mieux pensée, en nous appuyant sur
          l&apos;expérience acquise dans toute la sous-région. Notre vision ne s&apos;arrête pas à
          un chantier livré&nbsp;: elle se construit sur trois exigences que nous portons sur
          chaque projet.
        </RevealText>

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:ml-[4.5rem] sm:grid-cols-3">
          {piliers.map((p) => (
            <RevealText key={p.n} as="div" className="border-t border-paper/15 pt-6">
              <span className="section-number font-serif text-lg">{p.n}</span>
              <h3 className="mt-3 font-serif text-xl text-paper">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{p.text}</p>
            </RevealText>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-28 max-w-content px-gutter">
        <RevealText
          as="blockquote"
          className="text-center font-serif text-3xl font-light italic leading-tight text-paper sm:text-5xl"
        >
          &laquo;&nbsp;Bâtir aujourd&apos;hui les lieux
          <br className="hidden sm:block" /> dont un pays aura besoin demain.&nbsp;&raquo;
        </RevealText>
      </div>
    </section>
  );
}

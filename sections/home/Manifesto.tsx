import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import RevealImage from "@/components/ui/RevealImage";

export default function Manifesto() {
  return (
    <section id="manifeste" className="relative isolate scroll-mt-24 overflow-hidden bg-ink py-section">
      <RevealImage
        src="/images/manifeste-suite.jpg"
        alt="Suite signée Build & Brand Concept — attention portée à chaque détail"
        className="absolute inset-0 z-0"
        imgClassName="opacity-60"
        parallax
        parallaxStrength={0.14}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/35" />

      <div className="relative z-10 mx-auto max-w-content px-gutter">
        <SectionHeading
          n="01"
          eyebrow="Manifeste"
          title="Nous ne construisons pas des bâtiments. Nous façonnons des manières de vivre."
        />
        <RevealText
          as="p"
          className="mt-10 max-w-2xl text-base leading-loose text-paper-muted sm:ml-[4.5rem] sm:text-lg"
        >
          Build &amp; Brand Concept accompagne les projets de construction, de rénovation et de
          valorisation des espaces. De la première intention au dernier détail, nous transformons
          une idée en un lieu pensé, dessiné et bâti pour durer. Un bâtiment n&apos;est jamais une
          fin en soi : il est le cadre d&apos;une vie, d&apos;un travail, d&apos;un investissement.
        </RevealText>
      </div>
    </section>
  );
}

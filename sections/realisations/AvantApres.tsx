import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import RevealImage from "@/components/ui/RevealImage";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { avantApres } from "@/lib/data";

export default function AvantApres() {
  return (
    <section className="bg-ink py-section">
      <div className="mx-auto max-w-content px-gutter">
        <SectionHeading
          n="01"
          eyebrow="Avant / après"
          title="Des lieux transformés, pas seulement rénovés."
        />
        <RevealText
          as="p"
          className="mt-10 max-w-xl text-base leading-loose text-paper-muted sm:ml-[4.5rem] sm:text-lg"
        >
          Faites glisser le curseur pour comparer l&apos;état initial et le résultat livré.
        </RevealText>

        <div className="mt-16 flex flex-col gap-24 sm:ml-[4.5rem]">
          {avantApres.map((project, i) => (
            <div key={project.slug}>
              <div className="mb-6 flex items-baseline gap-4">
                <span className="section-number font-serif text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-paper sm:text-3xl">{project.title}</h3>
              </div>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-paper-muted sm:text-base">
                {project.description}
              </p>

              <RevealText as="div">
                <BeforeAfterSlider
                  before={project.avant.src}
                  after={project.apres.src}
                  beforeAlt={project.avant.alt}
                  afterAlt={project.apres.alt}
                />
              </RevealText>

              {project.etapes.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {project.etapes.map((etape) => (
                    <div key={etape.src}>
                      <RevealImage
                        src={etape.src}
                        alt={etape.alt}
                        className="aspect-[4/3]"
                      />
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-paper-dim">
                        {etape.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

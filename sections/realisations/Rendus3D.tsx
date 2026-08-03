import SectionHeading from "@/components/ui/SectionHeading";
import RevealText from "@/components/ui/RevealText";
import RevealImage from "@/components/ui/RevealImage";
import { renders3dProjects } from "@/lib/data";

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

        <div className="mt-16 flex flex-col gap-20 sm:ml-[4.5rem]">
          {renders3dProjects.map((project, i) => (
            <div key={project.slug}>
              <div className="mb-8 flex items-baseline gap-4">
                <span className="section-number font-serif text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-paper sm:text-3xl">{project.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {project.renders.map((render, j) => (
                  <div key={render.src} data-cursor data-cursor-text="Voir">
                    <RevealImage src={render.src} alt={render.alt} className="aspect-[4/3]" />
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-paper-dim">
                      {String(j + 1).padStart(2, "0")} &mdash; {render.room}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

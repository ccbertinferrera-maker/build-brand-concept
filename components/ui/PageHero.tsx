import ParallaxImage from "@/components/ui/ParallaxImage";
import RevealText from "@/components/ui/RevealText";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate flex h-[62vh] min-h-[440px] w-full items-end overflow-hidden">
      <ParallaxImage src={image} alt={imageAlt} className="absolute inset-0 z-0" strength={0.1} priority />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
      <div className="relative z-10 mx-auto w-full max-w-content px-gutter pb-16">
        <RevealText as="p" className="eyebrow mb-6">
          {eyebrow}
        </RevealText>
        <RevealText as="h1" className="max-w-3xl font-serif text-h1 font-light text-paper">
          {title}
        </RevealText>
        {text && (
          <RevealText as="p" delay={0.2} className="mt-6 max-w-xl text-base text-paper-muted sm:text-lg">
            {text}
          </RevealText>
        )}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import ParallaxImage from "@/components/ui/ParallaxImage";
import RevealText from "@/components/ui/RevealText";
import { tags } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative isolate flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <ParallaxImage
        src="/images/elegant-black-minimal-interior.jpg"
        alt="Intérieur signé Build & Brand Concept"
        className="absolute inset-0 z-0"
        strength={0.12}
        priority
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <div className="relative z-10 mx-auto w-full max-w-content px-gutter pb-20 sm:pb-24">
        <RevealText as="p" className="eyebrow mb-6">
          Conakry, Guinée &middot; 2026
        </RevealText>
        <RevealText
          as="h1"
          className="max-w-4xl font-serif text-display font-light text-paper"
        >
          Architecture, construction et valorisation des espaces.
        </RevealText>
        <RevealText
          as="p"
          delay={0.25}
          className="mt-8 max-w-xl text-base leading-relaxed text-paper-muted sm:text-lg"
        >
          Nous donnons forme aux lieux qui améliorent la façon de vivre, de travailler et
          d&apos;investir.
        </RevealText>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.22em] text-paper-dim">
          {tags.map((t, i) => (
            <span key={t} className="flex items-center gap-5">
              {t}
              {i < tags.length - 1 && <span className="h-1 w-1 rounded-full bg-brass" />}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="#manifeste"
        data-cursor
        className="absolute bottom-10 right-6 z-10 hidden items-center gap-2 text-paper-dim transition-colors hover:text-brass sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Découvrir</span>
        <ArrowDown size={16} className="animate-bounce motion-reduce:animate-none" />
      </Link>
    </section>
  );
}

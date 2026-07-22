"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ParallaxImage from "@/components/ui/ParallaxImage";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CtaBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setSpotlight(true)}
      onMouseLeave={() => setSpotlight(false)}
      className="relative isolate overflow-hidden border-t border-line/10 py-section"
    >
      <ParallaxImage
        src="/images/living-room-minimalist-white.jpg"
        alt="Projet réalisé par Build & Brand Concept"
        className="absolute inset-0 z-0"
        strength={0.15}
      />
      {/* Voile sombre pour rester dans le thème (image en arriere-plan attenuee) */}
      <div className="absolute inset-0 z-0 bg-ink/85" />

      {/* Halo dore qui suit le curseur au survol - effet signature discret */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden transition-opacity duration-700 md:block"
        style={{
          opacity: spotlight ? 1 : 0,
          background:
            "radial-gradient(480px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(var(--color-brass) / 0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-content px-gutter text-center">
        <RevealText
          as="h2"
          className="mx-auto max-w-3xl font-serif text-h2 font-light text-paper"
        >
          Vous avez un projet de construction, de rénovation ou de valorisation d&apos;espace ?
        </RevealText>
        <RevealText as="div" delay={0.2} className="mt-10 flex justify-center">
          <MagneticButton
            as={Link}
            href="/contact"
            className="group flex items-center gap-3 border border-brass bg-brass px-8 py-4 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-brass"
          >
            Parlons-en
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </MagneticButton>
        </RevealText>
      </div>
    </section>
  );
}

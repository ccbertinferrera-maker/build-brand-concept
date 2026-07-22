"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  parallax = false,
  parallaxStrength = 0.15,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  parallaxStrength?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  // Reveal au scroll (voile qui se leve)
  useEffect(() => {
    const wrap = wrapRef.current;
    const mask = maskRef.current;
    if (!wrap || !mask) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(mask, { scaleY: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(mask, { scaleY: 1, transformOrigin: "top" });
      gsap.to(mask, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          once: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  // Parallax optionnel (translation verticale liee au scroll)
  useEffect(() => {
    if (!parallax) return;
    const wrap = wrapRef.current;
    const img = imgWrapRef.current;
    if (!wrap || !img) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -parallaxStrength * 100 },
        {
          yPercent: parallaxStrength * 100,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [parallax, parallaxStrength]);

  const hasPosition = /\b(relative|absolute|fixed|sticky)\b/.test(className || "");

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn(
        "object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]",
        imgClassName
      )}
    />
  );

  return (
    <div
      ref={wrapRef}
      className={cn("group overflow-hidden bg-ink-raised", !hasPosition && "relative", className)}
    >
      {parallax ? (
        <div ref={imgWrapRef} className="absolute inset-x-0 -inset-y-[15%]">
          {image}
        </div>
      ) : (
        image
      )}
      <div ref={maskRef} className="pointer-events-none absolute inset-0 z-10 bg-ink" />
    </div>
  );
}

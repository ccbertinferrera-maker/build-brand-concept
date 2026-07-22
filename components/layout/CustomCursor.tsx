"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      const el = document.elementFromPoint(mouseX, mouseY) as HTMLElement | null;
      const target = el?.closest("[data-cursor]") as HTMLElement | null;
      setActive(!!target);
      setLabel(target?.getAttribute("data-cursor-text") || "");
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-cursor hidden md:block"
      aria-hidden="true"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brass/60 text-center transition-[width,height,background-color] duration-300 ease-out"
        style={{
          width: active ? (label ? 96 : 56) : 32,
          height: active ? (label ? 96 : 56) : 32,
          backgroundColor: active ? "rgb(var(--color-brass) / 0.1)" : "transparent",
        }}
      >
        {label && (
          <span className="px-2 font-sans text-[10px] uppercase tracking-[0.15em] text-paper">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

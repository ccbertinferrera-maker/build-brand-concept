"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORD = "Build & Brand Concept";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const already = typeof window !== "undefined" && sessionStorage.getItem("bbc-intro-seen");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (already) {
      setVisible(false);
      return;
    }

    if (reduceMotion) {
      sessionStorage.setItem("bbc-intro-seen", "1");
      setVisible(false);
      return;
    }

    setVisible(true);
    document.documentElement.style.overflow = "hidden";

    const timer = setTimeout(() => {
      dismiss();
    }, 2600);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("bbc-intro-seen", "1");
    document.documentElement.style.overflow = "";
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-preloader flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] } }}
        >
          <div className="eyebrow mb-6">Conakry, Guinée</div>
          <h1 className="flex flex-wrap justify-center px-6 text-center font-serif text-3xl font-light tracking-tight text-paper sm:text-5xl">
            {WORD.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.035,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </h1>
          <motion.button
            type="button"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-10 text-xs uppercase tracking-[0.2em] text-paper-dim transition-colors hover:text-brass"
          >
            Passer l&apos;intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

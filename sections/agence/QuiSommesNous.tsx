"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ParallaxImage from "@/components/ui/ParallaxImage";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const checklist = [
  "Un interlocuteur unique à chaque étape du projet",
  "Une équipe composée à 90% de professionnels guinéens formés en sous-région",
  "Un contrôle qualité rigoureux, du gros œuvre aux finitions",
  "Un respect strict des délais annoncés, du premier plan à la remise des clés",
];

export default function QuiSommesNous() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-section">
      {/* Image en plein fond de section */}
      <ParallaxImage
        src="/images/interior.jpg"
        alt="Salon intérieur, ambiance signée Build & Brand Concept"
        className="absolute inset-0 z-0"
        strength={0.12}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/45" />

      {/* Glow dore pour la profondeur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/4 z-0 h-[380px] w-[380px] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-brass/25 blur-3xl"
      />

      {/* Badges qui survolent l'image */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 top-10 z-10 rounded-lg border border-line/10 bg-ink-raised/90 px-4 py-3 shadow-xl backdrop-blur sm:right-12 sm:top-16"
      >
        <p className="font-serif text-xl text-brass sm:text-2xl">2020</p>
        <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-paper-dim">Depuis</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 right-6 z-10 rounded-lg border border-line/10 bg-ink-raised/90 px-4 py-3 shadow-xl backdrop-blur sm:bottom-16 sm:right-12"
      >
        <p className="font-serif text-xl text-brass sm:text-2xl">90%</p>
        <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-paper-dim">
          Équipe locale
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-content px-gutter">
        {/* En-tete aligne a gauche */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <SectionHeading
            n="01"
            eyebrow="Qui sommes-nous"
            title="Une équipe jeune, formée sur le terrain."
          />
          <p className="mt-6 max-w-xl text-base leading-loose text-paper-muted sm:ml-[4.5rem] sm:text-lg">
            Build &amp; Brand Concept réunit de jeunes architectes, designers d&apos;intérieur et
            spécialistes autour d&apos;une conviction commune&nbsp;: la qualité se mesure à
            l&apos;attention portée à chaque détail.
          </p>
        </motion.div>

        {/* Texte qui survole l'image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-16 max-w-xl sm:ml-[4.5rem]"
        >
          <h3 className="font-serif text-2xl text-paper sm:text-3xl">
            Une expertise pensée pour durer
          </h3>
          <p className="mt-5 text-base leading-relaxed text-paper-muted">
            Depuis nos premiers chantiers, nous avons fait le choix de la rigueur plutôt que de la
            précipitation, en formant une équipe capable de porter un projet du croquis à la
            remise des clés.
          </p>

          <Link
            href="/savoir-faire"
            data-cursor
            className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-brass"
          >
            <span className="link-draw-in">Voir notre savoir-faire</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerList}
            className="mt-10 space-y-5"
          >
            {checklist.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-brass/40 bg-brass/10 text-brass">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-paper-muted sm:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

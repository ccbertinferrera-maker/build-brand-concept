"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-nav transition-colors duration-500",
        scrolled || open ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-gutter py-5">
        <Link
          href="/"
          data-cursor
          className="flex items-center gap-2 font-serif text-lg tracking-tight text-paper sm:text-xl"
        >
          <Image src="/logo/Logo.png" alt="Logo" width={48} height={48} priority />
          Build <span className="text-brass">&amp;</span> Brand Concept
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor
                className={cn(
                  "link-draw text-sm uppercase tracking-[0.12em] transition-colors",
                  isActive ? "text-brass" : "text-paper/80 hover:text-paper"
                )}
                data-active={isActive}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            data-cursor
            className="group flex items-center gap-2 border border-brass/50 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-brass transition-colors hover:bg-brass hover:text-ink"
          >
            Parlons-en
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          data-cursor
          className="z-nav text-paper md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-nav flex flex-col justify-between bg-ink px-gutter pb-10 pt-6 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-line/10 py-4"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "font-serif text-3xl",
                      pathname === item.href ? "text-brass" : "text-paper"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="eyebrow">Conakry, Guinée &mdash; Architecture · Construction · Design</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1], delay: 0.15 } }}
        exit={{ opacity: 0, transition: { duration: 0.35, ease: [0.65, 0, 0.35, 1] } }}
      >
        <motion.div
          className="pointer-events-none fixed inset-0 z-preloader bg-ink"
          style={{ transformOrigin: "bottom" }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
          exit={{ scaleY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

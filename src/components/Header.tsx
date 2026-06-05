"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      className="relative z-10 pt-10 pb-6 text-center sm:pt-14 sm:pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p className="font-french-serif text-[0.65rem] tracking-[0.45em] text-secondary uppercase sm:text-xs">
        Recueil de poème
      </p>
      <p className="mt-2 font-chinese-serif text-sm tracking-[0.35em] text-secondary/80 sm:text-base">
        诗集
      </p>
    </motion.header>
  );
}

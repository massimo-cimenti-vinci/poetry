"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Language, PoemTranslation } from "@/types/poetry";
import { PoemPhotos } from "@/components/PoemPhotos";

interface PoemDisplayProps {
  year: number;
  poem: PoemTranslation;
  language: Language;
}

export function PoemDisplay({ year, poem, language }: PoemDisplayProps) {
  const isChinese = language === "zh";

  return (
    <article className="relative z-10 w-full max-w-[650px] px-6 text-center sm:px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${year}-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className={`mb-8 font-french-serif text-xs tracking-[0.35em] text-secondary sm:mb-10 sm:text-sm ${
              isChinese ? "font-chinese-serif tracking-[0.2em]" : ""
            }`}
          >
            {/* {year} */}
          </p>

          <h1
            className={`mb-10 font-french-display text-2xl font-light leading-snug text-primary sm:mb-12 sm:text-3xl md:text-[2rem] ${
              isChinese
                ? "font-chinese-serif text-[1.65rem] font-normal tracking-[0.08em] sm:text-[1.85rem]"
                : "tracking-[0.04em]"
            }`}
          >
            {poem.title}
          </h1>

          <div className="relative mx-auto max-w-[520px]">
            <PoemPhotos />

            <div
              className={`poem-body relative z-[1] text-left ${
                isChinese ? "font-chinese-serif" : "font-french-body"
              }`}
            >
            {poem.content.split("\n").map((line, index) => (
              <p
                key={`${index}-${line.slice(0, 8)}`}
                className={`text-[1.05rem] leading-[2.15] text-primary/95 sm:text-lg sm:leading-[2.25] ${
                  line.trim() === "" ? "h-6 sm:h-7" : ""
                } ${isChinese ? "text-[1.1rem] leading-[2.35] tracking-[0.06em] sm:text-[1.15rem]" : "tracking-[0.02em]"}`}
              >
                {line.trim() === "" ? "\u00A0" : line}
              </p>
            ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </article>
  );
}

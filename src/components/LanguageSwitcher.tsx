"use client";

import { motion } from "framer-motion";
import type { Language } from "@/types/poetry";

interface LanguageSwitcherProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({
  language,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div
      className="relative z-10 mb-12 inline-flex rounded-full border border-primary/[0.06] bg-primary/[0.02] p-0.5 shadow-none dark:border-primary/[0.08] dark:bg-primary/[0.03] sm:mb-14"
      role="group"
      aria-label="Language"
    >
      {(["fr", "zh"] as const).map((lang) => {
        const isActive = language === lang;
        const label = lang === "fr" ? "Français" : "中文";
        return (
          <button
            key={lang}
            type="button"
            onClick={() => onLanguageChange(lang)}
            className={`relative px-5 py-2 text-[0.7rem] tracking-[0.08em] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 sm:px-6 sm:text-xs ${
              isActive ? "text-primary" : "text-secondary hover:text-primary/80"
            } ${lang === "fr" ? "font-french-serif" : "font-chinese-serif"}`}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-background shadow-[0_1px_8px_rgba(0,0,0,0.04)] ring-1 ring-primary/[0.05] dark:shadow-[0_1px_12px_rgba(0,0,0,0.25)] dark:ring-primary/[0.08]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 34,
                }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

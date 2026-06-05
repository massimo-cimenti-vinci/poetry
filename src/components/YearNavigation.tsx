"use client";

import { motion } from "framer-motion";

interface YearNavigationProps {
  years: number[];
  activeYear: number;
  onYearChange: (year: number) => void;
}

export function YearNavigation({
  years,
  activeYear,
  onYearChange,
}: YearNavigationProps) {
  return (
    <nav
      className="relative z-10 mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:mb-12 sm:gap-x-10"
      aria-label="Poem year"
    >
      {years.map((year) => {
        const isActive = year === activeYear;
        return (
          <button
            key={year}
            type="button"
            onClick={() => onYearChange(year)}
            className="group relative px-1 py-1 font-french-serif text-sm tracking-[0.12em] text-secondary transition-colors duration-500 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:text-base"
            aria-current={isActive ? "true" : undefined}
          >
            {isActive && (
              <motion.span
                layoutId="year-highlight"
                className="absolute inset-x-0 -inset-y-1 rounded-sm bg-accent/[0.08] dark:bg-accent/[0.12]"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                }}
              />
            )}
            <span
              className={`relative z-10 ${isActive ? "text-primary" : ""}`}
            >
              {year}
            </span>
            {isActive && (
              <motion.span
                layoutId="year-underline"
                className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent/60"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

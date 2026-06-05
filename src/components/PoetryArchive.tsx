"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { defaultYear, poemYears, poems } from "@/data/poems";
import type { Language } from "@/types/poetry";
import { Header } from "@/components/Header";
import { YearNavigation } from "@/components/YearNavigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PoemDisplay } from "@/components/PoemDisplay";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DecorativeLayer } from "@/components/decorations/DecorativeLayer";

export function PoetryArchive() {
  const [activeYear, setActiveYear] = useState(defaultYear);
  const [language, setLanguage] = useState<Language>("fr");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("poetry-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("poetry-theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  const poem = poems[activeYear]?.[language];

  if (!poem) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-0 bg-background" aria-hidden />

      <DecorativeLayer />

      {/* <ThemeToggle isDark={isDark} onToggle={toggleTheme} />  */}

      <motion.div
        className="relative z-10 min-h-screen text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex min-h-screen flex-col items-center px-4 pb-24 pt-2 sm:px-6">
          <Header />

          <main className="flex flex-1 flex-col items-center justify-center">
            <YearNavigation
              years={poemYears}
              activeYear={activeYear}
              onYearChange={setActiveYear}
            />

            <LanguageSwitcher
              language={language}
              onLanguageChange={setLanguage}
            />

            <PoemDisplay year={activeYear} poem={poem} language={language} />
          </main>

          <footer className="mt-auto pt-16 pr-16 text-center ">
            <p className="font-chinese-serif text-[0.6rem] tracking-[0.5em] text-secondary/50">
              Pour mon amour 蒋文菁
            </p>
          </footer>
        </div>
      </motion.div>
    </>
  );
}

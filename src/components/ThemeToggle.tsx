

"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="fixed right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full text-secondary/60 transition-colors duration-500 hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 sm:right-8 sm:top-8"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      {isDark ? (
        <Sun className="h-3.5 w-3.5" strokeWidth={1.25} />
      ) : (
        <Moon className="h-3.5 w-3.5" strokeWidth={1.25} />
      )}
    </motion.button>
  );
}

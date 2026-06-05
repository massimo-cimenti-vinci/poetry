import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--foreground)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        sage: "var(--sage)",
      },
      fontFamily: {
        "french-display": ["var(--font-cormorant)", "Georgia", "serif"],
        "french-serif": ["var(--font-eb-garamond)", "Georgia", "serif"],
        "french-body": ["var(--font-cormorant)", "Georgia", "serif"],
        "chinese-serif": [
          "var(--font-noto-serif-sc)",
          "Source Han Serif SC",
          "Noto Serif SC",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F0F0F",
        sand: "#F4F1EA",
        accent: "#C6A75E",
        muted: "#A89C8C",
        panel: "#171717",
        line: "rgba(244, 241, 234, 0.12)"
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(244,241,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,241,234,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: "#050505",
        ink: "#0b0b0d",
        bone: "#f3eee4",
        champagne: "#d8b874",
        steel: "#9fa5a8",
        oxide: "#a24838",
        moss: "#647064"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0,0,0,.42)",
        line: "inset 0 0 0 1px rgba(255,255,255,.12)"
      }
    }
  },
  plugins: []
};

export default config;

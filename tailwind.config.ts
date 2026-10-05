import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0b",
          900: "#101013",
          850: "#141417",
          800: "#1a1a1e",
          700: "#26262b",
        },
        gold: {
          300: "#e8c97a",
          400: "#d9ab4e",
          500: "#c9973a",
          600: "#a97a2c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

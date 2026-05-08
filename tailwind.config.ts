import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        sand: "#E8DED2",
        brown: {
          50: "#F5F0EB",
          100: "#E8DED2",
          200: "#D4C4B3",
          500: "#9B8577",
          700: "#6B5B4F",
          900: "#3D3128",
        },
        pink: {
          50: "#FDF5F8",
          100: "#FCE9F0",
          300: "#F5C4D8",
          500: "#E89AB8",
          700: "#C97A99",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

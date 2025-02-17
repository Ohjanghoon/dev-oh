/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        gmarket: ["'Gmarket Sans'", "sans-serif"],
        jetbrains: ["'jetBrains Mono'", "sans-serif"],
      },
      colors: {
        light: {
          background: "#e5e7eb",
          text: {
            DEFAULT: "#0b0c0e",
            secondary: "#373d48",
          },
        },

        dark: {
          background: "#1c1c22",
        },

        text: {
          DEFAULT: "var(--text-gray-700)",
          secondary: "#6b7280",
          light: "#e5e7eb",
        },

        "text-dark": "#1c1c22",
        "border-light": "#e5e7eb",
        "border-dark": "#1c1c22",
        "border-accent": "#3a43ff",
        "border-hover": "#2438e5",
        accent: {
          // 50: "#f0f3ff",
          // 100: "#e4e9ff",
          // 200: "#cdd6ff",
          // 300: "#a5b2ff",
          400: "#7280ff",
          500: "#3a43ff",
          hover: "#2438e5",
          // 700: "#0101ff",
          DEFAULT: "#0000c5",
          // 900: "#0202b0",
          // 950: "#000778",
        },
        "text-light": "#FAFAFA",
        "text-hover": "#F5F5FF",
      },
      boxShadow: {
        "light-neumorphism": "6px 6px 20px #a0a2a5, -6px -6px 20px #ffffff",

        "dark-neumorphism": "8px 8px 8px #141418, -8px -8px 8px #24242c;",
        "dark-neumorphism-pressed":
          "inset 8px 8px 8px #141418, inset -8px -8px 8px #24242c;",

        // neumorphism: "6px 6px 16px #a3a3a3, -6px -6px 16px #ffffff",
        // "neumorphism-hover": "4px 4px 10px #a3a3a3, -4px -4px 10px #ffffff",
        // "neumorphism-pressed":
        //   "inset 4px 4px 8px #a3a3a3, inset -3px -3px 8px #ffffff",

        // "neumorphism-blue": "2px 2px 10px #0000C5, -2px -2px 10px #a5b2ff",
        // "neumorphism-blue-hover":
        //   "4px 4px 10px #000080, -4px -4px 10px #4D4DFF",
        // "neumorphism-blue-pressed":
        //   "inset 4px 4px 10px #000080, inset -4px -4px 10px #4D4DFF",
      },
    },
  },
  plugins: [tailwindScrollbar],
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        gmarket: ["'Gmarket Sans'", "sans-serif"],
        jetbrains: ["'jetBrains Mono'", "sans-serif"],
      },
      colors: {
        "background-light": "#e5e7eb",
        "background-dark": "#1c1c22",
        accent: {
          DEFAULT: "#0000C5",
          hover: "#2438e5",
        },
        "text-light": "#FAFAFA",
        "text-hover": "#F5F5FF",
      },
      boxShadow: {
        neumorphism: "6px 6px 16px #a3a3a3, -6px -6px 16px #ffffff",
        "neumorphism-hover": "4px 4px 10px #a3a3a3, -4px -4px 10px #ffffff",
        "neumorphism-pressed":
          "inset 4px 4px 10px #a3a3a3, inset -4px -4px 10px #ffffff",

        "neumorphism-blue": "6px 6px 16px #000080, -6px -6px 16px #4D4DFF",
        "neumorphism-blue-hover":
          "4px 4px 10px #000080, -4px -4px 10px #4D4DFF",
        "neumorphism-blue-pressed":
          "inset 4px 4px 10px #000080, inset -4px -4px 10px #4D4DFF",
      },
    },
  },
  plugins: [tailwindScrollbar],
};

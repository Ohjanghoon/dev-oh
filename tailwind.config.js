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
        pretendard: ["'Pretendard'", "sans-serif"],
      },
      colors: {
        light: {
          primary: "#e5e7eb",
          surface: "#f4f4f5",
          gradient: "#96adcd",
          text: {
            DEFAULT: "#374151",
            secondary: "#4b5563",
            neutral: "#9ca3af",
            light: "#fafafa",
            dark: "#1c1c22",
            hover: "#f5f5ff",
          },
        },

        dark: {
          primary: "#1c1c22",
          surface: "#23232a",
          gradient: "#2b3a55",
          text: {
            DEFAULT: "#d4d4d8",
            dark: "#1c1c22",
          },
        },

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
      },
      boxShadow: {
        "light-neumorphism": "6px 6px 16px #a0a2a5, -6px -6px 16px #ffffff",
        "light-neumorphism-pressed":
          "inset 6px 6px 16px #a0a2a5, inset -6px -6px 16px #ffffff",

        "dark-neumorphism": "6px 6px 16px #141418, -6px -6px 16px #24242c;",
        "dark-neumorphism-pressed":
          "inset 6px 6px 16px #141418, inset -6px -6px 16px #24242c;",
      },
    },
  },
  plugins: [tailwindScrollbar],
  darkMode: "class",
};

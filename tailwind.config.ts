import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        rocket: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-1rem,1rem)" },
        },
        border: {
          "0%": { backgroundPosition: "left bottom" },
          "100%": { backgroundPosition: "right bottom" },
        },
        "border-reverse": {
          "0%": { backgroundPosition: "left top" },
          "100%": { backgroundPosition: "right top" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 10s linear infinite",
        "spin-slower": "spin 20s linear infinite reverse",
        rocket: "rocket 1s ease-in-out infinite alternate",
        border: "border 10s ease-in-out infinite alternate",
        "border-reverse": "border-reverse 10s ease-in-out infinite alternate",
      },
      fontFamily: {
        vazirmatn: ["var(--font-vazirmatn)", ...defaultTheme.fontFamily.sans],
      },
      width: {
        main: "80rem",
      },
      backgroundImage: {
        border: "url('/border.png')",
        "border-reverse": "url('/border-reverse.png')",
      },
      colors: {
        red: "#FF2857",
        sky: "#050C38",
        "light-gray": "#FAFAFD",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

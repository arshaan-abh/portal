import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        main: "80rem",
      },
      colors: {
        red: "#FF2857",
        sky: "#050C38",
      },
      backgroundImage: {
        border: "url('/border.png')",
        "border-reverse": "url('/border-reverse.png')",
      },
      keyframes: {
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
        "spin-slow": "spin 10s linear infinite",
        "spin-slower": "spin 20s linear infinite reverse",
        rocket: "rocket 1s ease-in-out infinite alternate",
        border: "border 10s ease-in-out infinite alternate",
        "border-reverse": "border-reverse 10s ease-in-out infinite alternate",
      },
      fontFamily: {
        vazirmatn: ["var(--font-vazirmatn)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;

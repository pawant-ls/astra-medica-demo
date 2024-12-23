import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#22b6af",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1440px",
        },
      },
      fontFamily:{
        heading:["var(--font-barlow)"],
        body:["var(--font-open_sans)"]
      }
    },
  },
  plugins: [],
} satisfies Config;

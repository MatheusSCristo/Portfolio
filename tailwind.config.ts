import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      fontFamily: {
        "text": "var(--text-font)"
      },
    extend: {
      colors:{
        "backgroundColor":"#C9D1D2",
        "black":"#1F1B1B"
      },
          },
  },
  plugins: [],
};
export default config;

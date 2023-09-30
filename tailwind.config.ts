import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        paragraph: "1rem",
        "d-h1": ["4.1875rem", "4.1875rem"],
        "d-h2": ["3.1875rem", "3.1875rem"],
        "d-h3": ["2.375rem", "2.375rem"],
        "d-h4": ["1.75rem", "1.75rem"],
        "d-h5": ["1.3125rem", "1.3125rem"],
        "m-h1": ["1.8125rem", "2rem"],
        "m-h2": ["1.625rem", "1.8125rem"],
        "m-h3": ["1.4375rem", "1.625rem"],
        "m-h4": ["1.25rem", "1.375rem"],
        "m-h5": ["1.125rem", "1.25rem"],
      },
      colors: {
        primary: {
          "50": "#f2f0ff",
          "100": "#e9e4ff",
          "200": "#d5cdff",
          "300": "#b7a6ff",
          "400": "#9573ff",
          "500": "#753bff",
          "600": "#6714ff",
          "700": "#5800ff",
          "800": "#4a01d6",
          "900": "#3e03af",
          "950": "#240077",
        },
        background: "#ffffff",
        surface: "#e9e9e9",
        "on-background": "#252525",
        "on-surface": "#252525",
        "on-primary": "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

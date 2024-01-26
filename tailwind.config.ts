import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ["1rem", { lineHeight: "1.75" }],
        sm: ["0.75rem", { lineHeight: "1.75" }],
        "d-h1": ["8rem", { lineHeight: "1.2" }],
        "d-h2": ["5.62rem", { lineHeight: "1.2" }],
        "d-h3": ["4rem", { lineHeight: "1.2" }],
        "d-h4": ["2.8125rem", { lineHeight: "1.2" }],
        "d-h5": ["2rem", { lineHeight: "1.2" }],
        "d-h6": ["1.4375rem", { lineHeight: "1.2" }],
        "t-h1": ["5rem", { lineHeight: "1.2" }],
        "t-h2": ["3.8125rem", { lineHeight: "1.2" }],
        "t-h3": ["2.9375rem", { lineHeight: "1.2" }],
        "t-h4": ["2.25rem", { lineHeight: "1.2" }],
        "t-h5": ["1.6875rem", { lineHeight: "1.2" }],
        "t-h6": ["1.3125rem", { lineHeight: "1.2" }],
        "m-h1": ["3.8125rem", { lineHeight: "1.2" }],
        "m-h2": ["3.0625rem", { lineHeight: "1.2" }],
        "m-h3": ["2.4375rem", { lineHeight: "1.2" }],
        "m-h4": ["1.9375rem", { lineHeight: "1.2" }],
        "m-h5": ["1.5625rem", { lineHeight: "1.2" }],
        "m-h6": ["1.25rem", { lineHeight: "1.2" }],
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        haskoy: ["var(--font-haskoy)"],
      },
      colors: {
        primary: {
          "50": "#FFFFFF",
          "100": "#DCD9D9",
          "200": "#C2BFBE",
          "300": "#AAA6A6",
          "400": "#959090",
          "500": "#807C7B",
          "600": "#6E6968",
          "700": "#5D5958",
          "800": "#4D4A49",
          "900": "#3F3D3C",
          "950": "#313030",
        },
      },
    },
  },
  plugins: [],
};
export default config;

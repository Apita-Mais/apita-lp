import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(26, 8, 24)",
        primary: "rgb(151 18 139)",
        foreground: "rgb(255 218 252)",
      },
    },
    fontFamily: {
      inter: "var(--font-default)",
      title: "var(--font-title)",
    },
  },
  plugins: [],
};
export default config;

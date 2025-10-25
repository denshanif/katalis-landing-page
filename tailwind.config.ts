import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C3A77",
          light: "#3B82F6",
          dark: "#082E5B",
        },
        secondary: {
          DEFAULT: "#F4F9FF",
          light: "#EFF6FF",
          dark: "#D1E4FF",
        },
        spacing: {
          '130': '130px',
        },
      },
    },
  },
  plugins: [],
};

export default config;
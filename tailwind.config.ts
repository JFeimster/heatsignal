import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        bone: "#ede9e1",
        blood: "#651c29",
        champagne: "#d8c28c",
        ultraviolet: "#9479ff",
      },
    },
  },
  plugins: [],
};

export default config;

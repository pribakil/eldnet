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
        "eldnet-blue": "#003DA5", // Bleu principal des boutons/liens
        "eldnet-dark": "#0a192f", // Fond sombre pour certaines sections
        "eldnet-gray": "#f8fafc", // Gris très clair pour le fond
      },
    },
  },
  plugins: [],
};
export default config;

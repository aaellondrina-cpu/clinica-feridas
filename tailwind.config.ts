import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta CICATRIX Premium (marrons)
        // primary = Chocolate (textos/títulos/seções) | dark = Expresso | light = bege
        primary: { DEFAULT: "#52301D", dark: "#2D190E", light: "#EFE3D6" },
        // secondary = Gengibre (CTAs / botões / WhatsApp)
        secondary: { DEFAULT: "#B85C24", dark: "#9A4A1C", light: "#F6E6D9" },
        // marrom = tom médio (hero / faixa de credencial)
        marrom: { DEFAULT: "#8A6242", dark: "#5A3A28" },
        // caramelo = detalhes / ícones / suturas da logo
        caramelo: { DEFAULT: "#C59B6A", light: "#EADBC8" },
        neutro: { claro: "#F5F5F5", escuro: "#2D190E" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

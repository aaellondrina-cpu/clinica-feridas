import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta CICATRIX — 3 cores: marrom premium + verde suave + neutros
        primary: { DEFAULT: "#A0826D", dark: "#8A6F5C", light: "#EFE9E4" }, // marrom claro premium
        secondary: { DEFAULT: "#7CB342", dark: "#689F38", light: "#EEF6E5" }, // verde suave
        marrom: { DEFAULT: "#6F5B42", dark: "#5A4A36" }, // marrom escuro (faixas/accents)
        neutro: { claro: "#F5F5F5", escuro: "#333333" },
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

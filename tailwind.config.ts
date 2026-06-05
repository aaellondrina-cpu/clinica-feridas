import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta CICATRIX
        primary: { DEFAULT: "#0052CC", dark: "#003E99", light: "#E3EDFB" }, // azul
        secondary: { DEFAULT: "#00A86B", dark: "#00824F", light: "#E0F5EC" }, // verde
        marrom: { DEFAULT: "#8B7355", dark: "#6F5B42", light: "#EFE9E2" }, // marrom premium
        ouro: "#FFD700",
        neutro: { claro: "#F5F7FA", escuro: "#2A2A2A" },
        alerta: "#FF6B6B",
        destaque: "#FFD700",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["Georgia", "Cambria", "Times New Roman", "serif"], // títulos premium
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

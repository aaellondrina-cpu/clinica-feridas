import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta saúde
        primary: { DEFAULT: "#0066CC", dark: "#004C99", light: "#E6F0FA" }, // azul confiança
        secondary: { DEFAULT: "#00AA66", dark: "#008551", light: "#E6F7EF" }, // verde recuperação
        neutro: { claro: "#F5F5F5", escuro: "#333333" },
        alerta: "#FF6B6B",
        destaque: "#FFD700",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

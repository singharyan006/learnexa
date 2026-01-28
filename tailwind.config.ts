import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary Colors (Cyan CTA)
        primary: "#00AEEF",
        
        // Backgrounds
        "background-main": "#0B1F2A",
        
        // Surface/Cards
        "surface-card": "#132E3A",
        "surface-sidebar": "#1C3B4A",
        
        // Text Colors
        "text-heading": "#E6F1F5",
        "text-muted": "#A9C2CC",
        "text-placeholder": "#6F8F9B",
        
        // Interactive
        "hover-glow": "#3FD4FF",
        
        // Status Colors
        "success": "#2ED573", // Green
        "warning": "#F5A623", // Muted amber
        "error": "#E5533D", // Soft red
        
        // Background Gradient Colors
        "grad-center": "#23617C",
        "grad-mid": "#17435A",
        "grad-outer": "#071D31",
      },
      fontFamily: {
        display: ["Outfit", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;


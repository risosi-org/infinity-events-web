import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07060a",
          2: "#0e0c12",
          3: "#15121a",
        },
        card: "#120f16",
        gold: {
          DEFAULT: "#d4af5c",
          2: "#f5d27a",
          3: "#a8812e",
        },
        text: {
          DEFAULT: "#f4efe6",
          muted: "#a59f94",
          "muted-2": "#76716a",
        },
        line: {
          DEFAULT: "rgba(212, 175, 92, 0.18)",
          2: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        brand: "18px",
        "brand-sm": "10px",
      },
      boxShadow: {
        brand: "0 30px 80px -30px rgba(0, 0, 0, 0.8)",
        gold: "0 10px 40px -10px rgba(212, 175, 92, 0.55)",
        "gold-hover": "0 18px 50px -12px rgba(245, 210, 122, 0.7)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        spinSlow: "spin 18s linear infinite",
        pingSlow: "ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

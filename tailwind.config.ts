import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          soft: "rgb(var(--color-ink-soft) / <alpha-value>)",
          raised: "rgb(var(--color-ink-raised) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--color-paper) / <alpha-value>)",
          muted: "rgb(var(--color-paper-muted) / <alpha-value>)",
          dim: "rgb(var(--color-paper-dim) / <alpha-value>)",
        },
        brass: {
          DEFAULT: "rgb(var(--color-brass) / <alpha-value>)",
          light: "rgb(var(--color-brass-light) / <alpha-value>)",
          dark: "rgb(var(--color-brass-dark) / <alpha-value>)",
        },
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3.2rem, 9vw, 9rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.6rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h2: ["clamp(2.1rem, 4.2vw, 3.6rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.4rem, 2.4vw, 2rem)", { lineHeight: "1.2" }],
        eyebrow: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
      spacing: {
        section: "clamp(5rem, 12vw, 10rem)",
        gutter: "clamp(1.5rem, 6vw, 5rem)",
      },
      maxWidth: {
        content: "1440px",
        prose: "42rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      zIndex: {
        cursor: "200",
        preloader: "300",
        nav: "100",
      },
    },
  },
  plugins: [],
};

export default config;

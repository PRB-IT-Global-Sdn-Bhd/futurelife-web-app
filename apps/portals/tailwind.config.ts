import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fl: {
          green: "var(--fl-green)",
          "green-dark": "var(--fl-green-dark)",
          ink: "var(--fl-ink)",
          muted: "var(--fl-muted)",
          line: "var(--fl-line)",
          "pale-green": "var(--fl-pale-green)",
          "pale-grey": "var(--fl-pale-grey)",
          white: "var(--fl-white)",
          red: "var(--fl-red)",
          "pale-red": "var(--fl-pale-red)",
        },
      },
      maxWidth: {
        "portal-content": "1058px",
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
} satisfies Config;
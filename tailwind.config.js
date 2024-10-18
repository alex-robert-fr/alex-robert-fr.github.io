/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        movingBorder: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        background: "hsl(240, 10%, 3.9%)",
        foreground: "hsl(0, 0%, 98%)",
        muted: "hsl(240, 3.7%, 15.9%)",
        muted_foreground: "hsl(240, 5%, 64.9%)",
        popover: "hsl(240, 10%, 3.9%)",
        popover_foreground: "hsl(0, 0%, 98%)",
        card: "hsl(240, 10%, 3.9%)",
        card_foreground: "hsl(0, 0%, 98%)",
        border: "hsl(240, 3.7%, 15.9%)",
        input: "hsl(240, 3.7%, 15.9%)",
        primary: "hsl(0, 0%, 98%)",
        primary_foreground: "hsl(240, 5.9%, 10%)",
        secondary: "hsl(240, 3.7%, 15.9%)",
        secondary_foreground: "hsl(0, 0%, 98%)",
        accent: "hsl(240, 3.7%, 15.9%)",
        accent_foreground: "hsl(0, 0%, 98%)",
        destructive: "hsl(0, 62.8%, 30.6%)",
        destructive_foreground: "hsl(0, 0%, 98%)",
        ring: "hsl(240, 4.9%, 83.9%)",
      },
    },
  },
  plugins: [],
};

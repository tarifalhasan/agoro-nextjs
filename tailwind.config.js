/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--dark-mode-neutral-40)",
        input: "var(--dark-mode-neutral-40)",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // custom colors

        "neutral-20": "var(--dark-mode-neutral-20)",
        "neutral-30": "var(--dark-mode-neutral-30)",
        "neutral-40": "var(--dark-mode-neutral-40)",
        "neutral-60": "var(--dark-mode-neutral-60)",
        "neutral-50": "var(--dark-mode-neutral-50)",
        "orange-50": "var(--dark-mode-orange-50)",
        "orange-30": "var(--dark-mode-orange-30)",
        danger: "var(--dark-mode-danger)",
        success: "var(--dark-mode-success)",
        "blue-50": "var(--dark-mode-blue-10)",
        "blue-150": "var(--dark-mode-blue-50)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        "title-1": [
          "1rem",
          {
            fontWeight: 500,
            lineHeight: "160%",
          },
        ],
        "title-2": [
          "0.875rem",
          {
            fontWeight: 400,
            lineHeight: "160%",
          },
        ],
        "heading-1": [
          "1.5rem",
          {
            fontWeight: 500,
            lineHeight: "150%",
          },
        ],
        "heading-3": [
          "1.125rem",
          {
            fontWeight: 700,
            lineHeight: "140%",
          },
        ],
        "pragraph-1": [
          "0.75rem",
          {
            fontWeight: 500,
            lineHeight: "160%",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

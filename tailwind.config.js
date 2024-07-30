/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#93c5fd",
        dark: "#111827",
        gray: "#374151",
        light: "#f3f4f6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}

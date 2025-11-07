/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5fbff",
          100: "#e0f2ff",
          200: "#b9e0ff",
          300: "#81c5ff",
          400: "#46a6ff",
          500: "#1C7CFB",
          600: "#0c5ddd",
          700: "#0b4ab0",
          800: "#0e3c8a",
          900: "#122f69"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "glow": "0 0 45px rgba(28, 124, 251, 0.15)"
      }
    }
  },
  plugins: []
};

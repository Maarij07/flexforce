/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E8449", // Dark green
        secondary: "#0D5F33", // Darker green
        dark: "#121212", // Near black
        light: "#E0E0E0" // Light gray for text on dark backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
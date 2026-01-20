/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body text uses Macondo
        sans: ["Macondo", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        // Display font for headings
        bitcount: ['"Bitcount Single"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}


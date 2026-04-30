/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx,css}", // Adicionado para garantir leitura do CSS
  ],
  theme: {
    extend: {
      colors: {
        'metal-dark': '#050505',
        'metal-section': '#111111',
        'blue-metallic': '#0055cc',
        'blue-glow': '#0088ff',
        'silver-industrial': '#cccccc',
      },
    },
  },
  plugins: [],
}
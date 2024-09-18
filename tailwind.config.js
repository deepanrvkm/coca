/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '20px',
        screens: {
          'sm': '680px',
          'md': '760px',
          'lg': '1000px',
          'xl': '1200px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}

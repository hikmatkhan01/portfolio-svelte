/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': {
          DEFAULT: '#C9CFCF',   // Default color
          light: '#E0E6E6',     // Lighter variant
          dark: '#A3A9A9',      // Darker variant
        },
      },
      fontFamily: {
        kaisei: ['"Kaisei Opti"', 'serif'], // Add custom font here
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          default: '#669900',
          hoverD:'#557700',
          hoverL:'#88BB00',
          dark:'#0F172A'
        },
      },
    },
  },
  plugins: [],
};

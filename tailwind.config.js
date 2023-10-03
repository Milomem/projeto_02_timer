/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cinza: {
          100: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },
        verde: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        vermelho: {
          500: '#AB222E',
          700: '#7A1921',
        },
        amarelo: {
          500: '#FBA94C',
        },
      },
    },
  },
  plugins: [],
}

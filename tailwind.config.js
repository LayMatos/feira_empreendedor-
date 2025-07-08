/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['Nexa', 'sans-serif'],
      },
      colors: {
          black: '#000000',
      },
    },
    screens: {
      'xs': '320px', // mobile pequeno
      'sm': '768px', // tablet
      'md': '1024px', // notebook/desktop
      // Mantendo os padrões do Tailwind para compatibilidade
      ...require('tailwindcss/defaultTheme').screens,
    },
  },
  plugins: [],
}


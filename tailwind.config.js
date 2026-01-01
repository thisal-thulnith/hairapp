/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#f5f1ed',
          100: '#e8dfd5',
          200: '#d4c5b3',
          300: '#c5a885',
          400: '#b89775',
          500: '#8B7355',
          600: '#7a6245',
          700: '#6B5644',
          800: '#5a4534',
          900: '#4a3728',
          950: '#3a2818',
        },
        brand: {
          tan: '#A68968',
          'tan-light': '#C5A885',
          'tan-dark': '#8B7355',
          brown: '#6B5644',
          'brown-dark': '#5a4534',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

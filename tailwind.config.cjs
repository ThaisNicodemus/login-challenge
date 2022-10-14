/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      '2sm': 16,
      md: 18,
      '2md': 24,
      lg: 30,
      '2lg': 36,
      '3lg': 48,
      xl: 60,
      '2xl': 64,
      '3xl': 144,
    },
    colors: {
      'black': '#222222',
      'white': '#FFFFFF',
      'gray-200':'#33383D',
      'gray-100': '#1C1D20',
      'secondary-white': '#E0E0E0',
      'red-300': '#FF2D04',
      'red-200': '#C13216',
      'red-100': '#C12D18',
      'primary-yellow': '#E9B425'

    },
    extend: {
      fontFamily: 'MarkPro, sans-serif',
      boxShadow: {
        'shadow': 'inset 5px 5px 15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

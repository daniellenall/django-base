/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/templates/**/*.{html,js}'],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
    'font-bold',
    'bg-blue-800',
      'font-bold',
      'underline'
  ],
  theme: {

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
    extend: {    
      colors: {
        'blur': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
    'font-bold',
    'bg-blue-800',
    'font-bold',
    'underline',
    {
      pattern: /bg-blue-(100|200|300)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
      
  ],
}
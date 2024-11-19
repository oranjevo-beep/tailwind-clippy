/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 26%, 36%)',
        bgBlues: 'rgba(96.9, 115.345, 255, 1)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
    },
  },
  corePlugins: {
    filter: true,
  },
  safelist: ['brightness-50', 'brightness-75', 'brightness-90'],
};

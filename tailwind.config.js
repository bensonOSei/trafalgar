/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.jsx',
    './src/**/*.{jsx,js,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#458ff6',
        'primary-light': '#7aa5f6',
        'primary-dark': '#0d6efd',
        'secondary': '#fb9dd4',
        'secondary-light': '#fbc2e8',
        'secondary-dark': '#fb75c1',
      },  
      fontFamily: {
        'sans': ['Railway', 'sans-serif'],
      },
      borderRadius: {
        'full': '50%',
      }
    },
  },
  plugins: [],
}


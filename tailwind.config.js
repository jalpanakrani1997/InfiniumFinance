/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        centerin: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
        centerout: {
          '0%': { width: '50%' },
          '100%': { width: '0%' },
        }
      },

      animation: {
        centerin: 'centerin 1.2s ease-out forwards',
        centerout: 'centerout 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

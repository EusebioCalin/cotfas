const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'custom-button':
          'inset 2px 2px 2px 0px rgba(255, 255, 255, .5), 7px 7px 20px 0px rgba(0, 0, 0, .1), 4px 4px 5px 0px rgba(0, 0, 0, .1);',
        'before-after-custom-button':
          'box-shadow: 1px 1px 20px 0px rgba(255, 255, 255, .9), 1px 1px 5px 0px rgba(255, 255, 255, .9), 7px 7px 20px 0px rgba(0, 0, 0, .2), 4px 4px 5px 0px rgba(0, 0, 0, .3);',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('/images/h1_hero.png')",
        'hero-small': "url('/images/gallery_2.jpg')",
        'hero2-image': "url('/images/hero_gym.png')",
        'card1-image': "url('/images/card_1.jpg')",
        'card2-image': "url('/images/card_2.jpg')",
        'card3-image': "url('/images/card_3.png')",
        'card4-image': "url('/images/card_4.png')",
        'card5-image': "url('/images/card_5.png')",
        'card-pattern':
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/images/h1_hero.jpg')",
      },
      colors: {
        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-secondary)',
        'color-ternary': 'var(--color-ternary)',
      },
      // animation: {
      //   revShowBlock: 'revShowBlock 1s ease forwards',
      //   revShowMain: 'revShowMain 1s ease forwards',
      // },
      // keyframes: {
      //   revShowMain: {
      //     '0%': { color: transparent, opacity: 0 },
      //     '49%': { color: transparent, opacity: 0 },
      //     '50%': { color: '#000',},
      //   },
      //   revShowBlock: {
      //     '0%': {
      //       left: '0%',
      //       width: '0%',
      //     },

      //     '50%': {
      //       left: '0%',
      //       width: '100%',
      //     },

      //     '100%': {
      //       left: '100%',
      //       width: '0%',
      //     },
      //   },
      // },
    },
  },
  plugins: [],
}

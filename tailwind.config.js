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
        'new-custom-button': 'inset 0 1px 1px 0 rgba(255, 255, 255, .5);',
        'custom-button':
          'inset 2px 2px 2px 0px rgba(255, 255, 255, .5), 7px 7px 20px 0px rgba(0, 0, 0, .1), 4px 4px 5px 0px rgba(0, 0, 0, .1);',
        'before-after-custom-button':
          'box-shadow: 1px 1px 20px 0px rgba(255, 255, 255, .9), 1px 1px 5px 0px rgba(255, 255, 255, .9), 7px 7px 20px 0px rgba(0, 0, 0, .2), 4px 4px 5px 0px rgba(0, 0, 0, .3);',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('/images/hero11.jpg')",
        'hero2-image': "url('/images/hero22.jpg')",
        'card-pattern':
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/images/h1_hero.jpg')",
      },
      colors: {
        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-secondary)',
        'color-ternary': 'var(--color-ternary)',
      },
    },
  },
  plugins: [],
}

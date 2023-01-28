/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#cb4a2a',
      },
      fontFamily: {
        sans: ['var(--aci-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aci-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aci-font-heading)'],
      },
    },
  },
  plugins: [],
};

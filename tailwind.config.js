/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './assets/*.js',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
    './templates/customers/*.json',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: { quicksand: ['Quicksand', 'ui-sans-serif'] },
  },
  plugins: [require('@tailwindcss/typography')],
}

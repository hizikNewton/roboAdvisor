/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        3: 'auto 2px auto',
      },
      gridTemplateRows: {
        4: '318px 300px 2px 318px',
      },
    },
  },
  plugins: [],
};

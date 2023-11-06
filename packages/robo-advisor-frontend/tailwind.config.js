/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        3: "auto 2px auto",
      },
      gridTemplateRows: {
        3: "auto 2px auto",
      },
    },
  },
  plugins: [],
};

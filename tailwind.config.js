/** @type {import('tailwindcss').Config} */
module.exports = {
  layers: {
    components: ["styles/components"],
    utilities: ["styles/typography"],
  },
  content: ["./app/**/*.{js,jsx}", "./app/style/**/*.scss"],
  theme: {
    extend: {
      // add any additional styles or properties here
    },
  },
  plugins: [
    // add any additional plugins here
  ],
};

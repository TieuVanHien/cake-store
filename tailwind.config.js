/** @type {import('tailwindcss').Config} */
module.exports = {
  layers: {
    components: ["styles/components"],
    utilities: ["styles/typography"],
  },
  content: [
    "./app/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      // add any additional styles or properties here
    },
  },
  plugins: [
    // add any additional plugins here
  ],
};

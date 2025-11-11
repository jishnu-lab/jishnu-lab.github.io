// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // add other folders where you use Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Vend Sans"', 'sans-serif'],
        serif: ['"Bodoni Moda"', 'serif'],
      },
    },
  },
  plugins: [],
};

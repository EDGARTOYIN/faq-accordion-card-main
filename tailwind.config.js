/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-desaturated": "hsl(238, 29%, 16%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "v-dark-blue-grayish": "hsl(237, 12%, 33%)",
        "dark-graish-blue": "hsl(240, 6%, 50%)",
        "light-grayish-blue": "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        "default-ff": ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

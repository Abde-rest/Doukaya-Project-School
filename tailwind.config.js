/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCFAEF",
        primaryV2: "#F7BC4B",
        secondary: "#334457",
        Threecolor: "#FFD9AD",
        fourecolor: "#D0E5D9",
      },
    },
  },
  plugins: [],
};

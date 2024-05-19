/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1A202C",
        "dark-2": "#2D3748",
        "dark-6": "#718096",
        "primary-dark": "#060F0A",
        "primary-dark-1": "#112C1D",
        "primary-dark-2": "#173A27",
        "primary-dark-3": "#1D4931",
        primary: "#1a5325",
        "primary-2": "#4DC39E",
        "primary-light": "#6EE7B7",
        "primary-light-2": "#bfdcc5",
        "primary-light-3": "#fbfefd",
        "primary-light-4": "#e9f8f3",
        secondary: "#1c2c7d",
        tertiary: "#280808",
        blue: {
          dark: "#1E3A8A",
        },
        bodyColor: "#464646",
        white: "#FFFFFF",
        gray: "#CCCCCC",
        "gray-1": "#B3B3B3", // Grey-1
        "gray-2": "#f0f0f0", // Grey-2
        // // Add more shades of gray as needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});

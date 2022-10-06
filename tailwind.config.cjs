const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        22: "5.5rem",
        82: "20.5rem",
      },
      fontFamily: {
        inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#0F3971",
        secondary: "#E4752B",
        "primary-light": "#335B92",
      },
    },
  },
  plugins: [],
};

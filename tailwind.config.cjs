const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        13.5: "3.375rem",
        22: "5.5rem",
        82: "20.5rem",
        92: "23rem",
        88: "22rem",
        84: "21rem",
        76: "19rem",
      },
      fontFamily: {
        inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
        vidaloka: ["'Vidaloka'", "vidaloka"]
      },
      colors: {
        primary: "#0F3971",
        secondary: "#E4752B",
        "primary-light": "#335B92",

        "blue-gray": "#bac4d1",
        "intense-blue":"#0e3e74",
        "light-orange":"#e79b68",
        "light-pink":"#eccbb4"

      },
    },
  },
  plugins: [],
};

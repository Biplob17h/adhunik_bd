/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      light: {
        primary: "#C71F66",
      },
    },
  ],
  plugins: [require("daisyui")]
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#003ECB",
        done: "#68CF00",
        "in-progress-900": "#FA3737",
        "in-progress-800": "#F1494A",
        "in-progress-700": "#FEEBEC",
        "gray-100": "#969696",
      },
      fontFamily: {
        helvetica: ["'Helvetica', 'sans-serif'"],
        satoshi: ["Satoshi", "sans-serif"],
        avante: ["Avante Return", "sans-serif"],
      },
    },
  },
  plugins: [],
};

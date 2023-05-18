/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      bgFont: ["BalooPaaji2", "cursive"]
    }
  },
  plugins: [require("daisyui")],
}


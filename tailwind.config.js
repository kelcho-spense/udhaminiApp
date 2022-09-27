module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '60px': '60px',
      }
    },
  },
  plugins: [require("daisyui")],
}

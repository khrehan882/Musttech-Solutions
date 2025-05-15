/** @type {import('windcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

  

    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'], // Add Quicksand as a custom font
        agrandir: ['Agrandir', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customred: "#EC2027"


      },
      // animation: {
      //   'slide-left': 'slide-left 30s linear infinite',
      //   'slide-right': 'slide-right 30s linear infinite',
      // },




    },

  },
  plugins: [],
}


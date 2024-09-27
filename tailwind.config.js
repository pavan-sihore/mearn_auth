/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        blinkerThin:"Blinker-Thin",
        blinkerExtralight:"Blinker-Extralight",
        blinkerLight:"Blinker-Light",
        blinkerRegular:"Blinker-Regular",
        blinkerSemibold:"Blinker-Semibold",
        blinkerBold:"Blinker-Bold",
        blinkerExtrabold:"Blinker-Extrabold",
        blinkerBlack:"Blinker-Black",
      }
    },
    container: {
      center: true,
      padding: '1rem', // Adjust as needed
    },
  },
  plugins: [],
}
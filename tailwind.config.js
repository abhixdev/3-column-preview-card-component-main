/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      sans: ["Lexend Deca", "sans-serif"],
      BigSD: ["Big Shoulders Display", "sans-serif"],
    },
    extend: {
      colors: {
        BrightOrange: "hsl(31, 77%, 52%)",
        DarkCyan: "hsl(184, 100%, 22%)",
        Verydarkcyan: "hsl(179, 100%, 13%)",
        Transparentwhiteparagraphs: "hsla(0, 0%, 100%, 0.75)",
        Verylightgray: "hsl(0, 0%, 95%)",
      },
      fontSize: {
        base: "15px", // Base/default
      },
    },
  },
  plugins: [],
};

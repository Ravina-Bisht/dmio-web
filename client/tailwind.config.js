/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },
      },

      animation: {
        typewriter:
          "typing 3s steps(30,end) infinite alternate, blink .7s step-end infinite",
      },
    },
  },

  plugins: [],
};
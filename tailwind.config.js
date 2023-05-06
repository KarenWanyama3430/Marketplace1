/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
colors:{
darkblue: "rgba(3,62,98,255)",
darkorange:"rgba(250,138,1,255)",
midgrey:"rgba(211,225,231,255)"
},

    },
  },
  plugins: [],
};


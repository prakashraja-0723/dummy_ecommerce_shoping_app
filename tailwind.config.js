/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-12": "calc(100vh - 48px)",
      },
      textColor: {
        primary: "#F9C75D",
        secondary: "#FFE7A5",
      },
      backgroundColor: {
        primary: "#F9C75D",
        secondary: "#FFE7A5",
        footer: "#343434",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(228,232,244,.1) 0%, rgba(54,54,54,1) 120%),url('hero.jpg')",
        "hero-gradient-desktop":
          "linear-gradient(135deg, rgba(228,232,244,.1) 0%, rgba(54,54,54,.5) 120%),url('hero.jpg')",
        collection: `linear-gradient(90deg, rgba(23,32,44,.8) 0%, rgba(54,54,54,.7) 120%),url('collection.jpg')`,
        cart: `linear-gradient(90deg, rgba(20,0,0,.7) 0%, rgba(23,44,84,.6) 120%),url('cart.jpg')`,
        "highlight-1": `linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(163,163,163,0.54) 40%, rgba(0,0,0,0.2) 100%)`,
        "highlight-2": `linear-gradient(-45deg, rgba(255,255,255,0.38) 0%, rgba(163,163,163,0.54) 40%, rgba(0,0,0,0.2) 100%)`,
      },
    },
  },
  plugins: [],
};

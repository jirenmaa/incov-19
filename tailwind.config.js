module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#092233"
      }
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      navy: "#0C293D",
      "navy-darker": "#092233",
    }),
    height: {
      header: '20rem',
      article: '24.625rem',
    },
    width: {
      "76": "19rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

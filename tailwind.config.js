module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        555: "rgba(85, 85, 85, 1)",
        333: "rgba(51, 51, 51, 1)",
        888: "rgba(136, 136, 136, 1)",
      },
      maxWidth: {
        1366: "1366px",
      },
      backgroundImage: (theme) => ({
        search: "url('./images/search.svg')",
        startfield: "url('./images/starfield.jpg')",
      }),

      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ["Open Sans"],
        nav: [
          '"Titillium Web"',
          '"Helvetica Neue"',
          '"Helvetica"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

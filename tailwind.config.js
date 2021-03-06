module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        555: "rgba(85, 85, 85, 1)",
        333: "rgba(51, 51, 51, 1)",
        888: "rgba(136, 136, 136, 1)",
        newblue: "rgba(57, 113, 158, 1)",
        bottomBlue: "rgba(21, 65, 140, 1)",
        cardBlue: "rgba(93, 127, 185,1)",
      },
      color: {
        footerBlue: "rgba(93, 127, 185, 1)",
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
        titilium: [
          '"Titillium Web"',
          '"Helvetica Neue"',
          '"Helvetica"',
          "Arial",
          "sans-serif",
        ],
        helvetica: [
          '"Helvetica Neue"',
          '"Titillium Web"',
          '"Helvetica"',
          "Arial",
          "sans-serif",
        ],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lx: "1145px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

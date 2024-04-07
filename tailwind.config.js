const config = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#5A5A5A",
        tertiary: "#7D8995",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg2.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;

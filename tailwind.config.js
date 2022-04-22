module.exports = {
  mode: "jit",
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
    darkMode: 'class',
}

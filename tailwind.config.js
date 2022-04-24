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
            noto: ["Noto Sans", "sans-serif"],
        },
        extend: {
            colors: {
                "pink": "#E2336B",
                "nav-gray": "#F9F9F9",
                "dar-nav-gray": "#3C3F51",
                "item-black": "#262626",
                "oramge": "#FCAC46",
                "dark-gray": "#282A34",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};

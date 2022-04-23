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
                "pink": "#EA4C89",
                "nav-gray": "#F9F9F9",
                "item-black": "#262626",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};

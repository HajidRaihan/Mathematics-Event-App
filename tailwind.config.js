/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#168F38",
                secondary: "#73C088",
            },
        },
    },
    daisyui: {
        themes: [],
    },
    plugins: [require("daisyui")],
};

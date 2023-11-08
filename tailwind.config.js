/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    plugins: ["prettier-plugin-tailwindcss"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            mdlg: "900px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontFamily: {
                Roboto: ["Roboto-Regular", "Helvetica", "sans-serif"],
            },
        },
    },
    plugins: [],
};

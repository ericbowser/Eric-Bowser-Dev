/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./public/*.{html, js}",
        "./build/*.{html, js}"],
    theme: {
        extend: {
            colors: {
                'custom-color': '#ff6347', // This is Tomato color
            },
        },
    },    plugins: [],
}
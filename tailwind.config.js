/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}","./**/*.{html,js}","./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "1rem",
                    lg: "1rem",
                    xl: "2rem",
                    "2xl": "4rem",
                },
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
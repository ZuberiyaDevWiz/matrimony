/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                success: '#00C0A1',
                danger: '#ff0038',
                warning: '#FAD02C',
                info: '#42bfdd',
                primary: {
                    background: '#a50000',
                    text: '#fff',
                },
                secondary: {
                    background: '#e7e7e7',
                    text: '#9ca3af',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};

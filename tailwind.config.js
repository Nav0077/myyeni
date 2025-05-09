// tailwind.config.js
module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 15s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};


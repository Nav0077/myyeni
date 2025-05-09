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
                    '0%': { transform: 'translateX(100%)' }, // Start from right
                    '100%': { transform: 'translateX(-100%)' }, // End at left
                },
            },
        },
    },
    plugins: [],
};


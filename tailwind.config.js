module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Add your project folder
    './pages/**/*.{js,ts,jsx,tsx}',  // Add this line for Next.js pages folder
    './components/**/*.{js,ts,jsx,tsx}',  // If you have components
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',  // Animation name and speed
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },  // Start from right
          '100%': { transform: 'translateX(-100%)' }, // End at left
        },
      },
    },
  },
  plugins: [],
}

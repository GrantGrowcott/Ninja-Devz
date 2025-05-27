module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { backgroundPositionX: '0%' },
          '100%': { backgroundPositionX: '200%' },
        },
      },
      animation: {
        wave: 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
};

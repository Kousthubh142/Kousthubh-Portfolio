// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(170, 168, 160, 0.4) 0%, rgba(244, 238, 224, 0.2) 50%), linear-gradient(141.27deg, rgba(122, 107, 94, 0.1) 50%, rgba(170, 168, 160, 0.35) 100%)',
      },
    },
  },
  plugins: [],
};

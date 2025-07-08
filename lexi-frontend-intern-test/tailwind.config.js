/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        chat: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",   
        },
      },
    },
  },
  plugins: [],
};

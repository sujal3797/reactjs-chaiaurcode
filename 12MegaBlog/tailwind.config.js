/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F8F7F4', // A warm, off-white
        'primary-text': '#1a1a1a', // A dark, rich black
        'secondary-text': '#575757', // A softer gray for subtitles
        'accent': '#E57373', // A muted, stylish red for accents
        'accent-hover': '#D32F2F', // A darker red for hover effects
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
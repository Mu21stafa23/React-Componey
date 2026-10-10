/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // The site's own blue for headings and links, between Tailwind's blue and indigo.
        brand: { DEFAULT: '#2f4ac6', deep: '#22379c', soft: '#e8ecfb' },
        night: { DEFAULT: '#111827', soft: '#1f2937' },
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', '"IBM Plex Sans Arabic"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', '"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

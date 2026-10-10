/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#0e4a3b', deep: '#0a382d' },
        sage: '#f3f6f1',
        leaf: '#dbe8d9',
        line: '#c3d1c3',
        ink: '#17201c',
        mute: '#55635b',
        flame: { DEFAULT: '#d8431f', deep: '#b5340f', soft: '#ffe3da' },
        moon: '#f4edb8',
      },
      fontFamily: {
        display: ['Changa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Readex Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

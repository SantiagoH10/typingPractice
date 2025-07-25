/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 'ubuntu-mono': ['"Ubuntu Mono"', 'monospace'] },
      colors: {
        navy: '#0D173F',
        ccred: '#FF0000',
      },
    },
  },
  plugins: [],
}

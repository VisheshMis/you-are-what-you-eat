/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F3EDE2',
          300: '#E8DEC9',
          400: '#D5C4A3',
        },
        culinary: {
          dark: '#142217',
          deep: '#1D3323',
          moss: '#2E5037',
          leaf: '#437651',
          mint: '#D8E8DC',
          accent: '#FF5E36',
          warmAmber: '#E69500',
          citron: '#E5FF7F',
        }
      },
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'soft-lift': '0 12px 30px -10px rgba(20, 34, 23, 0.08), 0 4px 12px -2px rgba(20, 34, 23, 0.04)',
        'glow-accent': '0 0 25px -5px rgba(255, 94, 54, 0.35)',
        'glow-mint': '0 0 25px -5px rgba(67, 118, 81, 0.25)',
      }
    },
  },
  plugins: [],
}

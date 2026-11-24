/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'nav': '900px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          2: '#141414',
          3: '#1F1F1F',
        },
        'line-dark': '#262626',
        white: '#FFFFFF',
        paper: '#FAFAF7',
        line: '#E8E8E3',
        muted: {
          DEFAULT: '#6B6B66',
          dark: '#A3A39B',
        },
        yellow: {
          50: '#FFFCEB',
          100: '#FFF8D6',
          500: '#FFD60A',
          600: '#FFC800',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        input: '12px',
        card: '20px',
        panel: '28px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.04)',
        md: '0 8px 30px rgba(0,0,0,0.06)',
        lg: '0 24px 60px rgba(0,0,0,0.10)',
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

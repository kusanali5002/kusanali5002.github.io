/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sumeru: {
          50: '#f4faf5',
          100: '#e5f5ea',
          200: '#cce9d6',
          300: '#a3d6b6',
          400: '#6fbc90',
          500: '#489f6e',
          600: '#358156',
          700: '#2c6746',
          800: '#265239',
          900: '#1f4430',
          950: '#0c2418',
        },
        nahida: {
          light: '#eef8f2',
          mint: '#a8e6cf',
          leaf: '#4aa068',
          deep: '#1e432d',
          gold: '#dfb75c',
          goldLight: '#fcf4d9',
          darkBg: '#0a120e',
          darkSurface: '#121f18',
          darkBorder: '#1e3327',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f4efe2',
          300: '#eae0cb',
          900: '#2d271e',
        }
      },
      fontFamily: {
        serif: ['"HYWenHei Extended"', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

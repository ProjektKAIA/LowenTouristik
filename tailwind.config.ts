// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY (Blue) - Basis: #2A5F6F
        primary: {
          DEFAULT: '#2A5F6F',
          50: '#E8F1F3',
          100: '#D1E3E7',
          200: '#A3C7CF',
          300: '#75ABB7',
          400: '#478F9F',
          500: '#2A5F6F',
          600: '#224C59',
          700: '#193943',
          800: '#11262D',
          900: '#081317',
        },
        // SECONDARY (Ochre) - Basis: #E8A756
        secondary: {
          DEFAULT: '#E8A756',
          50: '#FDF8F0',
          100: '#FBF1E1',
          200: '#F7E3C3',
          300: '#F3D5A5',
          400: '#EFC787',
          500: '#E8A756',
          600: '#D68F38',
          700: '#B5762A',
          800: '#8A5920',
          900: '#5F3C16',
        },
        // ACCENT RED - Basis: #C44536
        'accent-red': {
          DEFAULT: '#C44536',
          50: '#FCE9E7',
          100: '#F9D3CF',
          200: '#F3A79F',
          300: '#ED7B6F',
          400: '#E74F3F',
          500: '#C44536',
          600: '#9D372B',
          700: '#762920',
          800: '#4F1B15',
          900: '#280E0B',
        },
        // ACCENT GREEN - Basis: #2C5F3C
        'accent-green': {
          DEFAULT: '#2C5F3C',
          50: '#E8F3EC',
          100: '#D1E7D9',
          200: '#A3CFB3',
          300: '#75B78D',
          400: '#479F67',
          500: '#2C5F3C',
          600: '#234C30',
          700: '#1A3924',
          800: '#122618',
          900: '#09130C',
        },
        // NEUTRAL COLORS
        neutral: {
          cream: '#F5F1E8',
          brown: '#4A3C2E',
        },
      },
      fontFamily: {
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        handwritten: ['var(--font-caveat)', 'cursive'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '900' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.25', fontWeight: '700' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['1.5rem', { lineHeight: '1.35', fontWeight: '700' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.625', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.12)',
        'hard': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
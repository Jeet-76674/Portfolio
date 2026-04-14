/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0d0d0d',
          secondary: '#111111',
          card: '#181818',
        },
        accent: {
          DEFAULT: '#ff5533',
          hover: '#ff6644',
          glow: 'rgba(255, 85, 51, 0.15)',
          muted: 'rgba(255, 85, 51, 0.1)',
        },
        txt: {
          primary: '#ffffff',
          secondary: '#999999',
          muted: '#555555',
        },
        border: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        name: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        'rotate-border': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'skill-fill': {
          '0%': { width: '0%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite alternate',
        'float-slow': 'float-slow 8s ease-in-out infinite alternate',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'rotate-border': 'rotate-border 8s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.4s ease-out forwards',
        'modal-in': 'modal-in 0.2s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
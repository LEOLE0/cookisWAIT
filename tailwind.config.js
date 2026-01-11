/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        chocolate: {
          primary: 'var(--primary-chocolate)',
          secondary: 'var(--secondary-chocolate)',
        },
        beige: {
          primary: 'var(--primary-beige)',
          secondary: 'var(--secondary-beige)',
        },
        accent: {
          gold: 'var(--accent-gold)',
          brown: 'var(--accent-brown)',
        }
      },
      fontFamily: {
        headline: ['var(--font-headline)'],
        body: ['var(--font-body)'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-up': 'scaleUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
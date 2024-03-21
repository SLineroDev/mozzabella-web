import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        'color-light': 'var(--color-light)',
        'color-dark': 'var(--color-dark)',
        'accent-primary': 'var(--accent-primary)',
        'accent-primary-state': 'var(--accent-primary-state)'
      },
      fontFamily: {
        sans: ['"Inter Variable", sans-serif'],
        serif: ['"Merriweather", serif']
      }
    }
  }
} satisfies Config;

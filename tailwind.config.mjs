/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-custom1': 'bounce-custom1 1.5s infinite',
        'bounce-custom2': 'bounce-custom2 1.5s infinite',
      },
      keyframes: {
        'bounce-custom1': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-custom2': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        spacing: {
          'space-x-2': '0.5rem',
        },
      },
    },
  },
  plugins: [],
};

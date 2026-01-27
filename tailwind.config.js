/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f5f7ff',
          100: '#e8edff',
          200: '#cbd6ff',
          300: '#9db1ff',
          400: '#6f8cff',
          500: '#4b6bff',
          600: '#354fe6',
          700: '#2b3db3',
          800: '#242f80',
          900: '#1f275c'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        glow: '0 20px 60px rgba(79, 70, 229, 0.2)'
      }
    }
  },
  plugins: []
};

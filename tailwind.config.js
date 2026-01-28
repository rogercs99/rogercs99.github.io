/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          '"Segoe UI"',
          'system-ui',
          'sans-serif'
        ],
        mono: ['"Courier New"', 'Courier', 'monospace']
      },
      colors: {
        ink: {
          900: '#1a1a1a',
          800: '#2e2e2e',
          300: '#d9d9d9',
          200: '#facdcd',
          100: '#e6e4d8',
          50: '#fa4777'
        }
      }
    }
  },
  plugins: []
};

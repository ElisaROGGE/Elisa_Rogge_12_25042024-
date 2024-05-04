export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            light: '#4da6ff',
            DEFAULT: '#0B84FF',
            dark: '#0066cc',
        },
        secondary: {
            light: '#f39e58',
            DEFAULT: '#ed7410',
            dark: '#bf5d0d',
        },
    },
    },
  },
  plugins: [],
}
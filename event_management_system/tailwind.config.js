/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'haylard': ['haylard-display', 'ui-monospace', 'SFMono-Regular'],
      'poppins': ['poppins-font', 'ui-monospace', 'SFMono-Regular']
    }
  },
  plugins: [],
}


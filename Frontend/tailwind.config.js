/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgYellow': '#fdf7e7',

        'bgYellow1': '#fbefd0',
        'bgYellow2': '#fcd997',
        'textBlue': '#1a283f',
        'bgBlue1': '#77acb5',
        'bgBlue2': '#a6cdd4',
      }
    },
  },
  plugins: [],
}


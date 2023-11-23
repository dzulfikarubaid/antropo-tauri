/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'dongker': '#0d0624',
        'teks': 'black',
        'subteks': 'black',
      },
    },
  },
  plugins: [],
}


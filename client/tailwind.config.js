/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{

        'primary': "#14131A",
        'secondary': '#1C1B23',
        'tri' : '#fca311'

      },

      fontFamily:{

        "inter": ["Inter", "sans-serif"]

      }

    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'headerBackground': "url('/home/mobile/image-header.jpg')",
      },
    },
  },
  plugins: [],
};

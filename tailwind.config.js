/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
             'hero-pattern':
          "linear-gradient(to right bottom, rgba(255, 0, 255, .9), rgba(255, 0, 255, 0.3)), url('assets/ugc.jpg')",
        'service-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/gymgirl1.png')",

        'gallery-pattern1': "url('assets/img-12.jpg')",

        'gallery-pattern2': "url('assets/img-14.jpg')",

        'gallery-pattern3': "url('assets/img-19.jpg')",

        'gallery-pattern4': "url('assets/img-16.jpg')",

        'gallery-pattern5': "url('assets/img-17.jpg')",

        'footer-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/img-7.jpg')",

      },
    },
    keyframes: {
      rotate: {
        '0%': { transform: 'perspective(1000px) rotateY(0deg)'},
        '100%': { transform: 'perspective(1000px) rotateY(360deg)'}
      }
    },
    animation: {
      rotate: 'rotate 30s linear infinite',
    }
  
 
  },
  plugins: [],
}

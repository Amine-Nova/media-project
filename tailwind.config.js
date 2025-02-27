module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // This makes sure Tailwind looks at all your files for class names
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // Adding Poppins font family
        },
      },
    },
    plugins: [],
  }
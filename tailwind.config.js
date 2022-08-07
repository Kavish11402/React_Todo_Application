module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:
          {
              "8xl": '88rem',
              "9xl": '96rem',
              "10xl": '104rem',
              "11xl": '112rem',
              "12xl": '120rem'
          }

    },
  },
    plugins: [
        // ...
        require('@tailwindcss/forms'),
    ]
}
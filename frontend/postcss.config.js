module.exports = {
  plugins: [
    require('postcss-import'), // v13 broken, use ^12.0.1
    require('tailwindcss'),
    require('autoprefixer'), // v10 broken, use ^9.8.6
  ],
};

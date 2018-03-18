const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: [
        'ie >= 10',
        'ff >= 29',
        'opera >= 21',
        'safari >= 6',
        'chrome >= 34',
        'android >= 4',
        'ios >= 6',
      ],
    }),
  ],
};

const path = require('path');

module.exports = {
  entry: './dist/prod-webcomponent.js',
  output: {
    filename: 'prod-embedcomponent.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
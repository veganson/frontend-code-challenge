import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      js: path.resolve('src/js'),
      css: path.resolve('src/css'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'McMakler',
      template: 'index.html',
    }),
  ],
  devtool: 'sourcemap',
};

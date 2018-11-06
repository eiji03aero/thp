const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathResolver = pathName => path.resolve(__dirname, '../', pathName);

module.exports = {
  entry: [
    pathResolver('client/index.js'),
  ],
  output: {
    path: pathResolver('build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolver('client/index.html'),
    }),
  ],
};

const webpack = require('webpack');
const path = require('path');

const pathResolver = pathName => path.resolve(__dirname, '../', pathName);

module.exports = {
  devtool: 'source-map',
  entry: [
    pathResolver('client/index.js'),
  ],
  output: {
    path: pathResolver('public'),
    filename: 'build/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: 'tsconfig.client.json'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

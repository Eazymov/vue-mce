const path = require('path')
const webpack = require('webpack')

const pkg = require('../package.json')

const banner =
  '/*!\n' +
  ' * vue-mce v' + pkg.version + '\n' +
  ' * (c) 2017 - Present, Eduard Troshin\n' +
  ' * Released under the MIT License.\n' +
  ' */'

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    library: 'vue-mce',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      package: path.resolve(__dirname, '..', './'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            test: /\.sass$/,
            laoder: 'style-loader!css-loader!sass-loader',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({ banner }),
  ],
}

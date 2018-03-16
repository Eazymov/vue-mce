const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const pkg = require('../package.json')

const banner =
  '/*!\n' +
  ' * vue-mce v' + pkg.version + '\n' +
  ' * (c) 2017 - Present, Eduard Troshin\n' +
  ' * Released under the MIT License.\n' +
  ' *'

module.exports = merge(baseConfig, {
  entry: {
    'vue-mce.web': './src/index.js',
  },
  plugins: [new UglifyJSPlugin(), new webpack.BannerPlugin({ banner })],
  externals: {
    vue: 'Vue',
  },
})

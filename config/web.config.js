const webpack = require('webpack')
const merge = require('webpack-merge')

const pkg = require('../package.json')
const baseConfig = require('./base.config.js')

// prettier-ignore
const banner =
  'vue-mce v' + pkg.version + '\n' +
  '(c) 2017 - Present, Eduard Troshin\n' +
  'Released under the MIT License.'

module.exports = merge(baseConfig, {
  entry: {
    'vue-mce.web': './src/index.js',
  },
  output: {
    library: 'VueMce',
    libraryTarget: 'window',
  },
  plugins: [new webpack.BannerPlugin({ banner })],
  externals: {
    vue: 'Vue',
  },
})

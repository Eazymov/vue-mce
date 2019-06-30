const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
  entry: {
    index: './test/e2e/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../test/e2e/dist'),
    libraryTarget: 'window',
  },
})

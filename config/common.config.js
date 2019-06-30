const merge = require('webpack-merge')

const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
  entry: {
    'vue-mce.common': './src/vue-mce.js',
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: {
    vue: 'Vue',
  },
})

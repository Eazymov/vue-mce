const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: {
    'vue-mce.common': './src/vue-mce.js',
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  plugins: [new UglifyJSPlugin()],
  externals: {
    vue: 'Vue',
  },
})

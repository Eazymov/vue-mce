const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  entry: {
    'vue-mce.common': './src/vue-mce.ts',
  },
});

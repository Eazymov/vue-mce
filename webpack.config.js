const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./src/vue-mce.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue-mce.min.js",
    library: "vue-mce",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin({}),
  ],
};

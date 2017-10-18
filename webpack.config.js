const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/vue-mce.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue-mce.js",
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
};

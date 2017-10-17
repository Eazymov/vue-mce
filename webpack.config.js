const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/vue-mce.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue-mce.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            js: 'babel-loader',
          },
        },
      },
    ]
  },
  plugins: [
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),*/
  ],
};

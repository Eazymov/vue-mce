const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    library: "vue-mce",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: ['.js.', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }, {
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
    ]
  },
};

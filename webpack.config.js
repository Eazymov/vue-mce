const path = require("path");

module.exports = {
  entry: "./src/vue-mce.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
};

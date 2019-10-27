const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development", // doesn't minify code when in development mode
  devtool: "eval-source-map", // show the actual file path is easy to debug
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build")
  }
});
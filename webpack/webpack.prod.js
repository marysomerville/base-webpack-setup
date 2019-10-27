const path = require("path");
const common = require("./webpack.common");
//* merge is used to include the webpack common setup
const merge = require("webpack-merge");
//* cleanwebpack is used to tidy up the build folder so new hashed files are only there and the old ones deleted
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production", // does minify code ready for live
  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "../build")
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
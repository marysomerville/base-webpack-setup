const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

//* Webpack will always look for a folder called src. So that is why we don't need to change the paths

module.exports = {
  entry: {
    main: "./src/js/index.js", // you can have another entry point if you wanted to have vendor js files for instance
    // vendor: "./src/js/vendor.js",
  },
  plugins: [
    // htmlwebpack for doing the html pages so it includes hashed js file
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [{
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, // Step 4. Extract css into files
          // "style-loader", // Step 4. Inject styles into dom
          {
            loader: 'css-loader', // Step 3. Turns css into commonjs
          }, {
            loader: 'postcss-loader', // Step 2. autoprefix 
          }, {
            loader: 'sass-loader', // Step 1. Turns sass into css
            options: { // allow @import scss files
              sassOptions: {
                importer: globImporter(),
              }
            },
          },
          {
            // Imports resources into all SCSS files.
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/scss/resources/variables/*.scss'),
                path.resolve(__dirname, '../src/scss/resources/functions/*.scss'),
                path.resolve(__dirname, '../src/scss/resources/mixins/*.scss'),
                path.resolve(__dirname, '../src/scss/resources/helpers/*.scss'),
              ]
            },
          },
        ]
      },
      {
        test: /\.html$/, // 
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/, // if there is an image file used in the html copy it over to the build
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    extensions: ['.js', '.jsx', '.scss'],
  }
};
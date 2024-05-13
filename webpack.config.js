'use strict'

const path = require('path');
const glob = require("glob");
const autoprefixer = require('autoprefixer');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

const PATHS = {
  src: path.join(__dirname, "templates"),
};

module.exports = {
  mode: 'development',
  watchOptions: {
    // Set polling so watch works in docker.
    poll: 1000,
  },
  entry: WebpackWatchedGlobEntries.getEntries(
    [
      path.resolve(__dirname, 'assets/js/*.js'),
      path.resolve(__dirname, 'assets/scss/*.scss')
    ]
  ),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/dist')
  },
  plugins: [
    // Output CSS to its own file.
    new miniCssExtractPlugin({
      filename: '[name].css',
    }),
    new WebpackWatchedGlobEntries(),
    // Purge CSS of any unused styles.
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}

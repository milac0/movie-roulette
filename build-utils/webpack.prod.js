const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        extractComments: false
      })],
    },
    plugins: [
        new OptimizeCssAssetsPlugin(),
        new Dotenv({
            path: './.env.production'
        })
    ],
    devServer: {
      contentBase: './dist',
    }
  };
  
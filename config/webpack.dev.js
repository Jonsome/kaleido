const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const webpack = require('webpack')
const merge = require('webpack-merge')

const commonWebpackConfig = require('./webpack.common')

const devWebpackConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('../src'),
    open: true,
    hot: true,
  },
}

module.exports = merge(commonWebpackConfig, devWebpackConfig)

const merge = require('webpack-merge')

const commonWebpackConfig = require('./webpack.common')

const prodWebpackConfig = {
  mode: 'production',
}

module.exports = merge(commonWebpackConfig, prodWebpackConfig)

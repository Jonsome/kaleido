const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    kaleido: [resolve('../src/index.js')],
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          { loader: 'svgo-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.ts', '.jsx', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html'),
      filename: 'index.html',
    }),
  ],
}

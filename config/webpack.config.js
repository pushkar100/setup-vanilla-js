const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const modeConfig = (mode) => require(`./webpack.${mode}.js`)()

module.exports = ({ mode }) => {
  return webpackMerge(
    {
      mode,
      entry: './src/index.js',
      module: {
        rules: [
          {
            test: /\.(png|jpg|jpeg|svg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000, // Limit is 10KB
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Vanilla JS Project',
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
          VERSION: JSON.stringify('1.0.0'),
        }),
      ],
    },
    modeConfig(mode)
  )
}

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: path.join(__dirname, '/'),
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9001',
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: { index: '/index.html', disableDotRule: true }
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // `auto` scopes *.module.scss only; plain .scss/.css stay global.
              modules: {
                auto: /\.module\.\w+$/,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                namedExport: false,
                exportLocalsConvention: 'asIs'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        },
        use: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // Matches production so deep routes resolve their bundles identically.
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
        extensions: ['ts', 'tsx']
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/assets/', to: 'public/assets/' },
        { from: './public/robots.txt', to: 'robots.txt' },
        { from: './public/manifest.json', to: 'manifest.json' }
      ],
    }),
  ]
}

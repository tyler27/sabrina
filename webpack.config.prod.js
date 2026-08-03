const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              // `auto` scopes *.module.scss only; plain .scss/.css stay global.
              modules: {
                auto: /\.module\.\w+$/,
                localIdentName: "[hash:base64:8]",
                namedExport: false,
                exportLocalsConvention: "asIs",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js",
    path: path.resolve(__dirname, "dist"),
    // Absolute, so bundles still resolve on deep routes like /project/triad.
    // With the default ("auto") the browser would ask for /project/main.js.
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    // DigitalOcean static sites serve 404.html for any unmatched path. Shipping
    // the app under that name makes client-side routes work on a hard refresh
    // even if `catchall_document` is not configured on the app spec.
    new HtmlWebpackPlugin({
      filename: "404.html",
      inject: true,
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./public/assets/", to: "public/assets/" },
        { from: "./public/robots.txt", to: "robots.txt" },
        { from: "./public/manifest.json", to: "manifest.json" },
      ],
    }),
  ],
};

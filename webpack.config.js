const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    open: true,
    // port: 9000,
    host: "localhost",
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000",
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
      {
        test: /\.jpg/,
        type: 'asset/resource', 
      },
      {
        test: /\.png/,
        type: 'asset/resource', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'main.css',
    // }),
    // new NodePolyfillPlugin(),
  ],
};

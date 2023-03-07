const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src', 'assets'),
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|.jsx)$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        loader: "babel-loader",
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|webp)$/,
        use: ["file-loader"],
      },
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin(),
    new Dotenv()
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};

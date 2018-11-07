var webpack = require("webpack");
var path = require("path");

var SRC_PATH = path.resolve(__dirname, "src");
//var BUILD_PATH = path.resolve(__dirname, "build");
var BUILD_PATH = "/Program Files/eclipse_workplace/sj_survey_manager/src/main/webapp/js";

var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  entry: SRC_PATH + "/index.js",
  output: {
    path: BUILD_PATH,
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: "url-loader" }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    publicPath: '/',
    host: "127.0.0.1",
    port: 3000,
    proxy: {
        "**": "http://localhost:8080"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 512000 // 50kb
    })
  ]
};

module.exports = config;

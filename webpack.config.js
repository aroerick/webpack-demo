const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9001
  },
  plugins: [new HtmlWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: "test.html",
                title: "A Test"
            })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
            {
              loader: "file-loader",
              options: {
              name: "[path][name].[ext]"
              }
            }
      ]
      }   
    ]
  }
};
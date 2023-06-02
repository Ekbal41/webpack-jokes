const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src", "app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devtool : "source-map",
  devServer:{
    port: 3000,
    static : path.resolve(__dirname, "dist"),
    open : true,
    hot : true,
    compress : true,
    historyApiFallback : true,


  },
  module :{
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type : "asset/resource"

      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Jokes",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};

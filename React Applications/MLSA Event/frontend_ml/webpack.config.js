const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  // Entry point for your application
  entry: "./src/index.js",

  // Output configuration
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // Module rules for handling different types of files
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  // Resolve configuration for polyfills
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
  },

  // Plugins configuration
  plugins: [new Dotenv()],

  // Mode configuration
  mode: "development", // or 'production' for production builds

  // DevServer configuration (optional, for development)
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
  },
};

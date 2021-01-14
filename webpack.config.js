const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "index.js",
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(less|scss|css)$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
      },
      // tsx
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: [
      '.web.js', '.wasm',
      '.mjs', '.js',
      '.web.jsx', '.jsx',
      '.web.ts', '.ts',
      '.web.tsx', '.tsx',
      '.json'
    ],
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Nextjs Word Cloud",
    //   template: path.resolve(__dirname, "./public/index.html"),
    //   filename: "index.html",
    // }),
    // new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '.'),
    open: false,
    hot: true,
    quiet: true,
    port: 8080,
  },
};

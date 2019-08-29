const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
  mode,
  entry: {
    main: './src/app.js',
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.html',
    }),
  ],
  devServer: {
    port: 3000,
    publicPath: '/',
    historyApiFallback: { index: '/' },
    open: 'Google Chrome'
  },
};

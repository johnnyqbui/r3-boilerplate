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
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.html',
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src']
  },
  devServer: {
    port: 3000,
    publicPath: '/',
    historyApiFallback: { index: '/' },
    open: 'Google Chrome'
  },
};

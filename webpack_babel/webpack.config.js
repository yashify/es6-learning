const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, '/build/'),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true
  }
};

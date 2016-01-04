var webpack = require('webpack');

module.exports = {
  entry: [
    './src/client.jsx'
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'client.bundle.js'
  },

  devtool: 'inline-source-map'
};

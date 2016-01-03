var webpack = require('webpack');

module.exports = {
  entry: [
    './main.jsx'
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
    path: __dirname + '/../dist',
    publicPath: '/',
    filename: 'client.bundle.js'
  },
};

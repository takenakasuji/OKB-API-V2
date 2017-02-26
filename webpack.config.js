const path = require('path');
 
module.exports = {
  entry: './src/app.js',
  output: {
    path: './dest',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
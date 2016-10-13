const webpack = require('webpack');
const CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');
const path = require('path');

module.exports= {
  entry: {
    about: './src/about',
    contact: './src/contact',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },  {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'

      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=60000'
      }
    ]
  },
  plugins: [
      new CommonsChunkPlugin('commons', 'commons.bundle.js')
  ]
};
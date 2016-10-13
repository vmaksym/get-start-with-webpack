module.exports= {
  entry: './src/main.js',
  output: {
    path: 'build',
    filename: './bundle.js'
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

      }
    ]
  }
};
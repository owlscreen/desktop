const webpack = require('webpack'),
      path = require('path')

module.exports = {
  context : path.join(__dirname, './'),
  entry: './render/src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'min.bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'render/src/scss')
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        },
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
var webpack = require('webpack');
module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {loader: 'babel-loader', test: /\.js?$/, exclude: /node_modules/, query: { presets: ["es2015", "react"] }},
      {test: /\.js?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/},
      {test: /\css?$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
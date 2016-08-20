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
      {test: /\.js?$/, loaders: ['react-hot', 'babel-loader?'  + JSON.stringify({presets: ["es2015", "react"]})] , exclude: /node_modules/},
      {test: /\css?$/, loader: 'style!css'}
    ]
  },
  plugins: [
    // new webpack.NoErrorsPlugin()
  ]

};
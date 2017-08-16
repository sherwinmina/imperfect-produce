const path = require('path');
const webpack  = require('webpack');

module.exports = {
  devtools: 'eval-source-map',
  entry: [
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path:  path.join(__dirname, 'build-prod'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: [ 'react-hot', 'babel' ]
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}

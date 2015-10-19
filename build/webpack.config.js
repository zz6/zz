// webpack.config.js
module.exports = {
  entry: './app.jsx',
  output: {
    filename: '../public/app.js'       
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' } // loaders 可以接受 querystring 格式的参数
    ]
  }
};
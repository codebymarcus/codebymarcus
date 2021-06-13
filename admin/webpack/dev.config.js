const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', path.resolve(__dirname, '../src', 'index.js')],
  devServer: {
    https: false,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 9000,
    hot: true,
    host: '0.0.0.0',
  },
};

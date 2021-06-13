const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [
  new HtmlWebpackPlugin({
    title: 'CodeByMarcus',
    template: path.resolve(__dirname, '../public', 'index.html'),
    showErrors: true,
  }),
];

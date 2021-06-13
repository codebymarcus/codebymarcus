const path = require('path');
const alias = require('./alias');
const rules = require('./rules');
const plugins = require('./plugins');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules,
  },
  resolve: {
    alias,
  },
  plugins,
};

const path = require('path');

module.exports = [
  {
    test: /\.(jsx|js)$/,
    include: path.resolve(__dirname, '../src'),
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
  },
];

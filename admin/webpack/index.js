const { merge } = require('webpack-merge');
const defaults = require('./defaults');
const dev = require(`./${process.env.ENV}.config`);

const output = merge(defaults, dev);

module.exports = output;

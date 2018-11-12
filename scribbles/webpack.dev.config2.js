const merge = require('webpack-merge');
const [ browserConfig, serverConfig ] = require('./webpack.common.config2.js');

module.exports = [
  merge(browserConfig, { mode: 'development' }),
  merge(serverConfig, { mode: 'development' }),
];

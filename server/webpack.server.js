const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // we're building a bundle for nodeJS! (default is for a web browser)
  target: 'node',

  // what's the server application entry point?
  entry: './src/index.js',

  // where does the generated bundle go?
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [
    webpackNodeExternals()
  ]
};

module.exports = merge(baseConfig, config);
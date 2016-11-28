const webpack = require('webpack');
const config = require('./webpack.config.common');

config.plugins.push(
    new webpack.DefinePlugin({DEBUG: false}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
);

module.exports = config;
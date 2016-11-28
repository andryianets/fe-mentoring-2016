const webpack = require('webpack');
const config = require('./webpack.config.common');

config.plugins.push(
    new webpack.DefinePlugin({DEBUG: true})
);

module.exports = config;

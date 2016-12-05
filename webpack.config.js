const webpack = require('webpack');

const config = process.env.NODE_ENV === 'production' ? require('./webpack.config.prod') : require('./webpack.config.dev');

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
);

module.exports = config;

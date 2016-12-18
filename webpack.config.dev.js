const config = require('./webpack.config.common');

config.devtool = 'source-map';
config.devServer = {
    open: true,
    'content-base': './dist'
};

module.exports = config;

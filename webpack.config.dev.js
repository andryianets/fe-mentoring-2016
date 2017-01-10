const config = require('./webpack.config.common');

config.devtool = 'source-map';
config.devServer = {
    port: 9090,
    open: true,
    'content-base': './dist',

    proxy: {
        '/api': {
            target: 'http://localhost:8000',
            changeOrigin: true,
            secure: false
        }
    }
};

module.exports = config;

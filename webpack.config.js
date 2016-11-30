module.exports = process.env.NODE_ENV === 'prod' ? require('./webpack.config.prod') : require('./webpack.config.dev');

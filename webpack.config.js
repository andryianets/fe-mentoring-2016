var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: ['whatwg-fetch', 'babel-polyfill', './src/js/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({DEBUG: true})
    ]
};
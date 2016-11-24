const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

var PRODUCTION = false;

process.argv.forEach(function (val) {
    if (val === '--production') {
        PRODUCTION = true;
    }
});

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
                test: /\.pug/,
                loaders: ['babel-loader', 'pug-loader']
            },
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
        new webpack.DefinePlugin({DEBUG: !PRODUCTION}),
        PRODUCTION ? new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}) : function () {
        }
    ]
};
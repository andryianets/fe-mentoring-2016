const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const PRODUCTION = process.argv.indexOf('--production') !== -1;

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        publicPath: 'dist/'
    },
    devtool: "source-map",
    devServer: {
        "open": true,
        "content-base": "./"
    },
    module: {
        loaders: [
            {
                test: /\.pug/,
                loader: 'pug'
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                loader: 'webpack-task'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=assets/[hash].[ext]&publicPath=./'
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
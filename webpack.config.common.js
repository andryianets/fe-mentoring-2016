const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            angularApp: 'frontend/js/angular/app',
            jsRoot: 'frontend/js',
        },
        extensions: ['.js', '.jsx', '']
    },
    entry: {
        index: 'frontend/js',
        react: 'frontend/js/react',
        angular: 'frontend/js/angular',
        vendors: [
            'whatwg-fetch',
            'babel-polyfill',
            'lodash',
            'react',
            'react-dom',
            'react-router',
            'jquery',
            'angular',
            'angular-animate',
            'angular-sanitize',
            'angular-aria',
            'angular-messages',
            'angular-resource',
            'angular-ui-router',
            'angular-xeditable',
            'angular-strap',
            'angular-strap/dist/angular-strap.tpl'
        ]
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.pug$/,
                loader: 'pug'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                loader: 'json!webpack-task'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=assets/[hash].[ext]&publicPath=./'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [

        new ExtractTextPlugin('[name].css'),

        // commons
        new webpack.optimize.CommonsChunkPlugin(
            'vendors',
            'vendors.js',
            Infinity
        ),

        // entry pages
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'index.html',
            title: 'Mentoring App',
            template: 'frontend/tpls/index.pug'
        }),

        new HtmlWebpackPlugin({
            chunks: ['vendors', 'react'],
            filename: 'react.html',
            title: 'React App',
            template: 'frontend/tpls/react.pug'
        }),

        new HtmlWebpackPlugin({
            chunks: ['vendors', 'angular'],
            filename: 'angular.html',
            title: 'Angular App',
            template: 'frontend/tpls/angular.pug'
        }),

        new webpack.ProvidePlugin({
            '_': 'lodash',
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
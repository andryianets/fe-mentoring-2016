const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        app: './frontend/js/index.js',
        vendor: [
            'whatwg-fetch',
            'babel-polyfill',

            'react',
            'react-dom',
            'react-router',

            'jquery',

            'lodash',

            //'ng-toast',

            'angular',
            'angular-animate',
            'angular-sanitize',
            'angular-aria',
            'angular-messages',

            'angular-ui-router',

            'angular-xeditable',

            'angular-strap',
            'angular-strap/dist/angular-strap.tpl'

        ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'app.js',
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
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            title: 'Mentoring 2016 App',
            template: './frontend/tpls/index.pug'
        }),
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */'vendor',
            /* filename= */'vendors.js'
        ),
        new webpack.ProvidePlugin({
            '_': 'lodash',
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
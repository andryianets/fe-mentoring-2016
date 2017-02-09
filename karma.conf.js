// Karma configuration
// Generated on Thu Feb 09 2017 16:28:44 GMT+0300 (+03)

const webpack = require('webpack');
const webpackConf = require('./webpack.config');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        plugins: [
            require("karma-webpack"),
            require("karma-sourcemap-loader"),
            require("karma-jasmine"),
            require("karma-coverage"),
            require("karma-phantomjs-launcher"),
            require("karma-chrome-launcher")
        ],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            'frontend/js/angular/test.js'
        ],


        // list of files to exclude
        exclude: [
            'karma.config.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'frontend/js/angular/test.js': ['webpack', 'sourcemap', 'coverage'],
        },

        // coverageReporter: {
        //     type : 'html',
        //     dir : 'coverage/'
        // },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        webpack: {
            module: webpackConf.module,
            resolve: webpackConf.resolve,
            devtool: 'inline-source-map',
            plugins: [
                new webpack.ProvidePlugin({
                    '_': 'lodash',
                    $: "jquery",
                    jQuery: "jquery"
                })
            ]
        },

        webpackServer: { noInfo: true }
    })
}

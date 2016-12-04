import 'whatwg-fetch';
import 'babel-polyfill';
import Client from './newsapi/client';
import PageMediator from './PageMediator';
require('../scss/app.scss');

export default class App {

    /* Public */

    static getInstance(appContainerSelector) {
        return App.instance || new App(appContainerSelector);
    }

    constructor(appContainerSelector) {

        if (App.instance) {
            throw 'App instance already instantiated';
        }

        App.instance = this;

        this.config = require('./config.json');
        Client.getInstance(this.config.apiKey);

        new PageMediator(appContainerSelector);
    }

}

import 'whatwg-fetch';
import 'babel-polyfill';
import Client from './newsapi/Client';
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

        const config = require('./config.json');
        Client.getInstance(config.apiKey);

        this.pageMediator = new PageMediator(appContainerSelector);
        this.pageMediator.initApp();
    }

}

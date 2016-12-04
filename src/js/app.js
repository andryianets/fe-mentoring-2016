import 'whatwg-fetch';
import "babel-polyfill";
import {createStore} from "redux";
import Client from "./newsapi/client";
import PageMediator from "./PageMediator";
require("../scss/app.scss");

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
        this.currentChoices = {};
        this.newsClient = new Client(this.config.apiKey);

        this.pageMediator = new PageMediator(appContainerSelector);
        this.pageMediator.onChoiceSelectedHandler = this.onChoiceSelectedHandler.bind(this);
        this.pageMediator.onSourceSelectedHandler = this.onSourceSelectedHandler.bind(this);
    }

    init() {
        this.initChoices();
        this.onChoiceSelectedHandler();
    }

    initChoices() {
        this.pageMediator.setCategories(Client.availableCategories);
        this.pageMediator.setCountries(Client.availableCountries);
        this.pageMediator.setLanguages(Client.availableLanguages);
    }

    onChoiceSelectedHandler(param, value) {
        if (param) this.currentChoices[param] = value;
        this.newsClient.getSources(this.currentChoices)
            .then(sources => this.pageMediator.setSources(sources))
            .catch(this.handleError.bind(this));
    }

    onSourceSelectedHandler(sourceId) {
        this.newsClient.getArticles({source: sourceId})
            .then(articles => this.pageMediator.setArticles(sourceId, articles))
            .catch(this.handleError.bind(this));
    }

    handleError(error) {
        this.pageMediator.setError(error);
    }

}

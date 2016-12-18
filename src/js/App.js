import 'whatwg-fetch';
import 'babel-polyfill';
import configureStore from './redux/configureStore';
import {initApp, filterChanged, loadArticles} from './redux/actions';
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

        this.store = configureStore();
        this.prevState = {};
        this.store.subscribe(this.handleStoreChange.bind(this));

        this.pageMediator = new PageMediator(appContainerSelector);
        this.pageMediator.onChoiceSelectedHandler = (param, value) => {
            this.store.dispatch(filterChanged(param, value));
        };
        this.pageMediator.onSourceSelectedHandler = (sourceId) => {
            this.store.dispatch(loadArticles(sourceId));
        };

        this.store.dispatch(initApp());
    }

    handleStoreChange() {
        const state = this.store.getState();

        if (this.prevState.filtersData !== state.filtersData) {
            this.pageMediator.setCategories(state.filtersData.categories);
            this.pageMediator.setCountries(state.filtersData.countries);
            this.pageMediator.setLanguages(state.filtersData.languages);
        }

        if (this.prevState.sourcesList !== state.sourcesList) {
            this.pageMediator.setSources(state.sourcesList);
        }

        if (state.articlesList.sourceId && this.prevState.articlesList !== state.articlesList) {
            this.pageMediator.setArticles(state.articlesList.sourceId, state.articlesList.articles);
        }

        if (state.errorMessage) {
            this.pageMediator.setError(state.errorMessage);
        }

        this.prevState = state;
    }

}

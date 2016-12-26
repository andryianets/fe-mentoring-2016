import 'whatwg-fetch';
import 'babel-polyfill';
import configureStore from './redux/configureStore';
import {tryLogin, tryReg, initApp, filterChanged, loadArticles} from './redux/actions';
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

        this.store = configureStore();
        this.prevState = {};
        this.store.subscribe(this.handleStoreChange.bind(this));

        this.pageMediator = new PageMediator(appContainerSelector);

        this.pageMediator.onLoginTryHandler = (login, pass) => {
            this.store.dispatch(tryLogin(login, pass));
        };

        this.pageMediator.onRegTryHandler = (login, pass) => {
            this.store.dispatch(tryReg(login, pass));
        };

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

        if (this.prevState.loggedInUser !== state.loggedInUser) {
            this.pageMediator.setLoggedInUser(state.loggedInUser);
        }

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

        if (this.prevState.errorMessage !== state.errorMessage) {
            this.pageMediator.setError(state.errorMessage);
        }

        this.prevState = state;
    }

}

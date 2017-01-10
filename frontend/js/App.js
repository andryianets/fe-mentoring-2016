import 'whatwg-fetch';
import 'babel-polyfill';
import configureStore from './redux/configureStore';
import {tryLogin, tryReg, initApp, filterChanged,
    loadArticles, addArticle, removeArticle, loadUsers} from './redux/actions';
import {PageMediator, PageMediatorEvents} from './PageMediator';
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

        this.pageMediator.addEventListener(PageMediatorEvents.LoginTry, (login, pass) => {
            this.store.dispatch(tryLogin(login, pass));
        });

        this.pageMediator.addEventListener(PageMediatorEvents.RegTry, (login, pass) => {
            this.store.dispatch(tryReg(login, pass));
        });

        this.pageMediator.addEventListener(PageMediatorEvents.ChoiceSelected, (param, value) => {
            this.store.dispatch(filterChanged(param, value));
        });

        this.pageMediator.addEventListener(PageMediatorEvents.SourceSelected, (sourceId) => {
            this.store.dispatch(loadArticles(sourceId));
        });

        this.pageMediator.addEventListener(PageMediatorEvents.ArticleAdd, (data) => {
            const state = this.store.getState();
            if (state.articlesList.sourceId) {
                data.source.id = state.articlesList.sourceId;
                this.store.dispatch(addArticle(data));
            }
        });

        this.pageMediator.addEventListener(PageMediatorEvents.ArticleRemove, (id) => {
            const state = this.store.getState();
            this.store.dispatch(removeArticle(id, state.articlesList.sourceId));
        });

        this.pageMediator.addEventListener(PageMediatorEvents.LoadUsers, () => {
            this.store.dispatch(loadUsers());
        });

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

        //users + article

        this.prevState = state;
    }

}

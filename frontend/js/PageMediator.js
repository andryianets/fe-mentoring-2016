import ImagePreloader from './ImagePreloader';

const appTpl = require('../tpls/app.pug');
const sourceTpl = require('../tpls/source.pug');
const articleTpl = require('../tpls/article.pug');
const choiceTpl = require('../tpls/choice.pug');

export const PageMediatorEvents = {
    ChoiceSelected: 'ChoiceSelected',
    SourceSelected: 'SourceSelected',

    LoginTry: 'LoginTry',
    RegTry: 'RegTry',

    ArticleAdd: 'ArticleAdd',
    ArticleUpdate: 'ArticleUpdate',
    ArticleRemove: 'ArticleRemove',

    LoadUsers: 'LoadUsers'
};

export class PageMediator {

    constructor(containerSelector) {
        if (window.appMediator) {
            throw new Error('global appMediator var already defined!');
        }

        window.appMediator = this;

        this.eventListeners = {};

        this.appContainer = document.querySelector(containerSelector);
        this.appContainer.innerHTML = appTpl();

        //states
        this.loginState = this.appContainer.querySelector('#loginState');
        this.loggedInInfo = this.appContainer.querySelector('#loggedInInfo');
        this.loggedInState = this.appContainer.querySelector('#loggedInState');

        this.categoriesChoicesElement = this.appContainer.querySelector('#categoriesChoices');
        this.countriesChoicesElement = this.appContainer.querySelector('#countriesChoices');
        this.langChoicesElement = this.appContainer.querySelector('#langChoices');
        this.contentElement = this.appContainer.querySelector('#content');
        this.errorElement = this.appContainer.querySelector('#errors');
    }

    addEventListener(eventName, listener) {
        this.eventListeners[eventName] = (this.eventListeners[eventName] || []);
        this.eventListeners[eventName].push(listener);
    }

    removeEventListener(eventName, listener) {
        const listeners = this.eventListeners[eventName] || [];
        const listenerIndex = listeners.indexOf(listener);
        if (listenerIndex >= 0 && listeners.length > 0) {
            listeners.splice(listenerIndex, 1);
        }
    }

    dispatchEvent(eventName, ...params) {
        (this.eventListeners[eventName] || []).forEach((listener) => {
            listener(...params);
        });
    }

    setLoggedInUser(user) {
        if (user) {
            this.loginState.className = 'hidden';
            this.loggedInState.className = `role-${user.role}`;
            this.loggedInInfo.innerHTML = `Welcome, ${user.login}`;
        } else {
            this.loginState.className = '';
            this.loggedInState.className = 'hidden';
        }
    }

    setCategories(categories) {
        this.categoriesChoicesElement.innerHTML = [this.getChoiceTpl('category', 'All', '', true)].concat(
            categories.map(value => this.getChoiceTpl('category', value, value))
        ).join('');
    }

    setCountries(countries) {
        this.countriesChoicesElement.innerHTML = [this.getChoiceTpl('country', 'All', '', true)].concat(
            countries.map(value => this.getChoiceTpl('country', value, value))
        ).join('');
    }

    setLanguages(languages) {
        this.langChoicesElement.innerHTML = [this.getChoiceTpl('language', 'All', '', true)].concat(
            languages.map(value => this.getChoiceTpl('language', value, value))
        ).join('');
    }

    setSources(sources) {
        const formattedSources = sources.map(source => this.getSourceTpl(source));
        this.contentElement.innerHTML = formattedSources.join('');
    }

    setArticles(sourceId, articles) {
        // todo: load images before inserting them into source block
        const sourcesElement = this.contentElement.querySelector(`#articles_of_${sourceId}`);
        const formattedArticles = articles.map((article, index) => this.getArticleTpl(article, sourceId, index));
        sourcesElement.innerHTML = formattedArticles.join('');
        ImagePreloader(sourcesElement.querySelectorAll(`a img`));
    }

    setError(error) {
        this.errorElement.innerHTML = error ? `<h4 class="error">${error}</h4>` : '';
    }

    authFormSubmit(form) {
        const [login, pass, mode] = [form.login.value, form.pass.value, form.mode.value];
        if (mode === 'login') {
            this.tryLogin(login, pass);
        } else {
            this.tryReg(login, pass);
        }
    }

    tryLogin(login, pass) {
        if (login && pass) {
            this.dispatchEvent(PageMediatorEvents.LoginTry, login, pass);
        }
    }

    tryReg(login, pass) {
        if (login && pass) {
            this.dispatchEvent(PageMediatorEvents.RegTry, login, pass);
        }
    }

    onChoiceSelected(selectedNode) {
        if (selectedNode) {
            const radiosContainer = selectedNode.parentElement.parentElement;
            Array.from(radiosContainer.getElementsByTagName('label')).forEach(labelNode => {
                labelNode.className = labelNode === selectedNode.parentElement ? 'selected' : '';
            });

            const {name: param, value} = selectedNode;
            this.dispatchEvent(PageMediatorEvents.ChoiceSelected, param, value);
        }
    }

    onSourceSelected(sourceId) {
        const sourcesElement = this.contentElement.querySelector(`#articles_of_${sourceId}`);
        if (sourcesElement.children.length > 0) {
            sourcesElement.innerHTML = '';
        } else {
            this.dispatchEvent(PageMediatorEvents.SourceSelected, sourceId);
        }
    }

    addArticle() {
        this.dispatchEvent(PageMediatorEvents.ArticleAdd, {
            title: 'Test at ' + new Date(),
            url: 'http://tut.by',
            urlToImage: 'https://img.tyt.by/p/0d/f/logo_tutby_startapy_21.01.png',
            publishedAt: (new Date()).toISOString(),
            source: {
                id: 'usa-today',
                category: 'general',
                language: 'en',
                country: 'us'
            }
        });
    }

    loadUsers() {
        this.dispatchEvent(PageMediatorEvents.LoadUsers);
    }

    deleteArticle(id) {
        if (confirm('Are you sure?')) {
            this.dispatchEvent(PageMediatorEvents.ArticleRemove, id);
        }
    }

    /* Private */

    getChoiceTpl(name, label, value, checked) {
        return choiceTpl({name, label, value, checked});
    }

    getSourceTpl(source) {
        return sourceTpl({source});
    }

    getArticleTpl(article, sourceId, index) {
        return articleTpl({article, sourceId, index});
    }

}
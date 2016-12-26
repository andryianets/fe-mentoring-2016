import ImagePreloader from './ImagePreloader';

const appTpl = require('../tpls/app.pug');
const sourceTpl = require('../tpls/source.pug');
const articleTpl = require('../tpls/article.pug');
const choiceTpl = require('../tpls/choice.pug');

export default class PageMediator {

    constructor(containerSelector) {
        if (window.appMediator) {
            throw new Error('global appMediator var already defined!');
        }

        window.appMediator = this;

        this.onChoiceSelectedHandler = null;
        this.onSourceSelectedHandler = null;
        this.onLoginTryHandler = null;

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

    setLoggedInUser(user) {
        if (user) {
            this.loginState.className = 'hidden';
            this.loggedInState.className = '';
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

    tryLogin(form) {
        const [login, pass] = [form.login.value, form.pass.value];
        if (login && pass) {
            this.onLoginTryHandler && this.onLoginTryHandler(login, pass);
        }
    }

    onChoiceSelected(selectedNode) {
        if (selectedNode) {
            const radiosContainer = selectedNode.parentElement.parentElement;
            Array.from(radiosContainer.getElementsByTagName('label')).forEach(labelNode => {
                labelNode.className = labelNode === selectedNode.parentElement ? 'selected' : '';
            });

            const {name: param, value} = selectedNode;
            this.onChoiceSelectedHandler && this.onChoiceSelectedHandler(param, value);
        }
    }

    onSourceSelected(sourceId) {
        const sourcesElement = this.contentElement.querySelector(`#articles_of_${sourceId}`);
        if (sourcesElement.children.length > 0) {
            sourcesElement.innerHTML = '';
        } else {
            this.onSourceSelectedHandler && this.onSourceSelectedHandler(sourceId);
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
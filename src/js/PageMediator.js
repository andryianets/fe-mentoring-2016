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

        this.appContainer = document.querySelector(containerSelector);
        this.appContainer.innerHTML = appTpl();

        this.categoriesChoicesElement = this.appContainer.querySelector('#categoriesChoices');
        this.countriesChoicesElement = this.appContainer.querySelector('#countriesChoices');
        this.langChoicesElement = this.appContainer.querySelector('#langChoices');
        this.contentElement = this.appContainer.querySelector('#content');
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
        const sourcesElement = this.contentElement.querySelector(`#articles_of_${sourceId}`);
        const formattedArticles = articles.map(article => this.getArticleTpl(article));
        sourcesElement.innerHTML = formattedArticles.join('');
    }

    setError(error) {
        this.contentElement.innerHTML = `<h4 class="error">${error}</h4>`;
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

    getArticleTpl(article) {
        return articleTpl({article});
    }

}
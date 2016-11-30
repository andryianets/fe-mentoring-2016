import 'whatwg-fetch';
import "babel-polyfill";
import Client from "./news";
require("../scss/app.scss");

const appTpl = require('../tpls/app.pug');
const sourceTpl = require('../tpls/source.pug');
const articleTpl = require('../tpls/article.pug');
const choiceTpl = require('../tpls/choice.pug');

export default class App {

    /* Public */

    constructor(appContainerId) {
        this.config = require('./config.json');

        this.appContainer = document.getElementById(appContainerId);
        this.appContainer.innerHTML = appTpl();
        this.categoriesChoicesElement = document.getElementById('categoriesChoices');
        this.countriesChoicesElement = document.getElementById('countriesChoices');
        this.langChoicesElement = document.getElementById('langChoices');
        this.contentElement = document.getElementById('content');

        this.currentChoices = {};

        this.newsClient = new Client(this.config.apiKey);

        if (window.app) {
            throw new Error('global app var already defined!');
        }

        window.app = this;
    }

    init() {
        this.initChoices();
        this.updateSources();
    }

    initChoices() {
        this.categoriesChoicesElement.innerHTML = [this.getChoiceTpl('category', 'All', '', true)].concat(
            Client.availableCategories.map(value => this.getChoiceTpl('category', value, value))
        ).join('');

        this.countriesChoicesElement.innerHTML = [this.getChoiceTpl('country', 'All', '', true)].concat(
            Client.availableCountries.map(value => this.getChoiceTpl('country', value, value))
        ).join('');

        this.langChoicesElement.innerHTML = [this.getChoiceTpl('language', 'All', '', true)].concat(
            Client.availableLanguages.map(value => this.getChoiceTpl('language', value, value))
        ).join('');
    }

    updateSources(selectedNode) {
        if (selectedNode) {
            const radiosContainer = selectedNode.parentElement.parentElement;
            Array.from(radiosContainer.getElementsByTagName('label')).forEach(labelNode => {
                labelNode.className = labelNode === selectedNode.parentElement ? 'selected' : '';
            });

            const {name: param, value} = selectedNode;
            this.currentChoices[param] = value;
        }

        this.newsClient.getSources(this.currentChoices)
            .then(data => {
                const formattedSources = data.sources.map(source => this.getSourceTpl(source));
                this.contentElement.innerHTML = formattedSources.join('');
                return data.sources;
            })
            .catch(this.handleError.bind(this));
    }

    updateArticles(source) {
        const sourcesElement = document.getElementById(`articles_of_${source}`);
        if (sourcesElement.children.length > 0) {
            sourcesElement.innerHTML = '';
        } else {
            this.newsClient.getArticles({source})
                .then(data => {
                    const formattedArticles = data.articles.map(article => this.getArticleTpl(article));
                    sourcesElement.innerHTML = formattedArticles.join('');
                })
                .catch(this.handleError.bind(this));
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

    handleError(error) {
        this.contentElement.innerHTML = `<h4 class="error">${error}</h4>`;
    }

}

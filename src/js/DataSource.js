import NewsApiClient from './newsapi/Client';
import mLabClient from './mlab/Client';

class Source {}

class Article {}

export default class DataSource {

    static getInstance() {
        return DataSource.instance || new DataSource('mLab');
    }

    static createSource(data) {
        return Object.assign(new Source(), data);
    }

    static createArticle(sourceId, data) {
        return Object.assign(new Article(), data, {sourceId});
    }

    static get availableCategories() {
        return [
            'business',
            'entertainment',
            'gaming',
            'general',
            'music',
            'science-and-nature',
            'sport',
            'technology'
        ];
    }

    static get availableLanguages() {
        return ['en', 'de', 'fr'];
    }

    static get availableCountries() {
        return ['au', 'de', 'gb', 'in', 'it', 'us'];
    }

    constructor(type) {

        if (DataSource.instance) {
            throw 'DataSource instance already instantiated';
        }

        DataSource.instance = this;

        const config = require('./config.json');

        if (type === 'mLab') {
            this.dataClient = mLabClient.getInstance(config.mLab.apiKey);
        } else {
            this.dataClient = NewsApiClient.getInstance(config.newsApi.apiKey);
        }

    }

    getSources(params) {
        return this.dataClient.getSources(params)
            .then(items => items.map(item => DataSource.createSource(item)));
    }

    getArticles(sourceId) {
        return this.dataClient.getArticles(sourceId)
            .then(items => items.map(item => DataSource.createArticle(sourceId, item)));
    }

}
import NewsApiClient from './newsapi/Client';
import mLabClient from './mlab/Client';

export default class DataSource {

    static getInstance() {
        return DataSource.instance || new DataSource();
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
        return this.dataClient.getSources(params);
    }

    getArticles(sourceId) {
        return this.dataClient.getArticles(sourceId);
    }

}
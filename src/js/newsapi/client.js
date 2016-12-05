import Article from './model/article';
import Source from './model/source';

const ARTICLES_API_URL = 'https://newsapi.org/v1/articles';
const SOURCES_API_URL = 'https://newsapi.org/v1/sources';

export default class Client {

    static getInstance(apiKey) {
        return Client.instance || new Client(apiKey);
    }

    constructor(apiKey) {

        if (Client.instance) {
            throw 'NewsAPI Client instance already instantiated';
        }

        Client.instance = this;

        this.apiKey = apiKey;

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

    getSources(params) {
        return this.doRequest(SOURCES_API_URL, params)
            .then(data => data.sources.map(sourceData => new Source(sourceData)));
    }

    getArticles(params = {}) {
        return this.doRequest(ARTICLES_API_URL, params)
            .then(data => data.articles.map(articleData => new Article(articleData)));
    }

    getApiUrl(baseUrl, params = {}) {
        const queryParts = [];
        for (var name in params) {
            if (params[name]) {
                queryParts.push(`${name}=${params[name]}`);
            }
        }
        const urlSuffix = queryParts.join('&');
        return `${baseUrl}?${urlSuffix}`;
    }

    doRequest(url, params = {}) {

        if (process.env.NODE_ENV === 'development') {
            console.log('NewsAPI Client doRequest()', url, params);
        }

        params.apiKey = this.apiKey;
        return fetch(this.getApiUrl(url, params))
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === 'error') {
                    throw data.message;
                }
                return data;
            });
    }

}

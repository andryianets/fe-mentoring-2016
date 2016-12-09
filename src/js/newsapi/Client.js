const ARTICLES_API_URL = 'https://newsapi.org/v1/articles';
const SOURCES_API_URL = 'https://newsapi.org/v1/sources';

class Source {}

class Article {}

export default class Client {

    static getInstance(apiKey) {
        return Client.instance || new Client(apiKey);
    }

    static createSource(data) {
        return Object.assign(new Source(), data);
    }

    static createArticle(sourceId, data) {
        return Object.assign(new Article(), data, {sourceId});
    }

    constructor(apiKey) {

        if (Client.instance) {
            throw 'NewsAPI NewsApiClient instance already instantiated';
        }

        Client.instance = this;

        this.apiKey = apiKey;

    }

    getSources(params) {
        return this.doRequest(SOURCES_API_URL, params)
            .then(data => data.sources.map(sourceData => Client.createSource(sourceData)));
    }

    getArticles(sourceId) {
        return this.doRequest(ARTICLES_API_URL, {source: sourceId})
            .then(data => data.articles.map(articleData => Client.createArticle(sourceId, articleData)));
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
            console.log('NewsAPI NewsApiClient doRequest()', url, params);
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

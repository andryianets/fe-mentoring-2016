const ARTICLES_API_URL = 'https://newsapi.org/v1/articles';
const SOURCES_API_URL = 'https://newsapi.org/v1/sources';

export default class Client {

    constructor(apiKey) {
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
        return this.doRequest(SOURCES_API_URL, params);
    }

    getArticles(params = {}) {
        return this.doRequest(ARTICLES_API_URL, params);
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

        if (DEBUG) {
            console.log('NewsAPI Client doRequest()', url, params);
        }

        params.apiKey = this.apiKey;
        return fetch(this.getApiUrl(url, params))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            });
    }

}

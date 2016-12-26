export default class DataSource {

    static getInstance() {
        return DataSource.instance || new DataSource();
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

    constructor() {

        if (DataSource.instance) {
            throw 'DataSource instance already instantiated';
        }

        DataSource.instance = this;

        const config = require('./config.json');

    }

    getSources(params) {
        return this.doRequest('/api/articles/sources', 'GET', params);
    }

    getArticles(sourceId) {
        return this.doRequest('/api/articles', 'GET', {'source.id': sourceId});
    }

    checkLogin() {
        return this.doRequest('/api/auth');
    }

    doLogin(login, pass) {
        return this.doRequest('/api/auth/login', 'POST', {}, {login, pass});
    }

    doReg(login, pass) {
        return this.doRequest('/api/auth/reg', 'POST', {}, {login, pass});
    }

    doRequest(url, method='GET', queryParams = {}, body = null) {

        if (process.env.NODE_ENV === 'development') {
            console.log('DataSource doRequest()', method, queryParams);
        }

        const req = new Request(
            this.createUrl(url, queryParams),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                method,
                body: body && JSON.stringify(body)
            }
        );

        return fetch(req)
            .then(response => {
                if (!response.ok) {
                    throw 'DataSource error';
                }
                return response.json();
            });
    }

    createUrl(baseUrl, params = {}) {
        const queryParts = [];
        for (var name in params) {
            if (params[name]) {
                queryParts.push(`${name}=${params[name]}`);
            }
        }
        const urlSuffix = queryParts.length ? '?'+queryParts.join('&') : '';
        return `${baseUrl}${urlSuffix}`;
    }

}
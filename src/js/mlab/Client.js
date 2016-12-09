const POSTS_COLLECTION_URL = 'https://api.mlab.com/api/1/databases/heroku_bknz76p0/collections/posts';

export default class Client {

    static getInstance(apiKey) {
        return Client.instance || new Client(apiKey);
    }

    constructor(apiKey) {

        if (Client.instance) {
            throw 'mLab mongodb NewsApiClient instance already instantiated';
        }

        Client.instance = this;

        this.apiKey = apiKey;

    }

    getSources(params) {
        return this.doRequest(
            'GET',
            {
                q: JSON.stringify({
                    'source.id': 'bbc-news'
                }),
                l: 10
            }
        );
    }

    getArticles(sourceId) {
        return this.doRequest(
            'POST',
            {
                q: ''
            }
        );
    }

    importData(docs) {
        return this.doRequest(
            'POST',
            {},
            JSON.stringify(docs)
        );
    }

    doRequest(method, params = {}, body = null) {

        if (process.env.NODE_ENV === 'development') {
            console.log('mLab mongodb NewsApiClient doRequest()', method, params);
        }

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        params.apiKey = this.apiKey;

        const req = new Request(
            this.createUrl(POSTS_COLLECTION_URL, params),
            {method, body, headers}
        );

        return fetch(req)
            .then(response => {
                if (response.ok) {
                    //throw 'mLab mongodb error';
                    return Promise.resolve({});
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
        const urlSuffix = queryParts.join('&');
        return `${baseUrl}?${urlSuffix}`;
    }

}

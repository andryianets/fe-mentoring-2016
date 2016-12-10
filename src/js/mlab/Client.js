const DB_URL = 'https://api.mlab.com/api/1/databases/heroku_bknz76p0';
const RUN_COMMAND_URL = `${DB_URL}/runCommand`;
const POSTS_COLLECTION_URL = `${DB_URL}/collections/posts`;

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
        const query = {};
        for (var name in params) {
            if (params[name] && params[name] !== '') {
                query[`source.${name}`] = params[name];
            }
        }
        return this.runCommand(
            JSON.stringify({
                distinct: 'posts',
                key: 'source',
                query
            })
        ).then(data => data.values);
    }

    getArticles(sourceId) {
        return this.doRequest(
            'GET',
            {
                q: JSON.stringify({'source.id': sourceId}),
                f: JSON.stringify({source: 0, _id: 0}),
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

        params.apiKey = this.apiKey;

        const req = new Request(
            this.createUrl(POSTS_COLLECTION_URL, params),
            {method, body}
        );

        return fetch(req)
            .then(response => {
                if (!response.ok) {
                    throw 'mLab mongodb error';
                }
                return response.json();
            });
    }

    runCommand(body) {

        if (process.env.NODE_ENV === 'development') {
            console.log('mLab mongodb NewsApiClient runCommand()', body);
        }

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const req = new Request(
            this.createUrl(RUN_COMMAND_URL, {apiKey: this.apiKey}),
            {method: 'POST', headers, body}
        );

        return fetch(req)
            .then(response => {
                if (!response.ok) {
                    throw 'mLab mongodb error';
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

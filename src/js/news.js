const NewsAPI = (() => {

    const API_KEY = 'a90095ec1a4d42d0a97bc23915858b11';
    const ARTICLES_API_URL = 'https://newsapi.org/v1/articles?source=bbc-news';

    class Client {

        constructor(apiKey = API_KEY) {
            this.apiKey = apiKey;
        }

        getArticles() {
            return fetch(`${ARTICLES_API_URL}&apiKey=${this.apiKey}`)
                .then(response => response.json());
        }

    }

    return {
        Client
    }

})();

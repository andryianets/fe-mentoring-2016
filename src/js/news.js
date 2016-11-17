const NewsAPI = (() => {

    const ARTICLES_API_URL = 'https://newsapi.org/v1/articles?source=bbc-news';

    class Client {

        constructor(apiKey) {
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

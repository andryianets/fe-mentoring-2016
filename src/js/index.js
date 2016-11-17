if (!NewsAPI) throw 'NewsAPI lib not included';

const newsClient = new NewsAPI.Client('a90095ec1a4d42d0a97bc23915858b11');
const contentElement = document.getElementById('content');
newsClient.getArticles()
    .then(data => {
        const formattedRecs = data.articles.map(rec => `<pre>${JSON.stringify(rec, undefined, ' ')}</pre>`);
        contentElement.innerHTML = formattedRecs.join('');
    })
    .catch(error => {
        contentElement.innerHTML = `<h4 class="error">${error}</h4>`;
    });

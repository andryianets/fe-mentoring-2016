if (!NewsAPI) throw 'NewsAPI lib not included';

const newsClient = new NewsAPI.Client();
newsClient.getArticles()
    .then(data => {
        const formattedRecs = data.articles.map(rec => `<pre>${JSON.stringify(rec, undefined, ' ')}</pre>`);
        document.body.innerHTML = formattedRecs.join('');
    })
    .catch(error => {
        document.body.innerHTML = `<h4 class="error">${error}</h4>`;
    });
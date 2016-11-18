if (!NewsAPI) throw 'NewsAPI lib not included';

class App {

    /* Public */

    constructor() {
        this.categoriesChoicesElement = document.getElementById('categoriesChoices');
        this.countriesChoicesElement = document.getElementById('countriesChoices');
        this.langChoicesElement = document.getElementById('langChoices');
        this.contentElement = document.getElementById('content');

        this.currentChoices = {};

        this.newsClient = new NewsAPI.Client('a90095ec1a4d42d0a97bc23915858b11');
    }

    init() {
        this.initChoices();
        this.updateSources();
    }

    initChoices() {
        this.categoriesChoicesElement.innerHTML = [this.getChoiceTpl('category', 'All', '', true)].concat(
            NewsAPI.Client.availableCategories.map(value => this.getChoiceTpl('category', value, value))
        ).join('');

        this.countriesChoicesElement.innerHTML = [this.getChoiceTpl('country', 'All', '', true)].concat(
            NewsAPI.Client.availableCountries.map(value => this.getChoiceTpl('country', value, value))
        ).join('');

        this.langChoicesElement.innerHTML = [this.getChoiceTpl('language', 'All', '', true)].concat(
            NewsAPI.Client.availableLanguages.map(value => this.getChoiceTpl('language', value, value))
        ).join('');
    }

    updateSources(selectedNode) {
        if (selectedNode) {
            const radiosContainer = selectedNode.parentElement.parentElement;
            Array.from(radiosContainer.getElementsByTagName('label')).forEach(labelNode => {
                labelNode.className = labelNode === selectedNode.parentElement ? 'selected' : undefined;
            });

            const {name: param, value} = selectedNode;
            this.currentChoices[param] = value;
        }

        const promise = this.newsClient.getSources(this.currentChoices)
            .then(data => {
                const formattedSources = data.sources.map(source => this.getSourceTpl(source));
                this.contentElement.innerHTML = formattedSources.join('');
                return data.sources;
            })
            .catch(this.handleError.bind(this));
    }

    updateArticles(source) {
        const sourcesElement = document.getElementById(`articles_of_${source}`);
        if (sourcesElement.children.length > 0) {
            sourcesElement.innerHTML = '';
        } else {
            this.newsClient.getArticles({source})
                .then(data => {
                    const formattedArticles = data.articles.map(article => this.getArticleTpl(article));
                    sourcesElement.innerHTML = formattedArticles.join('');
                })
                .catch(this.handleError.bind(this));
        }
    }


    /* Private */

    getChoiceTpl(name, label, value, checked) {
        return `<label for="${name}_${value}" class="${checked && 'selected'}">
                    <input type="radio" id="${name}_${value}" name="${name}" value="${value}" onchange="app.updateSources(this)" ${checked && 'checked'} />
                    ${label}
                </label>`;
    }

    getSourceTpl(source) {
        return `<div class="source" id="source_${source.id}">
                    <div class="logo">
                        <a href="javascript:void(0)" title="${source.name}" onclick="app.updateArticles('${source.id}')">
                            <img src="${source.urlsToLogos.medium}" height="60" />
                        </a>
                    </div>
                    <div class="articles" id="articles_of_${source.id}"></div>
                </div>`;
    }

    getArticleTpl(article) {
        //return `<pre>${JSON.stringify(article, undefined, ' ')}</pre>`;

        return `<a href="${article.url}" target="_blank" title="${article.title}">
                    <img src="${article.urlToImage}" height="120" />
                </a>`;
    }

    handleError(error) {
        this.contentElement.innerHTML = `<h4 class="error">${error}</h4>`;
    }

}

class ArticlesController {

    constructor(Article) {
        this.Article = Article;
        this.articles = [];
    }

    $onInit() {
        this.loadList();
    }

    loadList() {
        this.Article.query()
            .$promise
            .then(articles => {
                this.articles = articles;
            });
    }

    update(article) {
        article.$save();
    }

    remove(article) {
        if (confirm('Are you sure?')) {
            article.$delete(() => {
                this.loadList();
            });
        }
    }

}
export default {
    controller: ArticlesController,
    template: require('./index.html')
};
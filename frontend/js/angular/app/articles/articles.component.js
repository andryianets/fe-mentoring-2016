class ArticlesController {

    constructor(Article) {
        this.Article = Article;
        this.articles = [];
        this.itemsPerPage = 3;
        this.currentPage = 0;
    }

    $onInit() {
        this.loadList();
    }

    loadList() {
        //this.currentPage = 0;
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
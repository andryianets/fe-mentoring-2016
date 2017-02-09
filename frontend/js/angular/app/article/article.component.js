import states from 'angularApp/common/states.const';

class ArticleController {

    constructor($state, Article) {
        this.$state = $state;
        this.Article = Article;
    }

    $postLink() {
        this.data = this.data || new this.Article({source: {name: 'usa-today'}});
    }

    save() {
        if (this.data._id) {
            this.update();
        } else {
            this.create();
        }
    }

    update() {
        this.data.$save(() => {
            this.$state.go(states.ARTICLES);
        });
    }

    create() {
        this.data.$create(() => {
            this.$state.go(states.ARTICLES);
        });
    }

}

export default {
    controller: ArticleController,
    template: require('./edit.html'),
    bindings: {
        data: '<'
    }
};
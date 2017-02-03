import TodoApp from 'angularApp/app.module';
import states from 'angularApp/common/states.const';

import 'angularApp/common/services/dataSource.service';
import 'angularApp/common/services/article.resource.js';

angular.module(TodoApp)

    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider

            .state(states.LOGIN, {
                url: '/login',
                template: '<login />',
            })

            .state(states.ARTICLES, {
                url: '/articles',
                template: '<articles-list />',
            })

            .state(states.ARTICLE_EDIT, {
                url: '/articles/:id',
                template: '<article-form data="$resolve.article" />',
                resolve: {
                    article: () => {

                    }
                }
            })

            .state(states.ARTICLE_ADD, {
                url: '/articles/add',
                template: '<articleForm data="{}" />'
            })

        ;

        $urlRouterProvider.otherwise('/login');

    })

    .run((editableOptions) => {
        editableOptions.theme = 'bs3';
    })

;

// manual bootstrap
angular.element(() => {
    angular.bootstrap(document.getElementById('angularRoot'), [TodoApp]);
});


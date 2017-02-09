import TodoApp from 'angularApp/app.module';
import states from 'angularApp/common/states.const';
import 'angularApp/common/filters/pages.filter';

import 'angularApp/common/services/storage.service';
import 'angularApp/common/services/dataSource.service';
import 'angularApp/common/services/article.resource.js';

angular.module(TodoApp)

    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider

            .state(states.LOGIN, {
                url: '/login',
                template: '<login />',
            })

            .state(states.APP, {
                abstract: true,
                url: '/app',
                template: require('./main.html'),
                resolve: {
                    user: DataSourceService => DataSourceService.checkLogin()
                }
            })

            .state(states.ARTICLES, {
                url: '/app/articles',
                template: '<articles-list />',
            })

            .state(states.ARTICLE_EDIT, {
                url: '/app/articles/:id',
                template: '<article-form data="$resolve.article" />',
                resolve: {
                    article: ($stateParams, Article) => {
                        return Article.load({}, {_id: $stateParams.id}).$promise;
                    }
                }
            })

            .state(states.ARTICLE_ADD, {
                url: '/app/addArticle',
                template: '<article-form data="null" />'
            })

        ;

        $urlRouterProvider.otherwise('/login');

    })

    .run(($log, $rootScope, $state, editableOptions) => {
        editableOptions.theme = 'bs3';

        $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {

            if (toState.name !== states.LOGIN && _.includes([403, 401], error.status)) {
                event.preventDefault();
                $state.go(states.LOGIN);
            }

        });

    })

;

// manual bootstrap
angular.element(() => {
    angular.bootstrap(document.getElementById('angularRoot'), [TodoApp]);
});


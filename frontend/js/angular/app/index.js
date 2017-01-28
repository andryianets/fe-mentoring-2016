import TodoApp from './app.module';
import './login/login.controller';
import './todos/todos.controller';

angular.module(TodoApp)

    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider

            .state('login', {
                url: '/login',
                template: require('./login/login.html'),
                controller: 'LoginController as ctrl',
                resolve: {
                }
            })

            .state('todos', {
                url: '/todos',
                template: require('./todos/todos.html'),
                controller: 'TodosController as ctrl',
                resolve: {
                }
            })

        ;

        $urlRouterProvider.otherwise('/login');

    })


;
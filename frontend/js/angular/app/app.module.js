import login from 'angularApp/login/login.component';
import articlesList from 'angularApp/articles/articles.component';
import articleForm from 'angularApp/article/article.component';
import AppStates from 'angularApp/common/states.const';
import pagination from 'angularApp/common/components/pagination.component';


const APP = angular.module('todoApp', [
    'ngMessages',
    'ngResource',
    'ui.router',
    'xeditable',
    'mgcrea.ngStrap'
]);

APP

    .constant('states', AppStates)

    .component('pagination', pagination)
    .component('login', login)
    .component('articlesList', articlesList)
    .component('articleForm', articleForm)

;

export default APP.name;
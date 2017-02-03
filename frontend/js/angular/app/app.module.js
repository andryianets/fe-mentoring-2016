import login from 'angularApp/login/login.component';
import articlesList from 'angularApp/articles/articles.component';
import articleForm from 'angularApp/article/article.component';
import AppStates from 'angularApp/common/states.const';


const APP = angular.module('todoApp', [
    'ngMessages',
    'ngResource',
    'ui.router',
    'xeditable',
    // 'ngToast',
    'mgcrea.ngStrap'
]);

APP

    .constant('states', AppStates)

    .component('login', login)
    .component('articlesList', articlesList)
    .component('articleForm', articleForm)

;

export default APP.name;
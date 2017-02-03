import TodoApp from "angularApp/app.module";

export default angular.module(TodoApp)
    .factory('Article', ($resource) => {
        return $resource('/api/articles/:id',  {id:'@_id'},
            {
                query: {method: 'GET', url: '/api/articles?source.id=usa-today', isArray:true},
                save: {method: 'PUT'},
                create: {method: 'POST'},
                delete: {method: 'DELETE'}
            });

    }).name;
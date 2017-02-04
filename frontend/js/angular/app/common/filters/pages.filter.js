import TodoApp from "angularApp/app.module";

angular.module(TodoApp)
    .filter('pages', () => (items, itemsPerPage, current) => {
        console.log(items.length, itemsPerPage, current);
        return _.times(Math.ceil(items.length/itemsPerPage), (index) => ({
            label: index + 1,
            active: current === index
        }));
    });
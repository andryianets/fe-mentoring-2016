import TodoApp from '../../app.module';

export const KEY_LOGGED_IN = 'TODO_APP.KEY_LOGGED_IN';
export const KEY_TODOS = 'TODO_APP.KEY_TODOS';

class StorageService {

    constructor($q) {
        this.storage = localStorage;
        this.$q = $q;
    }

    setItem(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        return this.$q.resolve(value);
    }

    getItem(key, defaultValue = null) {
        let value = this.storage.getItem(key);
        return this.$q.resolve(
            (value && JSON.parse(value)) || defaultValue
        );
    }

}

angular.module(TodoApp)
    .service('StorageService', StorageService);
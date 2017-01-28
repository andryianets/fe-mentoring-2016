import TodoApp from '../app.module';
import {KEY_LOGGED_IN} from '../common/services/storage.service';

class LoginController {

    constructor($state, StorageService) {
        this.auth = {};
        this.$state = $state;
        this.StorageService = StorageService;

        this.StorageService.getItem(KEY_LOGGED_IN)
            .then(loggedIn => {
                loggedIn && this.$state.go('todos');
            });
    }

    doLogin() {
        this.StorageService.setItem(KEY_LOGGED_IN, true);
        this.$state.go('todos');
    }

}

angular.module(TodoApp)
    .controller('LoginController', LoginController);
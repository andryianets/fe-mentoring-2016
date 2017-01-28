import TodoApp from '../app.module';
import '../common/services/storage.service';
import {KEY_TODOS} from '../common/services/storage.service';
import './style.scss';

class TodosController {

    constructor(StorageService, $scope) {
        this.StorageService = StorageService;
        this.items = [];
        this.filteredItems = [];
        this.StorageService.getItem(KEY_TODOS, [])
            .then(items => this.items = items);

        this.newItemTitle = null;

        this.todoFilter = null;
        this.todoFilters = [
            {
                value: null,
                label: 'All'
            },
            {
                value: true,
                label: 'Done'
            },
            {
                value: false,
                label: 'Undone'
            },
        ];
    }

    get displayItems() {
        return this.todoFilter ?
            _.filter(this.items, {done: this.todoFilter}) : this.items;
    }

    add() {
        this.StorageService.setItem(KEY_TODOS, [{
            title: this.newItemTitle,
            done: false
        }].concat(this.items))
            .then(items => {
                this.newItemTitle = null;
                this.items = items;
            });
    }

    remove(item) {
        confirm('Are you sure?') && this.StorageService.setItem(KEY_TODOS, _.without(this.items, item))
            .then(items => {
                this.items = items;
            });
    }

    toggle(item) {
        item.done = !todo.done;
        this.save();
    }

    save() {
        this.StorageService.setItem(KEY_TODOS, this.items);
    }

}

angular.module(TodoApp)
    .controller('TodosController', TodosController);
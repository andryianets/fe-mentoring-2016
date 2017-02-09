import TodoApp from "angularApp/app.module";
import DataSource from "jsRoot/DataSource";

class DataSourceService {

    constructor($q) {
        this.$q = $q;
    }

    checkLogin() {
        return this.$q.resolve(DataSource.getInstance().checkLogin());
    }

    doLogin(login, pass) {
        return this.$q.resolve(DataSource.getInstance().doLogin(login, pass));
    }
    
    getSources(params) {
        return this.$q.resolve(DataSource.getInstance().getSources(params));
    }

    getArticles(sourceId) {
        return this.$q.resolve(DataSource.getInstance().getArticles(sourceId));
    }

}

angular.module(TodoApp)
    .service('DataSourceService', DataSourceService);
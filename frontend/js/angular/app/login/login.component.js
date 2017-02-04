import states from 'angularApp/common/states.const';

class LoginController {

    constructor($state, DataSourceService) {
        this.ready = false;
        this.auth = {
            login: '',
            pass: ''
        };
        this.user = null;
        this.DataSourceService = DataSourceService;
        this.$state = $state;

        this.DataSourceService.checkLogin()
            .then(this.loginSuccess.bind(this))
            .catch(error => {
                this.ready = true;
            });
    }

    doLogin() {
        this.DataSourceService.doLogin(this.auth.login, this.auth.pass)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFailed.bind(this));
    }

    loginSuccess(user) {
        this.user = user;
        this.$state.go(states.ARTICLES);
    }

    loginFailed(error) {
        console.error('Wrong login: ', error);
        //show alert
    }

}

export default {
    controller: LoginController,
    template: require('./login.html')
};
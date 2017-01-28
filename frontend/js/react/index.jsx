import 'whatwg-fetch';
import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from '../redux/configureStore';
import RootApp from './RootApp';
import App from './App';
import Login from './components/Login';
import NotFound from './components/NotFound';

require('../../scss/app.scss');

const store = configureStore();

const indexRouting = (nextState, replace) => {
    const state = store.getState();
    if (state.loggedInUser && state.loggedInUser.login) {
        replace('/app');
    } else {
        replace('/login');
    }
};

const accessCheck = (nextState, replace) => {
    const state = store.getState();
    if (!state.loggedInUser || !state.loggedInUser.login) {
        replace('/login');
    }
};

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={RootApp}>
                <IndexRoute onEnter={indexRouting}/>
                <Route path="login" component={Login}/>
                <Route path="app" component={App} onEnter={accessCheck}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('reactRoot')
);
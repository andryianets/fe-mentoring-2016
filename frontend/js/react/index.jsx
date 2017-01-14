import 'whatwg-fetch';
import 'babel-polyfill';

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore';
import RootApp from './RootApp';
import App from './App';
import Login from './components/Login';
import NotFound from './components/NotFound';

require('../../scss/app.scss');

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={RootApp}>
                <IndexRoute component={Login}/>
                <Route path="app" component={App}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('reactRoot')
);
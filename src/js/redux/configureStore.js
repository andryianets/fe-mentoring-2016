import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk, promise];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
}

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )
}
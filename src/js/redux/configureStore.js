import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, promise, logger)
    )
}
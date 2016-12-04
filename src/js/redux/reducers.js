import { combineReducers } from 'redux';
import {INIT_APP, APP_ERROR,
        FILTER_CHANGED,
        LOAD_SOURCES, LOAD_ARTICLES,
        SOURCES_LOADED, ARTICLES_LOADED} from './actions';

function filtersData(state = {}, action) {
    switch (action.type) {
        case INIT_APP:
            return Object.assign({}, state, action.filterData);
        default:
            return state;
    }
}

function headerFilters(state = {}, action) {
    switch (action.type) {
        case FILTER_CHANGED:
            return Object.assign({}, state, action.change);
        default:
            return state;
    }
}

function sourcesList(state = [], action) {
    switch (action.type) {
        case LOAD_SOURCES:
            return [];
        case SOURCES_LOADED:
            return action.sources;
        default:
            return state;
    }
}

function articlesList(state = {}, action) {
    switch (action.type) {
        case LOAD_ARTICLES:
            return {
                sourceId: action.sourceId,
                articles: []
            };
        case ARTICLES_LOADED:
            return {
                sourceId: action.sourceId,
                articles: action.articles
            };
        default:
            return state;
    }
}

function errorMessage(state = null, action) {
    switch (action.type) {
        case APP_ERROR:
            return {
                error: action.error
            };
        default:
            return null;
    }
}

const rootReducer = combineReducers({
    filtersData,
    headerFilters,
    sourcesList,
    articlesList,
    errorMessage
});

export default rootReducer;
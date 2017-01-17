import { combineReducers } from 'redux';
import {LOGIN_SUCCESS, LOGIN_FAILED, REG_FAILED,
        APP_ERROR,
        INIT_FILTERS, FILTER_CHANGED,
        LOAD_SOURCES, LOAD_ARTICLES,
        SOURCES_LOADED,
        ARTICLES_LOADED, ARTICLE_DELETED,
        USERS_LOADED} from './actions';

function loggedInUser(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, action.user, {initialized: true});
        case LOGIN_FAILED:
            return Object.assign({}, state, {initialized: true});
        default:
            return state;
    }
}

function filtersData(state = {categories: [], countries: [], languages: []}, action) {
    switch (action.type) {
        case INIT_FILTERS:
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
        case ARTICLE_DELETED:
            let indexToDelete = -1;
            state.articles.forEach((article, index) => {
                if (article._id == action.id) {
                    indexToDelete = index;
                    return false;
                }
            });
            if (indexToDelete >= 0) {
                state.articles.splice(indexToDelete, 1);
            }
            return Object.assign({}, state);
        default:
            return state;
    }
}

function users(state = [], action) {
    switch (action.type) {
        case USERS_LOADED:
            return action.users;
        default:
            return state;
    }
}

function errorMessage(state = null, action) {
    switch (action.type) {
        case APP_ERROR:
            return action.error;
        case LOGIN_FAILED:
            return action.showError ? 'Login failed' : state;
        case REG_FAILED:
            return 'Reg failed';
        default:
            return null;
    }
}

const rootReducer = combineReducers({

    //common
    loggedInUser,

    //public view
    filtersData,
    headerFilters,
    sourcesList,
    articlesList,
    errorMessage,

    //admin view
    users
});

export default rootReducer;
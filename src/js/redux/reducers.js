import { combineReducers } from 'redux';
import {SELECT_CATEGORY, SELECT_COUNTRY, SELECT_LANGUAGE,
        LOAD_SOURCES, LOAD_ARTICLES} from './actions';


function headerFilters(state = {}, action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return Object.assign({}, state, {category: action.categoryId});
        case SELECT_COUNTRY:
            return Object.assign({}, state, {country: action.countryId});
        case SELECT_LANGUAGE:
            return Object.assign({}, state, {language: action.languageId});
        default:
            return state;
    }
}
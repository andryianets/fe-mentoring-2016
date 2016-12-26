import DataSource from '../DataSource';

export const INIT_APP = 'INIT_APP';
export const INIT_FILTERS = 'INIT_FILTERS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const REG_FAILED = 'REG_FAILED';
export const FILTER_CHANGED = 'FILTER_CHANGED';
export const LOAD_SOURCES = 'LOAD_SOURCES';
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const SOURCES_LOADED = 'SOURCES_LOADED';
export const ARTICLES_LOADED = 'ARTICLES_LOADED';
export const APP_ERROR = 'APP_ERROR';

export function initApp() {
    return dispatch => {
        dispatch({
            type: INIT_APP
        });
        return DataSource.getInstance().checkLogin()
            .then(user => dispatch(loginSuccess(user)))
            .catch(error => dispatch(loginFailed(error)));
    };
}

export function tryLogin(login, pass) {
    return dispatch => {
        return DataSource.getInstance().doLogin(login, pass)
            .then(user => {
                dispatch(loginSuccess(user));
            })
            .catch(error => dispatch(loginFailed(error, true)));
    };
}

export function tryReg(login, pass) {
    return dispatch => {
        return DataSource.getInstance().doReg(login, pass)
            .then(user => {
                dispatch(loginSuccess(user));
            })
            .catch(error => dispatch(regFailed(error)));
    };
}

export function loginSuccess(user) {
    return dispatch => {
        dispatch({
            type: LOGIN_SUCCESS,
            user
        });
        dispatch(initFilters());
    };
}

export function loginFailed(error, showError = false) {
    return {
        type: LOGIN_FAILED,
        error,
        showError
    };
}

export function regFailed(error) {
    return {
        type: REG_FAILED,
        error
    };
}

export function initFilters() {
    return dispatch => {
        dispatch({
            type: INIT_FILTERS,
            filterData: {
                categories: DataSource.availableCategories,
                countries: DataSource.availableCountries,
                languages: DataSource.availableLanguages
            }
        });
        dispatch(loadSources())
    };
}

export function filterChanged(param, value) {
    return (dispatch, getState) => {
        dispatch({
            type: FILTER_CHANGED,
            change: {
                [param]: value
            }
        });
        dispatch(loadSources(getState().headerFilters))
    };
}

export function loadSources(params = {}) {

    return dispatch => {
        return DataSource.getInstance().getSources(params)
            .then(sources => dispatch(sourcesLoaded(sources)))
            .catch(error => dispatch(appError(error)));
    };
}

export function sourcesLoaded(sources) {
    return {
        type: SOURCES_LOADED,
        sources
    }
}

export function loadArticles(sourceId) {
    return dispatch => {
        return DataSource.getInstance().getArticles(sourceId)
            .then(articles => dispatch(articlesLoaded(sourceId, articles)))
            .catch(error => dispatch(appError(error)));
    };
}

export function articlesLoaded(sourceId, articles) {
    return {
        type: ARTICLES_LOADED,
        sourceId,
        articles
    }
}

export function appError(error) {
    return {
        type: APP_ERROR,
        error
    }
}

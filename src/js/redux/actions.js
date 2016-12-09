import DataSource from '../DataSource';

export const INIT_APP = 'INIT_APP';
export const FILTER_CHANGED = 'FILTER_CHANGED';
export const LOAD_SOURCES = 'LOAD_SOURCES';
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const SOURCES_LOADED = 'SOURCES_LOADED';
export const ARTICLES_LOADED = 'ARTICLES_LOADED';
export const APP_ERROR = 'APP_ERROR';

export function initApp() {
    return dispatch  => {
        dispatch({
            type: INIT_APP,
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

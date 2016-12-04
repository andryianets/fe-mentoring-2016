export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const LOAD_SOURCES = 'LOAD_SOURCES';
export const LOAD_ARTICLES = 'LOAD_ARTICLES';

export function selectCategory(categoryId) {
    return {
        type: SELECT_CATEGORY,
        categoryId
    }
}

export function selectCountry(countryId) {
    return {
        type: SELECT_COUNTRY,
        countryId
    }
}

export function selectLanguage(languageId) {
    return {
        type: SELECT_LANGUAGE,
        languageId
    }
}

export function loadSources(choices) {
    return {
        type: LOAD_SOURCES,
        choices
    }
}

export function loadSources(sourceId) {
    return {
        type: LOAD_ARTICLES,
        sourceId
    }
}
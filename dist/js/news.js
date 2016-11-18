'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsAPI = function () {

    var ARTICLES_API_URL = 'https://newsapi.org/v1/articles';
    var SOURCES_API_URL = 'https://newsapi.org/v1/sources';

    var Client = function () {
        function Client(apiKey) {
            _classCallCheck(this, Client);

            this.apiKey = apiKey;
        }

        _createClass(Client, [{
            key: 'getSources',
            value: function getSources(params) {
                return this.doRequest(SOURCES_API_URL, params);
            }
        }, {
            key: 'getArticles',
            value: function getArticles() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                return this.doRequest(ARTICLES_API_URL, params);
            }
        }, {
            key: 'getApiUrl',
            value: function getApiUrl(baseUrl) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var queryParts = [];
                for (var name in params) {
                    if (params[name]) {
                        queryParts.push(name + '=' + params[name]);
                    }
                }
                var urlSuffix = queryParts.join('&');
                return baseUrl + '?' + urlSuffix;
            }
        }, {
            key: 'doRequest',
            value: function doRequest(url) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                params.apiKey = this.apiKey;
                return fetch(this.getApiUrl(url, params)).then(function (response) {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.json();
                });
            }
        }], [{
            key: 'availableCategories',
            get: function get() {
                return ['business', 'entertainment', 'gaming', 'general', 'music', 'science-and-nature', 'sport', 'technology'];
            }
        }, {
            key: 'availableLanguages',
            get: function get() {
                return ['en', 'de', 'fr'];
            }
        }, {
            key: 'availableCountries',
            get: function get() {
                return ['au', 'de', 'gb', 'in', 'it', 'us'];
            }
        }]);

        return Client;
    }();

    return {
        Client: Client
    };
}();
//# sourceMappingURL=news.js.map
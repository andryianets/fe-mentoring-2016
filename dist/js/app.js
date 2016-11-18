'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'transpiller for hex values';
if (!NewsAPI) throw 'NewsAPI lib not included';

var App = function () {

    /* Public */

    function App() {
        _classCallCheck(this, App);

        this.categoriesChoicesElement = document.getElementById('categoriesChoices');
        this.countriesChoicesElement = document.getElementById('countriesChoices');
        this.langChoicesElement = document.getElementById('langChoices');
        this.contentElement = document.getElementById('content');

        this.currentChoices = {};

        this.newsClient = new NewsAPI.Client('a90095ec1a4d42d0a97bc23915858b11');
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            this.initChoices();
            this.updateSources();
        }
    }, {
        key: 'initChoices',
        value: function initChoices() {
            var _this = this;

            this.categoriesChoicesElement.innerHTML = [this.getChoiceTpl('category', 'All', '', true)].concat(NewsAPI.Client.availableCategories.map(function (value) {
                return _this.getChoiceTpl('category', value, value);
            })).join('');

            this.countriesChoicesElement.innerHTML = [this.getChoiceTpl('country', 'All', '', true)].concat(NewsAPI.Client.availableCountries.map(function (value) {
                return _this.getChoiceTpl('country', value, value);
            })).join('');

            this.langChoicesElement.innerHTML = [this.getChoiceTpl('language', 'All', '', true)].concat(NewsAPI.Client.availableLanguages.map(function (value) {
                return _this.getChoiceTpl('language', value, value);
            })).join('');
        }
    }, {
        key: 'updateSources',
        value: function updateSources(selectedNode) {
            var _this2 = this;

            if (selectedNode) {
                var radiosContainer = selectedNode.parentElement.parentElement;
                Array.from(radiosContainer.getElementsByTagName('label')).forEach(function (labelNode) {
                    labelNode.className = labelNode === selectedNode.parentElement ? 'selected' : undefined;
                });

                var param = selectedNode.name,
                    value = selectedNode.value;

                this.currentChoices[param] = value;
            }

            var promise = this.newsClient.getSources(this.currentChoices).then(function (data) {
                var formattedSources = data.sources.map(function (source) {
                    return _this2.getSourceTpl(source);
                });
                _this2.contentElement.innerHTML = formattedSources.join('');
                return data.sources;
            }).catch(this.handleError.bind(this));
        }
    }, {
        key: 'updateArticles',
        value: function updateArticles(source) {
            var _this3 = this;

            var sourcesElement = document.getElementById('articles_of_' + source);
            if (sourcesElement.children.length > 0) {
                sourcesElement.innerHTML = '';
            } else {
                this.newsClient.getArticles({ source: source }).then(function (data) {
                    var formattedArticles = data.articles.map(function (article) {
                        return _this3.getArticleTpl(article);
                    });
                    sourcesElement.innerHTML = formattedArticles.join('');
                }).catch(this.handleError.bind(this));
            }
        }

        /* Private */

    }, {
        key: 'getChoiceTpl',
        value: function getChoiceTpl(name, label, value, checked) {
            return '<label for="' + name + '_' + value + '" class="' + (checked && 'selected') + '">\n                    <input type="radio" id="' + name + '_' + value + '" name="' + name + '" value="' + value + '" onchange="app.updateSources(this)" ' + (checked && 'checked') + ' />\n                    ' + label + '\n                </label>';
        }
    }, {
        key: 'getSourceTpl',
        value: function getSourceTpl(source) {
            return '<div class="source" id="source_' + source.id + '">\n                    <div class="logo">\n                        <a href="javascript:void(0)" title="' + source.name + '" onclick="app.updateArticles(\'' + source.id + '\')">\n                            <img src="' + source.urlsToLogos.medium + '" height="60" />\n                        </a>\n                    </div>\n                    <div class="articles" id="articles_of_' + source.id + '"></div>\n                </div>';
        }
    }, {
        key: 'getArticleTpl',
        value: function getArticleTpl(article) {
            //return `<pre>${JSON.stringify(article, undefined, ' ')}</pre>`;

            return '<a href="' + article.url + '" target="_blank" title="' + article.title + '">\n                    <img src="' + article.urlToImage + '" height="120" />\n                </a>';
        }
    }, {
        key: 'handleError',
        value: function handleError(error) {
            this.contentElement.innerHTML = '<h4 class="error">' + error + '</h4>';
        }
    }]);

    return App;
}();
//# sourceMappingURL=app.js.map
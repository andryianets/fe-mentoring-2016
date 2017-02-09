webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(2);
	
	__webpack_require__(299);
	
	__webpack_require__(300);
	
	__webpack_require__(309);
	
	__webpack_require__(311);
	
	__webpack_require__(313);
	
	__webpack_require__(315);
	
	__webpack_require__(317);
	
	__webpack_require__(319);
	
	__webpack_require__(321);
	
	__webpack_require__(322);
	
	__webpack_require__(323);
	
	__webpack_require__(325);
	
	__webpack_require__(328);
	
	__webpack_require__(329);

/***/ },

/***/ 300:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 323:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _states = __webpack_require__(334);
	
	var _states2 = _interopRequireDefault(_states);
	
	__webpack_require__(341);
	
	__webpack_require__(342);
	
	__webpack_require__(343);
	
	__webpack_require__(346);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module(_app2.default).config(function ($stateProvider, $urlRouterProvider) {
	
	    $stateProvider.state(_states2.default.LOGIN, {
	        url: '/login',
	        template: '<login />'
	    }).state(_states2.default.APP, {
	        abstract: true,
	        url: '/app',
	        template: __webpack_require__(347),
	        resolve: {
	            user: function user(DataSourceService) {
	                return DataSourceService.checkLogin();
	            }
	        }
	    }).state(_states2.default.ARTICLES, {
	        url: '/app/articles',
	        template: '<articles-list />'
	    }).state(_states2.default.ARTICLE_EDIT, {
	        url: '/app/articles/:id',
	        template: '<article-form data="$resolve.article" />',
	        resolve: {
	            article: function article($stateParams, Article) {
	                return Article.load({}, { _id: $stateParams.id }).$promise;
	            }
	        }
	    }).state(_states2.default.ARTICLE_ADD, {
	        url: '/app/addArticle',
	        template: '<article-form data="null" />'
	    });
	
	    $urlRouterProvider.otherwise('/login');
	}).run(function ($log, $rootScope, $state, editableOptions) {
	    editableOptions.theme = 'bs3';
	
	    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	
	        if (toState.name !== _states2.default.LOGIN && _.includes([403, 401], error.status)) {
	            event.preventDefault();
	            $state.go(_states2.default.LOGIN);
	        }
	    });
	});
	
	// manual bootstrap
	angular.element(function () {
	    angular.bootstrap(document.getElementById('angularRoot'), [_app2.default]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(330)))

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _login = __webpack_require__(333);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _articles = __webpack_require__(336);
	
	var _articles2 = _interopRequireDefault(_articles);
	
	var _article = __webpack_require__(338);
	
	var _article2 = _interopRequireDefault(_article);
	
	var _states = __webpack_require__(334);
	
	var _states2 = _interopRequireDefault(_states);
	
	var _pagination = __webpack_require__(340);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var APP = angular.module('todoApp', ['ngMessages', 'ngResource', 'ui.router', 'xeditable', 'mgcrea.ngStrap']);
	
	APP.constant('states', _states2.default).component('pagination', _pagination2.default).component('login', _login2.default).component('articlesList', _articles2.default).component('articleForm', _article2.default);
	
	exports.default = APP.name;

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _states = __webpack_require__(334);
	
	var _states2 = _interopRequireDefault(_states);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoginController = function () {
	    function LoginController($state, DataSourceService) {
	        var _this = this;
	
	        _classCallCheck(this, LoginController);
	
	        this.ready = false;
	        this.auth = {
	            login: '',
	            pass: ''
	        };
	        this.user = null;
	        this.DataSourceService = DataSourceService;
	        this.$state = $state;
	
	        this.DataSourceService.checkLogin().then(this.loginSuccess.bind(this)).catch(function (error) {
	            _this.ready = true;
	        });
	    }
	
	    _createClass(LoginController, [{
	        key: 'doLogin',
	        value: function doLogin() {
	            this.DataSourceService.doLogin(this.auth.login, this.auth.pass).then(this.loginSuccess.bind(this)).catch(this.loginFailed.bind(this));
	        }
	    }, {
	        key: 'loginSuccess',
	        value: function loginSuccess(user) {
	            this.user = user;
	            this.$state.go(_states2.default.ARTICLES);
	        }
	    }, {
	        key: 'loginFailed',
	        value: function loginFailed(error) {
	            console.error('Wrong login: ', error);
	            //show alert
	        }
	    }]);
	
	    return LoginController;
	}();
	
	exports.default = {
	    controller: LoginController,
	    template: __webpack_require__(335)
	};

/***/ },

/***/ 334:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var AppStates = {
	    LOGIN: 'login',
	
	    APP: 'app',
	    ARTICLES: 'app.articles',
	    ARTICLE_EDIT: 'app.articleEdit',
	    ARTICLE_ADD: 'app.articleAdd'
	};
	
	exports.default = AppStates;

/***/ },

/***/ 335:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" style=\"padding-top: 60px;\" ng-show=\"$ctrl.ready\">\n    <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Please sign in</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form accept-charset=\"UTF-8\" role=\"form\" ng-submit=\"$ctrl.doLogin()\">\n\n                    <fieldset>\n\n                        <div class=\"form-group\">\n                            <input class=\"form-control\"\n                                   placeholder=\"Login\"\n                                   name=\"login\"\n                                   type=\"text\"\n                                   ng-model=\"$ctrl.auth.login\"\n                                   required\n                            >\n                        </div>\n\n                        <div class=\"form-group\">\n                            <input class=\"form-control\"\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   type=\"password\"\n                                   value=\"\"\n                                   ng-model=\"$ctrl.auth.pass\"\n                                   required\n                            >\n                        </div>\n\n                        <input class=\"btn btn-lg btn-success btn-block\" type=\"submit\" value=\"Login\">\n\n                    </fieldset>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ArticlesController = function () {
	    function ArticlesController(Article) {
	        _classCallCheck(this, ArticlesController);
	
	        this.Article = Article;
	        this.articles = [];
	        this.itemsPerPage = 3;
	        this.currentPage = 0;
	    }
	
	    _createClass(ArticlesController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.loadList();
	        }
	    }, {
	        key: 'loadList',
	        value: function loadList() {
	            var _this = this;
	
	            //this.currentPage = 0;
	            this.Article.query().$promise.then(function (articles) {
	                _this.articles = articles;
	            });
	        }
	    }, {
	        key: 'update',
	        value: function update(article) {
	            article.$save();
	        }
	    }, {
	        key: 'remove',
	        value: function remove(article) {
	            var _this2 = this;
	
	            if (confirm('Are you sure?')) {
	                article.$delete(function () {
	                    _this2.loadList();
	                });
	            }
	        }
	    }]);
	
	    return ArticlesController;
	}();
	
	exports.default = {
	    controller: ArticlesController,
	    template: __webpack_require__(337)
	};

/***/ },

/***/ 337:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" style=\"padding-top: 60px;\">\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <span class=\"pull-left\">Articles</span>\n            <a class=\"btn btn-default btn-sm pull-right\" ui-sref=\"app.articleAdd\">\n                <span class=\"glyphicon glyphicon-plus\"></span> Add\n            </a>\n            <div class=\"clearfix\"></div>\n        </div>\n\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n            <th>ID</th>\n            <th>Title</th>\n            <th>Description</th>\n            <th>Author</th>\n            <th>Source</th>\n            <th>&nbsp;</th>\n            </thead>\n            <tbody>\n            <tr ng-repeat=\"article in $ctrl.articles | limitTo : $ctrl.itemsPerPage : $ctrl.itemsPerPage * $ctrl.currentPage\">\n                <td>{{article._id}}</td>\n                <td>\n                    {{article.title || 'Empty'}}\n                </td>\n                <td>{{article.description}}</td>\n                <td>\n                    {{article.author || 'N/A'}}\n                </td>\n                <td>{{article.source.name}}</td>\n                <td style=\"white-space: nowrap;\">\n                    <a class=\"btn btn-default btn-sm\" ui-sref=\"app.articleEdit({id: article._id})\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </a>\n                    <a class=\"btn btn-danger btn-sm\" ng-click=\"$ctrl.remove(article)\">\n                        <span class=\"glyphicon glyphicon-trash\"></span>\n                    </a>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div class=\"panel-footer\">\n            <pagination total-count=\"$ctrl.articles.length\"\n                        items-per-page=\"$ctrl.itemsPerPage\"\n                        current-page=\"$ctrl.currentPage\">\n\n            </pagination>\n        </div>\n\n    </div>\n\n</div>\n";

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _states = __webpack_require__(334);
	
	var _states2 = _interopRequireDefault(_states);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ArticleController = function () {
	    function ArticleController($state, Article) {
	        _classCallCheck(this, ArticleController);
	
	        this.$state = $state;
	        this.Article = Article;
	    }
	
	    _createClass(ArticleController, [{
	        key: '$postLink',
	        value: function $postLink() {
	            this.data = this.data || new this.Article({ source: { name: 'usa-today' } });
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            if (this.data._id) {
	                this.update();
	            } else {
	                this.create();
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var _this = this;
	
	            this.data.$save(function () {
	                _this.$state.go(_states2.default.ARTICLES);
	            });
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            var _this2 = this;
	
	            this.data.$create(function () {
	                _this2.$state.go(_states2.default.ARTICLES);
	            });
	        }
	    }]);
	
	    return ArticleController;
	}();
	
	exports.default = {
	    controller: ArticleController,
	    template: __webpack_require__(339),
	    bindings: {
	        data: '<'
	    }
	};

/***/ },

/***/ 339:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" style=\"padding-top: 60px;\">\n\n    <a class=\"btn btn-default btn-sm\" ui-sref=\"app.articles\">\n        <span class=\"glyphicon glyphicon-arrow-left\"></span> Back to list\n    </a>\n\n    <hr/>\n\n    <form role=\"form\" ng-submit=\"$ctrl.save()\">\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Article {{$ctrl.data._id || 'creation'}}</div>\n\n            <div class=\"panel-body\">\n\n                <div class=\"form-group\">\n                    <label>Title</label>\n                    <input class=\"form-control\" type=\"text\" ng-model=\"$ctrl.data.title\" required />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <textarea class=\"form-control\" rows=\"5\" ng-model=\"$ctrl.data.description\" required></textarea>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Author</label>\n                    <input class=\"form-control\" type=\"text\" ng-model=\"$ctrl.data.author\"/>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Source</label>\n                    <input class=\"form-control\" type=\"text\" ng-model=\"$ctrl.data.source.name\" disabled />\n                </div>\n\n            </div>\n\n            <div class=\"panel-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n            </div>\n\n        </div>\n\n    </form>\n\n</div>";

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PaginationController = function () {
	    function PaginationController() {
	        _classCallCheck(this, PaginationController);
	
	        this.pages = [];
	    }
	
	    _createClass(PaginationController, [{
	        key: '$onChanges',
	        value: function $onChanges(changesObj) {
	            if (changesObj.totalCount !== undefined || changesObj.itemsPerPage !== undefined) {
	                this.pages = _.times(Math.ceil(this.totalCount / this.itemsPerPage), function (index) {
	                    return index + 1;
	                });
	            }
	        }
	    }, {
	        key: 'selectPage',
	        value: function selectPage(index) {
	            this.currentPage = index;
	            this.onChange && this.onChange(index);
	        }
	    }, {
	        key: 'displayedFrom',
	        get: function get() {
	            return this.itemsPerPage * this.currentPage + 1;
	        }
	    }, {
	        key: 'displayedTo',
	        get: function get() {
	            return Math.min(this.totalCount, this.itemsPerPage * (this.currentPage + 1));
	        }
	    }]);
	
	    return PaginationController;
	}();
	
	exports.default = {
	    bindings: {
	        totalCount: '<',
	        itemsPerPage: '<',
	        currentPage: '=',
	        onChange: '&'
	    },
	    controller: PaginationController,
	    template: '<div class="btn-group" role="group">\n                <button type="button"\n                        ng-repeat="page in $ctrl.pages"\n                        class="btn"\n                        ng-class="{\'btn-primary\': $ctrl.currentPage === $index, \'btn-default\': $ctrl.currentPage !== $index}"\n                        ng-click="$ctrl.selectPage($index)">{{page}}</button>\n            </div>\n            <span class="label label-primary">{{$ctrl.displayedFrom}} to {{$ctrl.displayedTo}} from {{$ctrl.totalCount}}</span>'
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(330)))

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module(_app2.default).filter('pages', function () {
	    return function (items, itemsPerPage, current) {
	        console.log(items.length, itemsPerPage, current);
	        return _.times(Math.ceil(items.length / itemsPerPage), function (index) {
	            return {
	                label: index + 1,
	                active: current === index
	            };
	        });
	    };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(330)))

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KEY_TODOS = exports.KEY_LOGGED_IN = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KEY_LOGGED_IN = exports.KEY_LOGGED_IN = 'TODO_APP.KEY_LOGGED_IN';
	var KEY_TODOS = exports.KEY_TODOS = 'TODO_APP.KEY_TODOS';
	
	var StorageService = function () {
	    function StorageService($q) {
	        _classCallCheck(this, StorageService);
	
	        this.storage = localStorage;
	        this.$q = $q;
	    }
	
	    _createClass(StorageService, [{
	        key: 'setItem',
	        value: function setItem(key, value) {
	            this.storage.setItem(key, JSON.stringify(value));
	            return this.$q.resolve(value);
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	            var value = this.storage.getItem(key);
	            return this.$q.resolve(value && JSON.parse(value) || defaultValue);
	        }
	    }]);
	
	    return StorageService;
	}();
	
	angular.module(_app2.default).service('StorageService', StorageService);

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _DataSource = __webpack_require__(344);
	
	var _DataSource2 = _interopRequireDefault(_DataSource);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataSourceService = function () {
	    function DataSourceService($q) {
	        _classCallCheck(this, DataSourceService);
	
	        this.$q = $q;
	    }
	
	    _createClass(DataSourceService, [{
	        key: "checkLogin",
	        value: function checkLogin() {
	            return this.$q.resolve(_DataSource2.default.getInstance().checkLogin());
	        }
	    }, {
	        key: "doLogin",
	        value: function doLogin(login, pass) {
	            return this.$q.resolve(_DataSource2.default.getInstance().doLogin(login, pass));
	        }
	    }, {
	        key: "getSources",
	        value: function getSources(params) {
	            return this.$q.resolve(_DataSource2.default.getInstance().getSources(params));
	        }
	    }, {
	        key: "getArticles",
	        value: function getArticles(sourceId) {
	            return this.$q.resolve(_DataSource2.default.getInstance().getArticles(sourceId));
	        }
	    }]);
	
	    return DataSourceService;
	}();
	
	angular.module(_app2.default).service('DataSourceService', DataSourceService);

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataSource = function () {
	    _createClass(DataSource, null, [{
	        key: 'getInstance',
	        value: function getInstance() {
	            return DataSource.instance || new DataSource();
	        }
	    }, {
	        key: 'createSource',
	        value: function createSource(data) {
	            return Object.assign(new Source(), data);
	        }
	    }, {
	        key: 'createArticle',
	        value: function createArticle(sourceId, data) {
	            return Object.assign(new Article(), data, { sourceId: sourceId });
	        }
	    }, {
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
	
	    function DataSource() {
	        _classCallCheck(this, DataSource);
	
	        if (DataSource.instance) {
	            throw 'DataSource instance already instantiated';
	        }
	
	        DataSource.instance = this;
	
	        var config = __webpack_require__(345);
	    }
	
	    _createClass(DataSource, [{
	        key: 'getSources',
	        value: function getSources(params) {
	            return this.doRequest('/api/articles/sources', 'GET', params);
	        }
	    }, {
	        key: 'getArticles',
	        value: function getArticles(sourceId) {
	            return this.doRequest('/api/articles', 'GET', { 'source.id': sourceId });
	        }
	    }, {
	        key: 'getUsers',
	        value: function getUsers() {
	            return this.doRequest('/api/users', 'GET');
	        }
	    }, {
	        key: 'addArticle',
	        value: function addArticle(data) {
	            return this.doRequest('/api/articles', 'POST', {}, data);
	        }
	    }, {
	        key: 'removeArticle',
	        value: function removeArticle(id) {
	            return this.doRequest('/api/articles/' + id, 'DELETE');
	        }
	    }, {
	        key: 'checkLogin',
	        value: function checkLogin() {
	            return this.doRequest('/api/auth');
	        }
	    }, {
	        key: 'doLogin',
	        value: function doLogin(login, pass) {
	            return this.doRequest('/api/auth/login', 'POST', {}, { login: login, pass: pass });
	        }
	    }, {
	        key: 'doReg',
	        value: function doReg(login, pass) {
	            return this.doRequest('/api/auth/reg', 'POST', {}, { login: login, pass: pass });
	        }
	    }, {
	        key: 'doRequest',
	        value: function doRequest(url) {
	            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
	            var queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	            var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	
	            if (true) {
	                console.log('DataSource doRequest()', method, queryParams);
	            }
	
	            var req = new Request(this.createUrl(url, queryParams), {
	                headers: {
	                    'Accept': 'application/json',
	                    'Content-Type': 'application/json'
	                },
	                credentials: 'include',
	                method: method,
	                body: body && JSON.stringify(body)
	            });
	
	            return fetch(req).then(function (response) {
	                if (!response.ok) {
	                    throw 'DataSource error';
	                }
	                return response.json();
	            });
	        }
	    }, {
	        key: 'createUrl',
	        value: function createUrl(baseUrl) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            var queryParts = [];
	            for (var name in params) {
	                if (params[name]) {
	                    queryParts.push(name + '=' + params[name]);
	                }
	            }
	            var urlSuffix = queryParts.length ? '?' + queryParts.join('&') : '';
	            return '' + baseUrl + urlSuffix;
	        }
	    }]);
	
	    return DataSource;
	}();
	
	exports.default = DataSource;

/***/ },

/***/ 345:
/***/ function(module, exports) {

	module.exports = {
		"newsApi": {
			"apiKey": "a90095ec1a4d42d0a97bc23915858b11"
		},
		"mLab": {
			"apiKey": "lIo66jGFt2WmdrZEXdbDxFpXbRgGqVJM"
		},
		"testTree": {
			"string": "string",
			"array": [
				{
					"string": "string"
				}
			]
		}
	};

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module(_app2.default).factory('Article', function ($resource) {
	    return $resource('/api/articles/:id', { id: '@_id' }, {
	        query: { method: 'GET', url: '/api/articles?source.id=usa-today', isArray: true },
	        load: { method: 'GET' },
	        save: { method: 'PUT' },
	        create: { method: 'POST' },
	        delete: { method: 'DELETE' }
	    });
	}).name;

/***/ },

/***/ 347:
/***/ function(module, exports) {

	module.exports = "<div class=\"text-center\">\n    <a class=\"btn btn-default\" href=\"/api/auth/logout\">\n        <span class=\"glyphicon glyphicon-log-out\"></span>\n        Log out\n    </a>\n</div>\n\n<ui-view />";

/***/ }

});
//# sourceMappingURL=angular.js.map
webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// require('../scss/style.scss');
	//
	// window.loadAppModule = (appName) => {
	//     switch (appName) {
	//         case 'react':
	//             require.ensure(['./react'], () => {
	//                 require('./react');
	//             });
	//             break;
	//
	//         case 'angular':
	//             require.ensure(['./angular'], () => {
	//                 require('./angular');
	//             });
	//             break;
	//     }
	// };
	
	document.getElementById('startApp').innerHTML = '';
	__webpack_require__(1);

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(27);
	
	__webpack_require__(29);
	
	__webpack_require__(31);
	
	__webpack_require__(33);
	
	__webpack_require__(35);
	
	__webpack_require__(37);
	
	__webpack_require__(38);
	
	__webpack_require__(40);
	
	__webpack_require__(41);
	
	__webpack_require__(43);
	
	__webpack_require__(46);
	
	__webpack_require__(47);

/***/ },

/***/ 41:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(48);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(49);
	
	__webpack_require__(51);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module(_app2.default).config(function ($stateProvider, $urlRouterProvider) {
	
	    $stateProvider.state('login', {
	        url: '/login',
	        template: __webpack_require__(54),
	        controller: 'LoginController as ctrl',
	        resolve: {}
	    }).state('todos', {
	        url: '/todos',
	        template: __webpack_require__(55),
	        controller: 'TodosController as ctrl',
	        resolve: {}
	    });
	
	    $urlRouterProvider.otherwise('/login');
	});

/***/ },

/***/ 48:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = angular.module('todoApp', ['ngMessages', 'ui.router', 'xeditable',
	// 'ngToast',
	'mgcrea.ngStrap']).name;

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(48);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _storage = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoginController = function () {
	    function LoginController($state, StorageService) {
	        var _this = this;
	
	        _classCallCheck(this, LoginController);
	
	        this.auth = {};
	        this.$state = $state;
	        this.StorageService = StorageService;
	
	        this.StorageService.getItem(_storage.KEY_LOGGED_IN).then(function (loggedIn) {
	            loggedIn && _this.$state.go('todos');
	        });
	    }
	
	    _createClass(LoginController, [{
	        key: 'doLogin',
	        value: function doLogin() {
	            this.StorageService.setItem(_storage.KEY_LOGGED_IN, true);
	            this.$state.go('todos');
	        }
	    }]);
	
	    return LoginController;
	}();
	
	angular.module(_app2.default).controller('LoginController', LoginController);

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.KEY_TODOS = exports.KEY_LOGGED_IN = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(48);
	
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

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(48);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _storage = __webpack_require__(50);
	
	__webpack_require__(52);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TodosController = function () {
	    function TodosController(StorageService, $scope) {
	        var _this = this;
	
	        _classCallCheck(this, TodosController);
	
	        this.StorageService = StorageService;
	        this.items = [];
	        this.filteredItems = [];
	        this.StorageService.getItem(_storage.KEY_TODOS, []).then(function (items) {
	            return _this.items = items;
	        });
	
	        this.newItemTitle = null;
	
	        this.todoFilter = null;
	        this.todoFilters = [{
	            value: null,
	            label: 'All'
	        }, {
	            value: true,
	            label: 'Done'
	        }, {
	            value: false,
	            label: 'Undone'
	        }];
	    }
	
	    _createClass(TodosController, [{
	        key: 'add',
	        value: function add() {
	            var _this2 = this;
	
	            this.StorageService.setItem(_storage.KEY_TODOS, [{
	                title: this.newItemTitle,
	                done: false
	            }].concat(this.items)).then(function (items) {
	                _this2.newItemTitle = null;
	                _this2.items = items;
	            });
	        }
	    }, {
	        key: 'remove',
	        value: function remove(item) {
	            var _this3 = this;
	
	            confirm('Are you sure?') && this.StorageService.setItem(_storage.KEY_TODOS, _.without(this.items, item)).then(function (items) {
	                _this3.items = items;
	            });
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle(item) {
	            item.done = !todo.done;
	            this.save();
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            this.StorageService.setItem(_storage.KEY_TODOS, this.items);
	        }
	    }, {
	        key: 'displayItems',
	        get: function get() {
	            return this.todoFilter ? _.filter(this.items, { done: this.todoFilter }) : this.items;
	        }
	    }]);
	
	    return TodosController;
	}();
	
	angular.module(_app2.default).controller('TodosController', TodosController);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },

/***/ 52:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 54:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" style=\"padding-top: 60px;\">\n    <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Please sign in</h3>\n            </div>\n            <div class=\"panel-body\">\n                <form accept-charset=\"UTF-8\" role=\"form\" ng-submit=\"ctrl.doLogin()\">\n\n                    <fieldset>\n\n                        <div class=\"form-group\">\n                            <input class=\"form-control\"\n                                   placeholder=\"Login\"\n                                   name=\"email\"\n                                   type=\"text\"\n                                   ng-model=\"ctrl.auth.login\"\n                                   required\n                                   ng-minlength='8'\n                            >\n                        </div>\n\n                        <div class=\"form-group\">\n                            <input class=\"form-control\"\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   type=\"password\"\n                                   value=\"\"\n                                   ng-model=\"ctrl.auth.pass\"\n                                   required\n                                   ng-minlength='8'\n                            >\n                        </div>\n\n                        <input class=\"btn btn-lg btn-success btn-block\" type=\"submit\" value=\"Login\">\n\n                    </fieldset>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = "<div class=\"todolist row\" style=\"padding-top: 40px;\">\n\n    <div class=\"col-md-offset-3 col-md-6\">\n\n        <div class=\"form-group\">\n            <select class=\"form-control\"\n                    ng-model=\"ctrl.todoFilter\"\n                    ng-options=\"filter.value as filter.label for filter in ctrl.todoFilters\"\n                    ng-change=\"ctrl.filterChanged()\">\n            </select>\n        </div>\n\n        <form role=\"form\" ng-submit=\"ctrl.add()\">\n\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Add todo\"\n                       ng-model=\"ctrl.newItemTitle\" required>\n                <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\">Add</button>\n                        </span>\n            </div>\n\n        </form>\n\n        <hr>\n\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\"\n                ng-repeat=\"todo in ctrl.displayItems track by $index\"\n                ng-class=\"{'done': todo.done}\">\n\n                <div class=\"tick pull-left\">\n                    <span class=\"glyphicon glyphicon-ok text-success\" ng-class=\"{'undone': !todo.done}\"></span>\n                </div>\n\n                <div class=\"checkbox pull-left\">\n                    <label><input type=\"checkbox\" ng-model=\"todo.done\"\n                                  ng-change=\"ctrl.save()\"/>{{todo.title}}</label>\n                </div>\n\n                <button class=\"btn btn-sm btn-danger pull-right\" ng-click=\"ctrl.remove(todo)\">\n                    <span class=\"glyphicon glyphicon-trash\"></span>\n                </button>\n\n                <div class=\"clearfix\"></div>\n\n            </li>\n        </ul>\n\n    </div>\n</div>";

/***/ }

});
//# sourceMappingURL=app.js.map
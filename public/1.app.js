webpackJsonp([1],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	var _configureStore = __webpack_require__(306);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _actions = __webpack_require__(336);
	
	var _PageMediator = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	__webpack_require__(349);
	
	var App = function () {
	    _createClass(App, null, [{
	        key: 'getInstance',
	
	
	        /* Public */
	
	        value: function getInstance(appContainerSelector) {
	            return App.instance || new App(appContainerSelector);
	        }
	    }]);
	
	    function App(appContainerSelector) {
	        var _this = this;
	
	        _classCallCheck(this, App);
	
	        if (App.instance) {
	            throw 'App instance already instantiated';
	        }
	
	        App.instance = this;
	
	        this.store = (0, _configureStore2.default)();
	        this.prevState = {};
	        this.store.subscribe(this.handleStoreChange.bind(this));
	
	        this.pageMediator = new _PageMediator.PageMediator(appContainerSelector);
	
	        this.pageMediator.addEventListener(_PageMediator.PageMediatorEvents.LoginTry, function (login, pass) {
	            _this.store.dispatch((0, _actions.tryLogin)(login, pass));
	        });
	
	        this.pageMediator.addEventListener(_PageMediator.PageMediatorEvents.RegTry, function (login, pass) {
	            _this.store.dispatch((0, _actions.tryReg)(login, pass));
	        });
	
	        this.pageMediator.addEventListener(_PageMediator.PageMediatorEvents.ChoiceSelected, function (param, value) {
	            _this.store.dispatch((0, _actions.filterChanged)(param, value));
	        });
	
	        this.pageMediator.addEventListener(_PageMediator.PageMediatorEvents.SourceSelected, function (sourceId) {
	            _this.store.dispatch((0, _actions.loadArticles)(sourceId));
	        });
	
	        this.pageMediator.addEventListener(_PageMediator.PageMediatorEvents.ArticleAdd, function (data) {
	            var state = _this.store.getState();
	            if (state.articlesList.sourceId) {
	                data.source.id = state.articlesList.sourceId;
	                _this.store.dispatch((0, _actions.addArticle)(data));
	            }
	        });
	
	        this.pageMediator.addEventListener(_PageMediator.PageMediatorEvents.ArticleRemove, function (id) {
	            var state = _this.store.getState();
	            _this.store.dispatch((0, _actions.removeArticle)(id, state.articlesList.sourceId));
	        });
	
	        this.pageMediator.addEventListener(_PageMediator.PageMediatorEvents.LoadUsers, function () {
	            _this.store.dispatch((0, _actions.loadUsers)());
	        });
	
	        this.store.dispatch((0, _actions.initApp)());
	    }
	
	    _createClass(App, [{
	        key: 'handleStoreChange',
	        value: function handleStoreChange() {
	            var state = this.store.getState();
	
	            if (this.prevState.loggedInUser !== state.loggedInUser) {
	                this.pageMediator.setLoggedInUser(state.loggedInUser);
	            }
	
	            if (this.prevState.filtersData !== state.filtersData) {
	                this.pageMediator.setCategories(state.filtersData.categories);
	                this.pageMediator.setCountries(state.filtersData.countries);
	                this.pageMediator.setLanguages(state.filtersData.languages);
	            }
	
	            if (this.prevState.sourcesList !== state.sourcesList) {
	                this.pageMediator.setSources(state.sourcesList);
	            }
	
	            if (state.articlesList.sourceId && this.prevState.articlesList !== state.articlesList) {
	                this.pageMediator.setArticles(state.articlesList.sourceId, state.articlesList.articles);
	            }
	
	            if (this.prevState.errorMessage !== state.errorMessage) {
	                this.pageMediator.setError(state.errorMessage);
	            }
	
	            //users + article
	
	            this.prevState = state;
	        }
	    }]);
	
	    return App;
	}();
	
	exports.default = App;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(307);
	
	var _reduxThunk = __webpack_require__(328);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(329);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(335);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var middlewares = [_reduxThunk2.default];
	
	if (true) {
	    middlewares.push((0, _reduxLogger2.default)());
	}
	
	function configureStore() {
	    return (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middlewares));
	}

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(308);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(323);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(325);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(326);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(327);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(324);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(309);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(319);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(310),
	    getPrototype = __webpack_require__(316),
	    isObjectLike = __webpack_require__(318);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(311),
	    getRawTag = __webpack_require__(314),
	    objectToString = __webpack_require__(315);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(312);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(313);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },

/***/ 313:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(311);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },

/***/ 315:
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(317);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },

/***/ 317:
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },

/***/ 318:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(320);


/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(322);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(321)(module)))

/***/ },

/***/ 321:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 322:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(308);
	
	var _isPlainObject = __webpack_require__(309);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(324);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (true) {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },

/***/ 324:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 325:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(327);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },

/***/ 327:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },

/***/ 328:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }
	
	        return next(action);
	      };
	    };
	  };
	}
	
	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;
	
	exports['default'] = thunk;

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _core = __webpack_require__(330);
	
	var _helpers = __webpack_require__(331);
	
	var _defaults = __webpack_require__(334);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var loggerOptions = _extends({}, _defaults2.default, options);
	
	  var logger = loggerOptions.logger;
	  var transformer = loggerOptions.transformer;
	  var stateTransformer = loggerOptions.stateTransformer;
	  var errorTransformer = loggerOptions.errorTransformer;
	  var predicate = loggerOptions.predicate;
	  var logErrors = loggerOptions.logErrors;
	  var diffPredicate = loggerOptions.diffPredicate;
	
	  // Return if 'console' object is not defined
	
	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
	  }
	
	  var logBuffer = [];
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;
	
	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	exports.default = createLogger;
	module.exports = exports['default'];

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.printBuffer = printBuffer;
	
	var _helpers = __webpack_require__(331);
	
	var _diff = __webpack_require__(332);
	
	var _diff2 = _interopRequireDefault(_diff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp;
	  var duration = options.duration;
	
	  return function (action, time, took) {
	    var parts = ['action'];
	    if (timestamp) {
	      parts.push('@ ' + time);
	    }
	    parts.push(action.type);
	    if (duration) {
	      parts.push('(in ' + took.toFixed(2) + ' ms)');
	    }
	    return parts.join(' ');
	  };
	}
	
	function printBuffer(buffer, options) {
	  var logger = options.logger;
	  var actionTransformer = options.actionTransformer;
	  var _options$titleFormatt = options.titleFormatter;
	  var titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt;
	  var collapsed = options.collapsed;
	  var colors = options.colors;
	  var level = options.level;
	  var diff = options.diff;
	
	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started;
	    var startedTime = logEntry.startedTime;
	    var action = logEntry.action;
	    var prevState = logEntry.prevState;
	    var error = logEntry.error;
	    var took = logEntry.took;
	    var nextState = logEntry.nextState;
	
	    var nextEntry = buffer[key + 1];
	
	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }
	
	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action) : collapsed;
	
	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
	    var title = titleFormatter(formattedAction, formattedTime, took);
	
	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }
	
	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');
	
	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }
	
	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
	    }
	
	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
	    }
	
	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }
	
	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }
	
	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('—— log end ——');
	    }
	  });
	}

/***/ },

/***/ 331:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	
	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	
	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;
	
	var _deepDiff = __webpack_require__(333);
	
	var _deepDiff2 = _interopRequireDefault(_deepDiff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};
	
	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}
	
	function render(diff) {
	  var kind = diff.kind;
	  var path = diff.path;
	  var lhs = diff.lhs;
	  var rhs = diff.rhs;
	  var index = diff.index;
	  var item = diff.item;
	
	  switch (kind) {
	    case 'E':
	      return path.join('.') + ' ' + lhs + ' → ' + rhs;
	    case 'N':
	      return path.join('.') + ' ' + rhs;
	    case 'D':
	      return '' + path.join('.');
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return null;
	  }
	}
	
	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);
	
	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }
	
	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;
	
	      var output = render(elem);
	
	      logger.log('%c ' + dictionary[kind].text, style(kind), output);
	    });
	  } else {
	    logger.log('—— no diff ——');
	  }
	
	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('—— diff end —— ');
	  }
	}
	module.exports = exports['default'];

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';
	
	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }
	
	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }
	
	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }
	
	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);
	
	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);
	
	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);
	
	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);
	
	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }
	
	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }
	
	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }
	
	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }
	
	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }
	
	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }
	
	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }
	
	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }
	
	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }
	
	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }
	
	  Object.defineProperties(accumulateDiff, {
	
	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });
	
	  return accumulateDiff;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 334:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,
	
	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports['default'];

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(307);
	
	var _actions = __webpack_require__(336);
	
	function loggedInUser() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.LOGIN_SUCCESS:
	            return Object.assign({}, state, action.user);
	        case _actions.LOGIN_FAILED:
	            return null;
	        default:
	            return state;
	    }
	}
	
	function filtersData() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { categories: [], countries: [], languages: [] };
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.INIT_FILTERS:
	            return Object.assign({}, state, action.filterData);
	        default:
	            return state;
	    }
	}
	
	function headerFilters() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.FILTER_CHANGED:
	            return Object.assign({}, state, action.change);
	        default:
	            return state;
	    }
	}
	
	function sourcesList() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.LOAD_SOURCES:
	            return [];
	        case _actions.SOURCES_LOADED:
	            return action.sources;
	        default:
	            return state;
	    }
	}
	
	function articlesList() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.LOAD_ARTICLES:
	            return {
	                sourceId: action.sourceId,
	                articles: []
	            };
	        case _actions.ARTICLES_LOADED:
	            return {
	                sourceId: action.sourceId,
	                articles: action.articles
	            };
	        case _actions.ARTICLE_DELETED:
	            var indexToDelete = -1;
	            state.articles.forEach(function (article, index) {
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
	
	function users() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.USERS_LOADED:
	            return action.users;
	        default:
	            return state;
	    }
	}
	
	function errorMessage() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actions.APP_ERROR:
	            return action.error;
	        case _actions.LOGIN_FAILED:
	            return action.showError ? 'Login failed' : state;
	        case _actions.REG_FAILED:
	            return 'Reg failed';
	        default:
	            return null;
	    }
	}
	
	var rootReducer = (0, _redux.combineReducers)({
	
	    //common
	    loggedInUser: loggedInUser,
	
	    //public view
	    filtersData: filtersData,
	    headerFilters: headerFilters,
	    sourcesList: sourcesList,
	    articlesList: articlesList,
	    errorMessage: errorMessage,
	
	    //admin view
	    users: users
	});
	
	exports.default = rootReducer;

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.APP_ERROR = exports.USERS_LOADED = exports.ARTICLE_DELETED = exports.ARTICLES_LOADED = exports.SOURCES_LOADED = exports.LOAD_ARTICLES = exports.LOAD_SOURCES = exports.FILTER_CHANGED = exports.REG_FAILED = exports.LOGIN_FAILED = exports.LOGIN_SUCCESS = exports.INIT_FILTERS = exports.INIT_APP = undefined;
	exports.initApp = initApp;
	exports.tryLogin = tryLogin;
	exports.tryReg = tryReg;
	exports.loginSuccess = loginSuccess;
	exports.loginFailed = loginFailed;
	exports.regFailed = regFailed;
	exports.initFilters = initFilters;
	exports.filterChanged = filterChanged;
	exports.loadSources = loadSources;
	exports.sourcesLoaded = sourcesLoaded;
	exports.loadArticles = loadArticles;
	exports.articlesLoaded = articlesLoaded;
	exports.addArticle = addArticle;
	exports.removeArticle = removeArticle;
	exports.articleDeleted = articleDeleted;
	exports.loadUsers = loadUsers;
	exports.usersLoaded = usersLoaded;
	exports.appError = appError;
	
	var _DataSource = __webpack_require__(337);
	
	var _DataSource2 = _interopRequireDefault(_DataSource);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var INIT_APP = exports.INIT_APP = 'INIT_APP';
	var INIT_FILTERS = exports.INIT_FILTERS = 'INIT_FILTERS';
	var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
	var LOGIN_FAILED = exports.LOGIN_FAILED = 'LOGIN_FAILED';
	var REG_FAILED = exports.REG_FAILED = 'REG_FAILED';
	var FILTER_CHANGED = exports.FILTER_CHANGED = 'FILTER_CHANGED';
	var LOAD_SOURCES = exports.LOAD_SOURCES = 'LOAD_SOURCES';
	var LOAD_ARTICLES = exports.LOAD_ARTICLES = 'LOAD_ARTICLES';
	var SOURCES_LOADED = exports.SOURCES_LOADED = 'SOURCES_LOADED';
	var ARTICLES_LOADED = exports.ARTICLES_LOADED = 'ARTICLES_LOADED';
	var ARTICLE_DELETED = exports.ARTICLE_DELETED = 'ARTICLE_DELETED';
	var USERS_LOADED = exports.USERS_LOADED = 'USERS_LOADED';
	var APP_ERROR = exports.APP_ERROR = 'APP_ERROR';
	
	function initApp() {
	    return function (dispatch) {
	        dispatch({
	            type: INIT_APP
	        });
	        return _DataSource2.default.getInstance().checkLogin().then(function (user) {
	            return dispatch(loginSuccess(user));
	        }).catch(function (error) {
	            return dispatch(loginFailed(error));
	        });
	    };
	}
	
	function tryLogin(login, pass) {
	    return function (dispatch) {
	        return _DataSource2.default.getInstance().doLogin(login, pass).then(function (user) {
	            dispatch(loginSuccess(user));
	        }).catch(function (error) {
	            return dispatch(loginFailed(error, true));
	        });
	    };
	}
	
	function tryReg(login, pass) {
	    return function (dispatch) {
	        return _DataSource2.default.getInstance().doReg(login, pass).then(function (user) {
	            dispatch(loginSuccess(user));
	        }).catch(function (error) {
	            return dispatch(regFailed(error));
	        });
	    };
	}
	
	function loginSuccess(user) {
	    return function (dispatch) {
	        dispatch({
	            type: LOGIN_SUCCESS,
	            user: user
	        });
	        dispatch(initFilters());
	    };
	}
	
	function loginFailed(error) {
	    var showError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    return {
	        type: LOGIN_FAILED,
	        error: error,
	        showError: showError
	    };
	}
	
	function regFailed(error) {
	    return {
	        type: REG_FAILED,
	        error: error
	    };
	}
	
	function initFilters() {
	    return function (dispatch) {
	        dispatch({
	            type: INIT_FILTERS,
	            filterData: {
	                categories: _DataSource2.default.availableCategories,
	                countries: _DataSource2.default.availableCountries,
	                languages: _DataSource2.default.availableLanguages
	            }
	        });
	        dispatch(loadSources());
	    };
	}
	
	function filterChanged(param, value) {
	    return function (dispatch, getState) {
	        dispatch({
	            type: FILTER_CHANGED,
	            change: _defineProperty({}, param, value)
	        });
	        dispatch(loadSources(getState().headerFilters));
	    };
	}
	
	function loadSources() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	
	    return function (dispatch) {
	        return _DataSource2.default.getInstance().getSources(params).then(function (sources) {
	            return dispatch(sourcesLoaded(sources));
	        }).catch(function (error) {
	            return dispatch(appError(error));
	        });
	    };
	}
	
	function sourcesLoaded(sources) {
	    return {
	        type: SOURCES_LOADED,
	        sources: sources
	    };
	}
	
	function loadArticles(sourceId) {
	    return function (dispatch) {
	        return _DataSource2.default.getInstance().getArticles(sourceId).then(function (articles) {
	            return dispatch(articlesLoaded(sourceId, articles));
	        }).catch(function (error) {
	            return dispatch(appError(error));
	        });
	    };
	}
	
	function articlesLoaded(sourceId, articles) {
	    return {
	        type: ARTICLES_LOADED,
	        sourceId: sourceId,
	        articles: articles
	    };
	}
	
	function addArticle(data) {
	    return function (dispatch) {
	        return _DataSource2.default.getInstance().addArticle(data).then(function (article) {
	            return dispatch(loadArticles(article.source.id));
	        }).catch(function (error) {
	            return dispatch(appError(error));
	        });
	    };
	}
	
	function removeArticle(id, sourceId) {
	    return function (dispatch) {
	        return _DataSource2.default.getInstance().removeArticle(id).then(function (result) {
	            return dispatch(articleDeleted(id));
	        }).catch(function (error) {
	            return dispatch(appError(error));
	        });
	    };
	}
	
	function articleDeleted(id) {
	    return {
	        type: ARTICLE_DELETED,
	        id: id
	    };
	}
	
	function loadUsers() {
	    return function (dispatch) {
	        return _DataSource2.default.getInstance().getUsers().then(function (users) {
	            return dispatch(usersLoaded(users));
	        }).catch(function (error) {
	            return dispatch(appError(error));
	        });
	    };
	}
	
	function usersLoaded(users) {
	    return {
	        type: USERS_LOADED,
	        users: users
	    };
	}
	
	function appError(error) {
	    return {
	        type: APP_ERROR,
	        error: error
	    };
	}

/***/ },

/***/ 337:
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
	
	        var config = __webpack_require__(338);
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

/***/ 338:
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

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PageMediator = exports.PageMediatorEvents = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ImagePreloader = __webpack_require__(340);
	
	var _ImagePreloader2 = _interopRequireDefault(_ImagePreloader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var appTpl = __webpack_require__(341);
	var sourceTpl = __webpack_require__(345);
	var articleTpl = __webpack_require__(346);
	var choiceTpl = __webpack_require__(348);
	
	var PageMediatorEvents = exports.PageMediatorEvents = {
	    ChoiceSelected: 'ChoiceSelected',
	    SourceSelected: 'SourceSelected',
	
	    LoginTry: 'LoginTry',
	    RegTry: 'RegTry',
	
	    ArticleAdd: 'ArticleAdd',
	    ArticleUpdate: 'ArticleUpdate',
	    ArticleRemove: 'ArticleRemove',
	
	    LoadUsers: 'LoadUsers'
	};
	
	var PageMediator = exports.PageMediator = function () {
	    function PageMediator(containerSelector) {
	        _classCallCheck(this, PageMediator);
	
	        if (window.appMediator) {
	            throw new Error('global appMediator var already defined!');
	        }
	
	        window.appMediator = this;
	
	        this.eventListeners = {};
	
	        this.appContainer = document.querySelector(containerSelector);
	        this.appContainer.innerHTML = appTpl();
	
	        //states
	        this.loginState = this.appContainer.querySelector('#loginState');
	        this.loggedInInfo = this.appContainer.querySelector('#loggedInInfo');
	        this.loggedInState = this.appContainer.querySelector('#loggedInState');
	
	        this.categoriesChoicesElement = this.appContainer.querySelector('#categoriesChoices');
	        this.countriesChoicesElement = this.appContainer.querySelector('#countriesChoices');
	        this.langChoicesElement = this.appContainer.querySelector('#langChoices');
	        this.contentElement = this.appContainer.querySelector('#content');
	        this.errorElement = this.appContainer.querySelector('#errors');
	    }
	
	    _createClass(PageMediator, [{
	        key: 'addEventListener',
	        value: function addEventListener(eventName, listener) {
	            this.eventListeners[eventName] = this.eventListeners[eventName] || [];
	            this.eventListeners[eventName].push(listener);
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(eventName, listener) {
	            var listeners = this.eventListeners[eventName] || [];
	            var listenerIndex = listeners.indexOf(listener);
	            if (listenerIndex >= 0 && listeners.length > 0) {
	                listeners.splice(listenerIndex, 1);
	            }
	        }
	    }, {
	        key: 'dispatchEvent',
	        value: function dispatchEvent(eventName) {
	            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                params[_key - 1] = arguments[_key];
	            }
	
	            (this.eventListeners[eventName] || []).forEach(function (listener) {
	                listener.apply(undefined, params);
	            });
	        }
	    }, {
	        key: 'setLoggedInUser',
	        value: function setLoggedInUser(user) {
	            if (user) {
	                this.loginState.className = 'hidden';
	                this.loggedInState.className = 'role-' + user.role;
	                this.loggedInInfo.innerHTML = 'Welcome, ' + user.login;
	            } else {
	                this.loginState.className = '';
	                this.loggedInState.className = 'hidden';
	            }
	        }
	    }, {
	        key: 'setCategories',
	        value: function setCategories(categories) {
	            var _this = this;
	
	            this.categoriesChoicesElement.innerHTML = [this.getChoiceTpl('category', 'All', '', true)].concat(categories.map(function (value) {
	                return _this.getChoiceTpl('category', value, value);
	            })).join('');
	        }
	    }, {
	        key: 'setCountries',
	        value: function setCountries(countries) {
	            var _this2 = this;
	
	            this.countriesChoicesElement.innerHTML = [this.getChoiceTpl('country', 'All', '', true)].concat(countries.map(function (value) {
	                return _this2.getChoiceTpl('country', value, value);
	            })).join('');
	        }
	    }, {
	        key: 'setLanguages',
	        value: function setLanguages(languages) {
	            var _this3 = this;
	
	            this.langChoicesElement.innerHTML = [this.getChoiceTpl('language', 'All', '', true)].concat(languages.map(function (value) {
	                return _this3.getChoiceTpl('language', value, value);
	            })).join('');
	        }
	    }, {
	        key: 'setSources',
	        value: function setSources(sources) {
	            var _this4 = this;
	
	            var formattedSources = sources.map(function (source) {
	                return _this4.getSourceTpl(source);
	            });
	            this.contentElement.innerHTML = formattedSources.join('');
	        }
	    }, {
	        key: 'setArticles',
	        value: function setArticles(sourceId, articles) {
	            var _this5 = this;
	
	            // todo: load images before inserting them into source block
	            var sourcesElement = this.contentElement.querySelector('#articles_of_' + sourceId);
	            var formattedArticles = articles.map(function (article, index) {
	                return _this5.getArticleTpl(article, sourceId, index);
	            });
	            sourcesElement.innerHTML = formattedArticles.join('');
	            (0, _ImagePreloader2.default)(sourcesElement.querySelectorAll('a img'));
	        }
	    }, {
	        key: 'setError',
	        value: function setError(error) {
	            this.errorElement.innerHTML = error ? '<h4 class="error">' + error + '</h4>' : '';
	        }
	    }, {
	        key: 'authFormSubmit',
	        value: function authFormSubmit(form) {
	            var _ref = [form.login.value, form.pass.value, form.mode.value],
	                login = _ref[0],
	                pass = _ref[1],
	                mode = _ref[2];
	
	            if (mode === 'login') {
	                this.tryLogin(login, pass);
	            } else {
	                this.tryReg(login, pass);
	            }
	        }
	    }, {
	        key: 'tryLogin',
	        value: function tryLogin(login, pass) {
	            if (login && pass) {
	                this.dispatchEvent(PageMediatorEvents.LoginTry, login, pass);
	            }
	        }
	    }, {
	        key: 'tryReg',
	        value: function tryReg(login, pass) {
	            if (login && pass) {
	                this.dispatchEvent(PageMediatorEvents.RegTry, login, pass);
	            }
	        }
	    }, {
	        key: 'onChoiceSelected',
	        value: function onChoiceSelected(selectedNode) {
	            if (selectedNode) {
	                var radiosContainer = selectedNode.parentElement.parentElement;
	                Array.from(radiosContainer.getElementsByTagName('label')).forEach(function (labelNode) {
	                    labelNode.className = labelNode === selectedNode.parentElement ? 'selected' : '';
	                });
	
	                var param = selectedNode.name,
	                    value = selectedNode.value;
	
	                this.dispatchEvent(PageMediatorEvents.ChoiceSelected, param, value);
	            }
	        }
	    }, {
	        key: 'onSourceSelected',
	        value: function onSourceSelected(sourceId) {
	            var sourcesElement = this.contentElement.querySelector('#articles_of_' + sourceId);
	            if (sourcesElement.children.length > 0) {
	                sourcesElement.innerHTML = '';
	            } else {
	                this.dispatchEvent(PageMediatorEvents.SourceSelected, sourceId);
	            }
	        }
	    }, {
	        key: 'addArticle',
	        value: function addArticle() {
	            this.dispatchEvent(PageMediatorEvents.ArticleAdd, {
	                title: 'Test at ' + new Date(),
	                url: 'http://tut.by',
	                urlToImage: 'https://img.tyt.by/p/0d/f/logo_tutby_startapy_21.01.png',
	                publishedAt: new Date().toISOString(),
	                source: {
	                    id: 'usa-today',
	                    category: 'general',
	                    language: 'en',
	                    country: 'us'
	                }
	            });
	        }
	    }, {
	        key: 'loadUsers',
	        value: function loadUsers() {
	            this.dispatchEvent(PageMediatorEvents.LoadUsers);
	        }
	    }, {
	        key: 'deleteArticle',
	        value: function deleteArticle(id) {
	            if (confirm('Are you sure?')) {
	                this.dispatchEvent(PageMediatorEvents.ArticleRemove, id);
	            }
	        }
	
	        /* Private */
	
	    }, {
	        key: 'getChoiceTpl',
	        value: function getChoiceTpl(name, label, value, checked) {
	            return choiceTpl({ name: name, label: label, value: value, checked: checked });
	        }
	    }, {
	        key: 'getSourceTpl',
	        value: function getSourceTpl(source) {
	            return sourceTpl({ source: source });
	        }
	    }, {
	        key: 'getArticleTpl',
	        value: function getArticleTpl(article, sourceId, index) {
	            return articleTpl({ article: article, sourceId: sourceId, index: index });
	        }
	    }]);

	    return PageMediator;
	}();

/***/ },

/***/ 340:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ImagePreloader;
	function ImagePreloader(imgElements) {
	    "use strict";
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        var _loop = function _loop() {
	            var imgElement = _step.value;
	
	            new Promise(function (resolve) {
	                Object.assign(new Image(), {
	                    onload: resolve,
	                    onerror: resolve,
	                    src: imgElement.attributes['data-src'].nodeValue
	                });
	            }).then(function () {
	                imgElement.src = imgElement.attributes['data-src'].nodeValue;
	            });
	        };
	
	        for (var _iterator = imgElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            _loop();
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(342);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv id=\"errors\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hidden\" id=\"loginState\"\u003E" + (null == (pug_interp = __webpack_require__(344).call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"hidden\" id=\"loggedInState\"\u003E\u003Cheader\u003E\u003Cspan id=\"loggedInInfo\"\u003EWelcome...\u003C\u002Fspan\u003E\u003Cspan\u003E&nbsp; | &nbsp;\u003C\u002Fspan\u003E\u003Cul class=\"admin-menu show-for-admin\"\u003E\u003Cli\u003E\u003Ca href=\"javascript:void(0)\" onclick=\"appMediator.addArticle()\"\u003EAdd article\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Ca id=\"logout\" href=\"\u002Fapi\u002Fauth\u002Flogout\"\u003ELogout\u003C\u002Fa\u003E\u003C\u002Fheader\u003E\u003Cdiv id=\"topMenu\"\u003E\u003Cfieldset id=\"categoriesChoices\"\u003E\u003C\u002Ffieldset\u003E\u003Cfieldset id=\"countriesChoices\"\u003E\u003C\u002Ffieldset\u003E\u003Cfieldset id=\"langChoices\"\u003E\u003C\u002Ffieldset\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"content\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pug_has_own_property = Object.prototype.hasOwnProperty;
	
	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */
	
	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	
	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + (valA && valB && ';') + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }
	
	  return a;
	};
	
	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}
	
	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */
	
	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '', delim = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + delim + style + ':' + val[style];
	        delim = ';';
	      }
	    }
	    return out;
	  } else {
	    val = '' + val;
	    if (val[val.length - 1] === ';') return val.slice(0, -1);
	    return val;
	  }
	};
	
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};
	
	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';
	
	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];
	
	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }
	
	  return attrs;
	};
	
	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;
	
	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};
	
	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */
	
	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(343).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);
	
	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');
	
	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },

/***/ 343:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(342);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cfieldset\u003E\u003Ch4\u003EAuth form\u003C\u002Fh4\u003E\u003Cform name=\"loginForm\" onsubmit=\"appMediator.authFormSubmit(this); return false;\"\u003E\u003Cdiv class=\"input-field\"\u003E\u003Clabel\u003ELogin\u003Cinput type=\"text\" name=\"login\" required=\"required\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"input-field\"\u003E\u003Clabel\u003EPass\u003Cinput type=\"password\" name=\"pass\" required=\"required\"\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"input-field\"\u003E\u003Cinput type=\"hidden\" name=\"mode\" value=\"login\"\u003E\u003Cbutton class=\"button button-outline\" type=\"submit\" onclick=\"loginForm.mode.value=&quot;login&quot;\"\u003ELogin\u003C\u002Fbutton\u003E\u003Cbutton class=\"button button-outline\" type=\"submit\" onclick=\"loginForm.mode.value=&quot;reg&quot;\"\u003ERegister\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Ffieldset\u003E";;return pug_html;};
	module.exports = template;

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(342);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (source) {pug_html = pug_html + "\u003Cdiv" + (" class=\"source\""+pug.attr("id", "source_" + source.id, true, true)) + "\u003E\u003Cdiv class=\"logo\"\u003E\u003Ca" + (" href=\"javascript:void(0)\""+pug.attr("title", source.name, true, true)+pug.attr("onclick", "appMediator.onSourceSelected(" + "'" + source.id + "')", true, true)) + "\u003E\u003Cimg" + (pug.attr("src", source.urlsToLogos.medium, true, true)+" height=\"60\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"articles\""+pug.attr("id", "articles_of_" + source.id, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"source" in locals_for_with?locals_for_with.source:typeof source!=="undefined"?source:undefined));;return pug_html;};
	module.exports = template;

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(342);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (article) {pug_html = pug_html + "\u003Carticle\u003E\u003Ca" + (" class=\"article-picture\""+pug.attr("href", article.url, true, true)+" target=\"_blank\""+pug.attr("title", article.title, true, true)) + "\u003E\u003Cimg" + (pug.attr("data-src", article.urlToImage, true, true)+pug.attr("src", __webpack_require__(347), true, true)+" height=\"120\"") + "\u003E\u003C\u002Fa\u003E\u003Ca" + (" class=\"show-for-admin delete-article\""+" href=\"javascript:void(0)\""+pug.attr("onclick", "appMediator.deleteArticle('" + article._id + "')", true, true)) + "\u003E\u003Cspan class=\"fa fa-close\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Farticle\u003E";}.call(this,"article" in locals_for_with?locals_for_with.article:typeof article!=="undefined"?article:undefined));;return pug_html;};
	module.exports = template;

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/aa744a5a12cf69a99270c117cb057e4a.gif";

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(342);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (checked, id, label, name, value) {id = [name, value].join('_');
	pug_html = pug_html + "\u003Clabel" + (pug.attr("class", pug.classes([(checked && 'selected')], [true]), false, true)+pug.attr("for", id, true, true)) + "\u003E\u003Cinput" + (" type=\"radio\""+pug.attr("id", id, true, true)+pug.attr("name", name, true, true)+pug.attr("value", value, true, true)+" onchange=\"appMediator.onChoiceSelected(this)\""+pug.attr("checked", checked, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";}.call(this,"checked" in locals_for_with?locals_for_with.checked:typeof checked!=="undefined"?checked:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"label" in locals_for_with?locals_for_with.label:typeof label!=="undefined"?label:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"value" in locals_for_with?locals_for_with.value:typeof value!=="undefined"?value:undefined));;return pug_html;};
	module.exports = template;

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(350);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "header {\n  padding: 4px 20px;\n  border-bottom: 1px solid #DDD;\n  background-color: #EEE;\n  margin-bottom: 20px; }\n  header #loggedInInfo {\n    font-weight: bold; }\n  header ul.admin-menu {\n    display: inline-block;\n    margin: 0;\n    padding: 0; }\n    header ul.admin-menu li {\n      margin: 0 10px;\n      display: inline-block; }\n  header #logout {\n    position: absolute;\n    right: 20px; }\n\n#errors {\n  text-align: center;\n  background-color: #FEE; }\n  #errors .error {\n    padding: 10px;\n    text-align: center;\n    font-size: 20px;\n    color: #F22; }\n\n#loginState input, #loginState button {\n  margin: 4px; }\n\n#loggedInState.role-user .show-for-admin {\n  display: none; }\n\nfieldset {\n  text-align: center;\n  border: none; }\n  fieldset label {\n    padding: 4px 10px;\n    display: inline-block; }\n\n#topMenu fieldset {\n  line-height: 15px; }\n  #topMenu fieldset label {\n    padding: 4px 10px;\n    text-transform: uppercase;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 12px; }\n  #topMenu fieldset input[type=\"radio\"] {\n    display: none; }\n  #topMenu fieldset label.selected {\n    background-color: #DDD; }\n\n#content {\n  padding: 0px 4px; }\n  #content .source {\n    margin: 10px 0;\n    padding: 4px;\n    border: #999 1px solid;\n    background-color: #EEE;\n    overflow: hidden; }\n    #content .source .logo {\n      padding: 14px; }\n    #content .source .articles {\n      text-align: center; }\n      #content .source .articles article {\n        display: inline-block;\n        margin: 10px;\n        border: 5px solid #FFF;\n        position: relative; }\n        #content .source .articles article:last-of-type {\n          clear: both; }\n        #content .source .articles article a.article-picture {\n          opacity: 0.7; }\n          #content .source .articles article a.article-picture:hover {\n            opacity: 1; }\n        #content .source .articles article a.delete-article {\n          position: absolute;\n          width: 20px;\n          height: 20px;\n          background: #FFF;\n          border-radius: 10px;\n          right: 10px;\n          top: 10px;\n          padding-top: 1px; }\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=1.app.js.map
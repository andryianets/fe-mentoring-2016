webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cov_2e2gwtlc0n = function () {
	  var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/index.js',
	      hash = 'f6debe374f399acdc7d44bd0764662f93e965353',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/index.js',
	    statementMap: {},
	    fnMap: {},
	    branchMap: {},
	    s: {},
	    f: {},
	    b: {},
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});
	
	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }
	
	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	
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

/***/ 322:
/***/ function(module, exports) {

	/*!
	angular-xeditable - 0.6.0
	Edit-in-place for angular.js
	Build date: 2016-12-27 
	*/
	/**
	 * Angular-xeditable module 
	 *
	 */
	angular.module('xeditable', [])
	
	
	/**
	 * Default options. 
	 *
	 * @namespace editable-options
	 */
	//todo: maybe better have editableDefaults, not options...
	.value('editableOptions', {
	  /**
	   * Theme. Possible values `bs3`, `bs2`, `default`.  
	   * Default is `default`
	   * 
	   * @var {string} theme
	   * @memberOf editable-options
	   */  
	  theme: 'default',
	  /**
	   * icon_set. Possible values `font-awesome`, `default`.  
	   * Default is `default`
	   * 
	   * @var {string} icon set
	   * @memberOf editable-options
	   */  
	  icon_set: 'default',
	  /**
	   * Whether to show buttons for single editable element.  
	   * Possible values `right`, `no`.  
	   * Default is `right`
	   * 
	   * @var {string} buttons
	   * @memberOf editable-options
	   */    
	  buttons: 'right',
	  /**
	   * Default value for `blur` attribute of single editable element.  
	   * Can be `cancel|submit|ignore`.  
	   * Default is `cancel`
	   * 
	   * @var {string} blurElem
	   * @memberOf editable-options
	   */
	  blurElem: 'cancel',
	  /**
	   * Default value for `blur` attribute of editable form.  
	   * Can be `cancel|submit|ignore`.  
	   * Default is `ignore`.
	   * 
	   * @var {string} blurForm
	   * @memberOf editable-options
	   */
	  blurForm: 'ignore',
	  /**
	   * How input elements get activated. Possible values: `focus|select|none`.  
	   * Default is `focus`
	   *
	   * @var {string} activate
	   * @memberOf editable-options
	   */
	  activate: 'focus',
	  /**
	   * Whether to disable x-editable. Can be overloaded on each element.  
	   * Default is `false`
	   *
	   * @var {boolean} isDisabled
	   * @memberOf editable-options
	   */
	   isDisabled: false,
	  
	  /**
	   * Event, on which the edit mode gets activated. 
	   * Can be any event.  
	   * Default is `click`
	   *
	   * @var {string} activationEvent
	   * @memberOf editable-options
	   */
	  activationEvent: 'click',
	
	  /**
	   * The default title of the submit button.  
	   * Default is `Submit`
	   *
	   * @var {string} submitButtonTitle
	   * @memberOf editable-options
	   */
	  submitButtonTitle: 'Submit',
	
	  /**
	   * The default aria label of the submit button.  
	   * Default is `Submit`
	   *
	   * @var {string} submitButtonAriaLabel
	   * @memberOf editable-options
	   */
	  submitButtonAriaLabel: 'Submit',
	
	  /**
	   * The default title of the cancel button.  
	   * Default is `Cancel`
	   *
	   * @var {string} cancelButtonTitle
	   * @memberOf editable-options
	   */
	  cancelButtonTitle: 'Cancel',
	
	  /**
	   * The default aria label of the cancel button.  
	   * Default is `Cancel`
	   *
	   * @var {string} cancelButtonAriaLabel
	   * @memberOf editable-options
	   */
	  cancelButtonAriaLabel: 'Cancel',
	
	  /**
	   * The default title of the clear button.  
	   * Default is `Clear`
	   *
	   * @var {string} clearButtonTitle
	   * @memberOf editable-options
	   */
	  clearButtonTitle: 'Clear',
	
	  /**
	   * The default aria label of the clear button.  
	   * Default is `Clear`
	   *
	   * @var {string} clearButtonAriaLabel
	   * @memberOf editable-options
	   */
	  clearButtonAriaLabel: 'Clear',
	
	  /**
	   * Whether to display the clear button.  
	   * Default is `false`
	   *
	   * @var {boolean} displayClearButton
	   * @memberOf editable-options
	   */
	  displayClearButton: false
	});
	
	/*
	 Angular-ui bootstrap datepicker
	 http://angular-ui.github.io/bootstrap/#/datepicker
	 */
	angular.module('xeditable').directive('editableBsdate', ['editableDirectiveFactory', '$injector', '$parse',
	    function(editableDirectiveFactory, $injector, $parse) {
	
	        // Constants from Angular-ui bootstrap datepicker
	        uibDatepickerConfig = $injector.get('uibDatepickerConfig');
	        uibDatepickerPopupConfig = $injector.get('uibDatepickerPopupConfig');
	
	        var popupAttrNames = [
	            ['eIsOpen', 'is-open'],
	            ['eDateDisabled', 'date-disabled'],
	            ['eDatepickerPopup', 'uib-datepicker-popup'],
	            ['eShowButtonBar', 'show-button-bar'],
	            ['eCurrentText', 'current-text'],
	            ['eClearText', 'clear-text'],
	            ['eCloseText', 'close-text'],
	            ['eCloseOnDateSelection', 'close-on-date-selection'],
	            ['eDatePickerAppendToBody', 'datepicker-append-to-body'],
	            ['eOnOpenFocus', 'on-open-focus'],
	            ['eName', 'name'],
	            ['eDateDisabled', 'date-disabled']
	        ];
	
	        var dateOptionsNames = [
	            ['eFormatDay', 'formatDay'],
	            ['eFormatMonth', 'formatMonth'],
	            ['eFormatYear', 'formatYear'],
	            ['eFormatDayHeader', 'formatDayHeader'],
	            ['eFormatDayTitle', 'formatDayTitle'],
	            ['eFormatMonthTitle', 'formatMonthTitle'],
	            ['eMaxMode', 'maxMode'],
	            ['eMinMode', 'minMode'],
	            ['eDatepickerMode', 'datepickerMode']
	        ];
	
	        return editableDirectiveFactory({
	            directiveName: 'editableBsdate',
	            inputTpl: '<div></div>',
	            render: function() {
	                /** This basically renders a datepicker as in the example shown in
	                 **  http://angular-ui.github.io/bootstrap/#/datepicker
	                 **  The attributes are all the same as in the bootstrap-ui datepicker with e- as prefix
	                 **/
	                this.parent.render.call(this);
	
	                var attrs = this.attrs;
	                var scope = this.scope;
	
	                var inputDatePicker = angular.element('<input type="text" class="form-control" ng-model="$parent.$data"/>');
	
	                inputDatePicker.attr('uib-datepicker-popup', attrs.eDatepickerPopupXEditable || uibDatepickerPopupConfig.datepickerPopup );
	                inputDatePicker.attr('year-range', attrs.eYearRange || 20);
	                inputDatePicker.attr('ng-readonly', attrs.eReadonly || false);
	
	                for (var i = popupAttrNames.length - 1; i >= 0; i--) {
	                    var popupAttr = attrs[popupAttrNames[i][0]];
	                    if (typeof popupAttr !== 'undefined') {
	                        inputDatePicker.attr(popupAttrNames[i][1], popupAttr);
	                    }
	                }
	
	                if (attrs.eNgChange) {
	                    inputDatePicker.attr('ng-change', attrs.eNgChange);
	                    this.inputEl.removeAttr('ng-change');
	                }
	
	                if (attrs.eStyle) {
	                    inputDatePicker.attr('style', attrs.eStyle);
	                    this.inputEl.removeAttr('style');
	                }
	
	                var dateOptions = {
	                    maxDate: scope.$eval(attrs.eMaxDate) || uibDatepickerConfig.maxDate,
	                    minDate: scope.$eval(attrs.eMinDate) || uibDatepickerConfig.minDate,
	                    showWeeks: attrs.eShowWeeks ? attrs.eShowWeeks.toLowerCase() === 'true' : uibDatepickerConfig.showWeeks,
	                    startingDay: attrs.eStartingDay || 0,
	                    initDate: scope.$eval(attrs.eInitDate) || new Date()
	                };
	
	                if (attrs.eDatepickerOptions) {
	                    var eDatepickerOptions = $parse(attrs.eDatepickerOptions)(scope);
	                    angular.extend(dateOptions, eDatepickerOptions);
	                }
	
	                for (var z = dateOptionsNames.length - 1; z >= 0; z--) {
	                    var doAttr = attrs[dateOptionsNames[z][0]];
	                    if (typeof doAttr !== 'undefined') {
	                        dateOptions[dateOptionsNames[z][1]] = doAttr;
	                    }
	                }
	
	                scope.dateOptions = dateOptions;
	
	                var showCalendarButton = angular.isDefined(attrs.eShowCalendarButton) ? attrs.eShowCalendarButton : "true";
	
	                //See if calendar button should be displayed
	                if (showCalendarButton === "true") {
	                    var buttonDatePicker = angular.element('<button type="button" class="btn btn-default"><i class="glyphicon glyphicon-calendar"></i></button>');
	                    var buttonWrapper = angular.element('<span class="input-group-btn"></span>');
	
	                    buttonDatePicker.attr('ng-click', attrs.eNgClick);
	
	                    buttonWrapper.append(buttonDatePicker);
	
	                    this.inputEl.append(buttonWrapper);
	                } else {
	                    //If no calendar button, display calendar popup on click of input field
	                    inputDatePicker.attr('ng-click', attrs.eNgClick);
	                }
	
	                inputDatePicker.attr('datepicker-options', "dateOptions");
	
	                this.inputEl.prepend(inputDatePicker);
	
	                this.inputEl.removeAttr('class');
	                this.inputEl.removeAttr('ng-click');
	                this.inputEl.removeAttr('is-open');
	                this.inputEl.removeAttr('init-date');
	                this.inputEl.removeAttr('datepicker-popup');
	                this.inputEl.removeAttr('required');
	                this.inputEl.removeAttr('ng-model');
	                this.inputEl.removeAttr('date-picker-append-to-body');
	                this.inputEl.removeAttr('name');
	                this.inputEl.attr('class','input-group');
	            }
	    });
	}]);
	/*
	Angular-ui bootstrap editable timepicker
	http://angular-ui.github.io/bootstrap/#/timepicker
	*/
	angular.module('xeditable').directive('editableBstime', ['editableDirectiveFactory',
	  function(editableDirectiveFactory) {
	    return editableDirectiveFactory({
	      directiveName: 'editableBstime',
	      inputTpl: '<uib-timepicker></uib-timepicker>',
	      render: function() {
	        this.parent.render.call(this);
	
	        // timepicker can't update model when ng-model set directly to it
	        // see: https://github.com/angular-ui/bootstrap/issues/1141
	        // so we wrap it into DIV
	        var div = angular.element('<div class="well well-small" style="display:inline-block;"></div>');
	
	        // move ng-model to wrapping div
	        div.attr('ng-model', this.inputEl.attr('ng-model'));
	        this.inputEl.removeAttr('ng-model');
	
	        // move ng-change to wrapping div
	        if(this.attrs.eNgChange) {
	          div.attr('ng-change', this.inputEl.attr('ng-change'));
	          this.inputEl.removeAttr('ng-change');
	        }
	
	        // wrap
	        this.inputEl.wrap(div);
	      }
	    });
	}]);
	//checkbox
	angular.module('xeditable').directive('editableCheckbox', ['editableDirectiveFactory',
	  function(editableDirectiveFactory) {
	    return editableDirectiveFactory({
	      directiveName: 'editableCheckbox',
	      inputTpl: '<input type="checkbox">',
	      render: function() {
	        this.parent.render.call(this);
	        if(this.attrs.eTitle) {
	          this.inputEl.wrap('<label></label>');
	          this.inputEl.parent().append('<span>' + this.attrs.eTitle + '</span>');
	        }
	      },
	      autosubmit: function() {
	        var self = this;
	        self.inputEl.bind('change', function() {
	          setTimeout(function() {
	            self.scope.$apply(function() {
	              self.scope.$form.$submit();
	            });
	          }, 500);
	        });
	      }
	    });
	}]);
	
	// checklist
	angular.module('xeditable').directive('editableChecklist', [
	  'editableDirectiveFactory',
	  'editableNgOptionsParser',
	  function(editableDirectiveFactory, editableNgOptionsParser) {
	    return editableDirectiveFactory({
	      directiveName: 'editableChecklist',
	      inputTpl: '<span></span>',
	      useCopy: true,
	      render: function() {
	        this.parent.render.call(this);
	        var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
	        var ngChangeHtml = '';
	        var ngChecklistComparatorHtml = '';
	
	        if (this.attrs.eNgChange) {
	          ngChangeHtml = ' ng-change="' +  this.attrs.eNgChange + '"';
	        }
	
	        if (this.attrs.eChecklistComparator) {
	          ngChecklistComparatorHtml = ' checklist-comparator="' +  this.attrs.eChecklistComparator + '"';
	        }
	        
	        var html = '<label ng-repeat="'+parsed.ngRepeat+'">'+
	          '<input type="checkbox" checklist-model="$parent.$parent.$data" checklist-value="'+parsed.locals.valueFn+'"' +
	            ngChangeHtml + ngChecklistComparatorHtml + '>'+
	          '<span ng-bind="'+parsed.locals.displayFn+'"></span></label>';
	
	        this.inputEl.removeAttr('ng-model');
	        this.inputEl.removeAttr('ng-options');
	        this.inputEl.removeAttr('ng-change');
	        this.inputEl.removeAttr('checklist-comparator');
	        this.inputEl.html(html);
	      }
	    });
	}]);
	
	angular.module('xeditable').directive('editableCombodate', ['editableDirectiveFactory', 'editableCombodate',
	  function(editableDirectiveFactory, editableCombodate) {
	    return editableDirectiveFactory({
	      directiveName: 'editableCombodate',
	      inputTpl: '<input type="text">',
	      render: function() {
	        this.parent.render.call(this);
	
	        var options = {
	          value: new Date(this.scope.$data)
	        };
	        var self = this;
	        angular.forEach(["format", "template", "minYear", "maxYear", "yearDescending", "minuteStep", "secondStep", "firstItem", "errorClass", "customClass", "roundTime", "smartDays"], function(name) {
	
	          var attrName = "e" + name.charAt(0).toUpperCase() + name.slice(1);
	
	          if (attrName in self.attrs) {
	            if (name == "minYear" || name == "maxYear" || name == "minuteStep" || name == "secondStep") {
	              options[name] = parseInt(self.attrs[attrName], 10);
	            } else {
	              options[name] = self.attrs[attrName];
	            }
	          }
	        });
	
	        var combodate = editableCombodate.getInstance(this.inputEl, options);
	        combodate.$widget.find('select').bind('change', function(e) {
	          self.scope.$data = (new Date(combodate.getValue())).toISOString();
	        });
	      }
	    });
	  }
	]);
	
	/*
	Input types: text|password|email|tel|number|url|search|color|date|datetime|datetime-local|time|month|week|file
	*/
	
	(function() {
	
	  var camelCase = function(dashDelimitedString) {
	    return dashDelimitedString.toLowerCase().replace(/-(.)/g, function(match, word) {
	      return word.toUpperCase();
	    });
	  };
	
	  var types = 'text|password|email|tel|number|url|search|color|date|datetime|datetime-local|time|month|week|file'.split('|');
	
	  //todo: datalist
	  
	  // generate directives
	  angular.forEach(types, function(type) {
	    var directiveName = camelCase('editable' + '-' + type);
	    angular.module('xeditable').directive(directiveName, ['editableDirectiveFactory',
	      function(editableDirectiveFactory) {
	        return editableDirectiveFactory({
	          directiveName: directiveName,
	          inputTpl: '<input type="'+type+'">',
	          render: function() {
	            this.parent.render.call(this);
	
	            //Add bootstrap simple input groups
	            if (this.attrs.eInputgroupleft || this.attrs.eInputgroupright) {
	              this.inputEl.wrap('<div class="input-group"></div>');
	
	              if (this.attrs.eInputgroupleft) {
	                var inputGroupLeft = angular.element('<span class="input-group-addon">' + this.attrs.eInputgroupleft + '</span>');
	                this.inputEl.parent().prepend(inputGroupLeft);
	              }
	
	              if (this.attrs.eInputgroupright) {
	                var inputGroupRight = angular.element('<span class="input-group-addon">' + this.attrs.eInputgroupright + '</span>');
	                this.inputEl.parent().append(inputGroupRight);
	              }
	            }
	
	            // Add label to the input
	            if (this.attrs.eLabel) {
	              var label = angular.element('<label>' + this.attrs.eLabel + '</label>');
	              if (this.attrs.eInputgroupleft || this.attrs.eInputgroupright) {
	                this.inputEl.parent().parent().prepend(label);
	              } else {
	                this.inputEl.parent().prepend(label);
	              }
	            }
	            
	            // Add classes to the form
	            if (this.attrs.eFormclass) {
	              this.editorEl.addClass(this.attrs.eFormclass);
	            }
	          },
	          autosubmit: function() {
	            var self = this;
	            self.inputEl.bind('keydown', function(e) {
	                //submit on tab
	                if (e.keyCode === 9) {
	                    self.scope.$apply(function() {
	                        self.scope.$form.$submit();
	                    });
	                }
	            });
	          }
	        });
	    }]);
	  });
	
	  //`range` is bit specific
	  angular.module('xeditable').directive('editableRange', ['editableDirectiveFactory', '$interpolate',
	    function(editableDirectiveFactory, $interpolate) {
	      return editableDirectiveFactory({
	        directiveName: 'editableRange',
	        inputTpl: '<input type="range" id="range" name="range">',
	        render: function() {
	          this.parent.render.call(this);
	          this.inputEl.after('<output>' + $interpolate.startSymbol() + '$data' + $interpolate.endSymbol()  + '</output>');
	        }        
	      });
	  }]);
	
	}());
	
	
	/*
	 Tags input directive for AngularJS
	 https://github.com/mbenford/ngTagsInput
	 */
	angular.module('xeditable').directive('editableTagsInput', ['editableDirectiveFactory', 'editableUtils',
	  function(editableDirectiveFactory, editableUtils) {
	    var dir = editableDirectiveFactory({
	        directiveName: 'editableTagsInput',
	        inputTpl: '<tags-input></tags-input>',
	        render: function () {
	            this.parent.render.call(this);
	            this.inputEl.append(editableUtils.rename('auto-complete', this.attrs.$autoCompleteElement));
	            this.inputEl.removeAttr('ng-model');
	            this.inputEl.attr('ng-model', '$parent.$data');
	        }
	    });
	
	    var linkOrg = dir.link;
	
	    dir.link = function (scope, el, attrs, ctrl) {
	        var autoCompleteEl = el.find('editable-tags-input-auto-complete');
	
	        attrs.$autoCompleteElement = autoCompleteEl.clone();
	
	        autoCompleteEl.remove();
	
	        return linkOrg(scope, el, attrs, ctrl);
	    };
	
	    return dir;
	}]);
	// radiolist
	angular.module('xeditable').directive('editableRadiolist', [
	  'editableDirectiveFactory',
	  'editableNgOptionsParser',
	  '$interpolate',
	  function(editableDirectiveFactory, editableNgOptionsParser, $interpolate) {
	    return editableDirectiveFactory({
	      directiveName: 'editableRadiolist',
	      inputTpl: '<span></span>',
	      render: function() {
	        this.parent.render.call(this);
	        var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
	        var ngChangeHtml = '';
	
	        if (this.attrs.eNgChange) {
	          ngChangeHtml = 'ng-change="' +  this.attrs.eNgChange + '"';
	        }
	
	        var html = '<label data-ng-repeat="'+parsed.ngRepeat+'">'+
	          '<input type="radio" data-ng-disabled="::' +
	            this.attrs.eNgDisabled +
	            '" data-ng-model="$parent.$parent.$data" data-ng-value="' + $interpolate.startSymbol() +
	            '::' + parsed.locals.valueFn + $interpolate.endSymbol() +'"' +
	            ngChangeHtml + '>'+
	          '<span data-ng-bind="::'+parsed.locals.displayFn+'"></span></label>';
	
	        this.inputEl.removeAttr('ng-model');
	        this.inputEl.removeAttr('ng-options');
	        this.inputEl.removeAttr('ng-change');
	        this.inputEl.html(html);
	      },
	      autosubmit: function() {
	        var self = this;
	        self.inputEl.bind('change', function() {
	          setTimeout(function() {
	            self.scope.$apply(function() {
	              self.scope.$form.$submit();
	            });
	          }, 500);
	        });
	      }
	    });
	}]);
	
	//select
	angular.module('xeditable').directive('editableSelect', ['editableDirectiveFactory',
	  function(editableDirectiveFactory) {
	    return editableDirectiveFactory({
	      directiveName: 'editableSelect',
	      inputTpl: '<select></select>',
	      render: function() {
	        this.parent.render.call(this);
	
	        if (this.attrs.ePlaceholder) {
	          var placeholder = angular.element('<option value="">' + this.attrs.ePlaceholder + '</option>');
	          this.inputEl.append(placeholder);
	        }
	      },
	      autosubmit: function() {
	        var self = this;
	        self.inputEl.bind('change', function() {
	          self.scope.$apply(function() {
	            self.scope.$form.$submit();
	          });
	        });
	      }
	    });
	}]);
	//textarea
	angular.module('xeditable').directive('editableTextarea', ['editableDirectiveFactory',
	  function(editableDirectiveFactory) {
	    return editableDirectiveFactory({
	      directiveName: 'editableTextarea',
	      inputTpl: '<textarea></textarea>',
	      addListeners: function() {
	        var self = this;
	        self.parent.addListeners.call(self);
	        // submit textarea by ctrl+enter even with buttons
	        if (self.single && self.buttons !== 'no') {
	          self.autosubmit();
	        }
	      },
	      autosubmit: function() {
	        var self = this;
	        self.inputEl.bind('keydown', function(e) {
	          if (self.attrs.submitOnEnter) {
	            if (e.keyCode === 13 && !e.shiftKey) {
	              self.scope.$apply(function() {
	                self.scope.$form.$submit();
	              });
	            }
	          } else if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13)) {
	            self.scope.$apply(function() {
	              self.scope.$form.$submit();
	            });
	          }
	        });
	      }
	    });
	}]);
	
	/*
	 jQuery UI Datepicker for AngularJS
	 https://github.com/angular-ui/ui-date
	 */
	angular.module('xeditable').directive('editableUidate', ['editableDirectiveFactory',
	    function(editableDirectiveFactory) {
	        return editableDirectiveFactory({
	            directiveName: 'editableUidate',
	            inputTpl: '<input class="form-control" />',
	            render: function() {
	                this.parent.render.call(this);
	                this.inputEl.attr('ui-date', this.attrs.eUiDate);
	                this.inputEl.attr('placeholder', this.attrs.ePlaceholder);
	            }
	        });
	}]);
	
	/*
	 AngularJS-native version of Select2 and Selectize
	 https://github.com/angular-ui/ui-select
	 */
	angular.module('xeditable').directive('editableUiSelect',['editableDirectiveFactory', 'editableUtils',
	    function(editableDirectiveFactory, editableUtils) {
	        var dir = editableDirectiveFactory({
	            directiveName: 'editableUiSelect',
	            inputTpl: '<ui-select></ui-select>',
	            render: function () {
	                this.parent.render.call(this);
	                this.inputEl.append(editableUtils.rename('ui-select-match', this.attrs.$matchElement));
	                this.inputEl.append(editableUtils.rename('ui-select-choices', this.attrs.$choicesElement));
	                this.inputEl.removeAttr('ng-model');
	                this.inputEl.attr('ng-model', '$parent.$parent.$data');
	            }
	        });
	
	        var linkOrg = dir.link;
	
	        dir.link = function (scope, el, attrs, ctrl) {
	            var matchEl = el.find('editable-ui-select-match');
	            var choicesEl = el.find('editable-ui-select-choices');
	
	            attrs.$matchElement = matchEl.clone();
	            attrs.$choicesElement = choicesEl.clone();
	
	            matchEl.remove();
	            choicesEl.remove();
	
	            return linkOrg(scope, el, attrs, ctrl);
	        };
	
	        return dir;
	    }]);
	/**
	 * EditableController class. 
	 * Attached to element with `editable-xxx` directive.
	 *
	 * @namespace editable-element
	 */
	/*
	TODO: this file should be refactored to work more clear without closures!
	*/
	angular.module('xeditable').factory('editableController', 
	  ['$q', 'editableUtils',
	  function($q, editableUtils) {
	
	  //EditableController function
	  EditableController.$inject = ['$scope', '$attrs', '$element', '$parse', 'editableThemes', 'editableIcons', 'editableOptions', '$rootScope', '$compile', '$q'];
	  function EditableController($scope, $attrs, $element, $parse, editableThemes, editableIcons, editableOptions, $rootScope, $compile, $q) {
	    var valueGetter;
	
	    //if control is disabled - it does not participate in waiting process
	    var inWaiting;
	
	    var self = this;
	
	    self.scope = $scope;
	    self.elem = $element;
	    self.attrs = $attrs;
	    self.inputEl = null;
	    self.editorEl = null;
	    self.single = true;
	    self.error = '';
	    self.theme =  editableThemes[$attrs.editableTheme] || editableThemes[editableOptions.theme] || editableThemes['default'];
	    self.parent = {};
	
	    //will be undefined if icon_set is default and theme is default
	    var theme_name = $attrs.editableTheme || editableOptions.theme || 'default';
	    // The theme_name will not be correct if the theme set in options is unavailable
	    // However, in that case an undefined icon_set is not that bad...
	    var icon_set_option = $attrs.editableIconSet || editableOptions.icon_set;
	    self.icon_set = icon_set_option === 'default' ? editableIcons.default[theme_name] : editableIcons.external[icon_set_option];
	
	    //to be overwritten by directive
	    self.inputTpl = '';
	    self.directiveName = '';
	
	    // with majority of controls copy is not needed, but..
	    // copy MUST NOT be used for `select-multiple` with objects as items
	    // copy MUST be used for `checklist`
	    self.useCopy = false;
	
	    //runtime (defaults)
	    self.single = null;
	
	    /**
	     * Attributes defined with `e-*` prefix automatically transferred from original element to
	     * control.  
	     * For example, if you set `<span editable-text="user.name" e-style="width: 100px"`>
	     * then input will appear as `<input style="width: 100px">`.  
	     * See [demo](#text-customize).
	     * 
	     * @var {any|attribute} e-*
	     * @memberOf editable-element
	     */ 
	
	    /**
	     * Whether to show ok/cancel buttons. Values: `right|no`.
	     * If set to `no` control automatically submitted when value changed.  
	     * If control is part of form buttons will never be shown. 
	     * 
	     * @var {string|attribute} buttons
	     * @memberOf editable-element
	     */    
	    self.buttons = 'right'; 
	    /**
	     * Action when control losses focus. Values: `cancel|submit|ignore`.
	     * Has sense only for single editable element.
	     * Otherwise, if control is part of form - you should set `blur` of form, not of individual element.
	     * 
	     * @var {string|attribute} blur
	     * @memberOf editable-element
	     */     
	    // no real `blur` property as it is transferred to editable form
	
	    //init
	    self.init = function(single) {
	      self.single = single;
	
	      self.name = $attrs.eName || $attrs[self.directiveName];
	      /*
	      if(!$attrs[directiveName] && !$attrs.eNgModel && ($attrs.eValue === undefined)) {
	        throw 'You should provide value for `'+directiveName+'` or `e-value` in editable element!';
	      }
	      */
	      if($attrs[self.directiveName]) {
	        valueGetter = $parse($attrs[self.directiveName]);
	      } else {
	        throw 'You should provide value for `'+self.directiveName+'` in editable element!';
	      }
	
	      // settings for single and non-single
	      if (!self.single) {
	        // hide buttons for non-single
	        self.buttons = 'no';
	      } else {
	        self.buttons = self.attrs.buttons || editableOptions.buttons;
	      }
	
	      //if name defined --> watch changes and update $data in form
	      if($attrs.eName) {
	        self.scope.$watch('$data', function(newVal){
	          self.scope.$form.$data[$attrs.eName] = newVal;
	        });
	      }
	
	      /**
	       * Called when control is shown.  
	       * See [demo](#select-remote).
	       * 
	       * @var {method|attribute} onshow
	       * @memberOf editable-element
	       */
	      if($attrs.onshow) {
	        self.onshow = function() {
	          return self.catchError($parse($attrs.onshow)($scope));
	        };
	      }
	
	      /**
	       * Called when control is hidden after both save or cancel.  
	       * 
	       * @var {method|attribute} onhide
	       * @memberOf editable-element
	       */
	      if($attrs.onhide) {
	        self.onhide = function() {
	          return $parse($attrs.onhide)($scope);
	        };
	      }
	
	      /**
	       * Called when control is cancelled.  
	       * 
	       * @var {method|attribute} oncancel
	       * @memberOf editable-element
	       */
	      if($attrs.oncancel) {
	        self.oncancel = function() {
	          return $parse($attrs.oncancel)($scope);
	        };
	      }          
	
	      /**
	       * Called during submit before value is saved to model.  
	       * See [demo](#onbeforesave).
	       * 
	       * @var {method|attribute} onbeforesave
	       * @memberOf editable-element
	       */
	      if ($attrs.onbeforesave) {
	        self.onbeforesave = function() {
	          return self.catchError($parse($attrs.onbeforesave)($scope));
	        };
	      }
	
	      /**
	       * Called during submit after value is saved to model.  
	       * See [demo](#onaftersave).
	       * 
	       * @var {method|attribute} onaftersave
	       * @memberOf editable-element
	       */
	      if ($attrs.onaftersave) {
	        self.onaftersave = function() {
	          return self.catchError($parse($attrs.onaftersave)($scope));
	        };
	      }
	
	      // watch change of model to update editable element
	      // now only add/remove `editable-empty` class.
	      // Initially this method called with newVal = undefined, oldVal = undefined
	      // so no need initially call handleEmpty() explicitly
	      $scope.$parent.$watch($attrs[self.directiveName], function(newVal, oldVal) {
	        self.setLocalValue();
	        self.handleEmpty();
	      });
	    };
	
	    self.render = function() {
	      var theme = self.theme;
	
	      //build input
	      self.inputEl = angular.element(self.inputTpl);
	
	      //build controls
	      self.controlsEl = angular.element(theme.controlsTpl);
	      self.controlsEl.append(self.inputEl);
	
	      //build buttons
	      if(self.buttons !== 'no') {
	        self.buttonsEl = angular.element(theme.buttonsTpl);
	        self.submitEl = angular.element(theme.submitTpl);
	        self.resetEl = angular.element(theme.resetTpl);
	        self.cancelEl = angular.element(theme.cancelTpl);
	        self.submitEl.attr('title', editableOptions.submitButtonTitle);
	        self.submitEl.attr('aria-label', editableOptions.submitButtonAriaLabel);
	        self.cancelEl.attr('title', editableOptions.cancelButtonTitle);
	        self.cancelEl.attr('aria-label', editableOptions.cancelButtonAriaLabel);
	        self.resetEl.attr('title', editableOptions.clearButtonTitle);
	        self.resetEl.attr('aria-label', editableOptions.clearButtonAriaLabel);
	
	        if (self.icon_set) {
	          self.submitEl.find('span').addClass(self.icon_set.ok);
	          self.cancelEl.find('span').addClass(self.icon_set.cancel);
	          self.resetEl.find('span').addClass(self.icon_set.clear);
	        }
	
	        self.buttonsEl.append(self.submitEl).append(self.cancelEl);
	
	        if (editableOptions.displayClearButton) {
	          self.buttonsEl.append(self.resetEl);
	        }
	
	        self.controlsEl.append(self.buttonsEl);
	        
	        self.inputEl.addClass('editable-has-buttons');
	      }
	
	      //build error
	      self.errorEl = angular.element(theme.errorTpl);
	      self.controlsEl.append(self.errorEl);
	
	      //build editor
	      self.editorEl = angular.element(self.single ? theme.formTpl : theme.noformTpl);
	      self.editorEl.append(self.controlsEl);
	
	      // transfer `e-*|data-e-*|x-e-*` attributes
	      for (var k in $attrs.$attr) {
	        if(k.length <= 1) {
	          continue;
	        }
	        var transferAttr = false;
	        var nextLetter = k.substring(1, 2);
	
	        // if starts with `e` + uppercase letter
	        if (k.substring(0, 1) === 'e' && nextLetter === nextLetter.toUpperCase()) {
	          transferAttr = k.substring(1); // cut `e`
	        } else {
	          continue;
	        }
	        
	        // exclude `form` and `ng-submit`, 
	        if (transferAttr === 'Form' || transferAttr === 'NgSubmit') {
	          continue;
	        }
	
	        var firstLetter = transferAttr.substring(0, 1);
	        var secondLetter = transferAttr.substring(1, 2);
	
	        // convert back to lowercase style
	        if (secondLetter === secondLetter.toUpperCase() &&
	            firstLetter === firstLetter.toUpperCase()) {
	          transferAttr = firstLetter.toLowerCase() + '-' + editableUtils.camelToDash(transferAttr.substring(1));
	        } else {
	          transferAttr = firstLetter.toLowerCase() + editableUtils.camelToDash(transferAttr.substring(1));
	        }
	
	        // workaround for attributes without value (e.g. `multiple = "multiple"`)
	        // except for 'e-value'
	        var attrValue = (transferAttr !== 'value' && $attrs[k] === '') ? transferAttr : $attrs[k];
	
	        // set attributes to input
	        self.inputEl.attr(transferAttr, attrValue);
	      }
	
	      self.inputEl.addClass('editable-input');
	      self.inputEl.attr('ng-model', '$parent.$data');
	
	      // add directiveName class to editor, e.g. `editable-text`
	      self.editorEl.addClass(editableUtils.camelToDash(self.directiveName));
	
	      if (self.single) {
	        self.editorEl.attr('editable-form', '$form');
	        // transfer `blur` to form
	        self.editorEl.attr('blur', self.attrs.blur || (self.buttons === 'no' ? 'cancel' : editableOptions.blurElem));
	      }
	
	      //apply `postrender` method of theme
	      if (angular.isFunction(theme.postrender)) {
	        theme.postrender.call(self);
	      }
	
	    };
	
	    // with majority of controls copy is not needed, but..
	    // copy MUST NOT be used for `select-multiple` with objects as items
	    // copy MUST be used for `checklist`
	    self.setLocalValue = function() {
	      self.scope.$data = self.useCopy ? 
	        angular.copy(valueGetter($scope.$parent)) : 
	        valueGetter($scope.$parent);
	    };
	
	    // reference of the scope to use for $compile
	    var newScope = null;
	    //show
	    self.show = function() {
	      // set value of scope.$data
	      self.setLocalValue();
	
	      /*
	      Originally render() was inside init() method, but some directives polluting editorEl,
	      so it is broken on second openning.
	      Cloning is not a solution as jqLite can not clone with event handler's.
	      */
	      self.render();
	
	      // insert into DOM
	      $element.after(self.editorEl);
	
	      // compile (needed to attach ng-* events from markup)
	      newScope = $scope.$new();
	      $compile(self.editorEl)(newScope);
	
	      // attach listeners (`escape`, autosubmit, etc)
	      self.addListeners();
	
	      // hide element
	      $element.addClass('editable-hide');
	
	      // onshow
	      return self.onshow();
	    };
	
	    //hide
	    self.hide = function() {
	
	      // destroy the scope to prevent memory leak
	      newScope.$destroy();
	
	      self.controlsEl.remove();
	      self.editorEl.remove();
	      $element.removeClass('editable-hide');
	
	      // onhide
	      return self.onhide();
	    };
	
	    // cancel
	    self.cancel = function() {
	      // oncancel
	      self.oncancel();
	      // don't call hide() here as it called in form's code
	    };
	
	    /*
	    Called after show to attach listeners
	    */
	    self.addListeners = function() {
	      // bind keyup for `escape`
	      self.inputEl.bind('keyup', function(e) {
	          if(!self.single) {
	            return;
	          }
	
	          // todo: move this to editable-form!
	          switch(e.keyCode) {
	            // hide on `escape` press
	            case 27:
	              self.scope.$apply(function() {
	                self.scope.$form.$cancel();
	              });
	            break;
	          }
	      });
	
	      // autosubmit when `no buttons`
	      if (self.single && self.buttons === 'no') {
	        self.autosubmit();
	      }
	
	      // click - mark element as clicked to exclude in document click handler
	      self.editorEl.bind('click', function(e) {
	        // ignore right/middle button click
	        if (e.which && e.which !== 1) {
	          return;
	        }
	
	        if (self.scope.$form.$visible) {
	          self.scope.$form._clicked = true;
	        }
	      });
	    };
	
	    // setWaiting
	    self.setWaiting = function(value) {
	      if (value) {
	        // participate in waiting only if not disabled
	        inWaiting = !self.inputEl.attr('disabled') &&
	                    !self.inputEl.attr('ng-disabled') &&
	                    !self.inputEl.attr('ng-enabled');
	        if (inWaiting) {
	          self.inputEl.attr('disabled', 'disabled');
	          if(self.buttonsEl) {
	            self.buttonsEl.find('button').attr('disabled', 'disabled');
	          }
	        }
	      } else {
	        if (inWaiting) {
	          self.inputEl.removeAttr('disabled');
	          if (self.buttonsEl) {
	            self.buttonsEl.find('button').removeAttr('disabled');
	          }
	        }
	      }
	    };
	
	    self.activate = function(start, end) {
	      setTimeout(function() {
	        var el = self.inputEl[0];
	
	        if (editableOptions.activate === 'focus' && el.focus) {
	          if (start !== undefined && start !== "" && el.setSelectionRange) {
	            end = end || start;
	            el.onfocus = function() {
	              setTimeout(function() {
	                try {
	                  this.setSelectionRange(start,end);
	                } catch(e) {
	                  //do nothing, this input doesn't support setSelectionRange
	                }
	              }.bind(this));
	            };
	          }
	          
	          if (self.directiveName == 'editableRadiolist' || self.directiveName == 'editableChecklist' ||
	              self.directiveName == 'editableBsdate' || self.directiveName == 'editableTagsInput') {
	            //Set focus to first pristine element in the list
	            el.querySelector('.ng-pristine').focus();
	          } else {
	            el.focus();
	          }
	        } else if (editableOptions.activate === 'select') {
	          if (el.select){
	            el.select();
	          } else if (el.focus) {
	            el.focus();
	          }
	        }
	      }, 0);
	    };
	
	    self.setError = function(msg) {
	      if(!angular.isObject(msg)) {
	        $scope.$error = msg;
	        self.error = msg;
	      }
	    };
	
	    /*
	    Checks that result is string or promise returned string and shows it as error message
	    Applied to onshow, onbeforesave, onaftersave
	    */
	    self.catchError = function(result, noPromise) {
	      if (angular.isObject(result) && noPromise !== true) {
	        $q.when(result).then(
	          //success and fail handlers are equal
	          angular.bind(this, function(r) {
	            this.catchError(r, true);
	          }),
	          angular.bind(this, function(r) {
	            this.catchError(r, true);
	          })
	        );
	      //check $http error
	      } else if (noPromise && angular.isObject(result) && result.status &&
	        (result.status !== 200) && result.data && angular.isString(result.data)) {
	        this.setError(result.data);
	        //set result to string: to let form know that there was error
	        result = result.data;
	      } else if (angular.isString(result)) {
	        this.setError(result);
	      }
	      return result;
	    };
	
	    self.save = function() {
	      valueGetter.assign($scope.$parent,
	          self.useCopy ? angular.copy(self.scope.$data) : self.scope.$data);
	
	      // no need to call handleEmpty here as we are watching change of model value
	      // self.handleEmpty();
	    };
	
	    /*
	    attach/detach `editable-empty` class to element
	    */
	    self.handleEmpty = function() {
	      var val = valueGetter($scope.$parent);
	      var isEmpty = val === null || val === undefined || val === "" || (angular.isArray(val) && val.length === 0); 
	      $element.toggleClass('editable-empty', isEmpty);
	    };
	
	    /*
	    Called when `buttons = "no"` to submit automatically
	    */
	    self.autosubmit = angular.noop;
	
	    self.onshow = angular.noop;
	    self.onhide = angular.noop;
	    self.oncancel = angular.noop;
	    self.onbeforesave = angular.noop;
	    self.onaftersave = angular.noop;
	  }
	
	  return EditableController;
	}]);
	
	/*
	editableFactory is used to generate editable directives (see `/directives` folder)
	Inside it does several things:
	- detect form for editable element. Form may be one of three types:
	  1. autogenerated form (for single editable elements)
	  2. wrapper form (element wrapped by <form> tag)
	  3. linked form (element has `e-form` attribute pointing to existing form)
	
	- attach editableController to element
	
	Depends on: editableController, editableFormFactory
	*/
	angular.module('xeditable').factory('editableDirectiveFactory',
	['$parse', '$compile', 'editableThemes', '$rootScope', '$document', 'editableController', 'editableFormController', 'editableOptions',
	function($parse, $compile, editableThemes, $rootScope, $document, editableController, editableFormController, editableOptions) {
	
	  //directive object
	  return function(overwrites) {
	    return {
	      restrict: 'A',
	      scope: true,
	      require: [overwrites.directiveName, '?^form'],
	      controller: editableController,
	      link: function(scope, elem, attrs, ctrl) {
	        // editable controller
	        var eCtrl = ctrl[0];
	
	        // form controller
	        var eFormCtrl;
	
	        // this variable indicates is element is bound to some existing form,
	        // or it's single element who's form will be generated automatically
	        // By default consider single element without any linked form.ß
	        var hasForm = false;
	
	        // element wrapped by form
	        if (ctrl[1]) {
	          eFormCtrl = ctrl[1];
	          hasForm = attrs.eSingle === undefined;
	        } else if (attrs.eForm) { // element not wrapped by <form>, but we have `e-form` attr
	          var getter = $parse(attrs.eForm)(scope);
	          if (getter) { // form exists in scope (above), e.g. editable column
	            eFormCtrl = getter;
	            hasForm = true;
	          } else if (elem && typeof elem.parents === "function" && elem.parents().last().find('form[name='+attrs.eForm+']').length) { // form exists below or not exist at all: check document.forms
	            // form is below and not processed yet
	            eFormCtrl = null;
	            hasForm = true;
	          } else {
	            // form exists below or not exist at all: check document.forms
	            for (var i=0; i<$document[0].forms.length;i++) {
	              if ($document[0].forms[i].name === attrs.eForm) {
	                // form is below and not processed yet
	                eFormCtrl = null;
	                hasForm = true;
	                break;
	              }
	            }
	          }
	        }
	
	        /*
	        if(hasForm && !attrs.eName) {
	          throw 'You should provide `e-name` for editable element inside form!';
	        }
	        */
	
	        //check for `editable-form` attr in form
	        /*
	        if(eFormCtrl && ) {
	          throw 'You should provide `e-name` for editable element inside form!';
	        }
	        */
	
	        // store original props to `parent` before merge
	        angular.forEach(overwrites, function(v, k) {
	          if(eCtrl[k] !== undefined) {
	            eCtrl.parent[k] = eCtrl[k];
	          }
	        });
	
	        // merge overwrites to base editable controller
	        angular.extend(eCtrl, overwrites);
	
	        // x-editable can be disabled using editableOption or edit-disabled attribute
	        var is_disabled = function() {
	          return angular.isDefined(attrs.editDisabled) ?
	            scope.$eval(attrs.editDisabled) :
	            editableOptions.isDisabled;
	        };
	
	        // init editable ctrl
	        eCtrl.init(!hasForm);
	
	        // publich editable controller as `$editable` to be referenced in html
	        scope.$editable = eCtrl;
	
	        // add `editable` class to element
	        elem.addClass('editable');
	
	        // hasForm
	        if(hasForm) {
	          if(eFormCtrl) {
	            scope.$form = eFormCtrl;
	            if(!scope.$form.$addEditable) {
	              throw 'Form with editable elements should have `editable-form` attribute.';
	            }
	            scope.$form.$addEditable(eCtrl);
	          } else {
	            // future form (below): add editable controller to buffer and add to form later
	            $rootScope.$$editableBuffer = $rootScope.$$editableBuffer || {};
	            $rootScope.$$editableBuffer[attrs.eForm] = $rootScope.$$editableBuffer[attrs.eForm] || [];
	            $rootScope.$$editableBuffer[attrs.eForm].push(eCtrl);
	            scope.$form = null; //will be re-assigned later
	          }
	        // !hasForm
	        } else {
	          // create editableform controller
	          scope.$form = editableFormController();
	          // add self to editable controller
	          scope.$form.$addEditable(eCtrl);
	
	          // if `e-form` provided, publish local $form in scope
	          if(attrs.eForm) {
	            ($parse(attrs.eForm).assign || angular.noop)(scope.$parent, scope.$form);
	          }
	
	          // bind click - if no external form defined
	          if(!attrs.eForm || attrs.eClickable) {
	            elem.addClass('editable-click');
	            elem.bind(editableOptions.activationEvent, function(e) {
	              e.preventDefault();
	              e.editable = eCtrl;
	              if(!is_disabled()) {
	                scope.$apply(function(){
	                  scope.$form.$show();
	                });
	              }
	            });
	          }
	        }
	
	      }
	    };
	  };
	}]);
	
	/*
	Returns editableForm controller
	*/
	angular.module('xeditable').factory('editableFormController', 
	  ['$parse', '$document', '$rootScope', 'editablePromiseCollection', 'editableUtils',
	  function($parse, $document, $rootScope, editablePromiseCollection, editableUtils) {
	
	  // array of opened editable forms
	  var shown = [];
	
	  //Check if the child element correspond or is a descendant of the parent element
	  var isSelfOrDescendant = function (parent, child) {
	    if (child == parent) {
	      return true;
	    }
	
	    var node = child.parentNode;
	    while (node !== null) {
	      if (node == parent) {
	        return true;
	      }
	      node = node.parentNode;
	    }
	    return false;
	  };
	  
	  //Check if it is a real blur : if the click event appear on a shown editable elem, this is not a blur.
	  var isBlur = function(shown, event) {
	    var isBlur = true;
	
	    var editables = shown.$editables;
	    angular.forEach(editables, function(v){
	      var element = v.editorEl[0];
	      if (isSelfOrDescendant(element, event.target))
	        isBlur = false;
	      
	    });
	    return isBlur;
	  };
	  
	  // bind click to body: cancel|submit|ignore forms
	  $document.bind('click', function(e) {
	    // ignore right/middle button click
	    if (e.which && e.which !== 1) {
	      return;
	    }
	
	    var toCancel = [];
	    var toSubmit = [];
	    for (var i=0; i<shown.length; i++) {
	
	      // exclude clicked
	      if (shown[i]._clicked) {
	        shown[i]._clicked = false;
	        continue;
	      }
	
	      // exclude waiting
	      if (shown[i].$waiting) {
	        continue;
	      }
	
	      if (shown[i]._blur === 'cancel' && isBlur(shown[i], e)) {
	        toCancel.push(shown[i]);
	      }
	
	      if (shown[i]._blur === 'submit' && isBlur(shown[i], e)) {
	        toSubmit.push(shown[i]);
	      }
	    }
	
	    if (toCancel.length || toSubmit.length) {
	      $rootScope.$apply(function() {
	        angular.forEach(toCancel, function(v){ v.$cancel(); });
	        angular.forEach(toSubmit, function(v){ v.$submit(); });
	      });
	    }
	  });
	 
	  $rootScope.$on('closeEdit', function() {
	    for(var i=0; i < shown.length; i++) {
	      shown[i].$hide();
	    }
	  }); 
	
	  var base = {
	    $addEditable: function(editable) {
	      //console.log('add editable', editable.elem, editable.elem.bind);
	      this.$editables.push(editable);
	
	      //'on' is not supported in angular 1.0.8
	      editable.elem.bind('$destroy', angular.bind(this, this.$removeEditable, editable));
	
	      //bind editable's local $form to self (if not bound yet, below form) 
	      if (!editable.scope.$form) {
	        editable.scope.$form = this;
	      }
	
	      //if form already shown - call show() of new editable
	      if (this.$visible) {
	        editable.catchError(editable.show());
	      }
	      editable.catchError(editable.setWaiting(this.$waiting));
	    },
	
	    $removeEditable: function(editable) {
	      //arrayRemove
	      for(var i=0; i < this.$editables.length; i++) {
	        if(this.$editables[i] === editable) {
	          this.$editables.splice(i, 1);
	          return;
	        }
	      }
	    },
	
	    /**
	     * Shows form with editable controls.
	     * 
	     * @method $show()
	     * @memberOf editable-form
	     */
	    $show: function() {
	      if (this.$visible) {
	        return;
	      }
	
	      this.$visible = true;
	
	      var pc = editablePromiseCollection();
	
	      //own show
	      pc.when(this.$onshow());
	
	      //clear errors
	      this.$setError(null, '');
	
	      //children show
	      angular.forEach(this.$editables, function(editable) {
	        pc.when(editable.show());
	      });
	
	      //wait promises and activate
	      pc.then({
	        onWait: angular.bind(this, this.$setWaiting), 
	        onTrue: angular.bind(this, this.$activate), 
	        onFalse: angular.bind(this, this.$activate), 
	        onString: angular.bind(this, this.$activate)
	      });
	
	      // add to internal list of shown forms
	      // setTimeout needed to prevent closing right after opening (e.g. when trigger by button)
	      setTimeout(angular.bind(this, function() {
	        // clear `clicked` to get ready for clicks on visible form
	        this._clicked = false;
	        if(editableUtils.indexOf(shown, this) === -1) {
	          shown.push(this);
	        }
	      }), 0);      
	    },
	
	    /**
	     * Sets focus on form field specified by `name`.<br/>
	     * When trying to set the focus on a form field of a new row in the editable table, the `$activate` call needs to be wrapped in a `$timeout` call so that the form is rendered before the `$activate` function is called.
	     * 
	     * @method $activate(name)
	     * @param {string} name name of field
	     * @memberOf editable-form
	     */
	    $activate: function(name) {
	      var i,
	          selectionStart,
	          selectionEnd;
	      if (this.$editables.length) {
	        //activate by name
	        if (angular.isString(name)) {
	          for(i=0; i<this.$editables.length; i++) {
	            if (this.$editables[i].name === name) {
	              this.$editables[i].activate();
	              return;
	            }
	          }
	        }
	
	        //try activate error field
	        for(i=0; i<this.$editables.length; i++) {
	          if (this.$editables[i].error) {
	            this.$editables[i].activate();
	            return;
	          }
	        }
	
	        //by default activate first field
	        selectionStart = this.$editables[0].elem[0].selectionStart ? 
	            this.$editables[0].elem[0].selectionStart : 
	              this.$editables[0].elem[0].text ? this.$editables[0].elem[0].text.length : 0;
	        selectionEnd = this.$editables[0].elem[0].selectionEnd ? 
	            this.$editables[0].elem[0].selectionEnd : 
	              this.$editables[0].elem[0].text ? this.$editables[0].elem[0].text.length : 0;
	        this.$editables[0].activate(selectionStart, selectionEnd);
	      }
	    },
	
	    /**
	     * Hides form with editable controls without saving.
	     * 
	     * @method $hide()
	     * @memberOf editable-form
	     */
	    $hide: function() {
	      if (!this.$visible) {
	        return;
	      }      
	      this.$visible = false;
	      // self hide
	      this.$onhide();
	      // children's hide
	      angular.forEach(this.$editables, function(editable) {
	        editable.hide();
	      });
	
	      // remove from internal list of shown forms
	      editableUtils.arrayRemove(shown, this);
	    },
	
	    /**
	     * Triggers `oncancel` event and calls `$hide()`.
	     * 
	     * @method $cancel()
	     * @memberOf editable-form
	     */
	    $cancel: function() {
	      if (!this.$visible) {
	        return;
	      }      
	      // self cancel
	      this.$oncancel();
	      // children's cancel      
	      angular.forEach(this.$editables, function(editable) {
	        editable.cancel();
	      });
	      // self hide
	      this.$hide();
	    },    
	
	    $setWaiting: function(value) {
	      this.$waiting = !!value;
	      // we can't just set $waiting variable and use it via ng-disabled in children
	      // because in editable-row form is not accessible
	      angular.forEach(this.$editables, function(editable) {
	        editable.setWaiting(!!value);
	      });
	    },
	
	    /**
	     * Shows error message for particular field.
	     * 
	     * @method $setError(name, msg)
	     * @param {string} name name of field
	     * @param {string} msg error message
	     * @memberOf editable-form
	     */
	    $setError: function(name, msg) {
	      angular.forEach(this.$editables, function(editable) {
	        if(!name || editable.name === name) {
	          editable.setError(msg);
	        }
	      });
	    },
	
	    $submit: function() {
	      if (this.$waiting) {
	        return;
	      } 
	
	      //clear errors
	      this.$setError(null, '');
	
	      //children onbeforesave
	      var pc = editablePromiseCollection();
	      angular.forEach(this.$editables, function(editable) {
	        pc.when(editable.onbeforesave());
	      });
	
	      /*
	      onbeforesave result:
	      - true/undefined: save data and close form
	      - false: close form without saving
	      - string: keep form open and show error
	      */
	      pc.then({
	        onWait: angular.bind(this, this.$setWaiting), 
	        onTrue: angular.bind(this, checkSelf, true), 
	        onFalse: angular.bind(this, checkSelf, false), 
	        onString: angular.bind(this, this.$activate)
	      });
	
	      //save
	      function checkSelf(childrenTrue){
	        var pc = editablePromiseCollection();
	        pc.when(this.$onbeforesave());
	        pc.then({
	          onWait: angular.bind(this, this.$setWaiting), 
	          onTrue: childrenTrue ? angular.bind(this, this.$save) : angular.bind(this, this.$hide), 
	          onFalse: angular.bind(this, this.$hide), 
	          onString: angular.bind(this, this.$activate)
	        });
	      }
	    },
	
	    $save: function() {
	      // write model for each editable
	      angular.forEach(this.$editables, function(editable) {
	        editable.save();
	      });
	
	      //call onaftersave of self and children
	      var pc = editablePromiseCollection();
	      pc.when(this.$onaftersave());
	      angular.forEach(this.$editables, function(editable) {
	        pc.when(editable.onaftersave());
	      });
	
	      /*
	      onaftersave result:
	      - true/undefined/false: just close form
	      - string: keep form open and show error
	      */
	      pc.then({
	        onWait: angular.bind(this, this.$setWaiting), 
	        onTrue: angular.bind(this, this.$hide), 
	        onFalse: angular.bind(this, this.$hide), 
	        onString: angular.bind(this, this.$activate)
	      });
	    },
	
	    $onshow: angular.noop,
	    $oncancel: angular.noop,
	    $onhide: angular.noop,
	    $onbeforesave: angular.noop,
	    $onaftersave: angular.noop
	  };
	
	  return function() {
	    return angular.extend({
	      $editables: [],
	      /**
	       * Form visibility flag.
	       * 
	       * @var {bool} $visible
	       * @memberOf editable-form
	       */
	      $visible: false,
	      /**
	       * Form waiting flag. It becomes `true` when form is loading or saving data.
	       * 
	       * @var {bool} $waiting
	       * @memberOf editable-form
	       */
	      $waiting: false,
	      $data: {},
	      _clicked: false,
	      _blur: null
	    }, base);
	  };
	}]);
	
	/**
	 * EditableForm directive. Should be defined in <form> containing editable controls.  
	 * It add some usefull methods to form variable exposed to scope by `name="myform"` attribute.
	 *
	 * @namespace editable-form
	 */
	angular.module('xeditable').directive('editableForm',
	  ['$rootScope', '$parse', 'editableFormController', 'editableOptions',
	  function($rootScope, $parse, editableFormController, editableOptions) {
	    return {
	      restrict: 'A',
	      require: ['form'],
	      //require: ['form', 'editableForm'],
	      //controller: EditableFormController,
	      compile: function() {
	        return {
	          pre: function(scope, elem, attrs, ctrl) {
	            var form = ctrl[0];
	            var eForm;
	
	            //if `editableForm` has value - publish smartly under this value
	            //this is required only for single editor form that is created and removed
	            if(attrs.editableForm) {
	              if(scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
	                eForm = scope[attrs.editableForm];
	                angular.extend(form, eForm);
	              } else {
	                eForm = editableFormController();
	                scope[attrs.editableForm] = eForm;
	                angular.extend(eForm, form);
	              }
	            } else { //just merge to form and publish if form has name
	              eForm = editableFormController();
	              angular.extend(form, eForm);
	            }
	
	            //read editables from buffer (that appeared before FORM tag)
	            var buf = $rootScope.$$editableBuffer;
	            var name = form.$name;
	            if(name && buf && buf[name]) {
	              angular.forEach(buf[name], function(editable) {
	                eForm.$addEditable(editable);
	              });
	              delete buf[name];
	            }
	          },
	          post: function(scope, elem, attrs, ctrl) {
	            var eForm;
	
	            if(attrs.editableForm && scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
	              eForm = scope[attrs.editableForm];
	            } else {
	              eForm = ctrl[0];
	            }
	
	            /**
	             * Called when form is shown.
	             * 
	             * @var {method|attribute} onshow 
	             * @memberOf editable-form
	             */
	            if(attrs.onshow) {
	              eForm.$onshow = angular.bind(eForm, $parse(attrs.onshow), scope);
	            }
	
	            /**
	             * Called when form hides after both save or cancel.
	             * 
	             * @var {method|attribute} onhide 
	             * @memberOf editable-form
	             */
	            if(attrs.onhide) {
	              eForm.$onhide = angular.bind(eForm, $parse(attrs.onhide), scope);
	            }
	
	            /**
	             * Called when form is cancelled.
	             * 
	             * @var {method|attribute} oncancel
	             * @memberOf editable-form
	             */
	            if(attrs.oncancel) {
	              eForm.$oncancel = angular.bind(eForm, $parse(attrs.oncancel), scope);
	            }
	
	            /**
	             * Whether form initially rendered in shown state.
	             *
	             * @var {bool|attribute} shown
	             * @memberOf editable-form
	             */
	            if(attrs.shown && $parse(attrs.shown)(scope)) {
	              eForm.$show();
	            }
	
	            /**
	             * Action when form losses focus. Values: `cancel|submit|ignore`.
	             * Default is `ignore`.
	             * 
	             * @var {string|attribute} blur
	             * @memberOf editable-form
	             */
	            eForm._blur = attrs.blur || editableOptions.blurForm;
	
	            // onbeforesave, onaftersave
	            if(!attrs.ngSubmit && !attrs.submit) {
	              /**
	               * Called after all children `onbeforesave` callbacks but before saving form values
	               * to model.  
	               * If at least one children callback returns `non-string` - it will not not be called.  
	               * See [editable-form demo](#editable-form) for details.
	               * 
	               * @var {method|attribute} onbeforesave
	               * @memberOf editable-form
	               * 
	               */
	              if(attrs.onbeforesave) {
	                eForm.$onbeforesave = function() {
	                  return $parse(attrs.onbeforesave)(scope, {$data: eForm.$data});
	                };
	              }
	
	              /**
	               * Called when form values are saved to model.  
	               * See [editable-form demo](#editable-form) for details.
	               * 
	               * @var {method|attribute} onaftersave 
	               * @memberOf editable-form
	               * 
	               */
	              if(attrs.onaftersave) {
	                eForm.$onaftersave = function() {
	                  return $parse(attrs.onaftersave)(scope, {$data: eForm.$data});
	                };
	              }
	
	              elem.bind('submit', function(event) {
	                event.preventDefault();
	                scope.$apply(function() {
	                  eForm.$submit();
	                });
	              });
	            }
	
	
	            // click - mark form as clicked to exclude in document click handler
	            elem.bind('click', function(e) {
	              // ignore right/middle button click
	              if (e.which && e.which !== 1) {
	                return;
	              }
	
	              if (eForm.$visible) {
	                eForm._clicked = true;
	              }
	            });   
	
	          }
	        };
	      }
	    };
	}]);
	/**
	 * editablePromiseCollection
	 *  
	 * Collect results of function calls. Shows waiting if there are promises. 
	 * Finally, applies callbacks if:
	 * - onTrue(): all results are true and all promises resolved to true
	 * - onFalse(): at least one result is false or promise resolved to false
	 * - onString(): at least one result is string or promise rejected or promise resolved to string
	 */
	
	angular.module('xeditable').factory('editablePromiseCollection', ['$q', function($q) { 
	
	  function promiseCollection() {
	    return {
	      promises: [],
	      hasFalse: false,
	      hasString: false,
	      when: function(result, noPromise) {
	        if (result === false) {
	          this.hasFalse = true;
	        } else if (!noPromise && angular.isObject(result)) {
	          this.promises.push($q.when(result));
	        } else if (angular.isString(result)){
	          this.hasString = true;
	        } else { //result === true || result === undefined || result === null
	          return;
	        }
	      },
	      //callbacks: onTrue, onFalse, onString
	      then: function(callbacks) {
	        callbacks = callbacks || {};
	        var onTrue = callbacks.onTrue || angular.noop;
	        var onFalse = callbacks.onFalse || angular.noop;
	        var onString = callbacks.onString || angular.noop;
	        var onWait = callbacks.onWait || angular.noop;
	
	        var self = this;
	
	        if (this.promises.length) {
	          onWait(true);
	          $q.all(this.promises).then(
	            //all resolved       
	            function(results) {
	              onWait(false);
	              //check all results via same `when` method (without checking promises)
	              angular.forEach(results, function(result) {
	                self.when(result, true);  
	              });
	              applyCallback();
	            },
	            //some rejected
	            function(error) { 
	              onWait(false);
	              onString();
	            }
	            );
	        } else {
	          applyCallback();
	        }
	
	        function applyCallback() {
	          if (!self.hasString && !self.hasFalse) {
	            onTrue();
	          } else if (!self.hasString && self.hasFalse) {
	            onFalse();
	          } else {
	            onString();
	          }
	        }
	
	      }
	    };
	  }
	
	  return promiseCollection;
	
	}]);
	
	/**
	 * editableUtils
	 */
	 angular.module('xeditable').factory('editableUtils', [function() {
	  return {
	    indexOf: function (array, obj) {
	      if (array.indexOf) return array.indexOf(obj);
	
	      for ( var i = 0; i < array.length; i++) {
	        if (obj === array[i]) return i;
	      }
	      return -1;
	    },
	
	    arrayRemove: function (array, value) {
	      var index = this.indexOf(array, value);
	      if (index >= 0) {
	        array.splice(index, 1);
	      }
	      return value;
	    },
	
	    // copy from https://github.com/angular/angular.js/blob/master/src/Angular.js
	    camelToDash: function(str) {
	      var SNAKE_CASE_REGEXP = /[A-Z]/g;
	      return str.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
	        return (pos ? '-' : '') + letter.toLowerCase();
	      });
	    },
	
	    dashToCamel: function(str) {
	      var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	      var MOZ_HACK_REGEXP = /^moz([A-Z])/;
	      return str.
	      replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
	        return offset ? letter.toUpperCase() : letter;
	      }).
	      replace(MOZ_HACK_REGEXP, 'Moz$1');
	    },
	
	    rename: function (tag, el) {
	      if (el[0] && el[0].attributes) {
	        var newEl = angular.element('<' + tag + '/>');
	        newEl.html(el.html());
	        var attrs = el[0].attributes;
	        for (var i = 0; i < attrs.length; ++i) {
	            newEl.attr(attrs.item(i).nodeName, attrs.item(i).value);
	        }
	        return newEl;
	      }
	    }
	  };
	}]);
	
	/**
	 * editableNgOptionsParser
	 *
	 * see: https://github.com/angular/angular.js/blob/master/src/ng/directive/select.js#L131
	 */
	 angular.module('xeditable').factory('editableNgOptionsParser', [function() {
	  //0000111110000000000022220000000000000000000000333300000000000000444444444444444000000000555555555555555000000066666666666666600000000000000007777000000000000000000088888
	  var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;
	
	  function parser(optionsExp) {
	    var match;
	
	    if (! (match = optionsExp.match(NG_OPTIONS_REGEXP))) {
	      throw 'ng-options parse error';
	    }
	
	    var 
	    displayFn = match[2] || match[1],
	    valueName = match[4] || match[6],
	    keyName = match[5],
	    groupByFn = match[3] || '',
	    valueFn = match[2] ? match[1] : valueName,
	    valuesFn = match[7],
	    track = match[8],
	    trackFn = track ? match[8] : null;
	
	    var ngRepeat;
	    if (keyName === undefined) { // array
	      ngRepeat = valueName + ' in ' + valuesFn;
	      if (track !== undefined) {
	        ngRepeat += ' track by '+trackFn;
	      }
	    } else { // object
	      ngRepeat = '('+keyName+', '+valueName+') in '+valuesFn;
	    }
	    
	    // group not supported yet
	    return {
	      ngRepeat: ngRepeat,
	      locals: {
	        valueName: valueName,
	        keyName: keyName,
	        valueFn: valueFn,
	        displayFn: displayFn
	      }
	    };
	  }
	
	  return parser;
	}]);
	
	/**
	 * editableCombodate
	 *
	 * angular version of https://github.com/vitalets/combodate
	 */
	angular.module('xeditable').factory('editableCombodate', [function() {
	  function Combodate(element, options) {
	    this.$element = angular.element(element);
	
	    if(this.$element[0].nodeName != 'INPUT') {
	      throw 'Combodate should be applied to INPUT element';
	    }
	
	    var currentYear = new Date().getFullYear();
	    this.defaults = {
	      //in this format value stored in original input
	      format: 'YYYY-MM-DD HH:mm',
	      //in this format items in dropdowns are displayed
	      template: 'D / MMM / YYYY   H : mm',
	      //initial value, can be `new Date()`
	      value: null,
	      minYear: 1970,
	      maxYear: currentYear,
	      yearDescending: true,
	      minuteStep: 5,
	      secondStep: 1,
	      firstItem: 'empty', //'name', 'empty', 'none'
	      errorClass: null,
	      customClass: '',
	      roundTime: true, // whether to round minutes and seconds if step > 1
	      smartDays: true // whether days in combo depend on selected month: 31, 30, 28
	    };
	
	    this.options = angular.extend({}, this.defaults, options);
	    this.init();
	  }
	
	  Combodate.prototype = {
	    constructor: Combodate,
	    init: function () {
	      this.map = {
	        //key   regexp    moment.method
	        day:    ['D',    'date'], 
	        month:  ['M',    'month'], 
	        year:   ['Y',    'year'], 
	        hour:   ['[Hh]', 'hours'],
	        minute: ['m',    'minutes'], 
	        second: ['s',    'seconds'],
	        ampm:   ['[Aa]', ''] 
	      };
	      
	      this.$widget = angular.element('<span class="combodate"></span>').html(this.getTemplate());
	      
	      this.initCombos();
	      
	      if (this.options.smartDays) {
	        var combo = this;
	        this.$widget.find('select').bind('change', function(e) {
	          // update days count if month or year changes
	          if (angular.element(e.target).hasClass('month') || angular.element(e.target).hasClass('year')) {
	            combo.fillCombo('day');
	          }
	        });        
	      }
	
	      this.$widget.find('select').css('width', 'auto');
	
	      // hide original input and insert widget                                       
	      this.$element.css('display', 'none').after(this.$widget);
	      
	      // set initial value
	      this.setValue(this.$element.val() || this.options.value);
	    },
	    
	    /*
	     Replace tokens in template with <select> elements 
	     */         
	     getTemplate: function() {
	      var tpl = this.options.template;
	      var customClass = this.options.customClass;
	
	      //first pass
	      angular.forEach(this.map, function(v, k) {
	        v = v[0]; 
	        var r = new RegExp(v+'+');
	        var token = v.length > 1 ? v.substring(1, 2) : v;
	        
	        tpl = tpl.replace(r, '{'+token+'}');
	      });
	
	      //replace spaces with &nbsp;
	      tpl = tpl.replace(/ /g, '&nbsp;');
	
	      //second pass
	      angular.forEach(this.map, function(v, k) {
	        v = v[0];
	        var token = v.length > 1 ? v.substring(1, 2) : v;
	
	        tpl = tpl.replace('{'+token+'}', '<select class="'+k+' '+customClass+'"></select>');
	      });   
	
	      return tpl;
	    },
	    
	    /*
	     Initialize combos that presents in template 
	     */        
	     initCombos: function() {
	      for (var k in this.map) {
	        var c = this.$widget[0].querySelectorAll('.'+k);
	        // set properties like this.$day, this.$month etc.
	        this['$'+k] = c.length ? angular.element(c) : null;
	        // fill with items
	        this.fillCombo(k);
	      }
	    },
	
	    /*
	     Fill combo with items 
	     */        
	     fillCombo: function(k) {
	      var $combo = this['$'+k];
	      if (!$combo) {
	        return;
	      }
	
	      // define method name to fill items, e.g `fillDays`
	      var f = 'fill' + k.charAt(0).toUpperCase() + k.slice(1); 
	      var items = this[f]();
	      var value = $combo.val();
	
	      $combo.html('');
	      for(var i=0; i<items.length; i++) {
	        $combo.append('<option value="'+items[i][0]+'">'+items[i][1]+'</option>');
	      }
	
	      $combo.val(value);
	    },
	
	    /*
	     Initialize items of combos. Handles `firstItem` option 
	     */
	     fillCommon: function(key) {
	      var values = [], relTime;
	
	      if(this.options.firstItem === 'name') {
	        //need both to support moment ver < 2 and  >= 2
	        relTime = moment.relativeTime || moment.langData()._relativeTime; 
	        var header = typeof relTime[key] === 'function' ? relTime[key](1, true, key, false) : relTime[key];
	        //take last entry (see momentjs lang files structure) 
	        header = header.split(' ').reverse()[0];                
	        values.push(['', header]);
	      } else if(this.options.firstItem === 'empty') {
	        values.push(['', '']);
	      }
	      return values;
	    },  
	
	
	    /*
	    fill day
	    */
	    fillDay: function() {
	      var items = this.fillCommon('d'), name, i,
	      twoDigit = this.options.template.indexOf('DD') !== -1,
	      daysCount = 31;
	
	      // detect days count (depends on month and year)
	      // originally https://github.com/vitalets/combodate/pull/7
	      if (this.options.smartDays && this.$month && this.$year) {
	        var month = parseInt(this.$month.val(), 10);
	        var year = parseInt(this.$year.val(), 10);
	
	        if (!isNaN(month) && !isNaN(year)) {
	          daysCount = moment([year, month]).daysInMonth();
	        }
	      }
	
	      for (i = 1; i <= daysCount; i++) {
	        name = twoDigit ? this.leadZero(i) : i;
	        items.push([i, name]);
	      }
	      return items;
	    },
	    
	    /*
	    fill month
	    */
	    fillMonth: function() {
	      var items = this.fillCommon('M'), name, i, 
	      longNames = this.options.template.indexOf('MMMM') !== -1,
	      shortNames = this.options.template.indexOf('MMM') !== -1,
	      twoDigit = this.options.template.indexOf('MM') !== -1;
	
	      for(i=0; i<=11; i++) {
	        if(longNames) {
	          //see https://github.com/timrwood/momentjs.com/pull/36
	          name = moment().date(1).month(i).format('MMMM');
	        } else if(shortNames) {
	          name = moment().date(1).month(i).format('MMM');
	        } else if(twoDigit) {
	          name = this.leadZero(i+1);
	        } else {
	          name = i+1;
	        }
	        items.push([i, name]);
	      } 
	      return items;
	    },
	    
	    /*
	    fill year
	    */
	    fillYear: function() {
	      var items = [], name, i, 
	      longNames = this.options.template.indexOf('YYYY') !== -1;
	
	      for(i=this.options.maxYear; i>=this.options.minYear; i--) {
	        name = longNames ? i : (i+'').substring(2);
	        items[this.options.yearDescending ? 'push' : 'unshift']([i, name]);
	      }
	      
	      items = this.fillCommon('y').concat(items);
	      
	      return items;
	    },
	    
	    /*
	    fill hour
	    */
	    fillHour: function() {
	      var items = this.fillCommon('h'), name, i,
	      h12 = this.options.template.indexOf('h') !== -1,
	      h24 = this.options.template.indexOf('H') !== -1,
	      twoDigit = this.options.template.toLowerCase().indexOf('hh') !== -1,
	      min = h12 ? 1 : 0, 
	      max = h12 ? 12 : 23;
	
	      for(i=min; i<=max; i++) {
	        name = twoDigit ? this.leadZero(i) : i;
	        items.push([i, name]);
	      } 
	      return items;
	    },
	
	    /*
	    fill minute
	    */
	    fillMinute: function() {
	      var items = this.fillCommon('m'), name, i,
	      twoDigit = this.options.template.indexOf('mm') !== -1;
	
	      for(i=0; i<=59; i+= this.options.minuteStep) {
	        name = twoDigit ? this.leadZero(i) : i;
	        items.push([i, name]);
	      }
	      return items;
	    },
	    
	    /*
	    fill second
	    */
	    fillSecond: function() {
	      var items = this.fillCommon('s'), name, i,
	      twoDigit = this.options.template.indexOf('ss') !== -1;
	
	      for(i=0; i<=59; i+= this.options.secondStep) {
	        name = twoDigit ? this.leadZero(i) : i;
	        items.push([i, name]);
	      }    
	      return items;
	    },
	    
	    /*
	    fill ampm
	    */
	    fillAmpm: function() {
	      var ampmL = this.options.template.indexOf('a') !== -1,
	      ampmU = this.options.template.indexOf('A') !== -1,            
	      items = [
	      ['am', ampmL ? 'am' : 'AM'],
	      ['pm', ampmL ? 'pm' : 'PM']
	      ];
	      return items;
	    },
	
	    /*
	     Returns current date value from combos. 
	     If format not specified - `options.format` used.
	     If format = `null` - Moment object returned.
	     */
	     getValue: function(format) {
	      var dt, values = {}, 
	      that = this,
	      notSelected = false;
	
	      //getting selected values    
	      angular.forEach(this.map, function(v, k) {
	        if(k === 'ampm') {
	          return;
	        }
	        var def = k === 'day' ? 1 : 0;
	
	        values[k] = that['$'+k] ? parseInt(that['$'+k].val(), 10) : def; 
	        
	        if(isNaN(values[k])) {
	         notSelected = true;
	         return false; 
	       }
	     });
	      
	      //if at least one visible combo not selected - return empty string
	      if(notSelected) {
	       return '';
	     }
	
	      //convert hours 12h --> 24h 
	      if(this.$ampm) {
	        //12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
	        if(values.hour === 12) {
	          values.hour = this.$ampm.val() === 'am' ? 0 : 12;                    
	        } else {
	          values.hour = this.$ampm.val() === 'am' ? values.hour : values.hour+12;
	        }
	      }
	      
	      dt = moment([values.year, values.month, values.day, values.hour, values.minute, values.second]);
	      
	      //highlight invalid date
	      this.highlight(dt);
	
	      format = format === undefined ? this.options.format : format;
	      if(format === null) {
	       return dt.isValid() ? dt : null; 
	     } else {
	       return dt.isValid() ? dt.format(format) : ''; 
	     }
	   },
	
	   setValue: function(value) {
	    if(!value) {
	      return;
	    }
	
	      // parse in strict mode (third param `true`)
	      var dt = typeof value === 'string' ? moment(value, this.options.format, true) : moment(value),
	      that = this,
	      values = {};
	      
	      //function to find nearest value in select options
	      function getNearest($select, value) {
	        var delta = {};
	        angular.forEach($select.children('option'), function(opt, i){
	          var optValue = angular.element(opt).attr('value');
	
	          if(optValue === '') return;
	          var distance = Math.abs(optValue - value); 
	          if(typeof delta.distance === 'undefined' || distance < delta.distance) {
	            delta = {value: optValue, distance: distance};
	          } 
	        }); 
	        return delta.value;
	      }
	      
	      if(dt.isValid()) {
	        //read values from date object
	        angular.forEach(this.map, function(v, k) {
	          if(k === 'ampm') {
	            return; 
	          }
	          values[k] = dt[v[1]]();
	        });
	
	        if(this.$ampm) {
	          //12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
	          if(values.hour >= 12) {
	            values.ampm = 'pm';
	            if(values.hour > 12) {
	              values.hour -= 12;
	            }
	          } else {
	            values.ampm = 'am';
	            if(values.hour === 0) {
	              values.hour = 12;
	            }
	          }
	        }
	
	        angular.forEach(values, function(v, k) {
	          //call val() for each existing combo, e.g. this.$hour.val()
	          if(that['$'+k]) {
	
	            if(k === 'minute' && that.options.minuteStep > 1 && that.options.roundTime) {
	             v = getNearest(that['$'+k], v);
	           }
	           
	           if(k === 'second' && that.options.secondStep > 1 && that.options.roundTime) {
	             v = getNearest(that['$'+k], v);
	           }                       
	           
	           that['$'+k].val(v);
	         }
	       });
	
	        // update days count
	        if (this.options.smartDays) {
	          this.fillCombo('day');
	        }
	
	        this.$element.val(dt.format(this.options.format)).triggerHandler('change');
	      }
	    },
	    
	    /*
	     highlight combos if date is invalid
	     */
	     highlight: function(dt) {
	      if(!dt.isValid()) {
	        if(this.options.errorClass) {
	          this.$widget.addClass(this.options.errorClass);
	        } else {
	          //store original border color
	          if(!this.borderColor) {
	            this.borderColor = this.$widget.find('select').css('border-color'); 
	          }
	          this.$widget.find('select').css('border-color', 'red');
	        }
	      } else {
	        if(this.options.errorClass) {
	          this.$widget.removeClass(this.options.errorClass);
	        } else {
	          this.$widget.find('select').css('border-color', this.borderColor);
	        }  
	      }
	    },
	    
	    leadZero: function(v) {
	      return v <= 9 ? '0' + v : v; 
	    },
	    
	    destroy: function() {
	      this.$widget.remove();
	      this.$element.removeData('combodate').show();
	    }
	
	  };
	
	  return {
	    getInstance: function(element, options) {
	      return new Combodate(element, options);
	    }
	  };
	}]);
	
	/*
	Editable icons:
	- default
	- font-awesome
	
	*/
	angular.module('xeditable').factory('editableIcons', function() {
	
	  var icons = {
	    //Icon-set to use, defaults to bootstrap icons
	    default: {
	      'bs2': {
	        ok: 'icon-ok icon-white',
	        cancel: 'icon-remove',
	        clear: 'icon-trash'
	      },
	      'bs3': {
	        ok: 'glyphicon glyphicon-ok',
	        cancel: 'glyphicon glyphicon-remove',
	        clear: 'glyphicon glyphicon-trash'
	      }
	    },
	    external: {
	      'font-awesome': {
	        ok: 'fa fa-check',
	        cancel: 'fa fa-times',
	        clear: 'fa fa-trash'
	      }
	    }
	  };
	
	  return icons;
	});
	
	/* jshint -W086 */
	/*
	Editable themes:
	- default
	- bootstrap 2
	- bootstrap 3
	- semantic-ui
	
	Note: in postrender() `this` is instance of editableController
	*/
	angular.module('xeditable').factory('editableThemes', function() {
	  var themes = {
	    //default
	    'default': {
	      formTpl:      '<form class="editable-wrap"></form>',
	      noformTpl:    '<span class="editable-wrap"></span>',
	      controlsTpl:  '<span class="editable-controls"></span>',
	      inputTpl:     '',
	      errorTpl:     '<div class="editable-error" data-ng-if="$error" data-ng-bind="$error"></div>',
	      buttonsTpl:   '<span class="editable-buttons"></span>',
	      submitTpl:    '<button type="submit">save</button>',
	      cancelTpl:    '<button type="button" ng-click="$form.$cancel()">cancel</button>',
	      resetTpl:    '<button type="reset">clear</button>'
	    },
	
	    //bs2
	    'bs2': {
	      formTpl:     '<form class="form-inline editable-wrap" role="form"></form>',
	      noformTpl:   '<span class="editable-wrap"></span>',
	      controlsTpl: '<div class="editable-controls controls control-group" ng-class="{\'error\': $error}"></div>',
	      inputTpl:    '',
	      errorTpl:    '<div class="editable-error help-block" data-ng-if="$error" data-ng-bind="$error"></div>',
	      buttonsTpl:  '<span class="editable-buttons"></span>',
	      submitTpl:   '<button type="submit" class="btn btn-primary"><span></span></button>',
	      cancelTpl:   '<button type="button" class="btn" ng-click="$form.$cancel()">'+
	                      '<span></span>'+
	                   '</button>',
	      resetTpl:    '<button type="reset" class="btn btn-danger">clear</button>'
	
	    },
	
	    //bs3
	    'bs3': {
	      formTpl:     '<form class="form-inline editable-wrap" role="form"></form>',
	      noformTpl:   '<span class="editable-wrap"></span>',
	      controlsTpl: '<div class="editable-controls form-group" ng-class="{\'has-error\': $error}"></div>',
	      inputTpl:    '',
	      errorTpl:    '<div class="editable-error help-block" data-ng-if="$error" data-ng-bind="$error"></div>',
	      buttonsTpl:  '<span class="editable-buttons"></span>',
	      submitTpl:   '<button type="submit" class="btn btn-primary"><span></span></button>',
	      cancelTpl:   '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
	                     '<span></span>'+
	                   '</button>',
	      resetTpl:    '<button type="reset" class="btn btn-danger">clear</button>',
	
	      //bs3 specific prop to change buttons class: btn-sm, btn-lg
	      buttonsClass: '',
	      //bs3 specific prop to change standard inputs class: input-sm, input-lg
	      inputClass: '',
	      postrender: function() {
	        //apply `form-control` class to std inputs
	        switch(this.directiveName) {
	          case 'editableText':
	          case 'editableSelect':
	          case 'editableTextarea':
	          case 'editableEmail':
	          case 'editableTel':
	          case 'editableNumber':
	          case 'editableUrl':
	          case 'editableSearch':
	          case 'editableDate':
	          case 'editableDatetime':
	          case 'editableBsdate':
	          case 'editableTime':
	          case 'editableMonth':
	          case 'editableWeek':
	          case 'editablePassword':
	          case 'editableDatetimeLocal':
	            this.inputEl.addClass('form-control');
	            if(this.theme.inputClass) {
	              // don`t apply `input-sm` and `input-lg` to select multiple
	              // should be fixed in bs itself!
	              if(this.inputEl.attr('multiple') &&
	                (this.theme.inputClass === 'input-sm' || this.theme.inputClass === 'input-lg')) {
	                  break;
	              }
	              this.inputEl.addClass(this.theme.inputClass);
	            }
	          break;
	          case 'editableCheckbox':
	              this.editorEl.addClass('checkbox');
	        }
	
	        //apply buttonsClass (bs3 specific!)
	        if(this.buttonsEl && this.theme.buttonsClass) {
	          this.buttonsEl.find('button').addClass(this.theme.buttonsClass);
	        }
	      }
	    },
	    
	    //semantic-ui
	    'semantic': {
	      formTpl:     '<form class="editable-wrap ui form" ng-class="{\'error\': $error}" role="form"></form>',
	      noformTpl:   '<span class="editable-wrap"></span>',
	      controlsTpl: '<div class="editable-controls ui fluid input" ng-class="{\'error\': $error}"></div>',
	      inputTpl:    '',
	      errorTpl:    '<div class="editable-error ui error message" data-ng-if="$error" data-ng-bind="$error"></div>',
	      buttonsTpl:  '<span class="mini ui buttons"></span>',
	      submitTpl:   '<button type="submit" class="ui primary button"><i class="ui check icon"></i></button>',
	      cancelTpl:   '<button type="button" class="ui button" ng-click="$form.$cancel()">'+
	                      '<i class="ui cancel icon"></i>'+
	                   '</button>',
	      resetTpl:    '<button type="reset" class="ui button">clear</button>'
	    }
	  };
	
	  return themes;
	});


/***/ },

/***/ 323:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';
	
	var cov_88jysvc5d = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/index.js',
	        hash = 'c36f3685df8f4065082d596883428698e703e8c3',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/index.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 9,
	                    column: 0
	                },
	                end: {
	                    line: 67,
	                    column: 1
	                }
	            },
	            '1': {
	                start: {
	                    line: 13,
	                    column: 8
	                },
	                end: {
	                    line: 49,
	                    column: 9
	                }
	            },
	            '2': {
	                start: {
	                    line: 25,
	                    column: 47
	                },
	                end: {
	                    line: 25,
	                    column: 77
	                }
	            },
	            '3': {
	                start: {
	                    line: 39,
	                    column: 24
	                },
	                end: {
	                    line: 39,
	                    column: 81
	                }
	            },
	            '4': {
	                start: {
	                    line: 51,
	                    column: 8
	                },
	                end: {
	                    line: 51,
	                    column: 47
	                }
	            },
	            '5': {
	                start: {
	                    line: 56,
	                    column: 8
	                },
	                end: {
	                    line: 63,
	                    column: 11
	                }
	            },
	            '6': {
	                start: {
	                    line: 58,
	                    column: 12
	                },
	                end: {
	                    line: 61,
	                    column: 13
	                }
	            },
	            '7': {
	                start: {
	                    line: 59,
	                    column: 16
	                },
	                end: {
	                    line: 59,
	                    column: 39
	                }
	            },
	            '8': {
	                start: {
	                    line: 60,
	                    column: 16
	                },
	                end: {
	                    line: 60,
	                    column: 40
	                }
	            },
	            '9': {
	                start: {
	                    line: 70,
	                    column: 0
	                },
	                end: {
	                    line: 72,
	                    column: 3
	                }
	            },
	            '10': {
	                start: {
	                    line: 71,
	                    column: 4
	                },
	                end: {
	                    line: 71,
	                    column: 73
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 11,
	                        column: 12
	                    },
	                    end: {
	                        line: 11,
	                        column: 13
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 11,
	                        column: 52
	                    },
	                    end: {
	                        line: 53,
	                        column: 5
	                    }
	                }
	            },
	            '1': {
	                name: '(anonymous_1)',
	                decl: {
	                    start: {
	                        line: 25,
	                        column: 26
	                    },
	                    end: {
	                        line: 25,
	                        column: 27
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 25,
	                        column: 47
	                    },
	                    end: {
	                        line: 25,
	                        column: 77
	                    }
	                }
	            },
	            '2': {
	                name: '(anonymous_2)',
	                decl: {
	                    start: {
	                        line: 38,
	                        column: 29
	                    },
	                    end: {
	                        line: 38,
	                        column: 30
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 38,
	                        column: 56
	                    },
	                    end: {
	                        line: 40,
	                        column: 21
	                    }
	                }
	            },
	            '3': {
	                name: '(anonymous_3)',
	                decl: {
	                    start: {
	                        line: 55,
	                        column: 9
	                    },
	                    end: {
	                        line: 55,
	                        column: 10
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 55,
	                        column: 39
	                    },
	                    end: {
	                        line: 65,
	                        column: 5
	                    }
	                }
	            },
	            '4': {
	                name: '(anonymous_4)',
	                decl: {
	                    start: {
	                        line: 56,
	                        column: 44
	                    },
	                    end: {
	                        line: 56,
	                        column: 45
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 56,
	                        column: 104
	                    },
	                    end: {
	                        line: 63,
	                        column: 9
	                    }
	                }
	            },
	            '5': {
	                name: '(anonymous_5)',
	                decl: {
	                    start: {
	                        line: 70,
	                        column: 16
	                    },
	                    end: {
	                        line: 70,
	                        column: 17
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 70,
	                        column: 22
	                    },
	                    end: {
	                        line: 72,
	                        column: 1
	                    }
	                }
	            }
	        },
	        branchMap: {
	            '0': {
	                loc: {
	                    start: {
	                        line: 58,
	                        column: 12
	                    },
	                    end: {
	                        line: 61,
	                        column: 13
	                    }
	                },
	                type: 'if',
	                locations: [{
	                    start: {
	                        line: 58,
	                        column: 12
	                    },
	                    end: {
	                        line: 61,
	                        column: 13
	                    }
	                }, {
	                    start: {
	                        line: 58,
	                        column: 12
	                    },
	                    end: {
	                        line: 61,
	                        column: 13
	                    }
	                }]
	            },
	            '1': {
	                loc: {
	                    start: {
	                        line: 58,
	                        column: 16
	                    },
	                    end: {
	                        line: 58,
	                        column: 85
	                    }
	                },
	                type: 'binary-expr',
	                locations: [{
	                    start: {
	                        line: 58,
	                        column: 16
	                    },
	                    end: {
	                        line: 58,
	                        column: 45
	                    }
	                }, {
	                    start: {
	                        line: 58,
	                        column: 49
	                    },
	                    end: {
	                        line: 58,
	                        column: 85
	                    }
	                }]
	            }
	        },
	        s: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0,
	            '7': 0,
	            '8': 0,
	            '9': 0,
	            '10': 0
	        },
	        f: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0
	        },
	        b: {
	            '0': [0, 0],
	            '1': [0, 0]
	        },
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _states = __webpack_require__(334);
	
	var _states2 = _interopRequireDefault(_states);
	
	__webpack_require__(341);
	
	__webpack_require__(342);
	
	__webpack_require__(343);
	
	__webpack_require__(346);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	++cov_88jysvc5d.s[0];
	
	
	angular.module(_app2.default).config(function ($stateProvider, $urlRouterProvider) {
	    ++cov_88jysvc5d.f[0];
	    ++cov_88jysvc5d.s[1];
	
	
	    $stateProvider.state(_states2.default.LOGIN, {
	        url: '/login',
	        template: '<login />'
	    }).state(_states2.default.APP, {
	        abstract: true,
	        url: '/app',
	        template: __webpack_require__(347),
	        resolve: {
	            user: function user(DataSourceService) {
	                ++cov_88jysvc5d.f[1];
	                ++cov_88jysvc5d.s[2];
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
	                ++cov_88jysvc5d.f[2];
	                ++cov_88jysvc5d.s[3];
	
	                return Article.load({}, { _id: $stateParams.id }).$promise;
	            }
	        }
	    }).state(_states2.default.ARTICLE_ADD, {
	        url: '/app/addArticle',
	        template: '<article-form data="null" />'
	    });
	
	    ++cov_88jysvc5d.s[4];
	    $urlRouterProvider.otherwise('/login');
	}).run(function ($log, $rootScope, $state) {
	    ++cov_88jysvc5d.f[3];
	    ++cov_88jysvc5d.s[5];
	
	    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	        ++cov_88jysvc5d.f[4];
	        ++cov_88jysvc5d.s[6];
	
	
	        if ((++cov_88jysvc5d.b[1][0], toState.name !== _states2.default.LOGIN) && (++cov_88jysvc5d.b[1][1], _.includes([403, 401], error.status))) {
	            ++cov_88jysvc5d.b[0][0];
	            ++cov_88jysvc5d.s[7];
	
	            event.preventDefault();
	            ++cov_88jysvc5d.s[8];
	            $state.go(_states2.default.LOGIN);
	        } else {
	            ++cov_88jysvc5d.b[0][1];
	        }
	    });
	});
	
	// manual bootstrap
	++cov_88jysvc5d.s[9];
	angular.element(function () {
	    ++cov_88jysvc5d.f[5];
	    ++cov_88jysvc5d.s[10];
	
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
	
	var cov_189zjw66yw = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/app.module.js',
	        hash = 'd9fabfd97f62f91c778e5488522fb3462fc0ad4d',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/app.module.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 8,
	                    column: 12
	                },
	                end: {
	                    line: 13,
	                    column: 2
	                }
	            },
	            '1': {
	                start: {
	                    line: 15,
	                    column: 0
	                },
	                end: {
	                    line: 24,
	                    column: 1
	                }
	            }
	        },
	        fnMap: {},
	        branchMap: {},
	        s: {
	            '0': 0,
	            '1': 0
	        },
	        f: {},
	        b: {},
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
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
	
	var APP = (++cov_189zjw66yw.s[0], angular.module('todoApp', ['ngMessages', 'ngResource', 'ui.router', 'mgcrea.ngStrap']));
	
	++cov_189zjw66yw.s[1];
	APP.constant('states', _states2.default).component('pagination', _pagination2.default).component('login', _login2.default).component('articlesList', _articles2.default).component('articleForm', _article2.default);
	
	exports.default = APP.name;

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var cov_26cn3154d8 = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/login/login.component.js',
	        hash = '1378e27cec24f6a2f07784f09f62078d26ffd3bc',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/login/login.component.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 6,
	                    column: 8
	                },
	                end: {
	                    line: 6,
	                    column: 27
	                }
	            },
	            '1': {
	                start: {
	                    line: 7,
	                    column: 8
	                },
	                end: {
	                    line: 10,
	                    column: 10
	                }
	            },
	            '2': {
	                start: {
	                    line: 11,
	                    column: 8
	                },
	                end: {
	                    line: 11,
	                    column: 25
	                }
	            },
	            '3': {
	                start: {
	                    line: 12,
	                    column: 8
	                },
	                end: {
	                    line: 12,
	                    column: 51
	                }
	            },
	            '4': {
	                start: {
	                    line: 13,
	                    column: 8
	                },
	                end: {
	                    line: 13,
	                    column: 29
	                }
	            },
	            '5': {
	                start: {
	                    line: 15,
	                    column: 8
	                },
	                end: {
	                    line: 19,
	                    column: 15
	                }
	            },
	            '6': {
	                start: {
	                    line: 18,
	                    column: 16
	                },
	                end: {
	                    line: 18,
	                    column: 34
	                }
	            },
	            '7': {
	                start: {
	                    line: 23,
	                    column: 8
	                },
	                end: {
	                    line: 25,
	                    column: 48
	                }
	            },
	            '8': {
	                start: {
	                    line: 29,
	                    column: 8
	                },
	                end: {
	                    line: 29,
	                    column: 25
	                }
	            },
	            '9': {
	                start: {
	                    line: 30,
	                    column: 8
	                },
	                end: {
	                    line: 30,
	                    column: 40
	                }
	            },
	            '10': {
	                start: {
	                    line: 34,
	                    column: 8
	                },
	                end: {
	                    line: 34,
	                    column: 46
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 5,
	                        column: 4
	                    },
	                    end: {
	                        line: 5,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 5,
	                        column: 43
	                    },
	                    end: {
	                        line: 20,
	                        column: 5
	                    }
	                }
	            },
	            '1': {
	                name: '(anonymous_1)',
	                decl: {
	                    start: {
	                        line: 17,
	                        column: 19
	                    },
	                    end: {
	                        line: 17,
	                        column: 20
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 17,
	                        column: 28
	                    },
	                    end: {
	                        line: 19,
	                        column: 13
	                    }
	                }
	            },
	            '2': {
	                name: '(anonymous_2)',
	                decl: {
	                    start: {
	                        line: 22,
	                        column: 4
	                    },
	                    end: {
	                        line: 22,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 22,
	                        column: 14
	                    },
	                    end: {
	                        line: 26,
	                        column: 5
	                    }
	                }
	            },
	            '3': {
	                name: '(anonymous_3)',
	                decl: {
	                    start: {
	                        line: 28,
	                        column: 4
	                    },
	                    end: {
	                        line: 28,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 28,
	                        column: 23
	                    },
	                    end: {
	                        line: 31,
	                        column: 5
	                    }
	                }
	            },
	            '4': {
	                name: '(anonymous_4)',
	                decl: {
	                    start: {
	                        line: 33,
	                        column: 4
	                    },
	                    end: {
	                        line: 33,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 33,
	                        column: 23
	                    },
	                    end: {
	                        line: 36,
	                        column: 5
	                    }
	                }
	            }
	        },
	        branchMap: {},
	        s: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0,
	            '7': 0,
	            '8': 0,
	            '9': 0,
	            '10': 0
	        },
	        f: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0
	        },
	        b: {},
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _states = __webpack_require__(334);
	
	var _states2 = _interopRequireDefault(_states);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoginController = function () {
	    function LoginController($state, DataSourceService) {
	        var _this = this;
	
	        _classCallCheck(this, LoginController);
	
	        ++cov_26cn3154d8.f[0];
	        ++cov_26cn3154d8.s[0];
	
	        this.ready = false;
	        ++cov_26cn3154d8.s[1];
	        this.auth = {
	            login: '',
	            pass: ''
	        };
	        ++cov_26cn3154d8.s[2];
	        this.user = null;
	        ++cov_26cn3154d8.s[3];
	        this.DataSourceService = DataSourceService;
	        ++cov_26cn3154d8.s[4];
	        this.$state = $state;
	
	        ++cov_26cn3154d8.s[5];
	        this.DataSourceService.checkLogin().then(this.loginSuccess.bind(this)).catch(function (error) {
	            ++cov_26cn3154d8.f[1];
	            ++cov_26cn3154d8.s[6];
	
	            _this.ready = true;
	        });
	    }
	
	    _createClass(LoginController, [{
	        key: 'doLogin',
	        value: function doLogin() {
	            ++cov_26cn3154d8.f[2];
	            ++cov_26cn3154d8.s[7];
	
	            this.DataSourceService.doLogin(this.auth.login, this.auth.pass).then(this.loginSuccess.bind(this)).catch(this.loginFailed.bind(this));
	        }
	    }, {
	        key: 'loginSuccess',
	        value: function loginSuccess(user) {
	            ++cov_26cn3154d8.f[3];
	            ++cov_26cn3154d8.s[8];
	
	            this.user = user;
	            ++cov_26cn3154d8.s[9];
	            this.$state.go(_states2.default.ARTICLES);
	        }
	    }, {
	        key: 'loginFailed',
	        value: function loginFailed(error) {
	            ++cov_26cn3154d8.f[4];
	            ++cov_26cn3154d8.s[10];
	
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
	
	var cov_akf0jwyok = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/states.const.js',
	        hash = '6ca2e593d2086287a0e28ba18982e1311cfbc02d',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/states.const.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 1,
	                    column: 18
	                },
	                end: {
	                    line: 8,
	                    column: 1
	                }
	            }
	        },
	        fnMap: {},
	        branchMap: {},
	        s: {
	            '0': 0
	        },
	        f: {},
	        b: {},
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var AppStates = (++cov_akf0jwyok.s[0], {
	    LOGIN: 'login',
	
	    APP: 'app',
	    ARTICLES: 'app.articles',
	    ARTICLE_EDIT: 'app.articleEdit',
	    ARTICLE_ADD: 'app.articleAdd'
	});
	
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
	
	var cov_1euenhgvgu = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/articles/articles.component.js',
	        hash = 'ada613c8f101b8dd07c3ffec06604ec7cd255e8b',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/articles/articles.component.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 4,
	                    column: 8
	                },
	                end: {
	                    line: 4,
	                    column: 31
	                }
	            },
	            '1': {
	                start: {
	                    line: 5,
	                    column: 8
	                },
	                end: {
	                    line: 5,
	                    column: 27
	                }
	            },
	            '2': {
	                start: {
	                    line: 6,
	                    column: 8
	                },
	                end: {
	                    line: 6,
	                    column: 30
	                }
	            },
	            '3': {
	                start: {
	                    line: 7,
	                    column: 8
	                },
	                end: {
	                    line: 7,
	                    column: 29
	                }
	            },
	            '4': {
	                start: {
	                    line: 11,
	                    column: 8
	                },
	                end: {
	                    line: 11,
	                    column: 24
	                }
	            },
	            '5': {
	                start: {
	                    line: 16,
	                    column: 8
	                },
	                end: {
	                    line: 20,
	                    column: 15
	                }
	            },
	            '6': {
	                start: {
	                    line: 19,
	                    column: 16
	                },
	                end: {
	                    line: 19,
	                    column: 41
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 3,
	                        column: 4
	                    },
	                    end: {
	                        line: 3,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 3,
	                        column: 25
	                    },
	                    end: {
	                        line: 8,
	                        column: 5
	                    }
	                }
	            },
	            '1': {
	                name: '(anonymous_1)',
	                decl: {
	                    start: {
	                        line: 10,
	                        column: 4
	                    },
	                    end: {
	                        line: 10,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 10,
	                        column: 14
	                    },
	                    end: {
	                        line: 12,
	                        column: 5
	                    }
	                }
	            },
	            '2': {
	                name: '(anonymous_2)',
	                decl: {
	                    start: {
	                        line: 14,
	                        column: 4
	                    },
	                    end: {
	                        line: 14,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 14,
	                        column: 15
	                    },
	                    end: {
	                        line: 21,
	                        column: 5
	                    }
	                }
	            },
	            '3': {
	                name: '(anonymous_3)',
	                decl: {
	                    start: {
	                        line: 18,
	                        column: 18
	                    },
	                    end: {
	                        line: 18,
	                        column: 19
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 18,
	                        column: 30
	                    },
	                    end: {
	                        line: 20,
	                        column: 13
	                    }
	                }
	            }
	        },
	        branchMap: {},
	        s: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0
	        },
	        f: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0
	        },
	        b: {},
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ArticlesController = function () {
	    function ArticlesController(Article) {
	        _classCallCheck(this, ArticlesController);
	
	        ++cov_1euenhgvgu.f[0];
	        ++cov_1euenhgvgu.s[0];
	
	        this.Article = Article;
	        ++cov_1euenhgvgu.s[1];
	        this.articles = [];
	        ++cov_1euenhgvgu.s[2];
	        this.itemsPerPage = 3;
	        ++cov_1euenhgvgu.s[3];
	        this.currentPage = 0;
	    }
	
	    _createClass(ArticlesController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            ++cov_1euenhgvgu.f[1];
	            ++cov_1euenhgvgu.s[4];
	
	            this.loadList();
	        }
	    }, {
	        key: 'loadList',
	        value: function loadList() {
	            var _this = this;
	
	            ++cov_1euenhgvgu.f[2];
	            ++cov_1euenhgvgu.s[5];
	
	            //this.currentPage = 0;
	            this.Article.query().$promise.then(function (articles) {
	                ++cov_1euenhgvgu.f[3];
	                ++cov_1euenhgvgu.s[6];
	
	                _this.articles = articles;
	            });
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
	
	var cov_10btkjtc3u = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/article/article.component.js',
	        hash = '6fa7e31118c37985562f7bdbdfeb69e733f650c0',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/article/article.component.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 6,
	                    column: 8
	                },
	                end: {
	                    line: 6,
	                    column: 29
	                }
	            },
	            '1': {
	                start: {
	                    line: 7,
	                    column: 8
	                },
	                end: {
	                    line: 7,
	                    column: 31
	                }
	            },
	            '2': {
	                start: {
	                    line: 11,
	                    column: 8
	                },
	                end: {
	                    line: 11,
	                    column: 81
	                }
	            },
	            '3': {
	                start: {
	                    line: 15,
	                    column: 8
	                },
	                end: {
	                    line: 19,
	                    column: 9
	                }
	            },
	            '4': {
	                start: {
	                    line: 16,
	                    column: 12
	                },
	                end: {
	                    line: 16,
	                    column: 26
	                }
	            },
	            '5': {
	                start: {
	                    line: 18,
	                    column: 12
	                },
	                end: {
	                    line: 18,
	                    column: 26
	                }
	            },
	            '6': {
	                start: {
	                    line: 23,
	                    column: 8
	                },
	                end: {
	                    line: 25,
	                    column: 11
	                }
	            },
	            '7': {
	                start: {
	                    line: 24,
	                    column: 12
	                },
	                end: {
	                    line: 24,
	                    column: 44
	                }
	            },
	            '8': {
	                start: {
	                    line: 29,
	                    column: 8
	                },
	                end: {
	                    line: 31,
	                    column: 11
	                }
	            },
	            '9': {
	                start: {
	                    line: 30,
	                    column: 12
	                },
	                end: {
	                    line: 30,
	                    column: 44
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 5,
	                        column: 4
	                    },
	                    end: {
	                        line: 5,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 5,
	                        column: 33
	                    },
	                    end: {
	                        line: 8,
	                        column: 5
	                    }
	                }
	            },
	            '1': {
	                name: '(anonymous_1)',
	                decl: {
	                    start: {
	                        line: 10,
	                        column: 4
	                    },
	                    end: {
	                        line: 10,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 10,
	                        column: 16
	                    },
	                    end: {
	                        line: 12,
	                        column: 5
	                    }
	                }
	            },
	            '2': {
	                name: '(anonymous_2)',
	                decl: {
	                    start: {
	                        line: 14,
	                        column: 4
	                    },
	                    end: {
	                        line: 14,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 14,
	                        column: 11
	                    },
	                    end: {
	                        line: 20,
	                        column: 5
	                    }
	                }
	            },
	            '3': {
	                name: '(anonymous_3)',
	                decl: {
	                    start: {
	                        line: 22,
	                        column: 4
	                    },
	                    end: {
	                        line: 22,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 22,
	                        column: 13
	                    },
	                    end: {
	                        line: 26,
	                        column: 5
	                    }
	                }
	            },
	            '4': {
	                name: '(anonymous_4)',
	                decl: {
	                    start: {
	                        line: 23,
	                        column: 24
	                    },
	                    end: {
	                        line: 23,
	                        column: 25
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 23,
	                        column: 30
	                    },
	                    end: {
	                        line: 25,
	                        column: 9
	                    }
	                }
	            },
	            '5': {
	                name: '(anonymous_5)',
	                decl: {
	                    start: {
	                        line: 28,
	                        column: 4
	                    },
	                    end: {
	                        line: 28,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 28,
	                        column: 13
	                    },
	                    end: {
	                        line: 32,
	                        column: 5
	                    }
	                }
	            },
	            '6': {
	                name: '(anonymous_6)',
	                decl: {
	                    start: {
	                        line: 29,
	                        column: 26
	                    },
	                    end: {
	                        line: 29,
	                        column: 27
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 29,
	                        column: 32
	                    },
	                    end: {
	                        line: 31,
	                        column: 9
	                    }
	                }
	            }
	        },
	        branchMap: {
	            '0': {
	                loc: {
	                    start: {
	                        line: 11,
	                        column: 20
	                    },
	                    end: {
	                        line: 11,
	                        column: 80
	                    }
	                },
	                type: 'binary-expr',
	                locations: [{
	                    start: {
	                        line: 11,
	                        column: 20
	                    },
	                    end: {
	                        line: 11,
	                        column: 29
	                    }
	                }, {
	                    start: {
	                        line: 11,
	                        column: 33
	                    },
	                    end: {
	                        line: 11,
	                        column: 80
	                    }
	                }]
	            },
	            '1': {
	                loc: {
	                    start: {
	                        line: 15,
	                        column: 8
	                    },
	                    end: {
	                        line: 19,
	                        column: 9
	                    }
	                },
	                type: 'if',
	                locations: [{
	                    start: {
	                        line: 15,
	                        column: 8
	                    },
	                    end: {
	                        line: 19,
	                        column: 9
	                    }
	                }, {
	                    start: {
	                        line: 15,
	                        column: 8
	                    },
	                    end: {
	                        line: 19,
	                        column: 9
	                    }
	                }]
	            }
	        },
	        s: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0,
	            '7': 0,
	            '8': 0,
	            '9': 0
	        },
	        f: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0
	        },
	        b: {
	            '0': [0, 0],
	            '1': [0, 0]
	        },
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _states = __webpack_require__(334);
	
	var _states2 = _interopRequireDefault(_states);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ArticleController = function () {
	    function ArticleController($state, Article) {
	        _classCallCheck(this, ArticleController);
	
	        ++cov_10btkjtc3u.f[0];
	        ++cov_10btkjtc3u.s[0];
	
	        this.$state = $state;
	        ++cov_10btkjtc3u.s[1];
	        this.Article = Article;
	    }
	
	    _createClass(ArticleController, [{
	        key: '$postLink',
	        value: function $postLink() {
	            ++cov_10btkjtc3u.f[1];
	            ++cov_10btkjtc3u.s[2];
	
	            this.data = (++cov_10btkjtc3u.b[0][0], this.data) || (++cov_10btkjtc3u.b[0][1], new this.Article({ source: { name: 'usa-today' } }));
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            ++cov_10btkjtc3u.f[2];
	            ++cov_10btkjtc3u.s[3];
	
	            if (this.data._id) {
	                ++cov_10btkjtc3u.b[1][0];
	                ++cov_10btkjtc3u.s[4];
	
	                this.update();
	            } else {
	                ++cov_10btkjtc3u.b[1][1];
	                ++cov_10btkjtc3u.s[5];
	
	                this.create();
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var _this = this;
	
	            ++cov_10btkjtc3u.f[3];
	            ++cov_10btkjtc3u.s[6];
	
	            this.data.$save(function () {
	                ++cov_10btkjtc3u.f[4];
	                ++cov_10btkjtc3u.s[7];
	
	                _this.$state.go(_states2.default.ARTICLES);
	            });
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            var _this2 = this;
	
	            ++cov_10btkjtc3u.f[5];
	            ++cov_10btkjtc3u.s[8];
	
	            this.data.$create(function () {
	                ++cov_10btkjtc3u.f[6];
	                ++cov_10btkjtc3u.s[9];
	
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
	
	var cov_228epobydp = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/components/pagination.component.js',
	        hash = '1e284f4eaac39cdd4faaaf15c4f145cee895e631',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/components/pagination.component.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 4,
	                    column: 8
	                },
	                end: {
	                    line: 4,
	                    column: 24
	                }
	            },
	            '1': {
	                start: {
	                    line: 8,
	                    column: 8
	                },
	                end: {
	                    line: 10,
	                    column: 9
	                }
	            },
	            '2': {
	                start: {
	                    line: 9,
	                    column: 12
	                },
	                end: {
	                    line: 9,
	                    column: 101
	                }
	            },
	            '3': {
	                start: {
	                    line: 9,
	                    column: 90
	                },
	                end: {
	                    line: 9,
	                    column: 99
	                }
	            },
	            '4': {
	                start: {
	                    line: 14,
	                    column: 8
	                },
	                end: {
	                    line: 14,
	                    column: 33
	                }
	            },
	            '5': {
	                start: {
	                    line: 18,
	                    column: 8
	                },
	                end: {
	                    line: 18,
	                    column: 56
	                }
	            },
	            '6': {
	                start: {
	                    line: 22,
	                    column: 8
	                },
	                end: {
	                    line: 22,
	                    column: 85
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 3,
	                        column: 4
	                    },
	                    end: {
	                        line: 3,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 3,
	                        column: 18
	                    },
	                    end: {
	                        line: 5,
	                        column: 5
	                    }
	                }
	            },
	            '1': {
	                name: '(anonymous_1)',
	                decl: {
	                    start: {
	                        line: 7,
	                        column: 4
	                    },
	                    end: {
	                        line: 7,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 7,
	                        column: 27
	                    },
	                    end: {
	                        line: 11,
	                        column: 5
	                    }
	                }
	            },
	            '2': {
	                name: '(anonymous_2)',
	                decl: {
	                    start: {
	                        line: 9,
	                        column: 81
	                    },
	                    end: {
	                        line: 9,
	                        column: 82
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 9,
	                        column: 90
	                    },
	                    end: {
	                        line: 9,
	                        column: 99
	                    }
	                }
	            },
	            '3': {
	                name: '(anonymous_3)',
	                decl: {
	                    start: {
	                        line: 13,
	                        column: 4
	                    },
	                    end: {
	                        line: 13,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 13,
	                        column: 22
	                    },
	                    end: {
	                        line: 15,
	                        column: 5
	                    }
	                }
	            },
	            '4': {
	                name: '(anonymous_4)',
	                decl: {
	                    start: {
	                        line: 17,
	                        column: 4
	                    },
	                    end: {
	                        line: 17,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 17,
	                        column: 24
	                    },
	                    end: {
	                        line: 19,
	                        column: 5
	                    }
	                }
	            },
	            '5': {
	                name: '(anonymous_5)',
	                decl: {
	                    start: {
	                        line: 21,
	                        column: 4
	                    },
	                    end: {
	                        line: 21,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 21,
	                        column: 22
	                    },
	                    end: {
	                        line: 23,
	                        column: 5
	                    }
	                }
	            }
	        },
	        branchMap: {
	            '0': {
	                loc: {
	                    start: {
	                        line: 8,
	                        column: 8
	                    },
	                    end: {
	                        line: 10,
	                        column: 9
	                    }
	                },
	                type: 'if',
	                locations: [{
	                    start: {
	                        line: 8,
	                        column: 8
	                    },
	                    end: {
	                        line: 10,
	                        column: 9
	                    }
	                }, {
	                    start: {
	                        line: 8,
	                        column: 8
	                    },
	                    end: {
	                        line: 10,
	                        column: 9
	                    }
	                }]
	            },
	            '1': {
	                loc: {
	                    start: {
	                        line: 8,
	                        column: 12
	                    },
	                    end: {
	                        line: 8,
	                        column: 88
	                    }
	                },
	                type: 'binary-expr',
	                locations: [{
	                    start: {
	                        line: 8,
	                        column: 12
	                    },
	                    end: {
	                        line: 8,
	                        column: 47
	                    }
	                }, {
	                    start: {
	                        line: 8,
	                        column: 51
	                    },
	                    end: {
	                        line: 8,
	                        column: 88
	                    }
	                }]
	            }
	        },
	        s: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0
	        },
	        f: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0
	        },
	        b: {
	            '0': [0, 0],
	            '1': [0, 0]
	        },
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PaginationController = function () {
	    function PaginationController() {
	        _classCallCheck(this, PaginationController);
	
	        ++cov_228epobydp.f[0];
	        ++cov_228epobydp.s[0];
	
	        this.pages = [];
	    }
	
	    _createClass(PaginationController, [{
	        key: '$onChanges',
	        value: function $onChanges(changesObj) {
	            ++cov_228epobydp.f[1];
	            ++cov_228epobydp.s[1];
	
	            if ((++cov_228epobydp.b[1][0], changesObj.totalCount !== undefined) || (++cov_228epobydp.b[1][1], changesObj.itemsPerPage !== undefined)) {
	                ++cov_228epobydp.b[0][0];
	                ++cov_228epobydp.s[2];
	
	                this.pages = _.times(Math.ceil(this.totalCount / this.itemsPerPage), function (index) {
	                    ++cov_228epobydp.f[2];
	                    ++cov_228epobydp.s[3];
	                    return index + 1;
	                });
	            } else {
	                ++cov_228epobydp.b[0][1];
	            }
	        }
	    }, {
	        key: 'selectPage',
	        value: function selectPage(index) {
	            ++cov_228epobydp.f[3];
	            ++cov_228epobydp.s[4];
	
	            this.currentPage = index;
	        }
	    }, {
	        key: 'displayedFrom',
	        get: function get() {
	            ++cov_228epobydp.f[4];
	            ++cov_228epobydp.s[5];
	
	            return this.itemsPerPage * this.currentPage + 1;
	        }
	    }, {
	        key: 'displayedTo',
	        get: function get() {
	            ++cov_228epobydp.f[5];
	            ++cov_228epobydp.s[6];
	
	            return Math.min(this.totalCount, this.itemsPerPage * (this.currentPage + 1));
	        }
	    }]);
	
	    return PaginationController;
	}();
	
	exports.default = {
	    bindings: {
	        totalCount: '<',
	        itemsPerPage: '<',
	        currentPage: '='
	    },
	    controller: PaginationController,
	    template: '<div class="btn-group" role="group">\n                <button type="button"\n                        ng-repeat="page in $ctrl.pages"\n                        class="btn"\n                        ng-class="{\'btn-primary\': $ctrl.currentPage === $index, \'btn-default\': $ctrl.currentPage !== $index}"\n                        ng-click="$ctrl.selectPage($index)">{{page}}</button>\n            </div>\n            <span class="label label-primary">{{$ctrl.displayedFrom}} to {{$ctrl.displayedTo}} from {{$ctrl.totalCount}}</span>'
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(330)))

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	
	var cov_cpf6oyadz = function () {
	    var path = "/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/filters/pages.filter.js",
	        hash = "f6247e047e95f8301aeeb1365c049e129c4f3510",
	        global = new Function('return this')(),
	        gcv = "__coverage__",
	        coverageData = {
	        path: "/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/filters/pages.filter.js",
	        statementMap: {
	            "0": {
	                start: {
	                    line: 3,
	                    column: 0
	                },
	                end: {
	                    line: 10,
	                    column: 7
	                }
	            },
	            "1": {
	                start: {
	                    line: 4,
	                    column: 27
	                },
	                end: {
	                    line: 10,
	                    column: 5
	                }
	            },
	            "2": {
	                start: {
	                    line: 5,
	                    column: 8
	                },
	                end: {
	                    line: 5,
	                    column: 57
	                }
	            },
	            "3": {
	                start: {
	                    line: 6,
	                    column: 8
	                },
	                end: {
	                    line: 9,
	                    column: 12
	                }
	            },
	            "4": {
	                start: {
	                    line: 6,
	                    column: 73
	                },
	                end: {
	                    line: 9,
	                    column: 9
	                }
	            }
	        },
	        fnMap: {
	            "0": {
	                name: "(anonymous_0)",
	                decl: {
	                    start: {
	                        line: 4,
	                        column: 21
	                    },
	                    end: {
	                        line: 4,
	                        column: 22
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 4,
	                        column: 27
	                    },
	                    end: {
	                        line: 10,
	                        column: 5
	                    }
	                }
	            },
	            "1": {
	                name: "(anonymous_1)",
	                decl: {
	                    start: {
	                        line: 4,
	                        column: 27
	                    },
	                    end: {
	                        line: 4,
	                        column: 28
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 4,
	                        column: 61
	                    },
	                    end: {
	                        line: 10,
	                        column: 5
	                    }
	                }
	            },
	            "2": {
	                name: "(anonymous_2)",
	                decl: {
	                    start: {
	                        line: 6,
	                        column: 61
	                    },
	                    end: {
	                        line: 6,
	                        column: 62
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 6,
	                        column: 73
	                    },
	                    end: {
	                        line: 9,
	                        column: 9
	                    }
	                }
	            }
	        },
	        branchMap: {},
	        s: {
	            "0": 0,
	            "1": 0,
	            "2": 0,
	            "3": 0,
	            "4": 0
	        },
	        f: {
	            "0": 0,
	            "1": 0,
	            "2": 0
	        },
	        b: {},
	        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	++cov_cpf6oyadz.s[0];
	
	
	angular.module(_app2.default).filter('pages', function () {
	    ++cov_cpf6oyadz.f[0];
	    ++cov_cpf6oyadz.s[1];
	    return function (items, itemsPerPage, current) {
	        ++cov_cpf6oyadz.f[1];
	        ++cov_cpf6oyadz.s[2];
	
	        console.log(items.length, itemsPerPage, current);
	        ++cov_cpf6oyadz.s[3];
	        return _.times(Math.ceil(items.length / itemsPerPage), function (index) {
	            ++cov_cpf6oyadz.f[2];
	            ++cov_cpf6oyadz.s[4];
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
	
	var cov_fnb5topjm = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/services/storage.service.js',
	        hash = '5104e997c955733c24855a3d15b274c0beb3cc8b',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/services/storage.service.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 3,
	                    column: 29
	                },
	                end: {
	                    line: 3,
	                    column: 53
	                }
	            },
	            '1': {
	                start: {
	                    line: 4,
	                    column: 25
	                },
	                end: {
	                    line: 4,
	                    column: 45
	                }
	            },
	            '2': {
	                start: {
	                    line: 9,
	                    column: 8
	                },
	                end: {
	                    line: 9,
	                    column: 36
	                }
	            },
	            '3': {
	                start: {
	                    line: 10,
	                    column: 8
	                },
	                end: {
	                    line: 10,
	                    column: 21
	                }
	            },
	            '4': {
	                start: {
	                    line: 14,
	                    column: 8
	                },
	                end: {
	                    line: 14,
	                    column: 57
	                }
	            },
	            '5': {
	                start: {
	                    line: 15,
	                    column: 8
	                },
	                end: {
	                    line: 15,
	                    column: 38
	                }
	            },
	            '6': {
	                start: {
	                    line: 19,
	                    column: 20
	                },
	                end: {
	                    line: 19,
	                    column: 45
	                }
	            },
	            '7': {
	                start: {
	                    line: 20,
	                    column: 8
	                },
	                end: {
	                    line: 22,
	                    column: 10
	                }
	            },
	            '8': {
	                start: {
	                    line: 27,
	                    column: 0
	                },
	                end: {
	                    line: 28,
	                    column: 47
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 8,
	                        column: 4
	                    },
	                    end: {
	                        line: 8,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 8,
	                        column: 20
	                    },
	                    end: {
	                        line: 11,
	                        column: 5
	                    }
	                }
	            },
	            '1': {
	                name: '(anonymous_1)',
	                decl: {
	                    start: {
	                        line: 13,
	                        column: 4
	                    },
	                    end: {
	                        line: 13,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 13,
	                        column: 24
	                    },
	                    end: {
	                        line: 16,
	                        column: 5
	                    }
	                }
	            },
	            '2': {
	                name: '(anonymous_2)',
	                decl: {
	                    start: {
	                        line: 18,
	                        column: 4
	                    },
	                    end: {
	                        line: 18,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 18,
	                        column: 38
	                    },
	                    end: {
	                        line: 23,
	                        column: 5
	                    }
	                }
	            }
	        },
	        branchMap: {
	            '0': {
	                loc: {
	                    start: {
	                        line: 18,
	                        column: 17
	                    },
	                    end: {
	                        line: 18,
	                        column: 36
	                    }
	                },
	                type: 'default-arg',
	                locations: [{
	                    start: {
	                        line: 18,
	                        column: 32
	                    },
	                    end: {
	                        line: 18,
	                        column: 36
	                    }
	                }]
	            },
	            '1': {
	                loc: {
	                    start: {
	                        line: 21,
	                        column: 12
	                    },
	                    end: {
	                        line: 21,
	                        column: 56
	                    }
	                },
	                type: 'binary-expr',
	                locations: [{
	                    start: {
	                        line: 21,
	                        column: 13
	                    },
	                    end: {
	                        line: 21,
	                        column: 18
	                    }
	                }, {
	                    start: {
	                        line: 21,
	                        column: 22
	                    },
	                    end: {
	                        line: 21,
	                        column: 39
	                    }
	                }, {
	                    start: {
	                        line: 21,
	                        column: 44
	                    },
	                    end: {
	                        line: 21,
	                        column: 56
	                    }
	                }]
	            }
	        },
	        s: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0,
	            '7': 0,
	            '8': 0
	        },
	        f: {
	            '0': 0,
	            '1': 0,
	            '2': 0
	        },
	        b: {
	            '0': [0],
	            '1': [0, 0, 0]
	        },
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var KEY_LOGGED_IN = exports.KEY_LOGGED_IN = (++cov_fnb5topjm.s[0], 'TODO_APP.KEY_LOGGED_IN');
	var KEY_TODOS = exports.KEY_TODOS = (++cov_fnb5topjm.s[1], 'TODO_APP.KEY_TODOS');
	
	var StorageService = function () {
	    function StorageService($q) {
	        _classCallCheck(this, StorageService);
	
	        ++cov_fnb5topjm.f[0];
	        ++cov_fnb5topjm.s[2];
	
	        this.storage = localStorage;
	        ++cov_fnb5topjm.s[3];
	        this.$q = $q;
	    }
	
	    _createClass(StorageService, [{
	        key: 'setItem',
	        value: function setItem(key, value) {
	            ++cov_fnb5topjm.f[1];
	            ++cov_fnb5topjm.s[4];
	
	            this.storage.setItem(key, JSON.stringify(value));
	            ++cov_fnb5topjm.s[5];
	            return this.$q.resolve(value);
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem(key) {
	            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_fnb5topjm.b[0][0], null);
	            ++cov_fnb5topjm.f[2];
	
	            var value = (++cov_fnb5topjm.s[6], this.storage.getItem(key));
	            ++cov_fnb5topjm.s[7];
	            return this.$q.resolve((++cov_fnb5topjm.b[1][0], value) && (++cov_fnb5topjm.b[1][1], JSON.parse(value)) || (++cov_fnb5topjm.b[1][2], defaultValue));
	        }
	    }]);
	
	    return StorageService;
	}();
	
	++cov_fnb5topjm.s[8];
	
	
	angular.module(_app2.default).service('StorageService', StorageService);

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var cov_15e6q8d889 = function () {
	    var path = "/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/services/dataSource.service.js",
	        hash = "7a495aa6503218d054e28a59d4a40561f9a8bd55",
	        global = new Function('return this')(),
	        gcv = "__coverage__",
	        coverageData = {
	        path: "/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/services/dataSource.service.js",
	        statementMap: {
	            "0": {
	                start: {
	                    line: 7,
	                    column: 8
	                },
	                end: {
	                    line: 7,
	                    column: 21
	                }
	            },
	            "1": {
	                start: {
	                    line: 11,
	                    column: 8
	                },
	                end: {
	                    line: 11,
	                    column: 70
	                }
	            },
	            "2": {
	                start: {
	                    line: 15,
	                    column: 8
	                },
	                end: {
	                    line: 15,
	                    column: 78
	                }
	            },
	            "3": {
	                start: {
	                    line: 19,
	                    column: 8
	                },
	                end: {
	                    line: 19,
	                    column: 76
	                }
	            },
	            "4": {
	                start: {
	                    line: 23,
	                    column: 8
	                },
	                end: {
	                    line: 23,
	                    column: 79
	                }
	            },
	            "5": {
	                start: {
	                    line: 28,
	                    column: 0
	                },
	                end: {
	                    line: 29,
	                    column: 53
	                }
	            }
	        },
	        fnMap: {
	            "0": {
	                name: "(anonymous_0)",
	                decl: {
	                    start: {
	                        line: 6,
	                        column: 4
	                    },
	                    end: {
	                        line: 6,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 6,
	                        column: 20
	                    },
	                    end: {
	                        line: 8,
	                        column: 5
	                    }
	                }
	            },
	            "1": {
	                name: "(anonymous_1)",
	                decl: {
	                    start: {
	                        line: 10,
	                        column: 4
	                    },
	                    end: {
	                        line: 10,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 10,
	                        column: 17
	                    },
	                    end: {
	                        line: 12,
	                        column: 5
	                    }
	                }
	            },
	            "2": {
	                name: "(anonymous_2)",
	                decl: {
	                    start: {
	                        line: 14,
	                        column: 4
	                    },
	                    end: {
	                        line: 14,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 14,
	                        column: 25
	                    },
	                    end: {
	                        line: 16,
	                        column: 5
	                    }
	                }
	            },
	            "3": {
	                name: "(anonymous_3)",
	                decl: {
	                    start: {
	                        line: 18,
	                        column: 4
	                    },
	                    end: {
	                        line: 18,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 18,
	                        column: 23
	                    },
	                    end: {
	                        line: 20,
	                        column: 5
	                    }
	                }
	            },
	            "4": {
	                name: "(anonymous_4)",
	                decl: {
	                    start: {
	                        line: 22,
	                        column: 4
	                    },
	                    end: {
	                        line: 22,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 22,
	                        column: 26
	                    },
	                    end: {
	                        line: 24,
	                        column: 5
	                    }
	                }
	            }
	        },
	        branchMap: {},
	        s: {
	            "0": 0,
	            "1": 0,
	            "2": 0,
	            "3": 0,
	            "4": 0,
	            "5": 0
	        },
	        f: {
	            "0": 0,
	            "1": 0,
	            "2": 0,
	            "3": 0,
	            "4": 0
	        },
	        b: {},
	        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
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
	
	        ++cov_15e6q8d889.f[0];
	        ++cov_15e6q8d889.s[0];
	
	        this.$q = $q;
	    }
	
	    _createClass(DataSourceService, [{
	        key: "checkLogin",
	        value: function checkLogin() {
	            ++cov_15e6q8d889.f[1];
	            ++cov_15e6q8d889.s[1];
	
	            return this.$q.resolve(_DataSource2.default.getInstance().checkLogin());
	        }
	    }, {
	        key: "doLogin",
	        value: function doLogin(login, pass) {
	            ++cov_15e6q8d889.f[2];
	            ++cov_15e6q8d889.s[2];
	
	            return this.$q.resolve(_DataSource2.default.getInstance().doLogin(login, pass));
	        }
	    }, {
	        key: "getSources",
	        value: function getSources(params) {
	            ++cov_15e6q8d889.f[3];
	            ++cov_15e6q8d889.s[3];
	
	            return this.$q.resolve(_DataSource2.default.getInstance().getSources(params));
	        }
	    }, {
	        key: "getArticles",
	        value: function getArticles(sourceId) {
	            ++cov_15e6q8d889.f[4];
	            ++cov_15e6q8d889.s[4];
	
	            return this.$q.resolve(_DataSource2.default.getInstance().getArticles(sourceId));
	        }
	    }]);
	
	    return DataSourceService;
	}();
	
	++cov_15e6q8d889.s[5];
	
	
	angular.module(_app2.default).service('DataSourceService', DataSourceService);

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var cov_1bq1j53gg4 = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/DataSource.js',
	        hash = '1f61873946a1ef2e6ce6533579126eee8a2f8403',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/DataSource.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 4,
	                    column: 8
	                },
	                end: {
	                    line: 4,
	                    column: 55
	                }
	            },
	            '1': {
	                start: {
	                    line: 8,
	                    column: 8
	                },
	                end: {
	                    line: 8,
	                    column: 49
	                }
	            },
	            '2': {
	                start: {
	                    line: 12,
	                    column: 8
	                },
	                end: {
	                    line: 12,
	                    column: 62
	                }
	            },
	            '3': {
	                start: {
	                    line: 16,
	                    column: 8
	                },
	                end: {
	                    line: 25,
	                    column: 10
	                }
	            },
	            '4': {
	                start: {
	                    line: 29,
	                    column: 8
	                },
	                end: {
	                    line: 29,
	                    column: 34
	                }
	            },
	            '5': {
	                start: {
	                    line: 33,
	                    column: 8
	                },
	                end: {
	                    line: 33,
	                    column: 52
	                }
	            },
	            '6': {
	                start: {
	                    line: 38,
	                    column: 8
	                },
	                end: {
	                    line: 40,
	                    column: 9
	                }
	            },
	            '7': {
	                start: {
	                    line: 39,
	                    column: 12
	                },
	                end: {
	                    line: 39,
	                    column: 61
	                }
	            },
	            '8': {
	                start: {
	                    line: 42,
	                    column: 8
	                },
	                end: {
	                    line: 42,
	                    column: 35
	                }
	            },
	            '9': {
	                start: {
	                    line: 44,
	                    column: 23
	                },
	                end: {
	                    line: 44,
	                    column: 47
	                }
	            },
	            '10': {
	                start: {
	                    line: 49,
	                    column: 8
	                },
	                end: {
	                    line: 49,
	                    column: 70
	                }
	            },
	            '11': {
	                start: {
	                    line: 53,
	                    column: 8
	                },
	                end: {
	                    line: 53,
	                    column: 79
	                }
	            },
	            '12': {
	                start: {
	                    line: 57,
	                    column: 8
	                },
	                end: {
	                    line: 57,
	                    column: 51
	                }
	            },
	            '13': {
	                start: {
	                    line: 61,
	                    column: 8
	                },
	                end: {
	                    line: 61,
	                    column: 65
	                }
	            },
	            '14': {
	                start: {
	                    line: 65,
	                    column: 8
	                },
	                end: {
	                    line: 65,
	                    column: 63
	                }
	            },
	            '15': {
	                start: {
	                    line: 69,
	                    column: 8
	                },
	                end: {
	                    line: 69,
	                    column: 43
	                }
	            },
	            '16': {
	                start: {
	                    line: 73,
	                    column: 8
	                },
	                end: {
	                    line: 73,
	                    column: 76
	                }
	            },
	            '17': {
	                start: {
	                    line: 77,
	                    column: 8
	                },
	                end: {
	                    line: 77,
	                    column: 74
	                }
	            },
	            '18': {
	                start: {
	                    line: 82,
	                    column: 8
	                },
	                end: {
	                    line: 84,
	                    column: 9
	                }
	            },
	            '19': {
	                start: {
	                    line: 83,
	                    column: 12
	                },
	                end: {
	                    line: 83,
	                    column: 71
	                }
	            },
	            '20': {
	                start: {
	                    line: 86,
	                    column: 20
	                },
	                end: {
	                    line: 97,
	                    column: 9
	                }
	            },
	            '21': {
	                start: {
	                    line: 99,
	                    column: 8
	                },
	                end: {
	                    line: 105,
	                    column: 15
	                }
	            },
	            '22': {
	                start: {
	                    line: 101,
	                    column: 16
	                },
	                end: {
	                    line: 103,
	                    column: 17
	                }
	            },
	            '23': {
	                start: {
	                    line: 102,
	                    column: 20
	                },
	                end: {
	                    line: 102,
	                    column: 45
	                }
	            },
	            '24': {
	                start: {
	                    line: 104,
	                    column: 16
	                },
	                end: {
	                    line: 104,
	                    column: 39
	                }
	            },
	            '25': {
	                start: {
	                    line: 109,
	                    column: 27
	                },
	                end: {
	                    line: 109,
	                    column: 29
	                }
	            },
	            '26': {
	                start: {
	                    line: 110,
	                    column: 8
	                },
	                end: {
	                    line: 114,
	                    column: 9
	                }
	            },
	            '27': {
	                start: {
	                    line: 111,
	                    column: 12
	                },
	                end: {
	                    line: 113,
	                    column: 13
	                }
	            },
	            '28': {
	                start: {
	                    line: 112,
	                    column: 16
	                },
	                end: {
	                    line: 112,
	                    column: 59
	                }
	            },
	            '29': {
	                start: {
	                    line: 115,
	                    column: 26
	                },
	                end: {
	                    line: 115,
	                    column: 75
	                }
	            },
	            '30': {
	                start: {
	                    line: 116,
	                    column: 8
	                },
	                end: {
	                    line: 116,
	                    column: 40
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 3,
	                        column: 4
	                    },
	                    end: {
	                        line: 3,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 3,
	                        column: 25
	                    },
	                    end: {
	                        line: 5,
	                        column: 5
	                    }
	                }
	            },
	            '1': {
	                name: '(anonymous_1)',
	                decl: {
	                    start: {
	                        line: 7,
	                        column: 4
	                    },
	                    end: {
	                        line: 7,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 7,
	                        column: 30
	                    },
	                    end: {
	                        line: 9,
	                        column: 5
	                    }
	                }
	            },
	            '2': {
	                name: '(anonymous_2)',
	                decl: {
	                    start: {
	                        line: 11,
	                        column: 4
	                    },
	                    end: {
	                        line: 11,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 11,
	                        column: 41
	                    },
	                    end: {
	                        line: 13,
	                        column: 5
	                    }
	                }
	            },
	            '3': {
	                name: '(anonymous_3)',
	                decl: {
	                    start: {
	                        line: 15,
	                        column: 4
	                    },
	                    end: {
	                        line: 15,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 15,
	                        column: 37
	                    },
	                    end: {
	                        line: 26,
	                        column: 5
	                    }
	                }
	            },
	            '4': {
	                name: '(anonymous_4)',
	                decl: {
	                    start: {
	                        line: 28,
	                        column: 4
	                    },
	                    end: {
	                        line: 28,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 28,
	                        column: 36
	                    },
	                    end: {
	                        line: 30,
	                        column: 5
	                    }
	                }
	            },
	            '5': {
	                name: '(anonymous_5)',
	                decl: {
	                    start: {
	                        line: 32,
	                        column: 4
	                    },
	                    end: {
	                        line: 32,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 32,
	                        column: 36
	                    },
	                    end: {
	                        line: 34,
	                        column: 5
	                    }
	                }
	            },
	            '6': {
	                name: '(anonymous_6)',
	                decl: {
	                    start: {
	                        line: 36,
	                        column: 4
	                    },
	                    end: {
	                        line: 36,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 36,
	                        column: 18
	                    },
	                    end: {
	                        line: 46,
	                        column: 5
	                    }
	                }
	            },
	            '7': {
	                name: '(anonymous_7)',
	                decl: {
	                    start: {
	                        line: 48,
	                        column: 4
	                    },
	                    end: {
	                        line: 48,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 48,
	                        column: 23
	                    },
	                    end: {
	                        line: 50,
	                        column: 5
	                    }
	                }
	            },
	            '8': {
	                name: '(anonymous_8)',
	                decl: {
	                    start: {
	                        line: 52,
	                        column: 4
	                    },
	                    end: {
	                        line: 52,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 52,
	                        column: 26
	                    },
	                    end: {
	                        line: 54,
	                        column: 5
	                    }
	                }
	            },
	            '9': {
	                name: '(anonymous_9)',
	                decl: {
	                    start: {
	                        line: 56,
	                        column: 4
	                    },
	                    end: {
	                        line: 56,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 56,
	                        column: 15
	                    },
	                    end: {
	                        line: 58,
	                        column: 5
	                    }
	                }
	            },
	            '10': {
	                name: '(anonymous_10)',
	                decl: {
	                    start: {
	                        line: 60,
	                        column: 4
	                    },
	                    end: {
	                        line: 60,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 60,
	                        column: 21
	                    },
	                    end: {
	                        line: 62,
	                        column: 5
	                    }
	                }
	            },
	            '11': {
	                name: '(anonymous_11)',
	                decl: {
	                    start: {
	                        line: 64,
	                        column: 4
	                    },
	                    end: {
	                        line: 64,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 64,
	                        column: 22
	                    },
	                    end: {
	                        line: 66,
	                        column: 5
	                    }
	                }
	            },
	            '12': {
	                name: '(anonymous_12)',
	                decl: {
	                    start: {
	                        line: 68,
	                        column: 4
	                    },
	                    end: {
	                        line: 68,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 68,
	                        column: 17
	                    },
	                    end: {
	                        line: 70,
	                        column: 5
	                    }
	                }
	            },
	            '13': {
	                name: '(anonymous_13)',
	                decl: {
	                    start: {
	                        line: 72,
	                        column: 4
	                    },
	                    end: {
	                        line: 72,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 72,
	                        column: 25
	                    },
	                    end: {
	                        line: 74,
	                        column: 5
	                    }
	                }
	            },
	            '14': {
	                name: '(anonymous_14)',
	                decl: {
	                    start: {
	                        line: 76,
	                        column: 4
	                    },
	                    end: {
	                        line: 76,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 76,
	                        column: 23
	                    },
	                    end: {
	                        line: 78,
	                        column: 5
	                    }
	                }
	            },
	            '15': {
	                name: '(anonymous_15)',
	                decl: {
	                    start: {
	                        line: 80,
	                        column: 4
	                    },
	                    end: {
	                        line: 80,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 80,
	                        column: 64
	                    },
	                    end: {
	                        line: 106,
	                        column: 5
	                    }
	                }
	            },
	            '16': {
	                name: '(anonymous_16)',
	                decl: {
	                    start: {
	                        line: 100,
	                        column: 18
	                    },
	                    end: {
	                        line: 100,
	                        column: 19
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 100,
	                        column: 30
	                    },
	                    end: {
	                        line: 105,
	                        column: 13
	                    }
	                }
	            },
	            '17': {
	                name: '(anonymous_17)',
	                decl: {
	                    start: {
	                        line: 108,
	                        column: 4
	                    },
	                    end: {
	                        line: 108,
	                        column: 5
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 108,
	                        column: 36
	                    },
	                    end: {
	                        line: 117,
	                        column: 5
	                    }
	                }
	            }
	        },
	        branchMap: {
	            '0': {
	                loc: {
	                    start: {
	                        line: 4,
	                        column: 15
	                    },
	                    end: {
	                        line: 4,
	                        column: 54
	                    }
	                },
	                type: 'binary-expr',
	                locations: [{
	                    start: {
	                        line: 4,
	                        column: 15
	                    },
	                    end: {
	                        line: 4,
	                        column: 34
	                    }
	                }, {
	                    start: {
	                        line: 4,
	                        column: 38
	                    },
	                    end: {
	                        line: 4,
	                        column: 54
	                    }
	                }]
	            },
	            '1': {
	                loc: {
	                    start: {
	                        line: 38,
	                        column: 8
	                    },
	                    end: {
	                        line: 40,
	                        column: 9
	                    }
	                },
	                type: 'if',
	                locations: [{
	                    start: {
	                        line: 38,
	                        column: 8
	                    },
	                    end: {
	                        line: 40,
	                        column: 9
	                    }
	                }, {
	                    start: {
	                        line: 38,
	                        column: 8
	                    },
	                    end: {
	                        line: 40,
	                        column: 9
	                    }
	                }]
	            },
	            '2': {
	                loc: {
	                    start: {
	                        line: 80,
	                        column: 19
	                    },
	                    end: {
	                        line: 80,
	                        column: 31
	                    }
	                },
	                type: 'default-arg',
	                locations: [{
	                    start: {
	                        line: 80,
	                        column: 26
	                    },
	                    end: {
	                        line: 80,
	                        column: 31
	                    }
	                }]
	            },
	            '3': {
	                loc: {
	                    start: {
	                        line: 80,
	                        column: 33
	                    },
	                    end: {
	                        line: 80,
	                        column: 49
	                    }
	                },
	                type: 'default-arg',
	                locations: [{
	                    start: {
	                        line: 80,
	                        column: 47
	                    },
	                    end: {
	                        line: 80,
	                        column: 49
	                    }
	                }]
	            },
	            '4': {
	                loc: {
	                    start: {
	                        line: 80,
	                        column: 51
	                    },
	                    end: {
	                        line: 80,
	                        column: 62
	                    }
	                },
	                type: 'default-arg',
	                locations: [{
	                    start: {
	                        line: 80,
	                        column: 58
	                    },
	                    end: {
	                        line: 80,
	                        column: 62
	                    }
	                }]
	            },
	            '5': {
	                loc: {
	                    start: {
	                        line: 82,
	                        column: 8
	                    },
	                    end: {
	                        line: 84,
	                        column: 9
	                    }
	                },
	                type: 'if',
	                locations: [{
	                    start: {
	                        line: 82,
	                        column: 8
	                    },
	                    end: {
	                        line: 84,
	                        column: 9
	                    }
	                }, {
	                    start: {
	                        line: 82,
	                        column: 8
	                    },
	                    end: {
	                        line: 84,
	                        column: 9
	                    }
	                }]
	            },
	            '6': {
	                loc: {
	                    start: {
	                        line: 95,
	                        column: 22
	                    },
	                    end: {
	                        line: 95,
	                        column: 50
	                    }
	                },
	                type: 'binary-expr',
	                locations: [{
	                    start: {
	                        line: 95,
	                        column: 22
	                    },
	                    end: {
	                        line: 95,
	                        column: 26
	                    }
	                }, {
	                    start: {
	                        line: 95,
	                        column: 30
	                    },
	                    end: {
	                        line: 95,
	                        column: 50
	                    }
	                }]
	            },
	            '7': {
	                loc: {
	                    start: {
	                        line: 101,
	                        column: 16
	                    },
	                    end: {
	                        line: 103,
	                        column: 17
	                    }
	                },
	                type: 'if',
	                locations: [{
	                    start: {
	                        line: 101,
	                        column: 16
	                    },
	                    end: {
	                        line: 103,
	                        column: 17
	                    }
	                }, {
	                    start: {
	                        line: 101,
	                        column: 16
	                    },
	                    end: {
	                        line: 103,
	                        column: 17
	                    }
	                }]
	            },
	            '8': {
	                loc: {
	                    start: {
	                        line: 108,
	                        column: 23
	                    },
	                    end: {
	                        line: 108,
	                        column: 34
	                    }
	                },
	                type: 'default-arg',
	                locations: [{
	                    start: {
	                        line: 108,
	                        column: 32
	                    },
	                    end: {
	                        line: 108,
	                        column: 34
	                    }
	                }]
	            },
	            '9': {
	                loc: {
	                    start: {
	                        line: 111,
	                        column: 12
	                    },
	                    end: {
	                        line: 113,
	                        column: 13
	                    }
	                },
	                type: 'if',
	                locations: [{
	                    start: {
	                        line: 111,
	                        column: 12
	                    },
	                    end: {
	                        line: 113,
	                        column: 13
	                    }
	                }, {
	                    start: {
	                        line: 111,
	                        column: 12
	                    },
	                    end: {
	                        line: 113,
	                        column: 13
	                    }
	                }]
	            },
	            '10': {
	                loc: {
	                    start: {
	                        line: 115,
	                        column: 26
	                    },
	                    end: {
	                        line: 115,
	                        column: 75
	                    }
	                },
	                type: 'cond-expr',
	                locations: [{
	                    start: {
	                        line: 115,
	                        column: 46
	                    },
	                    end: {
	                        line: 115,
	                        column: 70
	                    }
	                }, {
	                    start: {
	                        line: 115,
	                        column: 73
	                    },
	                    end: {
	                        line: 115,
	                        column: 75
	                    }
	                }]
	            }
	        },
	        s: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0,
	            '7': 0,
	            '8': 0,
	            '9': 0,
	            '10': 0,
	            '11': 0,
	            '12': 0,
	            '13': 0,
	            '14': 0,
	            '15': 0,
	            '16': 0,
	            '17': 0,
	            '18': 0,
	            '19': 0,
	            '20': 0,
	            '21': 0,
	            '22': 0,
	            '23': 0,
	            '24': 0,
	            '25': 0,
	            '26': 0,
	            '27': 0,
	            '28': 0,
	            '29': 0,
	            '30': 0
	        },
	        f: {
	            '0': 0,
	            '1': 0,
	            '2': 0,
	            '3': 0,
	            '4': 0,
	            '5': 0,
	            '6': 0,
	            '7': 0,
	            '8': 0,
	            '9': 0,
	            '10': 0,
	            '11': 0,
	            '12': 0,
	            '13': 0,
	            '14': 0,
	            '15': 0,
	            '16': 0,
	            '17': 0
	        },
	        b: {
	            '0': [0, 0],
	            '1': [0, 0],
	            '2': [0],
	            '3': [0],
	            '4': [0],
	            '5': [0, 0],
	            '6': [0, 0],
	            '7': [0, 0],
	            '8': [0],
	            '9': [0, 0],
	            '10': [0, 0]
	        },
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataSource = function () {
	    _createClass(DataSource, null, [{
	        key: 'getInstance',
	        value: function getInstance() {
	            ++cov_1bq1j53gg4.f[0];
	            ++cov_1bq1j53gg4.s[0];
	
	            return (++cov_1bq1j53gg4.b[0][0], DataSource.instance) || (++cov_1bq1j53gg4.b[0][1], new DataSource());
	        }
	    }, {
	        key: 'createSource',
	        value: function createSource(data) {
	            ++cov_1bq1j53gg4.f[1];
	            ++cov_1bq1j53gg4.s[1];
	
	            return Object.assign(new Source(), data);
	        }
	    }, {
	        key: 'createArticle',
	        value: function createArticle(sourceId, data) {
	            ++cov_1bq1j53gg4.f[2];
	            ++cov_1bq1j53gg4.s[2];
	
	            return Object.assign(new Article(), data, { sourceId: sourceId });
	        }
	    }, {
	        key: 'availableCategories',
	        get: function get() {
	            ++cov_1bq1j53gg4.f[3];
	            ++cov_1bq1j53gg4.s[3];
	
	            return ['business', 'entertainment', 'gaming', 'general', 'music', 'science-and-nature', 'sport', 'technology'];
	        }
	    }, {
	        key: 'availableLanguages',
	        get: function get() {
	            ++cov_1bq1j53gg4.f[4];
	            ++cov_1bq1j53gg4.s[4];
	
	            return ['en', 'de', 'fr'];
	        }
	    }, {
	        key: 'availableCountries',
	        get: function get() {
	            ++cov_1bq1j53gg4.f[5];
	            ++cov_1bq1j53gg4.s[5];
	
	            return ['au', 'de', 'gb', 'in', 'it', 'us'];
	        }
	    }]);
	
	    function DataSource() {
	        _classCallCheck(this, DataSource);
	
	        ++cov_1bq1j53gg4.f[6];
	        ++cov_1bq1j53gg4.s[6];
	
	
	        if (DataSource.instance) {
	            ++cov_1bq1j53gg4.b[1][0];
	            ++cov_1bq1j53gg4.s[7];
	
	            throw 'DataSource instance already instantiated';
	        } else {
	            ++cov_1bq1j53gg4.b[1][1];
	        }
	
	        ++cov_1bq1j53gg4.s[8];
	        DataSource.instance = this;
	
	        var config = (++cov_1bq1j53gg4.s[9], __webpack_require__(345));
	    }
	
	    _createClass(DataSource, [{
	        key: 'getSources',
	        value: function getSources(params) {
	            ++cov_1bq1j53gg4.f[7];
	            ++cov_1bq1j53gg4.s[10];
	
	            return this.doRequest('/api/articles/sources', 'GET', params);
	        }
	    }, {
	        key: 'getArticles',
	        value: function getArticles(sourceId) {
	            ++cov_1bq1j53gg4.f[8];
	            ++cov_1bq1j53gg4.s[11];
	
	            return this.doRequest('/api/articles', 'GET', { 'source.id': sourceId });
	        }
	    }, {
	        key: 'getUsers',
	        value: function getUsers() {
	            ++cov_1bq1j53gg4.f[9];
	            ++cov_1bq1j53gg4.s[12];
	
	            return this.doRequest('/api/users', 'GET');
	        }
	    }, {
	        key: 'addArticle',
	        value: function addArticle(data) {
	            ++cov_1bq1j53gg4.f[10];
	            ++cov_1bq1j53gg4.s[13];
	
	            return this.doRequest('/api/articles', 'POST', {}, data);
	        }
	    }, {
	        key: 'removeArticle',
	        value: function removeArticle(id) {
	            ++cov_1bq1j53gg4.f[11];
	            ++cov_1bq1j53gg4.s[14];
	
	            return this.doRequest('/api/articles/' + id, 'DELETE');
	        }
	    }, {
	        key: 'checkLogin',
	        value: function checkLogin() {
	            ++cov_1bq1j53gg4.f[12];
	            ++cov_1bq1j53gg4.s[15];
	
	            return this.doRequest('/api/auth');
	        }
	    }, {
	        key: 'doLogin',
	        value: function doLogin(login, pass) {
	            ++cov_1bq1j53gg4.f[13];
	            ++cov_1bq1j53gg4.s[16];
	
	            return this.doRequest('/api/auth/login', 'POST', {}, { login: login, pass: pass });
	        }
	    }, {
	        key: 'doReg',
	        value: function doReg(login, pass) {
	            ++cov_1bq1j53gg4.f[14];
	            ++cov_1bq1j53gg4.s[17];
	
	            return this.doRequest('/api/auth/reg', 'POST', {}, { login: login, pass: pass });
	        }
	    }, {
	        key: 'doRequest',
	        value: function doRequest(url) {
	            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_1bq1j53gg4.b[2][0], 'GET');
	            var queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++cov_1bq1j53gg4.b[3][0], {});
	            var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (++cov_1bq1j53gg4.b[4][0], null);
	            ++cov_1bq1j53gg4.f[15];
	            ++cov_1bq1j53gg4.s[18];
	
	
	            if (true) {
	                ++cov_1bq1j53gg4.b[5][0];
	                ++cov_1bq1j53gg4.s[19];
	
	                console.log('DataSource doRequest()', method, queryParams);
	            } else {
	                ++cov_1bq1j53gg4.b[5][1];
	            }
	
	            var req = (++cov_1bq1j53gg4.s[20], new Request(this.createUrl(url, queryParams), {
	                headers: {
	                    'Accept': 'application/json',
	                    'Content-Type': 'application/json'
	                },
	                credentials: 'include',
	                method: method,
	                body: (++cov_1bq1j53gg4.b[6][0], body) && (++cov_1bq1j53gg4.b[6][1], JSON.stringify(body))
	            }));
	
	            ++cov_1bq1j53gg4.s[21];
	            return fetch(req).then(function (response) {
	                ++cov_1bq1j53gg4.f[16];
	                ++cov_1bq1j53gg4.s[22];
	
	                if (!response.ok) {
	                    ++cov_1bq1j53gg4.b[7][0];
	                    ++cov_1bq1j53gg4.s[23];
	
	                    throw 'DataSource error';
	                } else {
	                    ++cov_1bq1j53gg4.b[7][1];
	                }
	                ++cov_1bq1j53gg4.s[24];
	                return response.json();
	            });
	        }
	    }, {
	        key: 'createUrl',
	        value: function createUrl(baseUrl) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_1bq1j53gg4.b[8][0], {});
	            ++cov_1bq1j53gg4.f[17];
	
	            var queryParts = (++cov_1bq1j53gg4.s[25], []);
	            ++cov_1bq1j53gg4.s[26];
	            for (var name in params) {
	                ++cov_1bq1j53gg4.s[27];
	
	                if (params[name]) {
	                    ++cov_1bq1j53gg4.b[9][0];
	                    ++cov_1bq1j53gg4.s[28];
	
	                    queryParts.push(name + '=' + params[name]);
	                } else {
	                    ++cov_1bq1j53gg4.b[9][1];
	                }
	            }
	            var urlSuffix = (++cov_1bq1j53gg4.s[29], queryParts.length ? (++cov_1bq1j53gg4.b[10][0], '?' + queryParts.join('&')) : (++cov_1bq1j53gg4.b[10][1], ''));
	            ++cov_1bq1j53gg4.s[30];
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
	
	var cov_2oh3sjl42i = function () {
	    var path = '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/services/article.resource.js',
	        hash = '0b32d204ae847abb3e704ce287e921ecd67c21c4',
	        global = new Function('return this')(),
	        gcv = '__coverage__',
	        coverageData = {
	        path: '/Users/book/Documents/repos/fe-mentoring-2016/frontend/js/angular/app/common/services/article.resource.js',
	        statementMap: {
	            '0': {
	                start: {
	                    line: 5,
	                    column: 8
	                },
	                end: {
	                    line: 12,
	                    column: 15
	                }
	            }
	        },
	        fnMap: {
	            '0': {
	                name: '(anonymous_0)',
	                decl: {
	                    start: {
	                        line: 4,
	                        column: 24
	                    },
	                    end: {
	                        line: 4,
	                        column: 25
	                    }
	                },
	                loc: {
	                    start: {
	                        line: 4,
	                        column: 39
	                    },
	                    end: {
	                        line: 14,
	                        column: 5
	                    }
	                }
	            }
	        },
	        branchMap: {},
	        s: {
	            '0': 0
	        },
	        f: {
	            '0': 0
	        },
	        b: {},
	        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	    },
	        coverage = global[gcv] || (global[gcv] = {});
	
	    if (coverage[path] && coverage[path].hash === hash) {
	        return coverage[path];
	    }
	
	    coverageData.hash = hash;
	    return coverage[path] = coverageData;
	}();
	
	var _app = __webpack_require__(332);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module(_app2.default).factory('Article', function ($resource) {
	    ++cov_2oh3sjl42i.f[0];
	    ++cov_2oh3sjl42i.s[0];
	
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
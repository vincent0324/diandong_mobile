/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Focus = __webpack_require__(1);
	var focus = new Focus();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {

	    var $ = __webpack_require__(2);
	    var Swiper = __webpack_require__(3);

	    var Focus = function Focus() {
	        this.init();
	    };

	    Focus.prototype = {
	        init: function init() {
	            this.initFocusSwiper();
	        },
	        initFocusSwiper: function initFocusSwiper() {
	            var focusSwiper = new Swiper('.focus-container', {
	                pagination: '.focus-pages',
	                loop: true,
	                grabCursor: true,
	                autoplay: 5000,
	                autoplayDisableOnInteraction: false,
	                wrapperClass: 'focus-wrapper',
	                slideClass: 'focus-slide'
	            });
	        }
	    };

	    module.exports = Focus;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* Zepto 1.1.4 - zepto event ajax form ie fx fx_methods data assets selector touch deferred callbacks - zeptojs.com/license */

	var Zepto = function () {
	  var undefined,
	      key,
	      $,
	      classList,
	      emptyArray = [],
	      _concat = emptyArray.concat,
	      _filter = emptyArray.filter,
	      _slice = emptyArray.slice,
	      document = window.document,
	      elementDisplay = {},
	      classCache = {},
	      cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
	      fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	      singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	      rootNodeRE = /^(?:body|html)$/i,
	      capitalRE = /([A-Z])/g,


	  // special attributes that should be get/set via method calls
	  methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
	      adjacencyOperators = ['after', 'prepend', 'before', 'append'],
	      table = document.createElement('table'),
	      tableRow = document.createElement('tr'),
	      containers = {
	    'tr': document.createElement('tbody'),
	    'tbody': table, 'thead': table, 'tfoot': table,
	    'td': tableRow, 'th': tableRow,
	    '*': document.createElement('div')
	  },
	      readyRE = /complete|loaded|interactive/,
	      simpleSelectorRE = /^[\w-]*$/,
	      class2type = {},
	      toString = class2type.toString,
	      zepto = {},
	      camelize,
	      uniq,
	      tempParent = document.createElement('div'),
	      propMap = {
	    'tabindex': 'tabIndex',
	    'readonly': 'readOnly',
	    'for': 'htmlFor',
	    'class': 'className',
	    'maxlength': 'maxLength',
	    'cellspacing': 'cellSpacing',
	    'cellpadding': 'cellPadding',
	    'rowspan': 'rowSpan',
	    'colspan': 'colSpan',
	    'usemap': 'useMap',
	    'frameborder': 'frameBorder',
	    'contenteditable': 'contentEditable'
	  },
	      isArray = Array.isArray || function (object) {
	    return object instanceof Array;
	  };

	  zepto.matches = function (element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false;
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
	    if (matchesSelector) return matchesSelector.call(element, selector);
	    // fall back to performing a selector:
	    var match,
	        parent = element.parentNode,
	        temp = !parent;
	    if (temp) (parent = tempParent).appendChild(element);
	    match = ~zepto.qsa(parent, selector).indexOf(element);
	    temp && tempParent.removeChild(element);
	    return match;
	  };

	  function type(obj) {
	    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
	  }

	  function isFunction(value) {
	    return type(value) == "function";
	  }
	  function isWindow(obj) {
	    return obj != null && obj == obj.window;
	  }
	  function isDocument(obj) {
	    return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
	  }
	  function isObject(obj) {
	    return type(obj) == "object";
	  }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	  }
	  function likeArray(obj) {
	    return typeof obj.length == 'number';
	  }

	  function compact(array) {
	    return _filter.call(array, function (item) {
	      return item != null;
	    });
	  }
	  function flatten(array) {
	    return array.length > 0 ? $.fn.concat.apply([], array) : array;
	  }
	  camelize = function camelize(str) {
	    return str.replace(/-+(.)?/g, function (match, chr) {
	      return chr ? chr.toUpperCase() : '';
	    });
	  };
	  function dasherize(str) {
	    return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
	  }
	  uniq = function uniq(array) {
	    return _filter.call(array, function (item, idx) {
	      return array.indexOf(item) == idx;
	    });
	  };

	  function classRE(name) {
	    return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
	  }

	  function maybeAddPx(name, value) {
	    return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
	  }

	  function defaultDisplay(nodeName) {
	    var element, display;
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName);
	      document.body.appendChild(element);
	      display = getComputedStyle(element, '').getPropertyValue("display");
	      element.parentNode.removeChild(element);
	      display == "none" && (display = "block");
	      elementDisplay[nodeName] = display;
	    }
	    return elementDisplay[nodeName];
	  }

	  function _children(element) {
	    return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
	      if (node.nodeType == 1) return node;
	    });
	  }

	  function Z(dom, selector) {
	    var i,
	        len = dom ? dom.length : 0;
	    for (i = 0; i < len; i++) {
	      this[i] = dom[i];
	    }this.length = len;
	    this.selector = selector || '';
	  }

	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function (html, name, properties) {
	    var dom, nodes, container;

	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
	      if (!(name in containers)) name = '*';

	      container = containers[name];
	      container.innerHTML = '' + html;
	      dom = $.each(_slice.call(container.childNodes), function () {
	        container.removeChild(this);
	      });
	    }

	    if (isPlainObject(properties)) {
	      nodes = $(dom);
	      $.each(properties, function (key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
	      });
	    }

	    return dom;
	  };

	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. This method can be overriden in plugins.
	  zepto.Z = function (dom, selector) {
	    return new Z(dom, selector);
	  };

	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function (object) {
	    return object instanceof zepto.Z;
	  };

	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function (selector, context) {
	    var dom;
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z();
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	        selector = selector.trim();
	        // If it's a html fragment, create nodes from it
	        // Note: In both Chrome 21 and Firefox 15, DOM error 12
	        // is thrown if the fragment doesn't begin with <
	        if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
	        // If there's a context, create a collection on that context first, and select
	        // nodes from there
	        else if (context !== undefined) return $(context).find(selector);
	          // If it's a CSS selector, use it to select nodes.
	          else dom = zepto.qsa(document, selector);
	      }
	      // If a function is given, call it when the DOM is ready
	      else if (isFunction(selector)) return $(document).ready(selector);
	        // If a Zepto collection is given, just return it
	        else if (zepto.isZ(selector)) return selector;else {
	            // normalize array if an array of nodes is given
	            if (isArray(selector)) dom = compact(selector);
	            // Wrap DOM nodes.
	            else if (isObject(selector)) dom = [selector], selector = null;
	              // If it's a html fragment, create nodes from it
	              else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
	                // If there's a context, create a collection on that context first, and select
	                // nodes from there
	                else if (context !== undefined) return $(context).find(selector);
	                  // And last but no least, if it's a CSS selector, use it to select nodes.
	                  else dom = zepto.qsa(document, selector);
	          }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector);
	  };

	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function $(selector, context) {
	    return zepto.init(selector, context);
	  };

	  function extend(target, source, deep) {
	    for (key in source) {
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
	        if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
	        extend(target[key], source[key], deep);
	      } else if (source[key] !== undefined) target[key] = source[key];
	    }
	  }

	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function (target) {
	    var deep,
	        args = _slice.call(arguments, 1);
	    if (typeof target == 'boolean') {
	      deep = target;
	      target = args.shift();
	    }
	    args.forEach(function (arg) {
	      extend(target, arg, deep);
	    });
	    return target;
	  };

	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function (element, selector) {
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
	        // Ensure that a 1 char tag name still gets checked
	    isSimple = simpleSelectorRE.test(nameOnly);
	    return element.getElementById && isSimple && maybeID ? // Safari DocumentFragment doesn't have getElementById
	    (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
	    maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	    element.getElementsByTagName(selector) : // Or a tag
	    element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	    );
	  };

	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector);
	  }

	  $.contains = document.documentElement.contains ? function (parent, node) {
	    return parent !== node && parent.contains(node);
	  } : function (parent, node) {
	    while (node && (node = node.parentNode)) {
	      if (node === parent) return true;
	    }return false;
	  };

	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg;
	  }

	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
	  }

	  // access className property while respecting SVGAnimatedString
	  function className(node, value) {
	    var klass = node.className || '',
	        svg = klass && klass.baseVal !== undefined;

	    if (value === undefined) return svg ? klass.baseVal : klass;
	    svg ? klass.baseVal = value : node.className = value;
	  }

	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
	    } catch (e) {
	      return value;
	    }
	  }

	  $.type = type;
	  $.isFunction = isFunction;
	  $.isWindow = isWindow;
	  $.isArray = isArray;
	  $.isPlainObject = isPlainObject;

	  $.isEmptyObject = function (obj) {
	    var name;
	    for (name in obj) {
	      return false;
	    }return true;
	  };

	  $.inArray = function (elem, array, i) {
	    return emptyArray.indexOf.call(array, elem, i);
	  };

	  $.camelCase = camelize;
	  $.trim = function (str) {
	    return str == null ? "" : String.prototype.trim.call(str);
	  };

	  // plugin compatibility
	  $.uuid = 0;
	  $.support = {};
	  $.expr = {};
	  $.noop = function () {};

	  $.map = function (elements, callback) {
	    var value,
	        values = [],
	        i,
	        key;
	    if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
	      value = callback(elements[i], i);
	      if (value != null) values.push(value);
	    } else for (key in elements) {
	      value = callback(elements[key], key);
	      if (value != null) values.push(value);
	    }
	    return flatten(values);
	  };

	  $.each = function (elements, callback) {
	    var i, key;
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++) {
	        if (callback.call(elements[i], i, elements[i]) === false) return elements;
	      }
	    } else {
	      for (key in elements) {
	        if (callback.call(elements[key], key, elements[key]) === false) return elements;
	      }
	    }

	    return elements;
	  };

	  $.grep = function (elements, callback) {
	    return _filter.call(elements, callback);
	  };

	  if (window.JSON) $.parseJSON = JSON.parse;

	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
	    class2type["[object " + name + "]"] = name.toLowerCase();
	  });

	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    constructor: zepto.Z,
	    length: 0,

	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    splice: emptyArray.splice,
	    indexOf: emptyArray.indexOf,
	    concat: function concat() {
	      var i,
	          value,
	          args = [];
	      for (i = 0; i < arguments.length; i++) {
	        value = arguments[i];
	        args[i] = zepto.isZ(value) ? value.toArray() : value;
	      }
	      return _concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
	    },

	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function map(fn) {
	      return $($.map(this, function (el, i) {
	        return fn.call(el, i, el);
	      }));
	    },
	    slice: function slice() {
	      return $(_slice.apply(this, arguments));
	    },

	    ready: function ready(callback) {
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {
	        callback($);
	      }, false);
	      return this;
	    },
	    get: function get(idx) {
	      return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
	    },
	    toArray: function toArray() {
	      return this.get();
	    },
	    size: function size() {
	      return this.length;
	    },
	    remove: function remove() {
	      return this.each(function () {
	        if (this.parentNode != null) this.parentNode.removeChild(this);
	      });
	    },
	    each: function each(callback) {
	      emptyArray.every.call(this, function (el, idx) {
	        return callback.call(el, idx, el) !== false;
	      });
	      return this;
	    },
	    filter: function filter(selector) {
	      if (isFunction(selector)) return this.not(this.not(selector));
	      return $(_filter.call(this, function (element) {
	        return zepto.matches(element, selector);
	      }));
	    },
	    add: function add(selector, context) {
	      return $(uniq(this.concat($(selector, context))));
	    },
	    is: function is(selector) {
	      return this.length > 0 && zepto.matches(this[0], selector);
	    },
	    not: function not(selector) {
	      var nodes = [];
	      if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
	        if (!selector.call(this, idx)) nodes.push(this);
	      });else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
	        this.forEach(function (el) {
	          if (excludes.indexOf(el) < 0) nodes.push(el);
	        });
	      }
	      return $(nodes);
	    },
	    has: function has(selector) {
	      return this.filter(function () {
	        return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
	      });
	    },
	    eq: function eq(idx) {
	      return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
	    },
	    first: function first() {
	      var el = this[0];
	      return el && !isObject(el) ? el : $(el);
	    },
	    last: function last() {
	      var el = this[this.length - 1];
	      return el && !isObject(el) ? el : $(el);
	    },
	    find: function find(selector) {
	      var result,
	          $this = this;
	      if (!selector) result = $();else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') result = $(selector).filter(function () {
	        var node = this;
	        return emptyArray.some.call($this, function (parent) {
	          return $.contains(parent, node);
	        });
	      });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
	        return zepto.qsa(this, selector);
	      });
	      return result;
	    },
	    closest: function closest(selector, context) {
	      var node = this[0],
	          collection = false;
	      if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') collection = $(selector);
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
	        node = node !== context && !isDocument(node) && node.parentNode;
	      }return $(node);
	    },
	    parents: function parents(selector) {
	      var ancestors = [],
	          nodes = this;
	      while (nodes.length > 0) {
	        nodes = $.map(nodes, function (node) {
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node);
	            return node;
	          }
	        });
	      }return filtered(ancestors, selector);
	    },
	    parent: function parent(selector) {
	      return filtered(uniq(this.pluck('parentNode')), selector);
	    },
	    children: function children(selector) {
	      return filtered(this.map(function () {
	        return _children(this);
	      }), selector);
	    },
	    contents: function contents() {
	      return this.map(function () {
	        return this.contentDocument || _slice.call(this.childNodes);
	      });
	    },
	    siblings: function siblings(selector) {
	      return filtered(this.map(function (i, el) {
	        return _filter.call(_children(el.parentNode), function (child) {
	          return child !== el;
	        });
	      }), selector);
	    },
	    empty: function empty() {
	      return this.each(function () {
	        this.innerHTML = '';
	      });
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function pluck(property) {
	      return $.map(this, function (el) {
	        return el[property];
	      });
	    },
	    show: function show() {
	      return this.each(function () {
	        this.style.display == "none" && (this.style.display = '');
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
	      });
	    },
	    replaceWith: function replaceWith(newContent) {
	      return this.before(newContent).remove();
	    },
	    wrap: function wrap(structure) {
	      var func = isFunction(structure);
	      if (this[0] && !func) var dom = $(structure).get(0),
	          clone = dom.parentNode || this.length > 1;

	      return this.each(function (index) {
	        $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
	      });
	    },
	    wrapAll: function wrapAll(structure) {
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure));
	        var children;
	        // drill down to the inmost element
	        while ((children = structure.children()).length) {
	          structure = children.first();
	        }$(structure).append(this);
	      }
	      return this;
	    },
	    wrapInner: function wrapInner(structure) {
	      var func = isFunction(structure);
	      return this.each(function (index) {
	        var self = $(this),
	            contents = self.contents(),
	            dom = func ? structure.call(this, index) : structure;
	        contents.length ? contents.wrapAll(dom) : self.append(dom);
	      });
	    },
	    unwrap: function unwrap() {
	      this.parent().each(function () {
	        $(this).replaceWith($(this).children());
	      });
	      return this;
	    },
	    clone: function clone() {
	      return this.map(function () {
	        return this.cloneNode(true);
	      });
	    },
	    hide: function hide() {
	      return this.css("display", "none");
	    },
	    toggle: function toggle(setting) {
	      return this.each(function () {
	        var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
	      });
	    },
	    prev: function prev(selector) {
	      return $(this.pluck('previousElementSibling')).filter(selector || '*');
	    },
	    next: function next(selector) {
	      return $(this.pluck('nextElementSibling')).filter(selector || '*');
	    },
	    html: function html(_html) {
	      return 0 in arguments ? this.each(function (idx) {
	        var originHtml = this.innerHTML;
	        $(this).empty().append(funcArg(this, _html, idx, originHtml));
	      }) : 0 in this ? this[0].innerHTML : null;
	    },
	    text: function text(_text) {
	      return 0 in arguments ? this.each(function (idx) {
	        var newText = funcArg(this, _text, idx, this.textContent);
	        this.textContent = newText == null ? '' : '' + newText;
	      }) : 0 in this ? this[0].textContent : null;
	    },
	    attr: function attr(name, value) {
	      var result;
	      return typeof name == 'string' && !(1 in arguments) ? !this.length || this[0].nodeType !== 1 ? undefined : !(result = this[0].getAttribute(name)) && name in this[0] ? this[0][name] : result : this.each(function (idx) {
	        if (this.nodeType !== 1) return;
	        if (isObject(name)) for (key in name) {
	          setAttribute(this, key, name[key]);
	        } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
	      });
	    },
	    removeAttr: function removeAttr(name) {
	      return this.each(function () {
	        this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
	          setAttribute(this, attribute);
	        }, this);
	      });
	    },
	    prop: function prop(name, value) {
	      name = propMap[name] || name;
	      return 1 in arguments ? this.each(function (idx) {
	        this[name] = funcArg(this, value, idx, this[name]);
	      }) : this[0] && this[0][name];
	    },
	    data: function data(name, value) {
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

	      var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

	      return data !== null ? deserializeValue(data) : undefined;
	    },
	    val: function val(value) {
	      return 0 in arguments ? this.each(function (idx) {
	        this.value = funcArg(this, value, idx, this.value);
	      }) : this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
	        return this.selected;
	      }).pluck('value') : this[0].value);
	    },
	    offset: function offset(coordinates) {
	      if (coordinates) return this.each(function (index) {
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	          top: coords.top - parentOffset.top,
	          left: coords.left - parentOffset.left
	        };

	        if ($this.css('position') == 'static') props['position'] = 'relative';
	        $this.css(props);
	      });
	      if (!this.length) return null;
	      var obj = this[0].getBoundingClientRect();
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      };
	    },
	    css: function css(property, value) {
	      if (arguments.length < 2) {
	        var computedStyle,
	            element = this[0];
	        if (!element) return;
	        computedStyle = getComputedStyle(element, '');
	        if (typeof property == 'string') return element.style[camelize(property)] || computedStyle.getPropertyValue(property);else if (isArray(property)) {
	          var props = {};
	          $.each(property, function (_, prop) {
	            props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
	          });
	          return props;
	        }
	      }

	      var css = '';
	      if (type(property) == 'string') {
	        if (!value && value !== 0) this.each(function () {
	          this.style.removeProperty(dasherize(property));
	        });else css = dasherize(property) + ":" + maybeAddPx(property, value);
	      } else {
	        for (key in property) {
	          if (!property[key] && property[key] !== 0) this.each(function () {
	            this.style.removeProperty(dasherize(key));
	          });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
	        }
	      }

	      return this.each(function () {
	        this.style.cssText += ';' + css;
	      });
	    },
	    index: function index(element) {
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
	    },
	    hasClass: function hasClass(name) {
	      if (!name) return false;
	      return emptyArray.some.call(this, function (el) {
	        return this.test(className(el));
	      }, classRE(name));
	    },
	    addClass: function addClass(name) {
	      if (!name) return this;
	      return this.each(function (idx) {
	        if (!('className' in this)) return;
	        classList = [];
	        var cls = className(this),
	            newName = funcArg(this, name, idx, cls);
	        newName.split(/\s+/g).forEach(function (klass) {
	          if (!$(this).hasClass(klass)) classList.push(klass);
	        }, this);
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
	      });
	    },
	    removeClass: function removeClass(name) {
	      return this.each(function (idx) {
	        if (!('className' in this)) return;
	        if (name === undefined) return className(this, '');
	        classList = className(this);
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
	          classList = classList.replace(classRE(klass), " ");
	        });
	        className(this, classList.trim());
	      });
	    },
	    toggleClass: function toggleClass(name, when) {
	      if (!name) return this;
	      return this.each(function (idx) {
	        var $this = $(this),
	            names = funcArg(this, name, idx, className(this));
	        names.split(/\s+/g).forEach(function (klass) {
	          (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
	        });
	      });
	    },
	    scrollTop: function scrollTop(value) {
	      if (!this.length) return;
	      var hasScrollTop = 'scrollTop' in this[0];
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
	      return this.each(hasScrollTop ? function () {
	        this.scrollTop = value;
	      } : function () {
	        this.scrollTo(this.scrollX, value);
	      });
	    },
	    scrollLeft: function scrollLeft(value) {
	      if (!this.length) return;
	      var hasScrollLeft = 'scrollLeft' in this[0];
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
	      return this.each(hasScrollLeft ? function () {
	        this.scrollLeft = value;
	      } : function () {
	        this.scrollTo(value, this.scrollY);
	      });
	    },
	    position: function position() {
	      if (!this.length) return;

	      var elem = this[0],

	      // Get *real* offsetParent
	      offsetParent = this.offsetParent(),

	      // Get correct offsets
	      offset = this.offset(),
	          parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top -= parseFloat($(elem).css('margin-top')) || 0;
	      offset.left -= parseFloat($(elem).css('margin-left')) || 0;

	      // Add offsetParent borders
	      parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
	      parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

	      // Subtract the two offsets
	      return {
	        top: offset.top - parentOffset.top,
	        left: offset.left - parentOffset.left
	      };
	    },
	    offsetParent: function offsetParent() {
	      return this.map(function () {
	        var parent = this.offsetParent || document.body;
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
	          parent = parent.offsetParent;
	        }return parent;
	      });
	    }
	  };

	  // for now
	  $.fn.detach = $.fn.remove

	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function (dimension) {
	    var dimensionProperty = dimension.replace(/./, function (m) {
	      return m[0].toUpperCase();
	    });

	    $.fn[dimension] = function (value) {
	      var offset,
	          el = this[0];
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
	        el = $(this);
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()));
	      });
	    };
	  });

	  function traverseNode(node, fun) {
	    fun(node);
	    for (var i = 0, len = node.childNodes.length; i < len; i++) {
	      traverseNode(node.childNodes[i], fun);
	    }
	  }

	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function (operator, operatorIndex) {
	    var inside = operatorIndex % 2; //=> prepend, append

	    $.fn[operator] = function () {
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType,
	          nodes = $.map(arguments, function (arg) {
	        argType = type(arg);
	        return argType == "object" || argType == "array" || arg == null ? arg : zepto.fragment(arg);
	      }),
	          parent,
	          copyByClone = this.length > 1;
	      if (nodes.length < 1) return this;

	      return this.each(function (_, target) {
	        parent = inside ? target : target.parentNode;

	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

	        var parentInDocument = $.contains(document.documentElement, parent);

	        nodes.forEach(function (node) {
	          if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

	          parent.insertBefore(node, target);
	          if (parentInDocument) traverseNode(node, function (el) {
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) window['eval'].call(window, el.innerHTML);
	          });
	        });
	      });
	    };

	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
	      $(html)[operator](this);
	      return this;
	    };
	  });

	  zepto.Z.prototype = Z.prototype = $.fn;

	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq;
	  zepto.deserializeValue = deserializeValue;
	  $.zepto = zepto;

	  return $;
	}();

	window.Zepto = Zepto;
	window.$ === undefined && (window.$ = Zepto);(function ($) {
	  var _zid = 1,
	      undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function isString(obj) {
	    return typeof obj == 'string';
	  },
	      handlers = {},
	      specialEvents = {},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };

	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

	  function zid(element) {
	    return element._zid || (element._zid = _zid++);
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event);
	    if (event.ns) var matcher = matcherFor(event.ns);
	    return (handlers[zid(element)] || []).filter(function (handler) {
	      return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
	    });
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.');
	    return { e: parts[0], ns: parts.slice(1).sort().join(' ') };
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
	  }

	  function eventCapture(handler, captureSetting) {
	    return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
	  }

	  function realEvent(type) {
	    return hover[type] || focusinSupported && focus[type] || type;
	  }

	  function add(element, events, fn, data, selector, delegator, capture) {
	    var id = zid(element),
	        set = handlers[id] || (handlers[id] = []);
	    events.split(/\s/).forEach(function (event) {
	      if (event == 'ready') return $(document).ready(fn);
	      var handler = parse(event);
	      handler.fn = fn;
	      handler.sel = selector;
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function fn(e) {
	        var related = e.relatedTarget;
	        if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
	      };
	      handler.del = delegator;
	      var callback = delegator || fn;
	      handler.proxy = function (e) {
	        e = compatible(e);
	        if (e.isImmediatePropagationStopped()) return;
	        e.data = data;
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
	        if (result === false) e.preventDefault(), e.stopPropagation();
	        return result;
	      };
	      handler.i = set.length;
	      set.push(handler);
	      if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	    });
	  }
	  function remove(element, events, fn, selector, capture) {
	    var id = zid(element);(events || '').split(/\s/).forEach(function (event) {
	      findHandlers(element, event, fn, selector).forEach(function (handler) {
	        delete handlers[id][handler.i];
	        if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	      });
	    });
	  }

	  $.event = { add: add, remove: remove };

	  $.proxy = function (fn, context) {
	    var args = 2 in arguments && slice.call(arguments, 2);
	    if (isFunction(fn)) {
	      var proxyFn = function proxyFn() {
	        return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
	      };
	      proxyFn._zid = zid(fn);
	      return proxyFn;
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn);
	        return $.proxy.apply(null, args);
	      } else {
	        return $.proxy(fn[context], fn);
	      }
	    } else {
	      throw new TypeError("expected function");
	    }
	  };

	  $.fn.bind = function (event, data, callback) {
	    return this.on(event, data, callback);
	  };
	  $.fn.unbind = function (event, callback) {
	    return this.off(event, callback);
	  };
	  $.fn.one = function (event, selector, data, callback) {
	    return this.on(event, selector, data, callback, 1);
	  };

	  var returnTrue = function returnTrue() {
	    return true;
	  },
	      returnFalse = function returnFalse() {
	    return false;
	  },
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	    preventDefault: 'isDefaultPrevented',
	    stopImmediatePropagation: 'isImmediatePropagationStopped',
	    stopPropagation: 'isPropagationStopped'
	  };

	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event);

	      $.each(eventMethods, function (name, predicate) {
	        var sourceMethod = source[name];
	        event[name] = function () {
	          this[predicate] = returnTrue;
	          return sourceMethod && sourceMethod.apply(source, arguments);
	        };
	        event[predicate] = returnFalse;
	      });

	      if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
	    }
	    return event;
	  }

	  function createProxy(event) {
	    var key,
	        proxy = { originalEvent: event };
	    for (key in event) {
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
	    }return compatible(proxy, event);
	  }

	  $.fn.delegate = function (selector, event, callback) {
	    return this.on(event, selector, callback);
	  };
	  $.fn.undelegate = function (selector, event, callback) {
	    return this.off(event, selector, callback);
	  };

	  $.fn.live = function (event, callback) {
	    $(document.body).delegate(this.selector, event, callback);
	    return this;
	  };
	  $.fn.die = function (event, callback) {
	    $(document.body).undelegate(this.selector, event, callback);
	    return this;
	  };

	  $.fn.on = function (event, selector, data, callback, one) {
	    var autoRemove,
	        delegator,
	        $this = this;
	    if (event && !isString(event)) {
	      $.each(event, function (type, fn) {
	        $this.on(type, selector, data, fn, one);
	      });
	      return $this;
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
	    if (isFunction(data) || data === false) callback = data, data = undefined;

	    if (callback === false) callback = returnFalse;

	    return $this.each(function (_, element) {
	      if (one) autoRemove = function autoRemove(e) {
	        remove(element, e.type, callback);
	        return callback.apply(this, arguments);
	      };

	      if (selector) delegator = function delegator(e) {
	        var evt,
	            match = $(e.target).closest(selector, element).get(0);
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
	        }
	      };

	      add(element, event, callback, data, selector, delegator || autoRemove);
	    });
	  };
	  $.fn.off = function (event, selector, callback) {
	    var $this = this;
	    if (event && !isString(event)) {
	      $.each(event, function (type, fn) {
	        $this.off(type, selector, fn);
	      });
	      return $this;
	    }

	    if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

	    if (callback === false) callback = returnFalse;

	    return $this.each(function () {
	      remove(this, event, callback, selector);
	    });
	  };

	  $.fn.trigger = function (event, args) {
	    event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
	    event._args = args;
	    return this.each(function () {
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]();
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
	    });
	  };

	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function (event, args) {
	    var e, result;
	    this.each(function (i, element) {
	      e = createProxy(isString(event) ? $.Event(event) : event);
	      e._args = args;
	      e.target = element;
	      $.each(findHandlers(element, event.type || event), function (i, handler) {
	        result = handler.proxy(e);
	        if (e.isImmediatePropagationStopped()) return false;
	      });
	    });
	    return result;
	  }

	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
	    $.fn[event] = function (callback) {
	      return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
	    };
	  });

	  $.Event = function (type, props) {
	    if (!isString(type)) props = type, type = props.type;
	    var event = document.createEvent(specialEvents[type] || 'Events'),
	        bubbles = true;
	    if (props) for (var name in props) {
	      name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
	    }event.initEvent(type, bubbles, true);
	    return compatible(event);
	  };
	})(Zepto);(function ($) {
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a');

	  originAnchor.href = window.location.href;

	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName);
	    $(context).trigger(event, data);
	    return !event.isDefaultPrevented();
	  }

	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data);
	  }

	  // Number of active Ajax requests
	  $.active = 0;

	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
	  }
	  function ajaxStop(settings) {
	    if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
	  }

	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context;
	    if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context,
	        status = 'success';
	    settings.success.call(context, data, status, xhr);
	    if (deferred) deferred.resolveWith(context, [data, status, xhr]);
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
	    ajaxComplete(status, xhr, settings);
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context;
	    settings.error.call(context, xhr, type, error);
	    if (deferred) deferred.rejectWith(context, [xhr, type, error]);
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
	    ajaxComplete(type, xhr, settings);
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context;
	    settings.complete.call(context, xhr, status);
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
	    ajaxStop(settings);
	  }

	  // Empty function, used as default callback
	  function empty() {}

	  $.ajaxJSONP = function (options, deferred) {
	    if (!('type' in options)) return $.ajax(options);

	    var _callbackName = options.jsonpCallback,
	        callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'jsonp' + ++jsonpID,
	        script = document.createElement('script'),
	        originalCallback = window[callbackName],
	        responseData,
	        abort = function abort(errorType) {
	      $(script).triggerHandler('error', errorType || 'abort');
	    },
	        xhr = { abort: abort },
	        abortTimeout;

	    if (deferred) deferred.promise(xhr);

	    $(script).on('load error', function (e, errorType) {
	      clearTimeout(abortTimeout);
	      $(script).off().remove();

	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred);
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred);
	      }

	      window[callbackName] = originalCallback;
	      if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

	      originalCallback = responseData = undefined;
	    });

	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort');
	      return xhr;
	    }

	    window[callbackName] = function () {
	      responseData = arguments;
	    };

	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
	    document.head.appendChild(script);

	    if (options.timeout > 0) abortTimeout = setTimeout(function () {
	      abort('timeout');
	    }, options.timeout);

	    return xhr;
	  };

	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function xhr() {
	      return new window.XMLHttpRequest();
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json: jsonType,
	      xml: 'application/xml, text/xml',
	      html: htmlType,
	      text: 'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  };

	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0];
	    return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
	  }

	  function appendQuery(url, query) {
	    if (query == '') return url;
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?');
	  }

	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data), options.data = undefined;
	  }

	  $.ajax = function (options) {
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor;
	    for (key in $.ajaxSettings) {
	      if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
	    }ajaxStart(settings);

	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a');
	      urlAnchor.href = settings.url;
	      urlAnchor.href = urlAnchor.href;
	      settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
	    }

	    if (!settings.url) settings.url = window.location.toString();
	    serializeData(settings);

	    var dataType = settings.dataType,
	        hasPlaceholder = /\?.+=\?/.test(settings.url);
	    if (hasPlaceholder) dataType = 'jsonp';

	    if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
	      return $.ajaxJSONP(settings, deferred);
	    }

	    var mime = settings.accepts[dataType],
	        headers = {},
	        setHeader = function setHeader(name, value) {
	      headers[name.toLowerCase()] = [name, value];
	    },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout;

	    if (deferred) deferred.promise(xhr);

	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
	    setHeader('Accept', mime || '*/*');
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
	      xhr.overrideMimeType && xhr.overrideMimeType(mime);
	    }
	    if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

	    if (settings.headers) for (name in settings.headers) {
	      setHeader(name, settings.headers[name]);
	    }xhr.setRequestHeader = setHeader;

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty;
	        clearTimeout(abortTimeout);
	        var result,
	            error = false;
	        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
	          result = xhr.responseText;

	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
	          } catch (e) {
	            error = e;
	          }

	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred);else ajaxSuccess(result, xhr, settings, deferred);
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
	        }
	      }
	    };

	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort();
	      ajaxError(null, 'abort', xhr, settings, deferred);
	      return xhr;
	    }

	    if (settings.xhrFields) for (name in settings.xhrFields) {
	      xhr[name] = settings.xhrFields[name];
	    }var async = 'async' in settings ? settings.async : true;
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password);

	    for (name in headers) {
	      nativeSetHeader.apply(xhr, headers[name]);
	    }if (settings.timeout > 0) abortTimeout = setTimeout(function () {
	      xhr.onreadystatechange = empty;
	      xhr.abort();
	      ajaxError(null, 'timeout', xhr, settings, deferred);
	    }, settings.timeout);

	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null);
	    return xhr;
	  };

	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined;
	    if (!$.isFunction(success)) dataType = success, success = undefined;
	    return {
	      url: url,
	      data: data,
	      success: success,
	      dataType: dataType
	    };
	  }

	  $.get = function () /* url, data, success, dataType */{
	    return $.ajax(parseArguments.apply(null, arguments));
	  };

	  $.post = function () /* url, data, success, dataType */{
	    var options = parseArguments.apply(null, arguments);
	    options.type = 'POST';
	    return $.ajax(options);
	  };

	  $.getJSON = function () /* url, data, success */{
	    var options = parseArguments.apply(null, arguments);
	    options.dataType = 'json';
	    return $.ajax(options);
	  };

	  $.fn.load = function (url, data, success) {
	    if (!this.length) return this;
	    var self = this,
	        parts = url.split(/\s/),
	        selector,
	        options = parseArguments(url, data, success),
	        callback = options.success;
	    if (parts.length > 1) options.url = parts[0], selector = parts[1];
	    options.success = function (response) {
	      self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
	      callback && callback.apply(self, arguments);
	    };
	    $.ajax(options);
	    return this;
	  };

	  var escape = encodeURIComponent;

	  function serialize(params, obj, traditional, scope) {
	    var type,
	        array = $.isArray(obj),
	        hash = $.isPlainObject(obj);
	    $.each(obj, function (key, value) {
	      type = $.type(value);
	      if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value);
	      // recurse into nested objects
	      else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
	    });
	  }

	  $.param = function (obj, traditional) {
	    var params = [];
	    params.add = function (key, value) {
	      if ($.isFunction(value)) value = value();
	      if (value == null) value = "";
	      this.push(escape(key) + '=' + escape(value));
	    };
	    serialize(params, obj, traditional);
	    return params.join('&').replace(/%20/g, '+');
	  };
	})(Zepto);(function ($) {
	  $.fn.serializeArray = function () {
	    var name,
	        type,
	        result = [],
	        add = function add(value) {
	      if (value.forEach) return value.forEach(add);
	      result.push({ name: name, value: value });
	    };
	    if (this[0]) $.each(this[0].elements, function (_, field) {
	      type = field.type, name = field.name;
	      if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());
	    });
	    return result;
	  };

	  $.fn.serialize = function () {
	    var result = [];
	    this.serializeArray().forEach(function (elm) {
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
	    });
	    return result.join('&');
	  };

	  $.fn.submit = function (callback) {
	    if (0 in arguments) this.bind('submit', callback);else if (this.length) {
	      var event = $.Event('submit');
	      this.eq(0).trigger(event);
	      if (!event.isDefaultPrevented()) this.get(0).submit();
	    }
	    return this;
	  };
	})(Zepto);(function () {
	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined);
	  } catch (e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function (element) {
	      try {
	        return nativeGetComputedStyle(element);
	      } catch (e) {
	        return null;
	      }
	    };
	  }
	})();(function ($, undefined) {
	  var prefix = '',
	      eventPrefix,
	      endEventName,
	      endAnimationName,
	      vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
	      document = window.document,
	      testEl = document.createElement('div'),
	      supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
	      transform,
	      transitionProperty,
	      transitionDuration,
	      transitionTiming,
	      transitionDelay,
	      animationName,
	      animationDuration,
	      animationTiming,
	      animationDelay,
	      cssReset = {};

	  function dasherize(str) {
	    return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
	  }
	  function normalizeEvent(name) {
	    return eventPrefix ? eventPrefix + name : name.toLowerCase();
	  }

	  $.each(vendors, function (vendor, event) {
	    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
	      prefix = '-' + vendor.toLowerCase() + '-';
	      eventPrefix = event;
	      return false;
	    }
	  });

	  transform = prefix + 'transform';
	  cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionDelay = prefix + 'transition-delay'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationDelay = prefix + 'animation-delay'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = '';

	  $.fx = {
	    off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
	    speeds: { _default: 400, fast: 200, slow: 600 },
	    cssPrefix: prefix,
	    transitionEnd: normalizeEvent('TransitionEnd'),
	    animationEnd: normalizeEvent('AnimationEnd')
	  };

	  $.fn.animate = function (properties, duration, ease, callback, delay) {
	    if ($.isFunction(duration)) callback = duration, ease = undefined, duration = undefined;
	    if ($.isFunction(ease)) callback = ease, ease = undefined;
	    if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration;
	    if (duration) duration = (typeof duration == 'number' ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1000;
	    if (delay) delay = parseFloat(delay) / 1000;
	    return this.anim(properties, duration, ease, callback, delay);
	  };

	  $.fn.anim = function (properties, duration, ease, callback, delay) {
	    var key,
	        cssValues = {},
	        cssProperties,
	        transforms = '',
	        that = this,
	        _wrappedCallback,
	        endEvent = $.fx.transitionEnd,
	        fired = false;

	    if (duration === undefined) duration = $.fx.speeds._default / 1000;
	    if (delay === undefined) delay = 0;
	    if ($.fx.off) duration = 0;

	    if (typeof properties == 'string') {
	      // keyframe animation
	      cssValues[animationName] = properties;
	      cssValues[animationDuration] = duration + 's';
	      cssValues[animationDelay] = delay + 's';
	      cssValues[animationTiming] = ease || 'linear';
	      endEvent = $.fx.animationEnd;
	    } else {
	      cssProperties = [];
	      // CSS transitions
	      for (key in properties) {
	        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') ';else cssValues[key] = properties[key], cssProperties.push(dasherize(key));
	      }if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);
	      if (duration > 0 && (typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) === 'object') {
	        cssValues[transitionProperty] = cssProperties.join(', ');
	        cssValues[transitionDuration] = duration + 's';
	        cssValues[transitionDelay] = delay + 's';
	        cssValues[transitionTiming] = ease || 'linear';
	      }
	    }

	    _wrappedCallback = function wrappedCallback(event) {
	      if (typeof event !== 'undefined') {
	        if (event.target !== event.currentTarget) return; // makes sure the event didn't bubble from "below"
	        $(event.target).unbind(endEvent, _wrappedCallback);
	      } else $(this).unbind(endEvent, _wrappedCallback); // triggered by setTimeout

	      fired = true;
	      $(this).css(cssReset);
	      callback && callback.call(this);
	    };
	    if (duration > 0) {
	      this.bind(endEvent, _wrappedCallback);
	      // transitionEnd is not always firing on older Android phones
	      // so make sure it gets fired
	      setTimeout(function () {
	        if (fired) return;
	        _wrappedCallback.call(that);
	      }, (duration + delay) * 1000 + 25);
	    }

	    // trigger page reflow so new elements can animate
	    this.size() && this.get(0).clientLeft;

	    this.css(cssValues);

	    if (duration <= 0) setTimeout(function () {
	      that.each(function () {
	        _wrappedCallback.call(this);
	      });
	    }, 0);

	    return this;
	  };

	  testEl = null;
	})(Zepto);(function ($, undefined) {
	  var document = window.document,
	      docElem = document.documentElement,
	      origShow = $.fn.show,
	      origHide = $.fn.hide,
	      origToggle = $.fn.toggle;

	  function anim(el, speed, opacity, scale, callback) {
	    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined;
	    var props = { opacity: opacity };
	    if (scale) {
	      props.scale = scale;
	      el.css($.fx.cssPrefix + 'transform-origin', '0 0');
	    }
	    return el.animate(props, speed, null, callback);
	  }

	  function hide(el, speed, scale, callback) {
	    return anim(el, speed, 0, scale, function () {
	      origHide.call($(this));
	      callback && callback.call(this);
	    });
	  }

	  $.fn.show = function (speed, callback) {
	    origShow.call(this);
	    if (speed === undefined) speed = 0;else this.css('opacity', 0);
	    return anim(this, speed, 1, '1,1', callback);
	  };

	  $.fn.hide = function (speed, callback) {
	    if (speed === undefined) return origHide.call(this);else return hide(this, speed, '0,0', callback);
	  };

	  $.fn.toggle = function (speed, callback) {
	    if (speed === undefined || typeof speed == 'boolean') return origToggle.call(this, speed);else return this.each(function () {
	      var el = $(this);
	      el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback);
	    });
	  };

	  $.fn.fadeTo = function (speed, opacity, callback) {
	    return anim(this, speed, opacity, null, callback);
	  };

	  $.fn.fadeIn = function (speed, callback) {
	    var target = this.css('opacity');
	    if (target > 0) this.css('opacity', 0);else target = 1;
	    return origShow.call(this).fadeTo(speed, target, callback);
	  };

	  $.fn.fadeOut = function (speed, callback) {
	    return hide(this, speed, null, callback);
	  };

	  $.fn.fadeToggle = function (speed, callback) {
	    return this.each(function () {
	      var el = $(this);
	      el[el.css('opacity') == 0 || el.css('display') == 'none' ? 'fadeIn' : 'fadeOut'](speed, callback);
	    });
	  };
	})(Zepto);(function ($) {
	  var data = {},
	      dataAttr = $.fn.data,
	      camelize = $.camelCase,
	      exp = $.expando = 'Zepto' + +new Date(),
	      emptyArray = [];

	  // Get value from node:
	  // 1. first try key as given,
	  // 2. then try camelized key,
	  // 3. fall back to reading "data-*" attribute.
	  function getData(node, name) {
	    var id = node[exp],
	        store = id && data[id];
	    if (name === undefined) return store || setData(node);else {
	      if (store) {
	        if (name in store) return store[name];
	        var camelName = camelize(name);
	        if (camelName in store) return store[camelName];
	      }
	      return dataAttr.call($(node), name);
	    }
	  }

	  // Store value under camelized key on node
	  function setData(node, name, value) {
	    var id = node[exp] || (node[exp] = ++$.uuid),
	        store = data[id] || (data[id] = attributeData(node));
	    if (name !== undefined) store[camelize(name)] = value;
	    return store;
	  }

	  // Read all "data-*" attributes from a node
	  function attributeData(node) {
	    var store = {};
	    $.each(node.attributes || emptyArray, function (i, attr) {
	      if (attr.name.indexOf('data-') == 0) store[camelize(attr.name.replace('data-', ''))] = $.zepto.deserializeValue(attr.value);
	    });
	    return store;
	  }

	  $.fn.data = function (name, value) {
	    return value === undefined ?
	    // set multiple values via object
	    $.isPlainObject(name) ? this.each(function (i, node) {
	      $.each(name, function (key, value) {
	        setData(node, key, value);
	      });
	    }) :
	    // get value from first element
	    0 in this ? getData(this[0], name) : undefined :
	    // set value on all elements
	    this.each(function () {
	      setData(this, name, value);
	    });
	  };

	  $.fn.removeData = function (names) {
	    if (typeof names == 'string') names = names.split(/\s+/);
	    return this.each(function () {
	      var id = this[exp],
	          store = id && data[id];
	      if (store) $.each(names || store, function (key) {
	        delete store[names ? camelize(this) : key];
	      });
	    });
	  }

	  // Generate extended `remove` and `empty` functions
	  ;['remove', 'empty'].forEach(function (methodName) {
	    var origFn = $.fn[methodName];
	    $.fn[methodName] = function () {
	      var elements = this.find('*');
	      if (methodName === 'remove') elements = elements.add(this);
	      elements.removeData();
	      return origFn.call(this);
	    };
	  });
	})(Zepto);(function ($) {
	  var cache = [],
	      timeout;

	  $.fn.remove = function () {
	    return this.each(function () {
	      if (this.parentNode) {
	        if (this.tagName === 'IMG') {
	          cache.push(this);
	          this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
	          if (timeout) clearTimeout(timeout);
	          timeout = setTimeout(function () {
	            cache = [];
	          }, 60000);
	        }
	        this.parentNode.removeChild(this);
	      }
	    });
	  };
	})(Zepto);(function ($) {
	  var zepto = $.zepto,
	      oldQsa = zepto.qsa,
	      oldMatches = zepto.matches;

	  function _visible(elem) {
	    elem = $(elem);
	    return !!(elem.width() || elem.height()) && elem.css("display") !== "none";
	  }

	  // Implements a subset from:
	  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
	  //
	  // Each filter function receives the current index, all nodes in the
	  // considered set, and a value if there were parentheses. The value
	  // of `this` is the node currently being considered. The function returns the
	  // resulting node(s), null, or undefined.
	  //
	  // Complex selectors are not supported:
	  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
	  //   ul.inner:first > li
	  var filters = $.expr[':'] = {
	    visible: function visible() {
	      if (_visible(this)) return this;
	    },
	    hidden: function hidden() {
	      if (!_visible(this)) return this;
	    },
	    selected: function selected() {
	      if (this.selected) return this;
	    },
	    checked: function checked() {
	      if (this.checked) return this;
	    },
	    parent: function parent() {
	      return this.parentNode;
	    },
	    first: function first(idx) {
	      if (idx === 0) return this;
	    },
	    last: function last(idx, nodes) {
	      if (idx === nodes.length - 1) return this;
	    },
	    eq: function eq(idx, _, value) {
	      if (idx === value) return this;
	    },
	    contains: function contains(idx, _, text) {
	      if ($(this).text().indexOf(text) > -1) return this;
	    },
	    has: function has(idx, _, sel) {
	      if (zepto.qsa(this, sel).length) return this;
	    }
	  };

	  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
	      childRe = /^\s*>/,
	      classTag = 'Zepto' + +new Date();

	  function process(sel, fn) {
	    // quote the hash in `a[href^=#]` expression
	    sel = sel.replace(/=#\]/g, '="#"]');
	    var filter,
	        arg,
	        match = filterRe.exec(sel);
	    if (match && match[2] in filters) {
	      filter = filters[match[2]], arg = match[3];
	      sel = match[1];
	      if (arg) {
	        var num = Number(arg);
	        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '');else arg = num;
	      }
	    }
	    return fn(sel, filter, arg);
	  }

	  zepto.qsa = function (node, selector) {
	    return process(selector, function (sel, filter, arg) {
	      try {
	        var taggedParent;
	        if (!sel && filter) sel = '*';else if (childRe.test(sel))
	          // support "> *" child queries by tagging the parent node with a
	          // unique class and prepending that classname onto the selector
	          taggedParent = $(node).addClass(classTag), sel = '.' + classTag + ' ' + sel;

	        var nodes = oldQsa(node, sel);
	      } catch (e) {
	        console.error('error performing selector: %o', selector);
	        throw e;
	      } finally {
	        if (taggedParent) taggedParent.removeClass(classTag);
	      }
	      return !filter ? nodes : zepto.uniq($.map(nodes, function (n, i) {
	        return filter.call(n, i, nodes, arg);
	      }));
	    });
	  };

	  zepto.matches = function (node, selector) {
	    return process(selector, function (sel, filter, arg) {
	      return (!sel || oldMatches(node, sel)) && (!filter || filter.call(node, null, arg) === node);
	    });
	  };
	})(Zepto);(function ($) {
	  var touch = {},
	      touchTimeout,
	      tapTimeout,
	      swipeTimeout,
	      longTapTimeout,
	      longTapDelay = 750,
	      gesture;

	  function swipeDirection(x1, x2, y1, y2) {
	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
	  }

	  function longTap() {
	    longTapTimeout = null;
	    if (touch.last) {
	      touch.el.trigger('longTap');
	      touch = {};
	    }
	  }

	  function cancelLongTap() {
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    longTapTimeout = null;
	  }

	  function cancelAll() {
	    if (touchTimeout) clearTimeout(touchTimeout);
	    if (tapTimeout) clearTimeout(tapTimeout);
	    if (swipeTimeout) clearTimeout(swipeTimeout);
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
	    touch = {};
	  }

	  function isPrimaryTouch(event) {
	    return (event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
	  }

	  function isPointerEventType(e, type) {
	    return e.type == 'pointer' + type || e.type.toLowerCase() == 'mspointer' + type;
	  }

	  $(document).ready(function () {
	    var now,
	        delta,
	        deltaX = 0,
	        deltaY = 0,
	        firstTouch,
	        _isPointerType;

	    if ('MSGesture' in window) {
	      gesture = new MSGesture();
	      gesture.target = document.body;
	    }

	    $(document).bind('MSGestureEnd', function (e) {
	      var swipeDirectionFromVelocity = e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
	      if (swipeDirectionFromVelocity) {
	        touch.el.trigger('swipe');
	        touch.el.trigger('swipe' + swipeDirectionFromVelocity);
	      }
	    }).on('touchstart MSPointerDown pointerdown', function (e) {
	      if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e)) return;
	      firstTouch = _isPointerType ? e : e.touches[0];
	      if (e.touches && e.touches.length === 1 && touch.x2) {
	        // Clear out touch movement data if we have it sticking around
	        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	        touch.x2 = undefined;
	        touch.y2 = undefined;
	      }
	      now = Date.now();
	      delta = now - (touch.last || now);
	      touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
	      touchTimeout && clearTimeout(touchTimeout);
	      touch.x1 = firstTouch.pageX;
	      touch.y1 = firstTouch.pageY;
	      if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
	      touch.last = now;
	      longTapTimeout = setTimeout(longTap, longTapDelay);
	      // adds the current touch contact for IE gesture recognition
	      if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
	    }).on('touchmove MSPointerMove pointermove', function (e) {
	      if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e)) return;
	      firstTouch = _isPointerType ? e : e.touches[0];
	      cancelLongTap();
	      touch.x2 = firstTouch.pageX;
	      touch.y2 = firstTouch.pageY;

	      deltaX += Math.abs(touch.x1 - touch.x2);
	      deltaY += Math.abs(touch.y1 - touch.y2);
	    }).on('touchend MSPointerUp pointerup', function (e) {
	      if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e)) return;
	      cancelLongTap();

	      // swipe
	      if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) swipeTimeout = setTimeout(function () {
	        touch.el.trigger('swipe');
	        touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
	        touch = {};
	      }, 0);

	      // normal tap
	      else if ('last' in touch)
	          // don't fire tap when delta position changed by more than 30 pixels,
	          // for instance when moving to a point and back to origin
	          if (deltaX < 30 && deltaY < 30) {
	            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	            // ('tap' fires before 'scroll')
	            tapTimeout = setTimeout(function () {

	              // trigger universal 'tap' with the option to cancelTouch()
	              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	              var event = $.Event('tap');
	              event.cancelTouch = cancelAll;
	              touch.el.trigger(event);

	              // trigger double tap immediately
	              if (touch.isDoubleTap) {
	                if (touch.el) touch.el.trigger('doubleTap');
	                touch = {};
	              }

	              // trigger single tap after 250ms of inactivity
	              else {
	                  touchTimeout = setTimeout(function () {
	                    touchTimeout = null;
	                    if (touch.el) touch.el.trigger('singleTap');
	                    touch = {};
	                  }, 250);
	                }
	            }, 0);
	          } else {
	            touch = {};
	          }
	      deltaX = deltaY = 0;
	    })
	    // when the browser window loses focus,
	    // for example when a modal dialog is shown,
	    // cancel all ongoing events
	    .on('touchcancel MSPointerCancel pointercancel', cancelAll);

	    // scrolling the window indicates intention of the user
	    // to scroll, not tap or swipe, so cancel all ongoing events
	    $(window).on('scroll', cancelAll);
	  });['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
	    $.fn[eventName] = function (callback) {
	      return this.on(eventName, callback);
	    };
	  });
	})(Zepto);(function ($) {
	  var slice = Array.prototype.slice;

	  function Deferred(func) {
	    var tuples = [
	    // action, add listener, listener list, final state
	    ["resolve", "done", $.Callbacks({ once: 1, memory: 1 }), "resolved"], ["reject", "fail", $.Callbacks({ once: 1, memory: 1 }), "rejected"], ["notify", "progress", $.Callbacks({ memory: 1 })]],
	        _state = "pending",
	        _promise = {
	      state: function state() {
	        return _state;
	      },
	      always: function always() {
	        deferred.done(arguments).fail(arguments);
	        return this;
	      },
	      then: function then() /* fnDone [, fnFailed [, fnProgress]] */{
	        var fns = arguments;
	        return Deferred(function (defer) {
	          $.each(tuples, function (i, tuple) {
	            var fn = $.isFunction(fns[i]) && fns[i];
	            deferred[tuple[1]](function () {
	              var returned = fn && fn.apply(this, arguments);
	              if (returned && $.isFunction(returned.promise)) {
	                returned.promise().done(defer.resolve).fail(defer.reject).progress(defer.notify);
	              } else {
	                var context = this === _promise ? defer.promise() : this,
	                    values = fn ? [returned] : arguments;
	                defer[tuple[0] + "With"](context, values);
	              }
	            });
	          });
	          fns = null;
	        }).promise();
	      },

	      promise: function promise(obj) {
	        return obj != null ? $.extend(obj, _promise) : _promise;
	      }
	    },
	        deferred = {};

	    $.each(tuples, function (i, tuple) {
	      var list = tuple[2],
	          stateString = tuple[3];

	      _promise[tuple[1]] = list.add;

	      if (stateString) {
	        list.add(function () {
	          _state = stateString;
	        }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
	      }

	      deferred[tuple[0]] = function () {
	        deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
	        return this;
	      };
	      deferred[tuple[0] + "With"] = list.fireWith;
	    });

	    _promise.promise(deferred);
	    if (func) func.call(deferred, deferred);
	    return deferred;
	  }

	  $.when = function (sub) {
	    var resolveValues = slice.call(arguments),
	        len = resolveValues.length,
	        i = 0,
	        remain = len !== 1 || sub && $.isFunction(sub.promise) ? len : 0,
	        deferred = remain === 1 ? sub : Deferred(),
	        progressValues,
	        progressContexts,
	        resolveContexts,
	        updateFn = function updateFn(i, ctx, val) {
	      return function (value) {
	        ctx[i] = this;
	        val[i] = arguments.length > 1 ? slice.call(arguments) : value;
	        if (val === progressValues) {
	          deferred.notifyWith(ctx, val);
	        } else if (! --remain) {
	          deferred.resolveWith(ctx, val);
	        }
	      };
	    };

	    if (len > 1) {
	      progressValues = new Array(len);
	      progressContexts = new Array(len);
	      resolveContexts = new Array(len);
	      for (; i < len; ++i) {
	        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
	          resolveValues[i].promise().done(updateFn(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFn(i, progressContexts, progressValues));
	        } else {
	          --remain;
	        }
	      }
	    }
	    if (!remain) deferred.resolveWith(resolveContexts, resolveValues);
	    return deferred.promise();
	  };

	  $.Deferred = Deferred;
	})(Zepto);(function ($) {
	  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
	  // Option flags:
	  //   - once: Callbacks fired at most one time.
	  //   - memory: Remember the most recent context and arguments
	  //   - stopOnFalse: Cease iterating over callback list
	  //   - unique: Permit adding at most one instance of the same callback
	  $.Callbacks = function (options) {
	    options = $.extend({}, options);

	    var memory,
	        // Last fire value (for non-forgettable lists)
	    _fired,
	        // Flag to know if list was already fired
	    firing,
	        // Flag to know if list is currently firing
	    firingStart,
	        // First callback to fire (used internally by add and fireWith)
	    firingLength,
	        // End of the loop when firing
	    firingIndex,
	        // Index of currently firing callback (modified by remove if needed)
	    list = [],
	        // Actual callback list
	    stack = !options.once && [],
	        // Stack of fire calls for repeatable lists
	    fire = function fire(data) {
	      memory = options.memory && data;
	      _fired = true;
	      firingIndex = firingStart || 0;
	      firingStart = 0;
	      firingLength = list.length;
	      firing = true;
	      for (; list && firingIndex < firingLength; ++firingIndex) {
	        if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
	          memory = false;
	          break;
	        }
	      }
	      firing = false;
	      if (list) {
	        if (stack) stack.length && fire(stack.shift());else if (memory) list.length = 0;else Callbacks.disable();
	      }
	    },
	        Callbacks = {
	      add: function add() {
	        if (list) {
	          var start = list.length,
	              add = function add(args) {
	            $.each(args, function (_, arg) {
	              if (typeof arg === "function") {
	                if (!options.unique || !Callbacks.has(arg)) list.push(arg);
	              } else if (arg && arg.length && typeof arg !== 'string') add(arg);
	            });
	          };
	          add(arguments);
	          if (firing) firingLength = list.length;else if (memory) {
	            firingStart = start;
	            fire(memory);
	          }
	        }
	        return this;
	      },
	      remove: function remove() {
	        if (list) {
	          $.each(arguments, function (_, arg) {
	            var index;
	            while ((index = $.inArray(arg, list, index)) > -1) {
	              list.splice(index, 1);
	              // Handle firing indexes
	              if (firing) {
	                if (index <= firingLength) --firingLength;
	                if (index <= firingIndex) --firingIndex;
	              }
	            }
	          });
	        }
	        return this;
	      },
	      has: function has(fn) {
	        return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length));
	      },
	      empty: function empty() {
	        firingLength = list.length = 0;
	        return this;
	      },
	      disable: function disable() {
	        list = stack = memory = undefined;
	        return this;
	      },
	      disabled: function disabled() {
	        return !list;
	      },
	      lock: function lock() {
	        stack = undefined;
	        if (!memory) Callbacks.disable();
	        return this;
	      },
	      locked: function locked() {
	        return !stack;
	      },
	      fireWith: function fireWith(context, args) {
	        if (list && (!_fired || stack)) {
	          args = args || [];
	          args = [context, args.slice ? args.slice() : args];
	          if (firing) stack.push(args);else fire(args);
	        }
	        return this;
	      },
	      fire: function fire() {
	        return Callbacks.fireWith(this, arguments);
	      },
	      fired: function fired() {
	        return !!_fired;
	      }
	    };

	    return Callbacks;
	  };
	})(Zepto);

	window.Zepto = Zepto;
	'$' in window || (window.$ = Zepto);

	if (true) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return Zepto;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*
	 * Swiper 2.7.6
	 * Mobile touch slider and framework with hardware accelerated transitions
	 *
	 * http://www.idangero.us/sliders/swiper/
	 *
	 * Copyright 2010-2015, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 *
	 * Licensed under GPL & MIT
	 *
	 * Released on: February 11, 2015
	*/
	var Swiper = function Swiper(a, b) {
	  "use strict";
	  function c(a, b) {
	    return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b);
	  }function d(a) {
	    return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1;
	  }function e() {
	    var a = G - J;return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a;
	  }function f() {
	    function a(a) {
	      var c,
	          d,
	          e = function e() {
	        "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)));
	      };a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image(), c.onload = e, c.onerror = e, c.src = d) : e());
	    }var d = D.h.addEventListener,
	        e = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
	      if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent) try {
	        new WheelEvent("wheel"), D._wheelEvent = "wheel";
	      } catch (f) {}D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j);
	    }if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
	      D.imagesToLoad = c("img", D.container);for (var h = 0; h < D.imagesToLoad.length; h++) {
	        a(D.imagesToLoad[h]);
	      }
	    }
	  }function g() {
	    var a,
	        d = D.h.addEventListener;if (b.preventLinks) {
	      var e = c("a", D.container);for (a = 0; a < e.length; a++) {
	        d(e[a], "click", n);
	      }
	    }if (b.releaseFormElements) {
	      var f = c("input, textarea, select", D.container);for (a = 0; a < f.length; a++) {
	        d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0);
	      }
	    }if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], "click", k);
	    }if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], D.touchEvents.touchStart, l);
	    }
	  }function h() {
	    var a,
	        d = D.h.removeEventListener;if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], "click", k);
	    }if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], D.touchEvents.touchStart, l);
	    }if (b.releaseFormElements) {
	      var e = c("input, textarea, select", D.container);for (a = 0; a < e.length; a++) {
	        d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0);
	      }
	    }if (b.preventLinks) {
	      var f = c("a", D.container);for (a = 0; a < f.length; a++) {
	        d(f[a], "click", n);
	      }
	    }
	  }function i(a) {
	    var b = a.keyCode || a.charCode;if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
	      if (37 === b || 39 === b || 38 === b || 40 === b) {
	        for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
	          var k = i[j];k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0);
	        }if (!c) return;
	      }N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev());
	    }
	  }function j(a) {
	    var c = D._wheelEvent,
	        d = 0;if (a.detail) d = -a.detail;else if ("mousewheel" === c) {
	      if (b.mousewheelControlForceToAxis) {
	        if (N) {
	          if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;d = a.wheelDeltaX;
	        } else {
	          if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;d = a.wheelDeltaY;
	        }
	      } else d = a.wheelDelta;
	    } else if ("DOMMouseScroll" === c) d = -a.detail;else if ("wheel" === c) if (b.mousewheelControlForceToAxis) {
	      if (N) {
	        if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;d = -a.deltaX;
	      } else {
	        if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;d = -a.deltaY;
	      }
	    } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;if (b.freeMode) {
	      var f = D.getWrapperTranslate() + d;if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e()) return;
	    } else new Date().getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = new Date().getTime();return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
	  }function k(a) {
	    D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a));
	  }function l(a) {
	    m(a), D.fireCallback(b.onSlideTouch, D, a);
	  }function m(a) {
	    if (a.currentTarget) D.clickedSlide = a.currentTarget;else {
	      var c = a.srcElement;do {
	        if (c.className.indexOf(b.slideClass) > -1) break;c = c.parentNode;
	      } while (c);D.clickedSlide = c;
	    }D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0);
	  }function n(a) {
	    return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1);
	  }function o(a) {
	    return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1;
	  }function p(a) {
	    if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal) return !1;var c = a.target || a.srcElement;document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();var d = "input select textarea".split(" ");if (b.noSwiping && c && t(c)) return !1;if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which) return D.isTouched = !1, !1;if (!$ || 1 === a.targetTouches.length) {
	      D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
	          f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = new Date().getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd");
	    }
	  }function q(a) {
	    if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
	      var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
	          d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I) return void (D.isTouched = !1);if (N) {
	        if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX) return;
	      } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY) return;if (a.assignedToSwiper) return void (D.isTouched = !1);if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
	        if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
	          var f;if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
	            var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);f = (J + g) / J;var h = D.positions.current - g * (1 - f) / 2,
	                i = -e() - J / 2;D.positions.current = i > h || 0 >= f ? i : h;
	          }
	        }if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger) return;if (b.moveStartThreshold) {
	          if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
	            if (!X) return X = !0, void (D.touches.start = D.touches.current);D.setWrapperTranslate(D.positions.current);
	          } else D.positions.current = D.positions.start;
	        } else D.setWrapperTranslate(D.positions.current);return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = new Date().getTime()), D.velocity = (D.touches.current - Y) / (new Date().getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = new Date().getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1;
	      }
	    }
	  }function r(a) {
	    if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
	      D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = new Date().getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);var c = D.positions.diff,
	          d = D.positions.abs,
	          f = D.times.end - D.times.start;5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function () {
	        "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0));
	      }, 100);var g = e();if (!D.isMoved && b.freeMode) return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g) return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (D.isMoved = !1, b.freeMode) {
	        if (b.freeModeFluid) {
	          var h,
	              i = 1e3 * b.momentumRatio,
	              j = D.velocity * i,
	              k = D.positions.current + j,
	              l = !1,
	              m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;-g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function () {
	            _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300));
	          }), D.updateActiveSlide(k);
	        }return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
	      }H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));var n = 0;if ("auto" === b.slidesPerView) {
	        for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++) {
	          if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
	            n = o;break;
	          }
	        }n > J && (n = J);
	      } else n = F * b.slidesPerView;"toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd");
	    }
	  }function s(a, b) {
	    return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1;
	  }function t(a) {
	    var c = !1;do {
	      s(a, b.noSwipingClass) && (c = !0), a = a.parentElement;
	    } while (!c && a.parentElement && !s(a, b.wrapperClass));return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c;
	  }function u(a, b) {
	    var c,
	        d = document.createElement("div");return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML;
	  }function v(a, c, d) {
	    function e() {
	      var f = +new Date(),
	          l = f - g;h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function () {
	        e();
	      }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1);
	    }var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
	        g = +new Date();if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f);else {
	      var h = D.getWrapperTranslate(),
	          i = Math.ceil((a - h) / f * (1e3 / 60)),
	          j = h > a ? "toNext" : "toPrev",
	          k = "toNext" === j ? h > a : a > h;if (D._DOMAnimating) return;e();
	    }D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c);
	  }function w(a) {
	    if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart) if (b.queueStartCallbacks && D.support.transitions) {
	      if (D._queueStartCallbacks) return;D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function () {
	        D._queueStartCallbacks = !1;
	      });
	    } else D.fireCallback(b.onSlideChangeStart, D, a);if (b.onSlideChangeEnd) if (D.support.transitions) {
	      if (b.queueEndCallbacks) {
	        if (D._queueEndCallbacks) return;D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function (c) {
	          D.fireCallback(b.onSlideChangeEnd, c, a);
	        });
	      } else D.wrapperTransitionEnd(function (c) {
	        D.fireCallback(b.onSlideChangeEnd, c, a);
	      });
	    } else b.DOMAnimation || setTimeout(function () {
	      D.fireCallback(b.onSlideChangeEnd, D, a);
	    }, 10);
	  }function x() {
	    var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
	      D.h.removeEventListener(a[b], "click", z);
	    }
	  }function y() {
	    var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
	      D.h.addEventListener(a[b], "click", z);
	    }
	  }function z(a) {
	    for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++) {
	      d === e[f] && (c = f);
	    }b.autoplay && D.stopAutoplay(!0), D.swipeTo(c);
	  }function A() {
	    ab = setTimeout(function () {
	      b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function () {
	        "undefined" != typeof ab && A();
	      });
	    }, b.autoplay);
	  }function B() {
	    D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated");
	  }if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
	    var C = HTMLElement.prototype;C.__defineGetter__ && C.__defineGetter__("outerHTML", function () {
	      return new XMLSerializer().serializeToString(this);
	    });
	  }if (window.getComputedStyle || (window.getComputedStyle = function (a) {
	    return this.el = a, this.getPropertyValue = function (b) {
	      var c = /(\-([a-z]){1})/g;return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
	        return arguments[2].toUpperCase();
	      })), a.currentStyle[b] ? a.currentStyle[b] : null;
	    }, this;
	  }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
	    for (var c = b || 0, d = this.length; d > c; c++) {
	      if (this[c] === a) return c;
	    }return -1;
	  }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
	    var D = this;D.touches = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0 }, D.positions = { start: 0, abs: 0, diff: 0, current: 0 }, D.times = { start: 0, end: 0 }, D.id = new Date().getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;var E,
	        F,
	        G,
	        H,
	        I,
	        J,
	        K = { eventTarget: "wrapper", mode: "horizontal", touchRatio: 1, speed: 300, freeMode: !1, freeModeFluid: !1, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, slidesPerView: 1, slidesPerGroup: 1, slidesPerViewFit: !0, simulateTouch: !0, followFinger: !0, shortSwipes: !0, longSwipesRatio: .5, moveStartThreshold: !1, onlyExternal: !1, createPagination: !0, pagination: !1, paginationElement: "span", paginationClickable: !1, paginationAsRange: !0, resistance: !0, scrollContainer: !1, preventLinks: !0, preventLinksPropagation: !1, noSwiping: !1, noSwipingClass: "swiper-no-swiping", initialSlide: 0, keyboardControl: !1, mousewheelControl: !1, mousewheelControlForceToAxis: !1, useCSS3Transforms: !0, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, loop: !1, loopAdditionalSlides: 0, roundLengths: !1, calculateHeight: !1, cssWidthAndHeight: !1, updateOnImagesReady: !0, releaseFormElements: !0, watchActiveIndex: !1, visibilityFullFit: !1, offsetPxBefore: 0, offsetPxAfter: 0, offsetSlidesBefore: 0, offsetSlidesAfter: 0, centeredSlides: !1, queueStartCallbacks: !1, queueEndCallbacks: !1, autoResize: !0, resizeReInit: !1, DOMAnimation: !0, loader: { slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1 }, swipeToPrev: !0, swipeToNext: !0, slideElement: "div", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", wrapperClass: "swiper-wrapper", paginationElementClass: "swiper-pagination-switch", paginationActiveClass: "swiper-active-switch", paginationVisibleClass: "swiper-visible-switch" };b = b || {};for (var L in K) {
	      if (L in b && "object" == _typeof(b[L])) for (var M in K[L]) {
	        M in b[L] || (b[L][M] = K[L][M]);
	      } else L in b || (b[L] = K[L]);
	    }D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");var N = "horizontal" === b.mode,
	        O = ["mousedown", "mousemove", "mouseup"];D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = { touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0], touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1], touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2] };for (var P = D.container.childNodes.length - 1; P >= 0; P--) {
	      if (D.container.childNodes[P].className) for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) {
	        Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
	      }
	    }D.wrapper = E, D._extendSwiperSlide = function (a) {
	      return a.append = function () {
	        return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a;
	      }, a.prepend = function () {
	        return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a;
	      }, a.insertAfter = function (c) {
	        if ("undefined" == typeof c) return !1;var d;return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a;
	      }, a.clone = function () {
	        return D._extendSwiperSlide(a.cloneNode(!0));
	      }, a.remove = function () {
	        D.wrapper.removeChild(a), D.reInit();
	      }, a.html = function (b) {
	        return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a);
	      }, a.index = function () {
	        for (var b, c = D.slides.length - 1; c >= 0; c--) {
	          a === D.slides[c] && (b = c);
	        }return b;
	      }, a.isActive = function () {
	        return a.index() === D.activeIndex ? !0 : !1;
	      }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
	        return a.swiperSlideDataStorage[b];
	      }, a.setData = function (b, c) {
	        return a.swiperSlideDataStorage[b] = c, a;
	      }, a.data = function (b, c) {
	        return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a);
	      }, a.getWidth = function (b, c) {
	        return D.h.getWidth(a, b, c);
	      }, a.getHeight = function (b, c) {
	        return D.h.getHeight(a, b, c);
	      }, a.getOffset = function () {
	        return D.h.getOffset(a);
	      }, a;
	    }, D.calcSlides = function (a) {
	      var c = D.slides ? D.slides.length : !1;D.slides = [], D.displaySlides = [];for (var d = 0; d < D.wrapper.childNodes.length; d++) {
	        if (D.wrapper.childNodes[d].className) for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) {
	          f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
	        }
	      }for (d = D.slides.length - 1; d >= 0; d--) {
	        D._extendSwiperSlide(D.slides[d]);
	      }c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"));
	    }, D.createSlide = function (a, c, d) {
	      c = c || D.params.slideClass, d = d || b.slideElement;var e = document.createElement(d);return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e);
	    }, D.appendSlide = function (a, b, c) {
	      return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0;
	    }, D.prependSlide = function (a, b, c) {
	      return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0;
	    }, D.insertSlideAfter = function (a, b, c, d) {
	      return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a);
	    }, D.removeSlide = function (a) {
	      if (D.slides[a]) {
	        if (b.loop) {
	          if (!D.slides[a + D.loopedSlides]) return !1;D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop();
	        } else D.slides[a].remove();return !0;
	      }return !1;
	    }, D.removeLastSlide = function () {
	      return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1;
	    }, D.removeAllSlides = function () {
	      for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--) {
	        D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0);
	      }
	    }, D.getSlide = function (a) {
	      return D.slides[a];
	    }, D.getLastSlide = function () {
	      return D.slides[D.slides.length - 1];
	    }, D.getFirstSlide = function () {
	      return D.slides[0];
	    }, D.activeSlide = function () {
	      return D.slides[D.activeIndex];
	    }, D.fireCallback = function () {
	      var a = arguments[0];if ("[object Array]" === Object.prototype.toString.call(a)) for (var c = 0; c < a.length; c++) {
	        "function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	      } else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	    }, D.addCallback = function (a, b) {
	      var c,
	          e = this;return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b));
	    }, D.removeCallbacks = function (a) {
	      D.params["on" + a] && (D.params["on" + a] = null);
	    };var S = [];for (var T in D.plugins) {
	      if (b[T]) {
	        var U = D.plugins[T](D, b[T]);U && S.push(U);
	      }
	    }D.callPlugins = function (a, b) {
	      b || (b = {});for (var c = 0; c < S.length; c++) {
	        a in S[c] && S[c][a](b);
	      }
	    }, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function (a, c) {
	      var d = D.h.getWidth(D.container, !1, b.roundLengths),
	          e = D.h.getHeight(D.container, !1, b.roundLengths);if (d !== D.width || e !== D.height || a) {
	        D.width = d, D.height = e;var f, g, h, i, j, k, l;J = N ? d : e;var m = D.wrapper;if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
	          var n = 0,
	              o = 0;b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;var p = 0;for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
	            f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));var q = N ? f : g;if (b.centeredSlides) {
	              var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths),
	                  s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths),
	                  t = N ? r : s;if (q > J) {
	                if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);else for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++) {
	                  D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
	                }D.slidesGrid.push(k + D.wrapperLeft);
	              } else D.snapGrid.push(p), D.slidesGrid.push(p);p += q / 2 + t / 2;
	            } else {
	              if (q > J) {
	                if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J);else if (0 !== J) for (var v = 0; v <= Math.floor(q / J); v++) {
	                  D.snapGrid.push(k + J * v);
	                } else D.snapGrid.push(k);
	              } else D.snapGrid.push(k);D.slidesGrid.push(k);
	            }k += q, n += f, o += g;
	          }b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom);
	        } else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;else {
	          if (b.calculateHeight) {
	            for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++) {
	              D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
	            }g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px");
	          } else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++) {
	            D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px");
	          }
	        }D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0;
	      }
	    }, D.reInit = function (a) {
	      D.init(!0, a);
	    }, D.resizeFix = function (a) {
	      D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix");
	    }, D.destroy = function (a) {
	      var c = D.h.removeEventListener,
	          d = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
	        D.wrapper.removeAttribute("style");for (var e = 0; e < D.slides.length; e++) {
	          D.slides[e].removeAttribute("style");
	        }
	      }D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null;
	    }, D.disableKeyboardControl = function () {
	      b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i);
	    }, D.enableKeyboardControl = function () {
	      b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i);
	    };var V = new Date().getTime();if (D.disableMousewheelControl = function () {
	      return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1;
	    }, D.enableMousewheelControl = function () {
	      return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1;
	    }, b.grabCursor) {
	      var W = D.container.style;W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab";
	    }D.allowSlideClick = !0, D.allowLinks = !0;var X,
	        Y,
	        Z,
	        $ = !1,
	        _ = !0;D.swipeNext = function (a, c) {
	      "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");var d = D.getWrapperTranslate().toFixed(2),
	          f = d;if ("auto" === b.slidesPerView) {
	        for (var g = 0; g < D.snapGrid.length; g++) {
	          if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
	            f = -D.snapGrid[g + 1];break;
	          }
	        }
	      } else {
	        var h = F * b.slidesPerGroup;f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h);
	      }return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", { runCallbacks: a }), !0);
	    }, D.swipePrev = function (a, c) {
	      "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");var d,
	          e = Math.ceil(D.getWrapperTranslate());if ("auto" === b.slidesPerView) {
	        d = 0;for (var f = 1; f < D.snapGrid.length; f++) {
	          if (-e === D.snapGrid[f]) {
	            d = -D.snapGrid[f - 1];break;
	          }if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
	            d = -D.snapGrid[f];break;
	          }
	        }
	      } else {
	        var g = F * b.slidesPerGroup;d = -(Math.ceil(-e / g) - 1) * g;
	      }return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", { runCallbacks: a }), !0);
	    }, D.swipeReset = function (a) {
	      "undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset");{
	        var c,
	            d = D.getWrapperTranslate(),
	            f = F * b.slidesPerGroup;-e();
	      }if ("auto" === b.slidesPerView) {
	        c = 0;for (var g = 0; g < D.snapGrid.length; g++) {
	          if (-d === D.snapGrid[g]) return;if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
	            c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];break;
	          }
	        }-d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e());
	      } else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", { runCallbacks: a }), !0);
	    }, D.swipeTo = function (a, c, d) {
	      a = parseInt(a, 10), D.callPlugins("onSwipeTo", { index: a, speed: c }), b.loop && (a += D.loopedSlides);var f = D.getWrapperTranslate();if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
	        var g;return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", { index: a, speed: c, runCallbacks: d }), !0);
	      }
	    }, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function (a) {
	      if (D.initialized && 0 !== D.slides.length) {
	        D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);var c;if ("auto" === b.slidesPerView) {
	          if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
	            for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++) {}var d = Math.abs(D.slidesGrid[c] + a),
	                e = Math.abs(D.slidesGrid[c + 1] + a);
	            D.activeIndex = e >= d ? c : c + 1;
	          }
	        } else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
	          if (D.calcVisibleSlides(a), D.support.classList) {
	            var f;for (c = 0; c < D.slides.length; c++) {
	              f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
	            }D.slides[D.activeIndex].classList.add(b.slideActiveClass);
	          } else {
	            var g = new RegExp("\\s*" + b.slideActiveClass),
	                h = new RegExp("\\s*" + b.slideVisibleClass);for (c = 0; c < D.slides.length; c++) {
	              D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
	            }D.slides[D.activeIndex].className += " " + b.slideActiveClass;
	          }if (b.loop) {
	            var i = D.loopedSlides;D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0);
	          } else D.activeLoopIndex = D.activeIndex;b.pagination && D.updatePagination(a);
	        }
	      }
	    }, D.createPagination = function (a) {
	      if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
	        var d = "",
	            e = D.slides.length,
	            f = e;b.loop && (f -= 2 * D.loopedSlides);for (var g = 0; f > g; g++) {
	          d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
	        }D.paginationContainer.innerHTML = d;
	      }D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y();
	    }, D.updatePagination = function (a) {
	      if (b.pagination && !(D.slides.length < 1)) {
	        var d = c("." + b.paginationActiveClass, D.paginationContainer);if (d) {
	          var e = D.paginationButtons;if (0 !== e.length) {
	            for (var f = 0; f < e.length; f++) {
	              e[f].className = b.paginationElementClass;
	            }var g = b.loop ? D.loopedSlides : 0;if (b.paginationAsRange) {
	              D.visibleSlides || D.calcVisibleSlides(a);var h,
	                  i = [];for (h = 0; h < D.visibleSlides.length; h++) {
	                var j = D.slides.indexOf(D.visibleSlides[h]) - g;b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j);
	              }for (h = 0; h < i.length; h++) {
	                e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
	              }b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass);
	            } else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass);
	          }
	        }
	      }
	    }, D.calcVisibleSlides = function (a) {
	      var c = [],
	          d = 0,
	          e = 0,
	          f = 0;N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);for (var g = 0; g < D.slides.length; g++) {
	        d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;var h = !1;b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g]);
	      }0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c;
	    };var ab, bb;D.startAutoplay = function () {
	      if (D.support.transitions) {
	        if ("undefined" != typeof ab) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A();
	      } else {
	        if ("undefined" != typeof bb) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function () {
	          b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0));
	        }, b.autoplay);
	      }
	    }, D.stopAutoplay = function (a) {
	      if (D.support.transitions) {
	        if (!ab) return;ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function () {
	          A();
	        }), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
	      } else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
	    }, D.loopCreated = !1, D.removeLoopedSlides = function () {
	      if (D.loopCreated) for (var a = 0; a < D.slides.length; a++) {
	        D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a]);
	      }
	    }, D.createLoop = function () {
	      if (0 !== D.slides.length) {
	        D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);var a,
	            c = "",
	            d = "",
	            e = "",
	            f = D.slides.length,
	            g = Math.floor(D.loopedSlides / f),
	            h = D.loopedSlides % f;for (a = 0; g * f > a; a++) {
	          var i = a;if (a >= f) {
	            var j = Math.floor(a / f);i = a - f * j;
	          }e += D.slides[i].outerHTML;
	        }for (a = 0; h > a; a++) {
	          d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
	        }for (a = f - h; f > a; a++) {
	          c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
	        }var k = c + e + E.innerHTML + e + d;for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++) {
	          (a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
	        }D.callPlugins("onCreateLoop");
	      }
	    }, D.fixLoop = function () {
	      var a;D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1));
	    }, D.loadSlides = function () {
	      var a = "";D.activeLoaderIndex = 0;for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) {
	        a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
	      }D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0);
	    }, D.reloadSlides = function () {
	      var a = b.loader.slides,
	          c = parseInt(D.activeSlide().data("swiperindex"), 10);if (!(0 > c || c > a.length - 1)) {
	        D.activeLoaderIndex = c;var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
	            e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);if (c > 0) {
	          var f = -F * (c - d);D.setWrapperTranslate(f), D.setWrapperTransition(0);
	        }var g;if ("reload" === b.loader.logic) {
	          D.wrapper.innerHTML = "";var h = "";for (g = d; e >= g; g++) {
	            h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
	          }D.wrapper.innerHTML = h;
	        } else {
	          var i = 1e3,
	              j = 0;for (g = 0; g < D.slides.length; g++) {
	            var k = D.slides[g].data("swiperindex");d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j));
	          }for (g = d; e >= g; g++) {
	            var l;i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l));
	          }
	        }D.reInit(!0);
	      }
	    }, B();
	  }
	};Swiper.prototype = { plugins: {}, wrapperTransitionEnd: function wrapperTransitionEnd(a, b) {
	    "use strict";
	    function c(h) {
	      if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b)) for (d = 0; d < g.length; d++) {
	        e.h.removeEventListener(f, g[d], c);
	      }
	    }var d,
	        e = this,
	        f = e.wrapper,
	        g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];if (a) for (d = 0; d < g.length; d++) {
	      e.h.addEventListener(f, g[d], c);
	    }
	  }, getWrapperTranslate: function getWrapperTranslate(a) {
	    "use strict";
	    var b,
	        c,
	        d,
	        e,
	        f = this.wrapper;return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0;
	  }, setWrapperTranslate: function setWrapperTranslate(a, b, c) {
	    "use strict";
	    var d,
	        e = this.wrapper.style,
	        f = { x: 0, y: 0, z: 0 };3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f);
	  }, setWrapperTransition: function setWrapperTransition(a) {
	    "use strict";
	    var b = this.wrapper.style;b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", { duration: a }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a);
	  }, h: { getWidth: function getWidth(a, b, c) {
	      "use strict";
	      var d = window.getComputedStyle(a, null).getPropertyValue("width"),
	          e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e;
	    }, getHeight: function getHeight(a, b, c) {
	      "use strict";
	      if (b) return a.offsetHeight;var d = window.getComputedStyle(a, null).getPropertyValue("height"),
	          e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e;
	    }, getOffset: function getOffset(a) {
	      "use strict";
	      var b = a.getBoundingClientRect(),
	          c = document.body,
	          d = a.clientTop || c.clientTop || 0,
	          e = a.clientLeft || c.clientLeft || 0,
	          f = window.pageYOffset || a.scrollTop,
	          g = window.pageXOffset || a.scrollLeft;return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), { top: b.top + f - d, left: b.left + g - e };
	    }, windowWidth: function windowWidth() {
	      "use strict";
	      return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0;
	    }, windowHeight: function windowHeight() {
	      "use strict";
	      return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0;
	    }, windowScroll: function windowScroll() {
	      "use strict";
	      return "undefined" != typeof pageYOffset ? { left: window.pageXOffset, top: window.pageYOffset } : document.documentElement ? { left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop } : void 0;
	    }, addEventListener: function addEventListener(a, b, c, d) {
	      "use strict";
	      "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
	    }, removeEventListener: function removeEventListener(a, b, c, d) {
	      "use strict";
	      "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
	    } }, setTransform: function setTransform(a, b) {
	    "use strict";
	    var c = a.style;c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b;
	  }, setTranslate: function setTranslate(a, b) {
	    "use strict";
	    var c = a.style,
	        d = { x: b.x || 0, y: b.y || 0, z: b.z || 0 },
	        e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px");
	  }, setTransition: function setTransition(a, b) {
	    "use strict";
	    var c = a.style;c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms";
	  }, support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
	      "use strict";
	      return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	    }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
	      "use strict";
	      var a = document.createElement("div").style;return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a;
	    }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
	      "use strict";
	      var a = document.createElement("div").style;return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a;
	    }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
	      "use strict";
	      var a = document.createElement("div").style;return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a;
	    }(), classList: function () {
	      "use strict";
	      var a = document.createElement("div");return "classList" in a;
	    }() }, browser: { ie8: function () {
	      "use strict";
	      var a = -1;if ("Microsoft Internet Explorer" === navigator.appName) {
	        var b = navigator.userAgent,
	            c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null !== c.exec(b) && (a = parseFloat(RegExp.$1));
	      }return -1 !== a && 9 > a;
	    }(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled } }, (window.jQuery || window.Zepto) && !function (a) {
	  "use strict";
	  a.fn.swiper = function (b) {
	    var c;return this.each(function (d) {
	      var e = a(this),
	          f = new Swiper(e[0], b);d || (c = f), e.data("swiper", f);
	    }), c;
	  };
	}(window.jQuery || window.Zepto),  true ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function () {
	  "use strict";
	  return Swiper;
	});

/***/ }
/******/ ]);
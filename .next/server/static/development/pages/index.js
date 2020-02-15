module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/Domain/Square/Square.ts":
/*!*************************************!*\
  !*** ./src/Domain/Square/Square.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
/* harmony import */ var _Vector_Vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vector/Vector2d */ "./src/Domain/Vector/Vector2d.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Represents a square in two dimensional space.
 *
 */
class Square {
  /**
   *
   * @param width the width of the square
   * @param position the coordinates of the top-left point of the square
   */
  constructor(width, position) {
    _defineProperty(this, "_width", void 0);

    _defineProperty(this, "_position", void 0);

    _defineProperty(this, "_points", void 0);

    this._width = width;
    this._position = this._copyPosition(position);
    this._points = this._calcPoints();
  }

  clone() {
    return new Square(this._width, this._position);
  }

  get center() {
    return new _Vector_Vector2d__WEBPACK_IMPORTED_MODULE_0__["default"](this._position.x + this._width / 2, this._position.y - this._width / 2);
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
    this._points = this._calcPoints();
  }
  /**
   * Point a is the top left corner
   * Point b is the top right corner
   * Point c is the bottom left corner
   * Point d is the bottom right corner
   */


  get points() {
    return this._copyPoints(this._points);
  }

  get pointsAsArray() {
    return [this._copyPosition(this._points.a), this._copyPosition(this._points.b), this._copyPosition(this._points.d), this._copyPosition(this._points.c)];
  }

  get position() {
    return this._copyPosition(this._position);
  }

  set position(position) {
    this._position = position;
    this._points = this._calcPoints();
  }

  _calcPoints() {
    return {
      a: this._position,
      b: new _Vector_Vector2d__WEBPACK_IMPORTED_MODULE_0__["default"](this._position.x + this._width, this._position.y),
      c: new _Vector_Vector2d__WEBPACK_IMPORTED_MODULE_0__["default"](this._position.x, this.position.y - this._width),
      d: new _Vector_Vector2d__WEBPACK_IMPORTED_MODULE_0__["default"](this._position.x + this._width, this._position.y - this._width)
    };
  }

  _copyPosition(pos) {
    return pos.clone();
  }

  _copyPoints(points) {
    return {
      a: this._copyPosition(points.a),
      b: this._copyPosition(points.b),
      c: this._copyPosition(points.c),
      d: this._copyPosition(points.d)
    };
  }

}

/***/ }),

/***/ "./src/Domain/Vector/Vector2d.ts":
/*!***************************************!*\
  !*** ./src/Domain/Vector/Vector2d.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2d; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Private statics
const calcMagnitude = v => Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));

const INVERSE_SQUARE_ROOT_TWO = 1 / Math.sqrt(2);
class Vector2d {
  constructor(x, y) {
    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    this.x = x;
    this.y = y;
  }

  get magnitudeSquared() {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
  }

  get magnitude() {
    return calcMagnitude(this);
  }

  get normalized() {
    const magnitude = calcMagnitude(this);
    return new Vector2d(this.x / magnitude, this.y / magnitude);
  }

  get abs() {
    return new Vector2d(Math.abs(this.x), Math.abs(this.y));
  }
  /**
   * More info here: https://www.h3xed.com/programming/fast-unit-vector-calculation-for-2d-games
   */


  get approxUnit() {
    if (!this.x) {
      if (!this.y) {
        return new Vector2d(0, 0);
      } else {
        return new Vector2d(0, 1);
      }
    } else if (!this.y) {
      return new Vector2d(1, 0);
    }

    const absVector = this.abs;
    let ratio = 1 / Math.max(absVector.x, absVector.y);
    ratio *= (1 - INVERSE_SQUARE_ROOT_TWO) * 10 - (absVector.x + absVector.y) * ratio * (1 - INVERSE_SQUARE_ROOT_TWO);
    return new Vector2d(this.x * ratio, this.y * ratio);
  }

  plus(b) {
    return new Vector2d(b.x + this.x, b.y + this.y);
  }

  minus(b) {
    return new Vector2d(this.x - b.x, this.y - b.y);
  }

  dot(b) {
    return this.x * b.x + this.y * b.y;
  }

  times(scalar) {
    return new Vector2d(this.x * scalar, this.y * scalar);
  }

  scaleTo(magnitude) {
    return this.normalized.times(magnitude);
  }

  transform(matrix) {
    return new Vector2d(this.x * matrix[0] + this.y * matrix[1], this.x * matrix[2] + this.y * matrix[3]);
  }

  squaredDistanceTo(b) {
    return Math.pow(this.x - b.x, 2) + Math.pow(this.y - b.y, 2);
  }

  distanceTo(b) {
    return Math.sqrt(this.squaredDistanceTo(b));
  }

  clone() {
    return new Vector2d(this.x, this.y);
  }

}

/***/ }),

/***/ "./src/Services/Ease/Ease.service.ts":
/*!*******************************************!*\
  !*** ./src/Services/Ease/Ease.service.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const EasingFunctions = {
  // no easing, no acceleration
  linear: t => t,
  // accelerating from zero velocity
  easeInQuad: t => t * t,
  // decelerating to zero velocity
  easeOutQuad: t => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // accelerating from zero velocity
  easeInCubic: t => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: t => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: t => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: t => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: t => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: t => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
};
/* harmony default export */ __webpack_exports__["default"] = (EasingFunctions);

/***/ }),

/***/ "./src/Services/EaseStep/EaseStep.service.ts":
/*!***************************************************!*\
  !*** ./src/Services/EaseStep/EaseStep.service.ts ***!
  \***************************************************/
/*! exports provided: mappedStepEaser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mappedStepEaser", function() { return mappedStepEaser; });
/**
 * *Bad name, I know.*  This method makes it possible
 * to 'join' together the easing of various things.  It was
 * initially designed to help ease cards off of a card deck.
 *
 * For example, let's say you have three cards sitting on the deck.
 * You want to ease the first, then the second, and finally the third
 * off of the deck.  The second should move some time after the first,
 * the third after the second.  Let's say that you want to have a function
 * to which you provide one number indicating the progress through the animation
 * and an index indicating a card and you want to get the position of that card.
 *
 * This function does that, but everything is normalized.  Provide a the number
 * of things you'd like to ease, a period (if 0 then all items will move at the same
 * time, 1, all items will move directly after the previous has finished, etc.), and
 * an easing function.  This function will return a range and the function mentioned
 * above which takes in a progress number (between 0 and 1) and an index.   The range is helpful to selectively
 * make animations slower which have a larger period or more elements.
 *
 * @param {number} numThings - number of things to ease
 * @param {number} period - if 0 things will move together, if 1 will move right after eachother, .5 will move halfway, etc.
 * @param {function} easeFunction - function which takes in a number between 0 and 1
 *  and outputs another number between 0 and 1.
 * @returns {[number, function, function]} the range, a function which inputs a progress number
 * and an index and outputs the value of the thing with that index for that progress number, and a
 * function which takes an index and returns the place in the range that index starts to be eased.
 */
const stepEaser = (numStages, period = 1, easeFunction = x => x) => {
  // Figure out when the last stage will go and add one to it.
  const length = (numStages - 1) * period + 1;

  const getValue = (progress, index) => {
    const val = progress * length - index * period;

    if (val < 0) {
      return 0;
    }

    if (val > 1) {
      return 1;
    }

    return easeFunction(val);
  };

  const getEaseStart = index => index * period / length;

  return [getValue, getEaseStart];
};

const mappedStepEaser = (inputFrom, inputTo, outputFrom, outputTo) => (numStages, period = 1, easeFunction = x => x) => {
  const inputMap = val => (val - inputFrom) / (inputTo - inputFrom);

  const outputMap = val => val * (outputTo - outputFrom) + outputFrom;

  const inputMapInverse = val => val * (inputTo - inputFrom) + inputFrom;

  const [getValue, getPosition] = stepEaser(numStages, period, easeFunction);
  return [(progress, index) => outputMap(getValue(inputMap(progress), index)), index => inputMapInverse(getPosition(index))];
};
/* harmony default export */ __webpack_exports__["default"] = (stepEaser);

/***/ }),

/***/ "./src/Services/MetaSphere/MetaSphere.ts":
/*!***********************************************!*\
  !*** ./src/Services/MetaSphere/MetaSphere.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetaSphere; });
/* harmony import */ var _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Domain/Vector/Vector2d */ "./src/Domain/Vector/Vector2d.ts");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultConfig = {
  numberOfColumns: 40,
  numberOfRows: 40,
  p: 0.0008,
  shouldSlideDots: true,
  dotSize: 3
};

const constrain = (val, min, max) => Math.max(Math.min(val, max), min);

class MetaSphere {
  constructor(width, height, config = defaultConfig) {
    _defineProperty(this, "_width", void 0);

    _defineProperty(this, "_height", void 0);

    _defineProperty(this, "_dots", void 0);

    _defineProperty(this, "p", void 0);

    _defineProperty(this, "shouldSlideDots", void 0);

    _defineProperty(this, "dotSize", void 0);

    this._width = width;
    this._height = height;
    this._dots = [];
    this.p = typeof config.p !== "undefined" ? config.p : defaultConfig.p;
    this.shouldSlideDots = typeof config.shouldSlideDots !== "undefined" ? config.shouldSlideDots : defaultConfig.shouldSlideDots;
    this.dotSize = typeof config.dotSize !== "undefined" ? config.dotSize : defaultConfig.dotSize;
    const numberOfColumns = config.numberOfColumns || defaultConfig.numberOfColumns;
    const numberOfRows = config.numberOfRows || defaultConfig.numberOfRows;

    for (let i = 0; i < numberOfRows * numberOfColumns; i++) {
      this._dots[i] = new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_0__["default"](width / numberOfRows * (i % numberOfRows), height / numberOfColumns * Math.floor(i / numberOfColumns));
    }
  }

  setup() {}

  draw(ctx, focusPoint) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this._width, this._height); // Draw each of the dots.

    this._dots.forEach(dot => {
      // Figure out the color of the dot.
      const color = color__WEBPACK_IMPORTED_MODULE_1___default.a.hsl(Math.sqrt(Math.pow(this._width / 2 - dot.x, 2) + Math.pow(this._height / 2 - dot.y, 2)), 50, 50);
      ctx.fillStyle = color.hex(); //Move the dots across the page

      if (this.shouldSlideDots) {
        if (focusPoint.x <= this._width / 2) {
          dot.x = (dot.x + 1) % this._width;
        } else {
          dot.x -= 1;

          if (dot.x <= 0) {
            dot.x = this._width;
          }
        }
      } //Ok, I'm going to be honest with you, this was one of the first programs
      //I made, and I coded it poorly and as a result.  I could fix most of it, but
      //I have no idea how this part actually works.


      ctx.beginPath();
      ctx.ellipse(constrain(dot.x + (constrain(focusPoint.x, 100, this._width - 100) - dot.x) * Math.sqrt(Math.pow(constrain(focusPoint.x, 300, 900) - dot.x, 2) + Math.pow(focusPoint.y - dot.y, 2)) * this.p, dot.x - 200, dot.x + 200), dot.y + (focusPoint.y - dot.y) * Math.sqrt(Math.pow(focusPoint.x - dot.x, 2) + Math.pow(focusPoint.y - dot.y, 2)) * this.p, this.dotSize, this.dotSize, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

}

/***/ }),

/***/ "./src/Services/PerspectiveSquare/Drawers/Original.service.ts":
/*!********************************************************************!*\
  !*** ./src/Services/PerspectiveSquare/Drawers/Original.service.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OriginalPerspectiveSquareDrawer; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class OriginalPerspectiveSquareDrawer {
  constructor(ctx, config = {}) {
    _defineProperty(this, "_ctx", void 0);

    _defineProperty(this, "_lineWidth", void 0);

    _defineProperty(this, "_lineColor", void 0);

    _defineProperty(this, "_includeDashes", void 0);

    _defineProperty(this, "_mapper", void 0);

    this._ctx = ctx;
    this._lineColor = config.lineColor || "black";
    this._lineWidth = config.lineWidth || 3;

    this._mapper = config.mapper || (v => v);

    this._includeDashes = typeof config.includeDashes === "boolean" ? config.includeDashes : true;
  }

  setup() {// Do nothing.
  }

  draw(squares, focusPoint) {
    this._ctx.strokeStyle = this._lineColor;
    this._ctx.lineWidth = this._lineWidth;
    const [squareOne, squareTwo] = squares;
    const squareOnePoints = squareOne.pointsAsArray.map(this._mapper);
    const squareTwoPoints = squareTwo.pointsAsArray.map(this._mapper); // Draw dashed lines from vanish point to second square.

    if (this._includeDashes) {
      this._ctx.setLineDash([0, 4, this._lineWidth, 4]);

      squareTwoPoints.forEach(point => {
        this._ctx.beginPath();

        this._ctx.moveTo(focusPoint.x, focusPoint.y);

        this._ctx.lineTo(point.x, point.y);

        this._ctx.stroke();

        this._ctx.closePath();
      });

      this._ctx.setLineDash([]);
    } // Draw second square.


    this._drawSquare(squareTwo); // Draw lines between second square and first square


    squareOnePoints.forEach((pointOne, index) => {
      this._ctx.beginPath();

      this._ctx.moveTo(pointOne.x, pointOne.y);

      this._ctx.lineTo(squareTwoPoints[index].x, squareTwoPoints[index].y);

      this._ctx.stroke();

      this._ctx.closePath();
    }); // Draw first square.

    this._drawSquare(squareOne);
  }

  _drawSquare(square) {
    const points = square.pointsAsArray.map(this._mapper);

    this._ctx.beginPath();

    const lastPoint = points[points.length - 1];

    this._ctx.moveTo(lastPoint.x, lastPoint.y);

    points.forEach(point => this._ctx.lineTo(point.x, point.y));

    this._ctx.stroke();

    this._ctx.closePath();
  }

}

/***/ }),

/***/ "./src/Services/PerspectiveSquare/PerspectiveSquare.service.ts":
/*!*********************************************************************!*\
  !*** ./src/Services/PerspectiveSquare/PerspectiveSquare.service.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerspectiveSquare; });
/* harmony import */ var _Domain_Square_Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Domain/Square/Square */ "./src/Domain/Square/Square.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PerspectiveSquare {
  /**
   * Depth of perspective
   */

  /**
   * Max front square moves away from the vanishPoint.
   */
  constructor(square, depth = 100, maxSquareDisplacement = 60) {
    _defineProperty(this, "depth", void 0);

    _defineProperty(this, "maxSquareDisplacement", void 0);

    _defineProperty(this, "_squareCenter", void 0);

    _defineProperty(this, "_square", void 0);

    this._squareCenter = square.center;
    this._square = square.clone();
    this.depth = depth;
    this.maxSquareDisplacement = maxSquareDisplacement;
  }

  getSquares(vanishPoint) {
    // Calculate first square
    let displacementVector = this._squareCenter.minus(vanishPoint);

    if (displacementVector.magnitude > this.maxSquareDisplacement) {
      displacementVector = displacementVector.scaleTo(this.maxSquareDisplacement);
    }

    const squareOne = new _Domain_Square_Square__WEBPACK_IMPORTED_MODULE_0__["default"](this._square.width, this._square.position.plus(displacementVector)); // Calculate second square

    let squareTwo;

    if (vanishPoint.minus(squareOne.points.a).magnitude < this.depth) {
      squareTwo = new _Domain_Square_Square__WEBPACK_IMPORTED_MODULE_0__["default"](0, vanishPoint);
    } else {
      // Let's break out some fucking math. Alright.
      // Offset is a vector reprsenting the change in position from squareOne to squareTwo.
      const offset = vanishPoint.minus(squareOne.position).scaleTo(this.depth); // To get squareTwo's position, we add offset to squareOne.

      const squareTwoPosition = offset.plus(squareOne.position); // Then let's calculate the width.  This might not be the most efficient, but
      // we can use similar triangles and compare the distance from the top left point
      // of squareA to the vanishing point to the distance between squareTwo's position
      // and the vanishing point and use that ratio to determine the width given the width of squareOne

      const vanishPointDistance = squareOne.position.minus(vanishPoint).magnitude;
      const squareTwoWidth = squareOne.width * (vanishPointDistance - this.depth) / vanishPointDistance;
      squareTwo = new _Domain_Square_Square__WEBPACK_IMPORTED_MODULE_0__["default"](squareTwoWidth, squareTwoPosition);
    }

    return [squareOne, squareTwo];
  }

}

/***/ }),

/***/ "./src/Services/RungeKutta/RungeKutta.service.ts":
/*!*******************************************************!*\
  !*** ./src/Services/RungeKutta/RungeKutta.service.ts ***!
  \*******************************************************/
/*! exports provided: RungeKutta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RungeKutta", function() { return RungeKutta; });
/**
 * Ok this might be a little confusing, but this type is a function that takes in a function f(x) where x is a Vector.
 * f returns a vector.  The function returns another function which takes in x and h and returns a vector.
 *
 * f(x) is a function in the form x' = f(x).  In other words, given a vector, it returns
 * the change (derivative) of that vector at that moment.  So, at time n, (x_n)' = f(x_n).  The method below returns a
 * function of the form x_(n+h) = g(x_n, h).  Notice that it's not the change in x, it's the actual value.
 *
 */
const multV = (vector, n) => vector.map(value => value * n);

const vplusV = (vector, vectorb) => vector.map((x, i) => x + (vectorb.get(i) || 0));

const RungeKutta = f => (x, h) => {
  const a = f(x);
  const b = f(vplusV(x, multV(a, h / 2)));
  const c = f(vplusV(x, multV(b, h / 2)));
  const d = f(vplusV(x, multV(c, h))); // This next line is really confusing, but it amounts to
  // x + h/6 * (a + 2b + 2c + d)

  return vplusV(x, multV(vplusV(vplusV(vplusV(a, multV(b, 2)), multV(c, 2)), d), h / 6));
};
/* harmony default export */ __webpack_exports__["default"] = (RungeKutta);

/***/ }),

/***/ "./src/Services/StrangeAttractor/StrangeAttractor.service.ts":
/*!*******************************************************************!*\
  !*** ./src/Services/StrangeAttractor/StrangeAttractor.service.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RungeKutta_RungeKutta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../RungeKutta/RungeKutta.service */ "./src/Services/RungeKutta/RungeKutta.service.ts");

const sigma = 10;
const rho = 28;
const beta = -8 / 3;
const deltaTime = 0.005;

const rungeKuttaFunction = p => {
  const x = p.get("x") || 0;
  const y = p.get("y") || 0;
  const z = p.get("z") || 0;
  return p.set("x", sigma * (y - x)).set("y", rho * x - y - x * z).set("z", beta * z + x * y);
};

const rungeKuttaCalculator = Object(_RungeKutta_RungeKutta_service__WEBPACK_IMPORTED_MODULE_0__["RungeKutta"])(rungeKuttaFunction);
/**
 * Calculates the next value in a lorenz strange attractor using
 * Runge Katta approximation given sigma of 10, rho of 28,
 * beta of -8/3 with a delta time of .005.
 * @param {Position} p previous position
 */

const getNextPosition = p => rungeKuttaCalculator(p, deltaTime);

/* harmony default export */ __webpack_exports__["default"] = (getNextPosition);

/***/ }),

/***/ "./src/Services/Throttle/Throttle.service.ts":
/*!***************************************************!*\
  !*** ./src/Services/Throttle/Throttle.service.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return thottle; });
// Decided to implement this because why not.

/**
 * Returns a new function that can only be called once within the given time.
 * @param {Function} func - the function to throttle
 * @param {*} time - the amount of time in which this function can only be called once
 */
function thottle(func, time) {
  let cooledDown = true;
  return function (...args) {
    if (cooledDown) {
      func(...args);
      cooledDown = false;
      setTimeout(() => cooledDown = true, time);
    }
  };
}

/***/ }),

/***/ "./src/Services/TypeWriter/TypeWriter.service.ts":
/*!*******************************************************!*\
  !*** ./src/Services/TypeWriter/TypeWriter.service.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TypeWriterService; });
class TypeWriterService {
  static getMistakeCharacter(character) {
    const keyboard = ["qwertyuiop[", "asdfghjkl;", "zxcvbnm,"];
    const uppercase = character.toUpperCase() === character;
    const isLetter = "abcdefghijklmnopqrstuvwxyz".indexOf(character.toLowerCase()) !== -1;

    if (isLetter) {
      /*With a 90% chance, if the character is uppercase, make the
        mistake character the lowercase version of the uppercase.
        If it's lowercase, reverse the probability.*/
      const chanceOfCaseMistake = uppercase ? 0.9 : 0.1;

      if (Math.random() <= chanceOfCaseMistake) {
        return uppercase ? character.toLowerCase() : character.toUpperCase();
      } //Otherwise make a big finger mistake


      keyboard.forEach(keyRow => {
        const index = keyRow.indexOf(character.toLowerCase());

        if (index !== -1) {
          switch (index) {
            case 0:
              return keyRow[1];

            case keyRow.length - 1:
              return keyRow.length - 2;

            default:
              return Math.random() <= 0.5 ? keyRow[index - 1] : keyRow[index + 1];
          }
        }
      });
    } //Handle special characters
    //TODO: this doesn't handle ' ' (space) very well... or at all.


    const specialCharacters = ["1234567890-=", "p[]\\", "l;'", "m,./"];
    const specialCharactersShift = ["!@#$%^&*()_+", "P{}|", 'L:"', "M<>?"];

    for (let i = 0; i < specialCharactersShift.length; i++) {
      const shiftedIndex = specialCharactersShift[i].indexOf(character);

      if (shiftedIndex !== -1) {
        //It's shifted, so with a 90% chance, make a shift mistake.  Otherwise, big finger mistake.
        if (Math.random() <= 0.9) {
          return specialCharacters[i][shiftedIndex];
        }

        switch (shiftedIndex) {
          case 0:
            return specialCharactersShift[i][1];

          case specialCharactersShift[i].length - 1:
            return specialCharactersShift[i][specialCharactersShift[i].length - 2];

          default:
            return Math.random() <= 0.5 ? specialCharactersShift[i][shiftedIndex - 1] : specialCharactersShift[i][shiftedIndex + 1];
        }
      }
    }

    for (let i = 0; i < specialCharacters.length; i++) {
      const index = specialCharactersShift[i].indexOf(character);

      if (index !== -1) {
        //It's not shifted, so with a 10% chance, make a shift mistake.  Otherwise, big finger mistake.
        if (Math.random() <= 0.1) {
          return specialCharactersShift[i][index];
        }

        switch (index) {
          case 0:
            return specialCharactersShift[i][1];

          case specialCharactersShift[i].length - 1:
            return specialCharactersShift[i][specialCharactersShift[i].length - 2];

          default:
            return Math.random() <= 0.5 ? specialCharactersShift[i][index - 1] : specialCharactersShift[i][index + 1];
        }
      }
    } //As a default, just return the given character.


    return character;
  }

}

/***/ }),

/***/ "./src/View/Hooks/useClickHoverWander.ts":
/*!***********************************************!*\
  !*** ./src/View/Hooks/useClickHoverWander.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebound */ "rebound");
/* harmony import */ var rebound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebound__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Services_Throttle_Throttle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Throttle/Throttle.service */ "./src/Services/Throttle/Throttle.service.ts");
/* harmony import */ var _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Domain/Vector/Vector2d */ "./src/Domain/Vector/Vector2d.ts");





const getCoordinatesFromMouseEvent = event => {
  const bounds = event.currentTarget.getBoundingClientRect();
  return new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](event.clientX - bounds.left, event.clientY - bounds.top);
};

const randomPosition = (maxX, maxY) => new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](Math.random() * maxX, Math.random() * maxY);

const positionThreshold = 20;

const getNextPosition = (currentPosition, width, height) => {
  let newPosition = randomPosition(width, height);

  while (newPosition.minus(currentPosition).magnitude < positionThreshold) {
    newPosition = randomPosition(width, height);
  }

  return newPosition;
};

const useClickHoverWander = (width, height, initialFocusPoint = new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0)) => {
  const xSpring = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const ySpring = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const [focusPoint, setFocusPoint] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](initialFocusPoint);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const springSystem = new rebound__WEBPACK_IMPORTED_MODULE_1__["SpringSystem"]();
    const springTension = 2;
    const springFriction = 5;
    xSpring.current = springSystem.createSpring(springTension, springFriction);
    ySpring.current = springSystem.createSpring(springTension, springFriction);

    const goToNextPosition = () => {
      if (!xSpring.current || !ySpring.current) {
        return;
      }

      const newPosition = getNextPosition(new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](xSpring.current.getCurrentValue(), ySpring.current.getCurrentValue()), width, height); // Not sure exactly why, but there's a bug if we set the endValue right away
      // Somtimes the spring just doesn't move.

      setTimeout(() => {
        if (xSpring.current && ySpring.current) {
          xSpring.current.setEndValue(newPosition.x);
          ySpring.current.setEndValue(newPosition.y);
        }
      }, 0);
    };

    xSpring.current.addListener({
      onSpringUpdate: spring => {
        if (!ySpring.current) {
          return;
        }

        setFocusPoint(new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](spring.getCurrentValue(), ySpring.current.getCurrentValue()));
      },
      onSpringAtRest: () => {
        if (ySpring.current && ySpring.current.isAtRest()) {
          goToNextPosition();
        }
      }
    });
    ySpring.current.addListener({
      onSpringUpdate: spring => {
        if (!xSpring.current) {
          return;
        }

        if (xSpring.current.isAtRest()) {
          setFocusPoint(new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](xSpring.current.getCurrentValue(), spring.getCurrentValue()));
        }
      },
      onSpringAtRest: () => {
        if (xSpring.current && xSpring.current.isAtRest()) {
          goToNextPosition();
        }
      }
    });
    xSpring.current.setEndValue(Math.random() * width);
    ySpring.current.setEndValue(Math.random() * height);
    return () => {
      xSpring.current && xSpring.current.destroy();
      ySpring.current && ySpring.current.destroy();
    };
  }, [height, width]);
  const onMouseMove = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(_Services_Throttle_Throttle_service__WEBPACK_IMPORTED_MODULE_2__["default"])(event => {
    const position = getCoordinatesFromMouseEvent(event);
    xSpring.current && xSpring.current.setEndValue(position.x);
    ySpring.current && ySpring.current.setEndValue(position.y);
  }, 100), []);
  const onClick = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => event => {
    const position = getCoordinatesFromMouseEvent(event);
    xSpring.current && xSpring.current.setEndValue(position.x);
    ySpring.current && ySpring.current.setEndValue(position.y);
  }, []);
  return [focusPoint, {
    onClick,
    onMouseMove
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (useClickHoverWander);

/***/ }),

/***/ "./src/View/Hooks/useFullScreen.ts":
/*!*****************************************!*\
  !*** ./src/View/Hooks/useFullScreen.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useSafeWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSafeWindow */ "./src/View/Hooks/useSafeWindow.tsx");



const useFullScreen = () => {
  const [window, flash] = Object(_useSafeWindow__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window ? window.innerWidth : 0);
  const {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window ? window.innerHeight : 0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const resize = () => {
      if (window) {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }
    };

    resize();
    const listener = window && window.addEventListener("resize", resize);
    return () => {
      window && listener && window.removeEventListener("resize", listener);
    };
  }, [window]);
  return [width, height, flash];
};

/* harmony default export */ __webpack_exports__["default"] = (useFullScreen);

/***/ }),

/***/ "./src/View/Hooks/useSafeWindow.tsx":
/*!******************************************!*\
  !*** ./src/View/Hooks/useSafeWindow.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_FlashScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/FlashScreen */ "./src/View/UI/FlashScreen.ts");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/Hooks/useSafeWindow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const useSafeWindow = () => {
  const [safeWindow, setSafeWindow] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true ? null : undefined);
  const [flash, setFlash] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](__jsx(_UI_FlashScreen__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (true) {
      setSafeWindow(null);
    } else {}
  }, []);
  return [safeWindow, flash];
}; // const dev = () => [window, null];


/* harmony default export */ __webpack_exports__["default"] = (useSafeWindow);

/***/ }),

/***/ "./src/View/Hooks/useScrollAmount.ts":
/*!*******************************************!*\
  !*** ./src/View/Hooks/useScrollAmount.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_Throttle_Throttle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Throttle/Throttle.service */ "./src/Services/Throttle/Throttle.service.ts");
/* harmony import */ var _useSafeWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSafeWindow */ "./src/View/Hooks/useSafeWindow.tsx");



/**
 * Returns how far the window is currently scrolled in either the vertical
 * or horizontal direction.
 * @param {boolean} [vertical=true]
 */

const useScrollAmount = (vertical = true) => {
  const [window] = Object(_useSafeWindow__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [scrollAmount, setScrollAmount] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const throttledFunc = Object(_Services_Throttle_Throttle_service__WEBPACK_IMPORTED_MODULE_1__["default"])(() => window && setScrollAmount(vertical ? window.scrollY : window.scrollX), 30);
    const wheelListener = window && window.addEventListener("scroll", throttledFunc);
    return () => {
      window && wheelListener && window.removeEventListener("scroll", wheelListener);
    };
  }, [vertical, window]);
  return scrollAmount;
};

/* harmony default export */ __webpack_exports__["default"] = (useScrollAmount);

/***/ }),

/***/ "./src/View/Hooks/useTypeWriter/useTypeWriter.ts":
/*!*******************************************************!*\
  !*** ./src/View/Hooks/useTypeWriter/useTypeWriter.ts ***!
  \*******************************************************/
/*! exports provided: DEFAULT_TYPE_CONFIG, reducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TYPE_CONFIG", function() { return DEFAULT_TYPE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_TypeWriter_TypeWriter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/TypeWriter/TypeWriter.service */ "./src/Services/TypeWriter/TypeWriter.service.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * A representation of a delayed state of the typed text.
 */

const DEFAULT_TYPE_CONFIG = {
  typeDelay: {
    base: 100,
    variance: 50
  },
  mistakeRealizeDelay: {
    base: 250,
    variance: 50
  },
  mistakeProbability: 0.02
};
/**
 * Type the provided text according to the type config.
 */

const reducer = (state, action) => {
  switch (action.type) {
    case "TYPE_TEXT":
      let textToType = "";

      if (state.sequence.length) {
        // Get the value of the text once the sequence is completed.
        // We should add the text provided to this text.
        textToType = state.sequence[state.sequence.length - 1].text;
      }

      const typeSequence = []; // In the special case in which we're just typing an empty string, add a DelayNode
      // to call the listener if there is one.

      if (action.payload.text === "" && action.payload.listener) {
        return _objectSpread({}, state, {
          sequence: state.sequence.concat([{
            text: textToType,
            delay: 0,
            listener: action.payload.listener
          }])
        });
      } // Function for generating a the delay of typing a character.


      const getTypeDelay = () => Math.max(0, action.payload.typeConfig.typeDelay.base + Math.random() * action.payload.typeConfig.typeDelay.variance * 2 - action.payload.typeConfig.typeDelay.variance); // Function for generating the delay of realizing a mistake.


      const getMistakeDelay = () => Math.max(0, action.payload.typeConfig.mistakeRealizeDelay.base + Math.random() * action.payload.typeConfig.mistakeRealizeDelay.variance * 2 - action.payload.typeConfig.typeDelay.variance); // For each character...


      action.payload.text.split("").forEach((char, i) => {
        // Possibly make a mistake
        if (Math.random() <= action.payload.typeConfig.mistakeProbability) {
          //Type mistake character
          typeSequence.push({
            text: textToType + _Services_TypeWriter_TypeWriter_service__WEBPACK_IMPORTED_MODULE_1__["default"].getMistakeCharacter(char),
            delay: getTypeDelay()
          }); // Then erase it.

          typeSequence.push({
            text: textToType,
            delay: getMistakeDelay()
          });
        } // The next text should include the next character


        textToType += char; // If this is the last node to add, add the listener to the node.

        if (i === action.payload.text.length - 1 && action.payload.listener) {
          typeSequence.push({
            text: textToType,
            delay: getTypeDelay(),
            listener: action.payload.listener
          });
        } else {
          typeSequence.push({
            text: textToType,
            delay: getTypeDelay()
          });
        }
      });
      return _objectSpread({}, state, {
        sequence: state.sequence.concat(typeSequence)
      });

    case "DELETE_ALL":
      //Don't do anything if the current value is empty
      if (!state.currentValue.length) {
        return state;
      } //Immediately delete all characters.


      const newSequence = state.currentValue.split("").slice(0, state.currentValue.length - 1) // I.E. "123" -> ["12", "1", ""]
      .reduce((sum, char) => [sum[0] + char].concat(sum), [""]) // Deletes take 10 miliseconds (this value is not configurable yet.)
      .map(text => ({
        text,
        delay: 10
      }));
      return _objectSpread({}, state, {
        sequence: newSequence
      });

    case "WAIT_FOR_NEXT_NODE":
      return _objectSpread({}, state, {
        isWaiting: true
      });

    case "TYPE_NODE":
      return {
        currentValue: state.sequence[0].text,
        sequence: state.sequence.slice(1),
        isWaiting: false
      };

    default:
      return state;
  }
};

/**
 * Types some characters.  It's pretty sick.
 *
 * @param initialText - the value of text will start with this value
 * @returns [currentValueOfText, setText, isIdle]
 */
const useTypeWriter = (initialText = "") => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](reducer, {
    currentValue: initialText,
    sequence: [],
    isWaiting: false
  });
  const nextNodeTimeout = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (state.isWaiting || !state.sequence.length) {
      return;
    }

    const nextNode = state.sequence[0];
    dispatch({
      type: "WAIT_FOR_NEXT_NODE",
      payload: null
    });
    nextNodeTimeout.current = setTimeout(() => {
      dispatch({
        type: "TYPE_NODE",
        payload: null
      });

      if (nextNode.listener) {
        nextNode.listener();
      }
    }, nextNode.delay);
  }, [state]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => () => {
    nextNodeTimeout.current !== null && clearTimeout(nextNodeTimeout.current);
  }, []);
  /**
   * Use ref so this function can be used in effects and won't cause
   * the effect to rerun after state changes.
   */

  const typeNextText = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]((nextText, config) => {
    dispatch({
      type: "DELETE_ALL",
      payload: null
    });

    const typeTextPayload = _objectSpread({}, config, {
      //If a config.typeConfig is provided set it to the type config, otherwise use the default
      typeConfig: config && config.typeConfig || DEFAULT_TYPE_CONFIG,
      text: nextText
    });

    dispatch({
      type: "TYPE_TEXT",
      payload: typeTextPayload
    });
  });
  return [state.currentValue, typeNextText.current, state.sequence.length === 0];
};

/* harmony default export */ __webpack_exports__["default"] = (useTypeWriter);

/***/ }),

/***/ "./src/View/Layout/Layout.tsx":
/*!************************************!*\
  !*** ./src/View/Layout/Layout.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/global.scss */ "./src/View/Styles/global.scss");
/* harmony import */ var _Styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/Layout/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/View/PageComponents/Homepage/Lorenz.tsx":
/*!*****************************************************!*\
  !*** ./src/View/PageComponents/Homepage/Lorenz.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-interpolate */ "color-interpolate");
/* harmony import */ var color_interpolate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_interpolate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Services_StrangeAttractor_StrangeAttractor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/StrangeAttractor/StrangeAttractor.service */ "./src/Services/StrangeAttractor/StrangeAttractor.service.ts");
/* harmony import */ var _UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/CavnasDrawer/CanvasDrawer */ "./src/View/UI/CavnasDrawer/CanvasDrawer.tsx");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Homepage/Lorenz.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const mapper = (fromLow, fromHigh, toLow, toHigh) => mapValue => (mapValue - fromLow) / (fromHigh - fromLow) * (toHigh - toLow) + toLow;

const colorInterpolator = color_interpolate__WEBPACK_IMPORTED_MODULE_1___default()(["#F58B73", "#F26A7C", "#BD4EB2", "#894EAB", "#554396"]);
let position = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])({
  x: 10,
  y: 10,
  z: 25 + Math.random() * 10 - 5
});

const Lorenz = props => {
  const xMapper = mapper(-20, 20, 0, props.width);
  const yMapper = mapper(0, 50, 0, props.height);
  const colorMapper = mapper(0, 40, 0, 1); // Start the animation!

  const artist = context => {
    // Draw the thing
    context.fillStyle = props.colorful ? colorInterpolator(colorMapper( // @ts-ignore
    position.get("z"))) : "#2f3030";
    context.fillRect(0, 0, props.width, props.height);
    context.fillStyle = "#EEE";
    context.beginPath();
    context.ellipse(xMapper( // @ts-ignore
    position.get("x")), yMapper( // @ts-ignore
    position.get("z")), 5, 5, 0, 0, Math.PI * 2);
    context.fill();
    context.closePath(); // Figure out the next position of this.

    position = Object(_Services_StrangeAttractor_StrangeAttractor_service__WEBPACK_IMPORTED_MODULE_2__["default"])(position);
  };

  const initializeCanvas = context => {
    context.fillStyle = "#2f3030";
    context.strokeStyle = "#EEE";
    context.lineWidth = 0.5;
  };

  return __jsx(_UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    artist: artist,
    initializeCanvas: initializeCanvas,
    width: props.width,
    height: props.height,
    fps: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](Lorenz));

/***/ }),

/***/ "./src/View/PageComponents/Menu/CardMenu/Card/Card.tsx":
/*!*************************************************************!*\
  !*** ./src/View/PageComponents/Menu/CardMenu/Card/Card.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Menu/CardMenu/Card/Card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: ${props => props.width}px;
  div:hover {
    cursor: pointer;
  }
`;
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.attrs(({
  shadowAmount
}) => ({
  style: {
    boxShadow: `0 ${shadowAmount * 8}px
  ${shadowAmount * 10}px 0 rgba(100, 100, 100, 0.5)`
  }
}))`
  position: relative;
  border-radius: 0;

  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 8px 10px 0 rgba(100, 100, 100, 0.5);
  }
  height: ${props => props.height}px;
  overflow: hidden;
`;
const TitleHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 20px;
  color: #444;
  padding: 0px 10px;
  height: 50px;
  background: white;
  text-align: right;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 0.8rem;
`;
const BackgroundHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: 100%;
  width: 100%;
`;

const Card = props => {
  //Calculate shadow amount
  let shadow = 1;

  if (props.shadowAmount != null) {
    shadow = Math.min(Math.max(0, props.shadowAmount), 1);
  }

  return __jsx(Wrapper, {
    width: props.width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(CardWrapper, {
    shadowAmount: shadow,
    height: props.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(BackgroundHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, props.background)), __jsx(TitleHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, props.title, __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, props.description)));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/View/PageComponents/Menu/CardMenu/CardDeck/CardDeck.tsx":
/*!*********************************************************************!*\
  !*** ./src/View/PageComponents/Menu/CardMenu/CardDeck/CardDeck.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hooks_useScrollAmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Hooks/useScrollAmount */ "./src/View/Hooks/useScrollAmount.ts");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card/Card */ "./src/View/PageComponents/Menu/CardMenu/Card/Card.tsx");
/* harmony import */ var _Hooks_useFullScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Hooks/useFullScreen */ "./src/View/Hooks/useFullScreen.ts");
/* harmony import */ var _Services_EaseStep_EaseStep_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../Services/EaseStep/EaseStep.service */ "./src/Services/EaseStep/EaseStep.service.ts");
/* harmony import */ var _Services_Ease_Ease_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../Services/Ease/Ease.service */ "./src/Services/Ease/Ease.service.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Hooks_useSafeWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Hooks/useSafeWindow */ "./src/View/Hooks/useSafeWindow.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Menu/CardMenu/CardDeck/CardDeck.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









 // TODO find a better way to do this.
// @ts-ignore

const _ref = {},
      {
  width,
  height
} = _ref,
      CardPropsSubset = _objectWithoutProperties(_ref, ["width", "height"]);

const CardDeckHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: ${props => props.height}px;
  width: 100%;
`;
const CardHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.attrs(props => ({
  style: {
    transform: `translate(${props.dx}px, ${props.dy}px)`,
    zIndex: 2000 - props.order
  }
}))`
  position: fixed;
`;
const PERIOD = 0.4;
const EASING_FUNCTION = _Services_Ease_Ease_service__WEBPACK_IMPORTED_MODULE_6__["default"].easeInOutQuart;
/**
 * Creates a scrollable Card Deck.
 * @param {Props} props
 */

const CardDeck = props => {
  const scroll = Object(_Hooks_useScrollAmount__WEBPACK_IMPORTED_MODULE_2__["default"])(true);
  const [window] = Object(_Hooks_useSafeWindow__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [windowWidth, windowHeight, flash] = Object(_Hooks_useFullScreen__WEBPACK_IMPORTED_MODULE_4__["default"])(); // This is the position on the screen the deck sits.  It's a computed value based on the windowWidth.

  const deckPosition = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => (windowWidth - props.cardsWidth) / 2, [props.cardsWidth, windowWidth]);
  const scrollDemap = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => val => deckPosition - windowWidth * val, [deckPosition, windowWidth]);
  const scrollLength = windowHeight * 5;
  const cardPositionStart = deckPosition;
  const cardPositionEnd = -props.cardsWidth; // Memoize stepEaser to only generate range and getPosition when the cards length changes.

  const [getPosition, getEaseStart] = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Object(_Services_EaseStep_EaseStep_service__WEBPACK_IMPORTED_MODULE_5__["mappedStepEaser"])(0, scrollLength, cardPositionStart, cardPositionEnd)(props.cards.length - 1, PERIOD, EASING_FUNCTION), [cardPositionEnd, cardPositionStart, props.cards.length, scrollLength]); // Move to the saved scroll position when this component renders

  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
    let timeout;

    if (window) {
      if (props.scrollToCard) {
        //Ok, this is hacky, but unless we wait a few milliseconds,
        // the screen doesn't have time to render and we don't scroll anywhere.
        // As far as I can tell for now, there's no way to listen for when all the cards have been rendered
        setTimeout(() => {
          if (props.scrollToCard) {
            window.scrollTo(0, // Add a little to the index to give make sure the card on top has moved off of the card below
            // TODO this should take the easing function into account.
            getEaseStart(props.scrollToCard + 2 / props.cards.length));
          }
        }, 15);
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [getEaseStart, props.cards.length, props.scrollToCard, window]);

  if (flash) {
    return flash;
  }

  return __jsx(CardDeckHolder, {
    height: scrollLength + windowHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, props.cards.map((card, i) => {
    // Only draw cards when the card above it has moved and it's on screen.
    const nextCardPosition = i !== props.cards.length - 1 ? getPosition(scroll, i + 1) : cardPositionStart;
    const currentCardPosition = getPosition(scroll, i);
    const prevCardPosition = i !== 0 ? getPosition(scroll, i - 1) : cardPositionEnd;
    const shouldNotDrawCard = currentCardPosition === nextCardPosition && currentCardPosition !== deckPosition || prevCardPosition === cardPositionStart;
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: card.link,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, __jsx("div", {
      className: "card-deck-card-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: undefined
    }, __jsx(CardHolder, {
      dx: i === props.cards.length - 1 ? cardPositionStart : currentCardPosition,
      dy: (windowHeight - props.cardsHeight) / 2,
      order: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: undefined
    }, !shouldNotDrawCard && __jsx(_Card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, card, {
      width: props.cardsWidth,
      height: props.cardsHeight,
      shadowAmount: i === props.cards.length - 1 ? 0 : scrollDemap(getPosition(scroll, i)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    })))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardDeck);

/***/ }),

/***/ "./src/View/PageComponents/Menu/CardMenu/index.tsx":
/*!*********************************************************!*\
  !*** ./src/View/PageComponents/Menu/CardMenu/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hooks_useFullScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Hooks/useFullScreen */ "./src/View/Hooks/useFullScreen.ts");
/* harmony import */ var _Hooks_useScrollAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Hooks/useScrollAmount */ "./src/View/Hooks/useScrollAmount.ts");
/* harmony import */ var _CardDeck_CardDeck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardDeck/CardDeck */ "./src/View/PageComponents/Menu/CardMenu/CardDeck/CardDeck.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Menu/CardMenu/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ScrollMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.attrs(props => ({
  style: {
    opacity: props.opacity
  }
}))`
  position: fixed;
  bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: small;
  color: #aaa;
  z-index: 5000;
`;
const AboutContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: fixed;
  top: 8%;
  left: 8%;
  width: 100%;
  a {
    text-decoration: none;
    color: #222;
    &:hover {
      border-bottom: solid 1px #222;
    }
  }
`;
/**
 * Pages are represented as cards on a deck. As the user scrolls the cards roll off the deck
 * offscreen.  Known to be a little buggy on iphones.
 */

const CardMenu = ({
  routeProps,
  cards
}) => {
  const [width, height, flash] = Object(_Hooks_useFullScreen__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const cardWidth = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Math.min(500, width * 0.9), [width]);
  const cardHeight = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => Math.min(500, height * 0.7), [height]);
  const cardsWithDimensions = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => cards.map(card => _objectSpread({}, card, {
    background: __jsx(card.background, {
      width: cardWidth,
      height: cardHeight,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    })
  })), [cardHeight, cardWidth, cards]);
  const scrollToCard = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
    if (routeProps.location && routeProps.location.state && routeProps.location.state.prevPath) {
      const prevLocation = routeProps.location.state.prevPath;
      const index = cards.findIndex(card => card.link === prevLocation);
      return index === -1 ? null : index;
    }

    return null;
  }, [cards, routeProps.location]);
  const scroll = Object(_Hooks_useScrollAmount__WEBPACK_IMPORTED_MODULE_4__["default"])();

  if (flash) {
    return flash;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(AboutContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "About")), __jsx(_CardDeck_CardDeck__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cards: cardsWithDimensions,
    width: width,
    cardsWidth: cardWidth,
    cardsHeight: cardHeight,
    scrollToCard: scrollToCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx(ScrollMessage, {
    opacity: (1 - scroll / height) * 2 || 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Scroll Up"));
};

/* harmony default export */ __webpack_exports__["default"] = (CardMenu);

/***/ }),

/***/ "./src/View/PageComponents/Menu/HallwayPreview.tsx":
/*!*********************************************************!*\
  !*** ./src/View/PageComponents/Menu/HallwayPreview.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/CavnasDrawer/CanvasDrawer */ "./src/View/UI/CavnasDrawer/CanvasDrawer.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Menu/HallwayPreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const HallwayPreview = ({
  width,
  height
}) => {
  const spheres = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([{
    x: width / 2,
    y: height / 2,
    color: "#ee6666"
  }, {
    x: width / 2,
    y: height / 2,
    color: "#333388"
  }]);
  const renderNumber = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](0);
  const artist = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ctx => {
    renderNumber.current = renderNumber.current + 1;
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, width, height);
    spheres.current.forEach((sphere, index) => {
      ctx.fillStyle = sphere.color;
      ctx.beginPath();
      ctx.ellipse(sphere.x + Math.sin(renderNumber.current * 0.016 + index) * 100, sphere.y + Math.sin(renderNumber.current * 0.012 + index) * 100, 10, 10, 0, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    });
  }, [height, width]);
  return __jsx(_UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: width,
    height: height,
    artist: artist,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](HallwayPreview));

/***/ }),

/***/ "./src/View/PageComponents/Menu/JustSomeThoughtsPreview.tsx":
/*!******************************************************************!*\
  !*** ./src/View/PageComponents/Menu/JustSomeThoughtsPreview.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_useTypeWriter_useTypeWriter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Hooks/useTypeWriter/useTypeWriter */ "./src/View/Hooks/useTypeWriter/useTypeWriter.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Styles_TextBox_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Styles/TextBox.scss */ "./src/View/Styles/TextBox.scss");
/* harmony import */ var _Styles_TextBox_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_TextBox_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Menu/JustSomeThoughtsPreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const title = "It's a caipirinhas and sad boy music night";

const JustSomeThoughtsPreview = () => {
  const [text, setText] = Object(_Hooks_useTypeWriter_useTypeWriter__WEBPACK_IMPORTED_MODULE_1__["default"])("");
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const timeouts = [];

    const repeatTyping = () => {
      timeouts.push(setTimeout(() => {
        setText("", {
          listener: () => {
            timeouts.push(setTimeout(() => {
              setText(title, {
                listener: repeatTyping
              });
            }, 2000));
          }
        });
      }, 5000));
    };

    setText(title, {
      listener: repeatTyping
    });
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [setText]);
  return __jsx(Container, {
    className: "withTypingIndicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (JustSomeThoughtsPreview);

/***/ }),

/***/ "./src/View/PageComponents/Menu/MetaSpherePreview.tsx":
/*!************************************************************!*\
  !*** ./src/View/PageComponents/Menu/MetaSpherePreview.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_MetaSphere_MetaSphere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/MetaSphere/MetaSphere */ "./src/Services/MetaSphere/MetaSphere.ts");
/* harmony import */ var _Hooks_useClickHoverWander__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Hooks/useClickHoverWander */ "./src/View/Hooks/useClickHoverWander.ts");
/* harmony import */ var _UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/CavnasDrawer/CanvasDrawer */ "./src/View/UI/CavnasDrawer/CanvasDrawer.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Menu/MetaSpherePreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const MetaSpherePreview = props => {
  const metaDrawer = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const [focusPoint, mouseProps] = Object(_Hooks_useClickHoverWander__WEBPACK_IMPORTED_MODULE_2__["default"])(props.width, props.height);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    metaDrawer.current = new _Services_MetaSphere_MetaSphere__WEBPACK_IMPORTED_MODULE_1__["default"](props.width, props.height, {
      dotSize: 2,
      p: 0.002,
      numberOfColumns: 20,
      numberOfRows: 20,
      shouldSlideDots: false
    });
  }, [props.height, props.width]);
  const artist = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ctx => {
    metaDrawer.current && metaDrawer.current.draw(ctx, focusPoint);
  }, [focusPoint]);
  return __jsx(_UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    width: props.width,
    height: props.height,
    artist: artist
  }, mouseProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MetaSpherePreview);

/***/ }),

/***/ "./src/View/PageComponents/Menu/PerspectivePreview.tsx":
/*!*************************************************************!*\
  !*** ./src/View/PageComponents/Menu/PerspectivePreview.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_PerspectiveSquare_PerspectiveSquare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/PerspectiveSquare/PerspectiveSquare.service */ "./src/Services/PerspectiveSquare/PerspectiveSquare.service.ts");
/* harmony import */ var _Services_PerspectiveSquare_Drawers_Original_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/PerspectiveSquare/Drawers/Original.service */ "./src/Services/PerspectiveSquare/Drawers/Original.service.ts");
/* harmony import */ var _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Domain/Vector/Vector2d */ "./src/Domain/Vector/Vector2d.ts");
/* harmony import */ var _Domain_Square_Square__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Domain/Square/Square */ "./src/Domain/Square/Square.ts");
/* harmony import */ var _Hooks_useClickHoverWander__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Hooks/useClickHoverWander */ "./src/View/Hooks/useClickHoverWander.ts");
/* harmony import */ var _UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/CavnasDrawer/CanvasDrawer */ "./src/View/UI/CavnasDrawer/CanvasDrawer.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/PageComponents/Menu/PerspectivePreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const PerspectivePreview = ({
  width,
  height
}) => {
  const squares = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const squareDrawer = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const [focusPoint, mouseProps] = Object(_Hooks_useClickHoverWander__WEBPACK_IMPORTED_MODULE_5__["default"])(width, height);

  const initializeCanvas = ctx => {
    const SQUARE_WIDTH = width / 4; // Create squares

    squares.current = [new _Services_PerspectiveSquare_PerspectiveSquare_service__WEBPACK_IMPORTED_MODULE_1__["default"](new _Domain_Square_Square__WEBPACK_IMPORTED_MODULE_4__["default"](SQUARE_WIDTH, new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"]((width - SQUARE_WIDTH) / 2, (height + SQUARE_WIDTH) / 4)), 50), new _Services_PerspectiveSquare_PerspectiveSquare_service__WEBPACK_IMPORTED_MODULE_1__["default"](new _Domain_Square_Square__WEBPACK_IMPORTED_MODULE_4__["default"](SQUARE_WIDTH, new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"]((width - SQUARE_WIDTH) / 2, 3 * (height + SQUARE_WIDTH) / 4)), 50)]; // Create drawer

    squareDrawer.current = new _Services_PerspectiveSquare_Drawers_Original_service__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, {
      mapper: v => new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](v.x, height - v.y),
      lineColor: "#04D9C4",
      includeDashes: false
    });
  };

  const artist = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => ctx => {
    if (!squareDrawer.current || !squares.current) {
      return null;
    }

    ctx.fillStyle = "#0D0D0D";
    ctx.fillRect(0, 0, width, height);
    squareDrawer.current.draw(squares.current[0].getSquares(new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](focusPoint.x, height - focusPoint.y)), focusPoint);
    squareDrawer.current.draw(squares.current[1].getSquares(new _Domain_Vector_Vector2d__WEBPACK_IMPORTED_MODULE_3__["default"](focusPoint.x, height - focusPoint.y)), focusPoint);
  }, [focusPoint, height, width]);
  return __jsx(_UI_CavnasDrawer_CanvasDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    width: width,
    height: height,
    initializeCanvas: initializeCanvas,
    artist: artist
  }, mouseProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PerspectivePreview);

/***/ }),

/***/ "./src/View/Styles/TextBox.scss":
/*!**************************************!*\
  !*** ./src/View/Styles/TextBox.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/View/Styles/global.scss":
/*!*************************************!*\
  !*** ./src/View/Styles/global.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/View/UI/Canvas.tsx":
/*!********************************!*\
  !*** ./src/View/UI/Canvas.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_useSafeWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hooks/useSafeWindow */ "./src/View/Hooks/useSafeWindow.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/UI/Canvas.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * A wrapper around the canvas element which prevents the canvas from
 * unmounting unless the width or height changes and provides a method
 * to get a rendering context.
 * @param {*} props
 * @param {*} ref
 */
const Canvas = (_ref) => {
  let {
    width,
    height,
    getContext
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["width", "height", "getContext"]);

  const canvasRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const [window] = Object(_Hooks_useSafeWindow__WEBPACK_IMPORTED_MODULE_1__["default"])();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const context = canvasRef.current && canvasRef.current.getContext("2d");

    if (context) {
      getContext(context);
    }
  }, [getContext, window]);
  return __jsx("canvas", _extends({
    ref: canvasRef,
    width: width,
    height: height
  }, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }));
}; // @ts-ignore


/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](Canvas));

/***/ }),

/***/ "./src/View/UI/CavnasDrawer/CanvasDrawer.tsx":
/*!***************************************************!*\
  !*** ./src/View/UI/CavnasDrawer/CanvasDrawer.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Canvas */ "./src/View/UI/Canvas.tsx");
/* harmony import */ var _Hooks_useSafeWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Hooks/useSafeWindow */ "./src/View/Hooks/useSafeWindow.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/UI/CavnasDrawer/CanvasDrawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CanvasDrawer = (_ref) => {
  let {
    width,
    height,
    initializeCanvas,
    artist,
    fps
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["width", "height", "initializeCanvas", "artist", "fps"]);

  const context = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const requestedFrame = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  const getContext = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](c => context.current = c);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const draw = context => {
      let then = Date.now();

      const renderFrame = () => {
        requestedFrame.current = requestAnimationFrame(() => {
          renderFrame();

          if (!fps) {
            artist(context);
          } else {
            const now = Date.now();
            const delta = now - then;
            const interval = 1000 / fps;

            if (delta > interval) {
              then = now - delta % interval;
              artist(context);
            }
          }
        });
      };

      renderFrame();
    };

    if (context.current) {
      if (initializeCanvas) {
        initializeCanvas(context.current);
      }

      draw(context.current);
    }

    return () => {
      requestedFrame.current && cancelAnimationFrame(requestedFrame.current);
    };
  });
  const flash = Object(_Hooks_useSafeWindow__WEBPACK_IMPORTED_MODULE_2__["default"])()[1];

  if (flash) {
    return flash;
  }

  return __jsx(_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    getContext: getContext.current,
    width: width,
    height: height
  }, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](CanvasDrawer));

/***/ }),

/***/ "./src/View/UI/FlashScreen.ts":
/*!************************************!*\
  !*** ./src/View/UI/FlashScreen.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Component to display for a fraction of a second
 * while the page is getting ready.
 */

const FlashScreen = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background-color: white;
  position: fixed;
  width: 100%;
  height: 100%;
`;
/* harmony default export */ __webpack_exports__["default"] = (FlashScreen);

/***/ }),

/***/ "./src/View/Utility/seo.tsx":
/*!**********************************!*\
  !*** ./src/View/Utility/seo.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const SEO = props => {
  console.log(props);
  return null; // return (
  //   <Helmet
  //     htmlAttributes={{
  //       lang,
  //     }}
  //     title={title}
  //     titleTemplate={`%s | ${site.siteMetadata.title}`}
  //     meta={[
  //       {
  //         name: `description`,
  //         content: metaDescription,
  //       },
  //       {
  //         property: `og:title`,
  //         content: title,
  //       },
  //       {
  //         property: `og:description`,
  //         content: metaDescription,
  //       },
  //       {
  //         property: `og:type`,
  //         content: `website`,
  //       },
  //       {
  //         name: `twitter:card`,
  //         content: `summary`,
  //       },
  //       {
  //         name: `twitter:creator`,
  //         content: site.siteMetadata.author,
  //       },
  //       {
  //         name: `twitter:title`,
  //         content: title,
  //       },
  //       {
  //         name: `twitter:description`,
  //         content: metaDescription,
  //       },
  //     ]
  //       .concat(
  //         keywords.length > 0
  //           ? {
  //               name: `keywords`,
  //               content: keywords.join(`, `),
  //             }
  //           : []
  //       )
  //       .concat(meta)}
  //   />
  // );
};

/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _View_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../View/Layout/Layout */ "./src/View/Layout/Layout.tsx");
/* harmony import */ var _View_Utility_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../View/Utility/seo */ "./src/View/Utility/seo.tsx");
/* harmony import */ var _View_PageComponents_Homepage_Lorenz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../View/PageComponents/Homepage/Lorenz */ "./src/View/PageComponents/Homepage/Lorenz.tsx");
/* harmony import */ var _View_PageComponents_Menu_HallwayPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../View/PageComponents/Menu/HallwayPreview */ "./src/View/PageComponents/Menu/HallwayPreview.tsx");
/* harmony import */ var _View_PageComponents_Menu_PerspectivePreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../View/PageComponents/Menu/PerspectivePreview */ "./src/View/PageComponents/Menu/PerspectivePreview.tsx");
/* harmony import */ var _View_PageComponents_Menu_MetaSpherePreview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../View/PageComponents/Menu/MetaSpherePreview */ "./src/View/PageComponents/Menu/MetaSpherePreview.tsx");
/* harmony import */ var _View_PageComponents_Menu_JustSomeThoughtsPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../View/PageComponents/Menu/JustSomeThoughtsPreview */ "./src/View/PageComponents/Menu/JustSomeThoughtsPreview.tsx");
/* harmony import */ var _View_PageComponents_Menu_CardMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../View/PageComponents/Menu/CardMenu */ "./src/View/PageComponents/Menu/CardMenu/index.tsx");
var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];










const Mute = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.em`
  font-weight: 200;
`;
const cards = [{
  background: ({
    width,
    height
  }) => __jsx(_View_PageComponents_Homepage_Lorenz__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: width,
    height: height,
    colorful: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }),
  title: "Again",
  description: "Just to impress you",
  link: "/again"
}, {
  background: _View_PageComponents_Menu_PerspectivePreview__WEBPACK_IMPORTED_MODULE_6__["default"],
  title: "Perspective",
  description: "I spent two fucking days making a square move",
  link: "/perspective"
}, {
  background: _View_PageComponents_Menu_HallwayPreview__WEBPACK_IMPORTED_MODULE_5__["default"],
  title: "Hallway",
  description: __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(Mute, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "(Almost)"), " Shamelessly ", __jsx(Mute, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "(basically)"), " stolen", " ", __jsx(Mute, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "(from a tutorial)")),
  link: "/hallway"
}, {
  background: _View_PageComponents_Menu_MetaSpherePreview__WEBPACK_IMPORTED_MODULE_7__["default"],
  title: "Meta sphere",
  description: "Just go have some fun, kid",
  link: "/metaSphere"
}, {
  background: _View_PageComponents_Menu_JustSomeThoughtsPreview__WEBPACK_IMPORTED_MODULE_8__["default"],
  title: "Just Some Thought",
  description: "I just, well, here you go",
  link: "/justSomeThought"
}]; // I can't find the typescript type for props passed into pages to save my life.

const Menu = props => __jsx(_View_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx(_View_Utility_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}), __jsx(_View_PageComponents_Menu_CardMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
  routeProps: props,
  cards: cards,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](Menu, () => false));

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielkrajnak/Documents/Code/dankLand/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "color-interpolate":
/*!************************************!*\
  !*** external "color-interpolate" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color-interpolate");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebound":
/*!**************************!*\
  !*** external "rebound" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebound");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
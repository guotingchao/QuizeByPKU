(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM));
})(this, (function (C$2, require$$0) { 'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var C__namespace = /*#__PURE__*/_interopNamespaceDefault(C$2);

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) {
        _defineProperty$1(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive$1(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey$1(t) {
    var i = _toPrimitive$1(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */


  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined
  };
  var IconContext = C$2.createContext && /*#__PURE__*/C$2.createContext(DefaultContext);

  var _excluded = ["attr", "size", "title"];
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function Tree2Element(tree) {
    return tree && tree.map((node, i) => /*#__PURE__*/C$2.createElement(node.tag, _objectSpread({
      key: i
    }, node.attr), Tree2Element(node.child)));
  }
  function GenIcon(data) {
    // eslint-disable-next-line react/display-name
    return props => /*#__PURE__*/C$2.createElement(IconBase, _extends({
      attr: _objectSpread({}, data.attr)
    }, props), Tree2Element(data.child));
  }
  function IconBase(props) {
    var elem = conf => {
      var {
          attr,
          size,
          title
        } = props,
        svgProps = _objectWithoutProperties(props, _excluded);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className) className = conf.className;
      if (props.className) className = (className ? className + " " : "") + props.className;
      return /*#__PURE__*/C$2.createElement("svg", _extends({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className: className,
        style: _objectSpread(_objectSpread({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && /*#__PURE__*/C$2.createElement("title", null, title), props.children);
    };
    return IconContext !== undefined ? /*#__PURE__*/C$2.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
  }

  // THIS FILE IS AUTO GENERATED
  function VscLoading (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 16 16","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"},"child":[]}]})(props);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var jsxRuntime = {exports: {}};

  var reactJsxRuntime_production_min = {};

  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$8=C$2,k$2=Symbol.for("react.element"),l$7=Symbol.for("react.fragment"),m$5=Object.prototype.hasOwnProperty,n$5=f$8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$5={key:!0,ref:!0,__self:!0,__source:!0};
  function q$3(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$5.call(a,b)&&!p$5.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k$2,type:c,key:e,ref:h,props:d,_owner:n$5.current}}reactJsxRuntime_production_min.Fragment=l$7;reactJsxRuntime_production_min.jsx=q$3;reactJsxRuntime_production_min.jsxs=q$3;

  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }

  var jsxRuntimeExports = jsxRuntime.exports;

  var Spin = function Spin(_ref) {
    var _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? true : _ref$isLoading,
      tips = _ref.tips;
    var spinAnimationClasses = isLoading ? "animate-spin" : "animate-none";
    var pulseAnimationClasses = isLoading ? "animate-pulse" : "animate-none";
    return /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
      className: "flex flex-row justify-center items-center space-x-2",
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(VscLoading, {
        className: spinAnimationClasses
      }), tips && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        className: pulseAnimationClasses,
        children: tips
      })]
    });
  };

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  (function (module) {
  	/* global define */

  	(function () {

  		var hasOwn = {}.hasOwnProperty;

  		function classNames () {
  			var classes = '';

  			for (var i = 0; i < arguments.length; i++) {
  				var arg = arguments[i];
  				if (arg) {
  					classes = appendClass(classes, parseValue(arg));
  				}
  			}

  			return classes;
  		}

  		function parseValue (arg) {
  			if (typeof arg === 'string' || typeof arg === 'number') {
  				return arg;
  			}

  			if (typeof arg !== 'object') {
  				return '';
  			}

  			if (Array.isArray(arg)) {
  				return classNames.apply(null, arg);
  			}

  			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  				return arg.toString();
  			}

  			var classes = '';

  			for (var key in arg) {
  				if (hasOwn.call(arg, key) && arg[key]) {
  					classes = appendClass(classes, key);
  				}
  			}

  			return classes;
  		}

  		function appendClass (value, newClass) {
  			if (!newClass) {
  				return value;
  			}
  		
  			if (value) {
  				return value + ' ' + newClass;
  			}
  		
  			return value + newClass;
  		}

  		if (module.exports) {
  			classNames.default = classNames;
  			module.exports = classNames;
  		} else {
  			window.classNames = classNames;
  		}
  	}()); 
  } (classnames));

  var classnamesExports = classnames.exports;
  var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  var ref = {};

  var interopRequireDefault = {exports: {}};

  (function (module) {
  	function _interopRequireDefault(obj) {
  	  return obj && obj.__esModule ? obj : {
  	    "default": obj
  	  };
  	}
  	module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (interopRequireDefault));

  var interopRequireDefaultExports = interopRequireDefault.exports;

  var _typeof = {exports: {}};

  (function (module) {
  	function _typeof(o) {
  	  "@babel/helpers - typeof";

  	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
  	    return typeof o;
  	  } : function (o) {
  	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
  	}
  	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (_typeof));

  var _typeofExports = _typeof.exports;

  var reactIs = {exports: {}};

  var reactIs_production_min = {};

  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b$5=Symbol.for("react.element"),c$5=Symbol.for("react.portal"),d$7=Symbol.for("react.fragment"),e$1=Symbol.for("react.strict_mode"),f$7=Symbol.for("react.profiler"),g$1=Symbol.for("react.provider"),h$4=Symbol.for("react.context"),k$1=Symbol.for("react.server_context"),l$6=Symbol.for("react.forward_ref"),m$4=Symbol.for("react.suspense"),n$4=Symbol.for("react.suspense_list"),p$4=Symbol.for("react.memo"),q$2=Symbol.for("react.lazy"),t$7=Symbol.for("react.offscreen"),u$5;u$5=Symbol.for("react.module.reference");
  function v$2(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b$5:switch(a=a.type,a){case d$7:case f$7:case e$1:case m$4:case n$4:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case h$4:case l$6:case q$2:case p$4:case g$1:return a;default:return r}}case c$5:return r}}}reactIs_production_min.ContextConsumer=h$4;reactIs_production_min.ContextProvider=g$1;reactIs_production_min.Element=b$5;reactIs_production_min.ForwardRef=l$6;reactIs_production_min.Fragment=d$7;reactIs_production_min.Lazy=q$2;reactIs_production_min.Memo=p$4;reactIs_production_min.Portal=c$5;reactIs_production_min.Profiler=f$7;reactIs_production_min.StrictMode=e$1;reactIs_production_min.Suspense=m$4;
  reactIs_production_min.SuspenseList=n$4;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v$2(a)===h$4};reactIs_production_min.isContextProvider=function(a){return v$2(a)===g$1};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$5};reactIs_production_min.isForwardRef=function(a){return v$2(a)===l$6};reactIs_production_min.isFragment=function(a){return v$2(a)===d$7};reactIs_production_min.isLazy=function(a){return v$2(a)===q$2};reactIs_production_min.isMemo=function(a){return v$2(a)===p$4};
  reactIs_production_min.isPortal=function(a){return v$2(a)===c$5};reactIs_production_min.isProfiler=function(a){return v$2(a)===f$7};reactIs_production_min.isStrictMode=function(a){return v$2(a)===e$1};reactIs_production_min.isSuspense=function(a){return v$2(a)===m$4};reactIs_production_min.isSuspenseList=function(a){return v$2(a)===n$4};
  reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d$7||a===f$7||a===e$1||a===m$4||a===n$4||a===t$7||"object"===typeof a&&null!==a&&(a.$$typeof===q$2||a.$$typeof===p$4||a.$$typeof===g$1||a.$$typeof===h$4||a.$$typeof===l$6||a.$$typeof===u$5||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v$2;

  {
    reactIs.exports = reactIs_production_min;
  }

  var reactIsExports = reactIs.exports;

  var useMemo$1 = {};

  var interopRequireWildcard = {exports: {}};

  (function (module) {
  	var _typeof = _typeofExports["default"];
  	function _getRequireWildcardCache(e) {
  	  if ("function" != typeof WeakMap) return null;
  	  var r = new WeakMap(),
  	    t = new WeakMap();
  	  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
  	    return e ? t : r;
  	  })(e);
  	}
  	function _interopRequireWildcard(e, r) {
  	  if (!r && e && e.__esModule) return e;
  	  if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
  	    "default": e
  	  };
  	  var t = _getRequireWildcardCache(r);
  	  if (t && t.has(e)) return t.get(e);
  	  var n = {
  	      __proto__: null
  	    },
  	    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  	  for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
  	    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
  	    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  	  }
  	  return n["default"] = e, t && t.set(e, n), n;
  	}
  	module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (interopRequireWildcard));

  var interopRequireWildcardExports = interopRequireWildcard.exports;

  var _interopRequireWildcard = interopRequireWildcardExports.default;
  Object.defineProperty(useMemo$1, "__esModule", {
    value: true
  });
  useMemo$1.default = useMemo;
  var React = _interopRequireWildcard(C$2);
  function useMemo(getValue, condition, shouldUpdate) {
    var cacheRef = React.useRef({});
    if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
      cacheRef.current.value = getValue();
      cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
  }

  var _interopRequireDefault = interopRequireDefaultExports.default;
  Object.defineProperty(ref, "__esModule", {
    value: true
  });
  var composeRef_1 = ref.composeRef = composeRef;
  ref.fillRef = fillRef;
  ref.supportNodeRef = supportNodeRef;
  ref.supportRef = supportRef;
  ref.useComposeRef = useComposeRef;
  var _typeof2 = _interopRequireDefault(_typeofExports);
  var _react = C$2;
  var _reactIs = reactIsExports;
  var _useMemo = _interopRequireDefault(useMemo$1);
  /* eslint-disable no-param-reassign */

  function fillRef(ref, node) {
    if (typeof ref === 'function') {
      ref(node);
    } else if ((0, _typeof2.default)(ref) === 'object' && ref && 'current' in ref) {
      ref.current = node;
    }
  }

  /**
   * Merge refs into one ref function to support ref passing.
   */
  function composeRef() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }
    var refList = refs.filter(function (ref) {
      return ref;
    });
    if (refList.length <= 1) {
      return refList[0];
    }
    return function (node) {
      refs.forEach(function (ref) {
        fillRef(ref, node);
      });
    };
  }
  function useComposeRef() {
    for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      refs[_key2] = arguments[_key2];
    }
    return (0, _useMemo.default)(function () {
      return composeRef.apply(void 0, refs);
    }, refs, function (prev, next) {
      return prev.length !== next.length || prev.every(function (ref, i) {
        return ref !== next[i];
      });
    });
  }
  function supportRef(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    var type = (0, _reactIs.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

    // Function component node
    if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== _reactIs.ForwardRef) {
      return false;
    }

    // Class component
    if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== _reactIs.ForwardRef) {
      return false;
    }
    return true;
  }
  function supportNodeRef(node) {
    if (! /*#__PURE__*/(0, _react.isValidElement)(node)) {
      return false;
    }
    if ((0, _reactIs.isFragment)(node)) {
      return false;
    }
    return supportRef(node);
  }

  var Button = /*#__PURE__*/C$2.forwardRef(function (props, ref) {
    var disabled = props.disabled,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? "button" : _props$htmlType,
      _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className,
      children = props.children,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$size = props.size,
      size = _props$size === void 0 ? "medium" : _props$size,
      rest = __rest(props, ["disabled", "htmlType", "className", "children", "loading", "size"]);
    var classes = classNames({
      small: size === "small",
      medium: size === "medium",
      large: size === "large",
      disabled: disabled
    }, className);
    var innerRef = /*#__PURE__*/C$2.createRef();
    var buttonRef = composeRef_1(ref, innerRef);
    //MARK 进行loading状态的处理 和 其他type shape等不同的更加丰富变化处理
    var additionalRender = C$2.useMemo(function () {
      if (loading) {
        return /*#__PURE__*/jsxRuntimeExports.jsx(Spin, {
          isLoading: true,
          tips: "\u52A0\u8F7D\u4E2D"
        });
      }
      return children;
    }, [loading, children]);
    return /*#__PURE__*/jsxRuntimeExports.jsx("button", _objectSpread2(_objectSpread2({}, rest), {}, {
      ref: buttonRef,
      type: htmlType,
      className: classes,
      disabled: disabled,
      children: additionalRender
    }));
  });

  var i$4=Object.defineProperty;var d$6=(t,e,n)=>e in t?i$4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r$3=(t,e,n)=>(d$6(t,typeof e!="symbol"?e+"":e,n),n);let o$5 = class o{constructor(){r$3(this,"current",this.detect());r$3(this,"handoffState","pending");r$3(this,"currentId",0);}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e);}reset(){this.set(this.detect());}nextId(){return ++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete");}get isHandoffComplete(){return this.handoffState==="complete"}};let s$9=new o$5;

  let l$5=(e,f)=>{s$9.isServer?C$2.useEffect(e,f):C$2.useLayoutEffect(e,f);};

  function s$8(e){let r=C$2.useRef(e);return l$5(()=>{r.current=e;},[e]),r}

  let o$4=function(t){let e=s$8(t);return C$2.useCallback((...r)=>e.current(...r),[e])};

  function t$6(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

  function o$3(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return t$6(()=>{t.current&&e[0]();}),r.add(()=>{t.current=!1;})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a});})},group(e){let t=o$3();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s();}},dispose(){for(let e of n.splice(0))e();}};return r}

  function p$3(){let[e]=C$2.useState(o$3);return C$2.useEffect(()=>()=>e.dispose(),[e]),e}

  function s$7(){let r=typeof document=="undefined";return "useSyncExternalStore"in C__namespace?(o=>o.useSyncExternalStore)(C__namespace)(()=>()=>{},()=>!1,()=>!r):!1}function l$4(){let r=s$7(),[e,n]=C__namespace.useState(s$9.isHandoffComplete);return e&&s$9.isHandoffComplete===!1&&n(!1),C__namespace.useEffect(()=>{e!==!0&&n(!0);},[e]),C__namespace.useEffect(()=>s$9.handoff(),[]),r?!1:e}

  var o$2;let I$5=(o$2=C$2.useId)!=null?o$2:function(){let n=l$4(),[e,u]=C$2.useState(n?()=>s$9.nextId():null);return l$5(()=>{e===null&&u(s$9.nextId());},[e]),e!=null?""+e:void 0};

  function u$4(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$4),t}

  function o$1(r){return s$9.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

  let c$4=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M$2=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M$2||{}),N$2=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N$2||{}),F$2=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F$2||{});function f$6(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$4)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var T$2=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T$2||{});function h$3(e,r=0){var t;return e===((t=o$1(e))==null?void 0:t.body)?!1:u$4(r,{[0](){return e.matches(c$4)},[1](){let l=e;for(;l!==null;){if(l.matches(c$4))return !0;l=l.parentElement;}return !1}})}var w$1=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w$1||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="");},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="");},!0));function y$3(e){e==null||e.focus({preventScroll:!0});}let S$5=["textarea","input"].join(",");function H(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,S$5))!=null?t:!1}function I$4(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O$1(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I$4(e):e:f$6(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else {if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E;}while(u!==i.activeElement);return r&6&&H(u)&&u.select(),2}

  function t$5(){return /iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i$3(){return /Android/gi.test(window.navigator.userAgent)}function n$3(){return t$5()||i$3()}

  function d$5(e,r,n){let o=s$8(r);C$2.useEffect(()=>{function t(u){o.current(u);}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n]);}

  function s$6(e,r,n){let o=s$8(r);C$2.useEffect(()=>{function t(i){o.current(i);}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n]);}

  function y$2(s,m,a=!0){let i=C$2.useRef(!1);C$2.useEffect(()=>{requestAnimationFrame(()=>{i.current=a;});},[a]);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:u.current;if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return !h$3(t,T$2.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let o=C$2.useRef(null);d$5("pointerdown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},!0),d$5("mousedown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},!0),d$5("click",e=>{n$3()||o.current&&(c(e,()=>o.current),o.current=null);},!0),d$5("touchend",e=>c(e,()=>e.target instanceof HTMLElement?e.target:null),!0),s$6("blur",e=>c(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0);}

  function n$2(...e){return C$2.useMemo(()=>o$1(...e),[...e])}

  function i$2(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return "button"}function T$1(t,e){let[n,u]=C$2.useState(()=>i$2(t));return l$5(()=>{u(i$2(t));},[t.type,t.as]),l$5(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button");},[n,e]),n}

  let u$3=Symbol();function T(t,n=!0){return Object.assign(t,{[u$3]:n})}function y$1(...t){let n=C$2.useRef(t);C$2.useEffect(()=>{n.current=t;},[t]);let c=o$4(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u$3]))?void 0:c}

  function m$3(u,t){let e=C$2.useRef([]),r=o$4(u);C$2.useEffect(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t]);}

  function t$4(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}

  var O=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(O||{}),v$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(v$1||{});function C$1({ourProps:r,theirProps:t,slot:e,defaultTag:n,features:o,visible:a=!0,name:f,mergeRefs:l}){l=l!=null?l:k;let s=R(t,r);if(a)return m$2(s,e,n,f,l);let y=o!=null?o:0;if(y&2){let{static:u=!1,...d}=s;if(u)return m$2(d,e,n,f,l)}if(y&1){let{unmount:u=!0,...d}=s;return u$4(u?0:1,{[0](){return null},[1](){return m$2({...d,hidden:!0,style:{display:"none"}},e,n,f,l)}})}return m$2(s,e,n,f,l)}function m$2(r,t={},e,n,o){let{as:a=e,children:f,refName:l="ref",...s}=F$1(r,["unmount","static"]),y=r.ref!==void 0?{[l]:r.ref}:{},u=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let i=!1,c=[];for(let[T,p]of Object.entries(t))typeof p=="boolean"&&(i=!0),p===!0&&c.push(T);i&&(d["data-headlessui-state"]=c.join(" "));}if(a===C$2.Fragment&&Object.keys(x$1(s)).length>0){if(!C$2.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let i=u.props,c=typeof(i==null?void 0:i.className)=="function"?(...p)=>t$4(i==null?void 0:i.className(...p),s.className):t$4(i==null?void 0:i.className,s.className),T=c?{className:c}:{};return C$2.cloneElement(u,Object.assign({},R(u.props,x$1(F$1(s,["ref"]))),d,y,{ref:o(u.ref,y.ref)},T))}return C$2.createElement(a,Object.assign({},F$1(s,["ref"]),a!==C$2.Fragment&&y,a!==C$2.Fragment&&d),u)}function k(...r){return r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t);}}function R(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let a in o)a.startsWith("on")&&typeof o[a]=="function"?((e[a])!=null||(e[a]=[]),e[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](a,...f){let l=e[o];for(let s of l){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;s(a,...f);}}});return t}function U$2(r){var t;return Object.assign(C$2.forwardRef(r),{displayName:(t=r.displayName)!=null?t:r.name})}function x$1(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function F$1(r,t=[]){let e=Object.assign({},r);for(let n of t)n in e&&delete e[n];return e}

  let p$2="div";var s$5=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s$5||{});function l$3(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":(t&2)===2?!0:(n=e["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return C$1({ourProps:r,theirProps:e,slot:{},defaultTag:p$2,name:"Hidden"})}let f$5=U$2(l$3);

  let n$1=C$2.createContext(null);n$1.displayName="OpenClosedContext";var d$4=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d$4||{});function u$2(){return C$2.useContext(n$1)}function s$4({value:o,children:r}){return C$2.createElement(n$1.Provider,{value:o},r)}

  function t$3(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e));}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e());}

  let t$2=[];t$3(()=>{function e(n){n.target instanceof HTMLElement&&n.target!==document.body&&t$2[0]!==n.target&&(t$2.unshift(n.target),t$2=t$2.filter(r=>r!=null&&r.isConnected),t$2.splice(10));}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0});});

  function r$2(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i$1(l)?!1:t}function i$1(n){if(!n)return !1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return !1;e=e.previousElementSibling;}return !0}

  var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});

  function E(n,e,a,t){let i=s$8(a);C$2.useEffect(()=>{n=n!=null?n:window;function r(o){i.current(o);}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t]);}

  function f$4(){let e=C$2.useRef(!1);return l$5(()=>(e.current=!0,()=>{e.current=!1;}),[]),e}

  function c$3(t){let r=o$4(t),e=C$2.useRef(!1);C$2.useEffect(()=>(e.current=!1,()=>{e.current=!0,t$6(()=>{e.current&&r();});}),[r]);}

  var s$3=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s$3||{});function n(){let e=C$2.useRef(0);return s$6("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0);},!0),e}

  function P(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let n=new Set;for(let e of t.current)e.current instanceof HTMLElement&&n.add(e.current);return n}let X$1="div";var _$1=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(_$1||{});function z(t,n$1){let e=C$2.useRef(null),o=y$1(e,n$1),{initialFocus:l,containers:c,features:r=30,...s}=t;l$4()||(r=1);let i=n$2(e);Y({ownerDocument:i},Boolean(r&16));let u=Z({ownerDocument:i,container:e,initialFocus:l},Boolean(r&2));$$1({ownerDocument:i,container:e,containers:c,previousActiveElement:u},Boolean(r&8));let y=n(),R=o$4(a=>{let m=e.current;if(!m)return;(B=>B())(()=>{u$4(y.current,{[s$3.Forwards]:()=>{O$1(m,M$2.First,{skipElements:[a.relatedTarget]});},[s$3.Backwards]:()=>{O$1(m,M$2.Last,{skipElements:[a.relatedTarget]});}});});}),h=p$3(),H=C$2.useRef(!1),j={ref:o,onKeyDown(a){a.key=="Tab"&&(H.current=!0,h.requestAnimationFrame(()=>{H.current=!1;}));},onBlur(a){let m=P(c);e.current instanceof HTMLElement&&m.add(e.current);let T=a.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(S$4(m,T)||(H.current?O$1(e.current,u$4(y.current,{[s$3.Forwards]:()=>M$2.Next,[s$3.Backwards]:()=>M$2.Previous})|M$2.WrapAround,{relativeTo:a.target}):a.target instanceof HTMLElement&&y$3(a.target)));}};return C$2.createElement(C$2.Fragment,null,Boolean(r&4)&&C$2.createElement(f$5,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:s$5.Focusable}),C$1({ourProps:j,theirProps:s,defaultTag:X$1,name:"FocusTrap"}),Boolean(r&4)&&C$2.createElement(f$5,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:s$5.Focusable}))}let D$2=U$2(z),de$1=Object.assign(D$2,{features:_$1});function Q(t=!0){let n=C$2.useRef(t$2.slice());return m$3(([e],[o])=>{o===!0&&e===!1&&t$6(()=>{n.current.splice(0);}),o===!1&&e===!0&&(n.current=t$2.slice());},[t,t$2,n]),o$4(()=>{var e;return (e=n.current.find(o=>o!=null&&o.isConnected))!=null?e:null})}function Y({ownerDocument:t},n){let e=Q(n);m$3(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&y$3(e());},[n]),c$3(()=>{n&&y$3(e());});}function Z({ownerDocument:t,container:n,initialFocus:e},o){let l=C$2.useRef(null),c=f$4();return m$3(()=>{if(!o)return;let r=n.current;r&&t$6(()=>{if(!c.current)return;let s=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===s){l.current=s;return}}else if(r.contains(s)){l.current=s;return}e!=null&&e.current?y$3(e.current):O$1(r,M$2.First)===N$2.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=t==null?void 0:t.activeElement;});},[o]),l}function $$1({ownerDocument:t,container:n,containers:e,previousActiveElement:o},l){let c=f$4();E(t==null?void 0:t.defaultView,"focus",r=>{if(!l||!c.current)return;let s=P(e);n.current instanceof HTMLElement&&s.add(n.current);let i=o.current;if(!i)return;let u=r.target;u&&u instanceof HTMLElement?S$4(s,u)?(o.current=u,y$3(u)):(r.preventDefault(),r.stopPropagation(),y$3(i)):y$3(o.current);},!0);}function S$4(t,n){for(let e of t)if(e.contains(n))return !0;return !1}

  let e=C$2.createContext(!1);function a$5(){return C$2.useContext(e)}function l$2(o){return C$2.createElement(e.Provider,{value:o.force},o.children)}

  function F(p){let n=a$5(),l=C$2.useContext(_),e=n$2(p),[a,o]=C$2.useState(()=>{if(!n&&l!==null||s$9.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return C$2.useEffect(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a));},[a,e]),C$2.useEffect(()=>{n||l!==null&&o(l.current);},[l,o,n]),a}let U$1=C$2.Fragment;function N$1(p,n){let l=p,e=C$2.useRef(null),a=y$1(T(u=>{e.current=u;}),n),o=n$2(e),t=F(e),[r]=C$2.useState(()=>{var u;return s$9.isServer?null:(u=o==null?void 0:o.createElement("div"))!=null?u:null}),i=C$2.useContext(f$3),v=l$4();return l$5(()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r));},[t,r]),l$5(()=>{if(r&&i)return i.register(r)},[i,r]),c$3(()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((u=t.parentElement)==null||u.removeChild(t)));}),v?!t||!r?null:require$$0.createPortal(C$1({ourProps:{ref:a},theirProps:l,defaultTag:U$1,name:"Portal"}),r):null}let S$3=C$2.Fragment,_=C$2.createContext(null);function j(p,n){let{target:l,...e}=p,o={ref:y$1(n)};return C$2.createElement(_.Provider,{value:l},C$1({ourProps:o,theirProps:e,defaultTag:S$3,name:"Popover.Group"}))}let f$3=C$2.createContext(null);function ee(){let p=C$2.useContext(f$3),n=C$2.useRef([]),l=o$4(o=>(n.current.push(o),p&&p.register(o),()=>e(o))),e=o$4(o=>{let t=n.current.indexOf(o);t!==-1&&n.current.splice(t,1),p&&p.unregister(o);}),a=C$2.useMemo(()=>({register:l,unregister:e,portals:n}),[l,e,n]);return [n,C$2.useMemo(()=>function({children:t}){return C$2.createElement(f$3.Provider,{value:a},t)},[a])]}let D$1=U$2(N$1),I$3=U$2(j),te=Object.assign(D$1,{Group:I$3});

  function i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const d$3=typeof Object.is=="function"?Object.is:i,{useState:u$1,useEffect:h$2,useLayoutEffect:f$2,useDebugValue:p$1}=C__namespace;function y(e,t,c){const a=t(),[{inst:n},o]=u$1({inst:{value:a,getSnapshot:t}});return f$2(()=>{n.value=a,n.getSnapshot=t,r$1(n)&&o({inst:n});},[e,a,t]),h$2(()=>(r$1(n)&&o({inst:n}),e(()=>{r$1(n)&&o({inst:n});})),[e]),p$1(a),a}function r$1(e){const t=e.getSnapshot,c=e.value;try{const a=t();return !d$3(c,a)}catch{return !0}}

  function t$1(r,e,n){return e()}

  const r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",s$2=!r,c$2=s$2?t$1:y,a$4="useSyncExternalStore"in C__namespace?(n=>n.useSyncExternalStore)(C__namespace):c$2;

  function S$2(t){return a$4(t.subscribe,t.getSnapshot,t.getSnapshot)}

  function a$3(o,r){let t=o(),n=new Set;return {getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()));}}}

  function c$1(){let o;return {before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth;},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`);}}}

  function d$2(){return t$5()?{before({doc:r,d:l,meta:c}){function o(a){return c.containers.flatMap(n=>n()).some(n=>n.contains(a))}l.microTask(()=>{var s;if(window.getComputedStyle(r.documentElement).scrollBehavior!=="auto"){let t=o$3();t.style(r.documentElement,"scrollBehavior","auto"),l.add(()=>l.microTask(()=>t.dispose()));}let a=(s=window.scrollY)!=null?s:window.pageYOffset,n=null;l.addEventListener(r,"click",t=>{if(t.target instanceof HTMLElement)try{let e=t.target.closest("a");if(!e)return;let{hash:f}=new URL(e.href),i=r.querySelector(f);i&&!o(i)&&(n=i);}catch{}},!0),l.addEventListener(r,"touchstart",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&o(e.parentElement);)e=e.parentElement;l.style(e,"overscrollBehavior","contain");}else l.style(t.target,"touchAction","none");}),l.addEventListener(r,"touchmove",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&e.dataset.headlessuiPortal!==""&&!(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth);)e=e.parentElement;e.dataset.headlessuiPortal===""&&t.preventDefault();}else t.preventDefault();},{passive:!1}),l.add(()=>{var e;let t=(e=window.scrollY)!=null?e:window.pageYOffset;a!==t&&window.scrollTo(0,a),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null);});});}}:{}}

  function l$1(){return {before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden");}}}

  function m$1(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a$2=a$3(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:o$3(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m$1(t)},c=[d$2(),c$1(),l$1()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o));},SCROLL_ALLOW({d:e}){e.dispose();},TEARDOWN({doc:e}){this.delete(e);}});a$2.subscribe(()=>{let e=a$2.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a$2.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a$2.dispatch("TEARDOWN",t);}});

  function p(e,r,n){let f=S$2(a$2),o=e?f.get(e):void 0,i=o?o.count>0:!1;return l$5(()=>{if(!(!e||!r))return a$2.dispatch("PUSH",e,n),()=>a$2.dispatch("POP",e,n)},[r,e]),i}

  let u=new Map,t=new Map;function b$4(r,l=!0){l$5(()=>{var o;if(!l)return;let e=typeof r=="function"?r():r.current;if(!e)return;function a(){var d;if(!e)return;let i=(d=t.get(e))!=null?d:1;if(i===1?t.delete(e):t.set(e,i-1),i!==1)return;let n=u.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,u.delete(e));}let f=(o=t.get(e))!=null?o:0;return t.set(e,f+1),f!==0||(u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),a},[r,l]);}

  function N({defaultContainers:o=[],portals:r,mainTreeNodeRef:u}={}){var f;let t=C$2.useRef((f=u==null?void 0:u.current)!=null?f:null),l=n$2(t),c=o$4(()=>{var i,s,a;let n=[];for(let e of o)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(r!=null&&r.current)for(let e of r.current)n.push(e);for(let e of (i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(t.current)||e.contains((a=(s=t.current)==null?void 0:s.getRootNode())==null?void 0:a.host)||n.some(L=>e.contains(L))||n.push(e));return n});return {resolveContainers:c,contains:o$4(n=>c().some(i=>i.contains(n))),mainTreeNodeRef:t,MainTreeNode:C$2.useMemo(()=>function(){return u!=null?null:C$2.createElement(f$5,{features:s$5.Hidden,ref:t})},[t,u])}}

  let a$1=C$2.createContext(()=>{});a$1.displayName="StackContext";var s$1=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(s$1||{});function x(){return C$2.useContext(a$1)}function b$3({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=o$4((...t)=>{r==null||r(...t),l(...t);});return l$5(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n);}},[o,e,n,u]),C$2.createElement(a$1.Provider,{value:o},i)}

  let d$1=C$2.createContext(null);function f$1(){let r=C$2.useContext(d$1);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f$1),t}return r}function w(){let[r,t]=C$2.useState([]);return [r.length>0?r.join(" "):void 0,C$2.useMemo(()=>function(e){let i=o$4(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=C$2.useMemo(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return C$2.createElement(d$1.Provider,{value:n},e.children)},[t])]}let I$2="p";function S$1(r,t){let a=I$5(),{id:e=`headlessui-description-${a}`,...i}=r,n=f$1(),s=y$1(t);l$5(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return C$1({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:I$2,name:n.name||"Description"})}let h$1=U$2(S$1),G=Object.assign(h$1,{});

  var Me=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(Me||{}),we=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(we||{});let He$1={[0](t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},I$1=C$2.createContext(null);I$1.displayName="DialogContext";function b$2(t){let e=C$2.useContext(I$1);if(e===null){let r=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b$2),r}return e}function Be(t,e,r=()=>[document.body]){p(t,e,i=>{var n;return {containers:[...(n=i.containers)!=null?n:[],r]}});}function Ge(t,e){return u$4(e.type,He$1,t,e)}let Ne$1="div",Ue=O.RenderStrategy|O.Static;function We(t,e){let r=I$5(),{id:i=`headlessui-dialog-${r}`,open:n,onClose:l,initialFocus:s,role:a="dialog",__demoMode:T=!1,...m}=t,[M,f]=C$2.useState(0),U=C$2.useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(U.current||(U.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let E$1=u$2();n===void 0&&E$1!==null&&(n=(E$1&d$4.Open)===d$4.Open);let D=C$2.useRef(null),ee$1=y$1(D,e),g=n$2(D),W=t.hasOwnProperty("open")||E$1!==null,$=t.hasOwnProperty("onClose");if(!W&&!$)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!W)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!$)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let p=n?0:1,[h,te$1]=C$2.useReducer(Ge,{titleId:null,descriptionId:null,panelRef:C$2.createRef()}),P=o$4(()=>l(!1)),Y=o$4(o=>te$1({type:0,id:o})),S=l$4()?T?!1:p===0:!1,x=M>1,j=C$2.useContext(I$1)!==null,[oe,re]=ee(),ne={get current(){var o;return (o=h.panelRef.current)!=null?o:D.current}},{resolveContainers:w$1,mainTreeNodeRef:L,MainTreeNode:le}=N({portals:oe,defaultContainers:[ne]}),ae=x?"parent":"leaf",J=E$1!==null?(E$1&d$4.Closing)===d$4.Closing:!1,ie=(()=>j||J?!1:S)(),se=C$2.useCallback(()=>{var o,c;return (c=Array.from((o=g==null?void 0:g.querySelectorAll("body > *"))!=null?o:[]).find(d=>d.id==="headlessui-portal-root"?!1:d.contains(L.current)&&d instanceof HTMLElement))!=null?c:null},[L]);b$4(se,ie);let pe=(()=>x?!0:S)(),de=C$2.useCallback(()=>{var o,c;return (c=Array.from((o=g==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?o:[]).find(d=>d.contains(L.current)&&d instanceof HTMLElement))!=null?c:null},[L]);b$4(de,pe);let ue=(()=>!(!S||x))();y$2(w$1,P,ue);let fe=(()=>!(x||p!==0))();E(g==null?void 0:g.defaultView,"keydown",o$1=>{fe&&(o$1.defaultPrevented||o$1.key===o.Escape&&(o$1.preventDefault(),o$1.stopPropagation(),P()));});let ge=(()=>!(J||p!==0||j))();Be(g,ge,w$1),C$2.useEffect(()=>{if(p!==0||!D.current)return;let o=new ResizeObserver(c=>{for(let d of c){let F=d.target.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&P();}});return o.observe(D.current),()=>o.disconnect()},[p,D,P]);let[Te,ce]=w(),De=C$2.useMemo(()=>[{dialogState:p,close:P,setTitleId:Y},h],[p,h,P,Y]),X=C$2.useMemo(()=>({open:p===0}),[p]),me={ref:ee$1,id:i,role:a,"aria-modal":p===0?!0:void 0,"aria-labelledby":h.titleId,"aria-describedby":Te};return C$2.createElement(b$3,{type:"Dialog",enabled:p===0,element:D,onUpdate:o$4((o,c)=>{c==="Dialog"&&u$4(o,{[s$1.Add]:()=>f(d=>d+1),[s$1.Remove]:()=>f(d=>d-1)});})},C$2.createElement(l$2,{force:!0},C$2.createElement(te,null,C$2.createElement(I$1.Provider,{value:De},C$2.createElement(te.Group,{target:D},C$2.createElement(l$2,{force:!1},C$2.createElement(ce,{slot:X,name:"Dialog.Description"},C$2.createElement(de$1,{initialFocus:s,containers:w$1,features:S?u$4(ae,{parent:de$1.features.RestoreFocus,leaf:de$1.features.All&~de$1.features.FocusLock}):de$1.features.None},C$2.createElement(re,null,C$1({ourProps:me,theirProps:m,slot:X,defaultTag:Ne$1,features:Ue,visible:p===0,name:"Dialog"}))))))))),C$2.createElement(le,null))}let $e$1="div";function Ye(t,e){let r=I$5(),{id:i=`headlessui-dialog-overlay-${r}`,...n}=t,[{dialogState:l,close:s}]=b$2("Dialog.Overlay"),a=y$1(e),T=o$4(f=>{if(f.target===f.currentTarget){if(r$2(f.currentTarget))return f.preventDefault();f.preventDefault(),f.stopPropagation(),s();}}),m=C$2.useMemo(()=>({open:l===0}),[l]);return C$1({ourProps:{ref:a,id:i,"aria-hidden":!0,onClick:T},theirProps:n,slot:m,defaultTag:$e$1,name:"Dialog.Overlay"})}let je="div";function Je(t,e){let r=I$5(),{id:i=`headlessui-dialog-backdrop-${r}`,...n}=t,[{dialogState:l},s]=b$2("Dialog.Backdrop"),a=y$1(e);C$2.useEffect(()=>{if(s.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[s.panelRef]);let T=C$2.useMemo(()=>({open:l===0}),[l]);return C$2.createElement(l$2,{force:!0},C$2.createElement(te,null,C$1({ourProps:{ref:a,id:i,"aria-hidden":!0},theirProps:n,slot:T,defaultTag:je,name:"Dialog.Backdrop"})))}let Xe="div";function Ke(t,e){let r=I$5(),{id:i=`headlessui-dialog-panel-${r}`,...n}=t,[{dialogState:l},s]=b$2("Dialog.Panel"),a=y$1(e,s.panelRef),T=C$2.useMemo(()=>({open:l===0}),[l]),m=o$4(f=>{f.stopPropagation();});return C$1({ourProps:{ref:a,id:i,onClick:m},theirProps:n,slot:T,defaultTag:Xe,name:"Dialog.Panel"})}let Ve="h2";function qe$1(t,e){let r=I$5(),{id:i=`headlessui-dialog-title-${r}`,...n}=t,[{dialogState:l,setTitleId:s}]=b$2("Dialog.Title"),a=y$1(e);C$2.useEffect(()=>(s(i),()=>s(null)),[i,s]);let T=C$2.useMemo(()=>({open:l===0}),[l]);return C$1({ourProps:{ref:a,id:i},theirProps:n,slot:T,defaultTag:Ve,name:"Dialog.Title"})}let ze=U$2(We),Qe=U$2(Je),Ze=U$2(Ke),et=U$2(Ye),tt=U$2(qe$1),_t=Object.assign(ze,{Backdrop:Qe,Panel:Ze,Overlay:et,Title:tt,Description:G});

  function c(a=0){let[l,r]=C$2.useState(a),t=f$4(),o=C$2.useCallback(e=>{t.current&&r(u=>u|e);},[l,t]),m=C$2.useCallback(e=>Boolean(l&e),[l]),s=C$2.useCallback(e=>{t.current&&r(u=>u&~e);},[r,t]),g=C$2.useCallback(e=>{t.current&&r(u=>u^e);},[r]);return {flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}

  function b$1({onFocus:n}){let[r,o]=C$2.useState(!0),u=f$4();return r?C$2.createElement(f$5,{as:"button",type:"button",features:s$5.Focusable,onFocus:a=>{a.preventDefault();let e,i=50;function t(){if(i--<=0){e&&cancelAnimationFrame(e);return}if(n()){if(cancelAnimationFrame(e),!u.current)return;o(!1);return}e=requestAnimationFrame(t);}e=requestAnimationFrame(t);}}):null}

  const s=C__namespace.createContext(null);function a(){return {groups:new Map,get(n,t){var c;let e=this.groups.get(n);e||(e=new Map,this.groups.set(n,e));let l=(c=e.get(t))!=null?c:0;e.set(t,l+1);let o=Array.from(e.keys()).indexOf(t);function i(){let u=e.get(t);u>1?e.set(t,u-1):e.delete(t);}return [o,i]}}}function C({children:n}){let t=C__namespace.useRef(a());return C__namespace.createElement(s.Provider,{value:t},n)}function d(n){let t=C__namespace.useContext(s);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let e=f(),[l,o]=t.current.get(n,e);return C__namespace.useEffect(()=>o,[]),l}function f(){var l,o,i;let n=(i=(o=(l=C__namespace.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:l.ReactCurrentOwner)==null?void 0:o.current)!=null?i:null;if(!n)return Symbol();let t=[],e=n;for(;e;)t.push(e.index),e=e.return;return "$."+t.join(".")}

  var ue$1=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(ue$1||{}),Te=(o=>(o[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o))(Te||{}),de=(r=>(r[r.SetSelectedIndex=0]="SetSelectedIndex",r[r.RegisterTab=1]="RegisterTab",r[r.UnregisterTab=2]="UnregisterTab",r[r.RegisterPanel=3]="RegisterPanel",r[r.UnregisterPanel=4]="UnregisterPanel",r))(de||{});let ce={[0](e,n){var u;let t=I$4(e.tabs,T=>T.current),o=I$4(e.panels,T=>T.current),s=t.filter(T=>{var l;return !((l=T.current)!=null&&l.hasAttribute("disabled"))}),r={...e,tabs:t,panels:o};if(n.index<0||n.index>t.length-1){let T=u$4(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>u$4(Math.sign(n.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});if(s.length===0)return r;let l=u$4(T,{[0]:()=>t.indexOf(s[0]),[1]:()=>t.indexOf(s[s.length-1])});return {...r,selectedIndex:l===-1?e.selectedIndex:l}}let i=t.slice(0,n.index),b=[...t.slice(n.index),...i].find(T=>s.includes(T));if(!b)return r;let c=(u=t.indexOf(b))!=null?u:e.selectedIndex;return c===-1&&(c=e.selectedIndex),{...r,selectedIndex:c}},[1](e,n){var r;if(e.tabs.includes(n.tab))return e;let t=e.tabs[e.selectedIndex],o=I$4([...e.tabs,n.tab],i=>i.current),s=(r=o.indexOf(t))!=null?r:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:o,selectedIndex:s}},[2](e,n){return {...e,tabs:e.tabs.filter(t=>t!==n.tab)}},[3](e,n){return e.panels.includes(n.panel)?e:{...e,panels:I$4([...e.panels,n.panel],t=>t.current)}},[4](e,n){return {...e,panels:e.panels.filter(t=>t!==n.panel)}}},X=C$2.createContext(null);X.displayName="TabsDataContext";function h(e){let n=C$2.useContext(X);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,h),t}return n}let $=C$2.createContext(null);$.displayName="TabsActionsContext";function q$1(e){let n=C$2.useContext($);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q$1),t}return n}function fe(e,n){return u$4(n.type,ce,e,n)}let be=C$2.Fragment;function me(e,n){let{defaultIndex:t=0,vertical:o=!1,manual:s=!1,onChange:r,selectedIndex:i=null,...R}=e;const b=o?"vertical":"horizontal",c=s?"manual":"auto";let u=i!==null,T=y$1(n),[l,d]=C$2.useReducer(fe,{selectedIndex:i!=null?i:t,tabs:[],panels:[]}),x=C$2.useMemo(()=>({selectedIndex:l.selectedIndex}),[l.selectedIndex]),m=s$8(r||(()=>{})),g=s$8(l.tabs),E=C$2.useMemo(()=>({orientation:b,activation:c,...l}),[b,c,l]),S=o$4(p=>(d({type:1,tab:p}),()=>d({type:2,tab:p}))),A=o$4(p=>(d({type:3,panel:p}),()=>d({type:4,panel:p}))),L=o$4(p=>{M.current!==p&&m.current(p),u||d({type:0,index:p});}),M=s$8(u?e.selectedIndex:l.selectedIndex),N=C$2.useMemo(()=>({registerTab:S,registerPanel:A,change:L}),[]);l$5(()=>{d({type:0,index:i!=null?i:t});},[i]),l$5(()=>{if(M.current===void 0||l.tabs.length<=0)return;let p=I$4(l.tabs,a=>a.current);p.some((a,f)=>l.tabs[f]!==a)&&L(p.indexOf(l.tabs[M.current]));});let B={ref:T};return C$2.createElement(C,null,C$2.createElement($.Provider,{value:N},C$2.createElement(X.Provider,{value:E},E.tabs.length<=0&&C$2.createElement(b$1,{onFocus:()=>{var p,I;for(let a of g.current)if(((p=a.current)==null?void 0:p.tabIndex)===0)return (I=a.current)==null||I.focus(),!0;return !1}}),C$1({ourProps:B,theirProps:R,slot:x,defaultTag:be,name:"Tabs"}))))}let Pe$1="div";function ye$1(e,n){let{orientation:t,selectedIndex:o}=h("Tab.List"),s=y$1(n);return C$1({ourProps:{ref:s,role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:o},defaultTag:Pe$1,name:"Tabs.List"})}let xe$1="button";function ge(e,n){var p,I;let t=I$5(),{id:o$2=`headlessui-tabs-tab-${t}`,...s}=e,{orientation:r,activation:i,selectedIndex:R,tabs:b,panels:c}=h("Tab"),u=q$1("Tab"),T=h("Tab"),l=C$2.useRef(null),d$1=y$1(l,n);l$5(()=>u.registerTab(l),[u,l]);let x=d("tabs"),m=b.indexOf(l);m===-1&&(m=x);let g=m===R,E=o$4(a=>{var j;let f=a();if(f===N$2.Success&&i==="auto"){let W=(j=o$1(l))==null?void 0:j.activeElement,z=T.tabs.findIndex(te=>te.current===W);z!==-1&&u.change(z);}return f}),S=o$4(a=>{let f=b.map(W=>W.current).filter(Boolean);if(a.key===o.Space||a.key===o.Enter){a.preventDefault(),a.stopPropagation(),u.change(m);return}switch(a.key){case o.Home:case o.PageUp:return a.preventDefault(),a.stopPropagation(),E(()=>O$1(f,M$2.First));case o.End:case o.PageDown:return a.preventDefault(),a.stopPropagation(),E(()=>O$1(f,M$2.Last))}if(E(()=>u$4(r,{vertical(){return a.key===o.ArrowUp?O$1(f,M$2.Previous|M$2.WrapAround):a.key===o.ArrowDown?O$1(f,M$2.Next|M$2.WrapAround):N$2.Error},horizontal(){return a.key===o.ArrowLeft?O$1(f,M$2.Previous|M$2.WrapAround):a.key===o.ArrowRight?O$1(f,M$2.Next|M$2.WrapAround):N$2.Error}}))===N$2.Success)return a.preventDefault()}),A=C$2.useRef(!1),L=o$4(()=>{var a;A.current||(A.current=!0,(a=l.current)==null||a.focus({preventScroll:!0}),u.change(m),t$6(()=>{A.current=!1;}));}),M=o$4(a=>{a.preventDefault();}),N=C$2.useMemo(()=>({selected:g}),[g]),B={ref:d$1,onKeyDown:S,onMouseDown:M,onClick:L,id:o$2,role:"tab",type:T$1(e,l),"aria-controls":(I=(p=c[m])==null?void 0:p.current)==null?void 0:I.id,"aria-selected":g,tabIndex:g?0:-1};return C$1({ourProps:B,theirProps:s,slot:N,defaultTag:xe$1,name:"Tabs.Tab"})}let Ee="div";function Ae(e,n){let{selectedIndex:t}=h("Tab.Panels"),o=y$1(n),s=C$2.useMemo(()=>({selectedIndex:t}),[t]);return C$1({ourProps:{ref:o},theirProps:e,slot:s,defaultTag:Ee,name:"Tabs.Panels"})}let Re$1="div",Le$1=O.RenderStrategy|O.Static;function _e$1(e,n){var E,S,A,L;let t=I$5(),{id:o=`headlessui-tabs-panel-${t}`,tabIndex:s=0,...r}=e,{selectedIndex:i,tabs:R,panels:b}=h("Tab.Panel"),c=q$1("Tab.Panel"),u=C$2.useRef(null),T=y$1(u,n);l$5(()=>c.registerPanel(u),[c,u]);let l=d("panels"),d$1=b.indexOf(u);d$1===-1&&(d$1=l);let x=d$1===i,m=C$2.useMemo(()=>({selected:x}),[x]),g={ref:T,id:o,role:"tabpanel","aria-labelledby":(S=(E=R[d$1])==null?void 0:E.current)==null?void 0:S.id,tabIndex:x?s:-1};return !x&&((A=r.unmount)==null||A)&&!((L=r.static)!=null&&L)?C$2.createElement(f$5,{as:"span","aria-hidden":"true",...g}):C$1({ourProps:g,theirProps:r,slot:m,defaultTag:Re$1,features:Le$1,visible:x,name:"Tabs.Panel"})}let Se$1=U$2(ge),Ie=U$2(me),De$1=U$2(ye$1),Fe$1=U$2(Ae),he=U$2(_e$1),$e=Object.assign(Se$1,{Group:Ie,List:De$1,Panels:Fe$1,Panel:he});

  function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

  function g(t,...e){t&&e.length>0&&t.classList.add(...e);}function v(t,...e){t&&e.length>0&&t.classList.remove(...e);}function b(t,e){let n=o$3();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:a}=getComputedStyle(t),[u,p]=[m,a].map(l=>{let[r=0]=l.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,T)=>T-i);return r}),o=u+p;if(o!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose();},o),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose();});});let l=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),l());});}else e();return n.add(()=>e()),n.dispose}function M$1(t,e,n,m){let a=n?"enter":"leave",u=o$3(),p=m!==void 0?l(m):()=>{};a==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let o=u$4(a,{enter:()=>e.enter,leave:()=>e.leave}),l$1=u$4(a,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=u$4(a,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),g(t,...e.base,...o,...r),u.nextFrame(()=>{v(t,...e.base,...o,...r),g(t,...e.base,...o,...l$1),b(t,()=>(v(t,...e.base,...o),g(t,...e.base,...e.entered),p()));}),u.dispose}

  function D({immediate:t,container:s,direction:n,classes:u,onStart:a,onStop:c}){let l=f$4(),d=p$3(),e=s$8(n);l$5(()=>{t&&(e.current="enter");},[t]),l$5(()=>{let r=o$3();d.add(r.dispose);let i=s.current;if(i&&e.current!=="idle"&&l.current)return r.dispose(),a.current(e.current),r.add(M$1(i,u.current,e.current==="enter",()=>{r.dispose(),c.current(e.current);})),r.dispose},[n]);}

  function S(t=""){return t.split(/\s+/).filter(n=>n.length>1)}let I=C$2.createContext(null);I.displayName="TransitionContext";var Se=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Se||{});function ye(){let t=C$2.useContext(I);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function xe(){let t=C$2.useContext(M);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let M=C$2.createContext(null);M.displayName="NestingContext";function U(t){return "children"in t?U(t.children):t.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function se(t,n){let r=s$8(t),s=C$2.useRef([]),R=f$4(),D=p$3(),p=o$4((i,e=v$1.Hidden)=>{let a=s.current.findIndex(({el:o})=>o===i);a!==-1&&(u$4(e,{[v$1.Unmount](){s.current.splice(a,1);},[v$1.Hidden](){s.current[a].state="hidden";}}),D.microTask(()=>{var o;!U(s)&&R.current&&((o=r.current)==null||o.call(r));}));}),x=o$4(i=>{let e=s.current.find(({el:a})=>a===i);return e?e.state!=="visible"&&(e.state="visible"):s.current.push({el:i,state:"visible"}),()=>p(i,v$1.Unmount)}),h=C$2.useRef([]),v=C$2.useRef(Promise.resolve()),u=C$2.useRef({enter:[],leave:[],idle:[]}),g=o$4((i,e,a)=>{h.current.splice(0),n&&(n.chains.current[e]=n.chains.current[e].filter(([o])=>o!==i)),n==null||n.chains.current[e].push([i,new Promise(o=>{h.current.push(o);})]),n==null||n.chains.current[e].push([i,new Promise(o=>{Promise.all(u.current[e].map(([f,N])=>N)).then(()=>o());})]),e==="enter"?v.current=v.current.then(()=>n==null?void 0:n.wait.current).then(()=>a(e)):a(e);}),d=o$4((i,e,a)=>{Promise.all(u.current[e].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=h.current.shift())==null||o();}).then(()=>a(e));});return C$2.useMemo(()=>({children:s,register:x,unregister:p,onStart:g,onStop:d,wait:v,chains:u}),[x,p,s,g,d,u,v])}function Ne(){}let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(t){var r;let n={};for(let s of Pe)n[s]=(r=t[s])!=null?r:Ne;return n}function Re(t){let n=C$2.useRef(ae(t));return C$2.useEffect(()=>{n.current=ae(t);},[t]),n}let De="div",le=O.RenderStrategy;function He(t,n){var Q,Y;let{beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1,enter:p,enterFrom:x,enterTo:h,entered:v,leave:u,leaveFrom:g,leaveTo:d,...i}=t,e=C$2.useRef(null),a=y$1(e,n),o=(Q=i.unmount)==null||Q?v$1.Unmount:v$1.Hidden,{show:f,appear:N,initial:T}=ye(),[l,j]=C$2.useState(f?"visible":"hidden"),z=xe(),{register:L,unregister:O}=z;C$2.useEffect(()=>L(e),[L,e]),C$2.useEffect(()=>{if(o===v$1.Hidden&&e.current){if(f&&l!=="visible"){j("visible");return}return u$4(l,{["hidden"]:()=>O(e),["visible"]:()=>L(e)})}},[l,e,L,O,f,o]);let k=s$8({base:S(i.className),enter:S(p),enterFrom:S(x),enterTo:S(h),entered:S(v),leave:S(u),leaveFrom:S(g),leaveTo:S(d)}),V=Re({beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1}),G=l$4();C$2.useEffect(()=>{if(G&&l==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,l,G]);let Te=T&&!N,K=N&&f&&T,de=(()=>!G||Te?"idle":f?"enter":"leave")(),H=c(0),fe=o$4(C=>u$4(C,{enter:()=>{H.addFlag(d$4.Opening),V.current.beforeEnter();},leave:()=>{H.addFlag(d$4.Closing),V.current.beforeLeave();},idle:()=>{}})),me=o$4(C=>u$4(C,{enter:()=>{H.removeFlag(d$4.Opening),V.current.afterEnter();},leave:()=>{H.removeFlag(d$4.Closing),V.current.afterLeave();},idle:()=>{}})),w=se(()=>{j("hidden"),O(e);},z),B=C$2.useRef(!1);D({immediate:K,container:e,classes:k,direction:de,onStart:s$8(C=>{B.current=!0,w.onStart(e,C,fe);}),onStop:s$8(C=>{B.current=!1,w.onStop(e,C,me),C==="leave"&&!U(w)&&(j("hidden"),O(e));})});let P=i,ce={ref:a};return K?P={...P,className:t$4(i.className,...k.current.enter,...k.current.enterFrom)}:B.current&&(P.className=t$4(i.className,(Y=e.current)==null?void 0:Y.className),P.className===""&&delete P.className),C$2.createElement(M.Provider,{value:w},C$2.createElement(s$4,{value:u$4(l,{["visible"]:d$4.Open,["hidden"]:d$4.Closed})|H.flags},C$1({ourProps:ce,theirProps:P,defaultTag:De,features:le,visible:l==="visible",name:"Transition.Child"})))}function Fe(t,n){let{show:r,appear:s=!1,unmount:R=!0,...D}=t,p=C$2.useRef(null),x=y$1(p,n);l$4();let h=u$2();if(r===void 0&&h!==null&&(r=(h&d$4.Open)===d$4.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,u]=C$2.useState(r?"visible":"hidden"),g=se(()=>{u("hidden");}),[d,i]=C$2.useState(!0),e=C$2.useRef([r]);l$5(()=>{d!==!1&&e.current[e.current.length-1]!==r&&(e.current.push(r),i(!1));},[e,r]);let a=C$2.useMemo(()=>({show:r,appear:s,initial:d}),[r,s,d]);C$2.useEffect(()=>{if(r)u("visible");else if(!U(g))u("hidden");else {let T=p.current;if(!T)return;let l=T.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&u("hidden");}},[r,g]);let o={unmount:R},f=o$4(()=>{var T;d&&i(!1),(T=t.beforeEnter)==null||T.call(t);}),N=o$4(()=>{var T;d&&i(!1),(T=t.beforeLeave)==null||T.call(t);});return C$2.createElement(M.Provider,{value:g},C$2.createElement(I.Provider,{value:a},C$1({ourProps:{...o,as:C$2.Fragment,children:C$2.createElement(ue,{ref:x,...o,...D,beforeEnter:f,beforeLeave:N})},theirProps:{},defaultTag:C$2.Fragment,features:le,visible:v==="visible",name:"Transition"})))}function _e(t,n){let r=C$2.useContext(I)!==null,s=u$2()!==null;return C$2.createElement(C$2.Fragment,null,!r&&s?C$2.createElement(q,{ref:n,...t}):C$2.createElement(ue,{ref:n,...t}))}let q=U$2(Fe),ue=U$2(He),Le=U$2(_e),qe=Object.assign(q,{Child:Le,Root:q});

  // THIS FILE IS AUTO GENERATED
  function AiFillPlusCircle (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"},"child":[]}]})(props);
  }function AiOutlineCloseCircle (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024","fill":"currentColor","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},"child":[]}]})(props);
  }function AiOutlineDelete (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},"child":[]}]})(props);
  }function AiOutlineEdit (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"},"child":[]}]})(props);
  }function AiOutlinePlusSquare (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"},"child":[]},{"tag":"path","attr":{"d":"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"},"child":[]}]})(props);
  }

  var Globals = {
    componenetPrefixName: "QuizeByPKU"
  };

  var ModalContext = /*#__PURE__*/C$2.createContext({});

  var createContainer = function createContainer(container) {
    if (typeof container === "string") {
      return document.querySelector(container) || document.body;
    }
    if (typeof container === "function") {
      return container();
    }
    return null;
  };
  var Portal = /*#__PURE__*/C$2.forwardRef(function (_ref, ref) {
    var visible = _ref.visible,
      children = _ref.children,
      container = _ref.container;
    var targetContainer = createContainer(container);
    var containerRef = C$2.useRef(null);
    if (!visible || !children) {
      return null;
    }
    C$2.useImperativeHandle(ref, function () {
      return {
        destroy: function destroy() {
          var _a;
          if (containerRef && containerRef.current && targetContainer) {
            targetContainer.removeChild(containerRef.current);
          } else {
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.remove();
          }
        }
      };
    });
    return /*#__PURE__*/require$$0.createPortal( /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: "ProtalWrapper",
      ref: containerRef,
      children: children
    }), targetContainer !== null && targetContainer !== void 0 ? targetContainer : document.body);
  });

  var Mask = /*#__PURE__*/C$2.forwardRef(function (_ref, ref) {
    var mask = _ref.mask,
      maskClick = _ref.maskClick;
    return /*#__PURE__*/jsxRuntimeExports.jsx(qe, {
      show: mask,
      ref: ref,
      onClick: maskClick,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0 scale-75",
      enterTo: "opacity-100 scale-100",
      leave: "ease-in duration-300 delay-50",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-75",
      className: "fixed inset-0 bg-black/20 w-screen h-screen z-[1050]"
    });
  });
  // ModalWrapper
  var ModalWrapper = /*#__PURE__*/C$2.forwardRef(function (_ref2, ref) {
    var children = _ref2.children,
      visible = _ref2.visible,
      onKeyDown = _ref2.onKeyDown;
    return /*#__PURE__*/jsxRuntimeExports.jsx(qe, {
      tabIndex: -1,
      as: "dialog",
      open: visible,
      ref: ref,
      onKeyDown: onKeyDown,
      show: visible,
      enter: "transform transition duration-300 ease-out delay-50",
      enterFrom: "opacity-0 scale-0",
      enterTo: "opacity-100 scale-100",
      leave: "transform transition duration-300 ease-in-out",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-0",
      className: "z-[1050] fixed translate-y-6 transform px-2 py-3 shadow-2xl transition-all rounded-xl",
      children: children
    });
  });
  // Content
  var Content = function Content(_ref3) {
    var children = _ref3.children;
    return children;
  };
  // Head
  var Head = function Head(_ref4) {
    var title = _ref4.title,
      onClose = _ref4.onClose;
    return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: "w-full flex justify-between px-2 py-3",
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("h1", {
        className: "font-sans font-black text-pretty",
        children: title || "New Modal"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(AiOutlineCloseCircle, {
        onClick: onClose,
        className: "text-gray-400 hover:text-gray-700 hover:cursor-pointer",
        size: 22
      })]
    });
  };
  // Modal
  var Modal = function Modal(props) {
    var title = props.title,
      _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      _props$useEsc = props.useEsc,
      useEsc = _props$useEsc === void 0 ? true : _props$useEsc,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      _props$maskClose = props.maskClose,
      maskClose = _props$maskClose === void 0 ? true : _props$maskClose,
      container = props.container,
      onOpen = props.onOpen,
      onClose = props.onClose;
      props.destroyOnClose;
      var children = props.children;
    var portalRef = C$2.useRef(null);
    var wrapperRef = C$2.useRef(null);
    var maskVisible = open && mask;
    var _useState = C$2.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      innerOpen = _useState2[0],
      setInnerOpen = _useState2[1];
    // warpper keydown event
    var handleWarpperKeyDown = function handleWarpperKeyDown(e) {
      var _a;
      if (useEsc && e.code === "Escape" || e.keyCode === 27) {
        setInnerOpen(false);
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    };
    // mask click event
    var handleMaskClick = function handleMaskClick(e) {
      e.stopPropagation();
      if (maskClose) {
        internalClose();
      }
    };
    // internel close event
    var internalClose = function internalClose() {
      setInnerOpen(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    C$2.useEffect(function () {
      if (open !== innerOpen) setInnerOpen(open);
      if (open) {
        onOpen === null || onOpen === void 0 ? void 0 : onOpen();
      } else {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }, [open, useEsc]);
    C$2.useEffect(function () {
      if (useEsc && wrapperRef.current) {
        wrapperRef.current.focus();
      }
    }, [wrapperRef]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(ModalContext.Provider, {
      value: props,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Portal, {
        visible: true,
        ref: portalRef,
        container: container,
        children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          className: "relative w-auto",
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Mask, {
            mask: maskVisible,
            maskClick: handleMaskClick
          }), /*#__PURE__*/jsxRuntimeExports.jsxs(ModalWrapper, {
            ref: wrapperRef,
            visible: innerOpen,
            onKeyDown: handleWarpperKeyDown,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Head, {
              title: title,
              onClose: internalClose
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Content, {
              children: children
            })]
          })]
        })
      })
    });
  };
  Modal.displayName = "".concat(Globals.componenetPrefixName, "_Modal");

  var PopupBoxAddSubModal = /*#__PURE__*/C$2.memo(function (_ref) {
    var show = _ref.show,
      onModalClose = _ref.onModalClose,
      onAddCategoriesSubItem = _ref.onAddCategoriesSubItem;
    var _useState = C$2.useState(show),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];
    var closeModal = function closeModal() {
      setIsOpen(false);
      onModalClose === null || onModalClose === void 0 ? void 0 : onModalClose();
    };
    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      var formData = new FormData(e.currentTarget);
      var data = {};
      var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          data[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      onAddCategoriesSubItem(data);
      onModalClose();
    };
    C$2.useEffect(function () {
      setIsOpen(show);
    }, [show]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(qe, {
      appear: true,
      show: isOpen,
      as: C$2.Fragment,
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(_t, {
        as: "div",
        className: "relative z-[1080]",
        onClose: closeModal,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(qe.Child, {
          as: C$2.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            className: "fixed inset-0 bg-black/25"
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          className: "fixed inset-0 overflow-y-auto",
          children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            className: "flex min-h-full items-center justify-center p-4 text-center",
            children: /*#__PURE__*/jsxRuntimeExports.jsx(qe.Child, {
              as: C$2.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
              children: /*#__PURE__*/jsxRuntimeExports.jsxs(_t.Panel, {
                className: "w-full max-w-sm  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(_t.Title, {
                  as: "h3",
                  className: "text-lg font-medium leading-6 text-gray-900",
                  children: "\u589E\u52A0\u5206\u7C7B"
                }), /*#__PURE__*/jsxRuntimeExports.jsxs("form", {
                  onSubmit: handleSubmit,
                  children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                    className: "mt-2 space-x-2",
                    children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
                      children: "\u7F51\u7AD9\u540D\u79F0:"
                    }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
                      name: "name",
                      required: true,
                      placeholder: "\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",
                      title: "\u7F51\u7AD9\u540D\u79F0",
                      className: "ring"
                    })]
                  }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                    className: "mt-2 space-x-2",
                    children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
                      children: "\u7F51\u7AD9\u5730\u5740:"
                    }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
                      name: "url",
                      required: true,
                      type: "url",
                      placeholder: "\u8BF7\u8F93\u5165\u7F51\u7AD9\u5730\u5740",
                      title: "\u7F51\u7AD9\u5730\u5740",
                      className: "ring"
                    })]
                  }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
                    className: "mt-4 flex justify-end",
                    children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
                      type: "submit",
                      className: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                      children: "\u63D0\u4EA4"
                    })
                  })]
                })]
              })
            })
          })
        })]
      })
    });
  });

  var PopupBox = function PopupBox(props) {
    //props
    var open = props.open,
      categories = props.categories,
      reset = __rest(props, ["open", "categories"]);
    // inner state
    var _useState = C$2.useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
    var _useState3 = C$2.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      editorIndex = _useState4[0],
      setEditorIndex = _useState4[1];
    var _useState5 = C$2.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      menuContextIndex = _useState6[0],
      setMenuContextIndex = _useState6[1];
    var _useState7 = C$2.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      positionCompensation = _useState8[0],
      setPositionCompensation = _useState8[1];
    var _useState9 = C$2.useState(""),
      _useState10 = _slicedToArray(_useState9, 2),
      currentEditValue = _useState10[0],
      setCurrentEditValue = _useState10[1];
    var _useState11 = C$2.useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      addModalVisible = _useState12[0],
      setAddModalVisible = _useState12[1];
    var _useState13 = C$2.useState(0),
      _useState14 = _slicedToArray(_useState13, 2),
      activeTab = _useState14[0],
      setActiveTab = _useState14[1];
    // data state
    var _useState15 = C$2.useState(categories || []),
      _useState16 = _slicedToArray(_useState15, 2),
      localCategories = _useState16[0],
      setLocalCategories = _useState16[1];
    //ref
    var tabsRef = C$2.useRef(null);
    // handlers
    var handleShowContextMenu = function handleShowContextMenu(index, e) {
      var _a;
      e.preventDefault();
      setMenuContextIndex(index);
      setPositionCompensation(((_a = tabsRef.current) === null || _a === void 0 ? void 0 : _a.scrollLeft) || 0);
    };
    var closeMenuPopup = function closeMenuPopup() {
      setMenuContextIndex(null);
    };
    var removeCategory = function removeCategory(index) {
      setLocalCategories(function (prev) {
        var newCategories = _toConsumableArray(prev);
        newCategories.splice(index, 1);
        return newCategories;
      });
    };
    var handlePopEditor = function handlePopEditor(action) {
      if (menuContextIndex === null) return;
      if (action === "REMOVE") {
        removeCategory(menuContextIndex);
      } else {
        setActiveTab(menuContextIndex);
        setEditorIndex(menuContextIndex);
        setCurrentEditValue(localCategories[menuContextIndex].name);
      }
    };
    var PopEditor = /*#__PURE__*/C$2.memo(function (_ref) {
      var show = _ref.show;
      return /*#__PURE__*/jsxRuntimeExports.jsx(qe, {
        as: C$2.Fragment,
        show: show,
        appear: true,
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 -translate-y-full",
        enterTo: "opacity-100 translate-y-1",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 -translate-y-full",
        leaveTo: "opacity-0  translate-y-1",
        children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          className: "fixed inline-block  translate-y-l z-[1050] bg-white shadow-2xl rounded-md min-w-[80px] overflow-hidden",
          style: {
            translate: "-".concat(positionCompensation + 20, "px")
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            className: " p-2 flex items-center hover:bg-violet-500 hover:text-white w-full",
            onClick: function onClick() {
              return handlePopEditor("EDIT");
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(AiOutlineEdit, {
              className: "mr-2 text-violet-200 hover:text-violet-100"
            }), "\u7F16\u8F91"]
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            className: " p-2 flex  items-center hover:bg-violet-500 hover:text-white w-full",
            onClick: function onClick() {
              return handlePopEditor("REMOVE");
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(AiOutlineDelete, {
              className: "mr-2 text-violet-200 hover:text-violet-100"
            }), "\u5220\u9664"]
          })]
        })
      });
    });
    var PopupBoxContent = function PopupBoxContent() {
      return /*#__PURE__*/jsxRuntimeExports.jsx($e.Panels, {
        className: "pt-5 min-h-72",
        children: localCategories.map(function (categoriesItem, index) {
          return /*#__PURE__*/jsxRuntimeExports.jsx($e.Panel, {
            className: "w-full flex flex-row flex-wrap",
            children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-6 gap-5",
              children: [categoriesItem.items.map(function (item, index) {
                return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                  onClick: function onClick() {
                    return window.open(item.url, "_blank");
                  },
                  className: "text-center hover:border-b-blue-500 hover:cursor-pointer",
                  children: [/*#__PURE__*/jsxRuntimeExports.jsx("img", {
                    src: item.icon,
                    className: "p-3 rounded-md w-20 h-20 bg-gray-200 shadow hover:ring-1"
                  }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
                    className: "text-gray-700 py-2 text-sm font-semibold",
                    children: item.name
                  })]
                }, "".concat(item.name, "_").concat(index));
              }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                className: "flex flex-col justify-center items-center text-center hover:border-b-blue-500 hover:cursor-pointer",
                onClick: function onClick() {
                  setAddModalVisible(true);
                },
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(AiOutlinePlusSquare, {
                  className: "rounded-md p-3 w-20 h-20 shadow text-gray-500 bg-gray-200"
                }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
                  className: "text-gray-700 py-2 text-sm font-semibold",
                  children: "\u6DFB\u52A0"
                })]
              })]
            })
          }, index);
        })
      });
    };
    var handleAddCategory = function handleAddCategory() {
      setLocalCategories(function (prev) {
        setCurrentEditValue("新分类");
        setActiveTab(prev.length);
        setEditorIndex(prev.length);
        return [].concat(_toConsumableArray(prev), [{
          name: "新分类",
          index: prev.length,
          items: []
        }]);
      });
    };
    var handleCategoryEdit = function handleCategoryEdit(index) {
      setLocalCategories(function (prev) {
        var newCategories = _toConsumableArray(prev);
        newCategories[index].name = currentEditValue;
        return newCategories;
      });
      setEditorIndex(null);
      setCurrentEditValue("");
    };
    var handleTabChange = function handleTabChange(index) {
      setActiveTab(index);
    };
    var handleAddCategorySubItem = function handleAddCategorySubItem(data) {
      setLocalCategories(function (prev) {
        var newCategories = _toConsumableArray(prev);
        newCategories[activeTab].items.push(Object.assign(Object.assign({}, data), {
          icon: "".concat(data.url, "/favicon.ico")
        }));
        return newCategories;
      });
    };
    C$2.useEffect(function () {
      if (menuContextIndex !== null) {
        window.addEventListener("click", closeMenuPopup);
      }
      return function () {
        window.removeEventListener("click", closeMenuPopup);
      };
    });
    C$2.useEffect(function () {
      if (localStorage && localCategories.length !== 0) {
        localStorage.setItem("categories", JSON.stringify(localCategories));
      }
    }, [localCategories]);
    C$2.useEffect(function () {
      setShow(open);
      setLocalCategories(categories || []);
    }, [open, categories]);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(Modal, _objectSpread2(_objectSpread2({}, reset), {}, {
      open: show,
      container: function container() {
        return document.querySelector("#app");
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "p-3 w-[626px] max-w-screen-md",
        children: /*#__PURE__*/jsxRuntimeExports.jsxs($e.Group, {
          onChange: handleTabChange,
          selectedIndex: activeTab,
          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            className: "max-w-max flex justify-between items-center relative",
            children: [/*#__PURE__*/jsxRuntimeExports.jsx($e.List, {
              className: "flex flex-row space-x-2 overflow-x-scroll",
              ref: tabsRef,
              children: localCategories && localCategories.map(function (categoriesItem, index) {
                return /*#__PURE__*/jsxRuntimeExports.jsxs($e, {
                  title: categoriesItem.name,
                  className: function className(_ref2) {
                    var selected = _ref2.selected;
                    return classNames("bg-white text-gray-700  py-1 text-base font-medium leading-5 ring-0 outline-none border-b min-w-[100px] relative ", selected ? "border-b-blue-500 text-blue-400" : "hover:bg-gray-200");
                  },
                  children: [index === editorIndex ? /*#__PURE__*/jsxRuntimeExports.jsx("input", {
                    type: "text",
                    autoFocus: true,
                    value: currentEditValue,
                    onBlur: function onBlur() {
                      handleCategoryEdit(index);
                    },
                    className: "w-full text-base font-medium truncate cursor-pointer ring-0 outline-none  h-full",
                    onChange: function onChange(v) {
                      return setCurrentEditValue(v.currentTarget.value);
                    },
                    onKeyUp: function onKeyUp(e) {
                      if (e.key === "Enter") {
                        handleCategoryEdit(index);
                      }
                    }
                  }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {
                    className: "w-full px-3 py-2 text-base font-medium truncate cursor-pointer",
                    onContextMenu: function onContextMenu(e) {
                      return handleShowContextMenu(index, e);
                    },
                    onDoubleClick: function onDoubleClick() {
                      setEditorIndex(index);
                      setCurrentEditValue(categoriesItem.name);
                    },
                    children: categoriesItem.name
                  }), /*#__PURE__*/jsxRuntimeExports.jsx(PopEditor, {
                    show: menuContextIndex === index
                  })]
                }, "".concat(categoriesItem.name, "_").concat(index));
              })
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              className: "float right-0 flex justify-center items-center text-gray-500  rounded-none text-base font-medium leading-5 ring-0 outline-none px-2 text-center hover:cursor-pointer hover:text-gray-800",
              children: /*#__PURE__*/jsxRuntimeExports.jsx(AiFillPlusCircle, {
                size: 24,
                onClick: function onClick() {
                  return handleAddCategory();
                }
              })
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx(PopupBoxContent, {})]
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(PopupBoxAddSubModal, {
        onAddCategoriesSubItem: handleAddCategorySubItem,
        show: addModalVisible,
        onModalClose: function onModalClose() {
          return setAddModalVisible(false);
        }
      })]
    }));
  };

  var createRoot;

  var m = require$$0;
  {
    createRoot = m.createRoot;
    m.hydrateRoot;
  }

  var cacheKey = "categories";
  var DemoData = [{
    name: "新闻",
    index: 0,
    items: [{
      name: "南方周末",
      url: "https://www.infzm.com",
      icon: "https://www.infzm.com/favicon.ico"
    }, {
      name: "澎湃",
      url: "https://www.thepaper.cn",
      icon: "https://www.thepaper.cn/favicon.ico"
    }, {
      name: "搜狐",
      url: "https://www.sohu.com",
      icon: "https://statics.itc.cn/web/static/images/pic/sohu-logo/favicon.ico"
    }, {
      name: "知乎",
      url: "https://www.zhihu.com",
      icon: "https://www.zhihu.com/favicon.ico"
    }]
  }, {
    name: "科技",
    index: 1,
    items: [{
      name: "36kr",
      url: "https://36kr.com",
      icon: "https://36kr.com/favicon.ico"
    }, {
      name: "TechCrunch",
      url: "https://TechCrunch.com",
      icon: "https://TechCrunch.com/favicon.ico"
    }, {
      name: "Wired",
      url: "https://wired.com",
      icon: "https://wired.com/favicon.ico"
    }]
  }, {
    name: "体育",
    index: 2,
    items: [{
      name: "NBA",
      url: "https://nba.com",
      icon: "https://nba.com/favicon.ico"
    }]
  }];
  var App = function App() {
    var _useState = C$2.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];
    var _useState3 = C$2.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      cacheCategories = _useState4[0],
      setCacheCategories = _useState4[1];
    var handleClose = function handleClose() {
      setVisible(false);
    };
    C$2.useEffect(function () {
      var handleStorageChange = function handleStorageChange() {
        var cache = localStorage.getItem(cacheKey);
        if (cache) {
          setCacheCategories(JSON.parse(cache));
        } else {
          setCacheCategories(DemoData);
        }
      };
      window.addEventListener("localStorageChange", handleStorageChange);
      // 初始化加载
      handleStorageChange();
      return function () {
        window.removeEventListener("localStorageChange", handleStorageChange);
      };
    }, []);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("section", {
        id: "app",
        className: "relative bg-gradient-to-r from-sky-400 to-indigo-500 h-screen w-screen",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          loading: visible,
          onClick: function onClick() {
            setVisible(!visible);
          },
          className: "btn m-10",
          children: "Click Me"
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(PopupBox, {
        open: visible,
        onClose: handleClose,
        title: "\u65B0\u589E\u7F51\u7AD9\u5206\u7C7B",
        maskClose: false,
        categories: cacheCategories
      })]
    });
  };
  var root = createRoot(document.querySelector("#root"));
  root.render( /*#__PURE__*/jsxRuntimeExports.jsx(App, {}));

}));

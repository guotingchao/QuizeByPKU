
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
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
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  var f$5=C$2,k$2=Symbol.for("react.element"),l$5=Symbol.for("react.fragment"),m$3=Object.prototype.hasOwnProperty,n$2=f$5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$3={key:!0,ref:!0,__self:!0,__source:!0};
  function q$3(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$3.call(a,b)&&!p$3.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k$2,type:c,key:e,ref:h,props:d,_owner:n$2.current}}reactJsxRuntime_production_min.Fragment=l$5;reactJsxRuntime_production_min.jsx=q$3;reactJsxRuntime_production_min.jsxs=q$3;

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
  var b$2=Symbol.for("react.element"),c$2=Symbol.for("react.portal"),d$3=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f$4=Symbol.for("react.profiler"),g$1=Symbol.for("react.provider"),h$1=Symbol.for("react.context"),k$1=Symbol.for("react.server_context"),l$4=Symbol.for("react.forward_ref"),m$2=Symbol.for("react.suspense"),n$1=Symbol.for("react.suspense_list"),p$2=Symbol.for("react.memo"),q$2=Symbol.for("react.lazy"),t$2=Symbol.for("react.offscreen"),u$3;u$3=Symbol.for("react.module.reference");
  function v$2(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b$2:switch(a=a.type,a){case d$3:case f$4:case e:case m$2:case n$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case h$1:case l$4:case q$2:case p$2:case g$1:return a;default:return r}}case c$2:return r}}}reactIs_production_min.ContextConsumer=h$1;reactIs_production_min.ContextProvider=g$1;reactIs_production_min.Element=b$2;reactIs_production_min.ForwardRef=l$4;reactIs_production_min.Fragment=d$3;reactIs_production_min.Lazy=q$2;reactIs_production_min.Memo=p$2;reactIs_production_min.Portal=c$2;reactIs_production_min.Profiler=f$4;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m$2;
  reactIs_production_min.SuspenseList=n$1;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v$2(a)===h$1};reactIs_production_min.isContextProvider=function(a){return v$2(a)===g$1};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$2};reactIs_production_min.isForwardRef=function(a){return v$2(a)===l$4};reactIs_production_min.isFragment=function(a){return v$2(a)===d$3};reactIs_production_min.isLazy=function(a){return v$2(a)===q$2};reactIs_production_min.isMemo=function(a){return v$2(a)===p$2};
  reactIs_production_min.isPortal=function(a){return v$2(a)===c$2};reactIs_production_min.isProfiler=function(a){return v$2(a)===f$4};reactIs_production_min.isStrictMode=function(a){return v$2(a)===e};reactIs_production_min.isSuspense=function(a){return v$2(a)===m$2};reactIs_production_min.isSuspenseList=function(a){return v$2(a)===n$1};
  reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d$3||a===f$4||a===e||a===m$2||a===n$1||a===t$2||"object"===typeof a&&null!==a&&(a.$$typeof===q$2||a.$$typeof===p$2||a.$$typeof===g$1||a.$$typeof===h$1||a.$$typeof===l$4||a.$$typeof===u$3||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v$2;

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
    var classes = classNames(className, {
      btn: true,
      small: size === "small",
      medium: size === "medium",
      large: size === "large",
      disabled: disabled
    });
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

  var i$1=Object.defineProperty;var d$2=(t,e,n)=>e in t?i$1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d$2(t,typeof e!="symbol"?e+"":e,n),n);let o$5 = class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0);}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e);}reset(){this.set(this.detect());}nextId(){return ++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete");}get isHandoffComplete(){return this.handoffState==="complete"}};let s$5=new o$5;

  let l$3=(e,f)=>{s$5.isServer?C$2.useEffect(e,f):C$2.useLayoutEffect(e,f);};

  function s$4(e){let r=C$2.useRef(e);return l$3(()=>{r.current=e;},[e]),r}

  let o$4=function(t){let e=s$4(t);return C$2.useCallback((...r)=>e.current(...r),[e])};

  function t$1(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

  function o$3(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return t$1(()=>{t.current&&e[0]();}),r.add(()=>{t.current=!1;})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a});})},group(e){let t=o$3();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s();}},dispose(){for(let e of n.splice(0))e();}};return r}

  function p$1(){let[e]=C$2.useState(o$3);return C$2.useEffect(()=>()=>e.dispose(),[e]),e}

  function s$3(){let r=typeof document=="undefined";return "useSyncExternalStore"in C__namespace?(o=>o.useSyncExternalStore)(C__namespace)(()=>()=>{},()=>!1,()=>!r):!1}function l$2(){let r=s$3(),[e,n]=C__namespace.useState(s$5.isHandoffComplete);return e&&s$5.isHandoffComplete===!1&&n(!1),C__namespace.useEffect(()=>{e!==!0&&n(!0);},[e]),C__namespace.useEffect(()=>s$5.handoff(),[]),r?!1:e}

  var o$2;let I$2=(o$2=C$2.useId)!=null?o$2:function(){let n=l$2(),[e,u]=C$2.useState(n?()=>s$5.nextId():null);return l$3(()=>{e===null&&u(s$5.nextId());},[e]),e!=null?""+e:void 0};

  function u$2(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$2),t}

  function o$1(r){return s$5.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

  let c$1=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M$2=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M$2||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),F$1=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F$1||{});function f$3(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$1)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var T$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T$1||{});var w=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="");},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="");},!0));let S$1=["textarea","input"].join(",");function H(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,S$1))!=null?t:!1}function I$1(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O$1(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I$1(e):e:f$3(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else {if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E;}while(u!==i.activeElement);return r&6&&H(u)&&u.select(),2}

  function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return "button"}function T(t,e){let[n,u]=C$2.useState(()=>i(t));return l$3(()=>{u(i(t));},[t.type,t.as]),l$3(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button");},[n,e]),n}

  let u$1=Symbol();function y(...t){let n=C$2.useRef(t);C$2.useEffect(()=>{n.current=t;},[t]);let c=o$4(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u$1]))?void 0:c}

  function t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}

  var O=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(O||{}),v$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(v$1||{});function C$1({ourProps:r,theirProps:t,slot:e,defaultTag:n,features:o,visible:a=!0,name:f,mergeRefs:l}){l=l!=null?l:k;let s=R(t,r);if(a)return m$1(s,e,n,f,l);let y=o!=null?o:0;if(y&2){let{static:u=!1,...d}=s;if(u)return m$1(d,e,n,f,l)}if(y&1){let{unmount:u=!0,...d}=s;return u$2(u?0:1,{[0](){return null},[1](){return m$1({...d,hidden:!0,style:{display:"none"}},e,n,f,l)}})}return m$1(s,e,n,f,l)}function m$1(r,t$1={},e,n,o){let{as:a=e,children:f,refName:l="ref",...s}=F(r,["unmount","static"]),y=r.ref!==void 0?{[l]:r.ref}:{},u=typeof f=="function"?f(t$1):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t$1));let d={};if(t$1){let i=!1,c=[];for(let[T,p]of Object.entries(t$1))typeof p=="boolean"&&(i=!0),p===!0&&c.push(T);i&&(d["data-headlessui-state"]=c.join(" "));}if(a===C$2.Fragment&&Object.keys(x(s)).length>0){if(!C$2.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let i=u.props,c=typeof(i==null?void 0:i.className)=="function"?(...p)=>t(i==null?void 0:i.className(...p),s.className):t(i==null?void 0:i.className,s.className),T=c?{className:c}:{};return C$2.cloneElement(u,Object.assign({},R(u.props,x(F(s,["ref"]))),d,y,{ref:o(u.ref,y.ref)},T))}return C$2.createElement(a,Object.assign({},F(s,["ref"]),a!==C$2.Fragment&&y,a!==C$2.Fragment&&d),u)}function k(...r){return r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t);}}function R(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let a in o)a.startsWith("on")&&typeof o[a]=="function"?((e[a])!=null||(e[a]=[]),e[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](a,...f){let l=e[o];for(let s of l){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;s(a,...f);}}});return t}function U$1(r){var t;return Object.assign(C$2.forwardRef(r),{displayName:(t=r.displayName)!=null?t:r.name})}function x(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function F(r,t=[]){let e=Object.assign({},r);for(let n of t)n in e&&delete e[n];return e}

  let p="div";var s$2=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s$2||{});function l$1(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":(t&2)===2?!0:(n=e["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return C$1({ourProps:r,theirProps:e,slot:{},defaultTag:p,name:"Hidden"})}let f$2=U$1(l$1);

  let n=C$2.createContext(null);n.displayName="OpenClosedContext";var d$1=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d$1||{});function u(){return C$2.useContext(n)}function s$1({value:o,children:r}){return C$2.createElement(n.Provider,{value:o},r)}

  var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});

  function f$1(){let e=C$2.useRef(!1);return l$3(()=>(e.current=!0,()=>{e.current=!1;}),[]),e}

  function c(a=0){let[l,r]=C$2.useState(a),t=f$1(),o=C$2.useCallback(e=>{t.current&&r(u=>u|e);},[l,t]),m=C$2.useCallback(e=>Boolean(l&e),[l]),s=C$2.useCallback(e=>{t.current&&r(u=>u&~e);},[r,t]),g=C$2.useCallback(e=>{t.current&&r(u=>u^e);},[r]);return {flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}

  function b$1({onFocus:n}){let[r,o]=C$2.useState(!0),u=f$1();return r?C$2.createElement(f$2,{as:"button",type:"button",features:s$2.Focusable,onFocus:a=>{a.preventDefault();let e,i=50;function t(){if(i--<=0){e&&cancelAnimationFrame(e);return}if(n()){if(cancelAnimationFrame(e),!u.current)return;o(!1);return}e=requestAnimationFrame(t);}e=requestAnimationFrame(t);}}):null}

  const s=C__namespace.createContext(null);function a(){return {groups:new Map,get(n,t){var c;let e=this.groups.get(n);e||(e=new Map,this.groups.set(n,e));let l=(c=e.get(t))!=null?c:0;e.set(t,l+1);let o=Array.from(e.keys()).indexOf(t);function i(){let u=e.get(t);u>1?e.set(t,u-1):e.delete(t);}return [o,i]}}}function C({children:n}){let t=C__namespace.useRef(a());return C__namespace.createElement(s.Provider,{value:t},n)}function d(n){let t=C__namespace.useContext(s);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let e=f(),[l,o]=t.current.get(n,e);return C__namespace.useEffect(()=>o,[]),l}function f(){var l,o,i;let n=(i=(o=(l=C__namespace.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:l.ReactCurrentOwner)==null?void 0:o.current)!=null?i:null;if(!n)return Symbol();let t=[],e=n;for(;e;)t.push(e.index),e=e.return;return "$."+t.join(".")}

  var ue$1=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(ue$1||{}),Te=(o=>(o[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o))(Te||{}),de=(r=>(r[r.SetSelectedIndex=0]="SetSelectedIndex",r[r.RegisterTab=1]="RegisterTab",r[r.UnregisterTab=2]="UnregisterTab",r[r.RegisterPanel=3]="RegisterPanel",r[r.UnregisterPanel=4]="UnregisterPanel",r))(de||{});let ce={[0](e,n){var u;let t=I$1(e.tabs,T=>T.current),o=I$1(e.panels,T=>T.current),s=t.filter(T=>{var l;return !((l=T.current)!=null&&l.hasAttribute("disabled"))}),r={...e,tabs:t,panels:o};if(n.index<0||n.index>t.length-1){let T=u$2(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>u$2(Math.sign(n.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});if(s.length===0)return r;let l=u$2(T,{[0]:()=>t.indexOf(s[0]),[1]:()=>t.indexOf(s[s.length-1])});return {...r,selectedIndex:l===-1?e.selectedIndex:l}}let i=t.slice(0,n.index),b=[...t.slice(n.index),...i].find(T=>s.includes(T));if(!b)return r;let c=(u=t.indexOf(b))!=null?u:e.selectedIndex;return c===-1&&(c=e.selectedIndex),{...r,selectedIndex:c}},[1](e,n){var r;if(e.tabs.includes(n.tab))return e;let t=e.tabs[e.selectedIndex],o=I$1([...e.tabs,n.tab],i=>i.current),s=(r=o.indexOf(t))!=null?r:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:o,selectedIndex:s}},[2](e,n){return {...e,tabs:e.tabs.filter(t=>t!==n.tab)}},[3](e,n){return e.panels.includes(n.panel)?e:{...e,panels:I$1([...e.panels,n.panel],t=>t.current)}},[4](e,n){return {...e,panels:e.panels.filter(t=>t!==n.panel)}}},X=C$2.createContext(null);X.displayName="TabsDataContext";function h(e){let n=C$2.useContext(X);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,h),t}return n}let $=C$2.createContext(null);$.displayName="TabsActionsContext";function q$1(e){let n=C$2.useContext($);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q$1),t}return n}function fe(e,n){return u$2(n.type,ce,e,n)}let be=C$2.Fragment;function me(e,n){let{defaultIndex:t=0,vertical:o=!1,manual:s=!1,onChange:r,selectedIndex:i=null,...R}=e;const b=o?"vertical":"horizontal",c=s?"manual":"auto";let u=i!==null,T=y(n),[l,d]=C$2.useReducer(fe,{selectedIndex:i!=null?i:t,tabs:[],panels:[]}),x=C$2.useMemo(()=>({selectedIndex:l.selectedIndex}),[l.selectedIndex]),m=s$4(r||(()=>{})),g=s$4(l.tabs),E=C$2.useMemo(()=>({orientation:b,activation:c,...l}),[b,c,l]),S=o$4(p=>(d({type:1,tab:p}),()=>d({type:2,tab:p}))),A=o$4(p=>(d({type:3,panel:p}),()=>d({type:4,panel:p}))),L=o$4(p=>{M.current!==p&&m.current(p),u||d({type:0,index:p});}),M=s$4(u?e.selectedIndex:l.selectedIndex),N=C$2.useMemo(()=>({registerTab:S,registerPanel:A,change:L}),[]);l$3(()=>{d({type:0,index:i!=null?i:t});},[i]),l$3(()=>{if(M.current===void 0||l.tabs.length<=0)return;let p=I$1(l.tabs,a=>a.current);p.some((a,f)=>l.tabs[f]!==a)&&L(p.indexOf(l.tabs[M.current]));});let B={ref:T};return C$2.createElement(C,null,C$2.createElement($.Provider,{value:N},C$2.createElement(X.Provider,{value:E},E.tabs.length<=0&&C$2.createElement(b$1,{onFocus:()=>{var p,I;for(let a of g.current)if(((p=a.current)==null?void 0:p.tabIndex)===0)return (I=a.current)==null||I.focus(),!0;return !1}}),C$1({ourProps:B,theirProps:R,slot:x,defaultTag:be,name:"Tabs"}))))}let Pe$1="div";function ye$1(e,n){let{orientation:t,selectedIndex:o}=h("Tab.List"),s=y(n);return C$1({ourProps:{ref:s,role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:o},defaultTag:Pe$1,name:"Tabs.List"})}let xe$1="button";function ge(e,n){var p,I;let t=I$2(),{id:o$2=`headlessui-tabs-tab-${t}`,...s}=e,{orientation:r,activation:i,selectedIndex:R,tabs:b,panels:c}=h("Tab"),u=q$1("Tab"),T$1=h("Tab"),l=C$2.useRef(null),d$1=y(l,n);l$3(()=>u.registerTab(l),[u,l]);let x=d("tabs"),m=b.indexOf(l);m===-1&&(m=x);let g=m===R,E=o$4(a=>{var j;let f=a();if(f===N.Success&&i==="auto"){let W=(j=o$1(l))==null?void 0:j.activeElement,z=T$1.tabs.findIndex(te=>te.current===W);z!==-1&&u.change(z);}return f}),S=o$4(a=>{let f=b.map(W=>W.current).filter(Boolean);if(a.key===o.Space||a.key===o.Enter){a.preventDefault(),a.stopPropagation(),u.change(m);return}switch(a.key){case o.Home:case o.PageUp:return a.preventDefault(),a.stopPropagation(),E(()=>O$1(f,M$2.First));case o.End:case o.PageDown:return a.preventDefault(),a.stopPropagation(),E(()=>O$1(f,M$2.Last))}if(E(()=>u$2(r,{vertical(){return a.key===o.ArrowUp?O$1(f,M$2.Previous|M$2.WrapAround):a.key===o.ArrowDown?O$1(f,M$2.Next|M$2.WrapAround):N.Error},horizontal(){return a.key===o.ArrowLeft?O$1(f,M$2.Previous|M$2.WrapAround):a.key===o.ArrowRight?O$1(f,M$2.Next|M$2.WrapAround):N.Error}}))===N.Success)return a.preventDefault()}),A=C$2.useRef(!1),L=o$4(()=>{var a;A.current||(A.current=!0,(a=l.current)==null||a.focus({preventScroll:!0}),u.change(m),t$1(()=>{A.current=!1;}));}),M=o$4(a=>{a.preventDefault();}),N$1=C$2.useMemo(()=>({selected:g}),[g]),B={ref:d$1,onKeyDown:S,onMouseDown:M,onClick:L,id:o$2,role:"tab",type:T(e,l),"aria-controls":(I=(p=c[m])==null?void 0:p.current)==null?void 0:I.id,"aria-selected":g,tabIndex:g?0:-1};return C$1({ourProps:B,theirProps:s,slot:N$1,defaultTag:xe$1,name:"Tabs.Tab"})}let Ee="div";function Ae(e,n){let{selectedIndex:t}=h("Tab.Panels"),o=y(n),s=C$2.useMemo(()=>({selectedIndex:t}),[t]);return C$1({ourProps:{ref:o},theirProps:e,slot:s,defaultTag:Ee,name:"Tabs.Panels"})}let Re$1="div",Le$1=O.RenderStrategy|O.Static;function _e$1(e,n){var E,S,A,L;let t=I$2(),{id:o=`headlessui-tabs-panel-${t}`,tabIndex:s=0,...r}=e,{selectedIndex:i,tabs:R,panels:b}=h("Tab.Panel"),c=q$1("Tab.Panel"),u=C$2.useRef(null),T=y(u,n);l$3(()=>c.registerPanel(u),[c,u]);let l=d("panels"),d$1=b.indexOf(u);d$1===-1&&(d$1=l);let x=d$1===i,m=C$2.useMemo(()=>({selected:x}),[x]),g={ref:T,id:o,role:"tabpanel","aria-labelledby":(S=(E=R[d$1])==null?void 0:E.current)==null?void 0:S.id,tabIndex:x?s:-1};return !x&&((A=r.unmount)==null||A)&&!((L=r.static)!=null&&L)?C$2.createElement(f$2,{as:"span","aria-hidden":"true",...g}):C$1({ourProps:g,theirProps:r,slot:m,defaultTag:Re$1,features:Le$1,visible:x,name:"Tabs.Panel"})}let Se$1=U$1(ge),Ie=U$1(me),De$1=U$1(ye$1),Fe$1=U$1(Ae),he=U$1(_e$1),$e=Object.assign(Se$1,{Group:Ie,List:De$1,Panels:Fe$1,Panel:he});

  function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

  function g(t,...e){t&&e.length>0&&t.classList.add(...e);}function v(t,...e){t&&e.length>0&&t.classList.remove(...e);}function b(t,e){let n=o$3();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:a}=getComputedStyle(t),[u,p]=[m,a].map(l=>{let[r=0]=l.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,T)=>T-i);return r}),o=u+p;if(o!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose();},o),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose();});});let l=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),l());});}else e();return n.add(()=>e()),n.dispose}function M$1(t,e,n,m){let a=n?"enter":"leave",u=o$3(),p=m!==void 0?l(m):()=>{};a==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let o=u$2(a,{enter:()=>e.enter,leave:()=>e.leave}),l$1=u$2(a,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=u$2(a,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),g(t,...e.base,...o,...r),u.nextFrame(()=>{v(t,...e.base,...o,...r),g(t,...e.base,...o,...l$1),b(t,()=>(v(t,...e.base,...o),g(t,...e.base,...e.entered),p()));}),u.dispose}

  function D({immediate:t,container:s,direction:n,classes:u,onStart:a,onStop:c}){let l=f$1(),d=p$1(),e=s$4(n);l$3(()=>{t&&(e.current="enter");},[t]),l$3(()=>{let r=o$3();d.add(r.dispose);let i=s.current;if(i&&e.current!=="idle"&&l.current)return r.dispose(),a.current(e.current),r.add(M$1(i,u.current,e.current==="enter",()=>{r.dispose(),c.current(e.current);})),r.dispose},[n]);}

  function S(t=""){return t.split(/\s+/).filter(n=>n.length>1)}let I=C$2.createContext(null);I.displayName="TransitionContext";var Se=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Se||{});function ye(){let t=C$2.useContext(I);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function xe(){let t=C$2.useContext(M);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let M=C$2.createContext(null);M.displayName="NestingContext";function U(t){return "children"in t?U(t.children):t.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function se(t,n){let r=s$4(t),s=C$2.useRef([]),R=f$1(),D=p$1(),p=o$4((i,e=v$1.Hidden)=>{let a=s.current.findIndex(({el:o})=>o===i);a!==-1&&(u$2(e,{[v$1.Unmount](){s.current.splice(a,1);},[v$1.Hidden](){s.current[a].state="hidden";}}),D.microTask(()=>{var o;!U(s)&&R.current&&((o=r.current)==null||o.call(r));}));}),x=o$4(i=>{let e=s.current.find(({el:a})=>a===i);return e?e.state!=="visible"&&(e.state="visible"):s.current.push({el:i,state:"visible"}),()=>p(i,v$1.Unmount)}),h=C$2.useRef([]),v=C$2.useRef(Promise.resolve()),u=C$2.useRef({enter:[],leave:[],idle:[]}),g=o$4((i,e,a)=>{h.current.splice(0),n&&(n.chains.current[e]=n.chains.current[e].filter(([o])=>o!==i)),n==null||n.chains.current[e].push([i,new Promise(o=>{h.current.push(o);})]),n==null||n.chains.current[e].push([i,new Promise(o=>{Promise.all(u.current[e].map(([f,N])=>N)).then(()=>o());})]),e==="enter"?v.current=v.current.then(()=>n==null?void 0:n.wait.current).then(()=>a(e)):a(e);}),d=o$4((i,e,a)=>{Promise.all(u.current[e].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=h.current.shift())==null||o();}).then(()=>a(e));});return C$2.useMemo(()=>({children:s,register:x,unregister:p,onStart:g,onStop:d,wait:v,chains:u}),[x,p,s,g,d,u,v])}function Ne(){}let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(t){var r;let n={};for(let s of Pe)n[s]=(r=t[s])!=null?r:Ne;return n}function Re(t){let n=C$2.useRef(ae(t));return C$2.useEffect(()=>{n.current=ae(t);},[t]),n}let De="div",le=O.RenderStrategy;function He(t$1,n){var Q,Y;let{beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1,enter:p,enterFrom:x,enterTo:h,entered:v,leave:u,leaveFrom:g,leaveTo:d,...i}=t$1,e=C$2.useRef(null),a=y(e,n),o=(Q=i.unmount)==null||Q?v$1.Unmount:v$1.Hidden,{show:f,appear:N,initial:T}=ye(),[l,j]=C$2.useState(f?"visible":"hidden"),z=xe(),{register:L,unregister:O}=z;C$2.useEffect(()=>L(e),[L,e]),C$2.useEffect(()=>{if(o===v$1.Hidden&&e.current){if(f&&l!=="visible"){j("visible");return}return u$2(l,{["hidden"]:()=>O(e),["visible"]:()=>L(e)})}},[l,e,L,O,f,o]);let k=s$4({base:S(i.className),enter:S(p),enterFrom:S(x),enterTo:S(h),entered:S(v),leave:S(u),leaveFrom:S(g),leaveTo:S(d)}),V=Re({beforeEnter:r,afterEnter:s,beforeLeave:R,afterLeave:D$1}),G=l$2();C$2.useEffect(()=>{if(G&&l==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,l,G]);let Te=T&&!N,K=N&&f&&T,de=(()=>!G||Te?"idle":f?"enter":"leave")(),H=c(0),fe=o$4(C=>u$2(C,{enter:()=>{H.addFlag(d$1.Opening),V.current.beforeEnter();},leave:()=>{H.addFlag(d$1.Closing),V.current.beforeLeave();},idle:()=>{}})),me=o$4(C=>u$2(C,{enter:()=>{H.removeFlag(d$1.Opening),V.current.afterEnter();},leave:()=>{H.removeFlag(d$1.Closing),V.current.afterLeave();},idle:()=>{}})),w=se(()=>{j("hidden"),O(e);},z),B=C$2.useRef(!1);D({immediate:K,container:e,classes:k,direction:de,onStart:s$4(C=>{B.current=!0,w.onStart(e,C,fe);}),onStop:s$4(C=>{B.current=!1,w.onStop(e,C,me),C==="leave"&&!U(w)&&(j("hidden"),O(e));})});let P=i,ce={ref:a};return K?P={...P,className:t(i.className,...k.current.enter,...k.current.enterFrom)}:B.current&&(P.className=t(i.className,(Y=e.current)==null?void 0:Y.className),P.className===""&&delete P.className),C$2.createElement(M.Provider,{value:w},C$2.createElement(s$1,{value:u$2(l,{["visible"]:d$1.Open,["hidden"]:d$1.Closed})|H.flags},C$1({ourProps:ce,theirProps:P,defaultTag:De,features:le,visible:l==="visible",name:"Transition.Child"})))}function Fe(t,n){let{show:r,appear:s=!1,unmount:R=!0,...D}=t,p=C$2.useRef(null),x=y(p,n);l$2();let h=u();if(r===void 0&&h!==null&&(r=(h&d$1.Open)===d$1.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,u$1]=C$2.useState(r?"visible":"hidden"),g=se(()=>{u$1("hidden");}),[d,i]=C$2.useState(!0),e=C$2.useRef([r]);l$3(()=>{d!==!1&&e.current[e.current.length-1]!==r&&(e.current.push(r),i(!1));},[e,r]);let a=C$2.useMemo(()=>({show:r,appear:s,initial:d}),[r,s,d]);C$2.useEffect(()=>{if(r)u$1("visible");else if(!U(g))u$1("hidden");else {let T=p.current;if(!T)return;let l=T.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&u$1("hidden");}},[r,g]);let o={unmount:R},f=o$4(()=>{var T;d&&i(!1),(T=t.beforeEnter)==null||T.call(t);}),N=o$4(()=>{var T;d&&i(!1),(T=t.beforeLeave)==null||T.call(t);});return C$2.createElement(M.Provider,{value:g},C$2.createElement(I.Provider,{value:a},C$1({ourProps:{...o,as:C$2.Fragment,children:C$2.createElement(ue,{ref:x,...o,...D,beforeEnter:f,beforeLeave:N})},theirProps:{},defaultTag:C$2.Fragment,features:le,visible:v==="visible",name:"Transition"})))}function _e(t,n){let r=C$2.useContext(I)!==null,s=u()!==null;return C$2.createElement(C$2.Fragment,null,!r&&s?C$2.createElement(q,{ref:n,...t}):C$2.createElement(ue,{ref:n,...t}))}let q=U$1(Fe),ue=U$1(He),Le=U$1(_e),qe=Object.assign(q,{Child:Le,Root:q});

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
    return document.body;
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
          console.log("destroy", containerRef.current);
          if (containerRef && containerRef.current) targetContainer.removeChild(containerRef.current);
        }
      };
    });
    return /*#__PURE__*/require$$0.createPortal( /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: "ProtalWrapper",
      ref: containerRef,
      children: children
    }), targetContainer);
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
      leave: "ease-in duration-200 delay-50",
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
      leave: "transform transition duration-400 ease-in-out",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-0",
      className: "fixed inset-0 w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-[1050]",
      children: children
    });
  });
  // Content
  var Content = function Content(_ref3) {
    var children = _ref3.children;
    return children;
  };
  // Modal
  var Modal = function Modal(props) {
    var _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      _props$useEsc = props.useEsc,
      useEsc = _props$useEsc === void 0 ? true : _props$useEsc,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      _props$maskClose = props.maskClose,
      maskClose = _props$maskClose === void 0 ? true : _props$maskClose,
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
        setInnerOpen(false);
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
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
      console.log("wrapperRef", wrapperRef.current);
      if (useEsc && wrapperRef.current) {
        wrapperRef.current.focus();
      }
    }, [wrapperRef]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(ModalContext.Provider, {
      value: props,
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(Portal, {
        visible: true,
        ref: portalRef,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Mask, {
          mask: maskVisible,
          maskClick: handleMaskClick
        }), /*#__PURE__*/jsxRuntimeExports.jsx(ModalWrapper, {
          ref: wrapperRef,
          visible: innerOpen,
          onKeyDown: handleWarpperKeyDown,
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Content, {
            children: children
          })
        })]
      })
    });
  };
  Modal.displayName = "".concat(Globals.componenetPrefixName, "_Modal");

  // THIS FILE IS AUTO GENERATED
  function AiFillPlusCircle (props) {
    return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"},"child":[]}]})(props);
  }

  var PopupBox = function PopupBox(props) {
    var open = props.open,
      reset = __rest(props, ["open"]);
    var _useState = C$2.useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
    C$2.useEffect(function () {
      setShow(open);
    }, [open]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(Modal, _objectSpread2(_objectSpread2({}, reset), {}, {
      open: show,
      maskClose: true,
      children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "w-full max-w-md",
        children: /*#__PURE__*/jsxRuntimeExports.jsxs($e.Group, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsxs($e.List, {
            className: "flex space-x-1 rounded-xl bg-blue-900/20 p-1",
            children: [Array.from(new Array(3)).map(function (_, index) {
              return /*#__PURE__*/jsxRuntimeExports.jsxs($e, {
                className: "text-blue-100 hover:bg-white/[0.12] hover:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2",
                children: ["Tab ", index + 1]
              }, index);
            }), /*#__PURE__*/jsxRuntimeExports.jsx($e, {
              className: "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              children: /*#__PURE__*/jsxRuntimeExports.jsx(AiFillPlusCircle, {})
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx($e.Panel, {
            className: "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            children: /*#__PURE__*/jsxRuntimeExports.jsx("p", {
              children: "Tab 1 Content"
            })
          }), /*#__PURE__*/jsxRuntimeExports.jsx($e.Panel, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx("p", {
              children: "Tab 2 Content"
            })
          }), /*#__PURE__*/jsxRuntimeExports.jsx($e.Panel, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx("p", {
              children: "Tab 3 Content"
            })
          })]
        })
      })
    }));
  };

  var createRoot;

  var m = require$$0;
  {
    createRoot = m.createRoot;
    m.hydrateRoot;
  }

  var App = function App() {
    var _useState = C$2.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];
    var handleClose = function handleClose() {
      setVisible(false);
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("section", {
        className: "relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 h-screen w-screen",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          loading: visible,
          onClick: function onClick() {
            setVisible(!visible);
          },
          children: "Click Me"
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(PopupBox, {
        open: visible,
        onClose: handleClose
      })]
    });
  };
  var root = createRoot(document.querySelector("#root"));
  root.render( /*#__PURE__*/jsxRuntimeExports.jsx(App, {}));

}));
//# sourceMappingURL=bundle.js.map

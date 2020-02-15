webpackHotUpdate("static/development/pages/again.js",{

/***/ "./src/View/UI/MenuButton.tsx":
/*!************************************!*\
  !*** ./src/View/UI/MenuButton.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Hooks_useSafeLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Hooks/useSafeLocation */ "./src/View/Hooks/useSafeLocation.tsx");
/* harmony import */ var _Styles_MenuButton_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Styles/MenuButton.scss */ "./src/View/Styles/MenuButton.scss");
/* harmony import */ var _Styles_MenuButton_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Styles_MenuButton_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/danielkrajnak/Documents/Code/dankLand/src/View/UI/MenuButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 500;\n  opacity: ", ";\n  transition: opacity 0.75s ease-in-out;\n  &:hover {\n    opacity: 1 !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.show ? 1 : 0.05;
});

var Button = function Button(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      _ref$fade = _ref.fade,
      fade = _ref$fade === void 0 ? false : _ref$fade;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showing = _React$useState2[0],
      setShowing = _React$useState2[1];

  var _useSafeLocation = Object(_Hooks_useSafeLocation__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useSafeLocation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSafeLocation, 1),
      safeLocation = _useSafeLocation2[0];

  var prevPath = null;

  if (safeLocation) {
    prevPath = safeLocation.pathname;
  }

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (fade) {
      var timeout = setTimeout(function () {
        return setShowing(false);
      }, 2000);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [fade]);
  return __jsx(MenuContainer, {
    color: color,
    show: showing,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    className: "menu-button menu-button-".concat(color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "MENU")));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=again.js.11658d31cab7536c58e8.hot-update.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./components/TeamBuilding.js":
/*!************************************!*\
  !*** ./components/TeamBuilding.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ teamBuilding; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TeamBuildingStyles.module.scss */ \"./components/TeamBuildingStyles.module.scss\");\n/* harmony import */ var _TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_er_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/er-logo.svg */ \"./public/er-logo.svg\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageTitle */ \"./components/PageTitle.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/elliotrichardson/Documents/webdevelopment/react/react-er-components-next/components/TeamBuilding.js\";\n\n // import { CSSTransitionGroup } from 'react-transition-group'\n\n\n\n\n\n\n\nfunction teamBuilding(props) {\n  var _this = this;\n\n  var altLayout = props.altLayout ? (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().AltLayout) : '';\n  var members = props.data.map(function (member, i) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      style: {\n        transitionDelay: \"\".concat(props.delay * i, \"ms\")\n      },\n      className: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Member),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().MemberHoverTrigger),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          className: \"\".concat((_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Image), \" \").concat(altLayout),\n          src: member.image,\n          alt: member.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h3\", {\n          className: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Name),\n          children: member.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n          className: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().JobTitle),\n          children: member.jobTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          className: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().CompanyLogo),\n          src: \"/assets/img/er-logo.svg\",\n          alt: \"Logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().icons),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            href: member.facebook,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n              icon: ['fab', 'facebook-square']\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            href: member.twitter,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n              icon: ['fab', 'twitter']\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            href: member.linkedin,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n              icon: ['fab', 'linkedin-in']\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, _this)\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 12\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    id: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().TeamBuilding),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PageTitle__WEBPACK_IMPORTED_MODULE_5__.default, {\n      title: \"Team Building\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_TeamBuildingStyles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().TeamBuildingContainer),\n      children: members\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 12\n  }, this);\n}\nteamBuilding.propTypes = {\n  altLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  delay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlYW1CdWlsZGluZy5qcz85ODc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCB7IENTU1RyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZWFtQnVpbGRpbmdTdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvZXItbG9nby5zdmcnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4vUGFnZVRpdGxlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZWFtQnVpbGRpbmcoIHByb3BzICkge1xuXG4gIGxldCBhbHRMYXlvdXQgPSBwcm9wcy5hbHRMYXlvdXQgPyBzdHlsZXMuQWx0TGF5b3V0IDogJydcblxuICBsZXQgbWVtYmVycyA9IHByb3BzLmRhdGEubWFwKCAoIG1lbWJlciwgaSApID0+IHtcbiAgICByZXR1cm4gPGRpdiBrZXk9e2l9IHN0eWxlPXt7XG4gICAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7IHByb3BzLmRlbGF5ICogaSB9bXNgXG4gICAgICB9fSBjbGFzc05hbWU9e3N0eWxlcy5NZW1iZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZW1iZXJIb3ZlclRyaWdnZXJ9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzLkltYWdlfSAke2FsdExheW91dH1gfSBzcmM9e21lbWJlci5pbWFnZX0gYWx0PXttZW1iZXIubmFtZX0vPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuTmFtZX0+e21lbWJlci5uYW1lfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLkpvYlRpdGxlfT57bWVtYmVyLmpvYlRpdGxlfTwvcD5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5Db21wYW55TG9nb30gc3JjPScvYXNzZXRzL2ltZy9lci1sb2dvLnN2ZycgYWx0PVwiTG9nb1wiLz5cbiAgICAgICAgey8qIDxMb2dvLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgIDxhIGhyZWY9e21lbWJlci5mYWNlYm9va30+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1sgJ2ZhYicsICdmYWNlYm9vay1zcXVhcmUnLCBdfS8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9e21lbWJlci50d2l0dGVyfT5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WyAnZmFiJywgJ3R3aXR0ZXInLCBdfS8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9e21lbWJlci5saW5rZWRpbn0+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1sgJ2ZhYicsICdsaW5rZWRpbi1pbicsIF19Lz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH0gKVxuXG4gIHJldHVybiAoIDxkaXYgaWQ9e3N0eWxlcy5UZWFtQnVpbGRpbmd9PlxuICAgIDxQYWdlVGl0bGUgdGl0bGU9XCJUZWFtIEJ1aWxkaW5nXCIvPlxuICAgIHsvKiA8Q1NTVHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT17c3R5bGVzLlRlYW1CdWlsZGluZ0NvbnRhaW5lcn0gdHJhbnNpdGlvbkFwcGVhcj17dHJ1ZX0gdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ9ezUwMH0gdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25FbnRlcj17dHJ1ZX0gdHJhbnNpdGlvbkxlYXZlPXt0cnVlfSB0cmFuc2l0aW9uTmFtZT17e1xuICAgICAgICBlbnRlcjogc3R5bGVzLmVudGVyLFxuICAgICAgICBlbnRlckFjdGl2ZTogc3R5bGVzLmVudGVyQWN0aXZlLFxuICAgICAgICBsZWF2ZTogc3R5bGVzLmxlYXZlLFxuICAgICAgICBsZWF2ZUFjdGl2ZTogc3R5bGVzLmxlYXZlQWN0aXZlLFxuICAgICAgICBhcHBlYXI6IHN0eWxlcy5hcHBlYXIsXG4gICAgICAgIGFwcGVhckFjdGl2ZTogc3R5bGVzLmFwcGVhckFjdGl2ZVxuICAgICAgfX0+XG4gICAgICB7bWVtYmVyc31cbiAgICA8L0NTU1RyYW5zaXRpb25Hcm91cD4gKi99XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UZWFtQnVpbGRpbmdDb250YWluZXJ9PlxuICAgICAge21lbWJlcnN9XG4gICAgPC9kaXY+XG4gIDwvZGl2PiApXG59XG5cbnRlYW1CdWlsZGluZy5wcm9wVHlwZXMgPSB7XG4gIGFsdExheW91dDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyXG59XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiSW1hZ2UiLCJzdHlsZXMiLCJsb2dvIiwiRm9udEF3ZXNvbWVJY29uIiwiUGFnZVRpdGxlIiwidGVhbUJ1aWxkaW5nIiwicHJvcHMiLCJhbHRMYXlvdXQiLCJBbHRMYXlvdXQiLCJtZW1iZXJzIiwiZGF0YSIsIm1hcCIsIm1lbWJlciIsImkiLCJ0cmFuc2l0aW9uRGVsYXkiLCJkZWxheSIsIk1lbWJlciIsIk1lbWJlckhvdmVyVHJpZ2dlciIsImltYWdlIiwibmFtZSIsIk5hbWUiLCJKb2JUaXRsZSIsImpvYlRpdGxlIiwiQ29tcGFueUxvZ28iLCJpY29ucyIsImZhY2Vib29rIiwidHdpdHRlciIsImxpbmtlZGluIiwiVGVhbUJ1aWxkaW5nIiwiVGVhbUJ1aWxkaW5nQ29udGFpbmVyIiwicHJvcFR5cGVzIiwiYm9vbCIsIm51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TeamBuilding.js\n");

/***/ })

});
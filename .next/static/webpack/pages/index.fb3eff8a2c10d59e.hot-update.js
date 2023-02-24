/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ \"./components/Navbar/index.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _provider_ToDoListProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/ToDoListProvider */ \"./provider/ToDoListProvider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    const { isConnected , setIsConnected , isLoading , setIsLoading , isError , setIsError , address , setAddress , chainId , setChainId , isMetamaskNotInstalled , setIsMetamaskNotInstalled  } = (0,_provider_ToDoListProvider__WEBPACK_IMPORTED_MODULE_3__.useToDoListProvider)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Navbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n            isConnected: isConnected,\n            isLoading: isLoading,\n            isError: isError,\n            setIsConnected: setIsConnected,\n            setIsLoading: setIsLoading,\n            setIsError: setIsError,\n            address: address,\n            setAddress: setAddress,\n            chainId: chainId,\n            setChainId: setChainId,\n            isMetamaskNotInstalled: isMetamaskNotInstalled,\n            setIsMetamaskNotInstalled: setIsMetamaskNotInstalled\n        }, void 0, false, {\n            fileName: \"/home/pk/Documents/Code/personal-projects/nextjs-template/components/Layout/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pk/Documents/Code/personal-projects/nextjs-template/components/Layout/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"MwUIjlF1UUQRIVdM+/J67+WdwvU=\", false, function() {\n    return [\n        _provider_ToDoListProvider__WEBPACK_IMPORTED_MODULE_3__.useToDoListProvider\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUdxQjtBQUNrQjtBQU90RSxTQUFTRyxPQUFPLEtBQXNCLEVBQUU7UUFBeEIsRUFBRUMsU0FBUSxFQUFZLEdBQXRCOztJQUNkLE1BQU0sRUFDSkMsWUFBVyxFQUNYQyxlQUFjLEVBQ2RDLFVBQVMsRUFDVEMsYUFBWSxFQUNaQyxRQUFPLEVBQ1BDLFdBQVUsRUFDVkMsUUFBTyxFQUNQQyxXQUFVLEVBQ1ZDLFFBQU8sRUFDUEMsV0FBVSxFQUNWQyx1QkFBc0IsRUFDdEJDLDBCQUF5QixFQUMxQixHQUFHZCwrRUFBbUJBO0lBRXZCLHFCQUNFLDhEQUFDZTtrQkFDQyw0RUFBQ2pCLGdEQUFNQTtZQUNMSyxhQUFhQTtZQUNiRSxXQUFXQTtZQUNYRSxTQUFTQTtZQUNUSCxnQkFBZ0JBO1lBQ2hCRSxjQUFjQTtZQUNkRSxZQUFZQTtZQUNaQyxTQUFTQTtZQUNUQyxZQUFZQTtZQUNaQyxTQUFTQTtZQUNUQyxZQUFZQTtZQUNaQyx3QkFBd0JBO1lBQ3hCQywyQkFBMkJBOzs7Ozs7Ozs7OztBQU9uQztHQXJDU2I7O1FBY0hELDJFQUFtQkE7OztLQWRoQkM7QUF1Q1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4PzY0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vTmF2YmFyXCI7XG5pbXBvcnQgTWV0YU1hc2tOb3RGb3VuZCBmcm9tIFwiLi4vTWV0YU1hc2tOb3RGb3VuZFwiO1xuaW1wb3J0IE5vdExvZ2dlZEluIGZyb20gXCIuLi9Ob3RMb2dnZWRJblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUb0RvTGlzdFByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyL1RvRG9MaXN0UHJvdmlkZXJcIjtcblxuXG50eXBlIFBhZ2VQcm9wID0ge1xuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdO1xufTtcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogUGFnZVByb3ApIHtcbiAgY29uc3Qge1xuICAgIGlzQ29ubmVjdGVkLFxuICAgIHNldElzQ29ubmVjdGVkLFxuICAgIGlzTG9hZGluZyxcbiAgICBzZXRJc0xvYWRpbmcsXG4gICAgaXNFcnJvcixcbiAgICBzZXRJc0Vycm9yLFxuICAgIGFkZHJlc3MsXG4gICAgc2V0QWRkcmVzcyxcbiAgICBjaGFpbklkLFxuICAgIHNldENoYWluSWQsXG4gICAgaXNNZXRhbWFza05vdEluc3RhbGxlZCxcbiAgICBzZXRJc01ldGFtYXNrTm90SW5zdGFsbGVkXG4gIH0gPSB1c2VUb0RvTGlzdFByb3ZpZGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhclxuICAgICAgICBpc0Nvbm5lY3RlZD17aXNDb25uZWN0ZWR9XG4gICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICBpc0Vycm9yPXtpc0Vycm9yfVxuICAgICAgICBzZXRJc0Nvbm5lY3RlZD17c2V0SXNDb25uZWN0ZWR9XG4gICAgICAgIHNldElzTG9hZGluZz17c2V0SXNMb2FkaW5nfVxuICAgICAgICBzZXRJc0Vycm9yPXtzZXRJc0Vycm9yfVxuICAgICAgICBhZGRyZXNzPXthZGRyZXNzfVxuICAgICAgICBzZXRBZGRyZXNzPXtzZXRBZGRyZXNzfVxuICAgICAgICBjaGFpbklkPXtjaGFpbklkfVxuICAgICAgICBzZXRDaGFpbklkPXtzZXRDaGFpbklkfVxuICAgICAgICBpc01ldGFtYXNrTm90SW5zdGFsbGVkPXtpc01ldGFtYXNrTm90SW5zdGFsbGVkfVxuICAgICAgICBzZXRJc01ldGFtYXNrTm90SW5zdGFsbGVkPXtzZXRJc01ldGFtYXNrTm90SW5zdGFsbGVkfVxuICAgICAgLz5cbiAgICAgICB7Lyoge2lzTWV0YW1hc2tOb3RJbnN0YWxsZWQgPyA8TWV0YU1hc2tOb3RGb3VuZCAvPiA6IChpc0Nvbm5lY3RlZCAmJiBjaGFpbklkPT09R09FUkxJX0lEKSA/IGNoaWxkcmVuIDogPE5vdExvZ2dlZEluIC8+fSAqL31cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwidXNlVG9Eb0xpc3RQcm92aWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJjaGFpbklkIiwic2V0Q2hhaW5JZCIsImlzTWV0YW1hc2tOb3RJbnN0YWxsZWQiLCJzZXRJc01ldGFtYXNrTm90SW5zdGFsbGVkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n"));

/***/ }),

/***/ "./components/Navbar/index.tsx":
/*!*************************************!*\
  !*** ./components/Navbar/index.tsx ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});
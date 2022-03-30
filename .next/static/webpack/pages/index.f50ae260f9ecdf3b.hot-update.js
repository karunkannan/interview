"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), patientData1 = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        fetch('api/patient/basics').then(function(res) {\n            return res.json();\n        }).then(function(patientData) {\n            setData(patientData);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 25\n    }, this);\n    if (!patientData1) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 28\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Thatch example app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: [\n                            \"Welcome to Thatch, \",\n                            patientData1.firstName,\n                            \" \",\n                            patientData1.lastName,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/dashboard\",\n                            children: \"View your patient dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: \"An example\"\n            }, void 0, false, {\n                fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adam/Documents/code/interview/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"BR7CYm+yJ7fdylwYc2YVrWcU9Ac=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDQTtBQUNlO0FBRUc7O0FBRS9CLFFBQVEsQ0FBQ0ssSUFBSSxHQUFHLENBQUM7O0lBQzlCLEdBQUssQ0FBMEJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXJDSSxZQUFXLEdBQWFKLEdBQWMsS0FBekJLLE9BQU8sR0FBSUwsR0FBYztJQUM3QyxHQUFLLENBQTJCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF2Q00sU0FBUyxHQUFnQk4sSUFBZSxLQUE3Qk8sVUFBVSxHQUFJUCxJQUFlO0lBRS9DQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmTSxVQUFVLENBQUMsSUFBSTtRQUNmQyxLQUFLLENBQUMsQ0FBb0IscUJBQ3ZCQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUk7V0FDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBMLFdBQVcsRUFBSyxDQUFDO1lBQ3RCQyxPQUFPLENBQUNELFdBQVc7WUFDbkJHLFVBQVUsQ0FBQyxLQUFLO1FBQ2xCLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBRSxFQUFFRCxTQUFTLEVBQUUsTUFBTSw2RUFBRU0sQ0FBQztrQkFBQyxDQUFVOzs7Ozs7SUFDbkMsRUFBRSxHQUFHUixZQUFXLEVBQUUsTUFBTSw2RUFBRVEsQ0FBQztrQkFBQyxDQUFlOzs7Ozs7SUFFM0MsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVaLDBFQUFnQjs7d0ZBQzdCSixrREFBSTs7Z0dBQ0ZrQixDQUFLO2tDQUFDLENBQWtCOzs7Ozs7Z0dBQ3hCQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ0MsT0FBTyxFQUFDLENBQThCOzs7Ozs7Z0dBQzlEQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFHckNDLENBQUk7Z0JBQUNULFNBQVMsRUFBRVoscUVBQVc7O2dHQUN6QnNCLENBQUU7d0JBQUNWLFNBQVMsRUFBRVosc0VBQVk7OzRCQUFFLENBQ1I7NEJBQUNFLFlBQVcsQ0FBQ3FCLFNBQVM7NEJBQUMsQ0FBQzs0QkFBQ3JCLFlBQVcsQ0FBQ3NCLFFBQVE7NEJBQUMsQ0FDbkU7Ozs7Ozs7Z0dBQ0NkLENBQUM7d0JBQUNFLFNBQVMsRUFBRVosa0VBQVE7OEdBQ25CSCxrREFBSTs0QkFBQ3VCLElBQUksRUFBQyxDQUFZO3NDQUFDLENBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJdERLLENBQU07Z0JBQUNiLFNBQVMsRUFBRVosdUVBQWE7MEJBQUUsQ0FFbEM7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0F2Q3VCQyxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3BhdGllbnREYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgZmV0Y2goJ2FwaS9wYXRpZW50L2Jhc2ljcycpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHBhdGllbnREYXRhKSA9PiB7XG4gICAgICAgIHNldERhdGEocGF0aWVudERhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgaWYgKCFwYXRpZW50RGF0YSkgcmV0dXJuIDxwPk5vIHByb2ZpbGUgZGF0YTwvcD5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGhhdGNoIGV4YW1wbGUgYXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdlbGNvbWUgdG8gVGhhdGNoLCB7cGF0aWVudERhdGEuZmlyc3ROYW1lfSB7cGF0aWVudERhdGEubGFzdE5hbWV9IVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlZpZXcgeW91ciBwYXRpZW50IGRhc2hib2FyZDwvTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIEFuIGV4YW1wbGVcbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkhvbWUiLCJwYXRpZW50RGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
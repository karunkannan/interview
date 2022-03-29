"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/patient/data";
exports.ids = ["pages/api/patient/data"];
exports.modules = {

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "(api)/./pages/api/patient/data.js":
/*!***********************************!*\
  !*** ./pages/api/patient/data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    try {\n        const response1 = await fetch('http://localhost:4567/example/patient');\n        const data = await response1.json();\n        res.status(200).json(data);\n    } catch (err) {\n        console.log(err);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGF0aWVudC9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQTZFO0FBRTNDO0FBRW5CLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0gsU0FBUSxHQUFHLEtBQUssQ0FBQ0ksS0FBSyxDQUFDLENBQXVDO1FBQ3BFLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0wsU0FBUSxDQUFDTSxJQUFJO1FBQ2hDSCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQ0QsSUFBSTtJQUMzQixDQUFDLENBQUMsS0FBSyxFQUFFRyxHQUFHLEVBQUMsQ0FBQztRQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztJQUNqQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3BhdGllbnQvZGF0YS5qcz8zODY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmltcG9ydCB7IHJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0NTY3L2V4YW1wbGUvcGF0aWVudCcpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXG4gIH0gY2F0Y2ggKGVycil7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9XG59XG4iXSwibmFtZXMiOlsicmVzcG9uc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/patient/data.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/patient/data.js"));
module.exports = __webpack_exports__;

})();
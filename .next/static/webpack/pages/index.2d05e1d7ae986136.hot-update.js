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

/***/ "./components/Inputname.js":
/*!*********************************!*\
  !*** ./components/Inputname.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Inputname; }\n/* harmony export */ });\n/* harmony import */ var C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _PlayersList_playersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayersList/playersList */ \"./components/PlayersList/playersList.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\HONG\\\\OneDrive\\\\Desktop\\\\loto\\\\loto-next-app\\\\components\\\\Inputname.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Inputname(_ref) {\n  _s();\n\n  var _playerName$current, _roomID$current;\n\n  var socket = _ref.socket,\n      colors = _ref.colors,\n      actions = _ref.actions;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),\n      _React$useState2 = (0,C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      filled = _React$useState2[0],\n      setInputField = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),\n      _React$useState4 = (0,C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      isResigned = _React$useState4[0],\n      setResigned = _React$useState4[1];\n\n  var playerName = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  var roomID = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"w-max\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      className: \"pixel-font text-center text-5xl\",\n      children: \"Lottto\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"flex flex-col gap-3 items-center justify-center px-3 \".concat(!isResigned ? \"block\" : \"hidden\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        required: true,\n        id: \"outlined-required\",\n        label: \"Input your name\",\n        onChange: function onChange() {\n          actions.handleInputField();\n        },\n        ref: playerName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        required: true,\n        id: \"outlined-required\",\n        label: \"Room ID\",\n        onChange: function onChange() {\n          actions.handleInputField();\n        },\n        ref: roomID\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        disabled: !filled,\n        variant: \"contained\",\n        className: \"bg-blue-500\",\n        onClick: function onClick() {\n          joinRoom();\n          actions.handleClickGo();\n        },\n        children: \"Go!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), isResigned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_PlayersList_playersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      socket: socket,\n      player: (_playerName$current = playerName.current) === null || _playerName$current === void 0 ? void 0 : _playerName$current.childNodes[1].childNodes[0].value,\n      room_id: (_roomID$current = roomID.current) === null || _roomID$current === void 0 ? void 0 : _roomID$current.childNodes[1].childNodes[0].value,\n      color: colors[Math.floor(Math.random() * 9)]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Inputname, \"d/gpXjRE2ujWLD9kPsYTB/S3qkI=\");\n\n_c = Inputname;\n\nvar _c;\n\n$RefreshReg$(_c, \"Inputname\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0bmFtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVlLFNBQVNJLFNBQVQsT0FBZ0Q7RUFBQTs7RUFBQTs7RUFBQSxJQUEzQkMsTUFBMkIsUUFBM0JBLE1BQTJCO0VBQUEsSUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtFQUFBLElBQVhDLE9BQVcsUUFBWEEsT0FBVzs7RUFDN0Qsc0JBQWdDUCwyQ0FBQSxDQUFlLEtBQWYsQ0FBaEM7RUFBQTtFQUFBLElBQU9TLE1BQVA7RUFBQSxJQUFlQyxhQUFmOztFQUNBLHVCQUFrQ1YsMkNBQUEsQ0FBZSxLQUFmLENBQWxDO0VBQUE7RUFBQSxJQUFPVyxVQUFQO0VBQUEsSUFBbUJDLFdBQW5COztFQUNBLElBQU1DLFVBQVUsR0FBR2IseUNBQUEsRUFBbkI7RUFDQSxJQUFNZSxNQUFNLEdBQUdmLHlDQUFBLEVBQWY7RUFFQSxvQkFDRTtJQUFLLFNBQVMsU0FBZDtJQUFBLHdCQUNFO01BQUksU0FBUyxFQUFFLGlDQUFmO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFFRTtNQUNFLFNBQVMsaUVBQ1AsQ0FBQ1csVUFBRCxHQUFjLE9BQWQsR0FBd0IsUUFEakIsQ0FEWDtNQUFBLHdCQUtFLDhEQUFDLCtEQUFEO1FBQ0UsUUFBUSxNQURWO1FBRUUsRUFBRSxFQUFDLG1CQUZMO1FBR0UsS0FBSyxFQUFDLGlCQUhSO1FBSUUsUUFBUSxFQUFFLG9CQUFNO1VBQ2RKLE9BQU8sQ0FBQ1MsZ0JBQVI7UUFDRCxDQU5IO1FBT0UsR0FBRyxFQUFFSDtNQVBQO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFMRixlQWVFLDhEQUFDLCtEQUFEO1FBQ0UsUUFBUSxNQURWO1FBRUUsRUFBRSxFQUFDLG1CQUZMO1FBR0UsS0FBSyxFQUFDLFNBSFI7UUFJRSxRQUFRLEVBQUUsb0JBQU07VUFDZE4sT0FBTyxDQUFDUyxnQkFBUjtRQUNELENBTkg7UUFPRSxHQUFHLEVBQUVEO01BUFA7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQWZGLGVBeUJFLDhEQUFDLDREQUFEO1FBQ0UsUUFBUSxFQUFFLENBQUNOLE1BRGI7UUFFRSxPQUFPLEVBQUMsV0FGVjtRQUdFLFNBQVMsZUFIWDtRQUlFLE9BQU8sRUFBRSxtQkFBTTtVQUNiUSxRQUFRO1VBQ1JWLE9BQU8sQ0FBQ1csYUFBUjtRQUNELENBUEg7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUF6QkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRkYsRUF1Q0dQLFVBQVUsaUJBQ1QsOERBQUMsZ0VBQUQ7TUFDRSxNQUFNLEVBQUVOLE1BRFY7TUFFRSxNQUFNLHlCQUFFUSxVQUFVLENBQUNNLE9BQWIsd0RBQUUsb0JBQW9CQyxVQUFwQixDQUErQixDQUEvQixFQUFrQ0EsVUFBbEMsQ0FBNkMsQ0FBN0MsRUFBZ0RDLEtBRjFEO01BR0UsT0FBTyxxQkFBRU4sTUFBTSxDQUFDSSxPQUFULG9EQUFFLGdCQUFnQkMsVUFBaEIsQ0FBMkIsQ0FBM0IsRUFBOEJBLFVBQTlCLENBQXlDLENBQXpDLEVBQTRDQyxLQUh2RDtNQUlFLEtBQUssRUFBRWYsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUFEO0lBSmY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQXhDSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWtERDs7R0F4RHVCcEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXRuYW1lLmpzPzNjZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgUGxheWVyc0xpc3QgZnJvbSBcIi4vUGxheWVyc0xpc3QvcGxheWVyc0xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0bmFtZSh7IHNvY2tldCwgY29sb3JzLCBhY3Rpb25zIH0pIHtcclxuICBjb25zdCBbZmlsbGVkLCBzZXRJbnB1dEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNSZXNpZ25lZCwgc2V0UmVzaWduZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHBsYXllck5hbWUgPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCByb29tSUQgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1tYXhgfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17XCJwaXhlbC1mb250IHRleHQtY2VudGVyIHRleHQtNXhsXCJ9PkxvdHR0bzwvaDE+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGdhcC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0zICR7XHJcbiAgICAgICAgICAhaXNSZXNpZ25lZCA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcclxuICAgICAgICAgIGxhYmVsPVwiSW5wdXQgeW91ciBuYW1lXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuaGFuZGxlSW5wdXRGaWVsZCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHJlZj17cGxheWVyTmFtZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZFwiXHJcbiAgICAgICAgICBsYWJlbD1cIlJvb20gSURcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgYWN0aW9ucy5oYW5kbGVJbnB1dEZpZWxkKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgcmVmPXtyb29tSUR9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFmaWxsZWR9XHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWJsdWUtNTAwYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgam9pblJvb20oKTtcclxuICAgICAgICAgICAgYWN0aW9ucy5oYW5kbGVDbGlja0dvKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEdvIVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzUmVzaWduZWQgJiYgKFxyXG4gICAgICAgIDxQbGF5ZXJzTGlzdFxyXG4gICAgICAgICAgc29ja2V0PXtzb2NrZXR9XHJcbiAgICAgICAgICBwbGF5ZXI9e3BsYXllck5hbWUuY3VycmVudD8uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlfVxyXG4gICAgICAgICAgcm9vbV9pZD17cm9vbUlELmN1cnJlbnQ/LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS52YWx1ZX1cclxuICAgICAgICAgIGNvbG9yPXtjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlBsYXllcnNMaXN0IiwiSW5wdXRuYW1lIiwic29ja2V0IiwiY29sb3JzIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwiZmlsbGVkIiwic2V0SW5wdXRGaWVsZCIsImlzUmVzaWduZWQiLCJzZXRSZXNpZ25lZCIsInBsYXllck5hbWUiLCJ1c2VSZWYiLCJyb29tSUQiLCJoYW5kbGVJbnB1dEZpZWxkIiwiam9pblJvb20iLCJoYW5kbGVDbGlja0dvIiwiY3VycmVudCIsImNoaWxkTm9kZXMiLCJ2YWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Inputname.js\n"));

/***/ })

});
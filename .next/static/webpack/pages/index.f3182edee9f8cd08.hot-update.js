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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/readOnlyError.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Inputname__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../components/Inputname */ \"./components/Inputname.js\");\n/* harmony import */ var _components_PlayersList_playersList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PlayersList/playersList */ \"./components/PlayersList/playersList.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\HONG\\\\OneDrive\\\\Desktop\\\\loto\\\\loto-next-app\\\\pages\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].connect(\"http://localhost:3001/\");\nfunction Home() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8__.useState(false),\n      _React$useState2 = (0,C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isResigned = _React$useState2[0],\n      setResigned = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8__.useState({}),\n      _React$useState4 = (0,C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      player = _React$useState4[0],\n      setPlayer = _React$useState4[1];\n\n  var colors = [\"#e97b40\", \"#e9cbff\", \"#99ccdd\", \"#a4daef\", \"#aaddee\", \"#009489\", \"#fdc8c0\", \"#8de8e8\", \"#ac92c0\", \"#ab92b3\"];\n\n  var handleClickGo = function handleClickGo(playerName, roomID) {\n    var name_roomID = {\n      player: playerName.current.childNodes[1].childNodes[0].value,\n      room_id: roomID.current.childNodes[1].childNodes[0].value\n    };\n    socket.emit(\"get-user\", name_roomID);\n    setResigned(true);\n    setPlayer(name_roomID);\n  };\n\n  var handleInputField = function handleInputField(playerName, roomID) {\n    var _playerName$current, _roomID$current;\n\n    return (playerName === null || playerName === void 0 ? void 0 : (_playerName$current = playerName.current) === null || _playerName$current === void 0 ? void 0 : _playerName$current.childNodes[1].childNodes[0].value) && (roomID === null || roomID === void 0 ? void 0 : (_roomID$current = roomID.current) === null || _roomID$current === void 0 ? void 0 : _roomID$current.childNodes[1].childNodes[0].value);\n  };\n\n  var joinRoom = function joinRoom(roomID) {\n    if (roomID.current.childNodes[1].childNodes[0].value !== \"\") {\n      socket.emit(\"join_room\", roomID.current.childNodes[1].childNodes[0].value);\n    }\n  };\n\n  var fillBingoNumber = function fillBingoNumber(number) {\n    var lastNumbers = number[number.length - 1];\n    var element = LottoTable.current.querySelector(\"div div#sub-table-\".concat(lastNumbers));\n\n    if (number.length > 0 && element != null) {\n      element.style.backgroundColor = color;\n      element.style.color = \"#fff\";\n      element.id = \"bingo\";\n      var count_bingo = 0;\n\n      for (var i = 0; i < 5; i++) {\n        if (element.parentNode.childNodes[i].id == \"bingo\") {\n          count_bingo++;\n        }\n      }\n\n      return count_bingo;\n    }\n  };\n\n  var _ref = [],\n      uniquePlayers = _ref[0],\n      setUniquePlayer = _ref[1];\n\n  var uniqueObjects = function uniqueObjects(arr) {\n    return (0,C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Map(arr.map(function (item) {\n      return [item.player, item];\n    })).values());\n  };\n\n  var startTheGame = function startTheGame(playersList, room_id, isStarted) {\n    uniqueObjects((0,C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playersList)), (0,C_Users_HONG_OneDrive_Desktop_loto_loto_next_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"uniquePlayers\");\n    socket.emit(\"start-game\", uniquePlayers, room_id, isStarted);\n  };\n\n  var callANumber = function callANumber(setCallNumberClick) {\n    socket.emit(\"call-number\", room_id, count, player, room_id);\n    setCount(count + 1);\n    setCallNumberClick(true);\n    setTimeout(function () {\n      setCallNumberClick(false);\n    }, 0);\n  };\n\n  var actions = {\n    register: {\n      joinRoom: joinRoom,\n      handleInputField: handleInputField,\n      handleClickGo: handleClickGo\n    },\n    game_play: {\n      uniquePlayers: uniquePlayers,\n      startTheGame: startTheGame,\n      fillBingoNumber: fillBingoNumber,\n      callANumber: callANumber\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container), \" flex flex-col gap-2 items-center h-screen justify-center\"),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"title\", {\n        children: \"Lotto.io\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossOrigin: \"true\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Silkscreen&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), !isResigned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Inputname__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      socket: socket,\n      actions: actions.register,\n      colors: colors\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }, this), isResigned && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_PlayersList_playersList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      socket: socket,\n      player: player.player,\n      room_id: player.roomID,\n      color: colors[Math.floor(Math.random() * 9)],\n      actions: actions.game_play\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"bxuzGM0Vt2BTYLKzgFI3c0DRtEI=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBSEYsRUFrQkcsQ0FBQ1MsVUFBRCxpQkFDQyw4REFBQyw2REFBRDtNQUFXLE1BQU0sRUFBRUosTUFBbkI7TUFBMkIsT0FBTyxFQUFFa0QsT0FBTyxDQUFDQyxRQUE1QztNQUFzRCxNQUFNLEVBQUUzQztJQUE5RDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBbkJKLEVBcUJHSixVQUFVLGlCQUNULDhEQUFDLDJFQUFEO01BQ0UsTUFBTSxFQUFFSixNQURWO01BRUUsTUFBTSxFQUFFTSxNQUFNLENBQUNBLE1BRmpCO01BR0UsT0FBTyxFQUFFQSxNQUFNLENBQUNLLE1BSGxCO01BSUUsS0FBSyxFQUFFSCxNQUFNLENBQUM4QyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQUQsQ0FKZjtNQUtFLE9BQU8sRUFBRU4sT0FBTyxDQUFDRTtJQUxuQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBdEJKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBaUNEOztHQTdIdUJsRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbnB1dE5hbWUgZnJvbSBcIi9jb21wb25lbnRzL0lucHV0bmFtZVwiO1xyXG5pbXBvcnQgUGxheWVyc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheWVyc0xpc3QvcGxheWVyc0xpc3RcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9cIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtpc1Jlc2lnbmVkLCBzZXRSZXNpZ25lZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgY29sb3JzID0gW1xyXG4gICAgXCIjZTk3YjQwXCIsXHJcbiAgICBcIiNlOWNiZmZcIixcclxuICAgIFwiIzk5Y2NkZFwiLFxyXG4gICAgXCIjYTRkYWVmXCIsXHJcbiAgICBcIiNhYWRkZWVcIixcclxuICAgIFwiIzAwOTQ4OVwiLFxyXG4gICAgXCIjZmRjOGMwXCIsXHJcbiAgICBcIiM4ZGU4ZThcIixcclxuICAgIFwiI2FjOTJjMFwiLFxyXG4gICAgXCIjYWI5MmIzXCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tHbyA9IChwbGF5ZXJOYW1lLCByb29tSUQpID0+IHtcclxuICAgIGNvbnN0IG5hbWVfcm9vbUlEID0ge1xyXG4gICAgICBwbGF5ZXI6IHBsYXllck5hbWUuY3VycmVudC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0udmFsdWUsXHJcbiAgICAgIHJvb21faWQ6IHJvb21JRC5jdXJyZW50LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS52YWx1ZSxcclxuICAgIH07XHJcbiAgICBzb2NrZXQuZW1pdChcImdldC11c2VyXCIsIG5hbWVfcm9vbUlEKTtcclxuICAgIHNldFJlc2lnbmVkKHRydWUpO1xyXG4gICAgc2V0UGxheWVyKG5hbWVfcm9vbUlEKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dEZpZWxkID0gKHBsYXllck5hbWUsIHJvb21JRCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcGxheWVyTmFtZT8uY3VycmVudD8uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlICYmXHJcbiAgICAgIHJvb21JRD8uY3VycmVudD8uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGpvaW5Sb29tID0gKHJvb21JRCkgPT4ge1xyXG4gICAgaWYgKHJvb21JRC5jdXJyZW50LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICBzb2NrZXQuZW1pdChcclxuICAgICAgICBcImpvaW5fcm9vbVwiLFxyXG4gICAgICAgIHJvb21JRC5jdXJyZW50LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZpbGxCaW5nb051bWJlciA9IChudW1iZXIpID0+IHtcclxuICAgIGxldCBsYXN0TnVtYmVycyA9IG51bWJlcltudW1iZXIubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZWxlbWVudCA9IExvdHRvVGFibGUuY3VycmVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgZGl2IGRpdiNzdWItdGFibGUtJHtsYXN0TnVtYmVyc31gXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChudW1iZXIubGVuZ3RoID4gMCAmJiBlbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiI2ZmZlwiO1xyXG5cclxuICAgICAgZWxlbWVudC5pZCA9IFwiYmluZ29cIjtcclxuXHJcbiAgICAgIGxldCBjb3VudF9iaW5nbyA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZE5vZGVzW2ldLmlkID09IFwiYmluZ29cIikge1xyXG4gICAgICAgICAgY291bnRfYmluZ28rKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb3VudF9iaW5nbztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbdW5pcXVlUGxheWVycywgc2V0VW5pcXVlUGxheWVyXSA9IFtdO1xyXG5cclxuICBjb25zdCB1bmlxdWVPYmplY3RzID0gKGFycikgPT4gW1xyXG4gICAgLi4ubmV3IE1hcChhcnIubWFwKChpdGVtKSA9PiBbaXRlbS5wbGF5ZXIsIGl0ZW1dKSkudmFsdWVzKCksXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc3RhcnRUaGVHYW1lID0gKHBsYXllcnNMaXN0LCByb29tX2lkLCBpc1N0YXJ0ZWQpID0+IHtcclxuICAgIHVuaXF1ZVBsYXllcnMgPSB1bmlxdWVPYmplY3RzKFsuLi5wbGF5ZXJzTGlzdF0pO1xyXG4gICAgc29ja2V0LmVtaXQoXCJzdGFydC1nYW1lXCIsIHVuaXF1ZVBsYXllcnMsIHJvb21faWQsIGlzU3RhcnRlZCk7XHJcbiAgfTtcclxuICBjb25zdCBjYWxsQU51bWJlciA9IChzZXRDYWxsTnVtYmVyQ2xpY2spID0+IHtcclxuICAgIHNvY2tldC5lbWl0KFwiY2FsbC1udW1iZXJcIiwgcm9vbV9pZCwgY291bnQsIHBsYXllciwgcm9vbV9pZCk7XHJcbiAgICBzZXRDb3VudChjb3VudCArIDEpO1xyXG5cclxuICAgIHNldENhbGxOdW1iZXJDbGljayh0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0Q2FsbE51bWJlckNsaWNrKGZhbHNlKTtcclxuICAgIH0sIDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICByZWdpc3RlcjogeyBqb2luUm9vbSwgaGFuZGxlSW5wdXRGaWVsZCwgaGFuZGxlQ2xpY2tHbyB9LFxyXG4gICAgZ2FtZV9wbGF5OiB7IHVuaXF1ZVBsYXllcnMsIHN0YXJ0VGhlR2FtZSwgZmlsbEJpbmdvTnVtYmVyLCBjYWxsQU51bWJlciB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gZmxleCBmbGV4LWNvbCBnYXAtMiBpdGVtcy1jZW50ZXIgaC1zY3JlZW4ganVzdGlmeS1jZW50ZXJgfVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TG90dG8uaW88L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNpbGtzY3JlZW4mZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgeyFpc1Jlc2lnbmVkICYmIChcclxuICAgICAgICA8SW5wdXROYW1lIHNvY2tldD17c29ja2V0fSBhY3Rpb25zPXthY3Rpb25zLnJlZ2lzdGVyfSBjb2xvcnM9e2NvbG9yc30gLz5cclxuICAgICAgKX1cclxuICAgICAge2lzUmVzaWduZWQgJiYgKFxyXG4gICAgICAgIDxQbGF5ZXJzTGlzdFxyXG4gICAgICAgICAgc29ja2V0PXtzb2NrZXR9XHJcbiAgICAgICAgICBwbGF5ZXI9e3BsYXllci5wbGF5ZXJ9XHJcbiAgICAgICAgICByb29tX2lkPXtwbGF5ZXIucm9vbUlEfVxyXG4gICAgICAgICAgY29sb3I9e2NvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV19XHJcbiAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zLmdhbWVfcGxheX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiSW5wdXROYW1lIiwiUGxheWVyc0xpc3QiLCJpbyIsIlJlYWN0Iiwic29ja2V0IiwiY29ubmVjdCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImlzUmVzaWduZWQiLCJzZXRSZXNpZ25lZCIsInBsYXllciIsInNldFBsYXllciIsImNvbG9ycyIsImhhbmRsZUNsaWNrR28iLCJwbGF5ZXJOYW1lIiwicm9vbUlEIiwibmFtZV9yb29tSUQiLCJjdXJyZW50IiwiY2hpbGROb2RlcyIsInZhbHVlIiwicm9vbV9pZCIsImVtaXQiLCJoYW5kbGVJbnB1dEZpZWxkIiwiam9pblJvb20iLCJmaWxsQmluZ29OdW1iZXIiLCJudW1iZXIiLCJsYXN0TnVtYmVycyIsImxlbmd0aCIsImVsZW1lbnQiLCJMb3R0b1RhYmxlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJpZCIsImNvdW50X2JpbmdvIiwiaSIsInBhcmVudE5vZGUiLCJ1bmlxdWVQbGF5ZXJzIiwic2V0VW5pcXVlUGxheWVyIiwidW5pcXVlT2JqZWN0cyIsImFyciIsIk1hcCIsIm1hcCIsIml0ZW0iLCJ2YWx1ZXMiLCJzdGFydFRoZUdhbWUiLCJwbGF5ZXJzTGlzdCIsImlzU3RhcnRlZCIsImNhbGxBTnVtYmVyIiwic2V0Q2FsbE51bWJlckNsaWNrIiwiY291bnQiLCJzZXRDb3VudCIsInNldFRpbWVvdXQiLCJhY3Rpb25zIiwicmVnaXN0ZXIiLCJnYW1lX3BsYXkiLCJjb250YWluZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
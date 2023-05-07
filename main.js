/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --teal: #72b4c5;\n    --dropShadow: drop-shadow(0 0 4px rgba(61, 61, 61, 0.658));\n    --high: #bd3535;\n    --medium: #f8cd56;\n    --low: #7fbe7f;\n}\n\nbody {\n    background-color: #FED9B7;\n    color: black;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 300;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100svh;\n    min-width: 100vw;\n    overflow: hidden;\n}\n\nheader {\n    height: 6rem;\n    display: flex;\n}\n\nmain {\n    height: calc(100vh - 6rem);\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#logo {\n    color: var(--teal);\n    -webkit-text-stroke: 2px #50a3b8;\n    font-size: 4rem;\n    font-weight: bold;\n    line-height: 6rem;\n    text-decoration: none;\n}\n\n#logo:visited {\n        color: var(--teal);\n        text-decoration: none;\n    }\n\n#container {\n    background-color: white;\n    border-radius: 1.4rem 1.4rem 0 0;\n    box-shadow: 10px 8px 5px rgba(48, 48, 48, 0.171);\n    padding: 3rem;\n    height: 100%;\n    width: 90%;\n    display: flex;\n}\n\n#sidebar {\n    border-right: solid 1px grey;\n    height: 90%;\n    width: 13rem;\n    flex-shrink: 0;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n#sidebar button {\n        align-self: stretch;\n        background-color: var(--teal);\n        border: none;\n        border-radius: 1rem;\n        font-size: 1.6rem;\n        padding: 0.8rem;\n        margin-right: 3rem;\n        transition: 110ms ease-in;\n    }\n\n#sidebar button:hover {\n            transform: scale(1.03);\n            filter: var(--dropShadow);\n        }\n\ndialog[open] {\n    border: none;\n    border-radius: 1.6rem;\n    box-shadow: var(--smallShadow);\n    font-size: 1.2rem;\n    padding: 1.5rem;\n    gap: 0.6rem;\n    animation: fadeIn 0.4s linear 1;\n}\n\ndialog[open]>label:first-child {\n        margin-bottom: 1rem;\n    }\n\n@keyframes fadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n    }\n\ndialog[open]::backdrop {\n        animation: fadeIn 0.4s linear 0;\n        background-color: #0000006c;\n        backdrop-filter: blur(3px);\n    }\n\ndialog[open] label {\n        display: flex;\n        flex-direction: column;\n    }\n\ndialog[open] label,\n    dialog[open] input,\n    dialog[open] select,\n    dialog[open] textarea,\n    dialog[open] button {\n        font-family: inherit;\n        font-size: inherit;\n        gap: 0.3rem;\n    }\n\ndialog[open] input[type=\"time\"] {\n        width: 6rem;\n    }\n\ndialog[open]>form {\n        gap: 0.6rem;\n    }\n\ndialog[open]>form>div {\n            display: flex;\n            justify-content: space-between;\n        }\n\ndialog[open]>form>div:last-child {\n                margin-top: 2rem;\n            }\n\ndialog[open]>form textarea {\n            height: 9rem;\n            width:25rem;\n            padding: 0.4rem;\n            resize: none;\n        }\n\nul {\n    padding: 0;\n    list-style: none;\n}\n\nli {\n    font-size: 2rem;\n    margin: 2rem 0 2rem;\n    transition: 100ms linear;\n    user-select: none;\n}\n\nli:hover {\n        color: grey;\n        cursor: pointer;\n    }\n\n#main-area {\n    font-size: 1.4rem;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n#main-area>#filters {\n        border-bottom: solid 1px grey;\n        height: 8rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        flex-wrap: wrap;\n    }\n\n#main-area>#filters>* {\n            margin-left: 2rem;\n            flex-shrink: 0;\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n\n#main-area>#categories {\n        justify-content: space-between;\n    }\n\n#main-area .filter {\n        text-align: end;\n        margin: 0.2rem 0;\n        display: grid;\n        grid-template-columns: auto 1.2em;\n        gap: 0.5em;\n        cursor: pointer;\n        user-select: none;\n    }\n\n#main-area #importance>div {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n    }\n\n@media screen and (max-width: 1266px) {\n    #importance>div {\n        flex-direction: row !important;\n        gap: 2rem;\n    }\n}\n\n#list {\n    margin-bottom: 0.5rem;\n    padding: 1.6rem;\n}\n\n#list .entry {\n        font-size: 1rem;\n        background-color: white;\n        border: 1px solid grey;\n        height: 2.8rem;\n        width: 100%;\n        margin-bottom: 0.6rem;\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        transition: 110ms linear;\n    }\n\n#list .entry:hover {\n            transform: scale(1.01);\n            filter: var(--dropShadow);\n        }\n\n#list .entry .left {\n            flex: 1;\n            max-width: 40rem;\n        }\n\n#list .entry .left .category,\n            #list .entry .left .name {\n                flex-shrink: 0;\n            }\n\n#list .entry .left,\n        #list .entry .right {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n#list .entry .category {\n            font-weight: normal;\n            line-height: 2.8rem;\n            text-align: center;\n            border-right: 1px solid grey;\n            height: 100%;\n            width: 7rem;\n            margin: 0;\n            user-select: none;\n        }\n\n#list .entry .notes {\n            color: rgb(77, 77, 77);\n            font-weight: 100;\n            min-width: 0px;\n            max-width: 32rem;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 1;\n            overflow: hidden;\n        }\n\n#list .entry .delete {\n            margin-right: 1.5rem;\n        }\n\ninput[type='checkbox'] {\n    appearance: none;\n    background-color: transparent;\n    margin: 0;\n    border: 4px solid var(--teal);\n    cursor: pointer;\n    display: grid;\n    place-content: center;\n}\n\ninput[type='checkbox']::before {\n        content: '';\n        width: 1rem;\n        height: 1rem;\n        transform: scale(0);\n        transform-origin: bottom left;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transition: 110ms linear;\n        box-shadow: inset 1rem 1rem var(--teal);\n    }\n\ninput[type='checkbox']:checked::before {\n        transform: scale(1);\n    }\n\nbutton {\n    cursor: pointer;\n    font-family: inherit;\n    text-align: center;\n}\n\n.list-btn {\n    background-color: transparent;\n    border: 3px solid var(--teal);\n    color: var(--teal);\n    font-weight: bold;\n    transition: 50ms linear;\n}\n\n.list-btn:hover {\n        transform: scale(1.1);\n    }\n\ninput:disabled,\ntextarea:disabled,\nselect:disabled {\n    background-color: transparent;\n    border: none;\n    color: black;\n    font-weight: bold;\n    padding: 0 !important;\n    appearance: none;\n}\n\n.vert-flex {\n    display: flex;\n    flex-direction: column;\n}\n\n.category-hidden,\n.importance-hidden,\n.due-date-hidden {\n    display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');\n\n:root {\n    --teal: #72b4c5;\n    --dropShadow: drop-shadow(0 0 4px rgba(61, 61, 61, 0.658));\n    --high: #bd3535;\n    --medium: #f8cd56;\n    --low: #7fbe7f;\n}\n\nbody {\n    background-color: #FED9B7;\n    color: black;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 300;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100svh;\n    min-width: 100vw;\n    overflow: hidden;\n}\n\nheader {\n    height: 6rem;\n    display: flex;\n}\n\nmain {\n    height: calc(100vh - 6rem);\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#logo {\n    color: var(--teal);\n    -webkit-text-stroke: 2px #50a3b8;\n    font-size: 4rem;\n    font-weight: bold;\n    line-height: 6rem;\n    text-decoration: none;\n\n    &:visited {\n        color: var(--teal);\n        text-decoration: none;\n    }\n}\n\n#container {\n    background-color: white;\n    border-radius: 1.4rem 1.4rem 0 0;\n    box-shadow: 10px 8px 5px rgba(48, 48, 48, 0.171);\n    padding: 3rem;\n    height: 100%;\n    width: 90%;\n    display: flex;\n}\n\n#sidebar {\n    border-right: solid 1px grey;\n    height: 90%;\n    width: 13rem;\n    flex-shrink: 0;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    & button {\n        align-self: stretch;\n        background-color: var(--teal);\n        border: none;\n        border-radius: 1rem;\n        font-size: 1.6rem;\n        padding: 0.8rem;\n        margin-right: 3rem;\n        transition: 110ms ease-in;\n\n        &:hover {\n            transform: scale(1.03);\n            filter: var(--dropShadow);\n        }\n    }\n}\n\ndialog[open] {\n    border: none;\n    border-radius: 1.6rem;\n    box-shadow: var(--smallShadow);\n    font-size: 1.2rem;\n    padding: 1.5rem;\n    gap: 0.6rem;\n    animation: fadeIn 0.4s linear 1;\n\n    &>label:first-child {\n        margin-bottom: 1rem;\n    }\n\n    @keyframes fadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n    }\n\n    &::backdrop {\n        animation: fadeIn 0.4s linear 0;\n        background-color: #0000006c;\n        backdrop-filter: blur(3px);\n    }\n\n    & label {\n        display: flex;\n        flex-direction: column;\n    }\n\n    & label,\n    input,\n    select,\n    textarea,\n    button {\n        font-family: inherit;\n        font-size: inherit;\n        gap: 0.3rem;\n    }\n\n    & input[type=\"time\"] {\n        width: 6rem;\n    }\n\n    &>form {\n        gap: 0.6rem;\n\n        &>div {\n            display: flex;\n            justify-content: space-between;\n\n            &:last-child {\n                margin-top: 2rem;\n            }\n        }\n\n        & textarea {\n            height: 9rem;\n            width:25rem;\n            padding: 0.4rem;\n            resize: none;\n        }\n    }\n}\n\nul {\n    padding: 0;\n    list-style: none;\n}\n\nli {\n    font-size: 2rem;\n    margin: 2rem 0 2rem;\n    transition: 100ms linear;\n    user-select: none;\n\n    &:hover {\n        color: grey;\n        cursor: pointer;\n    }\n}\n\n#main-area {\n    font-size: 1.4rem;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    &>#filters {\n        border-bottom: solid 1px grey;\n        height: 8rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        flex-wrap: wrap;\n\n        &>* {\n            margin-left: 2rem;\n            flex-shrink: 0;\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n    }\n\n    &>#categories {\n        justify-content: space-between;\n    }\n\n    & .filter {\n        text-align: end;\n        margin: 0.2rem 0;\n        display: grid;\n        grid-template-columns: auto 1.2em;\n        gap: 0.5em;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    & #importance>div {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width: 1266px) {\n    #importance>div {\n        flex-direction: row !important;\n        gap: 2rem;\n    }\n}\n\n#list {\n    margin-bottom: 0.5rem;\n    padding: 1.6rem;\n\n    & .entry {\n        font-size: 1rem;\n        background-color: white;\n        border: 1px solid grey;\n        height: 2.8rem;\n        width: 100%;\n        margin-bottom: 0.6rem;\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        transition: 110ms linear;\n\n        &:hover {\n            transform: scale(1.01);\n            filter: var(--dropShadow);\n        }\n\n        & .left {\n            flex: 1;\n            max-width: 40rem;\n\n            & .category,\n            .name {\n                flex-shrink: 0;\n            }\n        }\n\n        & .left,\n        .right {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n        & .category {\n            font-weight: normal;\n            line-height: 2.8rem;\n            text-align: center;\n            border-right: 1px solid grey;\n            height: 100%;\n            width: 7rem;\n            margin: 0;\n            user-select: none;\n        }\n\n        & .notes {\n            color: rgb(77, 77, 77);\n            font-weight: 100;\n            min-width: 0px;\n            max-width: 32rem;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 1;\n            overflow: hidden;\n        }\n\n        & .delete {\n            margin-right: 1.5rem;\n        }\n    }\n}\n\ninput[type='checkbox'] {\n    appearance: none;\n    background-color: transparent;\n    margin: 0;\n    border: 4px solid var(--teal);\n    cursor: pointer;\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: '';\n        width: 1rem;\n        height: 1rem;\n        transform: scale(0);\n        transform-origin: bottom left;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transition: 110ms linear;\n        box-shadow: inset 1rem 1rem var(--teal);\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n}\n\nbutton {\n    cursor: pointer;\n    font-family: inherit;\n    text-align: center;\n}\n\n.list-btn {\n    background-color: transparent;\n    border: 3px solid var(--teal);\n    color: var(--teal);\n    font-weight: bold;\n    transition: 50ms linear;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n}\n\ninput:disabled,\ntextarea:disabled,\nselect:disabled {\n    background-color: transparent;\n    border: none;\n    color: black;\n    font-weight: bold;\n    padding: 0 !important;\n    appearance: none;\n}\n\n.vert-flex {\n    display: flex;\n    flex-direction: column;\n}\n\n.category-hidden,\n.importance-hidden,\n.due-date-hidden {\n    display: none !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dates.js":
/*!******************************!*\
  !*** ./src/modules/dates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDue": () => (/* binding */ setDue)
/* harmony export */ });
function setDue(entry) {
    const currentDate = new Date();
    const due = entry.dueAsDate;

    return isSameDay(currentDate, due)  ? 'today'
        :  isSameWeek(currentDate, due) ? 'week'
        :  'future';
}

function isSameDay(current, toCheck) {
    return current.toDateString() === toCheck.toDateString();
}

function isSameWeek(current, toCheck) {
    const weekBoundary = current.getDate() + 7;
    current.setDate(weekBoundary);
    return current >= toCheck;
}

/***/ }),

/***/ "./src/modules/display-control.js":
/*!****************************************!*\
  !*** ./src/modules/display-control.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEntryToDisplay": () => (/* binding */ addEntryToDisplay)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/modules/forms.js");
/* harmony import */ var _dates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates.js */ "./src/modules/dates.js");
/* harmony import */ var _entry_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-factory.js */ "./src/modules/entry-factory.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");
/* harmony import */ var _form_fields_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-fields.js */ "./src/modules/form-fields.js");






function addEntryToDisplay(entry, index) {
    const listItem = document.createElement('div');
    listItem.classList.add('entry');
    listItem.dataset.index = index;
    listItem.dataset.category = entry.category;
    listItem.dataset.importance = entry.importance;
    
    if (entry.category !== 'Reminder') {
       listItem.dataset.due = (0,_dates_js__WEBPACK_IMPORTED_MODULE_1__.setDue)(entry);  
    }

    listItem.appendChild(createLeftHalf(entry.constructor.name, entry.name, entry.notes));
    listItem.appendChild(createRightHalf(entry));
    listItem.style.boxShadow = `-0.5em 0 var(--${entry.importance}) inset`;

    const list = document.querySelector('#list');
    list.appendChild(listItem);
}

function createLeftHalf(type, name, notes) {
    // render default name heading
    name = (name === '') ? '-' : name;

    const div = document.createElement('div');
    div.classList.add('left');

    const tags = ['h4', 'h4', 'p'];
    const classes = ['category', 'name', 'notes'];
    const contents = [type, name, notes];

    tags.forEach((tag, i) => {
        const el = document.createElement(tag);
        el.classList.add(classes[i]);
        el.textContent = contents[i];
        div.appendChild(el);
    });

    return div;
}

function createRightHalf(entry) {
    const div = document.createElement('div');
    div.classList.add('right');

    const classes = ['details', 'delete'];
    const btnNames = ['Details', 'X'];
    btnNames.forEach((name, i) => {
        const btn = document.createElement('button');
        btn.classList.add(classes[i]);
        btn.classList.add('list-btn');
        btn.textContent = name;
        div.appendChild(btn);
    });

    div.firstChild.addEventListener('click', openDetails.bind(null, entry));

    if (entry.category !== 'Reminder') {
        appendDateField(div, entry);
    }

    return div;
}

function appendDateField(div, entry) {
    const ddMMyyyy = convertToDDMMYYYY(entry.due);
    const p = document.createElement('p');
    p.classList.add('due');
    p.innerHTML = `<b>${entry.constructor.name === 'Task' ? 'Due:' : 'Starts:'}</b> ${ddMMyyyy}`;

    div.insertBefore(p, div.firstChild);
}

function convertToDDMMYYYY(date) {
    return date === null ? 0 : `${date.slice(-2)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
}

function openDetails(entry) {
    const modal = document.querySelector('#details');
    modal.showModal();

    // tie modal to instance of object
    modal.dataset.item = _entry_factory_js__WEBPACK_IMPORTED_MODULE_2__.entries.indexOf(entry);
    
    const form = details.querySelector('form');
    form.replaceChildren();

    const category = entry.constructor.name;
    const fields = (category === 'Task')  ? _form_fields_js__WEBPACK_IMPORTED_MODULE_4__.addTask
                :  (category === 'Event') ? _form_fields_js__WEBPACK_IMPORTED_MODULE_4__.addEvent
                :  _form_fields_js__WEBPACK_IMPORTED_MODULE_4__.addReminder;
    const fragment = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.createForm)(fields, modal, category === 'Event');
    form.appendChild(fragment);

    setEntryValues(entry, form);

    const edit = modal.querySelector('#edit');
    edit.addEventListener('click', enableEdit);
}

function setEntryValues(entry, form) {
    const fields = form.querySelectorAll('input, textarea, select');
    const entryValues = [...Object.values(entry)];

    fields.forEach((field, i) => {
        // retain '-' for empty name field only
        field.defaultValue = (entryValues[i] === '' && i === 0) ? '-' : entryValues[i];
        field.disabled = true;
        if (field.tagName === 'SELECT') {
            field.value = entryValues[i];
        }
    });
}

function enableEdit() {
    const inputs = document.querySelector('#details')
                           .querySelectorAll('input, textarea, select');
    inputs.forEach(input => input.disabled = false);

    changeEditBtnToCancelSave();
}

function changeEditBtnToCancelSave() {
    const replacementBtns = document.createDocumentFragment();
    const btns = {'cancel': 'Cancel', 'save': 'Save'};
    for (const id in btns) {
        const button = document.createElement('button');
        button.setAttribute('id', id);
        button.setAttribute('type', 'button');
        button.textContent = btns[id];
        replacementBtns.appendChild(button);
    }

    const btnDiv = document.querySelector('#details>form>div:last-child');
    btnDiv.replaceChild(replacementBtns, btnDiv.lastChild);

    cancel.addEventListener('click', revertDetails);
    save.addEventListener('click', saveUpdatedDetails);
}

function changeCancelSaveToEdit() {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('id', 'edit');
    editBtn.setAttribute('type', 'button');
    editBtn.addEventListener('click', enableEdit);

    const btnDiv = document.querySelector('#details>form>div:last-child');
    btnDiv.removeChild(btnDiv.lastChild);
    btnDiv.replaceChild(editBtn, btnDiv.lastChild);
}

function revertDetails() {
    const fields = document.querySelector('#details')
                           .querySelectorAll('input, textarea, select');
    fields.forEach(field => {
        field.value = field.defaultValue;
        field.disabled = true;
    });

    changeCancelSaveToEdit();
}

function saveUpdatedDetails() {
    const modal = document.querySelector('#details');
    const fields = modal.querySelectorAll('input, textarea, select');
    const fieldValues = Array.from(fields).map(field => field.value);
    const details = [...fieldValues];
    const entry = _entry_factory_js__WEBPACK_IMPORTED_MODULE_2__.entries[Number(modal.dataset.item)];

    entry.updateDetails(...details);
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.populateStorage)();

    fields.forEach(field => {
        field.defaultValue = field.value;
        field.disabled = true;
    });
    changeCancelSaveToEdit();

    updateEntryVisualsInDOM(entry);
}

function updateEntryVisualsInDOM(entry) {
    const index = _entry_factory_js__WEBPACK_IMPORTED_MODULE_2__.entries.indexOf(entry);
    const listItem = document.querySelector(`[data-index="${index}"]`);

    const fieldsToUpdate = listItem.querySelectorAll('h4, p');
    const due = entry.category !== 'Reminder' ? entry.due
                                     : null;

    const valuesToInsert = [
        entry.constructor.name,
        entry.name,
        entry.notes,
        `<b>${entry.constructor.name === 'Task' ? 'Due:' : 'Starts:'}</b> ${convertToDDMMYYYY(due)}`
    ];

    // valuesToInsert[2] will not be read for a Reminder update
    fieldsToUpdate.forEach((field, i) => field.innerHTML = valuesToInsert[i]);
    listItem.style.boxShadow = `-0.5em 0 var(--${entry.importance}) inset`;
    listItem.dataset.importance = entry.importance;
    listItem.dataset.due = entry.category !== 'Reminder' ? (0,_dates_js__WEBPACK_IMPORTED_MODULE_1__.setDue)(entry) : null;
}

/***/ }),

/***/ "./src/modules/entry-factory.js":
/*!**************************************!*\
  !*** ./src/modules/entry-factory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewEntry": () => (/* binding */ createNewEntry),
/* harmony export */   "entries": () => (/* binding */ entries)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/modules/events.js");
/* harmony import */ var _reminders_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reminders.js */ "./src/modules/reminders.js");
/* harmony import */ var _type_changer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-changer.js */ "./src/modules/type-changer.js");
/* harmony import */ var _display_control_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-control.js */ "./src/modules/display-control.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");







const entries = [];

function createNewEntry(e) {
    const formValues = [];

    const formInputs = e.target.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => formValues.push(input.value));

    const type = document.querySelector('#type-selector');
    switch (type.value) {
        case 'task':
            entries.push(new _tasks_js__WEBPACK_IMPORTED_MODULE_0__.Task(...formValues));
            break;
        case 'event':
            entries.push(new _events_js__WEBPACK_IMPORTED_MODULE_1__.Event(...formValues));
            break;
        case 'reminder':
            entries.push(new _reminders_js__WEBPACK_IMPORTED_MODULE_2__.Reminder(...formValues));
            break;
    }

    const entry = entries[entries.length - 1];
    (0,_display_control_js__WEBPACK_IMPORTED_MODULE_4__.addEntryToDisplay)(entry, entries.indexOf(entry));

    // reset form but retain default date/time values
    e.preventDefault();
    closeAndResetForm(type);

    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_5__.populateStorage)();
}

function closeAndResetForm(typeSelector) {
    (0,_type_changer_js__WEBPACK_IMPORTED_MODULE_3__.generateTaskForm)();
    typeSelector.selectedIndex = 0;
    document.querySelector('#add-item-modal').close();
}

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event)
/* harmony export */ });
class Event {
    constructor(name, location, startDate, startTime, endDate, endTime, notes, importance) {
        this.name = name;
        this.location = location;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.notes = notes;
        this.importance = importance;
        this.category = 'Event';
    }

    updateDetails(name, location, startDate, startTime, endDate, endTime, notes, importance) {
        this.name = name;
        this.location = location;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.notes = notes;
        this.importance = importance;
    }

    get due() {
        return this.startDate;
    }

    get dueAsDate() {
        return new Date(this.startDate);
    }
}

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterCategories": () => (/* binding */ filterCategories),
/* harmony export */   "filterDate": () => (/* binding */ filterDate),
/* harmony export */   "filterImportance": () => (/* binding */ filterImportance)
/* harmony export */ });
function filterCategories(e) {
    const entries = document.querySelectorAll(`[data-category="${e.target.name}"]`);
    entries.forEach(entry => {
        if (e.target.checked) {
            entry.classList.remove('category-hidden');
        }
        else {
            entry.classList.add('category-hidden');
        }
    })
}

function filterImportance(e) {
    const entries = document.querySelectorAll(`[data-importance="${e.target.name}"]`);
    entries.forEach(entry => {
        if (e.target.checked) {
            entry.classList.remove('importance-hidden');
        }
        else {
            entry.classList.add('importance-hidden');
        }
    })
}

function filterDate(e) {
    const filter = e.target.getAttribute('value');
    switch (filter) {
        case 'all':
            showAllItems();
            break;
        case 'today':
            showTodaysItems();
            break;
        case 'week':
            showThisWeeksItems();
            break;
    }
}

function showAllItems() {
    const entries = document.querySelectorAll('#list>*');
    entries.forEach(entry => entry.classList.remove('due-date-hidden'));
}

function showTodaysItems() {
    const today = document.querySelectorAll('[data-due="today"]');
    const notToday = document.querySelectorAll('#list>*:not([data-due="today"])');
    
    today.forEach(entry => entry.classList.remove('due-date-hidden'));
    notToday.forEach(entry => entry.classList.add('due-date-hidden'));
}

function showThisWeeksItems() {
    const thisWeek = document.querySelectorAll('[data-due="week"]');
    const notThisWeek = document.querySelectorAll('#list>*:not([data-due="week"])');
    
    thisWeek.forEach(entry => entry.classList.remove('due-date-hidden'));
    notThisWeek.forEach(entry => entry.classList.add('due-date-hidden'));
}

/***/ }),

/***/ "./src/modules/form-fields.js":
/*!************************************!*\
  !*** ./src/modules/form-fields.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "addReminder": () => (/* binding */ addReminder),
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
const addTask = [
    'Name:<input type="text" autocomplete="off">',
    'Due date:<input type="date">',
    'Notes:<textarea autocomplete="off"></textarea>',
    'Importance:<select name="importance"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
];

const addEvent = [
    'Name:<input type="text" class="vert-flex" autocomplete="off">',
    'Location:<input type="text" class="vert-flex" autocomplete="off">',
    'Notes:<textarea autocomplete="off"></textarea>',
    'Importance:<select name="importance"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
];

const addReminder = [
    'Name:<input type="text" autocomplete="off">',
    'Notes:<textarea autocomplete="off"></textarea>',
    'Importance:<select name="importance"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>',
];

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
function createForm(fields, modal, isEvent = false) {
    const fragment = document.createDocumentFragment();

    fields.forEach(field => {
        const label = document.createElement('label');
        label.innerHTML = field;
        fragment.appendChild(label);
    });

    if (isEvent) {
        appendEventDateTime(fragment);
    }
 
    appendBtns(fragment, modal);
    
    return fragment;
}

function appendEventDateTime(form) {
    const start = createDateTimeDiv('Start date:', 'Start time:', '00:00');
    const end = createDateTimeDiv('End date:', 'End time:', '23:59');

    const location = form.querySelector('label:nth-child(3)');
    form.insertBefore(start, location);
    form.insertBefore(end, location);
}

function createDateTimeDiv(date, time, defaultTime) {
    const dateField = document.createElement('div');
    const inputTypes = ['date', 'time'];
    
    [date, time].forEach((arg, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', inputTypes[i]);
        label.textContent = arg;

        input.defaultValue = (arg === date) ? new Date().toISOString().slice(0, 10)
                                            : defaultTime;

        label.appendChild(input);
        dateField.appendChild(label);
    });

    return dateField;
}

function appendBtns(fragment, modal) {
    const threeButtons = modal.id === 'add-item-modal';

    const btns = document.createElement('div');
    const first = document.createElement('button');
    const second = document.createElement('button');
    const third = document.createElement('button');

    const btnsToAdd = threeButtons ? [first, second, third] : [first, second];
    const btnNames = threeButtons ? ['Close', 'Clear', 'Submit'] : ['Close', 'Edit'];
    const btnIds = threeButtons ? ['close-modal', 'reset', 'submit'] : ['close-modal', 'edit'];
    const btnAttrVal = threeButtons ? ['button', 'reset', 'submit'] : ['button', 'button'];

    btnsToAdd.forEach((btn, i) => {
        btn.textContent = btnNames[i];
        btn.setAttribute('id', btnIds[i]);
        btn.setAttribute('type', btnAttrVal[i]);
        btns.appendChild(btn);
    });

    btns.querySelector('#close-modal').addEventListener('click', () => modal.close());
    fragment.appendChild(btns);
}

/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayListItemsFromStorage": () => (/* binding */ displayListItemsFromStorage),
/* harmony export */   "populateStorage": () => (/* binding */ populateStorage)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/modules/events.js");
/* harmony import */ var _reminders_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reminders.js */ "./src/modules/reminders.js");
/* harmony import */ var _entry_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry-factory.js */ "./src/modules/entry-factory.js");
/* harmony import */ var _display_control_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-control.js */ "./src/modules/display-control.js");






function populateStorage() {
    localStorage.setItem('entries', JSON.stringify(_entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries));
}

function displayListItemsFromStorage() {
    const listItems = JSON.parse(localStorage.getItem('entries'));
    listItems.forEach(item => {
        const constructorArgs = [...Object.values(item)].slice(0, -1);

        switch (item.category) {
            case 'Task':
                _entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries.push(new _tasks_js__WEBPACK_IMPORTED_MODULE_0__.Task(...constructorArgs));
                break;
            case 'event':
                _entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries.push(new _events_js__WEBPACK_IMPORTED_MODULE_1__.Event(...constructorArgs));
                break;
            case 'reminder':
                _entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries.push(new _reminders_js__WEBPACK_IMPORTED_MODULE_2__.Reminder(...constructorArgs));
                break;
        }

        const entry = _entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries[_entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries.length - 1];
        (0,_display_control_js__WEBPACK_IMPORTED_MODULE_4__.addEntryToDisplay)(entry, _entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries.indexOf(entry));
    });
}

/***/ }),

/***/ "./src/modules/reminders.js":
/*!**********************************!*\
  !*** ./src/modules/reminders.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reminder": () => (/* binding */ Reminder)
/* harmony export */ });
class Reminder {
    constructor(name, notes, importance) {
        this.name = name;
        this.notes = notes;
        this.importance = importance;
        this.category = 'Task';
    }
    
    updateDetails(name, notes, importance) {
        this.name = name;
        this.notes = notes;
        this.importance = importance;
    }
}

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, dueDate, notes, importance) {
        this.name = name;
        this.dueDate = dueDate;
        this.notes = notes;
        this.importance = importance;
        this.category = 'Task';
    }

    updateDetails(name, dueDate, notes, importance) {
        this.name = name;
        this.dueDate = dueDate;
        this.notes = notes;
        this.importance = importance;
    }

    get due() {
        return this.dueDate;
    }

    get dueAsDate() {
        return new Date(this.dueDate);
    }
}

/***/ }),

/***/ "./src/modules/type-changer.js":
/*!*************************************!*\
  !*** ./src/modules/type-changer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeForm": () => (/* binding */ changeForm),
/* harmony export */   "generateTaskForm": () => (/* binding */ generateTaskForm)
/* harmony export */ });
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ "./src/modules/forms.js");
/* harmony import */ var _form_fields_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-fields.js */ "./src/modules/form-fields.js");



function changeForm(e) {
    const type = e.target.value;
    switch (type) {
        case 'task':
            generateTaskForm();
            break;
        case 'event':
            generateEventForm();
            break;
        case 'reminder':
            generateReminderForm();
            break;
    }
}

function generateTaskForm() {
    const modal = document.querySelector('#add-item-modal');
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fragment = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.createForm)(_form_fields_js__WEBPACK_IMPORTED_MODULE_1__.addTask, modal);
    form.appendChild(fragment);

    form.querySelector('input[type="date"]').defaultValue = new Date().toISOString().slice(0, 10);
}

function generateEventForm() {
    const modal = document.querySelector('#add-item-modal');
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fragment = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.createForm)(_form_fields_js__WEBPACK_IMPORTED_MODULE_1__.addEvent, modal, true);
    form.appendChild(fragment);

}

function generateReminderForm() {
    const modal = document.querySelector('#add-item-modal');
    const form = document.querySelector('#item-details');
    form.replaceChildren();

    const fragment = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.createForm)(_form_fields_js__WEBPACK_IMPORTED_MODULE_1__.addReminder, modal);
    form.appendChild(fragment);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_type_changer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/type-changer.js */ "./src/modules/type-changer.js");
/* harmony import */ var _modules_entry_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/entry-factory.js */ "./src/modules/entry-factory.js");
/* harmony import */ var _modules_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/filters.js */ "./src/modules/filters.js");
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/local-storage.js */ "./src/modules/local-storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






// initialise using 'task' as default display type
(0,_modules_type_changer_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskForm)();

// load stored list items
if (!localStorage.getItem('entries')) {
    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.populateStorage)();
}
else {
    (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.displayListItemsFromStorage)();
}

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const addItem = document.querySelector('#add-item-modal');
const typeSelector = document.querySelector('#type-selector');
const newEntryForm = document.querySelector('#item-details');
const categories = document.querySelectorAll('#categories input[type="checkbox"]');
const importance = document.querySelectorAll('#importance input[type="checkbox"]');
const sidebarFilters = document.querySelectorAll('li');

openModal.addEventListener('click', () => addItem.showModal());
closeModal.addEventListener('click', () => addItem.close());
typeSelector.addEventListener('change', _modules_type_changer_js__WEBPACK_IMPORTED_MODULE_0__.changeForm);
newEntryForm.addEventListener('submit', _modules_entry_factory_js__WEBPACK_IMPORTED_MODULE_1__.createNewEntry);
categories.forEach(filter => filter.addEventListener('click', _modules_filters_js__WEBPACK_IMPORTED_MODULE_2__.filterCategories));
importance.forEach(filter => filter.addEventListener('click', _modules_filters_js__WEBPACK_IMPORTED_MODULE_2__.filterImportance));
sidebarFilters.forEach(filter => filter.addEventListener('click', _modules_filters_js__WEBPACK_IMPORTED_MODULE_2__.filterDate));


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBLHFCQUFxQixxREFBVSxDQUFDLG9EQUFPO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFEQUFVLENBQUMscURBQVE7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFEQUFVLENBQUMsd0RBQVc7QUFDM0M7QUFDQTs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXdFO0FBQ1o7QUFDMEI7QUFDSTtBQUNyRTs7QUFFckI7QUFDQSwwRUFBZ0I7O0FBRWhCO0FBQ0E7QUFDQSxJQUFJLDBFQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLHNGQUEyQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0VBQVU7QUFDbEQsd0NBQXdDLHFFQUFjO0FBQ3RELDhEQUE4RCxpRUFBZ0I7QUFDOUUsOERBQThELGlFQUFnQjtBQUM5RSxrRUFBa0UsMkRBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9kYXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZGlzcGxheS1jb250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9lbnRyeS1mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2Zvcm0tZmllbGRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvcmVtaW5kZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvdHlwZS1jaGFuZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXRlYWw6ICM3MmI0YzU7XFxuICAgIC0tZHJvcFNoYWRvdzogZHJvcC1zaGFkb3coMCAwIDRweCByZ2JhKDYxLCA2MSwgNjEsIDAuNjU4KSk7XFxuICAgIC0taGlnaDogI2JkMzUzNTtcXG4gICAgLS1tZWRpdW06ICNmOGNkNTY7XFxuICAgIC0tbG93OiAjN2ZiZTdmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRDlCNztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggIzUwYTNiODtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDZyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2xvZ286dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNHJlbSAxLjRyZW0gMCAwO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDhweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjE3MSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGVhc2UtaW47XFxuICAgIH1cXG5cXG4jc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1kcm9wU2hhZG93KTtcXG4gICAgICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc21hbGxTaGFkb3cpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBsaW5lYXIgMTtcXG59XFxuXFxuZGlhbG9nW29wZW5dPmxhYmVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl06OmJhY2tkcm9wIHtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXSBsYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXSBsYWJlbCxcXG4gICAgZGlhbG9nW29wZW5dIGlucHV0LFxcbiAgICBkaWFsb2dbb3Blbl0gc2VsZWN0LFxcbiAgICBkaWFsb2dbb3Blbl0gdGV4dGFyZWEsXFxuICAgIGRpYWxvZ1tvcGVuXSBidXR0b24ge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBnYXA6IDAuM3JlbTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXSBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybSB7XFxuICAgICAgICBnYXA6IDAuNnJlbTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtPmRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0+ZGl2Omxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybSB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOjI1cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDAgMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgbGluZWFyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4jbWFpbi1hcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluLWFyZWE+I2ZpbHRlcnMge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYT4jZmlsdGVycz4qIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgfVxcblxcbiNtYWluLWFyZWE+I2NhdGVnb3JpZXMge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYSAuZmlsdGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIG1hcmdpbjogMC4ycmVtIDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEuMmVtO1xcbiAgICAgICAgZ2FwOiAwLjVlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYSAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNjZweCkge1xcbiAgICAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxufVxcblxcbiNsaXN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxufVxcblxcbiNsaXN0IC5lbnRyeSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG4gICAgfVxcblxcbiNsaXN0IC5lbnRyeTpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWRyb3BTaGFkb3cpO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCB7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCAuY2F0ZWdvcnksXFxuICAgICAgICAgICAgI2xpc3QgLmVudHJ5IC5sZWZ0IC5uYW1lIHtcXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCxcXG4gICAgICAgICNsaXN0IC5lbnRyeSAucmlnaHQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5jYXRlZ29yeSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5ub3RlcyB7XFxuICAgICAgICAgICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmRlbGV0ZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICAgICAgICB9XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXRlYWwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSB2YXIoLS10ZWFsKTtcXG4gICAgfVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogNTBtcyBsaW5lYXI7XFxufVxcblxcbi5saXN0LWJ0bjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG5cXG5pbnB1dDpkaXNhYmxlZCxcXG50ZXh0YXJlYTpkaXNhYmxlZCxcXG5zZWxlY3Q6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi52ZXJ0LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnktaGlkZGVuLFxcbi5pbXBvcnRhbmNlLWhpZGRlbixcXG4uZHVlLWRhdGUtaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZUFBZTtJQUNmLDBEQUEwRDtJQUMxRCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGFBQWE7SUFDYixzQkFB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bnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tdGVhbDogIzcyYjRjNTtcXG4gICAgLS1kcm9wU2hhZG93OiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoNjEsIDYxLCA2MSwgMC42NTgpKTtcXG4gICAgLS1oaWdoOiAjYmQzNTM1O1xcbiAgICAtLW1lZGl1bTogI2Y4Y2Q1NjtcXG4gICAgLS1sb3c6ICM3ZmJlN2Y7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEOUI3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2cmVtKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAjNTBhM2I4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICAmOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS40cmVtIDEuNHJlbSAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggOHB4IDVweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMTcxKTtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogMTNyZW07XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBlYXNlLWluO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWRyb3BTaGFkb3cpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zbWFsbFNoYWRvdyk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAxO1xcblxcbiAgICAmPmxhYmVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICB9XFxuXFxuICAgICY6OmJhY2tkcm9wIHtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgfVxcblxcbiAgICAmIGxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICYgbGFiZWwsXFxuICAgIGlucHV0LFxcbiAgICBzZWxlY3QsXFxuICAgIHRleHRhcmVhLFxcbiAgICBidXR0b24ge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBnYXA6IDAuM3JlbTtcXG4gICAgfVxcblxcbiAgICAmIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgfVxcblxcbiAgICAmPmZvcm0ge1xcbiAgICAgICAgZ2FwOiAwLjZyZW07XFxuXFxuICAgICAgICAmPmRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgICAgICAgICAgd2lkdGg6MjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMCAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbiNtYWluLWFyZWEge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgJj4jZmlsdGVycyB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcXG4gICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgICAgICAmPioge1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJj4jY2F0ZWdvcmllcyB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgJiAuZmlsdGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIG1hcmdpbjogMC4ycmVtIDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEuMmVtO1xcbiAgICAgICAgZ2FwOiAwLjVlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgICYgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2NnB4KSB7XFxuICAgICNpbXBvcnRhbmNlPmRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuI2xpc3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXG5cXG4gICAgJiAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tZHJvcFNoYWRvdyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5sZWZ0IHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDByZW07XFxuXFxuICAgICAgICAgICAgJiAuY2F0ZWdvcnksXFxuICAgICAgICAgICAgLm5hbWUge1xcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5sZWZ0LFxcbiAgICAgICAgLnJpZ2h0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAuY2F0ZWdvcnkge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubm90ZXMge1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMycmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5kZWxldGUge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gdmFyKC0tdGVhbCk7XFxuICAgIH1cXG5cXG4gICAgJjpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogNTBtcyBsaW5lYXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB9XFxufVxcblxcbmlucHV0OmRpc2FibGVkLFxcbnRleHRhcmVhOmRpc2FibGVkLFxcbnNlbGVjdDpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnZlcnQtZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXRlZ29yeS1oaWRkZW4sXFxuLmltcG9ydGFuY2UtaGlkZGVuLFxcbi5kdWUtZGF0ZS1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBzZXREdWUoZW50cnkpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZHVlID0gZW50cnkuZHVlQXNEYXRlO1xuXG4gICAgcmV0dXJuIGlzU2FtZURheShjdXJyZW50RGF0ZSwgZHVlKSAgPyAndG9kYXknXG4gICAgICAgIDogIGlzU2FtZVdlZWsoY3VycmVudERhdGUsIGR1ZSkgPyAnd2VlaydcbiAgICAgICAgOiAgJ2Z1dHVyZSc7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZURheShjdXJyZW50LCB0b0NoZWNrKSB7XG4gICAgcmV0dXJuIGN1cnJlbnQudG9EYXRlU3RyaW5nKCkgPT09IHRvQ2hlY2sudG9EYXRlU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZVdlZWsoY3VycmVudCwgdG9DaGVjaykge1xuICAgIGNvbnN0IHdlZWtCb3VuZGFyeSA9IGN1cnJlbnQuZ2V0RGF0ZSgpICsgNztcbiAgICBjdXJyZW50LnNldERhdGUod2Vla0JvdW5kYXJ5KTtcbiAgICByZXR1cm4gY3VycmVudCA+PSB0b0NoZWNrO1xufSIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2Zvcm1zJztcbmltcG9ydCB7IHNldER1ZSB9IGZyb20gJy4vZGF0ZXMuanMnO1xuaW1wb3J0IHsgZW50cmllcyB9IGZyb20gJy4vZW50cnktZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgYWRkVGFzaywgYWRkRXZlbnQsIGFkZFJlbWluZGVyIH0gZnJvbSAnLi9mb3JtLWZpZWxkcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFbnRyeVRvRGlzcGxheShlbnRyeSwgaW5kZXgpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2VudHJ5Jyk7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIGxpc3RJdGVtLmRhdGFzZXQuY2F0ZWdvcnkgPSBlbnRyeS5jYXRlZ29yeTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmltcG9ydGFuY2UgPSBlbnRyeS5pbXBvcnRhbmNlO1xuICAgIFxuICAgIGlmIChlbnRyeS5jYXRlZ29yeSAhPT0gJ1JlbWluZGVyJykge1xuICAgICAgIGxpc3RJdGVtLmRhdGFzZXQuZHVlID0gc2V0RHVlKGVudHJ5KTsgIFxuICAgIH1cblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUxlZnRIYWxmKGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUsIGVudHJ5Lm5hbWUsIGVudHJ5Lm5vdGVzKSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlUmlnaHRIYWxmKGVudHJ5KSk7XG4gICAgbGlzdEl0ZW0uc3R5bGUuYm94U2hhZG93ID0gYC0wLjVlbSAwIHZhcigtLSR7ZW50cnkuaW1wb3J0YW5jZX0pIGluc2V0YDtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0SGFsZih0eXBlLCBuYW1lLCBub3Rlcykge1xuICAgIC8vIHJlbmRlciBkZWZhdWx0IG5hbWUgaGVhZGluZ1xuICAgIG5hbWUgPSAobmFtZSA9PT0gJycpID8gJy0nIDogbmFtZTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgICBjb25zdCB0YWdzID0gWydoNCcsICdoNCcsICdwJ107XG4gICAgY29uc3QgY2xhc3NlcyA9IFsnY2F0ZWdvcnknLCAnbmFtZScsICdub3RlcyddO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW3R5cGUsIG5hbWUsIG5vdGVzXTtcblxuICAgIHRhZ3MuZm9yRWFjaCgodGFnLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnRzW2ldO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRIYWxmKGVudHJ5KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gWydkZXRhaWxzJywgJ2RlbGV0ZSddO1xuICAgIGNvbnN0IGJ0bk5hbWVzID0gWydEZXRhaWxzJywgJ1gnXTtcbiAgICBidG5OYW1lcy5mb3JFYWNoKChuYW1lLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnRuJyk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuXG4gICAgZGl2LmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGV0YWlscy5iaW5kKG51bGwsIGVudHJ5KSk7XG5cbiAgICBpZiAoZW50cnkuY2F0ZWdvcnkgIT09ICdSZW1pbmRlcicpIHtcbiAgICAgICAgYXBwZW5kRGF0ZUZpZWxkKGRpdiwgZW50cnkpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZERhdGVGaWVsZChkaXYsIGVudHJ5KSB7XG4gICAgY29uc3QgZGRNTXl5eXkgPSBjb252ZXJ0VG9ERE1NWVlZWShlbnRyeS5kdWUpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcbiAgICBwLmlubmVySFRNTCA9IGA8Yj4ke2VudHJ5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdUYXNrJyA/ICdEdWU6JyA6ICdTdGFydHM6J308L2I+ICR7ZGRNTXl5eXl9YDtcblxuICAgIGRpdi5pbnNlcnRCZWZvcmUocCwgZGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9ERE1NWVlZWShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgPT09IG51bGwgPyAwIDogYCR7ZGF0ZS5zbGljZSgtMil9LyR7ZGF0ZS5zbGljZSg1LCA3KX0vJHtkYXRlLnNsaWNlKDAsIDQpfWA7XG59XG5cbmZ1bmN0aW9uIG9wZW5EZXRhaWxzKGVudHJ5KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuXG4gICAgLy8gdGllIG1vZGFsIHRvIGluc3RhbmNlIG9mIG9iamVjdFxuICAgIG1vZGFsLmRhdGFzZXQuaXRlbSA9IGVudHJpZXMuaW5kZXhPZihlbnRyeSk7XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRldGFpbHMucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBjYXRlZ29yeSA9IGVudHJ5LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgY29uc3QgZmllbGRzID0gKGNhdGVnb3J5ID09PSAnVGFzaycpICA/IGFkZFRhc2tcbiAgICAgICAgICAgICAgICA6ICAoY2F0ZWdvcnkgPT09ICdFdmVudCcpID8gYWRkRXZlbnRcbiAgICAgICAgICAgICAgICA6ICBhZGRSZW1pbmRlcjtcbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oZmllbGRzLCBtb2RhbCwgY2F0ZWdvcnkgPT09ICdFdmVudCcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG4gICAgc2V0RW50cnlWYWx1ZXMoZW50cnksIGZvcm0pO1xuXG4gICAgY29uc3QgZWRpdCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Jyk7XG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuYWJsZUVkaXQpO1xufVxuXG5mdW5jdGlvbiBzZXRFbnRyeVZhbHVlcyhlbnRyeSwgZm9ybSkge1xuICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBjb25zdCBlbnRyeVZhbHVlcyA9IFsuLi5PYmplY3QudmFsdWVzKGVudHJ5KV07XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQsIGkpID0+IHtcbiAgICAgICAgLy8gcmV0YWluICctJyBmb3IgZW1wdHkgbmFtZSBmaWVsZCBvbmx5XG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IChlbnRyeVZhbHVlc1tpXSA9PT0gJycgJiYgaSA9PT0gMCkgPyAnLScgOiBlbnRyeVZhbHVlc1tpXTtcbiAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBpZiAoZmllbGQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gZW50cnlWYWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRWRpdCgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlKTtcblxuICAgIGNoYW5nZUVkaXRCdG5Ub0NhbmNlbFNhdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRWRpdEJ0blRvQ2FuY2VsU2F2ZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgYnRucyA9IHsnY2FuY2VsJzogJ0NhbmNlbCcsICdzYXZlJzogJ1NhdmUnfTtcbiAgICBmb3IgKGNvbnN0IGlkIGluIGJ0bnMpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidG5zW2lkXTtcbiAgICAgICAgcmVwbGFjZW1lbnRCdG5zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHM+Zm9ybT5kaXY6bGFzdC1jaGlsZCcpO1xuICAgIGJ0bkRpdi5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnRCdG5zLCBidG5EaXYubGFzdENoaWxkKTtcblxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldmVydERldGFpbHMpO1xuICAgIHNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlVXBkYXRlZERldGFpbHMpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDYW5jZWxTYXZlVG9FZGl0KCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0Jyk7XG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuYWJsZUVkaXQpO1xuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHM+Zm9ybT5kaXY6bGFzdC1jaGlsZCcpO1xuICAgIGJ0bkRpdi5yZW1vdmVDaGlsZChidG5EaXYubGFzdENoaWxkKTtcbiAgICBidG5EaXYucmVwbGFjZUNoaWxkKGVkaXRCdG4sIGJ0bkRpdi5sYXN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiByZXZlcnREZXRhaWxzKCkge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgZmllbGQudmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgIGZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNoYW5nZUNhbmNlbFNhdmVUb0VkaXQoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVVwZGF0ZWREZXRhaWxzKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKTtcbiAgICBjb25zdCBmaWVsZHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gQXJyYXkuZnJvbShmaWVsZHMpLm1hcChmaWVsZCA9PiBmaWVsZC52YWx1ZSk7XG4gICAgY29uc3QgZGV0YWlscyA9IFsuLi5maWVsZFZhbHVlc107XG4gICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW051bWJlcihtb2RhbC5kYXRhc2V0Lml0ZW0pXTtcblxuICAgIGVudHJ5LnVwZGF0ZURldGFpbHMoLi4uZGV0YWlscyk7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG5cbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgY2hhbmdlQ2FuY2VsU2F2ZVRvRWRpdCgpO1xuXG4gICAgdXBkYXRlRW50cnlWaXN1YWxzSW5ET00oZW50cnkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVFbnRyeVZpc3VhbHNJbkRPTShlbnRyeSkge1xuICAgIGNvbnN0IGluZGV4ID0gZW50cmllcy5pbmRleE9mKGVudHJ5KTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblxuICAgIGNvbnN0IGZpZWxkc1RvVXBkYXRlID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnaDQsIHAnKTtcbiAgICBjb25zdCBkdWUgPSBlbnRyeS5jYXRlZ29yeSAhPT0gJ1JlbWluZGVyJyA/IGVudHJ5LmR1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlc1RvSW5zZXJ0ID0gW1xuICAgICAgICBlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBlbnRyeS5uYW1lLFxuICAgICAgICBlbnRyeS5ub3RlcyxcbiAgICAgICAgYDxiPiR7ZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ1Rhc2snID8gJ0R1ZTonIDogJ1N0YXJ0czonfTwvYj4gJHtjb252ZXJ0VG9ERE1NWVlZWShkdWUpfWBcbiAgICBdO1xuXG4gICAgLy8gdmFsdWVzVG9JbnNlcnRbMl0gd2lsbCBub3QgYmUgcmVhZCBmb3IgYSBSZW1pbmRlciB1cGRhdGVcbiAgICBmaWVsZHNUb1VwZGF0ZS5mb3JFYWNoKChmaWVsZCwgaSkgPT4gZmllbGQuaW5uZXJIVE1MID0gdmFsdWVzVG9JbnNlcnRbaV0pO1xuICAgIGxpc3RJdGVtLnN0eWxlLmJveFNoYWRvdyA9IGAtMC41ZW0gMCB2YXIoLS0ke2VudHJ5LmltcG9ydGFuY2V9KSBpbnNldGA7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5pbXBvcnRhbmNlID0gZW50cnkuaW1wb3J0YW5jZTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmR1ZSA9IGVudHJ5LmNhdGVnb3J5ICE9PSAnUmVtaW5kZXInID8gc2V0RHVlKGVudHJ5KSA6IG51bGw7XG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBSZW1pbmRlciB9IGZyb20gJy4vcmVtaW5kZXJzLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL3R5cGUtY2hhbmdlci5qcyc7XG5pbXBvcnQgeyBhZGRFbnRyeVRvRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS1jb250cm9sLmpzJztcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBlbnRyaWVzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdFbnRyeShlKSB7XG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IFtdO1xuXG4gICAgY29uc3QgZm9ybUlucHV0cyA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gICAgZm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGZvcm1WYWx1ZXMucHVzaChpbnB1dC52YWx1ZSkpO1xuXG4gICAgY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlLXNlbGVjdG9yJyk7XG4gICAgc3dpdGNoICh0eXBlLnZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBUYXNrKC4uLmZvcm1WYWx1ZXMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdldmVudCc6XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2gobmV3IEV2ZW50KC4uLmZvcm1WYWx1ZXMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1pbmRlcic6XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2gobmV3IFJlbWluZGVyKC4uLmZvcm1WYWx1ZXMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgIGFkZEVudHJ5VG9EaXNwbGF5KGVudHJ5LCBlbnRyaWVzLmluZGV4T2YoZW50cnkpKTtcblxuICAgIC8vIHJlc2V0IGZvcm0gYnV0IHJldGFpbiBkZWZhdWx0IGRhdGUvdGltZSB2YWx1ZXNcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VBbmRSZXNldEZvcm0odHlwZSk7XG5cbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VBbmRSZXNldEZvcm0odHlwZVNlbGVjdG9yKSB7XG4gICAgZ2VuZXJhdGVUYXNrRm9ybSgpO1xuICAgIHR5cGVTZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKS5jbG9zZSgpO1xufSIsImV4cG9ydCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24sIHN0YXJ0RGF0ZSwgc3RhcnRUaW1lLCBlbmREYXRlLCBlbmRUaW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ0V2ZW50JztcbiAgICB9XG5cbiAgICB1cGRhdGVEZXRhaWxzKG5hbWUsIGxvY2F0aW9uLCBzdGFydERhdGUsIHN0YXJ0VGltZSwgZW5kRGF0ZSwgZW5kVGltZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbiAgICB9XG5cbiAgICBnZXQgZHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydERhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZUFzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuc3RhcnREYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhdGVnb3JpZXMoZSkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jYXRlZ29yeT1cIiR7ZS50YXJnZXQubmFtZX1cIl1gKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZW50cnkuY2xhc3NMaXN0LnJlbW92ZSgnY2F0ZWdvcnktaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJJbXBvcnRhbmNlKGUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtaW1wb3J0YW5jZT1cIiR7ZS50YXJnZXQubmFtZX1cIl1gKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZW50cnkuY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW5jZS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFuY2UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRGF0ZShlKSB7XG4gICAgY29uc3QgZmlsdGVyID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICBzaG93QWxsSXRlbXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgICAgICBzaG93VG9kYXlzSXRlbXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgIHNob3dUaGlzV2Vla3NJdGVtcygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWxsSXRlbXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaXN0PionKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gZW50cnkuY2xhc3NMaXN0LnJlbW92ZSgnZHVlLWRhdGUtaGlkZGVuJykpO1xufVxuXG5mdW5jdGlvbiBzaG93VG9kYXlzSXRlbXMoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kdWU9XCJ0b2RheVwiXScpO1xuICAgIGNvbnN0IG5vdFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpc3Q+Kjpub3QoW2RhdGEtZHVlPVwidG9kYXlcIl0pJyk7XG4gICAgXG4gICAgdG9kYXkuZm9yRWFjaChlbnRyeSA9PiBlbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdkdWUtZGF0ZS1oaWRkZW4nKSk7XG4gICAgbm90VG9kYXkuZm9yRWFjaChlbnRyeSA9PiBlbnRyeS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS1oaWRkZW4nKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUaGlzV2Vla3NJdGVtcygpIHtcbiAgICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWR1ZT1cIndlZWtcIl0nKTtcbiAgICBjb25zdCBub3RUaGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaXN0Pio6bm90KFtkYXRhLWR1ZT1cIndlZWtcIl0pJyk7XG4gICAgXG4gICAgdGhpc1dlZWsuZm9yRWFjaChlbnRyeSA9PiBlbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdkdWUtZGF0ZS1oaWRkZW4nKSk7XG4gICAgbm90VGhpc1dlZWsuZm9yRWFjaChlbnRyeSA9PiBlbnRyeS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS1oaWRkZW4nKSk7XG59IiwiZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnRHVlIGRhdGU6PGlucHV0IHR5cGU9XCJkYXRlXCI+JyxcbiAgICAnTm90ZXM6PHRleHRhcmVhIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+JyxcbiAgICAnSW1wb3J0YW5jZTo8c2VsZWN0IG5hbWU9XCJpbXBvcnRhbmNlXCI+PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIHNlbGVjdGVkPk1lZGl1bTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj48L3NlbGVjdD4nLFxuXTtcblxuZXhwb3J0IGNvbnN0IGFkZEV2ZW50ID0gW1xuICAgICdOYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidmVydC1mbGV4XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnTG9jYXRpb246PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2ZXJ0LWZsZXhcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dO1xuXG5leHBvcnQgY29uc3QgYWRkUmVtaW5kZXIgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnTm90ZXM6PHRleHRhcmVhIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+JyxcbiAgICAnSW1wb3J0YW5jZTo8c2VsZWN0IG5hbWU9XCJpbXBvcnRhbmNlXCI+PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIHNlbGVjdGVkPk1lZGl1bTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj48L3NlbGVjdD4nLFxuXTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybShmaWVsZHMsIG1vZGFsLCBpc0V2ZW50ID0gZmFsc2UpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBmaWVsZDtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgYXBwZW5kRXZlbnREYXRlVGltZShmcmFnbWVudCk7XG4gICAgfVxuIFxuICAgIGFwcGVuZEJ0bnMoZnJhZ21lbnQsIG1vZGFsKTtcbiAgICBcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEV2ZW50RGF0ZVRpbWUoZm9ybSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gY3JlYXRlRGF0ZVRpbWVEaXYoJ1N0YXJ0IGRhdGU6JywgJ1N0YXJ0IHRpbWU6JywgJzAwOjAwJyk7XG4gICAgY29uc3QgZW5kID0gY3JlYXRlRGF0ZVRpbWVEaXYoJ0VuZCBkYXRlOicsICdFbmQgdGltZTonLCAnMjM6NTknKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdsYWJlbDpudGgtY2hpbGQoMyknKTtcbiAgICBmb3JtLmluc2VydEJlZm9yZShzdGFydCwgbG9jYXRpb24pO1xuICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGVuZCwgbG9jYXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZURpdihkYXRlLCB0aW1lLCBkZWZhdWx0VGltZSkge1xuICAgIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2RhdGUnLCAndGltZSddO1xuICAgIFxuICAgIFtkYXRlLCB0aW1lXS5mb3JFYWNoKChhcmcsIGkpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZXNbaV0pO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGFyZztcblxuICAgICAgICBpbnB1dC5kZWZhdWx0VmFsdWUgPSAoYXJnID09PSBkYXRlKSA/IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0VGltZTtcblxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0ZUZpZWxkO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRCdG5zKGZyYWdtZW50LCBtb2RhbCkge1xuICAgIGNvbnN0IHRocmVlQnV0dG9ucyA9IG1vZGFsLmlkID09PSAnYWRkLWl0ZW0tbW9kYWwnO1xuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgc2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdGhpcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGNvbnN0IGJ0bnNUb0FkZCA9IHRocmVlQnV0dG9ucyA/IFtmaXJzdCwgc2Vjb25kLCB0aGlyZF0gOiBbZmlyc3QsIHNlY29uZF07XG4gICAgY29uc3QgYnRuTmFtZXMgPSB0aHJlZUJ1dHRvbnMgPyBbJ0Nsb3NlJywgJ0NsZWFyJywgJ1N1Ym1pdCddIDogWydDbG9zZScsICdFZGl0J107XG4gICAgY29uc3QgYnRuSWRzID0gdGhyZWVCdXR0b25zID8gWydjbG9zZS1tb2RhbCcsICdyZXNldCcsICdzdWJtaXQnXSA6IFsnY2xvc2UtbW9kYWwnLCAnZWRpdCddO1xuICAgIGNvbnN0IGJ0bkF0dHJWYWwgPSB0aHJlZUJ1dHRvbnMgPyBbJ2J1dHRvbicsICdyZXNldCcsICdzdWJtaXQnXSA6IFsnYnV0dG9uJywgJ2J1dHRvbiddO1xuXG4gICAgYnRuc1RvQWRkLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBidG5OYW1lc1tpXTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBidG5JZHNbaV0pO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgYnRuQXR0clZhbFtpXSk7XG4gICAgICAgIGJ0bnMuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9KTtcblxuICAgIGJ0bnMucXVlcnlTZWxlY3RvcignI2Nsb3NlLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5jbG9zZSgpKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidG5zKTtcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IFJlbWluZGVyIH0gZnJvbSAnLi9yZW1pbmRlcnMuanMnO1xuaW1wb3J0IHsgZW50cmllcyB9IGZyb20gJy4vZW50cnktZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBhZGRFbnRyeVRvRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS1jb250cm9sLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW50cmllcycsIEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMaXN0SXRlbXNGcm9tU3RvcmFnZSgpIHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbnRyaWVzJykpO1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckFyZ3MgPSBbLi4uT2JqZWN0LnZhbHVlcyhpdGVtKV0uc2xpY2UoMCwgLTEpO1xuXG4gICAgICAgIHN3aXRjaCAoaXRlbS5jYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSAnVGFzayc6XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBUYXNrKC4uLmNvbnN0cnVjdG9yQXJncykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgRXZlbnQoLi4uY29uc3RydWN0b3JBcmdzKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1pbmRlcic6XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBSZW1pbmRlciguLi5jb25zdHJ1Y3RvckFyZ3MpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBhZGRFbnRyeVRvRGlzcGxheShlbnRyeSwgZW50cmllcy5pbmRleE9mKGVudHJ5KSk7XG4gICAgfSk7XG59IiwiZXhwb3J0IGNsYXNzIFJlbWluZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnVGFzayc7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ1Rhc2snO1xuICAgIH1cblxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cblxuICAgIGdldCBkdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZUFzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZHVlRGF0ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2Zvcm1zLmpzJztcbmltcG9ydCB7IGFkZFRhc2ssIGFkZEV2ZW50LCBhZGRSZW1pbmRlciB9IGZyb20gJy4vZm9ybS1maWVsZHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRm9ybShlKSB7XG4gICAgY29uc3QgdHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgIGdlbmVyYXRlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdldmVudCc6XG4gICAgICAgICAgICBnZW5lcmF0ZUV2ZW50Rm9ybSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbWluZGVyJzpcbiAgICAgICAgICAgIGdlbmVyYXRlUmVtaW5kZXJGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRldGFpbHMnKTtcbiAgICBmb3JtLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGb3JtKGFkZFRhc2ssIG1vZGFsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKS5kZWZhdWx0VmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUV2ZW50Rm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRFdmVudCwgbW9kYWwsIHRydWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVtaW5kZXJGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRldGFpbHMnKTtcbiAgICBmb3JtLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGb3JtKGFkZFJlbWluZGVyLCBtb2RhbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY2hhbmdlRm9ybSwgZ2VuZXJhdGVUYXNrRm9ybSB9IGZyb20gJy4vbW9kdWxlcy90eXBlLWNoYW5nZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVOZXdFbnRyeSB9IGZyb20gJy4vbW9kdWxlcy9lbnRyeS1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGZpbHRlckNhdGVnb3JpZXMsIGZpbHRlckltcG9ydGFuY2UsIGZpbHRlckRhdGUgfSBmcm9tICcuL21vZHVsZXMvZmlsdGVycy5qcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UsIGRpc3BsYXlMaXN0SXRlbXNGcm9tU3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBpbml0aWFsaXNlIHVzaW5nICd0YXNrJyBhcyBkZWZhdWx0IGRpc3BsYXkgdHlwZVxuZ2VuZXJhdGVUYXNrRm9ybSgpO1xuXG4vLyBsb2FkIHN0b3JlZCBsaXN0IGl0ZW1zXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbnRyaWVzJykpIHtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbn1cbmVsc2Uge1xuICAgIGRpc3BsYXlMaXN0SXRlbXNGcm9tU3RvcmFnZSgpO1xufVxuXG5jb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1tb2RhbCcpO1xuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1tb2RhbCcpO1xuY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUtc2VsZWN0b3InKTtcbmNvbnN0IG5ld0VudHJ5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRldGFpbHMnKTtcbmNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2F0ZWdvcmllcyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbmNvbnN0IGltcG9ydGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW1wb3J0YW5jZSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbmNvbnN0IHNpZGViYXJGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblxub3Blbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkSXRlbS5zaG93TW9kYWwoKSk7XG5jbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkSXRlbS5jbG9zZSgpKTtcbnR5cGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VGb3JtKTtcbm5ld0VudHJ5Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjcmVhdGVOZXdFbnRyeSk7XG5jYXRlZ29yaWVzLmZvckVhY2goZmlsdGVyID0+IGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckNhdGVnb3JpZXMpKTtcbmltcG9ydGFuY2UuZm9yRWFjaChmaWx0ZXIgPT4gZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVySW1wb3J0YW5jZSkpO1xuc2lkZWJhckZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyRGF0ZSkpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
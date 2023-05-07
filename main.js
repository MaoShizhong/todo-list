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
    div.querySelector('.delete').addEventListener('click', deleteItem.bind(null, entry));

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

function deleteItem(entry) {
    const i = _entry_factory_js__WEBPACK_IMPORTED_MODULE_2__.entries.indexOf(entry);
    const listItems = document.querySelectorAll('.entry');
    _entry_factory_js__WEBPACK_IMPORTED_MODULE_2__.entries.splice(i, 1);
    listItems[i].replaceChildren();
    listItems[i].remove();
    (0,_entry_factory_js__WEBPACK_IMPORTED_MODULE_2__.updateDataIndexes)(listItems, i);
    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.populateStorage)();
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
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "updateDataIndexes": () => (/* binding */ updateDataIndexes)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/modules/events.js");
/* harmony import */ var _reminders_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reminders.js */ "./src/modules/reminders.js");
/* harmony import */ var _type_changer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-changer.js */ "./src/modules/type-changer.js");
/* harmony import */ var _display_control_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-control.js */ "./src/modules/display-control.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");







const entries = [];

function createNewEntry(e) {
    e.preventDefault();
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
    // e.preventDefault();
    closeAndResetForm(type);

    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_5__.populateStorage)();
}

function closeAndResetForm(typeSelector) {
    (0,_type_changer_js__WEBPACK_IMPORTED_MODULE_3__.generateTaskForm)();
    typeSelector.selectedIndex = 0;
    document.querySelector('#add-item-modal').close();
}

function updateDataIndexes(divs, i) {
    divs.forEach(div => {
        const index = Number(div.dataset.index);
        if (index > i) {
            div.dataset.index = index - 1;
        }
    });
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
    });
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
    });
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
    const weekSelector = '[data-due="week"], [data-due="today"]';
    const thisWeek = document.querySelectorAll(`${weekSelector}`);
    const notThisWeek = document.querySelectorAll(`#list>*:not(${weekSelector})`);
    
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
            case 'Event':
                _entry_factory_js__WEBPACK_IMPORTED_MODULE_3__.entries.push(new _events_js__WEBPACK_IMPORTED_MODULE_1__.Event(...constructorArgs));
                break;
            case 'Reminder':
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
        this.category = 'Reminder';
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

// create storage or if storage exists, load stored list items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUVBQWdCO0FBQzlFLDhEQUE4RCxpRUFBZ0I7QUFDOUUsa0VBQWtFLDJEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZW50cnktZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9maWx0ZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9mb3JtLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL3JlbWluZGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL3R5cGUtY2hhbmdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS10ZWFsOiAjNzJiNGM1O1xcbiAgICAtLWRyb3BTaGFkb3c6IGRyb3Atc2hhZG93KDAgMCA0cHggcmdiYSg2MSwgNjEsIDYxLCAwLjY1OCkpO1xcbiAgICAtLWhpZ2g6ICNiZDM1MzU7XFxuICAgIC0tbWVkaXVtOiAjZjhjZDU2O1xcbiAgICAtLWxvdzogIzdmYmU3ZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUQ5Qjc7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICM1MGEzYjg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNsb2dvOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjRyZW0gMS40cmVtIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMTBweCA4cHggNXB4IHJnYmEoNDgsIDQ4LCA0OCwgMC4xNzEpO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBlYXNlLWluO1xcbiAgICB9XFxuXFxuI3NpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tZHJvcFNoYWRvdyk7XFxuICAgICAgICB9XFxuXFxuZGlhbG9nW29wZW5dIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjZyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNtYWxsU2hhZG93KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDE7XFxufVxcblxcbmRpYWxvZ1tvcGVuXT5sYWJlbDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dOjpiYWNrZHJvcCB7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZjO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0gbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0gbGFiZWwsXFxuICAgIGRpYWxvZ1tvcGVuXSBpbnB1dCxcXG4gICAgZGlhbG9nW29wZW5dIHNlbGVjdCxcXG4gICAgZGlhbG9nW29wZW5dIHRleHRhcmVhLFxcbiAgICBkaWFsb2dbb3Blbl0gYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0gaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdIHtcXG4gICAgICAgIHdpZHRoOiA2cmVtO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0ge1xcbiAgICAgICAgZ2FwOiAwLjZyZW07XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybT5kaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtPmRpdjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0gdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGhlaWdodDogOXJlbTtcXG4gICAgICAgICAgICB3aWR0aDoyNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgfVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbSAwIDJyZW07XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbWFpbi1hcmVhPiNmaWx0ZXJzIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiNtYWluLWFyZWE+I2ZpbHRlcnM+KiB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4jbWFpbi1hcmVhPiNjYXRlZ29yaWVzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiNtYWluLWFyZWEgLmZpbHRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICBtYXJnaW46IDAuMnJlbSAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxLjJlbTtcXG4gICAgICAgIGdhcDogMC41ZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcblxcbiNtYWluLWFyZWEgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjY2cHgpIHtcXG4gICAgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4jbGlzdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMS42cmVtO1xcbn1cXG5cXG4jbGlzdCAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuICAgIH1cXG5cXG4jbGlzdCAuZW50cnk6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1kcm9wU2hhZG93KTtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmxlZnQge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmxlZnQgLmNhdGVnb3J5LFxcbiAgICAgICAgICAgICNsaXN0IC5lbnRyeSAubGVmdCAubmFtZSB7XFxuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmxlZnQsXFxuICAgICAgICAjbGlzdCAuZW50cnkgLnJpZ2h0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAuY2F0ZWdvcnkge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubm90ZXMge1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMycmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5kZWxldGUge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICAgICAgfVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gdmFyKC0tdGVhbCk7XFxuICAgIH1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDUwbXMgbGluZWFyO1xcbn1cXG5cXG4ubGlzdC1idG46aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB9XFxuXFxuaW5wdXQ6ZGlzYWJsZWQsXFxudGV4dGFyZWE6ZGlzYWJsZWQsXFxuc2VsZWN0OmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udmVydC1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5LWhpZGRlbixcXG4uaW1wb3J0YW5jZS1oaWRkZW4sXFxuLmR1ZS1kYXRlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNz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SUFHSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRlYWw6ICM3MmI0YzU7XFxuICAgIC0tZHJvcFNoYWRvdzogZHJvcC1zaGFkb3coMCAwIDRweCByZ2JhKDYxLCA2MSwgNjEsIDAuNjU4KSk7XFxuICAgIC0taGlnaDogI2JkMzUzNTtcXG4gICAgLS1tZWRpdW06ICNmOGNkNTY7XFxuICAgIC0tbG93OiAjN2ZiZTdmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRDlCNztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggIzUwYTNiODtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDZyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG4gICAgJjp2aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNHJlbSAxLjRyZW0gMCAwO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDhweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjE3MSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC44cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgZWFzZS1pbjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1kcm9wU2hhZG93KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5kaWFsb2dbb3Blbl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc21hbGxTaGFkb3cpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBsaW5lYXIgMTtcXG5cXG4gICAgJj5sYWJlbDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgfVxcblxcbiAgICAmOjpiYWNrZHJvcCB7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZjO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIH1cXG5cXG4gICAgJiBsYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAmIGxhYmVsLFxcbiAgICBpbnB1dCxcXG4gICAgc2VsZWN0LFxcbiAgICB0ZXh0YXJlYSxcXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgIH1cXG5cXG4gICAgJiBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgIH1cXG5cXG4gICAgJj5mb3JtIHtcXG4gICAgICAgIGdhcDogMC42cmVtO1xcblxcbiAgICAgICAgJj5kaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOjI1cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDAgMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgbGluZWFyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogZ3JleTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4jbWFpbi1hcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICY+I2ZpbHRlcnMge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICAgICAgJj4qIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY+I2NhdGVnb3JpZXMge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgICYgLmZpbHRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICBtYXJnaW46IDAuMnJlbSAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxLjJlbTtcXG4gICAgICAgIGdhcDogMC41ZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmICNpbXBvcnRhbmNlPmRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNjZweCkge1xcbiAgICAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxufVxcblxcbiNsaXN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxuXFxuICAgICYgLmVudHJ5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgIGhlaWdodDogMi44cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgbGluZWFyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWRyb3BTaGFkb3cpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubGVmdCB7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcblxcbiAgICAgICAgICAgICYgLmNhdGVnb3J5LFxcbiAgICAgICAgICAgIC5uYW1lIHtcXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubGVmdCxcXG4gICAgICAgIC5yaWdodCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLmNhdGVnb3J5IHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLm5vdGVzIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMnJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAuZGVsZXRlIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgbGluZWFyO1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIHZhcigtLXRlYWwpO1xcbiAgICB9XFxuXFxuICAgICY6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDUwbXMgbGluZWFyO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcbn1cXG5cXG5pbnB1dDpkaXNhYmxlZCxcXG50ZXh0YXJlYTpkaXNhYmxlZCxcXG5zZWxlY3Q6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi52ZXJ0LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnktaGlkZGVuLFxcbi5pbXBvcnRhbmNlLWhpZGRlbixcXG4uZHVlLWRhdGUtaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gc2V0RHVlKGVudHJ5KSB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1ZSA9IGVudHJ5LmR1ZUFzRGF0ZTtcblxuICAgIHJldHVybiBpc1NhbWVEYXkoY3VycmVudERhdGUsIGR1ZSkgID8gJ3RvZGF5J1xuICAgICAgICA6ICBpc1NhbWVXZWVrKGN1cnJlbnREYXRlLCBkdWUpID8gJ3dlZWsnXG4gICAgICAgIDogICdmdXR1cmUnO1xufVxuXG5mdW5jdGlvbiBpc1NhbWVEYXkoY3VycmVudCwgdG9DaGVjaykge1xuICAgIHJldHVybiBjdXJyZW50LnRvRGF0ZVN0cmluZygpID09PSB0b0NoZWNrLnRvRGF0ZVN0cmluZygpO1xufVxuXG5mdW5jdGlvbiBpc1NhbWVXZWVrKGN1cnJlbnQsIHRvQ2hlY2spIHtcbiAgICBjb25zdCB3ZWVrQm91bmRhcnkgPSBjdXJyZW50LmdldERhdGUoKSArIDc7XG4gICAgY3VycmVudC5zZXREYXRlKHdlZWtCb3VuZGFyeSk7XG4gICAgcmV0dXJuIGN1cnJlbnQgPj0gdG9DaGVjaztcbn0iLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3Jtcyc7XG5pbXBvcnQgeyBzZXREdWUgfSBmcm9tICcuL2RhdGVzLmpzJztcbmltcG9ydCB7IGVudHJpZXMsIHVwZGF0ZURhdGFJbmRleGVzIH0gZnJvbSAnLi9lbnRyeS1mYWN0b3J5LmpzJztcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBhZGRFdmVudCwgYWRkUmVtaW5kZXIgfSBmcm9tICcuL2Zvcm0tZmllbGRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVudHJ5VG9EaXNwbGF5KGVudHJ5LCBpbmRleCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZW50cnknKTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5jYXRlZ29yeSA9IGVudHJ5LmNhdGVnb3J5O1xuICAgIGxpc3RJdGVtLmRhdGFzZXQuaW1wb3J0YW5jZSA9IGVudHJ5LmltcG9ydGFuY2U7XG4gICAgXG4gICAgaWYgKGVudHJ5LmNhdGVnb3J5ICE9PSAnUmVtaW5kZXInKSB7XG4gICAgICAgbGlzdEl0ZW0uZGF0YXNldC5kdWUgPSBzZXREdWUoZW50cnkpOyAgXG4gICAgfVxuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlTGVmdEhhbGYoZW50cnkuY29uc3RydWN0b3IubmFtZSwgZW50cnkubmFtZSwgZW50cnkubm90ZXMpKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVSaWdodEhhbGYoZW50cnkpKTtcbiAgICBsaXN0SXRlbS5zdHlsZS5ib3hTaGFkb3cgPSBgLTAuNWVtIDAgdmFyKC0tJHtlbnRyeS5pbXBvcnRhbmNlfSkgaW5zZXRgO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Jyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxlZnRIYWxmKHR5cGUsIG5hbWUsIG5vdGVzKSB7XG4gICAgLy8gcmVuZGVyIGRlZmF1bHQgbmFtZSBoZWFkaW5nXG4gICAgbmFtZSA9IChuYW1lID09PSAnJykgPyAnLScgOiBuYW1lO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcblxuICAgIGNvbnN0IHRhZ3MgPSBbJ2g0JywgJ2g0JywgJ3AnXTtcbiAgICBjb25zdCBjbGFzc2VzID0gWydjYXRlZ29yeScsICduYW1lJywgJ25vdGVzJ107XG4gICAgY29uc3QgY29udGVudHMgPSBbdHlwZSwgbmFtZSwgbm90ZXNdO1xuXG4gICAgdGFncy5mb3JFYWNoKCh0YWcsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudHNbaV07XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodEhhbGYoZW50cnkpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2RldGFpbHMnLCAnZGVsZXRlJ107XG4gICAgY29uc3QgYnRuTmFtZXMgPSBbJ0RldGFpbHMnLCAnWCddO1xuICAgIGJ0bk5hbWVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1idG4nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfSk7XG5cbiAgICBkaXYuZmlyc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5EZXRhaWxzLmJpbmQobnVsbCwgZW50cnkpKTtcbiAgICBkaXYucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlSXRlbS5iaW5kKG51bGwsIGVudHJ5KSk7XG5cbiAgICBpZiAoZW50cnkuY2F0ZWdvcnkgIT09ICdSZW1pbmRlcicpIHtcbiAgICAgICAgYXBwZW5kRGF0ZUZpZWxkKGRpdiwgZW50cnkpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZERhdGVGaWVsZChkaXYsIGVudHJ5KSB7XG4gICAgY29uc3QgZGRNTXl5eXkgPSBjb252ZXJ0VG9ERE1NWVlZWShlbnRyeS5kdWUpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcbiAgICBwLmlubmVySFRNTCA9IGA8Yj4ke2VudHJ5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdUYXNrJyA/ICdEdWU6JyA6ICdTdGFydHM6J308L2I+ICR7ZGRNTXl5eXl9YDtcblxuICAgIGRpdi5pbnNlcnRCZWZvcmUocCwgZGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9ERE1NWVlZWShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgPT09IG51bGwgPyAwIDogYCR7ZGF0ZS5zbGljZSgtMil9LyR7ZGF0ZS5zbGljZSg1LCA3KX0vJHtkYXRlLnNsaWNlKDAsIDQpfWA7XG59XG5cbmZ1bmN0aW9uIG9wZW5EZXRhaWxzKGVudHJ5KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuXG4gICAgLy8gdGllIG1vZGFsIHRvIGluc3RhbmNlIG9mIG9iamVjdFxuICAgIG1vZGFsLmRhdGFzZXQuaXRlbSA9IGVudHJpZXMuaW5kZXhPZihlbnRyeSk7XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRldGFpbHMucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBjYXRlZ29yeSA9IGVudHJ5LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgY29uc3QgZmllbGRzID0gKGNhdGVnb3J5ID09PSAnVGFzaycpICA/IGFkZFRhc2tcbiAgICAgICAgICAgICAgICA6ICAoY2F0ZWdvcnkgPT09ICdFdmVudCcpID8gYWRkRXZlbnRcbiAgICAgICAgICAgICAgICA6ICBhZGRSZW1pbmRlcjtcbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oZmllbGRzLCBtb2RhbCwgY2F0ZWdvcnkgPT09ICdFdmVudCcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG4gICAgc2V0RW50cnlWYWx1ZXMoZW50cnksIGZvcm0pO1xuXG4gICAgY29uc3QgZWRpdCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Jyk7XG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuYWJsZUVkaXQpO1xufVxuXG5mdW5jdGlvbiBzZXRFbnRyeVZhbHVlcyhlbnRyeSwgZm9ybSkge1xuICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBjb25zdCBlbnRyeVZhbHVlcyA9IFsuLi5PYmplY3QudmFsdWVzKGVudHJ5KV07XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQsIGkpID0+IHtcbiAgICAgICAgLy8gcmV0YWluICctJyBmb3IgZW1wdHkgbmFtZSBmaWVsZCBvbmx5XG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IChlbnRyeVZhbHVlc1tpXSA9PT0gJycgJiYgaSA9PT0gMCkgPyAnLScgOiBlbnRyeVZhbHVlc1tpXTtcbiAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBpZiAoZmllbGQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gZW50cnlWYWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRWRpdCgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlKTtcblxuICAgIGNoYW5nZUVkaXRCdG5Ub0NhbmNlbFNhdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRWRpdEJ0blRvQ2FuY2VsU2F2ZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgYnRucyA9IHsnY2FuY2VsJzogJ0NhbmNlbCcsICdzYXZlJzogJ1NhdmUnfTtcbiAgICBmb3IgKGNvbnN0IGlkIGluIGJ0bnMpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidG5zW2lkXTtcbiAgICAgICAgcmVwbGFjZW1lbnRCdG5zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHM+Zm9ybT5kaXY6bGFzdC1jaGlsZCcpO1xuICAgIGJ0bkRpdi5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnRCdG5zLCBidG5EaXYubGFzdENoaWxkKTtcblxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldmVydERldGFpbHMpO1xuICAgIHNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlVXBkYXRlZERldGFpbHMpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDYW5jZWxTYXZlVG9FZGl0KCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0Jyk7XG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuYWJsZUVkaXQpO1xuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHM+Zm9ybT5kaXY6bGFzdC1jaGlsZCcpO1xuICAgIGJ0bkRpdi5yZW1vdmVDaGlsZChidG5EaXYubGFzdENoaWxkKTtcbiAgICBidG5EaXYucmVwbGFjZUNoaWxkKGVkaXRCdG4sIGJ0bkRpdi5sYXN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiByZXZlcnREZXRhaWxzKCkge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgZmllbGQudmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgIGZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNoYW5nZUNhbmNlbFNhdmVUb0VkaXQoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVVwZGF0ZWREZXRhaWxzKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKTtcbiAgICBjb25zdCBmaWVsZHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gQXJyYXkuZnJvbShmaWVsZHMpLm1hcChmaWVsZCA9PiBmaWVsZC52YWx1ZSk7XG4gICAgY29uc3QgZGV0YWlscyA9IFsuLi5maWVsZFZhbHVlc107XG4gICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW051bWJlcihtb2RhbC5kYXRhc2V0Lml0ZW0pXTtcblxuICAgIGVudHJ5LnVwZGF0ZURldGFpbHMoLi4uZGV0YWlscyk7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG5cbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgY2hhbmdlQ2FuY2VsU2F2ZVRvRWRpdCgpO1xuXG4gICAgdXBkYXRlRW50cnlWaXN1YWxzSW5ET00oZW50cnkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVFbnRyeVZpc3VhbHNJbkRPTShlbnRyeSkge1xuICAgIGNvbnN0IGluZGV4ID0gZW50cmllcy5pbmRleE9mKGVudHJ5KTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblxuICAgIGNvbnN0IGZpZWxkc1RvVXBkYXRlID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnaDQsIHAnKTtcbiAgICBjb25zdCBkdWUgPSBlbnRyeS5jYXRlZ29yeSAhPT0gJ1JlbWluZGVyJyA/IGVudHJ5LmR1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlc1RvSW5zZXJ0ID0gW1xuICAgICAgICBlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBlbnRyeS5uYW1lLFxuICAgICAgICBlbnRyeS5ub3RlcyxcbiAgICAgICAgYDxiPiR7ZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ1Rhc2snID8gJ0R1ZTonIDogJ1N0YXJ0czonfTwvYj4gJHtjb252ZXJ0VG9ERE1NWVlZWShkdWUpfWBcbiAgICBdO1xuXG4gICAgLy8gdmFsdWVzVG9JbnNlcnRbMl0gd2lsbCBub3QgYmUgcmVhZCBmb3IgYSBSZW1pbmRlciB1cGRhdGVcbiAgICBmaWVsZHNUb1VwZGF0ZS5mb3JFYWNoKChmaWVsZCwgaSkgPT4gZmllbGQuaW5uZXJIVE1MID0gdmFsdWVzVG9JbnNlcnRbaV0pO1xuICAgIGxpc3RJdGVtLnN0eWxlLmJveFNoYWRvdyA9IGAtMC41ZW0gMCB2YXIoLS0ke2VudHJ5LmltcG9ydGFuY2V9KSBpbnNldGA7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5pbXBvcnRhbmNlID0gZW50cnkuaW1wb3J0YW5jZTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmR1ZSA9IGVudHJ5LmNhdGVnb3J5ICE9PSAnUmVtaW5kZXInID8gc2V0RHVlKGVudHJ5KSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZW50cnkpIHtcbiAgICBjb25zdCBpID0gZW50cmllcy5pbmRleE9mKGVudHJ5KTtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW50cnknKTtcbiAgICBlbnRyaWVzLnNwbGljZShpLCAxKTtcbiAgICBsaXN0SXRlbXNbaV0ucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgbGlzdEl0ZW1zW2ldLnJlbW92ZSgpO1xuICAgIHVwZGF0ZURhdGFJbmRleGVzKGxpc3RJdGVtcywgaSk7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBSZW1pbmRlciB9IGZyb20gJy4vcmVtaW5kZXJzLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL3R5cGUtY2hhbmdlci5qcyc7XG5pbXBvcnQgeyBhZGRFbnRyeVRvRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS1jb250cm9sLmpzJztcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBlbnRyaWVzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdFbnRyeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBbXTtcblxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGZvcm1JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBmb3JtVmFsdWVzLnB1c2goaW5wdXQudmFsdWUpKTtcblxuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3RvcicpO1xuICAgIHN3aXRjaCAodHlwZS52YWx1ZSkge1xuICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgVGFzayguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBFdmVudCguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtaW5kZXInOlxuICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBSZW1pbmRlciguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICBhZGRFbnRyeVRvRGlzcGxheShlbnRyeSwgZW50cmllcy5pbmRleE9mKGVudHJ5KSk7XG5cbiAgICAvLyByZXNldCBmb3JtIGJ1dCByZXRhaW4gZGVmYXVsdCBkYXRlL3RpbWUgdmFsdWVzXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlQW5kUmVzZXRGb3JtKHR5cGUpO1xuXG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQW5kUmVzZXRGb3JtKHR5cGVTZWxlY3Rvcikge1xuICAgIGdlbmVyYXRlVGFza0Zvcm0oKTtcbiAgICB0eXBlU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJykuY2xvc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFJbmRleGVzKGRpdnMsIGkpIHtcbiAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZGl2LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBpZiAoaW5kZXggPiBpKSB7XG4gICAgICAgICAgICBkaXYuZGF0YXNldC5pbmRleCA9IGluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImV4cG9ydCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24sIHN0YXJ0RGF0ZSwgc3RhcnRUaW1lLCBlbmREYXRlLCBlbmRUaW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ0V2ZW50JztcbiAgICB9XG5cbiAgICB1cGRhdGVEZXRhaWxzKG5hbWUsIGxvY2F0aW9uLCBzdGFydERhdGUsIHN0YXJ0VGltZSwgZW5kRGF0ZSwgZW5kVGltZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbiAgICB9XG5cbiAgICBnZXQgZHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydERhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZUFzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuc3RhcnREYXRlKTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNhdGVnb3JpZXMoZSkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jYXRlZ29yeT1cIiR7ZS50YXJnZXQubmFtZX1cIl1gKTtcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZW50cnkuY2xhc3NMaXN0LnJlbW92ZSgnY2F0ZWdvcnktaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVySW1wb3J0YW5jZShlKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWltcG9ydGFuY2U9XCIke2UudGFyZ2V0Lm5hbWV9XCJdYCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFuY2UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbmNlLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEYXRlKGUpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgIHNob3dBbGxJdGVtcygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgIHNob3dUb2RheXNJdGVtcygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgc2hvd1RoaXNXZWVrc0l0ZW1zKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dBbGxJdGVtcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpc3Q+KicpO1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBlbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdkdWUtZGF0ZS1oaWRkZW4nKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUb2RheXNJdGVtcygpIHtcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWR1ZT1cInRvZGF5XCJdJyk7XG4gICAgY29uc3Qgbm90VG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlzdD4qOm5vdChbZGF0YS1kdWU9XCJ0b2RheVwiXSknKTtcbiAgICBcbiAgICB0b2RheS5mb3JFYWNoKGVudHJ5ID0+IGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2R1ZS1kYXRlLWhpZGRlbicpKTtcbiAgICBub3RUb2RheS5mb3JFYWNoKGVudHJ5ID0+IGVudHJ5LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLWhpZGRlbicpKTtcbn1cblxuZnVuY3Rpb24gc2hvd1RoaXNXZWVrc0l0ZW1zKCkge1xuICAgIGNvbnN0IHdlZWtTZWxlY3RvciA9ICdbZGF0YS1kdWU9XCJ3ZWVrXCJdLCBbZGF0YS1kdWU9XCJ0b2RheVwiXSc7XG4gICAgY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3dlZWtTZWxlY3Rvcn1gKTtcbiAgICBjb25zdCBub3RUaGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCNsaXN0Pio6bm90KCR7d2Vla1NlbGVjdG9yfSlgKTtcbiAgICBcbiAgICB0aGlzV2Vlay5mb3JFYWNoKGVudHJ5ID0+IGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2R1ZS1kYXRlLWhpZGRlbicpKTtcbiAgICBub3RUaGlzV2Vlay5mb3JFYWNoKGVudHJ5ID0+IGVudHJ5LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLWhpZGRlbicpKTtcbn0iLCJleHBvcnQgY29uc3QgYWRkVGFzayA9IFtcbiAgICAnTmFtZTo8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdEdWUgZGF0ZTo8aW5wdXQgdHlwZT1cImRhdGVcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dO1xuXG5leHBvcnQgY29uc3QgYWRkRXZlbnQgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2ZXJ0LWZsZXhcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdMb2NhdGlvbjo8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInZlcnQtZmxleFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPicsXG4gICAgJ05vdGVzOjx0ZXh0YXJlYSBhdXRvY29tcGxldGU9XCJvZmZcIj48L3RleHRhcmVhPicsXG4gICAgJ0ltcG9ydGFuY2U6PHNlbGVjdCBuYW1lPVwiaW1wb3J0YW5jZVwiPjxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiBzZWxlY3RlZD5NZWRpdW08L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+PC9zZWxlY3Q+Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBhZGRSZW1pbmRlciA9IFtcbiAgICAnTmFtZTo8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKGZpZWxkcywgbW9kYWwsIGlzRXZlbnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGZpZWxkO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICBhcHBlbmRFdmVudERhdGVUaW1lKGZyYWdtZW50KTtcbiAgICB9XG4gXG4gICAgYXBwZW5kQnRucyhmcmFnbWVudCwgbW9kYWwpO1xuICAgIFxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRXZlbnREYXRlVGltZShmb3JtKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVEYXRlVGltZURpdignU3RhcnQgZGF0ZTonLCAnU3RhcnQgdGltZTonLCAnMDA6MDAnKTtcbiAgICBjb25zdCBlbmQgPSBjcmVhdGVEYXRlVGltZURpdignRW5kIGRhdGU6JywgJ0VuZCB0aW1lOicsICcyMzo1OScpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsOm50aC1jaGlsZCgzKScpO1xuICAgIGZvcm0uaW5zZXJ0QmVmb3JlKHN0YXJ0LCBsb2NhdGlvbik7XG4gICAgZm9ybS5pbnNlcnRCZWZvcmUoZW5kLCBsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVUaW1lRGl2KGRhdGUsIHRpbWUsIGRlZmF1bHRUaW1lKSB7XG4gICAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnZGF0ZScsICd0aW1lJ107XG4gICAgXG4gICAgW2RhdGUsIHRpbWVdLmZvckVhY2goKGFyZywgaSkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlc1tpXSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYXJnO1xuXG4gICAgICAgIGlucHV0LmRlZmF1bHRWYWx1ZSA9IChhcmcgPT09IGRhdGUpID8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRUaW1lO1xuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRlRmllbGQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEJ0bnMoZnJhZ21lbnQsIG1vZGFsKSB7XG4gICAgY29uc3QgdGhyZWVCdXR0b25zID0gbW9kYWwuaWQgPT09ICdhZGQtaXRlbS1tb2RhbCc7XG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0aGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29uc3QgYnRuc1RvQWRkID0gdGhyZWVCdXR0b25zID8gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkXSA6IFtmaXJzdCwgc2Vjb25kXTtcbiAgICBjb25zdCBidG5OYW1lcyA9IHRocmVlQnV0dG9ucyA/IFsnQ2xvc2UnLCAnQ2xlYXInLCAnU3VibWl0J10gOiBbJ0Nsb3NlJywgJ0VkaXQnXTtcbiAgICBjb25zdCBidG5JZHMgPSB0aHJlZUJ1dHRvbnMgPyBbJ2Nsb3NlLW1vZGFsJywgJ3Jlc2V0JywgJ3N1Ym1pdCddIDogWydjbG9zZS1tb2RhbCcsICdlZGl0J107XG4gICAgY29uc3QgYnRuQXR0clZhbCA9IHRocmVlQnV0dG9ucyA/IFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddIDogWydidXR0b24nLCAnYnV0dG9uJ107XG5cbiAgICBidG5zVG9BZGQuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bk5hbWVzW2ldO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsIGJ0bklkc1tpXSk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBidG5BdHRyVmFsW2ldKTtcbiAgICAgICAgYnRucy5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuXG4gICAgYnRucy5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmNsb3NlKCkpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ0bnMpO1xufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgUmVtaW5kZXIgfSBmcm9tICcuL3JlbWluZGVycy5qcyc7XG5pbXBvcnQgeyBlbnRyaWVzIH0gZnJvbSAnLi9lbnRyeS1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGFkZEVudHJ5VG9EaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2wuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbnRyaWVzJywgSlNPTi5zdHJpbmdpZnkoZW50cmllcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxpc3RJdGVtc0Zyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VudHJpZXMnKSk7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yQXJncyA9IFsuLi5PYmplY3QudmFsdWVzKGl0ZW0pXS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgc3dpdGNoIChpdGVtLmNhdGVnb3J5KSB7XG4gICAgICAgICAgICBjYXNlICdUYXNrJzpcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2gobmV3IFRhc2soLi4uY29uc3RydWN0b3JBcmdzKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFdmVudCc6XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBFdmVudCguLi5jb25zdHJ1Y3RvckFyZ3MpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1JlbWluZGVyJzpcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2gobmV3IFJlbWluZGVyKC4uLmNvbnN0cnVjdG9yQXJncykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW2VudHJpZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGFkZEVudHJ5VG9EaXNwbGF5KGVudHJ5LCBlbnRyaWVzLmluZGV4T2YoZW50cnkpKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgY2xhc3MgUmVtaW5kZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdSZW1pbmRlcic7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ1Rhc2snO1xuICAgIH1cblxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cblxuICAgIGdldCBkdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZUFzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZHVlRGF0ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2Zvcm1zLmpzJztcbmltcG9ydCB7IGFkZFRhc2ssIGFkZEV2ZW50LCBhZGRSZW1pbmRlciB9IGZyb20gJy4vZm9ybS1maWVsZHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRm9ybShlKSB7XG4gICAgY29uc3QgdHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgIGdlbmVyYXRlVGFza0Zvcm0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdldmVudCc6XG4gICAgICAgICAgICBnZW5lcmF0ZUV2ZW50Rm9ybSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbWluZGVyJzpcbiAgICAgICAgICAgIGdlbmVyYXRlUmVtaW5kZXJGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRldGFpbHMnKTtcbiAgICBmb3JtLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGb3JtKGFkZFRhc2ssIG1vZGFsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKS5kZWZhdWx0VmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUV2ZW50Rm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRFdmVudCwgbW9kYWwsIHRydWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVtaW5kZXJGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRldGFpbHMnKTtcbiAgICBmb3JtLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGb3JtKGFkZFJlbWluZGVyLCBtb2RhbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY2hhbmdlRm9ybSwgZ2VuZXJhdGVUYXNrRm9ybSB9IGZyb20gJy4vbW9kdWxlcy90eXBlLWNoYW5nZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVOZXdFbnRyeSB9IGZyb20gJy4vbW9kdWxlcy9lbnRyeS1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGZpbHRlckNhdGVnb3JpZXMsIGZpbHRlckltcG9ydGFuY2UsIGZpbHRlckRhdGUgfSBmcm9tICcuL21vZHVsZXMvZmlsdGVycy5qcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UsIGRpc3BsYXlMaXN0SXRlbXNGcm9tU3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBpbml0aWFsaXNlIHVzaW5nICd0YXNrJyBhcyBkZWZhdWx0IGRpc3BsYXkgdHlwZVxuZ2VuZXJhdGVUYXNrRm9ybSgpO1xuXG4vLyBjcmVhdGUgc3RvcmFnZSBvciBpZiBzdG9yYWdlIGV4aXN0cywgbG9hZCBzdG9yZWQgbGlzdCBpdGVtc1xuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW50cmllcycpKSB7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG59XG5lbHNlIHtcbiAgICBkaXNwbGF5TGlzdEl0ZW1zRnJvbVN0b3JhZ2UoKTtcbn1cblxuY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbW9kYWwnKTtcbmNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKTtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlLXNlbGVjdG9yJyk7XG5jb25zdCBuZXdFbnRyeUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG5jb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhdGVnb3JpZXMgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5jb25zdCBpbXBvcnRhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ltcG9ydGFuY2UgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5jb25zdCBzaWRlYmFyRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cbm9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uc2hvd01vZGFsKCkpO1xuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uY2xvc2UoKSk7XG50eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlRm9ybSk7XG5uZXdFbnRyeUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlTmV3RW50cnkpO1xuY2F0ZWdvcmllcy5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJDYXRlZ29yaWVzKSk7XG5pbXBvcnRhbmNlLmZvckVhY2goZmlsdGVyID0+IGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckltcG9ydGFuY2UpKTtcbnNpZGViYXJGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckRhdGUpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
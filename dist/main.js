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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --teal: #72b4c5;\n    --dropShadow: drop-shadow(0 0 4px rgba(61, 61, 61, 0.658));\n    --high: #bd3535;\n    --medium: #f8cd56;\n    --low: #7fbe7f;\n}\n\nbody {\n    background-color: #FED9B7;\n    color: black;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 300;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100svh;\n    min-width: 100vw;\n    overflow: hidden;\n}\n\nheader {\n    height: 6rem;\n    display: flex;\n}\n\nmain {\n    height: calc(100vh - 6rem);\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#logo {\n    color: var(--teal);\n    -webkit-text-stroke: 2px #50a3b8;\n    font-size: 4rem;\n    font-weight: bold;\n    line-height: 6rem;\n    text-decoration: none;\n}\n\n#logo:visited {\n        color: var(--teal);\n        text-decoration: none;\n    }\n\n#container {\n    background-color: white;\n    border-radius: 1.4rem 1.4rem 0 0;\n    box-shadow: 10px 8px 5px rgba(48, 48, 48, 0.171);\n    padding: 3rem;\n    height: 100%;\n    width: 90%;\n    display: flex;\n}\n\n#sidebar {\n    border-right: solid 1px grey;\n    height: 90%;\n    width: 13rem;\n    flex-shrink: 0;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n#sidebar button {\n        align-self: stretch;\n        background-color: var(--teal);\n        border: none;\n        border-radius: 1rem;\n        font-size: 1.6rem;\n        padding: 0.8rem;\n        margin-right: 3rem;\n        transition: 110ms ease-in;\n    }\n\n#sidebar button:hover {\n            transform: scale(1.03);\n            filter: var(--dropShadow);\n        }\n\ndialog[open] {\n    border: none;\n    border-radius: 1.6rem;\n    box-shadow: var(--smallShadow);\n    font-size: 1.2rem;\n    padding: 1.5rem;\n    gap: 0.6rem;\n    animation: fadeIn 0.4s linear 1;\n}\n\ndialog[open]>label:first-child {\n        margin-bottom: 1rem;\n    }\n\n@keyframes fadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n    }\n\ndialog[open]::backdrop {\n        animation: fadeIn 0.4s linear 0;\n        background-color: #0000006c;\n        backdrop-filter: blur(3px);\n    }\n\ndialog[open] label {\n        display: flex;\n        flex-direction: column;\n    }\n\ndialog[open] label,\n    dialog[open] input,\n    dialog[open] select,\n    dialog[open] textarea,\n    dialog[open] button {\n        font-family: inherit;\n        font-size: inherit;\n        gap: 0.3rem;\n    }\n\ndialog[open] input[type=\"time\"] {\n        width: 6rem;\n    }\n\ndialog[open]>form {\n        gap: 0.6rem;\n    }\n\ndialog[open]>form>div {\n            display: flex;\n            justify-content: space-between;\n        }\n\ndialog[open]>form>div:last-child {\n                margin-top: 2rem;\n            }\n\ndialog[open]>form textarea {\n            height: 9rem;\n            width:25rem;\n            padding: 0.4rem;\n            resize: none;\n        }\n\nul {\n    padding: 0;\n    list-style: none;\n}\n\nli {\n    font-size: 2rem;\n    margin: 2rem 0 2rem;\n    transition: 100ms linear;\n    user-select: none;\n}\n\nli:hover {\n        color: grey;\n        cursor: pointer;\n    }\n\nli:last-child {\n        margin-top: 7rem;\n    }\n\n#main-area {\n    font-size: 1.4rem;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n#main-area>#filters {\n        border-bottom: solid 1px grey;\n        height: 8rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        flex-wrap: wrap;\n    }\n\n#main-area>#filters>* {\n            margin-left: 2rem;\n            flex-shrink: 0;\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n\n#main-area>#categories {\n        justify-content: space-between;\n    }\n\n#main-area .filter {\n        text-align: end;\n        margin: 0.2rem 0;\n        display: grid;\n        grid-template-columns: auto 1.2em;\n        gap: 0.5em;\n        cursor: pointer;\n        user-select: none;\n    }\n\n#main-area #importance>div {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n    }\n\n@media screen and (max-width: 1266px) {\n    #importance>div {\n        flex-direction: row !important;\n        gap: 2rem;\n    }\n}\n\n#list {\n    margin-bottom: 0.5rem;\n    padding: 1.6rem;\n}\n\n#list .entry {\n        font-size: 1rem;\n        background-color: white;\n        border: 1px solid grey;\n        height: 2.8rem;\n        width: 100%;\n        margin-bottom: 0.6rem;\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        transition: 110ms linear;\n    }\n\n#list .entry:hover {\n            transform: scale(1.01);\n            filter: var(--dropShadow);\n        }\n\n#list .entry .left {\n            flex: 1;\n            max-width: 40rem;\n        }\n\n#list .entry .left .category,\n            #list .entry .left .name {\n                flex-shrink: 0;\n            }\n\n#list .entry .left,\n        #list .entry .right {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n#list .entry .category {\n            font-weight: normal;\n            line-height: 2.8rem;\n            text-align: center;\n            border-right: 1px solid grey;\n            height: 100%;\n            width: 7rem;\n            margin: 0;\n            user-select: none;\n        }\n\n#list .entry .notes {\n            color: rgb(77, 77, 77);\n            font-weight: 100;\n            min-width: 0px;\n            max-width: 32rem;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 1;\n            overflow: hidden;\n        }\n\n#list .entry .delete {\n            margin-right: 1.5rem;\n        }\n\ninput[type='checkbox'] {\n    appearance: none;\n    background-color: transparent;\n    margin: 0;\n    border: 4px solid var(--teal);\n    cursor: pointer;\n    display: grid;\n    place-content: center;\n}\n\ninput[type='checkbox']::before {\n        content: '';\n        width: 1rem;\n        height: 1rem;\n        transform: scale(0);\n        transform-origin: bottom left;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transition: 110ms linear;\n        box-shadow: inset 1rem 1rem var(--teal);\n    }\n\ninput[type='checkbox']:checked::before {\n        transform: scale(1);\n    }\n\nbutton {\n    cursor: pointer;\n    font-family: inherit;\n    text-align: center;\n}\n\n.list-btn {\n    background-color: transparent;\n    border: 3px solid var(--teal);\n    color: var(--teal);\n    font-weight: bold;\n    transition: 50ms linear;\n}\n\n.list-btn:hover {\n        transform: scale(1.1);\n    }\n\ninput:disabled,\ntextarea:disabled,\nselect:disabled {\n    background-color: transparent;\n    border: none;\n    color: black;\n    font-weight: bold;\n    padding: 0 !important;\n    appearance: none;\n}\n\n.vert-flex {\n    display: flex;\n    flex-direction: column;\n}\n\n.category-hidden,\n.importance-hidden {\n    display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');\n\n:root {\n    --teal: #72b4c5;\n    --dropShadow: drop-shadow(0 0 4px rgba(61, 61, 61, 0.658));\n    --high: #bd3535;\n    --medium: #f8cd56;\n    --low: #7fbe7f;\n}\n\nbody {\n    background-color: #FED9B7;\n    color: black;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 300;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100svh;\n    min-width: 100vw;\n    overflow: hidden;\n}\n\nheader {\n    height: 6rem;\n    display: flex;\n}\n\nmain {\n    height: calc(100vh - 6rem);\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#logo {\n    color: var(--teal);\n    -webkit-text-stroke: 2px #50a3b8;\n    font-size: 4rem;\n    font-weight: bold;\n    line-height: 6rem;\n    text-decoration: none;\n\n    &:visited {\n        color: var(--teal);\n        text-decoration: none;\n    }\n}\n\n#container {\n    background-color: white;\n    border-radius: 1.4rem 1.4rem 0 0;\n    box-shadow: 10px 8px 5px rgba(48, 48, 48, 0.171);\n    padding: 3rem;\n    height: 100%;\n    width: 90%;\n    display: flex;\n}\n\n#sidebar {\n    border-right: solid 1px grey;\n    height: 90%;\n    width: 13rem;\n    flex-shrink: 0;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    & button {\n        align-self: stretch;\n        background-color: var(--teal);\n        border: none;\n        border-radius: 1rem;\n        font-size: 1.6rem;\n        padding: 0.8rem;\n        margin-right: 3rem;\n        transition: 110ms ease-in;\n\n        &:hover {\n            transform: scale(1.03);\n            filter: var(--dropShadow);\n        }\n    }\n}\n\ndialog[open] {\n    border: none;\n    border-radius: 1.6rem;\n    box-shadow: var(--smallShadow);\n    font-size: 1.2rem;\n    padding: 1.5rem;\n    gap: 0.6rem;\n    animation: fadeIn 0.4s linear 1;\n\n    &>label:first-child {\n        margin-bottom: 1rem;\n    }\n\n    @keyframes fadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n    }\n\n    &::backdrop {\n        animation: fadeIn 0.4s linear 0;\n        background-color: #0000006c;\n        backdrop-filter: blur(3px);\n    }\n\n    & label {\n        display: flex;\n        flex-direction: column;\n    }\n\n    & label,\n    input,\n    select,\n    textarea,\n    button {\n        font-family: inherit;\n        font-size: inherit;\n        gap: 0.3rem;\n    }\n\n    & input[type=\"time\"] {\n        width: 6rem;\n    }\n\n    &>form {\n        gap: 0.6rem;\n\n        &>div {\n            display: flex;\n            justify-content: space-between;\n\n            &:last-child {\n                margin-top: 2rem;\n            }\n        }\n\n        & textarea {\n            height: 9rem;\n            width:25rem;\n            padding: 0.4rem;\n            resize: none;\n        }\n    }\n}\n\nul {\n    padding: 0;\n    list-style: none;\n}\n\nli {\n    font-size: 2rem;\n    margin: 2rem 0 2rem;\n    transition: 100ms linear;\n    user-select: none;\n\n    &:hover {\n        color: grey;\n        cursor: pointer;\n    }\n\n    &:last-child {\n        margin-top: 7rem;\n    }\n}\n\n#main-area {\n    font-size: 1.4rem;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    &>#filters {\n        border-bottom: solid 1px grey;\n        height: 8rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        flex-wrap: wrap;\n\n        &>* {\n            margin-left: 2rem;\n            flex-shrink: 0;\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n    }\n\n    &>#categories {\n        justify-content: space-between;\n    }\n\n    & .filter {\n        text-align: end;\n        margin: 0.2rem 0;\n        display: grid;\n        grid-template-columns: auto 1.2em;\n        gap: 0.5em;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    & #importance>div {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width: 1266px) {\n    #importance>div {\n        flex-direction: row !important;\n        gap: 2rem;\n    }\n}\n\n#list {\n    margin-bottom: 0.5rem;\n    padding: 1.6rem;\n\n    & .entry {\n        font-size: 1rem;\n        background-color: white;\n        border: 1px solid grey;\n        height: 2.8rem;\n        width: 100%;\n        margin-bottom: 0.6rem;\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        transition: 110ms linear;\n\n        &:hover {\n            transform: scale(1.01);\n            filter: var(--dropShadow);\n        }\n\n        & .left {\n            flex: 1;\n            max-width: 40rem;\n\n            & .category,\n            .name {\n                flex-shrink: 0;\n            }\n        }\n\n        & .left,\n        .right {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n        & .category {\n            font-weight: normal;\n            line-height: 2.8rem;\n            text-align: center;\n            border-right: 1px solid grey;\n            height: 100%;\n            width: 7rem;\n            margin: 0;\n            user-select: none;\n        }\n\n        & .notes {\n            color: rgb(77, 77, 77);\n            font-weight: 100;\n            min-width: 0px;\n            max-width: 32rem;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 1;\n            overflow: hidden;\n        }\n\n        & .delete {\n            margin-right: 1.5rem;\n        }\n    }\n}\n\ninput[type='checkbox'] {\n    appearance: none;\n    background-color: transparent;\n    margin: 0;\n    border: 4px solid var(--teal);\n    cursor: pointer;\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: '';\n        width: 1rem;\n        height: 1rem;\n        transform: scale(0);\n        transform-origin: bottom left;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transition: 110ms linear;\n        box-shadow: inset 1rem 1rem var(--teal);\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n}\n\nbutton {\n    cursor: pointer;\n    font-family: inherit;\n    text-align: center;\n}\n\n.list-btn {\n    background-color: transparent;\n    border: 3px solid var(--teal);\n    color: var(--teal);\n    font-weight: bold;\n    transition: 50ms linear;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n}\n\ninput:disabled,\ntextarea:disabled,\nselect:disabled {\n    background-color: transparent;\n    border: none;\n    color: black;\n    font-weight: bold;\n    padding: 0 !important;\n    appearance: none;\n}\n\n.vert-flex {\n    display: flex;\n    flex-direction: column;\n}\n\n.category-hidden,\n.importance-hidden {\n    display: none !important;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _entry_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entry-factory.js */ "./src/modules/entry-factory.js");
/* harmony import */ var _form_fields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-fields.js */ "./src/modules/form-fields.js");




function addEntryToDisplay(entry, index) {
    const listItem = document.createElement('div');
    listItem.classList.add('entry');
    listItem.dataset.index = index;
    listItem.dataset.category = entry.constructor.name;
    listItem.dataset.importance = entry.importance;

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

    const type = entry.constructor.name;
    if (type === 'Task') {
        appendDateField(div, 'Due: ', entry.dueDate);
    }
    else if (type === 'Event') {
        appendDateField(div, 'Starts: ', entry.startDate);
    }

    return div;
}

function appendDateField(div, heading, date) {
    const ddMMyyyy = convertToDDMMYYYY(date);
    const p = document.createElement('p');
    p.classList.add('due');
    p.innerHTML = `<b>${heading}</b> ${ddMMyyyy}`;

    div.insertBefore(p, div.firstChild);
}

function convertToDDMMYYYY(date) {
    return `${date.slice(-2)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
}

function openDetails(entry) {
    const modal = document.querySelector('#details');
    modal.showModal();

    // tie modal to instance of object
    modal.dataset.item = _entry_factory_js__WEBPACK_IMPORTED_MODULE_1__.entries.indexOf(entry);
    
    const form = details.querySelector('form');
    form.replaceChildren();

    const fields = (entry.constructor.name === 'Task')  ? _form_fields_js__WEBPACK_IMPORTED_MODULE_2__.addTask
                :  (entry.constructor.name === 'Event') ? _form_fields_js__WEBPACK_IMPORTED_MODULE_2__.addEvent
                :                                         _form_fields_js__WEBPACK_IMPORTED_MODULE_2__.addReminder;
    const fragment = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.createForm)(fields, modal, entry.constructor.name === 'Event');
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
    const inputs = document.querySelectorAll('#details input, #details select, #details textarea');
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
    const entry = _entry_factory_js__WEBPACK_IMPORTED_MODULE_1__.entries[Number(modal.dataset.item)];

    entry.updateDetails(...details);

    fields.forEach(field => {
        field.defaultValue = field.value;
        field.disabled = true;
    });
    changeCancelSaveToEdit();

    updateEntryVisualsInDOM(entry);
}

function updateEntryVisualsInDOM(entry) {
    const index = _entry_factory_js__WEBPACK_IMPORTED_MODULE_1__.entries.indexOf(entry);
    const listItem = document.querySelector(`[data-index="${index}"]`);

    const fieldsToUpdate = listItem.querySelectorAll('h4, p');
    const due = (entry.constructor.name === 'Event') ? entry.startDate
            :   (entry.constructor.name === 'Task')  ? entry.dueDate
            :                                          null;
    const valuesToInsert = [entry.constructor.name, entry.name, entry.notes, convertToDDMMYYYY(due)];

    fieldsToUpdate.forEach((field, i) => field.textContent = valuesToInsert[i]);
    listItem.style.boxShadow = `-0.5em 0 var(--${entry.importance}) inset`;
    listItem.dataset.importance = entry.importance;
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
    }

    updateDetails(name, dueDate, notes, importance) {
        this.name = name;
        this.dueDate = dueDate;
        this.notes = notes;
        this.importance = importance;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// initialise using 'task' as default display type
(0,_modules_type_changer_js__WEBPACK_IMPORTED_MODULE_0__.generateTaskForm)();

const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const addItem = document.querySelector('#add-item-modal');
const typeSelector = document.querySelector('#type-selector');
const newEntryForm = document.querySelector('#item-details');
const categories = document.querySelectorAll('#categories input[type="checkbox"]');
const importance = document.querySelectorAll('#importance input[type="checkbox"]');


openModal.addEventListener('click', () => addItem.showModal());
closeModal.addEventListener('click', () => addItem.close());
typeSelector.addEventListener('change', _modules_type_changer_js__WEBPACK_IMPORTED_MODULE_0__.changeForm);
newEntryForm.addEventListener('submit', _modules_entry_factory_js__WEBPACK_IMPORTED_MODULE_1__.createNewEntry);
categories.forEach(filter => filter.addEventListener('click', _modules_filters_js__WEBPACK_IMPORTED_MODULE_2__.filterCategories));
importance.forEach(filter => filter.addEventListener('click', _modules_filters_js__WEBPACK_IMPORTED_MODULE_2__.filterImportance));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZW50cnktZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9maWx0ZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9mb3JtLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL3JlbWluZGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL3R5cGUtY2hhbmdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS10ZWFsOiAjNzJiNGM1O1xcbiAgICAtLWRyb3BTaGFkb3c6IGRyb3Atc2hhZG93KDAgMCA0cHggcmdiYSg2MSwgNjEsIDYxLCAwLjY1OCkpO1xcbiAgICAtLWhpZ2g6ICNiZDM1MzU7XFxuICAgIC0tbWVkaXVtOiAjZjhjZDU2O1xcbiAgICAtLWxvdzogIzdmYmU3ZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUQ5Qjc7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICM1MGEzYjg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNsb2dvOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjRyZW0gMS40cmVtIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMTBweCA4cHggNXB4IHJnYmEoNDgsIDQ4LCA0OCwgMC4xNzEpO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBlYXNlLWluO1xcbiAgICB9XFxuXFxuI3NpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tZHJvcFNoYWRvdyk7XFxuICAgICAgICB9XFxuXFxuZGlhbG9nW29wZW5dIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjZyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNtYWxsU2hhZG93KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDE7XFxufVxcblxcbmRpYWxvZ1tvcGVuXT5sYWJlbDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dOjpiYWNrZHJvcCB7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZjO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0gbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0gbGFiZWwsXFxuICAgIGRpYWxvZ1tvcGVuXSBpbnB1dCxcXG4gICAgZGlhbG9nW29wZW5dIHNlbGVjdCxcXG4gICAgZGlhbG9nW29wZW5dIHRleHRhcmVhLFxcbiAgICBkaWFsb2dbb3Blbl0gYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0gaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdIHtcXG4gICAgICAgIHdpZHRoOiA2cmVtO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0ge1xcbiAgICAgICAgZ2FwOiAwLjZyZW07XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybT5kaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtPmRpdjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0gdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGhlaWdodDogOXJlbTtcXG4gICAgICAgICAgICB3aWR0aDoyNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgfVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbSAwIDJyZW07XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxubGk6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbWFpbi1hcmVhPiNmaWx0ZXJzIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiNtYWluLWFyZWE+I2ZpbHRlcnM+KiB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4jbWFpbi1hcmVhPiNjYXRlZ29yaWVzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiNtYWluLWFyZWEgLmZpbHRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICBtYXJnaW46IDAuMnJlbSAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxLjJlbTtcXG4gICAgICAgIGdhcDogMC41ZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcblxcbiNtYWluLWFyZWEgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjY2cHgpIHtcXG4gICAgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4jbGlzdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMS42cmVtO1xcbn1cXG5cXG4jbGlzdCAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuICAgIH1cXG5cXG4jbGlzdCAuZW50cnk6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1kcm9wU2hhZG93KTtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmxlZnQge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmxlZnQgLmNhdGVnb3J5LFxcbiAgICAgICAgICAgICNsaXN0IC5lbnRyeSAubGVmdCAubmFtZSB7XFxuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmxlZnQsXFxuICAgICAgICAjbGlzdCAuZW50cnkgLnJpZ2h0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAuY2F0ZWdvcnkge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubm90ZXMge1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMycmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5kZWxldGUge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICAgICAgfVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gdmFyKC0tdGVhbCk7XFxuICAgIH1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDUwbXMgbGluZWFyO1xcbn1cXG5cXG4ubGlzdC1idG46aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB9XFxuXFxuaW5wdXQ6ZGlzYWJsZWQsXFxudGV4dGFyZWE6ZGlzYWJsZWQsXFxuc2VsZWN0OmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udmVydC1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5LWhpZGRlbixcXG4uaW1wb3J0YW5jZS1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxlQUFlO0lBQ2YsMERBQTBEO0lBQzFELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNi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IjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRlYWw6ICM3MmI0YzU7XFxuICAgIC0tZHJvcFNoYWRvdzogZHJvcC1zaGFkb3coMCAwIDRweCByZ2JhKDYxLCA2MSwgNjEsIDAuNjU4KSk7XFxuICAgIC0taGlnaDogI2JkMzUzNTtcXG4gICAgLS1tZWRpdW06ICNmOGNkNTY7XFxuICAgIC0tbG93OiAjN2ZiZTdmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRDlCNztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggIzUwYTNiODtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDZyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG4gICAgJjp2aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNHJlbSAxLjRyZW0gMCAwO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDhweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjE3MSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC44cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgZWFzZS1pbjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1kcm9wU2hhZG93KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5kaWFsb2dbb3Blbl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc21hbGxTaGFkb3cpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBsaW5lYXIgMTtcXG5cXG4gICAgJj5sYWJlbDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgfVxcblxcbiAgICAmOjpiYWNrZHJvcCB7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZjO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIH1cXG5cXG4gICAgJiBsYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAmIGxhYmVsLFxcbiAgICBpbnB1dCxcXG4gICAgc2VsZWN0LFxcbiAgICB0ZXh0YXJlYSxcXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZ2FwOiAwLjNyZW07XFxuICAgIH1cXG5cXG4gICAgJiBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgIH1cXG5cXG4gICAgJj5mb3JtIHtcXG4gICAgICAgIGdhcDogMC42cmVtO1xcblxcbiAgICAgICAgJj5kaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOjI1cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDAgMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgbGluZWFyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogZ3JleTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogN3JlbTtcXG4gICAgfVxcbn1cXG5cXG4jbWFpbi1hcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICY+I2ZpbHRlcnMge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICAgICAgJj4qIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY+I2NhdGVnb3JpZXMge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgICYgLmZpbHRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICBtYXJnaW46IDAuMnJlbSAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxLjJlbTtcXG4gICAgICAgIGdhcDogMC41ZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmICNpbXBvcnRhbmNlPmRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNjZweCkge1xcbiAgICAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxufVxcblxcbiNsaXN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxuXFxuICAgICYgLmVudHJ5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgIGhlaWdodDogMi44cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgbGluZWFyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWRyb3BTaGFkb3cpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubGVmdCB7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcblxcbiAgICAgICAgICAgICYgLmNhdGVnb3J5LFxcbiAgICAgICAgICAgIC5uYW1lIHtcXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubGVmdCxcXG4gICAgICAgIC5yaWdodCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLmNhdGVnb3J5IHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLm5vdGVzIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMnJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAuZGVsZXRlIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgbGluZWFyO1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIHZhcigtLXRlYWwpO1xcbiAgICB9XFxuXFxuICAgICY6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDUwbXMgbGluZWFyO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcbn1cXG5cXG5pbnB1dDpkaXNhYmxlZCxcXG50ZXh0YXJlYTpkaXNhYmxlZCxcXG5zZWxlY3Q6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi52ZXJ0LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnktaGlkZGVuLFxcbi5pbXBvcnRhbmNlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vZm9ybXMnO1xuaW1wb3J0IHsgZW50cmllcyB9IGZyb20gJy4vZW50cnktZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBhZGRFdmVudCwgYWRkUmVtaW5kZXIgfSBmcm9tICcuL2Zvcm0tZmllbGRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVudHJ5VG9EaXNwbGF5KGVudHJ5LCBpbmRleCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZW50cnknKTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5jYXRlZ29yeSA9IGVudHJ5LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5pbXBvcnRhbmNlID0gZW50cnkuaW1wb3J0YW5jZTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUxlZnRIYWxmKGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUsIGVudHJ5Lm5hbWUsIGVudHJ5Lm5vdGVzKSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlUmlnaHRIYWxmKGVudHJ5KSk7XG4gICAgbGlzdEl0ZW0uc3R5bGUuYm94U2hhZG93ID0gYC0wLjVlbSAwIHZhcigtLSR7ZW50cnkuaW1wb3J0YW5jZX0pIGluc2V0YDtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0SGFsZih0eXBlLCBuYW1lLCBub3Rlcykge1xuICAgIC8vIHJlbmRlciBkZWZhdWx0IG5hbWUgaGVhZGluZ1xuICAgIG5hbWUgPSAobmFtZSA9PT0gJycpID8gJy0nIDogbmFtZTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgICBjb25zdCB0YWdzID0gWydoNCcsICdoNCcsICdwJ107XG4gICAgY29uc3QgY2xhc3NlcyA9IFsnY2F0ZWdvcnknLCAnbmFtZScsICdub3RlcyddO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW3R5cGUsIG5hbWUsIG5vdGVzXTtcblxuICAgIHRhZ3MuZm9yRWFjaCgodGFnLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnRzW2ldO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRIYWxmKGVudHJ5KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gWydkZXRhaWxzJywgJ2RlbGV0ZSddO1xuICAgIGNvbnN0IGJ0bk5hbWVzID0gWydEZXRhaWxzJywgJ1gnXTtcbiAgICBidG5OYW1lcy5mb3JFYWNoKChuYW1lLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnRuJyk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuXG4gICAgZGl2LmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGV0YWlscy5iaW5kKG51bGwsIGVudHJ5KSk7XG5cbiAgICBjb25zdCB0eXBlID0gZW50cnkuY29uc3RydWN0b3IubmFtZTtcbiAgICBpZiAodHlwZSA9PT0gJ1Rhc2snKSB7XG4gICAgICAgIGFwcGVuZERhdGVGaWVsZChkaXYsICdEdWU6ICcsIGVudHJ5LmR1ZURhdGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnRXZlbnQnKSB7XG4gICAgICAgIGFwcGVuZERhdGVGaWVsZChkaXYsICdTdGFydHM6ICcsIGVudHJ5LnN0YXJ0RGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRGF0ZUZpZWxkKGRpdiwgaGVhZGluZywgZGF0ZSkge1xuICAgIGNvbnN0IGRkTU15eXl5ID0gY29udmVydFRvRERNTVlZWVkoZGF0ZSk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2R1ZScpO1xuICAgIHAuaW5uZXJIVE1MID0gYDxiPiR7aGVhZGluZ308L2I+ICR7ZGRNTXl5eXl9YDtcblxuICAgIGRpdi5pbnNlcnRCZWZvcmUocCwgZGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9ERE1NWVlZWShkYXRlKSB7XG4gICAgcmV0dXJuIGAke2RhdGUuc2xpY2UoLTIpfS8ke2RhdGUuc2xpY2UoNSwgNyl9LyR7ZGF0ZS5zbGljZSgwLCA0KX1gO1xufVxuXG5mdW5jdGlvbiBvcGVuRGV0YWlscyhlbnRyeSkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKTtcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcblxuICAgIC8vIHRpZSBtb2RhbCB0byBpbnN0YW5jZSBvZiBvYmplY3RcbiAgICBtb2RhbC5kYXRhc2V0Lml0ZW0gPSBlbnRyaWVzLmluZGV4T2YoZW50cnkpO1xuICAgIFxuICAgIGNvbnN0IGZvcm0gPSBkZXRhaWxzLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBmb3JtLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZmllbGRzID0gKGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdUYXNrJykgID8gYWRkVGFza1xuICAgICAgICAgICAgICAgIDogIChlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRXZlbnQnKSA/IGFkZEV2ZW50XG4gICAgICAgICAgICAgICAgOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUmVtaW5kZXI7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGb3JtKGZpZWxkcywgbW9kYWwsIGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdFdmVudCcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG4gICAgc2V0RW50cnlWYWx1ZXMoZW50cnksIGZvcm0pO1xuXG4gICAgY29uc3QgZWRpdCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Jyk7XG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuYWJsZUVkaXQpO1xufVxuXG5mdW5jdGlvbiBzZXRFbnRyeVZhbHVlcyhlbnRyeSwgZm9ybSkge1xuICAgIGNvbnN0IGZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBjb25zdCBlbnRyeVZhbHVlcyA9IFsuLi5PYmplY3QudmFsdWVzKGVudHJ5KV07XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQsIGkpID0+IHtcbiAgICAgICAgLy8gcmV0YWluICctJyBmb3IgZW1wdHkgbmFtZSBmaWVsZCBvbmx5XG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IChlbnRyeVZhbHVlc1tpXSA9PT0gJycgJiYgaSA9PT0gMCkgPyAnLScgOiBlbnRyeVZhbHVlc1tpXTtcbiAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBpZiAoZmllbGQudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gZW50cnlWYWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRWRpdCgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGV0YWlscyBpbnB1dCwgI2RldGFpbHMgc2VsZWN0LCAjZGV0YWlscyB0ZXh0YXJlYScpO1xuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmRpc2FibGVkID0gZmFsc2UpO1xuXG4gICAgY2hhbmdlRWRpdEJ0blRvQ2FuY2VsU2F2ZSgpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VFZGl0QnRuVG9DYW5jZWxTYXZlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50QnRucyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBidG5zID0geydjYW5jZWwnOiAnQ2FuY2VsJywgJ3NhdmUnOiAnU2F2ZSd9O1xuICAgIGZvciAoY29uc3QgaWQgaW4gYnRucykge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ0bnNbaWRdO1xuICAgICAgICByZXBsYWNlbWVudEJ0bnMuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscz5mb3JtPmRpdjpsYXN0LWNoaWxkJyk7XG4gICAgYnRuRGl2LnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudEJ0bnMsIGJ0bkRpdi5sYXN0Q2hpbGQpO1xuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV2ZXJ0RGV0YWlscyk7XG4gICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVVcGRhdGVkRGV0YWlscyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNhbmNlbFNhdmVUb0VkaXQoKSB7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQnKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlRWRpdCk7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscz5mb3JtPmRpdjpsYXN0LWNoaWxkJyk7XG4gICAgYnRuRGl2LnJlbW92ZUNoaWxkKGJ0bkRpdi5sYXN0Q2hpbGQpO1xuICAgIGJ0bkRpdi5yZXBsYWNlQ2hpbGQoZWRpdEJ0biwgYnRuRGl2Lmxhc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHJldmVydERldGFpbHMoKSB7XG4gICAgY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBmaWVsZC52YWx1ZSA9IGZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgY2hhbmdlQ2FuY2VsU2F2ZVRvRWRpdCgpO1xufVxuXG5mdW5jdGlvbiBzYXZlVXBkYXRlZERldGFpbHMoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpO1xuICAgIGNvbnN0IGZpZWxkcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gICAgY29uc3QgZmllbGRWYWx1ZXMgPSBBcnJheS5mcm9tKGZpZWxkcykubWFwKGZpZWxkID0+IGZpZWxkLnZhbHVlKTtcbiAgICBjb25zdCBkZXRhaWxzID0gWy4uLmZpZWxkVmFsdWVzXTtcbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbTnVtYmVyKG1vZGFsLmRhdGFzZXQuaXRlbSldO1xuXG4gICAgZW50cnkudXBkYXRlRGV0YWlscyguLi5kZXRhaWxzKTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gZmllbGQudmFsdWU7XG4gICAgICAgIGZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBjaGFuZ2VDYW5jZWxTYXZlVG9FZGl0KCk7XG5cbiAgICB1cGRhdGVFbnRyeVZpc3VhbHNJbkRPTShlbnRyeSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVudHJ5VmlzdWFsc0luRE9NKGVudHJ5KSB7XG4gICAgY29uc3QgaW5kZXggPSBlbnRyaWVzLmluZGV4T2YoZW50cnkpO1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuXG4gICAgY29uc3QgZmllbGRzVG9VcGRhdGUgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdoNCwgcCcpO1xuICAgIGNvbnN0IGR1ZSA9IChlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRXZlbnQnKSA/IGVudHJ5LnN0YXJ0RGF0ZVxuICAgICAgICAgICAgOiAgIChlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVGFzaycpICA/IGVudHJ5LmR1ZURhdGVcbiAgICAgICAgICAgIDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgIGNvbnN0IHZhbHVlc1RvSW5zZXJ0ID0gW2VudHJ5LmNvbnN0cnVjdG9yLm5hbWUsIGVudHJ5Lm5hbWUsIGVudHJ5Lm5vdGVzLCBjb252ZXJ0VG9ERE1NWVlZWShkdWUpXTtcblxuICAgIGZpZWxkc1RvVXBkYXRlLmZvckVhY2goKGZpZWxkLCBpKSA9PiBmaWVsZC50ZXh0Q29udGVudCA9IHZhbHVlc1RvSW5zZXJ0W2ldKTtcbiAgICBsaXN0SXRlbS5zdHlsZS5ib3hTaGFkb3cgPSBgLTAuNWVtIDAgdmFyKC0tJHtlbnRyeS5pbXBvcnRhbmNlfSkgaW5zZXRgO1xuICAgIGxpc3RJdGVtLmRhdGFzZXQuaW1wb3J0YW5jZSA9IGVudHJ5LmltcG9ydGFuY2U7XG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBSZW1pbmRlciB9IGZyb20gJy4vcmVtaW5kZXJzLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL3R5cGUtY2hhbmdlci5qcyc7XG5pbXBvcnQgeyBhZGRFbnRyeVRvRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS1jb250cm9sLmpzJztcblxuZXhwb3J0IGNvbnN0IGVudHJpZXMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0VudHJ5KGUpIHtcbiAgICBjb25zdCBmb3JtVmFsdWVzID0gW107XG5cbiAgICBjb25zdCBmb3JtSW5wdXRzID0gZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBmb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4gZm9ybVZhbHVlcy5wdXNoKGlucHV0LnZhbHVlKSk7XG5cbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUtc2VsZWN0b3InKTtcbiAgICBzd2l0Y2ggKHR5cGUudmFsdWUpIHtcbiAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2gobmV3IFRhc2soLi4uZm9ybVZhbHVlcykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgRXZlbnQoLi4uZm9ybVZhbHVlcykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbWluZGVyJzpcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgUmVtaW5kZXIoLi4uZm9ybVZhbHVlcykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW2VudHJpZXMubGVuZ3RoIC0gMV07XG4gICAgYWRkRW50cnlUb0Rpc3BsYXkoZW50cnksIGVudHJpZXMuaW5kZXhPZihlbnRyeSkpO1xuXG4gICAgLy8gcmVzZXQgZm9ybSBidXQgcmV0YWluIGRlZmF1bHQgZGF0ZS90aW1lIHZhbHVlc1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZUFuZFJlc2V0Rm9ybSh0eXBlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VBbmRSZXNldEZvcm0odHlwZVNlbGVjdG9yKSB7XG4gICAgZ2VuZXJhdGVUYXNrRm9ybSgpO1xuICAgIHR5cGVTZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKS5jbG9zZSgpO1xufSIsImV4cG9ydCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24sIHN0YXJ0RGF0ZSwgc3RhcnRUaW1lLCBlbmREYXRlLCBlbmRUaW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cblxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgbG9jYXRpb24sIHN0YXJ0RGF0ZSwgc3RhcnRUaW1lLCBlbmREYXRlLCBlbmRUaW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2F0ZWdvcmllcyhlKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNhdGVnb3J5PVwiJHtlLnRhcmdldC5uYW1lfVwiXWApO1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdjYXRlZ29yeS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckltcG9ydGFuY2UoZSkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pbXBvcnRhbmNlPVwiJHtlLnRhcmdldC5uYW1lfVwiXWApO1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbmNlLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW5jZS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pXG59IiwiZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnRHVlIGRhdGU6PGlucHV0IHR5cGU9XCJkYXRlXCI+JyxcbiAgICAnTm90ZXM6PHRleHRhcmVhIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+JyxcbiAgICAnSW1wb3J0YW5jZTo8c2VsZWN0IG5hbWU9XCJpbXBvcnRhbmNlXCI+PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIHNlbGVjdGVkPk1lZGl1bTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj48L3NlbGVjdD4nLFxuXTtcblxuZXhwb3J0IGNvbnN0IGFkZEV2ZW50ID0gW1xuICAgICdOYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidmVydC1mbGV4XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnTG9jYXRpb246PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2ZXJ0LWZsZXhcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dO1xuXG5leHBvcnQgY29uc3QgYWRkUmVtaW5kZXIgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnTm90ZXM6PHRleHRhcmVhIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+JyxcbiAgICAnSW1wb3J0YW5jZTo8c2VsZWN0IG5hbWU9XCJpbXBvcnRhbmNlXCI+PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIHNlbGVjdGVkPk1lZGl1bTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj48L3NlbGVjdD4nLFxuXTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybShmaWVsZHMsIG1vZGFsLCBpc0V2ZW50ID0gZmFsc2UpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBmaWVsZDtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgYXBwZW5kRXZlbnREYXRlVGltZShmcmFnbWVudCk7XG4gICAgfVxuIFxuICAgIGFwcGVuZEJ0bnMoZnJhZ21lbnQsIG1vZGFsKTtcbiAgICBcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEV2ZW50RGF0ZVRpbWUoZm9ybSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gY3JlYXRlRGF0ZVRpbWVEaXYoJ1N0YXJ0IGRhdGU6JywgJ1N0YXJ0IHRpbWU6JywgJzAwOjAwJyk7XG4gICAgY29uc3QgZW5kID0gY3JlYXRlRGF0ZVRpbWVEaXYoJ0VuZCBkYXRlOicsICdFbmQgdGltZTonLCAnMjM6NTknKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdsYWJlbDpudGgtY2hpbGQoMyknKTtcbiAgICBmb3JtLmluc2VydEJlZm9yZShzdGFydCwgbG9jYXRpb24pO1xuICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGVuZCwgbG9jYXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZURpdihkYXRlLCB0aW1lLCBkZWZhdWx0VGltZSkge1xuICAgIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2RhdGUnLCAndGltZSddO1xuICAgIFxuXG4gICAgW2RhdGUsIHRpbWVdLmZvckVhY2goKGFyZywgaSkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlc1tpXSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYXJnO1xuXG4gICAgICAgIGlucHV0LmRlZmF1bHRWYWx1ZSA9IChhcmcgPT09IGRhdGUpID8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRUaW1lO1xuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRlRmllbGQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEJ0bnMoZnJhZ21lbnQsIG1vZGFsKSB7XG4gICAgY29uc3QgdGhyZWVCdXR0b25zID0gbW9kYWwuaWQgPT09ICdhZGQtaXRlbS1tb2RhbCc7XG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0aGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29uc3QgYnRuc1RvQWRkID0gdGhyZWVCdXR0b25zID8gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkXSA6IFtmaXJzdCwgc2Vjb25kXTtcbiAgICBjb25zdCBidG5OYW1lcyA9IHRocmVlQnV0dG9ucyA/IFsnQ2xvc2UnLCAnQ2xlYXInLCAnU3VibWl0J10gOiBbJ0Nsb3NlJywgJ0VkaXQnXTtcbiAgICBjb25zdCBidG5JZHMgPSB0aHJlZUJ1dHRvbnMgPyBbJ2Nsb3NlLW1vZGFsJywgJ3Jlc2V0JywgJ3N1Ym1pdCddIDogWydjbG9zZS1tb2RhbCcsICdlZGl0J107XG4gICAgY29uc3QgYnRuQXR0clZhbCA9IHRocmVlQnV0dG9ucyA/IFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddIDogWydidXR0b24nLCAnYnV0dG9uJ107XG5cbiAgICBidG5zVG9BZGQuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bk5hbWVzW2ldO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsIGJ0bklkc1tpXSk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBidG5BdHRyVmFsW2ldKTtcbiAgICAgICAgYnRucy5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuXG4gICAgYnRucy5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmNsb3NlKCkpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ0bnMpO1xufSIsImV4cG9ydCBjbGFzcyBSZW1pbmRlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVEZXRhaWxzKG5hbWUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZXRhaWxzKG5hbWUsIGR1ZURhdGUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vZm9ybXMuanMnO1xuaW1wb3J0IHsgYWRkVGFzaywgYWRkRXZlbnQsIGFkZFJlbWluZGVyIH0gZnJvbSAnLi9mb3JtLWZpZWxkcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGb3JtKGUpIHtcbiAgICBjb25zdCB0eXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgZ2VuZXJhdGVUYXNrRm9ybSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgICAgICAgIGdlbmVyYXRlRXZlbnRGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtaW5kZXInOlxuICAgICAgICAgICAgZ2VuZXJhdGVSZW1pbmRlckZvcm0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oYWRkVGFzaywgbW9kYWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLmRlZmF1bHRWYWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRXZlbnRGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRldGFpbHMnKTtcbiAgICBmb3JtLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBjcmVhdGVGb3JtKGFkZEV2ZW50LCBtb2RhbCwgdHJ1ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSZW1pbmRlckZvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oYWRkUmVtaW5kZXIsIG1vZGFsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjaGFuZ2VGb3JtLCBnZW5lcmF0ZVRhc2tGb3JtIH0gZnJvbSAnLi9tb2R1bGVzL3R5cGUtY2hhbmdlci5qcydcbmltcG9ydCB7IGNyZWF0ZU5ld0VudHJ5IH0gZnJvbSAnLi9tb2R1bGVzL2VudHJ5LWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZmlsdGVyQ2F0ZWdvcmllcywgZmlsdGVySW1wb3J0YW5jZSB9IGZyb20gJy4vbW9kdWxlcy9maWx0ZXJzLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBpbml0aWFsaXNlIHVzaW5nICd0YXNrJyBhcyBkZWZhdWx0IGRpc3BsYXkgdHlwZVxuZ2VuZXJhdGVUYXNrRm9ybSgpO1xuXG5jb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1tb2RhbCcpO1xuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1tb2RhbCcpO1xuY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUtc2VsZWN0b3InKTtcbmNvbnN0IG5ld0VudHJ5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWRldGFpbHMnKTtcbmNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2F0ZWdvcmllcyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbmNvbnN0IGltcG9ydGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW1wb3J0YW5jZSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuXG5vcGVuTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRJdGVtLnNob3dNb2RhbCgpKTtcbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRJdGVtLmNsb3NlKCkpO1xudHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUZvcm0pO1xubmV3RW50cnlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNyZWF0ZU5ld0VudHJ5KTtcbmNhdGVnb3JpZXMuZm9yRWFjaChmaWx0ZXIgPT4gZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyQ2F0ZWdvcmllcykpO1xuaW1wb3J0YW5jZS5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJJbXBvcnRhbmNlKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
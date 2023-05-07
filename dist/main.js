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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkd0M7QUFDMEI7O0FBRTNEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFEQUFVLENBQUMsb0RBQU87QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscURBQVUsQ0FBQyxxREFBUTtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscURBQVUsQ0FBQyx3REFBVztBQUMzQztBQUNBOzs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F3RTtBQUNaO0FBQ2M7QUFDckQ7O0FBRXJCO0FBQ0EsMEVBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHdDQUF3QyxnRUFBVTtBQUNsRCx3Q0FBd0MscUVBQWM7QUFDdEQsOERBQThELGlFQUFnQjtBQUM5RSw4REFBOEQsaUVBQWdCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2VudHJ5LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZm9ybS1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9yZW1pbmRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy90eXBlLWNoYW5nZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdGVhbDogIzcyYjRjNTtcXG4gICAgLS1kcm9wU2hhZG93OiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoNjEsIDYxLCA2MSwgMC42NTgpKTtcXG4gICAgLS1oaWdoOiAjYmQzNTM1O1xcbiAgICAtLW1lZGl1bTogI2Y4Y2Q1NjtcXG4gICAgLS1sb3c6ICM3ZmJlN2Y7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEOUI3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2cmVtKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAjNTBhM2I4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jbG9nbzp2aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcblxcbiNjb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS40cmVtIDEuNHJlbSAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggOHB4IDVweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMTcxKTtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogMTNyZW07XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b24ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC44cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgZWFzZS1pbjtcXG4gICAgfVxcblxcbiNzaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWRyb3BTaGFkb3cpO1xcbiAgICAgICAgfVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zbWFsbFNoYWRvdyk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAxO1xcbn1cXG5cXG5kaWFsb2dbb3Blbl0+bGFiZWw6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXTo6YmFja2Ryb3Age1xcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBsaW5lYXIgMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2YztcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dIGxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dIGxhYmVsLFxcbiAgICBkaWFsb2dbb3Blbl0gaW5wdXQsXFxuICAgIGRpYWxvZ1tvcGVuXSBzZWxlY3QsXFxuICAgIGRpYWxvZ1tvcGVuXSB0ZXh0YXJlYSxcXG4gICAgZGlhbG9nW29wZW5dIGJ1dHRvbiB7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGdhcDogMC4zcmVtO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtIHtcXG4gICAgICAgIGdhcDogMC42cmVtO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0+ZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybT5kaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgICAgICAgICAgd2lkdGg6MjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMCAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogZ3JleTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbmxpOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogN3JlbTtcXG4gICAgfVxcblxcbiNtYWluLWFyZWEge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI21haW4tYXJlYT4jZmlsdGVycyB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcXG4gICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4jbWFpbi1hcmVhPiNmaWx0ZXJzPioge1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICB9XFxuXFxuI21haW4tYXJlYT4jY2F0ZWdvcmllcyB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4jbWFpbi1hcmVhIC5maWx0ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgbWFyZ2luOiAwLjJyZW0gMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMS4yZW07XFxuICAgICAgICBnYXA6IDAuNWVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4jbWFpbi1hcmVhICNpbXBvcnRhbmNlPmRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2NnB4KSB7XFxuICAgICNpbXBvcnRhbmNlPmRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuI2xpc3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXG59XFxuXFxuI2xpc3QgLmVudHJ5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgIGhlaWdodDogMi44cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgbGluZWFyO1xcbiAgICB9XFxuXFxuI2xpc3QgLmVudHJ5OmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tZHJvcFNoYWRvdyk7XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5sZWZ0IHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDByZW07XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5sZWZ0IC5jYXRlZ29yeSxcXG4gICAgICAgICAgICAjbGlzdCAuZW50cnkgLmxlZnQgLm5hbWUge1xcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5sZWZ0LFxcbiAgICAgICAgI2xpc3QgLmVudHJ5IC5yaWdodCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmNhdGVnb3J5IHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLm5vdGVzIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMnJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAuZGVsZXRlIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIH1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgbGluZWFyO1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIHZhcigtLXRlYWwpO1xcbiAgICB9XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXRlYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiA1MG1zIGxpbmVhcjtcXG59XFxuXFxuLmxpc3QtYnRuOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcblxcbmlucHV0OmRpc2FibGVkLFxcbnRleHRhcmVhOmRpc2FibGVkLFxcbnNlbGVjdDpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnZlcnQtZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXRlZ29yeS1oaWRkZW4sXFxuLmltcG9ydGFuY2UtaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZUFBZTtJQUNmLDBEQUEwRDtJQUMxRCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGFBQWE7SUFDYixzQkFB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QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS10ZWFsOiAjNzJiNGM1O1xcbiAgICAtLWRyb3BTaGFkb3c6IGRyb3Atc2hhZG93KDAgMCA0cHggcmdiYSg2MSwgNjEsIDYxLCAwLjY1OCkpO1xcbiAgICAtLWhpZ2g6ICNiZDM1MzU7XFxuICAgIC0tbWVkaXVtOiAjZjhjZDU2O1xcbiAgICAtLWxvdzogIzdmYmU3ZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUQ5Qjc7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMnB4ICM1MGEzYjg7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuICAgICY6dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjRyZW0gMS40cmVtIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMTBweCA4cHggNXB4IHJnYmEoNDgsIDQ4LCA0OCwgMC4xNzEpO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICAgICYgYnV0dG9uIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGVhc2UtaW47XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tZHJvcFNoYWRvdyk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuZGlhbG9nW29wZW5dIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjZyZW07XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNtYWxsU2hhZG93KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDE7XFxuXFxuICAgICY+bGFiZWw6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgIH1cXG5cXG4gICAgJjo6YmFja2Ryb3Age1xcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBsaW5lYXIgMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2YztcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgICB9XFxuXFxuICAgICYgbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgJiBsYWJlbCxcXG4gICAgaW5wdXQsXFxuICAgIHNlbGVjdCxcXG4gICAgdGV4dGFyZWEsXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGdhcDogMC4zcmVtO1xcbiAgICB9XFxuXFxuICAgICYgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdIHtcXG4gICAgICAgIHdpZHRoOiA2cmVtO1xcbiAgICB9XFxuXFxuICAgICY+Zm9ybSB7XFxuICAgICAgICBnYXA6IDAuNnJlbTtcXG5cXG4gICAgICAgICY+ZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgdGV4dGFyZWEge1xcbiAgICAgICAgICAgIGhlaWdodDogOXJlbTtcXG4gICAgICAgICAgICB3aWR0aDoyNXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbSAwIDJyZW07XFxuICAgIHRyYW5zaXRpb246IDEwMG1zIGxpbmVhcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDdyZW07XFxuICAgIH1cXG59XFxuXFxuI21haW4tYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAmPiNmaWx0ZXJzIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgICAgICY+KiB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmPiNjYXRlZ29yaWVzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAmIC5maWx0ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgbWFyZ2luOiAwLjJyZW0gMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMS4yZW07XFxuICAgICAgICBnYXA6IDAuNWVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJiAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjY2cHgpIHtcXG4gICAgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4jbGlzdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMS42cmVtO1xcblxcbiAgICAmIC5lbnRyeSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1kcm9wU2hhZG93KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLmxlZnQge1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHJlbTtcXG5cXG4gICAgICAgICAgICAmIC5jYXRlZ29yeSxcXG4gICAgICAgICAgICAubmFtZSB7XFxuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLmxlZnQsXFxuICAgICAgICAucmlnaHQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5jYXRlZ29yeSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5ub3RlcyB7XFxuICAgICAgICAgICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLmRlbGV0ZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXRlYWwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSB2YXIoLS10ZWFsKTtcXG4gICAgfVxcblxcbiAgICAmOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXRlYWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0cmFuc2l0aW9uOiA1MG1zIGxpbmVhcjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG59XFxuXFxuaW5wdXQ6ZGlzYWJsZWQsXFxudGV4dGFyZWE6ZGlzYWJsZWQsXFxuc2VsZWN0OmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4udmVydC1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5LWhpZGRlbixcXG4uaW1wb3J0YW5jZS1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2Zvcm1zJztcbmltcG9ydCB7IGVudHJpZXMgfSBmcm9tICcuL2VudHJ5LWZhY3RvcnkuanMnO1xuaW1wb3J0IHsgYWRkVGFzaywgYWRkRXZlbnQsIGFkZFJlbWluZGVyIH0gZnJvbSAnLi9mb3JtLWZpZWxkcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFbnRyeVRvRGlzcGxheShlbnRyeSwgaW5kZXgpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2VudHJ5Jyk7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIGxpc3RJdGVtLmRhdGFzZXQuY2F0ZWdvcnkgPSBlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGxpc3RJdGVtLmRhdGFzZXQuaW1wb3J0YW5jZSA9IGVudHJ5LmltcG9ydGFuY2U7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVMZWZ0SGFsZihlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lLCBlbnRyeS5uYW1lLCBlbnRyeS5ub3RlcykpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZVJpZ2h0SGFsZihlbnRyeSkpO1xuICAgIGxpc3RJdGVtLnN0eWxlLmJveFNoYWRvdyA9IGAtMC41ZW0gMCB2YXIoLS0ke2VudHJ5LmltcG9ydGFuY2V9KSBpbnNldGA7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGVmdEhhbGYodHlwZSwgbmFtZSwgbm90ZXMpIHtcbiAgICAvLyByZW5kZXIgZGVmYXVsdCBuYW1lIGhlYWRpbmdcbiAgICBuYW1lID0gKG5hbWUgPT09ICcnKSA/ICctJyA6IG5hbWU7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gICAgY29uc3QgdGFncyA9IFsnaDQnLCAnaDQnLCAncCddO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2NhdGVnb3J5JywgJ25hbWUnLCAnbm90ZXMnXTtcbiAgICBjb25zdCBjb250ZW50cyA9IFt0eXBlLCBuYW1lLCBub3Rlc107XG5cbiAgICB0YWdzLmZvckVhY2goKHRhZywgaSkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBjb250ZW50c1tpXTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0SGFsZihlbnRyeSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IFsnZGV0YWlscycsICdkZWxldGUnXTtcbiAgICBjb25zdCBidG5OYW1lcyA9IFsnRGV0YWlscycsICdYJ107XG4gICAgYnRuTmFtZXMuZm9yRWFjaCgobmFtZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdsaXN0LWJ0bicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9KTtcblxuICAgIGRpdi5maXJzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRldGFpbHMuYmluZChudWxsLCBlbnRyeSkpO1xuXG4gICAgY29uc3QgdHlwZSA9IGVudHJ5LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKHR5cGUgPT09ICdUYXNrJykge1xuICAgICAgICBhcHBlbmREYXRlRmllbGQoZGl2LCAnRHVlOiAnLCBlbnRyeS5kdWVEYXRlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ0V2ZW50Jykge1xuICAgICAgICBhcHBlbmREYXRlRmllbGQoZGl2LCAnU3RhcnRzOiAnLCBlbnRyeS5zdGFydERhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZERhdGVGaWVsZChkaXYsIGhlYWRpbmcsIGRhdGUpIHtcbiAgICBjb25zdCBkZE1NeXl5eSA9IGNvbnZlcnRUb0RETU1ZWVlZKGRhdGUpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcbiAgICBwLmlubmVySFRNTCA9IGA8Yj4ke2hlYWRpbmd9PC9iPiAke2RkTU15eXl5fWA7XG5cbiAgICBkaXYuaW5zZXJ0QmVmb3JlKHAsIGRpdi5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvRERNTVlZWVkoZGF0ZSkge1xuICAgIHJldHVybiBgJHtkYXRlLnNsaWNlKC0yKX0vJHtkYXRlLnNsaWNlKDUsIDcpfS8ke2RhdGUuc2xpY2UoMCwgNCl9YDtcbn1cblxuZnVuY3Rpb24gb3BlbkRldGFpbHMoZW50cnkpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJyk7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG5cbiAgICAvLyB0aWUgbW9kYWwgdG8gaW5zdGFuY2Ugb2Ygb2JqZWN0XG4gICAgbW9kYWwuZGF0YXNldC5pdGVtID0gZW50cmllcy5pbmRleE9mKGVudHJ5KTtcbiAgICBcbiAgICBjb25zdCBmb3JtID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZpZWxkcyA9IChlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVGFzaycpICA/IGFkZFRhc2tcbiAgICAgICAgICAgICAgICA6ICAoZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ0V2ZW50JykgPyBhZGRFdmVudFxuICAgICAgICAgICAgICAgIDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFJlbWluZGVyO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShmaWVsZHMsIG1vZGFsLCBlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRXZlbnQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuICAgIHNldEVudHJ5VmFsdWVzKGVudHJ5LCBmb3JtKTtcblxuICAgIGNvbnN0IGVkaXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZWRpdCcpO1xuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmFibGVFZGl0KTtcbn1cblxuZnVuY3Rpb24gc2V0RW50cnlWYWx1ZXMoZW50cnksIGZvcm0pIHtcbiAgICBjb25zdCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gICAgY29uc3QgZW50cnlWYWx1ZXMgPSBbLi4uT2JqZWN0LnZhbHVlcyhlbnRyeSldO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkLCBpKSA9PiB7XG4gICAgICAgIC8vIHJldGFpbiAnLScgZm9yIGVtcHR5IG5hbWUgZmllbGQgb25seVxuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSAoZW50cnlWYWx1ZXNbaV0gPT09ICcnICYmIGkgPT09IDApID8gJy0nIDogZW50cnlWYWx1ZXNbaV07XG4gICAgICAgIGZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZpZWxkLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IGVudHJ5VmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUVkaXQoKSB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RldGFpbHMgaW5wdXQsICNkZXRhaWxzIHNlbGVjdCwgI2RldGFpbHMgdGV4dGFyZWEnKTtcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlKTtcblxuICAgIGNoYW5nZUVkaXRCdG5Ub0NhbmNlbFNhdmUoKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRWRpdEJ0blRvQ2FuY2VsU2F2ZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgYnRucyA9IHsnY2FuY2VsJzogJ0NhbmNlbCcsICdzYXZlJzogJ1NhdmUnfTtcbiAgICBmb3IgKGNvbnN0IGlkIGluIGJ0bnMpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidG5zW2lkXTtcbiAgICAgICAgcmVwbGFjZW1lbnRCdG5zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHM+Zm9ybT5kaXY6bGFzdC1jaGlsZCcpO1xuICAgIGJ0bkRpdi5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnRCdG5zLCBidG5EaXYubGFzdENoaWxkKTtcblxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJldmVydERldGFpbHMpO1xuICAgIHNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlVXBkYXRlZERldGFpbHMpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDYW5jZWxTYXZlVG9FZGl0KCkge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0Jyk7XG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuYWJsZUVkaXQpO1xuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHM+Zm9ybT5kaXY6bGFzdC1jaGlsZCcpO1xuICAgIGJ0bkRpdi5yZW1vdmVDaGlsZChidG5EaXYubGFzdENoaWxkKTtcbiAgICBidG5EaXYucmVwbGFjZUNoaWxkKGVkaXRCdG4sIGJ0bkRpdi5sYXN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiByZXZlcnREZXRhaWxzKCkge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgZmllbGQudmFsdWUgPSBmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgIGZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNoYW5nZUNhbmNlbFNhdmVUb0VkaXQoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVVwZGF0ZWREZXRhaWxzKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKTtcbiAgICBjb25zdCBmaWVsZHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gQXJyYXkuZnJvbShmaWVsZHMpLm1hcChmaWVsZCA9PiBmaWVsZC52YWx1ZSk7XG4gICAgY29uc3QgZGV0YWlscyA9IFsuLi5maWVsZFZhbHVlc107XG4gICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW051bWJlcihtb2RhbC5kYXRhc2V0Lml0ZW0pXTtcblxuICAgIGVudHJ5LnVwZGF0ZURldGFpbHMoLi4uZGV0YWlscyk7XG5cbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgY2hhbmdlQ2FuY2VsU2F2ZVRvRWRpdCgpO1xuXG4gICAgdXBkYXRlRW50cnlWaXN1YWxzSW5ET00oZW50cnkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVFbnRyeVZpc3VhbHNJbkRPTShlbnRyeSkge1xuICAgIGNvbnN0IGluZGV4ID0gZW50cmllcy5pbmRleE9mKGVudHJ5KTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblxuICAgIGNvbnN0IGZpZWxkc1RvVXBkYXRlID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnaDQsIHAnKTtcbiAgICBjb25zdCBkdWUgPSAoZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ0V2ZW50JykgPyBlbnRyeS5zdGFydERhdGVcbiAgICAgICAgICAgIDogICAoZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ1Rhc2snKSAgPyBlbnRyeS5kdWVEYXRlXG4gICAgICAgICAgICA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICBjb25zdCB2YWx1ZXNUb0luc2VydCA9IFtlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lLCBlbnRyeS5uYW1lLCBlbnRyeS5ub3RlcywgY29udmVydFRvRERNTVlZWVkoZHVlKV07XG5cbiAgICBmaWVsZHNUb1VwZGF0ZS5mb3JFYWNoKChmaWVsZCwgaSkgPT4gZmllbGQudGV4dENvbnRlbnQgPSB2YWx1ZXNUb0luc2VydFtpXSk7XG4gICAgbGlzdEl0ZW0uc3R5bGUuYm94U2hhZG93ID0gYC0wLjVlbSAwIHZhcigtLSR7ZW50cnkuaW1wb3J0YW5jZX0pIGluc2V0YDtcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IFJlbWluZGVyIH0gZnJvbSAnLi9yZW1pbmRlcnMuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVUYXNrRm9ybSB9IGZyb20gJy4vdHlwZS1jaGFuZ2VyLmpzJztcbmltcG9ydCB7IGFkZEVudHJ5VG9EaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2wuanMnO1xuXG5leHBvcnQgY29uc3QgZW50cmllcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3RW50cnkoZSkge1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBbXTtcblxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGZvcm1JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBmb3JtVmFsdWVzLnB1c2goaW5wdXQudmFsdWUpKTtcblxuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3RvcicpO1xuICAgIHN3aXRjaCAodHlwZS52YWx1ZSkge1xuICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgVGFzayguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBFdmVudCguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtaW5kZXInOlxuICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBSZW1pbmRlciguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICBhZGRFbnRyeVRvRGlzcGxheShlbnRyeSwgZW50cmllcy5pbmRleE9mKGVudHJ5KSk7XG5cbiAgICAvLyByZXNldCBmb3JtIGJ1dCByZXRhaW4gZGVmYXVsdCBkYXRlL3RpbWUgdmFsdWVzXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlQW5kUmVzZXRGb3JtKHR5cGUpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUFuZFJlc2V0Rm9ybSh0eXBlU2VsZWN0b3IpIHtcbiAgICBnZW5lcmF0ZVRhc2tGb3JtKCk7XG4gICAgdHlwZVNlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpLmNsb3NlKCk7XG59IiwiZXhwb3J0IGNsYXNzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsb2NhdGlvbiwgc3RhcnREYXRlLCBzdGFydFRpbWUsIGVuZERhdGUsIGVuZFRpbWUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmVuZERhdGUgPSBlbmREYXRlO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgfVxuXG4gICAgdXBkYXRlRGV0YWlscyhuYW1lLCBsb2NhdGlvbiwgc3RhcnREYXRlLCBzdGFydFRpbWUsIGVuZERhdGUsIGVuZFRpbWUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmVuZERhdGUgPSBlbmREYXRlO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXRlZ29yaWVzKGUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY2F0ZWdvcnk9XCIke2UudGFyZ2V0Lm5hbWV9XCJdYCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGVnb3J5LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVySW1wb3J0YW5jZShlKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWltcG9ydGFuY2U9XCIke2UudGFyZ2V0Lm5hbWV9XCJdYCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFuY2UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbmNlLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcbn0iLCJleHBvcnQgY29uc3QgYWRkVGFzayA9IFtcbiAgICAnTmFtZTo8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdEdWUgZGF0ZTo8aW5wdXQgdHlwZT1cImRhdGVcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dO1xuXG5leHBvcnQgY29uc3QgYWRkRXZlbnQgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2ZXJ0LWZsZXhcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdMb2NhdGlvbjo8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInZlcnQtZmxleFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPicsXG4gICAgJ05vdGVzOjx0ZXh0YXJlYSBhdXRvY29tcGxldGU9XCJvZmZcIj48L3RleHRhcmVhPicsXG4gICAgJ0ltcG9ydGFuY2U6PHNlbGVjdCBuYW1lPVwiaW1wb3J0YW5jZVwiPjxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiBzZWxlY3RlZD5NZWRpdW08L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+PC9zZWxlY3Q+Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBhZGRSZW1pbmRlciA9IFtcbiAgICAnTmFtZTo8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKGZpZWxkcywgbW9kYWwsIGlzRXZlbnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGZpZWxkO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICBhcHBlbmRFdmVudERhdGVUaW1lKGZyYWdtZW50KTtcbiAgICB9XG4gXG4gICAgYXBwZW5kQnRucyhmcmFnbWVudCwgbW9kYWwpO1xuICAgIFxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRXZlbnREYXRlVGltZShmb3JtKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVEYXRlVGltZURpdignU3RhcnQgZGF0ZTonLCAnU3RhcnQgdGltZTonLCAnMDA6MDAnKTtcbiAgICBjb25zdCBlbmQgPSBjcmVhdGVEYXRlVGltZURpdignRW5kIGRhdGU6JywgJ0VuZCB0aW1lOicsICcyMzo1OScpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsOm50aC1jaGlsZCgzKScpO1xuICAgIGZvcm0uaW5zZXJ0QmVmb3JlKHN0YXJ0LCBsb2NhdGlvbik7XG4gICAgZm9ybS5pbnNlcnRCZWZvcmUoZW5kLCBsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVUaW1lRGl2KGRhdGUsIHRpbWUsIGRlZmF1bHRUaW1lKSB7XG4gICAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnZGF0ZScsICd0aW1lJ107XG4gICAgXG5cbiAgICBbZGF0ZSwgdGltZV0uZm9yRWFjaCgoYXJnLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGVzW2ldKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBhcmc7XG5cbiAgICAgICAgaW5wdXQuZGVmYXVsdFZhbHVlID0gKGFyZyA9PT0gZGF0ZSkgPyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFRpbWU7XG5cbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBkYXRlRmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGVGaWVsZDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQnRucyhmcmFnbWVudCwgbW9kYWwpIHtcbiAgICBjb25zdCB0aHJlZUJ1dHRvbnMgPSBtb2RhbC5pZCA9PT0gJ2FkZC1pdGVtLW1vZGFsJztcblxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBjb25zdCBidG5zVG9BZGQgPSB0aHJlZUJ1dHRvbnMgPyBbZmlyc3QsIHNlY29uZCwgdGhpcmRdIDogW2ZpcnN0LCBzZWNvbmRdO1xuICAgIGNvbnN0IGJ0bk5hbWVzID0gdGhyZWVCdXR0b25zID8gWydDbG9zZScsICdDbGVhcicsICdTdWJtaXQnXSA6IFsnQ2xvc2UnLCAnRWRpdCddO1xuICAgIGNvbnN0IGJ0bklkcyA9IHRocmVlQnV0dG9ucyA/IFsnY2xvc2UtbW9kYWwnLCAncmVzZXQnLCAnc3VibWl0J10gOiBbJ2Nsb3NlLW1vZGFsJywgJ2VkaXQnXTtcbiAgICBjb25zdCBidG5BdHRyVmFsID0gdGhyZWVCdXR0b25zID8gWydidXR0b24nLCAncmVzZXQnLCAnc3VibWl0J10gOiBbJ2J1dHRvbicsICdidXR0b24nXTtcblxuICAgIGJ0bnNUb0FkZC5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuTmFtZXNbaV07XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYnRuSWRzW2ldKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsIGJ0bkF0dHJWYWxbaV0pO1xuICAgICAgICBidG5zLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfSk7XG5cbiAgICBidG5zLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xvc2UoKSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnRucyk7XG59IiwiZXhwb3J0IGNsYXNzIFJlbWluZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cblxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBhZGRFdmVudCwgYWRkUmVtaW5kZXIgfSBmcm9tICcuL2Zvcm0tZmllbGRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZvcm0oZSkge1xuICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICBnZW5lcmF0ZVRhc2tGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgZ2VuZXJhdGVFdmVudEZvcm0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1pbmRlcic6XG4gICAgICAgICAgICBnZW5lcmF0ZVJlbWluZGVyRm9ybSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRUYXNrLCBtb2RhbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJykuZGVmYXVsdFZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVFdmVudEZvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oYWRkRXZlbnQsIG1vZGFsLCB0cnVlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlbWluZGVyRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRSZW1pbmRlciwgbW9kYWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNoYW5nZUZvcm0sIGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL21vZHVsZXMvdHlwZS1jaGFuZ2VyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlTmV3RW50cnkgfSBmcm9tICcuL21vZHVsZXMvZW50cnktZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBmaWx0ZXJDYXRlZ29yaWVzLCBmaWx0ZXJJbXBvcnRhbmNlIH0gZnJvbSAnLi9tb2R1bGVzL2ZpbHRlcnMuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIGluaXRpYWxpc2UgdXNpbmcgJ3Rhc2snIGFzIGRlZmF1bHQgZGlzcGxheSB0eXBlXG5nZW5lcmF0ZVRhc2tGb3JtKCk7XG5cbmNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW1vZGFsJyk7XG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLW1vZGFsJyk7XG5jb25zdCBhZGRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG5jb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3RvcicpO1xuY29uc3QgbmV3RW50cnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRlZ29yaWVzIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuY29uc3QgaW1wb3J0YW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpbXBvcnRhbmNlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG5cbm9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uc2hvd01vZGFsKCkpO1xuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uY2xvc2UoKSk7XG50eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlRm9ybSk7XG5uZXdFbnRyeUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlTmV3RW50cnkpO1xuY2F0ZWdvcmllcy5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJDYXRlZ29yaWVzKSk7XG5pbXBvcnRhbmNlLmZvckVhY2goZmlsdGVyID0+IGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckltcG9ydGFuY2UpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
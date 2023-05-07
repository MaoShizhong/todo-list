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
                :  _form_fields_js__WEBPACK_IMPORTED_MODULE_2__.addReminder;
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
        field.defaultValue = (entryValues[i] === '') ? '-' : entryValues[i];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHdDO0FBQzBCOztBQUUzRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxREFBVSxDQUFDLG9EQUFPO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFEQUFVLENBQUMscURBQVE7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFEQUFVLENBQUMsd0RBQVc7QUFDM0M7QUFDQTs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBd0U7QUFDWjtBQUNjO0FBQ3JEOztBQUVyQjtBQUNBLDBFQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0VBQVU7QUFDbEQsd0NBQXdDLHFFQUFjO0FBQ3RELDhEQUE4RCxpRUFBZ0I7QUFDOUUsOERBQThELGlFQUFnQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZGlzcGxheS1jb250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9lbnRyeS1mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2Zvcm0tZmllbGRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvcmVtaW5kZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvdHlwZS1jaGFuZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXRlYWw6ICM3MmI0YzU7XFxuICAgIC0tZHJvcFNoYWRvdzogZHJvcC1zaGFkb3coMCAwIDRweCByZ2JhKDYxLCA2MSwgNjEsIDAuNjU4KSk7XFxuICAgIC0taGlnaDogI2JkMzUzNTtcXG4gICAgLS1tZWRpdW06ICNmOGNkNTY7XFxuICAgIC0tbG93OiAjN2ZiZTdmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRDlCNztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggIzUwYTNiODtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDZyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2xvZ286dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNHJlbSAxLjRyZW0gMCAwO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDhweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjE3MSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGVhc2UtaW47XFxuICAgIH1cXG5cXG4jc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICAgICAgICAgICAgZmlsdGVyOiB2YXIoLS1kcm9wU2hhZG93KTtcXG4gICAgICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc21hbGxTaGFkb3cpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBsaW5lYXIgMTtcXG59XFxuXFxuZGlhbG9nW29wZW5dPmxhYmVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl06OmJhY2tkcm9wIHtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXSBsYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXSBsYWJlbCxcXG4gICAgZGlhbG9nW29wZW5dIGlucHV0LFxcbiAgICBkaWFsb2dbb3Blbl0gc2VsZWN0LFxcbiAgICBkaWFsb2dbb3Blbl0gdGV4dGFyZWEsXFxuICAgIGRpYWxvZ1tvcGVuXSBidXR0b24ge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBnYXA6IDAuM3JlbTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXSBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgICAgICAgd2lkdGg6IDZyZW07XFxuICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybSB7XFxuICAgICAgICBnYXA6IDAuNnJlbTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtPmRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0+ZGl2Omxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybSB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOjI1cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDAgMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMTAwbXMgbGluZWFyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG5saTpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDdyZW07XFxuICAgIH1cXG5cXG4jbWFpbi1hcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluLWFyZWE+I2ZpbHRlcnMge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYT4jZmlsdGVycz4qIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgfVxcblxcbiNtYWluLWFyZWE+I2NhdGVnb3JpZXMge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYSAuZmlsdGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIG1hcmdpbjogMC4ycmVtIDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEuMmVtO1xcbiAgICAgICAgZ2FwOiAwLjVlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYSAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNjZweCkge1xcbiAgICAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxufVxcblxcbiNsaXN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxufVxcblxcbiNsaXN0IC5lbnRyeSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG4gICAgfVxcblxcbiNsaXN0IC5lbnRyeTpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWRyb3BTaGFkb3cpO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCB7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCAuY2F0ZWdvcnksXFxuICAgICAgICAgICAgI2xpc3QgLmVudHJ5IC5sZWZ0IC5uYW1lIHtcXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCxcXG4gICAgICAgICNsaXN0IC5lbnRyeSAucmlnaHQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5jYXRlZ29yeSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5ub3RlcyB7XFxuICAgICAgICAgICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmRlbGV0ZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICAgICAgICB9XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXRlYWwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSB2YXIoLS10ZWFsKTtcXG4gICAgfVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogNTBtcyBsaW5lYXI7XFxufVxcblxcbi5saXN0LWJ0bjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG5cXG5pbnB1dDpkaXNhYmxlZCxcXG50ZXh0YXJlYTpkaXNhYmxlZCxcXG5zZWxlY3Q6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi52ZXJ0LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnktaGlkZGVuLFxcbi5pbXBvcnRhbmNlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGVBQWU7SUFDZiwwREFBMEQ7SUFDMUQsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFB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Lmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tdGVhbDogIzcyYjRjNTtcXG4gICAgLS1kcm9wU2hhZG93OiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoNjEsIDYxLCA2MSwgMC42NTgpKTtcXG4gICAgLS1oaWdoOiAjYmQzNTM1O1xcbiAgICAtLW1lZGl1bTogI2Y4Y2Q1NjtcXG4gICAgLS1sb3c6ICM3ZmJlN2Y7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEOUI3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2cmVtKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAjNTBhM2I4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICAmOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS40cmVtIDEuNHJlbSAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggOHB4IDVweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMTcxKTtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogMTNyZW07XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBlYXNlLWluO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHZhcigtLWRyb3BTaGFkb3cpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zbWFsbFNoYWRvdyk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAxO1xcblxcbiAgICAmPmxhYmVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICB9XFxuXFxuICAgICY6OmJhY2tkcm9wIHtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgfVxcblxcbiAgICAmIGxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICYgbGFiZWwsXFxuICAgIGlucHV0LFxcbiAgICBzZWxlY3QsXFxuICAgIHRleHRhcmVhLFxcbiAgICBidXR0b24ge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBnYXA6IDAuM3JlbTtcXG4gICAgfVxcblxcbiAgICAmIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgfVxcblxcbiAgICAmPmZvcm0ge1xcbiAgICAgICAgZ2FwOiAwLjZyZW07XFxuXFxuICAgICAgICAmPmRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgICAgICAgICAgd2lkdGg6MjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMCAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xcbiAgICB9XFxufVxcblxcbiNtYWluLWFyZWEge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgJj4jZmlsdGVycyB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcXG4gICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgICAgICAmPioge1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJj4jY2F0ZWdvcmllcyB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgJiAuZmlsdGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIG1hcmdpbjogMC4ycmVtIDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEuMmVtO1xcbiAgICAgICAgZ2FwOiAwLjVlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgICYgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2NnB4KSB7XFxuICAgICNpbXBvcnRhbmNlPmRpdiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuI2xpc3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXG5cXG4gICAgJiAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICAgICAgICAgIGZpbHRlcjogdmFyKC0tZHJvcFNoYWRvdyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5sZWZ0IHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNDByZW07XFxuXFxuICAgICAgICAgICAgJiAuY2F0ZWdvcnksXFxuICAgICAgICAgICAgLm5hbWUge1xcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5sZWZ0LFxcbiAgICAgICAgLnJpZ2h0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAuY2F0ZWdvcnkge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubm90ZXMge1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNzcsIDc3LCA3Nyk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMycmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIC5kZWxldGUge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gdmFyKC0tdGVhbCk7XFxuICAgIH1cXG5cXG4gICAgJjpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogNTBtcyBsaW5lYXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB9XFxufVxcblxcbmlucHV0OmRpc2FibGVkLFxcbnRleHRhcmVhOmRpc2FibGVkLFxcbnNlbGVjdDpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnZlcnQtZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXRlZ29yeS1oaWRkZW4sXFxuLmltcG9ydGFuY2UtaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3Jtcyc7XG5pbXBvcnQgeyBlbnRyaWVzIH0gZnJvbSAnLi9lbnRyeS1mYWN0b3J5LmpzJztcbmltcG9ydCB7IGFkZFRhc2ssIGFkZEV2ZW50LCBhZGRSZW1pbmRlciB9IGZyb20gJy4vZm9ybS1maWVsZHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRW50cnlUb0Rpc3BsYXkoZW50cnksIGluZGV4KSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdlbnRyeScpO1xuICAgIGxpc3RJdGVtLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmNhdGVnb3J5ID0gZW50cnkuY29uc3RydWN0b3IubmFtZTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmltcG9ydGFuY2UgPSBlbnRyeS5pbXBvcnRhbmNlO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlTGVmdEhhbGYoZW50cnkuY29uc3RydWN0b3IubmFtZSwgZW50cnkubmFtZSwgZW50cnkubm90ZXMpKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVSaWdodEhhbGYoZW50cnkpKTtcbiAgICBsaXN0SXRlbS5zdHlsZS5ib3hTaGFkb3cgPSBgLTAuNWVtIDAgdmFyKC0tJHtlbnRyeS5pbXBvcnRhbmNlfSkgaW5zZXRgO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Jyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxlZnRIYWxmKHR5cGUsIG5hbWUsIG5vdGVzKSB7XG4gICAgLy8gcmVuZGVyIGRlZmF1bHQgbmFtZSBoZWFkaW5nXG4gICAgbmFtZSA9IChuYW1lID09PSAnJykgPyAnLScgOiBuYW1lO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcblxuICAgIGNvbnN0IHRhZ3MgPSBbJ2g0JywgJ2g0JywgJ3AnXTtcbiAgICBjb25zdCBjbGFzc2VzID0gWydjYXRlZ29yeScsICduYW1lJywgJ25vdGVzJ107XG4gICAgY29uc3QgY29udGVudHMgPSBbdHlwZSwgbmFtZSwgbm90ZXNdO1xuXG4gICAgdGFncy5mb3JFYWNoKCh0YWcsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudHNbaV07XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodEhhbGYoZW50cnkpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2RldGFpbHMnLCAnZGVsZXRlJ107XG4gICAgY29uc3QgYnRuTmFtZXMgPSBbJ0RldGFpbHMnLCAnWCddO1xuICAgIGJ0bk5hbWVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnbGlzdC1idG4nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfSk7XG5cbiAgICBkaXYuZmlyc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5EZXRhaWxzLmJpbmQobnVsbCwgZW50cnkpKTtcblxuICAgIGNvbnN0IHR5cGUgPSBlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmICh0eXBlID09PSAnVGFzaycpIHtcbiAgICAgICAgYXBwZW5kRGF0ZUZpZWxkKGRpdiwgJ0R1ZTogJywgZW50cnkuZHVlRGF0ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdFdmVudCcpIHtcbiAgICAgICAgYXBwZW5kRGF0ZUZpZWxkKGRpdiwgJ1N0YXJ0czogJywgZW50cnkuc3RhcnREYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBhcHBlbmREYXRlRmllbGQoZGl2LCBoZWFkaW5nLCBkYXRlKSB7XG4gICAgY29uc3QgZGRNTXl5eXkgPSBjb252ZXJ0VG9ERE1NWVlZWShkYXRlKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgnZHVlJyk7XG4gICAgcC5pbm5lckhUTUwgPSBgPGI+JHtoZWFkaW5nfTwvYj4gJHtkZE1NeXl5eX1gO1xuXG4gICAgZGl2Lmluc2VydEJlZm9yZShwLCBkaXYuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0RETU1ZWVlZKGRhdGUpIHtcbiAgICByZXR1cm4gYCR7ZGF0ZS5zbGljZSgtMil9LyR7ZGF0ZS5zbGljZSg1LCA3KX0vJHtkYXRlLnNsaWNlKDAsIDQpfWA7XG59XG5cbmZ1bmN0aW9uIG9wZW5EZXRhaWxzKGVudHJ5KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuXG4gICAgLy8gdGllIG1vZGFsIHRvIGluc3RhbmNlIG9mIG9iamVjdFxuICAgIG1vZGFsLmRhdGFzZXQuaXRlbSA9IGVudHJpZXMuaW5kZXhPZihlbnRyeSk7XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRldGFpbHMucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmaWVsZHMgPSAoZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ1Rhc2snKSAgPyBhZGRUYXNrXG4gICAgICAgICAgICAgICAgOiAgKGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdFdmVudCcpID8gYWRkRXZlbnRcbiAgICAgICAgICAgICAgICA6ICBhZGRSZW1pbmRlcjtcbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oZmllbGRzLCBtb2RhbCwgZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ0V2ZW50Jyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cbiAgICBzZXRFbnRyeVZhbHVlcyhlbnRyeSwgZm9ybSk7XG5cbiAgICBjb25zdCBlZGl0ID0gbW9kYWwucXVlcnlTZWxlY3RvcignI2VkaXQnKTtcbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlRWRpdCk7XG59XG5cbmZ1bmN0aW9uIHNldEVudHJ5VmFsdWVzKGVudHJ5LCBmb3JtKSB7XG4gICAgY29uc3QgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGNvbnN0IGVudHJ5VmFsdWVzID0gWy4uLk9iamVjdC52YWx1ZXMoZW50cnkpXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCwgaSkgPT4ge1xuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSAoZW50cnlWYWx1ZXNbaV0gPT09ICcnKSA/ICctJyA6IGVudHJ5VmFsdWVzW2ldO1xuICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChmaWVsZC50YWdOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICAgICAgZmllbGQudmFsdWUgPSBlbnRyeVZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBlbmFibGVFZGl0KCkge1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZXRhaWxzIGlucHV0LCAjZGV0YWlscyBzZWxlY3QsICNkZXRhaWxzIHRleHRhcmVhJyk7XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQuZGlzYWJsZWQgPSBmYWxzZSk7XG5cbiAgICBjaGFuZ2VFZGl0QnRuVG9DYW5jZWxTYXZlKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUVkaXRCdG5Ub0NhbmNlbFNhdmUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRCdG5zID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGJ0bnMgPSB7J2NhbmNlbCc6ICdDYW5jZWwnLCAnc2F2ZSc6ICdTYXZlJ307XG4gICAgZm9yIChjb25zdCBpZCBpbiBidG5zKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnRuc1tpZF07XG4gICAgICAgIHJlcGxhY2VtZW50QnRucy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzPmZvcm0+ZGl2Omxhc3QtY2hpbGQnKTtcbiAgICBidG5EaXYucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50QnRucywgYnRuRGl2Lmxhc3RDaGlsZCk7XG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZlcnREZXRhaWxzKTtcbiAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVVwZGF0ZWREZXRhaWxzKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2FuY2VsU2F2ZVRvRWRpdCgpIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdCcpO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmFibGVFZGl0KTtcblxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzPmZvcm0+ZGl2Omxhc3QtY2hpbGQnKTtcbiAgICBidG5EaXYucmVtb3ZlQ2hpbGQoYnRuRGl2Lmxhc3RDaGlsZCk7XG4gICAgYnRuRGl2LnJlcGxhY2VDaGlsZChlZGl0QnRuLCBidG5EaXYubGFzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJ0RGV0YWlscygpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjaGFuZ2VDYW5jZWxTYXZlVG9FZGl0KCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVVcGRhdGVkRGV0YWlscygpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJyk7XG4gICAgY29uc3QgZmllbGRzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBjb25zdCBmaWVsZFZhbHVlcyA9IEFycmF5LmZyb20oZmllbGRzKS5tYXAoZmllbGQgPT4gZmllbGQudmFsdWUpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBbLi4uZmllbGRWYWx1ZXNdO1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tOdW1iZXIobW9kYWwuZGF0YXNldC5pdGVtKV07XG5cbiAgICBlbnRyeS51cGRhdGVEZXRhaWxzKC4uLmRldGFpbHMpO1xuXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIGNoYW5nZUNhbmNlbFNhdmVUb0VkaXQoKTtcblxuICAgIHVwZGF0ZUVudHJ5VmlzdWFsc0luRE9NKGVudHJ5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRW50cnlWaXN1YWxzSW5ET00oZW50cnkpIHtcbiAgICBjb25zdCBpbmRleCA9IGVudHJpZXMuaW5kZXhPZihlbnRyeSk7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG5cbiAgICBjb25zdCBmaWVsZHNUb1VwZGF0ZSA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2g0LCBwJyk7XG4gICAgY29uc3QgZHVlID0gKGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdFdmVudCcpID8gZW50cnkuc3RhcnREYXRlXG4gICAgICAgICAgICA6ICAgKGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdUYXNrJykgID8gZW50cnkuZHVlRGF0ZVxuICAgICAgICAgICAgOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgY29uc3QgdmFsdWVzVG9JbnNlcnQgPSBbZW50cnkuY29uc3RydWN0b3IubmFtZSwgZW50cnkubmFtZSwgZW50cnkubm90ZXMsIGNvbnZlcnRUb0RETU1ZWVlZKGR1ZSldO1xuICAgIGZpZWxkc1RvVXBkYXRlLmZvckVhY2goKGZpZWxkLCBpKSA9PiBmaWVsZC50ZXh0Q29udGVudCA9IHZhbHVlc1RvSW5zZXJ0W2ldKTtcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IFJlbWluZGVyIH0gZnJvbSAnLi9yZW1pbmRlcnMuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVUYXNrRm9ybSB9IGZyb20gJy4vdHlwZS1jaGFuZ2VyLmpzJztcbmltcG9ydCB7IGFkZEVudHJ5VG9EaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2wuanMnO1xuXG5leHBvcnQgY29uc3QgZW50cmllcyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3RW50cnkoZSkge1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSBbXTtcblxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGZvcm1JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBmb3JtVmFsdWVzLnB1c2goaW5wdXQudmFsdWUpKTtcblxuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3RvcicpO1xuICAgIHN3aXRjaCAodHlwZS52YWx1ZSkge1xuICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgVGFzayguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBFdmVudCguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtaW5kZXInOlxuICAgICAgICAgICAgZW50cmllcy5wdXNoKG5ldyBSZW1pbmRlciguLi5mb3JtVmFsdWVzKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICBhZGRFbnRyeVRvRGlzcGxheShlbnRyeSwgZW50cmllcy5pbmRleE9mKGVudHJ5KSk7XG5cbiAgICAvLyByZXNldCBmb3JtIGJ1dCByZXRhaW4gZGVmYXVsdCBkYXRlL3RpbWUgdmFsdWVzXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlQW5kUmVzZXRGb3JtKHR5cGUpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUFuZFJlc2V0Rm9ybSh0eXBlU2VsZWN0b3IpIHtcbiAgICBnZW5lcmF0ZVRhc2tGb3JtKCk7XG4gICAgdHlwZVNlbGVjdG9yLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpLmNsb3NlKCk7XG59IiwiZXhwb3J0IGNsYXNzIEV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsb2NhdGlvbiwgc3RhcnREYXRlLCBzdGFydFRpbWUsIGVuZERhdGUsIGVuZFRpbWUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmVuZERhdGUgPSBlbmREYXRlO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgfVxuXG4gICAgdXBkYXRlRGV0YWlscyhuYW1lLCBsb2NhdGlvbiwgc3RhcnREYXRlLCBzdGFydFRpbWUsIGVuZERhdGUsIGVuZFRpbWUsIG5vdGVzLCBpbXBvcnRhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmVuZERhdGUgPSBlbmREYXRlO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDYXRlZ29yaWVzKGUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY2F0ZWdvcnk9XCIke2UudGFyZ2V0Lm5hbWV9XCJdYCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGVnb3J5LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVySW1wb3J0YW5jZShlKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWltcG9ydGFuY2U9XCIke2UudGFyZ2V0Lm5hbWV9XCJdYCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFuY2UtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbmNlLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcbn0iLCJleHBvcnQgY29uc3QgYWRkVGFzayA9IFtcbiAgICAnTmFtZTo8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdEdWUgZGF0ZTo8aW5wdXQgdHlwZT1cImRhdGVcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dO1xuXG5leHBvcnQgY29uc3QgYWRkRXZlbnQgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2ZXJ0LWZsZXhcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdMb2NhdGlvbjo8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInZlcnQtZmxleFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPicsXG4gICAgJ05vdGVzOjx0ZXh0YXJlYSBhdXRvY29tcGxldGU9XCJvZmZcIj48L3RleHRhcmVhPicsXG4gICAgJ0ltcG9ydGFuY2U6PHNlbGVjdCBuYW1lPVwiaW1wb3J0YW5jZVwiPjxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiBzZWxlY3RlZD5NZWRpdW08L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+PC9zZWxlY3Q+Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBhZGRSZW1pbmRlciA9IFtcbiAgICAnTmFtZTo8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKGZpZWxkcywgbW9kYWwsIGlzRXZlbnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGZpZWxkO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICBhcHBlbmRFdmVudERhdGVUaW1lKGZyYWdtZW50KTtcbiAgICB9XG4gXG4gICAgYXBwZW5kQnRucyhmcmFnbWVudCwgbW9kYWwpO1xuICAgIFxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRXZlbnREYXRlVGltZShmb3JtKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVEYXRlVGltZURpdignU3RhcnQgZGF0ZTonLCAnU3RhcnQgdGltZTonLCAnMDA6MDAnKTtcbiAgICBjb25zdCBlbmQgPSBjcmVhdGVEYXRlVGltZURpdignRW5kIGRhdGU6JywgJ0VuZCB0aW1lOicsICcyMzo1OScpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsOm50aC1jaGlsZCgzKScpO1xuICAgIGZvcm0uaW5zZXJ0QmVmb3JlKHN0YXJ0LCBsb2NhdGlvbik7XG4gICAgZm9ybS5pbnNlcnRCZWZvcmUoZW5kLCBsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVUaW1lRGl2KGRhdGUsIHRpbWUsIGRlZmF1bHRUaW1lKSB7XG4gICAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnZGF0ZScsICd0aW1lJ107XG4gICAgXG5cbiAgICBbZGF0ZSwgdGltZV0uZm9yRWFjaCgoYXJnLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGVzW2ldKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBhcmc7XG5cbiAgICAgICAgaW5wdXQuZGVmYXVsdFZhbHVlID0gKGFyZyA9PT0gZGF0ZSkgPyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFRpbWU7XG5cbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBkYXRlRmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGVGaWVsZDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQnRucyhmcmFnbWVudCwgbW9kYWwpIHtcbiAgICBjb25zdCB0aHJlZUJ1dHRvbnMgPSBtb2RhbC5pZCA9PT0gJ2FkZC1pdGVtLW1vZGFsJztcblxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBjb25zdCBidG5zVG9BZGQgPSB0aHJlZUJ1dHRvbnMgPyBbZmlyc3QsIHNlY29uZCwgdGhpcmRdIDogW2ZpcnN0LCBzZWNvbmRdO1xuICAgIGNvbnN0IGJ0bk5hbWVzID0gdGhyZWVCdXR0b25zID8gWydDbG9zZScsICdDbGVhcicsICdTdWJtaXQnXSA6IFsnQ2xvc2UnLCAnRWRpdCddO1xuICAgIGNvbnN0IGJ0bklkcyA9IHRocmVlQnV0dG9ucyA/IFsnY2xvc2UtbW9kYWwnLCAncmVzZXQnLCAnc3VibWl0J10gOiBbJ2Nsb3NlLW1vZGFsJywgJ2VkaXQnXTtcbiAgICBjb25zdCBidG5BdHRyVmFsID0gdGhyZWVCdXR0b25zID8gWydidXR0b24nLCAncmVzZXQnLCAnc3VibWl0J10gOiBbJ2J1dHRvbicsICdidXR0b24nXTtcblxuICAgIGJ0bnNUb0FkZC5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnRuTmFtZXNbaV07XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYnRuSWRzW2ldKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsIGJ0bkF0dHJWYWxbaV0pO1xuICAgICAgICBidG5zLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfSk7XG5cbiAgICBidG5zLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xvc2UoKSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnRucyk7XG59IiwiZXhwb3J0IGNsYXNzIFJlbWluZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cblxuICAgIHVwZGF0ZURldGFpbHMobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBhZGRFdmVudCwgYWRkUmVtaW5kZXIgfSBmcm9tICcuL2Zvcm0tZmllbGRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZvcm0oZSkge1xuICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICBnZW5lcmF0ZVRhc2tGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgZ2VuZXJhdGVFdmVudEZvcm0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1pbmRlcic6XG4gICAgICAgICAgICBnZW5lcmF0ZVJlbWluZGVyRm9ybSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRUYXNrLCBtb2RhbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJykuZGVmYXVsdFZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVFdmVudEZvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oYWRkRXZlbnQsIG1vZGFsLCB0cnVlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlbWluZGVyRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRSZW1pbmRlciwgbW9kYWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNoYW5nZUZvcm0sIGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL21vZHVsZXMvdHlwZS1jaGFuZ2VyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlTmV3RW50cnkgfSBmcm9tICcuL21vZHVsZXMvZW50cnktZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBmaWx0ZXJDYXRlZ29yaWVzLCBmaWx0ZXJJbXBvcnRhbmNlIH0gZnJvbSAnLi9tb2R1bGVzL2ZpbHRlcnMuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIGluaXRpYWxpc2UgdXNpbmcgJ3Rhc2snIGFzIGRlZmF1bHQgZGlzcGxheSB0eXBlXG5nZW5lcmF0ZVRhc2tGb3JtKCk7XG5cbmNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW1vZGFsJyk7XG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLW1vZGFsJyk7XG5jb25zdCBhZGRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG5jb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3RvcicpO1xuY29uc3QgbmV3RW50cnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRlZ29yaWVzIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuY29uc3QgaW1wb3J0YW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpbXBvcnRhbmNlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG5cbm9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uc2hvd01vZGFsKCkpO1xuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uY2xvc2UoKSk7XG50eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlRm9ybSk7XG5uZXdFbnRyeUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlTmV3RW50cnkpO1xuY2F0ZWdvcmllcy5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJDYXRlZ29yaWVzKSk7XG5pbXBvcnRhbmNlLmZvckVhY2goZmlsdGVyID0+IGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckltcG9ydGFuY2UpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
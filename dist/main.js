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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --teal: #72b4c5;\n    --smallShadow: 5px 5px 5px rgba(48, 48, 48, 0.308);\n    --high: #bd3535;\n    --medium: #f8cd56;\n    --low: #7fbe7f;\n}\n\nbody {\n    background-color: #FED9B7;\n    color: black;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 300;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100svh;\n    min-width: 100vw;\n    overflow: hidden;\n}\n\nheader {\n    height: 6rem;\n    display: flex;\n}\n\nmain {\n    height: calc(100vh - 6rem);\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#logo {\n    color: var(--teal);\n    -webkit-text-stroke: 2px #50a3b8;\n    font-size: 4rem;\n    font-weight: bold;\n    line-height: 6rem;\n    text-decoration: none;\n}\n\n#logo:visited {\n        color: rgb(114, 180, 197);\n        text-decoration: none;\n    }\n\n#container {\n    background-color: white;\n    border-radius: 1.4rem 1.4rem 0 0;\n    box-shadow: 10px 8px 5px rgba(48, 48, 48, 0.171);\n    padding: 3rem;\n    height: 100%;\n    width: 90%;\n    display: flex;\n}\n\n#sidebar {\n    border-right: solid 1px grey;\n    height: 90%;\n    width: 13rem;\n    flex-shrink: 0;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n#sidebar button {\n        align-self: stretch;\n        background-color: var(--teal);\n        border: none;\n        border-radius: 1rem;\n        box-shadow: var(--smallShadow);\n        font-size: 1.6rem;\n        padding: 0.8rem;\n        margin-right: 3rem;\n    }\n\ndialog[open] {\n    border: none;\n    border-radius: 1.6rem;\n    box-shadow: var(--smallShadow);\n    font-size: 1.2rem;\n    padding: 1.5rem;\n    gap: 0.6rem;\n    animation: fadeIn 0.4s linear 1;\n}\n\ndialog[open]>label:first-child {\n        margin-bottom: 1rem;\n    }\n\n@keyframes fadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n    }\n\ndialog[open]::backdrop {\n        animation: fadeIn 0.4s linear 0;\n        background-color: #0000006c;\n        backdrop-filter: blur(3px);\n    }\n\ndialog[open] label {\n        display: flex;\n        flex-direction: column;\n    }\n\ndialog[open] label,\n    dialog[open] input,\n    dialog[open] select,\n    dialog[open] textarea,\n    dialog[open] button {\n        font-family: inherit;\n        font-size: inherit;\n        gap: 0.3rem;\n    }\n\ndialog[open] input[type=\"time\"] {\n        width: 6rem;\n    }\n\ndialog[open]>form {\n        gap: 0.6rem;\n    }\n\ndialog[open]>form>div {\n            display: flex;\n            justify-content: space-between;\n        }\n\ndialog[open]>form>div:last-child {\n                margin-top: 2rem;\n            }\n\ndialog[open]>form textarea {\n            height: 9rem;\n            width:25rem;\n            padding: 0.4rem;\n            resize: none;\n        }\n\nul {\n    padding: 0;\n    list-style: none;\n}\n\nli {\n    font-size: 2rem;\n    margin: 2rem 0 2rem;\n    transition: 0.1s linear;\n    user-select: none;\n}\n\nli:hover {\n        color: grey;\n        cursor: pointer;\n    }\n\nli:last-child {\n        margin-top: 7rem;\n    }\n\n#main-area {\n    font-size: 1.4rem;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n#main-area>#filters {\n        border-bottom: solid 1px grey;\n        height: 8rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        flex-wrap: wrap;\n    }\n\n#main-area>#filters>* {\n            margin-left: 2rem;\n            flex-shrink: 0;\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n\n#main-area>#categories {\n        justify-content: space-between;\n    }\n\n#main-area .filter {\n        text-align: end;\n        margin: 0.2rem 0;\n        display: grid;\n        grid-template-columns: auto 1.2em;\n        gap: 0.5em;\n        cursor: pointer;\n        user-select: none;\n    }\n\n#main-area #importance>div {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n    }\n\n@media screen and (max-width: 1266px) {\n    #importance>div {\n        flex-direction: row !important;\n        gap: 2rem;\n    }\n}\n\n#list {\n    margin-bottom: 0.5rem;\n    padding: 1.6rem;\n}\n\n#list .entry {\n        font-size: 1rem;\n        background-color: white;\n        border: 1px solid grey;\n        height: 2.8rem;\n        width: 100%;\n        margin-bottom: 0.6rem;\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        transition: 110ms linear;\n    }\n\n#list .entry:hover {\n            transform: scale(1.01);\n            filter: drop-shadow(0 0 4px rgba(61, 61, 61, 0.658))\n        }\n\n#list .entry .left {\n            flex: 1;\n            max-width: 40rem;\n        }\n\n#list .entry .left .category,\n            #list .entry .left .name {\n                flex-shrink: 0;\n            }\n\n#list .entry .left,\n        #list .entry .right {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n#list .entry .category {\n            font-weight: normal;\n            line-height: 2.8rem;\n            text-align: center;\n            border-right: 1px solid grey;\n            height: 100%;\n            width: 7rem;\n            margin: 0;\n            user-select: none;\n        }\n\n#list .entry .notes {\n            color: rgb(77, 77, 77);\n            font-weight: 100;\n            min-width: 0px;\n            max-width: 32rem;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 1;\n            overflow: hidden;\n        }\n\n#list .entry .delete {\n            margin-right: 1.5rem;\n        }\n\ninput[type='checkbox'] {\n    appearance: none;\n    background-color: transparent;\n    margin: 0;\n    border: 4px solid var(--teal);\n    cursor: pointer;\n    display: grid;\n    place-content: center;\n}\n\ninput[type='checkbox']::before {\n        content: '';\n        width: 1rem;\n        height: 1rem;\n        transform: scale(0);\n        transform-origin: bottom left;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transition: 110ms linear;\n        box-shadow: inset 1rem 1rem var(--teal);\n    }\n\ninput[type='checkbox']:checked::before {\n        transform: scale(1);\n    }\n\nbutton {\n    cursor: pointer;\n    font-family: inherit;\n    text-align: center;\n}\n\n.list-btn {\n    background-color: transparent;\n    border: 3px solid var(--teal);\n    color: var(--teal);\n    font-weight: bold;\n    transition: 50ms linear;\n}\n\n.list-btn:hover {\n        transform: scale(1.1);\n    }\n\ninput:disabled,\ntextarea:disabled,\nselect:disabled {\n    background-color: transparent;\n    border: none;\n    color: black;\n    font-weight: bold;\n    padding: 0 !important;\n    appearance: none;\n}\n\n.vert-flex {\n    display: flex;\n    flex-direction: column;\n}\n\n.category-hidden,\n.importance-hidden {\n    display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,kDAAkD;IAClD,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kCAAkC;IAClC,gBAAgB;IAChB,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;AAMzB;;AAJI;QACI,yBAAyB;QACzB,qBAAqB;IACzB;;AAGJ;IACI,uBAAuB;IACvB,gCAAgC;IAChC,gDAAgD;IAChD,aAAa;IACb,YAAY;IACZ,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,uBAAuB;AAY3B;;AAVI;QACI,mBAAmB;QACnB,6BAA6B;QAC7B,YAAY;QACZ,mBAAmB;QACnB,8BAA8B;QAC9B,iBAAiB;QACjB,eAAe;QACf,kBAAkB;IACtB;;AAGJ;IACI,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,+BAA+B;AAuDnC;;AArDI;QACI,mBAAmB;IACvB;;AAEA;QACI,KAAK,UAAU,EAAE;QACjB,OAAO,UAAU,EAAE;IACvB;;AAEA;QACI,+BAA+B;QAC/B,2BAA2B;QAC3B,0BAA0B;IAC9B;;AAEA;QACI,aAAa;QACb,sBAAsB;IAC1B;;AAEA;;;;;QAKI,oBAAoB;QACpB,kBAAkB;QAClB,WAAW;IACf;;AAEA;QACI,WAAW;IACf;;AAEA;QACI,WAAW;IAiBf;;AAfI;YACI,aAAa;YACb,8BAA8B;QAKlC;;AAHI;gBACI,gBAAgB;YACpB;;AAGJ;YACI,YAAY;YACZ,WAAW;YACX,eAAe;YACf,YAAY;QAChB;;AAIR;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AAUrB;;AARI;QACI,WAAW;QACX,eAAe;IACnB;;AAEA;QACI,gBAAgB;IACpB;;AAGJ;IACI,iBAAiB;IACjB,OAAO;IACP,aAAa;IACb,sBAAsB;AAsC1B;;AApCI;QACI,6BAA6B;QAC7B,YAAY;QACZ,aAAa;QACb,8BAA8B;QAC9B,qBAAqB;QACrB,eAAe;IASnB;;AAPI;YACI,iBAAiB;YACjB,cAAc;YACd,aAAa;YACb,mBAAmB;YACnB,SAAS;QACb;;AAGJ;QACI,8BAA8B;IAClC;;AAEA;QACI,eAAe;QACf,gBAAgB;QAChB,aAAa;QACb,iCAAiC;QACjC,UAAU;QACV,eAAe;QACf,iBAAiB;IACrB;;AAEA;QACI,aAAa;QACb,uBAAuB;QACvB,sBAAsB;IAC1B;;AAGJ;IACI;QACI,8BAA8B;QAC9B,SAAS;IACb;AACJ;;AAEA;IACI,qBAAqB;IACrB,eAAe;AA8DnB;;AA5DI;QACI,eAAe;QACf,uBAAuB;QACvB,sBAAsB;QACtB,cAAc;QACd,WAAW;QACX,qBAAqB;QACrB,aAAa;QACb,8BAA8B;QAC9B,SAAS;QACT,wBAAwB;IAiD5B;;AA/CI;YACI,sBAAsB;YACtB;QACJ;;AAEA;YACI,OAAO;YACP,gBAAgB;QAMpB;;AAJI;;gBAEI,cAAc;YAClB;;AAGJ;;YAEI,aAAa;YACb,mBAAmB;YACnB,SAAS;QACb;;AAEA;YACI,mBAAmB;YACnB,mBAAmB;YACnB,kBAAkB;YAClB,4BAA4B;YAC5B,YAAY;YACZ,WAAW;YACX,SAAS;YACT,iBAAiB;QACrB;;AAEA;YACI,sBAAsB;YACtB,gBAAgB;YAChB,cAAc;YACd,gBAAgB;YAChB,oBAAoB;YACpB,4BAA4B;YAC5B,qBAAqB;YACrB,gBAAgB;QACpB;;AAEA;YACI,oBAAoB;QACxB;;AAIR;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,SAAS;IACT,6BAA6B;IAC7B,eAAe;IACf,aAAa;IACb,qBAAqB;AAgBzB;;AAdI;QACI,WAAW;QACX,WAAW;QACX,YAAY;QACZ,mBAAmB;QACnB,6BAA6B;QAC7B,uEAAuE;QACvE,wBAAwB;QACxB,uCAAuC;IAC3C;;AAEA;QACI,mBAAmB;IACvB;;AAGJ;IACI,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,6BAA6B;IAC7B,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;AAK3B;;AAHI;QACI,qBAAqB;IACzB;;AAGJ;;;IAGI,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,wBAAwB;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');\n\n:root {\n    --teal: #72b4c5;\n    --smallShadow: 5px 5px 5px rgba(48, 48, 48, 0.308);\n    --high: #bd3535;\n    --medium: #f8cd56;\n    --low: #7fbe7f;\n}\n\nbody {\n    background-color: #FED9B7;\n    color: black;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 300;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100svh;\n    min-width: 100vw;\n    overflow: hidden;\n}\n\nheader {\n    height: 6rem;\n    display: flex;\n}\n\nmain {\n    height: calc(100vh - 6rem);\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#logo {\n    color: var(--teal);\n    -webkit-text-stroke: 2px #50a3b8;\n    font-size: 4rem;\n    font-weight: bold;\n    line-height: 6rem;\n    text-decoration: none;\n\n    &:visited {\n        color: rgb(114, 180, 197);\n        text-decoration: none;\n    }\n}\n\n#container {\n    background-color: white;\n    border-radius: 1.4rem 1.4rem 0 0;\n    box-shadow: 10px 8px 5px rgba(48, 48, 48, 0.171);\n    padding: 3rem;\n    height: 100%;\n    width: 90%;\n    display: flex;\n}\n\n#sidebar {\n    border-right: solid 1px grey;\n    height: 90%;\n    width: 13rem;\n    flex-shrink: 0;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    & button {\n        align-self: stretch;\n        background-color: var(--teal);\n        border: none;\n        border-radius: 1rem;\n        box-shadow: var(--smallShadow);\n        font-size: 1.6rem;\n        padding: 0.8rem;\n        margin-right: 3rem;\n    }\n}\n\ndialog[open] {\n    border: none;\n    border-radius: 1.6rem;\n    box-shadow: var(--smallShadow);\n    font-size: 1.2rem;\n    padding: 1.5rem;\n    gap: 0.6rem;\n    animation: fadeIn 0.4s linear 1;\n\n    &>label:first-child {\n        margin-bottom: 1rem;\n    }\n\n    @keyframes fadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n    }\n\n    &::backdrop {\n        animation: fadeIn 0.4s linear 0;\n        background-color: #0000006c;\n        backdrop-filter: blur(3px);\n    }\n\n    & label {\n        display: flex;\n        flex-direction: column;\n    }\n\n    & label,\n    input,\n    select,\n    textarea,\n    button {\n        font-family: inherit;\n        font-size: inherit;\n        gap: 0.3rem;\n    }\n\n    & input[type=\"time\"] {\n        width: 6rem;\n    }\n\n    &>form {\n        gap: 0.6rem;\n\n        &>div {\n            display: flex;\n            justify-content: space-between;\n\n            &:last-child {\n                margin-top: 2rem;\n            }\n        }\n\n        & textarea {\n            height: 9rem;\n            width:25rem;\n            padding: 0.4rem;\n            resize: none;\n        }\n    }\n}\n\nul {\n    padding: 0;\n    list-style: none;\n}\n\nli {\n    font-size: 2rem;\n    margin: 2rem 0 2rem;\n    transition: 0.1s linear;\n    user-select: none;\n\n    &:hover {\n        color: grey;\n        cursor: pointer;\n    }\n\n    &:last-child {\n        margin-top: 7rem;\n    }\n}\n\n#main-area {\n    font-size: 1.4rem;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    &>#filters {\n        border-bottom: solid 1px grey;\n        height: 8rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: baseline;\n        flex-wrap: wrap;\n\n        &>* {\n            margin-left: 2rem;\n            flex-shrink: 0;\n            display: flex;\n            align-items: center;\n            gap: 2rem;\n        }\n    }\n\n    &>#categories {\n        justify-content: space-between;\n    }\n\n    & .filter {\n        text-align: end;\n        margin: 0.2rem 0;\n        display: grid;\n        grid-template-columns: auto 1.2em;\n        gap: 0.5em;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    & #importance>div {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width: 1266px) {\n    #importance>div {\n        flex-direction: row !important;\n        gap: 2rem;\n    }\n}\n\n#list {\n    margin-bottom: 0.5rem;\n    padding: 1.6rem;\n\n    & .entry {\n        font-size: 1rem;\n        background-color: white;\n        border: 1px solid grey;\n        height: 2.8rem;\n        width: 100%;\n        margin-bottom: 0.6rem;\n        display: flex;\n        justify-content: space-between;\n        gap: 1rem;\n        transition: 110ms linear;\n\n        &:hover {\n            transform: scale(1.01);\n            filter: drop-shadow(0 0 4px rgba(61, 61, 61, 0.658))\n        }\n\n        & .left {\n            flex: 1;\n            max-width: 40rem;\n\n            & .category,\n            .name {\n                flex-shrink: 0;\n            }\n        }\n\n        & .left,\n        .right {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n        & .category {\n            font-weight: normal;\n            line-height: 2.8rem;\n            text-align: center;\n            border-right: 1px solid grey;\n            height: 100%;\n            width: 7rem;\n            margin: 0;\n            user-select: none;\n        }\n\n        & .notes {\n            color: rgb(77, 77, 77);\n            font-weight: 100;\n            min-width: 0px;\n            max-width: 32rem;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 1;\n            overflow: hidden;\n        }\n\n        & .delete {\n            margin-right: 1.5rem;\n        }\n    }\n}\n\ninput[type='checkbox'] {\n    appearance: none;\n    background-color: transparent;\n    margin: 0;\n    border: 4px solid var(--teal);\n    cursor: pointer;\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: '';\n        width: 1rem;\n        height: 1rem;\n        transform: scale(0);\n        transform-origin: bottom left;\n        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n        transition: 110ms linear;\n        box-shadow: inset 1rem 1rem var(--teal);\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n}\n\nbutton {\n    cursor: pointer;\n    font-family: inherit;\n    text-align: center;\n}\n\n.list-btn {\n    background-color: transparent;\n    border: 3px solid var(--teal);\n    color: var(--teal);\n    font-weight: bold;\n    transition: 50ms linear;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n}\n\ninput:disabled,\ntextarea:disabled,\nselect:disabled {\n    background-color: transparent;\n    border: none;\n    color: black;\n    font-weight: bold;\n    padding: 0 !important;\n    appearance: none;\n}\n\n.vert-flex {\n    display: flex;\n    flex-direction: column;\n}\n\n.category-hidden,\n.importance-hidden {\n    display: none !important;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _form_fields_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-fields.js */ "./src/modules/form-fields.js");



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
    const ddMMyyyy = `${date.slice(-2)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
    const p = document.createElement('p');
    p.classList.add('due');
    p.innerHTML = `<b>${heading}</b> ${ddMMyyyy}`;

    div.insertBefore(p, div.firstChild);
}

function openDetails(entry) {
    const modal = document.querySelector('#details');
    modal.showModal();
    
    const form = details.querySelector('form');
    form.replaceChildren();

    const fields = (entry.constructor.name === 'Task')  ? _form_fields_js__WEBPACK_IMPORTED_MODULE_1__.addTask
                :  (entry.constructor.name === 'Event') ? _form_fields_js__WEBPACK_IMPORTED_MODULE_1__.addEvent
                :  _form_fields_js__WEBPACK_IMPORTED_MODULE_1__.addReminder;
    const fragment = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.createForm)(fields, modal, entry.constructor.name === 'Event');
    form.appendChild(fragment);

    setEntryValues(entry, form);
}

function setEntryValues(entry, form) {
    const fields = form.querySelectorAll('input, textarea, select');
    const entryValues = [...Object.values(entry)];

    fields.forEach((field, i) => {
        field.value = (entryValues[i] === '') ? '-' : entryValues[i];
        field.disabled = true;
    });
}

/***/ }),

/***/ "./src/modules/entry-factory.js":
/*!**************************************!*\
  !*** ./src/modules/entry-factory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewEntry": () => (/* binding */ createNewEntry)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7QUFFckI7QUFDQSwwRUFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esd0NBQXdDLGdFQUFVO0FBQ2xELHdDQUF3QyxxRUFBYztBQUN0RCw4REFBOEQsaUVBQWdCO0FBQzlFLDhEQUE4RCxpRUFBZ0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZW50cnktZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9maWx0ZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10b3AvLi9zcmMvbW9kdWxlcy9mb3JtLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL3JlbWluZGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC8uL3NyYy9tb2R1bGVzL3R5cGUtY2hhbmdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS10ZWFsOiAjNzJiNGM1O1xcbiAgICAtLXNtYWxsU2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMzA4KTtcXG4gICAgLS1oaWdoOiAjYmQzNTM1O1xcbiAgICAtLW1lZGl1bTogI2Y4Y2Q1NjtcXG4gICAgLS1sb3c6ICM3ZmJlN2Y7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEOUI3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2cmVtKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAjNTBhM2I4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jbG9nbzp2aXNpdGVkIHtcXG4gICAgICAgIGNvbG9yOiByZ2IoMTE0LCAxODAsIDE5Nyk7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNHJlbSAxLjRyZW0gMCAwO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDhweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjE3MSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI3NpZGViYXIgYnV0dG9uIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zbWFsbFNoYWRvdyk7XFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zbWFsbFNoYWRvdyk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAxO1xcbn1cXG5cXG5kaWFsb2dbb3Blbl0+bGFiZWw6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXTo6YmFja2Ryb3Age1xcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBsaW5lYXIgMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2YztcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dIGxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dIGxhYmVsLFxcbiAgICBkaWFsb2dbb3Blbl0gaW5wdXQsXFxuICAgIGRpYWxvZ1tvcGVuXSBzZWxlY3QsXFxuICAgIGRpYWxvZ1tvcGVuXSB0ZXh0YXJlYSxcXG4gICAgZGlhbG9nW29wZW5dIGJ1dHRvbiB7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGdhcDogMC4zcmVtO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtIHtcXG4gICAgICAgIGdhcDogMC42cmVtO1xcbiAgICB9XFxuXFxuZGlhbG9nW29wZW5dPmZvcm0+ZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG5cXG5kaWFsb2dbb3Blbl0+Zm9ybT5kaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbmRpYWxvZ1tvcGVuXT5mb3JtIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgICAgICAgICAgd2lkdGg6MjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMCAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGxpbmVhcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxubGk6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xcbiAgICB9XFxuXFxuI21haW4tYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbWFpbi1hcmVhPiNmaWx0ZXJzIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiNtYWluLWFyZWE+I2ZpbHRlcnM+KiB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4jbWFpbi1hcmVhPiNjYXRlZ29yaWVzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiNtYWluLWFyZWEgLmZpbHRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICBtYXJnaW46IDAuMnJlbSAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxLjJlbTtcXG4gICAgICAgIGdhcDogMC41ZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcblxcbiNtYWluLWFyZWEgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjY2cHgpIHtcXG4gICAgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4jbGlzdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMS42cmVtO1xcbn1cXG5cXG4jbGlzdCAuZW50cnkge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMTBtcyBsaW5lYXI7XFxuICAgIH1cXG5cXG4jbGlzdCAuZW50cnk6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoNjEsIDYxLCA2MSwgMC42NTgpKVxcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCB7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcbiAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCAuY2F0ZWdvcnksXFxuICAgICAgICAgICAgI2xpc3QgLmVudHJ5IC5sZWZ0IC5uYW1lIHtcXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgfVxcblxcbiNsaXN0IC5lbnRyeSAubGVmdCxcXG4gICAgICAgICNsaXN0IC5lbnRyeSAucmlnaHQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5jYXRlZ29yeSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuI2xpc3QgLmVudHJ5IC5ub3RlcyB7XFxuICAgICAgICAgICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJyZW07XFxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG5cXG4jbGlzdCAuZW50cnkgLmRlbGV0ZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxuICAgICAgICB9XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXRlYWwpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDFyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSB2YXIoLS10ZWFsKTtcXG4gICAgfVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZWFsKTtcXG4gICAgY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdHJhbnNpdGlvbjogNTBtcyBsaW5lYXI7XFxufVxcblxcbi5saXN0LWJ0bjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIH1cXG5cXG5pbnB1dDpkaXNhYmxlZCxcXG50ZXh0YXJlYTpkaXNhYmxlZCxcXG5zZWxlY3Q6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi52ZXJ0LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnktaGlkZGVuLFxcbi5pbXBvcnRhbmNlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGVBQWU7SUFDZixrREFB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QUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS10ZWFsOiAjNzJiNGM1O1xcbiAgICAtLXNtYWxsU2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDQ4LCA0OCwgNDgsIDAuMzA4KTtcXG4gICAgLS1oaWdoOiAjYmQzNTM1O1xcbiAgICAtLW1lZGl1bTogI2Y4Y2Q1NjtcXG4gICAgLS1sb3c6ICM3ZmJlN2Y7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEOUI3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2cmVtKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBjb2xvcjogdmFyKC0tdGVhbCk7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAjNTBhM2I4O1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogNnJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICAmOnZpc2l0ZWQge1xcbiAgICAgICAgY29sb3I6IHJnYigxMTQsIDE4MCwgMTk3KTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNHJlbSAxLjRyZW0gMCAwO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDhweCA1cHggcmdiYSg0OCwgNDgsIDQ4LCAwLjE3MSk7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEzcmVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlYWwpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNtYWxsU2hhZG93KTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICAgICAgcGFkZGluZzogMC44cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgICB9XFxufVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zbWFsbFNoYWRvdyk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGdhcDogMC42cmVtO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGxpbmVhciAxO1xcblxcbiAgICAmPmxhYmVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICB9XFxuXFxuICAgICY6OmJhY2tkcm9wIHtcXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgbGluZWFyIDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNmM7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgfVxcblxcbiAgICAmIGxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICYgbGFiZWwsXFxuICAgIGlucHV0LFxcbiAgICBzZWxlY3QsXFxuICAgIHRleHRhcmVhLFxcbiAgICBidXR0b24ge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBnYXA6IDAuM3JlbTtcXG4gICAgfVxcblxcbiAgICAmIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgfVxcblxcbiAgICAmPmZvcm0ge1xcbiAgICAgICAgZ2FwOiAwLjZyZW07XFxuXFxuICAgICAgICAmPmRpdiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgICAgICAgICAgd2lkdGg6MjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMCAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGxpbmVhcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDdyZW07XFxuICAgIH1cXG59XFxuXFxuI21haW4tYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAmPiNmaWx0ZXJzIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgICAgICY+KiB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmPiNjYXRlZ29yaWVzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAmIC5maWx0ZXIge1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgbWFyZ2luOiAwLjJyZW0gMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMS4yZW07XFxuICAgICAgICBnYXA6IDAuNWVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJiAjaW1wb3J0YW5jZT5kaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjY2cHgpIHtcXG4gICAgI2ltcG9ydGFuY2U+ZGl2IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4jbGlzdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMS42cmVtO1xcblxcbiAgICAmIC5lbnRyeSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICBoZWlnaHQ6IDIuOHJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IDExMG1zIGxpbmVhcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoNjEsIDYxLCA2MSwgMC42NTgpKVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubGVmdCB7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcblxcbiAgICAgICAgICAgICYgLmNhdGVnb3J5LFxcbiAgICAgICAgICAgIC5uYW1lIHtcXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAubGVmdCxcXG4gICAgICAgIC5yaWdodCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLmNhdGVnb3J5IHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgLm5vdGVzIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMnJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiAuZGVsZXRlIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMTEwbXMgbGluZWFyO1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIHZhcigtLXRlYWwpO1xcbiAgICB9XFxuXFxuICAgICY6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGVhbCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZWFsKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRyYW5zaXRpb246IDUwbXMgbGluZWFyO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcbn1cXG5cXG5pbnB1dDpkaXNhYmxlZCxcXG50ZXh0YXJlYTpkaXNhYmxlZCxcXG5zZWxlY3Q6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi52ZXJ0LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnktaGlkZGVuLFxcbi5pbXBvcnRhbmNlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCIuL2Zvcm1zXCI7XG5pbXBvcnQgeyBhZGRUYXNrLCBhZGRFdmVudCwgYWRkUmVtaW5kZXIgfSBmcm9tICcuL2Zvcm0tZmllbGRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVudHJ5VG9EaXNwbGF5KGVudHJ5LCBpbmRleCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZW50cnknKTtcbiAgICBsaXN0SXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5jYXRlZ29yeSA9IGVudHJ5LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgbGlzdEl0ZW0uZGF0YXNldC5pbXBvcnRhbmNlID0gZW50cnkuaW1wb3J0YW5jZTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUxlZnRIYWxmKGVudHJ5LmNvbnN0cnVjdG9yLm5hbWUsIGVudHJ5Lm5hbWUsIGVudHJ5Lm5vdGVzKSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlUmlnaHRIYWxmKGVudHJ5KSk7XG4gICAgbGlzdEl0ZW0uc3R5bGUuYm94U2hhZG93ID0gYC0wLjVlbSAwIHZhcigtLSR7ZW50cnkuaW1wb3J0YW5jZX0pIGluc2V0YDtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0SGFsZih0eXBlLCBuYW1lLCBub3Rlcykge1xuICAgIC8vIHJlbmRlciBkZWZhdWx0IG5hbWUgaGVhZGluZ1xuICAgIG5hbWUgPSAobmFtZSA9PT0gJycpID8gJy0nIDogbmFtZTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cbiAgICBjb25zdCB0YWdzID0gWydoNCcsICdoNCcsICdwJ107XG4gICAgY29uc3QgY2xhc3NlcyA9IFsnY2F0ZWdvcnknLCAnbmFtZScsICdub3RlcyddO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW3R5cGUsIG5hbWUsIG5vdGVzXTtcblxuICAgIHRhZ3MuZm9yRWFjaCgodGFnLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnRzW2ldO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRIYWxmKGVudHJ5KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gWydkZXRhaWxzJywgJ2RlbGV0ZSddO1xuICAgIGNvbnN0IGJ0bk5hbWVzID0gWydEZXRhaWxzJywgJ1gnXTtcbiAgICBidG5OYW1lcy5mb3JFYWNoKChuYW1lLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2xpc3QtYnRuJyk7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuXG4gICAgZGl2LmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGV0YWlscy5iaW5kKG51bGwsIGVudHJ5KSk7XG5cbiAgICBjb25zdCB0eXBlID0gZW50cnkuY29uc3RydWN0b3IubmFtZTtcbiAgICBpZiAodHlwZSA9PT0gJ1Rhc2snKSB7XG4gICAgICAgIGFwcGVuZERhdGVGaWVsZChkaXYsICdEdWU6ICcsIGVudHJ5LmR1ZURhdGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnRXZlbnQnKSB7XG4gICAgICAgIGFwcGVuZERhdGVGaWVsZChkaXYsICdTdGFydHM6ICcsIGVudHJ5LnN0YXJ0RGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRGF0ZUZpZWxkKGRpdiwgaGVhZGluZywgZGF0ZSkge1xuICAgIGNvbnN0IGRkTU15eXl5ID0gYCR7ZGF0ZS5zbGljZSgtMil9LyR7ZGF0ZS5zbGljZSg1LCA3KX0vJHtkYXRlLnNsaWNlKDAsIDQpfWA7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2R1ZScpO1xuICAgIHAuaW5uZXJIVE1MID0gYDxiPiR7aGVhZGluZ308L2I+ICR7ZGRNTXl5eXl9YDtcblxuICAgIGRpdi5pbnNlcnRCZWZvcmUocCwgZGl2LmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBvcGVuRGV0YWlscyhlbnRyeSkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKTtcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICBcbiAgICBjb25zdCBmb3JtID0gZGV0YWlscy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZpZWxkcyA9IChlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVGFzaycpICA/IGFkZFRhc2tcbiAgICAgICAgICAgICAgICA6ICAoZW50cnkuY29uc3RydWN0b3IubmFtZSA9PT0gJ0V2ZW50JykgPyBhZGRFdmVudFxuICAgICAgICAgICAgICAgIDogIGFkZFJlbWluZGVyO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShmaWVsZHMsIG1vZGFsLCBlbnRyeS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRXZlbnQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxuICAgIHNldEVudHJ5VmFsdWVzKGVudHJ5LCBmb3JtKTtcbn1cblxuZnVuY3Rpb24gc2V0RW50cnlWYWx1ZXMoZW50cnksIGZvcm0pIHtcbiAgICBjb25zdCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gICAgY29uc3QgZW50cnlWYWx1ZXMgPSBbLi4uT2JqZWN0LnZhbHVlcyhlbnRyeSldO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkLCBpKSA9PiB7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gKGVudHJ5VmFsdWVzW2ldID09PSAnJykgPyAnLScgOiBlbnRyeVZhbHVlc1tpXTtcbiAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgUmVtaW5kZXIgfSBmcm9tICcuL3JlbWluZGVycy5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVRhc2tGb3JtIH0gZnJvbSAnLi90eXBlLWNoYW5nZXIuanMnO1xuaW1wb3J0IHsgYWRkRW50cnlUb0Rpc3BsYXkgfSBmcm9tICcuL2Rpc3BsYXktY29udHJvbC5qcyc7XG5cbmNvbnN0IGVudHJpZXMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0VudHJ5KGUpIHtcbiAgICBjb25zdCBmb3JtVmFsdWVzID0gW107XG5cbiAgICBjb25zdCBmb3JtSW5wdXRzID0gZS50YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBmb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4gZm9ybVZhbHVlcy5wdXNoKGlucHV0LnZhbHVlKSk7XG5cbiAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUtc2VsZWN0b3InKTtcbiAgICBzd2l0Y2ggKHR5cGUudmFsdWUpIHtcbiAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2gobmV3IFRhc2soLi4uZm9ybVZhbHVlcykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgRXZlbnQoLi4uZm9ybVZhbHVlcykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbWluZGVyJzpcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChuZXcgUmVtaW5kZXIoLi4uZm9ybVZhbHVlcykpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnkgPSBlbnRyaWVzW2VudHJpZXMubGVuZ3RoIC0gMV07XG4gICAgYWRkRW50cnlUb0Rpc3BsYXkoZW50cnksIGVudHJpZXMuaW5kZXhPZihlbnRyeSkpO1xuXG4gICAgLy8gcmVzZXQgZm9ybSBidXQgcmV0YWluIGRlZmF1bHQgZGF0ZS90aW1lIHZhbHVlc1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZUFuZFJlc2V0Rm9ybSh0eXBlKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VBbmRSZXNldEZvcm0odHlwZVNlbGVjdG9yKSB7XG4gICAgZ2VuZXJhdGVUYXNrRm9ybSgpO1xuICAgIHR5cGVTZWxlY3Rvci5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKS5jbG9zZSgpO1xufSIsImV4cG9ydCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24sIHN0YXJ0RGF0ZSwgc3RhcnRUaW1lLCBlbmREYXRlLCBlbmRUaW1lLCBub3RlcywgaW1wb3J0YW5jZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2F0ZWdvcmllcyhlKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNhdGVnb3J5PVwiJHtlLnRhcmdldC5uYW1lfVwiXWApO1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdjYXRlZ29yeS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckltcG9ydGFuY2UoZSkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pbXBvcnRhbmNlPVwiJHtlLnRhcmdldC5uYW1lfVwiXWApO1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBlbnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbmNlLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW5jZS1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pXG59IiwiZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnRHVlIGRhdGU6PGlucHV0IHR5cGU9XCJkYXRlXCI+JyxcbiAgICAnTm90ZXM6PHRleHRhcmVhIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+JyxcbiAgICAnSW1wb3J0YW5jZTo8c2VsZWN0IG5hbWU9XCJpbXBvcnRhbmNlXCI+PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIHNlbGVjdGVkPk1lZGl1bTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj48L3NlbGVjdD4nLFxuXTtcblxuZXhwb3J0IGNvbnN0IGFkZEV2ZW50ID0gW1xuICAgICdOYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidmVydC1mbGV4XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnTG9jYXRpb246PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2ZXJ0LWZsZXhcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4nLFxuICAgICdOb3Rlczo8dGV4dGFyZWEgYXV0b2NvbXBsZXRlPVwib2ZmXCI+PC90ZXh0YXJlYT4nLFxuICAgICdJbXBvcnRhbmNlOjxzZWxlY3QgbmFtZT1cImltcG9ydGFuY2VcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PicsXG5dO1xuXG5leHBvcnQgY29uc3QgYWRkUmVtaW5kZXIgPSBbXG4gICAgJ05hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+JyxcbiAgICAnTm90ZXM6PHRleHRhcmVhIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+JyxcbiAgICAnSW1wb3J0YW5jZTo8c2VsZWN0IG5hbWU9XCJpbXBvcnRhbmNlXCI+PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIHNlbGVjdGVkPk1lZGl1bTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj48L3NlbGVjdD4nLFxuXTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybShmaWVsZHMsIG1vZGFsLCBpc0V2ZW50ID0gZmFsc2UpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBmaWVsZDtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgYXBwZW5kRXZlbnREYXRlVGltZShmcmFnbWVudCk7XG4gICAgfVxuIFxuICAgIGFwcGVuZEJ0bnMoZnJhZ21lbnQsIG1vZGFsKTtcbiAgICBcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEV2ZW50RGF0ZVRpbWUoZm9ybSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gY3JlYXRlRGF0ZVRpbWVEaXYoJ1N0YXJ0IGRhdGU6JywgJ1N0YXJ0IHRpbWU6JywgJzAwOjAwJyk7XG4gICAgY29uc3QgZW5kID0gY3JlYXRlRGF0ZVRpbWVEaXYoJ0VuZCBkYXRlOicsICdFbmQgdGltZTonLCAnMjM6NTknKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdsYWJlbDpudGgtY2hpbGQoMyknKTtcbiAgICBmb3JtLmluc2VydEJlZm9yZShzdGFydCwgbG9jYXRpb24pO1xuICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGVuZCwgbG9jYXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZURpdihkYXRlLCB0aW1lLCBkZWZhdWx0VGltZSkge1xuICAgIGNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0VHlwZXMgPSBbJ2RhdGUnLCAndGltZSddO1xuICAgIFxuXG4gICAgW2RhdGUsIHRpbWVdLmZvckVhY2goKGFyZywgaSkgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlc1tpXSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYXJnO1xuXG4gICAgICAgIGlucHV0LmRlZmF1bHRWYWx1ZSA9IChhcmcgPT09IGRhdGUpID8gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRUaW1lO1xuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRlRmllbGQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEJ0bnMoZnJhZ21lbnQsIG1vZGFsKSB7XG4gICAgY29uc3QgdGhyZWVCdXR0b25zID0gbW9kYWwuaWQgPT09ICdhZGQtaXRlbS1tb2RhbCc7XG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0aGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29uc3QgYnRuc1RvQWRkID0gdGhyZWVCdXR0b25zID8gW2ZpcnN0LCBzZWNvbmQsIHRoaXJkXSA6IFtmaXJzdCwgc2Vjb25kXTtcbiAgICBjb25zdCBidG5OYW1lcyA9IHRocmVlQnV0dG9ucyA/IFsnQ2xvc2UnLCAnQ2xlYXInLCAnU3VibWl0J10gOiBbJ0Nsb3NlJywgJ0VkaXQnXTtcbiAgICBjb25zdCBidG5JZHMgPSB0aHJlZUJ1dHRvbnMgPyBbJ2Nsb3NlLW1vZGFsJywgJ3Jlc2V0JywgJ3N1Ym1pdCddIDogWydjbG9zZS1tb2RhbCcsICdlZGl0J107XG4gICAgY29uc3QgYnRuQXR0clZhbCA9IHRocmVlQnV0dG9ucyA/IFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddIDogWydidXR0b24nLCAnYnV0dG9uJ107XG5cbiAgICBidG5zVG9BZGQuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bk5hbWVzW2ldO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsIGJ0bklkc1tpXSk7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBidG5BdHRyVmFsW2ldKTtcbiAgICAgICAgYnRucy5hcHBlbmRDaGlsZChidG4pO1xuICAgIH0pO1xuXG4gICAgYnRucy5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmNsb3NlKCkpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ0bnMpO1xufSIsImV4cG9ydCBjbGFzcyBSZW1pbmRlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgbm90ZXMsIGltcG9ydGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3Jtcy5qcyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBhZGRFdmVudCwgYWRkUmVtaW5kZXIgfSBmcm9tICcuL2Zvcm0tZmllbGRzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZvcm0oZSkge1xuICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICBnZW5lcmF0ZVRhc2tGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgZ2VuZXJhdGVFdmVudEZvcm0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZW1pbmRlcic6XG4gICAgICAgICAgICBnZW5lcmF0ZVJlbWluZGVyRm9ybSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRUYXNrLCBtb2RhbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJykuZGVmYXVsdFZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVFdmVudEZvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0tbW9kYWwnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZvcm0oYWRkRXZlbnQsIG1vZGFsLCB0cnVlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlbWluZGVyRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbS1tb2RhbCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1kZXRhaWxzJyk7XG4gICAgZm9ybS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gY3JlYXRlRm9ybShhZGRSZW1pbmRlciwgbW9kYWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNoYW5nZUZvcm0sIGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL21vZHVsZXMvdHlwZS1jaGFuZ2VyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlTmV3RW50cnkgfSBmcm9tICcuL21vZHVsZXMvZW50cnktZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBmaWx0ZXJDYXRlZ29yaWVzLCBmaWx0ZXJJbXBvcnRhbmNlIH0gZnJvbSAnLi9tb2R1bGVzL2ZpbHRlcnMuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIGluaXRpYWxpc2UgdXNpbmcgJ3Rhc2snIGFzIGRlZmF1bHQgZGlzcGxheSB0eXBlXG5nZW5lcmF0ZVRhc2tGb3JtKCk7XG5cbmNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW1vZGFsJyk7XG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLW1vZGFsJyk7XG5jb25zdCBhZGRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtLW1vZGFsJyk7XG5jb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWxlY3RvcicpO1xuY29uc3QgbmV3RW50cnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tZGV0YWlscycpO1xuY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXRlZ29yaWVzIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuY29uc3QgaW1wb3J0YW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpbXBvcnRhbmNlIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG5cbm9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uc2hvd01vZGFsKCkpO1xuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZEl0ZW0uY2xvc2UoKSk7XG50eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlRm9ybSk7XG5uZXdFbnRyeUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlTmV3RW50cnkpO1xuY2F0ZWdvcmllcy5mb3JFYWNoKGZpbHRlciA9PiBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJDYXRlZ29yaWVzKSk7XG5pbXBvcnRhbmNlLmZvckVhY2goZmlsdGVyID0+IGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckltcG9ydGFuY2UpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
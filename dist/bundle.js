/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 0.5fr 0.5fr 4fr;
    min-height: 100vh;
    background-color: #282A36;
    color: #F8F8F2;
    font-family: 'Roboto', sans-serif;
}

* {
    margin: 0;
    padding: 0;
}

header {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 24px;
    padding-left: 24px;
}

.sidebar {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    background-color: #44475A ;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.btns > button, .new-proj > button{
    background-color: #44475A;
    font-size: 1.25rem;
    color: #F8F8F2;
    border: none;
    cursor: pointer;
}

.btns {
    margin-top: 10px;
}

.new-proj > button {
    font-weight: bold;
}

.new-proj > input {
    background-color: #44475A;
    border: none;
    font-size: 1.25rem;
}

.new-proj {
    display: flex;
    gap: 6px;
    margin-top: 10px;
}

#content {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    background-color: #8BE9FD;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 90%;
}

.project-title {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background-color: #6272A4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
}

.project-name {
    font-weight: bold;
    font-size: 2rem;
    color: #F8F8F2;
}

.tasks {
    padding: 24px;
}

.new-task {
    margin-top: 24px;
}

.new-task > button {
    background-color: #44475A ;
    border-radius: 10px;
    border: none;
    font-size: 1.5rem;
    padding: 10px;
    color: #F8F8F2;
    font-weight: bold;
}

.done {
    background-color: #2D9B46;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    padding: 10px;
    margin-right: 10px;
    color: #F8F8F2;
    font-weight: bold;
}

.details {
    background: #49567E;
}

.task {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/*dialog*/

dialog {
    width: 300px;
    height: 460px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #6272A4;
    color: #F8F8F2;
    border: none;
    border-radius: 10px;
}

.dialog-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
}

.dialog-content > label {
    font-size: 1.25rem;
    font-weight: bold;
}

label > input  {
    display: block;
}

.input-title, .input-date {
    background-color: #44475A;
    color: #F8F8F2;
    border-radius: 6px;
    border: none;
    padding: 6px;
    width: calc(100% - 16px);
    height: 25px;
    font-size: 1.1rem;
}

.radios {
    font-weight: bold;
    font-size: 1.25rem;
}

.radios > label > input {
    display: inline-block;
}

.add-text {
    font-weight: bold;
    font-size: 1.5rem;
}

textarea {
    width: calc(100% - 16px);
    height: 100px;
    background-color: #44475A;
    border-radius: 8px;
    padding: 8px;
    color: #F8F8F2;
}

.dialog-btns{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
}

.dialog-btns > button {
    border-radius: 8px;
    border: none;
    color: #F8F8F2;
    height: 35px;
    width: 80px;
}

.submit {
    background-color: #50FA7B;
}

.cancel {
    background-color: #FF5555;
}

/*details dialog*/
.details-dialog {
    height: 230px;
    padding: 16px;
    font-weight: bold;
    font-size: 1.25rem;
}

.details-content {
    /*margin-top: 12px;*/
}

.details-dialog > button {
    border-radius: 8px;
    border: none;
    color: #F8F8F2;
    height: 35px;
    width: 80px;
    margin-top: 100px;
    background-color: #FF5555;
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,0BAA0B;IAC1B,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA,SAAS;;AAET;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,wBAAwB;IACxB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,yBAAyB;AAC7B","sourcesContent":["body {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 0.5fr 0.5fr 4fr;\n    min-height: 100vh;\n    background-color: #282A36;\n    color: #F8F8F2;\n    font-family: 'Roboto', sans-serif;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    font-size: 2rem;\n    margin-bottom: 24px;\n    padding-left: 24px;\n}\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n    background-color: #44475A ;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\n.btns > button, .new-proj > button{\n    background-color: #44475A;\n    font-size: 1.25rem;\n    color: #F8F8F2;\n    border: none;\n    cursor: pointer;\n}\n\n.btns {\n    margin-top: 10px;\n}\n\n.new-proj > button {\n    font-weight: bold;\n}\n\n.new-proj > input {\n    background-color: #44475A;\n    border: none;\n    font-size: 1.25rem;\n}\n\n.new-proj {\n    display: flex;\n    gap: 6px;\n    margin-top: 10px;\n}\n\n#content {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    background-color: #8BE9FD;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 10% 90%;\n}\n\n.project-title {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    background-color: #6272A4;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 24px;\n}\n\n.project-name {\n    font-weight: bold;\n    font-size: 2rem;\n    color: #F8F8F2;\n}\n\n.tasks {\n    padding: 24px;\n}\n\n.new-task {\n    margin-top: 24px;\n}\n\n.new-task > button {\n    background-color: #44475A ;\n    border-radius: 10px;\n    border: none;\n    font-size: 1.5rem;\n    padding: 10px;\n    color: #F8F8F2;\n    font-weight: bold;\n}\n\n.done {\n    background-color: #2D9B46;\n    border: none;\n    border-radius: 8px;\n    font-size: 1rem;\n    padding: 10px;\n    margin-right: 10px;\n    color: #F8F8F2;\n    font-weight: bold;\n}\n\n.details {\n    background: #49567E;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n/*dialog*/\n\ndialog {\n    width: 300px;\n    height: 460px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #6272A4;\n    color: #F8F8F2;\n    border: none;\n    border-radius: 10px;\n}\n\n.dialog-content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 16px;\n}\n\n.dialog-content > label {\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\nlabel > input  {\n    display: block;\n}\n\n.input-title, .input-date {\n    background-color: #44475A;\n    color: #F8F8F2;\n    border-radius: 6px;\n    border: none;\n    padding: 6px;\n    width: calc(100% - 16px);\n    height: 25px;\n    font-size: 1.1rem;\n}\n\n.radios {\n    font-weight: bold;\n    font-size: 1.25rem;\n}\n\n.radios > label > input {\n    display: inline-block;\n}\n\n.add-text {\n    font-weight: bold;\n    font-size: 1.5rem;\n}\n\ntextarea {\n    width: calc(100% - 16px);\n    height: 100px;\n    background-color: #44475A;\n    border-radius: 8px;\n    padding: 8px;\n    color: #F8F8F2;\n}\n\n.dialog-btns{\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n    align-items: center;\n}\n\n.dialog-btns > button {\n    border-radius: 8px;\n    border: none;\n    color: #F8F8F2;\n    height: 35px;\n    width: 80px;\n}\n\n.submit {\n    background-color: #50FA7B;\n}\n\n.cancel {\n    background-color: #FF5555;\n}\n\n/*details dialog*/\n.details-dialog {\n    height: 230px;\n    padding: 16px;\n    font-weight: bold;\n    font-size: 1.25rem;\n}\n\n.details-content {\n    /*margin-top: 12px;*/\n}\n\n.details-dialog > button {\n    border-radius: 8px;\n    border: none;\n    color: #F8F8F2;\n    height: 35px;\n    width: 80px;\n    margin-top: 100px;\n    background-color: #FF5555;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/logic/addProject.js":
/*!*********************************!*\
  !*** ./src/logic/addProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjects */ "./src/logic/renderProjects.js");
/* harmony import */ var _renderTasksPerProj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasksPerProj */ "./src/logic/renderTasksPerProj.js");





function addProject() {

    const addProjBtn = document.querySelector('.add-proj')

    addProjBtn.addEventListener('click', function (event) {

        const projTitle = document.querySelector('.proj-title')
        const projects = JSON.parse(localStorage.getItem('projects'));

        if (projTitle.value in projects) {
            alert('Project with this name already exists!')
            return;
        }

        if (projTitle.value === '') {
            alert('It cant be empty')
            return;
        }

        projects[projTitle.value] = [];

        projTitle.value = ''

        localStorage.setItem('projects', JSON.stringify(projects))

        ;(0,_renderProjects__WEBPACK_IMPORTED_MODULE_0__["default"])()
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);

/***/ }),

/***/ "./src/logic/btnsLogic.js":
/*!********************************!*\
  !*** ./src/logic/btnsLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks */ "./src/logic/renderTasks.js");




function removeTask(btn) {
    btn.addEventListener('click', function (event) {
        const submitBtn = document.querySelector('.submit')

        const projName = submitBtn.dataset.key

        const projects = JSON.parse(localStorage.getItem('projects'))

        const index = event.target.dataset.index;

        let objectId = '';

        for (let i = 0; i < projects[projName].length; i++) {
            if (+index === i) {
                objectId = projects[projName][i].id;
                projects[projName].splice(index, 1);
            }
        }

        for (let i = 0; i < projects['Today'].length; i++) {
            if (objectId === projects['Today'][i].id) {
                projects['Today'].splice(i, 1);
            }
        }

        for (let i = 0; i < projects['This week'].length; i++) {
            if (objectId === projects['This week'][i].id) {
                projects['This week'].splice(i, 1);
            }
        }

        localStorage.setItem('projects', JSON.stringify(projects))
        ;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(projName)
    })
}


function editTask(btn) {
    btn.addEventListener('click', function (event) {
        const submitBtn = document.querySelector('.submit')

        const projName = submitBtn.dataset.key

        const dialog = document.querySelector('.details-content')

        const dialogWindow = document.querySelector('.details-dialog')

        const dialogClose = document.querySelector('.close-details')

        const projects = JSON.parse(localStorage.getItem('projects'))

        const index = event.target.dataset.index;

        const taskTitle = document.createElement('p')
        const taskDueDate = document.createElement('p')
        const taskPriority = document.createElement('p')
        const taskDescription = document.createElement('p')

        for (let i = 0; i < projects[projName].length; i++) {
            if (+index === i) {
                taskTitle.textContent = `Title is: ${projects[projName][i].title}`
                taskDueDate.textContent = `Due date is: ${projects[projName][i].duedate}`
                taskPriority.textContent = `Priority is: ${projects[projName][i].priority}`
                taskDescription.textContent = `Description is: ${projects[projName][i].description}`
                dialog.append(taskTitle, taskDueDate, taskPriority, taskDescription)
                dialogWindow.showModal()
            }
        }

        dialogClose.addEventListener('click', function (event){
            dialog.innerHTML = '';
            dialogWindow.close()
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({removeTask, editTask});

/***/ }),

/***/ "./src/logic/createTask.js":
/*!*********************************!*\
  !*** ./src/logic/createTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/logic/task.js");
/* harmony import */ var _generateId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateId */ "./src/logic/generateId.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ "./src/logic/renderTasks.js");






function createTask(projName) {

    const submitBtn = document.querySelector('.submit')

    submitBtn.dataset.key = `${projName}`
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

/***/ }),

/***/ "./src/logic/fillForm.js":
/*!*******************************!*\
  !*** ./src/logic/fillForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fillForm: () => (/* binding */ fillForm)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/logic/task.js");
/* harmony import */ var _generateId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateId */ "./src/logic/generateId.js");
/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcoming */ "./src/logic/upcoming.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTasks */ "./src/logic/renderTasks.js");







function fillForm() {
    function formElements() {
        const inputTitle = document.querySelector('.input-title')
        const inputDate = document.querySelector('.input-date')
        const inputPriority = document.querySelector('.input-priority:checked')
        const inputDescription = document.querySelector('#description')
        return [inputTitle, inputDate, inputPriority, inputDescription]
    }

    document.addEventListener('submit', function (event) {
        event.preventDefault()

        const [inputTitle, inputDate, inputPriority, inputDescription] = formElements()

        const submit = document.querySelector('button[data-key]')

        const projName = submit.dataset.key

        const projects = JSON.parse(localStorage.getItem('projects'))

        const task = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTitle.value, inputDate.value, inputPriority.id, inputDescription.value)

        const dialog = document.querySelector('dialog')

        task.id = (0,_generateId__WEBPACK_IMPORTED_MODULE_1__["default"])();

        projects[projName].push(task);

        localStorage.setItem('projects', JSON.stringify(projects))

        ;(0,_upcoming__WEBPACK_IMPORTED_MODULE_2__.getTodayTasks)()
        ;(0,_upcoming__WEBPACK_IMPORTED_MODULE_2__.getUpcomingTasks)()

        dialog.close()

        ;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_3__["default"])(projName)
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillForm);

/***/ }),

/***/ "./src/logic/generateId.js":
/*!*********************************!*\
  !*** ./src/logic/generateId.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateId: () => (/* binding */ generateId)
/* harmony export */ });


function generateId() {
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }

    function getRandomNumber(){
        return String.fromCharCode(Math.floor(Math.random()* 10) + 48)
    }

    const funcsArr = [getRandomLower, getRandomUpper, getRandomNumber]

    let id = ''
    for (let i = 0; i < 12; i++) {
        const randomChar = funcsArr[Math.floor(Math.random() * funcsArr.length)]
        id += randomChar()
    }
    return id
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateId);

/***/ }),

/***/ "./src/logic/projects.js":
/*!*******************************!*\
  !*** ./src/logic/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });


let projects = {
    Inbox: [],
    Today: [],
    ['This week']: [],
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/logic/renderProjects.js":
/*!*************************************!*\
  !*** ./src/logic/renderProjects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _renderTasksPerProj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasksPerProj */ "./src/logic/renderTasksPerProj.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/logic/createTask.js");






function renderProjects(){

    const projects = JSON.parse(localStorage.getItem('projects'))

    const userProjs = document.querySelector('.user-projs')

    const mainProjects = document.querySelector('.main-proj')

    mainProjects.innerHTML = '';
    userProjs.innerHTML = '';

    for(let key in projects){

        const btns = document.createElement('div')
        const btn = document.createElement('button')

        btn.textContent = key;

        btns.classList.add('btns')
        btns.appendChild(btn)

        if(key === 'Inbox' || key === 'Today' || key === 'This week'){
            mainProjects.appendChild(btns)
        } else {
            userProjs.appendChild(btns)
        }

        (0,_renderTasksPerProj__WEBPACK_IMPORTED_MODULE_0__["default"])(btn)
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);

/***/ }),

/***/ "./src/logic/renderTasks.js":
/*!**********************************!*\
  !*** ./src/logic/renderTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _btnsLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnsLogic */ "./src/logic/btnsLogic.js");





function renderTasks(projName){

    const taskDivs = document.querySelectorAll('.task')

    const tasksDiv = document.querySelector('.tasks')

    const projects = JSON.parse(localStorage.getItem('projects'))

    taskDivs.forEach(div => div.remove())

    for (let i = 0; i < projects[projName].length; i++) {

        const taskTitle = document.createElement('p')
        const taskDiv = document.createElement('div')
        const circle = document.createElement('button')
        const detail = document.createElement('button')

        detail.classList.add('done', 'details')
        detail.innerHTML = 'Details'
        detail.dataset.index = `${i}`

        ;(0,_btnsLogic__WEBPACK_IMPORTED_MODULE_0__.editTask)(detail)

        circle.innerHTML = 'Done'
        circle.classList.add('done')
        circle.dataset.index = `${i}`

        ;(0,_btnsLogic__WEBPACK_IMPORTED_MODULE_0__.removeTask)(circle)

        taskTitle.textContent = projects[projName][i].title

        taskDiv.classList.add('task')
        taskDiv.append(circle, detail, taskTitle)

        tasksDiv.prepend(taskDiv)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTasks);

/***/ }),

/***/ "./src/logic/renderTasksPerProj.js":
/*!*****************************************!*\
  !*** ./src/logic/renderTasksPerProj.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderTasksPerProject: () => (/* binding */ renderTasksPerProject)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/logic/createTask.js");
/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks */ "./src/logic/renderTasks.js");
/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcoming */ "./src/logic/upcoming.js");







function renderTasksPerProject(btn) {

    const projName = document.querySelector('.project-name')

    btn.addEventListener('click', function (event){

        // console.log(btn.textContent)

        projName.textContent = btn.textContent

        ;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(btn.textContent)

        ;(0,_createTask__WEBPACK_IMPORTED_MODULE_0__["default"])(btn.textContent)

        if (btn.textContent === 'Today' || btn.textContent === 'This week'){
            const addTask = document.querySelector('.add-task')
            addTask.style.display = 'none';
        } else {
            const addTask = document.querySelector('.add-task')
            addTask.style.display = 'block';
        }

    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTasksPerProject);

/***/ }),

/***/ "./src/logic/showModal.js":
/*!********************************!*\
  !*** ./src/logic/showModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   showModal: () => (/* binding */ showModal)
/* harmony export */ });


function showModal() {
    const addBtn = document.querySelector('.add-task')
    const cancelBtn = document.querySelector('.cancel')
    const dialog = document.querySelector('dialog')

    addBtn.addEventListener('click', function (event) {
        dialog.showModal()
    })
    cancelBtn.addEventListener('click', function (event) {
        dialog.close()
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);


/***/ }),

/***/ "./src/logic/task.js":
/*!***************************!*\
  !*** ./src/logic/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function Task(title, duedate, priority, description){
    return{
        id: 0,
        title,
        duedate,
        priority,
        description,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/logic/upcoming.js":
/*!*******************************!*\
  !*** ./src/logic/upcoming.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTodayTasks: () => (/* binding */ getTodayTasks),
/* harmony export */   getUpcomingTasks: () => (/* binding */ getUpcomingTasks)
/* harmony export */ });



function getUpcomingTasks(){
    const projects = JSON.parse(localStorage.getItem('projects'))
    for (let key in projects) {
        if (key === 'This week') continue;
        outer: for (let i = 0; i < projects[key].length; i++) {
            const [y, m, d] = projects[key][i].duedate.split('-')
            const todayDate = Date.now()
            const unixDate = new Date().setFullYear(y, m - 1, d)
            const weekInMilliseconds = 1000 * 60 * 60 * 24 * 7
            const difference = unixDate - todayDate
            if (difference >= 0 && weekInMilliseconds >= difference) {
                for (let j = 0; j < projects['This week'].length; j++) {
                    if (projects[key][i].id === projects['This week'][j].id) continue outer;
                }
                projects['This week'].push(projects[key][i])
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        }
    }
}

function getTodayTasks(){
    const projects = JSON.parse(localStorage.getItem('projects'))
    for (let key in projects) {
        if (key === 'Today') continue;
        outer: for (let i = 0; i < projects[key].length; i++) {
            const [y, m, d] = projects[key][i].duedate.split('-')
            const todayDate = Date.now()
            const unixDate = new Date().setFullYear(y, m-1, d)
            const dayInMilliseconds = 1000*60*60*24
            const difference = unixDate - todayDate
            if (difference >= 0 && dayInMilliseconds >= difference){
                for (let j = 0; j < projects['Today'].length; j++) {
                    if(projects[key][i].id === projects['Today'][j].id) continue outer;
                }
                projects['Today'].push(projects[key][i])
                localStorage.setItem('projects', JSON.stringify(projects))
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getTodayTasks, getUpcomingTasks});

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
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _logic_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/projects */ "./src/logic/projects.js");
/* harmony import */ var _logic_addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/addProject */ "./src/logic/addProject.js");
/* harmony import */ var _logic_renderProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/renderProjects */ "./src/logic/renderProjects.js");
/* harmony import */ var _logic_showModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/showModal */ "./src/logic/showModal.js");
/* harmony import */ var _logic_fillForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/fillForm */ "./src/logic/fillForm.js");


// TODO
// 1) Details button ------>
// 2) Done button -------> Done
// 3) Fix Today This week tasks -----> Done
// 4) Fix problem when showing tasks -----> Done
// 5) Make clickable main buttons ----> Done
// 6) Hide button in Today and This week -----> Done








if(!localStorage.getItem('projects')){
    localStorage.setItem('projects', JSON.stringify(_logic_projects__WEBPACK_IMPORTED_MODULE_1__["default"]))
}

(0,_logic_renderProjects__WEBPACK_IMPORTED_MODULE_3__["default"])()

;(0,_logic_showModal__WEBPACK_IMPORTED_MODULE_4__["default"])()

;(0,_logic_addProject__WEBPACK_IMPORTED_MODULE_2__["default"])()

;(0,_logic_fillForm__WEBPACK_IMPORTED_MODULE_5__["default"])()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFP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OztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkI7QUFDYTtBQUNJO0FBQ1E7QUFDVjtBQUNGOztBQUV4QztBQUNBLG9EQUFvRCx1REFBUTtBQUM1RDs7QUFFQSxpRUFBYzs7QUFFZCw2REFBUzs7QUFFVCw4REFBVTs7QUFFViw0REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvYnRuc0xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9maWxsRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3JlbmRlclByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9yZW5kZXJUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvcmVuZGVyVGFza3NQZXJQcm9qLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy9zaG93TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3VwY29taW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciA0ZnI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MkEzNjtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NzVBIDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4uYnRucyA+IGJ1dHRvbiwgLm5ldy1wcm9qID4gYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ3NUE7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGNvbG9yOiAjRjhGOEYyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5zIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3LXByb2ogPiBidXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmV3LXByb2ogPiBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDc1QTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4ubmV3LXByb2oge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhCRTlGRDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNzJBNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjRjhGOEYyO1xufVxuXG4udGFza3Mge1xuICAgIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5uZXctdGFzayB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm5ldy10YXNrID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NzVBIDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjRjhGOEYyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZG9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJEOUI0NjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRldGFpbHMge1xuICAgIGJhY2tncm91bmQ6ICM0OTU2N0U7XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLypkaWFsb2cqL1xuXG5kaWFsb2cge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQ2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNzJBNDtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRpYWxvZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5kaWFsb2ctY29udGVudCA+IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmxhYmVsID4gaW5wdXQgIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlucHV0LXRpdGxlLCAuaW5wdXQtZGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDc1QTtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ucmFkaW9zIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5yYWRpb3MgPiBsYWJlbCA+IGlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGQtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbnRleHRhcmVhIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NzVBO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgY29sb3I6ICNGOEY4RjI7XG59XG5cbi5kaWFsb2ctYnRuc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctYnRucyA+IGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDgwcHg7XG59XG5cbi5zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MEZBN0I7XG59XG5cbi5jYW5jZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjU1NTU7XG59XG5cbi8qZGV0YWlscyBkaWFsb2cqL1xuLmRldGFpbHMtZGlhbG9nIHtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4uZGV0YWlscy1jb250ZW50IHtcbiAgICAvKm1hcmdpbi10b3A6IDEycHg7Ki9cbn1cblxuLmRldGFpbHMtZGlhbG9nID4gYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjRjhGOEYyO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NTU1O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciA0ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQTM2O1xcbiAgICBjb2xvcjogI0Y4RjhGMjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ3NUEgO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uYnRucyA+IGJ1dHRvbiwgLm5ldy1wcm9qID4gYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NzVBO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiAjRjhGOEYyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bnMge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubmV3LXByb2ogPiBidXR0b24ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5ldy1wcm9qID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NzVBO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QkU5RkQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjcyQTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICNGOEY4RjI7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5uZXctdGFzayA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ3NUEgO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI0Y4RjhGMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJEOUI0NjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogI0Y4RjhGMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gICAgYmFja2dyb3VuZDogIzQ5NTY3RTtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKmRpYWxvZyovXFxuXFxuZGlhbG9nIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQ2MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI3MkE0O1xcbiAgICBjb2xvcjogI0Y4RjhGMjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5kaWFsb2ctY29udGVudCA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxubGFiZWwgPiBpbnB1dCAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmlucHV0LXRpdGxlLCAuaW5wdXQtZGF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ3NUE7XFxuICAgIGNvbG9yOiAjRjhGOEYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5yYWRpb3Mge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ucmFkaW9zID4gbGFiZWwgPiBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmFkZC10ZXh0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDc1QTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiAjRjhGOEYyO1xcbn1cXG5cXG4uZGlhbG9nLWJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRpYWxvZy1idG5zID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjRjhGOEYyO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwRkE3QjtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjU1NTU7XFxufVxcblxcbi8qZGV0YWlscyBkaWFsb2cqL1xcbi5kZXRhaWxzLWRpYWxvZyB7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5kZXRhaWxzLWNvbnRlbnQge1xcbiAgICAvKm1hcmdpbi10b3A6IDEycHg7Ki9cXG59XFxuXFxuLmRldGFpbHMtZGlhbG9nID4gYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjRjhGOEYyO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTU1NTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vcmVuZGVyUHJvamVjdHNcIjtcbmltcG9ydCByZW5kZXJUYXNrc1BlclByb2plY3QgZnJvbSBcIi4vcmVuZGVyVGFza3NQZXJQcm9qXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuXG4gICAgY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvaicpXG5cbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otdGl0bGUnKVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXG4gICAgICAgIGlmIChwcm9qVGl0bGUudmFsdWUgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzIScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvalRpdGxlLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ0l0IGNhbnQgYmUgZW1wdHknKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdHNbcHJvalRpdGxlLnZhbHVlXSA9IFtdO1xuXG4gICAgICAgIHByb2pUaXRsZS52YWx1ZSA9ICcnXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuXG4gICAgICAgIHJlbmRlclByb2plY3RzKClcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZW5kZXJUYXNrcyBmcm9tIFwiLi9yZW5kZXJUYXNrc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFzayhidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG5cbiAgICAgICAgY29uc3QgcHJvak5hbWUgPSBzdWJtaXRCdG4uZGF0YXNldC5rZXlcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleDtcblxuICAgICAgICBsZXQgb2JqZWN0SWQgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW3Byb2pOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCtpbmRleCA9PT0gaSkge1xuICAgICAgICAgICAgICAgIG9iamVjdElkID0gcHJvamVjdHNbcHJvak5hbWVdW2ldLmlkO1xuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2pOYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c1snVG9kYXknXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9iamVjdElkID09PSBwcm9qZWN0c1snVG9kYXknXVtpXS5pZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzWydUb2RheSddLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNbJ1RoaXMgd2VlayddLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0SWQgPT09IHByb2plY3RzWydUaGlzIHdlZWsnXVtpXS5pZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzWydUaGlzIHdlZWsnXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgICAgIHJlbmRlclRhc2tzKHByb2pOYW1lKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKGJ0bikge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcblxuICAgICAgICBjb25zdCBwcm9qTmFtZSA9IHN1Ym1pdEJ0bi5kYXRhc2V0LmtleVxuXG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWNvbnRlbnQnKVxuXG4gICAgICAgIGNvbnN0IGRpYWxvZ1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWRpYWxvZycpXG5cbiAgICAgICAgY29uc3QgZGlhbG9nQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZGV0YWlscycpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW3Byb2pOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCtpbmRleCA9PT0gaSkge1xuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZSBpczogJHtwcm9qZWN0c1twcm9qTmFtZV1baV0udGl0bGV9YFxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBkYXRlIGlzOiAke3Byb2plY3RzW3Byb2pOYW1lXVtpXS5kdWVkYXRlfWBcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHkgaXM6ICR7cHJvamVjdHNbcHJvak5hbWVdW2ldLnByaW9yaXR5fWBcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb24gaXM6ICR7cHJvamVjdHNbcHJvak5hbWVdW2ldLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgICAgICAgICBkaWFsb2cuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza0Rlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIGRpYWxvZ1dpbmRvdy5zaG93TW9kYWwoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGlhbG9nQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICAgICAgZGlhbG9nLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZGlhbG9nV2luZG93LmNsb3NlKClcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7cmVtb3ZlVGFzaywgZWRpdFRhc2t9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gXCIuL2dlbmVyYXRlSWRcIjtcbmltcG9ydCByZW5kZXJUYXNrcyBmcm9tIFwiLi9yZW5kZXJUYXNrc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qTmFtZSkge1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG5cbiAgICBzdWJtaXRCdG4uZGF0YXNldC5rZXkgPSBgJHtwcm9qTmFtZX1gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2siLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSBcIi4vZ2VuZXJhdGVJZFwiO1xuaW1wb3J0IHtnZXRUb2RheVRhc2tzLCBnZXRVcGNvbWluZ1Rhc2tzfSBmcm9tIFwiLi91cGNvbWluZ1wiO1xuaW1wb3J0IHJlbmRlclRhc2tzIGZyb20gXCIuL3JlbmRlclRhc2tzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxsRm9ybSgpIHtcbiAgICBmdW5jdGlvbiBmb3JtRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGl0bGUnKVxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZGF0ZScpXG4gICAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcHJpb3JpdHk6Y2hlY2tlZCcpXG4gICAgICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxuICAgICAgICByZXR1cm4gW2lucHV0VGl0bGUsIGlucHV0RGF0ZSwgaW5wdXRQcmlvcml0eSwgaW5wdXREZXNjcmlwdGlvbl1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IFtpbnB1dFRpdGxlLCBpbnB1dERhdGUsIGlucHV0UHJpb3JpdHksIGlucHV0RGVzY3JpcHRpb25dID0gZm9ybUVsZW1lbnRzKClcblxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1rZXldJylcblxuICAgICAgICBjb25zdCBwcm9qTmFtZSA9IHN1Ym1pdC5kYXRhc2V0LmtleVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcblxuICAgICAgICBjb25zdCB0YXNrID0gVGFzayhpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERhdGUudmFsdWUsIGlucHV0UHJpb3JpdHkuaWQsIGlucHV0RGVzY3JpcHRpb24udmFsdWUpXG5cbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJylcblxuICAgICAgICB0YXNrLmlkID0gZ2VuZXJhdGVJZCgpO1xuXG4gICAgICAgIHByb2plY3RzW3Byb2pOYW1lXS5wdXNoKHRhc2spO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcblxuICAgICAgICBnZXRUb2RheVRhc2tzKClcbiAgICAgICAgZ2V0VXBjb21pbmdUYXNrcygpXG5cbiAgICAgICAgZGlhbG9nLmNsb3NlKClcblxuICAgICAgICByZW5kZXJUYXNrcyhwcm9qTmFtZSlcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbGxGb3JtIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVVwcGVyKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNikgKyA2NSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Mb3dlcigpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpICsgOTcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKCl7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogMTApICsgNDgpXG4gICAgfVxuXG4gICAgY29uc3QgZnVuY3NBcnIgPSBbZ2V0UmFuZG9tTG93ZXIsIGdldFJhbmRvbVVwcGVyLCBnZXRSYW5kb21OdW1iZXJdXG5cbiAgICBsZXQgaWQgPSAnJ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBjb25zdCByYW5kb21DaGFyID0gZnVuY3NBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZnVuY3NBcnIubGVuZ3RoKV1cbiAgICAgICAgaWQgKz0gcmFuZG9tQ2hhcigpXG4gICAgfVxuICAgIHJldHVybiBpZFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUlkIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSB7XG4gICAgSW5ib3g6IFtdLFxuICAgIFRvZGF5OiBbXSxcbiAgICBbJ1RoaXMgd2VlayddOiBbXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHMiLCJcInVzZSBzdHJpY3RcIjtcblxuXG5pbXBvcnQgcmVuZGVyVGFza3NQZXJQcm9qZWN0IGZyb20gXCIuL3JlbmRlclRhc2tzUGVyUHJvalwiO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKXtcblxuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcblxuICAgIGNvbnN0IHVzZXJQcm9qcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLXByb2pzJylcblxuICAgIGNvbnN0IG1haW5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXByb2onKVxuXG4gICAgbWFpblByb2plY3RzLmlubmVySFRNTCA9ICcnO1xuICAgIHVzZXJQcm9qcy5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvcihsZXQga2V5IGluIHByb2plY3RzKXtcblxuICAgICAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBrZXk7XG5cbiAgICAgICAgYnRucy5jbGFzc0xpc3QuYWRkKCdidG5zJylcbiAgICAgICAgYnRucy5hcHBlbmRDaGlsZChidG4pXG5cbiAgICAgICAgaWYoa2V5ID09PSAnSW5ib3gnIHx8IGtleSA9PT0gJ1RvZGF5JyB8fCBrZXkgPT09ICdUaGlzIHdlZWsnKXtcbiAgICAgICAgICAgIG1haW5Qcm9qZWN0cy5hcHBlbmRDaGlsZChidG5zKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXNlclByb2pzLmFwcGVuZENoaWxkKGJ0bnMpXG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJUYXNrc1BlclByb2plY3QoYnRuKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQcm9qZWN0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5cbmltcG9ydCB7cmVtb3ZlVGFzaywgZWRpdFRhc2t9IGZyb20gXCIuL2J0bnNMb2dpY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvak5hbWUpe1xuXG4gICAgY29uc3QgdGFza0RpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXG5cbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXG5cbiAgICB0YXNrRGl2cy5mb3JFYWNoKGRpdiA9PiBkaXYucmVtb3ZlKCkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW3Byb2pOYW1lXS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgICAgICBkZXRhaWwuY2xhc3NMaXN0LmFkZCgnZG9uZScsICdkZXRhaWxzJylcbiAgICAgICAgZGV0YWlsLmlubmVySFRNTCA9ICdEZXRhaWxzJ1xuICAgICAgICBkZXRhaWwuZGF0YXNldC5pbmRleCA9IGAke2l9YFxuXG4gICAgICAgIGVkaXRUYXNrKGRldGFpbClcblxuICAgICAgICBjaXJjbGUuaW5uZXJIVE1MID0gJ0RvbmUnXG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdkb25lJylcbiAgICAgICAgY2lyY2xlLmRhdGFzZXQuaW5kZXggPSBgJHtpfWBcblxuICAgICAgICByZW1vdmVUYXNrKGNpcmNsZSlcblxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1twcm9qTmFtZV1baV0udGl0bGVcblxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuICAgICAgICB0YXNrRGl2LmFwcGVuZChjaXJjbGUsIGRldGFpbCwgdGFza1RpdGxlKVxuXG4gICAgICAgIHRhc2tzRGl2LnByZXBlbmQodGFza0RpdilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhc2tzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCByZW5kZXJUYXNrcyBmcm9tIFwiLi9yZW5kZXJUYXNrc1wiO1xuaW1wb3J0IHtnZXRUb2RheVRhc2tzLCBnZXRVcGNvbWluZ1Rhc2tzfSBmcm9tIFwiLi91cGNvbWluZ1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrc1BlclByb2plY3QoYnRuKSB7XG5cbiAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKVxuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhidG4udGV4dENvbnRlbnQpXG5cbiAgICAgICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSBidG4udGV4dENvbnRlbnRcblxuICAgICAgICByZW5kZXJUYXNrcyhidG4udGV4dENvbnRlbnQpXG5cbiAgICAgICAgY3JlYXRlVGFzayhidG4udGV4dENvbnRlbnQpXG5cbiAgICAgICAgaWYgKGJ0bi50ZXh0Q29udGVudCA9PT0gJ1RvZGF5JyB8fCBidG4udGV4dENvbnRlbnQgPT09ICdUaGlzIHdlZWsnKXtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKVxuICAgICAgICAgICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpXG4gICAgICAgICAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYXNrc1BlclByb2plY3QiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKVxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpXG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgfSlcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93TW9kYWxcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayh0aXRsZSwgZHVlZGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKXtcbiAgICByZXR1cm57XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlZGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzayIsIlwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcGNvbWluZ1Rhc2tzKCl7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0cykge1xuICAgICAgICBpZiAoa2V5ID09PSAnVGhpcyB3ZWVrJykgY29udGludWU7XG4gICAgICAgIG91dGVyOiBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFt5LCBtLCBkXSA9IHByb2plY3RzW2tleV1baV0uZHVlZGF0ZS5zcGxpdCgnLScpXG4gICAgICAgICAgICBjb25zdCB0b2RheURhdGUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICBjb25zdCB1bml4RGF0ZSA9IG5ldyBEYXRlKCkuc2V0RnVsbFllYXIoeSwgbSAtIDEsIGQpXG4gICAgICAgICAgICBjb25zdCB3ZWVrSW5NaWxsaXNlY29uZHMgPSAxMDAwICogNjAgKiA2MCAqIDI0ICogN1xuICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHVuaXhEYXRlIC0gdG9kYXlEYXRlXG4gICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA+PSAwICYmIHdlZWtJbk1pbGxpc2Vjb25kcyA+PSBkaWZmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1snVGhpcyB3ZWVrJ10ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RzW2tleV1baV0uaWQgPT09IHByb2plY3RzWydUaGlzIHdlZWsnXVtqXS5pZCkgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RzWydUaGlzIHdlZWsnXS5wdXNoKHByb2plY3RzW2tleV1baV0pXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kYXlUYXNrcygpe1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ1RvZGF5JykgY29udGludWU7XG4gICAgICAgIG91dGVyOiBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFt5LCBtLCBkXSA9IHByb2plY3RzW2tleV1baV0uZHVlZGF0ZS5zcGxpdCgnLScpXG4gICAgICAgICAgICBjb25zdCB0b2RheURhdGUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICBjb25zdCB1bml4RGF0ZSA9IG5ldyBEYXRlKCkuc2V0RnVsbFllYXIoeSwgbS0xLCBkKVxuICAgICAgICAgICAgY29uc3QgZGF5SW5NaWxsaXNlY29uZHMgPSAxMDAwKjYwKjYwKjI0XG4gICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gdW5peERhdGUgLSB0b2RheURhdGVcbiAgICAgICAgICAgIGlmIChkaWZmZXJlbmNlID49IDAgJiYgZGF5SW5NaWxsaXNlY29uZHMgPj0gZGlmZmVyZW5jZSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c1snVG9kYXknXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0c1trZXldW2ldLmlkID09PSBwcm9qZWN0c1snVG9kYXknXVtqXS5pZCkgY29udGludWUgb3V0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3RzWydUb2RheSddLnB1c2gocHJvamVjdHNba2V5XVtpXSlcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtnZXRUb2RheVRhc2tzLCBnZXRVcGNvbWluZ1Rhc2tzfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBUT0RPXG4vLyAxKSBEZXRhaWxzIGJ1dHRvbiAtLS0tLS0+XG4vLyAyKSBEb25lIGJ1dHRvbiAtLS0tLS0tPiBEb25lXG4vLyAzKSBGaXggVG9kYXkgVGhpcyB3ZWVrIHRhc2tzIC0tLS0tPiBEb25lXG4vLyA0KSBGaXggcHJvYmxlbSB3aGVuIHNob3dpbmcgdGFza3MgLS0tLS0+IERvbmVcbi8vIDUpIE1ha2UgY2xpY2thYmxlIG1haW4gYnV0dG9ucyAtLS0tPiBEb25lXG4vLyA2KSBIaWRlIGJ1dHRvbiBpbiBUb2RheSBhbmQgVGhpcyB3ZWVrIC0tLS0tPiBEb25lXG5cbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL2xvZ2ljL3Byb2plY3RzXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9sb2dpYy9hZGRQcm9qZWN0XCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vbG9naWMvcmVuZGVyUHJvamVjdHNcIjtcbmltcG9ydCBzaG93TW9kYWwgZnJvbSBcIi4vbG9naWMvc2hvd01vZGFsXCI7XG5pbXBvcnQgZmlsbEZvcm0gZnJvbSBcIi4vbG9naWMvZmlsbEZvcm1cIjtcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG59XG5cbnJlbmRlclByb2plY3RzKClcblxuc2hvd01vZGFsKClcblxuYWRkUHJvamVjdCgpXG5cbmZpbGxGb3JtKClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
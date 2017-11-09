/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(arg) {

  if (arg instanceof HTMLElement === true) {
    let elArray = [arg];
    return new DOMNodeCollection(elArray);
  }

  return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(elementArray) {
    this.elementArray = elementArray;
  }

  html(str){
    if (str) {
      this.elementArray.forEach( el => {
        el.innerHTML = str;
      });
    } else {
      return this.elementArray[0].innerHTML;
    }
  }

  empty(){
    this.elementArray.forEach( el => {
      el.innerHTML = "";
    });
  }

  append(arg){
    if (arg instanceof DOMNodeCollection) {
      this.elementArray.forEach( el => {
        arg.elementArray.forEach( argEl => {
        el.innerHTML += argEl.outerHTML;
      });
    });
  } else { // an HTML element, or a string
      this.elementArray.forEach(el => {
        el.innerHTML += arg;
      });
    }
  }

  children(){
    let r = [];
    this.elementArray.forEach( el => {
      let childArr = Array.from(el.children);
      r = r.concat(childArr);
    });
    return new DOMNodeCollection(r);
  }

  parent(){
    let r = [];
    this.elementArray.forEach( el => {
      let parentEl = el.parentElement;
      r.push(parentEl);
    });
    return new DOMNodeCollection(r);
  }

  find(selector){
    let r = [];
    this.elementArray.forEach (el => {
      let selectedArr = Array.from(el.querySelectorAll(selector));
      r = r.concat(selectedArr);
    });
    return new DOMNodeCollection(r);
  }

  remove(){
    this.elementArray.forEach( el => {
      el.remove();
    });
    this.elementArray = [];
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);
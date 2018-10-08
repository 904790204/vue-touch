(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction vueTouch(el, binding, type, vnode) {\n\tthis.obj = el;\n\tthis.binding = binding;\n\tthis.touchType = type;\n\tthis.vueTouches = { x: 0, y: 0 };\n\tthis.vueMoves = true;\n\tthis.vueLeave = true;\n\tthis.longTouch = true;\n\tthis.vueCallBack = binding.value;\n\tthis.obj.addEventListener(\"touchstart\", e => {\n\t\tthis.start(e);\n\t}, false);\n\tthis.obj.addEventListener(\"touchend\", e => {\n\t\tthis.end(e);\n\t}, false);\n\tthis.obj.addEventListener(\"touchmove\", e => {\n\t\tthis.move(e);\n\t}, false);\n\tvnode.key = this.randomString();\n};\nvueTouch.prototype = {\n\tstart: function (e) {\n\t\tthis.vueMoves = true;\n\t\tthis.vueLeave = true;\n\t\tthis.longTouch = true;\n\t\tthis.vueTouches = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY };\n\t\tthis.time = setTimeout(function () {\n\t\t\tif (this.vueLeave && this.vueMoves) {\n\t\t\t\tthis.touchType == \"longtap\" && this.vueCallBack();\n\t\t\t\tthis.longTouch = false;\n\t\t\t};\n\t\t}.bind(this), 1000);\n\t},\n\tend: function (e) {\n\t\tvar disX = e.changedTouches[0].pageX - this.vueTouches.x;\n\t\tvar disY = e.changedTouches[0].pageY - this.vueTouches.y;\n\t\tclearTimeout(this.time);\n\t\tif (Math.abs(disX) > 10 || Math.abs(disY) > 100) {\n\t\t\tthis.touchType == \"swipe\" && this.vueCallBack(e);\n\t\t\tif (Math.abs(disX) > Math.abs(disY)) {\n\t\t\t\tif (disX > 10) {\n\t\t\t\t\tthis.touchType == \"swiperight\" && this.vueCallBack(e);\n\t\t\t\t};\n\t\t\t\tif (disX < -10) {\n\t\t\t\t\tthis.touchType == \"swipeleft\" && this.vueCallBack(e);\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\tif (disY > 10) {\n\t\t\t\t\tthis.touchType == \"swipedown\" && this.vueCallBack(e);\n\t\t\t\t};\n\t\t\t\tif (disY < -10) {\n\t\t\t\t\tthis.touchType == \"swipeup\" && this.vueCallBack(e);\n\t\t\t\t};\n\t\t\t};\n\t\t} else {\n\t\t\tif (this.longTouch && this.vueMoves) {\n\t\t\t\tthis.touchType == \"tap\" && this.vueCallBack(e);\n\t\t\t\tthis.vueLeave = false;\n\t\t\t};\n\t\t};\n\t},\n\tmove: function (e) {\n\t\tthis.vueMoves = false;\n\t},\n\trandomString: function () {\n\t\tvar len = 10;\n\t\tvar $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';\n\t\tvar maxPos = $chars.length;\n\t\tvar pwd = '';\n\t\tfor (var i = 0; i < len; i++) {\n\t\t\tpwd += $chars.charAt(Math.floor(Math.random() * maxPos));\n\t\t}\n\t\treturn pwd;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tinstall: function (Vue, options) {\n\t\tVue.directive(\"tap\", {\n\t\t\tbind: function (el, binding, vnode) {\n\t\t\t\tnew vueTouch(el, binding, \"tap\", vnode);\n\t\t\t}\n\t\t});\n\t\tVue.directive(\"swipe\", {\n\t\t\tbind: function (el, binding, vnode) {\n\t\t\t\tnew vueTouch(el, binding, \"swipe\", vnode);\n\t\t\t}\n\t\t});\n\t\tVue.directive(\"swipeleft\", {\n\t\t\tbind: function (el, binding, vnode) {\n\t\t\t\tnew vueTouch(el, binding, \"swipeleft\", vnode);\n\t\t\t}\n\t\t});\n\t\tVue.directive(\"swiperight\", {\n\t\t\tbind: function (el, binding, vnode) {\n\t\t\t\tnew vueTouch(el, binding, \"swiperight\", vnode);\n\t\t\t}\n\t\t});\n\t\tVue.directive(\"swipedown\", {\n\t\t\tbind: function (el, binding, vnode) {\n\t\t\t\tnew vueTouch(el, binding, \"swipedown\", vnode);\n\t\t\t}\n\t\t});\n\t\tVue.directive(\"swipeup\", {\n\t\t\tbind: function (el, binding, vnode) {\n\t\t\t\tnew vueTouch(el, binding, \"swipeup\", vnode);\n\t\t\t}\n\t\t});\n\t\tVue.directive(\"longtap\", {\n\t\t\tbind: function (el, binding, vnode) {\n\t\t\t\tnew vueTouch(el, binding, \"longtap\", vnode);\n\t\t\t}\n\t\t});\n\t}\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
});
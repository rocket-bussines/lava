/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  if (window.screen.width < 1050) {
    var close = document.querySelector("#close");
    var header = document.querySelector(".header");
    var hamb = document.querySelector(".header__hamb");
    var headerM = document.querySelector(".header__mobile");
    if (close && header && hamb && headerM) {
      document.addEventListener("click", function (e) {
        if (e.target == close || close.contains(e.target)) {
          header.classList.remove("active");
          headerM.classList.remove("hiden");
        } else if (e.target == hamb || hamb.contains(e.target)) {
          headerM.classList.add("hiden");
          header.classList.add("active");
        } else if (header.classList.contains("active") && e.target !== header && !header.contains(e.target)) {
          header.classList.remove("active");
          headerM.classList.remove("hiden");
        }
      });
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/language-swither/language-swither.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/language-swither/language-swither.js ***!
  \*****************************************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  if (window.screen.width >= 1050) {
    var elem = document.querySelector("#language-swither");
    if (elem) {
      var li = elem.querySelectorAll("li");
      if (li) {
        elem.addEventListener("mouseenter", function () {
          li.forEach(function (item) {
            if (!item.getAttribute("data-active")) {
              item.setAttribute("data-active", "");
            }
          });
        });
        elem.addEventListener("mouseleave", function () {
          li.forEach(function (item) {
            if (!item.getAttribute("data-active")) {
              item.removeAttribute("data-active");
            }
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var recomend = document.querySelector(".main__video-block");
  var recomendBtn = document.querySelector(".main__video-block-more");
  if (recomend && recomendBtn) {
    recomendBtn.addEventListener("click", function () {
      recomend.classList.toggle("active");
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/rating/rating.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/rating/rating.js ***!
  \*********************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var ratingItems = document.querySelectorAll(".rating");
  if (ratingItems) {
    ratingItems.forEach(function (item) {
      var num = item.textContent;
      if (num >= 7) {
        item.classList.add("rating_green");
      }
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/recomend/__list/recomend__list.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/recomend/__list/recomend__list.js ***!
  \**************************************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  if (window.screen.width >= 1500) {
    var recomendParent = document.querySelector(".recomend__list");
    var recomendListItem = document.querySelectorAll(".recomend__list-item");
    if (recomendListItem && recomendParent) {
      recomendParent.addEventListener("click", function (e) {
        var item = e.target;
        if (item.classList.contains("recomend__list-item")) {
          recomendListItem.forEach(function (item) {
            item.classList.remove("active");
          });
          item.classList.add("active");
        }
      });
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/simple/simple.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/simple/simple.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_language_swither_language_swither__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/language-swither/language-swither */ "./src/blocks/modules/language-swither/language-swither.js");
/* harmony import */ var _modules_language_swither_language_swither__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_language_swither_language_swither__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_recomend_list_recomend_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/recomend/__list/recomend__list */ "./src/blocks/modules/recomend/__list/recomend__list.js");
/* harmony import */ var _modules_recomend_list_recomend_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_recomend_list_recomend_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_simple_simple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/simple/simple */ "./src/blocks/modules/simple/simple.js");
/* harmony import */ var _modules_rating_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/rating/rating */ "./src/blocks/modules/rating/rating.js");
/* harmony import */ var _modules_rating_rating__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_rating_rating__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
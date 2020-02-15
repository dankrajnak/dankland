exports.ids = [15];
exports.modules = {

/***/ "/tOb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet", function() { return greet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_alert_193beaed88f01901", function() { return __wbg_alert_193beaed88f01901; });
/* harmony import */ var _fluid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MhiM");

const lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__("jK02").TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _fluid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "b"].buffer) {
    cachegetUint8Memory0 = new Uint8Array(_fluid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* memory */ "b"].buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/


function greet() {
  _fluid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[/* greet */ "a"]();
}
const __wbg_alert_193beaed88f01901 = function (arg0, arg1) {
  alert(getStringFromWasm0(arg0, arg1));
};

/***/ }),

/***/ "MhiM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];

// export exports from WebAssembly module
module.exports = wasmExports;
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__("/tOb");


// exec wasm module
wasmExports["c"]()

/***/ })

};;
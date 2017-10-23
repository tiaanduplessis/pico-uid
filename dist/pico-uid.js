(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.picoUid = factory());
}(this, (function () { 'use strict';

var BASE64_CHARS =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

function uid (len, radix) {
  if ( len === void 0 ) len = 16;
  if ( radix === void 0 ) radix = 64;

  var id = [];
  for (var i = 0; i < len; i++) {
    id[i] = BASE64_CHARS[Math.floor(Math.random() * radix)];
  }
  return id.join('')
}

return uid;

})));

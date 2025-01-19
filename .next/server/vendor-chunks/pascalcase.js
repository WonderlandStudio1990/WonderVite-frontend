/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pascalcase";
exports.ids = ["vendor-chunks/pascalcase"];
exports.modules = {

/***/ "(ssr)/./node_modules/pascalcase/index.js":
/*!******************************************!*\
  !*** ./node_modules/pascalcase/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/*!\n * pascalcase <https://github.com/jonschlinkert/pascalcase>\n *\n * Copyright (c) 2015-present, Jon (\"Schlink\") Schlinkert.\n * Licensed under the MIT License.\n */\n\nconst titlecase = input => input[0].toLocaleUpperCase() + input.slice(1);\n\nmodule.exports = value => {\n  if (value === null || value === void 0) return '';\n  if (typeof value.toString !== 'function') return '';\n\n  let input = value.toString().trim();\n  if (input === '') return '';\n  if (input.length === 1) return input.toLocaleUpperCase();\n\n  let match = input.match(/[a-zA-Z0-9]+/g);\n  if (match) {\n    return match.map(m => titlecase(m)).join('');\n  }\n\n  return input;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFzY2FsY2FzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvd29uZGVybGFuZG1pdGNoL0Nhc2NhZGVQcm9qZWN0cy9Xb25kZXJWaXRlLWZyb250ZW5kL25vZGVfbW9kdWxlcy9wYXNjYWxjYXNlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogcGFzY2FsY2FzZSA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvcGFzY2FsY2FzZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgSm9uIChcIlNjaGxpbmtcIikgU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5jb25zdCB0aXRsZWNhc2UgPSBpbnB1dCA9PiBpbnB1dFswXS50b0xvY2FsZVVwcGVyQ2FzZSgpICsgaW5wdXQuc2xpY2UoMSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4ge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gJyc7XG5cbiAgbGV0IGlucHV0ID0gdmFsdWUudG9TdHJpbmcoKS50cmltKCk7XG4gIGlmIChpbnB1dCA9PT0gJycpIHJldHVybiAnJztcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGlucHV0LnRvTG9jYWxlVXBwZXJDYXNlKCk7XG5cbiAgbGV0IG1hdGNoID0gaW5wdXQubWF0Y2goL1thLXpBLVowLTldKy9nKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoLm1hcChtID0+IHRpdGxlY2FzZShtKSkuam9pbignJyk7XG4gIH1cblxuICByZXR1cm4gaW5wdXQ7XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pascalcase/index.js\n");

/***/ })

};
;
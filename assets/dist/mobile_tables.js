/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/mobile_tables.js":
/*!************************************!*\
  !*** ./assets/js/mobile_tables.js ***!
  \************************************/
/***/ (() => {

eval("(function ($, Drupal) {\n\n  Drupal.behaviors.mobile_tables = {\n    attach: function (context, settings) {\n      once('initControlTable', $('.body.field-item table:not(.tablesaw), .field-body table:not(.tablesaw)')).forEach(function (table) {\n\n        table.outerHTML = '<div class=\"wrapper-table\">' +\n          '<div class=\"control-table\">' +\n          '<div class=\"prevButton\"><span></span></div>' +\n          '<div class=\"body-control\"></div>' +\n          '<div class=\"nextButton\"><span></span></div>' +\n          '</div>' +\n          '<div class=\"table-content\">' + table.outerHTML + '</div>' +\n          '</div>';\n      });\n\n      once('controlTable', $('.body.field-item .wrapper-table, .field-body .wrapper-table')).forEach(function (wrapperTable) {\n        const prevButton = wrapperTable.querySelector('.prevButton');\n        const nextButton = wrapperTable.querySelector('.nextButton');\n        const tableContent = wrapperTable.querySelector('.table-content');\n        const table = wrapperTable.querySelector('table');\n        const control = wrapperTable.querySelector('.control-table');\n        const columns = [...tableContent.querySelectorAll('tr:nth-child(1) > td')];\n\n\n        initButton(table, tableContent, prevButton, nextButton, control);\n        tableContent.addEventListener('scroll', () => {\n          initButton(table, tableContent, prevButton, nextButton, control);\n        });\n        window.addEventListener('resize', () => {\n          initButton(table, tableContent, prevButton, nextButton, control);\n        });\n\n        nextButton.addEventListener('click', () => {\n          let scroll = 0;\n          columns.some(column => {\n            scroll += column.offsetWidth;\n            if (scroll > tableContent.scrollLeft) {\n              $(tableContent).animate({\n                  scrollLeft: scroll\n                },\n                300);\n              return true;\n            }\n          });\n        });\n\n        prevButton.addEventListener('click', (event) => {\n          let scroll = 0;\n          columns.some(column => {\n            if (scroll + column.offsetWidth >= tableContent.scrollLeft) {\n              $(tableContent).animate({\n                  scrollLeft: scroll\n                },\n                300);\n              return true;\n            }\n            scroll += column.offsetWidth;\n          });\n        });\n      });\n\n      function initButton(table, tableContent, prevButton, nextButton, control) {\n\n        if (tableContent.offsetWidth === table.offsetWidth) {\n          control.classList.add('d-none');\n        }\n        else {\n          control.classList.remove('d-none');\n        }\n\n        if (tableContent.scrollLeft === 0) {\n          prevButton.classList.add('disabled');\n        }\n        else {\n          prevButton.classList.remove('disabled');\n        }\n\n        if (tableContent.offsetWidth + tableContent.scrollLeft === table.offsetWidth) {\n          nextButton.classList.add('disabled');\n        }\n        else {\n          nextButton.classList.remove('disabled');\n        }\n      }\n    }\n  };\n\n})(jQuery, Drupal);\n\n\n//# sourceURL=webpack://y-lb/./assets/js/mobile_tables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/mobile_tables.js"]();
/******/ 	
/******/ })()
;
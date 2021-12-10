(function() {
var exports = {};
exports.id = "pages/product/[Product_id]";
exports.ids = ["pages/product/[Product_id]"];
exports.modules = {

/***/ "./pages/product/[Product_id].js":
/*!***************************************!*\
  !*** ./pages/product/[Product_id].js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Components/Header */ "./src/Components/Header/Header.js");
/* harmony import */ var _src_Components_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Components/Rating */ "./src/Components/Rating/Rating.js");
/* harmony import */ var _src_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/products */ "./src/products.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\umair\\OneDrive\\Documents\\ecommerce_mern\\pages\\product\\[Product_id].js";










const ProductScreen = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    Product_id
  } = router.query;
  const product = "Hey";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Product Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn btn-dark my-3",
        children: "Go Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
        md: 6,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Image, {
          src: product.image,
          alt: product.name,
          fluid: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
        md: 3,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroup, {
          variant: "flush",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroupItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroupItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Components_Rating__WEBPACK_IMPORTED_MODULE_5__.default, {
            value: product.rating,
            text: `${product.numReviews} reviews`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroupItem, {
          children: ["Price: $", product.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroupItem, {
          children: ["Description: ", product.description]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
        md: 3,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Card, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroup, {
            variant: "flush",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroup.Item, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
                  children: "Price:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                    children: ["$", product.price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroup.Item, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
                  children: "Status:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {
                  children: product.countInStock > 0 ? "In Stock" : "Out Of Stock"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.ListGroup.Item, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {
                className: "btn-block",
                type: "button",
                disabled: product.countInStock === 0,
                children: "Add To Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductScreen);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_Components_Header_Header_js-src_Components_Rating_Rating_js-src_products_js"], function() { return __webpack_exec__("./pages/product/[Product_id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2VfbmV4dC8uL3BhZ2VzL3Byb2R1Y3QvW1Byb2R1Y3RfaWRdLmpzIiwid2VicGFjazovL2Vjb21tZXJjZV9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Vjb21tZXJjZV9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Vjb21tZXJjZV9uZXh0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlX25leHQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Vjb21tZXJjZV9uZXh0L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2Vjb21tZXJjZV9uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9lY29tbWVyY2VfbmV4dC9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovL2Vjb21tZXJjZV9uZXh0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9lY29tbWVyY2VfbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlByb2R1Y3RTY3JlZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0X2lkIiwicXVlcnkiLCJwcm9kdWN0IiwibmFtZSIsImltYWdlIiwicmF0aW5nIiwibnVtUmV2aWV3cyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjb3VudEluU3RvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBOztBQUNBLE1BQU1BLGFBQWEs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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELGVBRUMsOERBQUMsZ0RBQUQ7QUFBQSw0QkFDRUwsT0FBTyxDQUFDTyxZQUFSLEdBQXVCLENBQXZCLEdBQ0UsVUFERixHQUVFO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRELGVBbUJDLDhEQUFDLDJEQUFEO0FBQUEscUNBQ0MsOERBQUMsbURBQUQ7QUFDQyx5QkFBUyxFQUFDLFdBRFg7QUFFQyxvQkFBSSxFQUFDLFFBRk47QUFHQyx3QkFBUSxFQUFFUCxPQUFPLENBQUNPLFlBQVIsS0FBeUIsQ0FIcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZEO0FBQUEsa0JBREQ7QUFvRUEsQ0F4RUQ7O0FBMEVBLCtEQUFlWixhQUFmLEU7Ozs7Ozs7Ozs7O0FDM0ZBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW1Byb2R1Y3RfaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vc3JjL0NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSBcIi4uLy4uL3NyYy9Db21wb25lbnRzL1JhdGluZ1wiO1xyXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL3NyYy9wcm9kdWN0c1wiO1xyXG5pbXBvcnQge1xyXG5cdFJvdyxcclxuXHRDb2wsXHJcblx0SW1hZ2UsXHJcblx0TGlzdEdyb3VwLFxyXG5cdEJ1dHRvbixcclxuXHRMaXN0R3JvdXBJdGVtLFxyXG5cdENhcmQsXHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5jb25zdCBQcm9kdWN0U2NyZWVuID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgUHJvZHVjdF9pZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cdGNvbnN0IHByb2R1Y3QgPSBcIkhleVwiO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e3Byb2R1Y3QubmFtZX08L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQcm9kdWN0IFBhZ2VcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgbXktM1wiPkdvIEJhY2s8L2Rpdj5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8Um93PlxyXG5cdFx0XHRcdDxDb2wgbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0PEltYWdlIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IGZsdWlkIC8+XHJcblx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PENvbCBtZD17M30+XHJcblx0XHRcdFx0XHQ8TGlzdEdyb3VwIHZhcmlhbnQ9XCJmbHVzaFwiPlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEdyb3VwSXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+e3Byb2R1Y3QubmFtZX08L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RHcm91cEl0ZW0+XHJcblx0XHRcdFx0XHQ8L0xpc3RHcm91cD5cclxuXHRcdFx0XHRcdDxMaXN0R3JvdXBJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8UmF0aW5nXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb2R1Y3QucmF0aW5nfVxyXG5cdFx0XHRcdFx0XHRcdHRleHQ9e2Ake3Byb2R1Y3QubnVtUmV2aWV3c30gcmV2aWV3c2B9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0xpc3RHcm91cEl0ZW0+XHJcblx0XHRcdFx0XHQ8TGlzdEdyb3VwSXRlbT5QcmljZTogJHtwcm9kdWN0LnByaWNlfTwvTGlzdEdyb3VwSXRlbT5cclxuXHRcdFx0XHRcdDxMaXN0R3JvdXBJdGVtPlxyXG5cdFx0XHRcdFx0XHREZXNjcmlwdGlvbjoge3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHQ8L0xpc3RHcm91cEl0ZW0+XHJcblx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PENvbCBtZD17M30+XHJcblx0XHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdFx0PExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEdyb3VwLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sPlByaWNlOjwvQ29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+JHtwcm9kdWN0LnByaWNlfTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEdyb3VwLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PExpc3RHcm91cC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbD5TdGF0dXM6PC9Db2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuY291bnRJblN0b2NrID4gMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBcIkluIFN0b2NrXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJPdXQgT2YgU3RvY2tcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpc3RHcm91cC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0R3JvdXAuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuLWJsb2NrXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtwcm9kdWN0LmNvdW50SW5TdG9jayA9PT0gMH1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QWRkIFRvIENhcnRcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEdyb3VwLkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGlzdEdyb3VwPlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHQ8L1Jvdz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U2NyZWVuO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
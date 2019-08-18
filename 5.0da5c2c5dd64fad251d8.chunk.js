(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(388);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(111)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// Module
exports.push([module.i, ".Header__wrapper___3AwTG {\n  margin-top: 40px;\n  padding-bottom: 20px;\n}\n.Header__list___1zdX4 {\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  list-style: none;\n}\n.Header__picture___nVYve {\n  display: block;\n  height: 60px;\n  margin: auto 10px;\n}\n.Header__item___Qj3q7 {\n  margin-right: 10px;\n  font-family: sans-serif;\n  font-weight: 700;\n  color: #a3a3a3;\n  cursor: pointer;\n}\n.Header__item___Qj3q7:last-child {\n  position: relative;\n  margin-left: auto;\n}\n.Header__link___3qu-v {\n  color: inherit;\n  font-size: 22px;\n  text-decoration: none;\n  padding: 5px 10px;\n}\n.Header__active___2kEIa {\n  color: rgb(40, 172, 40);\n}\n.Header__amount___1_Xbg {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: 55%;\n  left: 64%;\n  height: 26px;\n  width: 26px;\n  border-radius: 50%;\n  border: none;\n  color: #ffffff;\n  font-size: 16px;\n  background-color: red;\n}", ""]);

// Exports
exports.locals = {
	"wrapper": "Header__wrapper___3AwTG",
	"list": "Header__list___1zdX4",
	"picture": "Header__picture___nVYve",
	"item": "Header__item___Qj3q7",
	"link": "Header__link___3qu-v",
	"active": "Header__active___2kEIa",
	"amount": "Header__amount___1_Xbg"
};

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/logo.png";

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/basket.png";

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(384);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(387);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(389);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_basket_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(390);
/* harmony import */ var _assets_basket_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_basket_png__WEBPACK_IMPORTED_MODULE_7__);









var mapStateToProps = function mapStateToProps(state) {
  return {
    basket: state.basket
  };
};

var Header = function Header(_ref) {
  var basket = _ref.basket;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.list
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* NavLink */ "c"], {
    exact: true,
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.picture,
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "no img"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* NavLink */ "c"], {
    exact: true,
    to: "/catalog",
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.link,
    activeClassName: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.active
  }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* NavLink */ "c"], {
    exact: true,
    to: "/basket",
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.link,
    activeClassName: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.active
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.picture,
    src: _assets_basket_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "no img"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_5___default.a.amount
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* getAllAmount */ "a"])(basket))))));
};

Header.propTypes = {
  basket: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* connect */ "b"])(mapStateToProps)(Header));

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(386);

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

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// Module
exports.push([module.i, ".Footer__wrapper___21uVV {\n  margin-top: 50px; \n  padding-bottom: 30px; \n  display: flex;\n  justify-content: center;\n}\n\n.Footer__information___2jhT6 {\n  padding: 10px;\n  text-align: center;\n}", ""]);

// Exports
exports.locals = {
	"wrapper": "Footer__wrapper___21uVV",
	"information": "Footer__information___2jhT6"
};

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(394);

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

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// Module
exports.push([module.i, ".Item__wrapper___1Mem6 {\n  margin-top: 50px;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.Item__img___1UoLi {\n  display: block;\n  height: 400px;\n  margin: auto 10px;\n}\n.Item__information___23a7Q {\n  font-size: 18px;\n  width: 60%;\n  margin-top: 10px; \n  margin-left: 50px;\n}\n\n.Item__element___1BWQQ {\n  padding-bottom: 30px;\n  line-height: 1.8;  \n}\n.Item__element___1BWQQ:first-child {\n  color: rgb(95, 94, 94);\n}\n.Item__add___3rwYP {\n  padding: 15px;\n  cursor: pointer;\n  background-color: rgb(233, 2, 2);\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  width: 200px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 18px;\n}\n.Item__gotobasket___2myUs {\n  display: block;\n  text-decoration: none;\n  width: 160px;\n  text-align: center;\n  background-color: rgb(6, 129, 6);\n}\n\n@media screen and (max-width: 480px) {\n  .Item__wrapper___1Mem6 {\n    justify-content: center;\n  }\n  .Item__information___23a7Q {\n    margin-top: 15px;\n    width: 100%;\n  }\n}", ""]);

// Exports
exports.locals = {
	"wrapper": "Item__wrapper___1Mem6",
	"img": "Item__img___1UoLi",
	"information": "Item__information___23a7Q",
	"element": "Item__element___1BWQQ",
	"add": "Item__add___3rwYP",
	"gotobasket": "Item__gotobasket___2myUs"
};

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(385);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(114);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(383);
/* harmony import */ var _Item_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(393);
/* harmony import */ var _Item_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Item_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-undef */









var actionCreators = {
  addGood: _actions__WEBPACK_IMPORTED_MODULE_8__[/* addGood */ "a"]
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    basket: state.basket
  };
};

var Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Item).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getItem",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var id, item;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                fetchingState: 'requested'
              });

              id = _this.props.match.params.id;
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://webmastered.ru/app/json-server/index.php?id=".concat(id));

            case 5:
              item = _context.sent;

              _this.setState({
                item: item.data,
                fetchingState: 'finished'
              });

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);

              _this.setState({
                fetchingState: 'failed'
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleAddGoodToBasket", function () {
      var addGood = _this.props.addGood;
      var item = _this.state.item;

      var updateItem = _objectSpread({
        amount: 1
      }, item);

      addGood({
        item: updateItem
      });
    });

    _this.state = {
      item: {},
      fetchingState: 'none'
    };
    return _this;
  }

  _createClass(Item, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItem();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          fetchingState = _this$state.fetchingState,
          item = _this$state.item;
      var name = item.name,
          img = item.img,
          price = item.price,
          description = item.description,
          id = item.id;
      var basket = this.props.basket;

      if (fetchingState === 'requested') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null);
      }

      if (fetchingState === 'failed') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Reload the page please");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: img,
        alt: "no img"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.information
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.element
      }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.element
      }, "".concat(price, " RUB")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.element
      }, description), basket.some(function (g) {
        return g.id === id;
      }) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ "c"], {
        to: "/basket",
        className: "".concat(_Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.add, " ").concat(_Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.gotobasket)
      }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: _Item_css__WEBPACK_IMPORTED_MODULE_7___default.a.add,
        onClick: this.handleAddGoodToBasket
      }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Item.propTypes = {
  basket: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  addGood: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, actionCreators)(Item));

/***/ })

}]);
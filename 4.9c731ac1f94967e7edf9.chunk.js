(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(392);

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

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// Module
exports.push([module.i, ".Catalog__wrapper___3GsmR {\n  margin-top: 20px; \n}\n.Catalog__text___cZtB6 {\n  padding: 12px 17px;\n  font-size: 16px;\n  width: 300px;\n  border: 1px solid  #DDDDDD;\n}\n\n.Catalog__goods___1EHfO {\n  margin-top: 20px;\n}\n.Catalog__list___21Lrn {\n  margin: 0px;\n  padding: 0px;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.Catalog__element___1uJ_A {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 200px;\n  margin: 10px 0;\n  padding: 20px;\n  flex-wrap: wrap;\n}\n.Catalog__element___1uJ_A:hover {\n  box-shadow: 0 10px 12px -8px green;\n}\n\n.Catalog__name___2n2h2 {\n  display: block;\n  padding: 10px;\n  text-align: center;\n}\n.Catalog__picture___1lIsE {\n  display: block;\n  height: 200px;\n  margin: 10px auto;\n}\n.Catalog__price___2AikA {\n  display: block;\n  padding: 10px;\n  text-align: center;\n}\n\n.Catalog__link___3UXPD {\n  color: inherit;\n  text-decoration: none;\n  text-align: inherit;\n}\n\n@media screen and (max-width: 480px) {\n  .Catalog__list___21Lrn {\n    justify-content: center;\n  }\n  .Catalog__text___cZtB6 {\n    display: block;\n    margin: 0 auto;\n  }\n}", ""]);

// Exports
exports.locals = {
	"wrapper": "Catalog__wrapper___3GsmR",
	"text": "Catalog__text___cZtB6",
	"goods": "Catalog__goods___1EHfO",
	"list": "Catalog__list___21Lrn",
	"element": "Catalog__element___1uJ_A",
	"name": "Catalog__name___2n2h2",
	"picture": "Catalog__picture___1lIsE",
	"price": "Catalog__price___2AikA",
	"link": "Catalog__link___3UXPD"
};

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(385);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _Catalog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(391);
/* harmony import */ var _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Catalog_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(114);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(383);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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









var getFilteredList = function getFilteredList(arr, text) {
  return arr.filter(function (_ref) {
    var name = _ref.name;
    var parseName = name.toLowerCase().split(' ').filter(function (substr) {
      return substr.indexOf(text.toLowerCase()) === 0;
    });
    return parseName.length !== 0;
  });
};

var Catalog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Catalog, _React$Component);

  function Catalog(props) {
    var _this;

    _classCallCheck(this, Catalog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Catalog).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getItems",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var items;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                fetchingState: 'requested'
              });

              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://webmastered.ru/app/json-server/index.php');

            case 4:
              items = _context.sent;

              _this.setState({
                items: items.data,
                fetchingState: 'finished'
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              _this.setState({
                fetchingState: 'failed'
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState({
        texInput: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderList", function () {
      var _this$state = _this.state,
          items = _this$state.items,
          texInput = _this$state.texInput;
      var filteredItems = getFilteredList(items, texInput);

      if (filteredItems.length === 0) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.list
      }, filteredItems.map(function (_ref3) {
        var id = _ref3.id,
            name = _ref3.name,
            img = _ref3.img,
            price = _ref3.price;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.element,
          key: id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "b"], {
          to: "/catalog/".concat(id),
          key: id,
          className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.link
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.name
        }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.picture,
          src: img,
          alt: "no img"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.price
        }, "".concat(price, " RUB"))));
      }));
    });

    _this.state = {
      items: [],
      texInput: '',
      fetchingState: 'none'
    };
    return _this;
  }

  _createClass(Catalog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItems();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          fetchingState = _this$state2.fetchingState,
          texInput = _this$state2.texInput;

      if (fetchingState === 'requested') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null);
      }

      if (fetchingState === 'failed') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Reload the page please");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0438\u0442\u0430\u0440\u044B",
        value: texInput,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Catalog_css__WEBPACK_IMPORTED_MODULE_4___default.a.goods
      }, this.renderList())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null));
    }
  }]);

  return Catalog;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ })

}]);
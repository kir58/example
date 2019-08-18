(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(396);

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

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// Module
exports.push([module.i, ".Home__wrapper___lYzOh {\n  margin-top: 20px;\n}", ""]);

// Exports
exports.locals = {
	"wrapper": "Home__wrapper___lYzOh"
};

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(401);

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

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// Module
exports.push([module.i, "\n.Slider__slider___2Q2B5 {\n  position: relative;\n  margin: 0 auto;\n  height: 500px;\n  width: 100%;\n  background: rgb(0, 0, 0);\n  overflow: hidden;\n}\n.Slider__images___2JG4N {\n  display: none;\n  position: absolute;\n  white-space: nowrap;\n  height: 100%;\n  margin: 0 auto;\n  \n}\n.Slider__active___3_5MM {\n  display: block;\n  transition:  1s ease;\n}\n.Slider__next___2tJe7 {\n  display: block;\n  opacity: 0;\n\t-moz-transform: scale(0.6);\n    -ms-transform: scale(0.6);\n    -webkit-transform: scale(0.6);\n    -o-transform: scale(0.6);\n  transform: scale(0.6);\n  transition-delay: 0.5s;\n\t\n}\n.Slider__prev___18B6m {\n  display: block;\n  opacity: 0;\n\t-moz-transform: scale(0.6);\n    -ms-transform: scale(0.6);\n    -webkit-transform: scale(0.6);\n    -o-transform: scale(0.6);\n\ttransform: scale(0.6);\n}\n.Slider__img___3j2Jd {\n  width: 100%;\n  height: 100%;\n}\n\n.Slider__arrow___3C7Q1 {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  top: calc(50% - 20px);\n  border:none;\n  border-radius: 50%;\n  background-color: rgb(0, 0, 0);\n  opacity: 0.8;\n  outline: none;\n \n}\n\n.Slider__arrow___3C7Q1::before {\n  content: \"\";\n  border: none;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-left: 5px solid rgb(255, 255, 255);\n  border-bottom: 5px solid rgb(255, 255, 255);\n  outline: none;\n  background: none;\n  cursor: pointer;\n}\n.Slider__arrow___3C7Q1.Slider__leftArrow___3SDN5::before  {\n  transform: rotate(45deg);\n  margin-left: calc(50% - 8px);\n}\n.Slider__arrow___3C7Q1.Slider__rightArrow___2H9QM::before {\n  transform: rotate(225deg);\n  margin-left: calc(50% - 18px);\n}\n.Slider__arrow___3C7Q1:hover {\n  opacity: 1;\n}\n\n.Slider__leftArrow___3SDN5 {\n  left: 5%;\n}\n\n.Slider__rightArrow___2H9QM{\n  right: 5%;\n}\n\n.Slider__radios___DXEuE {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 90%;\n  background-color: rgb(0, 0, 0);\n  opacity: 0.8; \n  width: 100%;\n  height: 10%;\n}\n.Slider__radioWraper___Ouy2H {\n  margin-left: 10px; \n}\n.Slider__radio___3vAbb {\n  display: none;\n}\n.Slider__radio___3vAbb:checked + .Slider__radioLabel___3LXEP::after {\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  opacity: 1 !important;\n  background: black\n}\n.Slider__radioLabel___3LXEP {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: rgb(197, 184, 184);\n}\n\n@media screen and (max-width: 480px) {\n  .Slider__slider___2Q2B5 {\n    height: 200px;\n  }\n  .Slider__arrow___3C7Q1 {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .Slider__arrow___3C7Q1::before {\n    width: 10px;\n    height: 10px;\n    border-left: 2px solid rgb(255, 255, 255);\n    border-bottom: 2px solid rgb(255, 255, 255);\n  }\n\n  .Slider__arrow___3C7Q1.Slider__leftArrow___3SDN5::before  {\n    margin-left: calc(50% - 4px);\n  }\n\n  .Slider__arrow___3C7Q1.Slider__rightArrow___2H9QM::before {\n    margin-left: calc(50% - 10px);\n  }\n\n  .Slider__radio___3vAbb:checked + .Slider__radioLabel___3LXEP::after {\n    width: 9px;\n    height: 9px;\n  }\n  .Slider__radioLabel___3LXEP {\n    width: 15px;\n    height: 15px;\n  }\n}", ""]);

// Exports
exports.locals = {
	"slider": "Slider__slider___2Q2B5",
	"images": "Slider__images___2JG4N",
	"active": "Slider__active___3_5MM",
	"next": "Slider__next___2tJe7",
	"prev": "Slider__prev___18B6m",
	"img": "Slider__img___3j2Jd",
	"arrow": "Slider__arrow___3C7Q1",
	"leftArrow": "Slider__leftArrow___3SDN5",
	"rightArrow": "Slider__rightArrow___2H9QM",
	"radios": "Slider__radios___DXEuE",
	"radioWraper": "Slider__radioWraper___Ouy2H",
	"radio": "Slider__radio___3vAbb",
	"radioLabel": "Slider__radioLabel___3LXEP"
};

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/Home/Home.css
var Home = __webpack_require__(395);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(397);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(31);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(398);

// EXTERNAL MODULE: ./src/components/Slider/Slider.css
var Slider_Slider = __webpack_require__(400);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_Slider);

// CONCATENATED MODULE: ./src/components/Slider/Slider.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-for */






var Slider_Slider_Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChangeSlide", function (direction) {
      return function () {
        var currentIndex = _this.state.currentIndex;
        var images = _this.props.images;
        var indexIncrement = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
        var indexDecrement = currentIndex < 1 ? images.length - 1 : currentIndex - 1;
        var upDateIndex = direction < 0 ? indexDecrement : indexIncrement;

        _this.setState({
          change: true,
          nextIndex: upDateIndex
        });

        setTimeout(function () {
          _this.setState({
            change: false,
            currentIndex: upDateIndex
          });
        }, 500);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderItems", function () {
      var _this$state = _this.state,
          currentIndex = _this$state.currentIndex,
          change = _this$state.change,
          nextIndex = _this$state.nextIndex;
      var images = _this.props.images;

      var getClassImg = function getClassImg(i) {
        var _cn;

        return classnames_default()((_cn = {}, _defineProperty(_cn, Slider_default.a.images, true), _defineProperty(_cn, Slider_default.a.active, currentIndex === i), _defineProperty(_cn, Slider_default.a.prev, change && currentIndex === i), _defineProperty(_cn, Slider_default.a.next, change && nextIndex === i), _cn));
      };

      return images.map(function (link, i) {
        return react_default.a.createElement("div", {
          className: getClassImg(i),
          key: "key-".concat(link)
        }, react_default.a.createElement("img", {
          src: link,
          className: Slider_default.a.img,
          alt: "no img"
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeRadios", function (e) {
      var value = e.target.value;

      _this.setState({
        change: true,
        nextIndex: Number(value)
      });

      setTimeout(function () {
        _this.setState({
          change: false,
          currentIndex: Number(value)
        });
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "renderRadios", function () {
      var currentIndex = _this.state.currentIndex;
      var images = _this.props.images;
      return react_default.a.createElement("div", {
        className: Slider_default.a.radios
      }, images.map(function (link, i) {
        return react_default.a.createElement("div", {
          className: Slider_default.a.radioWraper,
          key: "key-".concat(link)
        }, react_default.a.createElement("input", {
          className: Slider_default.a.radio,
          type: "radio",
          name: "radios",
          id: i,
          value: i,
          checked: i === currentIndex,
          onChange: _this.handleChangeRadios
        }), react_default.a.createElement("label", {
          className: Slider_default.a.radioLabel,
          htmlFor: i
        }));
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function () {
      _this.setState({
        autoplay: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resume", function () {
      _this.setState({
        autoplay: true
      });
    });

    _this.timerId = null;
    _this.state = {
      currentIndex: 0,
      change: false,
      autoplay: true,
      nextIndex: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var autoplay = this.state.autoplay;
      this.timerId = setInterval(function () {
        if (autoplay) {
          _this2.handleChangeSlide(1)();
        }
      }, 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerId);
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: Slider_default.a.slider,
        onMouseEnter: this.pause,
        onMouseLeave: this.resume
      }, this.renderItems(), react_default.a.createElement("button", {
        type: "button",
        className: "".concat(Slider_default.a.arrow, " ").concat(Slider_default.a.leftArrow),
        onClick: Object(lodash["debounce"])(this.handleChangeSlide(-1), 500)
      }), react_default.a.createElement("button", {
        type: "button",
        className: "".concat(Slider_default.a.arrow, " ").concat(Slider_default.a.rightArrow),
        onClick: Object(lodash["debounce"])(this.handleChangeSlide(1), 500)
      }), this.renderRadios());
    }
  }]);

  return Slider;
}(react_default.a.Component);

Slider_Slider_Slider.propTypes = {
  images: prop_types_default.a.array.isRequired
};
/* harmony default export */ var components_Slider_Slider = (Slider_Slider_Slider);
// EXTERNAL MODULE: ./src/components/Footer/Footer.jsx
var Footer = __webpack_require__(383);

// CONCATENATED MODULE: ./src/components/Home/Home.jsx




var Home_images = ['http://www.guidebook.by/image/1538129107_600.jpg', 'http://proguitarworld.ru/wp-content/uploads/2017/09/guitar-shop.jpg', 'https://i7.photo.2gis.com/images/branch/16/2251799835033407_504b.jpg', 'https://i7.photo.2gis.com/images/branch/40/5629499537599847_52e7.jpg', 'https://i7.photo.2gis.com/images/branch/107/15058911262255178_f73e.jpg'];
/* harmony default export */ var Home_Home = __webpack_exports__["default"] = (function () {
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
    className: Home_default.a.wrapper
  }, react_default.a.createElement(components_Slider_Slider, {
    images: Home_images
  })), react_default.a.createElement(Footer["a" /* default */], null));
});

/***/ })

}]);
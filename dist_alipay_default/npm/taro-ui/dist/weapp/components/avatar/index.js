"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};

var AtAvatar = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtAvatar, _AtComponent);

  function AtAvatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtAvatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtAvatar.__proto__ || Object.getPrototypeOf(AtAvatar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "openData", "image", "letter", "isWEAPP", "size", "circle", "text", "customStyle", "className"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtAvatar, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtAvatar.prototype.__proto__ || Object.getPrototypeOf(AtAvatar.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isWEAPP: _index2.default.getEnv() === _index2.default.ENV_TYPE.WEAPP
      };
      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _classObject;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          size = _props.size,
          circle = _props.circle,
          image = _props.image,
          text = _props.text,
          openData = _props.openData,
          customStyle = _props.customStyle;

      var rootClassName = ['at-avatar'];

      var classObject = (_classObject = {}, _defineProperty(_classObject, "at-avatar--" + SIZE_CLASS[size], SIZE_CLASS[size]), _defineProperty(_classObject, 'at-avatar--circle', circle), _classObject);

      var letter = '';
      if (text) {
        letter = text[0];
      }var elem = void 0;
      if (openData && openData.type === 'userAvatarUrl' && this.__state.isWEAPP) {} else if (image) {} else {}
      var anonymousState__temp = (0, _index6.default)(rootClassName, classObject, this.__props.className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        openData: openData,
        image: image,
        letter: letter
      });
      return this.__state;
    }
  }]);

  return AtAvatar;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "Users/apple/docker/wwwroot/taro-v2ex/node_modules/taro-ui/dist/weapp/components/avatar/index", _temp2);


AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  openData: {},
  customStyle: {},
  className: ''
};

AtAvatar.propTypes = {
  size: _index4.default.oneOf(['large', 'normal', 'small']),
  circle: _index4.default.bool,
  text: _index4.default.string,
  image: _index4.default.string,
  openData: _index4.default.object,
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string])
};
exports.default = AtAvatar;

Component(require('../../../../../_tarojs/taro-alipay/index.js').default.createComponent(AtAvatar));
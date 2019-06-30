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
  normal: 'normal',
  small: 'small'
};

var TYPE_CLASS = {
  primary: 'primary'
};

var AtTag = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTag, _AtComponent);

  function AtTag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTag.__proto__ || Object.getPrototypeOf(AtTag)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "disabled", "name", "active", "size", "type", "circle", "customStyle", "className", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTag, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AtTag.prototype.__proto__ || Object.getPrototypeOf(AtTag.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
      this.$$refs = [];
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (!this.props.disabled) {
        this.props.onClick && this.props.onClick({ name: this.props.name, active: this.props.active });
      }
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
          _props$size = _props.size,
          size = _props$size === undefined ? 'normal' : _props$size,
          _props$type = _props.type,
          type = _props$type === undefined ? '' : _props$type,
          _props$circle = _props.circle,
          circle = _props$circle === undefined ? false : _props$circle,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$active = _props.active,
          active = _props$active === undefined ? false : _props$active,
          customStyle = _props.customStyle;

      var rootClassName = ['at-tag'];

      var classObject = (_classObject = {}, _defineProperty(_classObject, "at-tag--" + SIZE_CLASS[size], SIZE_CLASS[size]), _defineProperty(_classObject, "at-tag--" + type, TYPE_CLASS[type]), _defineProperty(_classObject, 'at-tag--disabled', disabled), _defineProperty(_classObject, 'at-tag--active', active), _defineProperty(_classObject, 'at-tag--circle', circle), _classObject);

      var anonymousState__temp = (0, _index6.default)(rootClassName, classObject, this.__props.className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return AtTag;
}(_component2.default), _class.$$events = ["onClick"], _class.$$componentPath = "Users/apple/docker/wwwroot/taro-v2ex/node_modules/taro-ui/dist/weapp/components/tag/index", _temp2);


AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {},
  onClick: function onClick() {}
};

AtTag.propTypes = {
  size: _index4.default.oneOf(['normal', 'small']),
  type: _index4.default.oneOf(['', 'primary']),
  name: _index4.default.string,
  circle: _index4.default.bool,
  active: _index4.default.bool,
  disabled: _index4.default.bool,
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  onClick: _index4.default.func
};
exports.default = AtTag;

Component(require('../../../../../_tarojs/taro-alipay/index.js').default.createComponent(AtTag));
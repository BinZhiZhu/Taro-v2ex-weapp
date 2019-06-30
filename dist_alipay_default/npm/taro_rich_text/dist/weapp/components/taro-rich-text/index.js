"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XbRichTextComponent = (_temp2 = _class = function (_Taro$PureComponent) {
  _inherits(XbRichTextComponent, _Taro$PureComponent);

  function XbRichTextComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, XbRichTextComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = XbRichTextComponent.__proto__ || Object.getPrototypeOf(XbRichTextComponent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "$compid__11", "type", "richText", "customStyle"], _this.config = {
      usingComponents: {
        wxparser: 'plugin://wxparserPlugin/wxparser'
      }
    }, _this.customComponents = ["TaroRichTextNoWxParse"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(XbRichTextComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(XbRichTextComponent.prototype.__proto__ || Object.getPrototypeOf(XbRichTextComponent.prototype), "_constructor", this).call(this, props);
      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__11 = (0, _index.genCompid)(__prefix + "$compid__11");

      var _props = this.__props,
          richText = _props.richText,
          customStyle = _props.customStyle,
          type = _props.type;

      if (type === 'markdown') {
        _index.propsManager.set(_extends({}, this.__props), $compid__11);
      } else if (type === 'html') {
        _$anonymousState__temp = (0, _index.internal_inline_style)(customStyle);
      }
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        $compid__11: $compid__11,
        type: type,
        richText: richText
      });
      return this.__state;
    }
  }]);

  return XbRichTextComponent;
}(_index2.default.PureComponent), _class.$$events = [], _class.$$componentPath = "Users/apple/docker/wwwroot/taro-v2ex/node_modules/taro_rich_text/dist/weapp/components/taro-rich-text/index", _temp2);

XbRichTextComponent.defaultProps = {
  richText: '',
  raw: true,
  rawMaxLength: 100,
  type: 'markdown',
  customStyle: '',
  onImageClick: function onImageClick() {},
  onLinkClick: function onLinkClick() {}
};
exports.default = XbRichTextComponent;

Component(require('../../../../../_tarojs/taro-alipay/index.js').default.createComponent(XbRichTextComponent));
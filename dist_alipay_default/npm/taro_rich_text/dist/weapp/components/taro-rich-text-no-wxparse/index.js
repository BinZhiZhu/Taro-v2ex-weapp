"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../../_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _xbMarkdownParse = require("./xb-markdown-parse.js");

var _xbMarkdownParse2 = _interopRequireDefault(_xbMarkdownParse);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = XbRichTextComponent.__proto__ || Object.getPrototypeOf(XbRichTextComponent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp40", "_$anonymousState__temp41", "loopArray13", "raw", "rawText", "result", "type", "richText", "rawMaxLength", "customStyle"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(XbRichTextComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(XbRichTextComponent.prototype.__proto__ || Object.getPrototypeOf(XbRichTextComponent.prototype), "_constructor", this).call(this, props);
      this.mdParser = new _xbMarkdownParse2.default();
      this.onImageClick = this.onImageClick.bind(this);
      this.onLinkClick = this.onLinkClick.bind(this);
      this.$$refs = [];
    }
  }, {
    key: "onImageClick",
    value: function onImageClick(block) {
      this.props.onImageClick(block);
    }
  }, {
    key: "onLinkClick",
    value: function onLinkClick(block) {
      if (block.type === 'link') {
        this.props.onLinkClick(block.href);
      }
    }
  }, {
    key: "getRawText",
    value: function getRawText(block) {
      var _this2 = this;

      var result = '';
      if (block.type === 'text') {
        result += block.content;
      }
      if (block.children) {
        block.children.forEach(function (b) {
          result += _this2.getRawText(b);
        });
      }
      return result;
    }
  }, {
    key: "_create0Data",
    value: function _create0Data(_$uid) {
      var _this3 = this;

      return function (block, index) {
        var _$anonymousState__temp, _$anonymousState__temp2, _$anonymousState__temp3, _$anonymousState__temp4;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp2 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp3 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp4 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray4 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp2 = block.children ? _this3._create1Data(_$uid + "OUWMfxdyyl" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp2: $loopState__temp2,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp: _$anonymousState__temp,
          _$anonymousState__temp2: _$anonymousState__temp2,
          _$anonymousState__temp3: _$anonymousState__temp3,
          _$anonymousState__temp4: _$anonymousState__temp4,
          block: block,
          loopArray4: loopArray4,
          index: index
        };
      };
    }
  }, {
    key: "_create1Data",
    value: function _create1Data(_$uid) {
      var _this4 = this;

      return function (block, index) {
        var _$anonymousState__temp5, _$anonymousState__temp6, _$anonymousState__temp7, _$anonymousState__temp8;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp5 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp6 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp7 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp8 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray5 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp8 = block.children ? _this4._create2Data(_$uid + "foEOIkyGOr" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp8: $loopState__temp8,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp5: _$anonymousState__temp5,
          _$anonymousState__temp6: _$anonymousState__temp6,
          _$anonymousState__temp7: _$anonymousState__temp7,
          _$anonymousState__temp8: _$anonymousState__temp8,
          block: block,
          loopArray5: loopArray5,
          index: index
        };
      };
    }
  }, {
    key: "_create2Data",
    value: function _create2Data(_$uid) {
      var _this5 = this;

      return function (block, index) {
        var _$anonymousState__temp9, _$anonymousState__temp10, _$anonymousState__temp11, _$anonymousState__temp12;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp9 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp10 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp11 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp12 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray6 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp14 = block.children ? _this5._create3Data(_$uid + "tTzTuLYBSm" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp14: $loopState__temp14,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp9: _$anonymousState__temp9,
          _$anonymousState__temp10: _$anonymousState__temp10,
          _$anonymousState__temp11: _$anonymousState__temp11,
          _$anonymousState__temp12: _$anonymousState__temp12,
          block: block,
          loopArray6: loopArray6,
          index: index
        };
      };
    }
  }, {
    key: "_create3Data",
    value: function _create3Data(_$uid) {
      var _this6 = this;

      return function (block, index) {
        var _$anonymousState__temp13, _$anonymousState__temp14, _$anonymousState__temp15, _$anonymousState__temp16;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp13 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp14 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp15 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp16 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray7 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp20 = block.children ? _this6._create4Data(_$uid + "sGzXnzfTZu" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp20: $loopState__temp20,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp13: _$anonymousState__temp13,
          _$anonymousState__temp14: _$anonymousState__temp14,
          _$anonymousState__temp15: _$anonymousState__temp15,
          _$anonymousState__temp16: _$anonymousState__temp16,
          block: block,
          loopArray7: loopArray7,
          index: index
        };
      };
    }
  }, {
    key: "_create4Data",
    value: function _create4Data(_$uid) {
      var _this7 = this;

      return function (block, index) {
        var _$anonymousState__temp17, _$anonymousState__temp18, _$anonymousState__temp19, _$anonymousState__temp20;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp17 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp18 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp19 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp20 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray8 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp26 = block.children ? _this7._create5Data(_$uid + "xkFwGBNBaj" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp26: $loopState__temp26,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp17: _$anonymousState__temp17,
          _$anonymousState__temp18: _$anonymousState__temp18,
          _$anonymousState__temp19: _$anonymousState__temp19,
          _$anonymousState__temp20: _$anonymousState__temp20,
          block: block,
          loopArray8: loopArray8,
          index: index
        };
      };
    }
  }, {
    key: "_create5Data",
    value: function _create5Data(_$uid) {
      var _this8 = this;

      return function (block, index) {
        var _$anonymousState__temp21, _$anonymousState__temp22, _$anonymousState__temp23, _$anonymousState__temp24;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp21 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp22 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp23 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp24 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray9 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp32 = block.children ? _this8._create6Data(_$uid + "KGErScqkQK" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp32: $loopState__temp32,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp21: _$anonymousState__temp21,
          _$anonymousState__temp22: _$anonymousState__temp22,
          _$anonymousState__temp23: _$anonymousState__temp23,
          _$anonymousState__temp24: _$anonymousState__temp24,
          block: block,
          loopArray9: loopArray9,
          index: index
        };
      };
    }
  }, {
    key: "_create6Data",
    value: function _create6Data(_$uid) {
      var _this9 = this;

      return function (block, index) {
        var _$anonymousState__temp25, _$anonymousState__temp26, _$anonymousState__temp27, _$anonymousState__temp28;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp25 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp26 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp27 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp28 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray10 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp38 = block.children ? _this9._create7Data(_$uid + "deNJCZdbxg" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp38: $loopState__temp38,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp25: _$anonymousState__temp25,
          _$anonymousState__temp26: _$anonymousState__temp26,
          _$anonymousState__temp27: _$anonymousState__temp27,
          _$anonymousState__temp28: _$anonymousState__temp28,
          block: block,
          loopArray10: loopArray10,
          index: index
        };
      };
    }
  }, {
    key: "_create7Data",
    value: function _create7Data(_$uid) {
      var _this10 = this;

      return function (block, index) {
        var _$anonymousState__temp29, _$anonymousState__temp30, _$anonymousState__temp31, _$anonymousState__temp32;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp29 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp30 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp31 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp32 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray11 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp44 = block.children ? _this10._create8Data(_$uid + "ZZjmfMvKXl" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp44: $loopState__temp44,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp29: _$anonymousState__temp29,
          _$anonymousState__temp30: _$anonymousState__temp30,
          _$anonymousState__temp31: _$anonymousState__temp31,
          _$anonymousState__temp32: _$anonymousState__temp32,
          block: block,
          loopArray11: loopArray11,
          index: index
        };
      };
    }
  }, {
    key: "_create8Data",
    value: function _create8Data(_$uid) {
      var _this11 = this;

      return function (block, index) {
        var _$anonymousState__temp33, _$anonymousState__temp34, _$anonymousState__temp35, _$anonymousState__temp36;

        var dom_block = null;

        if (block.type === 'text') {
          _$anonymousState__temp33 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp34 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp35 = block.content + index; // 处理代码块
        } else if (block.type === 'table') {
          _$anonymousState__temp36 = (0, _index.internal_inline_style)({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          });
        } else {}
        var loopArray12 = block.children ? block.children.map(function (child, i) {
          child = {
            $original: (0, _index.internal_get_original)(child)
          };
          var $loopState__temp50 = block.children ? _this11._create9Data(_$uid + "XIZaYpvLMZ" + ("" + i))(child.$original, i) : null;
          return {
            $loopState__temp50: $loopState__temp50,
            $original: child.$original
          };
        }) : [];
        return {
          _$anonymousState__temp33: _$anonymousState__temp33,
          _$anonymousState__temp34: _$anonymousState__temp34,
          _$anonymousState__temp35: _$anonymousState__temp35,
          _$anonymousState__temp36: _$anonymousState__temp36,
          block: block,
          loopArray12: loopArray12,
          index: index
        };
      };
    }
  }, {
    key: "_create9Data",
    value: function _create9Data(_$uid) {
      return function (block, index) {
        var _$anonymousState__temp37, _$anonymousState__temp38, _$anonymousState__temp39;

        var dom_block = null;
        if (block.type === 'text') {
          _$anonymousState__temp37 = block.content + index; // 处理文字
        } else if (block.type === 'image') {
          _$anonymousState__temp38 = block.src + index; // 处理图片
        } else if (block.type === 'fence') {
          _$anonymousState__temp39 = block.content + index; //处理代码块
        } else {}
        return {
          _$anonymousState__temp37: _$anonymousState__temp37,
          _$anonymousState__temp38: _$anonymousState__temp38,
          _$anonymousState__temp39: _$anonymousState__temp39,
          block: block,
          index: index
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this12 = this;

      var _$anonymousState__temp40, _$anonymousState__temp41;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var loopArray13 = void 0;

      var _props = this.__props,
          richText = _props.richText,
          raw = _props.raw,
          rawMaxLength = _props.rawMaxLength,
          customStyle = _props.customStyle,
          type = _props.type;

      var result = this.mdParser.parse(richText);
      var rawText = '';
      if (raw) {
        result.forEach(function (block) {
          if (rawText.length <= rawMaxLength) {
            rawText += _this12.getRawText(block);
          }
        });
        if (rawText.length > rawMaxLength) {
          rawText = rawText.slice(0, rawMaxLength);
          rawText += '...';
        }
      }
      if (type === 'markdown') {
        _$anonymousState__temp40 = (0, _index.internal_inline_style)(customStyle);
        loopArray13 = result.map(function (block, index) {
          block = {
            $original: (0, _index.internal_get_original)(block)
          };

          var $loopState__temp59 = _this12._create0Data(__prefix + "wiZkbyCUWA" + ("" + index))(block.$original, index);

          return {
            $loopState__temp59: $loopState__temp59,
            $original: block.$original
          };
        });
      } else if (type === 'html') {
        _$anonymousState__temp41 = (0, _index.internal_inline_style)(customStyle);
      }
      Object.assign(this.__state, {
        _$anonymousState__temp40: _$anonymousState__temp40,
        _$anonymousState__temp41: _$anonymousState__temp41,
        loopArray13: loopArray13,
        raw: raw,
        rawText: rawText,
        result: result,
        type: type,
        richText: richText
      });
      return this.__state;
    }
  }]);

  return XbRichTextComponent;
}(_index2.default.PureComponent), _class.$$events = ["onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick", "onImageClick", "onLinkClick"], _class.$$componentPath = "Users/apple/docker/wwwroot/taro-v2ex/node_modules/taro_rich_text/dist/weapp/components/taro-rich-text-no-wxparse/index", _temp2);

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
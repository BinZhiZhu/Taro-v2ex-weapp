'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../../../../../remarkable/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XbMarkdownParse = function () {
  function XbMarkdownParse() {
    _classCallCheck(this, XbMarkdownParse);

    this.parser = new _index2.default({
      html: true
    });
    this.STYLE_PREFIX = 'xb-rich-text-';
    this.tmp = [];
  }

  _createClass(XbMarkdownParse, [{
    key: 'parse',
    value: function parse(md) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        raw: false
      };

      this.tokens = this.parser.parse(md, {});
      // console.log(this.tokens);
      // markdown 渲染列表
      this.renderList = [];
      // 处理Remarkable.js 处理后的token
      this.tokens.forEach(function (token, index) {
        if (token.type === 'inline') {
          _this.dealInlineContent(token, index, options);
        } else {
          _this[token.type](token, index, options);
        }
      });
      return this.renderList;
    }
    /**
     * 获取内联内容
     * type = inline
     * @param inlineToken
     */

  }, {
    key: 'dealInlineContent',
    value: function dealInlineContent(token, index, options) {
      var _this2 = this;

      if (token.type === 'text') {
        if (this.tmp.length <= 0) {
          //0级dom
          this.renderList.push({
            content: token.content,
            level: token.level,
            type: 'text',
            children: []
          });
        } else {
          this.tmp[this.tmp.length - 1].children.push({
            content: token.content,
            level: token.level,
            type: 'text',
            children: []
          });
        }
      } else {
        token.children.forEach(function (t) {
          if (t.type === 'text') {
            _this2.dealInlineContent(t, index, options);
          } else {
            _this2[t.type](t, index, options);
          }
        });
      }
    }
  }, {
    key: 'commonOpenDeal',
    value: function commonOpenDeal(token, _) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var block = _extends({}, token, options, {
        children: []
      });
      this.tmp.push(block);
    }
  }, {
    key: 'commonCloseDeal',
    value: function commonCloseDeal() {
      var currentLen = this.tmp.length;
      if (currentLen === 1) {
        //顶层的直接添加到level_0层dom
        this.renderList.push(this.tmp[0]);
        this.tmp.pop();
      } else {
        if (this.tmp && this.tmp[currentLen - 2] && this.tmp[currentLen - 2].children) {
          this.tmp[currentLen - 2].children.push(this.tmp[currentLen - 1]);
        }
        this.tmp.pop();
      }
    }
    /**
     * 没有open_close标签对包裹的单个标签的block的添加
     * @param block
     */

  }, {
    key: 'easySinglePush',
    value: function easySinglePush(block) {
      if (this.tmp.length > 0) {
        this.tmp[this.tmp.length - 1].children.push(block);
      } else {
        this.renderList.push(block);
      }
    }
  }, {
    key: 'blockquote_open',
    value: function blockquote_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'blockquote'
      }));
    }
  }, {
    key: 'blockquote_close',
    value: function blockquote_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'code',
    value: function code(token) {
      this.easySinglePush(_extends({}, token, {
        type: 'text',
        className: this.STYLE_PREFIX + 'code'
      }));
    }
  }, {
    key: 'fence',
    value: function fence(token) {
      this.easySinglePush(_extends({}, token, {
        className: this.STYLE_PREFIX + 'fence'
      }));
    }
  }, {
    key: 'fence_custom',
    value: function fence_custom() {}
    /**
     * h1、h2....
     */

  }, {
    key: 'heading_open',
    value: function heading_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'h' + token.hLevel
      }));
    }
  }, {
    key: 'heading_close',
    value: function heading_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'hr',
    value: function hr() {}
    /**
     * ul
     */

  }, {
    key: 'bullet_list_open',
    value: function bullet_list_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'ul'
      }));
    }
  }, {
    key: 'bullet_list_close',
    value: function bullet_list_close() {
      this.commonCloseDeal();
    }
    /**
     * li
     */

  }, {
    key: 'list_item_open',
    value: function list_item_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'li'
      }));
    }
  }, {
    key: 'list_item_close',
    value: function list_item_close() {
      this.commonCloseDeal();
    }
    /**
     * ol
     */

  }, {
    key: 'ordered_list_open',
    value: function ordered_list_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'ol'
      }));
    }
  }, {
    key: 'ordered_list_close',
    value: function ordered_list_close() {
      this.commonCloseDeal();
    }
    /**
     * p
     */

  }, {
    key: 'paragraph_open',
    value: function paragraph_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: '' + this.STYLE_PREFIX + (this.tmp.length > 0 ? 'inline_p' : 'p')
      }));
    }
  }, {
    key: 'paragraph_close',
    value: function paragraph_close() {
      this.commonCloseDeal();
    }
    /**
     * Links
     */

  }, {
    key: 'link_open',
    value: function link_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        type: 'link',
        className: this.STYLE_PREFIX + 'a'
      }));
    }
  }, {
    key: 'link_close',
    value: function link_close() {
      this.commonCloseDeal();
    }
    /**
     * Images
     */

  }, {
    key: 'image',
    value: function image(token) {
      this.easySinglePush(_extends({}, token, {
        className: this.STYLE_PREFIX + 'image'
      }));
    }
    /**
     * Tables
     */

  }, {
    key: 'table_open',
    value: function table_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        type: 'table',
        className: this.STYLE_PREFIX + 'table'
      }));
    }
  }, {
    key: 'table_close',
    value: function table_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'thead_open',
    value: function thead_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'table_thead'
      }));
    }
  }, {
    key: 'thead_close',
    value: function thead_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'tbody_open',
    value: function tbody_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'table_tbody'
      }));
    }
  }, {
    key: 'tbody_close',
    value: function tbody_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'tr_open',
    value: function tr_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'table_tr'
      }));
    }
  }, {
    key: 'tr_close',
    value: function tr_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'th_open',
    value: function th_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'table_th'
      }));
    }
  }, {
    key: 'th_close',
    value: function th_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'td_open',
    value: function td_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'table_td'
      }));
    }
  }, {
    key: 'td_close',
    value: function td_close() {
      this.commonCloseDeal();
    }
    /**
     * Bold（粗体）
     */

  }, {
    key: 'strong_open',
    value: function strong_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'strong'
      }));
    }
  }, {
    key: 'strong_close',
    value: function strong_close() {
      this.commonCloseDeal();
    }
    /**
     * Italicize（斜体）
     */

  }, {
    key: 'em_open',
    value: function em_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'em'
      }));
    }
  }, {
    key: 'em_close',
    value: function em_close() {
      this.commonCloseDeal();
    }
    /**
     * Strikethrough（删除线）
     */

  }, {
    key: 'del_open',
    value: function del_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'del'
      }));
    }
  }, {
    key: 'del_close',
    value: function del_close() {
      this.commonCloseDeal();
    }
    /**
     * Insert
     * <ins>
     */

  }, {
    key: 'ins_open',
    value: function ins_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'ins'
      }));
    }
  }, {
    key: 'ins_close',
    value: function ins_close() {
      this.commonCloseDeal();
    }
    /**
     * Highlight
     * <mark>
     */

  }, {
    key: 'mark_open',
    value: function mark_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'mark'
      }));
    }
  }, {
    key: 'mark_close',
    value: function mark_close() {
      this.commonCloseDeal();
    }
    /**
     * Super and sub script
     * <sup> <sub>
     */

  }, {
    key: 'sub',
    value: function sub() {}
  }, {
    key: 'sup',
    value: function sup() {}
    /**
     * Breaks（换行）
     * <br>
     *   options.xhtmlOut ? '<br />\n' : '<br>\n';
     */

  }, {
    key: 'hardbreak',
    value: function hardbreak() {
      this.easySinglePush({
        type: 'text',
        content: '\n',
        level: 0,
        children: [],
        className: 'hardbreak'
      });
    }
    /**
     * options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
     */

  }, {
    key: 'softbreak',
    value: function softbreak(token) {
      var softBreakBlock = _extends({}, token, {
        type: 'text',
        content: '',
        children: [],
        className: this.STYLE_PREFIX + 'softbreak'
      });
      this.easySinglePush(softBreakBlock);
    }
    /**
     * Text
     */

  }, {
    key: 'text',
    value: function text(token) {
      this.easySinglePush(_extends({}, token, {
        className: this.STYLE_PREFIX + 'text'
      }));
    }
    /**
     * Content
     */

  }, {
    key: 'htmlblock',
    value: function htmlblock() {}
  }, {
    key: 'htmltag',
    value: function htmltag() {}
    /**
     * Abbreviations, initialism (缩写、首字母)
     */

  }, {
    key: 'abbr_open',
    value: function abbr_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'abbr'
      }));
    }
  }, {
    key: 'abbr_close',
    value: function abbr_close() {
      this.commonCloseDeal();
    }
    /**
     * Footnotes
     */

  }, {
    key: 'footnote_ref',
    value: function footnote_ref() {}
  }, {
    key: 'footnote_block_open',
    value: function footnote_block_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'footnote_block'
      }));
    }
  }, {
    key: 'footnote_block_close',
    value: function footnote_block_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'footnote_open',
    value: function footnote_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'footnote'
      }));
    }
  }, {
    key: 'footnote_close',
    value: function footnote_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'footnote_anchor',
    value: function footnote_anchor() {}
    /**
     * Definition lists
     */

  }, {
    key: 'dl_open',
    value: function dl_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'dl'
      }));
    }
  }, {
    key: 'dl_close',
    value: function dl_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'dd_open',
    value: function dd_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'dd'
      }));
    }
  }, {
    key: 'dd_close',
    value: function dd_close() {
      this.commonCloseDeal();
    }
  }, {
    key: 'dt_open',
    value: function dt_open(token, index, options) {
      this.commonOpenDeal(token, index, _extends({}, options, {
        className: this.STYLE_PREFIX + 'dt'
      }));
    }
  }, {
    key: 'dt_close',
    value: function dt_close() {
      this.commonCloseDeal();
    }
  }]);

  return XbMarkdownParse;
}();

exports.default = XbMarkdownParse;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showLoading = function showLoading() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  _index2.default.showLoading(obj ? obj : {
    title: '加载中'
  });
};
exports.default = showLoading;
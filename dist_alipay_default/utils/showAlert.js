"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 弹窗提示
 *
 * @param content
 */
var showAlert = function showAlert(content) {
  _index2.default.hideLoading();
  return new Promise(function (resolve, reject) {
    _index2.default.showModal({
      title: '提示',
      content: content,
      showCancel: false,
      success: function success(result) {
        if (result.confirm) {
          resolve();
        } else {
          reject();
        }
      }
    });
  });
};
exports.default = showAlert;
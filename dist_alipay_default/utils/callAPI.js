"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 发起API请求
 *
 * @param params
 */
var callAPI = function callAPI(params) {
  return new Promise(function (resolve, reject) {
    _index2.default.request(params).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      reject(error);
    });
  });
};
exports.default = callAPI;
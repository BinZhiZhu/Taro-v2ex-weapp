import Taro from '@tarojs/taro-rn';
import React from 'react';

import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
/**
 * 跳转页面
 *
 * @param url
 * @param params
 */
const navigateTo = (url, params = {}) => {
  if (isEmpty(url)) {
    return;
  }
  if (!isString(url)) {
    console.warn('navigateTo URL必须是字符串');
    return;
  }
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return;
  }
  if (params) {
    // TODO
  }
  console.log('准备跳转至', url);
  // @ts-ignore
  return Taro.navigateTo({
    url: url
  });
};
export default navigateTo;
import Taro from '@tarojs/taro-rn';
import React from 'react';

/**
 * 返回上一页
 */
const navigateBack = () => {
  return Taro.navigateBack();
};
export default navigateBack;
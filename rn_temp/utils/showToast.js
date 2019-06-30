import Taro from '@tarojs/taro-rn';
import React from 'react';

/**
 * 显示toast信息
 *
 * @param text
 */
const showToast = text => {
  Taro.showToast({
    title: text,
    icon: 'none'
  });
};
export default showToast;
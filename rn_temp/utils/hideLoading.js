import Taro from '@tarojs/taro-rn';
import React from 'react';

/**
 * 隐藏loading
 */
const hideLoading = () => {
  Taro.hideLoading();
};
export default hideLoading();
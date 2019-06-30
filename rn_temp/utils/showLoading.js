import Taro from '@tarojs/taro-rn';
import React from 'react';

const showLoading = (obj = null) => {
  Taro.showLoading(obj ? obj : {
    title: '加载中'
  });
};
export default showLoading;
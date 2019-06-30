var _class, _temp;

import Taro from '@tarojs/taro-rn';
import React from 'react';

import { AtActivityIndicator } from "taro-ui";

/**
 * 页面加载器
 */
let Loading = (_temp = _class = class Loading extends Taro.Component {

  render() {
    const { color, content, mode } = this.props;

    return <AtActivityIndicator mode={mode} content={content} color={color} />;
  }
}, _class.defaultProps = {
  content: '加载中...',
  mode: 'center',
  color: '#eb6e48'
}, _temp);


export default Loading;
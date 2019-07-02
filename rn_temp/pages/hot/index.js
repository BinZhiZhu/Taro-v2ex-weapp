var _class, _temp;

import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
import LatestDataList from "../../components/latest-data-list/index";

let Index = (_temp = _class = class Index extends Taro.Component {

  render() {
    return <View className="pages-index-index-homepage">

        <LatestDataList />

        {}

      </View>;
  }
}, _class.config = {
  navigationBarTitleText: '最热'
}, _temp);


export default Index;
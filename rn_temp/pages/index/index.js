var _class, _temp;

import Taro from '@tarojs/taro-rn';
import React from 'react';

import { View } from "@tarojs/components-rn";
import LatestDataDefaultList from "../../components/latest-data-default-list/index";

let Index = (_temp = _class = class Index extends Taro.Component {

  render() {
    return <View className="pages-index-index-homepage">

        {}

        <LatestDataDefaultList />

        {}
          {}
          {}
          {}
          {}
        {}

      </View>;
  }
}, _class.config = {
  navigationBarTitleText: '首页'
  // 开启所有页面的下拉刷新功能，需要做下拉刷新的页面里写onPullDownRefresh方法，
  // 再调用Taro.startPullDownRefresh 、Taro.stopPullDownRefresh
  // enablePullDownRefresh: true,// 下拉刷新
  // backgroundTextStyle: light


  //
  // constructor(props){
  //   super(props);
  //   this.isPullRefresh = false;
  // }
  //
  //
  //
  // // 下拉刷新
  // onPullDownRefresh() {
  //   console.log('监听下拉刷新')
  //   if(this.isPullRefresh){
  //     return
  //   }
  //   this.isPullRefresh = true;
  //   this.onRefresh();
  // }
  //
  // onRefresh = ()=>{
  //   Taro.startPullDownRefresh().then((result) => {
  //     console.log('onPullDownRefresh',result)
  //     this.getList();
  //     this.isPullRefresh = false;
  //   }).catch((failResullt) => {
  //     console.log('failResullt', failResullt);
  //     Taro.stopPullDownRefresh();
  //     this.isPullRefresh = false;
  //   });
  // }
}, _temp);


export default Index;
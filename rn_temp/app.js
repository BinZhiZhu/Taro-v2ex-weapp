var _class, _temp;

import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import assertsTabbarNodeOnPng from '././asserts/tabbar/node_on.png';
import assertsTabbarNodePng from '././asserts/tabbar/node.png';
import assertsTabbarHotestOnPng from '././asserts/tabbar/hotest_on.png';
import assertsTabbarHotestPng from '././asserts/tabbar/hotest.png';
import assertsTabbarLastestOnPng from '././asserts/tabbar/lastest_on.png';
import assertsTabbarLatestPng from '././asserts/tabbar/latest.png';
import pagesMemberIndex from './pages/member/index';
import pagesNodesDetailIndex from './pages/nodes/detail/index';
import pagesNodesIndexIndex from './pages/nodes/index/index';
import pagesHotIndex from './pages/hot/index';
import pagesDetailIndex from './pages/detail/index';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import '@tarojs/async-await';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Provider } from "@tarojs/taro-redux-rn";

import configStore from "./store";
import appStyleSheet from "./app_styles";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
var _styleSheet = appStyleSheet;

const store = configStore();
let App = (_temp = _class = class App extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  render() {
    return <Provider store={store}>
                  
                <TCRNProvider>
                  <RootStack />
                </TCRNProvider>
                </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

}, _class.config = {
  tabBar: {
    'color': '#000',
    'selectedColor': '#56abe4',
    list: [{
      iconPath: assertsTabbarLatestPng,
      selectedIconPath: assertsTabbarLastestOnPng,

      "pagePath": "pages/index/index",
      "text": '最新'
    }, {
      iconPath: assertsTabbarHotestPng,
      selectedIconPath: assertsTabbarHotestOnPng,

      "pagePath": "pages/hot/index",
      "text": "热门"
    }, {
      iconPath: assertsTabbarNodePng,
      selectedIconPath: assertsTabbarNodeOnPng,

      "pagePath": "pages/nodes/index/index",
      "text": "节点"
    }],
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true
  },
  plugins: {
    "wxparserPlugin": {
      "version": "0.2.1",
      "provider": "wx9d4d4ffa781ff3ac"
    }
  }
}, _temp);
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/detail/index', pagesDetailIndex], ['pages/hot/index', pagesHotIndex], ['pages/nodes/index/index', pagesNodesIndexIndex], ['pages/nodes/detail/index', pagesNodesDetailIndex], ['pages/member/index', pagesMemberIndex]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;
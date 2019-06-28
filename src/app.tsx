import '@tarojs/async-await'
import Taro, {Component, Config} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/curtain/index',
      'pages/demo/index',
      'pages/detail/index',
    ],
    // window: {
    //   backgroundTextStyle: 'light',
    //   navigationBarBackgroundColor: '#fff',
    //   navigationBarTitleText: 'WeChat',
    //   navigationBarTextStyle: 'black'
    // }
    tabBar: {
      list: [
        {
          'iconPath': './asserts/tabbar/latest.png',
          'selectedIconPath': './asserts/tabbar/lastest_on.png',
          pagePath: 'pages/index/index',
          text: '最新'
        },
        {
          'iconPath': './asserts/tabbar/hotest.png',
          'selectedIconPath': './asserts/tabbar/hotest_on.png',
          pagePath: 'pages/curtain/index',
          text: '热门'
        },
        {
          'iconPath': './asserts/tabbar/node.png',
          'selectedIconPath': './asserts/tabbar/node_on.png',
          pagePath: 'pages/curtain/index',
          text: '节点'
        }
      ],
      'color': '#000',
      'selectedColor': '#56abe4',
      'backgroundColor': '#fff',
      'borderStyle': 'white'
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'V2EX',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }


  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))

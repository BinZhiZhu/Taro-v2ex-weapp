import Taro, {ComponentClass} from '@tarojs/taro'
import {View} from '@tarojs/components'
import "./index.scss"
import LatestDataDefaultList from "../../components/latest-data-default-list";

type pageState = {
  isPullRefresh: boolean
}


class hotPage extends Taro.Component<{},pageState> {

  config = {
    navigationBarTitleText: '首页',
    // 开启所有页面的下拉刷新功能，需要做下拉刷新的页面里写onPullDownRefresh方法，
    // 再调用Taro.startPullDownRefresh 、Taro.stopPullDownRefresh
    enablePullDownRefresh: true,// 下拉刷新
    backgroundTextStyle: 'light'
  }


  constructor(props){
    super(props);
    this.state = {
      isPullRefresh: false
    }
  }


  componentWillMount() {
    Taro.clearStorage();
  }


  // 下拉刷新
  onPullDownRefresh() {
    const {isPullRefresh} = this.state
    console.log('监听下拉刷新')
    if(isPullRefresh){
      return
    }
    this.setState({
      isPullRefresh: true
    },()=>{
      this.onRefresh();
    })
  }


  onRefresh = ()=>{
    Taro.startPullDownRefresh().then((result) => {
      const {isPullRefresh} = this.state
      console.log('onPullDownRefresh',result)
      Taro.setStorageSync('IS_LATEST_DATA_REFRESH',true);
      Taro.eventCenter.trigger('LATEST_DATA_REFRESH',isPullRefresh)
      this.setState({
        isPullRefresh: false
      },()=>{
        Taro.stopPullDownRefresh();
      })
    }).catch((failResullt) => {
      console.log('failResullt', failResullt);
      this.setState({
        isPullRefresh: false
      },()=>{
        Taro.stopPullDownRefresh();
      })
    });
  }


  render() {
    return (
      <View className='pages-index-index-homepage'>

        <LatestDataDefaultList />

      </View>
    )
  }
}

export default hotPage as ComponentClass

import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import LatestDataList from "../../components/latest-data-list";
import './index.scss'
import LatestDataDefaultList from "../../components/latest-data-default-list";

class Index extends Taro.Component {


  config = {
    navigationBarTitleText: '首页',
    // 开启所有页面的下拉刷新功能，需要做下拉刷新的页面里写onPullDownRefresh方法，
    // 再调用Taro.startPullDownRefresh 、Taro.stopPullDownRefresh
    // enablePullDownRefresh: true,// 下拉刷新
    // backgroundTextStyle: light
  }

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


  render() {
    return (
      <View className='pages-index-index-homepage'>

        {/*<LatestDataList />*/}

        <LatestDataDefaultList />

      </View>
    )
  }
}

export default Index

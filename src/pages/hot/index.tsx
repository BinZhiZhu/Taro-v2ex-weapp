import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import "./index.scss"
import LatestDataList from "../../components/latest-data-list";

class Index extends Taro.Component {


  config = {
    navigationBarTitleText: '最热',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'light'
  }


  constructor(props){
    super(props);
    this.isPullRefresh = false;
  }


  componentWillMount() {
    Taro.clearStorage();
  }


  // 下拉刷新
  onPullDownRefresh() {
    console.log('监听下拉刷新')
    if(this.isPullRefresh){
      return
    }
    this.isPullRefresh = true;
    this.onRefresh();
  }

  onRefresh = ()=>{
    Taro.startPullDownRefresh().then((result) => {
      console.log('onPullDownRefresh',result)
      Taro.setStorageSync('IS_LATEST_DATA_REFRESH',true);
      Taro.eventCenter.trigger('LATEST_DATA_REFRESH',this.isPullRefresh)
      this.isPullRefresh = false;
      Taro.stopPullDownRefresh();
    }).catch((failResullt) => {
      console.log('failResullt', failResullt);
      Taro.stopPullDownRefresh();
      this.isPullRefresh = false;
    });
  }


  render() {
    return (
      <View className='pages-hot-index-homepage'>

        <LatestDataList />

      </View>
    )
  }
}

export default Index

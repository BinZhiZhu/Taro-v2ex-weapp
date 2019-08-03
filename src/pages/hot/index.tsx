import Taro, {ComponentClass, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import "./index.scss"
import LatestDataList from "../../components/latest-data-list";

type pageState = {
  isPullRefresh: boolean
}

class HotPage extends Taro.Component<{},pageState> {


  config: Config = {
    navigationBarTitleText: '最热',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'light'
  }


  constructor(props){
    super(props);
    this.state = {
      isPullRefresh: false
    }
  }


  componentWillMount(): void {
    Taro.clearStorage();
  }


  // 下拉刷新
  onPullDownRefresh(): void{
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
      <View className='pages-hot-index-homepage'>

        <LatestDataList />

      </View>
    )
  }
}

export default HotPage as ComponentClass

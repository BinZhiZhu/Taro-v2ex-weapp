import Taro, {ComponentClass, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import LatestDataDefaultList from "@/components/latest-data-default-list";
import "./index.scss"
import withShare from "@/utils/withShare";

type pageState = {
  isPullRefresh: boolean
}

@withShare()
class LatestPage extends Taro.Component<{},pageState> {

  config: Config = {
    navigationBarTitleText: '最新',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'light'
  }


  $setSharePath = () => {
    return 'pages/index/index';
  };

  $setShareDesc = ()=>{
    return '为您呈上V2EX最新的帖子~';
  }

  $setShareTitle = () => {
    return '最新'
  };


  constructor(props){
    super(props);
    this.state = {
      isPullRefresh: false
    }
  }


  componentWillMount(): void{
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

export default LatestPage as ComponentClass

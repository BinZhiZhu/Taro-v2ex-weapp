import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import LatestDataList from "../../components/latest-data-list";

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}


class Index extends Taro.Component {


  config = {
    navigationBarTitleText: '最热',
  }



  render() {
    return (
      <View className='pages-index-index-homepage'>

        <LatestDataList />

        {/*<LatestDataDefaultList />*/}

      </View>
    )
  }
}

export default Index

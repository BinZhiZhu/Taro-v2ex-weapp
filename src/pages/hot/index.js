import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/tag.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./index.scss"
import LatestDataList from "../../components/latest-data-list";

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

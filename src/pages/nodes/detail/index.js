import Taro, {showToast} from "@tarojs/taro"
import isEmpty from "lodash/isEmpty"
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import callAPI from "../../../utils/callAPI";
import api from "../../../utils/api";
import { NODE_INFO_DATA} from "../../../constants";
import showLoading from "../../../utils/showLoading";


if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}


@connect(
  state=>state
)
class Index extends Taro.Component{

  config = {
    navigationBarTitleText: '节点'
  }


  state = {
    name: ''
  }
  componentWillMount() {
    showLoading();
    const params = this.$router.params;
    if(params.name){
      this.setState({
        name: params.name || ''
      },()=>{
        this.getNodeDetail();
      })
    }
  }

  getNodeDetail = ()=>{
    const {name}  =this.state;
    callAPI({
      url: api.getNodeInfo({
        name
      })
    }).then((result) => {
      Taro.hideLoading();
      if(result.status === 'error'){
        showToast(result.message);
      }
      console.log('获取节点信息', result);
      this.props.dispatch({
        type: NODE_INFO_DATA,
        data: result.data
      });
    }).catch((error) => {
      showToast(error.message)
    });
  }


  render() {

    const {getNodeInfo} = this.props;

    if(isEmpty(getNodeInfo)){
      return null;
    }

    return (
        <View className='at-article'>
          <View className='at-article__h1'>{getNodeInfo.title}</View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              <View className='at-article__h3'>{getNodeInfo.header}</View>
              <View className='at-article__p' />
            </View>
          </View>
        </View>
    )
  }
}

export default Index

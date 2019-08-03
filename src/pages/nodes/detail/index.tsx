import Taro, {ComponentClass, showToast} from "@tarojs/taro"
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import isEmpty from "lodash/isEmpty"
import "./index.scss"
import callAPI from "../../../utils/callAPI";
import api from "../../../utils/api";
import { NODE_INFO_DATA} from "../../../constants";
import showLoading from "../../../utils/showLoading";

type pageState = {
  name :string
}

type pageProps = {
  dispatch: any,
  getNodeInfo: nodeData
}

type nodeData = {
  title: string,
  header: string
}

interface nodeDetail {
  data: nodeData
}
@connect(
  state=>state
)
class NodeDetailPage extends Taro.Component<pageProps,pageState>{

  config = {
    navigationBarTitleText: '节点'
  }

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }
  componentWillMount(): void {
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
    }).then((result: nodeDetail) => {
      Taro.hideLoading();
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

export default NodeDetailPage as ComponentClass

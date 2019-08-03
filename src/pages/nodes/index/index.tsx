import Taro, {ComponentClass, showToast} from "@tarojs/taro"
import "taro-ui/dist/style/components/float-layout.scss";
import "taro-ui/dist/style/components/avatar.scss";
import {AtAvatar, AtFloatLayout} from "taro-ui";
import {connect} from "@tarojs/redux";
import {RichText, Text, View} from "@tarojs/components";
import allNodes from "@/utils/allNodes";
import callAPI from "@/utils/callAPI";
import api from "@/utils/api";
import {NODE_INFO_DATA} from "@/constants";
import showLoading from "@/utils/showLoading";
import './index.scss'

type pageState = {
  isShow: boolean
}

type nodeDetail = {
  title: string,
  avatar_normal: string,
  title_alternative: string,
  topics: string,
  stars: string,
  header: string
}

type pageProps = {
  dispatch: any,
  getNodeInfo: nodeDetail
}

type nodes = {
  short_name: string,
  full_name :string
}

interface allNodes {
  id: string,
  title: string,
  nodes: Array<nodes>
}

interface nodeList {
  data: nodeDetail
}
@connect(
  state=>state
)
class NodePage extends Taro.Component<pageProps,pageState>{

  config = {
    navigationBarTitleText: '节点'
  }

  constructor(props){
    super(props)
    this.state = {
      isShow: false
    }
  }

  onShowLayout = (name: string)=>{
    showLoading();
    this.getNodeDetail(name);
    this.setState({
      isShow: true
    })
  }

  handleClose = ()=>{
    this.setState({
      isShow: false
    },()=>{
      this.props.dispatch({
        type: NODE_INFO_DATA,
        data: null
      });
    })
  }

  getNodeDetail = (name: string)=>{
    callAPI({
      url: api.getNodeInfo({
        name
      })
    }).then((result: nodeList) => {
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

    const {isShow} = this.state;

    const {getNodeInfo} = this.props;

    const allNodesList = allNodes;

    return (
      <View className='pages-nodes-index'>
        {allNodesList && allNodesList.map((node: allNodes,i)=>{
          return (
            <View
              className='pages-nodes-index__item'
              key={`${i}-${node.id}`}
            >
              <View className='pages-nodes-index__item__title'>
                <Text className='pages-nodes-index__item__title__text'>{node.title}</Text>
              </View>
              {node.nodes && node.nodes.map((item,j)=>{
                return (
                  <Text
                    onClick={this.onShowLayout.bind(this,item.short_name)}
                    className='pages-nodes-index__item__child'
                    key={`${j}`}

                  >
                    {item.full_name}
                  </Text>
                )
              })}
            </View>
          )
        })}

        {getNodeInfo ? (
          <View className='pages-nodes-index__layout'>
            <AtFloatLayout
              isOpened={isShow}
              title={getNodeInfo.title}
              onClose={this.handleClose.bind(this)}
            >
              <View className='pages-nodes-index__layout__info'>
                <View className='pages-nodes-index__layout__info__left'>
                  <AtAvatar
                    className='pages-nodes-index__layout__info__left__avatar'
                    image={getNodeInfo.avatar_normal}
                  />
                  <View className='pages-nodes-index__layout__info__left__header'>
                    <Text className='pages-nodes-index__layout__info__left__header__title'>{getNodeInfo.title}</Text>
                    <Text className='pages-nodes-index__layout__info__left__header__subtitle'>{getNodeInfo.title_alternative}</Text>
                  </View>
                </View>
                <View className='pages-nodes-index__layout__info__right'>
                  <Text className='pages-nodes-index__layout__info__right__topics'>话题 {getNodeInfo.topics}</Text>
                  <Text className='pages-nodes-index__layout__info__right__star'>收藏 {getNodeInfo.stars}</Text>
                </View>
              </View>
              <View className='pages-nodes-index__layout__content'>
                {process.env.TARO_ENV === 'alipay' ? (
                  <Text className='pages-nodes-index__layout__content__header'>{getNodeInfo.header}</Text>
                ): (
                  <RichText
                    className='pages-nodes-index__layout__content__header'
                    nodes={getNodeInfo.header}
                  />
                )}
              </View>
            </AtFloatLayout>
          </View>
        ) : null}
      </View>
    )
  }
}

export default NodePage as ComponentClass

import Taro, {ComponentClass, hideLoading, navigateTo, showToast} from "@tarojs/taro"
import {ScrollView, Text, View} from "@tarojs/components";
import isEmpty from "lodash/isEmpty"
import {connect} from "@tarojs/redux";
import './index.scss'
import formatAvatar from "../../utils/formatAvatarUrl";
import getDiffTimeStamp from "../../utils/diffTimeStamp";
import callAPI from "../../utils/callAPI";
import showLoading from "../../utils/showLoading";
import api from "../../utils/api";
import {HOT_TOPIC_DATA} from "../../constants";
import AtAvatar from "../../taro-ui/components/avatar";
import AtTag from "../../taro-ui/components/tag1";

type pageProps = {
  dispatch: any,
  hotTopics: Array<detailData>
}

type detailData = {
  last_modified: number,
  member: {
    avatar_normal: string,
    username: string,
  },
  id: string,
  last_reply_by: string,
  node: {
    title: string
  },
  replies: string,
  title: string
}


interface apiData {
  data:  Array<detailData>
}

type commonStyle =  {
  width?: string
}

@connect(
  state=>state
)
class LatestDataList extends Taro.Component<pageProps,{}>{

  componentWillMount(): void {
    showLoading();
    this.getList();
    //监听首页下拉刷新事件
    Taro.eventCenter.on('LATEST_DATA_REFRESH',this.getList)
  }


  componentWillUnmount(): void{
    Taro.eventCenter.off('LATEST_DATA_REFRESH')
  }

  getList = () => {
    switch (process.env.TARO_ENV) {
      case 'h5':
        this.props.dispatch({
          type: HOT_TOPIC_DATA,
          data:null
        });
        hideLoading();
        break;
      case 'weapp':
        this.getLatestTopic();
        break;
      case 'alipay':
        this.getLatestTopic();
        break;
    }
  }

  getLatestTopic = () => {
    callAPI({
      url: api.getHotNodes()
    }).then((result: apiData) => {
      Taro.hideLoading();
      console.log('获取最热节点', result);
      this.props.dispatch({
        type: HOT_TOPIC_DATA,
        data: result.data
      });
      const isRefresh = Taro.getStorageSync('IS_LATEST_DATA_REFRESH')
      if(isRefresh){
        showToast({
          title:'刷新成功',
          icon:'success'
        });
        Taro.setStorageSync('IS_LATEST_DATA_REFRESH',false)
      }
    }).catch((error) => {
      showToast(error.message)
    });
  }

  goDetail = (topic_id)=>{
    navigateTo({
      url:`/pages/detail/index?topic_id=${topic_id}`
    })
  }

  render() {

    const {hotTopics} = this.props;

    if(isEmpty(hotTopics)){
      return <View />;
    }

    const leftStyle: commonStyle ={}

    const rightStyle: commonStyle = {}

    if(process.env.TARO_ENV ==='alipay'){
      leftStyle.width = '86%'
    }

    if(process.env.TARO_ENV ==='alipay'){
      rightStyle.width = '14%'
    }

    return (
      <ScrollView
        scrollY
      >
        {hotTopics && hotTopics.length > 0 && hotTopics.map((item,i)=>{
          const avatar = formatAvatar(item.member.avatar_normal);
          const lastReplyText = getDiffTimeStamp(item.last_modified);

          return (
            <View
              className='pages-hot-index-homepage__block'
              key={`${i}-${item.id}`}
              onClick={this.goDetail.bind(this,item.id)}
            >
              <View
                className='pages-hot-index-homepage__block__left'
                style={leftStyle}
              >
                <View className='pages-hot-index-homepage__block__left__thumb'>
                  <AtAvatar
                    className='pages-hot-index-homepage__block__left__thumb__img'
                    image={avatar}
                    size='small'
                  />
                </View>
                <View className='pages-hot-index-homepage__block__left__info'>
                  <Text className='pages-hot-index-homepage__block__left__info__title'>{item.title}</Text>
                  <View className='pages-hot-index-homepage__block__left__info__subtitle'>
                    {/*<Text className='pages-index-index__block__left__info__subtitle__node-title'>{item.node.title}</Text>*/}
                    <AtTag
                      // active
                      className='pages-hot-index-homepage__block__left__info__subtitle__node-title'
                      size='small'
                      type='primary'
                    >
                      {item.node.title}
                    </AtTag>
                    <View className='pages-hot-index-homepage__block__left__info__subtitle__dot'>
                      <Text className='pages-hot-index-homepage__block__left__info__subtitle__dot__inner'>•</Text>
                    </View>
                    <Text className='pages-hot-index-homepage__block__left__info__subtitle__username'>{item.member.username}</Text>
                    {item.last_reply_by ? (
                      <View className='pages-hot-index-homepage__block__left__info__subtitle__last_reply_icon'>
                        <Text className='pages-hot-index-homepage__block__left__info__subtitle__last_reply_icon__inner'>•</Text>
                        <Text className='pages-hot-index-homepage__block__left__info__subtitle__last_reply_icon__username'>{lastReplyText}</Text>
                        <Text className='pages-hot-index-homepage__block__left__info__subtitle__last_reply_icon__inner'>•</Text>
                      </View>
                    ) : null}

                    {item.last_reply_by && (
                      <Text className='pages-hot-index-homepage__block__left__info__subtitle__last_reply_by'>最新回复来自
                        <Text className='pages-hot-index-homepage__block__left__info__subtitle__last_reply_by__username'> {item.last_reply_by}</Text>
                      </Text>
                    )}

                  </View>
                </View>
              </View>
              <View
                className='pages-hot-index-homepage__block__right'
                style={rightStyle}
              >

                <View className='pages-hot-index-homepage__block__right__inner'>
                  <AtTag
                    active
                    className='pages-hot-index-homepage__block__right__inner__tag'
                    size='small'
                    type='primary'
                  >
                    {item.replies}
                  </AtTag>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

export default LatestDataList as ComponentClass

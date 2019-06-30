import Taro, {hideLoading, navigateTo, showToast} from "@tarojs/taro"
import {AtAvatar, AtTag} from "taro-ui";
import {ScrollView, Text, View} from "@tarojs/components";
import isEmpty from "lodash/isEmpty"
import {connect} from "@tarojs/redux";
import './index.scss'
import formatAvatar from "../../utils/formatAvatarUrl";
import getDiffTimeStamp from "../../utils/diffTimeStamp";
import showLoading from "../../utils/showLoading";
import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import {HOT_TOPIC_DATA} from "../../constants";

@connect(
  state=>state
)
class LatestDataList extends Taro.Component{

  // static defaultProps = {
  //   latestTopicList: [
  //     {
  //       last_reply_by: '',//最新回复者
  //       last_modified: '', //最新回复时间戳
  //       replies: 0, //回复数
  //       title: '',
  //       member: {
  //         avatar_normal: '', //默认头像
  //         username: '',//昵称
  //       },
  //       node: {
  //         title: '',  //节点
  //       }
  //     }
  //   ]
  // }
  //
  //
  // static propTypes = {
  //   latestTopicList: propTypes.array
  // }


  componentWillMount() {
    showLoading();
    this.getList();
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
    }
  }

  getLatestTopic = () => {
    callAPI({
      url: api.getHotNodes()
    }).then((result) => {
      Taro.hideLoading();
      if(result.status === 'error'){
        showToast(result.message);
      }
      console.log('获取最热节点', result);
      this.props.dispatch({
        type: HOT_TOPIC_DATA,
        data: result.data
      });
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
      return null;
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
              className='pages-index-index-homepage__block'
              key={`${i}-${item.id}`}
              onClick={this.goDetail.bind(this,item.id)}
            >
              <View className='pages-index-index-homepage__block__left'>
                <View className='pages-index-index-homepage__block__left__thumb'>
                  <AtAvatar
                    className='pages-index-index-homepage__block__left__thumb__img'
                    image={avatar}
                    size='small'
                  />
                </View>
                <View className='pages-index-index-homepage__block__left__info'>
                  <Text className='pages-index-index-homepage__block__left__info__title'>{item.title}</Text>
                  <View className='pages-index-index-homepage__block__left__info__subtitle'>
                    {/*<Text className='pages-index-index__block__left__info__subtitle__node-title'>{item.node.title}</Text>*/}
                    <AtTag
                      // active
                      className='pages-index-index-homepage__block__left__info__subtitle__node-title'
                      size='small'
                      type='primary'
                    >
                      {item.node.title}
                    </AtTag>
                    <View className='pages-index-index-homepage__block__left__info__subtitle__dot'>
                      <Text className='pages-index-index-homepage__block__left__info__subtitle__dot__inner'>•</Text>
                    </View>
                    <Text className='pages-index-index-homepage__block__left__info__subtitle__username'>{item.member.username}</Text>
                    {item.last_reply_by ? (
                      <View className='pages-index-index-homepage__block__left__info__subtitle__last_reply_icon'>
                        <Text className='pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__inner'>•</Text>
                        <Text className='pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__username'>{lastReplyText}</Text>
                        <Text className='pages-index-index-homepage__block__left__info__subtitle__last_reply_icon__inner'>•</Text>
                      </View>
                    ) : null}

                    {item.last_reply_by && (
                      <Text className='pages-index-index-homepage__block__left__info__subtitle__last_reply_by'>最新回复来自
                        <Text className='pages-index-index-homepage__block__left__info__subtitle__last_reply_by__username'> {item.last_reply_by}</Text>
                      </Text>
                    )}

                  </View>
                </View>
              </View>
              <View className='pages-index-index-homepage__block__right'>

                <View className='pages-index-index-homepage__block__right__inner'>
                  <AtTag
                    active
                    className='pages-index-index-homepage__block__right__inner__tag'
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

export default LatestDataList

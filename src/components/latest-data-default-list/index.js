import Taro, {hideLoading, navigateTo, showToast} from "@tarojs/taro"
import {ScrollView, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './index.scss'
import formatAvatar from "../../utils/formatAvatarUrl";
import getDiffTimeStamp from "../../utils/diffTimeStamp";
import showLoading from "../../utils/showLoading";
import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import {LATEST_TOPIC_LIST} from "../../constants";
import AtTag from "../../taro-ui/components/tag1";
import AtAvatar from "../../taro-ui/components/avatar";
import AtIcon from "../../taro-ui/components/icon";

@connect(
  state=>state
)
class LatestDataDefaultList extends Taro.Component{



  componentWillMount() {
    showLoading();
    this.getList();
  }


  getList = () => {
    switch (process.env.TARO_ENV) {
      case 'h5':
        this.props.dispatch({
          type: LATEST_TOPIC_LIST,
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
      url: api.getLatestTopic()
    }).then((result) => {
      Taro.hideLoading();
      if(result.status === 'error'){
        showToast(result.message);
      }
      console.log('获取最新节点', result);
      this.props.dispatch({
        type: LATEST_TOPIC_LIST,
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

    const {latestTopicList} = this.props;

    return (
      <ScrollView
        scrollY
      >
        {latestTopicList && latestTopicList.length > 0 && latestTopicList.map((item,i)=>{
          const avatar = formatAvatar(item.member.avatar_normal);
          const lastReplyText = getDiffTimeStamp(item.last_modified);

          return (
            <View
              className='pages-index-index-homepage__block'
              key={`${i}-${item.id}`}
              onClick={this.goDetail.bind(this,item.id)}
            >
              <View className='pages-index-index-homepage__block__top'>
                <View className='pages-index-index-homepage__block__top__left'>
                  {avatar ? (
                    <AtAvatar
                      className='pages-index-index-homepage__block__top__left__thumb'
                      size='small'
                      image={avatar}
                    />
                  ) : null}
                    <View className='pages-index-index-homepage__block__top__left__info'>
                      <Text className='pages-index-index-homepage__block__top__left__info__username'>{item.member.username}</Text>
                      <View className='pages-index-index-homepage__block__top__left__info__subtitle'>
                        <Text className='pages-index-index-homepage__block__top__left__info__subtitle__time'>{lastReplyText}</Text>
                        {item.last_reply_by && (
                          <Text className='pages-index-index-homepage__block__top__left__info__subtitle__dot'>•</Text>
                        )}

                        {item.last_reply_by && (
                          <Text className='pages-index-index-homepage__block__top__left__info__subtitle__text'>最后回复</Text>
                        )}

                        {item.last_reply_by && (
                          <Text className='pages-index-index-homepage__block__top__left__info__subtitle__username'>{item.last_reply_by}</Text>
                        )}

                      </View>
                    </View>
                  <View className='pages-index-index-homepage__block__top__left__right'>
                    <View className='pages-index-index-homepage__block__top__left__right__top'>
                      <View className='pages-index-index-homepage__block__top__left__right__top__node'>
                        <AtTag
                          className='pages-index-index-homepage__block__top__left__right__top__node__title'
                          size='small'
                          type='primary'
                        >
                          {item.node.title}
                        </AtTag>
                      </View>
                      <AtIcon
                        className='pages-index-index-homepage__block__top__left__right__top__icon'
                        value='message'
                        color='#666'
                        size={12}
                      />
                      <Text className='pages-index-index-homepage__block__top__left__right__top__reply'> {item.replies}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className='pages-index-index-homepage__block__bottom'>
                <Text className='pages-index-index-homepage__block__bottom__text'> {item.title}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

export default LatestDataDefaultList

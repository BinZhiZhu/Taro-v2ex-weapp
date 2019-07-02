import Taro, {navigateTo, showToast} from "@tarojs/taro"
import {AtAvatar, AtTag} from "taro-ui";
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/tag.scss";
import isEmpty from "lodash/isEmpty"
import {RichText, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import showLoading from "../../utils/showLoading";
import showAlert from "../../utils/showAlert";
import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import {TOPIC_DETAIL_DATA, TOPIC_REPLIES_DATA} from "../../constants";
import formatAvatar from "../../utils/formatAvatarUrl";
import getDiffTimeStamp from "../../utils/diffTimeStamp";
// import {TaroRichText} from 'taro_rich_text';
import './index.scss'

@connect(
  state=>state
)
class Index extends Taro.Component{

  state = {
    topic_id: 0
  }

  componentWillMount() {

    showLoading();

    this.clearData();

    const params = this.$router.params;
    console.log('params',params)
    if(params.topic_id){
      this.setState({
        topic_id:params.topic_id
      },()=>{
        this.getList();
      })
    }
  }

  clearData = ()=>{
    this.props.dispatch({
      type: TOPIC_REPLIES_DATA,
      data: null
    });
    this.props.dispatch({
      type: TOPIC_DETAIL_DATA,
      data: null
    });
  }


  getList = () => {
    switch (process.env.TARO_ENV) {
      case 'h5':
        showAlert('暂不支持H5哦~');
        break;
      case 'weapp':
        this.getTopicReplies();
        this.getTopicDetail();
        break;
    }
  }

  /**
   * 获取回复
   */
  getTopicReplies = () => {
    const {topic_id}  =this.state;
    callAPI({
      url: api.getReplies({
        topic_id
      }),
    }).then((result) => {
      Taro.hideLoading();
      console.log('获取帖子回复', result);
      this.props.dispatch({
        type: TOPIC_REPLIES_DATA,
        data: result.data
      });
    }).catch((error) => {
      showToast(error.message)
    });
  }


  /**
   * 获取话题
   */
  getTopicDetail = ()=>{
    const {topic_id}  =this.state;
    callAPI({
      url: api.getTopics({
        id:topic_id
      }),
    }).then((result) => {
      Taro.hideLoading();
      if(result.status === 'error'){
        showToast(result.message);
      }
      console.log('获取帖子详情', result);
      this.props.dispatch({
        type: TOPIC_DETAIL_DATA,
        data: result.data
      });
    }).catch((error) => {
      showToast(error.message)
    });
  }


  getMemberData = (username)=>{
    navigateTo({
      url:`/pages/member/index?username=${username}`
    })
  }

  render() {

    const {topicDetail,topicReplies} = this.props;

    if(isEmpty(topicDetail)){
      return null;
    }

    const data = topicDetail[0];

    const difftime = getDiffTimeStamp(data.last_modified);


    return (
      <View className='pages-detail-index'>
        <View className='pages-detail-index__topic'>
          <View className='pages-detail-index__topic__top'>
          <View
            className='pages-detail-index__topic__top__left'
            onClick={this.getMemberData.bind(this,data.member.username)}
          >
            {data.member.avatar_normal ? (
              <AtAvatar
                size='small'
                className='pages-detail-index__topic__top__left__thumb'
                image={formatAvatar(data.member.avatar_normal)}
              />
            ) : null}

            {data && difftime ? (
              <View className='pages-detail-index__topic__top__left__info'>
                <Text className='pages-detail-index__topic__top__left__info__username'>{data.member.username}</Text>
                <View className='pages-detail-index__topic__top__left__info__subtitle'>
                  <Text className='pages-detail-index__topic__top__left__info__subtitle__text'>at {difftime}，{data.replies}回复</Text>
                </View>
              </View>
            ) : null}

          </View>
            <View className='pages-detail-index__topic__top__right'>
              {data ? (
                <AtTag
                  className='pages-detail-index__topic__top__right__title'
                  size='small'
                  type='primary'
                >
                  {data.node.title}
                </AtTag>
              ) : null}
            </View>
          </View>

          {data && (
            <View className='pages-detail-index__topic__bottom'>
              <View className='pages-detail-index__topic__bottom__title'>
                <Text className='pages-detail-index__topic__bottom__title__text'>{data.title}</Text>
              </View>
              <View className='pages-detail-index__topic__bottom__line' />
              <View className='pages-detail-index__topic__bottom__content'>
                <RichText
                  className='pages-detail-index__topic__bottom__content__text'
                  nodes={data.content}
                />
                {/*<TaroRichText*/}
                  {/*raw={false}*/}
                  {/*type='markdown'*/}
                  {/*richText={data.content}*/}
                {/*/>*/}
                {data.content && (
                  <View className='pages-detail-index__topic__bottom__content__line' />
                )}
              </View>
            </View>
          )}
        </View>
        {topicReplies && topicReplies.length > 0 && topicReplies.map((item,i)=>{
          const avatar = formatAvatar(item.member.avatar_normal);
          const lastReplyText = getDiffTimeStamp(item.last_modified);
          return (
            <View
              className='pages-detail-index__reply'
              key={`${i}-${item.id}`}
            >
              <View className='pages-detail-index__reply__left'>
                <View
                  className='pages-detail-index__reply__left__thumb'
                  onClick={this.getMemberData.bind(this,item.member.username)}
                >
                  {avatar ? (
                    <AtAvatar
                      size='small'
                      onClick={this.getMemberData.bind(this,item.member.username)}
                      image={avatar}
                    />
                  ) : null}
                </View>
                <View className='pages-detail-index__reply__left__info'>
                  <View className='pages-detail-index__reply__left__info__top'>
                    <Text className='pages-detail-index__reply__left__info__top__username'>{item.member.username}</Text>
                    <View className='pages-detail-index__reply__left__info__top__subtitle'>
                      <View className='pages-detail-index__reply__left__info__top__subtitle__time'>{lastReplyText}</View>
                      <Text className='pages-detail-index__reply__left__info__top__subtitle__count'>#{i+1}楼</Text>
                    </View>
                  </View>
                  <View className='pages-detail-index__reply__left__info__bottom'>
                    <RichText
                      nodes={item.content}
                      className='pages-detail-index__reply__left__info__bottom__content'
                    />
                    {/*<TaroRichText*/}
                      {/*raw={false}*/}
                      {/*type='markdown'*/}
                      {/*richText={item.content}*/}
                    {/*/>*/}
                  </View>
                </View>
              </View>
              <View className='pages-detail-index__reply__right' />
            </View>
          )
        })}

        {topicReplies && topicReplies.length ===0 && (
          <Text className='pages-detail-index__empty'>该话题目前没有回复</Text>
        )}
      </View>
    )
  }
}

export default Index

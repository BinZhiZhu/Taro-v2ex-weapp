import Taro, {ComponentClass, Config, navigateTo, showToast} from "@tarojs/taro"
import isEmpty from "lodash/isEmpty"
import {RichText, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import showLoading from "@/utils/showLoading";
import showAlert from "@/utils/showAlert";
import callAPI from "@/utils/callAPI";
import api from "@/utils/api";
import AtAvatar from "@/taro-ui/components/avatar";
import formatAvatar from "@/utils/formatAvatarUrl";
import getDiffTimeStamp from "@/utils/diffTimeStamp";
import AtTag from "@/taro-ui/components/tag1";
import {TaroRichText} from 'taro_rich_text';
import {TOPIC_DETAIL_DATA, TOPIC_REPLIES_DATA} from "../../constants";
import './index.scss'
import withShare from "@/utils/withShare";


type pageState = {
  topic_id: string | number
}

type pageProps = {
  dispatch: any,
  topicDetail: any,
  topicReplies: Array<replyList>
}

type replyList = {
  id: string,
  member: {
    username: string,
    avatar_normal: string,
  },
  last_modified: number,
  content: string
}

type detailList = {
  member: {
    username: string
  },
  title: string,
  content: string
}


interface replyData {
  data: Array<replyList>
}

interface detailData {
  status: string,
  data: Array<detailList>
}

@withShare()
@connect(
  state=>state
)
class DetailPage extends Taro.Component<pageProps,pageState>{

  config: Config = {
    navigationBarTitleText: '话题详情'
  }

  constructor(props){
    super(props)
    this.state = {
      topic_id: 0
    }
  }

  $setSharePath = () => {
    const {topicDetail} = this.props
    const data = topicDetail && topicDetail[0];
    return `pages/detail/index?topic_id=${data.id}`;
  };

  $setShareDesc = ()=>{
    const {topicDetail} = this.props
    const data = topicDetail && topicDetail[0];
    return data.node.title ? data.node.title : '';
  }

  $setShareTitle = () => {
    const {topicDetail} = this.props
    const data = topicDetail && topicDetail[0];
    return data.title ? data.title : this.config.navigationBarTitleText
  };


  componentWillMount(): void {
    showLoading()
    this.clearData()
    const params = this.$router.params
    if(params.topic_id){
      this.setState({
        topic_id:params.topic_id
      },()=>{
        this.getList()
      })
    }
  }

  clearData = ()=>{
    this.props.dispatch({
      type: TOPIC_REPLIES_DATA,
      data: null
    })
    this.props.dispatch({
      type: TOPIC_DETAIL_DATA,
      data: null
    })
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
      case 'alipay':
        this.getTopicReplies();
        this.getTopicDetail();
        break;
      default:
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
    }).then((result: replyData) => {
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
    }).then((result: detailData) => {
      Taro.hideLoading();
      console.log('获取帖子详情', result);
      this.props.dispatch({
        type: TOPIC_DETAIL_DATA,
        data: result.data
      });
    }).catch((error) => {
      showToast(error.message)
    });
  }


  getMemberData = (username: string)=>{
    navigateTo({
      url:`/pages/member/index?username=${username}`
    })
  }

  render() {

    const {topicDetail,topicReplies} = this.props;

    if(isEmpty(topicDetail)){
      return <View />;
    }


    const data = topicDetail && topicDetail[0];

    const difftime = getDiffTimeStamp(data.last_modified);

    console.log('render topicReplies',topicReplies)

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
                 {/*小程序才使用解析markdown的插件*/}
                {process.env.TARO_ENV ==='weapp' && (
                  <TaroRichText
                    raw={false}
                    type='markdown'
                    richText={data.content}
                  />
                )}

                {process.env.TARO_ENV === 'alipay' && (
                  <Text className='pages-detail-index__topic__bottom__content__text'>{data.content}</Text>
                )}

                {process.env.TARO_ENV !== 'alipay' && process.env.TARO_ENV !== 'weapp' &&  (
                  <RichText
                    className='pages-detail-index__topic__bottom__content__text'
                    nodes={data.content}
                  />
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
                    {process.env.TARO_ENV !=='alipay' && (
                      <RichText
                        nodes={item.content}
                        className='pages-detail-index__reply__left__info__bottom__content'
                      />
                    )}
                    {process.env.TARO_ENV === 'alipay' && (
                      <Text className='pages-detail-index__reply__left__info__bottom__content'>{item.content}</Text>
                    )}
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

export default DetailPage as ComponentClass

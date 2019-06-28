import Taro, {navigateTo, showToast} from '@tarojs/taro'
import {AtAvatar, AtTag} from "taro-ui";
import {connect} from "@tarojs/redux";
import {Text, View,ScrollView} from '@tarojs/components'
import './index.scss'
import api from "../../utils/api";
import callAPI from "../../utils/callAPI";
import {LATEST_TOPIC_LIST} from "../../constants";
import showAlert from "../../utils/showAlert";
import showLoading from "../../utils/showLoading";


@connect(
  state => state
)
class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '首页'
  }

  static defaultProps = {
    latestTopicList: {
      last_reply_by: '',//最新回复者
      last_modified: '', //最新回复时间戳
      replies: 0, //回复数
      title: '',
      member: {
        avatar_normal: '', //默认头像
        username: '',//昵称
      },
      node: {
        title: '',  //节点
      }
    }
  }

  componentWillMount() {
    showLoading();
    this.getList();
  }

  getList = () => {
    switch (process.env.TARO_ENV) {
      case 'h5':
        showAlert('暂不支持H5哦~');
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
      console.log('获取最新节点', result);
      const {latestTopicsList} = this.props;
      console.log('LatestTopicsList', latestTopicsList)
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
    console.log('latestTopicList', latestTopicList);

    return (
      <View className='pages-index-index'>
      <ScrollView
          scrollY
      >
        {latestTopicList && latestTopicList.length > 0 && latestTopicList.map((item,i)=>{
          const avatar = `https:${item.member.avatar_normal}`;
          // let lastReplyText = this.humandate(new Date(),item.last_modified * 1000);
          return (
              <View
                  className='pages-index-index__block'
                  key={`${i}-${item.id}`}
                  onClick={this.goDetail.bind(this,item.id)}
              >
                <View className='pages-index-index__block__left'>
                  <View className='pages-index-index__block__left__thumb'>
                    <AtAvatar
                        className='pages-index-index__block__left__thumb__img'
                        image={avatar}
                        size='small'
                    />
                  </View>
                  <View className='pages-index-index__block__left__info'>
                    <Text className='pages-index-index__block__left__info__title'>{item.title}</Text>
                    <View className='pages-index-index__block__left__info__subtitle'>
                      {/*<Text className='pages-index-index__block__left__info__subtitle__node-title'>{item.node.title}</Text>*/}
                      <AtTag
                          // active
                          className='pages-index-index__block__left__info__subtitle__node-title'
                          size='small'
                          type='primary'
                      >
                        {item.node.title}
                      </AtTag>
                      <View className='pages-index-index__block__left__info__subtitle__dot'>
                        {/*<AtIcon*/}
                        {/*value='user'*/}
                        {/*size={12}*/}
                        {/*/>*/}
                        <Text className='pages-index-index__block__left__info__subtitle__dot__inner'>•</Text>
                      </View>
                      <Text className='pages-index-index__block__left__info__subtitle__username'>{item.member.username}</Text>
                      {item.last_reply_by ? (
                          <View className='pages-index-index__block__left__info__subtitle__last_reply_icon'>
                            {/*<AtIcon*/}
                            {/*value='eye'*/}
                            {/*size={12}*/}
                            {/*/>*/}
                            <Text className='pages-index-index__block__left__info__subtitle__last_reply_icon__inner'>•</Text>
                          </View>
                      ) : null}
                      {item.last_reply_by && (
                          <Text className='pages-index-index__block__left__info__subtitle__last_reply_by'>最新回复来自
                            <Text className='pages-index-index__block__left__info__subtitle__last_reply_by__username'>{item.last_reply_by}</Text>
                          </Text>
                      )}

                    </View>
                  </View>
                </View>
                <View className='pages-index-index__block__right'>

                  <View className='pages-index-index__block__right__inner'>
                    <AtTag
                        // active
                        className='pages-index-index__block__right__inner__tag'
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

      </View>
    )
  }
}

export default Index

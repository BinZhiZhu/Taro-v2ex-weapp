import Taro, {ComponentClass, Config, showToast} from "@tarojs/taro"
import {Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import callAPI from "@/utils/callAPI";
import api from "@/utils/api";
import showLoading from "@/utils/showLoading";
import AtTag from "@/taro-ui/components/tag1";
import AtAvatar from "@/taro-ui/components/avatar";
import {MEMBER_INFO_DATA} from "../../constants";
import './index.scss'


type pageState = {
  username: string
}

type memberInfo = {
  username: string,
  location: string,
  tagline: string,
  github: string,
  website: string
  twitter: string,
  url: string,
  avatar_normal: string
}

type pageProps = {
  dispatch: any,
  memberInfo: memberInfo
}

interface memberData {
  data: Array<memberInfo>
}
@connect(
  state=>state
)
class MemberPage extends Taro.Component<pageProps,pageState>{

  config: Config = {
    navigationBarTitleText: '个人主页'
  }

  constructor(props){
    super(props)
    this.state = {
      username: ''
    }
  }

  componentWillMount() {
    showLoading()
    const params = this.$router.params;
    if(params.username){
      this.setState({
        username:params.username || ''
      },()=>{
        this.getMemberInfo()
      })
    }
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: MEMBER_INFO_DATA,
      data: null
    });
  }


  getMemberInfo = () =>{
    const {username} = this.state;
    callAPI({
      url: api.getUserinfo({
        username
      })
    }).then((result: memberData) => {
      Taro.hideLoading();
      console.log('获取用户信息', result);
      this.props.dispatch({
        type: MEMBER_INFO_DATA,
        data: result.data
      });
    }).catch((error) => {
      showToast(error.message)
    });
  }


  render() {

    const {memberInfo} = this.props;

    const avatar = memberInfo && memberInfo.avatar_normal;

    return (
      <View className='pages-member-index'>
        <View className='pages-member-index__avatar'>
          <AtAvatar
            image={avatar}
            className='pages-member-index__avatar__thumb'
          />
          <AtTag
            active
            className='pages-member-index__avatar__thumb__status'
            size='small'
            type='primary'
          >
            ONELINE
          </AtTag>
        </View>
        <View className='pages-member-index__info'>
          <View className='pages-member-index__info__inner'>
            <Text className='pages-member-index__info__inner__title'>用户名</Text>
            <Text className='pages-member-index__info__inner__value'>{memberInfo.username}</Text>
          </View>
          <View className='pages-member-index__info__inner'>
            <Text className='pages-member-index__info__inner__title'>城市</Text>
            <Text className='pages-member-index__info__inner__value'>{memberInfo.location ? memberInfo.location : '未设置'}</Text>
          </View>
          <View className='pages-member-index__info__inner'>
          <Text className='pages-member-index__info__inner__title'>座右铭</Text>
          <Text className='pages-member-index__info__inner__value'>{memberInfo.tagline ? memberInfo.tagline : '未设置'}</Text>
          </View>
          <View className='pages-member-index__info__inner'>
            <Text className='pages-member-index__info__inner__title'>GitHub</Text>
            <Text className='pages-member-index__info__inner__value'>{memberInfo.github ? memberInfo.github : '未设置'}</Text>
          </View>
          <View className='pages-member-index__info__inner'>
            <Text className='pages-member-index__info__inner__title'>博客</Text>
            <Text className='pages-member-index__info__inner__value'>{memberInfo.website ? memberInfo.website : '未设置'}</Text>
          </View>
          <View className='pages-member-index__info__inner'>
            <Text className='pages-member-index__info__inner__title'>twitter</Text>
            <Text className='pages-member-index__info__inner__value'>{memberInfo.twitter ? memberInfo.twitter : '未设置'}</Text>
          </View>
          <View className='pages-member-index__info__inner'>
            <Text className='pages-member-index__info__inner__title'>传送门</Text>
            <Text className='pages-member-index__info__inner__value'>{memberInfo.url}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default MemberPage as ComponentClass

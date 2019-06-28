import Taro, {showToast} from "@tarojs/taro"
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import showLoading from "../../utils/showLoading";
import showAlert from "../../utils/showAlert";
import callAPI from "../../utils/callAPI";
import api from "../../utils/api";
import {TOPIC_DETAIL_DATA} from "../../constants";

@connect(
  state=>state
)
class Index extends Taro.Component{

  state = {
    topic_id: 0
  }

  componentWillMount() {
    showLoading();
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

  getList = () => {
    switch (process.env.TARO_ENV) {
      case 'h5':
        showAlert('暂不支持H5哦~');
        break;
      case 'weapp':
        this.getTopicDetail();
        break;
    }
  }

  getTopicDetail = () => {
    const {topic_id}  =this.state;
    callAPI({
      url: api.getReplies({
        topic_id
      }),
    }).then((result) => {
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

  render() {
    return (
      <View className=''>

      </View>
    )
  }
}

export default Index

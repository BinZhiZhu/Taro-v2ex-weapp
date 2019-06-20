import Taro from "@tarojs/taro"
import {Image, View} from "@tarojs/components";
import { AtCurtain,AtButton} from 'taro-ui'
import './index.scss'

class Index extends Taro.Component{

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
      curtainPng: 'https://taro-ui.aotu.io/h5/static/images/curtain.png'
    }
  }
  handleChange () {
    this.setState({
      isOpened: true
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }

  render() {

    const {curtainPng,isOpened} = this.state;

    return (
      <View>
        <AtCurtain
          isOpened={isOpened}
          onClose={this.onClose.bind(this)}
        >
          <Image
            style='width:100%;height:250px'
            src={curtainPng}
          />
        </AtCurtain>
        <AtButton
          type='primary'
          onClick={this.handleChange.bind(this)}
        >
          右上关闭幕帘
        </AtButton>
      </View>
    );
  }
}

export default Index

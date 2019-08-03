import Taro from '@tarojs/taro'
import {AtActivityIndicator} from "taro-ui";

/**
 * 页面加载器
 */
class Loading extends Taro.Component {

  static defaultProps = {
    content: '加载中...',
    mode: 'center',
    color:'#eb6e48'
  };

  render() {
    const { color, content, mode } = this.props;

    return (
      <AtActivityIndicator
        mode={mode}
        content={content}
        color={color}
      />
    );
  }
}

export default Loading;

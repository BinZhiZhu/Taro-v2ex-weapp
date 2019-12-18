import Taro from '@tarojs/taro';
import { connect } from '@tarojs/redux';

/**
 *  分享组件，统一dispatch
 * @param opts
 * @returns {function(*): WithShare}
 * @see https://juejin.im/post/5b99da5d5188255c6f1e084e
 */
function withShare(opts = {}) {

  // 设置默认
  const defalutPath = 'pages/index/index';
  const defalutTitle = '默认标题';
  const defaultImageUrl = '';

  return function demoComponent(Component) {
    // redux里面的用户数据
    // @connect(({ user }) => ({
    //   userInfo: user.userInfo
    // }))
    class WithShare extends Component {
      async componentWillMount() {
        Taro.showShareMenu({
          withShareTicket: true
        });

        if (super.componentWillMount) {
          super.componentWillMount();
        }
      }

      // 点击分享的那一刻会进行调用
      onShareAppMessage() {
        const { userInfo } = this.props;

        let { title, imageUrl, path = null,shareDesc} = opts;

        // 从继承的组件获取配置
        if (this.$setSharePath && typeof this.$setSharePath === 'function') {
          path = this.$setSharePath();
        }

        // 从继承的组件获取配置
        if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
          title = this.$setShareTitle();
        }

        // 描述内容不是必需的
        if (this.$setShareDesc && typeof this.$setShareDesc === 'function') {
          shareDesc = this.$setShareDesc();
        }

        // 从继承的组件获取配置
        if (
          this.$setShareImageUrl &&
          typeof this.$setShareImageUrl === 'function'
        ) {
          imageUrl = this.$setShareImageUrl();
        }

        if (!path) {
          path = defalutPath;
        }

        // 每条分享都补充用户的分享id
        // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
        const sharePath = `${path}`;

        const shareData = {
          shareDesc,
          sharePath,
          imageUrl,
          title
        }

        console.log('分享出去的信息',shareData)

        return {
          desc: shareDesc,
          title: title || defalutTitle,
          path: sharePath,
          imageUrl: imageUrl || defaultImageUrl
        };
      }

      render() {
        return super.render();
      }
    }

    return WithShare;
  };
}

export default withShare;


import Taro from "@tarojs/taro";

/**
 * 显示toast信息
 *
 * @param text
 */
const showToast = (text) => {
  Taro.showToast({
    title: text,
    icon: 'none',
  })
};

export default showToast;

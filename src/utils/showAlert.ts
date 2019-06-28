import Taro from "@tarojs/taro";


/**
 * 弹窗提示
 *
 * @param content
 */
const showAlert = (content) => {
  Taro.hideLoading();
  return new Promise((resolve, reject) => {
    Taro.showModal({
      title: '提示',
      content: content,
      showCancel: false,
      success: (res) => {
        if (res.confirm) {
          resolve();
        } else {
          reject();
        }
      },
    });
  });
};

export default showAlert;

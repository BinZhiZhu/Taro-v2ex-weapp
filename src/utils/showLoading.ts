import Taro from "@tarojs/taro";

const showLoading = (obj: any = null): void => {
  Taro.showLoading(obj ? obj : {
    title: '加载中',
  })
};

export default showLoading;

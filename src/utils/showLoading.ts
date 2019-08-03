import Taro from "@tarojs/taro";

const showLoading = (obj: any = null): void => {
  Taro.showLoading(obj ? obj : {
    title: '努力加载中~',
  })
};

export default showLoading;

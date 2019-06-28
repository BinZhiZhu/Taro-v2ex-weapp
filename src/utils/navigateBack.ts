import Taro from "@tarojs/taro";

/**
 * 返回上一页
 */
const navigateBack = (): Promise<any> => {
  return Taro.navigateBack();
};

export default navigateBack;

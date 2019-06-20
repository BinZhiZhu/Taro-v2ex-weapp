import Taro from "@tarojs/taro";
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

/**
 * 跳转页面
 *
 * @param url
 * @param params
 */
const navigateTo = (url: string, params = {}): void => {
  if (isEmpty(url)) {
    return;
  }
  if (!isString(url)) {
    console.warn('navigateTo URL必须是字符串');
    return;
  }

  if (url.startsWith('http://') || url.startsWith('https://')) {
    if (process.env.TARO_ENV === 'h5') {
      window.location.href = url;
    } else {
      navigateTo('/pages/web/index', {
        url: url,
      });
    }
    return;
  }

  if(params){
    // TODO
  }

  console.log('准备跳转至', url);



  // @ts-ignore
  return Taro.navigateTo({
    url: url,
  })
};

export default navigateTo;

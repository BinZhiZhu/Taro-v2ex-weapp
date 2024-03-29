import Taro from "@tarojs/taro";

/**
 * 发起API请求
 *
 * @param params
 */
const callAPI = (params) => {
  return new Promise((resolve, reject) => {
    Taro.request(params).then((result)=>{
      resolve(result)
    }).catch((error)=>{
      reject(error)
    })
  })
};

export default callAPI;

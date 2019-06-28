import { combineReducers } from 'redux'
import {
  LATEST_TOPIC_LIST
} from "./constants";

// getLatestTopic

//获取最新的首页主题
function latestTopicList (state = {}, action) {
  switch (action.type) {
    // 全部覆盖
    case LATEST_TOPIC_LIST:
      return action.data;
    default:
      return state
  }
}



export default combineReducers({
  latestTopicList
})

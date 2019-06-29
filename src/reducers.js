import { combineReducers } from 'redux'
import {
  LATEST_TOPIC_LIST,
  TOPIC_DETAIL_DATA,
  TOPIC_REPLIES_DATA,
  HOT_TOPIC_DATA
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

function topicReplies(state = {},action) {
  switch (action.type) {
    case TOPIC_REPLIES_DATA:
      return action.data;
    default:
      return state;
  }
}


function topicDetail(state = {},action) {
  switch (action.type) {
    case TOPIC_DETAIL_DATA:
      return action.data;
    default:
      return state;
  }
}



function hotTopics(state = {},action) {
  switch (action.type) {
    case HOT_TOPIC_DATA:
      return action.data;
    default:
      return state;
  }
}



export default combineReducers({
  latestTopicList,
  topicReplies,
  topicDetail,
  hotTopics
})

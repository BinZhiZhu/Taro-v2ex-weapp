import { combineReducers } from 'redux';
import { LATEST_TOPIC_LIST, TOPIC_DETAIL_DATA, TOPIC_REPLIES_DATA, HOT_TOPIC_DATA, NODE_INFO_DATA, MEMBER_INFO_DATA } from "./constants";

// getLatestTopic

//获取最新的首页主题
function latestTopicList(state = {}, action) {
  switch (action.type) {
    // 全部覆盖
    case LATEST_TOPIC_LIST:
      return action.data;
    default:
      return state;
  }
}

/**
 *  获取回复
 * @param state
 * @param action
 * @returns {*}
 */
function topicReplies(state = {}, action) {
  switch (action.type) {
    case TOPIC_REPLIES_DATA:
      return action.data;
    default:
      return state;
  }
}

/**
 * 获取帖子详情
 * @param state
 * @param action
 * @returns {*}
 */
function topicDetail(state = {}, action) {
  switch (action.type) {
    case TOPIC_DETAIL_DATA:
      return action.data;
    default:
      return state;
  }
}

/**
 * 获取节点详情
 * @param state
 * @param action
 * @returns {*}
 */
function getNodeInfo(state = {}, action) {
  switch (action.type) {
    case NODE_INFO_DATA:
      return action.data;
    default:
      return state;
  }
}

/**
 *  获取最热
 * @param state
 * @param action
 * @returns {*}
 */
function hotTopics(state = {}, action) {
  switch (action.type) {
    case HOT_TOPIC_DATA:
      return action.data;
    default:
      return state;
  }
}

/**
 *  获取用户信息
 * @param state
 * @param action
 * @returns {*}
 */
function memberInfo(state = {}, action) {
  switch (action.type) {
    case MEMBER_INFO_DATA:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  latestTopicList,
  topicReplies,
  topicDetail,
  hotTopics,
  getNodeInfo,
  memberInfo
});
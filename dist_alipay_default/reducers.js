"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("./npm/redux/lib/redux.js");

var _constants = require("./constants.js");

// getLatestTopic

//获取最新的首页主题
function latestTopicList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    // 全部覆盖
    case _constants.LATEST_TOPIC_LIST:
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
function topicReplies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.TOPIC_REPLIES_DATA:
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
function topicDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.TOPIC_DETAIL_DATA:
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
function getNodeInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.NODE_INFO_DATA:
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
function hotTopics() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.HOT_TOPIC_DATA:
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
function memberInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.MEMBER_INFO_DATA:
      return action.data;
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({
  latestTopicList: latestTopicList,
  topicReplies: topicReplies,
  topicDetail: topicDetail,
  hotTopics: hotTopics,
  getNodeInfo: getNodeInfo,
  memberInfo: memberInfo
});
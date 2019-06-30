'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HOST_URI = 'https://www.v2ex.com/api/';
// 获取节点
// 所有的节点
var ALL_NODE = 'nodes/all.json';
// 获取节点信息
// 节点id :id 节点名 :name
var NODE_INFO = 'nodes/show.json';
// 获取最新的主题
var LATEST_TOPIC = 'topics/latest.json';
// 获取热议主题
var HOT_TOPIC = 'topics/hot.json';
// 获取主题信息  :id | (:username | :node_id | :node_name)
var GET_TOPICS = 'topics/show.json';
//  exp : https://www.v2ex.com/api/replies/show.json?topic_id=578459
// 获取回复 :topic_id (:page , :page_size)?
var GET_REPLIES = 'replies/show.json';
// 获取用户信息 :username
var GET_USERINFO = 'members/show.json';
function queryString(obj) {
  if (!obj) {
    return '';
  }
  return '?' + Object.keys(obj).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
}
function getAllNode() {
  return "https://www.v2ex.com/api/nodes/all.json";
}
function getNodeInfo(o) {
  return "https://www.v2ex.com/api/nodes/show.json" + queryString(o);
}
function getHotNodes() {
  return "https://www.v2ex.com/api/topics/hot.json";
}
function getLatestTopic(o) {
  return "https://www.v2ex.com/api/topics/latest.json" + queryString(o);
}
function getReplies(o) {
  return "https://www.v2ex.com/api/replies/show.json" + queryString(o);
}
function getTopics(o) {
  return "https://www.v2ex.com/api/topics/show.json" + queryString(o);
}
function getUserinfo(o) {
  return "https://www.v2ex.com/api/members/show.json" + queryString(o);
}
exports.default = {
  getAllNode: getAllNode,
  getNodeInfo: getNodeInfo,
  getLatestTopic: getLatestTopic,
  getReplies: getReplies,
  getHotNodes: getHotNodes,
  queryString: queryString,
  getTopics: getTopics,
  getUserinfo: getUserinfo
};
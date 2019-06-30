"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _isEmpty = require("../../npm/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _index3 = require("../../npm/_tarojs/redux/index.js");

var _showLoading = require("../../utils/showLoading.js");

var _showLoading2 = _interopRequireDefault(_showLoading);

var _showAlert = require("../../utils/showAlert.js");

var _showAlert2 = _interopRequireDefault(_showAlert);

var _callAPI = require("../../utils/callAPI.js");

var _callAPI2 = _interopRequireDefault(_callAPI);

var _api = require("../../utils/api.js");

var _api2 = _interopRequireDefault(_api);

var _constants = require("../../constants.js");

var _formatAvatarUrl = require("../../utils/formatAvatarUrl.js");

var _formatAvatarUrl2 = _interopRequireDefault(_formatAvatarUrl);

var _diffTimeStamp = require("../../utils/diffTimeStamp.js");

var _diffTimeStamp2 = _interopRequireDefault(_diffTimeStamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (state) {
  return state;
}), _dec(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "$compid__1", "$compid__2", "$compid__3", "topicDetail", "data", "difftime", "topicReplies", "topic_id", "dispatch"], _this.state = {
      topic_id: 0
    }, _this.clearData = function () {
      _this.props.dispatch({
        type: _constants.TOPIC_REPLIES_DATA,
        data: null
      });
      _this.props.dispatch({
        type: _constants.TOPIC_DETAIL_DATA,
        data: null
      });
    }, _this.getList = function () {
      switch ("alipay") {
        case 'h5':
          (0, _showAlert2.default)('暂不支持H5哦~');
          break;
        case 'weapp':
          _this.getTopicReplies();
          _this.getTopicDetail();
          break;
      }
    }, _this.getTopicReplies = function () {
      var topic_id = _this.state.topic_id;

      (0, _callAPI2.default)({
        url: _api2.default.getReplies({
          topic_id: topic_id
        })
      }).then(function (result) {
        _index2.default.hideLoading();
        console.log('获取帖子回复', result);
        _this.props.dispatch({
          type: _constants.TOPIC_REPLIES_DATA,
          data: result.data
        });
      }).catch(function (error) {
        (0, _index.showToast)(error.message);
      });
    }, _this.getTopicDetail = function () {
      var topic_id = _this.state.topic_id;

      (0, _callAPI2.default)({
        url: _api2.default.getTopics({
          id: topic_id
        })
      }).then(function (result) {
        _index2.default.hideLoading();
        if (result.status === 'error') {
          (0, _index.showToast)(result.message);
        }
        console.log('获取帖子详情', result);
        _this.props.dispatch({
          type: _constants.TOPIC_DETAIL_DATA,
          data: result.data
        });
      }).catch(function (error) {
        (0, _index.showToast)(error.message);
      });
    }, _this.getMemberData = function (username) {
      (0, _index.navigateTo)({
        url: "/pages/member/index?username=" + username
      });
    }, _this.customComponents = ["AtAvatar", "AtTag", "TaroRichText"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      (0, _showLoading2.default)();

      this.clearData();

      var params = this.$router.params;
      console.log('params', params);
      if (params.topic_id) {
        this.setState({
          topic_id: params.topic_id
        }, function () {
          _this2.getList();
        });
      }
    }

    /**
     * 获取回复
     */


    /**
     * 获取话题
     */

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__1 = (0, _index.genCompid)(__prefix + "$compid__1");
      var $compid__2 = (0, _index.genCompid)(__prefix + "$compid__2");
      var $compid__3 = (0, _index.genCompid)(__prefix + "$compid__3");

      var _props = this.__props,
          topicDetail = _props.topicDetail,
          topicReplies = _props.topicReplies;


      if ((0, _isEmpty2.default)(topicDetail)) {
        return null;
      }

      var data = topicDetail[0];

      var difftime = (0, _diffTimeStamp2.default)(data.last_modified);

      var anonymousState__temp = data.member.avatar_normal ? (0, _formatAvatarUrl2.default)(data.member.avatar_normal) : null;
      var loopArray0 = topicReplies && topicReplies.length > 0 ? topicReplies.map(function (item, i) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var avatar = (0, _formatAvatarUrl2.default)(item.$original.member.avatar_normal);
        var lastReplyText = (0, _diffTimeStamp2.default)(item.$original.last_modified);
        var $loopState__temp3 = topicReplies && topicReplies.length > 0 ? i + "-" + item.$original.id : null;
        var $compid__0 = (0, _index.genCompid)(__prefix + "htFJiDIHeP" + i);
        avatar && _index.propsManager.set({
          "size": "small",
          "image": item.$original.member.avatar_normal
        }, $compid__0);
        return {
          avatar: avatar,
          lastReplyText: lastReplyText,
          $loopState__temp3: $loopState__temp3,
          $compid__0: $compid__0,
          $original: item.$original
        };
      }) : [];
      data.member.avatar_normal && _index.propsManager.set({
        "size": "small",
        "className": "pages-detail-index__topic__top__left__thumb",
        "image": anonymousState__temp
      }, $compid__1);
      data && _index.propsManager.set({
        "className": "pages-detail-index__topic__top__right__title",
        "size": "small",
        "type": "primary"
      }, $compid__2);
      data && _index.propsManager.set({
        "raw": false,
        "type": "markdown",
        "richText": data.content
      }, $compid__3);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3,
        topicDetail: topicDetail,
        data: data,
        difftime: difftime,
        topicReplies: topicReplies
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component), _class2.$$events = ["getMemberData"], _class2.$$componentPath = "pages/detail/index", _temp2)) || _class);
exports.default = Index;

Page(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(Index, true));
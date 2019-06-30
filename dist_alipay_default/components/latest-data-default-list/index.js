"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/_tarojs/redux/index.js");

var _formatAvatarUrl = require("../../utils/formatAvatarUrl.js");

var _formatAvatarUrl2 = _interopRequireDefault(_formatAvatarUrl);

var _diffTimeStamp = require("../../utils/diffTimeStamp.js");

var _diffTimeStamp2 = _interopRequireDefault(_diffTimeStamp);

var _showLoading = require("../../utils/showLoading.js");

var _showLoading2 = _interopRequireDefault(_showLoading);

var _showAlert = require("../../utils/showAlert.js");

var _showAlert2 = _interopRequireDefault(_showAlert);

var _callAPI = require("../../utils/callAPI.js");

var _callAPI2 = _interopRequireDefault(_callAPI);

var _api = require("../../utils/api.js");

var _api2 = _interopRequireDefault(_api);

var _constants = require("../../constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LatestDataDefaultList = (_dec = (0, _index3.connect)(function (state) {
  return state;
}), _dec(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(LatestDataDefaultList, _Taro$Component);

  function LatestDataDefaultList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LatestDataDefaultList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LatestDataDefaultList.__proto__ || Object.getPrototypeOf(LatestDataDefaultList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray2", "latestTopicList", "dispatch"], _this.getList = function () {
      switch ("alipay") {
        case 'h5':
          (0, _showAlert2.default)('暂不支持H5哦~');
          break;
        case 'weapp':
          _this.getLatestTopic();
          break;
      }
    }, _this.getLatestTopic = function () {
      (0, _callAPI2.default)({
        url: _api2.default.getLatestTopic()
      }).then(function (result) {
        _index2.default.hideLoading();
        if (result.status === 'error') {
          (0, _index.showToast)(result.message);
        }
        console.log('获取最新节点', result);
        _this.props.dispatch({
          type: _constants.LATEST_TOPIC_LIST,
          data: result.data
        });
      }).catch(function (error) {
        (0, _index.showToast)(error.message);
      });
    }, _this.goDetail = function (topic_id) {
      (0, _index.navigateTo)({
        url: "/pages/detail/index?topic_id=" + topic_id
      });
    }, _this.customComponents = ["AtAvatar", "AtTag", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LatestDataDefaultList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(LatestDataDefaultList.prototype.__proto__ || Object.getPrototypeOf(LatestDataDefaultList.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }

    // static defaultProps = {
    //   latestTopicList: [
    //     {
    //       last_reply_by: '',//最新回复者
    //       last_modified: '', //最新回复时间戳
    //       replies: 0, //回复数
    //       title: '',
    //       member: {
    //         avatar_normal: '', //默认头像
    //         username: '',//昵称
    //       },
    //       node: {
    //         title: '',  //节点
    //       }
    //     }
    //   ]
    // }
    //
    //
    // static propTypes = {
    //   latestTopicList: propTypes.array
    // }


  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      (0, _showLoading2.default)();
      this.getList();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var latestTopicList = this.__props.latestTopicList;


      var loopArray2 = latestTopicList && latestTopicList.length > 0 ? latestTopicList.map(function (item, i) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var avatar = (0, _formatAvatarUrl2.default)(item.$original.member.avatar_normal);
        var lastReplyText = (0, _diffTimeStamp2.default)(item.$original.last_modified);

        var $loopState__temp2 = latestTopicList && latestTopicList.length > 0 ? i + "-" + item.$original.id : null;
        var $compid__8 = (0, _index.genCompid)(__prefix + "yAhASxtmQY" + i);
        avatar && _index.propsManager.set({
          "className": "pages-index-index-homepage__block__top__left__thumb",
          "size": "small",
          "image": avatar
        }, $compid__8);
        var $compid__9 = (0, _index.genCompid)(__prefix + "fDsjliuwng" + i);
        _index.propsManager.set({
          "className": "pages-index-index-homepage__block__top__left__right__top__node__title",
          "size": "small",
          "type": "primary"
        }, $compid__9);
        var $compid__10 = (0, _index.genCompid)(__prefix + "JPQjWeykjA" + i);
        _index.propsManager.set({
          "className": "pages-index-index-homepage__block__top__left__right__top__icon",
          "value": "message",
          "color": "#666",
          "size": 12
        }, $compid__10);
        return {
          avatar: avatar,
          lastReplyText: lastReplyText,
          $loopState__temp2: $loopState__temp2,
          $compid__8: $compid__8,
          $compid__9: $compid__9,
          $compid__10: $compid__10,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray2: loopArray2,
        latestTopicList: latestTopicList
      });
      return this.__state;
    }
  }]);

  return LatestDataDefaultList;
}(_index2.default.Component), _class2.$$events = ["goDetail"], _class2.$$componentPath = "components/latest-data-default-list/index", _temp2)) || _class);
exports.default = LatestDataDefaultList;

Component(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(LatestDataDefaultList));
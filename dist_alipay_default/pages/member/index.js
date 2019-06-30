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

var _callAPI = require("../../utils/callAPI.js");

var _callAPI2 = _interopRequireDefault(_callAPI);

var _api = require("../../utils/api.js");

var _api2 = _interopRequireDefault(_api);

var _constants = require("../../constants.js");

var _showLoading = require("../../utils/showLoading.js");

var _showLoading2 = _interopRequireDefault(_showLoading);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__6", "$compid__7", "memberInfo", "username", "dispatch"], _this.config = {
      navigationBarTitleText: '个人主页'
    }, _this.state = {
      username: ''
    }, _this.getMemberInfo = function () {
      var username = _this.state.username;

      (0, _callAPI2.default)({
        url: _api2.default.getUserinfo({
          username: username
        })
      }).then(function (result) {
        _index2.default.hideLoading();
        console.log('获取用户信息', result);
        _this.props.dispatch({
          type: _constants.MEMBER_INFO_DATA,
          data: result.data
        });
      }).catch(function (error) {
        (0, _index.showToast)(error.message);
      });
    }, _this.customComponents = ["AtAvatar", "AtTag"], _temp), _possibleConstructorReturn(_this, _ret);
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
      var params = this.$router.params;
      if (params.username) {
        this.setState({
          username: params.username || ''
        }, function () {
          _this2.getMemberInfo();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.dispatch({
        type: _constants.MEMBER_INFO_DATA,
        data: null
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__6 = (0, _index.genCompid)(__prefix + "$compid__6");
      var $compid__7 = (0, _index.genCompid)(__prefix + "$compid__7");

      var memberInfo = this.__props.memberInfo;


      var avatar = memberInfo && memberInfo.avatar_normal;

      _index.propsManager.set({
        "image": avatar,
        "className": "pages-member-index__avatar__thumb"
      }, $compid__6);
      _index.propsManager.set({
        "active": true,
        "className": "pages-member-index__avatar__thumb__status",
        "size": "small",
        "type": "primary"
      }, $compid__7);
      Object.assign(this.__state, {
        $compid__6: $compid__6,
        $compid__7: $compid__7,
        memberInfo: memberInfo
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component), _class2.$$events = [], _class2.$$componentPath = "pages/member/index", _temp2)) || _class);
exports.default = Index;

Page(require('../../npm/_tarojs/taro-alipay/index.js').default.createComponent(Index, true));
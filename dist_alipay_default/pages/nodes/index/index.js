"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../../npm/_tarojs/taro-alipay/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/_tarojs/redux/index.js");

var _allNodes = require("../../../utils/allNodes.js");

var _allNodes2 = _interopRequireDefault(_allNodes);

var _callAPI = require("../../../utils/callAPI.js");

var _callAPI2 = _interopRequireDefault(_callAPI);

var _api = require("../../../utils/api.js");

var _api2 = _interopRequireDefault(_api);

var _constants = require("../../../constants.js");

var _showLoading = require("../../../utils/showLoading.js");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray1", "$compid__4", "$compid__5", "allNodesList", "getNodeInfo", "isShow", "dispatch"], _this.config = {
      navigationBarTitleText: '节点'
    }, _this.state = {
      isShow: false
      // goDetail = (name)=>{
      //   navigateTo({
      //     url:`/pages/nodes/detail/index?name=${name}`
      //   });
      // }

    }, _this.onShowLayout = function (name) {
      (0, _showLoading2.default)();
      _this.getNodeDetail(name);
      _this.setState({
        isShow: true
      });
    }, _this.handleClose = function () {
      _this.setState({
        isShow: false
      }, function () {
        _this.props.dispatch({
          type: _constants.NODE_INFO_DATA,
          data: null
        });
      });
    }, _this.getNodeDetail = function (name) {
      (0, _callAPI2.default)({
        url: _api2.default.getNodeInfo({
          name: name
        })
      }).then(function (result) {
        _index2.default.hideLoading();
        if (result.status === 'error') {
          (0, _index.showToast)(result.message);
        }
        console.log('获取节点信息', result);
        _this.props.dispatch({
          type: _constants.NODE_INFO_DATA,
          data: result.data
        });
      }).catch(function (error) {
        (0, _index.showToast)(error.message);
      });
    }, _this.customComponents = ["AtFloatLayout", "AtAvatar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__4 = (0, _index.genCompid)(__prefix + "$compid__4");
      var $compid__5 = (0, _index.genCompid)(__prefix + "$compid__5");

      var isShow = this.__state.isShow;
      var getNodeInfo = this.__props.getNodeInfo;


      var allNodesList = _allNodes2.default;

      var loopArray1 = allNodesList ? allNodesList.map(function (node, i) {
        node = {
          $original: (0, _index.internal_get_original)(node)
        };
        var $loopState__temp2 = allNodesList ? i + "-" + node.$original.id : null;
        var $anonymousCallee__0 = node.$original.nodes ? node.$original.nodes.map(function (item, j) {
          item = {
            $original: (0, _index.internal_get_original)(item)
          };
          var $loopState__temp4 = node.$original.nodes ? "" + j : null;
          return {
            $loopState__temp4: $loopState__temp4,
            $original: item.$original
          };
        }) : [];
        return {
          $loopState__temp2: $loopState__temp2,
          $anonymousCallee__0: $anonymousCallee__0,
          $original: node.$original
        };
      }) : [];
      getNodeInfo && _index.propsManager.set({
        "isOpened": isShow,
        "title": getNodeInfo.title,
        "onClose": this.handleClose.bind(this)
      }, $compid__4);
      getNodeInfo && _index.propsManager.set({
        "className": "pages-nodes-index__layout__info__left__avatar",
        "image": getNodeInfo.avatar_normal
      }, $compid__5);
      Object.assign(this.__state, {
        loopArray1: loopArray1,
        $compid__4: $compid__4,
        $compid__5: $compid__5,
        allNodesList: allNodesList,
        getNodeInfo: getNodeInfo
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index2.default.Component), _class2.$$events = ["onShowLayout"], _class2.$$componentPath = "pages/nodes/index/index", _temp2)) || _class);
exports.default = Index;

Page(require('../../../npm/_tarojs/taro-alipay/index.js').default.createComponent(Index, true));
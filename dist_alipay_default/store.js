"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require("./npm/redux/lib/redux.js");

var _index = require("./npm/redux-thunk/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _reduxLogger = require("./npm/redux-logger/dist/redux-logger.js");

var _reducers = require("./reducers.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入redux-devtools

// import throttle from "redux-throttle";
var composeEnhancers = null;
// 引入根reducers


// 引入需要的中间件


var isWeb = false;

var middlewares = [_index2.default];

// RN中如果打印这个，内容实在太多了
{
  middlewares.push((0, _reduxLogger.createLogger)());
}

// 创建store
function configStore() {
  return (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middlewares));
}
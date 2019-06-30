import { createStore, applyMiddleware } from 'redux';

// 引入需要的中间件
import thunkMiddleware from 'redux-thunk';
// import throttle from "redux-throttle";

// 引入根reducers
import rootReducer from "./reducers";

//引入redux-devtools
let composeEnhancers = null;

const isWeb = false;

const middlewares = [thunkMiddleware];

// RN中如果打印这个，内容实在太多了


// 创建store
export default function configStore() {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
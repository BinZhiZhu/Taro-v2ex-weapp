import { createStore, applyMiddleware,compose} from 'redux'

// 引入需要的中间件
import thunkMiddleware from 'redux-thunk'
// import throttle from "redux-throttle";
import { createLogger } from 'redux-logger'
// 引入根reducers
import rootReducer from './reducers'

//引入redux-devtools
let composeEnhancers = null;

const isWeb = process.env.TARO_ENV === 'h5';

if(isWeb){
   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const middlewares = [
  thunkMiddleware,
]

// RN中如果打印这个，内容实在太多了
if (process.env.TARO_ENV !== 'rn') {
  middlewares.push(createLogger())
}

// 创建store
export default function configStore () {
  return createStore(rootReducer, isWeb ? composeEnhancers(applyMiddleware(...middlewares)) :applyMiddleware(...middlewares) )
}

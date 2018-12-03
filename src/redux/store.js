
//创建store对象（根据reducers函数）

import reducers from './reducers' ;
//引入创建store对象的createStore函数和异步中间件applyMiddleware（结合trunk）
import {createStore , applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk' ;
//引入redux调试工具
import {composeWithDevTools} from 'redux-devtools-extension' ;


export default createStore(reducers , composeWithDevTools(applyMiddleware(thunk)) ) ;
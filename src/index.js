/**
 * 入口主js文件
 */

import React from 'react' ;
import ReactDOM from 'react-dom' ;
//引入路由组件
import Login from './containers/login' ;
import Register from './containers/register' ;
import Main from './containers/main' ;

import {Provider} from 'react-redux' ;
import store from './redux/store' ;
import {HashRouter , Switch , Route} from 'react-router-dom' ;
import './assets/less/index.less' ;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        {/*/表示默认匹配所有路径*/}
        <Route path='/' component={Main} />
      </Switch>
    </HashRouter>
  </Provider>
  , document.getElementById('app'));
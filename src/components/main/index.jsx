
//主组件
import React, {Component} from 'react';
import {Redirect , Route} from 'react-router-dom' ;
// import LaoBanInfo from '../laoban-info/index' ;
//引入容器组件 LaoBanInfo
import LaoBanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
//通过cookie判断是否有登陆行为
import Cookies from 'js-cookie';

class Main extends Component {
  //因为只要登陆过，就会存在user_id，
  //没登陆过，就重定向到登陆页面。
  

  render () {
    //判断用户是否有登录行为
    const userid = Cookies.get('userid');
    if(!userid){
      return <Redirect to="/login"/>
    }
    
    return (
      <div>
        <Route path="/laobaninfo" component={LaoBanInfo}/>
        <Route path="/dasheninfo" component={DashenInfo}/>
      </div>
    )
  }
}

export default Main;
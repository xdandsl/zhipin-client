
//主组件
import React, {Component} from 'react';
import {Redirect , Route} from 'react-router-dom' ;
//引入容器组件 LaoBanInfo
import LaoBanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
//通过cookie判断是否有登陆行为
import Cookies from 'js-cookie';
import {NavBar} from 'antd-mobile';
import Laoban from '../laoban/index';
import Message from '../message/index';
import Personal from '../personal/index';
import Footer from '../footer/index';


class Main extends Component {
  //定义数据：
  navList = [
    {path:'/dashen',title:'老板列表' , icon: 'dashen', text: '老板'},
    {path:'/laoban',title:'大神列表' , icon: 'laoban', text: '大神'},
    {path:'/message',title:'消息列表' , icon: 'message', text: '消息'},
    {path:'/personal',title:'个人中心' ,icon: 'personal', text: '个人'}
  ];


  render () {
    //判断用户是否有登录行为(借助js-cookie库来实现)
    const userid = Cookies.get('userid');
    if(!userid){
      return <Redirect to="/login"/>
    }

    //获取当前main路由组件的路径。
    const {pathname} = this.props.location ;
    //根据条件找到符合条件的一条数据，从而获取title值，决定navbar的值
   const currNav = this.navList.find(item => item.path === pathname );

    //主页面和消息和个人主页面都有头部的NavBar
    return (
      <div>
        {currNav ? <NavBar>{currNav.title}</NavBar> : null}
        <Route path="/laobaninfo" component={LaoBanInfo}/>
        <Route path="/dasheninfo" component={DashenInfo}/>
        <Route path="/laoban" component={Laoban}/>
        <Route path="/message" component={Message}/>
        <Route path="/personal" component={Personal}/>
        {currNav ? <Footer navList={this.navList} /> : null}
      </div>
    )
  }
}

export default Main;
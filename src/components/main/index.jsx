//主组件

import React, {Component} from 'react';
import {Redirect , Route} from 'react-router-dom' ;
//引入容器组件 LaoBanInfo
import LaoBanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import Footer from '../footer/index';
//通过cookie判断是否有登陆行为
import Cookies from 'js-cookie';
import {NavBar , Icon} from 'antd-mobile';

import Message from '../message/index';
import Personal from '../../containers/personal';
import PropTypes from 'prop-types';

import './index.less';


class Main extends Component {
  static propTypes = {
    user : PropTypes.object.isRequired
    };
  //定义数据：
  navList = [
    {path:'/dashen',title:'老板列表' , icon: 'dashen', text: '老板'},
    {path:'/laoban',title:'大神列表' , icon: 'laoban', text: '大神'},
    {path:'/message',title:'消息列表' , icon: 'message', text: '消息'},
    {path:'/personal',title:'个人中心' ,icon: 'personal', text: '个人'}
  ];


  render () {
    //首要:通过cookie决定用户操作的几个步骤
    //1,判断用户是否有登录行为(借助js-cookie库来实现)
    const userid = Cookies.get('userid');
    if(!userid){
      return <Redirect to="/login"/>
    }
    //2,如果有cookie,判断是否有redux管理的数据，因为用户会刷新页面，导致没有redux清空。没有，就去后台请求数据。
    if(!this.props.user._id){
      //发送ajax请求，请求个人信息
      this.props.getUserInfo();
      //当没有请求回来数据之后，加载loading图。
      return <Icon type="loading" size="lg" className="loading"/>
    }

    //3.如果有cookie,而且有redux管理的数据，直接登陆，渲染以下的组件。

    //注意的问题：如果用户直接访问/，让他直接老板/大神/信息完善页面(因为已经有user_id)
    //获取当前main路由组件的路径。
    const {pathname} = this.props.location ;
    if(pathname === '/'){
      return <Redirect to={this.props.user.redirectTo}/>
    }

    //根据条件找到符合条件的一条数据，从而获取title值，决定navbar的值
   const currNav = this.navList.find(item => item.path === pathname );

    //主页面和消息和个人主页面都有头部的NavBar
    return (
      <div>
        {currNav ? <NavBar className="header-top">{currNav.title}</NavBar> : null}
        <div className="content">
          <Route path="/laobaninfo" component={LaoBanInfo}/>
          <Route path="/dasheninfo" component={DashenInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
        </div>
        {currNav ? <Footer navList={this.navList} type={this.props.user.type}/> : null}
      </div>
    )
  }
}

export default Main;
/**
 * 主页面的底部：非路由组件
 */

import React, {Component} from 'react';
import './index.less'; //得在TabBar之前引入
import {TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
const Item = TabBar.Item;



class Footer extends Component {
  static propTypes = {
    navList : PropTypes.array.isRequired
  };

  //点击实现页面路由的跳转：（编程式导航）
  redirectTo = path => {
    this.props.history.push(path);
  };

  render () {
    //判断是大神界面还是老板页面。如果是大神页面，则第一个显示老板列表。否则显示大神列表
    //过滤navList,得到大神和老板中的一个。
    const type = 'laoban'; //从redux中获取状态
    const filter = type === 'laoban' ? '/dashen' : '/laoban';
    //过滤掉老板或大神的数据
    const currNavList = this.props.navList.filter(item => filter !== item.path);

    //注意：通过img标签引入我的图片资源，src=require('路径')
    //selected是否被选中：当前页面的地址是否等于item.path   当前页面的路径：路中组建的location中的pathname
    //selectedIcon: 选中时图片切换
    return (
       <div className="footer">
         <TabBar>
           {
             currNavList.map( (item ,index) => <Item
               key = {index}
               title={item.text}
               icon={<img className="footer-img" src={require(`./images/${item.icon}.png`)} alt={item.text}/> }
               onPress={this.redirectTo.bind(null, item.path)}
               selected={this.props.location.pathname === item.path}
               selectedIcon={<img className="footer-img" src={require(`./images/${item.icon}-selected.png`)} alt={item.text}/>}
             />)
           }
         </TabBar>
       </div>
    )
  }
}

// 包装非路由组建为路由组件(即能拥有路由组件的三大属性)
export default withRouter(Footer);

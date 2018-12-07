//个人中心页面：/personal

import React, {Component} from 'react';
import { List, Result, Button, WhiteSpace, Modal } from 'antd-mobile';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;

class Personal extends Component {
  static propTypes = {
    user : PropTypes.object.isRequired ,
    resetUserInfo : PropTypes.func.isRequired ,
    resetUserList : PropTypes.func.isRequired
  };

  //点击退出登录按钮：
  logout = () => {
    //提示确定是否退出登录
    alert('退出登录', '您确定要退出么???', [
      { text: '再想想', onPress: () => {} },
      { text: '去意已决', onPress: () => {
        //退出后回到登陆页面 /login
        this.props.history.push('/login');
        //清除所有的用户信息(本地清空，即为同步的更新状态数据)
        //思路：action中定义方法。personal组件通过容器组件获取方法。
        this.props.resetUserInfo();
        this.props.resetUserList();
        //清除cookie
        Cookies.remove('userid');
      } },
    ])

  };

  render () {
    const {type , username , company , post , info , salary ,header} = this.props.user ;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/头像${+header+1}.png`)} alt=""/>}
          title={username}
        />
        <List renderHeader={() => '相关信息'}>
          <Item
            multipleLine
            onClick={() => {}}
          >
            <Brief>职位：{post}</Brief>
            {company !== 'undefined' ? <Brief>公司：{company}</Brief> : null}
            {salary !== 'undefined' ? <Brief>月薪：{salary}</Brief> : null}
            <Brief>简介：{info}</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <Button
          type="warning"
          onClick={this.logout}
        >
          退出登录
        </Button>
      </div>
    )
  }
}

export default Personal;
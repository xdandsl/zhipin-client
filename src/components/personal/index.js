//个人中心页面：/personal

import React, {Component} from 'react';
import { List, Result, Button, WhiteSpace, Modal } from 'antd-mobile';
import Cookies from 'js-cookie';

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;

class Personal extends Component {

  //点击退出登录按钮：
  logout = () => {
    //提示确定是否退出登录
    alert('退出登录', '您确定要退出么???', [
      { text: '再想想', onPress: () => {} },
      { text: '去意已决', onPress: () => {
        //退出后回到登陆页面 /login
        this.props.history.push('/login')
        //清除所有的用户信息

        //清除cookie
        Cookies.remove('userid');
      } },
    ])

  };

  render () {
    return (
      <div>
        <Result
          img={<img src={require('../../assets/images/头像1.png')} alt=""/>}
          title="laoban001,即用户名"
          message={<div>公司尚硅谷</div>}
        />
        <List renderHeader={() => '相关信息'}>
          <Item
            multipleLine
            onClick={() => {}}
          >
            <Brief>职位：xxx</Brief>
            <Brief>简介：xxx</Brief>
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
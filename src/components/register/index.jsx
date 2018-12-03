//注册路由的逻辑

import React, {Component} from 'react';
//引入antd-mobile相关组件
import {NavBar , WingBlank ,List , InputItem ,WhiteSpace , Radio ,Button} from 'antd-mobile' ;
//引入logo组件
import Logo from '../logo/index' ;

const Item = List.Item;

class Register extends Component {
  //这个组件单独用，所以直接给register用
  state = {
    laoBan : true ,
    username : '' ,
    password : '' ,
    rePassWord : ''
  };

  //设置选中老板或者大神的逻辑：
  // handleChange = type  => {
  //   const {isLaoBan} = this.state ;
  //   //根据单选按钮radio的类型设置isLaoBan的状态
  //   //重点：如何知道选中的是哪个radio 。思路：传参
  //   if(type === 'daShen'){
  //     this.setState({
  //       isLaoBan : false
  //     })
  //   }else if(type === 'laoBan') {
  //     this.setState({
  //       isLaoBan : true
  //     })
  //   }
  // };

  // usernameChange = e => {
  //   const {username} = this.state ;
  //   const value = e.target.value.trim() ;
  //   this.setState({
  //     username : value
  //   })
  // };

  // passwordChange = e => {
  //   const {password} = this.state ;
  //   const value = e.target.value.trim() ;
  //   this.setState({
  //     password : value
  //   })
  // };

  // rePasswordChange = e => {
  //   const {rePassWord} = this.state ;
  //   const value = e.target.value.trim() ;
  //   this.setState({
  //     rePassWord : value
  //   })
  // };

  //步骤方法一样：(将获取用户名/密码/确认密码/的逻辑放到一起)都是根据值去更新状态
  handleChange = (type , value) => {
    this.setState({
      [type] : value
    })
  };


  //设置点击注册按钮的逻辑：
  register = () => {
    //获取用户名、密码、确认密码。发送ajax请求
    const {username ,password ,rePassWord} = this.state ;
    console.log(username ,password ,rePassWord)

  };
  //注意：点击已注册按钮逻辑
  goLogin = () => {
    //去登陆页面（不会产生历史纪录。由一个组件去另一个组件。）
    this.props.history.replace('/login')
    //有浏览历史记录
    // this.props.history.push('/login')
  };



  render () {
    let {laoBan} = this.state ;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            {/*val是InputItem onChange的事件中默认传的形参，代表当前值*/}
            <InputItem onChange = {val => this.handleChange('username',val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleChange('rePassWord',val)}>确认密码：</InputItem>
            <WhiteSpace/>
            <Item>
              用户类型：&nbsp;&nbsp;&nbsp;&nbsp;
              {/*checked代表radio选中状态。值为布尔值*/}
              <Radio checked = {!laoBan} onClick = {this.handleChange.bind(null , 'laoBan',false)}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked = {laoBan} onClick = {this.handleChange.bind(null , 'laoBan',true)}>老板</Radio>
            </Item>
            <WhiteSpace/>
            <Button type = 'primary' onClick = {this.register}>注册</Button>
            <Button onClick = {this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>


    )
  }
}

export default Register;
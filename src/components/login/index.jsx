//用户登陆界面

import React, {Component} from 'react';
import {NavBar , WingBlank , List , InputItem ,WhiteSpace ,Button} from 'antd-mobile' ;
import Logo from '../logo/index' ;
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom' ;

class Login extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };

  state = {
    username : '' ,
    password : ''
  };

  //2,根据用户名和密码去发送请求，判断是否有账户
  handleClick = (type , value) => {
    this.setState({
      [type] : value
    })
  };

  //3，点击登陆的逻辑(发送ajax的请求/去主页面main)
  goMain = async () => {
    const {username , password} = this.state ;
    console.log(username , password) ;
    this.props.login({username , password})
  };

  //1,点击还没有账户的逻辑：去注册页面
  goRegister = () => {
    this.props.history.replace('/register');
  };

  render () {
    const {errMsg , redirectTo} = this.props.user;

    if(redirectTo){
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <p className="err-msg">{errMsg}</p>
        <WingBlank>
          <List>
            <InputItem onChange = {val => this.handleClick('username', val)}>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange = {val => this.handleClick('password', val)}  type="password">密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace/>
            <Button type="primary" onClick = {this.goMain}>登陆</Button>
            <Button onClick={this.goRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login;
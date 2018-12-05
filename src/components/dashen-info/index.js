import React, {Component} from 'react';
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import HeaderSelector from '../header-selector';
import PropTypes from 'prop-types' ;
import {Redirect} from 'react-router-dom';

class DashenInfo extends Component {
  static propTypes = {
    update : PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  state = {
    header: '',
    post: '',
    info: '',
    type: 'dashen'
  };

  //在父组件定义更新状态方法
  setHeader = header => {
    this.setState({
      header
    })
  };

  //更新状态
  handleChange = (type, val) => {
    this.setState({
      [type]: val
    })
  };

  //点击保存按钮收集信息，发送ajax请求
  update = () => {
    //发送ajax请求（根据接口文档传递需要的数据）
    this.props.update(this.state) ;
  };

  render () {
    const {errMsg , redirectTo} = this.props.user;

    //这个是重定向。上来判断是否有redirectTo，如果有去重定向的地址
    if(redirectTo === '/dashen'){
      return <Redirect to={redirectTo} />
    }


    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <p className="err-msg">{errMsg}</p>
        <InputItem onChange={val => {this.handleChange('post', val)}}>求职岗位:</InputItem>
        <TextareaItem title="个人介绍:" rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='primary' onClick = {this.update} >保存</Button>
      </div>
    )
  }
}

export default DashenInfo;
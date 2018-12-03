
//logo组件

import React, {Component} from 'react';
//引入图片资源
import logo from './logo.png' ;
import './index.less'

class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Logo;
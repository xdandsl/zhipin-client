
//主组件
import React, {Component} from 'react';
import {Redirect , Route} from 'react-router-dom' ;
// import LaoBanInfo from '../laoban-info/index' ;
//引入容器组件 LaoBanInfo
import LaoBanInfo from '../../containers/laoban-info';

class Main extends Component {


  render () {
    return (
      <div>
        <Route path="/laobaninfo" component={LaoBanInfo}/>
      </div>
    )
  }
}

export default Main;
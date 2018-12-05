/**
 * 处理登陆逻辑的容器组件：
 */

import {connect} from 'react-redux';

import Login from '../components/login';
import {login} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {login}
)(Login);
/**
 * 大神个人信息完善容器组件
 */

import {connect} from 'react-redux';

import DashenInfo from '../components/dashen-info/index' ;
import {update} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {update}
)(DashenInfo);
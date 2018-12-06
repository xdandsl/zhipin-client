
//容器组件： main  统一管理状态数据，可以将所有的状态数据传递给组要的组件。
import {connect} from 'react-redux' ;
import Main from '../components/main/index';
import {getUserInfo} from '../redux/actions' ;

export default connect(
  state => ({user: state.user}),
  {getUserInfo}
)(Main);

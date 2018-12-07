import {connect} from 'react-redux' ;

//引入ui组件
import Personal from '../components/personal' ;
//引入action组件(异步的action对象。将异步的方法添加为ui组件下的属性)
import {resetUserInfo , resetUserList} from '../redux/actions' ;

//暴露容器组件(暴露注册的状态数据和将更新redux状态的方法)
export default connect(
  state => ({ user : state.user}),
  { resetUserInfo , resetUserList}
)(Personal);
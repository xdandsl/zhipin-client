
//根据之前的previousState状态和action对象来生成reducer函数。可能有多个

//用来合并多个reducer函数
import {combineReducers} from 'redux' ;
import{
  AUTH_SUCCESS ,
  AUTH_ERROR ,
  UPDATE_USER_INFO ,
  RESET_USER_INFO ,
  UPDATE_USER_LIST ,
  RESET_USER_LIST
}
  from './action-types' ;

const initXxxState = {
  username : '' ,
  _id: '' ,
  type: '' ,
  errMsg: '' ,
  redirectTo: '',
  header: '',
  post: '',
  company: '',
  salary: '',
  info: ''
};
function user(previousState = initXxxState , action) {
  switch (action.type){
    case AUTH_SUCCESS :
      //获取重定向的路径
      return {...action.data , redirectTo:getRedirectPath( action.data.type , action.data.header)} ;
    case AUTH_ERROR :
      return {...initXxxState , ...action.data} ;
    case UPDATE_USER_INFO :
      return {...action.data , redirectTo:getRedirectPath( action.data.type , action.data.header)} ;
    case RESET_USER_INFO :
      return {...initXxxState , ...action.data} ;
    default :
      return previousState
  }
}

const initYyyState = [];
function userList(previousState = initYyyState , action) {
  switch (action.type){
    case UPDATE_USER_LIST :
      return action.data ;
    case RESET_USER_LIST :
      return [] ;
    default :
      return previousState
  }
}

//默认暴露合并后的reducers函数
// {xxx: function xxx() {}, yyy: function yyy() {}}
export default combineReducers({
  user ,
  userList
})

function getRedirectPath(type,header) {
  let path = '';
  if(type === 'dashen'){
      path = '/dashen'
  }else if (type === 'laoban'){
    path = '/laoban'
  }
  if(!header){
    path += 'info'
  }
  return path ;
}



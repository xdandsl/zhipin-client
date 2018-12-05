
//根据之前的previousState状态和action对象来生成reducer函数。可能有多个

//用来合并多个reducer函数
import {combineReducers} from 'redux' ;
import {AUTH_SUCCESS , AUTH_ERROR} from './action-types' ;

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
    default :
      return previousState
  }
}

const initYyyState = {};
function yyy(previousState = initYyyState , action) {
  switch (action.type){
    default :
      return previousState
  }
}

//默认暴露合并后的reducers函数
// {xxx: function xxx() {}, yyy: function yyy() {}}
export default combineReducers({
  user
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



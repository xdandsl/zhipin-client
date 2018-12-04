
//根据之前的previousState状态和action对象来生成reducer函数。可能有多个

//用来合并多个reducer函数
import {combineReducers} from 'redux' ;
import {AUTH_SUCCESS , AUTH_ERROR} from './action-types' ;

const initXxxState = {
  username : '' ,
  _id: '' ,
  type: '' ,
  errMsg: ''
};
function user(previousState = initXxxState , action) {
  switch (action.type){
    case AUTH_SUCCESS :
      return action.data ;
    case AUTH_ERROR :
      return action.data ;
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




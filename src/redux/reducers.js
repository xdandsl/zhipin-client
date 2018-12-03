
//根据之前的previousState状态和action对象来生成reducer函数。可能有多个

//用来合并多个reducer函数
import {combineReducers} from 'redux' ;

const initXxxState = 0;
function xxx(previousState = initXxxState , action) {
  switch (action.type){
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

export default combineReducers({
  xxx ,
  yyy
})




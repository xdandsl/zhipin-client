//创建action对象

/*
 action creators模块：用来创建action对象的工厂函数模块
 - 同步action creator： 返回值是action对象
 - 异步action creator： 返回值是一个回调函数
 */

//目的：使用redux管理相关的数据状态。
import {reqRegister} from '../api/index' ;
import {AUTH_SUCCESS,AUTH_ERROR} from './action-types';

export const authSuccess = data => ({type :AUTH_SUCCESS , data});
export const authError = data => ({type :AUTH_ERROR , data});

//定义异步的action对象。
export const register = ({username , password , rePassword , type}) => {
  //不需要异步的方式。验证表单
  if(!username){
    return authError({errMsg: ' 请输入用户名'})
  }else if(!password){
    return authError({errMsg: '请输入密码'})
  }else if(password !== rePassword){
    return authError({errMsg: '两次输入密码不一致'})
  }

  return dispatch => {
    //发送ajax请求。请求成功/请求失败
    reqRegister({username , password , type})
      //请求成功
      .then(
        ({data}) => {
          if(data.code === 0){
            //注册成功（根据返回的数据的code值）
            dispatch(authSuccess(data.data))
          }else if(data.code === 1){
            //注册失败
            dispatch(authError({errMsg:data.msg}))
          }
        }
      )
      //请求失败
      .catch(
        err => {
          dispatch(authError({errMsg: '网络不稳定，请刷新重试'}))
        }
      )
  }
};
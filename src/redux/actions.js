//创建action对象

/*
 action creators模块：用来创建action对象的工厂函数模块
 - 同步action creator： 返回值是action对象
 - 异步action creator： 返回值是一个回调函数
 */

//目的：使用redux管理相关的数据状态。
import {reqRegister , reqLogin , reqUpdate} from '../api/index' ;
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

//定义异步的action对象处理登陆逻辑。
export const login = ({username , password}) => {
  //表单验证
  if (!username) {
    return authError({errMsg: '请输入用户名'});
  } else if (!password) {
    return authError({errMsg: '请输入密码'});
  }

  return dispatch => {
    reqLogin({username , password})
      .then(
        //请求成功
        ({data}) => {
          if(data.code === 0){
            dispatch(authSuccess(data.data))
          }else{
            dispatch(authError({errMsg: data.msg}))
          }
        }
      )
      .catch(
        //请求失败
        err => {
          dispatch(authError({errMsg: '网络错误，请刷新试试~'}));
        }
      )
  }
};

//定义异步的action对象处理个人登陆信息逻辑
export const update = ({header , post , company , salary ,info , type}) => {
  //表单验证
  if(!header){
    return authError({errMsg : '请选择头像'})
  }else if(!post){
    return authError({errMsg : type === 'laoban' ? '请选择招聘职位' : '请选择求职岗位'})
  }else if(type === 'laoban' && !company){
    return authError({errMsg : '请选择公司'})
  }else if(type === 'laoban' && !salary){
    return authError({errMsg : '请选择薪资'})
  }else if(!info){
    return authError({errMsg :  type === 'laoban' ?  '请填写职位描述' : '请填写个人介绍' })
  }
  
  //异步的action对象
  return dispatch => {
    //发送请求
    reqUpdate({header , post , company , salary , info})
      .then(
        ({data}) => {
          //成功的响应(把请求回来的数据添加到我的redux中，通过分发action对象的形式)
          if(data.code === 0){
            dispatch(authSuccess(data.data))
          }else{
            //失败的响应
            dispatch(authError({errMsg : data.msg}))
          }
        }
      )
      .catch(
        //请求失败
        dispatch(authError({errMsg : '网络不稳定，请稍后重试'}))
      )
  }
  
};
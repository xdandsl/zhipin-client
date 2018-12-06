/**
 * 发送所有的ajax的请求
 */

import ajax from './ajax' ;

//开发中跨域服务器代理处理方法：（项目运行时通过cors和jsonp方法）
// 1，package.json添加 "proxy": "http://localhost:4000" ，后面为服务器代理要请求的地址
//2，页面的请求地址为/XXX ，不用加http等内容。避开了ajax请求。
const profix = '';

//发送注册请求，接收数据(暴露给注册组件，从而传递数据发送请求)
export const reqRegister = data => ajax('POST' ,`${profix}/register` ,data );

//发送登录请求
export const reqLogin = data => ajax('POST',`${profix}/login` ,data  );

//发送个人信息完善的请求（老板大神都需要完善）
export const reqUpdate = data => ajax('POST' , `${profix}/update` , data);

//发送用户信息的请求
export const reqGetUserInfo = () => ajax('GET' , `${profix}/user`);

export const reqGetUserList = type => ajax('GET' , `${profix}/userlist` , {type});
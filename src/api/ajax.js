/**
 * 定义ajax请求模块
 * 作用：需要发送ajax请求时直接调用即可，传递请求参数
 */

import axios from 'axios' ;

export default async function (method = 'GET' , url  , data) {
  //1,处理请求参数。get方式和post请求方式的发送的请求内容位置不一样（查询字符串和body请求体）
  let qs = '';
  if(data){
    //将对象的属性提取出来放到数组当中
    const arr = Object.keys(data);
    //想要得到key=value&key=value&等多个拼接在一起的值
    arr.forEach(item => {
      qs += `${item}=${data[item]}&`
    })
    //去掉最后一个&(切割字符串：起始位置，结束位置)
    qs = qs.substring( 0 ,qs.length-1);
  }
  //2，发送请求根据请求方式
  const type = method.toUpperCase();
  if(type === 'GET'){
    //发送GET请求
    return  axios.get(`${url}?${qs}`) ;
    //将得到的响应数据返回出去
    //result:
    //成功:
    // {
    //   "code": 0,
    //   "data": {
    //   "_id": "5ae133e621388d262c8d91a6",
    //     "username": "ds2",
    //     "type": "dashen"
    // }
    // }
    // 失败
    // {
    //   "code": 1,
    //   "msg": "此用户已存在"
    // }
  }else if(type === 'POST'){
    //发送post请求(注意请求方式)
    return  axios.post(url , qs , {
      'content-type': 'application/x-www-form-urlencoded'
    })

  }
}

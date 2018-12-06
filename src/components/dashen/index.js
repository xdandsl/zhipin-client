
//老板的主页面：路径为/laoban
import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';


class Dashen extends Component {
  static propTypes = {
    userList : PropTypes.array.isRequired ,
    getUserList : PropTypes.func.isRequired
  };

  //请求所有的大神数据
  componentDidMount(){
    //防止在三个页面间切换的时候的出现多次请求数据（因为如果不判断就会出现切换一次，请求一次数据）
    if(!this.props.userList.length){
      //发送请求(传type)
      this.props.getUserList('laoban');

    }
  }

  render () {
    //过滤掉没有头像等数据的对象
    const userList = this.props.userList.filter(item => item.header);

    return (
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          {
            userList.map((item,index) => {
             return(<div key={index}>
               <Card>
                 <Card.Header
                   thumb={require(`../../assets/images/头像${+item.header+1}.png`)}
                   extra={<span>{item.username}</span>}
                 />
                 <Card.Body>
                   <div>职位：{item.post}</div>
                   <div>公司：{item.company}</div>
                   <div>月薪：{item.salary}</div>
                   <div>描述：{item.info}</div>
                 </Card.Body>
                 <WhiteSpace size="lg" />
               </Card>
             </div>)
            })
          }
        </WingBlank>
      </div>
    )
  }
}

export default Dashen;